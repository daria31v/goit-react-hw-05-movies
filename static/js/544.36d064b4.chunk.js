"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{9080:function(n,t,e){e.d(t,{Df:function(){return p},IQ:function(){return l},Jh:function(){return v},gH:function(){return f},s_:function(){return d}});var r=e(5861),a=e(4687),c=e.n(a),o=e(1912);o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u="d7b62bbeb6d4f73491b6f9e9927a7e28",i="language=en-US",s="page=1&include_adult=false",p=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/all/day?api_key=".concat(u));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("search/movie?api_key=".concat(u,"&").concat(i,"&query=").concat(t,"&").concat(s));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(t,"?api_key=").concat(u,"&").concat(i));case 2:return e=n.sent,console.log(e.data),n.abrupt("return",e.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(t,"/credits?api_key=").concat(u,"&").concat(i));case 2:return e=n.sent,console.log(e.data.cast),n.abrupt("return",e.data.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(t,"/reviews?api_key=").concat(u,"&").concat(i,"&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},3174:function(n,t,e){e.d(t,{O:function(){return m}});var r,a,c,o=e(1087),u=e(168),i=e(6444),s=i.ZP.div(r||(r=(0,u.Z)(["\n  display: block;\n  grid-template-columns: repeat(auto-fit, 200px);\n  gap: 16px;\n"]))),p=i.ZP.div(a||(a=(0,u.Z)(["\n  border-bottom: 1px solid tomato;\n  border-right: 1px solid tomato;\n  /* border-radius: 4px;  */\n  display: flex;\n  justify-items: center;\n  align-items: center;\n  color: tomato;\n  > a {\n    text-decoration: none;\n  }\n"]))),f=i.ZP.h3(c||(c=(0,u.Z)(["\n  padding: 4px;\n  margin-top: 8px;\n  margin-bottom: 0;\n  color: black;\n"]))),d=e(7689),l=e(6856),v=e(184),m=function(n){var t=n.movies,e=(0,d.TH)();return(0,v.jsx)(s,{children:t.map((function(n){return(0,v.jsxs)(p,{children:[(0,v.jsx)(l.mGL,{}),(0,v.jsx)(o.rU,{to:"/movies/".concat(n.id),state:{from:e},children:(0,v.jsx)(f,{children:n.title||n.name})})]},n.id)}))})}},9544:function(n,t,e){e.r(t);var r=e(5861),a=e(9439),c=e(4687),o=e.n(c),u=e(3174),i=e(9080),s=e(2791),p=e(184);t.default=function(){var n=(0,s.useState)([]),t=(0,a.Z)(n,2),e=t[0],c=t[1];return(0,s.useEffect)((function(){function n(){return(n=(0,r.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,i.Df)();case 3:t=n.sent,c(t.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),alert("\ud83d\udca5SOMETHING WENT WRONG! TRY LATER.");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,p.jsxs)("main",{children:[(0,p.jsx)("h1",{children:"Trending today"}),(0,p.jsx)(u.O,{movies:e})]})}}}]);
//# sourceMappingURL=544.36d064b4.chunk.js.map