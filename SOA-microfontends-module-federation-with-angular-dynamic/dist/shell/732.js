(self.webpackChunkshell=self.webpackChunkshell||[]).push([[732],{2409:(C,y,n)=>{n.d(y,{y:()=>h});var c=n(7393),g=n(9181),P=n(6490),p=n(6554),E=n(4487);var r=n(2494);let h=(()=>{class l{constructor(b){this._isScalar=!1,b&&(this._subscribe=b)}lift(b){const d=new l;return d.source=this,d.operator=b,d}subscribe(b,d,w){const{operator:D}=this,O=function _(l,T,b){if(l){if(l instanceof c.L)return l;if(l[g.b])return l[g.b]()}return l||T||b?new c.L(l,T,b):new c.L(P.c)}(b,d,w);if(O.add(D?D.call(O,this.source):this.source||r.v.useDeprecatedSynchronousErrorHandling&&!O.syncErrorThrowable?this._subscribe(O):this._trySubscribe(O)),r.v.useDeprecatedSynchronousErrorHandling&&O.syncErrorThrowable&&(O.syncErrorThrowable=!1,O.syncErrorThrown))throw O.syncErrorValue;return O}_trySubscribe(b){try{return this._subscribe(b)}catch(d){r.v.useDeprecatedSynchronousErrorHandling&&(b.syncErrorThrown=!0,b.syncErrorValue=d),function i(l){for(;l;){const{closed:T,destination:b,isStopped:d}=l;if(T||d)return!1;l=b&&b instanceof c.L?b:null}return!0}(b)?b.error(d):console.warn(d)}}forEach(b,d){return new(d=f(d))((w,D)=>{let O;O=this.subscribe(L=>{try{b(L)}catch(j){D(j),O&&O.unsubscribe()}},D,w)})}_subscribe(b){const{source:d}=this;return d&&d.subscribe(b)}[p.L](){return this}pipe(...b){return 0===b.length?this:function u(l){return 0===l.length?E.y:1===l.length?l[0]:function(b){return l.reduce((d,w)=>w(d),b)}}(b)(this)}toPromise(b){return new(b=f(b))((d,w)=>{let D;this.subscribe(O=>D=O,O=>w(O),()=>d(D))})}}return l.create=T=>new l(T),l})();function f(l){if(l||(l=r.v.Promise||Promise),!l)throw new Error("no Promise impl found");return l}},6490:(C,y,n)=>{n.d(y,{c:()=>g});var c=n(2494),i=n(4449);const g={closed:!0,next(P){},error(P){if(c.v.useDeprecatedSynchronousErrorHandling)throw P;(0,i.z)(P)},complete(){}}},7393:(C,y,n)=>{n.d(y,{L:()=>E});var c=n(9105),i=n(6490),g=n(3464),P=n(9181),_=n(2494),p=n(4449);class E extends g.w{constructor(r,h,f){switch(super(),this.syncErrorValue=null,this.syncErrorThrown=!1,this.syncErrorThrowable=!1,this.isStopped=!1,arguments.length){case 0:this.destination=i.c;break;case 1:if(!r){this.destination=i.c;break}if("object"==typeof r){r instanceof E?(this.syncErrorThrowable=r.syncErrorThrowable,this.destination=r,r.add(this)):(this.syncErrorThrowable=!0,this.destination=new v(this,r));break}default:this.syncErrorThrowable=!0,this.destination=new v(this,r,h,f)}}[P.b](){return this}static create(r,h,f){const l=new E(r,h,f);return l.syncErrorThrowable=!1,l}next(r){this.isStopped||this._next(r)}error(r){this.isStopped||(this.isStopped=!0,this._error(r))}complete(){this.isStopped||(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe())}_next(r){this.destination.next(r)}_error(r){this.destination.error(r),this.unsubscribe()}_complete(){this.destination.complete(),this.unsubscribe()}_unsubscribeAndRecycle(){const{_parentOrParents:r}=this;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=r,this}}class v extends E{constructor(r,h,f,l){super(),this._parentSubscriber=r;let T,b=this;(0,c.m)(h)?T=h:h&&(T=h.next,f=h.error,l=h.complete,h!==i.c&&(b=Object.create(h),(0,c.m)(b.unsubscribe)&&this.add(b.unsubscribe.bind(b)),b.unsubscribe=this.unsubscribe.bind(this))),this._context=b,this._next=T,this._error=f,this._complete=l}next(r){if(!this.isStopped&&this._next){const{_parentSubscriber:h}=this;_.v.useDeprecatedSynchronousErrorHandling&&h.syncErrorThrowable?this.__tryOrSetError(h,this._next,r)&&this.unsubscribe():this.__tryOrUnsub(this._next,r)}}error(r){if(!this.isStopped){const{_parentSubscriber:h}=this,{useDeprecatedSynchronousErrorHandling:f}=_.v;if(this._error)f&&h.syncErrorThrowable?(this.__tryOrSetError(h,this._error,r),this.unsubscribe()):(this.__tryOrUnsub(this._error,r),this.unsubscribe());else if(h.syncErrorThrowable)f?(h.syncErrorValue=r,h.syncErrorThrown=!0):(0,p.z)(r),this.unsubscribe();else{if(this.unsubscribe(),f)throw r;(0,p.z)(r)}}}complete(){if(!this.isStopped){const{_parentSubscriber:r}=this;if(this._complete){const h=()=>this._complete.call(this._context);_.v.useDeprecatedSynchronousErrorHandling&&r.syncErrorThrowable?(this.__tryOrSetError(r,h),this.unsubscribe()):(this.__tryOrUnsub(h),this.unsubscribe())}else this.unsubscribe()}}__tryOrUnsub(r,h){try{r.call(this._context,h)}catch(f){if(this.unsubscribe(),_.v.useDeprecatedSynchronousErrorHandling)throw f;(0,p.z)(f)}}__tryOrSetError(r,h,f){if(!_.v.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{h.call(this._context,f)}catch(l){return _.v.useDeprecatedSynchronousErrorHandling?(r.syncErrorValue=l,r.syncErrorThrown=!0,!0):((0,p.z)(l),!0)}return!1}_unsubscribe(){const{_parentSubscriber:r}=this;this._context=null,this._parentSubscriber=null,r.unsubscribe()}}},3464:(C,y,n)=>{n.d(y,{w:()=>p});var c=n(9796),i=n(1555),g=n(9105);const _=(()=>{function v(u){return Error.call(this),this.message=u?`${u.length} errors occurred during unsubscription:\n${u.map((r,h)=>`${h+1}) ${r.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=u,this}return v.prototype=Object.create(Error.prototype),v})();class p{constructor(u){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,u&&(this._ctorUnsubscribe=!0,this._unsubscribe=u)}unsubscribe(){let u;if(this.closed)return;let{_parentOrParents:r,_ctorUnsubscribe:h,_unsubscribe:f,_subscriptions:l}=this;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,r instanceof p)r.remove(this);else if(null!==r)for(let T=0;T<r.length;++T)r[T].remove(this);if((0,g.m)(f)){h&&(this._unsubscribe=void 0);try{f.call(this)}catch(T){u=T instanceof _?E(T.errors):[T]}}if((0,c.k)(l)){let T=-1,b=l.length;for(;++T<b;){const d=l[T];if((0,i.K)(d))try{d.unsubscribe()}catch(w){u=u||[],w instanceof _?u=u.concat(E(w.errors)):u.push(w)}}}if(u)throw new _(u)}add(u){let r=u;if(!u)return p.EMPTY;switch(typeof u){case"function":r=new p(u);case"object":if(r===this||r.closed||"function"!=typeof r.unsubscribe)return r;if(this.closed)return r.unsubscribe(),r;if(!(r instanceof p)){const l=r;r=new p,r._subscriptions=[l]}break;default:throw new Error("unrecognized teardown "+u+" added to Subscription.")}let{_parentOrParents:h}=r;if(null===h)r._parentOrParents=this;else if(h instanceof p){if(h===this)return r;r._parentOrParents=[h,this]}else{if(-1!==h.indexOf(this))return r;h.push(this)}const f=this._subscriptions;return null===f?this._subscriptions=[r]:f.push(r),r}remove(u){const r=this._subscriptions;if(r){const h=r.indexOf(u);-1!==h&&r.splice(h,1)}}}var v;function E(v){return v.reduce((u,r)=>u.concat(r instanceof _?r.errors:r),[])}p.EMPTY=((v=new p).closed=!0,v)},2494:(C,y,n)=>{n.d(y,{v:()=>i});let c=!1;const i={Promise:void 0,set useDeprecatedSynchronousErrorHandling(g){if(g){const P=new Error;console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n"+P.stack)}else c&&console.log("RxJS: Back to a better error behavior. Thank you. <3");c=g},get useDeprecatedSynchronousErrorHandling(){return c}}},5345:(C,y,n)=>{n.d(y,{IY:()=>P,Ds:()=>p,ft:()=>v});var c=n(7393),i=n(2409),g=n(9846);class P extends c.L{constructor(r){super(),this.parent=r}_next(r){this.parent.notifyNext(r)}_error(r){this.parent.notifyError(r),this.unsubscribe()}_complete(){this.parent.notifyComplete(),this.unsubscribe()}}class p extends c.L{notifyNext(r){this.destination.next(r)}notifyError(r){this.destination.error(r)}notifyComplete(){this.destination.complete()}}function v(u,r){if(r.closed)return;if(u instanceof i.y)return u.subscribe(r);let h;try{h=(0,g.s)(u)(r)}catch(f){r.error(f)}return h}},6666:(C,y,n)=>{n.d(y,{D:()=>b});var c=n(2409),i=n(9846),g=n(3464),P=n(6554),E=n(4087),v=n(377),h=n(4072),f=n(9489);function b(d,w){return w?function T(d,w){if(null!=d){if(function r(d){return d&&"function"==typeof d[P.L]}(d))return function _(d,w){return new c.y(D=>{const O=new g.w;return O.add(w.schedule(()=>{const L=d[P.L]();O.add(L.subscribe({next(j){O.add(w.schedule(()=>D.next(j)))},error(j){O.add(w.schedule(()=>D.error(j)))},complete(){O.add(w.schedule(()=>D.complete()))}}))})),O})}(d,w);if((0,h.t)(d))return function p(d,w){return new c.y(D=>{const O=new g.w;return O.add(w.schedule(()=>d.then(L=>{O.add(w.schedule(()=>{D.next(L),O.add(w.schedule(()=>D.complete()))}))},L=>{O.add(w.schedule(()=>D.error(L)))}))),O})}(d,w);if((0,f.z)(d))return(0,E.r)(d,w);if(function l(d){return d&&"function"==typeof d[v.hZ]}(d)||"string"==typeof d)return function u(d,w){if(!d)throw new Error("Iterable cannot be null");return new c.y(D=>{const O=new g.w;let L;return O.add(()=>{L&&"function"==typeof L.return&&L.return()}),O.add(w.schedule(()=>{L=d[v.hZ](),O.add(w.schedule(function(){if(D.closed)return;let j,J;try{const F=L.next();j=F.value,J=F.done}catch(F){return void D.error(F)}J?D.complete():(D.next(j),this.schedule())}))})),O})}(d,w)}throw new TypeError((null!==d&&typeof d||d)+" is not observable")}(d,w):d instanceof c.y?d:new c.y((0,i.s)(d))}},6693:(C,y,n)=>{n.d(y,{n:()=>P});var c=n(2409),i=n(5015),g=n(4087);function P(_,p){return p?(0,g.r)(_,p):new c.y((0,i.V)(_))}},5917:(C,y,n)=>{n.d(y,{of:()=>P});var c=n(4869),i=n(6693),g=n(4087);function P(..._){let p=_[_.length-1];return(0,c.K)(p)?(_.pop(),(0,g.r)(_,p)):(0,i.n)(_)}},4612:(C,y,n)=>{n.d(y,{b:()=>i});var c=n(9773);function i(g,P){return(0,c.zg)(g,P,1)}},5435:(C,y,n)=>{n.d(y,{h:()=>i});var c=n(7393);function i(_,p){return function(v){return v.lift(new g(_,p))}}class g{constructor(p,E){this.predicate=p,this.thisArg=E}call(p,E){return E.subscribe(new P(p,this.predicate,this.thisArg))}}class P extends c.L{constructor(p,E,v){super(p),this.predicate=E,this.thisArg=v,this.count=0}_next(p){let E;try{E=this.predicate.call(this.thisArg,p,this.count++)}catch(v){return void this.destination.error(v)}E&&this.destination.next(p)}}},8002:(C,y,n)=>{n.d(y,{U:()=>i});var c=n(7393);function i(_,p){return function(v){if("function"!=typeof _)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return v.lift(new g(_,p))}}class g{constructor(p,E){this.project=p,this.thisArg=E}call(p,E){return E.subscribe(new P(p,this.project,this.thisArg))}}class P extends c.L{constructor(p,E,v){super(p),this.project=E,this.count=0,this.thisArg=v||this}_next(p){let E;try{E=this.project.call(this.thisArg,p,this.count++)}catch(v){return void this.destination.error(v)}this.destination.next(E)}}},9773:(C,y,n)=>{n.d(y,{zg:()=>P});var c=n(8002),i=n(6666),g=n(5345);function P(v,u,r=Number.POSITIVE_INFINITY){return"function"==typeof u?h=>h.pipe(P((f,l)=>(0,i.D)(v(f,l)).pipe((0,c.U)((T,b)=>u(f,T,l,b))),r)):("number"==typeof u&&(r=u),h=>h.lift(new _(v,r)))}class _{constructor(u,r=Number.POSITIVE_INFINITY){this.project=u,this.concurrent=r}call(u,r){return r.subscribe(new p(u,this.project,this.concurrent))}}class p extends g.Ds{constructor(u,r,h=Number.POSITIVE_INFINITY){super(u),this.project=r,this.concurrent=h,this.hasCompleted=!1,this.buffer=[],this.active=0,this.index=0}_next(u){this.active<this.concurrent?this._tryNext(u):this.buffer.push(u)}_tryNext(u){let r;const h=this.index++;try{r=this.project(u,h)}catch(f){return void this.destination.error(f)}this.active++,this._innerSub(r)}_innerSub(u){const r=new g.IY(this),h=this.destination;h.add(r);const f=(0,g.ft)(u,r);f!==r&&h.add(f)}_complete(){this.hasCompleted=!0,0===this.active&&0===this.buffer.length&&this.destination.complete(),this.unsubscribe()}notifyNext(u){this.destination.next(u)}notifyComplete(){const u=this.buffer;this.active--,u.length>0?this._next(u.shift()):0===this.active&&this.hasCompleted&&this.destination.complete()}}},4087:(C,y,n)=>{n.d(y,{r:()=>g});var c=n(2409),i=n(3464);function g(P,_){return new c.y(p=>{const E=new i.w;let v=0;return E.add(_.schedule(function(){v!==P.length?(p.next(P[v++]),p.closed||E.add(this.schedule())):p.complete()})),E})}},377:(C,y,n)=>{n.d(y,{hZ:()=>i});const i=function c(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}()},6554:(C,y,n)=>{n.d(y,{L:()=>c});const c="function"==typeof Symbol&&Symbol.observable||"@@observable"},9181:(C,y,n)=>{n.d(y,{b:()=>c});const c="function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random()},4449:(C,y,n)=>{function c(i){setTimeout(()=>{throw i},0)}n.d(y,{z:()=>c})},4487:(C,y,n)=>{function c(i){return i}n.d(y,{y:()=>c})},9796:(C,y,n)=>{n.d(y,{k:()=>c});const c=Array.isArray||(i=>i&&"number"==typeof i.length)},9489:(C,y,n)=>{n.d(y,{z:()=>c});const c=i=>i&&"number"==typeof i.length&&"function"!=typeof i},9105:(C,y,n)=>{function c(i){return"function"==typeof i}n.d(y,{m:()=>c})},1555:(C,y,n)=>{function c(i){return null!==i&&"object"==typeof i}n.d(y,{K:()=>c})},4072:(C,y,n)=>{function c(i){return!!i&&"function"!=typeof i.subscribe&&"function"==typeof i.then}n.d(y,{t:()=>c})},4869:(C,y,n)=>{function c(i){return i&&"function"==typeof i.schedule}n.d(y,{K:()=>c})},9846:(C,y,n)=>{n.d(y,{s:()=>h});var c=n(5015),i=n(4449),P=n(377),p=n(6554),v=n(9489),u=n(4072),r=n(1555);const h=f=>{if(f&&"function"==typeof f[p.L])return(f=>l=>{const T=f[p.L]();if("function"!=typeof T.subscribe)throw new TypeError("Provided object does not correctly implement Symbol.observable");return T.subscribe(l)})(f);if((0,v.z)(f))return(0,c.V)(f);if((0,u.t)(f))return(f=>l=>(f.then(T=>{l.closed||(l.next(T),l.complete())},T=>l.error(T)).then(null,i.z),l))(f);if(f&&"function"==typeof f[P.hZ])return(f=>l=>{const T=f[P.hZ]();for(;;){let b;try{b=T.next()}catch(d){return l.error(d),l}if(b.done){l.complete();break}if(l.next(b.value),l.closed)break}return"function"==typeof T.return&&l.add(()=>{T.return&&T.return()}),l})(f);{const T=`You provided ${(0,r.K)(f)?"an invalid object":`'${f}'`} where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.`;throw new TypeError(T)}}},5015:(C,y,n)=>{n.d(y,{V:()=>c});const c=i=>g=>{for(let P=0,_=i.length;P<_&&!g.closed;P++)g.next(i[P]);g.complete()}},5732:(C,y,n)=>{n.r(y),n.d(y,{HTTP_INTERCEPTORS:()=>Y,HttpBackend:()=>u,HttpClient:()=>oe,HttpClientJsonpModule:()=>Te,HttpClientModule:()=>ve,HttpClientXsrfModule:()=>ue,HttpContext:()=>O,HttpContextToken:()=>D,HttpErrorResponse:()=>X,HttpEventType:()=>I,HttpHandler:()=>v,HttpHeaderResponse:()=>$,HttpHeaders:()=>r,HttpParams:()=>w,HttpRequest:()=>K,HttpResponse:()=>z,HttpResponseBase:()=>V,HttpUrlEncodingCodec:()=>h,HttpXhrBackend:()=>q,HttpXsrfTokenExtractor:()=>re,JsonpClientBackend:()=>Q,JsonpInterceptor:()=>ce,XhrFactory:()=>we,\u0275HttpInterceptingHandler:()=>le});var c=n(3851),i=n(9081),g=n(5917),P=n(2409),_=n(4612),p=n(5435),E=n(8002);class v{}class u{}class r{constructor(t){this.normalizedNames=new Map,this.lazyUpdate=null,t?this.lazyInit="string"==typeof t?()=>{this.headers=new Map,t.split("\n").forEach(e=>{const a=e.indexOf(":");if(a>0){const o=e.slice(0,a),m=o.toLowerCase(),M=e.slice(a+1).trim();this.maybeSetNormalizedName(o,m),this.headers.has(m)?this.headers.get(m).push(M):this.headers.set(m,[M])}})}:()=>{this.headers=new Map,Object.keys(t).forEach(e=>{let a=t[e];const o=e.toLowerCase();"string"==typeof a&&(a=[a]),a.length>0&&(this.headers.set(o,a),this.maybeSetNormalizedName(e,o))})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();const e=this.headers.get(t.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,e){return this.clone({name:t,value:e,op:"a"})}set(t,e){return this.clone({name:t,value:e,op:"s"})}delete(t,e){return this.clone({name:t,value:e,op:"d"})}maybeSetNormalizedName(t,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,t)}init(){this.lazyInit&&(this.lazyInit instanceof r?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(e=>{this.headers.set(e,t.headers.get(e)),this.normalizedNames.set(e,t.normalizedNames.get(e))})}clone(t){const e=new r;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof r?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([t]),e}applyUpdate(t){const e=t.name.toLowerCase();switch(t.op){case"a":case"s":let a=t.value;if("string"==typeof a&&(a=[a]),0===a.length)return;this.maybeSetNormalizedName(t.name,e);const o=("a"===t.op?this.headers.get(e):void 0)||[];o.push(...a),this.headers.set(e,o);break;case"d":const m=t.value;if(m){let M=this.headers.get(e);if(!M)return;M=M.filter(R=>-1===m.indexOf(R)),0===M.length?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,M)}else this.headers.delete(e),this.normalizedNames.delete(e)}}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>t(this.normalizedNames.get(e),this.headers.get(e)))}}class h{encodeKey(t){return b(t)}encodeValue(t){return b(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}}const l=/%(\d[a-f0-9])/gi,T={40:"@","3A":":",24:"$","2C":",","3B":";","2B":"+","3D":"=","3F":"?","2F":"/"};function b(s){return encodeURIComponent(s).replace(l,(t,e)=>T[e]??t)}function d(s){return`${s}`}class w{constructor(t={}){if(this.updates=null,this.cloneFrom=null,this.encoder=t.encoder||new h,t.fromString){if(t.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function f(s,t){const e=new Map;return s.length>0&&s.replace(/^\?/,"").split("&").forEach(o=>{const m=o.indexOf("="),[M,R]=-1==m?[t.decodeKey(o),""]:[t.decodeKey(o.slice(0,m)),t.decodeValue(o.slice(m+1))],S=e.get(M)||[];S.push(R),e.set(M,S)}),e}(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(e=>{const a=t.fromObject[e];this.map.set(e,Array.isArray(a)?a:[a])})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();const e=this.map.get(t);return e?e[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,e){return this.clone({param:t,value:e,op:"a"})}appendAll(t){const e=[];return Object.keys(t).forEach(a=>{const o=t[a];Array.isArray(o)?o.forEach(m=>{e.push({param:a,value:m,op:"a"})}):e.push({param:a,value:o,op:"a"})}),this.clone(e)}set(t,e){return this.clone({param:t,value:e,op:"s"})}delete(t,e){return this.clone({param:t,value:e,op:"d"})}toString(){return this.init(),this.keys().map(t=>{const e=this.encoder.encodeKey(t);return this.map.get(t).map(a=>e+"="+this.encoder.encodeValue(a)).join("&")}).filter(t=>""!==t).join("&")}clone(t){const e=new w({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(t),e}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":const e=("a"===t.op?this.map.get(t.param):void 0)||[];e.push(d(t.value)),this.map.set(t.param,e);break;case"d":if(void 0===t.value){this.map.delete(t.param);break}{let a=this.map.get(t.param)||[];const o=a.indexOf(d(t.value));-1!==o&&a.splice(o,1),a.length>0?this.map.set(t.param,a):this.map.delete(t.param)}}}),this.cloneFrom=this.updates=null)}}class D{constructor(t){this.defaultValue=t}}class O{constructor(){this.map=new Map}set(t,e){return this.map.set(t,e),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}}function j(s){return"undefined"!=typeof ArrayBuffer&&s instanceof ArrayBuffer}function J(s){return"undefined"!=typeof Blob&&s instanceof Blob}function F(s){return"undefined"!=typeof FormData&&s instanceof FormData}class K{constructor(t,e,a,o){let m;if(this.url=e,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=t.toUpperCase(),function L(s){switch(s){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||o?(this.body=void 0!==a?a:null,m=o):m=a,m&&(this.reportProgress=!!m.reportProgress,this.withCredentials=!!m.withCredentials,m.responseType&&(this.responseType=m.responseType),m.headers&&(this.headers=m.headers),m.context&&(this.context=m.context),m.params&&(this.params=m.params)),this.headers||(this.headers=new r),this.context||(this.context=new O),this.params){const M=this.params.toString();if(0===M.length)this.urlWithParams=e;else{const R=e.indexOf("?");this.urlWithParams=e+(-1===R?"?":R<e.length-1?"&":"")+M}}else this.params=new w,this.urlWithParams=e}serializeBody(){return null===this.body?null:j(this.body)||J(this.body)||F(this.body)||function he(s){return"undefined"!=typeof URLSearchParams&&s instanceof URLSearchParams}(this.body)||"string"==typeof this.body?this.body:this.body instanceof w?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||F(this.body)?null:J(this.body)?this.body.type||null:j(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof w?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(t={}){const e=t.method||this.method,a=t.url||this.url,o=t.responseType||this.responseType,m=void 0!==t.body?t.body:this.body,M=void 0!==t.withCredentials?t.withCredentials:this.withCredentials,R=void 0!==t.reportProgress?t.reportProgress:this.reportProgress;let S=t.headers||this.headers,H=t.params||this.params;const B=t.context??this.context;return void 0!==t.setHeaders&&(S=Object.keys(t.setHeaders).reduce((k,N)=>k.set(N,t.setHeaders[N]),S)),t.setParams&&(H=Object.keys(t.setParams).reduce((k,N)=>k.set(N,t.setParams[N]),H)),new K(e,a,m,{params:H,headers:S,context:B,reportProgress:R,responseType:o,withCredentials:M})}}var I=(()=>((I=I||{})[I.Sent=0]="Sent",I[I.UploadProgress=1]="UploadProgress",I[I.ResponseHeader=2]="ResponseHeader",I[I.DownloadProgress=3]="DownloadProgress",I[I.Response=4]="Response",I[I.User=5]="User",I))();class V{constructor(t,e=200,a="OK"){this.headers=t.headers||new r,this.status=void 0!==t.status?t.status:e,this.statusText=t.statusText||a,this.url=t.url||null,this.ok=this.status>=200&&this.status<300}}class $ extends V{constructor(t={}){super(t),this.type=I.ResponseHeader}clone(t={}){return new $({headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}class z extends V{constructor(t={}){super(t),this.type=I.Response,this.body=void 0!==t.body?t.body:null}clone(t={}){return new z({body:void 0!==t.body?t.body:this.body,headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}class X extends V{constructor(t){super(t,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${t.url||"(unknown url)"}`:`Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`,this.error=t.error||null}}function Z(s,t){return{body:t,headers:s.headers,context:s.context,observe:s.observe,params:s.params,reportProgress:s.reportProgress,responseType:s.responseType,withCredentials:s.withCredentials}}let oe=(()=>{class s{constructor(e){this.handler=e}request(e,a,o={}){let m;if(e instanceof K)m=e;else{let S,H;S=o.headers instanceof r?o.headers:new r(o.headers),o.params&&(H=o.params instanceof w?o.params:new w({fromObject:o.params})),m=new K(e,a,void 0!==o.body?o.body:null,{headers:S,context:o.context,params:H,reportProgress:o.reportProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials})}const M=(0,g.of)(m).pipe((0,_.b)(S=>this.handler.handle(S)));if(e instanceof K||"events"===o.observe)return M;const R=M.pipe((0,p.h)(S=>S instanceof z));switch(o.observe||"body"){case"body":switch(m.responseType){case"arraybuffer":return R.pipe((0,E.U)(S=>{if(null!==S.body&&!(S.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return S.body}));case"blob":return R.pipe((0,E.U)(S=>{if(null!==S.body&&!(S.body instanceof Blob))throw new Error("Response is not a Blob.");return S.body}));case"text":return R.pipe((0,E.U)(S=>{if(null!==S.body&&"string"!=typeof S.body)throw new Error("Response is not a string.");return S.body}));default:return R.pipe((0,E.U)(S=>S.body))}case"response":return R;default:throw new Error(`Unreachable: unhandled observe type ${o.observe}}`)}}delete(e,a={}){return this.request("DELETE",e,a)}get(e,a={}){return this.request("GET",e,a)}head(e,a={}){return this.request("HEAD",e,a)}jsonp(e,a){return this.request("JSONP",e,{params:(new w).append(a,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,a={}){return this.request("OPTIONS",e,a)}patch(e,a,o={}){return this.request("PATCH",e,Z(o,a))}post(e,a,o={}){return this.request("POST",e,Z(o,a))}put(e,a,o={}){return this.request("PUT",e,Z(o,a))}}return s.\u0275fac=function(e){return new(e||s)(i.\u0275\u0275inject(v))},s.\u0275prov=i.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})();class ie{constructor(t,e){this.next=t,this.interceptor=e}handle(t){return this.interceptor.intercept(t,this.next)}}const Y=new i.InjectionToken("HTTP_INTERCEPTORS");let de=(()=>{class s{intercept(e,a){return a.handle(e)}}return s.\u0275fac=function(e){return new(e||s)},s.\u0275prov=i.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})(),fe=0;class ae{}let Q=(()=>{class s{constructor(e,a){this.callbackMap=e,this.document=a,this.resolvedPromise=Promise.resolve()}nextCallback(){return"ng_jsonp_callback_"+fe++}handle(e){if("JSONP"!==e.method)throw new Error("JSONP requests must use JSONP request method.");if("json"!==e.responseType)throw new Error("JSONP requests must use Json response type.");return new P.y(a=>{const o=this.nextCallback(),m=e.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/,`=${o}$1`),M=this.document.createElement("script");M.src=m;let R=null,S=!1,H=!1;this.callbackMap[o]=x=>{delete this.callbackMap[o],!H&&(R=x,S=!0)};const B=()=>{M.parentNode&&M.parentNode.removeChild(M),delete this.callbackMap[o]},k=x=>{H||this.resolvedPromise.then(()=>{B(),S?(a.next(new z({body:R,status:200,statusText:"OK",url:m})),a.complete()):a.error(new X({url:m,status:0,statusText:"JSONP Error",error:new Error("JSONP injected script did not invoke callback.")}))})},N=x=>{H||(B(),a.error(new X({error:x,status:0,statusText:"JSONP Error",url:m})))};return M.addEventListener("load",k),M.addEventListener("error",N),this.document.body.appendChild(M),a.next({type:I.Sent}),()=>{H=!0,M.removeEventListener("load",k),M.removeEventListener("error",N),B()}})}}return s.\u0275fac=function(e){return new(e||s)(i.\u0275\u0275inject(ae),i.\u0275\u0275inject(c.DOCUMENT))},s.\u0275prov=i.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})(),ce=(()=>{class s{constructor(e){this.jsonp=e}intercept(e,a){return"JSONP"===e.method?this.jsonp.handle(e):a.handle(e)}}return s.\u0275fac=function(e){return new(e||s)(i.\u0275\u0275inject(Q))},s.\u0275prov=i.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})();const me=/^\)\]\}',?\n/;let q=(()=>{class s{constructor(e){this.xhrFactory=e}handle(e){if("JSONP"===e.method)throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");return new P.y(a=>{const o=this.xhrFactory.build();if(o.open(e.method,e.urlWithParams),e.withCredentials&&(o.withCredentials=!0),e.headers.forEach((x,A)=>o.setRequestHeader(x,A.join(","))),e.headers.has("Accept")||o.setRequestHeader("Accept","application/json, text/plain, */*"),!e.headers.has("Content-Type")){const x=e.detectContentTypeHeader();null!==x&&o.setRequestHeader("Content-Type",x)}if(e.responseType){const x=e.responseType.toLowerCase();o.responseType="json"!==x?x:"text"}const m=e.serializeBody();let M=null;const R=()=>{if(null!==M)return M;const x=1223===o.status?204:o.status,A=o.statusText||"OK",W=new r(o.getAllResponseHeaders()),G=function Ee(s){return"responseURL"in s&&s.responseURL?s.responseURL:/^X-Request-URL:/m.test(s.getAllResponseHeaders())?s.getResponseHeader("X-Request-URL"):null}(o)||e.url;return M=new $({headers:W,status:x,statusText:A,url:G}),M},S=()=>{let{headers:x,status:A,statusText:W,url:G}=R(),U=null;204!==A&&(U=void 0===o.response?o.responseText:o.response),0===A&&(A=U?200:0);let ne=A>=200&&A<300;if("json"===e.responseType&&"string"==typeof U){const Pe=U;U=U.replace(me,"");try{U=""!==U?JSON.parse(U):null}catch(Oe){U=Pe,ne&&(ne=!1,U={error:Oe,text:U})}}ne?(a.next(new z({body:U,headers:x,status:A,statusText:W,url:G||void 0})),a.complete()):a.error(new X({error:U,headers:x,status:A,statusText:W,url:G||void 0}))},H=x=>{const{url:A}=R(),W=new X({error:x,status:o.status||0,statusText:o.statusText||"Unknown Error",url:A||void 0});a.error(W)};let B=!1;const k=x=>{B||(a.next(R()),B=!0);let A={type:I.DownloadProgress,loaded:x.loaded};x.lengthComputable&&(A.total=x.total),"text"===e.responseType&&!!o.responseText&&(A.partialText=o.responseText),a.next(A)},N=x=>{let A={type:I.UploadProgress,loaded:x.loaded};x.lengthComputable&&(A.total=x.total),a.next(A)};return o.addEventListener("load",S),o.addEventListener("error",H),o.addEventListener("timeout",H),o.addEventListener("abort",H),e.reportProgress&&(o.addEventListener("progress",k),null!==m&&o.upload&&o.upload.addEventListener("progress",N)),o.send(m),a.next({type:I.Sent}),()=>{o.removeEventListener("error",H),o.removeEventListener("abort",H),o.removeEventListener("load",S),o.removeEventListener("timeout",H),e.reportProgress&&(o.removeEventListener("progress",k),null!==m&&o.upload&&o.upload.removeEventListener("progress",N)),o.readyState!==o.DONE&&o.abort()}})}}return s.\u0275fac=function(e){return new(e||s)(i.\u0275\u0275inject(c.XhrFactory))},s.\u0275prov=i.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})();const ee=new i.InjectionToken("XSRF_COOKIE_NAME"),te=new i.InjectionToken("XSRF_HEADER_NAME");class re{}let _e=(()=>{class s{constructor(e,a,o){this.doc=e,this.platform=a,this.cookieName=o,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=(0,c.\u0275parseCookieValue)(e,this.cookieName),this.lastCookieString=e),this.lastToken}}return s.\u0275fac=function(e){return new(e||s)(i.\u0275\u0275inject(c.DOCUMENT),i.\u0275\u0275inject(i.PLATFORM_ID),i.\u0275\u0275inject(ee))},s.\u0275prov=i.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})(),se=(()=>{class s{constructor(e,a){this.tokenService=e,this.headerName=a}intercept(e,a){const o=e.url.toLowerCase();if("GET"===e.method||"HEAD"===e.method||o.startsWith("http://")||o.startsWith("https://"))return a.handle(e);const m=this.tokenService.getToken();return null!==m&&!e.headers.has(this.headerName)&&(e=e.clone({headers:e.headers.set(this.headerName,m)})),a.handle(e)}}return s.\u0275fac=function(e){return new(e||s)(i.\u0275\u0275inject(re),i.\u0275\u0275inject(te))},s.\u0275prov=i.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})(),le=(()=>{class s{constructor(e,a){this.backend=e,this.injector=a,this.chain=null}handle(e){if(null===this.chain){const a=this.injector.get(Y,[]);this.chain=a.reduceRight((o,m)=>new ie(o,m),this.backend)}return this.chain.handle(e)}}return s.\u0275fac=function(e){return new(e||s)(i.\u0275\u0275inject(u),i.\u0275\u0275inject(i.Injector))},s.\u0275prov=i.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})();function ge(){return"object"==typeof window?window:{}}let ue=(()=>{class s{static disable(){return{ngModule:s,providers:[{provide:se,useClass:de}]}}static withOptions(e={}){return{ngModule:s,providers:[e.cookieName?{provide:ee,useValue:e.cookieName}:[],e.headerName?{provide:te,useValue:e.headerName}:[]]}}}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=i.\u0275\u0275defineNgModule({type:s}),s.\u0275inj=i.\u0275\u0275defineInjector({providers:[se,{provide:Y,useExisting:se,multi:!0},{provide:re,useClass:_e},{provide:ee,useValue:"XSRF-TOKEN"},{provide:te,useValue:"X-XSRF-TOKEN"}]}),s})(),ve=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=i.\u0275\u0275defineNgModule({type:s}),s.\u0275inj=i.\u0275\u0275defineInjector({providers:[oe,{provide:v,useClass:le},q,{provide:u,useExisting:q}],imports:[[ue.withOptions({cookieName:"XSRF-TOKEN",headerName:"X-XSRF-TOKEN"})]]}),s})(),Te=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=i.\u0275\u0275defineNgModule({type:s}),s.\u0275inj=i.\u0275\u0275defineInjector({providers:[Q,{provide:ae,useFactory:ge},{provide:Y,useClass:ce,multi:!0}]}),s})();const we=c.XhrFactory}}]);