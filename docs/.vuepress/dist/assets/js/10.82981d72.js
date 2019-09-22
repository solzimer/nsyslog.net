(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{249:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"flows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flows","aria-hidden":"true"}},[t._v("#")]),t._v(" Flows")]),t._v(" "),a("p",[t._v("Flows are the way data is processed by NSyslog. It's the composition of inputs, filters, processors and transporters, in order to collect data from sourcesm transform it, and send it to its destinations.")]),t._v(" "),a("p",[t._v("A flow tipically looks like this:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"flows"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ID is optional, but recomended")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myflow"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Can be a filter, a input ID or an inline expression")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"from"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"files"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Can be a filter or inline expression")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"when"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"${originalMessage}.match(/root/)"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Disable flow (false by default)")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"disabled"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Processors")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"processors"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"timestamp"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$groupAndFilter"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Transporters")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"transporters"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"logger"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$fileAndMongo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Transporters mode")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mode"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"parallel"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Forked or in main process (main process by default)")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"forked"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),a("p",[t._v("Flows are declared in the JSON configuration file, following this syntax:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("id")]),t._v(" : ID is optional since every flow without one will receive an automatic identifier. But can be useful in case you need to keep track of the flow work.")]),t._v(" "),a("li",[a("strong",[t._v("from")]),t._v(": Can be a filter ID, a filter group (preceded by a $), an input ID, or an inline expression. This field describes which entries will be sent to this flow. There are two special filters that can be used:\n"),a("ul",[a("li",[t._v("* : When * is used, a flow will accept all entries.")]),t._v(" "),a("li",[t._v("DEFAULT : Tis a special case where a flow will receive entries that haven't been sent to any other flow.")])])]),t._v(" "),a("li",[a("strong",[t._v("when")]),t._v(" : Can be a filter ID, a filter group (preceded by a $), or an inline expression. "),a("strong",[t._v("when")]),t._v(" is meant to be a second filter, useful when nesting flows (see below for nested flows)")]),t._v(" "),a("li",[a("strong",[t._v("disabled")]),t._v(" : Optional. Can "),a("em",[t._v("true")]),t._v(" or "),a("em",[t._v("false")]),t._v(" ("),a("em",[t._v("false")]),t._v(" by default). This disables a flow (useful for test and debugging purpose).")]),t._v(" "),a("li",[a("strong",[t._v("processors")]),t._v(" : A list of processor / processor group IDs (preceded by $). This is the list of processor instances that will transform the entries. They are chained in the same order they are declared.")]),t._v(" "),a("li",[a("strong",[t._v("transporters")]),t._v(" : A list of transporter / transporter group IDs (preceded by $). This is the list of transporter instances that will send the entries to their destinatios. They are chained in the same order they are declared.")]),t._v(" "),a("li",[a("strong",[t._v("mode")]),t._v(" : Optional. Can be either "),a("em",[t._v("serial")]),t._v(" or "),a("em",[t._v("parallel")]),t._v(" ("),a("em",[t._v("serial")]),t._v(" by default). If there are more than one transporter referenced in the "),a("em",[t._v("transporters")]),t._v(" section (note that a transporter group is seen as a single transporter by the flow), this field (as seen in the "),a("router-link",{attrs:{to:"/transporters/"}},[t._v("transporters section")]),t._v(") indicates whether transporters are run in serial or parallel mode.")],1),t._v(" "),a("li",[a("strong",[t._v("forked")]),t._v(" : Optional. Can be "),a("em",[t._v("true")]),t._v(" or "),a("em",[t._v("false")]),t._v(". When a flow is forked, NSyslog spawns a new process where the flow will be executed. This is useful on multicore CPUs, so we can release som workload from the main process and send it to this child process. This way you can take advantage of multicore CPUs. Take in mind, however, these considerations:\n"),a("ul",[a("li",[t._v("Inputs are still executed in the main process, so entries must be sent to the child processes via IPC mechanisms. This implies that serialization/deserialization of entries can surpass the benefits of forking the flow.")]),t._v(" "),a("li",[t._v("If you plan to reference a processor / transporter in multiple flows (so they can "),a("em",[t._v("correlate")]),t._v(" entries in some way; collecting stats, execute bussiness rules, etc..) note that a forked process doesn't share any state from its parent process, so, a different process means different processor / transporter instances, that "),a("strong",[t._v("shares nothing")]),t._v(" whith their parent ones.")])])])]),t._v(" "),a("h2",{attrs:{id:"nested-flows-flow-inheritance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nested-flows-flow-inheritance","aria-hidden":"true"}},[t._v("#")]),t._v(" Nested flows (flow inheritance)")]),t._v(" "),a("p",[t._v("Nested flows are a way to avoid writing multiple flows in the configuration file that shares many things in common. This way, you write a hierarchical flow tree where children processes inherits the properties of their parent:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"flows"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"from"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"localhost"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"transporters"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"log"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mode"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"parallel"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"flows"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"when"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"httpOk"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"transporters"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"log"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"when"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"httpRed"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"transporters"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"warn"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"when"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"httpErr"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"transporters"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[a("router-link",{attrs:{to:"/"}},[t._v("Back")])],1)])}),[],!1,null,null,null);s.default=e.exports}}]);