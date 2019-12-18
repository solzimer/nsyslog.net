# Transportes

El elemento *transporters* permite instanciar los componentes de transporte:

### Ejemplo

logagent.json
```json
{
	"transporters" : {
		"save_files" : {
			"type" : "file",
			"config" : {
				"path" : "/var/log/${date}/${app}.log",
				"format" : "${timestamp} ${level} ${message}"
			}
		},
		"save_mongo" : {
			"type" : "mongo",
			"config" : {
				"url" : "mongo://localhost/logdata",
				"collection" : "logs",
				"format" : "${JSON}"
			}
		}
	}
	...
}
```

## Parámetros

Todos los elementos de transporte (*transporter*) siguen el esquema de [componente](./components), por lo que se definen con un ID / alias (*save_files*, *save_mongo*...) y tienen el siguiente esquema de configuración:

* **type** : El tipo de *transporter*. Puedes ver todos los tipos disponibles de forma nativa en nsyslog en el apartado de [transporters](../transporters/index). Como se verá más adelante, esposible extender y crear nuevos transportes más allá de los definidos por nsyslog.
* **when** : Define un filtro para la salida de los datos. Para más información sobre los filtros, vea el apartado de filtros de [componentes](./components.md)
* **disabled** : (*true* / *false*) Deshabilita el componente, de forma que nunca será instanciado ni usado por ningún flujo.
* **config** : Un objeto que define los parámetros de configuración de cada *transporter*. Estos parámetros son específicos de cada componente.

## Instancias

Cada vez que se declara un *transporter* en el apartado de *transporters*, se genera una nueva instancia del componente con sus propios parámetros de configuración; así, es posible declarar distintas instancias de un mismo tipo:

### Ejemplo
```json
{
	"processors" : {
		"save_root_files" : {
			"type" : "file",
			"when" : {
				"filter" : "${username}=='root'",
				"match" : "process",
				"nomatch" : "bypass"
			},
			"config" : {
				"path" : "/var/log/${date}/${app}.log",
				"format" : "${timestamp} ${level} ${message}"
			}
		},
		"save_user_files" : {
			"type" : "file",
			"when" : {
				"filter" : "${username}!='root'",
				"match" : "process",
				"nomatch" : "bypass"
			},
			"config" : {
				"path" : "/home/${username}/log/${date}/${app}.log",
				"format" : "${timestamp} ${level} ${message}"
			}
		}
	}
	...
}
```

Son dos instancias de un *transporter* tipo *file* (guardar datos en fichero)

## Grupos
A veces es conveniente agrupar un conjunto de transportes bajo un solo ID, de forma que sea más sencillo referenciar múltiples veces ese grupo. Por ejemplo, si tenemos la siguiente configuración:

```json
{
	"transporters" : {
		"syslogudp" : { ... },
		"syslogtcp" : { ... },
		"redis" : { ... },
		"file" : { ... }
	},

	"flows" : [
		{
			"id":"flow1",
			"from":"file1",
			"transporters": ["syslogudp","syslogtcp","redis","file"]
		},
		{
			"id":"flow2",
			"from":"file2",
			"transporters": ["syslogudp","syslogtcp","redis","file"]
		}
	]
}
```

Tenemos dos flujos que deben referenciar los mismos transportes; cualquier cambio en uno, afecta también al otro. Parece más sencillo y mantenible crear un grupo:
```json
{
	"transporters" : {
		"syslogudp" : { ... },
		"syslogtcp" : { ... },
		"redis" : { ... },
		"file" : { ... }
	},

	"transporterGroups" : {
		"network" : {
			"mode" : "parallel",
			"transporters" : ["syslogudp","syslogtcp","redis"]
		}
	},

	"flows" : [
		{
			"id":"flow1",
			"from":"file1",
			"transporters": ["$network","file"]
		},
		{
			"id":"flow2",
			"from":"file2",
			"transporters": ["$network","file"]
		}
	]
}
```

Los grupos son referenciados por su ID, precedido del símbolo **&dollar;** (como **$network**, en este caso concreto).

A diferencia de los grupos de procesadores, los transporters añaden un nuevo parámetro, **mode**, el cual define el comportamiento del grupo. Puede tomar dos valores:
* **serial**: Los transportes son ejecutados en serie, uno detrás de otro en el mismo orden en que han sido declarados en el grupo.
* **parallel**: Los transportes son ejecutados de forma simultánea en paralelo.

Para obtener información más detallada sobre transportes, puedes acceder a su [apartado correspondiente](../transporters/index.md)
