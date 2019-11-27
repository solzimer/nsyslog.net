# include

La propiedad *include* sirve para separar una configuración en diversos ficheros que se incluyan entre ellos, y así poder cumplir con dos propósitos principales:
* Evitar que un fichero de configuración sea demasiado grande y complejo de gestionar
* Crear configuraciones reutilizables mediante composición de ficheros

## Ejemplo

logagent.json
```json
{
	"include" : [
		"common_tasks.json",
	],

	"inputs" : {
		"file" : {
			"type" : "file",
			"config" : {
				"path" : "/var/log/*"
			}
		}		
	},

	"transporters" : {
			"logger" : {
				"type" : "console",
				"config" : {
					"format" : "${JSON}"
				}
			}
	},

	"flows" : [
		{"from":"*", "processors":"$common", "transporters":"logger"}
	]
}
```

common_tasks.json:
```json
{
	"processors" : {
		"parser" : {
			"type" : "syslogparser",
		},
		"keyval" : {
			"type" : "keyvalparser",
			"config" : {
				"input" : "${syslog.message}",
				"output" : "fields"
			}
		},
		"filter" : {
			"type" : "properties",
			"when" : {
				"filter" : { "fields.ipaddr": { "$ne" : "127.0.0.1" } },
				"match" : "process",
				"nomatch" : "block"
			}
		}
	},

	"processorGroups" : {
		"common" : ["parser", "keyval", "filter"]
	}
}
```

En este ejemplo, hemos separado la configuración en dos ficheros; un fichero principal (logagent.json), y un segundo fichero de procesadores reutilizable (common_tasks.json).

## namespaces y resolución de conflictos
Los *namespaces* (espacios de nombres), permiten encapsular los componentes definidos en un fichero bajo un identificador común y único, para evitar conflictos con otros componentes incluidos desde otros ficheros y que puedan tener id's de componentes idénticos.

Por ejemplo:
include1.json
```json
{
	"processors" : {
		"parser" : {
			"type" : "jsonparser",
			"config" : {
				"input" : "${originalMessage}",
				"output" : "json"
			}
		}
		....
	}
}
```
include2.json
```json
{
	"processors" : {
		"parser" : {
			"type" : "syslogparser",
			"config" : {
				"input" : "${originalMessage}"
			}
		}
		....
	}
}
```

logagent.json:
```json
{
	"include" : [
		"include1.json",
		"include2.json"
	]

	...
}
```

Existe un conflicto puesto que dos ficheros han declarado dos procesadores distintos pero con el mismo identificador ("parser"). Cuando la configuración se lea, sólo uno de ellos será efectivo (el otro quedará sobrescrito), y la configuración tendrá un comportamiento no deseado.

Lamentablemente, a día de hoy nsyslog no soporta todavía el uso de *namespaces*, aunque se está trabajando duramente en ello. Mientras tanto, las única recomendación que podemos dar es:

* Siempre usar ID's de componentes claramente diferenciados (pseudo *namespaces*)

```json
{
	"processors" : {
		"proc:common:json:parser" : {
			"type" : "jsonparser",
			...
		}
	}
}
```

De esta forma trataremos de asegurarnos que no haya conflictos, además de sentar las bases para una futura implentación de *namespaces* en nsyslog.

## Múltiple inclusión
nsyslog procesa los ficheros de configuración mediante el siguiente flujo:
1. Lee el fichero principal
2. Parsea el contenido a JSON
3. Busca el elemento "include"
4. Lee los ficheros contenidos en el campo "include" y los parsea
5. Combina el fichero principal con los ficheros hijo
6. Repite el proceso desde el punto 3 con el nuevo fichero combinado

Como se puede apreciar, no es un proceso en el que cada fichero tiene su propio ámbito, sino que basta incluir una sola vez un fichero para que su contenido sea accesible desde los demás ficheros referenciados, sea cual sea el nivel en el que fueron incluidos. Dicho de otra forma, nsyslog simplemente genera un "gran" fichero resultado de combinar todos aquellos que en algún momento han sido referenciados desde un elemento "include".
