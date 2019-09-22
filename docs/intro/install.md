# Installation

#### As a CLI app
```
npm install -g nsyslog
```

Then:
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

#### As an embedded module
```
npm install -save nsyslog
```

Then:
```javascript
const NSyslog = require('nsyslog');

async function start() {
	let cfg = await NSyslog.readConfig("config.json");
	let nsyslog = new NSyslog(cfg);

	await nsyslog.start();
}

start();
```

[Back](../README.md)
