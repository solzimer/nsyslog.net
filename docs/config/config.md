# config

El elemento *config* contiene propiedades de configuración globales que alteran el comportamiento del motor de nsyslog.

## Ejemplo

logagent.json
```json
{
	"config" : {
		"datadir" : "/tmp/nsyslog",
		"input" : {"maxPending" : 1000},
		"buffer" : {"maxPending": 1000},
		"processor" : {"maxPending": 1000},
		"transporter" : {"maxPending": 1000}
	}
	...
}
```

## Propiedades
* **datadir** : Es la ruta donde nsyslog almacena datos internos, necesarios para su ejecución. Esto puede incluir buffers de datos en disco, watermarks, datos específicos de algunos componentes, etc.. **Es fundamental que cada fichero de configuración use una carpeta de datos diferente**; de lo contrario, una instancia podría corromper los datos de otra.
* **input** : Configuraciones aplicadas a todos los *inputs*
	* **maxPending** : Número de datos de entrada pendientes de ser aceptados por el siguiente elemento de proceso (1000 por defecto). Se evita así que un componente (y un flujo) se sature con más datos de los que puede procesar.
* **processor** : Configuraciones aplicadas a todos los *procesadores*
	* **maxPending** : Número de datos de entrada pendientes de ser procesados por un componente de proceso (1000 por defecto). Se evita así que un componente (y un flujo) se sature con más datos de los que puede procesar.
* **transporter** : Configuraciones aplicadas a todos los *transportes*
	* **maxPending** : Número de datos de entrada pendientes de ser procesados por un componente de transporte (1000 por defecto). Se evita así que un componente (y un flujo) se sature con más datos de los que puede procesar.
