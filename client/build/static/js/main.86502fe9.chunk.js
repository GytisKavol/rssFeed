(this["webpackJsonprss-reader-react"]=this["webpackJsonprss-reader-react"]||[]).push([[0],{56:function(e,t,a){e.exports=a(87)},84:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(19),l=a.n(c),o=a(6),u=a.n(o),s=a(12),i=a(18),p=a(30),d=a(11),E=function(e,t){switch(t.type){case"GET_URLS":return Object(d.a)({},e,{loading:!1,urls:t.payload});case"GET_ARTICLES":return Object(d.a)({},e,{loading:!1,articles:t.payload});case"GET_ARTICLES_FILTERED":return Object(d.a)({},e,{loading:!1,articlesFiltered:t.payload});case"CLICK_FILTER":return Object(d.a)({},e,{loading:!1,clickFilterBtn:!e.clickFilterBtn});case"GET_KEYWORDS":return Object(d.a)({},e,{loading:!1,keywords:t.payload});case"DELETE_URL":return Object(d.a)({},e,{urls:e.urls.filter((function(e){return e._id!==t.payload}))});case"DELETE_KEYWORD":return Object(d.a)({},e,{keywords:e.keywords.filter((function(e){return e._id!==t.payload}))});case"ADD_URL":return Object(d.a)({},e,{urls:[].concat(Object(p.a)(e.urls),[t.payload])});case"ADD_KEYWORD":return Object(d.a)({},e,{keywords:[].concat(Object(p.a)(e.keywords),[t.payload])});case"URL_ERROR":return Object(d.a)({},e,{error:t.payload});default:return e}},m=a(14),y=a.n(m),f={urls:[],articles:[],keywords:[],articlesFiltered:[],error:null,loading:!0,clickFilterBtn:!0},v=Object(r.createContext)(f),b=function(e){var t=e.children,a=Object(r.useReducer)(E,f),c=Object(i.a)(a,2),l=c[0],o=c[1];function p(){return(p=Object(s.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o({type:"CLICK_FILTER",payload:t});case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(){return(d=Object(s.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get("/api/v1/urls");case 3:t=e.sent,o({type:"GET_URLS",payload:t.data.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),o({type:"URL_ERROR",payload:e.t0.response.data.error});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function m(){return(m=Object(s.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get("/api/v1/articlesFiltered");case 3:t=e.sent,o({type:"GET_ARTICLES_FILTERED",payload:t.data.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),o({type:"ARTICLES_FILTERED_ERROR",payload:e.t0.response.data.error});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function b(){return(b=Object(s.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get("/api/v1/articles");case 3:t=e.sent,o({type:"GET_ARTICLES",payload:t.data.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),o({type:"ARTICLES_ERROR",payload:e.t0.response.data.error});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function h(){return(h=Object(s.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get("/api/v1/keywords");case 3:t=e.sent,o({type:"GET_KEYWORDS",payload:t.data.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),o({type:"KEYWORD_ERROR",payload:e.t0.response.data.error});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function k(){return(k=Object(s.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.delete("/api/v1/keywords/".concat(t));case 3:o({type:"DELETE_KEYWORD",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),o({type:"KEYWORD_ERROR",payload:e.t0.response.data.error});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function R(){return(R=Object(s.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.delete("/api/v1/urls/".concat(t));case 3:o({type:"DELETE_URL",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),o({type:"URL_ERROR",payload:e.t0.response.data.error});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function w(){return(w=Object(s.a)(u.a.mark((function e(t){var a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,y.a.post("/api/v1/urls",t,a);case 4:r=e.sent,o({type:"ADD_URL",payload:r.data.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),o({type:"URL_ERROR",payload:e.t0.response.data.error});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function O(){return(O=Object(s.a)(u.a.mark((function e(t){var a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,y.a.post("/api/v1/keywords",t,a);case 4:r=e.sent,o({type:"ADD_KEYWORD",payload:r.data.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),o({type:"KEYWORD_ERROR",payload:e.t0.response.data.error});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}return n.a.createElement(v.Provider,{value:{urls:l.urls,articles:l.articles,articlesFiltered:l.articlesFiltered,keywords:l.keywords,error:l.error,loading:l.loading,clickFilterBtn:l.clickFilterBtn,clickFilter:function(e){return p.apply(this,arguments)},getUrls:function(){return d.apply(this,arguments)},deleteUrl:function(e){return R.apply(this,arguments)},addUrl:function(e){return w.apply(this,arguments)},getArticles:function(){return b.apply(this,arguments)},getArticlesFiltered:function(){return m.apply(this,arguments)},getKeywords:function(){return h.apply(this,arguments)},deleteKeyword:function(e){return k.apply(this,arguments)},addKeyword:function(e){return O.apply(this,arguments)}}},t)},h=function(e){var t=e.url,a=Object(r.useContext)(v).deleteUrl;return n.a.createElement("li",null,t.urlText," ",n.a.createElement("button",{onClick:function(){return a(t._id)},className:"delete-btn"},"x"))},k=function(){var e=Object(r.useContext)(v),t=e.urls,a=e.getUrls;return Object(r.useEffect)((function(){a()}),[]),n.a.createElement(n.a.Fragment,null,n.a.createElement("h3",null,"Current websites"),n.a.createElement("ul",{className:"list"},t.map((function(e){return n.a.createElement(h,{key:e._id,url:e})}))))},R=function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(r.useContext)(v).addUrl;return n.a.createElement(n.a.Fragment,null,n.a.createElement("h3",null,"Add new RSS feed"),n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),l({urlText:a})}},n.a.createElement("div",null,n.a.createElement("input",{type:"urlText",value:a,onChange:function(e){return c(e.target.value)},placeholder:"Enter url..."})),n.a.createElement("button",{className:"btn"},"Add url")))},w=function(e){var t=e.keyword,a=Object(r.useContext)(v).deleteKeyword;return n.a.createElement("li",null,t.keywordText," ",n.a.createElement("button",{onClick:function(){return a(t._id)},className:"delete-btn"},"x"))},O=function(){var e=Object(r.useContext)(v),t=e.keywords,a=e.getKeywords;return Object(r.useEffect)((function(){a()}),[]),n.a.createElement(n.a.Fragment,null,n.a.createElement("h3",null,"Current keywords"),n.a.createElement("ul",{className:"list"},t.map((function(e){return n.a.createElement(w,{key:e._id,keyword:e})}))))},x=function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(r.useContext)(v).addKeyword;return n.a.createElement(n.a.Fragment,null,n.a.createElement("h3",null,"Add new keyword"),n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),l({keywordText:a})}},n.a.createElement("div",null,n.a.createElement("input",{type:"keywordText",value:a,onChange:function(e){return c(e.target.value)},placeholder:"Enter keyword..."})),n.a.createElement("button",{className:"btn"},"Add keyword")))},g=a(89),j=function(e){return n.a.createElement(g.a,null,e.children)},_=a(44),L=a(90),T=a(91);function C(){var e=Object(_.a)(["\n  .navbar {\n    background-color: #222;\n  }\n\n  .navbar-brand,\n  .navbar-nav .nav-link {\n    color: #bbb;\n\n    &:hover {\n      color: white;\n    }\n  }\n"]);return C=function(){return e},e}var D=a(45).a.div(C()),F=function(){return n.a.createElement(D,null,n.a.createElement(L.a,{expand:"lg"},n.a.createElement(L.a.Brand,{href:"/"},"RSS reader"),n.a.createElement(L.a.Toggle,{"aria-controls":"basic-navbar-nav"}),n.a.createElement(L.a.Collapse,{id:"basic-navbar-nav"},n.a.createElement(T.a,{className:"ml-auto"},n.a.createElement(T.a.Item,null,n.a.createElement(T.a.Link,{href:"/"},"Articles")),n.a.createElement(T.a.Item,null,n.a.createElement(T.a.Link,{href:"/settings"},"Settings")),n.a.createElement(T.a.Item,null,n.a.createElement(T.a.Link,{href:"/keywords"},"Keywords"))))))},S=a(54),A=a(3),K=a(53),I=function(e){var t=e.article;return n.a.createElement("li",null,n.a.createElement(K.ReactTinyLink,{cardSize:"small",showGraphic:!0,maxLine:2,minLine:1,url:t.link}))},U=function(){var e=Object(r.useContext)(v),t=e.articles,a=e.loading,c=e.getArticles;if(Object(r.useEffect)((function(){c()}),[]),a)return n.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif",alt:"loading..."});var l=t.map((function(e,t){return n.a.createElement(I,{key:t,article:e})}));return n.a.createElement(n.a.Fragment,null,n.a.createElement("h3",null,"Current feed"),n.a.createElement("ul",{className:"list"},l))};a(84);var G=function(){return n.a.createElement(b,null,n.a.createElement(F,null),n.a.createElement(j,null,n.a.createElement(S.a,null,n.a.createElement("div",{className:"container"},n.a.createElement(A.a,{path:"/",exact:!0,component:U}),n.a.createElement(A.a,{path:"/settings",exact:!0,component:k}),n.a.createElement(A.a,{path:"/settings",exact:!0,component:R}),n.a.createElement(A.a,{path:"/keywords",exact:!0,component:O}),n.a.createElement(A.a,{path:"/keywords",exact:!0,component:x})))))};l.a.render(n.a.createElement(G,null),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.86502fe9.chunk.js.map