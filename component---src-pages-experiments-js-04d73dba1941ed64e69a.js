"use strict";(self.webpackChunkv4=self.webpackChunkv4||[]).push([[962],{3141:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var a=n(7294),o=n(9),r=n(4165),i=n(5870),c=n(3082),l=o.ZP.section.withConfig({displayName:"neographcontainer__StyledForm",componentId:"sc-1mk5fdn-0"})(["text-align:center;"]),u=function(e){var t=a.useState("Makofane K"),n=t[0],o=t[1],r=a.useState(1),c=r[0],u=r[1],m=a.useState("Makofane K"),s=m[0],f=m[1],p=a.useState(1),d=p[0],v=p[1],E=e.containerId,h=e.neo4jUri,g=e.neo4jUser,w=e.neo4jPassword;return a.useEffect((function(){var e=a.createElement(i.SD,{containerId:E,neo4jUri:h,neo4jUser:g,neo4jPassword:w,searchname:s,collabweight:d});document.getElementById("ContainerForGraph").replaceWith(e)}),[s,d]),a.createElement(l,null,a.createElement("form",{onSubmit:function(e){f(n),v(c),e.preventDefault()}},"Researcher   ",a.createElement("input",{type:"text",value:n,onChange:function(e){o(e.target.value)}}),"   Minimum Strength of Connections   ",a.createElement("select",{name:"weight",id:"weight",value:c,onChange:function(e){u(e.target.value)}},a.createElement("option",{value:"1",selected:!0},"1"),a.createElement("option",{value:"2"},"2"),a.createElement("option",{value:"3"},"3"),a.createElement("option",{value:"4"},"4"),a.createElement("option",{value:"5"},"5"),a.createElement("option",{value:"10"},"10"),a.createElement("option",{value:"20"},"20")),"  ",a.createElement("input",{type:"submit"})),a.createElement("div",{className:"App",id:"ContainerForGraph"}))},m=o.ZP.main.withConfig({displayName:"experiments__StyledMainContainer",componentId:"sc-1io3l7h-0"})(["counter-reset:section;"]),s=function(e){var t=e.location,n=(0,a.useState)(!1),o=(n[0],n[1]),l=(0,c.Tb)();(0,a.useEffect)((function(){if(!l){var e=setTimeout((function(){return o(!0)}),r.fb);return function(){return clearTimeout(e)}}}),[]);var s=a.createElement("div",null,"Loading");return"undefined"!=typeof window&&(s=a.createElement(u,{containerId:"id0",neo4jUri:"bolt://54.165.217.90:7687",neo4jUser:"neo4j",neo4jPassword:"qIjxu0-muqrip-xepdir"})),a.createElement(i.Ar,{location:t},a.createElement(m,null,s))}}}]);
//# sourceMappingURL=component---src-pages-experiments-js-04d73dba1941ed64e69a.js.map