# Componentes

Nsyslog se basa en una arquitectura modular de componentes, los cuales se encargan de recibir unos datos de entrada, procesarlos, y generar unos datos de salida. Cada componente tiene un ID / alias, y un tipo.

Existen tres tipos de componentes:

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
* **when** : Define un filtro para la salida de los datos. Para más información sobre los filtros, vea el apartado de filtros de [componentes](./components)
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
