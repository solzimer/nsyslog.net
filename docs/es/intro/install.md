# Instalación

Nsyslog puede ser usado tanto como una aplicación 'standalone', o incluido en tu propio proyecto como un módulo de NodeJS

## Requisitos
* Sistema operativo: Windows 7 o superior, Linux o MacOS
* NodeJS 8.x o superior
* Es posible que sea necesario compilar algunos módulos nativos, por lo que se recomienda disponer del entorno de compilación apropiado de cada sistema: Visual Studio, gcc o XCode.

## Como una aplicación
```
npm install -g nsyslog
```

Luego:
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

## Como un módulo NodeJS
```
npm install -save nsyslog
```

Luego:
```javascript
const NSyslog = require('nsyslog');

async function start() {
	let cfg = await NSyslog.readConfig("config.json");
	let nsyslog = new NSyslog(cfg);

	await nsyslog.start();
}

start();
```
