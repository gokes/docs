(window.webpackJsonp=window.webpackJsonp||[]).push([[303],{2198:function(e,t,i){"use strict";i.r(t);var n=i(0),l=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"on-prem-files-new-line-in-csv-file-trigger"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#on-prem-files-new-line-in-csv-file-trigger"}},[e._v("#")]),e._v(" On-prem files - New line in CSV file trigger")]),e._v(" "),n("p",[e._v("This trigger picks up new lines added to the end of a selected CSV file. Each line is processed as a separate job.")]),e._v(" "),n("p",[e._v("When the recipe is first started, the trigger will pick up all existing lines in the selected CSV file. Subsequently, each new line added to the end of the file will be processed as a new job.")]),e._v(" "),n("p",[e._v("This trigger checks for new lines once every poll interval. The poll interval can be 10 mins or 5 mins, depending on your plan. Check the "),n("a",{attrs:{href:"https://www.workato.com/pricing?audience=general",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pricing and Plans page"),n("OutboundLink")],1),e._v(" to find out more.")]),e._v(" "),n("p",[n("DocImage",{attrs:{src:i(729),alt:"New line in CSV file trigger",width:"2206",height:"1507"}}),e._v(" "),n("em",[e._v("New line in CSV file trigger")])],1),e._v(" "),n("h2",{attrs:{id:"input-fields"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#input-fields"}},[e._v("#")]),e._v(" Input fields")]),e._v(" "),n("table",{staticClass:"unchanged rich-diff-level-one"},[n("thead",[n("tr",[n("th",{attrs:{width:"25%"}},[e._v("Input field")]),e._v(" "),n("th",[e._v("Description")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("CSV file")]),e._v(" "),n("td",[e._v("\n        First, select a CSV file to process lines from. This CSV file must have a header line. The value of each column in the header will be used to generate the output schema of the trigger.\n      ")])]),e._v(" "),n("tr",[n("td",[e._v("Column delimiter")]),e._v(" "),n("td",[e._v("\n        Next, select a column delimiter for this selected CSV file. The delimiters available are: comma, semicolon, space and tab.\n      ")])])])]),e._v(" "),n("h2",{attrs:{id:"output-fields"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#output-fields"}},[e._v("#")]),e._v(" Output fields")]),e._v(" "),n("table",{staticClass:"unchanged rich-diff-level-one"},[n("thead",[n("tr",[n("th",{attrs:{width:"25%"}},[e._v("Output field")]),e._v(" "),n("th",[e._v("Description")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("Line number")]),e._v(" "),n("td",[e._v("Line number of the line currently being processed. Header lines are not processed, so the first line has the value 1.")])]),e._v(" "),n("tr",[n("td",[e._v("Columns")]),e._v(" "),n("td",[e._v("This is an object type datapill. Columns of the selected CSV file will be available as datapills here.")])])])])])}),[],!1,null,null,null);t.default=l.exports},729:function(e,t,i){e.exports=i.p+"assets/img/new-line-trigger.f95af494.png"}}]);