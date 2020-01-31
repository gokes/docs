(window.webpackJsonp=window.webpackJsonp||[]).push([[488],{2409:function(t,e,o){"use strict";o.r(e);var n=o(0),r=Object(n.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"http-connector-v2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#http-connector-v2"}},[t._v("#")]),t._v(" HTTP connector V2")]),t._v(" "),o("p",[t._v("The HTTP connector enables integration with any cloud applications that has a HTTP-based API. You can create a new connector as well as add new triggers or actions to existing Workato connectors.")]),t._v(" "),o("p",[t._v("This article covers the V2 HTTP connector, which launched in July 2018. If you are using the V1 HTTP connector (which has been deprecated), refer to the "),o("router-link",{attrs:{to:"/developing-connectors/http.html"}},[t._v("V1 HTTP connector documentation")]),t._v(".")],1),t._v(" "),o("h2",{attrs:{id:"what-is-the-http-connector-and-what-is-it-useful-for"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#what-is-the-http-connector-and-what-is-it-useful-for"}},[t._v("#")]),t._v(" What is the HTTP connector and what is it useful for?")]),t._v(" "),o("p",[t._v("The generic HTTP connector allows you to interact with cloud applications with an application program interface (API). This allows you to build additional triggers or actions on the Workato platform to power your integration recipes.")]),t._v(" "),o("p",[t._v("Want to create an invoice in your accounting system? You can make a POST request with a JSON request body. Want to retrieve metrics from your analytics application? You can make a GET request with your query parameters. Want to trigger off upon new leads filling out your online form? Create a webhook trigger that notifies Workato immediately whenever a new lead completes your form.")]),t._v(" "),o("h2",{attrs:{id:"http-triggers-and-action"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#http-triggers-and-action"}},[t._v("#")]),t._v(" HTTP triggers and action")]),t._v(" "),o("p",[t._v("The HTTP connector can be found in the connector picklist. It has 2 triggers and 1 action:")]),t._v(" "),o("ul",[o("li",[t._v("New event via webhook trigger (real-time)")])]),t._v(" "),o("p",[t._v("Workato provides you with an unique target URL to send webhooks to. Webhooks received will be immediately processed by the recipe as a trigger event.")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Type")]),t._v(" "),o("th",[t._v("Name")]),t._v(" "),o("th",[t._v("Description")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("Trigger")]),t._v(" "),o("td",[t._v("New event via polling")]),t._v(" "),o("td",[t._v("Workato polls the app endpoint regularly to check for new trigger events. Each new/updated record will be processed by the recipe as a trigger event.")])]),t._v(" "),o("tr",[o("td",[t._v("Action")]),t._v(" "),o("td",[t._v("Send Request")]),t._v(" "),o("td",[t._v("Configure a HTTP request to an endpoint and use the response data as datapills.")])])])]),t._v(" "),o("blockquote",[o("p",[t._v("If your use-case requires you to respond immediately to trigger events and your app allows you to create webhooks, you can use a webhooks trigger from the "),o("router-link",{attrs:{to:"/connectors/workato-webhooks.html"}},[t._v("Webhooks connector")]),t._v(".")],1)]),t._v(" "),o("h2",{attrs:{id:"http-setup-documentation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#http-setup-documentation"}},[t._v("#")]),t._v(" HTTP setup documentation")]),t._v(" "),o("p",[t._v("With the HTTP connector, it takes less than 20 minutes to build your own action on Workato. This documentation includes the following chapters:")]),t._v(" "),o("ul",[o("li",[o("router-link",{attrs:{to:"/developing-connectors/http/connection-setup.html"}},[t._v("Setting up a connection to your app")])],1),t._v(" "),o("li",[o("router-link",{attrs:{to:"/developing-connectors/http/building-http-trigger.html"}},[t._v("Building a HTTP trigger")])],1),t._v(" "),o("li",[o("router-link",{attrs:{to:"/developing-connectors/http/building-http-action.html"}},[t._v("Building a HTTP action")])],1)])])}),[],!1,null,null,null);e.default=r.exports}}]);