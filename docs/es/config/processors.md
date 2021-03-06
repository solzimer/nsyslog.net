# Procesadores

El elemento *processors* permite instanciar los componentes de proceso (procesadores):

### Ejemplo

logagent.json
```json
{
	"processors" : {
		"parse_timestamp" : {
			"type" : "timestamp",
			"config" : {
				"input" : "${syslog.ts}",
				"format" : "YYYY-MM-DD HH:mm:ss",
				"output" : "timestamp"
			}
		},
		"set_data" : {
			"type" : "properties",
			"config" : {
				"extend" : true,
				"set" : {
					"data" : {
						"app" : "nsyslog",
						"host" : "${originalMessage.host}",
						"port" : "${originalMessage.port}"
					}
				}
			}
		}
	}
	...
}
```

## Parámetros

Todos los elementos de proceso (*processor*) siguen el esquema de [componente](./components), por lo que se definen con un ID / alias (*parse_timestamp*, *set_data*...) y tienen el siguiente esquema de configuración:

* **type** : El tipo de *processor*. Puedes ver todos los tipos disponibles de forma nativa en nsyslog en el apartado de [processors](../processors/index). Como se verá más adelante, esposible extender y crear nuevos procesadores más allá de los definidos por nsyslog.
* **when** : Define un filtro para la salida de los datos. Para más información sobre los filtros, vea el apartado de filtros de [componentes](./components)
* **disabled** : (*true* / *false*) Deshabilita el componente, de forma que nunca será instanciado ni usado por ningún flujo.
* **config** : Un objeto que define los parámetros de configuración de cada *processor*. Estos parámetros son específicos de cada componente.

## Instancias

Cada vez que se declara un *processor* en el apartado de *processors*, se genera una nueva instancia del componente con sus propios parámetros de configuración; así, es posible declarar distintas instancias de un mismo tipo:

### Ejemplo
```json
{
	"processors" : {
		"set_data" : {
			"type" : "properties",
			"config" : {
				"extend" : true,
				"set" : {
					"data" : {
						"app" : "nsyslog",
						"host" : "${originalMessage.host}",
						"port" : "${originalMessage.port}"
					}
				}
			}
		},
		"set_severity" : {
			"type" : "properties",
			"when" : {
				"filter" : "${data.port}==443",
				"match" : "process",
				"nomatch" : "bypass"
			},
			"config" : {
				"extend" : true,
				"set" : {
					"sev" : 5
				}
			}
		}
	}
	...
}
```

Son dos instancias de un *processor* tipo *properties* (establecer propiedades)

## Grupos
A veces es conveniente agrupar un conjunto de procesadores bajo un solo ID, de forma que sea más sencillo referenciar múltiples veces ese grupo. Por ejemplo, si tenemos la siguiente configuración:

```json
{
	"processors" : {
		"syslogparser" : { ... },
		"jsonparser" : { ... },
		"dateparser" : { ... },
		"csvout" : { ... }
	},

	"flows" : [
		{
			"id":"flow1",
			"from":"file1",
			"processors": ["syslogparser","jsonparser","dateparser","csvout"]
		},
		{
			"id":"flow2",
			"from":"file2",
			"processors": ["syslogparser","jsonparser","dateparser","csvout"]
		}
	]
}
```

Tenemos dos flujos que deben referenciar los mismos procesadores; cualquier cambio en uno, afecta también al otro. Parece más sencillo y mantenible crear un grupo:
```json
{
	"processors" : {
		"syslogparser" : { ... },
		"jsonparser" : { ... },
		"dateparser" : { ... },
		"csvout" : { ... }
	},

	"processorGroups" : {
		"parser" : ["syslogparser","jsonparser","dateparser","csvout"]
	},

	"flows" : [
		{
			"id":"flow1",
			"from":"file1",
			"processors": ["$parser"]
		},
		{
			"id":"flow2",
			"from":"file2",
			"processors": ["$parser"]
		}
	]
}
```

Los grupos son referenciados por su ID, precedido del símbolo **&dollar;** (como **$parser**, en este caso concreto).

Para obtener información más detallada sobre procesadores, puedes acceder a su [apartado correspondiente](../processors/index.md)
