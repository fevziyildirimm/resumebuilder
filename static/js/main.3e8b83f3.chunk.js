(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),s=n(9),a=n.n(s),r=(n(15),n(2)),l=n(10),j=n.n(l),d=n(0);var h=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsxs)("h2",{className:"title",children:["Hakk\u0131mda ",Object(d.jsx)("hr",{className:"hr-header"})]}),Object(d.jsx)("div",{className:"sub-title-info",children:Object(d.jsx)("p",{children:e.about})})]})};n(17);var b=function(e){var t=new Array(e.edulenght);return t.fill(""),Object(d.jsxs)("div",{children:[Object(d.jsxs)("h2",{className:"title",children:["\u270e E\u011fitim ",Object(d.jsx)("hr",{className:"hr-header"})]}),t.map((function(t,n){return Object(d.jsxs)("div",{className:"sub-title",children:[Object(d.jsx)("h3",{children:e.info["eduName"+n]}),Object(d.jsxs)("div",{className:"sub-title-info edu-info",children:[Object(d.jsx)("h4",{children:e.info["eduFaculty"+n]}),Object(d.jsxs)("p",{children:["GNO: ",e.info["eduInfo"+n]," "]}),Object(d.jsx)("p",{children:"09.2015 - 08.2019"})]})]},n)}))]})};var o=function(e){var t=new Array(e.exlenght);return t.fill(""),Object(d.jsxs)("div",{children:[Object(d.jsxs)("h2",{className:"title",children:["\uf05aDeneyim ",Object(d.jsx)("hr",{className:"hr-header"})]}),Object(d.jsx)("div",{className:"sub-title",children:t.map((function(t,n){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:e.info["Companyname_"+n]}),Object(d.jsxs)("div",{className:"sub-title-info",children:[Object(d.jsx)("p",{className:"comp-info",children:e.info["Companyaddress_"+n]}),Object(d.jsx)("p",{children:e.info["Companyinfo_"+n]})]})]},n)}))})]})};var u=function(e){var t=e.header,n=t.name,c=t.degree,i=t.tel,s=t.mail,a=t.adress,r=t.social1,l=t.social2,j=t.social3,h=t.file;return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"header",children:[Object(d.jsxs)("div",{className:"name-img",children:[Object(d.jsxs)("span",{className:"name",children:[Object(d.jsx)("h1",{children:n}),Object(d.jsx)("h3",{children:c})]}),Object(d.jsx)("div",{className:"img-div",children:Object(d.jsx)("img",{className:"img",src:h,alt:"pp"})})]}),Object(d.jsxs)("div",{className:"contact",children:[Object(d.jsx)("div",{className:"info-contact",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:a}),Object(d.jsx)("li",{children:i}),Object(d.jsx)("li",{children:s})]})}),Object(d.jsx)("div",{className:"social",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:r}),Object(d.jsx)("li",{children:l}),Object(d.jsx)("li",{children:j})]})})]})]}),Object(d.jsx)("hr",{className:"hr-header"})]})},O=n(6),m=n(4),x=n(7);var f=function(e){var t=Object(c.useState)({name:""}),n=Object(r.a)(t,2),i=n[0],s=n[1],a=Object(c.useState)(["comp1"]),l=Object(r.a)(a,2),j=l[0],h=l[1],b=Object(c.useState)(["edu1"]),o=Object(r.a)(b,2),u=o[0],f=o[1],p=Object(c.useState)(["skill1"]),g=Object(r.a)(p,2),v=g[0],y=g[1];function N(e){s((function(t){return Object(m.a)(Object(m.a)({},t),{},Object(O.a)({},e.target.name,e.target.value))}))}return Object(d.jsx)("div",{children:Object(d.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},children:[Object(d.jsx)("h3",{children:"Ki\u015fisel Bilgiler"}),Object(d.jsxs)("div",{style:{display:"flex",flexWrap:"nowrap"},children:[Object(d.jsxs)("div",{style:{flexGrow:"1"},children:["  ",["name","degree","tel","mail","adress","social1"].map((function(e,t){return Object(d.jsx)("input",{style:{margin:"1em"},name:e,type:"text",placeholder:e.charAt(0).toUpperCase()+e.slice(1),onChange:function(e){return N(e)}},t)}))," "]}),Object(d.jsxs)("div",{style:{flexGrow:"2"},children:["L\xfctfen bir resim Se\xe7in",Object(d.jsx)("input",{id:"file",type:"file",onChange:function(e){return t=e,void s((function(e){return Object(m.a)(Object(m.a)({},e),{},{file:URL.createObjectURL(t.target.files[0])})}));var t},style:{padding:"1em",background:"steelblue"}})]})]}),Object(d.jsx)("h3",{children:"Hakk\u0131mda"}),Object(d.jsx)("textarea",{style:{margin:"1em",resize:"none"},cols:"80",rows:"8",name:"about",onChange:function(e){return N(e)},placeholder:"Kendinizi k\u0131sa bir \u015fekilde tan\u0131t\u0131n"}),Object(d.jsx)("h3",{children:"Deneyim"}),Object(d.jsxs)("div",{style:{display:"inline-flex"},children:[Object(d.jsx)("div",{children:j.map((function(e,t){return Object(d.jsxs)("div",{children:[" ",Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"text",placeholder:"\u015eirket Ad\u0131",name:"Companyname_"+t,onChange:function(e){return N(e)},style:{height:"1em",padding:"0.5em",margin:"0.5em"}}),Object(d.jsx)("input",{name:"Companyaddress_"+t,onChange:function(e){return N(e)},type:"text",placeholder:"\u015eirket Lokasyonu",style:{height:"1em",padding:"0.5em",margin:"0.5em"}})]}),Object(d.jsx)("textarea",{style:{margin:"1em",resize:"none"},cols:"80",rows:"8",name:"Companyinfo_"+t,onChange:function(e){return N(e)},placeholder:"\xc7al\u0131\u015ft\u0131\u011f\u0131n\u0131z \u015firketteki yer ald\u0131\u011f\u0131n\u0131z projeler ve g\xf6revlerinizi burada belirtiniz "})]},t)}))}),Object(d.jsx)("button",{className:"add",onClick:function(){h([].concat(Object(x.a)(j),[""]))},children:"+"})]}),Object(d.jsx)("br",{}),Object(d.jsx)("h3",{children:"E\u011fitim B\u0130lgileri"}),Object(d.jsxs)("div",{className:"bg",children:[u.map((function(e,t){return Object(d.jsxs)("div",{style:{display:"inline-flex"},children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"text",placeholder:"Okul Ad\u0131",name:"eduName"+t,onChange:function(e){return N(e)},style:{height:"1em",padding:"0.5em",margin:"0.5em"}}),Object(d.jsx)("input",{name:"eduFaculty"+t,onChange:function(e){return N(e)},type:"text",placeholder:"Fak\xfclte / B\xf6l\xfcm",style:{height:"1em",padding:"0.5em",margin:"0.5em"}})]},t),Object(d.jsx)("input",{type:"text",style:{height:"1em",padding:"0.5em",margin:"0.5em"},name:"eduInfo"+t,onChange:function(e){return N(e)},placeholder:"AGNO, mezuniyet tarihi"})]})})),Object(d.jsx)("button",{className:"add",onClick:function(){f([].concat(Object(x.a)(u),[""]))},children:"+"})]}),Object(d.jsx)("h3",{children:"Yetkinlik B\u0130lgisi"}),Object(d.jsxs)("div",{className:"yetkinlik",children:[v.map((function(e,t){return Object(d.jsx)("div",{children:Object(d.jsx)("div",{children:Object(d.jsx)("input",{type:"text",placeholder:"\xd6rn: Python, Photoshop",name:"skill"+t,onChange:function(e){return N(e)},style:{height:"1em",padding:"0.5em",margin:"0.5em"}})})},t)}))," "]}),Object(d.jsx)("button",{className:"add",onClick:function(){y([].concat(Object(x.a)(v),[""]))},children:"+"}),Object(d.jsx)("button",{className:"btn",onClick:function(){e.al(i,j.length,u.length,v.length,!0)},type:"submit",children:"Olu\u015ftur"})]})})};var p=function(e){var t=new Array(e.skillLenght);return t.fill(""),Object(d.jsxs)("div",{children:[Object(d.jsxs)("h2",{className:"title",children:["\u2699\ufe0f Yetkinlikler ",Object(d.jsx)("hr",{className:"hr-header"})]}),Object(d.jsx)("div",{className:"skills",children:t.map((function(t,n){return Object(d.jsxs)("h3",{className:"sub-title skill",children:[e.info["skill"+n]," "]},n)}))})]})},g=function(){var e=Object(c.useRef)(),t=Object(c.useState)(""),n=Object(r.a)(t,2),i=n[0],s=n[1],a=Object(c.useState)(),l=Object(r.a)(a,2),O=l[0],m=l[1],x=Object(c.useState)(),g=Object(r.a)(x,2),v=g[0],y=g[1],N=Object(c.useState)(),k=Object(r.a)(N,2),C=k[0],S=k[1],w=Object(c.useState)(),z=Object(r.a)(w,2),L=z[0],A=z[1];function F(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],a=e;s((function(e){return a})),m((function(e){return t})),y((function(e){return n})),S((function(e){return c})),A((function(e){return i}))}return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{style:{background:"#a7a7a769"},children:Object(d.jsx)(f,{al:F})}),Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)(j.a,{trigger:function(){return Object(d.jsx)("button",{className:"btn",children:"Yazd\u0131r"})},content:function(){return e.current},documentTitle:i.name+" ozgecmis"}),L&&Object(d.jsxs)("div",{ref:e,children:[Object(d.jsx)(u,{header:i}),Object(d.jsx)(h,{about:i.about}),Object(d.jsx)(o,{exlenght:O,info:i}),Object(d.jsxs)("div",{className:"bottom-area",children:[Object(d.jsx)(b,{edulenght:v,info:i}),Object(d.jsx)(p,{skillLenght:C,info:i})]})]})]})]})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),s(e),a(e)}))};a.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),v()}},[[18,1,2]]]);
//# sourceMappingURL=main.3e8b83f3.chunk.js.map