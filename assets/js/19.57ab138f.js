(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{2259:function(e,t,o){"use strict";o.r(t);var r=o(0),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"salesforce-real-time-triggers"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#salesforce-real-time-triggers"}},[e._v("#")]),e._v(" Salesforce real-time triggers")]),e._v(" "),r("p",[e._v("Workato offers real-time capabilities for 2 Salesforce triggers: "),r("strong",[e._v("New Object")]),e._v(" and "),r("strong",[e._v("New/Updated Object")]),e._v(". This allows Workato to detect records created/updated in Salesforce immediately. Salesforce real-time triggers is enabled only for certain plans. Check the "),r("a",{attrs:{href:"https://www.workato.com/pricing?audience=general",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pricing and Plans page"),r("OutboundLink")],1),e._v(" or reach out to Workato sales representatives at +1 (844) 469-6752 to find out more.")]),e._v(" "),r("p",[e._v("These real-time triggers are powered by "),r("a",{attrs:{href:"https://help.salesforce.com/articleView?id=workflow_rules_new.htm&type=5",target:"_blank",rel:"noopener noreferrer"}},[e._v("Salesforce workflow rules"),r("OutboundLink")],1),e._v(". Via these workflow rules, Salesforce monitors records for certain changes and notifies Workato immediately via an outbound message when these changes occur. These outbound messages will be received and processed by a Workato recipe as trigger events.")]),e._v(" "),r("p",[e._v("To set up these triggers, we need to:")]),e._v(" "),r("ol",[r("li",[e._v("Create a Workato recipe with a Salesforce real-time trigger, and copy the generated endpoint URL from the trigger.")]),e._v(" "),r("li",[e._v("Create a Salesforce workflow rule to monitor events we're interested in and send outbound messages to that endpoint URL when these events occur.")]),e._v(" "),r("li",[e._v("Activate the workflow rule.")]),e._v(" "),r("li",[e._v("Add trigger conditions in the recipe, if desired.")]),e._v(" "),r("li",[e._v("Start the recipe.")])]),e._v(" "),r("p",[e._v("In the following sections, we provide a detailed walkthrough to setup the real-time triggers:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#real-time-trigger-setup-new-object"}},[e._v("New object trigger")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#real-time-trigger-setup-new-and-updated-object"}},[e._v("New/updated object trigger")])])]),e._v(" "),r("h2",{attrs:{id:"real-time-trigger-permissions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#real-time-trigger-permissions"}},[e._v("#")]),e._v(" Real-time trigger permissions")]),e._v(" "),r("p",[e._v("To use real-time triggers in Salesforce, workflow rules have to be set up in your Salesforce organization. These workflow rules require the "),r("code",[e._v("Customize application")]),e._v(" permission under the Administrative Permissions tab to be setup, although the connected user does not need to be the user who sets these rules up.")]),e._v(" "),r("p",[r("DocImage",{attrs:{src:o(53),alt:"Customize application permission - profile setup",width:"2444",height:"1276"}}),e._v(" "),r("em",[e._v("Customize application permission - profile setup")])],1),e._v(" "),r("h2",{attrs:{id:"real-time-trigger-setup-new-object"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#real-time-trigger-setup-new-object"}},[e._v("#")]),e._v(" Real-time trigger setup - new object")]),e._v(" "),r("p",[e._v("We go through the setup for the "),r("strong",[e._v("New object")]),e._v(" real-time trigger below. We will be setting up a real-time trigger for new contacts in Salesforce.")]),e._v(" "),r("ol",[r("li",[e._v("Select the trigger in Workato. You will be prompted to connect to your Salesforce account.")])]),e._v(" "),r("p",[r("DocImage",{attrs:{src:o(257),alt:"Select new object real-time trigger in Salesforce",width:"1804",height:"1150"}}),e._v(" "),r("em",[e._v("Select new object real-time trigger in Salesforce")])],1),e._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[r("p",[e._v("Connect to Salesforce.")])]),e._v(" "),r("li",[r("p",[e._v("Select the specific object you wish to monitor in Salesforce. In this case, we'll select Contact.")])])]),e._v(" "),r("p",[r("DocImage",{attrs:{src:o(257),alt:"Select specific object to monitor in Salesforce",width:"1804",height:"1150"}}),e._v(" "),r("em",[e._v("Select specific object to monitor in Salesforce")])],1),e._v(" "),r("p",[e._v("The trigger will provide you with an endpoint URL to setup a Salesforce workflow rule with. This URL will tell Salesforce to send real-time events about newly created contacts to this Workato recipe. Copy this URL to the clipboard for use in creating the Salesforce workflow rule.")]),e._v(" "),r("p",[r("DocImage",{attrs:{src:o(898),alt:"Workato generates endpoint URL for Salesforce workflow rule",width:"788",height:"540"}}),e._v(" "),r("em",[e._v("Workato generates endpoint URL for Salesforce workflow rule")])],1),e._v(" "),r("p",[e._v("This endpoint URL is unique to the Salesforce organization connected to the trigger, the Salesforce object you've selected, and the Workato recipe. You will need to regenerate this endpoint URL again if you decide to change Salesforce connection, the Salesforce object monitored, or the Workato recipe.")]),e._v(" "),r("ol",{attrs:{start:"4"}},[r("li",[e._v("Go to your Salesforce organization and click on "),r("strong",[e._v("Setup")]),e._v(". Go to "),r("em",[e._v("Create > Workflow & Approvals > Workflow rules")]),e._v(" and click on "),r("strong",[e._v("New rule")]),e._v(" to create a new workflow rule. This will bring you into the Salesforce workflow rule setup wizard.")])]),e._v(" "),r("p",[r("DocImage",{attrs:{src:o(258),alt:"In your Salesforce organization, go to Setup>Create>Workflow & Approvals>Workflow rules and click on New rule",width:"960",height:"492"}}),e._v(" "),r("em",[e._v("In your Salesforce organization, go to Setup>Create>Workflow & Approvals>Workflow rules and click on New rule")])],1),e._v(" "),r("ol",{attrs:{start:"5"}},[r("li",[e._v("In step 1 of the setup wizard, select the same Salesforce object you have selected in the recipe.")])]),e._v(" "),r("p",[r("DocImage",{attrs:{src:o(899),alt:"Select specific object to monitor in Salesforce",width:"2880",height:"1480"}}),e._v(" "),r("em",[e._v("Select specific object to monitor in Salesforce")])],1),e._v(" "),r("ol",{attrs:{start:"6"}},[r("li",[e._v("In step 2 of the setup wizard, set the workflow rule to be evaluated every time a record is created. We set the rule criteria to be "),r("code",[e._v("Created Date not equal to null")]),e._v(". Because no record will ever have a null date for the field Created Date, this ensures that the workflow rule will always be triggered when a record is created.")])]),e._v(" "),r("p",[r("DocImage",{attrs:{src:o(900),alt:"Setup the Salesforce workflow rule to be evaluated when record is created",width:"2876",height:"1394"}}),e._v(" "),r("em",[e._v("Setup the Salesforce workflow rule to be evaluated when record is created")])],1),e._v(" "),r("ol",{attrs:{start:"7"}},[r("li",[e._v('In step 3 of the setup wizard, add a workflow action "New outbound message". This ensures that Salesforce will always notify our Workato recipe whenever a record is created, via sending an outbound message to that recipe\'s endpoint URL.')])]),e._v(" "),r("p",[r("DocImage",{attrs:{src:o(901),alt:"Add outbound message as the workflow action. Newly created contacts that meet the evaluation criteria will send an outbound message",width:"2874",height:"1296"}}),e._v(" "),r("em",[e._v("Add outbound message as the workflow action. Newly created contacts that meet the evaluation criteria will send an outbound message")])],1),e._v(" "),r("ol",{attrs:{start:"8"}},[r("li",[e._v("Set up the outbound message using the endpoint URL we copied in Step 3, and save it.")])]),e._v(" "),r("p",[r("DocImage",{attrs:{src:o(902),alt:"Setup outbound message using endpoint URL generated by recipe",width:"2864",height:"1368"}}),e._v(" "),r("em",[e._v("Setup outbound message using endpoint URL generated by recipe")])],1),e._v(" "),r("ol",{attrs:{start:"9"}},[r("li",[e._v("Save the workflow rule and activate it.")])]),e._v(" "),r("p",[r("DocImage",{attrs:{src:o(903),alt:"Activate workflow rule to start monitoring new contacts created in Salesforce",width:"960",height:"492"}}),e._v(" "),r("em",[e._v("Activate workflow rule to start monitoring new contacts created in Salesforce")])],1),e._v(" "),r("ol",{attrs:{start:"10"}},[r("li",[e._v("Return to Workato and start the recipe. To test that the recipe is working, create a new contact in your Salesforce instance. Check that the recipe picks up the trigger event immediately to verify that the workflow rule is working.")])]),e._v(" "),r("p",[e._v("If the trigger event is indeed picked up immediately, this means that your workflow rule and Workato trigger has been set up properly. While the recipe is running, it should monitor newly created records in Salesforce and process them as trigger events immediately. If your workflow requires additional logic to filter out certain records, add trigger conditions.")]),e._v(" "),r("h2",{attrs:{id:"real-time-trigger-setup-new-and-updated-object"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#real-time-trigger-setup-new-and-updated-object"}},[e._v("#")]),e._v(" Real-time trigger setup - new and updated object")]),e._v(" "),r("p",[e._v("We go through the setup for the "),r("strong",[e._v("New and updated object")]),e._v(" real-time trigger below. We will be setting up a real-time trigger for new and updated leads in Salesforce.")]),e._v(" "),r("ol",[r("li",[e._v("Select the trigger in Workato. You will be prompted to connect to your Salesforce account.")])]),e._v(" "),r("p",[r("DocImage",{attrs:{src:o(904),alt:"Select new or updated object real-time trigger in Salesforce",width:"1886",height:"1108"}}),e._v(" "),r("em",[e._v("Select new and updated object real-time trigger in Salesforce")])],1),e._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[r("p",[e._v("Connect to Salesforce.")])]),e._v(" "),r("li",[r("p",[e._v("Select the specific object you wish to monitor in Salesforce. In this case, we select Lead.")])])]),e._v(" "),r("p",[r("DocImage",{attrs:{src:o(905),alt:"Select specific object to monitor in Salesforce",width:"1760",height:"1188"}}),e._v(" "),r("em",[e._v("Select specific object to monitor in Salesforce")])],1),e._v(" "),r("p",[e._v("The trigger will provide you with an endpoint URL to setup a Salesforce workflow rule with. This URL will tell Salesforce to send real-time events about newly created or updated contacts to this Workato recipe. Copy this URL to the clipboard for use in creating the Salesforce workflow rule.")]),e._v(" "),r("p",[r("DocImage",{attrs:{src:o(906),alt:"Workato generates endpoint URL for Salesforce workflow rule",width:"776",height:"540"}}),e._v(" "),r("em",[e._v("Workato generates endpoint URL for Salesforce workflow rule")])],1),e._v(" "),r("p",[e._v("This endpoint URL is unique to the Salesforce organization connected to the trigger, the Salesforce object you've selected, and the Workato recipe. You will need to regenerate this endpoint URL again if you decide to change Salesforce connection, the Salesforce object monitored, or the Workato recipe.")]),e._v(" "),r("ol",{attrs:{start:"4"}},[r("li",[e._v("Go to your Salesforce organization and click on "),r("strong",[e._v("Setup")]),e._v(". Go to "),r("em",[e._v("Create > Workflow & Approvals > Workflow rules")]),e._v(" and click on "),r("strong",[e._v("New rule")]),e._v(" to create a new workflow rule. This will bring you into the Salesforce workflow rule setup wizard.")])]),e._v(" "),r("p",[r("DocImage",{attrs:{src:o(258),alt:"In your Salesforce organization, go to Setup>Create>Workflow & Approvals>Workflow rules and click on New rule",width:"960",height:"492"}}),e._v(" "),r("em",[e._v("In your Salesforce organization, go to Setup>Create>Workflow & Approvals>Workflow rules and click on New rule")])],1),e._v(" "),r("ol",{attrs:{start:"5"}},[r("li",[e._v("In step 1 of the setup wizard, select the same Salesforce object you have selected in the recipe.")])]),e._v(" "),r("p",[r("DocImage",{attrs:{src:o(907),alt:"Select specific object to monitor in Salesforce",width:"2868",height:"1450"}}),e._v(" "),r("em",[e._v("Select specific object to monitor in Salesforce")])],1),e._v(" "),r("ol",{attrs:{start:"6"}},[r("li",[e._v("In step 2 of the setup wizard, set the workflow rule to be evaluated every time a record is created, and every time it's edited. We set the rule criteria to be "),r("code",[e._v("Created Date not equal to null")]),e._v(". Because no record will ever have a null date for the field Created Date, this ensures that the workflow rule will always be triggered when a record is created or updated.")])]),e._v(" "),r("p",[r("DocImage",{attrs:{src:o(908),alt:"Setup the Salesforce workflow rule to be evaluated when record is created or updated",width:"2860",height:"1442"}}),e._v(" "),r("em",[e._v("Setup the Salesforce workflow rule to be evaluated when record is created or updated")])],1),e._v(" "),r("ol",{attrs:{start:"7"}},[r("li",[e._v('In step 3 of the setup wizard, add a workflow action "New outbound message". This ensures that Salesforce will always notify our Workato recipe whenever a record is created or updated, via sending an outbound message to that recipe\'s endpoint URL.')])]),e._v(" "),r("p",[r("DocImage",{attrs:{src:o(909),alt:"Add outbound message as the workflow action. Newly created or updated contacts that meet the evaluation criteria will send an outbound message",width:"2874",height:"1416"}}),e._v(" "),r("em",[e._v("Add outbound message as the workflow action. Newly created or updated contacts that meet the evaluation criteria will send an outbound message")])],1),e._v(" "),r("ol",{attrs:{start:"8"}},[r("li",[e._v("Set up the outbound message using the endpoint URL we copied in Step 3, and save it.")])]),e._v(" "),r("p",[r("DocImage",{attrs:{src:o(910),alt:"Setup outbound message using endpoint URL generated by recipe",width:"2864",height:"1432"}}),e._v(" "),r("em",[e._v("Setup outbound message using endpoint URL generated by recipe")])],1),e._v(" "),r("ol",{attrs:{start:"9"}},[r("li",[e._v("Save the workflow rule and activate it.")])]),e._v(" "),r("p",[r("DocImage",{attrs:{src:o(911),alt:"Activate workflow rule to start monitoring new leads created in Salesforce",width:"960",height:"456"}}),e._v(" "),r("em",[e._v("Activate workflow rule to start monitoring new leads created in Salesforce")])],1),e._v(" "),r("ol",{attrs:{start:"10"}},[r("li",[e._v("Return to Workato and start the recipe. To test that the recipe is working, update a new object record. In this case, you should update an existing lead. Check that the recipe picks up the trigger event immediately to verify that the workflow rule is working.")])]),e._v(" "),r("p",[e._v("If the trigger event is indeed picked up immediately, this means that your workflow rule and Workato trigger has been set up properly. While the recipe is running, it should monitor newly created or updated records in Salesforce and process them as trigger events immediately. If your workflow requires additional logic to filter out certain records, add trigger conditions.")])])}),[],!1,null,null,null);t.default=a.exports},257:function(e,t,o){e.exports=o.p+"assets/img/select-object-for-new-trigger.309e7384.png"},258:function(e,t,o){e.exports=o.p+"assets/img/navigate-to-create-new-rule.f185e848.gif"},53:function(e,t,o){e.exports=o.p+"assets/img/customize-application-permission.c355b77e.png"},898:function(e,t,o){e.exports=o.p+"assets/img/workato-generates-workflow-url.f1b3e2f3.gif"},899:function(e,t,o){e.exports=o.p+"assets/img/select-workflow-rule-object.95b4998b.png"},900:function(e,t,o){e.exports=o.p+"assets/img/workflow-rule-setup-for-new-object-trigger.40521b39.png"},901:function(e,t,o){e.exports=o.p+"assets/img/add-outbound-message-for-new-object-trigger.3f1d9c51.png"},902:function(e,t,o){e.exports=o.p+"assets/img/setup-new-outbound-message-using-endpoint-url.0e86fa1d.png"},903:function(e,t,o){e.exports=o.p+"assets/img/activating-workflow-rule-new-object-trigger.d8bfb533.gif"},904:function(e,t,o){e.exports=o.p+"assets/img/select-salesforce-new-updated-object-realtime-trigger.a028fcb5.png"},905:function(e,t,o){e.exports=o.p+"assets/img/select-object-for-new-or-updated-trigger.45811cb1.png"},906:function(e,t,o){e.exports=o.p+"assets/img/workato-generates-new-updated-workflow-url.f4169377.gif"},907:function(e,t,o){e.exports=o.p+"assets/img/select-workflow-rule-object-lead.1d99ce32.png"},908:function(e,t,o){e.exports=o.p+"assets/img/workflow-rule-setup-for-new-updated-object-trigger.f6d40c3c.png"},909:function(e,t,o){e.exports=o.p+"assets/img/add-outbound-message-for-new-updated-object-trigger.aa9f53b5.png"},910:function(e,t,o){e.exports=o.p+"assets/img/setup-new-updated-outbound-message-using-endpoint-url.86d164af.png"},911:function(e,t,o){e.exports=o.p+"assets/img/activating-workflow-rule-new-updated-object-trigger.c8573f6f.gif"}}]);