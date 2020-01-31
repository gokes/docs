(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{130:function(e,t,a){e.exports=a.p+"assets/img/completed-recipe.9c771e3d.jpg"},131:function(e,t,a){e.exports=a.p+"assets/img/row-searching.b228eca4.jpg"},132:function(e,t,a){e.exports=a.p+"assets/img/data-treee.cca45beb.jpg"},133:function(e,t,a){e.exports=a.p+"assets/img/configured-recipe-test.9c771e3d.jpg"},134:function(e,t,a){e.exports=a.p+"assets/img/new-updated-contact.cfab2373.jpg"},135:function(e,t,a){e.exports=a.p+"assets/img/updated-salesforce-contact.17785a89.png"},136:function(e,t,a){e.exports=a.p+"assets/img/trigger-datas.2909e3cc.jpg"},137:function(e,t,a){e.exports=a.p+"assets/img/corresponding-row.3a8e3690.jpg"},138:function(e,t,a){e.exports=a.p+"assets/img/updated-row.0d5a7421.jpg"},18:function(e,t,a){e.exports=a.p+"assets/img/sample-google-sheet.18294aa3.jpg"},2135:function(e,t,a){"use strict";a.r(t);var s=a(0),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"google-sheets-action-search-rows-using-query-old-version"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#google-sheets-action-search-rows-using-query-old-version"}},[e._v("#")]),e._v(" Google Sheets action - Search rows using query (old version)")]),e._v(" "),s("p",[s("strong",[e._v("Note")]),e._v(": This article is about action Search rows (old version), using Google Sheets API v3 which will be deprecated in the near term. We recommend using this "),s("router-link",{attrs:{to:"/connectors/google-sheets/action-search-rows-v4.html"}},[e._v("new action Search rows")]),e._v(" instead.")],1),e._v(" "),s("p",[e._v("The "),s("strong",[e._v("Search rows")]),e._v(" action allows you to get specific rows using a search query.")]),e._v(" "),s("p",[e._v("It's often used together with an "),s("router-link",{attrs:{to:"/connectors/google-sheets/action-update-row.html"}},[e._v("Update row")]),e._v(" action. So that you will first search for the rows you want to update, then update those rows.")],1),e._v(" "),s("h2",{attrs:{id:"how-to-use-this-action"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-this-action"}},[e._v("#")]),e._v(" How to use this action")]),e._v(" "),s("h3",{attrs:{id:"setting-up-the-google-sheet"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-the-google-sheet"}},[e._v("#")]),e._v(" Setting up the Google sheet")]),e._v(" "),s("p",[e._v("First, in order for us to retrieve the custom data in a sheet, the sheet must contain at least 1 header row and 1 data row, as shown the following screenshot.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(18),alt:"Google sheet sample",width:"653",height:"283"}}),e._v(" "),s("em",[e._v("Sample Google sheet with 1 header row and 1 data rows")])],1),e._v(" "),s("h3",{attrs:{id:"configuring-the-search-rows-action"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuring-the-search-rows-action"}},[e._v("#")]),e._v(" Configuring the Search rows action")]),e._v(" "),s("p",[e._v("To configure the action, we need to select the spreadsheet and the sheet to search within.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(509),alt:"unconfigured",width:"1494",height:"1182"}}),e._v(" "),s("em",[e._v("Unconfigured search action")])],1),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(510),alt:"configured",width:"1494",height:"1190"}}),e._v(" "),s("em",[e._v("Configured search rows action with selected spreadsheet and sheet")])],1),e._v(" "),s("h4",{attrs:{id:"search-query-structure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#search-query-structure"}},[e._v("#")]),e._v(" Search query structure")]),e._v(" "),s("p",[e._v("Assuming we are searching in this sheet:")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(511),alt:"Google sample sheet to search",width:"1025",height:"460"}})],1),e._v(" "),s("p",[e._v('Search query has to be structured in a certain way for the API to process them. For example, if I want to search for an attendee with the name "Jennifer Avery", with an age older than 30, and shirt size "M", I\'d input the following query:')]),e._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[e._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"jennifer avery"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("and")]),e._v(" age "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("30")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("and")]),e._v(" shirtsize "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"M"')]),e._v("\n")])])]),s("p",[e._v("The following are of the common things to take note when forming queries:")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Column names")]),e._v('\nColumn names have to be a single word. Even if your column names have 2 or more words in them, simply remove the spaces, e.g. "Shirt size" column label becomes "shirtsize".')])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Queries are not case sensitive")]),e._v("\nColumn names or values doesn't have to be case sensitive.")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Operators")]),e._v("\nThe common operators are equal to (=), greater than (>), greater than or equal to (>=), lesser than (<), lesser than or equal to (<=). All these operators can be used for numbers and datetime timestamps (e.g. comparing ages).\nOnly equal to (=) can be used for strings (e.g. comparing names and shirt sizes as in the example sheet). Only exact matches will be fetched in this case.")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("AND and OR")]),e._v("\nUse "),s("code",[e._v("AND")]),e._v(" as well as "),s("code",[e._v("OR")]),e._v(" for a variety of queries. You can combine them as well, using parentheses to signify order of operations (i.e. we evaluate whatever is within the parentheses first).\nFor example, "),s("code",[e._v('age < 35 or age > 50 and name = "jennifer avery"')]),e._v(" will return nothing, but "),s("code",[e._v('age < 35 or (age > 50 and name = "jennifer avery")')]),e._v(" will return you rows 3 and 5.")])])]),e._v(" "),s("h4",{attrs:{id:"query-errors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query-errors"}},[e._v("#")]),e._v(" Query errors")]),e._v(" "),s("p",[e._v("If your query has the wrong structure, or if your operators are incorrect (e.g. if you tried using unsupported operators such as LIKE or CONTAINS, the search rows action will fail with the following error message.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(512),alt:"Failed jobs",width:"1608",height:"1222"}}),e._v(" "),s("em",[e._v("Failed job because of an incorrect search query")])],1),e._v(" "),s("h3",{attrs:{id:"testing-the-search-rows-action"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#testing-the-search-rows-action"}},[e._v("#")]),e._v(" Testing the search rows action")]),e._v(" "),s("p",[e._v("If configured correctly, the search rows action should return you a list of rows that match the search conditions. In this case, I have only one matching row.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(513),alt:"Input for search",width:"1610",height:"1036"}}),e._v(" "),s("em",[e._v("Input for search rows action, as viewed form the job details page")])],1),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(514),alt:"Output",width:"1640",height:"1148"}}),e._v(" "),s("em",[e._v("Results retrieved from the search rows action, as viewed from the job details page's output tab")])],1),e._v(" "),s("p",[e._v("Okay, we know that our specific query works. Now, we don't want to search for someone called Jennifer Avery every single time a new contact comes into Salesforce, so we need to replace these hardcoded values with variables (AKA pills from the datatree, in Workato context). We'll be replacing these hardcoded values with pills in the following scenario.")]),e._v(" "),s("h3",{attrs:{id:"example-scenario"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-scenario"}},[e._v("#")]),e._v(" Example Scenario")]),e._v(" "),s("p",[e._v("In this case, let's assume that we wish to move any new or updated contacts from Salesforce into this Google sheet.\n"),s("DocImage",{attrs:{src:a(49),alt:"Sample Google sheet",width:"699",height:"298"}})],1),e._v(" "),s("p",[e._v("The following pictures show the recipe and data mappings I've done to ensure my search will find the right row in Google Sheets, and direct new data coming in from Salesforce to the matching fields in Google Sheets.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(130),alt:"Complete recipe",width:"2204",height:"1222"}}),e._v(" "),s("em",[e._v("Completed recipe to move new or updated Salesforce contacts to selected google sheet")])],1),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(131),alt:"Row searching",width:"1680",height:"1103"}}),e._v(" "),s("em",[e._v("Using "),s("code",[e._v("Search rows")]),e._v(" action to search for rows in my sheet with query. Here, we search for Google Sheet row that has "),s("code",[e._v("email")]),e._v(" column matching the Salesforce Contact's "),s("code",[e._v("Email")]),e._v(".")])],1),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(132),alt:"Data Tree",width:"1680",height:"1128"}}),e._v(" "),s("em",[e._v("We pass "),s("code",[e._v("Row ID")]),e._v(" from "),s("code",[e._v("Search rows")]),e._v(" action's output to this "),s("code",[e._v("Update row")]),e._v(" action, to indicate what row it should update. Then map data pill from the "),s("code",[e._v("Salesforce new/updated Contact")]),e._v(" into the "),s("code",[e._v("Update row")]),e._v(" action.")])],1),e._v(" "),s("p",[e._v("Be careful to pull data from the right datatree! A common mistake is to use the pills from the "),s("code",[e._v("Search rows")]),e._v(" action, which would take the existing data from your Google Sheets row and write that back into the exact same row. That's essentially doing nothing at all, so it's not very useful!")]),e._v(" "),s("h3",{attrs:{id:"running-the-recipe"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#running-the-recipe"}},[e._v("#")]),e._v(" Running the recipe")]),e._v(" "),s("p",[e._v("Now that we have the trigger and action configured, let's run our recipe!")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(133),alt:"Configured recipe",width:"2204",height:"1222"}}),e._v(" "),s("em",[e._v("Configured recipe for testing")])],1),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(134),alt:"Customized report",width:"1680",height:"639"}}),e._v(" "),s("em",[e._v("Customized job report with showing details of the job processed")])],1),e._v(" "),s("p",[e._v("Now we will update the name of a contact in Salesforce from "),s("code",[e._v("Anna Sharpay")]),e._v(" to "),s("code",[e._v("Anna Mccoy")]),e._v(". Notice the email address is "),s("code",[e._v("anna@workato.com")]),e._v(".")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(135),alt:"Updated Salesforce contact",width:"561",height:"258"}})],1),e._v(" "),s("p",[e._v("Let's take a look at the job report to see how the recipe picks up this change:")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(136),alt:"Trigger data",width:"503",height:"619"}}),e._v(" "),s("em",[e._v("The trigger picked up the updated contact, as viewed in the job details page's output tab")])],1),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(137),alt:"Corresponding row",width:"1088",height:"546"}}),e._v(" "),s("em",[e._v("The "),s("code",[e._v("Search rows")]),e._v(" action tries to find email "),s("code",[e._v("anna@workato.com")]),e._v(". It finds 1 row and passes the "),s("code",[e._v("Row ID")]),e._v(" to the "),s("code",[e._v("Update row")]),e._v(" action. "),s("code",[e._v("Update row")]),e._v(" action then update the name to "),s("code",[e._v("Anna Mccoy")])])],1),e._v(" "),s("p",[e._v("And here is the result sheet after recipe has updated the row. Notice that the name has been changed from "),s("code",[e._v("Anna Sharpay")]),e._v(" to "),s("code",[e._v("Anna Mccoy")]),e._v(".\n"),s("DocImage",{attrs:{src:a(49),alt:"Sample Google sheet",width:"699",height:"298"}}),e._v(" "),s("em",[e._v("Original sheet")]),e._v(" "),s("DocImage",{attrs:{src:a(138),alt:"Update row",width:"660",height:"277"}}),e._v(" "),s("em",[e._v("Updated sheet")])],1)])}),[],!1,null,null,null);t.default=o.exports},49:function(e,t,a){e.exports=a.p+"assets/img/sample-two-rows.96b05d13.png"},509:function(e,t,a){e.exports=a.p+"assets/img/unconfigured-search.5ae228b6.jpg"},510:function(e,t,a){e.exports=a.p+"assets/img/configured-search.34139018.jpg"},511:function(e,t,a){e.exports=a.p+"assets/img/sample-google-sheets.02c6379a.jpg"},512:function(e,t,a){e.exports=a.p+"assets/img/failed-jobs.f11126e0.jpg"},513:function(e,t,a){e.exports=a.p+"assets/img/search-input.a65647f9.jpg"},514:function(e,t,a){e.exports=a.p+"assets/img/job-results.87d1da40.jpg"}}]);