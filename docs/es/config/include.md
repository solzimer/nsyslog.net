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

## namespaces
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

Existe un conflicto puesto que dos ficheros han declarado dos procesadores distintos pero con el mismo identificador ("parser"). Cuando la configuración se lea, sólo uno de ellos será efectivo (el otro quedará sobrescrito), y la configuración podrá tener un comportamiento no deseado.

Para evitarlo podemos recurrir a los *namespaces*. Existen dos formas de declarar y usar un namespaces:

* namespace intrínseco: El fichero define su propio namespace, y por lo tanto es obligatorio conocerlo y utilizarlo.
* namespace extrínseco: Se define al incluir el fichero.

Es posible usar cualquier combinación de los dos métodos, siendo acumulativos.
