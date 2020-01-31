(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{1674:function(e,t,o){e.exports=o.p+"assets/img/default-jobs-report.33e103bf.png"},1675:function(e,t,o){e.exports=o.p+"assets/img/custom-jobs-report.1200a6be.png"},1676:function(e,t,o){e.exports=o.p+"assets/img/customize-report-button.80b2915f.png"},1677:function(e,t,o){e.exports=o.p+"assets/img/customize-report-popup.101303a1.png"},1678:function(e,t,o){e.exports=o.p+"assets/img/job-details-overview.30ce5a6b.png"},1679:function(e,t,o){e.exports=o.p+"assets/img/clicking-through-to-job-details.259070b5.png"},1680:function(e,t,o){e.exports=o.p+"assets/img/job-error.7fd7dfc6.png"},1681:function(e,t,o){e.exports=o.p+"assets/img/error-popup.9aa33184.png"},1682:function(e,t,o){e.exports=o.p+"assets/img/conditional-action-job-details.04f5fad2.png"},1683:function(e,t,o){e.exports=o.p+"assets/img/error-in-repeat-step.547b089b.png"},2543:function(e,t,o){"use strict";o.r(t);var a=o(0),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"jobs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jobs"}},[e._v("#")]),e._v(" Jobs")]),e._v(" "),a("p",[e._v("When an active recipe processes a trigger event and run the sequence of actions, as defined in the recipe logic, it creates a "),a("strong",[e._v("job")]),e._v(". Each job holds a unique trigger event and executes its recipe logic based on that data (e.g. running "),a("code",[e._v("If..Then")]),e._v(" action based on the availability the data).")]),e._v(" "),a("p",[e._v("Workato provides complete details into the execution flow of a job, i.e. what steps were executed, and the data input and output from every step. Workato also supports rerunning of jobs, in cases whereby an error stops a job from full completion.")]),e._v(" "),a("h2",{attrs:{id:"jobs-report"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jobs-report"}},[e._v("#")]),e._v(" Jobs report")]),e._v(" "),a("p",[e._v("The jobs report is a record of all processed jobs. For each processed job, you can view complete details i.e. execution flow, data input/output from every step.")]),e._v(" "),a("p",[e._v("Information such as date, time processed and job IDs, can be found here. The following shows the default jobs report page.")]),e._v(" "),a("p",[e._v("Jobs report will only retain data for a limited duration corresponding to your account's data retention policy. Find out more "),a("a",{attrs:{href:"https://www.workato.com/users/current/edit#data_retention",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[a("DocImage",{attrs:{src:o(1674),alt:"Default jobs report",width:"2768",height:"1364"}}),e._v(" "),a("em",[e._v("Default jobs report page")])],1),e._v(" "),a("h3",{attrs:{id:"custom-report"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#custom-report"}},[e._v("#")]),e._v(" Custom report")]),e._v(" "),a("p",[e._v("The jobs report can be further customized to show any data available in the recipe, e.g. if processing invoices, your job report can have Invoice ID, Invoice amount, etc. Below, as the recipe is retrieving details about a Zendesk ticket, the relevant IDs and names are reflected in the custom jobs report.")]),e._v(" "),a("p",[a("DocImage",{attrs:{src:o(1675),alt:"Custom jobs report",width:"2717",height:"487"}}),e._v(" "),a("em",[e._v("Customized jobs report page")])],1),e._v(" "),a("p",[e._v("To create a custom jobs report, click on the 'Customize report' tab. You can only create custom jobs report when the recipe is not active. If you want to edit an active recipe, select "),a("strong",[e._v("stop recipe")]),e._v(" before creating the custom report. Remember to select "),a("strong",[e._v("start recipe")]),e._v(" after you are done with the configuration.")]),e._v(" "),a("p",[a("DocImage",{attrs:{src:o(1676),alt:"Customize report tab",width:"2668",height:"687"}}),e._v(" "),a("em",[e._v("Customize report tab")])],1),e._v(" "),a("p",[e._v("You can use datapills from any data tree in your recipe for the column values. In the example below, the custom jobs report contains the Salesforce name and Salesforce IDn.")]),e._v(" "),a("p",[a("DocImage",{attrs:{src:o(1677),alt:"Customize report popup",width:"2702",height:"1010"}}),e._v(" "),a("em",[e._v("Customization of jobs report")])],1),e._v(" "),a("h2",{attrs:{id:"job-details"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#job-details"}},[e._v("#")]),e._v(" Job details")]),e._v(" "),a("p",[e._v("The job details page shows the input data and output data of each step in the recipe, allowing you to inspect the job and debug it if needed.")]),e._v(" "),a("p",[e._v("Each job details page includes:")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Job Metadata")]),e._v("\nThe top part of the page holds the job metadata - job ID, repeat # (the rerun number of this job), the recipe version that the job was carried out on, the "),a("a",{attrs:{href:"#job-status"}},[e._v("status of this job")]),e._v(" etc.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Job step details")]),e._v("\nThe bottom part of the page holds the execution details of the job. Expand the steps to view the input and output data.")])])]),e._v(" "),a("p",[a("DocImage",{attrs:{src:o(1678),alt:"Job details page",width:"2736",height:"1394"}}),e._v(" "),a("em",[e._v("Job details page")])],1),e._v(" "),a("p",[e._v("To view job details, simply click on the job you are interested in seeing. This brings you into the job details screen, where the sequence of actions carried out by the job is listed in detail.")]),e._v(" "),a("p",[a("DocImage",{attrs:{src:o(1679),alt:"Getting to job details page",width:"2736",height:"1188"}}),e._v(" "),a("em",[e._v("Getting to job details page")])],1),e._v(" "),a("p",[e._v("From the job details screen, you can view detailed information about each job as well as step-level information. This is useful in several ways:")]),e._v(" "),a("ul",[a("li",[e._v("Debugging your recipe")])]),e._v(" "),a("p",[e._v("During testing, jobs may show up as completed in the jobs report, but they might not be processed in the manner you expect - taking a look at the exact steps processed by the recipe will help in ensuring the recipe is processing jobs in the expected manner.")]),e._v(" "),a("ul",[a("li",[e._v("Troubleshooting your job errors")])]),e._v(" "),a("p",[e._v("If jobs fail, you can take a look at the run-time data to understand why the job failed at a "),a("a",{attrs:{href:"#errors"}},[e._v("specific step")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"job-status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#job-status"}},[e._v("#")]),e._v(" Job status")]),e._v(" "),a("p",[e._v("Jobs can have the following statuses:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Status")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Completed")]),e._v(" "),a("td",[e._v("This indicates that the job was processed successfully.")])]),e._v(" "),a("tr",[a("td",[e._v("Failed")]),e._v(" "),a("td",[e._v("This indicates that the job ended because of an "),a("a",{attrs:{href:"#errors"}},[e._v("error")]),e._v(". Errors can generally be attributed to failures in executing actions. e.g. an app was not reachable, or a contact being added already exists, etc."),a("br"),a("br"),e._v("When an error is encountered, job execution stops i.e. downstream steps are not executed. Such jobs may create incomplete records in your apps as it failed before finishing all steps.")])]),e._v(" "),a("tr",[a("td",[e._v("Pending")]),e._v(" "),a("td",[e._v("This indicates that the job is still being processed.")])]),e._v(" "),a("tr",[a("td",[e._v("Aborted")]),e._v(" "),a("td",[e._v("This is a rare state that a job can get into if it has pending jobs and the recipe has been affected in a manner that these pending jobs cannot finish processing.")])])])]),e._v(" "),a("h3",{attrs:{id:"errors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#errors"}},[e._v("#")]),e._v(" Errors")]),e._v(" "),a("p",[e._v("If your job encounters an error and stops processing before it should, the job details page will indicate the failed step. Expand it to view the details.")]),e._v(" "),a("p",[a("DocImage",{attrs:{src:o(1680),alt:"Job error",width:"2736",height:"956"}}),e._v(" "),a("em",[e._v("Job error")])],1),e._v(" "),a("p",[e._v("In addition, to quickly view errors from the jobs report page, hover on the job and a popup will appear with the error details.")]),e._v(" "),a("p",[a("DocImage",{attrs:{src:o(1681),alt:"Error popup",width:"2736",height:"1342"}}),e._v(" "),a("em",[e._v("Error popup on hover")])],1),e._v(" "),a("h3",{attrs:{id:"conditional-step"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conditional-step"}},[e._v("#")]),e._v(" Conditional step")]),e._v(" "),a("p",[e._v('When conditional actions are expanded, there is a single "Output" tab. This shows whether the condition evaluated to true or false. If true, the nested actions take place. If false, the nested actions do not take place, and the recipe proceeds to the next possible action.')]),e._v(" "),a("p",[e._v("In the following example, we see that the conditional action in step 4 was evaluated as false. In this case, step 5 was not carried out as "),a("code",[e._v("Condition was not met")]),e._v(". However, step 6 was evaluated as true. Subsequently, step 7 was executed and its action details can be retrieved.")]),e._v(" "),a("p",[a("DocImage",{attrs:{src:o(1682),alt:"Conditional action",width:"2768",height:"3003"}}),e._v(" "),a("em",[e._v("Job details for recipe with conditional action")])],1),e._v(" "),a("h3",{attrs:{id:"repeat-step"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#repeat-step"}},[e._v("#")]),e._v(" Repeat step")]),e._v(" "),a("p",[e._v("Repeat steps will not display steps made during all iterations. For example, if your foreach step processed a list with 10 items, only the last (tenth) item will show up in the job details page.")]),e._v(" "),a("p",[e._v("Similarly, when an error occurs within a repeat step, the job details will show only the steps carried out in that particular iteration, and not any other iteration before that.")]),e._v(" "),a("p",[a("DocImage",{attrs:{src:o(1683),alt:"Error within repeat step",width:"2736",height:"1146"}}),e._v(" "),a("em",[e._v("Error within repeat step")])],1),e._v(" "),a("h2",{attrs:{id:"rerun-jobs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rerun-jobs"}},[e._v("#")]),e._v(" Rerun jobs")]),e._v(" "),a("p",[e._v("Any job (completed, failed, etc.) can be rerun. Workato stores the data of the trigger event, and reruns jobs using this copy of the trigger event.")]),e._v(" "),a("p",[e._v("Rerun of a job will always use the latest version of the recipe. i.e. if the recipe has been modified since the job ran, rerun will use the most recent version.")]),e._v(" "),a("p",[e._v("You can find out more about job reruns "),a("router-link",{attrs:{to:"/recipes/rerun-job.html"}},[e._v("here")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"timeouts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#timeouts"}},[e._v("#")]),e._v(" Timeouts")]),e._v(" "),a("p",[e._v("If a job or a single step is taking too long to execute, it will time out. The current limit is 25 seconds for a single step, and 90 minutes for a single job. The error message for a job that times out will explicitly mention the reason.")]),e._v(" "),a("p",[e._v("In these cases, you might have to further optimize your recipe to ensure that they don't hit this time limit.")])])}),[],!1,null,null,null);t.default=s.exports}}]);