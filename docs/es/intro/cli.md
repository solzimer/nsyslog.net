# Modo CLI
nsyslog permite ser ejecutado en el llamado *modo CLI*. En dicho modo, se activa un terminal interactivo que recibe y ejecuta comandos con el objetivo de poder depurar una determinada configuración.

Para ejecutar nsyslog en modo CLI, basta con usar el parámetro **--cli**
```bash
$ nsyslog --cli -f examples/config/test033_httpserver.json
warn: Syslog parser: Multithread is disabled
warn: CSV parser: Multithread is disabled
warn: XML parser: Multithread is disabled
info: Reading configuration file "examples/config/test033_httpserver.json"
info: Valid config file
info: Config loaded!
info: PushStream piped to InputStream
info: PullStream piped to InputStream
nsyslog>
```

Al ejecutarse en este modo, nsyslog no inicia los flujos automáticamente, sino que deben ser activados desde la línea de comandos. Si se desea iniciar los flujos de forma automática, se puede sustituir **--cli** por **--cli-start**

### Comandos disponibles
Una vez dentro del modo CLI, podemos ejecutar el comando **help** para ver el listado de comandos disponibles:

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

Algunos comandos disponen de ayuda adicional si son precedidos del comando **help**
```bash
nsyslog> help stats

  Usage: stats [options] [interval]

  Prints statistics. Interval: Optional, refresh seconds

  Options:

    --help  output usage information

nsyslog>
```

Adicionalmente, la interfaz permite el autocompletado a través de la tecla de *tabulador*

## config
El comando **config** permite imprimir toda la configuración aplicada a nsyslog, incluyendo cualquier fichero secundario referenciado en ésta (de forma recursiva).

La información impresa no tiene por qué coincidir exáctamente con el contenido del fichero original, sino que es una representación de éste una vez procesado y combinado con el resto de ficheros referenciados.

## reload
Permite la recarga de la configuración en caso de que ésta haya sido modificada. Al ejecutar el comando **reload**, si los flujos se estuvieran ejecutando, estos serán detenidos antes de efecutar la recarga.

## start
Inicia la ejecución de los flujos, iniciando todos los componentes implicados (fuentes, procesadores y transportes)

## stop
Detiene por completo la ejecución de los flujos, y con ello las fuentes, procesadores y transportes implicados.

## pause
Pausa temporalmente las fuentes, de forma que no entren más datos de entrada en los flujos.

## resume
Reanuda las fuentes previamente pausadas.

## stats
Imprime un resumen estadístico del uso de cada componente en los flujos. Es posible añadir un parámetro numérico que servirá de intervalo (en segundos) sobre el que se seguirá imprimiendo la información, hasta que se pulse la letra **Q**

En el siguiente ejemplo, indicamos que queremos ver las estadísticas cada 5 segundos. Al pulsar **Q**, cancelaremos el comando:

```bash
nsyslog> stats 5

********* Press Q to cancel *********


stats {
  "input": {
    "http": {
      "id": "http",
      "ack": 0,
      "fail": 0,
      "emit": 1
    }
  },
  "processor": {},
  "transporter": {
    "logger": {
      "id": "logger",
      "ack": 1,
      "fail": 0,
      "emit": 1
    }
  }
}
nsyslog>
stats {
  "input": {
    "http": {
      "id": "http",
      "ack": 0,
      "fail": 0,
      "emit": 2
    }
  },
  "processor": {},
  "transporter": {
    "logger": {
      "id": "logger",
      "ack": 2,
      "fail": 0,
      "emit": 2
    }
  }
}
nsyslog>
************* Cancelled *************


nsyslog>

```

## input, processor, transporter
Estos comandos permiten mostrar lo que ocurre cuando un dato entra / sale de un componente:

```bash
nsyslog> processor --help

  Missing required argument. Showing Help:

  Usage: processor [options] <id>

  Prints input/acked/output entries for Processor Components

  Options:

    --help     output usage information
    -i, --in   Shows input entries
    -o, --out  Shows output entries <default>
    -a, --ack  Shows acked entries

nsyslog>
```

Estos comandos resultan especialmente útiles para depurar lo que ocurre con un dato cuando entra en un componente, y cómo es transformado a la salida.

### Ejemplos

Mostrar los datos generados por una fuente:
```bash
nsyslog> input http

********* Press Q to cancel *********


InputStream - http - output: {
  "timestamp": 1570213516886,
  "server": {
    "format": "json",
    "port": "8888",
    "host": "0.0.0.0"
  },
  "client": {
    "address": "127.0.0.1",
    "port": 61276
  },
  "originalMessage": {
    "user": "John Doe",
    "ip_addr": "10.23.123.34",
    "dst_port": "8080",
    "url": "http://myserver.com",
    "status_code": 404
  },
  "input": "http",
  "type": "httpserver",
  "$key": "http@httpserver"
}
```

Mostrar la entrada / salida de un procesador:
```bash
nsyslog> processor props -i

********* Press Q to cancel *********


nsyslog> processor props -o

********* Press Q to cancel *********


nsyslog> start
info: Server bind for process 68377 pid=68377, host=/tmp/nsyslog_68377, host=0.0.0.0, port=62724
info: Init_0 piped to props
info: props piped to End_1
info: Null_2 piped to logger
info: logger piped to End_3
info: Flow_0_Entry_Point piped to Init_0
info: props piped to Null_2
info: InputStream piped to Flow_0_Entry_Point
info: Process 68377 registers flows: 0=Flow_0
info: All modules started successfuly

********* Press Q to cancel *********



********* Press Q to cancel *********


nsyslog>
processors - props - input: {
  "timestamp": 1570213786804,
  "server": {
    "format": "json",
    "port": "8888",
    "host": "0.0.0.0"
  },
  "client": {
    "address": "127.0.0.1",
    "port": 62754
  },
  "originalMessage": {
    "user": "John Doe",
    "ip_addr": "10.23.123.34",
    "dst_port": "8080",
    "url": "http://myserver.com",
    "status_code": 404
  },
  "input": "http",
  "type": "httpserver",
  "$key": "http@httpserver"
}
processors - props - output: {
  "timestamp": 1570213786804,
  "server": {
    "format": "json",
    "port": "8888",
    "host": "0.0.0.0"
  },
  "client": {
    "address": "127.0.0.1",
    "port": 62754
  },
  "originalMessage": {
    "user": "John Doe",
    "ip_addr": "10.23.123.34",
    "dst_port": "8080",
    "url": "http://myserver.com",
    "status_code": 404
  },
  "input": "http",
  "type": "httpserver",
  "$key": "http@httpserver",
  "message": "User John Doe has stablished connection to 10.23.123.34:8080"
}
nsyslog>

```
## Siguientes pasos
* [Instalación](install.md)
* [Conceptos básicos](basics.md)
* Ejemplo 1: Servidor syslog con escritura a fichero. [Ir a ejemplo](example1.md)
* Ejemplo 2: Lectura de CSV con escritura a MongoDB. [Ir a ejemplo](example2.md)
* [Línea de comandos](commands.md)
* [Modo CLI](cli.md)
* [Expresiones](expressions.md)
* [Volver](../README.md)
