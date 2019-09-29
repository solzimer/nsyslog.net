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

### Flujo
Por último, juntamos todas las piezas en un flujo:
```json
{
	"flows" : [
		{"from":"syslog_server", "processors":["parser","date"], "transporters":"logger"}
	]
}
```
El flujo define qué datos queremos leer, cómo procesarlos, y a donde enviarlos finalmente. En este caso, queremos leer específicamente los datos de la fuente *syslog_server*, procesarlos con los procesadores *parser* y *date*, y por último, escribirlos en fichero con el transporte *logger*

## Ejecución
Podemos ejecutar nsyslog desde la línea de comandos:
```bash
nsyslog -f logagent.json
```

Y probarlo mandando líneas de log en formato syslog:
```bash
nc -w0 -u 127.0.0.1 514 <<< "<65>Feb 25 10:00:00 localhost nsyslog: Hello world"
```

**Nota:** *nc* es un comando disponible tanto en Linux como en MacOS. En Windows puedes descargarlo [aquí](http://nc110.sourceforge.net/)

Ahora, si accedemos a la ruta */var/log/2019-09-29/127.0.0.1/localhost* veremos que se ha creado el fichero *nsyslog.log* con el contenido del mensaje.

## Depuración
Podemos usar el modo [CLI](cli.md) para depurar qué ocurre en cada componente que se ejecuta en nsyslog. En caso de que algo no funcione como esperamos, el modo CLI nos permitirá hacer un análisis de las entradas y salidas de cada componente.

Para ello, basta con ejecutar nsyslog con el modo CLI activo:
```bash
nsyslog -f logagent.json --cli
```

Ahora, en vez de ejecutarse directamente nsyslog, aparecerá una linea de comandos interactiva:
```bash
info: Reading configuration file "logagent.json"
info: Valid config file
info: Config loaded!
info: PushStream piped to InputStream
info: PullStream piped to InputStream
nsyslog>
```

Podemos usar el comando *help* para ver la lista de comandos disponibles:
```bash
nsyslog> help

  Commands:

    help [command...]           Provides help for a given command.
    exit                        Exits application.
    input [options] <id>        Prints output entries for Input Components
    processor [options] <id>    Prints input/acked/output entries for Processor Components
    transporter [options] <id>  Prints input/output for Transporter Components
    stats [interval]            Prints statistics. Interval: Optional, refresh seconds
    config                      Prints complete config file
    reload                      Reload configuration
    start                       Starts flows
    stop                        Stop flows
    pause                       Pause flows
    resume                      Resume flows

nsyslog>
```

Activaremos la impresión de datos para la salida de la fuente *syslog_server*
```bash
nsyslog> input syslog_server -o

********* Press Q to cancel *********


nsyslog>
```

Y para la salida del procesador *parser*
```bash
nsyslog> processor parser -o

********* Press Q to cancel *********


nsyslog>
```

Finalmente iniciamos el motor de nsyslog:
```bash
nsyslog> start
info: Server bind for process 58977 pid=58977, host=/tmp/nsyslog_58977, host=0.0.0.0, port=62670
info: Init_0 piped to parser
info: parser piped to date
info: date piped to End_1
info: Null_2 piped to logger
info: logger piped to End_3
info: Flow_0_Entry_Point piped to Init_0
info: date piped to Null_2
info: InputStream piped to Flow_0_Entry_Point
info: Process 58977 registers flows: 0=Flow_0
info: All modules started successfuly

********* Press Q to cancel *********



********* Press Q to cancel *********


nsyslog>
```

Ahora, podremos monitorizar cómo son los datos que generan tanto *syslog_server* como *parser*. Si mandamos una línea de log:

```bash
nc -w0 -u 127.0.0.1 514 <<< "<65>Feb 25 10:00:00 localhost nsyslog: Hello world"
```

La salida del CLI mostrará:
```json
InputStream - syslog_server - output: {
  "timestamp": 1569748283647,
  "originalMessage": "<65>Feb 25 10:00:00 localhost nsyslog: Hello world\n",
  "server": {
    "protocol": "udp4",
    "port": "514",
    "interface": "localhost"
  },
  "client": {
    "address": "127.0.0.1"
  },
  "input": "syslog_server",
  "type": "syslog",
  "$key": "syslog_server@syslog"
}
processors - parser - output: {
  "timestamp": 1569748283647,
  "originalMessage": "<65>Feb 25 10:00:00 localhost nsyslog: Hello world\n",
  "server": {
    "protocol": "udp4",
    "port": "514",
    "interface": "localhost"
  },
  "client": {
    "address": "127.0.0.1"
  },
  "input": "syslog_server",
  "type": "syslog",
  "$key": "syslog_server@syslog",
  "syslog": {
    "originalMessage": "<65>Feb 25 10:00:00 localhost nsyslog: Hello world\n",
    "pri": "<65>",
    "prival": 65,
    "facilityval": 8,
    "levelval": 1,
    "facility": "uucp",
    "level": "alert",
    "type": "BSD",
    "ts": "2019-02-25T09:00:00.000Z",
    "host": "localhost",
    "appName": "nsyslog",
    "message": "Hello world\n",
    "chain": [],
    "fields": [],
    "header": "<65>Feb 25 10:00:00 localhost nsyslog: "
  }
}
```

Vemos como, *syslog_server* ha generado un objeto JSON con datos relativos al mensaje recibido. Todas las fuentes generan un objeto JSON a su salida, y éste, tiene, por convenio, los siguientes datos mínimos:
```json
{
	"input" : "<ID de la fuente>",
	"type" : "<Tipo de fuente>",
	"originalMessage" : "<Contenido original del mensaje>"
}
```

A continuación se muestra la salida de *parser*, en la que, además de los datos generados por la fuente, aparecen aquellos extraidos de parsear un mensaje *syslog*
```json
{
	"syslog": {
    "originalMessage": "<65>Feb 25 10:00:00 localhost nsyslog: Hello world\n",
    "pri": "<65>",
    "prival": 65,
    "facilityval": 8,
    "levelval": 1,
    "facility": "uucp",
    "level": "alert",
    "type": "BSD",
    "ts": "2019-02-25T09:00:00.000Z",
    "host": "localhost",
    "appName": "nsyslog",
    "message": "Hello world\n",
    "chain": [],
    "fields": [],
    "header": "<65>Feb 25 10:00:00 localhost nsyslog: "
  }
}
```

## Siguientes pasos
* Ejemplo 2: Lectura de CSV con escritura a MongoDB. [Ir a ejemplo](example2.md)
* [Conceptos básicos](basics.md)
* [Línea de comandos](commands.md)
* [Modo CLI](cli.md)
* [Volver](../README.md)
