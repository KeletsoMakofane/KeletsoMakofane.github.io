"use strict";(self.webpackChunkv4=self.webpackChunkv4||[]).push([[962],{3141:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var a=n(7294),i=n(9),r=n(4165),o=n(5870),l=n(3082),s=n(7326),u=n(5925),h=i.ZP.section.withConfig({displayName:"neographcontainer__StyledForm",componentId:"sc-1mk5fdn-0"})(["text-align:center;"]),c=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={name:"Makofane K",weight:1,queryName:"Makofane K",queryWeight:1},n.handleChangeN=n.handleChangeN.bind((0,s.Z)(n)),n.handleChangeW=n.handleChangeW.bind((0,s.Z)(n)),n.handleSubmit=n.handleSubmit.bind((0,s.Z)(n)),n}(0,u.Z)(t,e);var n=t.prototype;return n.handleChangeN=function(e){this.setState({name:e.target.value})},n.handleChangeW=function(e){this.setState({weight:e.target.value})},n.handleSubmit=function(e){this.setState({queryName:this.state.name,queryWeight:this.state.weight}),e.preventDefault()},n.render=function(){var e=this.props.containerId,t=this.props.neo4jUri,n=this.props.neo4jUser,i=this.props.neo4jPassword;return a.createElement(h,null,a.createElement("form",{onSubmit:this.handleSubmit},"Researcher   ",a.createElement("input",{type:"text",value:this.state.name,onChange:this.handleChangeN}),"  Minimum Strength of Connections   ",a.createElement("select",{name:"weight",id:"weight",value:this.state.weight,onChange:this.handleChangeW},a.createElement("option",{value:"1",selected:!0},"1"),a.createElement("option",{value:"2"},"2"),a.createElement("option",{value:"3"},"3"),a.createElement("option",{value:"4"},"4"),a.createElement("option",{value:"5"},"5"),a.createElement("option",{value:"10"},"10"),a.createElement("option",{value:"20"},"20"))," ",a.createElement("input",{type:"submit"})),a.createElement("div",{className:"App"},a.createElement(o.SD,{containerId:e,neo4jUri:t,neo4jUser:n,neo4jPassword:i,searchname:this.state.queryName,collabweight:this.state.queryWeight})))},t}(a.Component),m=i.ZP.main.withConfig({displayName:"experiments__StyledMainContainer",componentId:"sc-1io3l7h-0"})(["counter-reset:section;"]),d=function(e){var t=e.location,n=(0,a.useState)(!1),i=(n[0],n[1]),s=(0,l.Tb)();(0,a.useEffect)((function(){if(!s){var e=setTimeout((function(){return i(!0)}),r.fb);return function(){return clearTimeout(e)}}}),[]);var u=a.createElement("div",null,"Loading");return"undefined"!=typeof window&&(u=a.createElement(c,{containerId:"id0",neo4jUri:"bolt://54.165.217.90:7687",neo4jUser:"neo4j",neo4jPassword:"qIjxu0-muqrip-xepdir"})),a.createElement(o.Ar,{location:t},a.createElement(m,null,u))}}}]);
//# sourceMappingURL=component---src-pages-experiments-js-da8a6c7ca1d806727ae2.js.map