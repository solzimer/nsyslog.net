# Filtros

Los filtros describen expresiones contra las que se van a evaluar los datos de entrada. Estos, pueden luego ser referenciados en los flujos para filtrar los datos que van a ser procesados.

## Configuración
Los filtros se declaran en el apartado *filters* del fichero de configuración, y pueden ser agrupados en el apartado *filterGroups*:

```json
{
	"filters" : {
		"fromUDP" : "${server.protocol}=='udp4'",
		"localhost" : "${client.address}=='127.0.0.1'",
		"interface" : "${client.address}!='127.0.0.1'",
		"httpOk" : "${message}.match(/ 200/)",
		"httpRed" : "${message}.match(/ 302/)",
		"httpErr" : "${message}.match(/ (404|500)/)"
	},

	"filterGroups" : {
		"allcodes" : ["httpOk","httpRed","httpErr"]
	}
}
```

## Uso
Una vez declarados, pueden ser referenciados en las propiedades *from* y *when* de los flujos:
```json
{
	"flows" : [
		{"from":"localhost", "when":["httpOk"], "transporters":"log", "mode":"parallel"},
		{"from":["interface","$allcodes"], "processors":["stats"], "transporters":["debug"], "mode":"serial"},
		{"from":"${id}=='glob'", "disabled":false, "transporters":["debug"], "mode":"serial"}
	]
}
```

## Filtros "in-line"
No es necesario declarar los filtros en el apartado *filters* antes de usarlos, también es posible declarlos "in-line" en las propias propiedades *from* y *when*:

```json
{
	"flows" : [
		{"from":"${id}=='glob'", "when":"${sev}>3", "transporters":["debug"], "mode":"serial"}		
	]
}
```
