(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var dh={exports:{}},Bo={};var kg;function kS(){if(kg)return Bo;kg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:c}}return Bo.Fragment=e,Bo.jsx=i,Bo.jsxs=i,Bo}var Xg;function XS(){return Xg||(Xg=1,dh.exports=kS()),dh.exports}var st=XS(),ph={exports:{}},re={};var Wg;function WS(){if(Wg)return re;Wg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),S=Symbol.iterator;function M(O){return O===null||typeof O!="object"?null:(O=S&&O[S]||O["@@iterator"],typeof O=="function"?O:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,y={};function x(O,nt,mt){this.props=O,this.context=nt,this.refs=y,this.updater=mt||E}x.prototype.isReactComponent={},x.prototype.setState=function(O,nt){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,nt,"setState")},x.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function D(){}D.prototype=x.prototype;function U(O,nt,mt){this.props=O,this.context=nt,this.refs=y,this.updater=mt||E}var N=U.prototype=new D;N.constructor=U,C(N,x.prototype),N.isPureReactComponent=!0;var B=Array.isArray;function F(){}var P={H:null,A:null,T:null,S:null},q=Object.prototype.hasOwnProperty;function A(O,nt,mt){var At=mt.ref;return{$$typeof:o,type:O,key:nt,ref:At!==void 0?At:null,props:mt}}function w(O,nt){return A(O.type,nt,O.props)}function I(O){return typeof O=="object"&&O!==null&&O.$$typeof===o}function Q(O){var nt={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(mt){return nt[mt]})}var Z=/\/+/g;function lt(O,nt){return typeof O=="object"&&O!==null&&O.key!=null?Q(""+O.key):nt.toString(36)}function ut(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(F,F):(O.status="pending",O.then(function(nt){O.status==="pending"&&(O.status="fulfilled",O.value=nt)},function(nt){O.status==="pending"&&(O.status="rejected",O.reason=nt)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function z(O,nt,mt,At,It){var rt=typeof O;(rt==="undefined"||rt==="boolean")&&(O=null);var ht=!1;if(O===null)ht=!0;else switch(rt){case"bigint":case"string":case"number":ht=!0;break;case"object":switch(O.$$typeof){case o:case e:ht=!0;break;case v:return ht=O._init,z(ht(O._payload),nt,mt,At,It)}}if(ht)return It=It(O),ht=At===""?"."+lt(O,0):At,B(It)?(mt="",ht!=null&&(mt=ht.replace(Z,"$&/")+"/"),z(It,nt,mt,"",function(Ht){return Ht})):It!=null&&(I(It)&&(It=w(It,mt+(It.key==null||O&&O.key===It.key?"":(""+It.key).replace(Z,"$&/")+"/")+ht)),nt.push(It)),1;ht=0;var Dt=At===""?".":At+":";if(B(O))for(var kt=0;kt<O.length;kt++)At=O[kt],rt=Dt+lt(At,kt),ht+=z(At,nt,mt,rt,It);else if(kt=M(O),typeof kt=="function")for(O=kt.call(O),kt=0;!(At=O.next()).done;)At=At.value,rt=Dt+lt(At,kt++),ht+=z(At,nt,mt,rt,It);else if(rt==="object"){if(typeof O.then=="function")return z(ut(O),nt,mt,At,It);throw nt=String(O),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return ht}function G(O,nt,mt){if(O==null)return O;var At=[],It=0;return z(O,At,"","",function(rt){return nt.call(mt,rt,It++)}),At}function tt(O){if(O._status===-1){var nt=O._result;nt=nt(),nt.then(function(mt){(O._status===0||O._status===-1)&&(O._status=1,O._result=mt)},function(mt){(O._status===0||O._status===-1)&&(O._status=2,O._result=mt)}),O._status===-1&&(O._status=0,O._result=nt)}if(O._status===1)return O._result.default;throw O._result}var yt=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},vt={map:G,forEach:function(O,nt,mt){G(O,function(){nt.apply(this,arguments)},mt)},count:function(O){var nt=0;return G(O,function(){nt++}),nt},toArray:function(O){return G(O,function(nt){return nt})||[]},only:function(O){if(!I(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return re.Activity=_,re.Children=vt,re.Component=x,re.Fragment=i,re.Profiler=l,re.PureComponent=U,re.StrictMode=r,re.Suspense=m,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,re.__COMPILER_RUNTIME={__proto__:null,c:function(O){return P.H.useMemoCache(O)}},re.cache=function(O){return function(){return O.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(O,nt,mt){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var At=C({},O.props),It=O.key;if(nt!=null)for(rt in nt.key!==void 0&&(It=""+nt.key),nt)!q.call(nt,rt)||rt==="key"||rt==="__self"||rt==="__source"||rt==="ref"&&nt.ref===void 0||(At[rt]=nt[rt]);var rt=arguments.length-2;if(rt===1)At.children=mt;else if(1<rt){for(var ht=Array(rt),Dt=0;Dt<rt;Dt++)ht[Dt]=arguments[Dt+2];At.children=ht}return A(O.type,It,At)},re.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},re.createElement=function(O,nt,mt){var At,It={},rt=null;if(nt!=null)for(At in nt.key!==void 0&&(rt=""+nt.key),nt)q.call(nt,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(It[At]=nt[At]);var ht=arguments.length-2;if(ht===1)It.children=mt;else if(1<ht){for(var Dt=Array(ht),kt=0;kt<ht;kt++)Dt[kt]=arguments[kt+2];It.children=Dt}if(O&&O.defaultProps)for(At in ht=O.defaultProps,ht)It[At]===void 0&&(It[At]=ht[At]);return A(O,rt,It)},re.createRef=function(){return{current:null}},re.forwardRef=function(O){return{$$typeof:d,render:O}},re.isValidElement=I,re.lazy=function(O){return{$$typeof:v,_payload:{_status:-1,_result:O},_init:tt}},re.memo=function(O,nt){return{$$typeof:p,type:O,compare:nt===void 0?null:nt}},re.startTransition=function(O){var nt=P.T,mt={};P.T=mt;try{var At=O(),It=P.S;It!==null&&It(mt,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(F,yt)}catch(rt){yt(rt)}finally{nt!==null&&mt.types!==null&&(nt.types=mt.types),P.T=nt}},re.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},re.use=function(O){return P.H.use(O)},re.useActionState=function(O,nt,mt){return P.H.useActionState(O,nt,mt)},re.useCallback=function(O,nt){return P.H.useCallback(O,nt)},re.useContext=function(O){return P.H.useContext(O)},re.useDebugValue=function(){},re.useDeferredValue=function(O,nt){return P.H.useDeferredValue(O,nt)},re.useEffect=function(O,nt){return P.H.useEffect(O,nt)},re.useEffectEvent=function(O){return P.H.useEffectEvent(O)},re.useId=function(){return P.H.useId()},re.useImperativeHandle=function(O,nt,mt){return P.H.useImperativeHandle(O,nt,mt)},re.useInsertionEffect=function(O,nt){return P.H.useInsertionEffect(O,nt)},re.useLayoutEffect=function(O,nt){return P.H.useLayoutEffect(O,nt)},re.useMemo=function(O,nt){return P.H.useMemo(O,nt)},re.useOptimistic=function(O,nt){return P.H.useOptimistic(O,nt)},re.useReducer=function(O,nt,mt){return P.H.useReducer(O,nt,mt)},re.useRef=function(O){return P.H.useRef(O)},re.useState=function(O){return P.H.useState(O)},re.useSyncExternalStore=function(O,nt,mt){return P.H.useSyncExternalStore(O,nt,mt)},re.useTransition=function(){return P.H.useTransition()},re.version="19.2.3",re}var qg;function Zd(){return qg||(qg=1,ph.exports=WS()),ph.exports}var Gn=Zd(),mh={exports:{}},Fo={},gh={exports:{}},_h={};var Yg;function qS(){return Yg||(Yg=1,(function(o){function e(z,G){var tt=z.length;z.push(G);t:for(;0<tt;){var yt=tt-1>>>1,vt=z[yt];if(0<l(vt,G))z[yt]=G,z[tt]=vt,tt=yt;else break t}}function i(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var G=z[0],tt=z.pop();if(tt!==G){z[0]=tt;t:for(var yt=0,vt=z.length,O=vt>>>1;yt<O;){var nt=2*(yt+1)-1,mt=z[nt],At=nt+1,It=z[At];if(0>l(mt,tt))At<vt&&0>l(It,mt)?(z[yt]=It,z[At]=tt,yt=At):(z[yt]=mt,z[nt]=tt,yt=nt);else if(At<vt&&0>l(It,tt))z[yt]=It,z[At]=tt,yt=At;else break t}}return G}function l(z,G){var tt=z.sortIndex-G.sortIndex;return tt!==0?tt:z.id-G.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],v=1,_=null,S=3,M=!1,E=!1,C=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function N(z){for(var G=i(p);G!==null;){if(G.callback===null)r(p);else if(G.startTime<=z)r(p),G.sortIndex=G.expirationTime,e(m,G);else break;G=i(p)}}function B(z){if(C=!1,N(z),!E)if(i(m)!==null)E=!0,F||(F=!0,Q());else{var G=i(p);G!==null&&ut(B,G.startTime-z)}}var F=!1,P=-1,q=5,A=-1;function w(){return y?!0:!(o.unstable_now()-A<q)}function I(){if(y=!1,F){var z=o.unstable_now();A=z;var G=!0;try{t:{E=!1,C&&(C=!1,D(P),P=-1),M=!0;var tt=S;try{e:{for(N(z),_=i(m);_!==null&&!(_.expirationTime>z&&w());){var yt=_.callback;if(typeof yt=="function"){_.callback=null,S=_.priorityLevel;var vt=yt(_.expirationTime<=z);if(z=o.unstable_now(),typeof vt=="function"){_.callback=vt,N(z),G=!0;break e}_===i(m)&&r(m),N(z)}else r(m);_=i(m)}if(_!==null)G=!0;else{var O=i(p);O!==null&&ut(B,O.startTime-z),G=!1}}break t}finally{_=null,S=tt,M=!1}G=void 0}}finally{G?Q():F=!1}}}var Q;if(typeof U=="function")Q=function(){U(I)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,lt=Z.port2;Z.port1.onmessage=I,Q=function(){lt.postMessage(null)}}else Q=function(){x(I,0)};function ut(z,G){P=x(function(){z(o.unstable_now())},G)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(z){switch(S){case 1:case 2:case 3:var G=3;break;default:G=S}var tt=S;S=G;try{return z()}finally{S=tt}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(z,G){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var tt=S;S=z;try{return G()}finally{S=tt}},o.unstable_scheduleCallback=function(z,G,tt){var yt=o.unstable_now();switch(typeof tt=="object"&&tt!==null?(tt=tt.delay,tt=typeof tt=="number"&&0<tt?yt+tt:yt):tt=yt,z){case 1:var vt=-1;break;case 2:vt=250;break;case 5:vt=1073741823;break;case 4:vt=1e4;break;default:vt=5e3}return vt=tt+vt,z={id:v++,callback:G,priorityLevel:z,startTime:tt,expirationTime:vt,sortIndex:-1},tt>yt?(z.sortIndex=tt,e(p,z),i(m)===null&&z===i(p)&&(C?(D(P),P=-1):C=!0,ut(B,tt-yt))):(z.sortIndex=vt,e(m,z),E||M||(E=!0,F||(F=!0,Q()))),z},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(z){var G=S;return function(){var tt=S;S=G;try{return z.apply(this,arguments)}finally{S=tt}}}})(_h)),_h}var jg;function YS(){return jg||(jg=1,gh.exports=qS()),gh.exports}var vh={exports:{}},Un={};var Zg;function jS(){if(Zg)return Un;Zg=1;var o=Zd();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,v){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:v}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Un.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,v)},Un.flushSync=function(m){var p=h.T,v=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=v,r.d.f()}},Un.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Un.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Un.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,_=d(v,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:S,fetchPriority:M}):v==="script"&&r.d.X(m,{crossOrigin:_,integrity:S,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Un.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Un.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,_=d(v,p.crossOrigin);r.d.L(m,v,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Un.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Un.requestFormReset=function(m){r.d.r(m)},Un.unstable_batchedUpdates=function(m,p){return m(p)},Un.useFormState=function(m,p,v){return h.H.useFormState(m,p,v)},Un.useFormStatus=function(){return h.H.useHostTransitionStatus()},Un.version="19.2.3",Un}var Kg;function ZS(){if(Kg)return vh.exports;Kg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),vh.exports=jS(),vh.exports}var Qg;function KS(){if(Qg)return Fo;Qg=1;var o=YS(),e=Zd(),i=ZS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===s)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=f;else{for(var g=!1,T=u.child;T;){if(T===a){g=!0,a=u,s=f;break}if(T===s){g=!0,s=u,a=f;break}T=T.sibling}if(!g){for(T=f.child;T;){if(T===a){g=!0,a=f,s=u;break}if(T===s){g=!0,s=f,a=u;break}T=T.sibling}if(!g)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,S=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),U=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),I=Symbol.iterator;function Q(t){return t===null||typeof t!="object"?null:(t=I&&t[I]||t["@@iterator"],typeof t=="function"?t:null)}var Z=Symbol.for("react.client.reference");function lt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Z?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case x:return"Profiler";case y:return"StrictMode";case B:return"Suspense";case F:return"SuspenseList";case A:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case U:return t.displayName||"Context";case D:return(t._context.displayName||"Context")+".Consumer";case N:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case P:return n=t.displayName||null,n!==null?n:lt(t.type)||"Memo";case q:n=t._payload,t=t._init;try{return lt(t(n))}catch{}}return null}var ut=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,tt={pending:!1,data:null,method:null,action:null},yt=[],vt=-1;function O(t){return{current:t}}function nt(t){0>vt||(t.current=yt[vt],yt[vt]=null,vt--)}function mt(t,n){vt++,yt[vt]=t.current,t.current=n}var At=O(null),It=O(null),rt=O(null),ht=O(null);function Dt(t,n){switch(mt(rt,n),mt(It,t),mt(At,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?hg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=hg(n),t=dg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}nt(At),mt(At,t)}function kt(){nt(At),nt(It),nt(rt)}function Ht(t){t.memoizedState!==null&&mt(ht,t);var n=At.current,a=dg(n,t.type);n!==a&&(mt(It,t),mt(At,a))}function de(t){It.current===t&&(nt(At),nt(It)),ht.current===t&&(nt(ht),Lo._currentValue=tt)}var Je,_e;function pe(t){if(Je===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Je=n&&n[1]||"",_e=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Je+t+_e}var we=!1;function se(t,n){if(!t||we)return"";we=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(ct){var at=ct}Reflect.construct(t,[],_t)}else{try{_t.call()}catch(ct){at=ct}t.call(_t.prototype)}}else{try{throw Error()}catch(ct){at=ct}(_t=t())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(ct){if(ct&&at&&typeof ct.stack=="string")return[ct.stack,at.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),g=f[0],T=f[1];if(g&&T){var H=g.split(`
`),et=T.split(`
`);for(u=s=0;s<H.length&&!H[s].includes("DetermineComponentFrameRoot");)s++;for(;u<et.length&&!et[u].includes("DetermineComponentFrameRoot");)u++;if(s===H.length||u===et.length)for(s=H.length-1,u=et.length-1;1<=s&&0<=u&&H[s]!==et[u];)u--;for(;1<=s&&0<=u;s--,u--)if(H[s]!==et[u]){if(s!==1||u!==1)do if(s--,u--,0>u||H[s]!==et[u]){var dt=`
`+H[s].replace(" at new "," at ");return t.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",t.displayName)),dt}while(1<=s&&0<=u);break}}}finally{we=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?pe(a):""}function $e(t,n){switch(t.tag){case 26:case 27:case 5:return pe(t.type);case 16:return pe("Lazy");case 13:return t.child!==n&&n!==null?pe("Suspense Fallback"):pe("Suspense");case 19:return pe("SuspenseList");case 0:case 15:return se(t.type,!1);case 11:return se(t.type.render,!1);case 1:return se(t.type,!0);case 31:return pe("Activity");default:return""}}function V(t){try{var n="",a=null;do n+=$e(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var je=Object.prototype.hasOwnProperty,Me=o.unstable_scheduleCallback,Le=o.unstable_cancelCallback,Yt=o.unstable_shouldYield,L=o.unstable_requestPaint,b=o.unstable_now,W=o.unstable_getCurrentPriorityLevel,pt=o.unstable_ImmediatePriority,St=o.unstable_UserBlockingPriority,ft=o.unstable_NormalPriority,Zt=o.unstable_LowPriority,Ct=o.unstable_IdlePriority,Xt=o.log,ee=o.unstable_setDisableYieldValue,bt=null,Et=null;function Bt(t){if(typeof Xt=="function"&&ee(t),Et&&typeof Et.setStrictMode=="function")try{Et.setStrictMode(bt,t)}catch{}}var Pt=Math.clz32?Math.clz32:X,wt=Math.log,le=Math.LN2;function X(t){return t>>>=0,t===0?32:31-(wt(t)/le|0)|0}var Nt=256,Tt=262144,zt=4194304;function Mt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function xt(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var u=0,f=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var T=s&134217727;return T!==0?(s=T&~f,s!==0?u=Mt(s):(g&=T,g!==0?u=Mt(g):a||(a=T&~t,a!==0&&(u=Mt(a))))):(T=s&~f,T!==0?u=Mt(T):g!==0?u=Mt(g):a||(a=s&~t,a!==0&&(u=Mt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Rt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ne(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pe(){var t=zt;return zt<<=1,(zt&62914560)===0&&(zt=4194304),t}function Ee(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Dn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Si(t,n,a,s,u,f){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,H=t.expirationTimes,et=t.hiddenUpdates;for(a=g&~a;0<a;){var dt=31-Pt(a),_t=1<<dt;T[dt]=0,H[dt]=-1;var at=et[dt];if(at!==null)for(et[dt]=null,dt=0;dt<at.length;dt++){var ct=at[dt];ct!==null&&(ct.lane&=-536870913)}a&=~_t}s!==0&&rl(t,s,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(g&~n))}function rl(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Pt(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function Xs(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Pt(a),u=1<<s;u&n|t[s]&n&&(t[s]|=n),a&=~u}}function Or(t,n){var a=n&-n;return a=(a&42)!==0?1:Ws(a),(a&(t.suspendedLanes|n))!==0?0:a}function Ws(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Pr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function qs(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:zg(t.type))}function Ui(t,n){var a=G.p;try{return G.p=t,n()}finally{G.p=a}}var ri=Math.random().toString(36).slice(2),sn="__reactFiber$"+ri,vn="__reactProps$"+ri,yi="__reactContainer$"+ri,zr="__reactEvents$"+ri,Br="__reactListeners$"+ri,sl="__reactHandles$"+ri,Ys="__reactResources$"+ri,ir="__reactMarker$"+ri;function js(t){delete t[sn],delete t[vn],delete t[zr],delete t[Br],delete t[sl]}function ya(t){var n=t[sn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[yi]||a[sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Sg(t);t!==null;){if(a=t[sn])return a;t=Sg(t)}return n}t=a,a=t.parentNode}return null}function Ma(t){if(t=t[sn]||t[yi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function ar(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function ba(t){var n=t[Ys];return n||(n=t[Ys]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function R(t){t[ir]=!0}var Y=new Set,ot={};function it(t,n){J(t,n),J(t+"Capture",n)}function J(t,n){for(ot[t]=n,t=0;t<n.length;t++)Y.add(n[t])}var Ut=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ft={},Lt={};function Gt(t){return je.call(Lt,t)?!0:je.call(Ft,t)?!1:Ut.test(t)?Lt[t]=!0:(Ft[t]=!0,!1)}function Wt(t,n,a){if(Gt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Jt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function qt(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function $t(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function De(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ze(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function We(t){if(!t._valueTracker){var n=De(t)?"checked":"value";t._valueTracker=Ze(t,n,""+t[n])}}function Oe(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=De(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function Kt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ue=/[\n"\\]/g;function ae(t){return t.replace(Ue,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function xn(t,n,a,s,u,f,g,T){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+$t(n)):t.value!==""+$t(n)&&(t.value=""+$t(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?Sn(t,g,$t(n)):a!=null?Sn(t,g,$t(a)):s!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+$t(T):t.removeAttribute("name")}function qi(t,n,a,s,u,f,g,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){We(t);return}a=a!=null?""+$t(a):"",n=n!=null?""+$t(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=T?t.checked:!!s,t.defaultChecked=!!s,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),We(t)}function Sn(t,n,a){n==="number"&&Kt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function si(t,n,a,s){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&s&&(t[a].defaultSelected=!0)}else{for(a=""+$t(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,s&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function ze(t,n,a){if(n!=null&&(n=""+$t(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+$t(a):""}function yn(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ut(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=$t(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),We(t)}function hn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Mn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function bn(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||Mn.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Fr(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&bn(t,u,s)}else for(var f in n)n.hasOwnProperty(f)&&bn(t,f,n[f])}function Mi(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Iv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Hv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ol(t){return Hv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Yi(){}var cu=null;function uu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ir=null,Hr=null;function fp(t){var n=Ma(t);if(n&&(t=n.stateNode)){var a=t[vn]||null;t:switch(t=n.stateNode,n.type){case"input":if(xn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ae(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var u=s[vn]||null;if(!u)throw Error(r(90));xn(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Oe(s)}break t;case"textarea":ze(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&si(t,!!a.multiple,n,!1)}}}var fu=!1;function hp(t,n,a){if(fu)return t(n,a);fu=!0;try{var s=t(n);return s}finally{if(fu=!1,(Ir!==null||Hr!==null)&&(jl(),Ir&&(n=Ir,t=Hr,Hr=Ir=null,fp(n),t)))for(n=0;n<t.length;n++)fp(t[n])}}function Zs(t,n){var a=t.stateNode;if(a===null)return null;var s=a[vn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hu=!1;if(ji)try{var Ks={};Object.defineProperty(Ks,"passive",{get:function(){hu=!0}}),window.addEventListener("test",Ks,Ks),window.removeEventListener("test",Ks,Ks)}catch{hu=!1}var Ea=null,du=null,ll=null;function dp(){if(ll)return ll;var t,n=du,a=n.length,s,u="value"in Ea?Ea.value:Ea.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var g=a-t;for(s=1;s<=g&&n[a-s]===u[f-s];s++);return ll=u.slice(t,1<s?1-s:void 0)}function cl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function ul(){return!0}function pp(){return!1}function Vn(t){function n(a,s,u,f,g){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ul:pp,this.isPropagationStopped=pp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ul)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ul)},persist:function(){},isPersistent:ul}),n}var rr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fl=Vn(rr),Qs=_({},rr,{view:0,detail:0}),Gv=Vn(Qs),pu,mu,Js,hl=_({},Qs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_u,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Js&&(Js&&t.type==="mousemove"?(pu=t.screenX-Js.screenX,mu=t.screenY-Js.screenY):mu=pu=0,Js=t),pu)},movementY:function(t){return"movementY"in t?t.movementY:mu}}),mp=Vn(hl),Vv=_({},hl,{dataTransfer:0}),kv=Vn(Vv),Xv=_({},Qs,{relatedTarget:0}),gu=Vn(Xv),Wv=_({},rr,{animationName:0,elapsedTime:0,pseudoElement:0}),qv=Vn(Wv),Yv=_({},rr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),jv=Vn(Yv),Zv=_({},rr,{data:0}),gp=Vn(Zv),Kv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $v(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Jv[t])?!!n[t]:!1}function _u(){return $v}var tx=_({},Qs,{key:function(t){if(t.key){var n=Kv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=cl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Qv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_u,charCode:function(t){return t.type==="keypress"?cl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?cl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ex=Vn(tx),nx=_({},hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_p=Vn(nx),ix=_({},Qs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_u}),ax=Vn(ix),rx=_({},rr,{propertyName:0,elapsedTime:0,pseudoElement:0}),sx=Vn(rx),ox=_({},hl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),lx=Vn(ox),cx=_({},rr,{newState:0,oldState:0}),ux=Vn(cx),fx=[9,13,27,32],vu=ji&&"CompositionEvent"in window,$s=null;ji&&"documentMode"in document&&($s=document.documentMode);var hx=ji&&"TextEvent"in window&&!$s,vp=ji&&(!vu||$s&&8<$s&&11>=$s),xp=" ",Sp=!1;function yp(t,n){switch(t){case"keyup":return fx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Gr=!1;function dx(t,n){switch(t){case"compositionend":return Mp(n);case"keypress":return n.which!==32?null:(Sp=!0,xp);case"textInput":return t=n.data,t===xp&&Sp?null:t;default:return null}}function px(t,n){if(Gr)return t==="compositionend"||!vu&&yp(t,n)?(t=dp(),ll=du=Ea=null,Gr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return vp&&n.locale!=="ko"?null:n.data;default:return null}}var mx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!mx[t.type]:n==="textarea"}function Ep(t,n,a,s){Ir?Hr?Hr.push(s):Hr=[s]:Ir=s,n=ec(n,"onChange"),0<n.length&&(a=new fl("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var to=null,eo=null;function gx(t){sg(t,0)}function dl(t){var n=ar(t);if(Oe(n))return t}function Tp(t,n){if(t==="change")return n}var Ap=!1;if(ji){var xu;if(ji){var Su="oninput"in document;if(!Su){var Rp=document.createElement("div");Rp.setAttribute("oninput","return;"),Su=typeof Rp.oninput=="function"}xu=Su}else xu=!1;Ap=xu&&(!document.documentMode||9<document.documentMode)}function Cp(){to&&(to.detachEvent("onpropertychange",wp),eo=to=null)}function wp(t){if(t.propertyName==="value"&&dl(eo)){var n=[];Ep(n,eo,t,uu(t)),hp(gx,n)}}function _x(t,n,a){t==="focusin"?(Cp(),to=n,eo=a,to.attachEvent("onpropertychange",wp)):t==="focusout"&&Cp()}function vx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return dl(eo)}function xx(t,n){if(t==="click")return dl(n)}function Sx(t,n){if(t==="input"||t==="change")return dl(n)}function yx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Zn=typeof Object.is=="function"?Object.is:yx;function no(t,n){if(Zn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!je.call(n,u)||!Zn(t[u],n[u]))return!1}return!0}function Dp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Up(t,n){var a=Dp(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Dp(a)}}function Np(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Np(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Lp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Kt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Kt(t.document)}return n}function yu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Mx=ji&&"documentMode"in document&&11>=document.documentMode,Vr=null,Mu=null,io=null,bu=!1;function Op(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;bu||Vr==null||Vr!==Kt(s)||(s=Vr,"selectionStart"in s&&yu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),io&&no(io,s)||(io=s,s=ec(Mu,"onSelect"),0<s.length&&(n=new fl("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Vr)))}function sr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var kr={animationend:sr("Animation","AnimationEnd"),animationiteration:sr("Animation","AnimationIteration"),animationstart:sr("Animation","AnimationStart"),transitionrun:sr("Transition","TransitionRun"),transitionstart:sr("Transition","TransitionStart"),transitioncancel:sr("Transition","TransitionCancel"),transitionend:sr("Transition","TransitionEnd")},Eu={},Pp={};ji&&(Pp=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);function or(t){if(Eu[t])return Eu[t];if(!kr[t])return t;var n=kr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Pp)return Eu[t]=n[a];return t}var zp=or("animationend"),Bp=or("animationiteration"),Fp=or("animationstart"),bx=or("transitionrun"),Ex=or("transitionstart"),Tx=or("transitioncancel"),Ip=or("transitionend"),Hp=new Map,Tu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Tu.push("scrollEnd");function bi(t,n){Hp.set(t,n),it(n,[t])}var pl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},oi=[],Xr=0,Au=0;function ml(){for(var t=Xr,n=Au=Xr=0;n<t;){var a=oi[n];oi[n++]=null;var s=oi[n];oi[n++]=null;var u=oi[n];oi[n++]=null;var f=oi[n];if(oi[n++]=null,s!==null&&u!==null){var g=s.pending;g===null?u.next=u:(u.next=g.next,g.next=u),s.pending=u}f!==0&&Gp(a,u,f)}}function gl(t,n,a,s){oi[Xr++]=t,oi[Xr++]=n,oi[Xr++]=a,oi[Xr++]=s,Au|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function Ru(t,n,a,s){return gl(t,n,a,s),_l(t)}function lr(t,n){return gl(t,null,null,n),_l(t)}function Gp(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Pt(a),t=f.hiddenUpdates,s=t[u],s===null?t[u]=[n]:s.push(n),n.lane=a|536870912),f):null}function _l(t){if(50<Ao)throw Ao=0,Bf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Wr={};function Ax(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(t,n,a,s){return new Ax(t,n,a,s)}function Cu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Zi(t,n){var a=t.alternate;return a===null?(a=Kn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Vp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function vl(t,n,a,s,u,f){var g=0;if(s=t,typeof t=="function")Cu(t)&&(g=1);else if(typeof t=="string")g=US(t,a,At.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case A:return t=Kn(31,a,n,u),t.elementType=A,t.lanes=f,t;case C:return cr(a.children,u,f,n);case y:g=8,u|=24;break;case x:return t=Kn(12,a,n,u|2),t.elementType=x,t.lanes=f,t;case B:return t=Kn(13,a,n,u),t.elementType=B,t.lanes=f,t;case F:return t=Kn(19,a,n,u),t.elementType=F,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U:g=10;break t;case D:g=9;break t;case N:g=11;break t;case P:g=14;break t;case q:g=16,s=null;break t}g=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Kn(g,a,n,u),n.elementType=t,n.type=s,n.lanes=f,n}function cr(t,n,a,s){return t=Kn(7,t,s,n),t.lanes=a,t}function wu(t,n,a){return t=Kn(6,t,null,n),t.lanes=a,t}function kp(t){var n=Kn(18,null,null,0);return n.stateNode=t,n}function Du(t,n,a){return n=Kn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Xp=new WeakMap;function li(t,n){if(typeof t=="object"&&t!==null){var a=Xp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:V(n)},Xp.set(t,n),n)}return{value:t,source:n,stack:V(n)}}var qr=[],Yr=0,xl=null,ao=0,ci=[],ui=0,Ta=null,Ni=1,Li="";function Ki(t,n){qr[Yr++]=ao,qr[Yr++]=xl,xl=t,ao=n}function Wp(t,n,a){ci[ui++]=Ni,ci[ui++]=Li,ci[ui++]=Ta,Ta=t;var s=Ni;t=Li;var u=32-Pt(s)-1;s&=~(1<<u),a+=1;var f=32-Pt(n)+u;if(30<f){var g=u-u%5;f=(s&(1<<g)-1).toString(32),s>>=g,u-=g,Ni=1<<32-Pt(n)+u|a<<u|s,Li=f+t}else Ni=1<<f|a<<u|s,Li=t}function Uu(t){t.return!==null&&(Ki(t,1),Wp(t,1,0))}function Nu(t){for(;t===xl;)xl=qr[--Yr],qr[Yr]=null,ao=qr[--Yr],qr[Yr]=null;for(;t===Ta;)Ta=ci[--ui],ci[ui]=null,Li=ci[--ui],ci[ui]=null,Ni=ci[--ui],ci[ui]=null}function qp(t,n){ci[ui++]=Ni,ci[ui++]=Li,ci[ui++]=Ta,Ni=n.id,Li=n.overflow,Ta=t}var En=null,qe=null,Se=!1,Aa=null,fi=!1,Lu=Error(r(519));function Ra(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ro(li(n,t)),Lu}function Yp(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[sn]=t,n[vn]=s,a){case"dialog":ge("cancel",n),ge("close",n);break;case"iframe":case"object":case"embed":ge("load",n);break;case"video":case"audio":for(a=0;a<Co.length;a++)ge(Co[a],n);break;case"source":ge("error",n);break;case"img":case"image":case"link":ge("error",n),ge("load",n);break;case"details":ge("toggle",n);break;case"input":ge("invalid",n),qi(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":ge("invalid",n);break;case"textarea":ge("invalid",n),yn(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||ug(n.textContent,a)?(s.popover!=null&&(ge("beforetoggle",n),ge("toggle",n)),s.onScroll!=null&&ge("scroll",n),s.onScrollEnd!=null&&ge("scrollend",n),s.onClick!=null&&(n.onclick=Yi),n=!0):n=!1,n||Ra(t,!0)}function jp(t){for(En=t.return;En;)switch(En.tag){case 5:case 31:case 13:fi=!1;return;case 27:case 3:fi=!0;return;default:En=En.return}}function jr(t){if(t!==En)return!1;if(!Se)return jp(t),Se=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Jf(t.type,t.memoizedProps)),a=!a),a&&qe&&Ra(t),jp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));qe=xg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));qe=xg(t)}else n===27?(n=qe,Ga(t.type)?(t=ih,ih=null,qe=t):qe=n):qe=En?di(t.stateNode.nextSibling):null;return!0}function ur(){qe=En=null,Se=!1}function Ou(){var t=Aa;return t!==null&&(qn===null?qn=t:qn.push.apply(qn,t),Aa=null),t}function ro(t){Aa===null?Aa=[t]:Aa.push(t)}var Pu=O(null),fr=null,Qi=null;function Ca(t,n,a){mt(Pu,n._currentValue),n._currentValue=a}function Ji(t){t._currentValue=Pu.current,nt(Pu)}function zu(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function Bu(t,n,a,s){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var g=u.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=u;for(var H=0;H<n.length;H++)if(T.context===n[H]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),zu(f.return,a,t),s||(g=null);break t}f=T.next}}else if(u.tag===18){if(g=u.return,g===null)throw Error(r(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),zu(g,a,t),g=null}else g=u.child;if(g!==null)g.return=u;else for(g=u;g!==null;){if(g===t){g=null;break}if(u=g.sibling,u!==null){u.return=g.return,g=u;break}g=g.return}u=g}}function Zr(t,n,a,s){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var g=u.alternate;if(g===null)throw Error(r(387));if(g=g.memoizedProps,g!==null){var T=u.type;Zn(u.pendingProps.value,g.value)||(t!==null?t.push(T):t=[T])}}else if(u===ht.current){if(g=u.alternate,g===null)throw Error(r(387));g.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Lo):t=[Lo])}u=u.return}t!==null&&Bu(n,t,a,s),n.flags|=262144}function Sl(t){for(t=t.firstContext;t!==null;){if(!Zn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function hr(t){fr=t,Qi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Tn(t){return Zp(fr,t)}function yl(t,n){return fr===null&&hr(t),Zp(t,n)}function Zp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Qi===null){if(t===null)throw Error(r(308));Qi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Qi=Qi.next=n;return a}var Rx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Cx=o.unstable_scheduleCallback,wx=o.unstable_NormalPriority,on={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Fu(){return{controller:new Rx,data:new Map,refCount:0}}function so(t){t.refCount--,t.refCount===0&&Cx(wx,function(){t.controller.abort()})}var oo=null,Iu=0,Kr=0,Qr=null;function Dx(t,n){if(oo===null){var a=oo=[];Iu=0,Kr=kf(),Qr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Iu++,n.then(Kp,Kp),n}function Kp(){if(--Iu===0&&oo!==null){Qr!==null&&(Qr.status="fulfilled");var t=oo;oo=null,Kr=0,Qr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Ux(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var Qp=z.S;z.S=function(t,n){O0=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Dx(t,n),Qp!==null&&Qp(t,n)};var dr=O(null);function Hu(){var t=dr.current;return t!==null?t:Xe.pooledCache}function Ml(t,n){n===null?mt(dr,dr.current):mt(dr,n.pool)}function Jp(){var t=Hu();return t===null?null:{parent:on._currentValue,pool:t}}var Jr=Error(r(460)),Gu=Error(r(474)),bl=Error(r(542)),El={then:function(){}};function $p(t){return t=t.status,t==="fulfilled"||t==="rejected"}function tm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Yi,Yi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,nm(t),t;default:if(typeof n.status=="string")n.then(Yi,Yi);else{if(t=Xe,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,nm(t),t}throw mr=n,Jr}}function pr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(mr=a,Jr):a}}var mr=null;function em(){if(mr===null)throw Error(r(459));var t=mr;return mr=null,t}function nm(t){if(t===Jr||t===bl)throw Error(r(483))}var $r=null,lo=0;function Tl(t){var n=lo;return lo+=1,$r===null&&($r=[]),tm($r,t,n)}function co(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Al(t,n){throw n.$$typeof===S?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function im(t){function n(j,k){if(t){var $=j.deletions;$===null?(j.deletions=[k],j.flags|=16):$.push(k)}}function a(j,k){if(!t)return null;for(;k!==null;)n(j,k),k=k.sibling;return null}function s(j){for(var k=new Map;j!==null;)j.key!==null?k.set(j.key,j):k.set(j.index,j),j=j.sibling;return k}function u(j,k){return j=Zi(j,k),j.index=0,j.sibling=null,j}function f(j,k,$){return j.index=$,t?($=j.alternate,$!==null?($=$.index,$<k?(j.flags|=67108866,k):$):(j.flags|=67108866,k)):(j.flags|=1048576,k)}function g(j){return t&&j.alternate===null&&(j.flags|=67108866),j}function T(j,k,$,gt){return k===null||k.tag!==6?(k=wu($,j.mode,gt),k.return=j,k):(k=u(k,$),k.return=j,k)}function H(j,k,$,gt){var Qt=$.type;return Qt===C?dt(j,k,$.props.children,gt,$.key):k!==null&&(k.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===q&&pr(Qt)===k.type)?(k=u(k,$.props),co(k,$),k.return=j,k):(k=vl($.type,$.key,$.props,null,j.mode,gt),co(k,$),k.return=j,k)}function et(j,k,$,gt){return k===null||k.tag!==4||k.stateNode.containerInfo!==$.containerInfo||k.stateNode.implementation!==$.implementation?(k=Du($,j.mode,gt),k.return=j,k):(k=u(k,$.children||[]),k.return=j,k)}function dt(j,k,$,gt,Qt){return k===null||k.tag!==7?(k=cr($,j.mode,gt,Qt),k.return=j,k):(k=u(k,$),k.return=j,k)}function _t(j,k,$){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=wu(""+k,j.mode,$),k.return=j,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case M:return $=vl(k.type,k.key,k.props,null,j.mode,$),co($,k),$.return=j,$;case E:return k=Du(k,j.mode,$),k.return=j,k;case q:return k=pr(k),_t(j,k,$)}if(ut(k)||Q(k))return k=cr(k,j.mode,$,null),k.return=j,k;if(typeof k.then=="function")return _t(j,Tl(k),$);if(k.$$typeof===U)return _t(j,yl(j,k),$);Al(j,k)}return null}function at(j,k,$,gt){var Qt=k!==null?k.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Qt!==null?null:T(j,k,""+$,gt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case M:return $.key===Qt?H(j,k,$,gt):null;case E:return $.key===Qt?et(j,k,$,gt):null;case q:return $=pr($),at(j,k,$,gt)}if(ut($)||Q($))return Qt!==null?null:dt(j,k,$,gt,null);if(typeof $.then=="function")return at(j,k,Tl($),gt);if($.$$typeof===U)return at(j,k,yl(j,$),gt);Al(j,$)}return null}function ct(j,k,$,gt,Qt){if(typeof gt=="string"&&gt!==""||typeof gt=="number"||typeof gt=="bigint")return j=j.get($)||null,T(k,j,""+gt,Qt);if(typeof gt=="object"&&gt!==null){switch(gt.$$typeof){case M:return j=j.get(gt.key===null?$:gt.key)||null,H(k,j,gt,Qt);case E:return j=j.get(gt.key===null?$:gt.key)||null,et(k,j,gt,Qt);case q:return gt=pr(gt),ct(j,k,$,gt,Qt)}if(ut(gt)||Q(gt))return j=j.get($)||null,dt(k,j,gt,Qt,null);if(typeof gt.then=="function")return ct(j,k,$,Tl(gt),Qt);if(gt.$$typeof===U)return ct(j,k,$,yl(k,gt),Qt);Al(k,gt)}return null}function Vt(j,k,$,gt){for(var Qt=null,Ae=null,jt=k,ce=k=0,xe=null;jt!==null&&ce<$.length;ce++){jt.index>ce?(xe=jt,jt=null):xe=jt.sibling;var Re=at(j,jt,$[ce],gt);if(Re===null){jt===null&&(jt=xe);break}t&&jt&&Re.alternate===null&&n(j,jt),k=f(Re,k,ce),Ae===null?Qt=Re:Ae.sibling=Re,Ae=Re,jt=xe}if(ce===$.length)return a(j,jt),Se&&Ki(j,ce),Qt;if(jt===null){for(;ce<$.length;ce++)jt=_t(j,$[ce],gt),jt!==null&&(k=f(jt,k,ce),Ae===null?Qt=jt:Ae.sibling=jt,Ae=jt);return Se&&Ki(j,ce),Qt}for(jt=s(jt);ce<$.length;ce++)xe=ct(jt,j,ce,$[ce],gt),xe!==null&&(t&&xe.alternate!==null&&jt.delete(xe.key===null?ce:xe.key),k=f(xe,k,ce),Ae===null?Qt=xe:Ae.sibling=xe,Ae=xe);return t&&jt.forEach(function(qa){return n(j,qa)}),Se&&Ki(j,ce),Qt}function te(j,k,$,gt){if($==null)throw Error(r(151));for(var Qt=null,Ae=null,jt=k,ce=k=0,xe=null,Re=$.next();jt!==null&&!Re.done;ce++,Re=$.next()){jt.index>ce?(xe=jt,jt=null):xe=jt.sibling;var qa=at(j,jt,Re.value,gt);if(qa===null){jt===null&&(jt=xe);break}t&&jt&&qa.alternate===null&&n(j,jt),k=f(qa,k,ce),Ae===null?Qt=qa:Ae.sibling=qa,Ae=qa,jt=xe}if(Re.done)return a(j,jt),Se&&Ki(j,ce),Qt;if(jt===null){for(;!Re.done;ce++,Re=$.next())Re=_t(j,Re.value,gt),Re!==null&&(k=f(Re,k,ce),Ae===null?Qt=Re:Ae.sibling=Re,Ae=Re);return Se&&Ki(j,ce),Qt}for(jt=s(jt);!Re.done;ce++,Re=$.next())Re=ct(jt,j,ce,Re.value,gt),Re!==null&&(t&&Re.alternate!==null&&jt.delete(Re.key===null?ce:Re.key),k=f(Re,k,ce),Ae===null?Qt=Re:Ae.sibling=Re,Ae=Re);return t&&jt.forEach(function(VS){return n(j,VS)}),Se&&Ki(j,ce),Qt}function Ve(j,k,$,gt){if(typeof $=="object"&&$!==null&&$.type===C&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case M:t:{for(var Qt=$.key;k!==null;){if(k.key===Qt){if(Qt=$.type,Qt===C){if(k.tag===7){a(j,k.sibling),gt=u(k,$.props.children),gt.return=j,j=gt;break t}}else if(k.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===q&&pr(Qt)===k.type){a(j,k.sibling),gt=u(k,$.props),co(gt,$),gt.return=j,j=gt;break t}a(j,k);break}else n(j,k);k=k.sibling}$.type===C?(gt=cr($.props.children,j.mode,gt,$.key),gt.return=j,j=gt):(gt=vl($.type,$.key,$.props,null,j.mode,gt),co(gt,$),gt.return=j,j=gt)}return g(j);case E:t:{for(Qt=$.key;k!==null;){if(k.key===Qt)if(k.tag===4&&k.stateNode.containerInfo===$.containerInfo&&k.stateNode.implementation===$.implementation){a(j,k.sibling),gt=u(k,$.children||[]),gt.return=j,j=gt;break t}else{a(j,k);break}else n(j,k);k=k.sibling}gt=Du($,j.mode,gt),gt.return=j,j=gt}return g(j);case q:return $=pr($),Ve(j,k,$,gt)}if(ut($))return Vt(j,k,$,gt);if(Q($)){if(Qt=Q($),typeof Qt!="function")throw Error(r(150));return $=Qt.call($),te(j,k,$,gt)}if(typeof $.then=="function")return Ve(j,k,Tl($),gt);if($.$$typeof===U)return Ve(j,k,yl(j,$),gt);Al(j,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,k!==null&&k.tag===6?(a(j,k.sibling),gt=u(k,$),gt.return=j,j=gt):(a(j,k),gt=wu($,j.mode,gt),gt.return=j,j=gt),g(j)):a(j,k)}return function(j,k,$,gt){try{lo=0;var Qt=Ve(j,k,$,gt);return $r=null,Qt}catch(jt){if(jt===Jr||jt===bl)throw jt;var Ae=Kn(29,jt,null,j.mode);return Ae.lanes=gt,Ae.return=j,Ae}}}var gr=im(!0),am=im(!1),wa=!1;function Vu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ku(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Da(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ua(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Ne&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=_l(t),Gp(t,null,a),n}return gl(t,s,n,a),_l(t)}function uo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Xs(t,a)}}function Xu(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Wu=!1;function fo(){if(Wu){var t=Qr;if(t!==null)throw t}}function ho(t,n,a,s){Wu=!1;var u=t.updateQueue;wa=!1;var f=u.firstBaseUpdate,g=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var H=T,et=H.next;H.next=null,g===null?f=et:g.next=et,g=H;var dt=t.alternate;dt!==null&&(dt=dt.updateQueue,T=dt.lastBaseUpdate,T!==g&&(T===null?dt.firstBaseUpdate=et:T.next=et,dt.lastBaseUpdate=H))}if(f!==null){var _t=u.baseState;g=0,dt=et=H=null,T=f;do{var at=T.lane&-536870913,ct=at!==T.lane;if(ct?(ve&at)===at:(s&at)===at){at!==0&&at===Kr&&(Wu=!0),dt!==null&&(dt=dt.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Vt=t,te=T;at=n;var Ve=a;switch(te.tag){case 1:if(Vt=te.payload,typeof Vt=="function"){_t=Vt.call(Ve,_t,at);break t}_t=Vt;break t;case 3:Vt.flags=Vt.flags&-65537|128;case 0:if(Vt=te.payload,at=typeof Vt=="function"?Vt.call(Ve,_t,at):Vt,at==null)break t;_t=_({},_t,at);break t;case 2:wa=!0}}at=T.callback,at!==null&&(t.flags|=64,ct&&(t.flags|=8192),ct=u.callbacks,ct===null?u.callbacks=[at]:ct.push(at))}else ct={lane:at,tag:T.tag,payload:T.payload,callback:T.callback,next:null},dt===null?(et=dt=ct,H=_t):dt=dt.next=ct,g|=at;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;ct=T,T=ct.next,ct.next=null,u.lastBaseUpdate=ct,u.shared.pending=null}}while(!0);dt===null&&(H=_t),u.baseState=H,u.firstBaseUpdate=et,u.lastBaseUpdate=dt,f===null&&(u.shared.lanes=0),za|=g,t.lanes=g,t.memoizedState=_t}}function rm(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function sm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)rm(a[t],n)}var ts=O(null),Rl=O(0);function om(t,n){t=oa,mt(Rl,t),mt(ts,n),oa=t|n.baseLanes}function qu(){mt(Rl,oa),mt(ts,ts.current)}function Yu(){oa=Rl.current,nt(ts),nt(Rl)}var Qn=O(null),hi=null;function Na(t){var n=t.alternate;mt(nn,nn.current&1),mt(Qn,t),hi===null&&(n===null||ts.current!==null||n.memoizedState!==null)&&(hi=t)}function ju(t){mt(nn,nn.current),mt(Qn,t),hi===null&&(hi=t)}function lm(t){t.tag===22?(mt(nn,nn.current),mt(Qn,t),hi===null&&(hi=t)):La()}function La(){mt(nn,nn.current),mt(Qn,Qn.current)}function Jn(t){nt(Qn),hi===t&&(hi=null),nt(nn)}var nn=O(0);function Cl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||eh(a)||nh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var $i=0,oe=null,He=null,ln=null,wl=!1,es=!1,_r=!1,Dl=0,po=0,ns=null,Nx=0;function tn(){throw Error(r(321))}function Zu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Zn(t[a],n[a]))return!1;return!0}function Ku(t,n,a,s,u,f){return $i=f,oe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=t===null||t.memoizedState===null?Wm:hf,_r=!1,f=a(s,u),_r=!1,es&&(f=um(n,a,s,u)),cm(t),f}function cm(t){z.H=_o;var n=He!==null&&He.next!==null;if($i=0,ln=He=oe=null,wl=!1,po=0,ns=null,n)throw Error(r(300));t===null||cn||(t=t.dependencies,t!==null&&Sl(t)&&(cn=!0))}function um(t,n,a,s){oe=t;var u=0;do{if(es&&(ns=null),po=0,es=!1,25<=u)throw Error(r(301));if(u+=1,ln=He=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}z.H=qm,f=n(a,s)}while(es);return f}function Lx(){var t=z.H,n=t.useState()[0];return n=typeof n.then=="function"?mo(n):n,t=t.useState()[0],(He!==null?He.memoizedState:null)!==t&&(oe.flags|=1024),n}function Qu(){var t=Dl!==0;return Dl=0,t}function Ju(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function $u(t){if(wl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}wl=!1}$i=0,ln=He=oe=null,es=!1,po=Dl=0,ns=null}function Fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?oe.memoizedState=ln=t:ln=ln.next=t,ln}function an(){if(He===null){var t=oe.alternate;t=t!==null?t.memoizedState:null}else t=He.next;var n=ln===null?oe.memoizedState:ln.next;if(n!==null)ln=n,He=t;else{if(t===null)throw oe.alternate===null?Error(r(467)):Error(r(310));He=t,t={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},ln===null?oe.memoizedState=ln=t:ln=ln.next=t}return ln}function Ul(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function mo(t){var n=po;return po+=1,ns===null&&(ns=[]),t=tm(ns,t,n),n=oe,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?Wm:hf),t}function Nl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return mo(t);if(t.$$typeof===U)return Tn(t)}throw Error(r(438,String(t)))}function tf(t){var n=null,a=oe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=oe.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ul(),oe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=w;return n.index++,a}function ta(t,n){return typeof n=="function"?n(t):n}function Ll(t){var n=an();return ef(n,He,t)}function ef(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=t.baseQueue,f=s.pending;if(f!==null){if(u!==null){var g=u.next;u.next=f.next,f.next=g}n.baseQueue=u=f,s.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var T=g=null,H=null,et=n,dt=!1;do{var _t=et.lane&-536870913;if(_t!==et.lane?(ve&_t)===_t:($i&_t)===_t){var at=et.revertLane;if(at===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),_t===Kr&&(dt=!0);else if(($i&at)===at){et=et.next,at===Kr&&(dt=!0);continue}else _t={lane:0,revertLane:et.revertLane,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},H===null?(T=H=_t,g=f):H=H.next=_t,oe.lanes|=at,za|=at;_t=et.action,_r&&a(f,_t),f=et.hasEagerState?et.eagerState:a(f,_t)}else at={lane:_t,revertLane:et.revertLane,gesture:et.gesture,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},H===null?(T=H=at,g=f):H=H.next=at,oe.lanes|=_t,za|=_t;et=et.next}while(et!==null&&et!==n);if(H===null?g=f:H.next=T,!Zn(f,t.memoizedState)&&(cn=!0,dt&&(a=Qr,a!==null)))throw a;t.memoizedState=f,t.baseState=g,t.baseQueue=H,s.lastRenderedState=f}return u===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function nf(t){var n=an(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var g=u=u.next;do f=t(f,g.action),g=g.next;while(g!==u);Zn(f,n.memoizedState)||(cn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function fm(t,n,a){var s=oe,u=an(),f=Se;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var g=!Zn((He||u).memoizedState,a);if(g&&(u.memoizedState=a,cn=!0),u=u.queue,sf(pm.bind(null,s,u,t),[t]),u.getSnapshot!==n||g||ln!==null&&ln.memoizedState.tag&1){if(s.flags|=2048,is(9,{destroy:void 0},dm.bind(null,s,u,a,n),null),Xe===null)throw Error(r(349));f||($i&127)!==0||hm(s,n,a)}return a}function hm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=oe.updateQueue,n===null?(n=Ul(),oe.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function dm(t,n,a,s){n.value=a,n.getSnapshot=s,mm(n)&&gm(t)}function pm(t,n,a){return a(function(){mm(n)&&gm(t)})}function mm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Zn(t,a)}catch{return!0}}function gm(t){var n=lr(t,2);n!==null&&Yn(n,t,2)}function af(t){var n=Fn();if(typeof t=="function"){var a=t;if(t=a(),_r){Bt(!0);try{a()}finally{Bt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:t},n}function _m(t,n,a,s){return t.baseState=a,ef(t,He,typeof s=="function"?s:ta)}function Ox(t,n,a,s,u){if(zl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};z.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,vm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function vm(t,n){var a=n.action,s=n.payload,u=t.state;if(n.isTransition){var f=z.T,g={};z.T=g;try{var T=a(u,s),H=z.S;H!==null&&H(g,T),xm(t,n,T)}catch(et){rf(t,n,et)}finally{f!==null&&g.types!==null&&(f.types=g.types),z.T=f}}else try{f=a(u,s),xm(t,n,f)}catch(et){rf(t,n,et)}}function xm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Sm(t,n,s)},function(s){return rf(t,n,s)}):Sm(t,n,a)}function Sm(t,n,a){n.status="fulfilled",n.value=a,ym(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,vm(t,a)))}function rf(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,ym(n),n=n.next;while(n!==s)}t.action=null}function ym(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Mm(t,n){return n}function bm(t,n){if(Se){var a=Xe.formState;if(a!==null){t:{var s=oe;if(Se){if(qe){e:{for(var u=qe,f=fi;u.nodeType!==8;){if(!f){u=null;break e}if(u=di(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){qe=di(u.nextSibling),s=u.data==="F!";break t}}Ra(s)}s=!1}s&&(n=a[0])}}return a=Fn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mm,lastRenderedState:n},a.queue=s,a=Vm.bind(null,oe,s),s.dispatch=a,s=af(!1),f=ff.bind(null,oe,!1,s.queue),s=Fn(),u={state:n,dispatch:null,action:t,pending:null},s.queue=u,a=Ox.bind(null,oe,u,f,a),u.dispatch=a,s.memoizedState=t,[n,a,!1]}function Em(t){var n=an();return Tm(n,He,t)}function Tm(t,n,a){if(n=ef(t,n,Mm)[0],t=Ll(ta)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=mo(n)}catch(g){throw g===Jr?bl:g}else s=n;n=an();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(oe.flags|=2048,is(9,{destroy:void 0},Px.bind(null,u,a),null)),[s,f,t]}function Px(t,n){t.action=n}function Am(t){var n=an(),a=He;if(a!==null)return Tm(n,a,t);an(),n=n.memoizedState,a=an();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function is(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=oe.updateQueue,n===null&&(n=Ul(),oe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function Rm(){return an().memoizedState}function Ol(t,n,a,s){var u=Fn();oe.flags|=t,u.memoizedState=is(1|n,{destroy:void 0},a,s===void 0?null:s)}function Pl(t,n,a,s){var u=an();s=s===void 0?null:s;var f=u.memoizedState.inst;He!==null&&s!==null&&Zu(s,He.memoizedState.deps)?u.memoizedState=is(n,f,a,s):(oe.flags|=t,u.memoizedState=is(1|n,f,a,s))}function Cm(t,n){Ol(8390656,8,t,n)}function sf(t,n){Pl(2048,8,t,n)}function zx(t){oe.flags|=4;var n=oe.updateQueue;if(n===null)n=Ul(),oe.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function wm(t){var n=an().memoizedState;return zx({ref:n,nextImpl:t}),function(){if((Ne&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Dm(t,n){return Pl(4,2,t,n)}function Um(t,n){return Pl(4,4,t,n)}function Nm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Lm(t,n,a){a=a!=null?a.concat([t]):null,Pl(4,4,Nm.bind(null,n,t),a)}function of(){}function Om(t,n){var a=an();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Zu(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function Pm(t,n){var a=an();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Zu(n,s[1]))return s[0];if(s=t(),_r){Bt(!0);try{t()}finally{Bt(!1)}}return a.memoizedState=[s,n],s}function lf(t,n,a){return a===void 0||($i&1073741824)!==0&&(ve&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=z0(),oe.lanes|=t,za|=t,a)}function zm(t,n,a,s){return Zn(a,n)?a:ts.current!==null?(t=lf(t,a,s),Zn(t,n)||(cn=!0),t):($i&42)===0||($i&1073741824)!==0&&(ve&261930)===0?(cn=!0,t.memoizedState=a):(t=z0(),oe.lanes|=t,za|=t,n)}function Bm(t,n,a,s,u){var f=G.p;G.p=f!==0&&8>f?f:8;var g=z.T,T={};z.T=T,ff(t,!1,n,a);try{var H=u(),et=z.S;if(et!==null&&et(T,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var dt=Ux(H,s);go(t,n,dt,ei(t))}else go(t,n,s,ei(t))}catch(_t){go(t,n,{then:function(){},status:"rejected",reason:_t},ei())}finally{G.p=f,g!==null&&T.types!==null&&(g.types=T.types),z.T=g}}function Bx(){}function cf(t,n,a,s){if(t.tag!==5)throw Error(r(476));var u=Fm(t).queue;Bm(t,u,n,tt,a===null?Bx:function(){return Im(t),a(s)})}function Fm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:tt,baseState:tt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:tt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Im(t){var n=Fm(t);n.next===null&&(n=t.alternate.memoizedState),go(t,n.next.queue,{},ei())}function uf(){return Tn(Lo)}function Hm(){return an().memoizedState}function Gm(){return an().memoizedState}function Fx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ei();t=Da(a);var s=Ua(n,t,a);s!==null&&(Yn(s,n,a),uo(s,n,a)),n={cache:Fu()},t.payload=n;return}n=n.return}}function Ix(t,n,a){var s=ei();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},zl(t)?km(n,a):(a=Ru(t,n,a,s),a!==null&&(Yn(a,t,s),Xm(a,n,s)))}function Vm(t,n,a){var s=ei();go(t,n,a,s)}function go(t,n,a,s){var u={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(zl(t))km(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,T=f(g,a);if(u.hasEagerState=!0,u.eagerState=T,Zn(T,g))return gl(t,n,u,0),Xe===null&&ml(),!1}catch{}if(a=Ru(t,n,u,s),a!==null)return Yn(a,t,s),Xm(a,n,s),!0}return!1}function ff(t,n,a,s){if(s={lane:2,revertLane:kf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},zl(t)){if(n)throw Error(r(479))}else n=Ru(t,a,s,2),n!==null&&Yn(n,t,2)}function zl(t){var n=t.alternate;return t===oe||n!==null&&n===oe}function km(t,n){es=wl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Xm(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Xs(t,a)}}var _o={readContext:Tn,use:Nl,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn};_o.useEffectEvent=tn;var Wm={readContext:Tn,use:Nl,useCallback:function(t,n){return Fn().memoizedState=[t,n===void 0?null:n],t},useContext:Tn,useEffect:Cm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Ol(4194308,4,Nm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Ol(4194308,4,t,n)},useInsertionEffect:function(t,n){Ol(4,2,t,n)},useMemo:function(t,n){var a=Fn();n=n===void 0?null:n;var s=t();if(_r){Bt(!0);try{t()}finally{Bt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Fn();if(a!==void 0){var u=a(n);if(_r){Bt(!0);try{a(n)}finally{Bt(!1)}}}else u=n;return s.memoizedState=s.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},s.queue=t,t=t.dispatch=Ix.bind(null,oe,t),[s.memoizedState,t]},useRef:function(t){var n=Fn();return t={current:t},n.memoizedState=t},useState:function(t){t=af(t);var n=t.queue,a=Vm.bind(null,oe,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:of,useDeferredValue:function(t,n){var a=Fn();return lf(a,t,n)},useTransition:function(){var t=af(!1);return t=Bm.bind(null,oe,t.queue,!0,!1),Fn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=oe,u=Fn();if(Se){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Xe===null)throw Error(r(349));(ve&127)!==0||hm(s,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Cm(pm.bind(null,s,f,t),[t]),s.flags|=2048,is(9,{destroy:void 0},dm.bind(null,s,f,a,n),null),a},useId:function(){var t=Fn(),n=Xe.identifierPrefix;if(Se){var a=Li,s=Ni;a=(s&~(1<<32-Pt(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Dl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Nx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:uf,useFormState:bm,useActionState:bm,useOptimistic:function(t){var n=Fn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ff.bind(null,oe,!0,a),a.dispatch=n,[t,n]},useMemoCache:tf,useCacheRefresh:function(){return Fn().memoizedState=Fx.bind(null,oe)},useEffectEvent:function(t){var n=Fn(),a={impl:t};return n.memoizedState=a,function(){if((Ne&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},hf={readContext:Tn,use:Nl,useCallback:Om,useContext:Tn,useEffect:sf,useImperativeHandle:Lm,useInsertionEffect:Dm,useLayoutEffect:Um,useMemo:Pm,useReducer:Ll,useRef:Rm,useState:function(){return Ll(ta)},useDebugValue:of,useDeferredValue:function(t,n){var a=an();return zm(a,He.memoizedState,t,n)},useTransition:function(){var t=Ll(ta)[0],n=an().memoizedState;return[typeof t=="boolean"?t:mo(t),n]},useSyncExternalStore:fm,useId:Hm,useHostTransitionStatus:uf,useFormState:Em,useActionState:Em,useOptimistic:function(t,n){var a=an();return _m(a,He,t,n)},useMemoCache:tf,useCacheRefresh:Gm};hf.useEffectEvent=wm;var qm={readContext:Tn,use:Nl,useCallback:Om,useContext:Tn,useEffect:sf,useImperativeHandle:Lm,useInsertionEffect:Dm,useLayoutEffect:Um,useMemo:Pm,useReducer:nf,useRef:Rm,useState:function(){return nf(ta)},useDebugValue:of,useDeferredValue:function(t,n){var a=an();return He===null?lf(a,t,n):zm(a,He.memoizedState,t,n)},useTransition:function(){var t=nf(ta)[0],n=an().memoizedState;return[typeof t=="boolean"?t:mo(t),n]},useSyncExternalStore:fm,useId:Hm,useHostTransitionStatus:uf,useFormState:Am,useActionState:Am,useOptimistic:function(t,n){var a=an();return He!==null?_m(a,He,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:tf,useCacheRefresh:Gm};qm.useEffectEvent=wm;function df(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:_({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var pf={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=ei(),u=Da(s);u.payload=n,a!=null&&(u.callback=a),n=Ua(t,u,s),n!==null&&(Yn(n,t,s),uo(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=ei(),u=Da(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ua(t,u,s),n!==null&&(Yn(n,t,s),uo(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ei(),s=Da(a);s.tag=2,n!=null&&(s.callback=n),n=Ua(t,s,a),n!==null&&(Yn(n,t,a),uo(n,t,a))}};function Ym(t,n,a,s,u,f,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,g):n.prototype&&n.prototype.isPureReactComponent?!no(a,s)||!no(u,f):!0}function jm(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&pf.enqueueReplaceState(n,n.state,null)}function vr(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=_({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Zm(t){pl(t)}function Km(t){console.error(t)}function Qm(t){pl(t)}function Bl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Jm(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function mf(t,n,a){return a=Da(a),a.tag=3,a.payload={element:null},a.callback=function(){Bl(t,n)},a}function $m(t){return t=Da(t),t.tag=3,t}function t0(t,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;t.payload=function(){return u(f)},t.callback=function(){Jm(n,a,s)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){Jm(n,a,s),typeof u!="function"&&(Ba===null?Ba=new Set([this]):Ba.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function Hx(t,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Zr(n,a,u,!0),a=Qn.current,a!==null){switch(a.tag){case 31:case 13:return hi===null?Zl():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===El?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Hf(t,s,u)),!1;case 22:return a.flags|=65536,s===El?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Hf(t,s,u)),!1}throw Error(r(435,a.tag))}return Hf(t,s,u),Zl(),!1}if(Se)return n=Qn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==Lu&&(t=Error(r(422),{cause:s}),ro(li(t,a)))):(s!==Lu&&(n=Error(r(423),{cause:s}),ro(li(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,s=li(s,a),u=mf(t.stateNode,s,u),Xu(t,u),en!==4&&(en=2)),!1;var f=Error(r(520),{cause:s});if(f=li(f,a),To===null?To=[f]:To.push(f),en!==4&&(en=2),n===null)return!0;s=li(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=mf(a.stateNode,s,t),Xu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ba===null||!Ba.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=$m(u),t0(u,t,a,s),Xu(a,u),!1}a=a.return}while(a!==null);return!1}var gf=Error(r(461)),cn=!1;function An(t,n,a,s){n.child=t===null?am(n,null,a,s):gr(n,t.child,a,s)}function e0(t,n,a,s,u){a=a.render;var f=n.ref;if("ref"in s){var g={};for(var T in s)T!=="ref"&&(g[T]=s[T])}else g=s;return hr(n),s=Ku(t,n,a,g,f,u),T=Qu(),t!==null&&!cn?(Ju(t,n,u),ea(t,n,u)):(Se&&T&&Uu(n),n.flags|=1,An(t,n,s,u),n.child)}function n0(t,n,a,s,u){if(t===null){var f=a.type;return typeof f=="function"&&!Cu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,i0(t,n,f,s,u)):(t=vl(a.type,null,s,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Ef(t,u)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:no,a(g,s)&&t.ref===n.ref)return ea(t,n,u)}return n.flags|=1,t=Zi(f,s),t.ref=n.ref,t.return=n,n.child=t}function i0(t,n,a,s,u){if(t!==null){var f=t.memoizedProps;if(no(f,s)&&t.ref===n.ref)if(cn=!1,n.pendingProps=s=f,Ef(t,u))(t.flags&131072)!==0&&(cn=!0);else return n.lanes=t.lanes,ea(t,n,u)}return _f(t,n,a,s,u)}function a0(t,n,a,s){var u=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~f}else s=0,n.child=null;return r0(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ml(n,f!==null?f.cachePool:null),f!==null?om(n,f):qu(),lm(n);else return s=n.lanes=536870912,r0(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(Ml(n,f.cachePool),om(n,f),La(),n.memoizedState=null):(t!==null&&Ml(n,null),qu(),La());return An(t,n,u,a),n.child}function vo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function r0(t,n,a,s,u){var f=Hu();return f=f===null?null:{parent:on._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&Ml(n,null),qu(),lm(n),t!==null&&Zr(t,n,s,!0),n.childLanes=u,null}function Fl(t,n){return n=Hl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function s0(t,n,a){return gr(n,t.child,null,a),t=Fl(n,n.pendingProps),t.flags|=2,Jn(n),n.memoizedState=null,t}function Gx(t,n,a){var s=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Se){if(s.mode==="hidden")return t=Fl(n,s),n.lanes=536870912,vo(null,t);if(ju(n),(t=qe)?(t=vg(t,fi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ta!==null?{id:Ni,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},a=kp(t),a.return=n,n.child=a,En=n,qe=null)):t=null,t===null)throw Ra(n);return n.lanes=536870912,null}return Fl(n,s)}var f=t.memoizedState;if(f!==null){var g=f.dehydrated;if(ju(n),u)if(n.flags&256)n.flags&=-257,n=s0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(cn||Zr(t,n,a,!1),u=(a&t.childLanes)!==0,cn||u){if(s=Xe,s!==null&&(g=Or(s,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,lr(t,g),Yn(s,t,g),gf;Zl(),n=s0(t,n,a)}else t=f.treeContext,qe=di(g.nextSibling),En=n,Se=!0,Aa=null,fi=!1,t!==null&&qp(n,t),n=Fl(n,s),n.flags|=4096;return n}return t=Zi(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Il(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function _f(t,n,a,s,u){return hr(n),a=Ku(t,n,a,s,void 0,u),s=Qu(),t!==null&&!cn?(Ju(t,n,u),ea(t,n,u)):(Se&&s&&Uu(n),n.flags|=1,An(t,n,a,u),n.child)}function o0(t,n,a,s,u,f){return hr(n),n.updateQueue=null,a=um(n,s,a,u),cm(t),s=Qu(),t!==null&&!cn?(Ju(t,n,f),ea(t,n,f)):(Se&&s&&Uu(n),n.flags|=1,An(t,n,a,f),n.child)}function l0(t,n,a,s,u){if(hr(n),n.stateNode===null){var f=Wr,g=a.contextType;typeof g=="object"&&g!==null&&(f=Tn(g)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=pf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Vu(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?Tn(g):Wr,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(df(n,a,g,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&pf.enqueueReplaceState(f,f.state,null),ho(n,s,f,u),fo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,H=vr(a,T);f.props=H;var et=f.context,dt=a.contextType;g=Wr,typeof dt=="object"&&dt!==null&&(g=Tn(dt));var _t=a.getDerivedStateFromProps;dt=typeof _t=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,dt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||et!==g)&&jm(n,f,s,g),wa=!1;var at=n.memoizedState;f.state=at,ho(n,s,f,u),fo(),et=n.memoizedState,T||at!==et||wa?(typeof _t=="function"&&(df(n,a,_t,s),et=n.memoizedState),(H=wa||Ym(n,a,H,s,at,et,g))?(dt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=et),f.props=s,f.state=et,f.context=g,s=H):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,ku(t,n),g=n.memoizedProps,dt=vr(a,g),f.props=dt,_t=n.pendingProps,at=f.context,et=a.contextType,H=Wr,typeof et=="object"&&et!==null&&(H=Tn(et)),T=a.getDerivedStateFromProps,(et=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==_t||at!==H)&&jm(n,f,s,H),wa=!1,at=n.memoizedState,f.state=at,ho(n,s,f,u),fo();var ct=n.memoizedState;g!==_t||at!==ct||wa||t!==null&&t.dependencies!==null&&Sl(t.dependencies)?(typeof T=="function"&&(df(n,a,T,s),ct=n.memoizedState),(dt=wa||Ym(n,a,dt,s,at,ct,H)||t!==null&&t.dependencies!==null&&Sl(t.dependencies))?(et||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,ct,H),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,ct,H)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&at===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&at===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ct),f.props=s,f.state=ct,f.context=H,s=dt):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&at===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&at===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,Il(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=gr(n,t.child,null,u),n.child=gr(n,null,a,u)):An(t,n,a,u),n.memoizedState=f.state,t=n.child):t=ea(t,n,u),t}function c0(t,n,a,s){return ur(),n.flags|=256,An(t,n,a,s),n.child}var vf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xf(t){return{baseLanes:t,cachePool:Jp()}}function Sf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ti),t}function u0(t,n,a){var s=n.pendingProps,u=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=t!==null&&t.memoizedState===null?!1:(nn.current&2)!==0),g&&(u=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(Se){if(u?Na(n):La(),(t=qe)?(t=vg(t,fi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ta!==null?{id:Ni,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},a=kp(t),a.return=n,n.child=a,En=n,qe=null)):t=null,t===null)throw Ra(n);return nh(t)?n.lanes=32:n.lanes=536870912,null}var T=s.children;return s=s.fallback,u?(La(),u=n.mode,T=Hl({mode:"hidden",children:T},u),s=cr(s,u,a,null),T.return=n,s.return=n,T.sibling=s,n.child=T,s=n.child,s.memoizedState=xf(a),s.childLanes=Sf(t,g,a),n.memoizedState=vf,vo(null,s)):(Na(n),yf(n,T))}var H=t.memoizedState;if(H!==null&&(T=H.dehydrated,T!==null)){if(f)n.flags&256?(Na(n),n.flags&=-257,n=Mf(t,n,a)):n.memoizedState!==null?(La(),n.child=t.child,n.flags|=128,n=null):(La(),T=s.fallback,u=n.mode,s=Hl({mode:"visible",children:s.children},u),T=cr(T,u,a,null),T.flags|=2,s.return=n,T.return=n,s.sibling=T,n.child=s,gr(n,t.child,null,a),s=n.child,s.memoizedState=xf(a),s.childLanes=Sf(t,g,a),n.memoizedState=vf,n=vo(null,s));else if(Na(n),nh(T)){if(g=T.nextSibling&&T.nextSibling.dataset,g)var et=g.dgst;g=et,s=Error(r(419)),s.stack="",s.digest=g,ro({value:s,source:null,stack:null}),n=Mf(t,n,a)}else if(cn||Zr(t,n,a,!1),g=(a&t.childLanes)!==0,cn||g){if(g=Xe,g!==null&&(s=Or(g,a),s!==0&&s!==H.retryLane))throw H.retryLane=s,lr(t,s),Yn(g,t,s),gf;eh(T)||Zl(),n=Mf(t,n,a)}else eh(T)?(n.flags|=192,n.child=t.child,n=null):(t=H.treeContext,qe=di(T.nextSibling),En=n,Se=!0,Aa=null,fi=!1,t!==null&&qp(n,t),n=yf(n,s.children),n.flags|=4096);return n}return u?(La(),T=s.fallback,u=n.mode,H=t.child,et=H.sibling,s=Zi(H,{mode:"hidden",children:s.children}),s.subtreeFlags=H.subtreeFlags&65011712,et!==null?T=Zi(et,T):(T=cr(T,u,a,null),T.flags|=2),T.return=n,s.return=n,s.sibling=T,n.child=s,vo(null,s),s=n.child,T=t.child.memoizedState,T===null?T=xf(a):(u=T.cachePool,u!==null?(H=on._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=Jp(),T={baseLanes:T.baseLanes|a,cachePool:u}),s.memoizedState=T,s.childLanes=Sf(t,g,a),n.memoizedState=vf,vo(t.child,s)):(Na(n),a=t.child,t=a.sibling,a=Zi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function yf(t,n){return n=Hl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Hl(t,n){return t=Kn(22,t,null,n),t.lanes=0,t}function Mf(t,n,a){return gr(n,t.child,null,a),t=yf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function f0(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),zu(t.return,n,a)}function bf(t,n,a,s,u,f){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=s,g.tail=a,g.tailMode=u,g.treeForkCount=f)}function h0(t,n,a){var s=n.pendingProps,u=s.revealOrder,f=s.tail;s=s.children;var g=nn.current,T=(g&2)!==0;if(T?(g=g&1|2,n.flags|=128):g&=1,mt(nn,g),An(t,n,s,a),s=Se?ao:0,!T&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&f0(t,a,n);else if(t.tag===19)f0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Cl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),bf(n,!1,u,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Cl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}bf(n,!0,a,null,f,s);break;case"together":bf(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function ea(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),za|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Zr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Zi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Zi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Ef(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Sl(t)))}function Vx(t,n,a){switch(n.tag){case 3:Dt(n,n.stateNode.containerInfo),Ca(n,on,t.memoizedState.cache),ur();break;case 27:case 5:Ht(n);break;case 4:Dt(n,n.stateNode.containerInfo);break;case 10:Ca(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,ju(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(Na(n),n.flags|=128,null):(a&n.child.childLanes)!==0?u0(t,n,a):(Na(n),t=ea(t,n,a),t!==null?t.sibling:null);Na(n);break;case 19:var u=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Zr(t,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return h0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),mt(nn,nn.current),s)break;return null;case 22:return n.lanes=0,a0(t,n,a,n.pendingProps);case 24:Ca(n,on,t.memoizedState.cache)}return ea(t,n,a)}function d0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)cn=!0;else{if(!Ef(t,a)&&(n.flags&128)===0)return cn=!1,Vx(t,n,a);cn=(t.flags&131072)!==0}else cn=!1,Se&&(n.flags&1048576)!==0&&Wp(n,ao,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=pr(n.elementType),n.type=t,typeof t=="function")Cu(t)?(s=vr(t,s),n.tag=1,n=l0(null,n,t,s,a)):(n.tag=0,n=_f(null,n,t,s,a));else{if(t!=null){var u=t.$$typeof;if(u===N){n.tag=11,n=e0(null,n,t,s,a);break t}else if(u===P){n.tag=14,n=n0(null,n,t,s,a);break t}}throw n=lt(t)||t,Error(r(306,n,""))}}return n;case 0:return _f(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=vr(s,n.pendingProps),l0(t,n,s,u,a);case 3:t:{if(Dt(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;u=f.element,ku(t,n),ho(n,s,null,a);var g=n.memoizedState;if(s=g.cache,Ca(n,on,s),s!==f.cache&&Bu(n,[on],a,!0),fo(),s=g.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=c0(t,n,s,a);break t}else if(s!==u){u=li(Error(r(424)),n),ro(u),n=c0(t,n,s,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,qe=di(t.firstChild),En=n,Se=!0,Aa=null,fi=!0,a=am(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ur(),s===u){n=ea(t,n,a);break t}An(t,n,s,a)}n=n.child}return n;case 26:return Il(t,n),t===null?(a=Eg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Se||(a=n.type,t=n.pendingProps,s=nc(rt.current).createElement(a),s[sn]=n,s[vn]=t,Rn(s,a,t),R(s),n.stateNode=s):n.memoizedState=Eg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ht(n),t===null&&Se&&(s=n.stateNode=yg(n.type,n.pendingProps,rt.current),En=n,fi=!0,u=qe,Ga(n.type)?(ih=u,qe=di(s.firstChild)):qe=u),An(t,n,n.pendingProps.children,a),Il(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Se&&((u=s=qe)&&(s=vS(s,n.type,n.pendingProps,fi),s!==null?(n.stateNode=s,En=n,qe=di(s.firstChild),fi=!1,u=!0):u=!1),u||Ra(n)),Ht(n),u=n.type,f=n.pendingProps,g=t!==null?t.memoizedProps:null,s=f.children,Jf(u,f)?s=null:g!==null&&Jf(u,g)&&(n.flags|=32),n.memoizedState!==null&&(u=Ku(t,n,Lx,null,null,a),Lo._currentValue=u),Il(t,n),An(t,n,s,a),n.child;case 6:return t===null&&Se&&((t=a=qe)&&(a=xS(a,n.pendingProps,fi),a!==null?(n.stateNode=a,En=n,qe=null,t=!0):t=!1),t||Ra(n)),null;case 13:return u0(t,n,a);case 4:return Dt(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=gr(n,null,s,a):An(t,n,s,a),n.child;case 11:return e0(t,n,n.type,n.pendingProps,a);case 7:return An(t,n,n.pendingProps,a),n.child;case 8:return An(t,n,n.pendingProps.children,a),n.child;case 12:return An(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,Ca(n,n.type,s.value),An(t,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,hr(n),u=Tn(u),s=s(u),n.flags|=1,An(t,n,s,a),n.child;case 14:return n0(t,n,n.type,n.pendingProps,a);case 15:return i0(t,n,n.type,n.pendingProps,a);case 19:return h0(t,n,a);case 31:return Gx(t,n,a);case 22:return a0(t,n,a,n.pendingProps);case 24:return hr(n),s=Tn(on),t===null?(u=Hu(),u===null&&(u=Xe,f=Fu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:s,cache:u},Vu(n),Ca(n,on,u)):((t.lanes&a)!==0&&(ku(t,n),ho(n,null,null,a),fo()),u=t.memoizedState,f=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ca(n,on,s)):(s=f.cache,Ca(n,on,s),s!==u.cache&&Bu(n,[on],a,!0))),An(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function na(t){t.flags|=4}function Tf(t,n,a,s,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(H0())t.flags|=8192;else throw mr=El,Gu}else t.flags&=-16777217}function p0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!wg(n))if(H0())t.flags|=8192;else throw mr=El,Gu}function Gl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Pe():536870912,t.lanes|=n,os|=n)}function xo(t,n){if(!Se)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Ye(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function kx(t,n,a){var s=n.pendingProps;switch(Nu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(n),null;case 1:return Ye(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ji(on),kt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(jr(n)?na(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ou())),Ye(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(na(n),f!==null?(Ye(n),p0(n,f)):(Ye(n),Tf(n,u,null,s,a))):f?f!==t.memoizedState?(na(n),Ye(n),p0(n,f)):(Ye(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&na(n),Ye(n),Tf(n,u,t,s,a)),null;case 27:if(de(n),a=rt.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&na(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ye(n),null}t=At.current,jr(n)?Yp(n):(t=yg(u,s,a),n.stateNode=t,na(n))}return Ye(n),null;case 5:if(de(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&na(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ye(n),null}if(f=At.current,jr(n))Yp(n);else{var g=nc(rt.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?g.createElement("select",{is:s.is}):g.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?g.createElement(u,{is:s.is}):g.createElement(u)}}f[sn]=n,f[vn]=s;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;t:switch(Rn(f,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&na(n)}}return Ye(n),Tf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&na(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=rt.current,jr(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,u=En,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}t[sn]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||ug(t.nodeValue,a)),t||Ra(n,!0)}else t=nc(t).createTextNode(s),t[sn]=n,n.stateNode=t}return Ye(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=jr(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[sn]=n}else ur(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ye(n),t=!1}else a=Ou(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Jn(n),n):(Jn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Ye(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=jr(n),s!==null&&s.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[sn]=n}else ur(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ye(n),u=!1}else u=Ou(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Jn(n),n):(Jn(n),null)}return Jn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Gl(n,n.updateQueue),Ye(n),null);case 4:return kt(),t===null&&Yf(n.stateNode.containerInfo),Ye(n),null;case 10:return Ji(n.type),Ye(n),null;case 19:if(nt(nn),s=n.memoizedState,s===null)return Ye(n),null;if(u=(n.flags&128)!==0,f=s.rendering,f===null)if(u)xo(s,!1);else{if(en!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Cl(t),f!==null){for(n.flags|=128,xo(s,!1),t=f.updateQueue,n.updateQueue=t,Gl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Vp(a,t),a=a.sibling;return mt(nn,nn.current&1|2),Se&&Ki(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&b()>ql&&(n.flags|=128,u=!0,xo(s,!1),n.lanes=4194304)}else{if(!u)if(t=Cl(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Gl(n,t),xo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!Se)return Ye(n),null}else 2*b()-s.renderingStartTime>ql&&a!==536870912&&(n.flags|=128,u=!0,xo(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=b(),t.sibling=null,a=nn.current,mt(nn,u?a&1|2:a&1),Se&&Ki(n,s.treeForkCount),t):(Ye(n),null);case 22:case 23:return Jn(n),Yu(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Ye(n),n.subtreeFlags&6&&(n.flags|=8192)):Ye(n),a=n.updateQueue,a!==null&&Gl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&nt(dr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ji(on),Ye(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Xx(t,n){switch(Nu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ji(on),kt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return de(n),null;case 31:if(n.memoizedState!==null){if(Jn(n),n.alternate===null)throw Error(r(340));ur()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Jn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));ur()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return nt(nn),null;case 4:return kt(),null;case 10:return Ji(n.type),null;case 22:case 23:return Jn(n),Yu(),t!==null&&nt(dr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ji(on),null;case 25:return null;default:return null}}function m0(t,n){switch(Nu(n),n.tag){case 3:Ji(on),kt();break;case 26:case 27:case 5:de(n);break;case 4:kt();break;case 31:n.memoizedState!==null&&Jn(n);break;case 13:Jn(n);break;case 19:nt(nn);break;case 10:Ji(n.type);break;case 22:case 23:Jn(n),Yu(),t!==null&&nt(dr);break;case 24:Ji(on)}}function So(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&t)===t){s=void 0;var f=a.create,g=a.inst;s=f(),g.destroy=s}a=a.next}while(a!==u)}}catch(T){Fe(n,n.return,T)}}function Oa(t,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&t)===t){var g=s.inst,T=g.destroy;if(T!==void 0){g.destroy=void 0,u=n;var H=a,et=T;try{et()}catch(dt){Fe(u,H,dt)}}}s=s.next}while(s!==f)}}catch(dt){Fe(n,n.return,dt)}}function g0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{sm(n,a)}catch(s){Fe(t,t.return,s)}}}function _0(t,n,a){a.props=vr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Fe(t,n,s)}}function yo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(u){Fe(t,n,u)}}function Oi(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){Fe(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Fe(t,n,u)}else a.current=null}function v0(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){Fe(t,t.return,u)}}function Af(t,n,a){try{var s=t.stateNode;hS(s,t.type,a,n),s[vn]=n}catch(u){Fe(t,t.return,u)}}function x0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ga(t.type)||t.tag===4}function Rf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||x0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ga(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Cf(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Yi));else if(s!==4&&(s===27&&Ga(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Cf(t,n,a),t=t.sibling;t!==null;)Cf(t,n,a),t=t.sibling}function Vl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Ga(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Vl(t,n,a),t=t.sibling;t!==null;)Vl(t,n,a),t=t.sibling}function S0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Rn(n,s,a),n[sn]=t,n[vn]=a}catch(f){Fe(t,t.return,f)}}var ia=!1,un=!1,wf=!1,y0=typeof WeakSet=="function"?WeakSet:Set,gn=null;function Wx(t,n){if(t=t.containerInfo,Kf=cc,t=Lp(t),yu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var g=0,T=-1,H=-1,et=0,dt=0,_t=t,at=null;e:for(;;){for(var ct;_t!==a||u!==0&&_t.nodeType!==3||(T=g+u),_t!==f||s!==0&&_t.nodeType!==3||(H=g+s),_t.nodeType===3&&(g+=_t.nodeValue.length),(ct=_t.firstChild)!==null;)at=_t,_t=ct;for(;;){if(_t===t)break e;if(at===a&&++et===u&&(T=g),at===f&&++dt===s&&(H=g),(ct=_t.nextSibling)!==null)break;_t=at,at=_t.parentNode}_t=ct}a=T===-1||H===-1?null:{start:T,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(Qf={focusedElem:t,selectionRange:a},cc=!1,gn=n;gn!==null;)if(n=gn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,gn=t;else for(;gn!==null;){switch(n=gn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Vt=vr(a.type,u);t=s.getSnapshotBeforeUpdate(Vt,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(te){Fe(a,a.return,te)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)th(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":th(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,gn=t;break}gn=n.return}}function M0(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ra(t,a),s&4&&So(5,a);break;case 1:if(ra(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){Fe(a,a.return,g)}else{var u=vr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){Fe(a,a.return,g)}}s&64&&g0(a),s&512&&yo(a,a.return);break;case 3:if(ra(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{sm(t,n)}catch(g){Fe(a,a.return,g)}}break;case 27:n===null&&s&4&&S0(a);case 26:case 5:ra(t,a),n===null&&s&4&&v0(a),s&512&&yo(a,a.return);break;case 12:ra(t,a);break;case 31:ra(t,a),s&4&&T0(t,a);break;case 13:ra(t,a),s&4&&A0(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=tS.bind(null,a),SS(t,a))));break;case 22:if(s=a.memoizedState!==null||ia,!s){n=n!==null&&n.memoizedState!==null||un,u=ia;var f=un;ia=s,(un=n)&&!f?sa(t,a,(a.subtreeFlags&8772)!==0):ra(t,a),ia=u,un=f}break;case 30:break;default:ra(t,a)}}function b0(t){var n=t.alternate;n!==null&&(t.alternate=null,b0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&js(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ke=null,kn=!1;function aa(t,n,a){for(a=a.child;a!==null;)E0(t,n,a),a=a.sibling}function E0(t,n,a){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(bt,a)}catch{}switch(a.tag){case 26:un||Oi(a,n),aa(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:un||Oi(a,n);var s=Ke,u=kn;Ga(a.type)&&(Ke=a.stateNode,kn=!1),aa(t,n,a),Do(a.stateNode),Ke=s,kn=u;break;case 5:un||Oi(a,n);case 6:if(s=Ke,u=kn,Ke=null,aa(t,n,a),Ke=s,kn=u,Ke!==null)if(kn)try{(Ke.nodeType===9?Ke.body:Ke.nodeName==="HTML"?Ke.ownerDocument.body:Ke).removeChild(a.stateNode)}catch(f){Fe(a,n,f)}else try{Ke.removeChild(a.stateNode)}catch(f){Fe(a,n,f)}break;case 18:Ke!==null&&(kn?(t=Ke,gg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ms(t)):gg(Ke,a.stateNode));break;case 4:s=Ke,u=kn,Ke=a.stateNode.containerInfo,kn=!0,aa(t,n,a),Ke=s,kn=u;break;case 0:case 11:case 14:case 15:Oa(2,a,n),un||Oa(4,a,n),aa(t,n,a);break;case 1:un||(Oi(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&_0(a,n,s)),aa(t,n,a);break;case 21:aa(t,n,a);break;case 22:un=(s=un)||a.memoizedState!==null,aa(t,n,a),un=s;break;default:aa(t,n,a)}}function T0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ms(t)}catch(a){Fe(n,n.return,a)}}}function A0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ms(t)}catch(a){Fe(n,n.return,a)}}function qx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new y0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new y0),n;default:throw Error(r(435,t.tag))}}function kl(t,n){var a=qx(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var u=eS.bind(null,t,s);s.then(u,u)}})}function Xn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],f=t,g=n,T=g;t:for(;T!==null;){switch(T.tag){case 27:if(Ga(T.type)){Ke=T.stateNode,kn=!1;break t}break;case 5:Ke=T.stateNode,kn=!1;break t;case 3:case 4:Ke=T.stateNode.containerInfo,kn=!0;break t}T=T.return}if(Ke===null)throw Error(r(160));E0(f,g,u),Ke=null,kn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)R0(n,t),n=n.sibling}var Ei=null;function R0(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Xn(n,t),Wn(t),s&4&&(Oa(3,t,t.return),So(3,t),Oa(5,t,t.return));break;case 1:Xn(n,t),Wn(t),s&512&&(un||a===null||Oi(a,a.return)),s&64&&ia&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=Ei;if(Xn(n,t),Wn(t),s&512&&(un||a===null||Oi(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,u=u.ownerDocument||u;e:switch(s){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ir]||f[sn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(s),u.head.insertBefore(f,u.querySelector("head > title"))),Rn(f,s,a),f[sn]=t,R(f),s=f;break t;case"link":var g=Rg("link","href",u).get(s+(a.href||""));if(g){for(var T=0;T<g.length;T++)if(f=g[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(T,1);break e}}f=u.createElement(s),Rn(f,s,a),u.head.appendChild(f);break;case"meta":if(g=Rg("meta","content",u).get(s+(a.content||""))){for(T=0;T<g.length;T++)if(f=g[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(T,1);break e}}f=u.createElement(s),Rn(f,s,a),u.head.appendChild(f);break;default:throw Error(r(468,s))}f[sn]=t,R(f),s=f}t.stateNode=s}else Cg(u,t.type,t.stateNode);else t.stateNode=Ag(u,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Cg(u,t.type,t.stateNode):Ag(u,s,t.memoizedProps)):s===null&&t.stateNode!==null&&Af(t,t.memoizedProps,a.memoizedProps)}break;case 27:Xn(n,t),Wn(t),s&512&&(un||a===null||Oi(a,a.return)),a!==null&&s&4&&Af(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Xn(n,t),Wn(t),s&512&&(un||a===null||Oi(a,a.return)),t.flags&32){u=t.stateNode;try{hn(u,"")}catch(Vt){Fe(t,t.return,Vt)}}s&4&&t.stateNode!=null&&(u=t.memoizedProps,Af(t,u,a!==null?a.memoizedProps:u)),s&1024&&(wf=!0);break;case 6:if(Xn(n,t),Wn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(Vt){Fe(t,t.return,Vt)}}break;case 3:if(rc=null,u=Ei,Ei=ic(n.containerInfo),Xn(n,t),Ei=u,Wn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{ms(n.containerInfo)}catch(Vt){Fe(t,t.return,Vt)}wf&&(wf=!1,C0(t));break;case 4:s=Ei,Ei=ic(t.stateNode.containerInfo),Xn(n,t),Wn(t),Ei=s;break;case 12:Xn(n,t),Wn(t);break;case 31:Xn(n,t),Wn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,kl(t,s)));break;case 13:Xn(n,t),Wn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Wl=b()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,kl(t,s)));break;case 22:u=t.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,et=ia,dt=un;if(ia=et||u,un=dt||H,Xn(n,t),un=dt,ia=et,Wn(t),s&8192)t:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||ia||un||xr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(f=H.stateNode,u)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{T=H.stateNode;var _t=H.memoizedProps.style,at=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;T.style.display=at==null||typeof at=="boolean"?"":(""+at).trim()}}catch(Vt){Fe(H,H.return,Vt)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(Vt){Fe(H,H.return,Vt)}}}else if(n.tag===18){if(a===null){H=n;try{var ct=H.stateNode;u?_g(ct,!0):_g(H.stateNode,!1)}catch(Vt){Fe(H,H.return,Vt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,kl(t,a))));break;case 19:Xn(n,t),Wn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,kl(t,s)));break;case 30:break;case 21:break;default:Xn(n,t),Wn(t)}}function Wn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(x0(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=Rf(t);Vl(t,f,u);break;case 5:var g=a.stateNode;a.flags&32&&(hn(g,""),a.flags&=-33);var T=Rf(t);Vl(t,T,g);break;case 3:case 4:var H=a.stateNode.containerInfo,et=Rf(t);Cf(t,et,H);break;default:throw Error(r(161))}}catch(dt){Fe(t,t.return,dt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function C0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;C0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ra(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)M0(t,n.alternate,n),n=n.sibling}function xr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Oa(4,n,n.return),xr(n);break;case 1:Oi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&_0(n,n.return,a),xr(n);break;case 27:Do(n.stateNode);case 26:case 5:Oi(n,n.return),xr(n);break;case 22:n.memoizedState===null&&xr(n);break;case 30:xr(n);break;default:xr(n)}t=t.sibling}}function sa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=t,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:sa(u,f,a),So(4,f);break;case 1:if(sa(u,f,a),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(et){Fe(s,s.return,et)}if(s=f,u=s.updateQueue,u!==null){var T=s.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)rm(H[u],T)}catch(et){Fe(s,s.return,et)}}a&&g&64&&g0(f),yo(f,f.return);break;case 27:S0(f);case 26:case 5:sa(u,f,a),a&&s===null&&g&4&&v0(f),yo(f,f.return);break;case 12:sa(u,f,a);break;case 31:sa(u,f,a),a&&g&4&&T0(u,f);break;case 13:sa(u,f,a),a&&g&4&&A0(u,f);break;case 22:f.memoizedState===null&&sa(u,f,a),yo(f,f.return);break;case 30:break;default:sa(u,f,a)}n=n.sibling}}function Df(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&so(a))}function Uf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&so(t))}function Ti(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)w0(t,n,a,s),n=n.sibling}function w0(t,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ti(t,n,a,s),u&2048&&So(9,n);break;case 1:Ti(t,n,a,s);break;case 3:Ti(t,n,a,s),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&so(t)));break;case 12:if(u&2048){Ti(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,g=f.id,T=f.onPostCommit;typeof T=="function"&&T(g,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(H){Fe(n,n.return,H)}}else Ti(t,n,a,s);break;case 31:Ti(t,n,a,s);break;case 13:Ti(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?Ti(t,n,a,s):Mo(t,n):f._visibility&2?Ti(t,n,a,s):(f._visibility|=2,as(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Df(g,n);break;case 24:Ti(t,n,a,s),u&2048&&Uf(n.alternate,n);break;default:Ti(t,n,a,s)}}function as(t,n,a,s,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,g=n,T=a,H=s,et=g.flags;switch(g.tag){case 0:case 11:case 15:as(f,g,T,H,u),So(8,g);break;case 23:break;case 22:var dt=g.stateNode;g.memoizedState!==null?dt._visibility&2?as(f,g,T,H,u):Mo(f,g):(dt._visibility|=2,as(f,g,T,H,u)),u&&et&2048&&Df(g.alternate,g);break;case 24:as(f,g,T,H,u),u&&et&2048&&Uf(g.alternate,g);break;default:as(f,g,T,H,u)}n=n.sibling}}function Mo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,u=s.flags;switch(s.tag){case 22:Mo(a,s),u&2048&&Df(s.alternate,s);break;case 24:Mo(a,s),u&2048&&Uf(s.alternate,s);break;default:Mo(a,s)}n=n.sibling}}var bo=8192;function rs(t,n,a){if(t.subtreeFlags&bo)for(t=t.child;t!==null;)D0(t,n,a),t=t.sibling}function D0(t,n,a){switch(t.tag){case 26:rs(t,n,a),t.flags&bo&&t.memoizedState!==null&&NS(a,Ei,t.memoizedState,t.memoizedProps);break;case 5:rs(t,n,a);break;case 3:case 4:var s=Ei;Ei=ic(t.stateNode.containerInfo),rs(t,n,a),Ei=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=bo,bo=16777216,rs(t,n,a),bo=s):rs(t,n,a));break;default:rs(t,n,a)}}function U0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Eo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];gn=s,L0(s,t)}U0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)N0(t),t=t.sibling}function N0(t){switch(t.tag){case 0:case 11:case 15:Eo(t),t.flags&2048&&Oa(9,t,t.return);break;case 3:Eo(t);break;case 12:Eo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Xl(t)):Eo(t);break;default:Eo(t)}}function Xl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];gn=s,L0(s,t)}U0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Oa(8,n,n.return),Xl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Xl(n));break;default:Xl(n)}t=t.sibling}}function L0(t,n){for(;gn!==null;){var a=gn;switch(a.tag){case 0:case 11:case 15:Oa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:so(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,gn=s;else t:for(a=t;gn!==null;){s=gn;var u=s.sibling,f=s.return;if(b0(s),s===a){gn=null;break t}if(u!==null){u.return=f,gn=u;break t}gn=f}}}var Yx={getCacheForType:function(t){var n=Tn(on),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Tn(on).controller.signal}},jx=typeof WeakMap=="function"?WeakMap:Map,Ne=0,Xe=null,me=null,ve=0,Be=0,$n=null,Pa=!1,ss=!1,Nf=!1,oa=0,en=0,za=0,Sr=0,Lf=0,ti=0,os=0,To=null,qn=null,Of=!1,Wl=0,O0=0,ql=1/0,Yl=null,Ba=null,dn=0,Fa=null,ls=null,la=0,Pf=0,zf=null,P0=null,Ao=0,Bf=null;function ei(){return(Ne&2)!==0&&ve!==0?ve&-ve:z.T!==null?kf():qs()}function z0(){if(ti===0)if((ve&536870912)===0||Se){var t=Tt;Tt<<=1,(Tt&3932160)===0&&(Tt=262144),ti=t}else ti=536870912;return t=Qn.current,t!==null&&(t.flags|=32),ti}function Yn(t,n,a){(t===Xe&&(Be===2||Be===9)||t.cancelPendingCommit!==null)&&(cs(t,0),Ia(t,ve,ti,!1)),Dn(t,a),((Ne&2)===0||t!==Xe)&&(t===Xe&&((Ne&2)===0&&(Sr|=a),en===4&&Ia(t,ve,ti,!1)),Pi(t))}function B0(t,n,a){if((Ne&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Rt(t,n),u=s?Qx(t,n):If(t,n,!0),f=s;do{if(u===0){ss&&!s&&Ia(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Zx(a)){u=If(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var T=t;u=To;var H=T.current.memoizedState.isDehydrated;if(H&&(cs(T,g).flags|=256),g=If(T,g,!1),g!==2){if(Nf&&!H){T.errorRecoveryDisabledLanes|=f,Sr|=f,u=4;break t}f=qn,qn=u,f!==null&&(qn===null?qn=f:qn.push.apply(qn,f))}u=g}if(f=!1,u!==2)continue}}if(u===1){cs(t,0),Ia(t,n,0,!0);break}t:{switch(s=t,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ia(s,n,ti,!Pa);break t;case 2:qn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Wl+300-b(),10<u)){if(Ia(s,n,ti,!Pa),xt(s,0,!0)!==0)break t;la=n,s.timeoutHandle=pg(F0.bind(null,s,a,qn,Yl,Of,n,ti,Sr,os,Pa,f,"Throttled",-0,0),u);break t}F0(s,a,qn,Yl,Of,n,ti,Sr,os,Pa,f,null,-0,0)}}break}while(!0);Pi(t)}function F0(t,n,a,s,u,f,g,T,H,et,dt,_t,at,ct){if(t.timeoutHandle=-1,_t=n.subtreeFlags,_t&8192||(_t&16785408)===16785408){_t={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Yi},D0(n,f,_t);var Vt=(f&62914560)===f?Wl-b():(f&4194048)===f?O0-b():0;if(Vt=LS(_t,Vt),Vt!==null){la=f,t.cancelPendingCommit=Vt(q0.bind(null,t,n,f,a,s,u,g,T,H,dt,_t,null,at,ct)),Ia(t,f,g,!et);return}}q0(t,n,f,a,s,u,g,T,H)}function Zx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],f=u.getSnapshot;u=u.value;try{if(!Zn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ia(t,n,a,s){n&=~Lf,n&=~Sr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var u=n;0<u;){var f=31-Pt(u),g=1<<f;s[f]=-1,u&=~g}a!==0&&rl(t,a,n)}function jl(){return(Ne&6)===0?(Ro(0),!1):!0}function Ff(){if(me!==null){if(Be===0)var t=me.return;else t=me,Qi=fr=null,$u(t),$r=null,lo=0,t=me;for(;t!==null;)m0(t.alternate,t),t=t.return;me=null}}function cs(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,mS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),la=0,Ff(),Xe=t,me=a=Zi(t.current,null),ve=n,Be=0,$n=null,Pa=!1,ss=Rt(t,n),Nf=!1,os=ti=Lf=Sr=za=en=0,qn=To=null,Of=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var u=31-Pt(s),f=1<<u;n|=t[u],s&=~f}return oa=n,ml(),a}function I0(t,n){oe=null,z.H=_o,n===Jr||n===bl?(n=em(),Be=3):n===Gu?(n=em(),Be=4):Be=n===gf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,$n=n,me===null&&(en=1,Bl(t,li(n,t.current)))}function H0(){var t=Qn.current;return t===null?!0:(ve&4194048)===ve?hi===null:(ve&62914560)===ve||(ve&536870912)!==0?t===hi:!1}function G0(){var t=z.H;return z.H=_o,t===null?_o:t}function V0(){var t=z.A;return z.A=Yx,t}function Zl(){en=4,Pa||(ve&4194048)!==ve&&Qn.current!==null||(ss=!0),(za&134217727)===0&&(Sr&134217727)===0||Xe===null||Ia(Xe,ve,ti,!1)}function If(t,n,a){var s=Ne;Ne|=2;var u=G0(),f=V0();(Xe!==t||ve!==n)&&(Yl=null,cs(t,n)),n=!1;var g=en;t:do try{if(Be!==0&&me!==null){var T=me,H=$n;switch(Be){case 8:Ff(),g=6;break t;case 3:case 2:case 9:case 6:Qn.current===null&&(n=!0);var et=Be;if(Be=0,$n=null,us(t,T,H,et),a&&ss){g=0;break t}break;default:et=Be,Be=0,$n=null,us(t,T,H,et)}}Kx(),g=en;break}catch(dt){I0(t,dt)}while(!0);return n&&t.shellSuspendCounter++,Qi=fr=null,Ne=s,z.H=u,z.A=f,me===null&&(Xe=null,ve=0,ml()),g}function Kx(){for(;me!==null;)k0(me)}function Qx(t,n){var a=Ne;Ne|=2;var s=G0(),u=V0();Xe!==t||ve!==n?(Yl=null,ql=b()+500,cs(t,n)):ss=Rt(t,n);t:do try{if(Be!==0&&me!==null){n=me;var f=$n;e:switch(Be){case 1:Be=0,$n=null,us(t,n,f,1);break;case 2:case 9:if($p(f)){Be=0,$n=null,X0(n);break}n=function(){Be!==2&&Be!==9||Xe!==t||(Be=7),Pi(t)},f.then(n,n);break t;case 3:Be=7;break t;case 4:Be=5;break t;case 7:$p(f)?(Be=0,$n=null,X0(n)):(Be=0,$n=null,us(t,n,f,7));break;case 5:var g=null;switch(me.tag){case 26:g=me.memoizedState;case 5:case 27:var T=me;if(g?wg(g):T.stateNode.complete){Be=0,$n=null;var H=T.sibling;if(H!==null)me=H;else{var et=T.return;et!==null?(me=et,Kl(et)):me=null}break e}}Be=0,$n=null,us(t,n,f,5);break;case 6:Be=0,$n=null,us(t,n,f,6);break;case 8:Ff(),en=6;break t;default:throw Error(r(462))}}Jx();break}catch(dt){I0(t,dt)}while(!0);return Qi=fr=null,z.H=s,z.A=u,Ne=a,me!==null?0:(Xe=null,ve=0,ml(),en)}function Jx(){for(;me!==null&&!Yt();)k0(me)}function k0(t){var n=d0(t.alternate,t,oa);t.memoizedProps=t.pendingProps,n===null?Kl(t):me=n}function X0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=o0(a,n,n.pendingProps,n.type,void 0,ve);break;case 11:n=o0(a,n,n.pendingProps,n.type.render,n.ref,ve);break;case 5:$u(n);default:m0(a,n),n=me=Vp(n,oa),n=d0(a,n,oa)}t.memoizedProps=t.pendingProps,n===null?Kl(t):me=n}function us(t,n,a,s){Qi=fr=null,$u(n),$r=null,lo=0;var u=n.return;try{if(Hx(t,u,n,a,ve)){en=1,Bl(t,li(a,t.current)),me=null;return}}catch(f){if(u!==null)throw me=u,f;en=1,Bl(t,li(a,t.current)),me=null;return}n.flags&32768?(Se||s===1?t=!0:ss||(ve&536870912)!==0?t=!1:(Pa=t=!0,(s===2||s===9||s===3||s===6)&&(s=Qn.current,s!==null&&s.tag===13&&(s.flags|=16384))),W0(n,t)):Kl(n)}function Kl(t){var n=t;do{if((n.flags&32768)!==0){W0(n,Pa);return}t=n.return;var a=kx(n.alternate,n,oa);if(a!==null){me=a;return}if(n=n.sibling,n!==null){me=n;return}me=n=t}while(n!==null);en===0&&(en=5)}function W0(t,n){do{var a=Xx(t.alternate,t);if(a!==null){a.flags&=32767,me=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){me=t;return}me=t=a}while(t!==null);en=6,me=null}function q0(t,n,a,s,u,f,g,T,H){t.cancelPendingCommit=null;do Ql();while(dn!==0);if((Ne&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Au,Si(t,a,f,g,T,H),t===Xe&&(me=Xe=null,ve=0),ls=n,Fa=t,la=a,Pf=f,zf=u,P0=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,nS(ft,function(){return Q0(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=z.T,z.T=null,u=G.p,G.p=2,g=Ne,Ne|=4;try{Wx(t,n,a)}finally{Ne=g,G.p=u,z.T=s}}dn=1,Y0(),j0(),Z0()}}function Y0(){if(dn===1){dn=0;var t=Fa,n=ls,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var s=G.p;G.p=2;var u=Ne;Ne|=4;try{R0(n,t);var f=Qf,g=Lp(t.containerInfo),T=f.focusedElem,H=f.selectionRange;if(g!==T&&T&&T.ownerDocument&&Np(T.ownerDocument.documentElement,T)){if(H!==null&&yu(T)){var et=H.start,dt=H.end;if(dt===void 0&&(dt=et),"selectionStart"in T)T.selectionStart=et,T.selectionEnd=Math.min(dt,T.value.length);else{var _t=T.ownerDocument||document,at=_t&&_t.defaultView||window;if(at.getSelection){var ct=at.getSelection(),Vt=T.textContent.length,te=Math.min(H.start,Vt),Ve=H.end===void 0?te:Math.min(H.end,Vt);!ct.extend&&te>Ve&&(g=Ve,Ve=te,te=g);var j=Up(T,te),k=Up(T,Ve);if(j&&k&&(ct.rangeCount!==1||ct.anchorNode!==j.node||ct.anchorOffset!==j.offset||ct.focusNode!==k.node||ct.focusOffset!==k.offset)){var $=_t.createRange();$.setStart(j.node,j.offset),ct.removeAllRanges(),te>Ve?(ct.addRange($),ct.extend(k.node,k.offset)):($.setEnd(k.node,k.offset),ct.addRange($))}}}}for(_t=[],ct=T;ct=ct.parentNode;)ct.nodeType===1&&_t.push({element:ct,left:ct.scrollLeft,top:ct.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<_t.length;T++){var gt=_t[T];gt.element.scrollLeft=gt.left,gt.element.scrollTop=gt.top}}cc=!!Kf,Qf=Kf=null}finally{Ne=u,G.p=s,z.T=a}}t.current=n,dn=2}}function j0(){if(dn===2){dn=0;var t=Fa,n=ls,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var s=G.p;G.p=2;var u=Ne;Ne|=4;try{M0(t,n.alternate,n)}finally{Ne=u,G.p=s,z.T=a}}dn=3}}function Z0(){if(dn===4||dn===3){dn=0,L();var t=Fa,n=ls,a=la,s=P0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?dn=5:(dn=0,ls=Fa=null,K0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Ba=null),Pr(a),n=n.stateNode,Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(bt,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=z.T,u=G.p,G.p=2,z.T=null;try{for(var f=t.onRecoverableError,g=0;g<s.length;g++){var T=s[g];f(T.value,{componentStack:T.stack})}}finally{z.T=n,G.p=u}}(la&3)!==0&&Ql(),Pi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Bf?Ao++:(Ao=0,Bf=t):Ao=0,Ro(0)}}function K0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,so(n)))}function Ql(){return Y0(),j0(),Z0(),Q0()}function Q0(){if(dn!==5)return!1;var t=Fa,n=Pf;Pf=0;var a=Pr(la),s=z.T,u=G.p;try{G.p=32>a?32:a,z.T=null,a=zf,zf=null;var f=Fa,g=la;if(dn=0,ls=Fa=null,la=0,(Ne&6)!==0)throw Error(r(331));var T=Ne;if(Ne|=4,N0(f.current),w0(f,f.current,g,a),Ne=T,Ro(0,!1),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(bt,f)}catch{}return!0}finally{G.p=u,z.T=s,K0(t,n)}}function J0(t,n,a){n=li(a,n),n=mf(t.stateNode,n,2),t=Ua(t,n,2),t!==null&&(Dn(t,2),Pi(t))}function Fe(t,n,a){if(t.tag===3)J0(t,t,a);else for(;n!==null;){if(n.tag===3){J0(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ba===null||!Ba.has(s))){t=li(a,t),a=$m(2),s=Ua(n,a,2),s!==null&&(t0(a,s,n,t),Dn(s,2),Pi(s));break}}n=n.return}}function Hf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new jx;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(Nf=!0,u.add(a),t=$x.bind(null,t,n,a),n.then(t,t))}function $x(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Xe===t&&(ve&a)===a&&(en===4||en===3&&(ve&62914560)===ve&&300>b()-Wl?(Ne&2)===0&&cs(t,0):Lf|=a,os===ve&&(os=0)),Pi(t)}function $0(t,n){n===0&&(n=Pe()),t=lr(t,n),t!==null&&(Dn(t,n),Pi(t))}function tS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),$0(t,a)}function eS(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),$0(t,a)}function nS(t,n){return Me(t,n)}var Jl=null,fs=null,Gf=!1,$l=!1,Vf=!1,Ha=0;function Pi(t){t!==fs&&t.next===null&&(fs===null?Jl=fs=t:fs=fs.next=t),$l=!0,Gf||(Gf=!0,aS())}function Ro(t,n){if(!Vf&&$l){Vf=!0;do for(var a=!1,s=Jl;s!==null;){if(t!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var g=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-Pt(42|t)+1)-1,f&=u&~(g&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,ig(s,f))}else f=ve,f=xt(s,s===Xe?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Rt(s,f)||(a=!0,ig(s,f));s=s.next}while(a);Vf=!1}}function iS(){tg()}function tg(){$l=Gf=!1;var t=0;Ha!==0&&pS()&&(t=Ha);for(var n=b(),a=null,s=Jl;s!==null;){var u=s.next,f=eg(s,n);f===0?(s.next=null,a===null?Jl=u:a.next=u,u===null&&(fs=a)):(a=s,(t!==0||(f&3)!==0)&&($l=!0)),s=u}dn!==0&&dn!==5||Ro(t),Ha!==0&&(Ha=0)}function eg(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var g=31-Pt(f),T=1<<g,H=u[g];H===-1?((T&a)===0||(T&s)!==0)&&(u[g]=ne(T,n)):H<=n&&(t.expiredLanes|=T),f&=~T}if(n=Xe,a=ve,a=xt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Be===2||Be===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Le(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Rt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&Le(s),Pr(a)){case 2:case 8:a=St;break;case 32:a=ft;break;case 268435456:a=Ct;break;default:a=ft}return s=ng.bind(null,t),a=Me(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&Le(s),t.callbackPriority=2,t.callbackNode=null,2}function ng(t,n){if(dn!==0&&dn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Ql()&&t.callbackNode!==a)return null;var s=ve;return s=xt(t,t===Xe?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(B0(t,s,n),eg(t,b()),t.callbackNode!=null&&t.callbackNode===a?ng.bind(null,t):null)}function ig(t,n){if(Ql())return null;B0(t,n,!0)}function aS(){gS(function(){(Ne&6)!==0?Me(pt,iS):tg()})}function kf(){if(Ha===0){var t=Kr;t===0&&(t=Nt,Nt<<=1,(Nt&261888)===0&&(Nt=256)),Ha=t}return Ha}function ag(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ol(""+t)}function rg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function rS(t,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var f=ag((u[vn]||null).action),g=s.submitter;g&&(n=(n=g[vn]||null)?ag(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var T=new fl("action","action",null,s,u);t.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Ha!==0){var H=g?rg(u,g):new FormData(u);cf(a,{pending:!0,data:H,method:u.method,action:f},null,H)}}else typeof f=="function"&&(T.preventDefault(),H=g?rg(u,g):new FormData(u),cf(a,{pending:!0,data:H,method:u.method,action:f},f,H))},currentTarget:u}]})}}for(var Xf=0;Xf<Tu.length;Xf++){var Wf=Tu[Xf],sS=Wf.toLowerCase(),oS=Wf[0].toUpperCase()+Wf.slice(1);bi(sS,"on"+oS)}bi(zp,"onAnimationEnd"),bi(Bp,"onAnimationIteration"),bi(Fp,"onAnimationStart"),bi("dblclick","onDoubleClick"),bi("focusin","onFocus"),bi("focusout","onBlur"),bi(bx,"onTransitionRun"),bi(Ex,"onTransitionStart"),bi(Tx,"onTransitionCancel"),bi(Ip,"onTransitionEnd"),J("onMouseEnter",["mouseout","mouseover"]),J("onMouseLeave",["mouseout","mouseover"]),J("onPointerEnter",["pointerout","pointerover"]),J("onPointerLeave",["pointerout","pointerover"]),it("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),it("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),it("onBeforeInput",["compositionend","keypress","textInput","paste"]),it("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),it("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),it("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Co));function sg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],u=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var g=s.length-1;0<=g;g--){var T=s[g],H=T.instance,et=T.currentTarget;if(T=T.listener,H!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=et;try{f(u)}catch(dt){pl(dt)}u.currentTarget=null,f=H}else for(g=0;g<s.length;g++){if(T=s[g],H=T.instance,et=T.currentTarget,T=T.listener,H!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=et;try{f(u)}catch(dt){pl(dt)}u.currentTarget=null,f=H}}}}function ge(t,n){var a=n[zr];a===void 0&&(a=n[zr]=new Set);var s=t+"__bubble";a.has(s)||(og(n,t,2,!1),a.add(s))}function qf(t,n,a){var s=0;n&&(s|=4),og(a,t,s,n)}var tc="_reactListening"+Math.random().toString(36).slice(2);function Yf(t){if(!t[tc]){t[tc]=!0,Y.forEach(function(a){a!=="selectionchange"&&(lS.has(a)||qf(a,!1,t),qf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[tc]||(n[tc]=!0,qf("selectionchange",!1,n))}}function og(t,n,a,s){switch(zg(n)){case 2:var u=zS;break;case 8:u=BS;break;default:u=lh}a=u.bind(null,n,a,t),u=void 0,!hu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function jf(t,n,a,s,u){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var g=s.tag;if(g===3||g===4){var T=s.stateNode.containerInfo;if(T===u)break;if(g===4)for(g=s.return;g!==null;){var H=g.tag;if((H===3||H===4)&&g.stateNode.containerInfo===u)return;g=g.return}for(;T!==null;){if(g=ya(T),g===null)return;if(H=g.tag,H===5||H===6||H===26||H===27){s=f=g;continue t}T=T.parentNode}}s=s.return}hp(function(){var et=f,dt=uu(a),_t=[];t:{var at=Hp.get(t);if(at!==void 0){var ct=fl,Vt=t;switch(t){case"keypress":if(cl(a)===0)break t;case"keydown":case"keyup":ct=ex;break;case"focusin":Vt="focus",ct=gu;break;case"focusout":Vt="blur",ct=gu;break;case"beforeblur":case"afterblur":ct=gu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=mp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=kv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=ax;break;case zp:case Bp:case Fp:ct=qv;break;case Ip:ct=sx;break;case"scroll":case"scrollend":ct=Gv;break;case"wheel":ct=lx;break;case"copy":case"cut":case"paste":ct=jv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=_p;break;case"toggle":case"beforetoggle":ct=ux}var te=(n&4)!==0,Ve=!te&&(t==="scroll"||t==="scrollend"),j=te?at!==null?at+"Capture":null:at;te=[];for(var k=et,$;k!==null;){var gt=k;if($=gt.stateNode,gt=gt.tag,gt!==5&&gt!==26&&gt!==27||$===null||j===null||(gt=Zs(k,j),gt!=null&&te.push(wo(k,gt,$))),Ve)break;k=k.return}0<te.length&&(at=new ct(at,Vt,null,a,dt),_t.push({event:at,listeners:te}))}}if((n&7)===0){t:{if(at=t==="mouseover"||t==="pointerover",ct=t==="mouseout"||t==="pointerout",at&&a!==cu&&(Vt=a.relatedTarget||a.fromElement)&&(ya(Vt)||Vt[yi]))break t;if((ct||at)&&(at=dt.window===dt?dt:(at=dt.ownerDocument)?at.defaultView||at.parentWindow:window,ct?(Vt=a.relatedTarget||a.toElement,ct=et,Vt=Vt?ya(Vt):null,Vt!==null&&(Ve=c(Vt),te=Vt.tag,Vt!==Ve||te!==5&&te!==27&&te!==6)&&(Vt=null)):(ct=null,Vt=et),ct!==Vt)){if(te=mp,gt="onMouseLeave",j="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(te=_p,gt="onPointerLeave",j="onPointerEnter",k="pointer"),Ve=ct==null?at:ar(ct),$=Vt==null?at:ar(Vt),at=new te(gt,k+"leave",ct,a,dt),at.target=Ve,at.relatedTarget=$,gt=null,ya(dt)===et&&(te=new te(j,k+"enter",Vt,a,dt),te.target=$,te.relatedTarget=Ve,gt=te),Ve=gt,ct&&Vt)e:{for(te=cS,j=ct,k=Vt,$=0,gt=j;gt;gt=te(gt))$++;gt=0;for(var Qt=k;Qt;Qt=te(Qt))gt++;for(;0<$-gt;)j=te(j),$--;for(;0<gt-$;)k=te(k),gt--;for(;$--;){if(j===k||k!==null&&j===k.alternate){te=j;break e}j=te(j),k=te(k)}te=null}else te=null;ct!==null&&lg(_t,at,ct,te,!1),Vt!==null&&Ve!==null&&lg(_t,Ve,Vt,te,!0)}}t:{if(at=et?ar(et):window,ct=at.nodeName&&at.nodeName.toLowerCase(),ct==="select"||ct==="input"&&at.type==="file")var Ae=Tp;else if(bp(at))if(Ap)Ae=Sx;else{Ae=vx;var jt=_x}else ct=at.nodeName,!ct||ct.toLowerCase()!=="input"||at.type!=="checkbox"&&at.type!=="radio"?et&&Mi(et.elementType)&&(Ae=Tp):Ae=xx;if(Ae&&(Ae=Ae(t,et))){Ep(_t,Ae,a,dt);break t}jt&&jt(t,at,et),t==="focusout"&&et&&at.type==="number"&&et.memoizedProps.value!=null&&Sn(at,"number",at.value)}switch(jt=et?ar(et):window,t){case"focusin":(bp(jt)||jt.contentEditable==="true")&&(Vr=jt,Mu=et,io=null);break;case"focusout":io=Mu=Vr=null;break;case"mousedown":bu=!0;break;case"contextmenu":case"mouseup":case"dragend":bu=!1,Op(_t,a,dt);break;case"selectionchange":if(Mx)break;case"keydown":case"keyup":Op(_t,a,dt)}var ce;if(vu)t:{switch(t){case"compositionstart":var xe="onCompositionStart";break t;case"compositionend":xe="onCompositionEnd";break t;case"compositionupdate":xe="onCompositionUpdate";break t}xe=void 0}else Gr?yp(t,a)&&(xe="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(xe="onCompositionStart");xe&&(vp&&a.locale!=="ko"&&(Gr||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&Gr&&(ce=dp()):(Ea=dt,du="value"in Ea?Ea.value:Ea.textContent,Gr=!0)),jt=ec(et,xe),0<jt.length&&(xe=new gp(xe,t,null,a,dt),_t.push({event:xe,listeners:jt}),ce?xe.data=ce:(ce=Mp(a),ce!==null&&(xe.data=ce)))),(ce=hx?dx(t,a):px(t,a))&&(xe=ec(et,"onBeforeInput"),0<xe.length&&(jt=new gp("onBeforeInput","beforeinput",null,a,dt),_t.push({event:jt,listeners:xe}),jt.data=ce)),rS(_t,t,et,a,dt)}sg(_t,n)})}function wo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function ec(t,n){for(var a=n+"Capture",s=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Zs(t,a),u!=null&&s.unshift(wo(t,u,f)),u=Zs(t,n),u!=null&&s.push(wo(t,u,f))),t.tag===3)return s;t=t.return}return[]}function cS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function lg(t,n,a,s,u){for(var f=n._reactName,g=[];a!==null&&a!==s;){var T=a,H=T.alternate,et=T.stateNode;if(T=T.tag,H!==null&&H===s)break;T!==5&&T!==26&&T!==27||et===null||(H=et,u?(et=Zs(a,f),et!=null&&g.unshift(wo(a,et,H))):u||(et=Zs(a,f),et!=null&&g.push(wo(a,et,H)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var uS=/\r\n?/g,fS=/\u0000|\uFFFD/g;function cg(t){return(typeof t=="string"?t:""+t).replace(uS,`
`).replace(fS,"")}function ug(t,n){return n=cg(n),cg(t)===n}function Ge(t,n,a,s,u,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||hn(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&hn(t,""+s);break;case"className":Jt(t,"class",s);break;case"tabIndex":Jt(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Jt(t,a,s);break;case"style":Fr(t,s,f);break;case"data":if(n!=="object"){Jt(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=ol(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ge(t,n,"name",u.name,u,null),Ge(t,n,"formEncType",u.formEncType,u,null),Ge(t,n,"formMethod",u.formMethod,u,null),Ge(t,n,"formTarget",u.formTarget,u,null)):(Ge(t,n,"encType",u.encType,u,null),Ge(t,n,"method",u.method,u,null),Ge(t,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=ol(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Yi);break;case"onScroll":s!=null&&ge("scroll",t);break;case"onScrollEnd":s!=null&&ge("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=ol(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":ge("beforetoggle",t),ge("toggle",t),Wt(t,"popover",s);break;case"xlinkActuate":qt(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":qt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":qt(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":qt(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":qt(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":qt(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":qt(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":qt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":qt(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Wt(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Iv.get(a)||a,Wt(t,a,s))}}function Zf(t,n,a,s,u,f){switch(a){case"style":Fr(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?hn(t,s):(typeof s=="number"||typeof s=="bigint")&&hn(t,""+s);break;case"onScroll":s!=null&&ge("scroll",t);break;case"onScrollEnd":s!=null&&ge("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Yi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ot.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[vn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,u);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):Wt(t,a,s)}}}function Rn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",t),ge("load",t);var s=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ge(t,n,f,g,a,null)}}u&&Ge(t,n,"srcSet",a.srcSet,a,null),s&&Ge(t,n,"src",a.src,a,null);return;case"input":ge("invalid",t);var T=f=g=u=null,H=null,et=null;for(s in a)if(a.hasOwnProperty(s)){var dt=a[s];if(dt!=null)switch(s){case"name":u=dt;break;case"type":g=dt;break;case"checked":H=dt;break;case"defaultChecked":et=dt;break;case"value":f=dt;break;case"defaultValue":T=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(r(137,n));break;default:Ge(t,n,s,dt,a,null)}}qi(t,f,T,H,et,g,u,!1);return;case"select":ge("invalid",t),s=g=f=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":g=T;break;case"multiple":s=T;default:Ge(t,n,u,T,a,null)}n=f,a=g,t.multiple=!!s,n!=null?si(t,!!s,n,!1):a!=null&&si(t,!!s,a,!0);return;case"textarea":ge("invalid",t),f=u=s=null;for(g in a)if(a.hasOwnProperty(g)&&(T=a[g],T!=null))switch(g){case"value":s=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Ge(t,n,g,T,a,null)}yn(t,s,u,f);return;case"option":for(H in a)a.hasOwnProperty(H)&&(s=a[H],s!=null)&&(H==="selected"?t.selected=s&&typeof s!="function"&&typeof s!="symbol":Ge(t,n,H,s,a,null));return;case"dialog":ge("beforetoggle",t),ge("toggle",t),ge("cancel",t),ge("close",t);break;case"iframe":case"object":ge("load",t);break;case"video":case"audio":for(s=0;s<Co.length;s++)ge(Co[s],t);break;case"image":ge("error",t),ge("load",t);break;case"details":ge("toggle",t);break;case"embed":case"source":case"link":ge("error",t),ge("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in a)if(a.hasOwnProperty(et)&&(s=a[et],s!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ge(t,n,et,s,a,null)}return;default:if(Mi(n)){for(dt in a)a.hasOwnProperty(dt)&&(s=a[dt],s!==void 0&&Zf(t,n,dt,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&Ge(t,n,T,s,a,null))}function hS(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,g=null,T=null,H=null,et=null,dt=null;for(ct in a){var _t=a[ct];if(a.hasOwnProperty(ct)&&_t!=null)switch(ct){case"checked":break;case"value":break;case"defaultValue":H=_t;default:s.hasOwnProperty(ct)||Ge(t,n,ct,null,s,_t)}}for(var at in s){var ct=s[at];if(_t=a[at],s.hasOwnProperty(at)&&(ct!=null||_t!=null))switch(at){case"type":f=ct;break;case"name":u=ct;break;case"checked":et=ct;break;case"defaultChecked":dt=ct;break;case"value":g=ct;break;case"defaultValue":T=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(r(137,n));break;default:ct!==_t&&Ge(t,n,at,ct,s,_t)}}xn(t,g,T,H,et,dt,f,u);return;case"select":ct=g=T=at=null;for(f in a)if(H=a[f],a.hasOwnProperty(f)&&H!=null)switch(f){case"value":break;case"multiple":ct=H;default:s.hasOwnProperty(f)||Ge(t,n,f,null,s,H)}for(u in s)if(f=s[u],H=a[u],s.hasOwnProperty(u)&&(f!=null||H!=null))switch(u){case"value":at=f;break;case"defaultValue":T=f;break;case"multiple":g=f;default:f!==H&&Ge(t,n,u,f,s,H)}n=T,a=g,s=ct,at!=null?si(t,!!a,at,!1):!!s!=!!a&&(n!=null?si(t,!!a,n,!0):si(t,!!a,a?[]:"",!1));return;case"textarea":ct=at=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ge(t,n,T,null,s,u)}for(g in s)if(u=s[g],f=a[g],s.hasOwnProperty(g)&&(u!=null||f!=null))switch(g){case"value":at=u;break;case"defaultValue":ct=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Ge(t,n,g,u,s,f)}ze(t,at,ct);return;case"option":for(var Vt in a)at=a[Vt],a.hasOwnProperty(Vt)&&at!=null&&!s.hasOwnProperty(Vt)&&(Vt==="selected"?t.selected=!1:Ge(t,n,Vt,null,s,at));for(H in s)at=s[H],ct=a[H],s.hasOwnProperty(H)&&at!==ct&&(at!=null||ct!=null)&&(H==="selected"?t.selected=at&&typeof at!="function"&&typeof at!="symbol":Ge(t,n,H,at,s,ct));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)at=a[te],a.hasOwnProperty(te)&&at!=null&&!s.hasOwnProperty(te)&&Ge(t,n,te,null,s,at);for(et in s)if(at=s[et],ct=a[et],s.hasOwnProperty(et)&&at!==ct&&(at!=null||ct!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(r(137,n));break;default:Ge(t,n,et,at,s,ct)}return;default:if(Mi(n)){for(var Ve in a)at=a[Ve],a.hasOwnProperty(Ve)&&at!==void 0&&!s.hasOwnProperty(Ve)&&Zf(t,n,Ve,void 0,s,at);for(dt in s)at=s[dt],ct=a[dt],!s.hasOwnProperty(dt)||at===ct||at===void 0&&ct===void 0||Zf(t,n,dt,at,s,ct);return}}for(var j in a)at=a[j],a.hasOwnProperty(j)&&at!=null&&!s.hasOwnProperty(j)&&Ge(t,n,j,null,s,at);for(_t in s)at=s[_t],ct=a[_t],!s.hasOwnProperty(_t)||at===ct||at==null&&ct==null||Ge(t,n,_t,at,s,ct)}function fg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function dS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var u=a[s],f=u.transferSize,g=u.initiatorType,T=u.duration;if(f&&T&&fg(g)){for(g=0,T=u.responseEnd,s+=1;s<a.length;s++){var H=a[s],et=H.startTime;if(et>T)break;var dt=H.transferSize,_t=H.initiatorType;dt&&fg(_t)&&(H=H.responseEnd,g+=dt*(H<T?1:(T-et)/(H-et)))}if(--s,n+=8*(f+g)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Kf=null,Qf=null;function nc(t){return t.nodeType===9?t:t.ownerDocument}function hg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function dg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Jf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var $f=null;function pS(){var t=window.event;return t&&t.type==="popstate"?t===$f?!1:($f=t,!0):($f=null,!1)}var pg=typeof setTimeout=="function"?setTimeout:void 0,mS=typeof clearTimeout=="function"?clearTimeout:void 0,mg=typeof Promise=="function"?Promise:void 0,gS=typeof queueMicrotask=="function"?queueMicrotask:typeof mg<"u"?function(t){return mg.resolve(null).then(t).catch(_S)}:pg;function _S(t){setTimeout(function(){throw t})}function Ga(t){return t==="head"}function gg(t,n){var a=n,s=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(u),ms(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")Do(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Do(a);for(var f=a.firstChild;f;){var g=f.nextSibling,T=f.nodeName;f[ir]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&Do(t.ownerDocument.body);a=u}while(a);ms(n)}function _g(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function th(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":th(a),js(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function vS(t,n,a,s){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[ir])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=di(t.nextSibling),t===null)break}return null}function xS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=di(t.nextSibling),t===null))return null;return t}function vg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=di(t.nextSibling),t===null))return null;return t}function eh(t){return t.data==="$?"||t.data==="$~"}function nh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function SS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function di(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var ih=null;function xg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return di(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Sg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function yg(t,n,a){switch(n=nc(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Do(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);js(t)}var pi=new Map,Mg=new Set;function ic(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ca=G.d;G.d={f:yS,r:MS,D:bS,C:ES,L:TS,m:AS,X:CS,S:RS,M:wS};function yS(){var t=ca.f(),n=jl();return t||n}function MS(t){var n=Ma(t);n!==null&&n.tag===5&&n.type==="form"?Im(n):ca.r(t)}var hs=typeof document>"u"?null:document;function bg(t,n,a){var s=hs;if(s&&typeof n=="string"&&n){var u=ae(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Mg.has(u)||(Mg.add(u),t={rel:t,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),Rn(n,"link",t),R(n),s.head.appendChild(n)))}}function bS(t){ca.D(t),bg("dns-prefetch",t,null)}function ES(t,n){ca.C(t,n),bg("preconnect",t,n)}function TS(t,n,a){ca.L(t,n,a);var s=hs;if(s&&t&&n){var u='link[rel="preload"][as="'+ae(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ae(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ae(a.imageSizes)+'"]')):u+='[href="'+ae(t)+'"]';var f=u;switch(n){case"style":f=ds(t);break;case"script":f=ps(t)}pi.has(f)||(t=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),pi.set(f,t),s.querySelector(u)!==null||n==="style"&&s.querySelector(Uo(f))||n==="script"&&s.querySelector(No(f))||(n=s.createElement("link"),Rn(n,"link",t),R(n),s.head.appendChild(n)))}}function AS(t,n){ca.m(t,n);var a=hs;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ae(s)+'"][href="'+ae(t)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ps(t)}if(!pi.has(f)&&(t=_({rel:"modulepreload",href:t},n),pi.set(f,t),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(No(f)))return}s=a.createElement("link"),Rn(s,"link",t),R(s),a.head.appendChild(s)}}}function RS(t,n,a){ca.S(t,n,a);var s=hs;if(s&&t){var u=ba(s).hoistableStyles,f=ds(t);n=n||"default";var g=u.get(f);if(!g){var T={loading:0,preload:null};if(g=s.querySelector(Uo(f)))T.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},a),(a=pi.get(f))&&ah(t,a);var H=g=s.createElement("link");R(H),Rn(H,"link",t),H._p=new Promise(function(et,dt){H.onload=et,H.onerror=dt}),H.addEventListener("load",function(){T.loading|=1}),H.addEventListener("error",function(){T.loading|=2}),T.loading|=4,ac(g,n,s)}g={type:"stylesheet",instance:g,count:1,state:T},u.set(f,g)}}}function CS(t,n){ca.X(t,n);var a=hs;if(a&&t){var s=ba(a).hoistableScripts,u=ps(t),f=s.get(u);f||(f=a.querySelector(No(u)),f||(t=_({src:t,async:!0},n),(n=pi.get(u))&&rh(t,n),f=a.createElement("script"),R(f),Rn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function wS(t,n){ca.M(t,n);var a=hs;if(a&&t){var s=ba(a).hoistableScripts,u=ps(t),f=s.get(u);f||(f=a.querySelector(No(u)),f||(t=_({src:t,async:!0,type:"module"},n),(n=pi.get(u))&&rh(t,n),f=a.createElement("script"),R(f),Rn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function Eg(t,n,a,s){var u=(u=rt.current)?ic(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ds(a.href),a=ba(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=ds(a.href);var f=ba(u).hoistableStyles,g=f.get(t);if(g||(u=u.ownerDocument||u,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,g),(f=u.querySelector(Uo(t)))&&!f._p&&(g.instance=f,g.state.loading=5),pi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},pi.set(t,a),f||DS(u,t,a,g.state))),n&&s===null)throw Error(r(528,""));return g}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ps(a),a=ba(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function ds(t){return'href="'+ae(t)+'"'}function Uo(t){return'link[rel="stylesheet"]['+t+"]"}function Tg(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function DS(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Rn(n,"link",a),R(n),t.head.appendChild(n))}function ps(t){return'[src="'+ae(t)+'"]'}function No(t){return"script[async]"+t}function Ag(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+ae(a.href)+'"]');if(s)return n.instance=s,R(s),s;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),R(s),Rn(s,"style",u),ac(s,a.precedence,t),n.instance=s;case"stylesheet":u=ds(a.href);var f=t.querySelector(Uo(u));if(f)return n.state.loading|=4,n.instance=f,R(f),f;s=Tg(a),(u=pi.get(u))&&ah(s,u),f=(t.ownerDocument||t).createElement("link"),R(f);var g=f;return g._p=new Promise(function(T,H){g.onload=T,g.onerror=H}),Rn(f,"link",s),n.state.loading|=4,ac(f,a.precedence,t),n.instance=f;case"script":return f=ps(a.src),(u=t.querySelector(No(f)))?(n.instance=u,R(u),u):(s=a,(u=pi.get(f))&&(s=_({},a),rh(s,u)),t=t.ownerDocument||t,u=t.createElement("script"),R(u),Rn(u,"link",s),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,ac(s,a.precedence,t));return n.instance}function ac(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,g=0;g<s.length;g++){var T=s[g];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function ah(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function rh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var rc=null;function Rg(t,n,a){if(rc===null){var s=new Map,u=rc=new Map;u.set(a,s)}else u=rc,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[ir]||f[sn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=t+g;var T=s.get(g);T?T.push(f):s.set(g,[f])}}return s}function Cg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function US(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function wg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function NS(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=ds(s.href),f=n.querySelector(Uo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=sc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,R(f);return}f=n.ownerDocument||n,s=Tg(s),(u=pi.get(u))&&ah(s,u),f=f.createElement("link"),R(f);var g=f;g._p=new Promise(function(T,H){g.onload=T,g.onerror=H}),Rn(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=sc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var sh=0;function LS(t,n){return t.stylesheets&&t.count===0&&lc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&lc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&sh===0&&(sh=62500*dS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&lc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>sh?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function sc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)lc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var oc=null;function lc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,oc=new Map,n.forEach(OS,t),oc=null,sc.call(t))}function OS(t,n){if(!(n.state.loading&4)){var a=oc.get(t);if(a)var s=a.get(null);else{a=new Map,oc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var g=u[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),s=g)}s&&a.set(null,s)}u=n.instance,g=u.getAttribute("data-precedence"),f=a.get(g)||s,f===s&&a.set(null,u),a.set(g,u),this.count++,s=sc.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Lo={$$typeof:U,Provider:null,Consumer:null,_currentValue:tt,_currentValue2:tt,_threadCount:0};function PS(t,n,a,s,u,f,g,T,H){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ee(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ee(0),this.hiddenUpdates=Ee(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function Dg(t,n,a,s,u,f,g,T,H,et,dt,_t){return t=new PS(t,n,a,g,H,et,dt,_t,T),n=1,f===!0&&(n|=24),f=Kn(3,null,null,n),t.current=f,f.stateNode=t,n=Fu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Vu(f),t}function Ug(t){return t?(t=Wr,t):Wr}function Ng(t,n,a,s,u,f){u=Ug(u),s.context===null?s.context=u:s.pendingContext=u,s=Da(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=Ua(t,s,n),a!==null&&(Yn(a,t,n),uo(a,t,n))}function Lg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function oh(t,n){Lg(t,n),(t=t.alternate)&&Lg(t,n)}function Og(t){if(t.tag===13||t.tag===31){var n=lr(t,67108864);n!==null&&Yn(n,t,67108864),oh(t,67108864)}}function Pg(t){if(t.tag===13||t.tag===31){var n=ei();n=Ws(n);var a=lr(t,n);a!==null&&Yn(a,t,n),oh(t,n)}}var cc=!0;function zS(t,n,a,s){var u=z.T;z.T=null;var f=G.p;try{G.p=2,lh(t,n,a,s)}finally{G.p=f,z.T=u}}function BS(t,n,a,s){var u=z.T;z.T=null;var f=G.p;try{G.p=8,lh(t,n,a,s)}finally{G.p=f,z.T=u}}function lh(t,n,a,s){if(cc){var u=ch(s);if(u===null)jf(t,n,s,uc,a),Bg(t,s);else if(IS(u,t,n,a,s))s.stopPropagation();else if(Bg(t,s),n&4&&-1<FS.indexOf(t)){for(;u!==null;){var f=Ma(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=Mt(f.pendingLanes);if(g!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;g;){var H=1<<31-Pt(g);T.entanglements[1]|=H,g&=~H}Pi(f),(Ne&6)===0&&(ql=b()+500,Ro(0))}}break;case 31:case 13:T=lr(f,2),T!==null&&Yn(T,f,2),jl(),oh(f,2)}if(f=ch(s),f===null&&jf(t,n,s,uc,a),f===u)break;u=f}u!==null&&s.stopPropagation()}else jf(t,n,s,null,a)}}function ch(t){return t=uu(t),uh(t)}var uc=null;function uh(t){if(uc=null,t=ya(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return uc=t,null}function zg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(W()){case pt:return 2;case St:return 8;case ft:case Zt:return 32;case Ct:return 268435456;default:return 32}default:return 32}}var fh=!1,Va=null,ka=null,Xa=null,Oo=new Map,Po=new Map,Wa=[],FS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Bg(t,n){switch(t){case"focusin":case"focusout":Va=null;break;case"dragenter":case"dragleave":ka=null;break;case"mouseover":case"mouseout":Xa=null;break;case"pointerover":case"pointerout":Oo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Po.delete(n.pointerId)}}function zo(t,n,a,s,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ma(n),n!==null&&Og(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function IS(t,n,a,s,u){switch(n){case"focusin":return Va=zo(Va,t,n,a,s,u),!0;case"dragenter":return ka=zo(ka,t,n,a,s,u),!0;case"mouseover":return Xa=zo(Xa,t,n,a,s,u),!0;case"pointerover":var f=u.pointerId;return Oo.set(f,zo(Oo.get(f)||null,t,n,a,s,u)),!0;case"gotpointercapture":return f=u.pointerId,Po.set(f,zo(Po.get(f)||null,t,n,a,s,u)),!0}return!1}function Fg(t){var n=ya(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Ui(t.priority,function(){Pg(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Ui(t.priority,function(){Pg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=ch(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);cu=s,a.target.dispatchEvent(s),cu=null}else return n=Ma(a),n!==null&&Og(n),t.blockedOn=a,!1;n.shift()}return!0}function Ig(t,n,a){fc(t)&&a.delete(n)}function HS(){fh=!1,Va!==null&&fc(Va)&&(Va=null),ka!==null&&fc(ka)&&(ka=null),Xa!==null&&fc(Xa)&&(Xa=null),Oo.forEach(Ig),Po.forEach(Ig)}function hc(t,n){t.blockedOn===n&&(t.blockedOn=null,fh||(fh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,HS)))}var dc=null;function Hg(t){dc!==t&&(dc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){dc===t&&(dc=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],u=t[n+2];if(typeof s!="function"){if(uh(s||a)===null)continue;break}var f=Ma(a);f!==null&&(t.splice(n,3),n-=3,cf(f,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function ms(t){function n(H){return hc(H,t)}Va!==null&&hc(Va,t),ka!==null&&hc(ka,t),Xa!==null&&hc(Xa,t),Oo.forEach(n),Po.forEach(n);for(var a=0;a<Wa.length;a++){var s=Wa[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Wa.length&&(a=Wa[0],a.blockedOn===null);)Fg(a),a.blockedOn===null&&Wa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],f=a[s+1],g=u[vn]||null;if(typeof f=="function")g||Hg(a);else if(g){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,g=f[vn]||null)T=g.formAction;else if(uh(u)!==null)continue}else T=g.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),Hg(a)}}}function Gg(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return u=g})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function hh(t){this._internalRoot=t}pc.prototype.render=hh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=ei();Ng(a,s,t,n,null,null)},pc.prototype.unmount=hh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Ng(t.current,2,null,t,null,null),jl(),n[yi]=null}};function pc(t){this._internalRoot=t}pc.prototype.unstable_scheduleHydration=function(t){if(t){var n=qs();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Wa.length&&n!==0&&n<Wa[a].priority;a++);Wa.splice(a,0,t),a===0&&Fg(t)}};var Vg=e.version;if(Vg!=="19.2.3")throw Error(r(527,Vg,"19.2.3"));G.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var GS={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mc.isDisabled&&mc.supportsFiber)try{bt=mc.inject(GS),Et=mc}catch{}}return Fo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",u=Zm,f=Km,g=Qm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=Dg(t,1,!1,null,null,a,s,null,u,f,g,Gg),t[yi]=n.current,Yf(t),new hh(n)},Fo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,u="",f=Zm,g=Km,T=Qm,H=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=Dg(t,1,!0,n,a??null,s,u,H,f,g,T,Gg),n.context=Ug(null),a=n.current,s=ei(),s=Ws(s),u=Da(s),u.callback=null,Ua(a,u,s),a=s,n.current.lanes=a,Dn(n,a),Pi(n),t[yi]=n.current,Yf(t),new pc(n)},Fo.version="19.2.3",Fo}var Jg;function QS(){if(Jg)return mh.exports;Jg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),mh.exports=KS(),mh.exports}var JS=QS();const $S=()=>{const[o,e]=Gn.useState(!1),[i,r]=Gn.useState(!1);Gn.useEffect(()=>{const c=()=>{r(window.scrollY>20)};return window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)},[]);const l=[{name:"About",href:"#about"},{name:"Stack",href:"#skills"},{name:"Projects",href:"#projects"}];return st.jsxs("nav",{className:`fixed w-full z-50 transition-all duration-300 ${i?"glass-nav shadow-md":"glass-nav"}`,children:[st.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:st.jsxs("div",{className:"flex justify-between items-center h-20",children:[st.jsx("div",{className:"flex-shrink-0 flex items-center",children:st.jsxs("a",{href:"#",className:"text-3xl font-extrabold font-display text-white tracking-tight",children:["Haris",st.jsx("span",{className:"text-primary",children:"Rindh"})]})}),st.jsxs("div",{className:"hidden md:flex items-center space-x-8",children:[l.map(c=>st.jsx("a",{href:c.href,className:"text-slate-300 hover:text-primary font-medium transition-colors",children:c.name},c.name)),st.jsx("a",{href:"#contact",className:"px-5 py-2.5 rounded-full bg-white text-slate-900 font-medium hover:bg-blue-100 transition-colors duration-300 shadow-lg shadow-blue-500/20",children:"Hire Me"})]}),st.jsx("div",{className:"md:hidden flex items-center gap-4",children:st.jsx("button",{onClick:()=>e(!o),className:"text-slate-300 hover:text-white focus:outline-none p-2",children:st.jsx("i",{className:`fas ${o?"fa-times":"fa-bars"} text-xl`})})})]})}),o&&st.jsx("div",{className:"md:hidden bg-slate-900 border-t border-slate-800 absolute w-full transition-all shadow-xl",children:st.jsxs("div",{className:"px-4 pt-2 pb-6 space-y-1",children:[l.map(c=>st.jsx("a",{href:c.href,onClick:()=>e(!1),className:"block px-3 py-3 text-base font-medium text-slate-300 hover:bg-slate-800 rounded-md",children:c.name},c.name)),st.jsx("a",{href:"#contact",onClick:()=>e(!1),className:"block px-3 py-3 text-base font-medium text-primary font-semibold",children:"Contact Me"})]})})]})};const Kd="182",ty=0,$g=1,ey=2,kc=1,ny=2,Zo=3,nr=0,jn=1,Fi=2,ga=0,Ps=1,Zc=2,t_=3,e_=4,iy=5,Cr=100,ay=101,ry=102,sy=103,oy=104,ly=200,cy=201,uy=202,fy=203,Jh=204,$h=205,hy=206,dy=207,py=208,my=209,gy=210,_y=211,vy=212,xy=213,Sy=214,td=0,ed=1,nd=2,Bs=3,id=4,ad=5,rd=6,sd=7,nv=0,yy=1,My=2,Vi=0,iv=1,av=2,rv=3,sv=4,ov=5,lv=6,cv=7,uv=300,Nr=301,Fs=302,od=303,ld=304,au=306,cd=1e3,ma=1001,ud=1002,Cn=1003,by=1004,gc=1005,On=1006,xh=1007,Dr=1008,vi=1009,fv=1010,hv=1011,Qo=1012,Qd=1013,Xi=1014,Hi=1015,va=1016,Jd=1017,$d=1018,Jo=1020,dv=35902,pv=35899,mv=1021,gv=1022,wi=1023,xa=1026,Ur=1027,_v=1028,tp=1029,Is=1030,ep=1031,np=1033,Xc=33776,Wc=33777,qc=33778,Yc=33779,fd=35840,hd=35841,dd=35842,pd=35843,md=36196,gd=37492,_d=37496,vd=37488,xd=37489,Sd=37490,yd=37491,Md=37808,bd=37809,Ed=37810,Td=37811,Ad=37812,Rd=37813,Cd=37814,wd=37815,Dd=37816,Ud=37817,Nd=37818,Ld=37819,Od=37820,Pd=37821,zd=36492,Bd=36494,Fd=36495,Id=36283,Hd=36284,Gd=36285,Vd=36286,Ey=3200,Ty=0,Ay=1,$a="",gi="srgb",Hs="srgb-linear",Kc="linear",Ie="srgb",gs=7680,n_=519,Ry=512,Cy=513,wy=514,ip=515,Dy=516,Uy=517,ap=518,Ny=519,kd=35044,i_="300 es",Gi=2e3,Qc=2001;function vv(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Jc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Ly(){const o=Jc("canvas");return o.style.display="block",o}const a_={};function $c(...o){const e="THREE."+o.shift();console.log(e,...o)}function ie(...o){const e="THREE."+o.shift();console.warn(e,...o)}function be(...o){const e="THREE."+o.shift();console.error(e,...o)}function $o(...o){const e=o.join(" ");e in a_||(a_[e]=!0,ie(...o))}function Oy(o,e,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}class Vs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sh=Math.PI/180,Xd=180/Math.PI;function er(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Nn[o&255]+Nn[o>>8&255]+Nn[o>>16&255]+Nn[o>>24&255]+"-"+Nn[e&255]+Nn[e>>8&255]+"-"+Nn[e>>16&15|64]+Nn[e>>24&255]+"-"+Nn[i&63|128]+Nn[i>>8&255]+"-"+Nn[i>>16&255]+Nn[i>>24&255]+Nn[r&255]+Nn[r>>8&255]+Nn[r>>16&255]+Nn[r>>24&255]).toLowerCase()}function ye(o,e,i){return Math.max(e,Math.min(i,o))}function Py(o,e){return(o%e+e)%e}function yh(o,e,i){return(1-i)*o+i*e}function Ii(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function ke(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class he{constructor(e=0,i=0){he.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=ye(this.x,e.x,i.x),this.y=ye(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=ye(this.x,e,i),this.y=ye(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ye(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(ye(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*r-h*l+e.x,this.y=c*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class el{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,h,d){let m=r[l+0],p=r[l+1],v=r[l+2],_=r[l+3],S=c[h+0],M=c[h+1],E=c[h+2],C=c[h+3];if(d<=0){e[i+0]=m,e[i+1]=p,e[i+2]=v,e[i+3]=_;return}if(d>=1){e[i+0]=S,e[i+1]=M,e[i+2]=E,e[i+3]=C;return}if(_!==C||m!==S||p!==M||v!==E){let y=m*S+p*M+v*E+_*C;y<0&&(S=-S,M=-M,E=-E,C=-C,y=-y);let x=1-d;if(y<.9995){const D=Math.acos(y),U=Math.sin(D);x=Math.sin(x*D)/U,d=Math.sin(d*D)/U,m=m*x+S*d,p=p*x+M*d,v=v*x+E*d,_=_*x+C*d}else{m=m*x+S*d,p=p*x+M*d,v=v*x+E*d,_=_*x+C*d;const D=1/Math.sqrt(m*m+p*p+v*v+_*_);m*=D,p*=D,v*=D,_*=D}}e[i]=m,e[i+1]=p,e[i+2]=v,e[i+3]=_}static multiplyQuaternionsFlat(e,i,r,l,c,h){const d=r[l],m=r[l+1],p=r[l+2],v=r[l+3],_=c[h],S=c[h+1],M=c[h+2],E=c[h+3];return e[i]=d*E+v*_+m*M-p*S,e[i+1]=m*E+v*S+p*_-d*M,e[i+2]=p*E+v*M+d*S-m*_,e[i+3]=v*E-d*_-m*S-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(r/2),v=d(l/2),_=d(c/2),S=m(r/2),M=m(l/2),E=m(c/2);switch(h){case"XYZ":this._x=S*v*_+p*M*E,this._y=p*M*_-S*v*E,this._z=p*v*E+S*M*_,this._w=p*v*_-S*M*E;break;case"YXZ":this._x=S*v*_+p*M*E,this._y=p*M*_-S*v*E,this._z=p*v*E-S*M*_,this._w=p*v*_+S*M*E;break;case"ZXY":this._x=S*v*_-p*M*E,this._y=p*M*_+S*v*E,this._z=p*v*E+S*M*_,this._w=p*v*_-S*M*E;break;case"ZYX":this._x=S*v*_-p*M*E,this._y=p*M*_+S*v*E,this._z=p*v*E-S*M*_,this._w=p*v*_+S*M*E;break;case"YZX":this._x=S*v*_+p*M*E,this._y=p*M*_+S*v*E,this._z=p*v*E-S*M*_,this._w=p*v*_-S*M*E;break;case"XZY":this._x=S*v*_-p*M*E,this._y=p*M*_-S*v*E,this._z=p*v*E+S*M*_,this._w=p*v*_+S*M*E;break;default:ie("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],v=i[6],_=i[10],S=r+d+_;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(v-m)*M,this._y=(c-p)*M,this._z=(h-l)*M}else if(r>d&&r>_){const M=2*Math.sqrt(1+r-d-_);this._w=(v-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(c+p)/M}else if(d>_){const M=2*Math.sqrt(1+d-r-_);this._w=(c-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+v)/M}else{const M=2*Math.sqrt(1+_-r-d);this._w=(h-l)/M,this._x=(c+p)/M,this._y=(m+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ye(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,h=e._w,d=i._x,m=i._y,p=i._z,v=i._w;return this._x=r*v+h*d+l*p-c*m,this._y=l*v+h*m+c*d-r*p,this._z=c*v+h*p+r*m-l*d,this._w=h*v-r*d-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let r=e._x,l=e._y,c=e._z,h=e._w,d=this.dot(e);d<0&&(r=-r,l=-l,c=-c,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),v=Math.sin(p);m=Math.sin(m*p)/v,i=Math.sin(i*p)/v,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,i=0,r=0){K.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(r_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(r_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*r),v=2*(d*i-c*l),_=2*(c*r-h*i);return this.x=i+m*p+h*_-d*v,this.y=r+m*v+d*p-c*_,this.z=l+m*_+c*v-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=ye(this.x,e.x,i.x),this.y=ye(this.y,e.y,i.y),this.z=ye(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=ye(this.x,e,i),this.y=ye(this.y,e,i),this.z=ye(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ye(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-r*m,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Mh.copy(this).projectOnVector(e),this.sub(Mh)}reflect(e){return this.sub(Mh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(ye(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mh=new K,r_=new el;class ue{constructor(e,i,r,l,c,h,d,m,p){ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,m,p)}set(e,i,r,l,c,h,d,m,p){const v=this.elements;return v[0]=e,v[1]=l,v[2]=d,v[3]=i,v[4]=c,v[5]=m,v[6]=r,v[7]=h,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],v=r[4],_=r[7],S=r[2],M=r[5],E=r[8],C=l[0],y=l[3],x=l[6],D=l[1],U=l[4],N=l[7],B=l[2],F=l[5],P=l[8];return c[0]=h*C+d*D+m*B,c[3]=h*y+d*U+m*F,c[6]=h*x+d*N+m*P,c[1]=p*C+v*D+_*B,c[4]=p*y+v*U+_*F,c[7]=p*x+v*N+_*P,c[2]=S*C+M*D+E*B,c[5]=S*y+M*U+E*F,c[8]=S*x+M*N+E*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],v=e[8];return i*h*v-i*d*p-r*c*v+r*d*m+l*c*p-l*h*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],v=e[8],_=v*h-d*p,S=d*m-v*c,M=p*c-h*m,E=i*_+r*S+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/E;return e[0]=_*C,e[1]=(l*p-v*r)*C,e[2]=(d*r-l*h)*C,e[3]=S*C,e[4]=(v*i-l*m)*C,e[5]=(l*c-d*i)*C,e[6]=M*C,e[7]=(r*m-p*i)*C,e[8]=(h*i-r*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(bh.makeScale(e,i)),this}rotate(e){return this.premultiply(bh.makeRotation(-e)),this}translate(e,i){return this.premultiply(bh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bh=new ue,s_=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),o_=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zy(){const o={enabled:!0,workingColorSpace:Hs,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Ie&&(l.r=_a(l.r),l.g=_a(l.g),l.b=_a(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ie&&(l.r=zs(l.r),l.g=zs(l.g),l.b=zs(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===$a?Kc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return $o("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return $o("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Hs]:{primaries:e,whitePoint:r,transfer:Kc,toXYZ:s_,fromXYZ:o_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:gi},outputColorSpaceConfig:{drawingBufferColorSpace:gi}},[gi]:{primaries:e,whitePoint:r,transfer:Ie,toXYZ:s_,fromXYZ:o_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:gi}}}),o}const Te=zy();function _a(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function zs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let _s;class By{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{_s===void 0&&(_s=Jc("canvas")),_s.width=e.width,_s.height=e.height;const l=_s.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=_s}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Jc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=_a(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(_a(i[r]/255)*255):i[r]=_a(i[r]);return{data:i,width:e.width,height:e.height}}else return ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Fy=0;class rp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fy++}),this.uuid=er(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Eh(l[h].image)):c.push(Eh(l[h]))}else c=Eh(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function Eh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?By.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ie("Texture: Unable to serialize Texture."),{})}let Iy=0;const Th=new K;class Pn extends Vs{constructor(e=Pn.DEFAULT_IMAGE,i=Pn.DEFAULT_MAPPING,r=ma,l=ma,c=On,h=Dr,d=wi,m=vi,p=Pn.DEFAULT_ANISOTROPY,v=$a){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Iy++}),this.uuid=er(),this.name="",this.source=new rp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Th).x}get height(){return this.source.getSize(Th).y}get depth(){return this.source.getSize(Th).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){ie(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ie(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cd:e.x=e.x-Math.floor(e.x);break;case ma:e.x=e.x<0?0:1;break;case ud:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cd:e.y=e.y-Math.floor(e.y);break;case ma:e.y=e.y<0?0:1;break;case ud:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=uv;Pn.DEFAULT_ANISOTROPY=1;class rn{constructor(e=0,i=0,r=0,l=1){rn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,p=m[0],v=m[4],_=m[8],S=m[1],M=m[5],E=m[9],C=m[2],y=m[6],x=m[10];if(Math.abs(v-S)<.01&&Math.abs(_-C)<.01&&Math.abs(E-y)<.01){if(Math.abs(v+S)<.1&&Math.abs(_+C)<.1&&Math.abs(E+y)<.1&&Math.abs(p+M+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,N=(M+1)/2,B=(x+1)/2,F=(v+S)/4,P=(_+C)/4,q=(E+y)/4;return U>N&&U>B?U<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(U),l=F/r,c=P/r):N>B?N<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(N),r=F/l,c=q/l):B<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(B),r=P/c,l=q/c),this.set(r,l,c,i),this}let D=Math.sqrt((y-E)*(y-E)+(_-C)*(_-C)+(S-v)*(S-v));return Math.abs(D)<.001&&(D=1),this.x=(y-E)/D,this.y=(_-C)/D,this.z=(S-v)/D,this.w=Math.acos((p+M+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=ye(this.x,e.x,i.x),this.y=ye(this.y,e.y,i.y),this.z=ye(this.z,e.z,i.z),this.w=ye(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=ye(this.x,e,i),this.y=ye(this.y,e,i),this.z=ye(this.z,e,i),this.w=ye(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ye(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hy extends Vs{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new rn(0,0,e,i),this.scissorTest=!1,this.viewport=new rn(0,0,e,i);const l={width:e,height:i,depth:r.depth},c=new Pn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new rp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ki extends Hy{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class xv extends Pn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Gy extends Pn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nl{constructor(e=new K(1/0,1/0,1/0),i=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Ai.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Ai.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Ai.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,Ai):Ai.fromBufferAttribute(c,h),Ai.applyMatrix4(e.matrixWorld),this.expandByPoint(Ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_c.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),_c.copy(r.boundingBox)),_c.applyMatrix4(e.matrixWorld),this.union(_c)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ai),Ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Io),vc.subVectors(this.max,Io),vs.subVectors(e.a,Io),xs.subVectors(e.b,Io),Ss.subVectors(e.c,Io),Ya.subVectors(xs,vs),ja.subVectors(Ss,xs),yr.subVectors(vs,Ss);let i=[0,-Ya.z,Ya.y,0,-ja.z,ja.y,0,-yr.z,yr.y,Ya.z,0,-Ya.x,ja.z,0,-ja.x,yr.z,0,-yr.x,-Ya.y,Ya.x,0,-ja.y,ja.x,0,-yr.y,yr.x,0];return!Ah(i,vs,xs,Ss,vc)||(i=[1,0,0,0,1,0,0,0,1],!Ah(i,vs,xs,Ss,vc))?!1:(xc.crossVectors(Ya,ja),i=[xc.x,xc.y,xc.z],Ah(i,vs,xs,Ss,vc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ua[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ua[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ua[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ua[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ua[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ua[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ua[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ua[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ua),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ua=[new K,new K,new K,new K,new K,new K,new K,new K],Ai=new K,_c=new nl,vs=new K,xs=new K,Ss=new K,Ya=new K,ja=new K,yr=new K,Io=new K,vc=new K,xc=new K,Mr=new K;function Ah(o,e,i,r,l){for(let c=0,h=o.length-3;c<=h;c+=3){Mr.fromArray(o,c);const d=l.x*Math.abs(Mr.x)+l.y*Math.abs(Mr.y)+l.z*Math.abs(Mr.z),m=e.dot(Mr),p=i.dot(Mr),v=r.dot(Mr);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>d)return!1}return!0}const Vy=new nl,Ho=new K,Rh=new K;class il{constructor(e=new K,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):Vy.setFromPoints(e).getCenter(r);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ho.subVectors(e,this.center);const i=Ho.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Ho,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ho.copy(e.center).add(Rh)),this.expandByPoint(Ho.copy(e.center).sub(Rh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const fa=new K,Ch=new K,Sc=new K,Za=new K,wh=new K,yc=new K,Dh=new K;class ru{constructor(e=new K,i=new K(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=fa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(fa.copy(this.origin).addScaledVector(this.direction,i),fa.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Ch.copy(e).add(i).multiplyScalar(.5),Sc.copy(i).sub(e).normalize(),Za.copy(this.origin).sub(Ch);const c=e.distanceTo(i)*.5,h=-this.direction.dot(Sc),d=Za.dot(this.direction),m=-Za.dot(Sc),p=Za.lengthSq(),v=Math.abs(1-h*h);let _,S,M,E;if(v>0)if(_=h*m-d,S=h*d-m,E=c*v,_>=0)if(S>=-E)if(S<=E){const C=1/v;_*=C,S*=C,M=_*(_+h*S+2*d)+S*(h*_+S+2*m)+p}else S=c,_=Math.max(0,-(h*S+d)),M=-_*_+S*(S+2*m)+p;else S=-c,_=Math.max(0,-(h*S+d)),M=-_*_+S*(S+2*m)+p;else S<=-E?(_=Math.max(0,-(-h*c+d)),S=_>0?-c:Math.min(Math.max(-c,-m),c),M=-_*_+S*(S+2*m)+p):S<=E?(_=0,S=Math.min(Math.max(-c,-m),c),M=S*(S+2*m)+p):(_=Math.max(0,-(h*c+d)),S=_>0?c:Math.min(Math.max(-c,-m),c),M=-_*_+S*(S+2*m)+p);else S=h>0?-c:c,_=Math.max(0,-(h*S+d)),M=-_*_+S*(S+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Ch).addScaledVector(Sc,S),M}intersectSphere(e,i){fa.subVectors(e.center,this.origin);const r=fa.dot(this.direction),l=fa.dot(fa)-r*r,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,h,d,m;const p=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,S=this.origin;return p>=0?(r=(e.min.x-S.x)*p,l=(e.max.x-S.x)*p):(r=(e.max.x-S.x)*p,l=(e.min.x-S.x)*p),v>=0?(c=(e.min.y-S.y)*v,h=(e.max.y-S.y)*v):(c=(e.max.y-S.y)*v,h=(e.min.y-S.y)*v),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),_>=0?(d=(e.min.z-S.z)*_,m=(e.max.z-S.z)*_):(d=(e.max.z-S.z)*_,m=(e.min.z-S.z)*_),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,fa)!==null}intersectTriangle(e,i,r,l,c){wh.subVectors(i,e),yc.subVectors(r,e),Dh.crossVectors(wh,yc);let h=this.direction.dot(Dh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Za.subVectors(this.origin,e);const m=d*this.direction.dot(yc.crossVectors(Za,yc));if(m<0)return null;const p=d*this.direction.dot(wh.cross(Za));if(p<0||m+p>h)return null;const v=-d*Za.dot(Dh);return v<0?null:this.at(v/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(e,i,r,l,c,h,d,m,p,v,_,S,M,E,C,y){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,m,p,v,_,S,M,E,C,y)}set(e,i,r,l,c,h,d,m,p,v,_,S,M,E,C,y){const x=this.elements;return x[0]=e,x[4]=i,x[8]=r,x[12]=l,x[1]=c,x[5]=h,x[9]=d,x[13]=m,x[2]=p,x[6]=v,x[10]=_,x[14]=S,x[3]=M,x[7]=E,x[11]=C,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,r=e.elements,l=1/ys.setFromMatrixColumn(e,0).length(),c=1/ys.setFromMatrixColumn(e,1).length(),h=1/ys.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),v=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const S=h*v,M=h*_,E=d*v,C=d*_;i[0]=m*v,i[4]=-m*_,i[8]=p,i[1]=M+E*p,i[5]=S-C*p,i[9]=-d*m,i[2]=C-S*p,i[6]=E+M*p,i[10]=h*m}else if(e.order==="YXZ"){const S=m*v,M=m*_,E=p*v,C=p*_;i[0]=S+C*d,i[4]=E*d-M,i[8]=h*p,i[1]=h*_,i[5]=h*v,i[9]=-d,i[2]=M*d-E,i[6]=C+S*d,i[10]=h*m}else if(e.order==="ZXY"){const S=m*v,M=m*_,E=p*v,C=p*_;i[0]=S-C*d,i[4]=-h*_,i[8]=E+M*d,i[1]=M+E*d,i[5]=h*v,i[9]=C-S*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const S=h*v,M=h*_,E=d*v,C=d*_;i[0]=m*v,i[4]=E*p-M,i[8]=S*p+C,i[1]=m*_,i[5]=C*p+S,i[9]=M*p-E,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const S=h*m,M=h*p,E=d*m,C=d*p;i[0]=m*v,i[4]=C-S*_,i[8]=E*_+M,i[1]=_,i[5]=h*v,i[9]=-d*v,i[2]=-p*v,i[6]=M*_+E,i[10]=S-C*_}else if(e.order==="XZY"){const S=h*m,M=h*p,E=d*m,C=d*p;i[0]=m*v,i[4]=-_,i[8]=p*v,i[1]=S*_+C,i[5]=h*v,i[9]=M*_-E,i[2]=E*_-M,i[6]=d*v,i[10]=C*_+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ky,e,Xy)}lookAt(e,i,r){const l=this.elements;return ni.subVectors(e,i),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),Ka.crossVectors(r,ni),Ka.lengthSq()===0&&(Math.abs(r.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),Ka.crossVectors(r,ni)),Ka.normalize(),Mc.crossVectors(ni,Ka),l[0]=Ka.x,l[4]=Mc.x,l[8]=ni.x,l[1]=Ka.y,l[5]=Mc.y,l[9]=ni.y,l[2]=Ka.z,l[6]=Mc.z,l[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],v=r[1],_=r[5],S=r[9],M=r[13],E=r[2],C=r[6],y=r[10],x=r[14],D=r[3],U=r[7],N=r[11],B=r[15],F=l[0],P=l[4],q=l[8],A=l[12],w=l[1],I=l[5],Q=l[9],Z=l[13],lt=l[2],ut=l[6],z=l[10],G=l[14],tt=l[3],yt=l[7],vt=l[11],O=l[15];return c[0]=h*F+d*w+m*lt+p*tt,c[4]=h*P+d*I+m*ut+p*yt,c[8]=h*q+d*Q+m*z+p*vt,c[12]=h*A+d*Z+m*G+p*O,c[1]=v*F+_*w+S*lt+M*tt,c[5]=v*P+_*I+S*ut+M*yt,c[9]=v*q+_*Q+S*z+M*vt,c[13]=v*A+_*Z+S*G+M*O,c[2]=E*F+C*w+y*lt+x*tt,c[6]=E*P+C*I+y*ut+x*yt,c[10]=E*q+C*Q+y*z+x*vt,c[14]=E*A+C*Z+y*G+x*O,c[3]=D*F+U*w+N*lt+B*tt,c[7]=D*P+U*I+N*ut+B*yt,c[11]=D*q+U*Q+N*z+B*vt,c[15]=D*A+U*Z+N*G+B*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],h=e[1],d=e[5],m=e[9],p=e[13],v=e[2],_=e[6],S=e[10],M=e[14],E=e[3],C=e[7],y=e[11],x=e[15],D=m*M-p*S,U=d*M-p*_,N=d*S-m*_,B=h*M-p*v,F=h*S-m*v,P=h*_-d*v;return i*(C*D-y*U+x*N)-r*(E*D-y*B+x*F)+l*(E*U-C*B+x*P)-c*(E*N-C*F+y*P)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],v=e[8],_=e[9],S=e[10],M=e[11],E=e[12],C=e[13],y=e[14],x=e[15],D=_*y*p-C*S*p+C*m*M-d*y*M-_*m*x+d*S*x,U=E*S*p-v*y*p-E*m*M+h*y*M+v*m*x-h*S*x,N=v*C*p-E*_*p+E*d*M-h*C*M-v*d*x+h*_*x,B=E*_*m-v*C*m-E*d*S+h*C*S+v*d*y-h*_*y,F=i*D+r*U+l*N+c*B;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/F;return e[0]=D*P,e[1]=(C*S*c-_*y*c-C*l*M+r*y*M+_*l*x-r*S*x)*P,e[2]=(d*y*c-C*m*c+C*l*p-r*y*p-d*l*x+r*m*x)*P,e[3]=(_*m*c-d*S*c-_*l*p+r*S*p+d*l*M-r*m*M)*P,e[4]=U*P,e[5]=(v*y*c-E*S*c+E*l*M-i*y*M-v*l*x+i*S*x)*P,e[6]=(E*m*c-h*y*c-E*l*p+i*y*p+h*l*x-i*m*x)*P,e[7]=(h*S*c-v*m*c+v*l*p-i*S*p-h*l*M+i*m*M)*P,e[8]=N*P,e[9]=(E*_*c-v*C*c-E*r*M+i*C*M+v*r*x-i*_*x)*P,e[10]=(h*C*c-E*d*c+E*r*p-i*C*p-h*r*x+i*d*x)*P,e[11]=(v*d*c-h*_*c-v*r*p+i*_*p+h*r*M-i*d*M)*P,e[12]=B*P,e[13]=(v*C*l-E*_*l+E*r*S-i*C*S-v*r*y+i*_*y)*P,e[14]=(E*d*l-h*C*l-E*r*m+i*C*m+h*r*y-i*d*y)*P,e[15]=(h*_*l-v*d*l+v*r*m-i*_*m-h*r*S+i*d*S)*P,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=e.x,d=e.y,m=e.z,p=c*h,v=c*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,v*d+r,v*m-l*h,0,p*m-l*d,v*m+l*h,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,h){return this.set(1,r,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,v=h+h,_=d+d,S=c*p,M=c*v,E=c*_,C=h*v,y=h*_,x=d*_,D=m*p,U=m*v,N=m*_,B=r.x,F=r.y,P=r.z;return l[0]=(1-(C+x))*B,l[1]=(M+N)*B,l[2]=(E-U)*B,l[3]=0,l[4]=(M-N)*F,l[5]=(1-(S+x))*F,l[6]=(y+D)*F,l[7]=0,l[8]=(E+U)*P,l[9]=(y-D)*P,l[10]=(1-(S+C))*P,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;if(e.x=l[12],e.y=l[13],e.z=l[14],this.determinant()===0)return r.set(1,1,1),i.identity(),this;let c=ys.set(l[0],l[1],l[2]).length();const h=ys.set(l[4],l[5],l[6]).length(),d=ys.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Ri.copy(this);const p=1/c,v=1/h,_=1/d;return Ri.elements[0]*=p,Ri.elements[1]*=p,Ri.elements[2]*=p,Ri.elements[4]*=v,Ri.elements[5]*=v,Ri.elements[6]*=v,Ri.elements[8]*=_,Ri.elements[9]*=_,Ri.elements[10]*=_,i.setFromRotationMatrix(Ri),r.x=c,r.y=h,r.z=d,this}makePerspective(e,i,r,l,c,h,d=Gi,m=!1){const p=this.elements,v=2*c/(i-e),_=2*c/(r-l),S=(i+e)/(i-e),M=(r+l)/(r-l);let E,C;if(m)E=c/(h-c),C=h*c/(h-c);else if(d===Gi)E=-(h+c)/(h-c),C=-2*h*c/(h-c);else if(d===Qc)E=-h/(h-c),C=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=_,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,c,h,d=Gi,m=!1){const p=this.elements,v=2/(i-e),_=2/(r-l),S=-(i+e)/(i-e),M=-(r+l)/(r-l);let E,C;if(m)E=1/(h-c),C=h/(h-c);else if(d===Gi)E=-2/(h-c),C=-(h+c)/(h-c);else if(d===Qc)E=-1/(h-c),C=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=_,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=E,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const ys=new K,Ri=new Qe,ky=new K(0,0,0),Xy=new K(1,1,1),Ka=new K,Mc=new K,ni=new K,l_=new Qe,c_=new el;class Sa{constructor(e=0,i=0,r=0,l=Sa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],v=l[9],_=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(ye(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-ye(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(ye(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-ye(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-v,M),this._y=0);break;default:ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return l_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(l_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return c_.setFromEuler(this),this.setFromQuaternion(c_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sa.DEFAULT_ORDER="XYZ";class sp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Wy=0;const u_=new K,Ms=new el,ha=new Qe,bc=new K,Go=new K,qy=new K,Yy=new el,f_=new K(1,0,0),h_=new K(0,1,0),d_=new K(0,0,1),p_={type:"added"},jy={type:"removed"},bs={type:"childadded",child:null},Uh={type:"childremoved",child:null};class zn extends Vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wy++}),this.uuid=er(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zn.DEFAULT_UP.clone();const e=new K,i=new Sa,r=new el,l=new K(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Qe},normalMatrix:{value:new ue}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Ms.setFromAxisAngle(e,i),this.quaternion.multiply(Ms),this}rotateOnWorldAxis(e,i){return Ms.setFromAxisAngle(e,i),this.quaternion.premultiply(Ms),this}rotateX(e){return this.rotateOnAxis(f_,e)}rotateY(e){return this.rotateOnAxis(h_,e)}rotateZ(e){return this.rotateOnAxis(d_,e)}translateOnAxis(e,i){return u_.copy(e).applyQuaternion(this.quaternion),this.position.add(u_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(f_,e)}translateY(e){return this.translateOnAxis(h_,e)}translateZ(e){return this.translateOnAxis(d_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ha.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?bc.copy(e):bc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ha.lookAt(Go,bc,this.up):ha.lookAt(bc,Go,this.up),this.quaternion.setFromRotationMatrix(ha),l&&(ha.extractRotation(l.matrixWorld),Ms.setFromRotationMatrix(ha),this.quaternion.premultiply(Ms.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(be("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(p_),bs.child=e,this.dispatchEvent(bs),bs.child=null):be("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(jy),Uh.child=e,this.dispatchEvent(Uh),Uh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ha.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ha.multiply(e.parent.matrixWorld)),e.applyMatrix4(ha),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(p_),bs.child=e,this.dispatchEvent(bs),bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,e,qy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,Yy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const _=m[p];c(e.shapes,_)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),v=h(e.images),_=h(e.shapes),S=h(e.skeletons),M=h(e.animations),E=h(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),_.length>0&&(r.shapes=_),S.length>0&&(r.skeletons=S),M.length>0&&(r.animations=M),E.length>0&&(r.nodes=E)}return r.object=l,r;function h(d){const m=[];for(const p in d){const v=d[p];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}zn.DEFAULT_UP=new K(0,1,0);zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ci=new K,da=new K,Nh=new K,pa=new K,Es=new K,Ts=new K,m_=new K,Lh=new K,Oh=new K,Ph=new K,zh=new rn,Bh=new rn,Fh=new rn;class xi{constructor(e=new K,i=new K,r=new K){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Ci.subVectors(e,i),l.cross(Ci);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){Ci.subVectors(l,i),da.subVectors(r,i),Nh.subVectors(e,i);const h=Ci.dot(Ci),d=Ci.dot(da),m=Ci.dot(Nh),p=da.dot(da),v=da.dot(Nh),_=h*p-d*d;if(_===0)return c.set(0,0,0),null;const S=1/_,M=(p*m-d*v)*S,E=(h*v-d*m)*S;return c.set(1-M-E,E,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,pa)===null?!1:pa.x>=0&&pa.y>=0&&pa.x+pa.y<=1}static getInterpolation(e,i,r,l,c,h,d,m){return this.getBarycoord(e,i,r,l,pa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,pa.x),m.addScaledVector(h,pa.y),m.addScaledVector(d,pa.z),m)}static getInterpolatedAttribute(e,i,r,l,c,h){return zh.setScalar(0),Bh.setScalar(0),Fh.setScalar(0),zh.fromBufferAttribute(e,i),Bh.fromBufferAttribute(e,r),Fh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(zh,c.x),h.addScaledVector(Bh,c.y),h.addScaledVector(Fh,c.z),h}static isFrontFacing(e,i,r,l){return Ci.subVectors(r,i),da.subVectors(e,i),Ci.cross(da).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ci.subVectors(this.c,this.b),da.subVectors(this.a,this.b),Ci.cross(da).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return xi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return xi.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return xi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let h,d;Es.subVectors(l,r),Ts.subVectors(c,r),Lh.subVectors(e,r);const m=Es.dot(Lh),p=Ts.dot(Lh);if(m<=0&&p<=0)return i.copy(r);Oh.subVectors(e,l);const v=Es.dot(Oh),_=Ts.dot(Oh);if(v>=0&&_<=v)return i.copy(l);const S=m*_-v*p;if(S<=0&&m>=0&&v<=0)return h=m/(m-v),i.copy(r).addScaledVector(Es,h);Ph.subVectors(e,c);const M=Es.dot(Ph),E=Ts.dot(Ph);if(E>=0&&M<=E)return i.copy(c);const C=M*p-m*E;if(C<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(r).addScaledVector(Ts,d);const y=v*E-M*_;if(y<=0&&_-v>=0&&M-E>=0)return m_.subVectors(c,l),d=(_-v)/(_-v+(M-E)),i.copy(l).addScaledVector(m_,d);const x=1/(y+C+S);return h=C*x,d=S*x,i.copy(r).addScaledVector(Es,h).addScaledVector(Ts,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Sv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qa={h:0,s:0,l:0},Ec={h:0,s:0,l:0};function Ih(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Ce{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=gi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Te.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Te.workingColorSpace){return this.r=e,this.g=i,this.b=r,Te.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Te.workingColorSpace){if(e=Py(e,1),i=ye(i,0,1),r=ye(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=Ih(h,c,e+1/3),this.g=Ih(h,c,e),this.b=Ih(h,c,e-1/3)}return Te.colorSpaceToWorking(this,l),this}setStyle(e,i=gi){function r(c){c!==void 0&&parseFloat(c)<1&&ie("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ie("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=gi){const r=Sv[e.toLowerCase()];return r!==void 0?this.setHex(r,i):ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_a(e.r),this.g=_a(e.g),this.b=_a(e.b),this}copyLinearToSRGB(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gi){return Te.workingToColorSpace(Ln.copy(this),e),Math.round(ye(Ln.r*255,0,255))*65536+Math.round(ye(Ln.g*255,0,255))*256+Math.round(ye(Ln.b*255,0,255))}getHexString(e=gi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Te.workingColorSpace){Te.workingToColorSpace(Ln.copy(this),i);const r=Ln.r,l=Ln.g,c=Ln.b,h=Math.max(r,l,c),d=Math.min(r,l,c);let m,p;const v=(d+h)/2;if(d===h)m=0,p=0;else{const _=h-d;switch(p=v<=.5?_/(h+d):_/(2-h-d),h){case r:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-r)/_+2;break;case c:m=(r-l)/_+4;break}m/=6}return e.h=m,e.s=p,e.l=v,e}getRGB(e,i=Te.workingColorSpace){return Te.workingToColorSpace(Ln.copy(this),i),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=gi){Te.workingToColorSpace(Ln.copy(this),e);const i=Ln.r,r=Ln.g,l=Ln.b;return e!==gi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Qa),this.setHSL(Qa.h+e,Qa.s+i,Qa.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Qa),e.getHSL(Ec);const r=yh(Qa.h,Ec.h,i),l=yh(Qa.s,Ec.s,i),c=yh(Qa.l,Ec.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new Ce;Ce.NAMES=Sv;let Zy=0;class Lr extends Vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zy++}),this.uuid=er(),this.name="",this.type="Material",this.blending=Ps,this.side=nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jh,this.blendDst=$h,this.blendEquation=Cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=n_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){ie(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ie(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(r.blending=this.blending),this.side!==nr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Jh&&(r.blendSrc=this.blendSrc),this.blendDst!==$h&&(r.blendDst=this.blendDst),this.blendEquation!==Cr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==n_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class tu extends Lr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sa,this.combine=nv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const fn=new K,Tc=new he;let Ky=0;class ai{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ky++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=kd,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Tc.fromBufferAttribute(this,i),Tc.applyMatrix3(e),this.setXY(i,Tc.x,Tc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix3(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix4(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyNormalMatrix(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.transformDirection(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Ii(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=ke(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Ii(i,this.array)),i}setX(e,i){return this.normalized&&(i=ke(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Ii(i,this.array)),i}setY(e,i){return this.normalized&&(i=ke(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Ii(i,this.array)),i}setZ(e,i){return this.normalized&&(i=ke(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Ii(i,this.array)),i}setW(e,i){return this.normalized&&(i=ke(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=ke(i,this.array),r=ke(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=ke(i,this.array),r=ke(r,this.array),l=ke(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=ke(i,this.array),r=ke(r,this.array),l=ke(l,this.array),c=ke(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kd&&(e.usage=this.usage),e}}class yv extends ai{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Mv extends ai{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class wn extends ai{constructor(e,i,r){super(new Float32Array(e),i,r)}}let Qy=0;const mi=new Qe,Hh=new zn,As=new K,ii=new nl,Vo=new nl,_n=new K;class Bn extends Vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qy++}),this.uuid=er(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vv(e)?Mv:yv)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ue().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mi.makeRotationFromQuaternion(e),this.applyMatrix4(mi),this}rotateX(e){return mi.makeRotationX(e),this.applyMatrix4(mi),this}rotateY(e){return mi.makeRotationY(e),this.applyMatrix4(mi),this}rotateZ(e){return mi.makeRotationZ(e),this.applyMatrix4(mi),this}translate(e,i,r){return mi.makeTranslation(e,i,r),this.applyMatrix4(mi),this}scale(e,i,r){return mi.makeScale(e,i,r),this.applyMatrix4(mi),this}lookAt(e){return Hh.lookAt(e),Hh.updateMatrix(),this.applyMatrix4(Hh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new wn(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ii.setFromBufferAttribute(c),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&be('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new il);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const r=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Vo.setFromBufferAttribute(d),this.morphTargetsRelative?(_n.addVectors(ii.min,Vo.min),ii.expandByPoint(_n),_n.addVectors(ii.max,Vo.max),ii.expandByPoint(_n)):(ii.expandByPoint(Vo.min),ii.expandByPoint(Vo.max))}ii.getCenter(r);let l=0;for(let c=0,h=e.count;c<h;c++)_n.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(_n));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)_n.fromBufferAttribute(d,p),m&&(As.fromBufferAttribute(e,p),_n.add(As)),l=Math.max(l,r.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&be('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){be("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ai(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let q=0;q<r.count;q++)d[q]=new K,m[q]=new K;const p=new K,v=new K,_=new K,S=new he,M=new he,E=new he,C=new K,y=new K;function x(q,A,w){p.fromBufferAttribute(r,q),v.fromBufferAttribute(r,A),_.fromBufferAttribute(r,w),S.fromBufferAttribute(c,q),M.fromBufferAttribute(c,A),E.fromBufferAttribute(c,w),v.sub(p),_.sub(p),M.sub(S),E.sub(S);const I=1/(M.x*E.y-E.x*M.y);isFinite(I)&&(C.copy(v).multiplyScalar(E.y).addScaledVector(_,-M.y).multiplyScalar(I),y.copy(_).multiplyScalar(M.x).addScaledVector(v,-E.x).multiplyScalar(I),d[q].add(C),d[A].add(C),d[w].add(C),m[q].add(y),m[A].add(y),m[w].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let q=0,A=D.length;q<A;++q){const w=D[q],I=w.start,Q=w.count;for(let Z=I,lt=I+Q;Z<lt;Z+=3)x(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const U=new K,N=new K,B=new K,F=new K;function P(q){B.fromBufferAttribute(l,q),F.copy(B);const A=d[q];U.copy(A),U.sub(B.multiplyScalar(B.dot(A))).normalize(),N.crossVectors(F,A);const I=N.dot(m[q])<0?-1:1;h.setXYZW(q,U.x,U.y,U.z,I)}for(let q=0,A=D.length;q<A;++q){const w=D[q],I=w.start,Q=w.count;for(let Z=I,lt=I+Q;Z<lt;Z+=3)P(e.getX(Z+0)),P(e.getX(Z+1)),P(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ai(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,M=r.count;S<M;S++)r.setXYZ(S,0,0,0);const l=new K,c=new K,h=new K,d=new K,m=new K,p=new K,v=new K,_=new K;if(e)for(let S=0,M=e.count;S<M;S+=3){const E=e.getX(S+0),C=e.getX(S+1),y=e.getX(S+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,y),v.subVectors(h,c),_.subVectors(l,c),v.cross(_),d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,C),p.fromBufferAttribute(r,y),d.add(v),m.add(v),p.add(v),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),c.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),v.subVectors(h,c),_.subVectors(l,c),v.cross(_),r.setXYZ(S+0,v.x,v.y,v.z),r.setXYZ(S+1,v.x,v.y,v.z),r.setXYZ(S+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)_n.fromBufferAttribute(e,i),_n.normalize(),e.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function e(d,m){const p=d.array,v=d.itemSize,_=d.normalized,S=new p.constructor(m.length*v);let M=0,E=0;for(let C=0,y=m.length;C<y;C++){d.isInterleavedBufferAttribute?M=m[C]*d.data.stride+d.offset:M=m[C]*v;for(let x=0;x<v;x++)S[E++]=p[M++]}return new ai(S,v,_)}if(this.index===null)return ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Bn,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,r);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let v=0,_=p.length;v<_;v++){const S=p[v],M=e(S,r);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let _=0,S=p.length;_<S;_++){const M=p[_];v.push(M.toJSON(e.data))}v.length>0&&(l[m]=v,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const c=e.morphAttributes;for(const p in c){const v=[],_=c[p];for(let S=0,M=_.length;S<M;S++)v.push(_[S].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,v=h.length;p<v;p++){const _=h[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const g_=new Qe,br=new ru,Ac=new il,__=new K,Rc=new K,Cc=new K,wc=new K,Gh=new K,Dc=new K,v_=new K,Uc=new K;class Di extends zn{constructor(e=new Bn,i=new tu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){Dc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const v=d[m],_=c[m];v!==0&&(Gh.fromBufferAttribute(_,e),h?Dc.addScaledVector(Gh,v):Dc.addScaledVector(Gh.sub(i),v))}i.add(Dc)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ac.copy(r.boundingSphere),Ac.applyMatrix4(c),br.copy(e.ray).recast(e.near),!(Ac.containsPoint(br.origin)===!1&&(br.intersectSphere(Ac,__)===null||br.origin.distanceToSquared(__)>(e.far-e.near)**2))&&(g_.copy(c).invert(),br.copy(e.ray).applyMatrix4(g_),!(r.boundingBox!==null&&br.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,br)))}_computeIntersections(e,i,r){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,v=c.attributes.uv1,_=c.attributes.normal,S=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,C=S.length;E<C;E++){const y=S[E],x=h[y.materialIndex],D=Math.max(y.start,M.start),U=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let N=D,B=U;N<B;N+=3){const F=d.getX(N),P=d.getX(N+1),q=d.getX(N+2);l=Nc(this,x,e,r,p,v,_,F,P,q),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),C=Math.min(d.count,M.start+M.count);for(let y=E,x=C;y<x;y+=3){const D=d.getX(y),U=d.getX(y+1),N=d.getX(y+2);l=Nc(this,h,e,r,p,v,_,D,U,N),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let E=0,C=S.length;E<C;E++){const y=S[E],x=h[y.materialIndex],D=Math.max(y.start,M.start),U=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let N=D,B=U;N<B;N+=3){const F=N,P=N+1,q=N+2;l=Nc(this,x,e,r,p,v,_,F,P,q),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let y=E,x=C;y<x;y+=3){const D=y,U=y+1,N=y+2;l=Nc(this,h,e,r,p,v,_,D,U,N),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function Jy(o,e,i,r,l,c,h,d){let m;if(e.side===jn?m=r.intersectTriangle(h,c,l,!0,d):m=r.intersectTriangle(l,c,h,e.side===nr,d),m===null)return null;Uc.copy(d),Uc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Uc);return p<i.near||p>i.far?null:{distance:p,point:Uc.clone(),object:o}}function Nc(o,e,i,r,l,c,h,d,m,p){o.getVertexPosition(d,Rc),o.getVertexPosition(m,Cc),o.getVertexPosition(p,wc);const v=Jy(o,e,i,r,Rc,Cc,wc,v_);if(v){const _=new K;xi.getBarycoord(v_,Rc,Cc,wc,_),l&&(v.uv=xi.getInterpolatedAttribute(l,d,m,p,_,new he)),c&&(v.uv1=xi.getInterpolatedAttribute(c,d,m,p,_,new he)),h&&(v.normal=xi.getInterpolatedAttribute(h,d,m,p,_,new K),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new K,materialIndex:0};xi.getNormal(Rc,Cc,wc,S.normal),v.face=S,v.barycoord=_}return v}class al extends Bn{constructor(e=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],v=[],_=[];let S=0,M=0;E("z","y","x",-1,-1,r,i,e,h,c,0),E("z","y","x",1,-1,r,i,-e,h,c,1),E("x","z","y",1,1,e,r,i,l,h,2),E("x","z","y",1,-1,e,r,-i,l,h,3),E("x","y","z",1,-1,e,i,r,l,c,4),E("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new wn(p,3)),this.setAttribute("normal",new wn(v,3)),this.setAttribute("uv",new wn(_,2));function E(C,y,x,D,U,N,B,F,P,q,A){const w=N/P,I=B/q,Q=N/2,Z=B/2,lt=F/2,ut=P+1,z=q+1;let G=0,tt=0;const yt=new K;for(let vt=0;vt<z;vt++){const O=vt*I-Z;for(let nt=0;nt<ut;nt++){const mt=nt*w-Q;yt[C]=mt*D,yt[y]=O*U,yt[x]=lt,p.push(yt.x,yt.y,yt.z),yt[C]=0,yt[y]=0,yt[x]=F>0?1:-1,v.push(yt.x,yt.y,yt.z),_.push(nt/P),_.push(1-vt/q),G+=1}}for(let vt=0;vt<q;vt++)for(let O=0;O<P;O++){const nt=S+O+ut*vt,mt=S+O+ut*(vt+1),At=S+(O+1)+ut*(vt+1),It=S+(O+1)+ut*vt;m.push(nt,mt,It),m.push(mt,At,It),tt+=6}d.addGroup(M,tt,A),M+=tt,S+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new al(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Gs(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Hn(o){const e={};for(let i=0;i<o.length;i++){const r=Gs(o[i]);for(const l in r)e[l]=r[l]}return e}function $y(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function bv(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Te.workingColorSpace}const tM={clone:Gs,merge:Hn};var eM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wi extends Lr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eM,this.fragmentShader=nM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gs(e.uniforms),this.uniformsGroups=$y(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Ev extends zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=Gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ja=new K,x_=new he,S_=new he;class _i extends Ev{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Xd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xd*2*Math.atan(Math.tan(Sh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Ja.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ja.x,Ja.y).multiplyScalar(-e/Ja.z),Ja.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ja.x,Ja.y).multiplyScalar(-e/Ja.z)}getViewSize(e,i){return this.getViewBounds(e,x_,S_),i.subVectors(S_,x_)}setViewOffset(e,i,r,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Sh*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Rs=-90,Cs=1;class iM extends zn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new _i(Rs,Cs,e,i);l.layers=this.layers,this.add(l);const c=new _i(Rs,Cs,e,i);c.layers=this.layers,this.add(c);const h=new _i(Rs,Cs,e,i);h.layers=this.layers,this.add(h);const d=new _i(Rs,Cs,e,i);d.layers=this.layers,this.add(d);const m=new _i(Rs,Cs,e,i);m.layers=this.layers,this.add(m);const p=new _i(Rs,Cs,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(e===Gi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Qc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,v]=this.children,_=e.getRenderTarget(),S=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),e.render(i,v),e.setRenderTarget(_,S,M),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Tv extends Pn{constructor(e=[],i=Nr,r,l,c,h,d,m,p,v){super(e,i,r,l,c,h,d,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Av extends ki{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new Tv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new al(5,5,5),c=new Wi({name:"CubemapFromEquirect",uniforms:Gs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:jn,blending:ga});c.uniforms.tEquirect.value=i;const h=new Di(l,c),d=i.minFilter;return i.minFilter===Dr&&(i.minFilter=On),new iM(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(c)}}class Os extends zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const aM={type:"move"};class Vh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Os,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Os,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Os,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const C of e.hand.values()){const y=i.getJointPose(C,r),x=this._getHandJoint(p,C);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const v=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],S=v.position.distanceTo(_.position),M=.02,E=.005;p.inputState.pinching&&S>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(aM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Os;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class op{constructor(e,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ce(e),this.density=i}clone(){return new op(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class rM extends zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sa,this.environmentIntensity=1,this.environmentRotation=new Sa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class sM{constructor(e,i){this.isInterleavedBuffer=!0,this.array=e,this.stride=i,this.count=e!==void 0?e.length/i:0,this.usage=kd,this.updateRanges=[],this.version=0,this.uuid=er()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,i,r){e*=this.stride,r*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[e+l]=i.array[r+l];return this}set(e,i=0){return this.array.set(e,i),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=er()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=er()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const In=new K;class eu{constructor(e,i,r,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=i,this.offset=r,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let i=0,r=this.data.count;i<r;i++)In.fromBufferAttribute(this,i),In.applyMatrix4(e),this.setXYZ(i,In.x,In.y,In.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)In.fromBufferAttribute(this,i),In.applyNormalMatrix(e),this.setXYZ(i,In.x,In.y,In.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)In.fromBufferAttribute(this,i),In.transformDirection(e),this.setXYZ(i,In.x,In.y,In.z);return this}getComponent(e,i){let r=this.array[e*this.data.stride+this.offset+i];return this.normalized&&(r=Ii(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=ke(r,this.array)),this.data.array[e*this.data.stride+this.offset+i]=r,this}setX(e,i){return this.normalized&&(i=ke(i,this.array)),this.data.array[e*this.data.stride+this.offset]=i,this}setY(e,i){return this.normalized&&(i=ke(i,this.array)),this.data.array[e*this.data.stride+this.offset+1]=i,this}setZ(e,i){return this.normalized&&(i=ke(i,this.array)),this.data.array[e*this.data.stride+this.offset+2]=i,this}setW(e,i){return this.normalized&&(i=ke(i,this.array)),this.data.array[e*this.data.stride+this.offset+3]=i,this}getX(e){let i=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(i=Ii(i,this.array)),i}getY(e){let i=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(i=Ii(i,this.array)),i}getZ(e){let i=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(i=Ii(i,this.array)),i}getW(e){let i=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(i=Ii(i,this.array)),i}setXY(e,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(i=ke(i,this.array),r=ke(r,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=r,this}setXYZ(e,i,r,l){return e=e*this.data.stride+this.offset,this.normalized&&(i=ke(i,this.array),r=ke(r,this.array),l=ke(l,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=r,this.data.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e=e*this.data.stride+this.offset,this.normalized&&(i=ke(i,this.array),r=ke(r,this.array),l=ke(l,this.array),c=ke(c,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=r,this.data.array[e+2]=l,this.data.array[e+3]=c,this}clone(e){if(e===void 0){$c("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new ai(new this.array.constructor(i),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new eu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){$c("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Rv extends Lr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ws;const ko=new K,Ds=new K,Us=new K,Ns=new he,Xo=new he,Cv=new Qe,Lc=new K,Wo=new K,Oc=new K,y_=new he,kh=new he,M_=new he;class oM extends zn{constructor(e=new Rv){if(super(),this.isSprite=!0,this.type="Sprite",ws===void 0){ws=new Bn;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new sM(i,5);ws.setIndex([0,1,2,0,2,3]),ws.setAttribute("position",new eu(r,3,0,!1)),ws.setAttribute("uv",new eu(r,2,3,!1))}this.geometry=ws,this.material=e,this.center=new he(.5,.5),this.count=1}raycast(e,i){e.camera===null&&be('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ds.setFromMatrixScale(this.matrixWorld),Cv.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Us.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ds.multiplyScalar(-Us.z);const r=this.material.rotation;let l,c;r!==0&&(c=Math.cos(r),l=Math.sin(r));const h=this.center;Pc(Lc.set(-.5,-.5,0),Us,h,Ds,l,c),Pc(Wo.set(.5,-.5,0),Us,h,Ds,l,c),Pc(Oc.set(.5,.5,0),Us,h,Ds,l,c),y_.set(0,0),kh.set(1,0),M_.set(1,1);let d=e.ray.intersectTriangle(Lc,Wo,Oc,!1,ko);if(d===null&&(Pc(Wo.set(-.5,.5,0),Us,h,Ds,l,c),kh.set(0,1),d=e.ray.intersectTriangle(Lc,Oc,Wo,!1,ko),d===null))return;const m=e.ray.origin.distanceTo(ko);m<e.near||m>e.far||i.push({distance:m,point:ko.clone(),uv:xi.getInterpolation(ko,Lc,Wo,Oc,y_,kh,M_,new he),face:null,object:this})}copy(e,i){return super.copy(e,i),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Pc(o,e,i,r,l,c){Ns.subVectors(o,i).addScalar(.5).multiply(r),l!==void 0?(Xo.x=c*Ns.x-l*Ns.y,Xo.y=l*Ns.x+c*Ns.y):Xo.copy(Ns),o.copy(e),o.x+=Xo.x,o.y+=Xo.y,o.applyMatrix4(Cv)}class lM extends Pn{constructor(e=null,i=1,r=1,l,c,h,d,m,p=Cn,v=Cn,_,S){super(null,h,d,m,p,v,l,c,_,S),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xh=new K,cM=new K,uM=new ue;class Rr{constructor(e=new K(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Xh.subVectors(r,i).cross(cM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Xh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||uM.getNormalMatrix(e),l=this.coplanarPoint(Xh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Er=new il,fM=new he(.5,.5),zc=new K;class wv{constructor(e=new Rr,i=new Rr,r=new Rr,l=new Rr,c=new Rr,h=new Rr){this.planes=[e,i,r,l,c,h]}set(e,i,r,l,c,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Gi,r=!1){const l=this.planes,c=e.elements,h=c[0],d=c[1],m=c[2],p=c[3],v=c[4],_=c[5],S=c[6],M=c[7],E=c[8],C=c[9],y=c[10],x=c[11],D=c[12],U=c[13],N=c[14],B=c[15];if(l[0].setComponents(p-h,M-v,x-E,B-D).normalize(),l[1].setComponents(p+h,M+v,x+E,B+D).normalize(),l[2].setComponents(p+d,M+_,x+C,B+U).normalize(),l[3].setComponents(p-d,M-_,x-C,B-U).normalize(),r)l[4].setComponents(m,S,y,N).normalize(),l[5].setComponents(p-m,M-S,x-y,B-N).normalize();else if(l[4].setComponents(p-m,M-S,x-y,B-N).normalize(),i===Gi)l[5].setComponents(p+m,M+S,x+y,B+N).normalize();else if(i===Qc)l[5].setComponents(m,S,y,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Er.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Er)}intersectsSprite(e){Er.center.set(0,0,0);const i=fM.distanceTo(e.center);return Er.radius=.7071067811865476+i,Er.applyMatrix4(e.matrixWorld),this.intersectsSphere(Er)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(zc.x=l.normal.x>0?e.max.x:e.min.x,zc.y=l.normal.y>0?e.max.y:e.min.y,zc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(zc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Dv extends Lr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const nu=new K,iu=new K,b_=new Qe,qo=new ru,Bc=new il,Wh=new K,E_=new K;class hM extends zn{constructor(e=new Bn,i=new Dv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[0];for(let l=1,c=i.count;l<c;l++)nu.fromBufferAttribute(i,l-1),iu.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=nu.distanceTo(iu);e.setAttribute("lineDistance",new wn(r,1))}else ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Bc.copy(r.boundingSphere),Bc.applyMatrix4(l),Bc.radius+=c,e.ray.intersectsSphere(Bc)===!1)return;b_.copy(l).invert(),qo.copy(e.ray).applyMatrix4(b_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,v=r.index,S=r.attributes.position;if(v!==null){const M=Math.max(0,h.start),E=Math.min(v.count,h.start+h.count);for(let C=M,y=E-1;C<y;C+=p){const x=v.getX(C),D=v.getX(C+1),U=Fc(this,e,qo,m,x,D,C);U&&i.push(U)}if(this.isLineLoop){const C=v.getX(E-1),y=v.getX(M),x=Fc(this,e,qo,m,C,y,E-1);x&&i.push(x)}}else{const M=Math.max(0,h.start),E=Math.min(S.count,h.start+h.count);for(let C=M,y=E-1;C<y;C+=p){const x=Fc(this,e,qo,m,C,C+1,C);x&&i.push(x)}if(this.isLineLoop){const C=Fc(this,e,qo,m,E-1,M,E-1);C&&i.push(C)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Fc(o,e,i,r,l,c,h){const d=o.geometry.attributes.position;if(nu.fromBufferAttribute(d,l),iu.fromBufferAttribute(d,c),i.distanceSqToSegment(nu,iu,Wh,E_)>r)return;Wh.applyMatrix4(o.matrixWorld);const p=e.ray.origin.distanceTo(Wh);if(!(p<e.near||p>e.far))return{distance:p,point:E_.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}const T_=new K,A_=new K;class dM extends hM{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[];for(let l=0,c=i.count;l<c;l+=2)T_.fromBufferAttribute(i,l),A_.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+T_.distanceTo(A_);e.setAttribute("lineDistance",new wn(r,1))}else ie("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Uv extends Lr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const R_=new Qe,Wd=new ru,Ic=new il,Hc=new K;class pM extends zn{constructor(e=new Bn,i=new Uv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ic.copy(r.boundingSphere),Ic.applyMatrix4(l),Ic.radius+=c,e.ray.intersectsSphere(Ic)===!1)return;R_.copy(l).invert(),Wd.copy(e.ray).applyMatrix4(R_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=r.index,_=r.attributes.position;if(p!==null){const S=Math.max(0,h.start),M=Math.min(p.count,h.start+h.count);for(let E=S,C=M;E<C;E++){const y=p.getX(E);Hc.fromBufferAttribute(_,y),C_(Hc,y,m,l,e,i,this)}}else{const S=Math.max(0,h.start),M=Math.min(_.count,h.start+h.count);for(let E=S,C=M;E<C;E++)Hc.fromBufferAttribute(_,E),C_(Hc,E,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function C_(o,e,i,r,l,c,h){const d=Wd.distanceSqToPoint(o);if(d<i){const m=new K;Wd.closestPointToPoint(o,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:h})}}class w_ extends Pn{constructor(e,i,r,l,c,h,d,m,p){super(e,i,r,l,c,h,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class tl extends Pn{constructor(e,i,r=Xi,l,c,h,d=Cn,m=Cn,p,v=xa,_=1){if(v!==xa&&v!==Ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:i,depth:_};super(S,l,c,h,d,m,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new rp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class mM extends tl{constructor(e,i=Xi,r=Nr,l,c,h=Cn,d=Cn,m,p=xa){const v={width:e,height:e,depth:1},_=[v,v,v,v,v,v];super(e,e,i,r,l,c,h,d,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Nv extends Pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class lp extends Bn{constructor(e=[],i=[],r=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:r,detail:l};const c=[],h=[];d(l),p(r),v(),this.setAttribute("position",new wn(c,3)),this.setAttribute("normal",new wn(c.slice(),3)),this.setAttribute("uv",new wn(h,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function d(D){const U=new K,N=new K,B=new K;for(let F=0;F<i.length;F+=3)M(i[F+0],U),M(i[F+1],N),M(i[F+2],B),m(U,N,B,D)}function m(D,U,N,B){const F=B+1,P=[];for(let q=0;q<=F;q++){P[q]=[];const A=D.clone().lerp(N,q/F),w=U.clone().lerp(N,q/F),I=F-q;for(let Q=0;Q<=I;Q++)Q===0&&q===F?P[q][Q]=A:P[q][Q]=A.clone().lerp(w,Q/I)}for(let q=0;q<F;q++)for(let A=0;A<2*(F-q)-1;A++){const w=Math.floor(A/2);A%2===0?(S(P[q][w+1]),S(P[q+1][w]),S(P[q][w])):(S(P[q][w+1]),S(P[q+1][w+1]),S(P[q+1][w]))}}function p(D){const U=new K;for(let N=0;N<c.length;N+=3)U.x=c[N+0],U.y=c[N+1],U.z=c[N+2],U.normalize().multiplyScalar(D),c[N+0]=U.x,c[N+1]=U.y,c[N+2]=U.z}function v(){const D=new K;for(let U=0;U<c.length;U+=3){D.x=c[U+0],D.y=c[U+1],D.z=c[U+2];const N=y(D)/2/Math.PI+.5,B=x(D)/Math.PI+.5;h.push(N,1-B)}E(),_()}function _(){for(let D=0;D<h.length;D+=6){const U=h[D+0],N=h[D+2],B=h[D+4],F=Math.max(U,N,B),P=Math.min(U,N,B);F>.9&&P<.1&&(U<.2&&(h[D+0]+=1),N<.2&&(h[D+2]+=1),B<.2&&(h[D+4]+=1))}}function S(D){c.push(D.x,D.y,D.z)}function M(D,U){const N=D*3;U.x=e[N+0],U.y=e[N+1],U.z=e[N+2]}function E(){const D=new K,U=new K,N=new K,B=new K,F=new he,P=new he,q=new he;for(let A=0,w=0;A<c.length;A+=9,w+=6){D.set(c[A+0],c[A+1],c[A+2]),U.set(c[A+3],c[A+4],c[A+5]),N.set(c[A+6],c[A+7],c[A+8]),F.set(h[w+0],h[w+1]),P.set(h[w+2],h[w+3]),q.set(h[w+4],h[w+5]),B.copy(D).add(U).add(N).divideScalar(3);const I=y(B);C(F,w+0,D,I),C(P,w+2,U,I),C(q,w+4,N,I)}}function C(D,U,N,B){B<0&&D.x===1&&(h[U]=D.x-1),N.x===0&&N.z===0&&(h[U]=B/2/Math.PI+.5)}function y(D){return Math.atan2(D.z,-D.x)}function x(D){return Math.atan2(-D.y,Math.sqrt(D.x*D.x+D.z*D.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lp(e.vertices,e.indices,e.radius,e.detail)}}class cp extends lp{constructor(e=1,i=0){const r=(1+Math.sqrt(5))/2,l=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,c,e,i),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new cp(e.radius,e.detail)}}class su extends Bn{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,v=m+1,_=e/d,S=i/m,M=[],E=[],C=[],y=[];for(let x=0;x<v;x++){const D=x*S-h;for(let U=0;U<p;U++){const N=U*_-c;E.push(N,-D,0),C.push(0,0,1),y.push(U/d),y.push(1-x/m)}}for(let x=0;x<m;x++)for(let D=0;D<d;D++){const U=D+p*x,N=D+p*(x+1),B=D+1+p*(x+1),F=D+1+p*x;M.push(U,N,F),M.push(N,B,F)}this.setIndex(M),this.setAttribute("position",new wn(E,3)),this.setAttribute("normal",new wn(C,3)),this.setAttribute("uv",new wn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new su(e.width,e.height,e.widthSegments,e.heightSegments)}}class up extends Bn{constructor(e=.5,i=1,r=32,l=1,c=0,h=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:i,thetaSegments:r,phiSegments:l,thetaStart:c,thetaLength:h},r=Math.max(3,r),l=Math.max(1,l);const d=[],m=[],p=[],v=[];let _=e;const S=(i-e)/l,M=new K,E=new he;for(let C=0;C<=l;C++){for(let y=0;y<=r;y++){const x=c+y/r*h;M.x=_*Math.cos(x),M.y=_*Math.sin(x),m.push(M.x,M.y,M.z),p.push(0,0,1),E.x=(M.x/i+1)/2,E.y=(M.y/i+1)/2,v.push(E.x,E.y)}_+=S}for(let C=0;C<l;C++){const y=C*(r+1);for(let x=0;x<r;x++){const D=x+y,U=D,N=D+r+1,B=D+r+2,F=D+1;d.push(U,N,F),d.push(N,B,F)}}this.setIndex(d),this.setAttribute("position",new wn(m,3)),this.setAttribute("normal",new wn(p,3)),this.setAttribute("uv",new wn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new up(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class gM extends Wi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class _M extends Lr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ey,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vM extends Lr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Lv extends Ev{constructor(e=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,h=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=v*this.view.offsetY,m=d-v*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class xM extends _i{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const D_=new Qe;class SM{constructor(e,i,r=0,l=1/0){this.ray=new ru(e,i),this.near=r,this.far=l,this.camera=null,this.layers=new sp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):be("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return D_.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(D_),this}intersectObject(e,i=!0,r=[]){return qd(e,this,r,i),r.sort(U_),r}intersectObjects(e,i=!0,r=[]){for(let l=0,c=e.length;l<c;l++)qd(e[l],this,r,i);return r.sort(U_),r}}function U_(o,e){return o.distance-e.distance}function qd(o,e,i,r){let l=!0;if(o.layers.test(e.layers)&&o.raycast(e,i)===!1&&(l=!1),l===!0&&r===!0){const c=o.children;for(let h=0,d=c.length;h<d;h++)qd(c[h],e,i,!0)}}function N_(o,e,i,r){const l=yM(r);switch(i){case mv:return o*e;case _v:return o*e/l.components*l.byteLength;case tp:return o*e/l.components*l.byteLength;case Is:return o*e*2/l.components*l.byteLength;case ep:return o*e*2/l.components*l.byteLength;case gv:return o*e*3/l.components*l.byteLength;case wi:return o*e*4/l.components*l.byteLength;case np:return o*e*4/l.components*l.byteLength;case Xc:case Wc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case qc:case Yc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case hd:case pd:return Math.max(o,16)*Math.max(e,8)/4;case fd:case dd:return Math.max(o,8)*Math.max(e,8)/2;case md:case gd:case vd:case xd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case _d:case Sd:case yd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Md:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case bd:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Ed:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Td:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Ad:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Rd:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Cd:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case wd:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Dd:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Ud:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Nd:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Ld:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Od:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Pd:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case zd:case Bd:case Fd:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Id:case Hd:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Gd:case Vd:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function yM(o){switch(o){case vi:case fv:return{byteLength:1,components:1};case Qo:case hv:case va:return{byteLength:2,components:1};case Jd:case $d:return{byteLength:2,components:4};case Xi:case Qd:case Hi:return{byteLength:4,components:1};case dv:case pv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kd}}));typeof window<"u"&&(window.__THREE__?ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kd);function Ov(){let o=null,e=!1,i=null,r=null;function l(c,h){i(c,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function MM(o){const e=new WeakMap;function i(d,m){const p=d.array,v=d.usage,_=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,v),d.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,m,p){const v=m.array,_=m.updateRanges;if(o.bindBuffer(p,d),_.length===0)o.bufferSubData(p,0,v);else{_.sort((M,E)=>M.start-E.start);let S=0;for(let M=1;M<_.length;M++){const E=_[S],C=_[M];C.start<=E.start+E.count+1?E.count=Math.max(E.count,C.start+C.count-E.start):(++S,_[S]=C)}_.length=S+1;for(let M=0,E=_.length;M<E;M++){const C=_[M];o.bufferSubData(p,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var bM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,EM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,TM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,AM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,RM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,CM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,DM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,UM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,NM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,LM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,OM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,PM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,BM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,FM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,IM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,HM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,GM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,VM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,XM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,WM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,qM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,YM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,jM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ZM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,KM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,QM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,JM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$M="gl_FragColor = linearToOutputTexel( gl_FragColor );",tb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,nb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ib=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ab=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ob=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ub=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,fb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,db=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,mb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,gb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_b=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Mb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Eb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ab=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Db=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ub=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Nb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ob=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ib=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Gb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Vb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Jb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$b=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,aE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,rE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,oE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,uE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,hE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_E=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,SE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ME=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,DE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,UE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,NE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,LE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,PE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,BE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,GE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,kE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,XE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,YE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,QE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,JE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$E=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,fe={alphahash_fragment:bM,alphahash_pars_fragment:EM,alphamap_fragment:TM,alphamap_pars_fragment:AM,alphatest_fragment:RM,alphatest_pars_fragment:CM,aomap_fragment:wM,aomap_pars_fragment:DM,batching_pars_vertex:UM,batching_vertex:NM,begin_vertex:LM,beginnormal_vertex:OM,bsdfs:PM,iridescence_fragment:zM,bumpmap_pars_fragment:BM,clipping_planes_fragment:FM,clipping_planes_pars_fragment:IM,clipping_planes_pars_vertex:HM,clipping_planes_vertex:GM,color_fragment:VM,color_pars_fragment:kM,color_pars_vertex:XM,color_vertex:WM,common:qM,cube_uv_reflection_fragment:YM,defaultnormal_vertex:jM,displacementmap_pars_vertex:ZM,displacementmap_vertex:KM,emissivemap_fragment:QM,emissivemap_pars_fragment:JM,colorspace_fragment:$M,colorspace_pars_fragment:tb,envmap_fragment:eb,envmap_common_pars_fragment:nb,envmap_pars_fragment:ib,envmap_pars_vertex:ab,envmap_physical_pars_fragment:mb,envmap_vertex:rb,fog_vertex:sb,fog_pars_vertex:ob,fog_fragment:lb,fog_pars_fragment:cb,gradientmap_pars_fragment:ub,lightmap_pars_fragment:fb,lights_lambert_fragment:hb,lights_lambert_pars_fragment:db,lights_pars_begin:pb,lights_toon_fragment:gb,lights_toon_pars_fragment:_b,lights_phong_fragment:vb,lights_phong_pars_fragment:xb,lights_physical_fragment:Sb,lights_physical_pars_fragment:yb,lights_fragment_begin:Mb,lights_fragment_maps:bb,lights_fragment_end:Eb,logdepthbuf_fragment:Tb,logdepthbuf_pars_fragment:Ab,logdepthbuf_pars_vertex:Rb,logdepthbuf_vertex:Cb,map_fragment:wb,map_pars_fragment:Db,map_particle_fragment:Ub,map_particle_pars_fragment:Nb,metalnessmap_fragment:Lb,metalnessmap_pars_fragment:Ob,morphinstance_vertex:Pb,morphcolor_vertex:zb,morphnormal_vertex:Bb,morphtarget_pars_vertex:Fb,morphtarget_vertex:Ib,normal_fragment_begin:Hb,normal_fragment_maps:Gb,normal_pars_fragment:Vb,normal_pars_vertex:kb,normal_vertex:Xb,normalmap_pars_fragment:Wb,clearcoat_normal_fragment_begin:qb,clearcoat_normal_fragment_maps:Yb,clearcoat_pars_fragment:jb,iridescence_pars_fragment:Zb,opaque_fragment:Kb,packing:Qb,premultiplied_alpha_fragment:Jb,project_vertex:$b,dithering_fragment:tE,dithering_pars_fragment:eE,roughnessmap_fragment:nE,roughnessmap_pars_fragment:iE,shadowmap_pars_fragment:aE,shadowmap_pars_vertex:rE,shadowmap_vertex:sE,shadowmask_pars_fragment:oE,skinbase_vertex:lE,skinning_pars_vertex:cE,skinning_vertex:uE,skinnormal_vertex:fE,specularmap_fragment:hE,specularmap_pars_fragment:dE,tonemapping_fragment:pE,tonemapping_pars_fragment:mE,transmission_fragment:gE,transmission_pars_fragment:_E,uv_pars_fragment:vE,uv_pars_vertex:xE,uv_vertex:SE,worldpos_vertex:yE,background_vert:ME,background_frag:bE,backgroundCube_vert:EE,backgroundCube_frag:TE,cube_vert:AE,cube_frag:RE,depth_vert:CE,depth_frag:wE,distance_vert:DE,distance_frag:UE,equirect_vert:NE,equirect_frag:LE,linedashed_vert:OE,linedashed_frag:PE,meshbasic_vert:zE,meshbasic_frag:BE,meshlambert_vert:FE,meshlambert_frag:IE,meshmatcap_vert:HE,meshmatcap_frag:GE,meshnormal_vert:VE,meshnormal_frag:kE,meshphong_vert:XE,meshphong_frag:WE,meshphysical_vert:qE,meshphysical_frag:YE,meshtoon_vert:jE,meshtoon_frag:ZE,points_vert:KE,points_frag:QE,shadow_vert:JE,shadow_frag:$E,sprite_vert:tT,sprite_frag:eT},Ot={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},Bi={basic:{uniforms:Hn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:Hn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Ce(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:Hn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:Hn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:Hn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new Ce(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:Hn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:Hn([Ot.points,Ot.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:Hn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:Hn([Ot.common,Ot.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:Hn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:Hn([Ot.sprite,Ot.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distance:{uniforms:Hn([Ot.common,Ot.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distance_vert,fragmentShader:fe.distance_frag},shadow:{uniforms:Hn([Ot.lights,Ot.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};Bi.physical={uniforms:Hn([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const Gc={r:0,b:0,g:0},Tr=new Sa,nT=new Qe;function iT(o,e,i,r,l,c,h){const d=new Ce(0);let m=c===!0?0:1,p,v,_=null,S=0,M=null;function E(U){let N=U.isScene===!0?U.background:null;return N&&N.isTexture&&(N=(U.backgroundBlurriness>0?i:e).get(N)),N}function C(U){let N=!1;const B=E(U);B===null?x(d,m):B&&B.isColor&&(x(B,1),N=!0);const F=o.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,h):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||N)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(U,N){const B=E(N);B&&(B.isCubeTexture||B.mapping===au)?(v===void 0&&(v=new Di(new al(1,1,1),new Wi({name:"BackgroundCubeMaterial",uniforms:Gs(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(F,P,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),Tr.copy(N.backgroundRotation),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),v.material.uniforms.envMap.value=B,v.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(nT.makeRotationFromEuler(Tr)),v.material.toneMapped=Te.getTransfer(B.colorSpace)!==Ie,(_!==B||S!==B.version||M!==o.toneMapping)&&(v.material.needsUpdate=!0,_=B,S=B.version,M=o.toneMapping),v.layers.enableAll(),U.unshift(v,v.geometry,v.material,0,0,null)):B&&B.isTexture&&(p===void 0&&(p=new Di(new su(2,2),new Wi({name:"BackgroundMaterial",uniforms:Gs(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:nr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=B,p.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,p.material.toneMapped=Te.getTransfer(B.colorSpace)!==Ie,B.matrixAutoUpdate===!0&&B.updateMatrix(),p.material.uniforms.uvTransform.value.copy(B.matrix),(_!==B||S!==B.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,_=B,S=B.version,M=o.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function x(U,N){U.getRGB(Gc,bv(o)),r.buffers.color.setClear(Gc.r,Gc.g,Gc.b,N,h)}function D(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,N=1){d.set(U),m=N,x(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,x(d,m)},render:C,addToRenderList:y,dispose:D}}function aT(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=S(null);let c=l,h=!1;function d(w,I,Q,Z,lt){let ut=!1;const z=_(Z,Q,I);c!==z&&(c=z,p(c.object)),ut=M(w,Z,Q,lt),ut&&E(w,Z,Q,lt),lt!==null&&e.update(lt,o.ELEMENT_ARRAY_BUFFER),(ut||h)&&(h=!1,N(w,I,Q,Z),lt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(lt).buffer))}function m(){return o.createVertexArray()}function p(w){return o.bindVertexArray(w)}function v(w){return o.deleteVertexArray(w)}function _(w,I,Q){const Z=Q.wireframe===!0;let lt=r[w.id];lt===void 0&&(lt={},r[w.id]=lt);let ut=lt[I.id];ut===void 0&&(ut={},lt[I.id]=ut);let z=ut[Z];return z===void 0&&(z=S(m()),ut[Z]=z),z}function S(w){const I=[],Q=[],Z=[];for(let lt=0;lt<i;lt++)I[lt]=0,Q[lt]=0,Z[lt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:Q,attributeDivisors:Z,object:w,attributes:{},index:null}}function M(w,I,Q,Z){const lt=c.attributes,ut=I.attributes;let z=0;const G=Q.getAttributes();for(const tt in G)if(G[tt].location>=0){const vt=lt[tt];let O=ut[tt];if(O===void 0&&(tt==="instanceMatrix"&&w.instanceMatrix&&(O=w.instanceMatrix),tt==="instanceColor"&&w.instanceColor&&(O=w.instanceColor)),vt===void 0||vt.attribute!==O||O&&vt.data!==O.data)return!0;z++}return c.attributesNum!==z||c.index!==Z}function E(w,I,Q,Z){const lt={},ut=I.attributes;let z=0;const G=Q.getAttributes();for(const tt in G)if(G[tt].location>=0){let vt=ut[tt];vt===void 0&&(tt==="instanceMatrix"&&w.instanceMatrix&&(vt=w.instanceMatrix),tt==="instanceColor"&&w.instanceColor&&(vt=w.instanceColor));const O={};O.attribute=vt,vt&&vt.data&&(O.data=vt.data),lt[tt]=O,z++}c.attributes=lt,c.attributesNum=z,c.index=Z}function C(){const w=c.newAttributes;for(let I=0,Q=w.length;I<Q;I++)w[I]=0}function y(w){x(w,0)}function x(w,I){const Q=c.newAttributes,Z=c.enabledAttributes,lt=c.attributeDivisors;Q[w]=1,Z[w]===0&&(o.enableVertexAttribArray(w),Z[w]=1),lt[w]!==I&&(o.vertexAttribDivisor(w,I),lt[w]=I)}function D(){const w=c.newAttributes,I=c.enabledAttributes;for(let Q=0,Z=I.length;Q<Z;Q++)I[Q]!==w[Q]&&(o.disableVertexAttribArray(Q),I[Q]=0)}function U(w,I,Q,Z,lt,ut,z){z===!0?o.vertexAttribIPointer(w,I,Q,lt,ut):o.vertexAttribPointer(w,I,Q,Z,lt,ut)}function N(w,I,Q,Z){C();const lt=Z.attributes,ut=Q.getAttributes(),z=I.defaultAttributeValues;for(const G in ut){const tt=ut[G];if(tt.location>=0){let yt=lt[G];if(yt===void 0&&(G==="instanceMatrix"&&w.instanceMatrix&&(yt=w.instanceMatrix),G==="instanceColor"&&w.instanceColor&&(yt=w.instanceColor)),yt!==void 0){const vt=yt.normalized,O=yt.itemSize,nt=e.get(yt);if(nt===void 0)continue;const mt=nt.buffer,At=nt.type,It=nt.bytesPerElement,rt=At===o.INT||At===o.UNSIGNED_INT||yt.gpuType===Qd;if(yt.isInterleavedBufferAttribute){const ht=yt.data,Dt=ht.stride,kt=yt.offset;if(ht.isInstancedInterleavedBuffer){for(let Ht=0;Ht<tt.locationSize;Ht++)x(tt.location+Ht,ht.meshPerAttribute);w.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Ht=0;Ht<tt.locationSize;Ht++)y(tt.location+Ht);o.bindBuffer(o.ARRAY_BUFFER,mt);for(let Ht=0;Ht<tt.locationSize;Ht++)U(tt.location+Ht,O/tt.locationSize,At,vt,Dt*It,(kt+O/tt.locationSize*Ht)*It,rt)}else{if(yt.isInstancedBufferAttribute){for(let ht=0;ht<tt.locationSize;ht++)x(tt.location+ht,yt.meshPerAttribute);w.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let ht=0;ht<tt.locationSize;ht++)y(tt.location+ht);o.bindBuffer(o.ARRAY_BUFFER,mt);for(let ht=0;ht<tt.locationSize;ht++)U(tt.location+ht,O/tt.locationSize,At,vt,O*It,O/tt.locationSize*ht*It,rt)}}else if(z!==void 0){const vt=z[G];if(vt!==void 0)switch(vt.length){case 2:o.vertexAttrib2fv(tt.location,vt);break;case 3:o.vertexAttrib3fv(tt.location,vt);break;case 4:o.vertexAttrib4fv(tt.location,vt);break;default:o.vertexAttrib1fv(tt.location,vt)}}}}D()}function B(){q();for(const w in r){const I=r[w];for(const Q in I){const Z=I[Q];for(const lt in Z)v(Z[lt].object),delete Z[lt];delete I[Q]}delete r[w]}}function F(w){if(r[w.id]===void 0)return;const I=r[w.id];for(const Q in I){const Z=I[Q];for(const lt in Z)v(Z[lt].object),delete Z[lt];delete I[Q]}delete r[w.id]}function P(w){for(const I in r){const Q=r[I];if(Q[w.id]===void 0)continue;const Z=Q[w.id];for(const lt in Z)v(Z[lt].object),delete Z[lt];delete Q[w.id]}}function q(){A(),h=!0,c!==l&&(c=l,p(c.object))}function A(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:q,resetDefaultState:A,dispose:B,releaseStatesOfGeometry:F,releaseStatesOfProgram:P,initAttributes:C,enableAttribute:y,disableUnusedAttributes:D}}function rT(o,e,i){let r;function l(p){r=p}function c(p,v){o.drawArrays(r,p,v),i.update(v,r,1)}function h(p,v,_){_!==0&&(o.drawArraysInstanced(r,p,v,_),i.update(v,r,_))}function d(p,v,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,v,0,_);let M=0;for(let E=0;E<_;E++)M+=v[E];i.update(M,r,1)}function m(p,v,_,S){if(_===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<p.length;E++)h(p[E],v[E],S[E]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,v,0,S,0,_);let E=0;for(let C=0;C<_;C++)E+=v[C]*S[C];i.update(E,r,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function sT(o,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(P){return!(P!==wi&&r.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(P){const q=P===va&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==vi&&r.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Hi&&!q)}function m(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(ie("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const _=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),D=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),U=o.getParameter(o.MAX_VARYING_VECTORS),N=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),B=o.getParameter(o.MAX_SAMPLES),F=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:S,maxTextures:M,maxVertexTextures:E,maxTextureSize:C,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:D,maxVaryings:U,maxFragmentUniforms:N,maxSamples:B,samples:F}}function oT(o){const e=this;let i=null,r=0,l=!1,c=!1;const h=new Rr,d=new ue,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,S){const M=_.length!==0||S||r!==0||l;return l=S,r=_.length,M},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,S){i=v(_,S,0)},this.setState=function(_,S,M){const E=_.clippingPlanes,C=_.clipIntersection,y=_.clipShadows,x=o.get(_);if(!l||E===null||E.length===0||c&&!y)c?v(null):p();else{const D=c?0:r,U=D*4;let N=x.clippingState||null;m.value=N,N=v(E,S,U,M);for(let B=0;B!==U;++B)N[B]=i[B];x.clippingState=N,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=D}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(_,S,M,E){const C=_!==null?_.length:0;let y=null;if(C!==0){if(y=m.value,E!==!0||y===null){const x=M+C*4,D=S.matrixWorldInverse;d.getNormalMatrix(D),(y===null||y.length<x)&&(y=new Float32Array(x));for(let U=0,N=M;U!==C;++U,N+=4)h.copy(_[U]).applyMatrix4(D,d),h.normal.toArray(y,N),y[N+3]=h.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}function lT(o){let e=new WeakMap;function i(h,d){return d===od?h.mapping=Nr:d===ld&&(h.mapping=Fs),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===od||d===ld)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new Av(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const tr=4,L_=[.125,.215,.35,.446,.526,.582],wr=20,cT=256,Yo=new Lv,O_=new Ce;let qh=null,Yh=0,jh=0,Zh=!1;const uT=new K;class P_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,c={}){const{size:h=256,position:d=uT}=c;qh=this._renderer.getRenderTarget(),Yh=this._renderer.getActiveCubeFace(),jh=this._renderer.getActiveMipmapLevel(),Zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=F_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=B_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(qh,Yh,jh),this._renderer.xr.enabled=Zh,e.scissorTest=!1,Ls(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Nr||e.mapping===Fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qh=this._renderer.getRenderTarget(),Yh=this._renderer.getActiveCubeFace(),jh=this._renderer.getActiveMipmapLevel(),Zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:On,minFilter:On,generateMipmaps:!1,type:va,format:wi,colorSpace:Hs,depthBuffer:!1},l=z_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=z_(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=fT(c)),this._blurMaterial=dT(c,e,i),this._ggxMaterial=hT(c,e,i)}return l}_compileMaterial(e){const i=new Di(new Bn,e);this._renderer.compile(i,Yo)}_sceneToCubeUV(e,i,r,l,c){const m=new _i(90,1,i,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,S=_.autoClear,M=_.toneMapping;_.getClearColor(O_),_.toneMapping=Vi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Di(new al,new tu({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,y=C.material;let x=!1;const D=e.background;D?D.isColor&&(y.color.copy(D),e.background=null,x=!0):(y.color.copy(O_),x=!0);for(let U=0;U<6;U++){const N=U%3;N===0?(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[U],c.y,c.z)):N===1?(m.up.set(0,0,p[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[U],c.z)):(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[U]));const B=this._cubeSize;Ls(l,N*B,U>2?B:0,B,B),_.setRenderTarget(l),x&&_.render(C,m),_.render(e,m)}_.toneMapping=M,_.autoClear=S,e.background=D}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Nr||e.mapping===Fs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=F_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=B_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;Ls(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,Yo)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[r];d.material=h;const m=h.uniforms,p=r/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-v*v),S=0+p*1.25,M=_*S,{_lodMax:E}=this,C=this._sizeLods[r],y=3*C*(r>E-tr?r-E+tr:0),x=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=E-i,Ls(c,y,x,3*C,2*C),l.setRenderTarget(c),l.render(d,Yo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-r,Ls(e,y,x,3*C,2*C),l.setRenderTarget(e),l.render(d,Yo)}_blur(e,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",c),this._halfBlur(h,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&be("blur direction must be either latitudinal or longitudinal!");const v=3,_=this._lodMeshes[l];_.material=p;const S=p.uniforms,M=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*wr-1),C=c/E,y=isFinite(c)?1+Math.floor(v*C):wr;y>wr&&ie(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${wr}`);const x=[];let D=0;for(let P=0;P<wr;++P){const q=P/C,A=Math.exp(-q*q/2);x.push(A),P===0?D+=A:P<y&&(D+=2*A)}for(let P=0;P<x.length;P++)x[P]=x[P]/D;S.envMap.value=e.texture,S.samples.value=y,S.weights.value=x,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:U}=this;S.dTheta.value=E,S.mipInt.value=U-r;const N=this._sizeLods[l],B=3*N*(l>U-tr?l-U+tr:0),F=4*(this._cubeSize-N);Ls(i,B,F,3*N,2*N),m.setRenderTarget(i),m.render(_,Yo)}}function fT(o){const e=[],i=[],r=[];let l=o;const c=o-tr+1+L_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);e.push(d);let m=1/d;h>o-tr?m=L_[h-o+tr-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),v=-p,_=1+p,S=[v,v,_,v,_,_,v,v,_,_,v,_],M=6,E=6,C=3,y=2,x=1,D=new Float32Array(C*E*M),U=new Float32Array(y*E*M),N=new Float32Array(x*E*M);for(let F=0;F<M;F++){const P=F%3*2/3-1,q=F>2?0:-1,A=[P,q,0,P+2/3,q,0,P+2/3,q+1,0,P,q,0,P+2/3,q+1,0,P,q+1,0];D.set(A,C*E*F),U.set(S,y*E*F);const w=[F,F,F,F,F,F];N.set(w,x*E*F)}const B=new Bn;B.setAttribute("position",new ai(D,C)),B.setAttribute("uv",new ai(U,y)),B.setAttribute("faceIndex",new ai(N,x)),r.push(new Di(B,null)),l>tr&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function z_(o,e,i){const r=new ki(o,e,i);return r.texture.mapping=au,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ls(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function hT(o,e,i){return new Wi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:cT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ou(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ga,depthTest:!1,depthWrite:!1})}function dT(o,e,i){const r=new Float32Array(wr),l=new K(0,1,0);return new Wi({name:"SphericalGaussianBlur",defines:{n:wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ga,depthTest:!1,depthWrite:!1})}function B_(){return new Wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ga,depthTest:!1,depthWrite:!1})}function F_(){return new Wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ga,depthTest:!1,depthWrite:!1})}function ou(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function pT(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===od||m===ld,v=m===Nr||m===Fs;if(p||v){let _=e.get(d);const S=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new P_(o)),_=p?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{const M=d.image;return p&&M&&M.height>0||v&&M&&l(M)?(i===null&&(i=new P_(o)),_=p?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function l(d){let m=0;const p=6;for(let v=0;v<p;v++)d[v]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function mT(o){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=o.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&$o("WebGLRenderer: "+r+" extension not supported."),l}}}function gT(o,e,i,r){const l={},c=new WeakMap;function h(_){const S=_.target;S.index!==null&&e.remove(S.index);for(const E in S.attributes)e.remove(S.attributes[E]);S.removeEventListener("dispose",h),delete l[S.id];const M=c.get(S);M&&(e.remove(M),c.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(_,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(_){const S=_.attributes;for(const M in S)e.update(S[M],o.ARRAY_BUFFER)}function p(_){const S=[],M=_.index,E=_.attributes.position;let C=0;if(M!==null){const D=M.array;C=M.version;for(let U=0,N=D.length;U<N;U+=3){const B=D[U+0],F=D[U+1],P=D[U+2];S.push(B,F,F,P,P,B)}}else if(E!==void 0){const D=E.array;C=E.version;for(let U=0,N=D.length/3-1;U<N;U+=3){const B=U+0,F=U+1,P=U+2;S.push(B,F,F,P,P,B)}}else return;const y=new(vv(S)?Mv:yv)(S,1);y.version=C;const x=c.get(_);x&&e.remove(x),c.set(_,y)}function v(_){const S=c.get(_);if(S){const M=_.index;M!==null&&S.version<M.version&&p(_)}else p(_);return c.get(_)}return{get:d,update:m,getWireframeAttribute:v}}function _T(o,e,i){let r;function l(S){r=S}let c,h;function d(S){c=S.type,h=S.bytesPerElement}function m(S,M){o.drawElements(r,M,c,S*h),i.update(M,r,1)}function p(S,M,E){E!==0&&(o.drawElementsInstanced(r,M,c,S*h,E),i.update(M,r,E))}function v(S,M,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,S,0,E);let y=0;for(let x=0;x<E;x++)y+=M[x];i.update(y,r,1)}function _(S,M,E,C){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<S.length;x++)p(S[x]/h,M[x],C[x]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,c,S,0,C,0,E);let x=0;for(let D=0;D<E;D++)x+=M[D]*C[D];i.update(x,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=_}function vT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:be("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function xT(o,e,i){const r=new WeakMap,l=new rn;function c(h,d,m){const p=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=v!==void 0?v.length:0;let S=r.get(d);if(S===void 0||S.count!==_){let w=function(){q.dispose(),r.delete(d),d.removeEventListener("dispose",w)};var M=w;S!==void 0&&S.texture.dispose();const E=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],D=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let N=0;E===!0&&(N=1),C===!0&&(N=2),y===!0&&(N=3);let B=d.attributes.position.count*N,F=1;B>e.maxTextureSize&&(F=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const P=new Float32Array(B*F*4*_),q=new xv(P,B,F,_);q.type=Hi,q.needsUpdate=!0;const A=N*4;for(let I=0;I<_;I++){const Q=x[I],Z=D[I],lt=U[I],ut=B*F*4*I;for(let z=0;z<Q.count;z++){const G=z*A;E===!0&&(l.fromBufferAttribute(Q,z),P[ut+G+0]=l.x,P[ut+G+1]=l.y,P[ut+G+2]=l.z,P[ut+G+3]=0),C===!0&&(l.fromBufferAttribute(Z,z),P[ut+G+4]=l.x,P[ut+G+5]=l.y,P[ut+G+6]=l.z,P[ut+G+7]=0),y===!0&&(l.fromBufferAttribute(lt,z),P[ut+G+8]=l.x,P[ut+G+9]=l.y,P[ut+G+10]=l.z,P[ut+G+11]=lt.itemSize===4?l.w:1)}}S={count:_,texture:q,size:new he(B,F)},r.set(d,S),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let E=0;for(let y=0;y<p.length;y++)E+=p[y];const C=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:c}}function ST(o,e,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,v=m.geometry,_=e.get(m,v);if(l.get(_)!==p&&(e.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return _}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const yT={[iv]:"LINEAR_TONE_MAPPING",[av]:"REINHARD_TONE_MAPPING",[rv]:"CINEON_TONE_MAPPING",[sv]:"ACES_FILMIC_TONE_MAPPING",[lv]:"AGX_TONE_MAPPING",[cv]:"NEUTRAL_TONE_MAPPING",[ov]:"CUSTOM_TONE_MAPPING"};function MT(o,e,i,r,l){const c=new ki(e,i,{type:o,depthBuffer:r,stencilBuffer:l}),h=new ki(e,i,{type:va,depthBuffer:!1,stencilBuffer:!1}),d=new Bn;d.setAttribute("position",new wn([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new wn([0,2,0,0,2,0],2));const m=new gM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Di(d,m),v=new Lv(-1,1,1,-1,0,1);let _=null,S=null,M=!1,E,C=null,y=[],x=!1;this.setSize=function(D,U){c.setSize(D,U),h.setSize(D,U);for(let N=0;N<y.length;N++){const B=y[N];B.setSize&&B.setSize(D,U)}},this.setEffects=function(D){y=D,x=y.length>0&&y[0].isRenderPass===!0;const U=c.width,N=c.height;for(let B=0;B<y.length;B++){const F=y[B];F.setSize&&F.setSize(U,N)}},this.begin=function(D,U){if(M||D.toneMapping===Vi&&y.length===0)return!1;if(C=U,U!==null){const N=U.width,B=U.height;(c.width!==N||c.height!==B)&&this.setSize(N,B)}return x===!1&&D.setRenderTarget(c),E=D.toneMapping,D.toneMapping=Vi,!0},this.hasRenderPass=function(){return x},this.end=function(D,U){D.toneMapping=E,M=!0;let N=c,B=h;for(let F=0;F<y.length;F++){const P=y[F];if(P.enabled!==!1&&(P.render(D,B,N,U),P.needsSwap!==!1)){const q=N;N=B,B=q}}if(_!==D.outputColorSpace||S!==D.toneMapping){_=D.outputColorSpace,S=D.toneMapping,m.defines={},Te.getTransfer(_)===Ie&&(m.defines.SRGB_TRANSFER="");const F=yT[S];F&&(m.defines[F]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=N.texture,D.setRenderTarget(C),D.render(p,v),C=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.dispose(),h.dispose(),d.dispose(),m.dispose()}}const Pv=new Pn,Yd=new tl(1,1),zv=new xv,Bv=new Gy,Fv=new Tv,I_=[],H_=[],G_=new Float32Array(16),V_=new Float32Array(9),k_=new Float32Array(4);function ks(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let c=I_[l];if(c===void 0&&(c=new Float32Array(l),I_[l]=c),e!==0){r.toArray(c,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(c,d)}return c}function pn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function mn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function lu(o,e){let i=H_[e];i===void 0&&(i=new Int32Array(e),H_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function bT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function ET(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pn(i,e))return;o.uniform2fv(this.addr,e),mn(i,e)}}function TT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(pn(i,e))return;o.uniform3fv(this.addr,e),mn(i,e)}}function AT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pn(i,e))return;o.uniform4fv(this.addr,e),mn(i,e)}}function RT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(pn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),mn(i,e)}else{if(pn(i,r))return;k_.set(r),o.uniformMatrix2fv(this.addr,!1,k_),mn(i,r)}}function CT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(pn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),mn(i,e)}else{if(pn(i,r))return;V_.set(r),o.uniformMatrix3fv(this.addr,!1,V_),mn(i,r)}}function wT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(pn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),mn(i,e)}else{if(pn(i,r))return;G_.set(r),o.uniformMatrix4fv(this.addr,!1,G_),mn(i,r)}}function DT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function UT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pn(i,e))return;o.uniform2iv(this.addr,e),mn(i,e)}}function NT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(pn(i,e))return;o.uniform3iv(this.addr,e),mn(i,e)}}function LT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pn(i,e))return;o.uniform4iv(this.addr,e),mn(i,e)}}function OT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function PT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pn(i,e))return;o.uniform2uiv(this.addr,e),mn(i,e)}}function zT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(pn(i,e))return;o.uniform3uiv(this.addr,e),mn(i,e)}}function BT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pn(i,e))return;o.uniform4uiv(this.addr,e),mn(i,e)}}function FT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(Yd.compareFunction=i.isReversedDepthBuffer()?ap:ip,c=Yd):c=Pv,i.setTexture2D(e||c,l)}function IT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Bv,l)}function HT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||Fv,l)}function GT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||zv,l)}function VT(o){switch(o){case 5126:return bT;case 35664:return ET;case 35665:return TT;case 35666:return AT;case 35674:return RT;case 35675:return CT;case 35676:return wT;case 5124:case 35670:return DT;case 35667:case 35671:return UT;case 35668:case 35672:return NT;case 35669:case 35673:return LT;case 5125:return OT;case 36294:return PT;case 36295:return zT;case 36296:return BT;case 35678:case 36198:case 36298:case 36306:case 35682:return FT;case 35679:case 36299:case 36307:return IT;case 35680:case 36300:case 36308:case 36293:return HT;case 36289:case 36303:case 36311:case 36292:return GT}}function kT(o,e){o.uniform1fv(this.addr,e)}function XT(o,e){const i=ks(e,this.size,2);o.uniform2fv(this.addr,i)}function WT(o,e){const i=ks(e,this.size,3);o.uniform3fv(this.addr,i)}function qT(o,e){const i=ks(e,this.size,4);o.uniform4fv(this.addr,i)}function YT(o,e){const i=ks(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function jT(o,e){const i=ks(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function ZT(o,e){const i=ks(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function KT(o,e){o.uniform1iv(this.addr,e)}function QT(o,e){o.uniform2iv(this.addr,e)}function JT(o,e){o.uniform3iv(this.addr,e)}function $T(o,e){o.uniform4iv(this.addr,e)}function t1(o,e){o.uniform1uiv(this.addr,e)}function e1(o,e){o.uniform2uiv(this.addr,e)}function n1(o,e){o.uniform3uiv(this.addr,e)}function i1(o,e){o.uniform4uiv(this.addr,e)}function a1(o,e,i){const r=this.cache,l=e.length,c=lu(i,l);pn(r,c)||(o.uniform1iv(this.addr,c),mn(r,c));let h;this.type===o.SAMPLER_2D_SHADOW?h=Yd:h=Pv;for(let d=0;d!==l;++d)i.setTexture2D(e[d]||h,c[d])}function r1(o,e,i){const r=this.cache,l=e.length,c=lu(i,l);pn(r,c)||(o.uniform1iv(this.addr,c),mn(r,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||Bv,c[h])}function s1(o,e,i){const r=this.cache,l=e.length,c=lu(i,l);pn(r,c)||(o.uniform1iv(this.addr,c),mn(r,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||Fv,c[h])}function o1(o,e,i){const r=this.cache,l=e.length,c=lu(i,l);pn(r,c)||(o.uniform1iv(this.addr,c),mn(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||zv,c[h])}function l1(o){switch(o){case 5126:return kT;case 35664:return XT;case 35665:return WT;case 35666:return qT;case 35674:return YT;case 35675:return jT;case 35676:return ZT;case 5124:case 35670:return KT;case 35667:case 35671:return QT;case 35668:case 35672:return JT;case 35669:case 35673:return $T;case 5125:return t1;case 36294:return e1;case 36295:return n1;case 36296:return i1;case 35678:case 36198:case 36298:case 36306:case 35682:return a1;case 35679:case 36299:case 36307:return r1;case 35680:case 36300:case 36308:case 36293:return s1;case 36289:case 36303:case 36311:case 36292:return o1}}class c1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=VT(i.type)}}class u1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=l1(i.type)}}class f1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(e,i[d.id],r)}}}const Kh=/(\w+)(\])?(\[|\.)?/g;function X_(o,e){o.seq.push(e),o.map[e.id]=e}function h1(o,e,i){const r=o.name,l=r.length;for(Kh.lastIndex=0;;){const c=Kh.exec(r),h=Kh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){X_(i,p===void 0?new c1(d,o,e):new u1(d,o,e));break}else{let _=i.map[d];_===void 0&&(_=new f1(d),X_(i,_)),i=_}}}class jc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let h=0;h<r;++h){const d=e.getActiveUniform(i,h),m=e.getUniformLocation(i,d.name);h1(d,m,this)}const l=[],c=[];for(const h of this.seq)h.type===e.SAMPLER_2D_SHADOW||h.type===e.SAMPLER_CUBE_SHADOW||h.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function W_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const d1=37297;let p1=0;function m1(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const q_=new ue;function g1(o){Te._getMatrix(q_,Te.workingColorSpace,o);const e=`mat3( ${q_.elements.map(i=>i.toFixed(4))} )`;switch(Te.getTransfer(o)){case Kc:return[e,"LinearTransferOETF"];case Ie:return[e,"sRGBTransferOETF"];default:return ie("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Y_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),c=(o.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+m1(o.getShaderSource(e),d)}else return c}function _1(o,e){const i=g1(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const v1={[iv]:"Linear",[av]:"Reinhard",[rv]:"Cineon",[sv]:"ACESFilmic",[lv]:"AgX",[cv]:"Neutral",[ov]:"Custom"};function x1(o,e){const i=v1[e];return i===void 0?(ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Vc=new K;function S1(){Te.getLuminanceCoefficients(Vc);const o=Vc.x.toFixed(4),e=Vc.y.toFixed(4),i=Vc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function y1(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ko).join(`
`)}function M1(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function b1(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(e,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Ko(o){return o!==""}function j_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Z_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const E1=/^[ \t]*#include +<([\w\d./]+)>/gm;function jd(o){return o.replace(E1,A1)}const T1=new Map;function A1(o,e){let i=fe[e];if(i===void 0){const r=T1.get(e);if(r!==void 0)i=fe[r],ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return jd(i)}const R1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function K_(o){return o.replace(R1,C1)}function C1(o,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Q_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const w1={[kc]:"SHADOWMAP_TYPE_PCF",[Zo]:"SHADOWMAP_TYPE_VSM"};function D1(o){return w1[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const U1={[Nr]:"ENVMAP_TYPE_CUBE",[Fs]:"ENVMAP_TYPE_CUBE",[au]:"ENVMAP_TYPE_CUBE_UV"};function N1(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":U1[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const L1={[Fs]:"ENVMAP_MODE_REFRACTION"};function O1(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":L1[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const P1={[nv]:"ENVMAP_BLENDING_MULTIPLY",[yy]:"ENVMAP_BLENDING_MIX",[My]:"ENVMAP_BLENDING_ADD"};function z1(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":P1[o.combine]||"ENVMAP_BLENDING_NONE"}function B1(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function F1(o,e,i,r){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=D1(i),p=N1(i),v=O1(i),_=z1(i),S=B1(i),M=y1(i),E=M1(c),C=l.createProgram();let y,x,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Ko).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Ko).join(`
`),x.length>0&&(x+=`
`)):(y=[Q_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ko).join(`
`),x=[Q_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+_:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Vi?"#define TONE_MAPPING":"",i.toneMapping!==Vi?fe.tonemapping_pars_fragment:"",i.toneMapping!==Vi?x1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,_1("linearToOutputTexel",i.outputColorSpace),S1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ko).join(`
`)),h=jd(h),h=j_(h,i),h=Z_(h,i),d=jd(d),d=j_(d,i),d=Z_(d,i),h=K_(h),d=K_(d),i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",i.glslVersion===i_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===i_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const U=D+y+h,N=D+x+d,B=W_(l,l.VERTEX_SHADER,U),F=W_(l,l.FRAGMENT_SHADER,N);l.attachShader(C,B),l.attachShader(C,F),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function P(I){if(o.debug.checkShaderErrors){const Q=l.getProgramInfoLog(C)||"",Z=l.getShaderInfoLog(B)||"",lt=l.getShaderInfoLog(F)||"",ut=Q.trim(),z=Z.trim(),G=lt.trim();let tt=!0,yt=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(tt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,B,F);else{const vt=Y_(l,B,"vertex"),O=Y_(l,F,"fragment");be("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+ut+`
`+vt+`
`+O)}else ut!==""?ie("WebGLProgram: Program Info Log:",ut):(z===""||G==="")&&(yt=!1);yt&&(I.diagnostics={runnable:tt,programLog:ut,vertexShader:{log:z,prefix:y},fragmentShader:{log:G,prefix:x}})}l.deleteShader(B),l.deleteShader(F),q=new jc(l,C),A=b1(l,C)}let q;this.getUniforms=function(){return q===void 0&&P(this),q};let A;this.getAttributes=function(){return A===void 0&&P(this),A};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(C,d1)),w},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=p1++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=B,this.fragmentShader=F,this}let I1=0;class H1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new G1(e),i.set(e,r)),r}}class G1{constructor(e){this.id=I1++,this.code=e,this.usedTimes=0}}function V1(o,e,i,r,l,c,h){const d=new sp,m=new H1,p=new Set,v=[],_=new Map,S=l.logarithmicDepthBuffer;let M=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(A){return p.add(A),A===0?"uv":`uv${A}`}function y(A,w,I,Q,Z){const lt=Q.fog,ut=Z.geometry,z=A.isMeshStandardMaterial?Q.environment:null,G=(A.isMeshStandardMaterial?i:e).get(A.envMap||z),tt=G&&G.mapping===au?G.image.height:null,yt=E[A.type];A.precision!==null&&(M=l.getMaxPrecision(A.precision),M!==A.precision&&ie("WebGLProgram.getParameters:",A.precision,"not supported, using",M,"instead."));const vt=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,O=vt!==void 0?vt.length:0;let nt=0;ut.morphAttributes.position!==void 0&&(nt=1),ut.morphAttributes.normal!==void 0&&(nt=2),ut.morphAttributes.color!==void 0&&(nt=3);let mt,At,It,rt;if(yt){const Ee=Bi[yt];mt=Ee.vertexShader,At=Ee.fragmentShader}else mt=A.vertexShader,At=A.fragmentShader,m.update(A),It=m.getVertexShaderID(A),rt=m.getFragmentShaderID(A);const ht=o.getRenderTarget(),Dt=o.state.buffers.depth.getReversed(),kt=Z.isInstancedMesh===!0,Ht=Z.isBatchedMesh===!0,de=!!A.map,Je=!!A.matcap,_e=!!G,pe=!!A.aoMap,we=!!A.lightMap,se=!!A.bumpMap,$e=!!A.normalMap,V=!!A.displacementMap,je=!!A.emissiveMap,Me=!!A.metalnessMap,Le=!!A.roughnessMap,Yt=A.anisotropy>0,L=A.clearcoat>0,b=A.dispersion>0,W=A.iridescence>0,pt=A.sheen>0,St=A.transmission>0,ft=Yt&&!!A.anisotropyMap,Zt=L&&!!A.clearcoatMap,Ct=L&&!!A.clearcoatNormalMap,Xt=L&&!!A.clearcoatRoughnessMap,ee=W&&!!A.iridescenceMap,bt=W&&!!A.iridescenceThicknessMap,Et=pt&&!!A.sheenColorMap,Bt=pt&&!!A.sheenRoughnessMap,Pt=!!A.specularMap,wt=!!A.specularColorMap,le=!!A.specularIntensityMap,X=St&&!!A.transmissionMap,Nt=St&&!!A.thicknessMap,Tt=!!A.gradientMap,zt=!!A.alphaMap,Mt=A.alphaTest>0,xt=!!A.alphaHash,Rt=!!A.extensions;let ne=Vi;A.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(ne=o.toneMapping);const Pe={shaderID:yt,shaderType:A.type,shaderName:A.name,vertexShader:mt,fragmentShader:At,defines:A.defines,customVertexShaderID:It,customFragmentShaderID:rt,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:M,batching:Ht,batchingColor:Ht&&Z._colorsTexture!==null,instancing:kt,instancingColor:kt&&Z.instanceColor!==null,instancingMorph:kt&&Z.morphTexture!==null,outputColorSpace:ht===null?o.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:Hs,alphaToCoverage:!!A.alphaToCoverage,map:de,matcap:Je,envMap:_e,envMapMode:_e&&G.mapping,envMapCubeUVHeight:tt,aoMap:pe,lightMap:we,bumpMap:se,normalMap:$e,displacementMap:V,emissiveMap:je,normalMapObjectSpace:$e&&A.normalMapType===Ay,normalMapTangentSpace:$e&&A.normalMapType===Ty,metalnessMap:Me,roughnessMap:Le,anisotropy:Yt,anisotropyMap:ft,clearcoat:L,clearcoatMap:Zt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:Xt,dispersion:b,iridescence:W,iridescenceMap:ee,iridescenceThicknessMap:bt,sheen:pt,sheenColorMap:Et,sheenRoughnessMap:Bt,specularMap:Pt,specularColorMap:wt,specularIntensityMap:le,transmission:St,transmissionMap:X,thicknessMap:Nt,gradientMap:Tt,opaque:A.transparent===!1&&A.blending===Ps&&A.alphaToCoverage===!1,alphaMap:zt,alphaTest:Mt,alphaHash:xt,combine:A.combine,mapUv:de&&C(A.map.channel),aoMapUv:pe&&C(A.aoMap.channel),lightMapUv:we&&C(A.lightMap.channel),bumpMapUv:se&&C(A.bumpMap.channel),normalMapUv:$e&&C(A.normalMap.channel),displacementMapUv:V&&C(A.displacementMap.channel),emissiveMapUv:je&&C(A.emissiveMap.channel),metalnessMapUv:Me&&C(A.metalnessMap.channel),roughnessMapUv:Le&&C(A.roughnessMap.channel),anisotropyMapUv:ft&&C(A.anisotropyMap.channel),clearcoatMapUv:Zt&&C(A.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&C(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xt&&C(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&C(A.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&C(A.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&C(A.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&C(A.sheenRoughnessMap.channel),specularMapUv:Pt&&C(A.specularMap.channel),specularColorMapUv:wt&&C(A.specularColorMap.channel),specularIntensityMapUv:le&&C(A.specularIntensityMap.channel),transmissionMapUv:X&&C(A.transmissionMap.channel),thicknessMapUv:Nt&&C(A.thicknessMap.channel),alphaMapUv:zt&&C(A.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&($e||Yt),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!ut.attributes.uv&&(de||zt),fog:!!lt,useFog:A.fog===!0,fogExp2:!!lt&&lt.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Dt,skinning:Z.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:nt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:A.dithering,shadowMapEnabled:o.shadowMap.enabled&&I.length>0,shadowMapType:o.shadowMap.type,toneMapping:ne,decodeVideoTexture:de&&A.map.isVideoTexture===!0&&Te.getTransfer(A.map.colorSpace)===Ie,decodeVideoTextureEmissive:je&&A.emissiveMap.isVideoTexture===!0&&Te.getTransfer(A.emissiveMap.colorSpace)===Ie,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Fi,flipSided:A.side===jn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Rt&&A.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Rt&&A.extensions.multiDraw===!0||Ht)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Pe.vertexUv1s=p.has(1),Pe.vertexUv2s=p.has(2),Pe.vertexUv3s=p.has(3),p.clear(),Pe}function x(A){const w=[];if(A.shaderID?w.push(A.shaderID):(w.push(A.customVertexShaderID),w.push(A.customFragmentShaderID)),A.defines!==void 0)for(const I in A.defines)w.push(I),w.push(A.defines[I]);return A.isRawShaderMaterial===!1&&(D(w,A),U(w,A),w.push(o.outputColorSpace)),w.push(A.customProgramCacheKey),w.join()}function D(A,w){A.push(w.precision),A.push(w.outputColorSpace),A.push(w.envMapMode),A.push(w.envMapCubeUVHeight),A.push(w.mapUv),A.push(w.alphaMapUv),A.push(w.lightMapUv),A.push(w.aoMapUv),A.push(w.bumpMapUv),A.push(w.normalMapUv),A.push(w.displacementMapUv),A.push(w.emissiveMapUv),A.push(w.metalnessMapUv),A.push(w.roughnessMapUv),A.push(w.anisotropyMapUv),A.push(w.clearcoatMapUv),A.push(w.clearcoatNormalMapUv),A.push(w.clearcoatRoughnessMapUv),A.push(w.iridescenceMapUv),A.push(w.iridescenceThicknessMapUv),A.push(w.sheenColorMapUv),A.push(w.sheenRoughnessMapUv),A.push(w.specularMapUv),A.push(w.specularColorMapUv),A.push(w.specularIntensityMapUv),A.push(w.transmissionMapUv),A.push(w.thicknessMapUv),A.push(w.combine),A.push(w.fogExp2),A.push(w.sizeAttenuation),A.push(w.morphTargetsCount),A.push(w.morphAttributeCount),A.push(w.numDirLights),A.push(w.numPointLights),A.push(w.numSpotLights),A.push(w.numSpotLightMaps),A.push(w.numHemiLights),A.push(w.numRectAreaLights),A.push(w.numDirLightShadows),A.push(w.numPointLightShadows),A.push(w.numSpotLightShadows),A.push(w.numSpotLightShadowsWithMaps),A.push(w.numLightProbes),A.push(w.shadowMapType),A.push(w.toneMapping),A.push(w.numClippingPlanes),A.push(w.numClipIntersection),A.push(w.depthPacking)}function U(A,w){d.disableAll(),w.instancing&&d.enable(0),w.instancingColor&&d.enable(1),w.instancingMorph&&d.enable(2),w.matcap&&d.enable(3),w.envMap&&d.enable(4),w.normalMapObjectSpace&&d.enable(5),w.normalMapTangentSpace&&d.enable(6),w.clearcoat&&d.enable(7),w.iridescence&&d.enable(8),w.alphaTest&&d.enable(9),w.vertexColors&&d.enable(10),w.vertexAlphas&&d.enable(11),w.vertexUv1s&&d.enable(12),w.vertexUv2s&&d.enable(13),w.vertexUv3s&&d.enable(14),w.vertexTangents&&d.enable(15),w.anisotropy&&d.enable(16),w.alphaHash&&d.enable(17),w.batching&&d.enable(18),w.dispersion&&d.enable(19),w.batchingColor&&d.enable(20),w.gradientMap&&d.enable(21),A.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),A.push(d.mask)}function N(A){const w=E[A.type];let I;if(w){const Q=Bi[w];I=tM.clone(Q.uniforms)}else I=A.uniforms;return I}function B(A,w){let I=_.get(w);return I!==void 0?++I.usedTimes:(I=new F1(o,w,A,c),v.push(I),_.set(w,I)),I}function F(A){if(--A.usedTimes===0){const w=v.indexOf(A);v[w]=v[v.length-1],v.pop(),_.delete(A.cacheKey),A.destroy()}}function P(A){m.remove(A)}function q(){m.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:N,acquireProgram:B,releaseProgram:F,releaseShaderCache:P,programs:v,dispose:q}}function k1(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function c(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function X1(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function J_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function $_(){const o=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function h(_,S,M,E,C,y){let x=o[e];return x===void 0?(x={id:_.id,object:_,geometry:S,material:M,groupOrder:E,renderOrder:_.renderOrder,z:C,group:y},o[e]=x):(x.id=_.id,x.object=_,x.geometry=S,x.material=M,x.groupOrder=E,x.renderOrder=_.renderOrder,x.z=C,x.group=y),e++,x}function d(_,S,M,E,C,y){const x=h(_,S,M,E,C,y);M.transmission>0?r.push(x):M.transparent===!0?l.push(x):i.push(x)}function m(_,S,M,E,C,y){const x=h(_,S,M,E,C,y);M.transmission>0?r.unshift(x):M.transparent===!0?l.unshift(x):i.unshift(x)}function p(_,S){i.length>1&&i.sort(_||X1),r.length>1&&r.sort(S||J_),l.length>1&&l.sort(S||J_)}function v(){for(let _=e,S=o.length;_<S;_++){const M=o[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:m,finish:v,sort:p}}function W1(){let o=new WeakMap;function e(r,l){const c=o.get(r);let h;return c===void 0?(h=new $_,o.set(r,[h])):l>=c.length?(h=new $_,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function q1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new K,color:new Ce};break;case"SpotLight":i={position:new K,direction:new K,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new K,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":i={direction:new K,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":i={color:new Ce,position:new K,halfWidth:new K,halfHeight:new K};break}return o[e.id]=i,i}}}function Y1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let j1=0;function Z1(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function K1(o){const e=new q1,i=Y1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new K);const l=new K,c=new Qe,h=new Qe;function d(p){let v=0,_=0,S=0;for(let A=0;A<9;A++)r.probe[A].set(0,0,0);let M=0,E=0,C=0,y=0,x=0,D=0,U=0,N=0,B=0,F=0,P=0;p.sort(Z1);for(let A=0,w=p.length;A<w;A++){const I=p[A],Q=I.color,Z=I.intensity,lt=I.distance;let ut=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Is?ut=I.shadow.map.texture:ut=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)v+=Q.r*Z,_+=Q.g*Z,S+=Q.b*Z;else if(I.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(I.sh.coefficients[z],Z);P++}else if(I.isDirectionalLight){const z=e.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const G=I.shadow,tt=i.get(I);tt.shadowIntensity=G.intensity,tt.shadowBias=G.bias,tt.shadowNormalBias=G.normalBias,tt.shadowRadius=G.radius,tt.shadowMapSize=G.mapSize,r.directionalShadow[M]=tt,r.directionalShadowMap[M]=ut,r.directionalShadowMatrix[M]=I.shadow.matrix,D++}r.directional[M]=z,M++}else if(I.isSpotLight){const z=e.get(I);z.position.setFromMatrixPosition(I.matrixWorld),z.color.copy(Q).multiplyScalar(Z),z.distance=lt,z.coneCos=Math.cos(I.angle),z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),z.decay=I.decay,r.spot[C]=z;const G=I.shadow;if(I.map&&(r.spotLightMap[B]=I.map,B++,G.updateMatrices(I),I.castShadow&&F++),r.spotLightMatrix[C]=G.matrix,I.castShadow){const tt=i.get(I);tt.shadowIntensity=G.intensity,tt.shadowBias=G.bias,tt.shadowNormalBias=G.normalBias,tt.shadowRadius=G.radius,tt.shadowMapSize=G.mapSize,r.spotShadow[C]=tt,r.spotShadowMap[C]=ut,N++}C++}else if(I.isRectAreaLight){const z=e.get(I);z.color.copy(Q).multiplyScalar(Z),z.halfWidth.set(I.width*.5,0,0),z.halfHeight.set(0,I.height*.5,0),r.rectArea[y]=z,y++}else if(I.isPointLight){const z=e.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),z.distance=I.distance,z.decay=I.decay,I.castShadow){const G=I.shadow,tt=i.get(I);tt.shadowIntensity=G.intensity,tt.shadowBias=G.bias,tt.shadowNormalBias=G.normalBias,tt.shadowRadius=G.radius,tt.shadowMapSize=G.mapSize,tt.shadowCameraNear=G.camera.near,tt.shadowCameraFar=G.camera.far,r.pointShadow[E]=tt,r.pointShadowMap[E]=ut,r.pointShadowMatrix[E]=I.shadow.matrix,U++}r.point[E]=z,E++}else if(I.isHemisphereLight){const z=e.get(I);z.skyColor.copy(I.color).multiplyScalar(Z),z.groundColor.copy(I.groundColor).multiplyScalar(Z),r.hemi[x]=z,x++}}y>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ot.LTC_FLOAT_1,r.rectAreaLTC2=Ot.LTC_FLOAT_2):(r.rectAreaLTC1=Ot.LTC_HALF_1,r.rectAreaLTC2=Ot.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=_,r.ambient[2]=S;const q=r.hash;(q.directionalLength!==M||q.pointLength!==E||q.spotLength!==C||q.rectAreaLength!==y||q.hemiLength!==x||q.numDirectionalShadows!==D||q.numPointShadows!==U||q.numSpotShadows!==N||q.numSpotMaps!==B||q.numLightProbes!==P)&&(r.directional.length=M,r.spot.length=C,r.rectArea.length=y,r.point.length=E,r.hemi.length=x,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=N+B-F,r.spotLightMap.length=B,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=P,q.directionalLength=M,q.pointLength=E,q.spotLength=C,q.rectAreaLength=y,q.hemiLength=x,q.numDirectionalShadows=D,q.numPointShadows=U,q.numSpotShadows=N,q.numSpotMaps=B,q.numLightProbes=P,r.version=j1++)}function m(p,v){let _=0,S=0,M=0,E=0,C=0;const y=v.matrixWorldInverse;for(let x=0,D=p.length;x<D;x++){const U=p[x];if(U.isDirectionalLight){const N=r.directional[_];N.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(y),_++}else if(U.isSpotLight){const N=r.spot[M];N.position.setFromMatrixPosition(U.matrixWorld),N.position.applyMatrix4(y),N.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(y),M++}else if(U.isRectAreaLight){const N=r.rectArea[E];N.position.setFromMatrixPosition(U.matrixWorld),N.position.applyMatrix4(y),h.identity(),c.copy(U.matrixWorld),c.premultiply(y),h.extractRotation(c),N.halfWidth.set(U.width*.5,0,0),N.halfHeight.set(0,U.height*.5,0),N.halfWidth.applyMatrix4(h),N.halfHeight.applyMatrix4(h),E++}else if(U.isPointLight){const N=r.point[S];N.position.setFromMatrixPosition(U.matrixWorld),N.position.applyMatrix4(y),S++}else if(U.isHemisphereLight){const N=r.hemi[C];N.direction.setFromMatrixPosition(U.matrixWorld),N.direction.transformDirection(y),C++}}}return{setup:d,setupView:m,state:r}}function tv(o){const e=new K1(o),i=[],r=[];function l(v){p.camera=v,i.length=0,r.length=0}function c(v){i.push(v)}function h(v){r.push(v)}function d(){e.setup(i)}function m(v){e.setupView(i,v)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function Q1(o){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let d;return h===void 0?(d=new tv(o),e.set(l,[d])):c>=h.length?(d=new tv(o),h.push(d)):d=h[c],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const J1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,tA=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],eA=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],ev=new Qe,jo=new K,Qh=new K;function nA(o,e,i){let r=new wv;const l=new he,c=new he,h=new rn,d=new _M,m=new vM,p={},v=i.maxTextureSize,_={[nr]:jn,[jn]:nr,[Fi]:Fi},S=new Wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:J1,fragmentShader:$1}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const E=new Bn;E.setAttribute("position",new ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Di(E,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kc;let x=this.type;this.render=function(F,P,q){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;F.type===ny&&(ie("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),F.type=kc);const A=o.getRenderTarget(),w=o.getActiveCubeFace(),I=o.getActiveMipmapLevel(),Q=o.state;Q.setBlending(ga),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const Z=x!==this.type;Z&&P.traverse(function(lt){lt.material&&(Array.isArray(lt.material)?lt.material.forEach(ut=>ut.needsUpdate=!0):lt.material.needsUpdate=!0)});for(let lt=0,ut=F.length;lt<ut;lt++){const z=F[lt],G=z.shadow;if(G===void 0){ie("WebGLShadowMap:",z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const tt=G.getFrameExtents();if(l.multiply(tt),c.copy(G.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/tt.x),l.x=c.x*tt.x,G.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/tt.y),l.y=c.y*tt.y,G.mapSize.y=c.y)),G.map===null||Z===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Zo){if(z.isPointLight){ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new ki(l.x,l.y,{format:Is,type:va,minFilter:On,magFilter:On,generateMipmaps:!1}),G.map.texture.name=z.name+".shadowMap",G.map.depthTexture=new tl(l.x,l.y,Hi),G.map.depthTexture.name=z.name+".shadowMapDepth",G.map.depthTexture.format=xa,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Cn,G.map.depthTexture.magFilter=Cn}else{z.isPointLight?(G.map=new Av(l.x),G.map.depthTexture=new mM(l.x,Xi)):(G.map=new ki(l.x,l.y),G.map.depthTexture=new tl(l.x,l.y,Xi)),G.map.depthTexture.name=z.name+".shadowMap",G.map.depthTexture.format=xa;const vt=o.state.buffers.depth.getReversed();this.type===kc?(G.map.depthTexture.compareFunction=vt?ap:ip,G.map.depthTexture.minFilter=On,G.map.depthTexture.magFilter=On):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Cn,G.map.depthTexture.magFilter=Cn)}G.camera.updateProjectionMatrix()}const yt=G.map.isWebGLCubeRenderTarget?6:1;for(let vt=0;vt<yt;vt++){if(G.map.isWebGLCubeRenderTarget)o.setRenderTarget(G.map,vt),o.clear();else{vt===0&&(o.setRenderTarget(G.map),o.clear());const O=G.getViewport(vt);h.set(c.x*O.x,c.y*O.y,c.x*O.z,c.y*O.w),Q.viewport(h)}if(z.isPointLight){const O=G.camera,nt=G.matrix,mt=z.distance||O.far;mt!==O.far&&(O.far=mt,O.updateProjectionMatrix()),jo.setFromMatrixPosition(z.matrixWorld),O.position.copy(jo),Qh.copy(O.position),Qh.add(tA[vt]),O.up.copy(eA[vt]),O.lookAt(Qh),O.updateMatrixWorld(),nt.makeTranslation(-jo.x,-jo.y,-jo.z),ev.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),G._frustum.setFromProjectionMatrix(ev,O.coordinateSystem,O.reversedDepth)}else G.updateMatrices(z);r=G.getFrustum(),N(P,q,G.camera,z,this.type)}G.isPointLightShadow!==!0&&this.type===Zo&&D(G,q),G.needsUpdate=!1}x=this.type,y.needsUpdate=!1,o.setRenderTarget(A,w,I)};function D(F,P){const q=e.update(C);S.defines.VSM_SAMPLES!==F.blurSamples&&(S.defines.VSM_SAMPLES=F.blurSamples,M.defines.VSM_SAMPLES=F.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new ki(l.x,l.y,{format:Is,type:va})),S.uniforms.shadow_pass.value=F.map.depthTexture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,o.setRenderTarget(F.mapPass),o.clear(),o.renderBufferDirect(P,null,q,S,C,null),M.uniforms.shadow_pass.value=F.mapPass.texture,M.uniforms.resolution.value=F.mapSize,M.uniforms.radius.value=F.radius,o.setRenderTarget(F.map),o.clear(),o.renderBufferDirect(P,null,q,M,C,null)}function U(F,P,q,A){let w=null;const I=q.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(I!==void 0)w=I;else if(w=q.isPointLight===!0?m:d,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const Q=w.uuid,Z=P.uuid;let lt=p[Q];lt===void 0&&(lt={},p[Q]=lt);let ut=lt[Z];ut===void 0&&(ut=w.clone(),lt[Z]=ut,P.addEventListener("dispose",B)),w=ut}if(w.visible=P.visible,w.wireframe=P.wireframe,A===Zo?w.side=P.shadowSide!==null?P.shadowSide:P.side:w.side=P.shadowSide!==null?P.shadowSide:_[P.side],w.alphaMap=P.alphaMap,w.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,w.map=P.map,w.clipShadows=P.clipShadows,w.clippingPlanes=P.clippingPlanes,w.clipIntersection=P.clipIntersection,w.displacementMap=P.displacementMap,w.displacementScale=P.displacementScale,w.displacementBias=P.displacementBias,w.wireframeLinewidth=P.wireframeLinewidth,w.linewidth=P.linewidth,q.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const Q=o.properties.get(w);Q.light=q}return w}function N(F,P,q,A,w){if(F.visible===!1)return;if(F.layers.test(P.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&w===Zo)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,F.matrixWorld);const Z=e.update(F),lt=F.material;if(Array.isArray(lt)){const ut=Z.groups;for(let z=0,G=ut.length;z<G;z++){const tt=ut[z],yt=lt[tt.materialIndex];if(yt&&yt.visible){const vt=U(F,yt,A,w);F.onBeforeShadow(o,F,P,q,Z,vt,tt),o.renderBufferDirect(q,null,Z,vt,F,tt),F.onAfterShadow(o,F,P,q,Z,vt,tt)}}}else if(lt.visible){const ut=U(F,lt,A,w);F.onBeforeShadow(o,F,P,q,Z,ut,null),o.renderBufferDirect(q,null,Z,ut,F,null),F.onAfterShadow(o,F,P,q,Z,ut,null)}}const Q=F.children;for(let Z=0,lt=Q.length;Z<lt;Z++)N(Q[Z],P,q,A,w)}function B(F){F.target.removeEventListener("dispose",B);for(const q in p){const A=p[q],w=F.target.uuid;w in A&&(A[w].dispose(),delete A[w])}}}const iA={[td]:ed,[nd]:rd,[id]:sd,[Bs]:ad,[ed]:td,[rd]:nd,[sd]:id,[ad]:Bs};function aA(o,e){function i(){let X=!1;const Nt=new rn;let Tt=null;const zt=new rn(0,0,0,0);return{setMask:function(Mt){Tt!==Mt&&!X&&(o.colorMask(Mt,Mt,Mt,Mt),Tt=Mt)},setLocked:function(Mt){X=Mt},setClear:function(Mt,xt,Rt,ne,Pe){Pe===!0&&(Mt*=ne,xt*=ne,Rt*=ne),Nt.set(Mt,xt,Rt,ne),zt.equals(Nt)===!1&&(o.clearColor(Mt,xt,Rt,ne),zt.copy(Nt))},reset:function(){X=!1,Tt=null,zt.set(-1,0,0,0)}}}function r(){let X=!1,Nt=!1,Tt=null,zt=null,Mt=null;return{setReversed:function(xt){if(Nt!==xt){const Rt=e.get("EXT_clip_control");xt?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),Nt=xt;const ne=Mt;Mt=null,this.setClear(ne)}},getReversed:function(){return Nt},setTest:function(xt){xt?ht(o.DEPTH_TEST):Dt(o.DEPTH_TEST)},setMask:function(xt){Tt!==xt&&!X&&(o.depthMask(xt),Tt=xt)},setFunc:function(xt){if(Nt&&(xt=iA[xt]),zt!==xt){switch(xt){case td:o.depthFunc(o.NEVER);break;case ed:o.depthFunc(o.ALWAYS);break;case nd:o.depthFunc(o.LESS);break;case Bs:o.depthFunc(o.LEQUAL);break;case id:o.depthFunc(o.EQUAL);break;case ad:o.depthFunc(o.GEQUAL);break;case rd:o.depthFunc(o.GREATER);break;case sd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}zt=xt}},setLocked:function(xt){X=xt},setClear:function(xt){Mt!==xt&&(Nt&&(xt=1-xt),o.clearDepth(xt),Mt=xt)},reset:function(){X=!1,Tt=null,zt=null,Mt=null,Nt=!1}}}function l(){let X=!1,Nt=null,Tt=null,zt=null,Mt=null,xt=null,Rt=null,ne=null,Pe=null;return{setTest:function(Ee){X||(Ee?ht(o.STENCIL_TEST):Dt(o.STENCIL_TEST))},setMask:function(Ee){Nt!==Ee&&!X&&(o.stencilMask(Ee),Nt=Ee)},setFunc:function(Ee,Dn,Si){(Tt!==Ee||zt!==Dn||Mt!==Si)&&(o.stencilFunc(Ee,Dn,Si),Tt=Ee,zt=Dn,Mt=Si)},setOp:function(Ee,Dn,Si){(xt!==Ee||Rt!==Dn||ne!==Si)&&(o.stencilOp(Ee,Dn,Si),xt=Ee,Rt=Dn,ne=Si)},setLocked:function(Ee){X=Ee},setClear:function(Ee){Pe!==Ee&&(o.clearStencil(Ee),Pe=Ee)},reset:function(){X=!1,Nt=null,Tt=null,zt=null,Mt=null,xt=null,Rt=null,ne=null,Pe=null}}}const c=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let v={},_={},S=new WeakMap,M=[],E=null,C=!1,y=null,x=null,D=null,U=null,N=null,B=null,F=null,P=new Ce(0,0,0),q=0,A=!1,w=null,I=null,Q=null,Z=null,lt=null;const ut=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,G=0;const tt=o.getParameter(o.VERSION);tt.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(tt)[1]),z=G>=1):tt.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),z=G>=2);let yt=null,vt={};const O=o.getParameter(o.SCISSOR_BOX),nt=o.getParameter(o.VIEWPORT),mt=new rn().fromArray(O),At=new rn().fromArray(nt);function It(X,Nt,Tt,zt){const Mt=new Uint8Array(4),xt=o.createTexture();o.bindTexture(X,xt),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Rt=0;Rt<Tt;Rt++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(Nt,0,o.RGBA,1,1,zt,0,o.RGBA,o.UNSIGNED_BYTE,Mt):o.texImage2D(Nt+Rt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Mt);return xt}const rt={};rt[o.TEXTURE_2D]=It(o.TEXTURE_2D,o.TEXTURE_2D,1),rt[o.TEXTURE_CUBE_MAP]=It(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),rt[o.TEXTURE_2D_ARRAY]=It(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),rt[o.TEXTURE_3D]=It(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ht(o.DEPTH_TEST),h.setFunc(Bs),se(!1),$e($g),ht(o.CULL_FACE),pe(ga);function ht(X){v[X]!==!0&&(o.enable(X),v[X]=!0)}function Dt(X){v[X]!==!1&&(o.disable(X),v[X]=!1)}function kt(X,Nt){return _[X]!==Nt?(o.bindFramebuffer(X,Nt),_[X]=Nt,X===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Nt),X===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Nt),!0):!1}function Ht(X,Nt){let Tt=M,zt=!1;if(X){Tt=S.get(Nt),Tt===void 0&&(Tt=[],S.set(Nt,Tt));const Mt=X.textures;if(Tt.length!==Mt.length||Tt[0]!==o.COLOR_ATTACHMENT0){for(let xt=0,Rt=Mt.length;xt<Rt;xt++)Tt[xt]=o.COLOR_ATTACHMENT0+xt;Tt.length=Mt.length,zt=!0}}else Tt[0]!==o.BACK&&(Tt[0]=o.BACK,zt=!0);zt&&o.drawBuffers(Tt)}function de(X){return E!==X?(o.useProgram(X),E=X,!0):!1}const Je={[Cr]:o.FUNC_ADD,[ay]:o.FUNC_SUBTRACT,[ry]:o.FUNC_REVERSE_SUBTRACT};Je[sy]=o.MIN,Je[oy]=o.MAX;const _e={[ly]:o.ZERO,[cy]:o.ONE,[uy]:o.SRC_COLOR,[Jh]:o.SRC_ALPHA,[gy]:o.SRC_ALPHA_SATURATE,[py]:o.DST_COLOR,[hy]:o.DST_ALPHA,[fy]:o.ONE_MINUS_SRC_COLOR,[$h]:o.ONE_MINUS_SRC_ALPHA,[my]:o.ONE_MINUS_DST_COLOR,[dy]:o.ONE_MINUS_DST_ALPHA,[_y]:o.CONSTANT_COLOR,[vy]:o.ONE_MINUS_CONSTANT_COLOR,[xy]:o.CONSTANT_ALPHA,[Sy]:o.ONE_MINUS_CONSTANT_ALPHA};function pe(X,Nt,Tt,zt,Mt,xt,Rt,ne,Pe,Ee){if(X===ga){C===!0&&(Dt(o.BLEND),C=!1);return}if(C===!1&&(ht(o.BLEND),C=!0),X!==iy){if(X!==y||Ee!==A){if((x!==Cr||N!==Cr)&&(o.blendEquation(o.FUNC_ADD),x=Cr,N=Cr),Ee)switch(X){case Ps:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Zc:o.blendFunc(o.ONE,o.ONE);break;case t_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case e_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:be("WebGLState: Invalid blending: ",X);break}else switch(X){case Ps:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Zc:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case t_:be("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case e_:be("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:be("WebGLState: Invalid blending: ",X);break}D=null,U=null,B=null,F=null,P.set(0,0,0),q=0,y=X,A=Ee}return}Mt=Mt||Nt,xt=xt||Tt,Rt=Rt||zt,(Nt!==x||Mt!==N)&&(o.blendEquationSeparate(Je[Nt],Je[Mt]),x=Nt,N=Mt),(Tt!==D||zt!==U||xt!==B||Rt!==F)&&(o.blendFuncSeparate(_e[Tt],_e[zt],_e[xt],_e[Rt]),D=Tt,U=zt,B=xt,F=Rt),(ne.equals(P)===!1||Pe!==q)&&(o.blendColor(ne.r,ne.g,ne.b,Pe),P.copy(ne),q=Pe),y=X,A=!1}function we(X,Nt){X.side===Fi?Dt(o.CULL_FACE):ht(o.CULL_FACE);let Tt=X.side===jn;Nt&&(Tt=!Tt),se(Tt),X.blending===Ps&&X.transparent===!1?pe(ga):pe(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),c.setMask(X.colorWrite);const zt=X.stencilWrite;d.setTest(zt),zt&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),je(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ht(o.SAMPLE_ALPHA_TO_COVERAGE):Dt(o.SAMPLE_ALPHA_TO_COVERAGE)}function se(X){w!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),w=X)}function $e(X){X!==ty?(ht(o.CULL_FACE),X!==I&&(X===$g?o.cullFace(o.BACK):X===ey?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Dt(o.CULL_FACE),I=X}function V(X){X!==Q&&(z&&o.lineWidth(X),Q=X)}function je(X,Nt,Tt){X?(ht(o.POLYGON_OFFSET_FILL),(Z!==Nt||lt!==Tt)&&(o.polygonOffset(Nt,Tt),Z=Nt,lt=Tt)):Dt(o.POLYGON_OFFSET_FILL)}function Me(X){X?ht(o.SCISSOR_TEST):Dt(o.SCISSOR_TEST)}function Le(X){X===void 0&&(X=o.TEXTURE0+ut-1),yt!==X&&(o.activeTexture(X),yt=X)}function Yt(X,Nt,Tt){Tt===void 0&&(yt===null?Tt=o.TEXTURE0+ut-1:Tt=yt);let zt=vt[Tt];zt===void 0&&(zt={type:void 0,texture:void 0},vt[Tt]=zt),(zt.type!==X||zt.texture!==Nt)&&(yt!==Tt&&(o.activeTexture(Tt),yt=Tt),o.bindTexture(X,Nt||rt[X]),zt.type=X,zt.texture=Nt)}function L(){const X=vt[yt];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function b(){try{o.compressedTexImage2D(...arguments)}catch(X){be("WebGLState:",X)}}function W(){try{o.compressedTexImage3D(...arguments)}catch(X){be("WebGLState:",X)}}function pt(){try{o.texSubImage2D(...arguments)}catch(X){be("WebGLState:",X)}}function St(){try{o.texSubImage3D(...arguments)}catch(X){be("WebGLState:",X)}}function ft(){try{o.compressedTexSubImage2D(...arguments)}catch(X){be("WebGLState:",X)}}function Zt(){try{o.compressedTexSubImage3D(...arguments)}catch(X){be("WebGLState:",X)}}function Ct(){try{o.texStorage2D(...arguments)}catch(X){be("WebGLState:",X)}}function Xt(){try{o.texStorage3D(...arguments)}catch(X){be("WebGLState:",X)}}function ee(){try{o.texImage2D(...arguments)}catch(X){be("WebGLState:",X)}}function bt(){try{o.texImage3D(...arguments)}catch(X){be("WebGLState:",X)}}function Et(X){mt.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),mt.copy(X))}function Bt(X){At.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),At.copy(X))}function Pt(X,Nt){let Tt=p.get(Nt);Tt===void 0&&(Tt=new WeakMap,p.set(Nt,Tt));let zt=Tt.get(X);zt===void 0&&(zt=o.getUniformBlockIndex(Nt,X.name),Tt.set(X,zt))}function wt(X,Nt){const zt=p.get(Nt).get(X);m.get(Nt)!==zt&&(o.uniformBlockBinding(Nt,zt,X.__bindingPointIndex),m.set(Nt,zt))}function le(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},yt=null,vt={},_={},S=new WeakMap,M=[],E=null,C=!1,y=null,x=null,D=null,U=null,N=null,B=null,F=null,P=new Ce(0,0,0),q=0,A=!1,w=null,I=null,Q=null,Z=null,lt=null,mt.set(0,0,o.canvas.width,o.canvas.height),At.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:ht,disable:Dt,bindFramebuffer:kt,drawBuffers:Ht,useProgram:de,setBlending:pe,setMaterial:we,setFlipSided:se,setCullFace:$e,setLineWidth:V,setPolygonOffset:je,setScissorTest:Me,activeTexture:Le,bindTexture:Yt,unbindTexture:L,compressedTexImage2D:b,compressedTexImage3D:W,texImage2D:ee,texImage3D:bt,updateUBOMapping:Pt,uniformBlockBinding:wt,texStorage2D:Ct,texStorage3D:Xt,texSubImage2D:pt,texSubImage3D:St,compressedTexSubImage2D:ft,compressedTexSubImage3D:Zt,scissor:Et,viewport:Bt,reset:le}}function rA(o,e,i,r,l,c,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new he,v=new WeakMap;let _;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,b){return M?new OffscreenCanvas(L,b):Jc("canvas")}function C(L,b,W){let pt=1;const St=Yt(L);if((St.width>W||St.height>W)&&(pt=W/Math.max(St.width,St.height)),pt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ft=Math.floor(pt*St.width),Zt=Math.floor(pt*St.height);_===void 0&&(_=E(ft,Zt));const Ct=b?E(ft,Zt):_;return Ct.width=ft,Ct.height=Zt,Ct.getContext("2d").drawImage(L,0,0,ft,Zt),ie("WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+ft+"x"+Zt+")."),Ct}else return"data"in L&&ie("WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),L;return L}function y(L){return L.generateMipmaps}function x(L){o.generateMipmap(L)}function D(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function U(L,b,W,pt,St=!1){if(L!==null){if(o[L]!==void 0)return o[L];ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ft=b;if(b===o.RED&&(W===o.FLOAT&&(ft=o.R32F),W===o.HALF_FLOAT&&(ft=o.R16F),W===o.UNSIGNED_BYTE&&(ft=o.R8)),b===o.RED_INTEGER&&(W===o.UNSIGNED_BYTE&&(ft=o.R8UI),W===o.UNSIGNED_SHORT&&(ft=o.R16UI),W===o.UNSIGNED_INT&&(ft=o.R32UI),W===o.BYTE&&(ft=o.R8I),W===o.SHORT&&(ft=o.R16I),W===o.INT&&(ft=o.R32I)),b===o.RG&&(W===o.FLOAT&&(ft=o.RG32F),W===o.HALF_FLOAT&&(ft=o.RG16F),W===o.UNSIGNED_BYTE&&(ft=o.RG8)),b===o.RG_INTEGER&&(W===o.UNSIGNED_BYTE&&(ft=o.RG8UI),W===o.UNSIGNED_SHORT&&(ft=o.RG16UI),W===o.UNSIGNED_INT&&(ft=o.RG32UI),W===o.BYTE&&(ft=o.RG8I),W===o.SHORT&&(ft=o.RG16I),W===o.INT&&(ft=o.RG32I)),b===o.RGB_INTEGER&&(W===o.UNSIGNED_BYTE&&(ft=o.RGB8UI),W===o.UNSIGNED_SHORT&&(ft=o.RGB16UI),W===o.UNSIGNED_INT&&(ft=o.RGB32UI),W===o.BYTE&&(ft=o.RGB8I),W===o.SHORT&&(ft=o.RGB16I),W===o.INT&&(ft=o.RGB32I)),b===o.RGBA_INTEGER&&(W===o.UNSIGNED_BYTE&&(ft=o.RGBA8UI),W===o.UNSIGNED_SHORT&&(ft=o.RGBA16UI),W===o.UNSIGNED_INT&&(ft=o.RGBA32UI),W===o.BYTE&&(ft=o.RGBA8I),W===o.SHORT&&(ft=o.RGBA16I),W===o.INT&&(ft=o.RGBA32I)),b===o.RGB&&(W===o.UNSIGNED_INT_5_9_9_9_REV&&(ft=o.RGB9_E5),W===o.UNSIGNED_INT_10F_11F_11F_REV&&(ft=o.R11F_G11F_B10F)),b===o.RGBA){const Zt=St?Kc:Te.getTransfer(pt);W===o.FLOAT&&(ft=o.RGBA32F),W===o.HALF_FLOAT&&(ft=o.RGBA16F),W===o.UNSIGNED_BYTE&&(ft=Zt===Ie?o.SRGB8_ALPHA8:o.RGBA8),W===o.UNSIGNED_SHORT_4_4_4_4&&(ft=o.RGBA4),W===o.UNSIGNED_SHORT_5_5_5_1&&(ft=o.RGB5_A1)}return(ft===o.R16F||ft===o.R32F||ft===o.RG16F||ft===o.RG32F||ft===o.RGBA16F||ft===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ft}function N(L,b){let W;return L?b===null||b===Xi||b===Jo?W=o.DEPTH24_STENCIL8:b===Hi?W=o.DEPTH32F_STENCIL8:b===Qo&&(W=o.DEPTH24_STENCIL8,ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Xi||b===Jo?W=o.DEPTH_COMPONENT24:b===Hi?W=o.DEPTH_COMPONENT32F:b===Qo&&(W=o.DEPTH_COMPONENT16),W}function B(L,b){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==Cn&&L.minFilter!==On?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function F(L){const b=L.target;b.removeEventListener("dispose",F),q(b),b.isVideoTexture&&v.delete(b)}function P(L){const b=L.target;b.removeEventListener("dispose",P),w(b)}function q(L){const b=r.get(L);if(b.__webglInit===void 0)return;const W=L.source,pt=S.get(W);if(pt){const St=pt[b.__cacheKey];St.usedTimes--,St.usedTimes===0&&A(L),Object.keys(pt).length===0&&S.delete(W)}r.remove(L)}function A(L){const b=r.get(L);o.deleteTexture(b.__webglTexture);const W=L.source,pt=S.get(W);delete pt[b.__cacheKey],h.memory.textures--}function w(L){const b=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(b.__webglFramebuffer[pt]))for(let St=0;St<b.__webglFramebuffer[pt].length;St++)o.deleteFramebuffer(b.__webglFramebuffer[pt][St]);else o.deleteFramebuffer(b.__webglFramebuffer[pt]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[pt])}else{if(Array.isArray(b.__webglFramebuffer))for(let pt=0;pt<b.__webglFramebuffer.length;pt++)o.deleteFramebuffer(b.__webglFramebuffer[pt]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let pt=0;pt<b.__webglColorRenderbuffer.length;pt++)b.__webglColorRenderbuffer[pt]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[pt]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const W=L.textures;for(let pt=0,St=W.length;pt<St;pt++){const ft=r.get(W[pt]);ft.__webglTexture&&(o.deleteTexture(ft.__webglTexture),h.memory.textures--),r.remove(W[pt])}r.remove(L)}let I=0;function Q(){I=0}function Z(){const L=I;return L>=l.maxTextures&&ie("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),I+=1,L}function lt(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function ut(L,b){const W=r.get(L);if(L.isVideoTexture&&Me(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&W.__version!==L.version){const pt=L.image;if(pt===null)ie("WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)ie("WebGLRenderer: Texture marked for update but image is incomplete");else{rt(W,L,b);return}}else L.isExternalTexture&&(W.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,W.__webglTexture,o.TEXTURE0+b)}function z(L,b){const W=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){rt(W,L,b);return}else L.isExternalTexture&&(W.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,W.__webglTexture,o.TEXTURE0+b)}function G(L,b){const W=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){rt(W,L,b);return}i.bindTexture(o.TEXTURE_3D,W.__webglTexture,o.TEXTURE0+b)}function tt(L,b){const W=r.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&W.__version!==L.version){ht(W,L,b);return}i.bindTexture(o.TEXTURE_CUBE_MAP,W.__webglTexture,o.TEXTURE0+b)}const yt={[cd]:o.REPEAT,[ma]:o.CLAMP_TO_EDGE,[ud]:o.MIRRORED_REPEAT},vt={[Cn]:o.NEAREST,[by]:o.NEAREST_MIPMAP_NEAREST,[gc]:o.NEAREST_MIPMAP_LINEAR,[On]:o.LINEAR,[xh]:o.LINEAR_MIPMAP_NEAREST,[Dr]:o.LINEAR_MIPMAP_LINEAR},O={[Ry]:o.NEVER,[Ny]:o.ALWAYS,[Cy]:o.LESS,[ip]:o.LEQUAL,[wy]:o.EQUAL,[ap]:o.GEQUAL,[Dy]:o.GREATER,[Uy]:o.NOTEQUAL};function nt(L,b){if(b.type===Hi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===On||b.magFilter===xh||b.magFilter===gc||b.magFilter===Dr||b.minFilter===On||b.minFilter===xh||b.minFilter===gc||b.minFilter===Dr)&&ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,yt[b.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,yt[b.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,yt[b.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,vt[b.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,vt[b.minFilter]),b.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,O[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Cn||b.minFilter!==gc&&b.minFilter!==Dr||b.type===Hi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");o.texParameterf(L,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function mt(L,b){let W=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",F));const pt=b.source;let St=S.get(pt);St===void 0&&(St={},S.set(pt,St));const ft=lt(b);if(ft!==L.__cacheKey){St[ft]===void 0&&(St[ft]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,W=!0),St[ft].usedTimes++;const Zt=St[L.__cacheKey];Zt!==void 0&&(St[L.__cacheKey].usedTimes--,Zt.usedTimes===0&&A(b)),L.__cacheKey=ft,L.__webglTexture=St[ft].texture}return W}function At(L,b,W){return Math.floor(Math.floor(L/W)/b)}function It(L,b,W,pt){const ft=L.updateRanges;if(ft.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,b.width,b.height,W,pt,b.data);else{ft.sort((bt,Et)=>bt.start-Et.start);let Zt=0;for(let bt=1;bt<ft.length;bt++){const Et=ft[Zt],Bt=ft[bt],Pt=Et.start+Et.count,wt=At(Bt.start,b.width,4),le=At(Et.start,b.width,4);Bt.start<=Pt+1&&wt===le&&At(Bt.start+Bt.count-1,b.width,4)===wt?Et.count=Math.max(Et.count,Bt.start+Bt.count-Et.start):(++Zt,ft[Zt]=Bt)}ft.length=Zt+1;const Ct=o.getParameter(o.UNPACK_ROW_LENGTH),Xt=o.getParameter(o.UNPACK_SKIP_PIXELS),ee=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,b.width);for(let bt=0,Et=ft.length;bt<Et;bt++){const Bt=ft[bt],Pt=Math.floor(Bt.start/4),wt=Math.ceil(Bt.count/4),le=Pt%b.width,X=Math.floor(Pt/b.width),Nt=wt,Tt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,le),o.pixelStorei(o.UNPACK_SKIP_ROWS,X),i.texSubImage2D(o.TEXTURE_2D,0,le,X,Nt,Tt,W,pt,b.data)}L.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ct),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Xt),o.pixelStorei(o.UNPACK_SKIP_ROWS,ee)}}function rt(L,b,W){let pt=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(pt=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(pt=o.TEXTURE_3D);const St=mt(L,b),ft=b.source;i.bindTexture(pt,L.__webglTexture,o.TEXTURE0+W);const Zt=r.get(ft);if(ft.version!==Zt.__version||St===!0){i.activeTexture(o.TEXTURE0+W);const Ct=Te.getPrimaries(Te.workingColorSpace),Xt=b.colorSpace===$a?null:Te.getPrimaries(b.colorSpace),ee=b.colorSpace===$a||Ct===Xt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let bt=C(b.image,!1,l.maxTextureSize);bt=Le(b,bt);const Et=c.convert(b.format,b.colorSpace),Bt=c.convert(b.type);let Pt=U(b.internalFormat,Et,Bt,b.colorSpace,b.isVideoTexture);nt(pt,b);let wt;const le=b.mipmaps,X=b.isVideoTexture!==!0,Nt=Zt.__version===void 0||St===!0,Tt=ft.dataReady,zt=B(b,bt);if(b.isDepthTexture)Pt=N(b.format===Ur,b.type),Nt&&(X?i.texStorage2D(o.TEXTURE_2D,1,Pt,bt.width,bt.height):i.texImage2D(o.TEXTURE_2D,0,Pt,bt.width,bt.height,0,Et,Bt,null));else if(b.isDataTexture)if(le.length>0){X&&Nt&&i.texStorage2D(o.TEXTURE_2D,zt,Pt,le[0].width,le[0].height);for(let Mt=0,xt=le.length;Mt<xt;Mt++)wt=le[Mt],X?Tt&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,wt.width,wt.height,Et,Bt,wt.data):i.texImage2D(o.TEXTURE_2D,Mt,Pt,wt.width,wt.height,0,Et,Bt,wt.data);b.generateMipmaps=!1}else X?(Nt&&i.texStorage2D(o.TEXTURE_2D,zt,Pt,bt.width,bt.height),Tt&&It(b,bt,Et,Bt)):i.texImage2D(o.TEXTURE_2D,0,Pt,bt.width,bt.height,0,Et,Bt,bt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){X&&Nt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,zt,Pt,le[0].width,le[0].height,bt.depth);for(let Mt=0,xt=le.length;Mt<xt;Mt++)if(wt=le[Mt],b.format!==wi)if(Et!==null)if(X){if(Tt)if(b.layerUpdates.size>0){const Rt=N_(wt.width,wt.height,b.format,b.type);for(const ne of b.layerUpdates){const Pe=wt.data.subarray(ne*Rt/wt.data.BYTES_PER_ELEMENT,(ne+1)*Rt/wt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,ne,wt.width,wt.height,1,Et,Pe)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,wt.width,wt.height,bt.depth,Et,wt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Mt,Pt,wt.width,wt.height,bt.depth,0,wt.data,0,0);else ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Tt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,wt.width,wt.height,bt.depth,Et,Bt,wt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Mt,Pt,wt.width,wt.height,bt.depth,0,Et,Bt,wt.data)}else{X&&Nt&&i.texStorage2D(o.TEXTURE_2D,zt,Pt,le[0].width,le[0].height);for(let Mt=0,xt=le.length;Mt<xt;Mt++)wt=le[Mt],b.format!==wi?Et!==null?X?Tt&&i.compressedTexSubImage2D(o.TEXTURE_2D,Mt,0,0,wt.width,wt.height,Et,wt.data):i.compressedTexImage2D(o.TEXTURE_2D,Mt,Pt,wt.width,wt.height,0,wt.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Tt&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,wt.width,wt.height,Et,Bt,wt.data):i.texImage2D(o.TEXTURE_2D,Mt,Pt,wt.width,wt.height,0,Et,Bt,wt.data)}else if(b.isDataArrayTexture)if(X){if(Nt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,zt,Pt,bt.width,bt.height,bt.depth),Tt)if(b.layerUpdates.size>0){const Mt=N_(bt.width,bt.height,b.format,b.type);for(const xt of b.layerUpdates){const Rt=bt.data.subarray(xt*Mt/bt.data.BYTES_PER_ELEMENT,(xt+1)*Mt/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,xt,bt.width,bt.height,1,Et,Bt,Rt)}b.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Et,Bt,bt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Pt,bt.width,bt.height,bt.depth,0,Et,Bt,bt.data);else if(b.isData3DTexture)X?(Nt&&i.texStorage3D(o.TEXTURE_3D,zt,Pt,bt.width,bt.height,bt.depth),Tt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Et,Bt,bt.data)):i.texImage3D(o.TEXTURE_3D,0,Pt,bt.width,bt.height,bt.depth,0,Et,Bt,bt.data);else if(b.isFramebufferTexture){if(Nt)if(X)i.texStorage2D(o.TEXTURE_2D,zt,Pt,bt.width,bt.height);else{let Mt=bt.width,xt=bt.height;for(let Rt=0;Rt<zt;Rt++)i.texImage2D(o.TEXTURE_2D,Rt,Pt,Mt,xt,0,Et,Bt,null),Mt>>=1,xt>>=1}}else if(le.length>0){if(X&&Nt){const Mt=Yt(le[0]);i.texStorage2D(o.TEXTURE_2D,zt,Pt,Mt.width,Mt.height)}for(let Mt=0,xt=le.length;Mt<xt;Mt++)wt=le[Mt],X?Tt&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Et,Bt,wt):i.texImage2D(o.TEXTURE_2D,Mt,Pt,Et,Bt,wt);b.generateMipmaps=!1}else if(X){if(Nt){const Mt=Yt(bt);i.texStorage2D(o.TEXTURE_2D,zt,Pt,Mt.width,Mt.height)}Tt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Et,Bt,bt)}else i.texImage2D(o.TEXTURE_2D,0,Pt,Et,Bt,bt);y(b)&&x(pt),Zt.__version=ft.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function ht(L,b,W){if(b.image.length!==6)return;const pt=mt(L,b),St=b.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+W);const ft=r.get(St);if(St.version!==ft.__version||pt===!0){i.activeTexture(o.TEXTURE0+W);const Zt=Te.getPrimaries(Te.workingColorSpace),Ct=b.colorSpace===$a?null:Te.getPrimaries(b.colorSpace),Xt=b.colorSpace===$a||Zt===Ct?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);const ee=b.isCompressedTexture||b.image[0].isCompressedTexture,bt=b.image[0]&&b.image[0].isDataTexture,Et=[];for(let xt=0;xt<6;xt++)!ee&&!bt?Et[xt]=C(b.image[xt],!0,l.maxCubemapSize):Et[xt]=bt?b.image[xt].image:b.image[xt],Et[xt]=Le(b,Et[xt]);const Bt=Et[0],Pt=c.convert(b.format,b.colorSpace),wt=c.convert(b.type),le=U(b.internalFormat,Pt,wt,b.colorSpace),X=b.isVideoTexture!==!0,Nt=ft.__version===void 0||pt===!0,Tt=St.dataReady;let zt=B(b,Bt);nt(o.TEXTURE_CUBE_MAP,b);let Mt;if(ee){X&&Nt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,zt,le,Bt.width,Bt.height);for(let xt=0;xt<6;xt++){Mt=Et[xt].mipmaps;for(let Rt=0;Rt<Mt.length;Rt++){const ne=Mt[Rt];b.format!==wi?Pt!==null?X?Tt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Rt,0,0,ne.width,ne.height,Pt,ne.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Rt,le,ne.width,ne.height,0,ne.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Rt,0,0,ne.width,ne.height,Pt,wt,ne.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Rt,le,ne.width,ne.height,0,Pt,wt,ne.data)}}}else{if(Mt=b.mipmaps,X&&Nt){Mt.length>0&&zt++;const xt=Yt(Et[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,zt,le,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(bt){X?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Et[xt].width,Et[xt].height,Pt,wt,Et[xt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,le,Et[xt].width,Et[xt].height,0,Pt,wt,Et[xt].data);for(let Rt=0;Rt<Mt.length;Rt++){const Pe=Mt[Rt].image[xt].image;X?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Rt+1,0,0,Pe.width,Pe.height,Pt,wt,Pe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Rt+1,le,Pe.width,Pe.height,0,Pt,wt,Pe.data)}}else{X?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Pt,wt,Et[xt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,le,Pt,wt,Et[xt]);for(let Rt=0;Rt<Mt.length;Rt++){const ne=Mt[Rt];X?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Rt+1,0,0,Pt,wt,ne.image[xt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Rt+1,le,Pt,wt,ne.image[xt])}}}y(b)&&x(o.TEXTURE_CUBE_MAP),ft.__version=St.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function Dt(L,b,W,pt,St,ft){const Zt=c.convert(W.format,W.colorSpace),Ct=c.convert(W.type),Xt=U(W.internalFormat,Zt,Ct,W.colorSpace),ee=r.get(b),bt=r.get(W);if(bt.__renderTarget=b,!ee.__hasExternalTextures){const Et=Math.max(1,b.width>>ft),Bt=Math.max(1,b.height>>ft);St===o.TEXTURE_3D||St===o.TEXTURE_2D_ARRAY?i.texImage3D(St,ft,Xt,Et,Bt,b.depth,0,Zt,Ct,null):i.texImage2D(St,ft,Xt,Et,Bt,0,Zt,Ct,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),je(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pt,St,bt.__webglTexture,0,V(b)):(St===o.TEXTURE_2D||St>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pt,St,bt.__webglTexture,ft),i.bindFramebuffer(o.FRAMEBUFFER,null)}function kt(L,b,W){if(o.bindRenderbuffer(o.RENDERBUFFER,L),b.depthBuffer){const pt=b.depthTexture,St=pt&&pt.isDepthTexture?pt.type:null,ft=N(b.stencilBuffer,St),Zt=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;je(b)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,V(b),ft,b.width,b.height):W?o.renderbufferStorageMultisample(o.RENDERBUFFER,V(b),ft,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,ft,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Zt,o.RENDERBUFFER,L)}else{const pt=b.textures;for(let St=0;St<pt.length;St++){const ft=pt[St],Zt=c.convert(ft.format,ft.colorSpace),Ct=c.convert(ft.type),Xt=U(ft.internalFormat,Zt,Ct,ft.colorSpace);je(b)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,V(b),Xt,b.width,b.height):W?o.renderbufferStorageMultisample(o.RENDERBUFFER,V(b),Xt,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,Xt,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ht(L,b,W){const pt=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const St=r.get(b.depthTexture);if(St.__renderTarget=b,(!St.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),pt){if(St.__webglInit===void 0&&(St.__webglInit=!0,b.depthTexture.addEventListener("dispose",F)),St.__webglTexture===void 0){St.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,St.__webglTexture),nt(o.TEXTURE_CUBE_MAP,b.depthTexture);const ee=c.convert(b.depthTexture.format),bt=c.convert(b.depthTexture.type);let Et;b.depthTexture.format===xa?Et=o.DEPTH_COMPONENT24:b.depthTexture.format===Ur&&(Et=o.DEPTH24_STENCIL8);for(let Bt=0;Bt<6;Bt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Bt,0,Et,b.width,b.height,0,ee,bt,null)}}else ut(b.depthTexture,0);const ft=St.__webglTexture,Zt=V(b),Ct=pt?o.TEXTURE_CUBE_MAP_POSITIVE_X+W:o.TEXTURE_2D,Xt=b.depthTexture.format===Ur?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(b.depthTexture.format===xa)je(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Xt,Ct,ft,0,Zt):o.framebufferTexture2D(o.FRAMEBUFFER,Xt,Ct,ft,0);else if(b.depthTexture.format===Ur)je(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Xt,Ct,ft,0,Zt):o.framebufferTexture2D(o.FRAMEBUFFER,Xt,Ct,ft,0);else throw new Error("Unknown depthTexture format")}function de(L){const b=r.get(L),W=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){const pt=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),pt){const St=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,pt.removeEventListener("dispose",St)};pt.addEventListener("dispose",St),b.__depthDisposeCallback=St}b.__boundDepthTexture=pt}if(L.depthTexture&&!b.__autoAllocateDepthBuffer)if(W)for(let pt=0;pt<6;pt++)Ht(b.__webglFramebuffer[pt],L,pt);else{const pt=L.texture.mipmaps;pt&&pt.length>0?Ht(b.__webglFramebuffer[0],L,0):Ht(b.__webglFramebuffer,L,0)}else if(W){b.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[pt]),b.__webglDepthbuffer[pt]===void 0)b.__webglDepthbuffer[pt]=o.createRenderbuffer(),kt(b.__webglDepthbuffer[pt],L,!1);else{const St=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ft=b.__webglDepthbuffer[pt];o.bindRenderbuffer(o.RENDERBUFFER,ft),o.framebufferRenderbuffer(o.FRAMEBUFFER,St,o.RENDERBUFFER,ft)}}else{const pt=L.texture.mipmaps;if(pt&&pt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),kt(b.__webglDepthbuffer,L,!1);else{const St=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ft=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ft),o.framebufferRenderbuffer(o.FRAMEBUFFER,St,o.RENDERBUFFER,ft)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Je(L,b,W){const pt=r.get(L);b!==void 0&&Dt(pt.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),W!==void 0&&de(L)}function _e(L){const b=L.texture,W=r.get(L),pt=r.get(b);L.addEventListener("dispose",P);const St=L.textures,ft=L.isWebGLCubeRenderTarget===!0,Zt=St.length>1;if(Zt||(pt.__webglTexture===void 0&&(pt.__webglTexture=o.createTexture()),pt.__version=b.version,h.memory.textures++),ft){W.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer[Ct]=[];for(let Xt=0;Xt<b.mipmaps.length;Xt++)W.__webglFramebuffer[Ct][Xt]=o.createFramebuffer()}else W.__webglFramebuffer[Ct]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer=[];for(let Ct=0;Ct<b.mipmaps.length;Ct++)W.__webglFramebuffer[Ct]=o.createFramebuffer()}else W.__webglFramebuffer=o.createFramebuffer();if(Zt)for(let Ct=0,Xt=St.length;Ct<Xt;Ct++){const ee=r.get(St[Ct]);ee.__webglTexture===void 0&&(ee.__webglTexture=o.createTexture(),h.memory.textures++)}if(L.samples>0&&je(L)===!1){W.__webglMultisampledFramebuffer=o.createFramebuffer(),W.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Ct=0;Ct<St.length;Ct++){const Xt=St[Ct];W.__webglColorRenderbuffer[Ct]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,W.__webglColorRenderbuffer[Ct]);const ee=c.convert(Xt.format,Xt.colorSpace),bt=c.convert(Xt.type),Et=U(Xt.internalFormat,ee,bt,Xt.colorSpace,L.isXRRenderTarget===!0),Bt=V(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,Bt,Et,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.RENDERBUFFER,W.__webglColorRenderbuffer[Ct])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(W.__webglDepthRenderbuffer=o.createRenderbuffer(),kt(W.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ft){i.bindTexture(o.TEXTURE_CUBE_MAP,pt.__webglTexture),nt(o.TEXTURE_CUBE_MAP,b);for(let Ct=0;Ct<6;Ct++)if(b.mipmaps&&b.mipmaps.length>0)for(let Xt=0;Xt<b.mipmaps.length;Xt++)Dt(W.__webglFramebuffer[Ct][Xt],L,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Xt);else Dt(W.__webglFramebuffer[Ct],L,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);y(b)&&x(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Zt){for(let Ct=0,Xt=St.length;Ct<Xt;Ct++){const ee=St[Ct],bt=r.get(ee);let Et=o.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Et=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Et,bt.__webglTexture),nt(Et,ee),Dt(W.__webglFramebuffer,L,ee,o.COLOR_ATTACHMENT0+Ct,Et,0),y(ee)&&x(Et)}i.unbindTexture()}else{let Ct=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ct=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ct,pt.__webglTexture),nt(Ct,b),b.mipmaps&&b.mipmaps.length>0)for(let Xt=0;Xt<b.mipmaps.length;Xt++)Dt(W.__webglFramebuffer[Xt],L,b,o.COLOR_ATTACHMENT0,Ct,Xt);else Dt(W.__webglFramebuffer,L,b,o.COLOR_ATTACHMENT0,Ct,0);y(b)&&x(Ct),i.unbindTexture()}L.depthBuffer&&de(L)}function pe(L){const b=L.textures;for(let W=0,pt=b.length;W<pt;W++){const St=b[W];if(y(St)){const ft=D(L),Zt=r.get(St).__webglTexture;i.bindTexture(ft,Zt),x(ft),i.unbindTexture()}}}const we=[],se=[];function $e(L){if(L.samples>0){if(je(L)===!1){const b=L.textures,W=L.width,pt=L.height;let St=o.COLOR_BUFFER_BIT;const ft=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Zt=r.get(L),Ct=b.length>1;if(Ct)for(let ee=0;ee<b.length;ee++)i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer);const Xt=L.texture.mipmaps;Xt&&Xt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer);for(let ee=0;ee<b.length;ee++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(St|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(St|=o.STENCIL_BUFFER_BIT)),Ct){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Zt.__webglColorRenderbuffer[ee]);const bt=r.get(b[ee]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,bt,0)}o.blitFramebuffer(0,0,W,pt,0,0,W,pt,St,o.NEAREST),m===!0&&(we.length=0,se.length=0,we.push(o.COLOR_ATTACHMENT0+ee),L.depthBuffer&&L.resolveDepthBuffer===!1&&(we.push(ft),se.push(ft),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,se)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,we))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ct)for(let ee=0;ee<b.length;ee++){i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.RENDERBUFFER,Zt.__webglColorRenderbuffer[ee]);const bt=r.get(b[ee]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.TEXTURE_2D,bt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const b=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function V(L){return Math.min(l.maxSamples,L.samples)}function je(L){const b=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Me(L){const b=h.render.frame;v.get(L)!==b&&(v.set(L,b),L.update())}function Le(L,b){const W=L.colorSpace,pt=L.format,St=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||W!==Hs&&W!==$a&&(Te.getTransfer(W)===Ie?(pt!==wi||St!==vi)&&ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):be("WebGLTextures: Unsupported texture color space:",W)),b}function Yt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=Z,this.resetTextureUnits=Q,this.setTexture2D=ut,this.setTexture2DArray=z,this.setTexture3D=G,this.setTextureCube=tt,this.rebindTextures=Je,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=je,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function sA(o,e){function i(r,l=$a){let c;const h=Te.getTransfer(l);if(r===vi)return o.UNSIGNED_BYTE;if(r===Jd)return o.UNSIGNED_SHORT_4_4_4_4;if(r===$d)return o.UNSIGNED_SHORT_5_5_5_1;if(r===dv)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===pv)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===fv)return o.BYTE;if(r===hv)return o.SHORT;if(r===Qo)return o.UNSIGNED_SHORT;if(r===Qd)return o.INT;if(r===Xi)return o.UNSIGNED_INT;if(r===Hi)return o.FLOAT;if(r===va)return o.HALF_FLOAT;if(r===mv)return o.ALPHA;if(r===gv)return o.RGB;if(r===wi)return o.RGBA;if(r===xa)return o.DEPTH_COMPONENT;if(r===Ur)return o.DEPTH_STENCIL;if(r===_v)return o.RED;if(r===tp)return o.RED_INTEGER;if(r===Is)return o.RG;if(r===ep)return o.RG_INTEGER;if(r===np)return o.RGBA_INTEGER;if(r===Xc||r===Wc||r===qc||r===Yc)if(h===Ie)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Xc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Wc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Yc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Xc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Wc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===qc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Yc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===fd||r===hd||r===dd||r===pd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===fd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===hd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===dd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===pd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===md||r===gd||r===_d||r===vd||r===xd||r===Sd||r===yd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===md||r===gd)return h===Ie?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===_d)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===vd)return c.COMPRESSED_R11_EAC;if(r===xd)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Sd)return c.COMPRESSED_RG11_EAC;if(r===yd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Md||r===bd||r===Ed||r===Td||r===Ad||r===Rd||r===Cd||r===wd||r===Dd||r===Ud||r===Nd||r===Ld||r===Od||r===Pd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Md)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===bd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ed)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Td)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ad)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Rd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Cd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===wd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Dd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ud)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Nd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ld)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Od)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Pd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===zd||r===Bd||r===Fd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===zd)return h===Ie?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Bd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Fd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Id||r===Hd||r===Gd||r===Vd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Id)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Hd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Gd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Vd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Jo?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const oA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class cA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new Nv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Wi({vertexShader:oA,fragmentShader:lA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Di(new su(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class uA extends Vs{constructor(e,i){super();const r=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,v=null,_=null,S=null,M=null,E=null;const C=typeof XRWebGLBinding<"u",y=new cA,x={},D=i.getContextAttributes();let U=null,N=null;const B=[],F=[],P=new he;let q=null;const A=new _i;A.viewport=new rn;const w=new _i;w.viewport=new rn;const I=[A,w],Q=new xM;let Z=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(rt){let ht=B[rt];return ht===void 0&&(ht=new Vh,B[rt]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(rt){let ht=B[rt];return ht===void 0&&(ht=new Vh,B[rt]=ht),ht.getGripSpace()},this.getHand=function(rt){let ht=B[rt];return ht===void 0&&(ht=new Vh,B[rt]=ht),ht.getHandSpace()};function ut(rt){const ht=F.indexOf(rt.inputSource);if(ht===-1)return;const Dt=B[ht];Dt!==void 0&&(Dt.update(rt.inputSource,rt.frame,p||h),Dt.dispatchEvent({type:rt.type,data:rt.inputSource}))}function z(){l.removeEventListener("select",ut),l.removeEventListener("selectstart",ut),l.removeEventListener("selectend",ut),l.removeEventListener("squeeze",ut),l.removeEventListener("squeezestart",ut),l.removeEventListener("squeezeend",ut),l.removeEventListener("end",z),l.removeEventListener("inputsourceschange",G);for(let rt=0;rt<B.length;rt++){const ht=F[rt];ht!==null&&(F[rt]=null,B[rt].disconnect(ht))}Z=null,lt=null,y.reset();for(const rt in x)delete x[rt];e.setRenderTarget(U),M=null,S=null,_=null,l=null,N=null,It.stop(),r.isPresenting=!1,e.setPixelRatio(q),e.setSize(P.width,P.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(rt){c=rt,r.isPresenting===!0&&ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(rt){d=rt,r.isPresenting===!0&&ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(rt){p=rt},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return _===null&&C&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(rt){if(l=rt,l!==null){if(U=e.getRenderTarget(),l.addEventListener("select",ut),l.addEventListener("selectstart",ut),l.addEventListener("selectend",ut),l.addEventListener("squeeze",ut),l.addEventListener("squeezestart",ut),l.addEventListener("squeezeend",ut),l.addEventListener("end",z),l.addEventListener("inputsourceschange",G),D.xrCompatible!==!0&&await i.makeXRCompatible(),q=e.getPixelRatio(),e.getSize(P),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Dt=null,kt=null,Ht=null;D.depth&&(Ht=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Dt=D.stencil?Ur:xa,kt=D.stencil?Jo:Xi);const de={colorFormat:i.RGBA8,depthFormat:Ht,scaleFactor:c};_=this.getBinding(),S=_.createProjectionLayer(de),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),N=new ki(S.textureWidth,S.textureHeight,{format:wi,type:vi,depthTexture:new tl(S.textureWidth,S.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,Dt),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Dt={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Dt),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),N=new ki(M.framebufferWidth,M.framebufferHeight,{format:wi,type:vi,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),It.setContext(l),It.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function G(rt){for(let ht=0;ht<rt.removed.length;ht++){const Dt=rt.removed[ht],kt=F.indexOf(Dt);kt>=0&&(F[kt]=null,B[kt].disconnect(Dt))}for(let ht=0;ht<rt.added.length;ht++){const Dt=rt.added[ht];let kt=F.indexOf(Dt);if(kt===-1){for(let de=0;de<B.length;de++)if(de>=F.length){F.push(Dt),kt=de;break}else if(F[de]===null){F[de]=Dt,kt=de;break}if(kt===-1)break}const Ht=B[kt];Ht&&Ht.connect(Dt)}}const tt=new K,yt=new K;function vt(rt,ht,Dt){tt.setFromMatrixPosition(ht.matrixWorld),yt.setFromMatrixPosition(Dt.matrixWorld);const kt=tt.distanceTo(yt),Ht=ht.projectionMatrix.elements,de=Dt.projectionMatrix.elements,Je=Ht[14]/(Ht[10]-1),_e=Ht[14]/(Ht[10]+1),pe=(Ht[9]+1)/Ht[5],we=(Ht[9]-1)/Ht[5],se=(Ht[8]-1)/Ht[0],$e=(de[8]+1)/de[0],V=Je*se,je=Je*$e,Me=kt/(-se+$e),Le=Me*-se;if(ht.matrixWorld.decompose(rt.position,rt.quaternion,rt.scale),rt.translateX(Le),rt.translateZ(Me),rt.matrixWorld.compose(rt.position,rt.quaternion,rt.scale),rt.matrixWorldInverse.copy(rt.matrixWorld).invert(),Ht[10]===-1)rt.projectionMatrix.copy(ht.projectionMatrix),rt.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{const Yt=Je+Me,L=_e+Me,b=V-Le,W=je+(kt-Le),pt=pe*_e/L*Yt,St=we*_e/L*Yt;rt.projectionMatrix.makePerspective(b,W,pt,St,Yt,L),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert()}}function O(rt,ht){ht===null?rt.matrixWorld.copy(rt.matrix):rt.matrixWorld.multiplyMatrices(ht.matrixWorld,rt.matrix),rt.matrixWorldInverse.copy(rt.matrixWorld).invert()}this.updateCamera=function(rt){if(l===null)return;let ht=rt.near,Dt=rt.far;y.texture!==null&&(y.depthNear>0&&(ht=y.depthNear),y.depthFar>0&&(Dt=y.depthFar)),Q.near=w.near=A.near=ht,Q.far=w.far=A.far=Dt,(Z!==Q.near||lt!==Q.far)&&(l.updateRenderState({depthNear:Q.near,depthFar:Q.far}),Z=Q.near,lt=Q.far),Q.layers.mask=rt.layers.mask|6,A.layers.mask=Q.layers.mask&3,w.layers.mask=Q.layers.mask&5;const kt=rt.parent,Ht=Q.cameras;O(Q,kt);for(let de=0;de<Ht.length;de++)O(Ht[de],kt);Ht.length===2?vt(Q,A,w):Q.projectionMatrix.copy(A.projectionMatrix),nt(rt,Q,kt)};function nt(rt,ht,Dt){Dt===null?rt.matrix.copy(ht.matrixWorld):(rt.matrix.copy(Dt.matrixWorld),rt.matrix.invert(),rt.matrix.multiply(ht.matrixWorld)),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.updateMatrixWorld(!0),rt.projectionMatrix.copy(ht.projectionMatrix),rt.projectionMatrixInverse.copy(ht.projectionMatrixInverse),rt.isPerspectiveCamera&&(rt.fov=Xd*2*Math.atan(1/rt.projectionMatrix.elements[5]),rt.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(S===null&&M===null))return m},this.setFoveation=function(rt){m=rt,S!==null&&(S.fixedFoveation=rt),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=rt)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Q)},this.getCameraTexture=function(rt){return x[rt]};let mt=null;function At(rt,ht){if(v=ht.getViewerPose(p||h),E=ht,v!==null){const Dt=v.views;M!==null&&(e.setRenderTargetFramebuffer(N,M.framebuffer),e.setRenderTarget(N));let kt=!1;Dt.length!==Q.cameras.length&&(Q.cameras.length=0,kt=!0);for(let _e=0;_e<Dt.length;_e++){const pe=Dt[_e];let we=null;if(M!==null)we=M.getViewport(pe);else{const $e=_.getViewSubImage(S,pe);we=$e.viewport,_e===0&&(e.setRenderTargetTextures(N,$e.colorTexture,$e.depthStencilTexture),e.setRenderTarget(N))}let se=I[_e];se===void 0&&(se=new _i,se.layers.enable(_e),se.viewport=new rn,I[_e]=se),se.matrix.fromArray(pe.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(pe.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(we.x,we.y,we.width,we.height),_e===0&&(Q.matrix.copy(se.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),kt===!0&&Q.cameras.push(se)}const Ht=l.enabledFeatures;if(Ht&&Ht.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){_=r.getBinding();const _e=_.getDepthInformation(Dt[0]);_e&&_e.isValid&&_e.texture&&y.init(_e,l.renderState)}if(Ht&&Ht.includes("camera-access")&&C){e.state.unbindTexture(),_=r.getBinding();for(let _e=0;_e<Dt.length;_e++){const pe=Dt[_e].camera;if(pe){let we=x[pe];we||(we=new Nv,x[pe]=we);const se=_.getCameraImage(pe);we.sourceTexture=se}}}}for(let Dt=0;Dt<B.length;Dt++){const kt=F[Dt],Ht=B[Dt];kt!==null&&Ht!==void 0&&Ht.update(kt,ht,p||h)}mt&&mt(rt,ht),ht.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ht}),E=null}const It=new Ov;It.setAnimationLoop(At),this.setAnimationLoop=function(rt){mt=rt},this.dispose=function(){}}}const Ar=new Sa,fA=new Qe;function hA(o,e){function i(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function r(y,x){x.color.getRGB(y.fogColor.value,bv(o)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function l(y,x,D,U,N){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(y,x):x.isMeshToonMaterial?(c(y,x),_(y,x)):x.isMeshPhongMaterial?(c(y,x),v(y,x)):x.isMeshStandardMaterial?(c(y,x),S(y,x),x.isMeshPhysicalMaterial&&M(y,x,N)):x.isMeshMatcapMaterial?(c(y,x),E(y,x)):x.isMeshDepthMaterial?c(y,x):x.isMeshDistanceMaterial?(c(y,x),C(y,x)):x.isMeshNormalMaterial?c(y,x):x.isLineBasicMaterial?(h(y,x),x.isLineDashedMaterial&&d(y,x)):x.isPointsMaterial?m(y,x,D,U):x.isSpriteMaterial?p(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,i(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===jn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,i(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===jn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,i(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,i(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const D=e.get(x),U=D.envMap,N=D.envMapRotation;U&&(y.envMap.value=U,Ar.copy(N),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),y.envMapRotation.value.setFromMatrix4(fA.makeRotationFromEuler(Ar)),y.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,y.aoMapTransform))}function h(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform))}function d(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function m(y,x,D,U){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*D,y.scale.value=U*.5,x.map&&(y.map.value=x.map,i(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function p(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function v(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function _(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function S(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function M(y,x,D){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===jn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,x){x.matcap&&(y.matcap.value=x.matcap)}function C(y,x){const D=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function dA(o,e,i,r){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,U){const N=U.program;r.uniformBlockBinding(D,N)}function p(D,U){let N=l[D.id];N===void 0&&(E(D),N=v(D),l[D.id]=N,D.addEventListener("dispose",y));const B=U.program;r.updateUBOMapping(D,B);const F=e.render.frame;c[D.id]!==F&&(S(D),c[D.id]=F)}function v(D){const U=_();D.__bindingPointIndex=U;const N=o.createBuffer(),B=D.__size,F=D.usage;return o.bindBuffer(o.UNIFORM_BUFFER,N),o.bufferData(o.UNIFORM_BUFFER,B,F),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,N),N}function _(){for(let D=0;D<d;D++)if(h.indexOf(D)===-1)return h.push(D),D;return be("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(D){const U=l[D.id],N=D.uniforms,B=D.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let F=0,P=N.length;F<P;F++){const q=Array.isArray(N[F])?N[F]:[N[F]];for(let A=0,w=q.length;A<w;A++){const I=q[A];if(M(I,F,A,B)===!0){const Q=I.__offset,Z=Array.isArray(I.value)?I.value:[I.value];let lt=0;for(let ut=0;ut<Z.length;ut++){const z=Z[ut],G=C(z);typeof z=="number"||typeof z=="boolean"?(I.__data[0]=z,o.bufferSubData(o.UNIFORM_BUFFER,Q+lt,I.__data)):z.isMatrix3?(I.__data[0]=z.elements[0],I.__data[1]=z.elements[1],I.__data[2]=z.elements[2],I.__data[3]=0,I.__data[4]=z.elements[3],I.__data[5]=z.elements[4],I.__data[6]=z.elements[5],I.__data[7]=0,I.__data[8]=z.elements[6],I.__data[9]=z.elements[7],I.__data[10]=z.elements[8],I.__data[11]=0):(z.toArray(I.__data,lt),lt+=G.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,Q,I.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(D,U,N,B){const F=D.value,P=U+"_"+N;if(B[P]===void 0)return typeof F=="number"||typeof F=="boolean"?B[P]=F:B[P]=F.clone(),!0;{const q=B[P];if(typeof F=="number"||typeof F=="boolean"){if(q!==F)return B[P]=F,!0}else if(q.equals(F)===!1)return q.copy(F),!0}return!1}function E(D){const U=D.uniforms;let N=0;const B=16;for(let P=0,q=U.length;P<q;P++){const A=Array.isArray(U[P])?U[P]:[U[P]];for(let w=0,I=A.length;w<I;w++){const Q=A[w],Z=Array.isArray(Q.value)?Q.value:[Q.value];for(let lt=0,ut=Z.length;lt<ut;lt++){const z=Z[lt],G=C(z),tt=N%B,yt=tt%G.boundary,vt=tt+yt;N+=yt,vt!==0&&B-vt<G.storage&&(N+=B-vt),Q.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=N,N+=G.storage}}}const F=N%B;return F>0&&(N+=B-F),D.__size=N,D.__cache={},this}function C(D){const U={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(U.boundary=4,U.storage=4):D.isVector2?(U.boundary=8,U.storage=8):D.isVector3||D.isColor?(U.boundary=16,U.storage=12):D.isVector4?(U.boundary=16,U.storage=16):D.isMatrix3?(U.boundary=48,U.storage=48):D.isMatrix4?(U.boundary=64,U.storage=64):D.isTexture?ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ie("WebGLRenderer: Unsupported uniform value type.",D),U}function y(D){const U=D.target;U.removeEventListener("dispose",y);const N=h.indexOf(U.__bindingPointIndex);h.splice(N,1),o.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function x(){for(const D in l)o.deleteBuffer(l[D]);h=[],l={},c={}}return{bind:m,update:p,dispose:x}}const pA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let zi=null;function mA(){return zi===null&&(zi=new lM(pA,16,16,Is,va),zi.name="DFG_LUT",zi.minFilter=On,zi.magFilter=On,zi.wrapS=ma,zi.wrapT=ma,zi.generateMipmaps=!1,zi.needsUpdate=!0),zi}class gA{constructor(e={}){const{canvas:i=Ly(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:S=!1,outputBufferType:M=vi}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=h;const C=M,y=new Set([np,ep,tp]),x=new Set([vi,Xi,Qo,Jo,Jd,$d]),D=new Uint32Array(4),U=new Int32Array(4);let N=null,B=null;const F=[],P=[];let q=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let w=!1;this._outputColorSpace=gi;let I=0,Q=0,Z=null,lt=-1,ut=null;const z=new rn,G=new rn;let tt=null;const yt=new Ce(0);let vt=0,O=i.width,nt=i.height,mt=1,At=null,It=null;const rt=new rn(0,0,O,nt),ht=new rn(0,0,O,nt);let Dt=!1;const kt=new wv;let Ht=!1,de=!1;const Je=new Qe,_e=new K,pe=new rn,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let se=!1;function $e(){return Z===null?mt:1}let V=r;function je(R,Y){return i.getContext(R,Y)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Kd}`),i.addEventListener("webglcontextlost",ne,!1),i.addEventListener("webglcontextrestored",Pe,!1),i.addEventListener("webglcontextcreationerror",Ee,!1),V===null){const Y="webgl2";if(V=je(Y,R),V===null)throw je(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw be("WebGLRenderer: "+R.message),R}let Me,Le,Yt,L,b,W,pt,St,ft,Zt,Ct,Xt,ee,bt,Et,Bt,Pt,wt,le,X,Nt,Tt,zt,Mt;function xt(){Me=new mT(V),Me.init(),Tt=new sA(V,Me),Le=new sT(V,Me,e,Tt),Yt=new aA(V,Me),Le.reversedDepthBuffer&&S&&Yt.buffers.depth.setReversed(!0),L=new vT(V),b=new k1,W=new rA(V,Me,Yt,b,Le,Tt,L),pt=new lT(A),St=new pT(A),ft=new MM(V),zt=new aT(V,ft),Zt=new gT(V,ft,L,zt),Ct=new ST(V,Zt,ft,L),le=new xT(V,Le,W),Bt=new oT(b),Xt=new V1(A,pt,St,Me,Le,zt,Bt),ee=new hA(A,b),bt=new W1,Et=new Q1(Me),wt=new iT(A,pt,St,Yt,Ct,E,m),Pt=new nA(A,Ct,Le),Mt=new dA(V,L,Le,Yt),X=new rT(V,Me,L),Nt=new _T(V,Me,L),L.programs=Xt.programs,A.capabilities=Le,A.extensions=Me,A.properties=b,A.renderLists=bt,A.shadowMap=Pt,A.state=Yt,A.info=L}xt(),C!==vi&&(q=new MT(C,i.width,i.height,l,c));const Rt=new uA(A,V);this.xr=Rt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const R=Me.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Me.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return mt},this.setPixelRatio=function(R){R!==void 0&&(mt=R,this.setSize(O,nt,!1))},this.getSize=function(R){return R.set(O,nt)},this.setSize=function(R,Y,ot=!0){if(Rt.isPresenting){ie("WebGLRenderer: Can't change size while VR device is presenting.");return}O=R,nt=Y,i.width=Math.floor(R*mt),i.height=Math.floor(Y*mt),ot===!0&&(i.style.width=R+"px",i.style.height=Y+"px"),q!==null&&q.setSize(i.width,i.height),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(O*mt,nt*mt).floor()},this.setDrawingBufferSize=function(R,Y,ot){O=R,nt=Y,mt=ot,i.width=Math.floor(R*ot),i.height=Math.floor(Y*ot),this.setViewport(0,0,R,Y)},this.setEffects=function(R){if(C===vi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let Y=0;Y<R.length;Y++)if(R[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}q.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(z)},this.getViewport=function(R){return R.copy(rt)},this.setViewport=function(R,Y,ot,it){R.isVector4?rt.set(R.x,R.y,R.z,R.w):rt.set(R,Y,ot,it),Yt.viewport(z.copy(rt).multiplyScalar(mt).round())},this.getScissor=function(R){return R.copy(ht)},this.setScissor=function(R,Y,ot,it){R.isVector4?ht.set(R.x,R.y,R.z,R.w):ht.set(R,Y,ot,it),Yt.scissor(G.copy(ht).multiplyScalar(mt).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(R){Yt.setScissorTest(Dt=R)},this.setOpaqueSort=function(R){At=R},this.setTransparentSort=function(R){It=R},this.getClearColor=function(R){return R.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor(...arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,ot=!0){let it=0;if(R){let J=!1;if(Z!==null){const Ut=Z.texture.format;J=y.has(Ut)}if(J){const Ut=Z.texture.type,Ft=x.has(Ut),Lt=wt.getClearColor(),Gt=wt.getClearAlpha(),Wt=Lt.r,Jt=Lt.g,qt=Lt.b;Ft?(D[0]=Wt,D[1]=Jt,D[2]=qt,D[3]=Gt,V.clearBufferuiv(V.COLOR,0,D)):(U[0]=Wt,U[1]=Jt,U[2]=qt,U[3]=Gt,V.clearBufferiv(V.COLOR,0,U))}else it|=V.COLOR_BUFFER_BIT}Y&&(it|=V.DEPTH_BUFFER_BIT),ot&&(it|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ne,!1),i.removeEventListener("webglcontextrestored",Pe,!1),i.removeEventListener("webglcontextcreationerror",Ee,!1),wt.dispose(),bt.dispose(),Et.dispose(),b.dispose(),pt.dispose(),St.dispose(),Ct.dispose(),zt.dispose(),Mt.dispose(),Xt.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",Pr),Rt.removeEventListener("sessionend",qs),Ui.stop()};function ne(R){R.preventDefault(),$c("WebGLRenderer: Context Lost."),w=!0}function Pe(){$c("WebGLRenderer: Context Restored."),w=!1;const R=L.autoReset,Y=Pt.enabled,ot=Pt.autoUpdate,it=Pt.needsUpdate,J=Pt.type;xt(),L.autoReset=R,Pt.enabled=Y,Pt.autoUpdate=ot,Pt.needsUpdate=it,Pt.type=J}function Ee(R){be("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Dn(R){const Y=R.target;Y.removeEventListener("dispose",Dn),Si(Y)}function Si(R){rl(R),b.remove(R)}function rl(R){const Y=b.get(R).programs;Y!==void 0&&(Y.forEach(function(ot){Xt.releaseProgram(ot)}),R.isShaderMaterial&&Xt.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,ot,it,J,Ut){Y===null&&(Y=we);const Ft=J.isMesh&&J.matrixWorld.determinant()<0,Lt=ir(R,Y,ot,it,J);Yt.setMaterial(it,Ft);let Gt=ot.index,Wt=1;if(it.wireframe===!0){if(Gt=Zt.getWireframeAttribute(ot),Gt===void 0)return;Wt=2}const Jt=ot.drawRange,qt=ot.attributes.position;let $t=Jt.start*Wt,De=(Jt.start+Jt.count)*Wt;Ut!==null&&($t=Math.max($t,Ut.start*Wt),De=Math.min(De,(Ut.start+Ut.count)*Wt)),Gt!==null?($t=Math.max($t,0),De=Math.min(De,Gt.count)):qt!=null&&($t=Math.max($t,0),De=Math.min(De,qt.count));const Ze=De-$t;if(Ze<0||Ze===1/0)return;zt.setup(J,it,Lt,ot,Gt);let We,Oe=X;if(Gt!==null&&(We=ft.get(Gt),Oe=Nt,Oe.setIndex(We)),J.isMesh)it.wireframe===!0?(Yt.setLineWidth(it.wireframeLinewidth*$e()),Oe.setMode(V.LINES)):Oe.setMode(V.TRIANGLES);else if(J.isLine){let Kt=it.linewidth;Kt===void 0&&(Kt=1),Yt.setLineWidth(Kt*$e()),J.isLineSegments?Oe.setMode(V.LINES):J.isLineLoop?Oe.setMode(V.LINE_LOOP):Oe.setMode(V.LINE_STRIP)}else J.isPoints?Oe.setMode(V.POINTS):J.isSprite&&Oe.setMode(V.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)$o("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Oe.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(Me.get("WEBGL_multi_draw"))Oe.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const Kt=J._multiDrawStarts,Ue=J._multiDrawCounts,ae=J._multiDrawCount,xn=Gt?ft.get(Gt).bytesPerElement:1,qi=b.get(it).currentProgram.getUniforms();for(let Sn=0;Sn<ae;Sn++)qi.setValue(V,"_gl_DrawID",Sn),Oe.render(Kt[Sn]/xn,Ue[Sn])}else if(J.isInstancedMesh)Oe.renderInstances($t,Ze,J.count);else if(ot.isInstancedBufferGeometry){const Kt=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Ue=Math.min(ot.instanceCount,Kt);Oe.renderInstances($t,Ze,Ue)}else Oe.render($t,Ze)};function Xs(R,Y,ot){R.transparent===!0&&R.side===Fi&&R.forceSinglePass===!1?(R.side=jn,R.needsUpdate=!0,Br(R,Y,ot),R.side=nr,R.needsUpdate=!0,Br(R,Y,ot),R.side=Fi):Br(R,Y,ot)}this.compile=function(R,Y,ot=null){ot===null&&(ot=R),B=Et.get(ot),B.init(Y),P.push(B),ot.traverseVisible(function(J){J.isLight&&J.layers.test(Y.layers)&&(B.pushLight(J),J.castShadow&&B.pushShadow(J))}),R!==ot&&R.traverseVisible(function(J){J.isLight&&J.layers.test(Y.layers)&&(B.pushLight(J),J.castShadow&&B.pushShadow(J))}),B.setupLights();const it=new Set;return R.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Ut=J.material;if(Ut)if(Array.isArray(Ut))for(let Ft=0;Ft<Ut.length;Ft++){const Lt=Ut[Ft];Xs(Lt,ot,J),it.add(Lt)}else Xs(Ut,ot,J),it.add(Ut)}),B=P.pop(),it},this.compileAsync=function(R,Y,ot=null){const it=this.compile(R,Y,ot);return new Promise(J=>{function Ut(){if(it.forEach(function(Ft){b.get(Ft).currentProgram.isReady()&&it.delete(Ft)}),it.size===0){J(R);return}setTimeout(Ut,10)}Me.get("KHR_parallel_shader_compile")!==null?Ut():setTimeout(Ut,10)})};let Or=null;function Ws(R){Or&&Or(R)}function Pr(){Ui.stop()}function qs(){Ui.start()}const Ui=new Ov;Ui.setAnimationLoop(Ws),typeof self<"u"&&Ui.setContext(self),this.setAnimationLoop=function(R){Or=R,Rt.setAnimationLoop(R),R===null?Ui.stop():Ui.start()},Rt.addEventListener("sessionstart",Pr),Rt.addEventListener("sessionend",qs),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){be("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;const ot=Rt.enabled===!0&&Rt.isPresenting===!0,it=q!==null&&(Z===null||ot)&&q.begin(A,Z);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(q===null||q.isCompositing()===!1)&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(Y),Y=Rt.getCamera()),R.isScene===!0&&R.onBeforeRender(A,R,Y,Z),B=Et.get(R,P.length),B.init(Y),P.push(B),Je.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),kt.setFromProjectionMatrix(Je,Gi,Y.reversedDepth),de=this.localClippingEnabled,Ht=Bt.init(this.clippingPlanes,de),N=bt.get(R,F.length),N.init(),F.push(N),Rt.enabled===!0&&Rt.isPresenting===!0){const Ft=A.xr.getDepthSensingMesh();Ft!==null&&ri(Ft,Y,-1/0,A.sortObjects)}ri(R,Y,0,A.sortObjects),N.finish(),A.sortObjects===!0&&N.sort(At,It),se=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,se&&wt.addToRenderList(N,R),this.info.render.frame++,Ht===!0&&Bt.beginShadows();const J=B.state.shadowsArray;if(Pt.render(J,R,Y),Ht===!0&&Bt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(it&&q.hasRenderPass())===!1){const Ft=N.opaque,Lt=N.transmissive;if(B.setupLights(),Y.isArrayCamera){const Gt=Y.cameras;if(Lt.length>0)for(let Wt=0,Jt=Gt.length;Wt<Jt;Wt++){const qt=Gt[Wt];vn(Ft,Lt,R,qt)}se&&wt.render(R);for(let Wt=0,Jt=Gt.length;Wt<Jt;Wt++){const qt=Gt[Wt];sn(N,R,qt,qt.viewport)}}else Lt.length>0&&vn(Ft,Lt,R,Y),se&&wt.render(R),sn(N,R,Y)}Z!==null&&Q===0&&(W.updateMultisampleRenderTarget(Z),W.updateRenderTargetMipmap(Z)),it&&q.end(A),R.isScene===!0&&R.onAfterRender(A,R,Y),zt.resetDefaultState(),lt=-1,ut=null,P.pop(),P.length>0?(B=P[P.length-1],Ht===!0&&Bt.setGlobalState(A.clippingPlanes,B.state.camera)):B=null,F.pop(),F.length>0?N=F[F.length-1]:N=null};function ri(R,Y,ot,it){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)ot=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)B.pushLight(R),R.castShadow&&B.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||kt.intersectsSprite(R)){it&&pe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Je);const Ft=Ct.update(R),Lt=R.material;Lt.visible&&N.push(R,Ft,Lt,ot,pe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||kt.intersectsObject(R))){const Ft=Ct.update(R),Lt=R.material;if(it&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),pe.copy(R.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),pe.copy(Ft.boundingSphere.center)),pe.applyMatrix4(R.matrixWorld).applyMatrix4(Je)),Array.isArray(Lt)){const Gt=Ft.groups;for(let Wt=0,Jt=Gt.length;Wt<Jt;Wt++){const qt=Gt[Wt],$t=Lt[qt.materialIndex];$t&&$t.visible&&N.push(R,Ft,$t,ot,pe.z,qt)}}else Lt.visible&&N.push(R,Ft,Lt,ot,pe.z,null)}}const Ut=R.children;for(let Ft=0,Lt=Ut.length;Ft<Lt;Ft++)ri(Ut[Ft],Y,ot,it)}function sn(R,Y,ot,it){const{opaque:J,transmissive:Ut,transparent:Ft}=R;B.setupLightsView(ot),Ht===!0&&Bt.setGlobalState(A.clippingPlanes,ot),it&&Yt.viewport(z.copy(it)),J.length>0&&yi(J,Y,ot),Ut.length>0&&yi(Ut,Y,ot),Ft.length>0&&yi(Ft,Y,ot),Yt.buffers.depth.setTest(!0),Yt.buffers.depth.setMask(!0),Yt.buffers.color.setMask(!0),Yt.setPolygonOffset(!1)}function vn(R,Y,ot,it){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;if(B.state.transmissionRenderTarget[it.id]===void 0){const $t=Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float");B.state.transmissionRenderTarget[it.id]=new ki(1,1,{generateMipmaps:!0,type:$t?va:vi,minFilter:Dr,samples:Le.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace})}const Ut=B.state.transmissionRenderTarget[it.id],Ft=it.viewport||z;Ut.setSize(Ft.z*A.transmissionResolutionScale,Ft.w*A.transmissionResolutionScale);const Lt=A.getRenderTarget(),Gt=A.getActiveCubeFace(),Wt=A.getActiveMipmapLevel();A.setRenderTarget(Ut),A.getClearColor(yt),vt=A.getClearAlpha(),vt<1&&A.setClearColor(16777215,.5),A.clear(),se&&wt.render(ot);const Jt=A.toneMapping;A.toneMapping=Vi;const qt=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),B.setupLightsView(it),Ht===!0&&Bt.setGlobalState(A.clippingPlanes,it),yi(R,ot,it),W.updateMultisampleRenderTarget(Ut),W.updateRenderTargetMipmap(Ut),Me.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let De=0,Ze=Y.length;De<Ze;De++){const We=Y[De],{object:Oe,geometry:Kt,material:Ue,group:ae}=We;if(Ue.side===Fi&&Oe.layers.test(it.layers)){const xn=Ue.side;Ue.side=jn,Ue.needsUpdate=!0,zr(Oe,ot,it,Kt,Ue,ae),Ue.side=xn,Ue.needsUpdate=!0,$t=!0}}$t===!0&&(W.updateMultisampleRenderTarget(Ut),W.updateRenderTargetMipmap(Ut))}A.setRenderTarget(Lt,Gt,Wt),A.setClearColor(yt,vt),qt!==void 0&&(it.viewport=qt),A.toneMapping=Jt}function yi(R,Y,ot){const it=Y.isScene===!0?Y.overrideMaterial:null;for(let J=0,Ut=R.length;J<Ut;J++){const Ft=R[J],{object:Lt,geometry:Gt,group:Wt}=Ft;let Jt=Ft.material;Jt.allowOverride===!0&&it!==null&&(Jt=it),Lt.layers.test(ot.layers)&&zr(Lt,Y,ot,Gt,Jt,Wt)}}function zr(R,Y,ot,it,J,Ut){R.onBeforeRender(A,Y,ot,it,J,Ut),R.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),J.onBeforeRender(A,Y,ot,it,R,Ut),J.transparent===!0&&J.side===Fi&&J.forceSinglePass===!1?(J.side=jn,J.needsUpdate=!0,A.renderBufferDirect(ot,Y,it,J,R,Ut),J.side=nr,J.needsUpdate=!0,A.renderBufferDirect(ot,Y,it,J,R,Ut),J.side=Fi):A.renderBufferDirect(ot,Y,it,J,R,Ut),R.onAfterRender(A,Y,ot,it,J,Ut)}function Br(R,Y,ot){Y.isScene!==!0&&(Y=we);const it=b.get(R),J=B.state.lights,Ut=B.state.shadowsArray,Ft=J.state.version,Lt=Xt.getParameters(R,J.state,Ut,Y,ot),Gt=Xt.getProgramCacheKey(Lt);let Wt=it.programs;it.environment=R.isMeshStandardMaterial?Y.environment:null,it.fog=Y.fog,it.envMap=(R.isMeshStandardMaterial?St:pt).get(R.envMap||it.environment),it.envMapRotation=it.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,Wt===void 0&&(R.addEventListener("dispose",Dn),Wt=new Map,it.programs=Wt);let Jt=Wt.get(Gt);if(Jt!==void 0){if(it.currentProgram===Jt&&it.lightsStateVersion===Ft)return Ys(R,Lt),Jt}else Lt.uniforms=Xt.getUniforms(R),R.onBeforeCompile(Lt,A),Jt=Xt.acquireProgram(Lt,Gt),Wt.set(Gt,Jt),it.uniforms=Lt.uniforms;const qt=it.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(qt.clippingPlanes=Bt.uniform),Ys(R,Lt),it.needsLights=ya(R),it.lightsStateVersion=Ft,it.needsLights&&(qt.ambientLightColor.value=J.state.ambient,qt.lightProbe.value=J.state.probe,qt.directionalLights.value=J.state.directional,qt.directionalLightShadows.value=J.state.directionalShadow,qt.spotLights.value=J.state.spot,qt.spotLightShadows.value=J.state.spotShadow,qt.rectAreaLights.value=J.state.rectArea,qt.ltc_1.value=J.state.rectAreaLTC1,qt.ltc_2.value=J.state.rectAreaLTC2,qt.pointLights.value=J.state.point,qt.pointLightShadows.value=J.state.pointShadow,qt.hemisphereLights.value=J.state.hemi,qt.directionalShadowMap.value=J.state.directionalShadowMap,qt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,qt.spotShadowMap.value=J.state.spotShadowMap,qt.spotLightMatrix.value=J.state.spotLightMatrix,qt.spotLightMap.value=J.state.spotLightMap,qt.pointShadowMap.value=J.state.pointShadowMap,qt.pointShadowMatrix.value=J.state.pointShadowMatrix),it.currentProgram=Jt,it.uniformsList=null,Jt}function sl(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=jc.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function Ys(R,Y){const ot=b.get(R);ot.outputColorSpace=Y.outputColorSpace,ot.batching=Y.batching,ot.batchingColor=Y.batchingColor,ot.instancing=Y.instancing,ot.instancingColor=Y.instancingColor,ot.instancingMorph=Y.instancingMorph,ot.skinning=Y.skinning,ot.morphTargets=Y.morphTargets,ot.morphNormals=Y.morphNormals,ot.morphColors=Y.morphColors,ot.morphTargetsCount=Y.morphTargetsCount,ot.numClippingPlanes=Y.numClippingPlanes,ot.numIntersection=Y.numClipIntersection,ot.vertexAlphas=Y.vertexAlphas,ot.vertexTangents=Y.vertexTangents,ot.toneMapping=Y.toneMapping}function ir(R,Y,ot,it,J){Y.isScene!==!0&&(Y=we),W.resetTextureUnits();const Ut=Y.fog,Ft=it.isMeshStandardMaterial?Y.environment:null,Lt=Z===null?A.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Hs,Gt=(it.isMeshStandardMaterial?St:pt).get(it.envMap||Ft),Wt=it.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,Jt=!!ot.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),qt=!!ot.morphAttributes.position,$t=!!ot.morphAttributes.normal,De=!!ot.morphAttributes.color;let Ze=Vi;it.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ze=A.toneMapping);const We=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,Oe=We!==void 0?We.length:0,Kt=b.get(it),Ue=B.state.lights;if(Ht===!0&&(de===!0||R!==ut)){const Mn=R===ut&&it.id===lt;Bt.setState(it,R,Mn)}let ae=!1;it.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==Ue.state.version||Kt.outputColorSpace!==Lt||J.isBatchedMesh&&Kt.batching===!1||!J.isBatchedMesh&&Kt.batching===!0||J.isBatchedMesh&&Kt.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Kt.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Kt.instancing===!1||!J.isInstancedMesh&&Kt.instancing===!0||J.isSkinnedMesh&&Kt.skinning===!1||!J.isSkinnedMesh&&Kt.skinning===!0||J.isInstancedMesh&&Kt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Kt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Kt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Kt.instancingMorph===!1&&J.morphTexture!==null||Kt.envMap!==Gt||it.fog===!0&&Kt.fog!==Ut||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==Bt.numPlanes||Kt.numIntersection!==Bt.numIntersection)||Kt.vertexAlphas!==Wt||Kt.vertexTangents!==Jt||Kt.morphTargets!==qt||Kt.morphNormals!==$t||Kt.morphColors!==De||Kt.toneMapping!==Ze||Kt.morphTargetsCount!==Oe)&&(ae=!0):(ae=!0,Kt.__version=it.version);let xn=Kt.currentProgram;ae===!0&&(xn=Br(it,Y,J));let qi=!1,Sn=!1,si=!1;const ze=xn.getUniforms(),yn=Kt.uniforms;if(Yt.useProgram(xn.program)&&(qi=!0,Sn=!0,si=!0),it.id!==lt&&(lt=it.id,Sn=!0),qi||ut!==R){Yt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),ze.setValue(V,"projectionMatrix",R.projectionMatrix),ze.setValue(V,"viewMatrix",R.matrixWorldInverse);const bn=ze.map.cameraPosition;bn!==void 0&&bn.setValue(V,_e.setFromMatrixPosition(R.matrixWorld)),Le.logarithmicDepthBuffer&&ze.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&ze.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),ut!==R&&(ut=R,Sn=!0,si=!0)}if(Kt.needsLights&&(Ue.state.directionalShadowMap.length>0&&ze.setValue(V,"directionalShadowMap",Ue.state.directionalShadowMap,W),Ue.state.spotShadowMap.length>0&&ze.setValue(V,"spotShadowMap",Ue.state.spotShadowMap,W),Ue.state.pointShadowMap.length>0&&ze.setValue(V,"pointShadowMap",Ue.state.pointShadowMap,W)),J.isSkinnedMesh){ze.setOptional(V,J,"bindMatrix"),ze.setOptional(V,J,"bindMatrixInverse");const Mn=J.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),ze.setValue(V,"boneTexture",Mn.boneTexture,W))}J.isBatchedMesh&&(ze.setOptional(V,J,"batchingTexture"),ze.setValue(V,"batchingTexture",J._matricesTexture,W),ze.setOptional(V,J,"batchingIdTexture"),ze.setValue(V,"batchingIdTexture",J._indirectTexture,W),ze.setOptional(V,J,"batchingColorTexture"),J._colorsTexture!==null&&ze.setValue(V,"batchingColorTexture",J._colorsTexture,W));const hn=ot.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&le.update(J,ot,xn),(Sn||Kt.receiveShadow!==J.receiveShadow)&&(Kt.receiveShadow=J.receiveShadow,ze.setValue(V,"receiveShadow",J.receiveShadow)),it.isMeshGouraudMaterial&&it.envMap!==null&&(yn.envMap.value=Gt,yn.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),it.isMeshStandardMaterial&&it.envMap===null&&Y.environment!==null&&(yn.envMapIntensity.value=Y.environmentIntensity),yn.dfgLUT!==void 0&&(yn.dfgLUT.value=mA()),Sn&&(ze.setValue(V,"toneMappingExposure",A.toneMappingExposure),Kt.needsLights&&js(yn,si),Ut&&it.fog===!0&&ee.refreshFogUniforms(yn,Ut),ee.refreshMaterialUniforms(yn,it,mt,nt,B.state.transmissionRenderTarget[R.id]),jc.upload(V,sl(Kt),yn,W)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(jc.upload(V,sl(Kt),yn,W),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&ze.setValue(V,"center",J.center),ze.setValue(V,"modelViewMatrix",J.modelViewMatrix),ze.setValue(V,"normalMatrix",J.normalMatrix),ze.setValue(V,"modelMatrix",J.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){const Mn=it.uniformsGroups;for(let bn=0,Fr=Mn.length;bn<Fr;bn++){const Mi=Mn[bn];Mt.update(Mi,xn),Mt.bind(Mi,xn)}}return xn}function js(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function ya(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(R,Y,ot){const it=b.get(R);it.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,it.__autoAllocateDepthBuffer===!1&&(it.__useRenderToTexture=!1),b.get(R.texture).__webglTexture=Y,b.get(R.depthTexture).__webglTexture=it.__autoAllocateDepthBuffer?void 0:ot,it.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const ot=b.get(R);ot.__webglFramebuffer=Y,ot.__useDefaultFramebuffer=Y===void 0};const Ma=V.createFramebuffer();this.setRenderTarget=function(R,Y=0,ot=0){Z=R,I=Y,Q=ot;let it=null,J=!1,Ut=!1;if(R){const Lt=b.get(R);if(Lt.__useDefaultFramebuffer!==void 0){Yt.bindFramebuffer(V.FRAMEBUFFER,Lt.__webglFramebuffer),z.copy(R.viewport),G.copy(R.scissor),tt=R.scissorTest,Yt.viewport(z),Yt.scissor(G),Yt.setScissorTest(tt),lt=-1;return}else if(Lt.__webglFramebuffer===void 0)W.setupRenderTarget(R);else if(Lt.__hasExternalTextures)W.rebindTextures(R,b.get(R.texture).__webglTexture,b.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Jt=R.depthTexture;if(Lt.__boundDepthTexture!==Jt){if(Jt!==null&&b.has(Jt)&&(R.width!==Jt.image.width||R.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(R)}}const Gt=R.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(Ut=!0);const Wt=b.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Wt[Y])?it=Wt[Y][ot]:it=Wt[Y],J=!0):R.samples>0&&W.useMultisampledRTT(R)===!1?it=b.get(R).__webglMultisampledFramebuffer:Array.isArray(Wt)?it=Wt[ot]:it=Wt,z.copy(R.viewport),G.copy(R.scissor),tt=R.scissorTest}else z.copy(rt).multiplyScalar(mt).floor(),G.copy(ht).multiplyScalar(mt).floor(),tt=Dt;if(ot!==0&&(it=Ma),Yt.bindFramebuffer(V.FRAMEBUFFER,it)&&Yt.drawBuffers(R,it),Yt.viewport(z),Yt.scissor(G),Yt.setScissorTest(tt),J){const Lt=b.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Lt.__webglTexture,ot)}else if(Ut){const Lt=Y;for(let Gt=0;Gt<R.textures.length;Gt++){const Wt=b.get(R.textures[Gt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Gt,Wt.__webglTexture,ot,Lt)}}else if(R!==null&&ot!==0){const Lt=b.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Lt.__webglTexture,ot)}lt=-1},this.readRenderTargetPixels=function(R,Y,ot,it,J,Ut,Ft,Lt=0){if(!(R&&R.isWebGLRenderTarget)){be("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=b.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ft!==void 0&&(Gt=Gt[Ft]),Gt){Yt.bindFramebuffer(V.FRAMEBUFFER,Gt);try{const Wt=R.textures[Lt],Jt=Wt.format,qt=Wt.type;if(!Le.textureFormatReadable(Jt)){be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(qt)){be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-it&&ot>=0&&ot<=R.height-J&&(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Lt),V.readPixels(Y,ot,it,J,Tt.convert(Jt),Tt.convert(qt),Ut))}finally{const Wt=Z!==null?b.get(Z).__webglFramebuffer:null;Yt.bindFramebuffer(V.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(R,Y,ot,it,J,Ut,Ft,Lt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Gt=b.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ft!==void 0&&(Gt=Gt[Ft]),Gt)if(Y>=0&&Y<=R.width-it&&ot>=0&&ot<=R.height-J){Yt.bindFramebuffer(V.FRAMEBUFFER,Gt);const Wt=R.textures[Lt],Jt=Wt.format,qt=Wt.type;if(!Le.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $t=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,$t),V.bufferData(V.PIXEL_PACK_BUFFER,Ut.byteLength,V.STREAM_READ),R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Lt),V.readPixels(Y,ot,it,J,Tt.convert(Jt),Tt.convert(qt),0);const De=Z!==null?b.get(Z).__webglFramebuffer:null;Yt.bindFramebuffer(V.FRAMEBUFFER,De);const Ze=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Oy(V,Ze,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,$t),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Ut),V.deleteBuffer($t),V.deleteSync(Ze),Ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,ot=0){const it=Math.pow(2,-ot),J=Math.floor(R.image.width*it),Ut=Math.floor(R.image.height*it),Ft=Y!==null?Y.x:0,Lt=Y!==null?Y.y:0;W.setTexture2D(R,0),V.copyTexSubImage2D(V.TEXTURE_2D,ot,0,0,Ft,Lt,J,Ut),Yt.unbindTexture()};const ar=V.createFramebuffer(),ba=V.createFramebuffer();this.copyTextureToTexture=function(R,Y,ot=null,it=null,J=0,Ut=null){Ut===null&&(J!==0?($o("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ut=J,J=0):Ut=0);let Ft,Lt,Gt,Wt,Jt,qt,$t,De,Ze;const We=R.isCompressedTexture?R.mipmaps[Ut]:R.image;if(ot!==null)Ft=ot.max.x-ot.min.x,Lt=ot.max.y-ot.min.y,Gt=ot.isBox3?ot.max.z-ot.min.z:1,Wt=ot.min.x,Jt=ot.min.y,qt=ot.isBox3?ot.min.z:0;else{const hn=Math.pow(2,-J);Ft=Math.floor(We.width*hn),Lt=Math.floor(We.height*hn),R.isDataArrayTexture?Gt=We.depth:R.isData3DTexture?Gt=Math.floor(We.depth*hn):Gt=1,Wt=0,Jt=0,qt=0}it!==null?($t=it.x,De=it.y,Ze=it.z):($t=0,De=0,Ze=0);const Oe=Tt.convert(Y.format),Kt=Tt.convert(Y.type);let Ue;Y.isData3DTexture?(W.setTexture3D(Y,0),Ue=V.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(W.setTexture2DArray(Y,0),Ue=V.TEXTURE_2D_ARRAY):(W.setTexture2D(Y,0),Ue=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Y.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Y.unpackAlignment);const ae=V.getParameter(V.UNPACK_ROW_LENGTH),xn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),qi=V.getParameter(V.UNPACK_SKIP_PIXELS),Sn=V.getParameter(V.UNPACK_SKIP_ROWS),si=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,We.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,We.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Wt),V.pixelStorei(V.UNPACK_SKIP_ROWS,Jt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,qt);const ze=R.isDataArrayTexture||R.isData3DTexture,yn=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const hn=b.get(R),Mn=b.get(Y),bn=b.get(hn.__renderTarget),Fr=b.get(Mn.__renderTarget);Yt.bindFramebuffer(V.READ_FRAMEBUFFER,bn.__webglFramebuffer),Yt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Fr.__webglFramebuffer);for(let Mi=0;Mi<Gt;Mi++)ze&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,b.get(R).__webglTexture,J,qt+Mi),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,b.get(Y).__webglTexture,Ut,Ze+Mi)),V.blitFramebuffer(Wt,Jt,Ft,Lt,$t,De,Ft,Lt,V.DEPTH_BUFFER_BIT,V.NEAREST);Yt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(J!==0||R.isRenderTargetTexture||b.has(R)){const hn=b.get(R),Mn=b.get(Y);Yt.bindFramebuffer(V.READ_FRAMEBUFFER,ar),Yt.bindFramebuffer(V.DRAW_FRAMEBUFFER,ba);for(let bn=0;bn<Gt;bn++)ze?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,hn.__webglTexture,J,qt+bn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,hn.__webglTexture,J),yn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Mn.__webglTexture,Ut,Ze+bn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Mn.__webglTexture,Ut),J!==0?V.blitFramebuffer(Wt,Jt,Ft,Lt,$t,De,Ft,Lt,V.COLOR_BUFFER_BIT,V.NEAREST):yn?V.copyTexSubImage3D(Ue,Ut,$t,De,Ze+bn,Wt,Jt,Ft,Lt):V.copyTexSubImage2D(Ue,Ut,$t,De,Wt,Jt,Ft,Lt);Yt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else yn?R.isDataTexture||R.isData3DTexture?V.texSubImage3D(Ue,Ut,$t,De,Ze,Ft,Lt,Gt,Oe,Kt,We.data):Y.isCompressedArrayTexture?V.compressedTexSubImage3D(Ue,Ut,$t,De,Ze,Ft,Lt,Gt,Oe,We.data):V.texSubImage3D(Ue,Ut,$t,De,Ze,Ft,Lt,Gt,Oe,Kt,We):R.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Ut,$t,De,Ft,Lt,Oe,Kt,We.data):R.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Ut,$t,De,We.width,We.height,Oe,We.data):V.texSubImage2D(V.TEXTURE_2D,Ut,$t,De,Ft,Lt,Oe,Kt,We);V.pixelStorei(V.UNPACK_ROW_LENGTH,ae),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,xn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,qi),V.pixelStorei(V.UNPACK_SKIP_ROWS,Sn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,si),Ut===0&&Y.generateMipmaps&&V.generateMipmap(Ue),Yt.unbindTexture()},this.initRenderTarget=function(R){b.get(R).__webglFramebuffer===void 0&&W.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?W.setTextureCube(R,0):R.isData3DTexture?W.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?W.setTexture2DArray(R,0):W.setTexture2D(R,0),Yt.unbindTexture()},this.resetState=function(){I=0,Q=0,Z=null,Yt.reset(),zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Te._getDrawingBufferColorSpace(e),i.unpackColorSpace=Te._getUnpackColorSpace()}}const _A=()=>{const o=Gn.useRef(null);return Gn.useEffect(()=>{const e=o.current;if(!e)return;const i=new rM;i.fog=new op(988970,.0015);const r=new _i(65,e.clientWidth/e.clientHeight,.1,5e3);r.position.set(0,5,70);const l=new gA({alpha:!0,antialias:!0});l.setSize(e.clientWidth,e.clientHeight),l.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(l.domElement);const c=(I,Q)=>{const Z=document.createElement("canvas"),lt=Z.getContext("2d");Z.width=1024,Z.height=256,lt.clearRect(0,0,Z.width,Z.height),lt.font='bold 100px "Courier New", monospace',lt.fillStyle=Q,lt.textAlign="center",lt.textBaseline="middle",lt.shadowColor=Q,lt.shadowBlur=20,lt.fillText(I,Z.width/2,Z.height/2);const ut=new w_(Z);return ut.needsUpdate=!0,ut},h=new Os;i.add(h),[{radius:30,speed:.2,color:"#61DAFB",items:["React","Next.js","Tailwind","Three.js"]},{radius:50,speed:-.15,color:"#68A063",items:["Node.js","Express","MongoDB","REST API"]},{radius:70,speed:.1,color:"#F05032",items:["HTML5","CSS3","JavaScript","Git","GitHub"]}].forEach(I=>{const Q=new up(I.radius-.2,I.radius+.2,64),Z=new tu({color:I.color,transparent:!0,opacity:.1,side:Fi}),lt=new Di(Q,Z);lt.rotation.x=-Math.PI/2,h.add(lt);const ut=I.items.length,z=Math.PI*2/ut,G=new Os;G.userData={speed:I.speed},I.items.forEach((tt,yt)=>{const vt=yt*z,O=c(tt,I.color),nt=new Rv({map:O,transparent:!0,opacity:.9}),mt=new oM(nt);mt.scale.set(16,4,1),mt.position.x=Math.cos(vt)*I.radius,mt.position.z=Math.sin(vt)*I.radius,G.add(mt)}),h.add(G)});const m=new cp(8,1),p=new tu({color:2450411,wireframe:!0,transparent:!0,opacity:.3}),v=new Di(m,p);h.add(v);const _=()=>{const I=document.createElement("canvas");I.width=64,I.height=64;const Q=I.getContext("2d"),Z=Q.createRadialGradient(32,32,0,32,32,32);return Z.addColorStop(0,"rgba(130, 200, 255, 1)"),Z.addColorStop(.4,"rgba(37, 99, 235, 0.5)"),Z.addColorStop(1,"rgba(0, 0, 0, 0)"),Q.fillStyle=Z,Q.fillRect(0,0,64,64),new w_(I)},S=1500,M=new Bn,E=new Float32Array(S*3);for(let I=0;I<S;I++){const Q=200+Math.random()*400,Z=Math.random()*2*Math.PI,lt=Math.acos(2*Math.random()-1);E[I*3]=Q*Math.sin(lt)*Math.cos(Z),E[I*3+1]=Q*Math.sin(lt)*Math.sin(Z),E[I*3+2]=Q*Math.cos(lt)}M.setAttribute("position",new ai(E,3));const C=new Uv({size:3,map:_(),transparent:!0,opacity:.8,blending:Zc,depthWrite:!1}),y=new pM(M,C);i.add(y);const x=15,D=new Bn,U=new Float32Array(x*2*3);D.setAttribute("position",new ai(U,3));const N=new Dv({color:6333946,transparent:!0,opacity:.5,blending:Zc}),B=new dM(D,N);i.add(B);const F=new SM;F.params.Points.threshold=30;const P=new he(999,999),q=()=>{requestAnimationFrame(q),h.rotation.y+=.002,h.children.forEach(Z=>{Z.userData.speed&&(Z.rotation.y+=Z.userData.speed*.01)});const I=Date.now()*.001;v.scale.setScalar(1+Math.sin(I)*.1),v.rotation.y-=.01,y.rotation.y+=5e-4,F.setFromCamera(P,r);const Q=F.intersectObject(y);if(U.fill(0),Q.length>0){const Z=Q[0].index,lt=y.geometry.attributes.position.array,ut=lt[Z*3],z=lt[Z*3+1],G=lt[Z*3+2];let tt=0,yt=0;for(let vt=0;vt<S;vt++){if(vt===Z)continue;if(yt>=x)break;const O=lt[vt*3],nt=lt[vt*3+1],mt=lt[vt*3+2];(ut-O)**2+(z-nt)**2+(G-mt)**2<15e3&&(U[tt++]=ut,U[tt++]=z,U[tt++]=G,U[tt++]=O,U[tt++]=nt,U[tt++]=mt,yt++)}}B.geometry.attributes.position.needsUpdate=!0,B.rotation.y=y.rotation.y,l.render(i,r)};q();const A=I=>{P.x=I.clientX/window.innerWidth*2-1,P.y=-(I.clientY/window.innerHeight)*2+1,h.rotation.x=.2+P.y*.1,h.rotation.z=P.x*.1};window.addEventListener("mousemove",A);const w=()=>{e&&(r.aspect=e.clientWidth/e.clientHeight,r.updateProjectionMatrix(),l.setSize(e.clientWidth,e.clientHeight))};return window.addEventListener("resize",w),()=>{window.removeEventListener("resize",w),window.removeEventListener("mousemove",A),e&&e.contains(l.domElement)&&e.removeChild(l.domElement),m.dispose(),p.dispose(),M.dispose(),C.dispose(),D.dispose(),N.dispose(),h.traverse(I=>{I.geometry&&I.geometry.dispose(),I.material&&(I.material.map&&I.material.map.dispose(),I.material.dispose())}),l.dispose()}},[]),st.jsx("div",{ref:o,className:"absolute inset-0 z-0 opacity-100"})},vA=()=>{const[o,e]=Gn.useState(""),[i,r]=Gn.useState(!1),[l,c]=Gn.useState(0),[h,d]=Gn.useState(150),m=["Full Stack Developer","MERN Stack Specialist","UI/UX Enthusiast","Problem Solver"];return Gn.useEffect(()=>{const v=setTimeout(()=>{const _=l%m.length,S=m[_];e(i?S.substring(0,o.length-1):S.substring(0,o.length+1)),!i&&o===S?setTimeout(()=>r(!0),2e3):i&&o===""&&(r(!1),c(l+1)),d(i?50:100)},h);return()=>clearTimeout(v)},[o,i,l,h]),st.jsxs("section",{id:"about",className:"relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center min-h-screen",children:[st.jsx(_A,{}),st.jsx("div",{className:"absolute inset-0 z-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/80 pointer-events-none"}),st.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center",children:[st.jsxs("div",{className:"reveal reveal-down inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/30 backdrop-blur-md border border-white/10 shadow-lg text-sm font-medium text-slate-200 mb-8",children:[st.jsxs("span",{className:"relative flex h-2.5 w-2.5",children:[st.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"}),st.jsx("span",{className:"relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"})]}),"Open to Remote Opportunities"]}),st.jsx("h1",{className:"reveal reveal-up text-6xl sm:text-7xl lg:text-9xl font-extrabold font-display leading-tight mb-6 tracking-tight",children:st.jsx("span",{className:"shine-text",children:"Haris Rindh"})}),st.jsxs("div",{className:"reveal reveal-up h-16 sm:h-20 mb-8 flex items-center justify-center",children:[st.jsx("span",{className:"text-2xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600 animate-gradient",children:o}),st.jsx("span",{className:"cursor h-8 sm:h-12 ml-1"})]}),st.jsx("p",{className:"reveal reveal-up text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed font-light",children:"Transforming complex problems into elegant, scalable web solutions. I build the digital future, one line of code at a time."}),st.jsxs("div",{className:"reveal reveal-up flex flex-col sm:flex-row gap-4 justify-center items-center mb-12",children:[st.jsxs("a",{href:"#projects",className:"px-8 py-4 rounded-full bg-primary text-white font-semibold hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 min-w-[160px] hover:scale-105 active:scale-95",children:["View Portfolio ",st.jsx("i",{className:"fas fa-arrow-right text-sm"})]}),st.jsx("a",{href:"#contact",className:"px-8 py-4 rounded-full bg-slate-800/80 backdrop-blur text-white font-semibold border border-slate-700 hover:border-slate-600 hover:bg-slate-700 transition-all flex items-center justify-center min-w-[160px] hover:scale-105 active:scale-95",children:"Contact Me"})]}),st.jsxs("div",{className:"reveal reveal-up flex items-center justify-center space-x-8",children:[st.jsx("a",{href:"https://github.com/Haris-Rindh",target:"_blank",className:"text-slate-400 hover:text-white transition-colors text-3xl transform hover:scale-110 duration-200",children:st.jsx("i",{className:"fab fa-github"})}),st.jsx("a",{href:"https://www.linkedin.com/in/harisrindh",target:"_blank",className:"text-slate-400 hover:text-blue-400 transition-colors text-3xl transform hover:scale-110 duration-200",children:st.jsx("i",{className:"fab fa-linkedin"})}),st.jsx("a",{href:"mailto:haris.rindh.pk@gmail.com",className:"text-slate-400 hover:text-red-500 transition-colors text-3xl transform hover:scale-110 duration-200",children:st.jsx("i",{className:"fas fa-envelope"})}),st.jsx("a",{href:"https://www.fiverr.com/haris_rindh",target:"_blank",className:"text-slate-400 hover:text-green-500 transition-colors text-3xl transform hover:scale-110 duration-200",children:st.jsx("i",{className:"fas fa-briefcase"})})]})]})]})},xA=()=>{const o=[{name:"HTML5 & CSS3",level:"Expert",class:"bg-green-100 text-green-700"},{name:"JavaScript (ES6+)",level:"Advanced",class:"bg-blue-100 text-blue-700"},{name:"Tailwind CSS",level:"Advanced",class:"bg-blue-100 text-blue-700"},{name:"React.js",level:"Building",class:"bg-purple-100 text-purple-700"}],e=[{name:"Node.js & Express",level:"Intermediate",class:"bg-yellow-100 text-yellow-700"},{name:"MongoDB / SQL",level:"In Progress",class:"bg-yellow-100 text-yellow-700"},{name:"Git & GitHub",level:"Proficient",class:"bg-green-100 text-green-700"},{name:"REST APIs",level:"Proficient",class:"bg-blue-100 text-blue-700"}];return st.jsx("section",{id:"skills",className:"py-24 bg-slate-800/50 transition-colors duration-300",children:st.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[st.jsxs("div",{className:"text-center mb-16",children:[st.jsx("h2",{className:"reveal reveal-up text-sm font-bold text-primary tracking-wide uppercase mb-2",children:"Core Competencies"}),st.jsx("h3",{className:"reveal reveal-up delay-100 text-3xl md:text-4xl font-bold text-white font-display",children:"Technical Proficiency"})]}),st.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[st.jsxs("div",{className:"bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-800 transition-all hover:shadow-xl hover:-translate-y-1",children:[st.jsxs("h4",{className:"reveal reveal-up text-xl font-bold text-white mb-6 flex items-center gap-3",children:[st.jsx("i",{className:"fas fa-laptop-code text-blue-500"})," Frontend Development"]}),st.jsx("div",{className:"space-y-4",children:o.map((i,r)=>st.jsxs("div",{className:"reveal reveal-up flex items-center justify-between p-3 rounded-lg bg-slate-800/50 border border-slate-700/50",children:[st.jsx("span",{className:"font-medium text-slate-300",children:i.name}),st.jsx("span",{className:`text-xs px-2 py-1 rounded font-bold ${i.class}`,children:i.level})]},r))})]}),st.jsxs("div",{className:"bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-800 transition-all hover:shadow-xl hover:-translate-y-1",children:[st.jsxs("h4",{className:"reveal reveal-up text-xl font-bold text-white mb-6 flex items-center gap-3",children:[st.jsx("i",{className:"fas fa-server text-purple-500"})," Backend & Tools"]}),st.jsx("div",{className:"space-y-4",children:e.map((i,r)=>st.jsxs("div",{className:"reveal reveal-up flex items-center justify-between p-3 rounded-lg bg-slate-800/50 border border-slate-700/50",children:[st.jsx("span",{className:"font-medium text-slate-300",children:i.name}),st.jsx("span",{className:`text-xs px-2 py-1 rounded font-bold ${i.class}`,children:i.level})]},r))})]})]})]})})},SA=()=>{const o={root:null,rootMargin:"0px",threshold:.15},e=new IntersectionObserver(i=>{i.forEach(r=>{r.isIntersecting?r.target.classList.add("active"):r.target.classList.remove("active")})},o);document.querySelectorAll(".reveal").forEach(i=>{e.observe(i)})},yA=()=>{const[o,e]=Gn.useState(!1),i=[{title:"Nexus AI",category:"Enterprise SaaS Platform",desc:"A production-grade AI content operating system. Features a 5-level AI failover engine.",stack:["React","Node.js","MongoDB","AI Agents"],link:"https://nexus-ai-mocha-phi.vercel.app/",repo:"https://github.com/Haris-Rindh/NexusAI",featured:!0,image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",theme:"blue"},{title:"Book Sphere",category:"Full-Stack Web App",desc:"A dynamic library management application with cloud database integration.",stack:["React","Firebase","Async API"],link:"https://haris-rindh.github.io/Book-Sphere/",repo:"https://github.com/Haris-Rindh/Book-Sphere",featured:!1,image:"https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=800",theme:"indigo"},{title:"Umer Surveying™",category:"Corporate Business Site",desc:"Designed and deployed the corporate portal for a surveying firm.",stack:["HTML5","CSS3","SEO Optimization"],link:"https://haris-rindh.github.io/Umer-Surveying/",repo:"https://github.com/Haris-Rindh/Umer-Surveying",featured:!1,image:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",theme:"orange"},{title:"Prime Real Estate",category:"Property Platform",desc:"High-performance property listing template with filtering logic.",stack:["React","Tailwind","Framer Motion"],link:"https://skyline-apartments-two.vercel.app/",repo:"https://github.com/Haris-Rindh/Skyline-apartments.git",image:"https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",theme:"emerald"},{title:"Dental Care",category:"Medical Website",desc:"Clean, trust-building design for a dental clinic featuring appointment scheduling.",stack:["HTML5","Bootstrap","Responsive"],link:"https://zenith-dental-one.vercel.app/",repo:"https://github.com/Haris-Rindh/Zenith-dental.git",image:"https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",theme:"cyan"},{title:"Urban Restaurant",category:"Hospitality",desc:"Visual-heavy layout for a modern restaurant with menu galleries.",stack:["React","CSS Modules","Animation"],link:"https://rustic-spoon-nu.vercel.app/",repo:"https://github.com/Haris-Rindh/rustic-spoon.git",image:"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",theme:"rose"},{title:"Digital Agency",category:"Portfolio Template",desc:"Modern, dark-themed portfolio for creative agencies.",stack:["React","Tailwind","Framer Motion"],link:"https://neongrowth.vercel.app/",repo:"https://github.com/Haris-Rindh/neongrowth.git",image:"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",theme:"violet"},{title:"City Plumbing",category:"Local Service Site",desc:"Conversion-focused layout for emergency services.",stack:["HTML5","CSS3","Lead Gen"],link:"https://swiftfix-plumbing.vercel.app/",repo:"https://github.com/Haris-Rindh/swiftfix-plumbing-landing.git",image:"https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=800",theme:"sky"}],r=o?i:i.slice(0,3),l=c=>{const h={blue:"bg-blue-900/30 text-blue-400 border-blue-500/30",indigo:"bg-indigo-900/30 text-indigo-400 border-indigo-500/30",orange:"bg-orange-900/30 text-orange-400 border-orange-500/30",emerald:"bg-emerald-900/30 text-emerald-400 border-emerald-500/30",cyan:"bg-cyan-900/30 text-cyan-400 border-cyan-500/30",rose:"bg-rose-900/30 text-rose-400 border-rose-500/30",violet:"bg-violet-900/30 text-violet-400 border-violet-500/30",sky:"bg-sky-900/30 text-sky-400 border-sky-500/30"};return h[c]||h.blue};return Gn.useEffect(()=>{setTimeout(()=>{SA()},100)},[o]),st.jsx("section",{id:"projects",className:"py-24 bg-slate-900 transition-colors duration-300",children:st.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[st.jsxs("div",{className:"text-center mb-16 reveal reveal-up",children:[st.jsx("h2",{className:"text-sm font-bold text-primary tracking-wide uppercase mb-2",children:"Portfolio"}),st.jsx("h3",{className:"text-3xl md:text-4xl font-bold text-white font-display",children:"Featured Projects"}),st.jsx("p",{className:"text-slate-400 max-w-lg mx-auto mt-4",children:"A diverse collection of deployed applications demonstrating full-cycle development capabilities."})]}),st.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16",children:r.map((c,h)=>st.jsxs("article",{className:`reveal reveal-up project-card group bg-slate-800 rounded-2xl border border-slate-700 shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-blue-500/30 flex flex-col relative ${c.featured?"md:col-span-2 lg:col-span-1 border-blue-500/50 shadow-blue-900/20":""}`,children:[st.jsx("div",{className:"absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-400 via-primary to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20"}),st.jsxs("div",{className:"h-48 relative overflow-hidden group-hover:opacity-100 flex-shrink-0",children:[st.jsx("img",{src:c.image,alt:c.title,className:"absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"}),st.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-60"}),c.featured&&st.jsxs("div",{className:"absolute top-4 right-4 bg-yellow-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10",children:[st.jsx("i",{className:"fas fa-star mr-1"})," Featured"]}),st.jsxs("div",{className:"absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px] z-10",children:[st.jsx("a",{href:c.link,target:"_blank",rel:"noreferrer",className:"px-5 py-2.5 bg-primary text-white rounded-full font-medium hover:bg-blue-600 transition-all transform hover:scale-105 shadow-lg",children:"Live Demo"}),st.jsxs("a",{href:c.repo,target:"_blank",rel:"noreferrer",className:"px-5 py-2.5 bg-white text-slate-900 rounded-full font-medium hover:bg-slate-200 transition-all transform hover:scale-105 shadow-lg",children:[st.jsx("i",{className:"fab fa-github mr-2"})," Code"]})]})]}),st.jsxs("div",{className:"p-6 flex flex-col flex-grow relative",children:[st.jsx("div",{className:"mb-3",children:st.jsx("span",{className:`text-xs font-bold tracking-wider uppercase ${c.theme==="orange"?"text-orange-400":"text-primary"}`,children:c.category})}),st.jsx("h4",{className:"text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors",children:c.title}),st.jsx("p",{className:"text-slate-400 text-sm leading-relaxed mb-6 flex-grow",children:c.desc}),st.jsx("div",{className:"flex flex-wrap gap-2 pt-4 border-t border-slate-700/50",children:c.stack.map((d,m)=>st.jsx("span",{className:`px-2 py-1 text-[10px] font-mono rounded border ${l(c.theme)}`,children:d},m))})]})]},h))}),st.jsxs("div",{className:"flex flex-col items-center justify-center gap-4 reveal reveal-up",children:[st.jsx("button",{onClick:()=>e(!o),className:"px-8 py-3 rounded-full bg-slate-800 border border-slate-700 hover:bg-slate-700 hover:border-slate-500 text-white font-medium transition-all shadow-lg hover:shadow-blue-500/10 active:scale-95 flex items-center gap-2 group",children:o?st.jsxs(st.Fragment,{children:["Show Less Projects ",st.jsx("i",{className:"fas fa-chevron-up group-hover:-translate-y-1 transition-transform"})]}):st.jsxs(st.Fragment,{children:["Show All Projects (",i.length,") ",st.jsx("i",{className:"fas fa-chevron-down group-hover:translate-y-1 transition-transform"})]})}),st.jsx("a",{href:"https://github.com/Haris-Rindh?tab=repositories",target:"_blank",rel:"noreferrer",className:"text-sm text-slate-500 hover:text-primary transition-colors mt-4",children:"View full archive on GitHub"})]})]})})},MA=()=>st.jsxs("section",{id:"contact",className:"py-24 bg-black text-white relative overflow-hidden transition-colors duration-300",children:[st.jsxs("div",{className:"absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none",children:[st.jsx("div",{className:"absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"}),st.jsx("div",{className:"absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"})]}),st.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center",children:[st.jsx("h2",{className:"reveal reveal-up text-3xl md:text-5xl font-bold mb-6 font-display",children:"Let's build something amazing."}),st.jsx("p",{className:"reveal reveal-up delay-100 text-slate-400 text-lg mb-12 max-w-2xl mx-auto",children:"I am currently open to opportunities at innovative tech companies. Based in Pakistan, available for global remote work."}),st.jsx("div",{className:"reveal reveal-up delay-200 bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl max-w-lg mx-auto mb-12",children:st.jsxs("form",{className:"space-y-4",onSubmit:o=>{o.preventDefault(),window.location.href="mailto:haris.rindh.pk@gmail.com"},children:[st.jsx("input",{type:"text",placeholder:"Your Name",className:"w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-400 focus:outline-none focus:border-primary focus:bg-white/10 transition-all"}),st.jsx("input",{type:"email",placeholder:"Your Email",className:"w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-400 focus:outline-none focus:border-primary focus:bg-white/10 transition-all"}),st.jsx("textarea",{placeholder:"Message",rows:"4",className:"w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-400 focus:outline-none focus:border-primary focus:bg-white/10 transition-all"}),st.jsx("button",{type:"submit",className:"w-full bg-primary hover:bg-blue-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-500/25 transform hover:scale-105 active:scale-95",children:"Send Message"})]})}),st.jsxs("div",{className:"reveal reveal-up delay-300 grid md:grid-cols-3 gap-8 text-sm text-slate-400",children:[st.jsxs("div",{className:"flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-white/5 transition-colors",children:[st.jsx("i",{className:"fas fa-envelope text-2xl text-primary mb-2"}),st.jsx("span",{children:"haris.rindh.pk@gmail.com"})]}),st.jsxs("a",{href:"https://wa.me/923037368528",target:"_blank",rel:"noreferrer",className:"flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group",children:[st.jsx("i",{className:"fab fa-whatsapp text-2xl text-green-500 mb-2 group-hover:scale-110 transition-transform"}),st.jsx("span",{children:"+92 303 7368528"})]}),st.jsxs("div",{className:"flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-white/5 transition-colors",children:[st.jsx("i",{className:"fas fa-map-marker-alt text-2xl text-primary mb-2"}),st.jsx("span",{children:"Multan, Pakistan"})]})]})]})]}),bA=()=>st.jsx("footer",{className:"bg-black py-8 border-t border-slate-800 transition-colors duration-300",children:st.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4",children:[st.jsxs("div",{className:"text-slate-500 text-sm",children:["© ",new Date().getFullYear()," Haris Rindh. All rights reserved."]}),st.jsxs("div",{className:"flex space-x-6",children:[st.jsx("a",{href:"https://github.com/Haris-Rindh",target:"_blank",rel:"noreferrer",className:"text-slate-500 hover:text-white transition-colors",children:st.jsx("i",{className:"fab fa-github"})}),st.jsx("a",{href:"https://www.linkedin.com/in/harisrindh",target:"_blank",rel:"noreferrer",className:"text-slate-500 hover:text-blue-400 transition-colors",children:st.jsx("i",{className:"fab fa-linkedin"})}),st.jsx("a",{href:"https://wa.me/923037368528",target:"_blank",rel:"noreferrer",className:"text-slate-500 hover:text-green-500 transition-colors",children:st.jsx("i",{className:"fab fa-whatsapp"})}),st.jsx("a",{href:"https://www.fiverr.com/harisrindh",target:"_blank",rel:"noreferrer",className:"text-slate-500 hover:text-green-500 transition-colors",children:st.jsx("i",{className:"fas fa-briefcase"})})]})]})}),EA=({isLoading:o})=>st.jsx("div",{className:`fixed inset-0 z-[100] flex items-center justify-center bg-slate-900 transition-opacity duration-700 ${o?"opacity-100":"opacity-0 pointer-events-none"}`,children:st.jsxs("div",{className:"relative flex items-center justify-center",children:[st.jsx("div",{className:"absolute w-32 h-32 rounded-full border-t-4 border-b-4 border-blue-500/80 loader-ring shadow-[0_0_15px_rgba(37,99,235,0.5)]"}),st.jsx("div",{className:"absolute w-24 h-24 rounded-full border-r-4 border-l-4 border-purple-500/80 loader-ring-reverse shadow-[0_0_15px_rgba(168,85,247,0.5)]"}),st.jsx("div",{className:"font-display font-bold text-2xl text-white tracking-widest animate-pulse",children:"HR"}),st.jsx("div",{className:"absolute -bottom-16 text-slate-400 font-mono text-sm tracking-wider blink",children:"INITIALIZING..."})]})});function TA(){const[o,e]=Gn.useState(!0);return Gn.useEffect(()=>{const i={root:null,rootMargin:"0px",threshold:.1},r=new IntersectionObserver(c=>{c.forEach(h=>{h.isIntersecting&&h.target.classList.add("active")})},i);o||document.querySelectorAll(".reveal").forEach(h=>r.observe(h));const l=setTimeout(()=>{e(!1)},1e3);return()=>{r.disconnect(),clearTimeout(l)}},[o]),st.jsxs("div",{className:"font-sans text-slate-300 bg-slate-900 antialiased overflow-x-hidden selection:bg-primary selection:text-white",children:[st.jsx(EA,{isLoading:o}),st.jsxs("div",{className:`transition-opacity duration-700 ${o?"opacity-0":"opacity-100"}`,children:[st.jsx($S,{}),st.jsxs("main",{children:[st.jsx(vA,{}),st.jsx(xA,{}),st.jsx(yA,{}),st.jsx(MA,{})]}),st.jsx(bA,{})]})]})}JS.createRoot(document.getElementById("root")).render(st.jsx(Gn.StrictMode,{children:st.jsx(TA,{})}));
