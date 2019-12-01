# properties

El elemento *properties* es un objeto JSON que permite definir valores que puedan ser luego referenciados en cualquier lugar de la configuración. Sirve como mecanismo para parametrizar valores.

## Ejemplo

logagent.json
```json
{
	"properties" : {
			"url" : {
				"protocol" : "https",
				"port" : 8443
			},
			"tls" : {
				"cert" : "./cert.pem",
				"key" : "./key.pem"
			}
	},

	...

	"transporters" : {
			"endpoint1" : {
				"type" : "http",
				"config" : {
					"url" : "@{url.protocol}://host1:@{url.port}",
					"tls" : "@{tls}"
				}
			},
			"endpoint2" : {
				"type" : "http",
				"config" : {
					"url" : "@{url.protocol}://host2:@{url.port}",
					"tls" : "@{tls}"
				}
			}
	},

	...
}
```

Por supuesto, como elemento que forma parte del esquema de configuración, también puede ser incluido como un fichero secundario:

properties.json
```json
{
	"properties" : {
			"url" : {
				"protocol" : "https",
				"port" : 8443
			},
			"tls" : {
				"cert" : "./cert.pem",
				"key" : "./key.pem"
			}
	}
}
```
logagent.json
```json
{
	"include" : ["./properties.json"],

	...

	"transporters" : {
			"endpoint1" : {
				"type" : "http",
				"config" : {
					"url" : "@{url.protocol}://host1:@{url.port}",
					"tls" : "@{tls}"
				}
			},
			"endpoint2" : {
				"type" : "http",
				"config" : {
					"url" : "@{url.protocol}://host2:@{url.port}",
					"tls" : "@{tls}"
				}
			}
	},

	...
}
```

Las propiedades son referenciadas usando el patrón **@{<expresión>}**; es decir, son expresiones de interpolación jsexpr, que siguen las mismas reglas, con la salvedad de que empiezan por **@** en vez de **$**.

Para saber más sobre las expresiones, puedes consultar el apartado correspondiente en la introducción:
[Expresiones](../intro/expressions.md)
