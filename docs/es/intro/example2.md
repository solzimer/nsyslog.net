# Ejemplo 2: Lectura y parseo de fichero CSV

El siguiente ejemplo consiste en leer un fichero en formato CSV, parsear su contenido, y almacenarlo en una colección de MongoDB:

## logagent.json

```json
{
	"inputs" : {
		"csv_file" : {
			"type" : "file",
			"config" : {
				"path" : "examples/config/data/csv002.csv",
				"mode" : "watermark",
				"offset" : "start"
			}
		}
	},

	"processors" : {
		"parser" : {
			"type" : "csvparser",
			"config" : {
				"input" : "${originalMessage}",
				"output" : "fields",
				"options" : {
					"delimiter" : ", ",
					"columns" : true
				}
			}
		}
	},

	"transporters" : {
		"db_store" : {
			"type" : "mongo",
			"config" : {
				"url" : "mongodb://localhost/nsyslog",
				"collection" : "csvdata",
				"format" : "${fields}"
			}
		}
	},

	"flows" : [
		{"from":"csv_file", "processors":["parser"], "transporters":"db_store"}
	]
}
```

### Fuentes
Se define una fuente de entrada en el apartado **inputs** :
```json
{
	"inputs" : {
		"csv_file" : {
			"type" : "file",
			"config" : {
				"path" : "examples/config/data/csv002.csv",
				"mode" : "watermark",
				"offset" : "start"
			}
		}
	}
}
```
Esta fuente, de tipo [file](../inputs/file.md), leerá un fichero CSV, línea a línea. Aunque en el enlace anterior se puede ver con más detalle el funcionamiento de las fuentes tipo *file*, veamos cual va a ser su comportamiento en este caso:
* **path**: Sólo queremos leer un determinado fichero, así que establecemos su ruta.
* **mode**: Usamos el modo *watermark*; esto significa que la fuente irá almacenando en disco la posición de lectura, de forma que si reiniciamos nsyslog, la fuente recordará la posición previa y seguirá leyendo el fichero en el mismo punto donde se quedó.
* **offset**: Desde dónde se empieza a leer un nuevo fichero. En este caso, desde el principio.

### Procesadores
A continuación se crea un procesador:
```json
{
	"processors" : {
		"parser" : {
			"type" : "csvparser",
			"config" : {
				"input" : "${originalMessage}",
				"output" : "fields",
				"options" : {
					"delimiter" : ", ",
					"columns" : true
				}
			}
		}
	}
}
```
Este procesador, **parser**, de tipo [csvparser](../processors/csvparser.md), será el encargado de parsear líneas en formato CSV y transformarlas a objetos JSON. Su configuración es:
* **input**: Aquí se usa una [expresión](expressions.md) para indicar que la línea está contenida en el campo *originalMessage* del dato de entrada.
* **output**: El campo donde almacenar el resultado del parseo.
* **delimiter**: Las columnas de una fila CSV están separadas por coma.
* **columns**: Queremos que el resultado no sea un simple array de valores, sino un objeto completo cuyos atributos coincidan con los nombres de los campos de cada columna. Para ello, el parser usará la primera fila del fichero CSV para obtener los nombres de las columnas.

### Transportes
Se configura un transporte a MongoDB:
```json
{
	"transporters" : {
		"db_store" : {
			"type" : "mongo",
			"config" : {
				"url" : "mongodb://localhost/nsyslog",
				"collection" : "csvdata",
				"format" : "${fields}"
			}
		}
	}
}
```

Dicho transporte **db_store**, de tipo [mongo](../transporters/mongo.md), escribirá el campo *fields* (donde están almacenados los valores de cada fila CSV) en una colección de MongoDB (csvdata).

### Flujo
Por último, al igual que en el [Ejemplo 1](example1.md), se define el flujo:
```json
{
	"flows" : [
		{"from":"csv_file", "processors":["parser"], "transporters":"db_store"}
	]
}
```

## Ejecución
Puedes descargar el fichero CSV de ejemplo: [csv002.csv](/assets/csv002.csv)

A continuación, ejecutamos nsyslog desde la línea de comandos:
```bash
nsyslog -f logagent.json
```

Podemos comprobar como, en nuestra base de datos **"nsyslog"** de MongoDB, existe una colección llamada **"csvdata"** que contiene datos tal que:
```shell
$ mongo
> use nsyslog
switched to db nsyslog
> show collections
csvdata
> db.csvdata.findOne()
```
```javascript
{
	"_id" : ObjectId("5d93cc3f77d1b8f3768e9e5d"),
	"age" : "32",
	"workclass" : "Federal-gov",
	"fnlwgt" : "249409",
	"education" : "HS-grad",
	"education-num" : "9",
	"marital-status" : "Never-married",
	"occupation" : "Other-service",
	"relationship" : "Own-child",
	"race" : "Black",
	"sex" : "Male",
	"capital-gain" : "0",
	"capital-loss" : "0",
	"hours-per-week" : "40",
	"native-country" : "United-States",
	"income" : "<=50K"
}

```
