(window.webpackJsonp=window.webpackJsonp||[]).push([[341],{1084:function(t,e,o){t.exports=o.p+"assets/img/create-custom-object-action.192b6e32.png"},2319:function(t,e,o){"use strict";o.r(e);var a=o(0),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"create-update-custom-objects"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-update-custom-objects"}},[t._v("#")]),t._v(" Create/Update custom objects")]),t._v(" "),a("p",[t._v("You can extend Workday business objects by configuring custom objects. These custom objects are based on default Workday and can store additional custom fields. Custom objects enable you to record additional data which is not captured by the default Workday objects.")]),t._v(" "),a("h2",{attrs:{id:"create-update-custom-objects-actions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-update-custom-objects-actions"}},[t._v("#")]),t._v(" Create/update custom objects actions")]),t._v(" "),a("p",[t._v("This action allows you to create or update custom object values to a Workday record. If the parent object does not have the specified custom object record, this action will create one. Otherwise, it will update the custom object record with the values provided.")]),t._v(" "),a("h4",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("p",[t._v("For example, we are setting a new onboarding process for our employee. Every employee has to undergo a drug test. On Workday, we set up a custom object called "),a("strong",[t._v("drugTested")]),t._v(" under the parent object "),a("strong",[t._v("Workers")]),t._v(".")]),t._v(" "),a("p",[t._v("We can use this action to assign a status to a worker. If a worker does not previously have a "),a("strong",[t._v("drugTested")]),t._v(" status, this action will create the custom object for this worker.")]),t._v(" "),a("p",[t._v("Otherwise, if this worker already has a "),a("strong",[t._v("drugTested")]),t._v(" object (e.g. "),a("code",[t._v("True")]),t._v("/"),a("code",[t._v("False")]),t._v("), this action will update the custom object with a new value.")]),t._v(" "),a("h2",{attrs:{id:"inputs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inputs"}},[t._v("#")]),t._v(" Inputs")]),t._v(" "),a("p",[a("DocImage",{attrs:{src:o(1084),alt:"Create custom object action",width:"2436",height:"1490"}}),t._v(" "),a("em",[t._v("Create/update custom object action")])],1),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Input field")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Parent object name")]),t._v(" "),a("td",[t._v("The name of the parent object.")])]),t._v(" "),a("tr",[a("td",[t._v("Custom object fields")]),t._v(" "),a("td",[t._v("Define the fields in this custom object. If left blank, it will retrieve all fields with their default names.")])]),t._v(" "),a("tr",[a("td",[t._v("Custom object")]),t._v(" "),a("td",[t._v("Select the custom object that you want to retrieve. This is the Web service alias of the custom object.")])]),t._v(" "),a("tr",[a("td",[t._v("Parent object ID")]),t._v(" "),a("td",[t._v("The Workday ID of the parent object that you are selecting.")])])])]),t._v(" "),a("h4",{attrs:{id:"example-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-2"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("p",[t._v("For example, for worker "),a("code",[t._v("6b36787a2e6301e185df0a95ff272a04")]),t._v(" who has passed his drug test, we will use the "),a("strong",[t._v("Create/update custom object")]),t._v(" action and define it like so:")]),t._v(" "),a("ul",[a("li",[t._v("Parent object name: "),a("code",[t._v("workerCustomDataSnapshot")])]),t._v(" "),a("li",[t._v("Custom object: "),a("code",[t._v("drugTested")])]),t._v(" "),a("li",[t._v("Custom object field (Drug tested): "),a("code",[t._v("True")])]),t._v(" "),a("li",[t._v("Parent object ID: "),a("code",[t._v("6b36787a2e6301e185df0a95ff272a04")])])]),t._v(" "),a("h2",{attrs:{id:"outputs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#outputs"}},[t._v("#")]),t._v(" Outputs")]),t._v(" "),a("p",[t._v("There are no output for this action.")]),t._v(" "),a("p",[t._v("You can check the custom object status of your worker with a "),a("router-link",{attrs:{to:"/connectors/workday/get-custom-objects.html"}},[t._v("Get custom object action")]),t._v(".")],1)])}),[],!1,null,null,null);e.default=s.exports}}]);