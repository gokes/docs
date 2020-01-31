(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{13:function(e,t,r){e.exports=r.p+"assets/img/extended-output.a47e5b0f.gif"},2273:function(e,t,r){"use strict";r.r(t);var a=r(0),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"servicenow-new-updated-record-triggers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#servicenow-new-updated-record-triggers"}},[e._v("#")]),e._v(" ServiceNow - New/updated record triggers")]),e._v(" "),a("h2",{attrs:{id:"new-updated-record"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-updated-record"}},[e._v("#")]),e._v(" New/updated record")]),e._v(" "),a("p",[e._v("This trigger picks up records that are created or updated in the selected table. Each record is processed as a separate job. It checks for new or updated records once every poll interval. The poll interval can be 10 mins or 5 mins, depending on your plan. Check the "),a("a",{attrs:{href:"https://www.workato.com/pricing?audience=general",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pricing and Plans page"),a("OutboundLink")],1),e._v(" to find out more.")]),e._v(" "),a("p",[a("DocImage",{attrs:{src:r(961),alt:"New/updated record trigger",width:"1000",height:"926"}}),e._v(" "),a("em",[e._v("New/updated record trigger")])],1),e._v(" "),a("h3",{attrs:{id:"input-fields"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#input-fields"}},[e._v("#")]),e._v(" Input fields")]),e._v(" "),a("table",{staticClass:"unchanged rich-diff-level-one"},[a("thead",[a("tr",[a("th",{attrs:{width:"25%"}},[e._v("Input field")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{href:"#from"}},[e._v("From")])]),e._v(" "),a("td",[e._v("\n        Records created or updated after this time will be processed by the recipe. If left blank, the default time will be set to "),a("b",[e._v("one day")]),e._v(" before the recipe is first started.\n      ")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#table"}},[e._v("Table")])]),e._v(" "),a("td",[e._v("\n        Select a table to pick up new or updated records from.\n      ")])])])]),e._v(" "),a("h3",{attrs:{id:"output-fields"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-fields"}},[e._v("#")]),e._v(" Output fields")]),e._v(" "),a("p",[e._v("The output datatree of this trigger contains the full set of columns from the selected table. All default and custom columns are supported. The output fields will be displayed only after a table is provided, either by selecting a table from the pick list or by providing the full table name.")]),e._v(" "),a("p",[a("DocImage",{attrs:{src:r(13),alt:"Output fields",width:"1101",height:"543"}}),e._v(" "),a("em",[e._v("Output fields")])],1),e._v(" "),a("h2",{attrs:{id:"new-updated-record-real-time"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-updated-record-real-time"}},[e._v("#")]),e._v(" New/updated record (real-time)")]),e._v(" "),a("p",[e._v("This trigger picks up records in the selected table as soon they are created or updated. Each record is processed as a separate job. It makes use of business rules to detect and trigger a new or updated record event to be processed.")]),e._v(" "),a("p",[a("strong",[e._v("To use this trigger, the connected user must have sufficient access control to sys_script table. Learn how to configure "),a("router-link",{attrs:{to:"/connectors/servicenow.html#real-time-trigger"}},[e._v("access control for real time triggers")]),e._v(".")],1)]),e._v(" "),a("p",[a("DocImage",{attrs:{src:r(962),alt:"New/updated record trigger",width:"1000",height:"1020"}}),e._v(" "),a("em",[e._v("New/updated record trigger")])],1),e._v(" "),a("h3",{attrs:{id:"input-fields-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#input-fields-2"}},[e._v("#")]),e._v(" Input fields")]),e._v(" "),a("table",{staticClass:"unchanged rich-diff-level-one"},[a("thead",[a("tr",[a("th",{attrs:{width:"25%"}},[e._v("Input field")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{href:"#unique-key"}},[e._v("From")])]),e._v(" "),a("td",[e._v("\n        Records created or updated after this time will be processed by the recipe. If left blank, the default time will be set to "),a("b",[e._v("one day")]),e._v(" before the recipe is first started.\n      ")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#table"}},[e._v("Table")])]),e._v(" "),a("td",[e._v("\n        Select a table to pick up new or updated records from.\n      ")])])])]),e._v(" "),a("h3",{attrs:{id:"output-fields-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-fields-2"}},[e._v("#")]),e._v(" Output fields")]),e._v(" "),a("p",[e._v("The output datatree of this trigger contains the full set of columns from the selected table. All default and custom columns are supported. The output fields will be displayed only after a table is provided, either by selecting a table from the pick list or by providing the full table name.")]),e._v(" "),a("p",[a("DocImage",{attrs:{src:r(13),alt:"Output fields",width:"1101",height:"543"}}),e._v(" "),a("em",[e._v("Output fields")])],1),e._v(" "),a("h2",{attrs:{id:"input-field-definitions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#input-field-definitions"}},[e._v("#")]),e._v(" Input field definitions")]),e._v(" "),a("h3",{attrs:{id:"from"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#from"}},[e._v("#")]),e._v(" From")]),e._v(" "),a("p",[e._v("This is a user-defined time that marks the earliest time that the trigger should pick up created or updated records. If left blank, the default time will be set to "),a("b",[e._v("one day")]),e._v(" before the recipe is first started.")]),e._v(" "),a("p",[e._v("The "),a("strong",[e._v("Updated (sys_updated_on)")]),e._v(" column is used to determine the time that a record is created or updated. Only records with "),a("strong",[e._v("Updated (sys_updated_on)")]),e._v(" timestamp later than the time specified in "),a("strong",[e._v("From")]),e._v(" will be processed by the trigger.")]),e._v(" "),a("p",[a("DocImage",{attrs:{src:r(963),alt:"Updated (sys_updated_on) timestamp",width:"1282",height:"642"}}),e._v(" "),a("em",[e._v("Updated (sys_updated_on) timestamp")])],1),e._v(" "),a("h3",{attrs:{id:"table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#table"}},[e._v("#")]),e._v(" Table")]),e._v(" "),a("p",[e._v("Select the table to process records from. This can be done either by selecting a table from the pick list, or toggling the input field to text mode and typing the full table name.")]),e._v(" "),a("p",[e._v("Make sure that the user used in the connection has "),a("router-link",{attrs:{to:"/connectors/servicenow.html#roles-and-permissions-required-to-connect"}},[e._v("sufficient access control")]),e._v(" to the selected table.")],1)])}),[],!1,null,null,null);t.default=s.exports},961:function(e,t,r){e.exports=r.p+"assets/img/updated-record-trigger.94f84a18.png"},962:function(e,t,r){e.exports=r.p+"assets/img/updated-record-trigger-real-time.ae3ecb5e.png"},963:function(e,t,r){e.exports=r.p+"assets/img/sys-updated-on.eecae1bd.png"}}]);