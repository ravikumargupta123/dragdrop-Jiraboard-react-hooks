(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,r){},15:function(e,t,r){},16:function(e,t,r){"use strict";r.r(t);var i=r(1),n=r.n(i),a=r(7),d=r.n(a),c=(r(13),r(4)),s=r(3),o=r(8),l=[{name:"Todo (open)",id:"1"},{name:"In Progress",id:"2"},{name:"In Test",id:"3"},{name:"Completed",id:"4"}],m={1:[{id:"1T",status:"Todo (open)",order:1,dec:"Lorem ipsum dolor sit.",priority:"high",jiraId:1234},{id:"2T",status:"Todo (open)",order:1,dec:"Lorem ipsum sit. dolor",priority:"high",jiraId:1234}],2:[{id:"1P",status:"In Progress",order:2,dec:"dec1",priority:"high",jiraId:1234},{id:"2P",status:"In Progress",order:2,dec:"dec1",priority:"high",jiraId:1234}],3:[{id:"1I",status:"In Test",order:3,dec:"dec3",priority:"high",jiraId:1234},{id:"2I",status:"In Test",order:3,dec:"dec3",priority:"high",jiraId:1234}],4:[{id:"1C",status:"Completed",order:4,dec:"dec4",priority:"high",jiraId:1234},{id:"2C",status:"Completed",order:4,dec:"dec4",priority:"high",jiraId:1234}]},u=[{name:"Lorem"},{name:"Lorem ipsum"},{name:"ipsum"},{name:"board"},{name:"Lo ipsum"},{name:"ip aum"}],g=r(0);function j(){var e=Object(i.useState)(0),t=Object(s.a)(e,2),r=t[0],n=t[1];return Object(g.jsxs)("div",{className:"left-nav",children:[Object(g.jsx)("h2",{children:"Kanon Dashboard"}),Object(g.jsx)("ul",{children:u.map((function(e,t){return Object(g.jsx)("li",{className:r===t?"active":"",onClick:function(){return e=t,console.log(e),void n(e);var e},children:e.name},t)}))})]})}function h(){return Object(g.jsx)("div",{children:Object(g.jsxs)("form",{children:[Object(g.jsx)("input",{type:"text",name:"search",placeholder:"Search.."}),Object(g.jsx)("span",{className:"material-icons",children:"search"})]})})}var p=function(e){var t=e.el;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("div",{className:"description",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, corporis?"}),Object(g.jsx)("div",{className:"info",children:"Lorem ipsum dolor sit amet."}),Object(g.jsxs)("div",{className:"footer",children:[Object(g.jsx)("div",{className:"left",children:t.status}),Object(g.jsx)("div",{className:"right",children:"right"})]})]})},b=(r(15),{draggedFrom:null,draggedTo:null,isDragging:!1,originalOrder:[],updatedOrder:[]});var O=function(){var e=n.a.useState(b),t=Object(s.a)(e,2),r=t[0],i=t[1],a=n.a.useState(m),d=Object(s.a)(a,1)[0],u=function(e){var t=e.currentTarget.id;i(Object(c.a)(Object(c.a)({},r),{},{draggedFrom:t,isDragging:!0,originalOrder:d})),e.dataTransfer.setData("text",t)},O=function(e){var t,r,i=(t=e.currentTarget,r=e.clientY,Object(o.a)(t.querySelectorAll(".draggable:not(.dragging)")).reduce((function(e,t){var i=t.getBoundingClientRect(),n=r-i.top-i.height/2;return n<0&&n>e.offset?{offset:n,element:t}:e}),{offset:Number.NEGATIVE_INFINITY}).element),n=e.dataTransfer.getData("text");null==i?e.currentTarget.append(document.getElementById(n)):i.before(document.getElementById(n))},f=function(){i(Object(c.a)(Object(c.a)({},r),{},{draggedFrom:"",isDragging:!1}))},v=function(e){e.preventDefault()};return Object(g.jsxs)("div",{className:"main-wrapper",children:[Object(g.jsx)(j,{}),Object(g.jsxs)("div",{className:"main-section",children:[Object(g.jsx)(h,{}),Object(g.jsxs)("div",{className:"grid-container",children:[l.map((function(e,t){return Object(g.jsx)("div",{className:"grid-items",children:e.name},t)})),l.map((function(e,t){return Object(g.jsx)("div",{id:e.name,className:"grid-items",onDrop:O,onDragOver:v,children:d[e.id].map((function(e,t){return Object(g.jsx)("div",{id:e.id,"data-position":e.id,className:"draggable ".concat(r.draggedFrom===e.id?"dragging":""),draggable:"true",onDragStart:u,onDragEnd:f,children:Object(g.jsx)(p,{el:e})},t)}))},t)}))]})]})]})},f=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,17)).then((function(t){var r=t.getCLS,i=t.getFID,n=t.getFCP,a=t.getLCP,d=t.getTTFB;r(e),i(e),n(e),a(e),d(e)}))};d.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(O,{})}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.9585f574.chunk.js.map