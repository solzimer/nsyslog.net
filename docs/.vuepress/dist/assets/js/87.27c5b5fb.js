(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{297:function(s,t,a){"use strict";a.r(t);var e=a(0),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"expresiones"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#expresiones","aria-hidden":"true"}},[s._v("#")]),s._v(" Expresiones")]),s._v(" "),a("p",[s._v("Las expresiones son parte del corazón de nsyslog; con ellas, podemos dotar de dinamismo y toma de decisión cada aspecto de la configuración y comportamiento de los componentes de ejecución.")]),s._v(" "),a("p",[s._v("Una gran mayoría de atributos de la configuración de nsyslog son alterables mediante expresiones.")]),s._v(" "),a("h2",{attrs:{id:"motores-de-expresion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motores-de-expresion","aria-hidden":"true"}},[s._v("#")]),s._v(" Motores de expresión")]),s._v(" "),a("p",[s._v("nsyslog no está ligado a un sólo tipo de expresiones, sino que puede albergar distintos motores. Actualmente, los motores soportados son:")]),s._v(" "),a("h3",{attrs:{id:"jsexpr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsexpr","aria-hidden":"true"}},[s._v("#")]),s._v(" jsexpr")]),s._v(" "),a("p",[s._v("Un motor basado en expresiones evaluables a javascript. Las expresiones "),a("a",{attrs:{href:"https://www.npmjs.com/package/jsexpr",target:"_blank",rel:"noopener noreferrer"}},[s._v("jsepxr"),a("OutboundLink")],1),s._v(" son cadenas de texto y/o objetos JSON que contienen elementos del tipo "),a("strong",[s._v("${[accesor]}")]),s._v(", donde "),a("strong",[s._v("[accesor]")]),s._v(" es la ruta de una propiedad del dato de entrada.")]),s._v(" "),a("h3",{attrs:{id:"mingo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mingo","aria-hidden":"true"}},[s._v("#")]),s._v(" mingo")]),s._v(" "),a("p",[s._v("Un motor basado en el lenguaje de consultas de MongoDB. "),a("a",{attrs:{href:"https://www.npmjs.com/package/mingo",target:"_blank",rel:"noopener noreferrer"}},[s._v("Mingo"),a("OutboundLink")],1),s._v(" ofrece todas las características de dicho lenguaje para evaluar condiciones sobre objetos JSON.")]),s._v(" "),a("p",[s._v("Adicionalmente, nsyslog incorpora los siguientes operadores de consulta adicionales:")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("$starts")]),s._v(" / $startsWith : Una propiedad de texto empieza por una determinada cadena")]),s._v(" "),a("li",[a("strong",[s._v("$ends")]),s._v(" / $endsWith : Una propiedad de texto termina por una determinada cadena")]),s._v(" "),a("li",[a("strong",[s._v("$contains")]),s._v(" : Una propiedad de texto contiene una determinada cadena")])]),s._v(" "),a("p",[s._v("Además, añade el siguiente operador de expresión:")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("$eval")]),s._v(" : Evalua una expresion "),a("em",[s._v("jsexpr")])])]),s._v(" "),a("p",[s._v("De esta forma, es posible incluso mezclar ambos motores, permitiendo crear expresiones complejas que aprovechan lo mejor de ambos motores.")]),s._v(" "),a("h2",{attrs:{id:"expresiones-de-evaluacion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#expresiones-de-evaluacion","aria-hidden":"true"}},[s._v("#")]),s._v(" Expresiones de evaluación")]),s._v(" "),a("p",[s._v("Las expresiones de evaluación son aquellas que nos permiten crear una condición en base a los datos de entrada. Son usadas principalmente en filtros y condiciones sobre flujos, para decidir si un dato debe o no ser procesado por un componente.")]),s._v(" "),a("p",[s._v("Las expresiones de evaluación pueden usar tanto el motor "),a("em",[s._v("jsepxr")]),s._v(" como el motor "),a("em",[s._v("mingo")]),s._v(".")]),s._v(" "),a("p",[s._v("Dado el dato:")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"data"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"max"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("300")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"min"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"bytes"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"rec"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("124")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"sent"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"packets"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"rec"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"sent"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"user"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"John"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"email"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"john@doe.com"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"severity"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])])]),a("p",[s._v("Ejemplos de expresiones de evaluación son:")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Expresiones jsexpr")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"${data.max} - ${data.min} > 10"')]),s._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"${user.email}.match(/[a-zA-Z0-9]+@.+\\.com/)"')]),s._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"${bytes.sent} / ${bytes.rec}"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// => 8.06")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Math.abs(${packets.rec} - ${packets.sent})"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// => 9")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"(${bytes.sent} > ${bytes.rec}) && ${sev}>2"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n")])])]),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Expresiones MongoDB")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"data.max"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"$gt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"$lt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"severity"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Expresiones mixtas")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"$and"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"email"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"$endsWith"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('".com"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"$expr"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"$eval"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"${data.max} - ${data.min} > 10"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h2",{attrs:{id:"expresiones-de-interpolacion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#expresiones-de-interpolacion","aria-hidden":"true"}},[s._v("#")]),s._v(" Expresiones de interpolación")]),s._v(" "),a("p",[s._v("Las expresiones de interpolación transfieren proiedades de un origen a un destino. De esta forma podemos componer, por ejemplo, cadenas de texto derivadas de propiedades de una entrada, o realizar una transformación de una entrada a una salida. En este caso el único motor disponible es el "),a("em",[s._v("jsepxr")]),s._v(".")]),s._v(" "),a("p",[s._v("Al igual que antes, si tomamos como dato de entrada:")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"data"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"max"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("300")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"min"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"bytes"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"rec"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("124")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"sent"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"packets"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"rec"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"sent"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"user"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"John"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"email"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"john@doe.com"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"severity"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("Podemos componer expresiones de interpolación:")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("i1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"El usuario ${user.name} ha enviado ${bytes.sent} bytes"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ni2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"El ratio de datos es ${bytes.sent / this.bytes.rec} bytes"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ni3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"${user.name} <${user.email}>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rec"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bytes"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"${bytes.rec}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"packets"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"${bytes.rec}"')]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sent"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bytes"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"${bytes.sent}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"packets"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"${packets.sent}"')]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("Dando como resultado:")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("o1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"El usuario John ha enviado 1000 bytes"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\no2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"El ratio de datos es 8.064516129032258 bytes"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\no3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"John <john@doe.com>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rec"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bytes"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("124")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"packets"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("124")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n \t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sent"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bytes"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"packets"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h2",{attrs:{id:"accesores"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accesores","aria-hidden":"true"}},[s._v("#")]),s._v(" Accesores")]),s._v(" "),a("p",[s._v("Llamamos accesores ("),a("em",[s._v("accessors")]),s._v(") a los elementos de la forma "),a("strong",[s._v("${[accesor]}")]),s._v(" usados por las expresiones para "),a("strong",[s._v("acceder")]),s._v(" a las propiedades del dato de entrada.")]),s._v(" "),a("p",[s._v("Usando como dato de entrada:")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" data "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"John <john@doe.com>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rec"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bytes"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("124")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"packets"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("124")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sent"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bytes"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"packets"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h3",{attrs:{id:"forma-generica"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#forma-generica","aria-hidden":"true"}},[s._v("#")]),s._v(" Forma genérica")]),s._v(" "),a("p",[s._v("La forma genérica de uso es la siguiente:")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("${prop1.subprop2...subpropN}\n")])])]),a("p",[s._v("En dicha forma, no es necesario referenciar el dato de entrada; la ruta empieza siempre por la propiedad de primer:")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Expresión válida")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"${user.email} => ${rec.bytes}"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Expresiones inválidas")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"${data.user.email}"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"${this.rec.bytes}"')]),s._v("\n")])])]),a("h3",{attrs:{id:"json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json","aria-hidden":"true"}},[s._v("#")]),s._v(" JSON")]),s._v(" "),a("p",[s._v("Si lo que se desea es obtener una representación en JSON del dato de entrada, se puede usar la expresión:")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"${JSON}"')]),s._v("\n")])])]),a("p",[s._v("Esto dará como resultado el dato de entrada serializado y formateado:")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{\\n  "user": "John <john@doe.com>",\\n  "rec": {\\n    "bytes": 124,\\n    "packets": 124\\n  },\\n  "sent": {\\n    "bytes": 1000,\\n    "packets": 12\\n  }\\n}\'')]),s._v("\n")])])]),a("h3",{attrs:{id:"puntero-this"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#puntero-this","aria-hidden":"true"}},[s._v("#")]),s._v(' Puntero "this"')]),s._v(" "),a("p",[s._v("En ciertas ocasiones puede ser necesario que un mismo accesor referencia a multiples propiedades del dato de entrada. En estos casos, la primera referencia usará la forma genérica, mientras que las restantes requieren el uso del puntero "),a("strong",[s._v("this")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Interpolación")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"El ratio de entrada / salida es ${rec.bytes / this.sent.bytes}"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Evaluación")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"${rec.bytes || this.rec.packets}"')]),s._v("\n")])])]),a("p",[s._v("Dará como resultado:")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Interpolación")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"El ratio de entrada / salida es 0.124"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Evaluación")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("124")]),s._v("\n")])])]),a("h2",{attrs:{id:"tipo-de-salida"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tipo-de-salida","aria-hidden":"true"}},[s._v("#")]),s._v(" Tipo de salida")]),s._v(" "),a("p",[s._v("Tanto en el caso de la evaluación como la interpolación, el tipo de dato de salida tratará de ajustarse siempre según los siguientes criterios:")]),s._v(" "),a("ul",[a("li",[s._v("Evaluación: Las expresiones de evaluación ejecutan la expresión resultado como código javascript, por lo que el tipo de dato resultante será el obtenido por dicha evaluación.")]),s._v(" "),a("li",[s._v("Interpolación:\n"),a("ul",[a("li",[s._v("Si el resultado es un objeto, la salida permanece como objeto.")]),s._v(" "),a("li",[s._v("Si el resultado es una cadena de texto, pero es evaluablea a un tipo simple (número, booleano...), ese será su tipo de salida. En caso contrario, permanecerá como cadena de texto.")])])])]),s._v(" "),a("p",[s._v("Ejemplos:")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Evaluación")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"${rec.bytes || this.rec.packets}"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// => 124, numérico")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"${rec.bytes} > 0"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// => true, booleano")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Interpolación")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"${rec.bytes}"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 124, numérico")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"${rec.bytes} bytes"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// "124 bytes", texto')]),s._v("\n")])])]),a("h2",{attrs:{id:"mas-sobre-expresiones"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mas-sobre-expresiones","aria-hidden":"true"}},[s._v("#")]),s._v(" Más sobre expresiones")]),s._v(" "),a("p",[s._v("Puedes obtener más información sobre las expresiones visitando los proyectos "),a("a",{attrs:{href:"https://www.npmjs.com/package/jsexpr",target:"_blank",rel:"noopener noreferrer"}},[s._v("jsepxr"),a("OutboundLink")],1),s._v(" y "),a("a",{attrs:{href:"https://www.npmjs.com/package/mingo",target:"_blank",rel:"noopener noreferrer"}},[s._v("Mingo"),a("OutboundLink")],1),s._v(", así como todos los ejemplos de configuración de nsyslog en "),a("a",{attrs:{href:"https://github.com/solzimer/nsyslog/tree/master/examples/config",target:"_blank",rel:"noopener noreferrer"}},[s._v("github"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);