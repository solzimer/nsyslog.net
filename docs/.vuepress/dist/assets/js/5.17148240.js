(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{191:function(e,t,s){e.exports=s.p+"assets/img/nsyslog.74a6e767.svg"},268:function(e,t,s){"use strict";s.r(t);var a=s(0),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"basics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basics","aria-hidden":"true"}},[e._v("#")]),e._v(" Basics")]),e._v(" "),a("h2",{attrs:{id:"what-is-nsyslog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-nsyslog","aria-hidden":"true"}},[e._v("#")]),e._v(" What is NSyslog")]),e._v(" "),a("p",[e._v("NSyslog is, in essence, a log agent: That is, a process that reads log lines from sources, applies transformations to them, and sends the resulting data to its destinations.")]),e._v(" "),a("h2",{attrs:{id:"what-can-be-done"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-can-be-done","aria-hidden":"true"}},[e._v("#")]),e._v(" What can be done?")]),e._v(" "),a("p",[e._v("Some examples:")]),e._v(" "),a("ul",[a("li",[e._v("Run a syslog server that listens to UDP/TCP syslog messages and write them to disk")]),e._v(" "),a("li",[e._v("Read data from a file, parse it, generate events and store them to a database")]),e._v(" "),a("li",[e._v("Subscribe to message queues and operate over the data")]),e._v(" "),a("li",[e._v("Read Windows events and publish them to a realtime pub/sub mechanism")])]),e._v(" "),a("p",[e._v("There's many more that can be done; it depends on your use case. To achieve this level of functionality, NSyslog core architecture is described as follows")]),e._v(" "),a("h2",{attrs:{id:"architecture"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#architecture","aria-hidden":"true"}},[e._v("#")]),e._v(" Architecture")]),e._v(" "),a("p",[a("img",{attrs:{src:s(191),alt:"Architecture"}})]),e._v(" "),a("p",[e._v("There are four basic components that run under NSyslog:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("inputs")]),e._v(": Inputs are responsible for collecting data. An input can be a file reader, an HTTP server, Syslog server, database connector, etc... Inputs collect data one "),a("strong",[e._v("entry")]),e._v(" (line) at a time, and can be active (pull) or passive (push)")]),e._v(" "),a("li",[a("strong",[e._v("processors")]),e._v(": Processors are cappable of operate over each entry, to perform operations and transformations. They can parse raw data, json, csv or syslog data, stablish new and computed properties, filter and group, etc... Some processors can even be multithreaded (Yes, in node!).")]),e._v(" "),a("li",[a("strong",[e._v("transporters")]),e._v(": They are the opposite of inputs; They receive the processed entries and send them to their destination endpoints.")]),e._v(" "),a("li",[a("strong",[e._v("flows")]),e._v(": A flow describes a path between inputs, processors and transporters, and are responsible of manage all the process as fast as possible, guaranteeing message order and fault tolerance. Additionally, flows can be forked to take advantage of multi-core cpus.")])]),e._v(" "),a("p",[e._v("When inputs collect data, it can be done via "),a("em",[e._v("pull")]),e._v(" or "),a("em",[e._v("push")]),e._v(" methods. "),a("em",[e._v("Pull")]),e._v(" inputs are those that read entries whenever the flows requires it. For example, file inputs are "),a("em",[e._v("pull inputs")]),e._v(", since they "),a("em",[e._v("activelly")]),e._v(" read the file contents only when requested. As opposite, "),a("em",[e._v("push")]),e._v(" inputs listens for incoming data, and push it to the flow as soon as it arrives, so they cannot perform any flow control. For example, an HTTP server listens for connections and receive the data. In these cases, data is buffered in disk, so the flows are not overflowed by the incoming entries.")]),e._v(" "),a("p",[e._v("When a entry matches a flow condition (that is, a flow wants to process this kind of data), it sends the entries to the processors, that can be either sync, or async. The flow process guarantees that the entry order is preserved.")]),e._v(" "),a("p",[e._v("Finally, when the entries arrive to the transporters phase, they are sent to its final destinations. The flow can configure transporters to operate in serial or parallel mode (or a mix, as we will see)")]),e._v(" "),a("p",[a("router-link",{attrs:{to:"/es/"}},[e._v("Back")])],1)])}),[],!1,null,null,null);t.default=r.exports}}]);