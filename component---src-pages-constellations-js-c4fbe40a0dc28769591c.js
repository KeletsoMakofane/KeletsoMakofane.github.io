"use strict";(self.webpackChunkv4=self.webpackChunkv4||[]).push([[911],{291:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var a=n(7294),r=n(9),o=n(4165),i=n(3082),l=n(7326),s=n(1721),h=n(5892),c=n(4454),u=r.default.div.withConfig({displayName:"neographcontainer__StyledForm",componentId:"sc-1mk5fdn-0"})(["",";text-align:center;background-color:#000000;color:var(--light-slate);font-family:var(--font-mono);font-size:var(--fz-xxs);line-height:1;margin:0px 10px 0px 10px;position:fixed;top:0;left:0;z-index:0;width:100%;height:var(--nav-height);background-color:rgba(0,0,0,0.5);filter:none !important;backdrop-filter:blur(10px);transition:var(--transition);"],(function(e){return e.theme.mixins.flexCenter})),m=r.default.div.withConfig({displayName:"neographcontainer__StyledSlider",componentId:"sc-1mk5fdn-1"})(["",";text-align:center;background-color:#000000;color:var(--light-slate);font-family:var(--font-mono);font-size:var(--fz-xxs);line-height:1;margin:0px 10px 0px 10px;position:fixed;bottom:0;left:0;z-index:0;width:100%;height:var(--nav-height);background-color:rgba(0,0,0,0.5);filter:none !important;backdrop-filter:blur(10px);transition:var(--transition);"],(function(e){return e.theme.mixins.flexCenter})),d=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={name:"Berkman LF",weight:"1",start:"1980",stop:"2021",queryName:"Berkman LF",queryWeight:"1",queryStart:"1980",queryStop:"2021"},n.handleChangeN=n.handleChangeN.bind((0,l.Z)(n)),n.handleChangeW=n.handleChangeW.bind((0,l.Z)(n)),n.handleSubmit=n.handleSubmit.bind((0,l.Z)(n)),n.handleChangeStart=n.handleChangeStart.bind((0,l.Z)(n)),n.handleChangeStop=n.handleChangeStop.bind((0,l.Z)(n)),n}(0,s.Z)(t,e);var n=t.prototype;return n.handleChangeN=function(e){this.setState({name:e.target.value})},n.handleChangeW=function(e){this.setState({weight:e.target.value})},n.handleChangeStart=function(e){this.setState({start:e.target.value})},n.handleChangeStop=function(e){this.setState({stop:e.target.value})},n.handleSubmit=function(e){this.setState({queryName:this.state.name,queryWeight:this.state.weight,queryStart:this.state.start,queryStop:this.state.stop}),e.preventDefault()},n.render=function(){var e=this.props.containerId,t=this.props.neo4jUri,n=this.props.neo4jUser,o=this.props.neo4jPassword;return a.createElement(a.Fragment,null,a.createElement("div",{className:"App"},a.createElement(h.SD,{containerId:e,neo4jUri:t,neo4jUser:n,neo4jPassword:o,searchname:this.state.queryName,collabweight:this.state.queryWeight,startYear:this.state.queryStart,stopYear:this.state.queryStop})),a.createElement(r.ThemeProvider,{theme:c.rS},a.createElement(c.KS,null),a.createElement(u,null,a.createElement("form",null,"the constellations project (led by ",a.createElement("a",{href:"https://twitter.com/klts0",color:"blue"},a.createElement("u",null,"@klts0")),")",a.createElement("br",null)," ",a.createElement("br",null),"Researcher:    ",a.createElement("input",{type:"text",value:this.state.name,onChange:this.handleChangeN}),"    Show:    ",a.createElement("select",{name:"weight",id:"weight",value:this.state.weight,onChange:this.handleChangeW},a.createElement("option",{value:"1",selected:!0},"1+ Papers"),a.createElement("option",{value:"2"},"2+ Papers"),a.createElement("option",{value:"3"},"3+ Papers"),a.createElement("option",{value:"4"},"4+ Papers"),a.createElement("option",{value:"5"},"5+ Papers"),a.createElement("option",{value:"10"},"10+ Papers"),a.createElement("option",{value:"20"},"20+ Papers")),"    From:   ",a.createElement("input",{type:"number",size:"4",value:this.state.start,onChange:this.handleChangeStart}),"    To:     ",a.createElement("input",{type:"number",size:"4",value:this.state.stop,onChange:this.handleChangeStop}),"    On:    ",a.createElement("select",{name:"on",id:"on"},a.createElement("option",{value:"1",selected:!0},"Race/Racism"),a.createElement("option",{value:"2"},"COVID-19 (coming soon)"),a.createElement("option",{value:"3"},"Both (coming soon)")),"     ",a.createElement("button",{onClick:this.handleSubmit},"Lets Go!")))),a.createElement(m,null,"this takes a moment to load. take a deep breath and count to 10. go fullscreen. float over and drag nodes, edges, and background. scroll to zoom. not great on small screens.",a.createElement("br",null),"made by keletso makofane using pubmed api // interested in supporting? donate to help cover the cost of hosting the site. or hit me up with ideas on how to improve // venmo: @Keletso-Makofane"))},t}(a.Component),p=r.default.main.withConfig({displayName:"constellations__StyledMainContainer",componentId:"sc-kuqkj4-0"})(["counter-reset:section;"]),g=function(e){e.location;var t=(0,a.useState)(!1),n=(t[0],t[1]),l=(0,i.Tb)();return(0,a.useEffect)((function(){if(!l){var e=setTimeout((function(){return n(!0)}),o.fb);return function(){return clearTimeout(e)}}}),[]),(0,a.useEffect)((function(){document.body.style.backgroundColor="black"})),a.createElement(a.Fragment,null,a.createElement(r.ThemeProvider,{theme:c.rS},a.createElement(p,null,a.createElement(d,{containerId:"id0",neo4jUri:"neo4j://graph.keletsomakofane.com",neo4jUser:"neo4j",neo4jPassword:"gybsuv-merqaj-8Vuvsi"}))))}}}]);
//# sourceMappingURL=component---src-pages-constellations-js-c4fbe40a0dc28769591c.js.map