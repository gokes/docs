(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{2147:function(e,t,o){"use strict";o.r(t);var s=o(0),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"intacct"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#intacct"}},[e._v("#")]),e._v(" Intacct")]),e._v(" "),s("p",[s("a",{attrs:{href:"https:sageintacct.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sage Intacct"),s("OutboundLink")],1),e._v(" is an accounting and financial management software that offers consolidation of information across business units, real-time analysis of financial operations, and compliance and auditing services.")]),e._v(" "),s("h2",{attrs:{id:"how-to-connect-to-intacct-on-workato"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-connect-to-intacct-on-workato"}},[e._v("#")]),e._v(" How to connect to Intacct on Workato")]),e._v(" "),s("p",[e._v("To establish the Intacct integration workflow on Workato, you have to establish a connection between Workato and your Intacct instance.")]),e._v(" "),s("p",[e._v("This is a 2-step process.")]),e._v(" "),s("ol",[s("li",[e._v("Configure the "),s("a",{attrs:{href:"#intacct-web-services"}},[e._v("Intacct Web Services")]),e._v(" to accept Workato requests.")]),e._v(" "),s("li",[e._v("Complete the "),s("a",{attrs:{href:"#connection-setup"}},[e._v("Connection setup")]),e._v(" on Workato.")])]),e._v(" "),s("h2",{attrs:{id:"intacct-web-services"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#intacct-web-services"}},[e._v("#")]),e._v(" Intacct Web Services")]),e._v(" "),s("p",[e._v("Configuring Intacct Web Services requires the following steps:")]),e._v(" "),s("ul",[s("li",[e._v("Ensure that your Intacct account is subscribed to "),s("strong",[e._v("Web Services")]),e._v(". To add this to your list of subscription products, please contact your manager at Intacct. You should be provided the associated credentials for a XML Gateway/ API Access User.")]),e._v(" "),s("li",[e._v("Next, set up a "),s("strong",[e._v("Web Services User")]),e._v(" in your Intacct instance for the integration access. Find out more "),s("a",{attrs:{href:"#setup-web-services-user-on-intacct"}},[e._v("here")]),e._v(".")]),e._v(" "),s("li",[e._v("Lastly, authorize Workato to access Intacct "),s("strong",[e._v("Web Services")]),e._v(". Find out more "),s("a",{attrs:{href:"#authorize-workato-on-intacct-web-services"}},[e._v("here")]),e._v(".")])]),e._v(" "),s("h3",{attrs:{id:"set-up-integration-system-user-for-workato"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-up-integration-system-user-for-workato"}},[e._v("#")]),e._v(" Set up Integration System User for Workato")]),e._v(" "),s("p",[e._v("Workato recommends that you set up an Integration System User (ISU) on Intacct. This allows you to log all Workato integration and workflow processes on one dedicated ISU account. Furthermore, this allows you to exercise control over security policies for this integration system.")]),e._v(" "),s("p",[e._v("The ISU should have all the permissions needed to perform the required actions for your integration scenario. Otherwise, you may encounter "),s("code",[e._v("Error: 403")]),e._v(" during recipe building.")]),e._v(" "),s("p",[e._v("For security reasons, each ISU should be restricted to a single integration system (like Workato).")]),e._v(" "),s("h2",{attrs:{id:"setup-web-services-user-on-intacct"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setup-web-services-user-on-intacct"}},[e._v("#")]),e._v(" Setup Web Services User on Intacct")]),e._v(" "),s("h3",{attrs:{id:"_1-add-web-services-user"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-add-web-services-user"}},[e._v("#")]),e._v(" 1. Add Web Services User")]),e._v(" "),s("p",[e._v("Go to "),s("strong",[e._v("Company")]),e._v(" > "),s("strong",[e._v("Admin")]),e._v(" tab > "),s("strong",[e._v("Web Services Users")]),e._v(".")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:o(537),alt:"Find Web Services Users page",width:"2816",height:"1327"}}),e._v(" "),s("em",[e._v("Find Web Services Users page")])],1),e._v(" "),s("p",[e._v("Select "),s("strong",[e._v("Add")]),e._v(" Web Services user.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:o(538),alt:"Add Web Services User",width:"2821",height:"718"}}),e._v(" "),s("em",[e._v("Add Web Services User")])],1),e._v(" "),s("h3",{attrs:{id:"_2-configure-web-services-user-information"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-configure-web-services-user-information"}},[e._v("#")]),e._v(" 2. Configure Web Services User information")]),e._v(" "),s("p",[e._v("You will be required to complete the Web Services User Information form.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:o(539),alt:"Add Web Services User information",width:"2814",height:"1574"}}),e._v(" "),s("em",[e._v("Add Web Services User information")])],1),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("User field")]),e._v(" "),s("th",[e._v("Recommended input")]),e._v(" "),s("th",[e._v("Description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("User ID")]),e._v(" "),s("td",[s("code",[e._v("workato_isu")])]),e._v(" "),s("td",[e._v("The login username. This will be used to setup Workato's Intacct connector.")])]),e._v(" "),s("tr",[s("td",[e._v("Last name")]),e._v(" "),s("td",[e._v("-")]),e._v(" "),s("td",[e._v("This will be used to generate the "),s("strong",[e._v("User name")]),e._v(" field.")])]),e._v(" "),s("tr",[s("td",[e._v("First name")]),e._v(" "),s("td",[e._v("-")]),e._v(" "),s("td",[e._v("This will be used to generate the "),s("strong",[e._v("User name")]),e._v(" field.")])]),e._v(" "),s("tr",[s("td",[e._v("Email address")]),e._v(" "),s("td",[e._v("-")]),e._v(" "),s("td",[e._v("Assign a valid email to receive notifications.")])]),e._v(" "),s("tr",[s("td",[e._v("Contact name")]),e._v(" "),s("td",[e._v("-")]),e._v(" "),s("td",[e._v("Retrieve contact details from an existing Intacct user. If you are creating a new WSU, leave this field blank.")])]),e._v(" "),s("tr",[s("td",[e._v("User name")]),e._v(" "),s("td",[e._v("-")]),e._v(" "),s("td",[e._v("This is an auto-generated name field.")])]),e._v(" "),s("tr",[s("td",[e._v("User type")]),e._v(" "),s("td",[s("code",[e._v("Business")])]),e._v(" "),s("td",[e._v("Define access and permissions for this ISU.")])]),e._v(" "),s("tr",[s("td",[e._v("Admin Privileges")]),e._v(" "),s("td",[s("code",[e._v("Full")])]),e._v(" "),s("td",[e._v("Define the admin privileges to this account. "),s("strong",[e._v("Full privileges")]),e._v(" is required to subscribe to applications and modules.")])])])]),e._v(" "),s("h3",{attrs:{id:"_3-include-necessary-applications-and-modules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-include-necessary-applications-and-modules"}},[e._v("#")]),e._v(" 3. Include necessary applications and modules")]),e._v(" "),s("p",[e._v("Next, find "),s("strong",[e._v("Subscriptions")]),e._v(".")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:o(540),alt:"View subscriptions",width:"2819",height:"732"}}),e._v(" "),s("em",[e._v("View subscriptions")])],1),e._v(" "),s("p",[e._v("Select all the applications and modules that will be required for your integration scenarios.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:o(541),alt:"Select application/modules",width:"2826",height:"1424"}}),e._v(" "),s("em",[e._v("Select applications/modules")])],1),e._v(" "),s("h2",{attrs:{id:"authorize-workato-on-intacct-web-services"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#authorize-workato-on-intacct-web-services"}},[e._v("#")]),e._v(" Authorize Workato on Intacct Web Services")]),e._v(" "),s("p",[e._v("According to the Intacct workflow, creating a WSU does not grant Workato access to the web service itself. It requires an additional "),s("strong",[e._v("sender ID")]),e._v(" credential which is required to send requests to the web service endpoint.")]),e._v(" "),s("blockquote",[s("p",[e._v("You can obtain a sender ID by contacting your Sage Intacct account representative.")])]),e._v(" "),s("p",[e._v("Find "),s("strong",[e._v("Company")]),e._v(" > "),s("strong",[e._v("Setup")]),e._v(" tab > "),s("strong",[e._v("Company")])]),e._v(" "),s("p",[s("DocImage",{attrs:{src:o(542),alt:"Locate Company Information",width:"2826",height:"1248"}}),e._v(" "),s("em",[e._v("Locate Company Information")])],1),e._v(" "),s("p",[e._v("Select "),s("strong",[e._v("Edit")]),e._v(", look under the "),s("strong",[e._v("Setup")]),e._v(" tab for "),s("strong",[e._v("Web Services authorizations")]),e._v(".")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:o(543),alt:"Locate Web Services authorizations",width:"2826",height:"1324"}}),e._v(" "),s("em",[e._v("Locate Web Services authorizations")])],1),e._v(" "),s("p",[e._v("Click "),s("strong",[e._v("Add")]),e._v(" and configure the Web Services authorization according to the example below:")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:o(544),alt:"Adding Web Services authorization",width:"2826",height:"1306"}}),e._v(" "),s("em",[e._v("Adding Web Services authorization")])],1),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("User field")]),e._v(" "),s("th",[e._v("Recommended input")]),e._v(" "),s("th",[e._v("Description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("Sender ID")]),e._v(" "),s("td",[s("code",[e._v("Workato")])]),e._v(" "),s("td",[e._v("Sender IDs are case sensitive.")])]),e._v(" "),s("tr",[s("td",[e._v("Description")]),e._v(" "),s("td",[e._v("-")]),e._v(" "),s("td",[e._v("Describe the purpose of the authorization.")])]),e._v(" "),s("tr",[s("td",[e._v("Status")]),e._v(" "),s("td",[s("code",[e._v("Active")])]),e._v(" "),s("td",[e._v("Ensure that the status is set to "),s("code",[e._v("Active")]),e._v(", inactive sender ID's are not able to make Web Services requests.")])])])]),e._v(" "),s("h2",{attrs:{id:"connection-setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#connection-setup"}},[e._v("#")]),e._v(" Connection Setup")]),e._v(" "),s("p",[e._v("To complete your Intacct integration workflow, you have to connect Workato recipes to your Intacct instance. You can access this connection page from the Recipe's "),s("strong",[e._v("connection")]),e._v(" tab, or from the main "),s("a",{attrs:{href:"https://www.workato.com/connections",target:"_blank",rel:"noopener noreferrer"}},[e._v("App connections"),s("OutboundLink")],1),e._v(" page on Workato.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:o(545),alt:"Workato connection setup",width:"2817",height:"1661"}}),e._v(" "),s("em",[e._v("Workato connection setup")])],1),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Input Field")]),e._v(" "),s("th",[e._v("Description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("Connection name")]),e._v(" "),s("td",[e._v("Give this connection a unique name that identifies which Intacct WSU it is connected to.")])]),e._v(" "),s("tr",[s("td",[e._v("Login username")]),e._v(" "),s("td",[e._v("Provide the "),s("a",{attrs:{href:"#_2-configure-web-services-user-information"}},[e._v("User ID")]),e._v(" of the WSU.")])]),e._v(" "),s("tr",[s("td",[e._v("Login password")]),e._v(" "),s("td",[e._v("The login secret for your Intacct instance.")])]),e._v(" "),s("tr",[s("td",[e._v("Company ID")]),e._v(" "),s("td",[e._v("The company ID for your Intacct instance.")])]),e._v(" "),s("tr",[s("td",[e._v("Location ID")]),e._v(" "),s("td",[e._v("Location ID for an entity. If left blank, Workato will retrieve all entities.")])])])])])}),[],!1,null,null,null);t.default=r.exports},537:function(e,t,o){e.exports=o.p+"assets/img/find-web-service-user.ed4e002e.png"},538:function(e,t,o){e.exports=o.p+"assets/img/add-web-service-user.447a19da.png"},539:function(e,t,o){e.exports=o.p+"assets/img/web-service-user-information.6e33c0b3.png"},540:function(e,t,o){e.exports=o.p+"assets/img/view-subscriptions.628ccced.png"},541:function(e,t,o){e.exports=o.p+"assets/img/select-applications.b583e715.png"},542:function(e,t,o){e.exports=o.p+"assets/img/view-company-information.b52635cb.png"},543:function(e,t,o){e.exports=o.p+"assets/img/view-web-services-authorizations.58842ebf.png"},544:function(e,t,o){e.exports=o.p+"assets/img/add-web-services-authorization.cf4e4bf3.png"},545:function(e,t,o){e.exports=o.p+"assets/img/workato-connector-setup.9661bbe8.png"}}]);