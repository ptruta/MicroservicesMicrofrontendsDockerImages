var __webpack_modules__={1801:(s,b,d)=>{function _(e,r,n,o){return new(n||(n=Promise))(function(u,p){function x(R){try{m(o.next(R))}catch($){p($)}}function F(R){try{m(o.throw(R))}catch($){p($)}}function m(R){R.done?u(R.value):function f(u){return u instanceof n?u:new n(function(p){p(u)})}(R.value).then(x,F)}m((o=o.apply(e,r||[])).next())})}d.d(b,{P:()=>t,V:()=>h});const I={},N={};let B=!1;function i(e,r){return _(this,void 0,void 0,function*(){return N[r]||(B||(yield d.I("default"),B=!0),yield e.init(d.S.default),N[r]=!0),e})}function t(e,r){return _(this,void 0,void 0,function*(){if("string"==typeof e)return yield c(e,r);if("script"===e.type){const n=e;return yield c(n.remoteEntry,n.remoteName)}"module"===e.type&&(yield function l(e){return _(this,void 0,void 0,function*(){return I[e]?Promise.resolve():yield import(e).then(r=>{i(r,e),I[e]=r})})}(e.remoteEntry))})}function c(e,r){return _(this,void 0,void 0,function*(){return new Promise((n,o)=>{if(I[r])return void n();const f=document.createElement("script");f.src=e,f.onerror=o,f.onload=()=>{const u=window[r];i(u,r),I[r]=u,n()},document.body.appendChild(f)})})}function h(e){return _(this,void 0,void 0,function*(){let r,n;return e.type||(e.type="script"),"script"===e.type?(r={type:"script",remoteEntry:e.remoteEntry,remoteName:e.remoteName},n=e.remoteName):"module"===e.type&&(r={type:"module",remoteEntry:e.remoteEntry},n=e.remoteEntry),e.remoteEntry&&(yield t(r)),yield function a(e,r){return _(this,void 0,void 0,function*(){return(yield I[e].get(r))()})}(n,e.exposedModule)})}},4835:(s,b,d)=>{var y=d(1801);Promise.all([(0,y.P)({type:"module",remoteEntry:"http://localhost:3000/remoteEntry.js"}),(0,y.P)({type:"module",remoteEntry:"http://localhost:3001/remoteEntry.js"})]).then(()=>d.e(78).then(d.bind(d,78))).catch(E=>console.error("error",E))}},__webpack_module_cache__={};function __webpack_require__(s){var b=__webpack_module_cache__[s];if(void 0!==b)return b.exports;var d=__webpack_module_cache__[s]={exports:{}};return __webpack_modules__[s](d,d.exports,__webpack_require__),d.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.c=__webpack_module_cache__,__webpack_require__.n=s=>{var b=s&&s.__esModule?()=>s.default:()=>s;return __webpack_require__.d(b,{a:b}),b},__webpack_require__.d=(s,b)=>{for(var d in b)__webpack_require__.o(b,d)&&!__webpack_require__.o(s,d)&&Object.defineProperty(s,d,{enumerable:!0,get:b[d]})},__webpack_require__.f={},__webpack_require__.e=s=>Promise.all(Object.keys(__webpack_require__.f).reduce((b,d)=>(__webpack_require__.f[d](s,b),b),[])),__webpack_require__.u=s=>s+".js",__webpack_require__.miniCssF=s=>{},__webpack_require__.o=(s,b)=>Object.prototype.hasOwnProperty.call(s,b),(()=>{var s={},b="shell:";__webpack_require__.l=(d,y,E,g)=>{if(s[d])s[d].push(y);else{var v,T;if(void 0!==E)for(var P=document.getElementsByTagName("script"),V=0;V<P.length;V++){var _=P[V];if(_.getAttribute("src")==d||_.getAttribute("data-webpack")==b+E){v=_;break}}v||(T=!0,(v=document.createElement("script")).type="module",v.charset="utf-8",v.timeout=120,__webpack_require__.nc&&v.setAttribute("nonce",__webpack_require__.nc),v.setAttribute("data-webpack",b+E),v.src=__webpack_require__.tu(d)),s[d]=[y];var j=(C,M)=>{v.onerror=v.onload=null,clearTimeout(w);var O=s[d];if(delete s[d],v.parentNode&&v.parentNode.removeChild(v),O&&O.forEach(S=>S(M)),C)return C(M)},w=setTimeout(j.bind(null,void 0,{type:"timeout",target:v}),12e4);v.onerror=j.bind(null,v.onerror),v.onload=j.bind(null,v.onload),T&&document.head.appendChild(v)}}})(),__webpack_require__.r=s=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},(()=>{var s={},b={};__webpack_require__.f.remotes=(d,y)=>{__webpack_require__.o(s,d)&&s[d].forEach(E=>{var g=__webpack_require__.R;g||(g=[]);var v=b[E];if(!(g.indexOf(v)>=0)){if(g.push(v),v.p)return y.push(v.p);var T=w=>{w||(w=new Error("Container missing")),"string"==typeof w.message&&(w.message+='\nwhile loading "'+v[1]+'" from '+v[2]),__webpack_modules__[E]=()=>{throw w},v.p=0},P=(w,C,M,O,S,K)=>{try{var L=w(C,M);if(!L||!L.then)return S(L,O,K);var D=L.then(G=>S(G,O),T);if(!K)return D;y.push(v.p=D)}catch(G){T(G)}},_=(w,C,M)=>P(C.get,v[1],g,0,j,M),j=w=>{v.p=1,__webpack_modules__[E]=C=>{C.exports=w()}};P(__webpack_require__,v[2],0,0,(w,C,M)=>w?P(__webpack_require__.I,v[0],0,w,_,M):T(),1)}})}})(),(()=>{__webpack_require__.S={};var s={},b={};__webpack_require__.I=(d,y)=>{y||(y=[]);var E=b[d];if(E||(E=b[d]={}),!(y.indexOf(E)>=0)){if(y.push(E),s[d])return s[d];__webpack_require__.o(__webpack_require__.S,d)||(__webpack_require__.S[d]={});var g=__webpack_require__.S[d],T="shell",P=(j,w,C,M)=>{var O=g[j]=g[j]||{},S=O[w];(!S||!S.loaded&&(!M!=!S.eager?M:T>S.from))&&(O[w]={get:C,from:T,eager:!!M})},_=[];return"default"===d&&(P("@angular/common/http","13.1.2",()=>__webpack_require__.e(695).then(()=>()=>__webpack_require__(5732))),P("@angular/common","13.1.2",()=>__webpack_require__.e(42).then(()=>()=>__webpack_require__(8692))),P("@angular/core","13.1.2",()=>__webpack_require__.e(370).then(()=>()=>__webpack_require__(4370))),P("@angular/router","13.1.2",()=>__webpack_require__.e(152).then(()=>()=>__webpack_require__(6741)))),s[d]=_.length?Promise.all(_).then(()=>s[d]=1):1}}})(),(()=>{var s;__webpack_require__.tu=b=>(void 0===s&&(s={createScriptURL:d=>d},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(s=trustedTypes.createPolicy("angular#bundler",s))),s.createScriptURL(b))})(),(()=>{var s;if("string"==typeof import.meta.url&&(s=import.meta.url),!s)throw new Error("Automatic publicPath is not supported in this browser");s=s.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),__webpack_require__.p=s})(),(()=>{var s=a=>{var i=c=>c.split(".").map(h=>+h==h?+h:h),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(a),l=t[1]?i(t[1]):[];return t[2]&&(l.length++,l.push.apply(l,i(t[2]))),t[3]&&(l.push([]),l.push.apply(l,i(t[3]))),l},d=a=>{var i=a[0],t="";if(1===a.length)return"*";if(i+.5){t+=0==i?">=":-1==i?"<":1==i?"^":2==i?"~":i>0?"=":"!=";for(var l=1,c=1;c<a.length;c++)l--,t+="u"==(typeof(e=a[c]))[0]?"-":(l>0?".":"")+(l=2,e);return t}var h=[];for(c=1;c<a.length;c++){var e=a[c];h.push(0===e?"not("+r()+")":1===e?"("+r()+" || "+r()+")":2===e?h.pop()+" "+h.pop():d(e))}return r();function r(){return h.pop().replace(/^\((.+)\)$/,"$1")}},y=(a,i)=>{if(0 in a){i=s(i);var t=a[0],l=t<0;l&&(t=-t-1);for(var c=0,h=1,e=!0;;h++,c++){var r,n,o=h<a.length?(typeof a[h])[0]:"";if(c>=i.length||"o"==(n=(typeof(r=i[c]))[0]))return!e||("u"==o?h>t&&!l:""==o!=l);if("u"==n){if(!e||"u"!=o)return!1}else if(e)if(o==n)if(h<=t){if(r!=a[h])return!1}else{if(l?r>a[h]:r<a[h])return!1;r!=a[h]&&(e=!1)}else if("s"!=o&&"n"!=o){if(l||h<=t)return!1;e=!1,h--}else{if(h<=t||n<o!=l)return!1;e=!1}else"s"!=o&&"n"!=o&&(e=!1,h--)}}var f=[],u=f.pop.bind(f);for(c=1;c<a.length;c++){var p=a[c];f.push(1==p?u()|u():2==p?u()&u():p?y(p,i):!u())}return!!u()},v=(a,i)=>{var t=a[i];return Object.keys(t).reduce((l,c)=>!l||!t[l].loaded&&((a,i)=>{a=s(a),i=s(i);for(var t=0;;){if(t>=a.length)return t<i.length&&"u"!=(typeof i[t])[0];var l=a[t],c=(typeof l)[0];if(t>=i.length)return"u"==c;var h=i[t],e=(typeof h)[0];if(c!=e)return"o"==c&&"n"==e||"s"==e||"u"==c;if("o"!=c&&"u"!=c&&l!=h)return l<h;t++}})(l,c)?c:l,0)},_=(a,i,t,l)=>{var c=v(a,t);if(!y(l,c))throw new Error(((a,i,t,l)=>"Unsatisfied version "+t+" from "+(t&&a[i][t].from)+" of shared singleton module "+i+" (required "+d(l)+")")(a,t,c,l));return O(a[t][c])},O=a=>(a.loaded=1,a.get()),z=(a=>function(i,t,l,c){var h=__webpack_require__.I(i);return h&&h.then?h.then(a.bind(a,i,__webpack_require__.S[i],t,l,c)):a(i,__webpack_require__.S[i],t,l,c)})((a,i,t,l,c)=>i&&__webpack_require__.o(i,t)?_(i,0,t,l):c()),I={},N={3851:()=>z("default","@angular/common",[1,13,1,1],()=>__webpack_require__.e(692).then(()=>()=>__webpack_require__(8692))),7758:()=>z("default","@angular/common/http",[1,13,1,1],()=>__webpack_require__.e(732).then(()=>()=>__webpack_require__(5732))),8520:()=>z("default","@angular/router",[1,13,1,1],()=>__webpack_require__.e(741).then(()=>()=>__webpack_require__(6741))),9081:()=>z("default","@angular/core",[1,13,1,1],()=>__webpack_require__.e(370).then(()=>()=>__webpack_require__(4370)))},B={42:[9081],78:[3851,7758,8520,9081],152:[3851,9081],695:[3851,9081]};__webpack_require__.f.consumes=(a,i)=>{__webpack_require__.o(B,a)&&B[a].forEach(t=>{if(__webpack_require__.o(I,t))return i.push(I[t]);var l=e=>{I[t]=0,__webpack_require__.m[t]=r=>{delete __webpack_require__.c[t],r.exports=e()}},c=e=>{delete I[t],__webpack_require__.m[t]=r=>{throw delete __webpack_require__.c[t],e}};try{var h=N[t]();h.then?i.push(I[t]=h.then(l).catch(c)):l(h)}catch(e){c(e)}})}})(),(()=>{var s={179:0};__webpack_require__.f.j=(y,E)=>{var g=__webpack_require__.o(s,y)?s[y]:void 0;if(0!==g)if(g)E.push(g[2]);else{var v=new Promise((_,j)=>g=s[y]=[_,j]);E.push(g[2]=v);var T=__webpack_require__.p+__webpack_require__.u(y),P=new Error;__webpack_require__.l(T,_=>{if(__webpack_require__.o(s,y)&&(0!==(g=s[y])&&(s[y]=void 0),g)){var j=_&&("load"===_.type?"missing":_.type),w=_&&_.target&&_.target.src;P.message="Loading chunk "+y+" failed.\n("+j+": "+w+")",P.name="ChunkLoadError",P.type=j,P.request=w,g[1](P)}},"chunk-"+y,y)}};var b=(y,E)=>{var P,V,[g,v,T]=E,_=0;if(g.some(w=>0!==s[w])){for(P in v)__webpack_require__.o(v,P)&&(__webpack_require__.m[P]=v[P]);T&&T(__webpack_require__)}for(y&&y(E);_<g.length;_++)__webpack_require__.o(s,V=g[_])&&s[V]&&s[V][0](),s[g[_]]=0},d=self.webpackChunkshell=self.webpackChunkshell||[];d.forEach(b.bind(null,0)),d.push=b.bind(null,d.push.bind(d))})();var __webpack_exports__=__webpack_require__(4835);