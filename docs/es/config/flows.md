## Flujos

Si los componentes (*input*, *processor* y *transporter*) son las piezas básicas de NSyslog para operar sobre los datos, los flujos (*flows*), son los elementos que permiten enlazar dichos componentes para realizar todo el proceso completo de datos, desde la entrada hasta la salida.

Un flujo típico tiene el siguiente aspecto:

```javascript
{
	"flows" : [
		{
			// ID is optional, but recomended
			"id" : "myflow",
			// Can be a filter, a input ID or an inline expression
			"from" : "files",
			// Can be a filter or inline expression
			"when" : "${originalMessage}.match(/root/)",
			// Disable flow (false by default)
			"disabled" : false,
			// Processors
			"processors" : ["timestamp","$groupAndFilter"],
			// Transporters
			"transporters" : ["logger","$fileAndMongo"],
			// Transporters mode
			"mode" : "parallel",
			// Forked or in main process (main process by default)
			"forked" : false
		}
	]
}
```

## Configuración
Todos los flujos siguen el siguiente esquema:

* **id** : Opcional. Identificador único del flujo. Si bien no es obligatorio, sí es recomendable establecerlo de cara a poder ser referenciado fácilmente en otros elementos de configuración. En caso de no establecerse, NSyslog se encargará de darle un ID aleatorio.
* **from**: Define el origen de los datos. Un flujo sólo recibirá datos que cumplan con la cláusula establecida por *from*. Esta propiedad puede ser tanto simple, como un array de valores, y cada valor puede ser:
	* **&#42;** : Si se usa el caracter especial \*, significa que el flujo acepto todos los datos de entrada que sean generados por los *inputs*.
	* **ID** : Si el valor coincide con un ID de una entrada (*input*), el flujo aceptará datos de dicha fuente.
	* **Expresión** : Cualquier [expresión de evaluación](../intro/expressions.md) puede ser usada para evaluar si los datos de entrada generados por las fuentes son aptas para el proceso por el flujo.
	* **Filtro** : Cualquier filtro declarado en el apartado *filters* o *filterGroups*
	* **DEFAULT** : Este es un caso especial, aplicable en casos donde un dato de entrada no puede ser procesado por ningún flujo previo. Si se establece *from* a *DEFAULT*, quiere decir que dicho flujo sólo procesará entradas rechazadas por todos los demás flujos.
* **when** : La propiedad *when* (opcional) es muy similar en concepto a *from*, y se usa como segundo filtro. Es más limitado ya que sólo admite expresiones y/o filtros. Es especialmente útil en flujos anidados que dependen de los datos proporcionados por un flujo padre.
* **disabled** : Opcional. Puede tomar los valores *true* o *false*. Su función es deshabilitar un flujo para que no sea usado (Util para test y/o depuración de configuraciones).
* **processors** : Opcional. Lista de procesadores y/o grupos de procesadores. Estos son ejecutados en serie, en el mismo orden en el que se han declarado.
* **transporters** : A list of transporter / transporter group IDs (preceded by $). This is the list of transporter instances that will send the entries to their destinatios. They are chained in the same order they are declared.
* **mode** : Optional. Can be either *serial* or *parallel* (*serial* by default). If there are more than one transporter referenced in the *transporters* section (note that a transporter group is seen as a single transporter by the flow), this field (as seen in the [transporters section](../transporters/index.md)) indicates whether transporters are run in serial or parallel mode.
* **forked** : Optional. Can be *true* or *false*. When a flow is forked, NSyslog spawns a new process where the flow will be executed. This is useful on multicore CPUs, so we can release som workload from the main process and send it to this child process. This way you can take advantage of multicore CPUs. Take in mind, however, these considerations:
	* Inputs are still executed in the main process, so entries must be sent to the child processes via IPC mechanisms. This implies that serialization/deserialization of entries can surpass the benefits of forking the flow.
	* If you plan to reference a processor / transporter in multiple flows (so they can *correlate* entries in some way; collecting stats, execute bussiness rules, etc..) note that a forked process doesn't share any state from its parent process, so, a different process means different processor / transporter instances, that **shares nothing** whith their parent ones.

## Nested flows (flow inheritance)
Nested flows are a way to avoid writing multiple flows in the configuration file that shares many things in common. This way, you write a hierarchical flow tree where children processes inherits the properties of their parent:

```javascript
"flows" : [
	{
		"from":"localhost", "transporters":"log", "mode":"parallel",
		"flows" : [
			{"when":["httpOk"], "transporters":"log"},
			{"when":["httpRed"], "transporters":"warn"},
			{"when":["httpErr"], "transporters":"error"}
		]
	}
]
```

[Back](../README.md)
