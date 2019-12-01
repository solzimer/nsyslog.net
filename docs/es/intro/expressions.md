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
Las expresiones de interpolación transfieren proiedades de un origen a un destino. De esta forma podemos componer, por ejemplo, cadenas de texto derivadas de propiedades de una entrada, o realizar una transformación de una entrada a una salida. En este caso el único motor disponible es el *jsepxr*.

Al igual que antes, si tomamos como dato de entrada:
```json
{
	"data" : { "max" : 300,	"min" : 100 },
	"bytes" : {	"rec" : 124, "sent" : 1000 },
	"packets" : { "rec" : 3, "sent" : 12 },
	"user" : { "name" : "John", "email" : "john@doe.com" },
	"severity" : 3
}
```

Podemos componer expresiones de interpolación:
```javascript
i1 = "El usuario ${user.name} ha enviado ${bytes.sent} bytes";
i2 = "El ratio de datos es ${bytes.sent / this.bytes.rec} bytes";
i3 = {
	"user" : "${user.name} <${user.email}>",
	"rec" : {
		"bytes" : "${bytes.rec}",
		"packets" : "${bytes.rec}"
	},
	"sent" : {
		"bytes" : "${bytes.sent}",
		"packets" : "${packets.sent}"
	}
}
```
Dando como resultado:
```javascript
o1 = "El usuario John ha enviado 1000 bytes";
o2 = "El ratio de datos es 8.064516129032258 bytes";
o3 = {
	"user" : "John <john@doe.com>",
	"rec" : { "bytes" : 124, "packets" : 124 },
 	"sent" : { "bytes" : 1000, "packets" : 12 }
}
```

## Accesores
Llamamos accesores (*accessors*) a los elementos de la forma **${[accesor]}** usados por las expresiones para **acceder** a las propiedades del dato de entrada.

Usando como dato de entrada:
```javascript
var data = {
	"user" : "John <john@doe.com>",
	"rec" : {
		"bytes" : 124,
		"packets" : 124
	},
	"sent" : {
		"bytes" : 1000,
		"packets" : 12
	}
}
```
### Forma genérica
La forma genérica de uso es la siguiente:

```
${prop1.subprop2...subpropN}
${this.prop1.subprop2...subpropN}
```

En dicha forma, no es necesario referenciar el dato de entrada; la ruta empieza siempre por *this*, o por la propiedad de primer nivel:

```javascript
// Expresión válida
"${user.email} => ${rec.bytes}"
"${this.rec.bytes}"

// Expresiones inválidas
"${data.user.email}"
```

### JSON
Si lo que se desea es obtener una representación en JSON del dato de entrada, se puede usar la expresión:

```javascript
"${JSON}"
"${JSON<:path>}"
"${JSON<:spaces>}"
"${JSON<:path><:spaces>}"
```

Esto dará como resultado el dato de entrada serializado y formateado:
```javascript
'{\n  "user": "John <john@doe.com>",\n  "rec": {\n    "bytes": 124,\n    "packets": 124\n  },\n  "sent": {\n    "bytes": 1000,\n    "packets": 12\n  }\n}'
```

### Puntero "this"
En ciertas ocasiones puede ser necesario que un mismo accesor referencie a multiples propiedades del dato de entrada. En estos casos, la primera referencia usará la forma genérica, mientras que las restantes requieren el uso del puntero **this**:

```javascript
// Interpolación
"El ratio de entrada / salida es ${rec.bytes / this.sent.bytes}"

// Evaluación
"${rec.bytes || this.rec.packets}"
"${this.rec.bytes || this.rec.packets}"
```

Darán como resultado:
```javascript
// Interpolación
"El ratio de entrada / salida es 0.124"

// Evaluación
124
```

## Evaluación javascript
Las expresiones jsexpr permiten evaluar código javascript, aunque su forma difiere si son expresiones de evaluación o de interpolación.

```javascript
// Evaluación
"${name}.length > 0"
"${timestamp}.toISOString()"

// Interpolación
"${name.length>0}"
"${timestamp.toISOString()}"
```

Como se puede ver, en las expresiones de evaluación, el código javascript ocurre fuera del accesor, ya que éste sólo referencia al valor accedido, y luego la expresión resultante es evaluada como javascript.
En el caso de las expresiones de interpolación, el código ocurre dentro del accesor, ya que todo lo que ocurra fuera de éste, es interpretado como texto que se interpola junto al resultado de evaluar el accesor.

## Trucos
Es posible usar funciones inline anónimas, siempre y cuando no incluyan llaves (**{}**):
```javascript
// Evaluación
"${data.iplist}.some(ip=>ip.startsWith('192.'))"

// Interpolación
"${text.split(' ').filter(word=>word.length>3).join(' ')}"
```

También es posible referenciar datos y funciones que no pertenecen a un objeto:
```javascript
"${null || new Date()}"
"${null || [1,2,3,4,5]}"
"${null || JSON.parse(this.jsontext)}"
```

## Tipo de salida
Tanto en el caso de la evaluación como la interpolación, el tipo de dato de salida tratará de ajustarse siempre según los siguientes criterios:

* Evaluación: Las expresiones de evaluación ejecutan la expresión resultado como código javascript, por lo que el tipo de dato resultante será el obtenido por dicha evaluación.
* Interpolación:
	* Si el resultado es un objeto, la salida permanece como objeto.
	* Si el resultado es una cadena de texto, pero es evaluablea a un tipo simple (número, booleano...), ese será su tipo de salida. En caso contrario, permanecerá como cadena de texto.

Ejemplos:
```javascript
// Evaluación
"${rec.bytes || this.rec.packets}" // => 124, numérico
"${rec.bytes} > 0" // => true, booleano

// Interpolación
"${rec.bytes}" // 124, numérico
"${rec.bytes} bytes" // "124 bytes", texto
```

## Más sobre expresiones
Puedes obtener más información sobre las expresiones visitando los proyectos [jsepxr](https://www.npmjs.com/package/jsexpr) y [Mingo](https://www.npmjs.com/package/mingo), así como todos los ejemplos de configuración de nsyslog en [github](https://github.com/solzimer/nsyslog/tree/master/examples/config)
