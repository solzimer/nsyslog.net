# Expresiones
Las expresiones son parte del corazón de nsyslog; con ellas, podemos dotar de dinamismo y toma de decisión cada aspecto de la configuración y comportamiento de los componentes de ejecución.

Una gran mayoría de atributos de la configuración de nsyslog son alterables mediante expresiones.

## Motores de expresión
nsyslog no está ligado a un sólo tipo de expresiones, sino que puede albergar distintos motores. Actualmente, los motores soportados son:

### jsexpr
Un motor basado en expresiones evaluables a javascript. Las expresiones [jsepxr](https://www.npmjs.com/package/jsexpr) son cadenas de texto y/o objetos JSON que contienen elementos del tipo **${[accesor]}**, donde **[accesor]** es la ruta de una propiedad del dato de entrada.

### mingo
Un motor basado en el lenguaje de consultas de MongoDB. [Mingo](https://www.npmjs.com/package/mingo) ofrece todas las características de dicho lenguaje para evaluar condiciones sobre objetos JSON.

Adicionalmente, nsyslog incorpora los siguientes operadores de consulta adicionales:
* **$starts** / $startsWith : Una propiedad de texto empieza por una determinada cadena
* **$ends** / $endsWith : Una propiedad de texto termina por una determinada cadena
* **$contains** : Una propiedad de texto contiene una determinada cadena

Además, añade el siguiente operador de expresión:
* **$eval** : Evalua una expresion *jsexpr*

De esta forma, es posible incluso mezclar ambos motores, permitiendo crear expresiones complejas que aprovechan lo mejor de ambos motores.

## Expresiones de evaluación

Las expresiones de evaluación son aquellas que nos permiten crear una condición en base a los datos de entrada. Son usadas principalmente en filtros y condiciones sobre flujos, para decidir si un dato debe o no ser procesado por un componente.

Las expresiones de evaluación pueden usar tanto el motor *jsepxr* como el motor *mingo*.

Dado el dato:
```json
{
	"data" : { "max" : 300,	"min" : 100 },
	"bytes" : {	"rec" : 124, "sent" : 1000 },
	"packets" : {	"rec" : 3, "sent" : 12 },
	"user" : { "name" : "John", "email" : "john@doe.com" },
	"severity" : 3
}

```
Ejemplos de expresiones de evaluación son:
```javascript
// Expresiones jsexpr

"${data.max} - ${data.min} > 10"	// true
"${user.email}.match(/[a-zA-Z0-9]+@.+\.com/)"	// true
"${bytes.sent} / ${bytes.rec}" // => 8.06
"Math.abs(${packets.rec} - ${packets.sent})" // => 9
"(${bytes.sent} > ${bytes.rec}) && ${sev}>2" // true
```

```javascript
// Expresiones MongoDB

{
	"data.max" : { "$gt":100, "$lt":200 },
	"severity" : 4
}
```

```javascript
// Expresiones mixtas

{
	"$and" : [
		{ "email" : { "$endsWith":".com" } },
		{ "$expr" : { "$eval" : "${data.max} - ${data.min} > 10" } }
	]
}
```

## Expresiones de interpolación
