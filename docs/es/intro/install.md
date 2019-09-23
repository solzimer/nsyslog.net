# Instalación

Nsyslog puede ser usado tanto como una aplicación 'standalone', o incluido en tu propio proyecto como un módulo de NodeJS

## Como una aplicación
```
npm install -g nsyslog
```

Luego:
```bash
> nsyslog --help
Usage: nsyslog [options]

Options:
  -V, --version            output the version number
  -f, --file [file]        Config file
  -t, --test               Only validate config file
  -L, --log-level [level]  Debug level
  --cli                    Starts CLI session
  --cli-start              Starts CLI session and flows
  -h, --help               output usage information
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

[Volver](../README.md)
