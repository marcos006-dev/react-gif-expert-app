(this.webpackJsonpgifexpertapp=this.webpackJsonpgifexpertapp||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n(7),c=n.n(r),i=n(2),s=n(10),u=n(6),o=n.n(u),j=n(8),d=function(){var t=Object(j.a)(o.a.mark((function t(e){var n,a,r,c,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=10&api_key=Og1AtYbhkLhjYkIY95TfyjmlvMj077hy"),t.next=3,fetch(n);case 3:return a=t.sent,t.next=6,a.json();case 6:return r=t.sent,c=r.data,i=c.map((function(t){var e;return{id:t.id,title:t.title,imagenurl:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=n(0),l=function(t){var e=t.title,n=t.imagenurl;return Object(b.jsxs)("div",{className:"card animate__animated animate__backInLeft",children:[Object(b.jsx)("img",{src:n,alt:e}),Object(b.jsx)("p",{children:e})]})},f=function(t){var e=t.categoria,n=function(t){var e=Object(a.useState)({datos:[],cargando:!0}),n=Object(i.a)(e,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){d(t).then((function(t){c({datos:t,cargando:!1})}))}),[t]),r}(e),r=n.datos,c=n.cargando;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h3",{children:e}),c&&"cargando",Object(b.jsx)("div",{className:"card-grid",children:Object(b.jsx)("ol",{children:r.map((function(t){return Object(b.jsx)(l,Object(s.a)({},t),t.id)}))})})]})},p=n(9),h=function(t){var e=t.setCategorias,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],s=r[1];return Object(b.jsx)("form",{onSubmit:function(t){t.preventDefault(),c.trim().length<=2||(e((function(t){return[c].concat(Object(p.a)(t))})),s(""))},children:Object(b.jsx)("input",{type:"text",autoFocus:!0,value:c,onChange:function(t){s(t.target.value)}})})},O=function(t){var e=Object(a.useState)(["drangon ball"]),n=Object(i.a)(e,2),r=n[0],c=n[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{children:"Desde Gif Expert App"}),Object(b.jsx)(h,{setCategorias:c}),Object(b.jsx)("hr",{}),Object(b.jsx)("ul",{children:r.map((function(t){return Object(b.jsx)(f,{categoria:t},t)}))})]})};n(17);c.a.render(Object(b.jsx)(O,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.e04e3d5e.chunk.js.map