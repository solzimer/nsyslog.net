(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{263:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"inputs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inputs","aria-hidden":"true"}},[t._v("#")]),t._v(" inputs")]),t._v(" "),a("p",[t._v("El elemento "),a("em",[t._v("inputs")]),t._v(" permite instanciar los componentes de entrada:")]),t._v(" "),a("h3",{attrs:{id:"ejemplo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ejemplo","aria-hidden":"true"}},[t._v("#")]),t._v(" Ejemplo")]),t._v(" "),a("p",[t._v("logagent.json")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"inputs"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"reader1"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"file"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"config"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/var/log/*.log"')]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"reader2"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"syslog"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"config"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"url"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"udp://localhost:514"')]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t...\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"parametros"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parametros","aria-hidden":"true"}},[t._v("#")]),t._v(" Parámetros")]),t._v(" "),a("p",[t._v("Todos los elementos de entrada ("),a("em",[t._v("input")]),t._v(") siguen el esquema de "),a("a",{attrs:{href:"./components"}},[t._v("componente")]),t._v(", por lo que se definen con un ID / alias ("),a("em",[t._v("reader1")]),t._v(", "),a("em",[t._v("reader2")]),t._v("...) y tienen el siguiente esquema de configuración:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("type")]),t._v(" : El tipo de "),a("em",[t._v("input")]),t._v(". Puedes ver todos los tipos disponibles de forma nativa en nsyslog en el apartado de "),a("a",{attrs:{href:"../inputs/index"}},[t._v("inputs")]),t._v(". Como se verá más adelante, esposible extender y crear nuevos inputs más allá de los definidos por nsyslog.")]),t._v(" "),a("li",[a("strong",[t._v("when")]),t._v(" : Define un filtro para la salida de los datos. Para más información sobre los filtros, vea el apartado de filtros de "),a("router-link",{attrs:{to:"/es/config/components.html"}},[t._v("componentes")])],1),t._v(" "),a("li",[a("strong",[t._v("disabled")]),t._v(" : ("),a("em",[t._v("true")]),t._v(" / "),a("em",[t._v("false")]),t._v(") Deshabilita el componente, de forma que nunca será instanciado ni usado por ningún flujo.")]),t._v(" "),a("li",[a("strong",[t._v("config")]),t._v(" : Un objeto que define los parámetros de configuración de cada "),a("em",[t._v("input")]),t._v(". Estos parámetros son específicos de cada componente.")])]),t._v(" "),a("h2",{attrs:{id:"instancias"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#instancias","aria-hidden":"true"}},[t._v("#")]),t._v(" Instancias")]),t._v(" "),a("p",[t._v("Cada vez que se declara un "),a("em",[t._v("input")]),t._v(" en el apartado de "),a("em",[t._v("inputs")]),t._v(", se genera una nueva instancia del componente con sus propios parámetros de configuración; así, es posible declarar distintas instancias de un mismo tipo:")]),t._v(" "),a("h3",{attrs:{id:"ejemplo-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ejemplo-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Ejemplo")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"inputs"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"reader_file1"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"file"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"config"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/var/log/*.log"')]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"reader_file2"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"file"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"when"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"filter"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/Exception/.test(${originalMessage})"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"match"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"process"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"nomatch"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"block"')]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"config"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/home/user/logs/*.log"')]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t...\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Son dos instancias de un "),a("em",[t._v("input")]),t._v(" tipo "),a("em",[t._v("file")]),t._v(" (Lectura de ficheros), cada uno con su propia configuración.")])])}),[],!1,null,null,null);s.default=n.exports}}]);