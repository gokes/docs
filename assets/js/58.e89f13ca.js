(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{18:function(e,t,i){e.exports=i.p+"assets/img/sample-google-sheet.18294aa3.jpg"},2139:function(e,t,i){"use strict";i.r(t);var r=i(0),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"google-sheets-trigger-new-updated-row-in-sheet"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#google-sheets-trigger-new-updated-row-in-sheet"}},[e._v("#")]),e._v(" Google Sheets trigger - New/updated row in sheet")]),e._v(" "),r("p",[e._v("The "),r("strong",[e._v("New/updated row in sheet")]),e._v(" trigger is able to pick up changes made to rows in your selected sheet, as well as new rows "),r("strong",[e._v("added at the bottom")]),e._v(" of your sheet.")]),e._v(" "),r("p",[e._v("Note that at the moment, this trigger can monitor up to "),r("strong",[e._v("10000 rows")]),e._v(". New or updated rows after row 10000 will not be picked up.")]),e._v(" "),r("h2",{attrs:{id:"how-to-use-this-trigger"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-this-trigger"}},[e._v("#")]),e._v(" How to use this trigger")]),e._v(" "),r("h3",{attrs:{id:"setting-up-the-google-sheet"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-the-google-sheet"}},[e._v("#")]),e._v(" Setting up the Google sheet")]),e._v(" "),r("p",[e._v("First, in order for us to retrieve the custom data in a sheet, the sheet must contain at least one header line for the first row and one data line for the second row, as in the following screenshot.")]),e._v(" "),r("p",[r("DocImage",{attrs:{src:i(18),alt:"Google sheet sample",width:"653",height:"283"}}),e._v(" "),r("em",[e._v("Sample Google sheet with 1 header row and 1 data rows")])],1),e._v(" "),r("h3",{attrs:{id:"configuring-the-new-updated-row-in-sheet-trigger"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configuring-the-new-updated-row-in-sheet-trigger"}},[e._v("#")]),e._v(" Configuring the New/updated row in sheet trigger")]),e._v(" "),r("p",[e._v("To configure the trigger, we need to select the spreadsheet and the actual sheet to process. Selecting a specific spreadsheet would generate your list of sheets within that spreadsheet, while selecting the sheet would generate your list of columns within that sheet.")]),e._v(" "),r("p",[r("DocImage",{attrs:{src:i(520),alt:"recipe action",width:"848",height:"540"}}),e._v(" "),r("em",[e._v("Select the application and trigger")])],1),e._v(" "),r("p",[r("DocImage",{attrs:{src:i(521),alt:"unconfigured sheet trigger",width:"1680",height:"1018"}}),e._v(" "),r("em",[e._v("Unconfigured new/updated sheet row trigger")])],1),e._v(" "),r("p",[r("DocImage",{attrs:{src:i(522),alt:"configured sheet trigger",width:"1642",height:"1082"}}),e._v(" "),r("em",[e._v("Configured new/updated sheet row trigger")])],1),e._v(" "),r("p",[e._v("In order to pick up updated rows as trigger events, we need to know that an existing row has changed. The column that you select in the "),r("strong",[e._v("Column to monitor")]),e._v(' field, which is driven off your selected sheet, will be monitored for changes. Every time the data in a cell in this column changes, the entire row of data will be picked up by the recipe. In this case, we had selected "Date registered".')]),e._v(" "),r("p",[e._v('Alternatively, you can also select the option "All", in which any changes made to a row will cause it to be picked up by the trigger.')]),e._v(" "),r("h3",{attrs:{id:"running-the-trigger"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#running-the-trigger"}},[e._v("#")]),e._v(" Running the trigger")]),e._v(" "),r("p",[e._v("Now that we have the trigger configured, let's complete our recipe and run it! For testing, we can simply select the Scheduler action "),r("strong",[e._v("Get current time")]),e._v('. Alternatively, putting a "Stop" step works too. Let\'s start the below recipe.')]),e._v(" "),r("p",[r("DocImage",{attrs:{src:i(523),alt:"configured recipe",width:"2172",height:"492"}}),e._v(" "),r("em",[e._v("Configured recipe with Scheduler action for testing")])],1),e._v(" "),r("p",[e._v("In this case, the trigger picks up all 4 data lines in my Google sheet. You can configure the jobs report to display the information relevant to you, as below.")]),e._v(" "),r("p",[r("DocImage",{attrs:{src:i(524),alt:"new job report",width:"1622",height:"754"}}),e._v(" "),r("em",[e._v("Customized job report displaying selected information about the trigger event processed")])],1),e._v(" "),r("p",[e._v("The following shows the customization of the job report.")]),e._v(" "),r("p",[r("DocImage",{attrs:{src:i(525),alt:"customize job report",width:"1262",height:"1258"}}),e._v(" "),r("em",[e._v("Customizing the job recipe's job reoprt with data from Google Sheets")])],1),e._v(" "),r("p",[e._v("As we've configured the sheet to monitor only changes to the date registered column, the change I've made to Andy's shirt size (as highlighted) will not cause the recipe to pick up any trigger events.")]),e._v(" "),r("p",[r("DocImage",{attrs:{src:i(526),alt:"modified google sheets",width:"1680",height:"1013"}}),e._v(" "),r("em",[e._v("Edited sample sheet with changed field highlighted")])],1),e._v(" "),r("p",[e._v("However, if I were to further edit Xander's date registered value (in row 5), then the recipe will process row 5 again as a trigger event, and provide me with the latest data.")]),e._v(" "),r("p",[r("DocImage",{attrs:{src:i(527),alt:"edited sheet",width:"1680",height:"1119"}}),e._v(" "),r("em",[e._v("Edited sheet. Cells in row 3 and 5 (highlighted) have been updated with new values")])],1),e._v(" "),r("p",[e._v("Row 5 will be picked up as a trigger event, as seen in the recipe. Let's click on the job line to examine the job details.")]),e._v(" "),r("p",[r("DocImage",{attrs:{src:i(528),alt:"date sheet",width:"1680",height:"1028"}}),e._v(" "),r("em",[e._v('Only row 5 will be picked up as "Date registered"- the only column we are monitoring changes for')])],1),e._v(" "),r("p",[e._v("While the recipe is running, any new rows added or existing rows updated will be picked up almost immediately. If the recipe is stopped at any time, starting it again will cause the recipe to pick up trigger jobs where it left off. In other words, any new rows created or existing rows updated while the recipe was stopped will also be picked up when the recipe is started again.")]),e._v(" "),r("p",[e._v("Take note that only the latest version of the row will be picked up. For example, if a row is created and updated thrice, all while the recipe is stopped, the recipe will only pick up the latest version of the row as a trigger event when it's started.")])])}),[],!1,null,null,null);t.default=s.exports},520:function(e,t,i){e.exports=i.p+"assets/img/application-filling.9094bd2f.gif"},521:function(e,t,i){e.exports=i.p+"assets/img/unconfigured-sheet-trigger.8c1cba94.jpg"},522:function(e,t,i){e.exports=i.p+"assets/img/configured-sheet-trigger.93dfb35c.jpg"},523:function(e,t,i){e.exports=i.p+"assets/img/configured-recipe-with-scheduler-action.c4f7d617.png"},524:function(e,t,i){e.exports=i.p+"assets/img/customized-job-report.5e439299.jpg"},525:function(e,t,i){e.exports=i.p+"assets/img/customization-job-report.373254c3.jpg"},526:function(e,t,i){e.exports=i.p+"assets/img/modified-sheet.77f058ad.jpg"},527:function(e,t,i){e.exports=i.p+"assets/img/edited-sheet.0a4b82a8.jpg"},528:function(e,t,i){e.exports=i.p+"assets/img/date-sheet.53a8e1b8.jpg"}}]);