(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{37:function(e,t,n){},38:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(10),a=n.n(s),r=(n(37),n(38),n(1));var i=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("h1",{children:"Hiii!!"}),Object(r.jsx)("a",{href:"home",children:"home"})]})},o=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))},l=n(11),j=n(2),d=n(9),h=n.n(d),u=n(13),p=n(15),b=n(14),m=n.n(b);var x=function(){var e=Object(c.useState)([]),t=Object(p.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){(function(){var e=Object(u.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("".concat("http://localhost:8000","/v1/posts"));case 3:t=e.sent,s(t.data.data),console.log(t.data),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(r.jsx)("div",{className:"container mt-3",children:function(){var e=[],t=[];n.map((function(t){return e.push(Object(r.jsx)("div",{className:"row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative",children:Object(r.jsxs)("div",{className:"col p-4 d-flex flex-column position-static",children:[Object(r.jsx)("strong",{className:"d-inline-block mb-2 text-primary",children:t.title}),Object(r.jsx)(l.b,{to:"/post/".concat(t.slug),className:"stretched-link",children:"Continue reading"}),Object(r.jsx)("h3",{className:"mb-0",children:t.content})]})}))}));for(var c=0;c<e.length;c+=2)t.push(Object(r.jsxs)("div",{className:"row mb-2",children:[Object(r.jsx)("div",{className:"col-md-6",children:e[c]}),Object(r.jsx)("div",{className:"col-md-6",children:e[c+1]?e[c+1]:null})]},c));return t}()})};var f=function(){var e=Object(j.f)().slug,t=Object(c.useState)([]),n=Object(p.a)(t,2),s=n[0],a=n[1];return Object(c.useEffect)((function(){(function(){var t=Object(u.a)(h.a.mark((function t(){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m.a.get("".concat("http://localhost:8000","/v1/post/").concat(e));case 3:n=t.sent,a(n.data.data),console.log(n.data),t.next=10;break;case 8:t.prev=8,t.t0=t.catch(0);case 10:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(r.jsxs)("div",{className:"container mt-3",children:[Object(r.jsx)("div",{className:"display-1",children:s.title}),Object(r.jsx)("div",{dangerouslySetInnerHTML:{__html:s.content}}),";"]})},O=n(32),v=n.n(O);a.a.render(Object(r.jsxs)("div",{children:[Object(r.jsxs)(v.a,{children:[Object(r.jsx)("meta",{name:"description",content:"Some description."}),Object(r.jsx)("meta",{property:"og:title",content:"MyApp"}),Object(r.jsx)("meta",{id:"imagee",property:"og:image",content:"https://lh4.googleusercontent.com/m_7ztpFVAdWmWp45NtfWtV2C1euwvwB98ntrYMeaXiXmvBKZbQi25S0M9UjqirGqx04U09rKzWF56uIhHf7nLf4CB_cf6M11gxQbl3vMAF4Ufx7hU0Y1A755YxLSWushuQ-ZmdJ0"}),Object(r.jsx)("meta",{charset:"utf-8"}),Object(r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),Object(r.jsx)("meta",{name:"theme-color",content:"#000000"}),Object(r.jsx)("link",{rel:"apple-touch-icon",href:"%PUBLIC_URL%/logo192.png"}),Object(r.jsx)("link",{href:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",rel:"stylesheet",integrity:"sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",crossorigin:"anonymous"}),Object(r.jsx)("link",{rel:"manifest",href:"%PUBLIC_URL%/manifest.json"}),Object(r.jsx)("title",{children:"Page 1"})]}),Object(r.jsx)(l.a,{children:Object(r.jsxs)(j.c,{children:[Object(r.jsx)(j.a,{path:"/home",exact:!0,children:Object(r.jsx)(x,{})}),Object(r.jsx)(j.a,{path:"/",exact:!0,children:Object(r.jsx)(i,{})}),Object(r.jsx)(j.a,{path:"/post/:slug",exact:!0,children:Object(r.jsx)(f,{})})]})})]}),document.getElementById("root")),o()}},[[66,1,2]]]);
//# sourceMappingURL=main.40334bc6.chunk.js.map