(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{1088:function(t,e,r){t.exports=r.p+"assets/img/raas_input.353bef14.png"},1089:function(t,e,r){t.exports=r.p+"assets/img/custom-report-schema-input.d3d2386e.png"},1090:function(t,e,r){t.exports=r.p+"assets/img/raas_output.65a99be2.png"},1091:function(t,e,r){t.exports=r.p+"assets/img/compose-csv.13cc58fd.png"},1092:function(t,e,r){t.exports=r.p+"assets/img/multi_app_filter.7cfa2fb5.png"},2321:function(t,e,r){"use strict";r.r(e);var o=r(0),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"get-report"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#get-report"}},[t._v("#")]),t._v(" Get report")]),t._v(" "),o("h2",{attrs:{id:"how-to-use"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use"}},[t._v("#")]),t._v(" How to use")]),t._v(" "),o("p",[t._v("Workday Report-as-a-Service is exposed as an action in Workato. This action will execute a run of the report, retrieve all data from that report and return them as an array. This data can be used in a recipe like any other actions. Learn how to set up a custom report "),o("router-link",{attrs:{to:"/connectors/workday/workday_raas.html"}},[t._v("here")]),t._v(".")],1),t._v(" "),o("h2",{attrs:{id:"inputs"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#inputs"}},[t._v("#")]),t._v(" Inputs")]),t._v(" "),o("p",[t._v("Provide the report URL to run and retrieve a report from Workday.")]),t._v(" "),o("p",[o("DocImage",{attrs:{src:r(1088),alt:"Run report input",width:"2385",height:"1724"}}),t._v(" "),o("em",[t._v("Run report input")])],1),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Input field")]),t._v(" "),o("th",[t._v("Description")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("Report URL")]),t._v(" "),o("td",[t._v("Find out how to get this URL in the "),o("router-link",{attrs:{to:"/connectors/workday/workday_raas.html"}},[t._v("Custom Reports")]),t._v(" section of this documentation. When this URL is provided, the Workday action will generate the appropriate output fields.")],1)]),t._v(" "),o("tr",[o("td",[t._v("Detect report schema automatically")]),t._v(" "),o("td",[t._v("If you do not want Workato to inspect the report, select "),o("code",[t._v("No")]),t._v(". Then, "),o("a",{attrs:{href:"#configure-report-parameters-and-columns"}},[t._v("configure your report schema")]),t._v("."),o("br"),o("b",[t._v("This should be used when you intend to use a dynamic value for the report URL.")]),o("br"),t._v("If left blank, report schema will be detected automatically.")])]),t._v(" "),o("tr",[o("td",[t._v("Remove empty fields")]),t._v(" "),o("td",[t._v("If "),o("code",[t._v("Yes")]),t._v(", Workato will remove all "),o("code",[t._v("Null values")]),t._v(" and leave the field empty."),o("br"),t._v(" Default is "),o("code",[t._v("Yes")]),t._v(".")])]),t._v(" "),o("tr",[o("td",[t._v("Additional fields")]),t._v(" "),o("td",[t._v("If some report fields (e.g. nested fields) do not appear in the action output, use this input field to define them.")])])])]),t._v(" "),o("h2",{attrs:{id:"configure-report-parameters-and-columns"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configure-report-parameters-and-columns"}},[t._v("#")]),t._v(" Configure report parameters and columns")]),t._v(" "),o("p",[o("DocImage",{attrs:{src:r(1089),alt:"Configure report parameters and columns manually",width:"2738",height:"3343"}}),t._v(" "),o("em",[t._v("Configure report parameters and columns manually")])],1),t._v(" "),o("p",[t._v("Sometimes, you need to use a dynamic value for the report URL. A common reason is to maintain recipes across multiple Workday environments (dev and production). Even though reports in both environments have the same schema, they will have different report URLs. So to reduce the work needed to maintain the recipes, you can manage and reuse the same recipe by using an account properties datapill to assign it the appropriate report URL.")]),t._v(" "),o("blockquote",[o("p",[t._v("In this case, select "),o("code",[t._v("No")]),t._v(" for the "),o("strong",[t._v("Detect report schema automatically")]),t._v(" input field.")])]),t._v(" "),o("p",[t._v("Consequently, Workato will not be able to generate the report schema automatically. This is because the actual report url is only evaluated when a recipe job is processed. When you are building the recipe, the report URL is still unknown, so there will not be any information about the report schema.")]),t._v(" "),o("p",[t._v("When you do that, additional input fields will appear for you to manually define your report "),o("router-link",{attrs:{to:"/connectors/workday/workday_raas.html#filter-parameters"}},[t._v("parameters")]),t._v(" and columns.")],1),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Additional input fields")]),t._v(" "),o("th",[t._v("Description")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("Report Parameters")]),t._v(" "),o("td",[t._v("The filter parameters for your custom report. Input the "),o("strong",[t._v("parameter alias")]),t._v(" and the "),o("strong",[t._v("value")]),t._v(" according to how your custom report is configured.")])]),t._v(" "),o("tr",[o("td",[t._v("Report columns")]),t._v(" "),o("td",[t._v("The output of your report. List the columns of your workday custom report. This schema will be converted into usable datapills for subsequently recipe actions on Workato.")])])])]),t._v(" "),o("h2",{attrs:{id:"outputs"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#outputs"}},[t._v("#")]),t._v(" Outputs")]),t._v(" "),o("p",[t._v("The output of this action is presented as an array. Each element in this array corresponds to a row in the report. Similarly, each column in your report will be rendered as a field in the report output array.")]),t._v(" "),o("p",[t._v("If you configured a custom schema in "),o("strong",[t._v("Report column")]),t._v(", the custom report columns will be reflected as datapills.")]),t._v(" "),o("p",[o("DocImage",{attrs:{src:r(1090),alt:"Outputs from Get report action",width:"2553",height:"1522"}}),t._v(" "),o("em",[t._v("Outputs from Get report action")])],1),t._v(" "),o("h2",{attrs:{id:"use-cases"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#use-cases"}},[t._v("#")]),t._v(" Use cases")]),t._v(" "),o("h4",{attrs:{id:"generate-a-custom-csv-file"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#generate-a-custom-csv-file"}},[t._v("#")]),t._v(" Generate a custom CSV file")]),t._v(" "),o("p",[t._v("A very simple use case for running and retrieving custom report data from Workday is to create a CSV file from the report. This can be done using the "),o("strong",[t._v("CSV by Workato")]),t._v(".")]),t._v(" "),o("p",[o("DocImage",{attrs:{src:r(1091),alt:"Create CSV file",width:"2522",height:"1124"}}),t._v(" "),o("em",[t._v("Create CSV file from Workday custom report data")])],1),t._v(" "),o("h4",{attrs:{id:"filter-rows-using-custom-logic"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#filter-rows-using-custom-logic"}},[t._v("#")]),t._v(" Filter rows using custom logic")]),t._v(" "),o("p",[t._v("Workday provides a comprehensive feature to add filters and validation logic to report results. However, it is limited to data available in Workday. Workato allows you to extract report data out of Workday, and execute validation logic against data from multiple sources.")]),t._v(" "),o("p",[o("DocImage",{attrs:{src:r(1092),alt:"Custom filter logic",width:"1526",height:"574"}}),t._v(" "),o("em",[t._v("Custom filter logic using data from external applications")])],1),t._v(" "),o("p",[t._v("This example shows how to filter out rows in a report against data from Salesforce but checking for the presence of a corresponding Salesforce User account. The resulting report will contain only employees from Workday that are active Salesforce Users.")])])}),[],!1,null,null,null);e.default=a.exports}}]);