---
home: true
heroImage: /assets/logo-nsyslog-tr.png
heroText:
tagline: El agente de última generación
actionText: Empieza aquí →
actionLink: intro/install
features:
- title: Asombrosamente rápido
  details: Gracias a la potencia del módulo de streams de NodeJS, todas las tareas de E/S son ejecutadas de forma no bloqueante. Diseñado para obtener el mayor rendimiento, tanto en CPU como en RAM.
- title: Flujos multi-proceso
  details: Distribuye los flujos de proceso a través de múltiples núcleos de la CPU, para procesar los datos de forma concurrente.
- title: Modular
  details: Extiende la funcionalidad de nsyslog con un amplio catálogo de readers, procesadores, y transportes.
footer: MIT Licensed | Copyright © 2018-present Solzimer
---

# nsyslog
El agente de última generación!

## ¿El qué?
Un agente... Lee logs y datos de múltiples fuentes, parséalos, procésalos, fíltralos, corrélalos, y agrégalos, y, finalmente, envíalos a sus destinos. Eso es lo que hace nsyslog.

Para ello, nsyslog hace uso de las más nuevas tecnologías, para conseguir un entorno de proceso rápido, eficiente, y con el menor impacto posible para la CPU y la memoria.

## Principales características
* Bajo impacto en el entorno
* Control de flujo de datos con fuentes *pull* (activas) y *push* (pasivas)
* Proceso asíncrono no bloqueante
* Preserva el orden de lleºgada / salida de los datos
* Flujos multi-núcleo para proceso concurrente de datos
* Grafos de flujos
* Amplio catálogo de [fuentes](inputs/index.md), [procesadores](processors/index.md) y [transportes](transporters/index.md)
* Modular y extensible con plugins
* Compatible con el protocolo multilang de Apache Storm

### Entonces me sirve para... (ejemplos de casos de uso)
1. Servidor de Syslog: crea un servidor de syslog, filtra, clasifica y escribe en ficheros los logs recibidos.
2. Migración de datos: Lectura de datos heterogéneos, parseo, normalización y escritura en base de datos (SQL, NoSQL...)
3. Consumir / Producir mensajes: Consumir / Producir mensajes de diversos brokers (Redis, Kafka, ZeroMQ)
4. Correlación: Recepción / lectura de datos, parseo, filtrado, agregación y correlación con motor de reglas.
5. Todo a la vez... Sí, con nsyslog es posible hacerlo todo a la vez, ¿Con otros no? Sólo echa un vistazo a los componentes disponibles, y encontrarás tu propio caso de uso.

## Arquitectura
![Architecture](/assets/nsyslog.png)

nsyslog es un moderno agente de nueva generación. is a modern, new generation, log agent and syslog server. Cuenta con una arquitectura modular de flujos de recolección de datos (fuentes), proceso (procesadores) y transportes.

Una fuente (input) puede ser cualquier forma de obtención de datos, desde algo tan simple como leer un fichero, a levantar un servidor REST, consultar datos de una BDD, suscribirse a un broker de mensajes, etc...

Un procesador (processor) obentrá un dato de entrada, lo transformará y generará (o no), un dato (o múltiples datos) de salida. Es posible encadenar multiples procesadores en serie, y pueden ser tan simples como parsear una fecha, a tan complejos como un completo motor de correlación, o un bolt multilang de Apache Storm.

Un transporte (transporter) envía el dato final a su destino (o destinos).

¿Y un flujo? Un flujo es la combinación de todos estos elementos en un marco de trabajo conjunto. Puedes crear tantos flujos como quieras, comunicarlos entre sí, distribuirlos en diferentes cores de la CPU y paralelizarlos.

Y todo ello funciona gracias a NodeJS y su excelente [framework nativo de streams](https://nodejs.org/api/stream.html). Con Node, todo este proceso tendrá el menor impacto posible en tu máquina (Por poner un ejemplo, nsyslog consume 30MB al arrancar... logstash 700MB... sí, sólo por arrancar el proceso).

## Inicio Rápido
* [Instalación](intro/install.md)
* [Conceptos básicos](intro/basics.md)

## Configuration File
* [Introduction](config/index.md)
* [Global configurations](config/globals.md)
* [Inputs](inputs/index.md)
* [Filters and Filter Groups](config/filters.md)
* [Processors and Processor Groups](processors/index.md)
* [Transporters and Transporter Groups](transporters/index.md)
* [Flows](config/flows.md)
* [Custom components](config/custom.md)

## API
* [NSyslog](api/nsyslog.md)
* [Input](api/input.md)
* [Processor](api/processor.md)
* [Transporter](api/transporter.md)

## Inputs
* [Apache Kafka](inputs/kafka.md)
* [Command Input](inputs/command.md)
* [File Watcher](inputs/file.md)
* [HTTP Client](inputs/http.md)
* [HTTP Server](inputs/httpserver.md)
* [Redis](inputs/redis.md)
* [Standard Input](inputs/stdin.md)
* [Syslog UDP, TCP and TLS](inputs/syslog.md)
* [WebSocket Server](inputs/ws.md)
* [Windows Events](inputs/windows.md)
* [ZeroMQ](inputs/zmq.md)

## Processors
* [Array](processors/array.md)
* [CSV output](processors/csvout.md)
* [CSV parser](processors/csvparser.md)
* [Date format](processors/dateformat.md)
* [Filter Aggregator](processors/filter.md)
* [Generic parser](processors/parser.md)
* [JSON parser](processors/jsonparser.md)
* [KeyValue parser](processors/keyvalparser.md)
* [Merge](processors/merge.md)
* [Multilang Protocol](processors/multilang.md)
* [Properties](processors/properties.md)
* [Sequence](processors/sequence.md)
* [Split](processors/split.md)
* [Syslog parser](processors/syslogparser.md)
* [Timestamp](processors/timestamp.md)
* [Translate](processors/translate.md)
* [XML parser](processors/xmlparser.md)

## Transporters
* [Console](transporters/console.md)
* [File](transporters/file.md)
* [HTTP](transporters/http.md)
* [Kafka](transporters/kafka.md)
* [MongoDB](transporters/mongo.md)
* [Null](transporters/null.md)
* [Redis](transporters/redis.md)
* [Reemit](transporters/reemit.md)
* [Syslog](transporters/syslog.md)
* [ZeroMQ](transporters/zmq.md)
