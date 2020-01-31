(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{2122:function(t,e,o){"use strict";o.r(e);var s=o(0),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"gmail"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gmail"}},[t._v("#")]),t._v(" Gmail")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.google.com/gmail",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gmail"),s("OutboundLink")],1),t._v(" is a popular e-mail service used by both consumers and businesses alike.")]),t._v(" "),s("p",[t._v("The Gmail connector enables you to build powerful automation around Gmail and connect with other applications.")]),t._v(" "),s("h2",{attrs:{id:"api-version"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api-version"}},[t._v("#")]),t._v(" API version")]),t._v(" "),s("p",[t._v("This connector uses Gmail "),s("a",{attrs:{href:"https://developers.google.com/gmail/api/v1/reference/",target:"_blank",rel:"noopener noreferrer"}},[t._v("API v1"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"how-to-connect-to-gmail-on-workato"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-connect-to-gmail-on-workato"}},[t._v("#")]),t._v(" How to connect to Gmail on Workato")]),t._v(" "),s("p",[t._v("The Gmail connector uses OAuth 2.0 for authentication. When prompted, follow the on-screen "),s("router-link",{attrs:{to:"/connections.html"}},[t._v("connection instructions")]),t._v(" and login to your Google account to connect.")],1),t._v(" "),s("p",[t._v("Based on Google's updated security policies, Gmail triggers or download attachment actions can only be used by paid G Suite accounts. Before you link your account, and if you intend to use the Gmail "),s("strong",[t._v("New email trigger")]),t._v(" or "),s("strong",[t._v("Download attachment action")]),t._v(", you must whitelist Workato's Gmail connector app and grant it read permission. The following section will guide you through the required steps.")]),t._v(" "),s("h2",{attrs:{id:"whitelist-workato-gmail-connector"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#whitelist-workato-gmail-connector"}},[t._v("#")]),t._v(" Whitelist Workato Gmail connector")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://support.google.com/a/answer/7281227",target:"_blank",rel:"noopener noreferrer"}},[t._v("Check out"),s("OutboundLink")],1),t._v(" Google’s detailed instructions for managing OAuth based access to connected apps. Below is a step-by-step guide to Whitelist Workato Gmail Connector app for your GSuite account.")]),t._v(" "),s("h3",{attrs:{id:"step-1-login-to-the-google-admin-console"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-1-login-to-the-google-admin-console"}},[t._v("#")]),t._v(" Step 1. Login to the Google Admin Console")]),t._v(" "),s("p",[t._v("You must be signed in as a "),s("a",{attrs:{href:"https://support.google.com/a/answer/2405986#super_admin",target:"_blank",rel:"noopener noreferrer"}},[t._v("super administrator"),s("OutboundLink")],1),t._v(" to complete the actions listed below.")]),t._v(" "),s("p",[s("DocImage",{attrs:{src:o(484),alt:"Login to Google admin console",width:"2180",height:"1258"}}),t._v(" "),s("em",[t._v("Login to Google Admin Console")])],1),t._v(" "),s("h3",{attrs:{id:"step-2-navigate-to-the-api-permissions-in-security-settings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-2-navigate-to-the-api-permissions-in-security-settings"}},[t._v("#")]),t._v(" Step 2. Navigate to the API permissions in Security Settings")]),t._v(" "),s("p",[t._v("From the Admin console home, go to "),s("strong",[t._v("Security > API Permissions")]),t._v(".")]),t._v(" "),s("p",[s("DocImage",{attrs:{src:o(485),alt:"API permissions",width:"2202",height:"406"}}),t._v(" "),s("em",[t._v("API permissions")])],1),t._v(" "),s("h3",{attrs:{id:"step-3-add-workato-gmail-connector-to-trusted-apps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-3-add-workato-gmail-connector-to-trusted-apps"}},[t._v("#")]),t._v(" Step 3. Add Workato Gmail Connector to Trusted Apps")]),t._v(" "),s("p",[t._v("At the bottom of the list of apps, click the "),s("strong",[t._v("Trusted Apps")]),t._v(" link.")]),t._v(" "),s("p",[s("DocImage",{attrs:{src:o(486),alt:"Click on Trusted Apps",width:"1860",height:"556"}}),t._v(" "),s("em",[t._v("Click on Trusted Apps")])],1),t._v(" "),s("p",[t._v("Click Whitelist an App "),s("strong",[t._v("+")]),t._v(" (Add icon) in the bottom right corner. The "),s("strong",[t._v("Add App To Trusted List")]),t._v(" window opens.")]),t._v(" "),s("p",[s("DocImage",{attrs:{src:o(487),alt:"Trusted Apps",width:"2178",height:"1312"}}),t._v(" "),s("em",[t._v("Trusted Apps")])],1),t._v(" "),s("p",[t._v("In the Select App Type list, select "),s("strong",[t._v("Web applications")]),t._v(".")]),t._v(" "),s("p",[s("DocImage",{attrs:{src:o(488),alt:"Select App Type",width:"2174",height:"1180"}}),t._v(" "),s("em",[t._v("Select App Type")])],1),t._v(" "),s("p",[t._v("Fill in the OAuth2 Client ID for the Workato Gmail Connector.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("763335457294-gp4359qrjgu7vl96eit0p2n725197oki.apps.googleusercontent.com\n")])])]),s("p",[s("DocImage",{attrs:{src:o(489),alt:"Fill in the OAuth2 Client ID",width:"2176",height:"1176"}}),t._v(" "),s("em",[t._v("Fill in the OAuth2 Client ID")])],1),t._v(" "),s("p",[t._v("Click "),s("strong",[t._v("Add")]),t._v(" to save the changes.")]),t._v(" "),s("p",[s("DocImage",{attrs:{src:o(490),alt:"Add to save changes",width:"2172",height:"1310"}}),t._v(" "),s("em",[t._v("Add to save changes")])],1),t._v(" "),s("p",[t._v("Lastly, set "),s("strong",[t._v("Read email permission")]),t._v(" to "),s("strong",[t._v("Yes")]),t._v(" and click on "),s("strong",[t._v("Link your account")]),t._v(".")]),t._v(" "),s("p",[s("DocImage",{attrs:{src:o(491),alt:"Select Yes for read email permission",width:"1285",height:"759"}}),t._v(" "),s("em",[t._v("Select Yes for read email permission")])],1)])}),[],!1,null,null,null);e.default=a.exports},484:function(t,e,o){t.exports=o.p+"assets/img/admin-console.3bb80485.png"},485:function(t,e,o){t.exports=o.p+"assets/img/api-permissions.0e218d77.png"},486:function(t,e,o){t.exports=o.p+"assets/img/trusted-apps.23453201.png"},487:function(t,e,o){t.exports=o.p+"assets/img/add-trusted-app.7bbc9d21.png"},488:function(t,e,o){t.exports=o.p+"assets/img/select-app-type.251666ae.png"},489:function(t,e,o){t.exports=o.p+"assets/img/add-client-id.95137ba0.png"},490:function(t,e,o){t.exports=o.p+"assets/img/add-app.3cdc91f7.png"},491:function(t,e,o){t.exports=o.p+"assets/img/select-read-email-permission.0a4f625e.png"}}]);