(window.webpackJsonp=window.webpackJsonp||[]).push([[297],{2181:function(e,t,s){"use strict";s.r(t);var a=s(0),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"mysql-select-actions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-select-actions"}},[e._v("#")]),e._v(" MySQL - Select actions")]),e._v(" "),a("h2",{attrs:{id:"select-rows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#select-rows"}},[e._v("#")]),e._v(" Select rows")]),e._v(" "),a("p",[e._v("This action lets you select rows based on certain criteria defined by a "),a("code",[e._v("WHERE")]),e._v(" condition. Rows from the selected table that match the "),a("code",[e._v("WHERE")]),e._v(" condition will be returned as the output of this action.")]),e._v(" "),a("p",[a("DocImage",{attrs:{src:s(663),alt:"Select rows action",width:"1492",height:"1290"}}),e._v(" "),a("em",[e._v("Select rows action")])],1),e._v(" "),a("h3",{attrs:{id:"table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#table"}},[e._v("#")]),e._v(" Table")]),e._v(" "),a("p",[e._v("First, select a table to work with. This can be done either by selecting a table from the pick list, or toggle the input to text mode and type the full table name.")]),e._v(" "),a("h3",{attrs:{id:"where-condition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#where-condition"}},[e._v("#")]),e._v(" WHERE condition")]),e._v(" "),a("p",[e._v("Next, provide a "),a("code",[e._v("WHERE")]),e._v(" condition to filter rows. This condition can be as simple as filtering a single record by it's "),a("code",[e._v("ID")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[e._v("id "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("123")]),e._v("\n")])])]),a("p",[e._v("Alternatively, it can be used to select multiple rows based on values in one or more columns.")]),e._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("status")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'closed'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("and")]),e._v(" priority "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\n")])])]),a("p",[e._v("Complex "),a("code",[e._v("WHERE")]),e._v(" conditions with subqueries can also be used. Refer to the "),a("router-link",{attrs:{to:"/connectors/mysql.html#where-condition"}},[e._v("WHERE condition")]),e._v(" guide for more information.")],1),e._v(" "),a("h3",{attrs:{id:"order-by"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#order-by"}},[e._v("#")]),e._v(" Order by")]),e._v(" "),a("p",[e._v("Rows returned from this action can be ordered based on the "),a("strong",[e._v("Order by")]),e._v(" input field. This field is used to change the default ordering of rows from your MySQL database.")]),e._v(" "),a("p",[e._v("You can also define the direction of order for each column you wish to order by. The following order by statement will order rows by "),a("code",[e._v("priority")]),e._v(" in ascending order followed by "),a("code",[e._v("created_date")]),e._v(" in descending order (latest first).")]),e._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[e._v("priority "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("asc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" created_date "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("desc")]),e._v("\n")])])]),a("h3",{attrs:{id:"limit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#limit"}},[e._v("#")]),e._v(" Limit")]),e._v(" "),a("p",[e._v("This input field determines the maximum number of rows to return. The default limit is 100 and capped at a maximum of 1000 rows for a single "),a("strong",[e._v("Select rows")]),e._v(" action.")]),e._v(" "),a("h3",{attrs:{id:"offset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#offset"}},[e._v("#")]),e._v(" Offset")]),e._v(" "),a("p",[e._v("This input field gives you the option to fetch only a page of results from the entire results set. For example, to skip the first 100 rows of the selected results set, input "),a("code",[e._v("100")]),e._v(" to this field. The default is "),a("code",[e._v("0")]),e._v(".")])])}),[],!1,null,null,null);t.default=r.exports},663:function(e,t,s){e.exports=s.p+"assets/img/select-rows-action.4103bfad.png"}}]);