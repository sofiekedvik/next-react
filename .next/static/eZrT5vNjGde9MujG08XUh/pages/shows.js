(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{29:function(e,n,t){e.exports=t(77)},319:function(e,n,t){__NEXT_REGISTER_PAGE("/shows",function(){return e.exports=t(320),{page:e.exports.default}})},320:function(e,n,t){"use strict";t.r(n);var r=t(29),o=t.n(r),s=t(0),a=t.n(s),u=t(13),c=t(22),i=t.n(c),f=t(47),l=t.n(f);function h(e,n,t,r,o,s,a){try{var u=e[s](a),c=u.value}catch(e){return void t(e)}u.done?n(c):Promise.resolve(c).then(r,o)}function p(e){return function(){var n=this,t=arguments;return new Promise(function(r,o){var s=e.apply(n,t);function a(e){h(s,r,o,a,u,"next",e)}function u(e){h(s,r,o,a,u,"throw",e)}a(void 0)})}}var d=function(e){return a.a.createElement(u.a,null,a.a.createElement("h1",null,"Batman TV Shows"),a.a.createElement("ul",null,e.shows.map(function(e){var n=e.show;return a.a.createElement("li",{key:n.id},a.a.createElement(i.a,{as:"/show/".concat(n.id),href:"/show?id=".concat(n.id)},a.a.createElement("a",null,n.name)))})))};d.getInitialProps=p(o.a.mark(function e(){var n,t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l()("https://api.tvmaze.com/search/shows?q=batman");case 2:return n=e.sent,e.next=5,n.json();case 5:return t=e.sent,console.log("Show data fetched. Count: ".concat(t.length)),e.abrupt("return",{shows:t});case 8:case"end":return e.stop()}},e,this)})),n.default=d},46:function(e,n,t){"use strict";t.r(n);var r="function"==typeof fetch?fetch.bind():function(e,n){return n=n||{},new Promise(function(t,r){var o=new XMLHttpRequest;for(var s in o.open(n.method||"get",e),n.headers)o.setRequestHeader(s,n.headers[s]);function a(){var e,n=[],t=[],r={};return o.getAllResponseHeaders().replace(/^(.*?):\s*([\s\S]*?)$/gm,function(o,s,a){n.push(s=s.toLowerCase()),t.push([s,a]),e=r[s],r[s]=e?e+","+a:a}),{ok:1==(o.status/200|0),status:o.status,statusText:o.statusText,url:o.responseURL,clone:a,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(o.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([o.response]))},headers:{keys:function(){return n},entries:function(){return t},get:function(e){return r[e.toLowerCase()]},has:function(e){return e.toLowerCase()in r}}}}o.withCredentials="include"==n.credentials,o.onload=function(){t(a())},o.onerror=r,o.send(n.body)})};n.default=r},47:function(e,n,t){e.exports=window.fetch||(window.fetch=t(46).default||t(46))}},[[319,1,0]]]);