(self.webpackChunkmfe2=self.webpackChunkmfe2||[]).push([[640,237],{1847:(Rt,ve,P)=>{P.d(ve,{z:()=>U});var N=P(8239),f=P(9081),ie=P(7758);let oe=(()=>{class k{constructor(D){this.httpClient=D}getStatusForDomainName(D,L,R){this.httpClient.get(`http://localhost:8080/domain/lookup/${R}`).subscribe(K=>{console.log(K),K.forEach(J=>{D.push(J)})}),this.httpClient.get(`http://localhost:8080/domain/status/${R}`).subscribe(K=>{console.log(K),K.forEach(J=>{L.push("False"===J?"ACTIVE":"INACTIVE")})})}}return k.\u0275fac=function(D){return new(D||k)(f.\u0275\u0275inject(ie.HttpClient))},k.\u0275prov=f.\u0275\u0275defineInjectable({token:k,factory:k.\u0275fac,providedIn:"root"}),k})();const h=["vc"];function ce(k,V){if(1&k&&(f.\u0275\u0275elementStart(0,"div",9),f.\u0275\u0275elementStart(1,"span",10),f.\u0275\u0275text(2,"\xd7"),f.\u0275\u0275elementEnd(),f.\u0275\u0275text(3),f.\u0275\u0275elementEnd()),2&k){const D=f.\u0275\u0275nextContext();f.\u0275\u0275advance(3),f.\u0275\u0275textInterpolate1(" ",D.resultFinal," ")}}function X(k,V){if(1&k&&(f.\u0275\u0275elementStart(0,"div",11),f.\u0275\u0275elementStart(1,"span",10),f.\u0275\u0275text(2,"\xd7"),f.\u0275\u0275elementEnd(),f.\u0275\u0275text(3),f.\u0275\u0275elementEnd()),2&k){const D=f.\u0275\u0275nextContext();f.\u0275\u0275advance(3),f.\u0275\u0275textInterpolate1(" ",D.resultFinal," ")}}function ue(k,V){if(1&k&&(f.\u0275\u0275elementStart(0,"mat-list-item"),f.\u0275\u0275elementStart(1,"h4",12),f.\u0275\u0275text(2),f.\u0275\u0275elementEnd(),f.\u0275\u0275elementEnd()),2&k){const D=V.$implicit;f.\u0275\u0275advance(2),f.\u0275\u0275textInterpolate1(" ",D," ")}}let U=(()=>{class k{constructor(D,L,R,K){this.injector=D,this.cfr=L,this.httpClient=R,this.domainsService=K,this.domains=[]}ngOnInit(){this.empty()}terms(){var D=this;return(0,N.Z)(function*(){const L=yield P.e(590).then(P.bind(P,1590)).then(K=>K.LazyComponent),R=D.cfr.resolveComponentFactory(L);D.viewContainer.createComponent(R,null,D.injector)})()}empty(){this.domains.length=0,this.domains=[],this.resultFinal=""}addDomain(D){D&&(this.empty(),this.httpClient.get(`http://localhost:8080/domain/lookup/${D}`).subscribe(L=>{console.log(L),L.forEach(R=>{this.domains.push(R)}),this.httpClient.post("http://localhost:8080/domain/save/",this.domains).subscribe(R=>{this.resultFinal=JSON.stringify(R.response),this.resultFinal=this.resultFinal.split('"').join(""),console.log(this.resultFinal)})}))}activeStatus(D,L,R){R&&this.domainsService.getStatusForDomainName(D,L,R)}}return k.\u0275fac=function(D){return new(D||k)(f.\u0275\u0275directiveInject(f.Injector),f.\u0275\u0275directiveInject(f.ComponentFactoryResolver),f.\u0275\u0275directiveInject(ie.HttpClient),f.\u0275\u0275directiveInject(oe))},k.\u0275cmp=f.\u0275\u0275defineComponent({type:k,selectors:[["app-domains-search"]],viewQuery:function(D,L){if(1&D&&f.\u0275\u0275viewQuery(h,7,f.ViewContainerRef),2&D){let R;f.\u0275\u0275queryRefresh(R=f.\u0275\u0275loadQuery())&&(L.viewContainer=R.first)}},decls:15,vars:3,consts:[["id","container"],["src","../../../assets/domain.png","width","30","padding-top","20"],["class","alert1",4,"ngIf"],["class","alert",4,"ngIf"],["appearance","fill",1,"example-form-field"],["matInput","","type","text",3,"keyup.enter","blur"],["newDomain",""],["mat-button","","color","accent",3,"click"],[4,"ngFor","ngForOf"],[1,"alert1"],["onclick","this.parentElement.style.display='none';",1,"closebtn"],[1,"alert"],["matLine",""]],template:function(D,L){if(1&D){const R=f.\u0275\u0275getCurrentView();f.\u0275\u0275elementStart(0,"div",0),f.\u0275\u0275elementStart(1,"div"),f.\u0275\u0275element(2,"img",1),f.\u0275\u0275elementEnd(),f.\u0275\u0275elementContainerStart(3),f.\u0275\u0275template(4,ce,4,1,"div",2),f.\u0275\u0275template(5,X,4,1,"div",3),f.\u0275\u0275elementContainerEnd(),f.\u0275\u0275elementStart(6,"div",4),f.\u0275\u0275elementStart(7,"h3"),f.\u0275\u0275text(8,"Enter the domain:"),f.\u0275\u0275elementEnd(),f.\u0275\u0275elementStart(9,"input",5,6),f.\u0275\u0275listener("keyup.enter",function(){f.\u0275\u0275restoreView(R);const J=f.\u0275\u0275reference(10);return L.addDomain(J.value)})("blur",function(){f.\u0275\u0275restoreView(R);const J=f.\u0275\u0275reference(10);return L.addDomain(J.value),J.value=""}),f.\u0275\u0275elementEnd(),f.\u0275\u0275elementStart(11,"button",7),f.\u0275\u0275listener("click",function(){f.\u0275\u0275restoreView(R);const J=f.\u0275\u0275reference(10);return L.addDomain(J.value)}),f.\u0275\u0275text(12," Add "),f.\u0275\u0275elementEnd(),f.\u0275\u0275elementStart(13,"div"),f.\u0275\u0275template(14,ue,3,1,"mat-list-item",8),f.\u0275\u0275elementEnd(),f.\u0275\u0275elementEnd(),f.\u0275\u0275elementEnd()}2&D&&(f.\u0275\u0275advance(4),f.\u0275\u0275property("ngIf","The domains were successfully saved to the domains.txt"===L.resultFinal),f.\u0275\u0275advance(1),f.\u0275\u0275property("ngIf","No domains were successfully saved to the domains.txt"===L.resultFinal),f.\u0275\u0275advance(9),f.\u0275\u0275property("ngForOf",L.domains))},styles:["input[type=text][_ngcontent-%COMP%] {\n        width: 100%;\n        max-width: 400px;\n        box-sizing: border-box;\n        border: none;\n        border-bottom: 2px solid rgb(70, 57, 57);\n        font-size: 20px;\n        margin-bottom: 20px;\n        margin-top: 20px;\n        background-color: rgb(145, 90, 145);\n    }\n\n    button[_ngcontent-%COMP%] {\n        border: 2px solid rgb(70, 57, 57);\n        background-color: white;\n        font-size: 16px;\n        padding: 10px;\n        padding-left: 40px;\n        padding-right: 40px;\n        border-radius: 10px;\n        margin-bottom: 20px;\n        margin-top: 20px;\n        cursor: pointer;\n        color:white;\n        background-color: rgb(145, 90, 145);\n    } \n\n    button[_ngcontent-%COMP%]:active {\n        border-color: black;\n    }\n\n    #container[_ngcontent-%COMP%] {\n        border: 2px darkred dashed;\n        padding: 20px;\n    }\n\n    .alert[_ngcontent-%COMP%] {\n        padding: 20px;\n        background-color: #f44336;\n        color: white;\n    }\n\n    .alert1[_ngcontent-%COMP%] {\n        padding: 20px;\n        background-color: #1fc448;\n        color: white;\n    }\n\n    .closebtn[_ngcontent-%COMP%] {\n        margin-left: 15px;\n        color: white;\n        font-weight: bold;\n        float: right;\n        font-size: 22px;\n        line-height: 20px;\n        cursor: pointer;\n        transition: 0.3s;\n    }\n\n    .closebtn[_ngcontent-%COMP%]:hover {\n        color: black;\n    }"]}),k})()},3237:(Rt,ve,P)=>{P.r(ve),P.d(ve,{ActiveModule:()=>Js});var N=P(3851),f=P(8520),ie=P(1847),oe=P(8239),h=P(9081);P(5998);function ut(){return"undefined"!=typeof window&&void 0!==window.document}function be(){return"undefined"!=typeof process&&"[object process]"==={}.toString.call(process)}let Ke=(i,e)=>!1,ht=(i,e,t)=>[];(be()||"undefined"!=typeof Element)&&(Ke=ut()?(i,e)=>{for(;e&&e!==document.documentElement;){if(e===i)return!0;e=e.parentNode||e.host}return!1}:(i,e)=>i.contains(e),ht=(i,e,t)=>{let n=[];if(t){const s=i.querySelectorAll(e);for(let r=0;r<s.length;r++)n.push(s[r])}else{const s=i.querySelector(e);s&&n.push(s)}return n});const an=new h.InjectionToken("AnimationModuleType");let ln;try{ln="undefined"!=typeof Intl&&Intl.v8BreakIterator}catch{ln=!1}let Ts=(()=>{class i{constructor(t){this._platformId=t,this.isBrowser=this._platformId?(0,N.isPlatformBrowser)(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!ln)&&"undefined"!=typeof CSS&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}}return i.\u0275fac=function(t){return new(t||i)(h.\u0275\u0275inject(h.PLATFORM_ID))},i.\u0275prov=h.\u0275\u0275defineInjectable({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();const Yn="cdk-high-contrast-black-on-white",Xn="cdk-high-contrast-white-on-black",dn="cdk-high-contrast-active";let Ps=(()=>{class i{constructor(t,n){this._platform=t,this._document=n}getHighContrastMode(){if(!this._platform.isBrowser)return 0;const t=this._document.createElement("div");t.style.backgroundColor="rgb(1,2,3)",t.style.position="absolute",this._document.body.appendChild(t);const n=this._document.defaultView||window,s=n&&n.getComputedStyle?n.getComputedStyle(t):null,r=(s&&s.backgroundColor||"").replace(/ /g,"");switch(t.remove(),r){case"rgb(0,0,0)":return 2;case"rgb(255,255,255)":return 1}return 0}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){const t=this._document.body.classList;t.remove(dn),t.remove(Yn),t.remove(Xn),this._hasCheckedHighContrastMode=!0;const n=this.getHighContrastMode();1===n?(t.add(dn),t.add(Yn)):2===n&&(t.add(dn),t.add(Xn))}}}return i.\u0275fac=function(t){return new(t||i)(h.\u0275\u0275inject(Ts),h.\u0275\u0275inject(N.DOCUMENT))},i.\u0275prov=h.\u0275\u0275defineInjectable({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),Jn=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=h.\u0275\u0275defineNgModule({type:i}),i.\u0275inj=h.\u0275\u0275defineInjector({}),i})();const Bs=new h.InjectionToken("mat-sanity-checks",{providedIn:"root",factory:function js(){return!0}});let ni=(()=>{class i{constructor(t,n,s){this._sanityChecks=n,this._document=s,this._hasDoneGlobalChecks=!1,t._applyBodyHighContrastModeCssClasses(),this._hasDoneGlobalChecks||(this._hasDoneGlobalChecks=!0)}_checkIsEnabled(t){return!function Cs(){return"undefined"!=typeof __karma__&&!!__karma__||"undefined"!=typeof jasmine&&!!jasmine||"undefined"!=typeof jest&&!!jest||"undefined"!=typeof Mocha&&!!Mocha}()&&("boolean"==typeof this._sanityChecks?this._sanityChecks:!!this._sanityChecks[t])}}return i.\u0275fac=function(t){return new(t||i)(h.\u0275\u0275inject(Ps),h.\u0275\u0275inject(Bs,8),h.\u0275\u0275inject(N.DOCUMENT))},i.\u0275mod=h.\u0275\u0275defineNgModule({type:i}),i.\u0275inj=h.\u0275\u0275defineInjector({imports:[[Jn],Jn]}),i})();const $s=["*",[["mat-card-footer"]]],Gs=["*","mat-card-footer"];let Ws=(()=>{class i{constructor(t){this._animationMode=t}}return i.\u0275fac=function(t){return new(t||i)(h.\u0275\u0275directiveInject(an,8))},i.\u0275cmp=h.\u0275\u0275defineComponent({type:i,selectors:[["mat-card"]],hostAttrs:[1,"mat-card","mat-focus-indicator"],hostVars:2,hostBindings:function(t,n){2&t&&h.\u0275\u0275classProp("_mat-animation-noopable","NoopAnimations"===n._animationMode)},exportAs:["matCard"],ngContentSelectors:Gs,decls:2,vars:0,template:function(t,n){1&t&&(h.\u0275\u0275projectionDef($s),h.\u0275\u0275projection(0),h.\u0275\u0275projection(1,1))},styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions:not(.mat-card-actions-align-end) .mat-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-raised-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-actions-align-end .mat-button:last-child,.mat-card-actions-align-end .mat-raised-button:last-child,.mat-card-actions-align-end .mat-stroked-button:last-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"],encapsulation:2,changeDetection:0}),i})(),qs=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=h.\u0275\u0275defineNgModule({type:i}),i.\u0275inj=h.\u0275\u0275defineInjector({imports:[[ni],ni]}),i})();const Qs=["vc"];function Zs(i,e){if(1&i&&(h.\u0275\u0275elementStart(0,"mat-list-item"),h.\u0275\u0275elementStart(1,"mat-card",0),h.\u0275\u0275elementStart(2,"h4",9),h.\u0275\u0275text(3),h.\u0275\u0275elementEnd(),h.\u0275\u0275elementEnd(),h.\u0275\u0275elementEnd()),2&i){const t=e.$implicit;h.\u0275\u0275advance(3),h.\u0275\u0275textInterpolate1(" ",t," ")}}function Ys(i,e){if(1&i&&(h.\u0275\u0275elementStart(0,"mat-list-item"),h.\u0275\u0275elementStart(1,"mat-card",0),h.\u0275\u0275elementStart(2,"h4",10),h.\u0275\u0275text(3),h.\u0275\u0275elementEnd(),h.\u0275\u0275elementEnd(),h.\u0275\u0275elementEnd()),2&i){const t=e.$implicit;h.\u0275\u0275advance(3),h.\u0275\u0275textInterpolate1(" ",t," ")}}const Xs=[{path:"",redirectTo:"active-search"},{path:"active-search",component:(()=>{class i{constructor(t,n,s){this.injector=t,this.cfr=n,this.domainsSearchComponent=s,this.statuses=[],this.domains=[],this.statusAndDomains=[]}search(){alert("Not implemented for this demo!")}terms(){var t=this;return(0,oe.Z)(function*(){const n=yield P.e(180).then(P.bind(P,4180)).then(r=>r.LazyComponent),s=t.cfr.resolveComponentFactory(n);t.viewContainer.createComponent(s,null,t.injector)})()}seeActiveDomains(t){t&&(this.statuses=[],this.domains=[],this.statusAndDomains=[],this.domainsSearchComponent.activeStatus(this.domains,this.statuses,t))}}return i.\u0275fac=function(t){return new(t||i)(h.\u0275\u0275directiveInject(h.Injector),h.\u0275\u0275directiveInject(h.ComponentFactoryResolver),h.\u0275\u0275directiveInject(ie.z))},i.\u0275cmp=h.\u0275\u0275defineComponent({type:i,selectors:[["app-active-search"]],viewQuery:function(t,n){if(1&t&&h.\u0275\u0275viewQuery(Qs,7,h.ViewContainerRef),2&t){let s;h.\u0275\u0275queryRefresh(s=h.\u0275\u0275loadQuery())&&(n.viewContainer=s.first)}},decls:18,vars:2,consts:[["id","container"],["src","../../../assets/domain.png","width","30","padding","20px"],["matInput","","type","text",3,"keyup.enter","blur"],["newDomain",""],["mat-button","","color","accent",3,"click"],[1,"row"],[1,"column"],[4,"ngFor","ngForOf"],["vc",""],["matLine",""],["matTitle","",2,"color","green"]],template:function(t,n){if(1&t){const s=h.\u0275\u0275getCurrentView();h.\u0275\u0275elementStart(0,"div",0),h.\u0275\u0275elementStart(1,"div"),h.\u0275\u0275element(2,"img",1),h.\u0275\u0275elementEnd(),h.\u0275\u0275elementStart(3,"h1"),h.\u0275\u0275text(4,"Active Status"),h.\u0275\u0275elementEnd(),h.\u0275\u0275elementStart(5,"div"),h.\u0275\u0275elementStart(6,"input",2,3),h.\u0275\u0275listener("keyup.enter",function(){h.\u0275\u0275restoreView(s);const o=h.\u0275\u0275reference(7);return n.seeActiveDomains(o.value)})("blur",function(){h.\u0275\u0275restoreView(s);const o=h.\u0275\u0275reference(7);return n.seeActiveDomains(o.value),o.value=""}),h.\u0275\u0275elementEnd(),h.\u0275\u0275elementStart(8,"button",4),h.\u0275\u0275listener("click",function(){h.\u0275\u0275restoreView(s);const o=h.\u0275\u0275reference(7);return n.seeActiveDomains(o.value)}),h.\u0275\u0275text(9," See Active Domains "),h.\u0275\u0275elementEnd(),h.\u0275\u0275elementStart(10,"div",5),h.\u0275\u0275elementStart(11,"div",6),h.\u0275\u0275template(12,Zs,4,1,"mat-list-item",7),h.\u0275\u0275elementEnd(),h.\u0275\u0275elementStart(13,"div",6),h.\u0275\u0275template(14,Ys,4,1,"mat-list-item",7),h.\u0275\u0275elementEnd(),h.\u0275\u0275elementEnd(),h.\u0275\u0275elementStart(15,"div"),h.\u0275\u0275elementContainer(16,null,8),h.\u0275\u0275elementEnd(),h.\u0275\u0275elementEnd(),h.\u0275\u0275elementEnd()}2&t&&(h.\u0275\u0275advance(12),h.\u0275\u0275property("ngForOf",n.domains),h.\u0275\u0275advance(2),h.\u0275\u0275property("ngForOf",n.statuses))},directives:[N.NgForOf,Ws],styles:['input[type=text][_ngcontent-%COMP%] {\n        width: 100%;\n        max-width: 400px;\n        box-sizing: border-box;\n        border: none;\n        border-bottom: 2px solid rgb(70, 57, 57);\n        font-size: 20px;\n        margin-bottom: 20px;\n        margin-top: 20px;\n        background-color: rgb(145, 90, 145);\n    }\n\n    button[_ngcontent-%COMP%] {\n        border: 2px solid rgb(70, 57, 57);\n        background-color: white;\n        font-size: 16px;\n        padding: 10px;\n        padding-left: 40px;\n        padding-right: 40px;\n        border-radius: 10px;\n        margin-bottom: 20px;\n        margin-top: 20px;\n        cursor: pointer;\n        color:white;\n        background-color: rgb(145, 90, 145);\n    } \n\n    button[_ngcontent-%COMP%]:active {\n        border-color: black;\n    }\n\n    #container[_ngcontent-%COMP%] {\n        border: 2px navy dashed;\n        padding: 20px;\n    }\n\n    .column[_ngcontent-%COMP%] {\n        float: left;\n        width: 50%;\n    }\n\n    \n    .row[_ngcontent-%COMP%]:after {\n        content: "";\n        display: table;\n        clear: both;\n    }']}),i})()},{path:"domain-search",component:ie.z}];let Js=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=h.\u0275\u0275defineNgModule({type:i}),i.\u0275inj=h.\u0275\u0275defineInjector({providers:[ie.z],imports:[[N.CommonModule,f.RouterModule.forChild(Xs),qs]]}),i})()},5998:(Rt,ve,P)=>{P.d(ve,{se:()=>Me});var N=P(3851),f=P(9081);const R=new f.InjectionToken("EventManagerPlugins");let K=(()=>{class m{constructor(a,d){this._zone=d,this._eventNameToPlugin=new Map,a.forEach(g=>g.manager=this),this._plugins=a.slice().reverse()}addEventListener(a,d,g){return this._findPluginFor(d).addEventListener(a,d,g)}addGlobalEventListener(a,d,g){return this._findPluginFor(d).addGlobalEventListener(a,d,g)}getZone(){return this._zone}_findPluginFor(a){const d=this._eventNameToPlugin.get(a);if(d)return d;const g=this._plugins;for(let T=0;T<g.length;T++){const F=g[T];if(F.supports(a))return this._eventNameToPlugin.set(a,F),F}throw new Error(`No event manager plugin found for event ${a}`)}}return m.\u0275fac=function(a){return new(a||m)(f.\u0275\u0275inject(R),f.\u0275\u0275inject(f.NgZone))},m.\u0275prov=f.\u0275\u0275defineInjectable({token:m,factory:m.\u0275fac}),m})(),Pt=(()=>{class m{constructor(){this._stylesSet=new Set}addStyles(a){const d=new Set;a.forEach(g=>{this._stylesSet.has(g)||(this._stylesSet.add(g),d.add(g))}),this.onStylesAdded(d)}onStylesAdded(a){}getAllStyles(){return Array.from(this._stylesSet)}}return m.\u0275fac=function(a){return new(a||m)},m.\u0275prov=f.\u0275\u0275defineInjectable({token:m,factory:m.\u0275fac}),m})(),Fe=(()=>{class m extends Pt{constructor(a){super(),this._doc=a,this._hostNodes=new Map,this._hostNodes.set(a.head,[])}_addStylesToHost(a,d,g){a.forEach(T=>{const F=this._doc.createElement("style");F.textContent=T,g.push(d.appendChild(F))})}addHost(a){const d=[];this._addStylesToHost(this._stylesSet,a,d),this._hostNodes.set(a,d)}removeHost(a){const d=this._hostNodes.get(a);d&&d.forEach(Lt),this._hostNodes.delete(a)}onStylesAdded(a){this._hostNodes.forEach((d,g)=>{this._addStylesToHost(a,g,d)})}ngOnDestroy(){this._hostNodes.forEach(a=>a.forEach(Lt))}}return m.\u0275fac=function(a){return new(a||m)(f.\u0275\u0275inject(N.DOCUMENT))},m.\u0275prov=f.\u0275\u0275defineInjectable({token:m,factory:m.\u0275fac}),m})();function Lt(m){(0,N.\u0275getDOM)().remove(m)}const at={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},lt=/%COMP%/g;function be(m,c,a){for(let d=0;d<c.length;d++){let g=c[d];Array.isArray(g)?be(m,g,a):(g=g.replace(lt,m),a.push(g))}return a}function ae(m){return c=>{if("__ngUnwrap__"===c)return m;!1===m(c)&&(c.preventDefault(),c.returnValue=!1)}}let Me=(()=>{class m{constructor(a,d,g){this.eventManager=a,this.sharedStylesHost=d,this.appId=g,this.rendererByCompId=new Map,this.defaultRenderer=new Ce(a)}createRenderer(a,d){if(!a||!d)return this.defaultRenderer;switch(d.encapsulation){case f.ViewEncapsulation.Emulated:{let g=this.rendererByCompId.get(d.id);return g||(g=new dt(this.eventManager,this.sharedStylesHost,d,this.appId),this.rendererByCompId.set(d.id,g)),g.applyToHost(a),g}case 1:case f.ViewEncapsulation.ShadowDom:return new Ke(this.eventManager,this.sharedStylesHost,a,d);default:if(!this.rendererByCompId.has(d.id)){const g=be(d.id,d.styles,[]);this.sharedStylesHost.addStyles(g),this.rendererByCompId.set(d.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}return m.\u0275fac=function(a){return new(a||m)(f.\u0275\u0275inject(K),f.\u0275\u0275inject(Fe),f.\u0275\u0275inject(f.APP_ID))},m.\u0275prov=f.\u0275\u0275defineInjectable({token:m,factory:m.\u0275fac}),m})();class Ce{constructor(c){this.eventManager=c,this.data=Object.create(null),this.destroyNode=null}destroy(){}createElement(c,a){return a?document.createElementNS(at[a]||a,c):document.createElement(c)}createComment(c){return document.createComment(c)}createText(c){return document.createTextNode(c)}appendChild(c,a){c.appendChild(a)}insertBefore(c,a,d){c&&c.insertBefore(a,d)}removeChild(c,a){c&&c.removeChild(a)}selectRootElement(c,a){let d="string"==typeof c?document.querySelector(c):c;if(!d)throw new Error(`The selector "${c}" did not match any elements`);return a||(d.textContent=""),d}parentNode(c){return c.parentNode}nextSibling(c){return c.nextSibling}setAttribute(c,a,d,g){if(g){a=g+":"+a;const T=at[g];T?c.setAttributeNS(T,a,d):c.setAttribute(a,d)}else c.setAttribute(a,d)}removeAttribute(c,a,d){if(d){const g=at[d];g?c.removeAttributeNS(g,a):c.removeAttribute(`${d}:${a}`)}else c.removeAttribute(a)}addClass(c,a){c.classList.add(a)}removeClass(c,a){c.classList.remove(a)}setStyle(c,a,d,g){g&(f.RendererStyleFlags2.DashCase|f.RendererStyleFlags2.Important)?c.style.setProperty(a,d,g&f.RendererStyleFlags2.Important?"important":""):c.style[a]=d}removeStyle(c,a,d){d&f.RendererStyleFlags2.DashCase?c.style.removeProperty(a):c.style[a]=""}setProperty(c,a,d){c[a]=d}setValue(c,a){c.nodeValue=a}listen(c,a,d){return"string"==typeof c?this.eventManager.addGlobalEventListener(c,a,ae(d)):this.eventManager.addEventListener(c,a,ae(d))}}class dt extends Ce{constructor(c,a,d,g){super(c),this.component=d;const T=be(g+"-"+d.id,d.styles,[]);a.addStyles(T),this.contentAttr=function Ue(m){return"_ngcontent-%COMP%".replace(lt,m)}(g+"-"+d.id),this.hostAttr=function ut(m){return"_nghost-%COMP%".replace(lt,m)}(g+"-"+d.id)}applyToHost(c){super.setAttribute(c,this.hostAttr,"")}createElement(c,a){const d=super.createElement(c,a);return super.setAttribute(d,this.contentAttr,""),d}}class Ke extends Ce{constructor(c,a,d,g){super(c),this.sharedStylesHost=a,this.hostEl=d,this.shadowRoot=d.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const T=be(g.id,g.styles,[]);for(let F=0;F<T.length;F++){const W=document.createElement("style");W.textContent=T[F],this.shadowRoot.appendChild(W)}}nodeOrShadowRoot(c){return c===this.hostEl?this.shadowRoot:c}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(c,a){return super.appendChild(this.nodeOrShadowRoot(c),a)}insertBefore(c,a,d){return super.insertBefore(this.nodeOrShadowRoot(c),a,d)}removeChild(c,a){return super.removeChild(this.nodeOrShadowRoot(c),a)}parentNode(c){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(c)))}}"undefined"!=typeof window&&window},8239:(Rt,ve,P)=>{function N(ie,oe,h,ce,X,ue,U){try{var k=ie[ue](U),V=k.value}catch(D){return void h(D)}k.done?oe(V):Promise.resolve(V).then(ce,X)}function f(ie){return function(){var oe=this,h=arguments;return new Promise(function(ce,X){var ue=ie.apply(oe,h);function U(V){N(ue,ce,X,U,k,"next",V)}function k(V){N(ue,ce,X,U,k,"throw",V)}U(void 0)})}}P.d(ve,{Z:()=>f})}}]);