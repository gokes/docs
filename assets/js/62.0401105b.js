(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{2230:function(e,t,a){"use strict";a.r(t);var i=a(0),s=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"pubsub-by-workato"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#pubsub-by-workato"}},[e._v("#")]),e._v(" PubSub by Workato")]),e._v(" "),i("p",[e._v("The PubSub connector enables you to implement integration solutions that require an event-driven, message-oriented architecture that decouples publishers and consumers. The connector implements a messaging system with support for guaranteed and persistent delivery. This allows us to chain recipes sequentially, as a recipe can publish a message that multiple other recipes consume as a trigger to kickstart their workflow.")]),e._v(" "),i("p",[e._v("This connector allows us to add or modify recipes which are consumers without affecting recipes which are publishers. This enables zero downtime for the publisher recipe as we can add new consumers without impacting or requiring changes in the publisher recipe. This decoupling results in simpler recipes and reduces the time required to create, test, and maintain recipes.")]),e._v(" "),i("h2",{attrs:{id:"how-to-connect-to-the-pubsub-connector-on-workato"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#how-to-connect-to-the-pubsub-connector-on-workato"}},[e._v("#")]),e._v(" How to connect to the PubSub connector on Workato")]),e._v(" "),i("p",[e._v("There is no connection required to use the PubSub connector, as schemas are stored in the Workato account for recipes to interact with.")]),e._v(" "),i("p",[e._v("In order to work with the PubSub connector, users require access to the PubSub topics feature, which is enabled only for certain plans. Check the "),i("a",{attrs:{href:"https://www.workato.com/pricing?audience=general",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pricing and Plans page"),i("OutboundLink")],1),e._v(" or reach out to Workato sales representatives at +1 (844) 469-6752 to find out more.")]),e._v(" "),i("h2",{attrs:{id:"how-to-use-pubsub-topics"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-pubsub-topics"}},[e._v("#")]),e._v(" How to use PubSub topics")]),e._v(" "),i("p",[e._v("You can go to the PubSub main page by clicking "),i("strong",[e._v("Tools")]),e._v(" > "),i("strong",[e._v("Pub/Sub Topics")]),e._v(". Here, you can view all the topics that are active on your Workato account.")]),e._v(" "),i("p",[i("DocImage",{attrs:{src:a(796),alt:"Manage topics in PubSub",width:"2880",height:"1114"}}),e._v(" "),i("em",[e._v("Manage topics in PubSub")])],1),e._v(" "),i("p",[e._v("You can use the "),i("strong",[e._v("search topics")]),e._v(" function to quickly locate topics by keyword.")]),e._v(" "),i("h3",{attrs:{id:"creating-and-managing-topics"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#creating-and-managing-topics"}},[e._v("#")]),e._v(" Creating and managing topics")]),e._v(" "),i("p",[e._v("In order to work with PubSub messages, you have to first create and define a topic. So publishers and consumers alike know what to expect when sending or receiving messages.")]),e._v(" "),i("p",[e._v("Click on "),i("strong",[e._v("New topic")]),e._v(" to get started.")]),e._v(" "),i("p",[i("DocImage",{attrs:{src:a(797),alt:"New topic",width:"1365",height:"707"}}),e._v(" "),i("em",[e._v("New topic")])],1),e._v(" "),i("p",[e._v("When creating topics, you will need to define what the messages will look like.")]),e._v(" "),i("table",[i("thead",[i("tr",[i("th",[e._v("Field")]),e._v(" "),i("th",[e._v("Description")])])]),e._v(" "),i("tbody",[i("tr",[i("td",[e._v("Name")]),e._v(" "),i("td",[e._v("The name of your new topic.")])]),e._v(" "),i("tr",[i("td",[e._v("Schema")]),e._v(" "),i("td",[e._v("The message fields for this topic. See more "),i("a",{attrs:{href:"#topic-schema-configuration"}},[e._v("here")]),e._v(".")])])])]),e._v(" "),i("h4",{attrs:{id:"topic-schema-configuration"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#topic-schema-configuration"}},[e._v("#")]),e._v(" Topic schema configuration")]),e._v(" "),i("p",[e._v("When creating topics, you will need to define what the message will look like. This structure can be subsequently edited.")]),e._v(" "),i("p",[i("DocImage",{attrs:{src:a(798),alt:"Defining topic schema",width:"1365",height:"873"}}),e._v(" "),i("em",[e._v("Defining topic schema")])],1),e._v(" "),i("table",[i("thead",[i("tr",[i("th",[e._v("Field")]),e._v(" "),i("th",[e._v("Description")])])]),e._v(" "),i("tbody",[i("tr",[i("td",[e._v("Name")]),e._v(" "),i("td",[e._v("The name of a new message field.")])]),e._v(" "),i("tr",[i("td",[e._v("Data type")]),e._v(" "),i("td",[e._v("Select the data type from a dropdown.")])]),e._v(" "),i("tr",[i("td",[e._v("Optional")]),e._v(" "),i("td",[e._v("Choose if this message field is optional. Default is No.")])]),e._v(" "),i("tr",[i("td",[e._v("Hint")]),e._v(" "),i("td",[e._v("Provide a hint for this message field.")])])])]),e._v(" "),i("blockquote",[i("p",[e._v("Besides entering each field manually, you can define the topic schema with a sample json.")])]),e._v(" "),i("h2",{attrs:{id:"working-with-the-pubsub-connector"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#working-with-the-pubsub-connector"}},[e._v("#")]),e._v(" Working with the PubSub connector")]),e._v(" "),i("p",[e._v("After configuring your topics schema, you can now subscribe to messages using the "),i("a",{attrs:{href:"#using-the-new-message-trigger"}},[e._v("New message trigger")]),e._v(" or publish messages using the "),i("a",{attrs:{href:"#using-the-publish-message-action"}},[e._v("Publish message action")])]),e._v(" "),i("h3",{attrs:{id:"using-the-new-message-trigger"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#using-the-new-message-trigger"}},[e._v("#")]),e._v(" Using the new message trigger")]),e._v(" "),i("p",[e._v("The new message trigger allows us to subscribe to a specific topic in Workato. Any messages published to that topic will be picked up by the trigger as a single trigger event.")]),e._v(" "),i("p",[i("DocImage",{attrs:{src:a(799),alt:"New message trigger configuration",width:"2527",height:"1800"}}),e._v(" "),i("em",[e._v("Select the topic to configure the new message trigger")])],1),e._v(" "),i("h3",{attrs:{id:"using-the-publish-message-action"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#using-the-publish-message-action"}},[e._v("#")]),e._v(" Using the publish message action")]),e._v(" "),i("p",[e._v("The publish action allows us to publish messages to a specific topic in Workato. Any messages published to that topic will be picked up by the new message trigger as a single trigger event.")]),e._v(" "),i("p",[i("DocImage",{attrs:{src:a(800),alt:"Publish message action configuration",width:"2536",height:"1476"}}),e._v(" "),i("em",[e._v("Select the topic and fill in the input fields to configure the publish message action")])],1),e._v(" "),i("h3",{attrs:{id:"example-scenario-using-the-pubsub-connector"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#example-scenario-using-the-pubsub-connector"}},[e._v("#")]),e._v(" Example scenario using the PubSub connector")]),e._v(" "),i("p",[e._v("For example, we have a recipe that creates leads in Salesforce upon receiving a WebToLead HTTP request, built to retrieve contact data from leads who filled in a form online. After creating the lead, the recipe updates an analytics database in Postgres.")]),e._v(" "),i("p",[i("DocImage",{attrs:{src:a(801),alt:"Original recipe",width:"1886",height:"428"}}),e._v(" "),i("em",[e._v("Recipe moving leads from an online form to Salesforce and PostgreSQL")])],1),e._v(" "),i("p",[e._v("If our organization was to change databases from PostgreSQL to RedShift, and start using MailChimp as a mailing list application, we have 2 approaches we can take.")]),e._v(" "),i("ol",[i("li",[e._v("Modify the original recipe without using the PubSub connector")])]),e._v(" "),i("p",[e._v("We would need to update our recipe as follows.")]),e._v(" "),i("p",[i("DocImage",{attrs:{src:a(802),alt:"Modified recipe",width:"1876",height:"490"}}),e._v(" "),i("em",[e._v("Modified recipe to add rows to Redshift instead of PostgreSQL and add subscribers to MailChimp")])],1),e._v(" "),i("p",[e._v("The change to the original recipe would require additional iterations of the recipe development lifecycle, as the recipe would need to be modified, tested for backward compatibility, and pushed to production. Any bugs slipping through QA would result in downtime for the production recipe.")]),e._v(" "),i("ol",{attrs:{start:"2"}},[i("li",[e._v("Use the PubSub connector")])]),e._v(" "),i("p",[e._v("If we were utilizing the PubSub connector and queues, we could have built the original recipe in this way, to create a Salesforce lead before publishing the lead data to a topic. This recipe will not need to care about its consumers, and therefore it does not need to know that downstream recipes are changing from PostgreSQL to Redshift, or that there is an additional consumer writing to MailChimp.")]),e._v(" "),i("p",[i("DocImage",{attrs:{src:a(803),alt:"Publisher recipe",width:"1880",height:"414"}}),e._v(" "),i("em",[e._v("Publisher recipe that creates a lead in Salesforce and publishes lead data to a topic")])],1),e._v(" "),i("p",[e._v("The corresponding consumer recipe that creates a Redshift row with the lead data will look as follows.")]),e._v(" "),i("p",[i("DocImage",{attrs:{src:a(804),alt:"Consumer recipe creating Redshift row",width:"1858",height:"336"}}),e._v(" "),i("em",[e._v("Consumer recipe that consumes the lead data from the topic and creates a Redshift row with the lead data")])],1),e._v(" "),i("p",[e._v("The corresponding consumer recipe that creates a MailChimp lead with the lead data will look as follows.")]),e._v(" "),i("p",[i("DocImage",{attrs:{src:a(805),alt:"Consumer recipe creating MailChimp lead",width:"1886",height:"326"}}),e._v(" "),i("em",[e._v("Consumer recipe that consumes the lead data from the topic and creates a MailChimp lead with the lead data")])],1)])}),[],!1,null,null,null);t.default=s.exports},796:function(e,t,a){e.exports=a.p+"assets/img/manage-topics.101057ac.png"},797:function(e,t,a){e.exports=a.p+"assets/img/new-topic.79a54257.png"},798:function(e,t,a){e.exports=a.p+"assets/img/add-new-field.a572820c.png"},799:function(e,t,a){e.exports=a.p+"assets/img/new-message-trigger.4ec544e6.png"},800:function(e,t,a){e.exports=a.p+"assets/img/publish-message-action.f673bc19.png"},801:function(e,t,a){e.exports=a.p+"assets/img/original-pubsub-recipe.29b7406c.png"},802:function(e,t,a){e.exports=a.p+"assets/img/modified-original-recipe.6034c502.png"},803:function(e,t,a){e.exports=a.p+"assets/img/recipe-with-publish-step.13c250f0.png"},804:function(e,t,a){e.exports=a.p+"assets/img/consumer-recipe-creating-redshift-row.46dd1823.png"},805:function(e,t,a){e.exports=a.p+"assets/img/consumer-recipe-creating-mailchimp-lead.a9e5caff.png"}}]);