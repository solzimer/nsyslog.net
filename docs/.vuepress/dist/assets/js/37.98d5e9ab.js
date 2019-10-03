(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{295:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"instalacion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#instalacion","aria-hidden":"true"}},[t._v("#")]),t._v(" Instalación")]),t._v(" "),a("p",[t._v("Nsyslog puede ser usado tanto como una aplicación 'standalone', o incluido en tu propio proyecto como un módulo de NodeJS")]),t._v(" "),a("h2",{attrs:{id:"requisitos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requisitos","aria-hidden":"true"}},[t._v("#")]),t._v(" Requisitos")]),t._v(" "),a("ul",[a("li",[t._v("Sistema operativo: Windows 7 o superior, Linux o MacOS")]),t._v(" "),a("li",[t._v("NodeJS 8.x o superior")]),t._v(" "),a("li",[t._v("Es posible que sea necesario compilar algunos módulos nativos, por lo que se recomienda disponer del entorno de compilación apropiado de cada sistema: Visual Studio, gcc o XCode.")])]),t._v(" "),a("h2",{attrs:{id:"como-una-aplicacion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#como-una-aplicacion","aria-hidden":"true"}},[t._v("#")]),t._v(" Como una aplicación")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npm install -g nsyslog\n")])])]),a("p",[t._v("Luego:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" nsyslog --help\nUsage: nsyslog "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\nOptions:\n\t-h, --help               output usage information\n\t-V, --version            output the version number\n\t-f, --file "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("        Config "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v("\n\t-t, --test               Only validate config "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v("\n\t-l, --log-file "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("    Output log "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default stdout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t-L, --log-level "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("level"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  Debug level\n\t--cli                    Starts CLI session\n\t--cli-start              Starts CLI session and flows\n")])])]),a("h2",{attrs:{id:"como-un-modulo-nodejs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#como-un-modulo-nodejs","aria-hidden":"true"}},[t._v("#")]),t._v(" Como un módulo NodeJS")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npm install -save nsyslog\n")])])]),a("p",[t._v("Luego:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" NSyslog "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'nsyslog'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" cfg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" NSyslog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("readConfig")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"config.json"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" nsyslog "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NSyslog")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cfg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" nsyslog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"siguientes-pasos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#siguientes-pasos","aria-hidden":"true"}},[t._v("#")]),t._v(" Siguientes pasos")]),t._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:"/es/intro/install.html"}},[t._v("Instalación")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/es/intro/basics.html"}},[t._v("Conceptos básicos")])],1),t._v(" "),a("li",[t._v("Ejemplo 1: Servidor syslog con escritura a fichero. "),a("router-link",{attrs:{to:"/es/intro/example1.html"}},[t._v("Ir a ejemplo")])],1),t._v(" "),a("li",[t._v("Ejemplo 2: Lectura de CSV con escritura a MongoDB. "),a("router-link",{attrs:{to:"/es/intro/example2.html"}},[t._v("Ir a ejemplo")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/es/intro/commands.html"}},[t._v("Línea de comandos")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/es/intro/cli.html"}},[t._v("Modo CLI")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/es/intro/expressions.html"}},[t._v("Expresiones")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/es/"}},[t._v("Volver")])],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);