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

Por convenio, todas las fuentes generan datos como objetos JSON, con el siguiente esquema mínimo:

```JSON
{
	"type" : "<input type>",
	"input" : "<input id reference>",
	"originalMessage" : "<entry content / json data>"
}
```

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
1. **Selección de datos**: Un filtro inicial decide qué datos leidos desde las fuentes son elegibles para el flujo.
2. **Cadena de proceso**: Se aplica una cadena de procesadores en serie. Si bien los procesadores no tienen por qué ser síncronos, **el orden de proceso de datos siempre está garantizado.**; es decir, el orden de entrada en un procesador se preserva a la salida de éste, si bien, dentro, cabe la posibilidad de que los datos no sean procesados en el mismo orden.

Como ejemplo, supongamos un procesador asíncrono que procesa cada dato en un tiempo aleatorio:
* Tenemos a la entrada, y en el siguiente orden, los datos A,B,C,D
* A se ejecuta en 10ms
* B se ejecuta en 5ms
* C se ejecuta en 15ms
* D se ejecuta en 12ms
* El procesador es capaz de procesar de forma simultanea 100 datos, por lo que no debe espera que A finalice para empezar el proceso de B.
* Dados los tiempos anteriores, la salida del procesador es entonces: B,A,D,C
* Aunque la salida ha alterado el orden inicial de los datos, el flujo se encargará de preservarlo cuando estos entren en el siguiente componente, sea un procesador o un transporte, por lo que la entrada al siguiente componente seguirá siendo: A,B,C,D

3. **Transportes**: Los transportes son muy similares a los procesadores, pero difieren en tres aspectos básicos:
* Su función es enviar los datos a un destino particular (fichero, base de datos, kafka...)
* No transforman ni modifican los datos de entrada. Esto es cierto por convenio, por lo que es posible que algún transporte modifique algún aspecto de los datos; por ejemplo, un transporte de base de datos puede añadir un campo "id", o generar un "*timestamp*", etc...
* A diferencia de los procesadores, los transportes no necesariamente se conectan en serie, sino que pueden formar un árbol en el que distintas transportes se ejecuten en paralelo, y otros en serie.

4. **Reemisión**: Opcionalmente, un dato puede ser *reemitido* (*reemit*). Cuando un dato es reemitido, vuelve a convertirse en un dato de entrada, elegible para ser procesado por otros flujos. Un dato reemitido puede ser devuelto al buffer general de entrada, o enviado a un flujo en particular. En cualquier caso, cuando esto ocurre, el dato tendrá un atributo distintivo llamado "**$$reemit**", que indicará que es un dato reemitido. Esto se verá más en detalle en el apartado de [Reemisión de datos](../transporters/reemit.md)

### Asincronía, paralelismo y concurrencia
Es necesario, antes de nada, definir qué significan estos tres conceptos en el contexto de nsyslog:

#### Asincronía
Se dice que javascript / NodeJS es un lenguaje asíncrono. Pero, ¿qué significa esto? Javascript es un lenguaje que ejecuta bloques de código como respuestas a eventos. Cuando se dispara un determinado evento, el bloque de código asociado se ejecuta. Estos bloques se ejecutan en el hilo principal del proceso. Cuando determindas funciones (principalmente de entrada / salida de datos) son llamadas, éstas se ejecutan de forma nativa en un pool de hilos en segundo plano, de forma que el bloque de código del hilo principal sigue su ejecución sin bloquearse mientras se obtiene el resultado de dicha llamada. A este tipo de ejecución se la llama "asíncrona", ya que el código principal no va a esperar a la obtención del resultado de dicha función, sino que va a seguir su ejecución hasta el final. Cuando la función asíncrona finaliza su ejecución, provoca un nuevo evento, el cual es responsable de ejecutar un nuevo bloque de código que procese dicho resultado.

Por ejemplo:
```javascript
function printFile(err, data) {
		console.log('File data: ',data);
}

function readMyFile() {
	console.log('Start reading file');
	fs.readFile('myfile.txt', printFile);
	console.log('Function end');
}

readMyFile();
```

En un lenguaje síncrono, al llamar a la función *readMyFile*, el resultado sería:
```text
Start reading file
File data: .......
Function end
```

Sin embargo, en NodeJS, la funcion "*fs.readFile*" es asíncrona, lo que significa que, internamente, un hilo en segundo plano se encargará de la lectura del fichero, haciendo que la ejecución de "*readMyFile*" siga su curso, y, una vez finalizada esta, cuando *fs.readFile* se haya completado, generará un evento que provoque la ejecución de *printFile*, por lo que el resultado será:

```text
Start reading file
Funcion end
File data: .......
````

En nsyslog, todos los componentes (fuentes, procesadores y transportes) **son asíncronos por definición**. Esto es especialmente cierto en fuentes y transportes, ya que trabajan principalmente con operaciones nativas de entrada / salida. En el caso de los procesadores, aunque se les considera asíncronos, no tienen internamente por qué serlos, por lo que es posible que acaben provocando un bloqueo del hilo principal si tienen que desempeñar tareas de CPU muy pesadas.

A pesar de ello, si el entorno de ejecución lo permite, algunos procesadores pueden trasladar dicho trabajo a otros hilos en segundo plano para evitar dicho bloqueo.

#### Paralelismo y concurrencia
La distinción entre estos dos términos suele variar y puede ser "controvertida". Hablamos de concurrencia cuando podemos ejecutar más de un proceso a la vez, mientras que paralelismo se refiere a la capacidad de operar sobre un dato de forma concurrente, es decir, para procesar un dato recurrimos a varios procesos en paralelo.

¿Confundido? Es lógico. Vamos a redefinir estos dos términos en el contexto de nsyslog:
* Concurrencia: nsyslog puede distribuir cada flujo en un proceso diferente, de forma que varios flujos puedan operar en paralelo.
* Paralelismo: Un mismo flujo puede ejecutar varias instancias de sí mismo en paralelo, aumentando así su propia concurrencia.

¿Confundido todavía? Mejor lo vemos en un gráfico:

![Concurrencia](/assets/flow-concurrency.png)

En nsyslog, un flujo puede tener asignados tanto concurrencia como paralelismo. Si la concurrencia está activada, significa que el flujo se podrá ejecutar en un proceso distinto al principal. Si, además, se activa el paralelismo, dicho flujo podrá tener múltiples instancias en diferentes procesos.

**Importante: nsyslog sólo garantiza el órden de proceso de los datos dentro de una instancia del flujo. Si éste tiene paralelismo, no se garantiza que los datos procesados por una instancia mantengan su órden respecto a los datos de otra instancia, en referencia a cómo se generaron estos en las fuentes**
