(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{1880:function(t,e,a){t.exports=a.p+"assets/img/block-kit-preview.8bdb9099.png"},1881:function(t,e,a){t.exports=a.p+"assets/img/block-kit-preview-example.1bddbd58.png"},1882:function(t,e,a){t.exports=a.p+"assets/img/blocks-with-message-attachments.fc21d15e.png"},1883:function(t,e,a){t.exports=a.p+"assets/img/message-text.655ad131.png"},2592:function(t,e,a){"use strict";a.r(e);var s=a(0),i=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"block-kit-in-workbot-for-slack"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#block-kit-in-workbot-for-slack"}},[t._v("#")]),t._v(" Block kit in Workbot for Slack")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://api.slack.com/block-kit",target:"_blank",rel:"noopener noreferrer"}},[t._v("Block Kit"),s("OutboundLink")],1),t._v(" is Slack's UI framework that allows more control and flexibility when building messages for Slack.")]),t._v(" "),s("p",[t._v("The "),s("router-link",{attrs:{to:"/workbot/workbot-actions.html#post-command-reply"}},[t._v("Post command reply")]),t._v(" and "),s("router-link",{attrs:{to:"/workbot/workbot-actions.html#post-message"}},[t._v("Post message")]),t._v(' actions both support block kit. You can stack "blocks" and customize the order and appearance of each block, as well as the elements within each block.')],1),t._v(" "),s("p",[t._v("You can also optionally provide secondary attachments, which will display below any defined blocks in the Post command reply or Post message actions.")]),t._v(" "),s("h1",{attrs:{id:"block-kit-previewer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#block-kit-previewer"}},[t._v("#")]),t._v(" Block kit previewer")]),t._v(" "),s("p",[t._v("Preview the messages you've built with the Post message or Post command reply actions by clicking on "),s("strong",[t._v("See preview on block kit builder")]),t._v(" in the block hint.")]),t._v(" "),s("p",[s("DocImage",{attrs:{src:a(1880),alt:"Block kit preview",width:"2800",height:"1000"}}),t._v(" "),s("em",[t._v("Block kit preview link")])],1),t._v(" "),s("p",[s("DocImage",{attrs:{src:a(1881),alt:"Block kit preview example",width:"2880",height:"1594"}}),t._v(" "),s("em",[t._v("Placeholder info in block kit preview")])],1),t._v(" "),s("h1",{attrs:{id:"compatibility-with-message-attachments"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#compatibility-with-message-attachments"}},[t._v("#")]),t._v(" Compatibility with message attachments")]),t._v(" "),s("p",[t._v("Post message and post command reply previously used message attachments to construct messages. Blocks can be used together with message attachments.")]),t._v(" "),s("h2",{attrs:{id:"behavior-of-blocks-when-used-with-message-attachments"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#behavior-of-blocks-when-used-with-message-attachments"}},[t._v("#")]),t._v(" Behavior of blocks when used with message attachments")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("When both blocks and message attachments are defined, blocks will always appear above message attachments.\n"),s("DocImage",{attrs:{src:a(1882),alt:"Blocks with message attachments",width:"1434",height:"748"}})],1)]),t._v(" "),s("li",[s("p",[t._v("When any blocks are defined, any input in the "),s("strong",[t._v("Message text")]),t._v(" field will be used as the Slack notification message.")])])]),t._v(" "),s("p",[s("DocImage",{attrs:{src:a(1883),alt:"Message text",width:"2800",height:"1098"}})],1),t._v(" "),s("h1",{attrs:{id:"supported-blocks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#supported-blocks"}},[t._v("#")]),t._v(" Supported blocks")]),t._v(" "),s("p",[t._v("Supported blocks are displayed in the table below.")]),t._v(" "),s("table",[s("tr",[s("th",[t._v("Blocks")]),t._v(" "),s("th",[t._v("Description")])]),t._v(" "),s("tr",[s("td",[t._v("Section with text")]),t._v(" "),s("td",[t._v("Displays text.")])]),t._v(" "),s("tr",[s("td",[t._v("Section with image")]),t._v(" "),s("td",[t._v("Displays text alongside an image thumbnail.")])]),t._v(" "),s("tr",[s("td",[t._v("Section with button")]),t._v(" "),s("td",[t._v("Displays text alongside a button. "),s("br"),s("br"),t._v("On button submission, a button invokes another recipe and passes on any command input values it has.")])]),t._v(" "),s("tr",[s("td",[t._v("Section with fields")]),t._v(" "),s("td",[t._v("Displays text, along with an array of title-value fields, rendered in 2 columns beneath the section text. Maximum number of fields is 10. Maximum length for the text in each field is 2000 characters.")])]),t._v(" "),s("tr",[s("td",[t._v("Section with select menu")]),t._v(" "),s("td",[t._v("Displays text, alongside a select menu. Supports Slack's built-in dynamic menus such as Select user, Select conversation, Select channel. You can also define your own custom dynamic menu."),s("br"),s("br"),t._v("On submission, a menu option invokes another recipe and passes on any command input values it has.")])]),t._v(" "),s("tr",[s("td",[t._v("Section with overflow menu")]),t._v(" "),s("td",[t._v("Displays text, alongside an overflow menu. Supports static or dynamically generated overflow menu options."),s("br"),s("br"),t._v("On submission, an overflow menu option invokes another recipe and passes on any command input values it has.")])]),t._v(" "),s("tr",[s("td",[t._v("Section with date picker")]),t._v(" "),s("td",[t._v("Displays text, alongside a date picker."),s("br"),s("br"),t._v("On date selection, a date picker invokes another recipe and passes on the selected date via a date parameter. You can customize the name of this date parameter."),s("br"),s("br"),t._v("You can optionally pass additional command input values together with the date parameter.")])]),t._v(" "),s("tr",[s("td",[t._v("Divider")]),t._v(" "),s("td",[t._v("A content divider, like an <hr>, used to split up different blocks inside of a message.")])]),t._v(" "),s("tr",[s("td",[t._v("Image")]),t._v(" "),s("td",[t._v("Displays an image using a provided public URL.")])]),t._v(" "),s("tr",[s("td",[t._v("Actions")]),t._v(" "),s("td",[t._v("A block that can hold multiple interactive elements like buttons, overflow menus, select menus, and date pickers.")])]),t._v(" "),s("tr",[s("td",[t._v("Context")]),t._v(" "),s("td",[t._v("Displays message context, which can include both images and texts. All images and texts will be joined together into a single string, in the order they appear in.")])])]),t._v(" "),s("h1",{attrs:{id:"limitations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#limitations"}},[t._v("#")]),t._v(" Limitations")]),t._v(" "),s("ul",[s("li",[t._v("Include up to 50 blocks in each message.")])])])}),[],!1,null,null,null);e.default=i.exports}}]);