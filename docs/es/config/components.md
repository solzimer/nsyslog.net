# Componentes

Nsyslog se basa en una arquitectura modular de componentes, los cuales se encargan de recibir unos datos de entrada, procesarlos, y generar unos datos de salida. Cada componente tiene un ID / alias, y un tipo, el cual identifica su función.

Existen tres categorías de componentes:
* **Input** : Componentes para entrada de datos. Se encargan de leer datos de origines y generar datos de entrada para su posterior proceso.
* **Processor** : Componentes para proceso de datos. Reciben un dato de entrada, lo transforman y emiten nuevos datos derivados de éste.
* **Transporter** : Componentes para el transporte de datos. Reciben un dato de entrada y lo envían a sus destinos.

Si bien estas tres categorías difieren en su función principal, todas comparten un modelo de configuración común, el cual se expresa siguiendo el siguiente esquema:

```json
"<ID/Alias>" : {
	"type" : "<Type>",
	"disabled" : "<true / false>",
	"attach" : ["<flow_list>"],
	"when" : {
		"filter" : "<Eval Expression>",
		"match" : "<process, block, bypass>",
		"nomatch" : "<process, block, bypass>"
	},
	"then" : {
		"filter" : "<Eval Expression>",
		"match" : "<process, block>",
		"nomatch" : "<process, block>"
	},
	"config" : {
		"<prop1>" : "<val1>",
		...
		"<propn>" : "<valn>"
	}
}
```

## ID / Alias
El ID o Alias es el identificador que hace referencia a una instancia de un componente. Puede ser cualquier nombre que siga las reglas de los nombres de propiedades JSON, y es de libre asignación.

### Ejemplo
```json
{
	"inputs" : {
		"reader_file1" : {
			"type" : "file",
			"config" : {
				"path" : "/var/log/*.log"
			}
		},
		"reader_file2" : {
			"type" : "file",
			"when" : {
				"filter" : "/Exception/.test(${originalMessage})",
				"match" : "process",
				"nomatch" : "block"
			},
			"config" : {
				"path" : "/home/user/logs/*.log"
			}
		}
	}
	...
}
```
En este ejemplo se han declarado dos componentes de categoría *input*, ambos de tipo *file* (lectura de fichero). Aunque sean del mismo tipo, al usar dos IDs distintos (reader_file1, reader_file2), se generan dos instancias diferentes, cada una con su propia configuración.

## type
La propiedad *type* indica el tipo de componente. NSyslog incluye de forma nativa un amplio catálogo de entradas, procesadores y transportes. En el ejemplo anterior hemos usados dos entradas de tipo *file* (lectura de fichero).

## disabled
Deshabilita un componente, de forma que nunca es instanciado y, por lo tanto, su uso es totalmente ignorado por el motor de NSyslog. Cuando esto ocurre, el componente pasa a convertirse en un *bypass*, esto es, los datos de entrada pasan sin más al siguiente elemento de proceso, ignorando la existencia del componente deshabilitado.

## attach
Esta propiedad sólo está disponible en los componentes de entrada (*input*), y su función es la de ligar éstos directamente a unos determinados flujos. Es una característica usada, fundamentalmente, en los flujos bifurcados (*forked flows*), como se verá más adelante.

## when
La misión de esta propiedad es realizar un filtrado de los datos antes de ser procesados. Esta propiedad sólo está disponible en componentes *processor* y *transporter*, ya que en los *input* los datos son generados por éste (no hay entrada previa de datos).

### Ejemplo
