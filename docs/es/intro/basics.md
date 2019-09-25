# Conceptos básicos

## Qué es nsyslog
nsyslog es, en esencia, un agente de logs: Esto es, un proceso que lee fuentes de logs, los parsea, transforma, procesa y reenvía a diferentes destinos.

Aunque esa es su principal función, la arquitectura de nsyslog permite que éste sea usado para un amplio espectro de casos de uso.

## ¿Qué se puede hacer?
Algunos ejemplos:

* Levantar un servidor de Syslog que escuche bajo UCP y/o TCP, filtrar y clasificar los mensajes recibidos, y almacenarlos en disco.
* Leer logs de un servidor HTTP (Apache, tomcat, nginx), parsear las líneas, geoposicionar IPs, agregar datos de usuario, etc... y almacenar los datos estructurados en una base de datos.
* Suscribirse a una cola de mensajes (Kafka, redis, zmq...), recolectar eventos de seguridad y ejecutar reglas de correlación. Publicar nuevas alertas a un servicio REST.
* Leer eventos de Windows y enviarlos a un SIEM (ArchSight, Splunk)

Hay mucho más que se puede hacer; todo depende de tu caso de uso. Para conseguir semejante nivel de funcionalidad, el núcleo de nsyslog se sustenta en los siguientes pilares:

## Arquitectura

![Architecture](/assets/nsyslog.svg)

Hay cuatro componentes básicos que se ejecutan bajo nsyslog:

### Entrada / Dato
Una entrada o dato (*entry*) es la pieza básica y fundamental de nsyslog. Es la unidad de información leída desde un origen y que va a ser procesada. Los datos pueden ser texto plano u objetos estructurados en formato JSON. En cualquier caso, nsyslog transforma cada dato, sea del tipo que sea, en un objeto estructurado JSON.

### Fuentes
Las fuentes ([*inputs*](../inputs/index.md)), son los componentes responsables de recolectar datos desde su origen. Una fuente puede ser un fichero (o conjunto/patrón de ficheros), un servicio HTTP, un servidor Syslog, etc... Las fuentes recolectan **entradas** (*entry*) que son enviadas a los **flujos** (*flow*) para su posterior proceso. Una fuente puede ser activa (*pull*) o pasiva (*push*)

Una fuente activa (*pull*) obtiene datos cuando nsyslog lo require, y nunca antes. De esta forma, un flujo no se sobrecargará con más datos de los que puede procesar, ya que nsyslog no requerirá más datos a la fuente si no es necesario o no puede seguir el ritmo.

Ejemplos de fuentes activas: Fichero, Base de datos, Kafka, Servicio REST...

Por el contrario, una fuente pasiva (*push*) recibe datos sin un claro control; es decir, en este caso los origenes mandan los datos a la fuente, y salvo que ésta tenga un mecanismo de control, no puede, por defecto, parar o pausar su recepción.

Ejemplos de fuentes pasivas: Servidor de Syslog, Pub/Sub Redis, Servidor HTTP...

Para no desbordar los flujos, nsyslog cuenta con un buffer intermedio en disco, capaz de almacenar las entradas de las fuentes pasivas a la espera de poder ser procesadas.

### Procesadores
Los procesadores ([*processors*](../processors/index.md)) son los componentes encargados de transformar los datos. Cuando una dato (*entry*) entra en un procesador, éste tiene la capacidad de transformar, filtrar y generar nuevos datos de salida. Este proceso puede ser tanto síncrono como asíncrono.

Se pueden agrupar los procesadores en tres grandes grupos:
* **Parsers**: Encargados de *entender* determinadas entradas y transformarlas a datos estructurados.
* **Propiedades**: Crear, modifican, derivan y/o eliminan propiedades sobre los datos.
* **Agregadores**: Agrupan, filtran y correlan los datos de entrada para producir nuevos datos de salida, basados en estos.

**Nota:** Dependiendo de la versión y configuración de NodeJS, algunos procesadores incluso tienen capacidad multi-hilo para proceso concurrente de datos (experimental).

### Transportes
Los transportes ([*transporters*](../transporters/index.md)) son el lado opuesto de las fuentes. Reciben el dato final ya procesado, y lo envían a un determinado destino. Los transportes, por convenio, nunca modifican los datos (salvo casos excepcionales).

### Flujos
Fuentes, procesadores y transportes son las piezas básicas que operan sobre un dato. Quien se encarga de gobernar cómo un dato llega de un origen a un destino es el flujo (*flow*). El flujo es la entidad de alto nivel que define qué fuentes, procesadores y transportes se aplican a unos determinados datos.

Los flujos siguen el siguiente esquema:
1. Selección de datos: Un filtro inicial decide qué datos leidos desde las fuentes son elegibles para el flujo.
2. Cadena de proceso: Se aplica una cadena de procesadores en serie. Si bien los procesadores no tienen por qué ser síncronos, **el orden de proceso de datos siempre está garantizado.**; es decir, el orden de entrada en un procesador se preserva a la salida de éste, si bien, dentro, cabe la posibilidad de que los datos no sean procesados en el mismo orden.

Como ejemplo, supongamos un procesador asíncrono que procesa cada dato en un tiempo aleatorio:
* Tenemos a la entrada, y en el siguiente orden, los datos A,B,C,D
* A se ejecuta en 10ms
* B se ejecuta en 5ms
* C se ejecuta en 15ms
* D se ejecuta en 12ms
* El procesador es capaz de procesar de forma simultanea 100 datos, por lo que no debe espera que A finalice para empezar el proceso de B.
* Dados los tiempos anteriores, la salida del procesador es entonces: B,A,D,C
* Aunque la salida ha alterado el orden inicial de los datos, el flujo se encargará de preservarlo cuando estos entren en el siguiente componente, sea un procesador o un transporte, por lo que la entrada al siguiente componente seguirá siendo: A,B,C,D


When inputs collect data, it can be done via *pull* or *push* methods. *Pull* inputs are those that read entries whenever the flows requires it. For example, file inputs are *pull inputs*, since they *activelly* read the file contents only when requested. As opposite, *push* inputs listens for incoming data, and push it to the flow as soon as it arrives, so they cannot perform any flow control. For example, an HTTP server listens for connections and receive the data. In these cases, data is buffered in disk, so the flows are not overflowed by the incoming entries.

When a entry matches a flow condition (that is, a flow wants to process this kind of data), it sends the entries to the processors, that can be either sync, or async. The flow process guarantees that the entry order is preserved.

Finally, when the entries arrive to the transporters phase, they are sent to its final destinations. The flow can configure transporters to operate in serial or parallel mode (or a mix, as we will see)

[Back](../README.md)
