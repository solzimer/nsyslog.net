# Ejemplo 1: Servidor de syslog

Nuestra guía empieza con un ejemplo básico que hace honor al propio nombre de nsyslog: Un servidor de syslog.

Para ello, vamos a crear un fichero "logagent.json" con el siguiente contenido:

## logagent.json

```json
{
	"inputs" : {
		"syslog_server" : {
			"type" : "syslog",
			"config" : {
				"url" : "udp://localhost:514"
			}
		}
	},

	"processors" : {
		"parser" : {
			"type" : "syslogparser"
		},
		"date" : {
			"type" : "dateformat",
			"config" : {
				"input" : "${timestamp}",
				"format" : "YYYY-MM-DD",
				"output" : "date"
			}
		}
	},

	"transporters" : {
		"logger" : {
			"type" : "file",
			"config" : {
				"path" : "/var/log/${date}/${client.address}/${syslog.host}/${syslog.appName}.log",
				"format" : "${originalMessage}"
			}
		}
	},

	"flows" : [
		{"from":"syslog_server", "processors":["parser","date"], "transporters":"logger"}
	]
}
```

### Fuentes
Se define una fuente de entrada en el apartado **inputs** :
```json
{
	"inputs" : {
		"syslog_server" : {
			"type" : "syslog",
			"config" : {
				"url" : "udp://localhost:514"
			}
		}
	}
}
```
Esta fuente, de tipo [syslog](../inputs/syslog.md), levantará un servidor UPD bajo el puerto 514 a la escucha de mensajes syslog.

### Procesadores
A continuación se crean dos procesadores:
```json
{
	"processors" : {
		"parser" : {
			"type" : "syslogparser"
		},
		"date" : {
			"type" : "dateformat",
			"config" : {
				"input" : "${timestamp}",
				"format" : "YYYY-MM-DD",
				"output" : "date"
			}
		}
	}
}
```
El primer procesador, **parser**, de tipo [syslogparser](../processors/syslogparser.md), será el encargado de parsear los mensajes syslog entrantes, siempre que cumplan (o más o menos cumplan) cualquiera de los formatos estandar de syslog.

El segundo procesador, **date**, de tipo [dateformat](../processors/dateformat.md), crea una nueva propiedad (date), que contiene la fecha formateada como "AÑO-MES-DIA", usando para ello el campo "timestamp" del dato de entrada.

### Transportes
Se configura un transporte a fichero:
```json
{
	"transporters" : {
		"logger" : {
			"type" : "file",
			"config" : {
				"path" : "/var/log/${date}/${client.address}/${syslog.host}/${syslog.appName}.log",
				"format" : "${originalMessage}"
			}
		}
	}
}
```

Dicho transporte **logger**, de tipo [file](../transporters/file.md), escribirá el mensaje original (el campo *originalMessage*) bajo la ruta indicada en el campo *path*, el cual contiene una [expresión](../config/expressions.md) dinámica que variará según los atributos de los datos de entrada.
