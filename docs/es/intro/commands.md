# Línea de comandos
Cuando nsyslog se ejecuta como aplicación, recibe una serie de parámetros por línea de comandos:

```bash
> nsyslog --help
Usage: nsyslog [options]

Options:
	-h, --help               output usage information
	-V, --version            output the version number
	-f, --file [file]        Config file
	-t, --test               Only validate config file
	-l, --log-file [path]    Output log file (default stdout)
	-L, --log-level [level]  Debug level
	--cli                    Starts CLI session
	--cli-start              Starts CLI session and flows
```

## Opciones
Las opciones disponibles son:

### -h --help
Imprime el listado de parámetros disponibles (esta misma pantalla)

### -V --version
Imprime la versión de nsyslog

### -f --file
Especifica el fichero de cofiguración que va a ejecutar nsyslog

### -t --test
Lee y valida el fichero de configuración, pero no ejecuta nsyslog

### -l --log-file
Permite activa el logging a fichero, y especificar la ruta del fichero de log.

### -L --log-level
El nivel de logging. Puede ser uno de:
* silly, debug, info, warn, o error

### --cli
Ejecuta nsyslog en modo [CLI](cli.md). Éste es un modo interacivo donde nsyslog presenta una consola de introducción de comandos.

### --cli-start
Ejecuta nsyslog en modo [CLI](cli.md). Adicionalmente, arranca todos los flujos de forma automática.

## Siguientes pasos
* [Instalación](install.md)
* [Conceptos básicos](basics.md)
* Ejemplo 1: Servidor syslog con escritura a fichero. [Ir a ejemplo](example1.md)
* Ejemplo 2: Lectura de CSV con escritura a MongoDB. [Ir a ejemplo](example2.md)
* [Línea de comandos](commands.md)
* [Modo CLI](cli.md)
* [Expresiones](expressions.md)
* [Volver](../README.md)
