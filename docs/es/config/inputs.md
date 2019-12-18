# Entradas

El elemento *inputs* permite instanciar los componentes de entrada:

### Ejemplo

logagent.json
```json
{
	"inputs" : {
		"reader1" : {
			"type" : "file",
			"config" : {
				"path" : "/var/log/*.log"
			}
		},
		"reader2" : {
			"type" : "syslog",
			"config" : {
				"url" : "udp://localhost:514"
			}
		}
	}
	...
}
```

## Parámetros

Todos los elementos de entrada (*input*) siguen el esquema de [componente](./components), por lo que se definen con un ID / alias (*reader1*, *reader2*...) y tienen el siguiente esquema de configuración:

* **type** : El tipo de *input*. Puedes ver todos los tipos disponibles de forma nativa en nsyslog en el apartado de [inputs](../inputs/index). Como se verá más adelante, esposible extender y crear nuevos inputs más allá de los definidos por nsyslog.
* **when** : Define un filtro para la salida de los datos. Para más información sobre los filtros, vea el apartado de filtros de [componentes](./components)
* **disabled** : (*true* / *false*) Deshabilita el componente, de forma que nunca será instanciado ni usado por ningún flujo.
* **config** : Un objeto que define los parámetros de configuración de cada *input*. Estos parámetros son específicos de cada componente.

## Instancias

Cada vez que se declara un *input* en el apartado de *inputs*, se genera una nueva instancia del componente con sus propios parámetros de configuración; así, es posible declarar distintas instancias de un mismo tipo:

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

Son dos instancias de un *input* tipo *file* (Lectura de ficheros), cada uno con su propia configuración.
