(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{201:function(t,s,a){"use strict";a.r(s);var r=a(0),n=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"kafka-transporter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kafka-transporter","aria-hidden":"true"}},[t._v("#")]),t._v(" Kafka Transporter")]),t._v(" "),a("p",[t._v("Sends data through Apache Kafka message broker")]),t._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("p",[t._v("Sends to a kafka cluster with roundrobin on its topic partitions")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"transporters"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"kafka"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kafka"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"config"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"url"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kafka://host1:9092"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kafka://host2:9092"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"format"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"${originalMessage}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"topic"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nsyslog_topic"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"mode"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"roundrobin"')]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Sends to a kafka cluster (secure protocol), using a hashed field to distribute load on each partition.")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"transporters"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"kafka"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kafka"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"config"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"url"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kafkas://host1:9092"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kafkas://host2:9092"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"format"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"${originalMessage}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"topic"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nsyslog_topic"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"mode"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hashed"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"field"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"${severity}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tls"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rejectUnauthorized"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"configuration-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-parameters","aria-hidden":"true"}},[t._v("#")]),t._v(" Configuration parameters")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("url")]),t._v(" : Kafka Endpoint (proto://host:port/path), where "),a("em",[t._v("proto")]),t._v(" can be either kafka or kafkas.")]),t._v(" "),a("li",[a("strong",[t._v("format")]),t._v(" : Output expression of the message being sent")]),t._v(" "),a("li",[a("strong",[t._v("topic")]),t._v(" : Kafka topic (allows expression)")]),t._v(" "),a("li",[a("strong",[t._v("mode")]),t._v(" : Topic partition balance mode:\n"),a("ul",[a("li",[t._v("roundrobin : Simple roundrobin mechanism")]),t._v(" "),a("li",[t._v("hashed : Partition is assigned using a numeric hash from an entry field")]),t._v(" "),a("li",[t._v("fixed : Partition is assigned using a numeric field")])])]),t._v(" "),a("li",[a("strong",[t._v("field")]),t._v(" : Field expression to be used in "),a("em",[t._v("hashed")]),t._v(" or "),a("em",[t._v("fixed")]),t._v(" mode.")]),t._v(" "),a("li",[a("strong",[t._v("tls")]),t._v(" : TLS options as described in "),a("a",{attrs:{href:"https://nodejs.org/api/tls.html#tls_tls_createsecurecontext_options",target:"_blank",rel:"noopener noreferrer"}},[t._v("NodeJS documentation"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=n.exports}}]);