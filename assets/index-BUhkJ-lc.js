(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Al(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const ct={},sr=[],bn=()=>{},ad=()=>!1,ho=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),wl=n=>n.startsWith("onUpdate:"),Vt=Object.assign,Rl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},ld=Object.prototype.hasOwnProperty,rt=(n,e)=>ld.call(n,e),We=Array.isArray,Br=n=>po(n)==="[object Map]",cd=n=>po(n)==="[object Set]",Xe=n=>typeof n=="function",Tt=n=>typeof n=="string",Mr=n=>typeof n=="symbol",xt=n=>n!==null&&typeof n=="object",of=n=>(xt(n)||Xe(n))&&Xe(n.then)&&Xe(n.catch),ud=Object.prototype.toString,po=n=>ud.call(n),fd=n=>po(n).slice(8,-1),hd=n=>po(n)==="[object Object]",Cl=n=>Tt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,zr=Al(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),mo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},dd=/-(\w)/g,ci=mo(n=>n.replace(dd,(e,t)=>t?t.toUpperCase():"")),pd=/\B([A-Z])/g,Fi=mo(n=>n.replace(pd,"-$1").toLowerCase()),af=mo(n=>n.charAt(0).toUpperCase()+n.slice(1)),Po=mo(n=>n?`on${af(n)}`:""),si=(n,e)=>!Object.is(n,e),Io=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},lf=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},md=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let gc;const go=()=>gc||(gc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Pl(n){if(We(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Tt(i)?xd(i):Pl(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Tt(n)||xt(n))return n}const gd=/;(?![^(]*\))/g,_d=/:([^]+)/,vd=/\/\*[^]*?\*\//g;function xd(n){const e={};return n.replace(vd,"").split(gd).forEach(t=>{if(t){const i=t.split(_d);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Il(n){let e="";if(Tt(n))e=n;else if(We(n))for(let t=0;t<n.length;t++){const i=Il(n[t]);i&&(e+=i+" ")}else if(xt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Md="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",yd=Al(Md);function cf(n){return!!n||n===""}/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Kt;class Sd{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Kt,!e&&Kt&&(this.index=(Kt.scopes||(Kt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Kt;try{return Kt=this,e()}finally{Kt=t}}}on(){Kt=this}off(){Kt=this.parent}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Ed(){return Kt}let lt;const Lo=new WeakSet;class uf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Kt&&Kt.active&&Kt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Lo.has(this)&&(Lo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||hf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,_c(this),df(this);const e=lt,t=pn;lt=this,pn=!0;try{return this.fn()}finally{pf(this),lt=e,pn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ul(e);this.deps=this.depsTail=void 0,_c(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Lo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Aa(this)&&this.run()}get dirty(){return Aa(this)}}let ff=0,Vr,Hr;function hf(n,e=!1){if(n.flags|=8,e){n.next=Hr,Hr=n;return}n.next=Vr,Vr=n}function Ll(){ff++}function Dl(){if(--ff>0)return;if(Hr){let e=Hr;for(Hr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Vr;){let e=Vr;for(Vr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function df(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function pf(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Ul(i),Td(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Aa(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(mf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function mf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Kr))return;n.globalVersion=Kr;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!Aa(n)){n.flags&=-3;return}const t=lt,i=pn;lt=n,pn=!0;try{df(n);const r=n.fn(n._value);(e.version===0||si(r,n._value))&&(n._value=r,e.version++)}catch(r){throw e.version++,r}finally{lt=t,pn=i,pf(n),n.flags&=-3}}function Ul(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Ul(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Td(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let pn=!0;const gf=[];function hi(){gf.push(pn),pn=!1}function di(){const n=gf.pop();pn=n===void 0?!0:n}function _c(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=lt;lt=void 0;try{e()}finally{lt=t}}}let Kr=0;class bd{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Fl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!lt||!pn||lt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==lt)t=this.activeLink=new bd(lt,this),lt.deps?(t.prevDep=lt.depsTail,lt.depsTail.nextDep=t,lt.depsTail=t):lt.deps=lt.depsTail=t,_f(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=lt.depsTail,t.nextDep=void 0,lt.depsTail.nextDep=t,lt.depsTail=t,lt.deps===t&&(lt.deps=i)}return t}trigger(e){this.version++,Kr++,this.notify(e)}notify(e){Ll();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Dl()}}}function _f(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)_f(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const wa=new WeakMap,Ii=Symbol(""),Ra=Symbol(""),$r=Symbol("");function Ct(n,e,t){if(pn&&lt){let i=wa.get(n);i||wa.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Fl),r.map=i,r.key=t),r.track()}}function Vn(n,e,t,i,r,s){const o=wa.get(n);if(!o){Kr++;return}const a=l=>{l&&l.trigger()};if(Ll(),e==="clear")o.forEach(a);else{const l=We(n),c=l&&Cl(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===$r||!Mr(h)&&h>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get($r)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Ii)),Br(n)&&a(o.get(Ra)));break;case"delete":l||(a(o.get(Ii)),Br(n)&&a(o.get(Ra)));break;case"set":Br(n)&&a(o.get(Ii));break}}Dl()}function Bi(n){const e=it(n);return e===n?e:(Ct(e,"iterate",$r),mn(n)?e:e.map(Nt))}function Nl(n){return Ct(n=it(n),"iterate",$r),n}const Ad={__proto__:null,[Symbol.iterator](){return Do(this,Symbol.iterator,Nt)},concat(...n){return Bi(this).concat(...n.map(e=>We(e)?Bi(e):e))},entries(){return Do(this,"entries",n=>(n[1]=Nt(n[1]),n))},every(n,e){return Pn(this,"every",n,e,void 0,arguments)},filter(n,e){return Pn(this,"filter",n,e,t=>t.map(Nt),arguments)},find(n,e){return Pn(this,"find",n,e,Nt,arguments)},findIndex(n,e){return Pn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Pn(this,"findLast",n,e,Nt,arguments)},findLastIndex(n,e){return Pn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Pn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Uo(this,"includes",n)},indexOf(...n){return Uo(this,"indexOf",n)},join(n){return Bi(this).join(n)},lastIndexOf(...n){return Uo(this,"lastIndexOf",n)},map(n,e){return Pn(this,"map",n,e,void 0,arguments)},pop(){return Rr(this,"pop")},push(...n){return Rr(this,"push",n)},reduce(n,...e){return vc(this,"reduce",n,e)},reduceRight(n,...e){return vc(this,"reduceRight",n,e)},shift(){return Rr(this,"shift")},some(n,e){return Pn(this,"some",n,e,void 0,arguments)},splice(...n){return Rr(this,"splice",n)},toReversed(){return Bi(this).toReversed()},toSorted(n){return Bi(this).toSorted(n)},toSpliced(...n){return Bi(this).toSpliced(...n)},unshift(...n){return Rr(this,"unshift",n)},values(){return Do(this,"values",Nt)}};function Do(n,e,t){const i=Nl(n),r=i[e]();return i!==n&&!mn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=t(s.value)),s}),r}const wd=Array.prototype;function Pn(n,e,t,i,r,s){const o=Nl(n),a=o!==n&&!mn(n),l=o[e];if(l!==wd[e]){const f=l.apply(n,s);return a?Nt(f):f}let c=t;o!==n&&(a?c=function(f,h){return t.call(this,Nt(f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function vc(n,e,t,i){const r=Nl(n);let s=t;return r!==n&&(mn(n)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,n)}):s=function(o,a,l){return t.call(this,o,Nt(a),l,n)}),r[e](s,...i)}function Uo(n,e,t){const i=it(n);Ct(i,"iterate",$r);const r=i[e](...t);return(r===-1||r===!1)&&Vl(t[0])?(t[0]=it(t[0]),i[e](...t)):r}function Rr(n,e,t=[]){hi(),Ll();const i=it(n)[e].apply(n,t);return Dl(),di(),i}const Rd=Al("__proto__,__v_isRef,__isVue"),vf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Mr));function Cd(n){Mr(n)||(n=String(n));const e=it(this);return Ct(e,"has",n),e.hasOwnProperty(n)}class xf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?zd:Ef:s?Sf:yf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=We(e);if(!r){let l;if(o&&(l=Ad[t]))return l;if(t==="hasOwnProperty")return Cd}const a=Reflect.get(e,t,It(e)?e:i);return(Mr(t)?vf.has(t):Rd(t))||(r||Ct(e,"get",t),s)?a:It(a)?o&&Cl(t)?a:a.value:xt(a)?r?Tf(a):Bl(a):a}}class Mf extends xf{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(!this._isShallow){const l=Li(s);if(!mn(i)&&!Li(i)&&(s=it(s),i=it(i)),!We(e)&&It(s)&&!It(i))return l?!1:(s.value=i,!0)}const o=We(e)&&Cl(t)?Number(t)<e.length:rt(e,t),a=Reflect.set(e,t,i,It(e)?e:r);return e===it(r)&&(o?si(i,s)&&Vn(e,"set",t,i):Vn(e,"add",t,i)),a}deleteProperty(e,t){const i=rt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Vn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Mr(t)||!vf.has(t))&&Ct(e,"has",t),i}ownKeys(e){return Ct(e,"iterate",We(e)?"length":Ii),Reflect.ownKeys(e)}}class Pd extends xf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Id=new Mf,Ld=new Pd,Dd=new Mf(!0);const Ca=n=>n,ms=n=>Reflect.getPrototypeOf(n);function Ud(n,e,t){return function(...i){const r=this.__v_raw,s=it(r),o=Br(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?Ca:e?Pa:Nt;return!e&&Ct(s,"iterate",l?Ra:Ii),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function gs(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Fd(n,e){const t={get(r){const s=this.__v_raw,o=it(s),a=it(r);n||(si(r,a)&&Ct(o,"get",r),Ct(o,"get",a));const{has:l}=ms(o),c=e?Ca:n?Pa:Nt;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Ct(it(r),"iterate",Ii),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=it(s),a=it(r);return n||(si(r,a)&&Ct(o,"has",r),Ct(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=it(a),c=e?Ca:n?Pa:Nt;return!n&&Ct(l,"iterate",Ii),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return Vt(t,n?{add:gs("add"),set:gs("set"),delete:gs("delete"),clear:gs("clear")}:{add(r){!e&&!mn(r)&&!Li(r)&&(r=it(r));const s=it(this);return ms(s).has.call(s,r)||(s.add(r),Vn(s,"add",r,r)),this},set(r,s){!e&&!mn(s)&&!Li(s)&&(s=it(s));const o=it(this),{has:a,get:l}=ms(o);let c=a.call(o,r);c||(r=it(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?si(s,u)&&Vn(o,"set",r,s):Vn(o,"add",r,s),this},delete(r){const s=it(this),{has:o,get:a}=ms(s);let l=o.call(s,r);l||(r=it(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&Vn(s,"delete",r,void 0),c},clear(){const r=it(this),s=r.size!==0,o=r.clear();return s&&Vn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Ud(r,n,e)}),t}function Ol(n,e){const t=Fd(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(rt(t,r)&&r in i?t:i,r,s)}const Nd={get:Ol(!1,!1)},Od={get:Ol(!1,!0)},Bd={get:Ol(!0,!1)};const yf=new WeakMap,Sf=new WeakMap,Ef=new WeakMap,zd=new WeakMap;function Vd(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Hd(n){return n.__v_skip||!Object.isExtensible(n)?0:Vd(fd(n))}function Bl(n){return Li(n)?n:zl(n,!1,Id,Nd,yf)}function kd(n){return zl(n,!1,Dd,Od,Sf)}function Tf(n){return zl(n,!0,Ld,Bd,Ef)}function zl(n,e,t,i,r){if(!xt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=Hd(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function kr(n){return Li(n)?kr(n.__v_raw):!!(n&&n.__v_isReactive)}function Li(n){return!!(n&&n.__v_isReadonly)}function mn(n){return!!(n&&n.__v_isShallow)}function Vl(n){return n?!!n.__v_raw:!1}function it(n){const e=n&&n.__v_raw;return e?it(e):n}function Gd(n){return!rt(n,"__v_skip")&&Object.isExtensible(n)&&lf(n,"__v_skip",!0),n}const Nt=n=>xt(n)?Bl(n):n,Pa=n=>xt(n)?Tf(n):n;function It(n){return n?n.__v_isRef===!0:!1}function Wd(n){return Xd(n,!1)}function Xd(n,e){return It(n)?n:new qd(n,e)}class qd{constructor(e,t){this.dep=new Fl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:it(e),this._value=t?e:Nt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||mn(e)||Li(e);e=i?e:it(e),si(e,t)&&(this._rawValue=e,this._value=i?e:Nt(e),this.dep.trigger())}}function Yd(n){return It(n)?n.value:n}const jd={get:(n,e,t)=>e==="__v_raw"?n:Yd(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return It(r)&&!It(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function bf(n){return kr(n)?n:new Proxy(n,jd)}class Kd{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Fl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Kr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&lt!==this)return hf(this,!0),!0}get value(){const e=this.dep.track();return mf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function $d(n,e,t=!1){let i,r;return Xe(n)?i=n:(i=n.get,r=n.set),new Kd(i,r,t)}const _s={},Qs=new WeakMap;let bi;function Zd(n,e=!1,t=bi){if(t){let i=Qs.get(t);i||Qs.set(t,i=[]),i.push(n)}}function Jd(n,e,t=ct){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=E=>r?E:mn(E)||r===!1||r===0?ni(E,1):ni(E);let u,f,h,d,g=!1,v=!1;if(It(n)?(f=()=>n.value,g=mn(n)):kr(n)?(f=()=>c(n),g=!0):We(n)?(v=!0,g=n.some(E=>kr(E)||mn(E)),f=()=>n.map(E=>{if(It(E))return E.value;if(kr(E))return c(E);if(Xe(E))return l?l(E,2):E()})):Xe(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){hi();try{h()}finally{di()}}const E=bi;bi=u;try{return l?l(n,3,[d]):n(d)}finally{bi=E}}:f=bn,e&&r){const E=f,L=r===!0?1/0:r;f=()=>ni(E(),L)}const m=Ed(),p=()=>{u.stop(),m&&m.active&&Rl(m.effects,u)};if(s&&e){const E=e;e=(...L)=>{E(...L),p()}}let A=v?new Array(n.length).fill(_s):_s;const T=E=>{if(!(!(u.flags&1)||!u.dirty&&!E))if(e){const L=u.run();if(r||g||(v?L.some((I,C)=>si(I,A[C])):si(L,A))){h&&h();const I=bi;bi=u;try{const C=[L,A===_s?void 0:v&&A[0]===_s?[]:A,d];l?l(e,3,C):e(...C),A=L}finally{bi=I}}}else u.run()};return a&&a(T),u=new uf(f),u.scheduler=o?()=>o(T,!1):T,d=E=>Zd(E,!1,u),h=u.onStop=()=>{const E=Qs.get(u);if(E){if(l)l(E,4);else for(const L of E)L();Qs.delete(u)}},e?i?T(!0):A=u.run():o?o(T.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function ni(n,e=1/0,t){if(e<=0||!xt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,It(n))ni(n.value,e,t);else if(We(n))for(let i=0;i<n.length;i++)ni(n[i],e,t);else if(cd(n)||Br(n))n.forEach(i=>{ni(i,e,t)});else if(hd(n)){for(const i in n)ni(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&ni(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function os(n,e,t,i){try{return i?n(...i):n()}catch(r){_o(r,e,t)}}function wn(n,e,t,i){if(Xe(n)){const r=os(n,e,t,i);return r&&of(r)&&r.catch(s=>{_o(s,e,t)}),r}if(We(n)){const r=[];for(let s=0;s<n.length;s++)r.push(wn(n[s],e,t,i));return r}}function _o(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ct;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){hi(),os(s,null,10,[n,l,c]),di();return}}Qd(n,t,r,i,o)}function Qd(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Ot=[];let _n=-1;const or=[];let ei=null,er=0;const Af=Promise.resolve();let eo=null;function ep(n){const e=eo||Af;return n?e.then(this?n.bind(this):n):e}function tp(n){let e=_n+1,t=Ot.length;for(;e<t;){const i=e+t>>>1,r=Ot[i],s=Zr(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Hl(n){if(!(n.flags&1)){const e=Zr(n),t=Ot[Ot.length-1];!t||!(n.flags&2)&&e>=Zr(t)?Ot.push(n):Ot.splice(tp(e),0,n),n.flags|=1,wf()}}function wf(){eo||(eo=Af.then(Cf))}function np(n){We(n)?or.push(...n):ei&&n.id===-1?ei.splice(er+1,0,n):n.flags&1||(or.push(n),n.flags|=1),wf()}function xc(n,e,t=_n+1){for(;t<Ot.length;t++){const i=Ot[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Ot.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Rf(n){if(or.length){const e=[...new Set(or)].sort((t,i)=>Zr(t)-Zr(i));if(or.length=0,ei){ei.push(...e);return}for(ei=e,er=0;er<ei.length;er++){const t=ei[er];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}ei=null,er=0}}const Zr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Cf(n){try{for(_n=0;_n<Ot.length;_n++){const e=Ot[_n];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),os(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;_n<Ot.length;_n++){const e=Ot[_n];e&&(e.flags&=-2)}_n=-1,Ot.length=0,Rf(),eo=null,(Ot.length||or.length)&&Cf()}}let yn=null,Pf=null;function to(n){const e=yn;return yn=n,Pf=n&&n.type.__scopeId||null,e}function ip(n,e=yn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Rc(-1);const s=to(e);let o;try{o=n(...r)}finally{to(s),i._d&&Rc(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function _i(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(hi(),wn(l,t,8,[n.el,a,n,e]),di())}}const rp=Symbol("_vte"),sp=n=>n.__isTeleport;function kl(n,e){n.shapeFlag&6&&n.component?(n.transition=e,kl(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function If(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function no(n,e,t,i,r=!1){if(We(n)){n.forEach((g,v)=>no(g,e&&(We(e)?e[v]:e),t,i,r));return}if(Gr(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&no(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?Xl(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===ct?a.refs={}:a.refs,f=a.setupState,h=it(f),d=f===ct?()=>!1:g=>rt(h,g);if(c!=null&&c!==l&&(Tt(c)?(u[c]=null,d(c)&&(f[c]=null)):It(c)&&(c.value=null)),Xe(l))os(l,a,12,[o,u]);else{const g=Tt(l),v=It(l);if(g||v){const m=()=>{if(n.f){const p=g?d(l)?f[l]:u[l]:l.value;r?We(p)&&Rl(p,s):We(p)?p.includes(s)||p.push(s):g?(u[l]=[s],d(l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else g?(u[l]=o,d(l)&&(f[l]=o)):v&&(l.value=o,n.k&&(u[n.k]=o))};o?(m.id=-1,jt(m,t)):m()}}}go().requestIdleCallback;go().cancelIdleCallback;const Gr=n=>!!n.type.__asyncLoader,Lf=n=>n.type.__isKeepAlive;function op(n,e){Df(n,"a",e)}function ap(n,e){Df(n,"da",e)}function Df(n,e,t=zt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(vo(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Lf(r.parent.vnode)&&lp(i,e,t,r),r=r.parent}}function lp(n,e,t,i){const r=vo(e,n,i,!0);Ff(()=>{Rl(i[e],r)},t)}function vo(n,e,t=zt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{hi();const a=as(t),l=wn(e,t,n,o);return a(),di(),l});return i?r.unshift(s):r.push(s),s}}const qn=n=>(e,t=zt)=>{(!es||n==="sp")&&vo(n,(...i)=>e(...i),t)},cp=qn("bm"),Uf=qn("m"),up=qn("bu"),fp=qn("u"),hp=qn("bum"),Ff=qn("um"),dp=qn("sp"),pp=qn("rtg"),mp=qn("rtc");function gp(n,e=zt){vo("ec",n,e)}const _p=Symbol.for("v-ndc"),Ia=n=>n?sh(n)?Xl(n):Ia(n.parent):null,Wr=Vt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ia(n.parent),$root:n=>Ia(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Of(n),$forceUpdate:n=>n.f||(n.f=()=>{Hl(n.update)}),$nextTick:n=>n.n||(n.n=ep.bind(n.proxy)),$watch:n=>zp.bind(n)}),Fo=(n,e)=>n!==ct&&!n.__isScriptSetup&&rt(n,e),vp={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Fo(i,e))return o[e]=1,i[e];if(r!==ct&&rt(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&rt(c,e))return o[e]=3,s[e];if(t!==ct&&rt(t,e))return o[e]=4,t[e];La&&(o[e]=0)}}const u=Wr[e];let f,h;if(u)return e==="$attrs"&&Ct(n.attrs,"get",""),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==ct&&rt(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,rt(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Fo(r,e)?(r[e]=t,!0):i!==ct&&rt(i,e)?(i[e]=t,!0):rt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==ct&&rt(n,o)||Fo(e,o)||(a=s[0])&&rt(a,o)||rt(i,o)||rt(Wr,o)||rt(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:rt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Mc(n){return We(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let La=!0;function xp(n){const e=Of(n),t=n.proxy,i=n.ctx;La=!1,e.beforeCreate&&yc(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:g,activated:v,deactivated:m,beforeDestroy:p,beforeUnmount:A,destroyed:T,unmounted:E,render:L,renderTracked:I,renderTriggered:C,errorCaptured:U,serverPrefetch:b,expose:S,inheritAttrs:D,components:J,directives:W,filters:te}=e;if(c&&Mp(c,i,null),o)for(const Q in o){const V=o[Q];Xe(V)&&(i[Q]=V.bind(t))}if(r){const Q=r.call(t,t);xt(Q)&&(n.data=Bl(Q))}if(La=!0,s)for(const Q in s){const V=s[Q],ue=Xe(V)?V.bind(t,t):Xe(V.get)?V.get.bind(t,t):bn,me=!Xe(V)&&Xe(V.set)?V.set.bind(t):bn,Te=lm({get:ue,set:me});Object.defineProperty(i,Q,{enumerable:!0,configurable:!0,get:()=>Te.value,set:Ce=>Te.value=Ce})}if(a)for(const Q in a)Nf(a[Q],i,t,Q);if(l){const Q=Xe(l)?l.call(t):l;Reflect.ownKeys(Q).forEach(V=>{Ap(V,Q[V])})}u&&yc(u,n,"c");function j(Q,V){We(V)?V.forEach(ue=>Q(ue.bind(t))):V&&Q(V.bind(t))}if(j(cp,f),j(Uf,h),j(up,d),j(fp,g),j(op,v),j(ap,m),j(gp,U),j(mp,I),j(pp,C),j(hp,A),j(Ff,E),j(dp,b),We(S))if(S.length){const Q=n.exposed||(n.exposed={});S.forEach(V=>{Object.defineProperty(Q,V,{get:()=>t[V],set:ue=>t[V]=ue})})}else n.exposed||(n.exposed={});L&&n.render===bn&&(n.render=L),D!=null&&(n.inheritAttrs=D),J&&(n.components=J),W&&(n.directives=W),b&&If(n)}function Mp(n,e,t=bn){We(n)&&(n=Da(n));for(const i in n){const r=n[i];let s;xt(r)?"default"in r?s=Ws(r.from||i,r.default,!0):s=Ws(r.from||i):s=Ws(r),It(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function yc(n,e,t){wn(We(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Nf(n,e,t,i){let r=i.includes(".")?Zf(t,i):()=>t[i];if(Tt(n)){const s=e[n];Xe(s)&&Oo(r,s)}else if(Xe(n))Oo(r,n.bind(t));else if(xt(n))if(We(n))n.forEach(s=>Nf(s,e,t,i));else{const s=Xe(n.handler)?n.handler.bind(t):e[n.handler];Xe(s)&&Oo(r,s,n)}}function Of(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>io(l,c,o,!0)),io(l,e,o)),xt(e)&&s.set(e,l),l}function io(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&io(n,s,t,!0),r&&r.forEach(o=>io(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=yp[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const yp={data:Sc,props:Ec,emits:Ec,methods:Nr,computed:Nr,beforeCreate:Dt,created:Dt,beforeMount:Dt,mounted:Dt,beforeUpdate:Dt,updated:Dt,beforeDestroy:Dt,beforeUnmount:Dt,destroyed:Dt,unmounted:Dt,activated:Dt,deactivated:Dt,errorCaptured:Dt,serverPrefetch:Dt,components:Nr,directives:Nr,watch:Ep,provide:Sc,inject:Sp};function Sc(n,e){return e?n?function(){return Vt(Xe(n)?n.call(this,this):n,Xe(e)?e.call(this,this):e)}:e:n}function Sp(n,e){return Nr(Da(n),Da(e))}function Da(n){if(We(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Dt(n,e){return n?[...new Set([].concat(n,e))]:e}function Nr(n,e){return n?Vt(Object.create(null),n,e):e}function Ec(n,e){return n?We(n)&&We(e)?[...new Set([...n,...e])]:Vt(Object.create(null),Mc(n),Mc(e??{})):e}function Ep(n,e){if(!n)return e;if(!e)return n;const t=Vt(Object.create(null),n);for(const i in e)t[i]=Dt(n[i],e[i]);return t}function Bf(){return{app:null,config:{isNativeTag:ad,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Tp=0;function bp(n,e){return function(i,r=null){Xe(i)||(i=Vt({},i)),r!=null&&!xt(r)&&(r=null);const s=Bf(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:Tp++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:cm,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&Xe(u.install)?(o.add(u),u.install(c,...f)):Xe(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||oi(i,r);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(d,u,h),l=!0,c._container=u,u.__vue_app__=c,Xl(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(wn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=ar;ar=c;try{return u()}finally{ar=f}}};return c}}let ar=null;function Ap(n,e){if(zt){let t=zt.provides;const i=zt.parent&&zt.parent.provides;i===t&&(t=zt.provides=Object.create(i)),t[n]=e}}function Ws(n,e,t=!1){const i=zt||yn;if(i||ar){const r=ar?ar._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Xe(e)?e.call(i&&i.proxy):e}}const zf={},Vf=()=>Object.create(zf),Hf=n=>Object.getPrototypeOf(n)===zf;function wp(n,e,t,i=!1){const r={},s=Vf();n.propsDefaults=Object.create(null),kf(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:kd(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Rp(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=it(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(xo(n.emitsOptions,h))continue;const d=e[h];if(l)if(rt(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const g=ci(h);r[g]=Ua(l,a,g,d,n,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{kf(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!rt(e,f)&&((u=Fi(f))===f||!rt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Ua(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!rt(e,f))&&(delete s[f],c=!0)}c&&Vn(n.attrs,"set","")}function kf(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(zr(l))continue;const c=e[l];let u;r&&rt(r,u=ci(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:xo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=it(t),c=a||ct;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Ua(r,l,f,c[f],n,!rt(c,f))}}return o}function Ua(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=rt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Xe(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=as(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Fi(t))&&(i=!0))}return i}const Cp=new WeakMap;function Gf(n,e,t=!1){const i=t?Cp:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Xe(n)){const u=f=>{l=!0;const[h,d]=Gf(f,e,!0);Vt(o,h),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return xt(n)&&i.set(n,sr),sr;if(We(s))for(let u=0;u<s.length;u++){const f=ci(s[u]);Tc(f)&&(o[f]=ct)}else if(s)for(const u in s){const f=ci(u);if(Tc(f)){const h=s[u],d=o[f]=We(h)||Xe(h)?{type:h}:Vt({},h),g=d.type;let v=!1,m=!0;if(We(g))for(let p=0;p<g.length;++p){const A=g[p],T=Xe(A)&&A.name;if(T==="Boolean"){v=!0;break}else T==="String"&&(m=!1)}else v=Xe(g)&&g.name==="Boolean";d[0]=v,d[1]=m,(v||rt(d,"default"))&&a.push(f)}}const c=[o,a];return xt(n)&&i.set(n,c),c}function Tc(n){return n[0]!=="$"&&!zr(n)}const Wf=n=>n[0]==="_"||n==="$stable",Gl=n=>We(n)?n.map(vn):[vn(n)],Pp=(n,e,t)=>{if(e._n)return e;const i=ip((...r)=>Gl(e(...r)),t);return i._c=!1,i},Xf=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Wf(r))continue;const s=n[r];if(Xe(s))e[r]=Pp(r,s,i);else if(s!=null){const o=Gl(s);e[r]=()=>o}}},qf=(n,e)=>{const t=Gl(e);n.slots.default=()=>t},Yf=(n,e,t)=>{for(const i in e)(t||i!=="_")&&(n[i]=e[i])},Ip=(n,e,t)=>{const i=n.slots=Vf();if(n.vnode.shapeFlag&32){const r=e._;r?(Yf(i,e,t),t&&lf(i,"_",r,!0)):Xf(e,i)}else e&&qf(n,e)},Lp=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=ct;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:Yf(r,e,t):(s=!e.$stable,Xf(e,r)),o=e}else e&&(qf(n,e),o={default:1});if(s)for(const a in r)!Wf(a)&&o[a]==null&&delete r[a]},jt=qp;function Dp(n){return Up(n)}function Up(n,e){const t=go();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=bn,insertStaticContent:g}=n,v=(w,P,M,re=null,Y=null,K=null,$=void 0,se=null,q=!!P.dynamicChildren)=>{if(w===P)return;w&&!Cr(w,P)&&(re=he(w),Ce(w,Y,K,!0),w=null),P.patchFlag===-2&&(q=!1,P.dynamicChildren=null);const{type:x,ref:_,shapeFlag:R}=P;switch(x){case Mo:m(w,P,M,re);break;case Jr:p(w,P,M,re);break;case Bo:w==null&&A(P,M,re,$);break;case zn:J(w,P,M,re,Y,K,$,se,q);break;default:R&1?L(w,P,M,re,Y,K,$,se,q):R&6?W(w,P,M,re,Y,K,$,se,q):(R&64||R&128)&&x.process(w,P,M,re,Y,K,$,se,q,ze)}_!=null&&Y&&no(_,w&&w.ref,K,P||w,!P)},m=(w,P,M,re)=>{if(w==null)i(P.el=a(P.children),M,re);else{const Y=P.el=w.el;P.children!==w.children&&c(Y,P.children)}},p=(w,P,M,re)=>{w==null?i(P.el=l(P.children||""),M,re):P.el=w.el},A=(w,P,M,re)=>{[w.el,w.anchor]=g(w.children,P,M,re,w.el,w.anchor)},T=({el:w,anchor:P},M,re)=>{let Y;for(;w&&w!==P;)Y=h(w),i(w,M,re),w=Y;i(P,M,re)},E=({el:w,anchor:P})=>{let M;for(;w&&w!==P;)M=h(w),r(w),w=M;r(P)},L=(w,P,M,re,Y,K,$,se,q)=>{P.type==="svg"?$="svg":P.type==="math"&&($="mathml"),w==null?I(P,M,re,Y,K,$,se,q):b(w,P,Y,K,$,se,q)},I=(w,P,M,re,Y,K,$,se)=>{let q,x;const{props:_,shapeFlag:R,transition:z,dirs:G}=w;if(q=w.el=o(w.type,K,_&&_.is,_),R&8?u(q,w.children):R&16&&U(w.children,q,null,re,Y,No(w,K),$,se),G&&_i(w,null,re,"created"),C(q,w,w.scopeId,$,re),_){for(const fe in _)fe!=="value"&&!zr(fe)&&s(q,fe,null,_[fe],K,re);"value"in _&&s(q,"value",null,_.value,K),(x=_.onVnodeBeforeMount)&&gn(x,re,w)}G&&_i(w,null,re,"beforeMount");const H=Fp(Y,z);H&&z.beforeEnter(q),i(q,P,M),((x=_&&_.onVnodeMounted)||H||G)&&jt(()=>{x&&gn(x,re,w),H&&z.enter(q),G&&_i(w,null,re,"mounted")},Y)},C=(w,P,M,re,Y)=>{if(M&&d(w,M),re)for(let K=0;K<re.length;K++)d(w,re[K]);if(Y){let K=Y.subTree;if(P===K||Qf(K.type)&&(K.ssContent===P||K.ssFallback===P)){const $=Y.vnode;C(w,$,$.scopeId,$.slotScopeIds,Y.parent)}}},U=(w,P,M,re,Y,K,$,se,q=0)=>{for(let x=q;x<w.length;x++){const _=w[x]=se?ti(w[x]):vn(w[x]);v(null,_,P,M,re,Y,K,$,se)}},b=(w,P,M,re,Y,K,$)=>{const se=P.el=w.el;let{patchFlag:q,dynamicChildren:x,dirs:_}=P;q|=w.patchFlag&16;const R=w.props||ct,z=P.props||ct;let G;if(M&&vi(M,!1),(G=z.onVnodeBeforeUpdate)&&gn(G,M,P,w),_&&_i(P,w,M,"beforeUpdate"),M&&vi(M,!0),(R.innerHTML&&z.innerHTML==null||R.textContent&&z.textContent==null)&&u(se,""),x?S(w.dynamicChildren,x,se,M,re,No(P,Y),K):$||V(w,P,se,null,M,re,No(P,Y),K,!1),q>0){if(q&16)D(se,R,z,M,Y);else if(q&2&&R.class!==z.class&&s(se,"class",null,z.class,Y),q&4&&s(se,"style",R.style,z.style,Y),q&8){const H=P.dynamicProps;for(let fe=0;fe<H.length;fe++){const oe=H[fe],de=R[oe],Le=z[oe];(Le!==de||oe==="value")&&s(se,oe,de,Le,Y,M)}}q&1&&w.children!==P.children&&u(se,P.children)}else!$&&x==null&&D(se,R,z,M,Y);((G=z.onVnodeUpdated)||_)&&jt(()=>{G&&gn(G,M,P,w),_&&_i(P,w,M,"updated")},re)},S=(w,P,M,re,Y,K,$)=>{for(let se=0;se<P.length;se++){const q=w[se],x=P[se],_=q.el&&(q.type===zn||!Cr(q,x)||q.shapeFlag&70)?f(q.el):M;v(q,x,_,null,re,Y,K,$,!0)}},D=(w,P,M,re,Y)=>{if(P!==M){if(P!==ct)for(const K in P)!zr(K)&&!(K in M)&&s(w,K,P[K],null,Y,re);for(const K in M){if(zr(K))continue;const $=M[K],se=P[K];$!==se&&K!=="value"&&s(w,K,se,$,Y,re)}"value"in M&&s(w,"value",P.value,M.value,Y)}},J=(w,P,M,re,Y,K,$,se,q)=>{const x=P.el=w?w.el:a(""),_=P.anchor=w?w.anchor:a("");let{patchFlag:R,dynamicChildren:z,slotScopeIds:G}=P;G&&(se=se?se.concat(G):G),w==null?(i(x,M,re),i(_,M,re),U(P.children||[],M,_,Y,K,$,se,q)):R>0&&R&64&&z&&w.dynamicChildren?(S(w.dynamicChildren,z,M,Y,K,$,se),(P.key!=null||Y&&P===Y.subTree)&&jf(w,P,!0)):V(w,P,M,_,Y,K,$,se,q)},W=(w,P,M,re,Y,K,$,se,q)=>{P.slotScopeIds=se,w==null?P.shapeFlag&512?Y.ctx.activate(P,M,re,$,q):te(P,M,re,Y,K,$,q):ie(w,P,q)},te=(w,P,M,re,Y,K,$)=>{const se=w.component=nm(w,re,Y);if(Lf(w)&&(se.ctx.renderer=ze),im(se,!1,$),se.asyncDep){if(Y&&Y.registerDep(se,j,$),!w.el){const q=se.subTree=oi(Jr);p(null,q,P,M)}}else j(se,w,P,M,Y,K,$)},ie=(w,P,M)=>{const re=P.component=w.component;if(Wp(w,P,M))if(re.asyncDep&&!re.asyncResolved){Q(re,P,M);return}else re.next=P,re.update();else P.el=w.el,re.vnode=P},j=(w,P,M,re,Y,K,$)=>{const se=()=>{if(w.isMounted){let{next:R,bu:z,u:G,parent:H,vnode:fe}=w;{const _e=Kf(w);if(_e){R&&(R.el=fe.el,Q(w,R,$)),_e.asyncDep.then(()=>{w.isUnmounted||se()});return}}let oe=R,de;vi(w,!1),R?(R.el=fe.el,Q(w,R,$)):R=fe,z&&Io(z),(de=R.props&&R.props.onVnodeBeforeUpdate)&&gn(de,H,R,fe),vi(w,!0);const Le=Ac(w),ae=w.subTree;w.subTree=Le,v(ae,Le,f(ae.el),he(ae),w,Y,K),R.el=Le.el,oe===null&&Xp(w,Le.el),G&&jt(G,Y),(de=R.props&&R.props.onVnodeUpdated)&&jt(()=>gn(de,H,R,fe),Y)}else{let R;const{el:z,props:G}=P,{bm:H,m:fe,parent:oe,root:de,type:Le}=w,ae=Gr(P);vi(w,!1),H&&Io(H),!ae&&(R=G&&G.onVnodeBeforeMount)&&gn(R,oe,P),vi(w,!0);{de.ce&&de.ce._injectChildStyle(Le);const _e=w.subTree=Ac(w);v(null,_e,M,re,w,Y,K),P.el=_e.el}if(fe&&jt(fe,Y),!ae&&(R=G&&G.onVnodeMounted)){const _e=P;jt(()=>gn(R,oe,_e),Y)}(P.shapeFlag&256||oe&&Gr(oe.vnode)&&oe.vnode.shapeFlag&256)&&w.a&&jt(w.a,Y),w.isMounted=!0,P=M=re=null}};w.scope.on();const q=w.effect=new uf(se);w.scope.off();const x=w.update=q.run.bind(q),_=w.job=q.runIfDirty.bind(q);_.i=w,_.id=w.uid,q.scheduler=()=>Hl(_),vi(w,!0),x()},Q=(w,P,M)=>{P.component=w;const re=w.vnode.props;w.vnode=P,w.next=null,Rp(w,P.props,re,M),Lp(w,P.children,M),hi(),xc(w),di()},V=(w,P,M,re,Y,K,$,se,q=!1)=>{const x=w&&w.children,_=w?w.shapeFlag:0,R=P.children,{patchFlag:z,shapeFlag:G}=P;if(z>0){if(z&128){me(x,R,M,re,Y,K,$,se,q);return}else if(z&256){ue(x,R,M,re,Y,K,$,se,q);return}}G&8?(_&16&&Se(x,Y,K),R!==x&&u(M,R)):_&16?G&16?me(x,R,M,re,Y,K,$,se,q):Se(x,Y,K,!0):(_&8&&u(M,""),G&16&&U(R,M,re,Y,K,$,se,q))},ue=(w,P,M,re,Y,K,$,se,q)=>{w=w||sr,P=P||sr;const x=w.length,_=P.length,R=Math.min(x,_);let z;for(z=0;z<R;z++){const G=P[z]=q?ti(P[z]):vn(P[z]);v(w[z],G,M,null,Y,K,$,se,q)}x>_?Se(w,Y,K,!0,!1,R):U(P,M,re,Y,K,$,se,q,R)},me=(w,P,M,re,Y,K,$,se,q)=>{let x=0;const _=P.length;let R=w.length-1,z=_-1;for(;x<=R&&x<=z;){const G=w[x],H=P[x]=q?ti(P[x]):vn(P[x]);if(Cr(G,H))v(G,H,M,null,Y,K,$,se,q);else break;x++}for(;x<=R&&x<=z;){const G=w[R],H=P[z]=q?ti(P[z]):vn(P[z]);if(Cr(G,H))v(G,H,M,null,Y,K,$,se,q);else break;R--,z--}if(x>R){if(x<=z){const G=z+1,H=G<_?P[G].el:re;for(;x<=z;)v(null,P[x]=q?ti(P[x]):vn(P[x]),M,H,Y,K,$,se,q),x++}}else if(x>z)for(;x<=R;)Ce(w[x],Y,K,!0),x++;else{const G=x,H=x,fe=new Map;for(x=H;x<=z;x++){const pe=P[x]=q?ti(P[x]):vn(P[x]);pe.key!=null&&fe.set(pe.key,x)}let oe,de=0;const Le=z-H+1;let ae=!1,_e=0;const we=new Array(Le);for(x=0;x<Le;x++)we[x]=0;for(x=G;x<=R;x++){const pe=w[x];if(de>=Le){Ce(pe,Y,K,!0);continue}let Ne;if(pe.key!=null)Ne=fe.get(pe.key);else for(oe=H;oe<=z;oe++)if(we[oe-H]===0&&Cr(pe,P[oe])){Ne=oe;break}Ne===void 0?Ce(pe,Y,K,!0):(we[Ne-H]=x+1,Ne>=_e?_e=Ne:ae=!0,v(pe,P[Ne],M,null,Y,K,$,se,q),de++)}const De=ae?Np(we):sr;for(oe=De.length-1,x=Le-1;x>=0;x--){const pe=H+x,Ne=P[pe],Ve=pe+1<_?P[pe+1].el:re;we[x]===0?v(null,Ne,M,Ve,Y,K,$,se,q):ae&&(oe<0||x!==De[oe]?Te(Ne,M,Ve,2):oe--)}}},Te=(w,P,M,re,Y=null)=>{const{el:K,type:$,transition:se,children:q,shapeFlag:x}=w;if(x&6){Te(w.component.subTree,P,M,re);return}if(x&128){w.suspense.move(P,M,re);return}if(x&64){$.move(w,P,M,ze);return}if($===zn){i(K,P,M);for(let R=0;R<q.length;R++)Te(q[R],P,M,re);i(w.anchor,P,M);return}if($===Bo){T(w,P,M);return}if(re!==2&&x&1&&se)if(re===0)se.beforeEnter(K),i(K,P,M),jt(()=>se.enter(K),Y);else{const{leave:R,delayLeave:z,afterLeave:G}=se,H=()=>i(K,P,M),fe=()=>{R(K,()=>{H(),G&&G()})};z?z(K,H,fe):fe()}else i(K,P,M)},Ce=(w,P,M,re=!1,Y=!1)=>{const{type:K,props:$,ref:se,children:q,dynamicChildren:x,shapeFlag:_,patchFlag:R,dirs:z,cacheIndex:G}=w;if(R===-2&&(Y=!1),se!=null&&no(se,null,M,w,!0),G!=null&&(P.renderCache[G]=void 0),_&256){P.ctx.deactivate(w);return}const H=_&1&&z,fe=!Gr(w);let oe;if(fe&&(oe=$&&$.onVnodeBeforeUnmount)&&gn(oe,P,w),_&6)ce(w.component,M,re);else{if(_&128){w.suspense.unmount(M,re);return}H&&_i(w,null,P,"beforeUnmount"),_&64?w.type.remove(w,P,M,ze,re):x&&!x.hasOnce&&(K!==zn||R>0&&R&64)?Se(x,P,M,!1,!0):(K===zn&&R&384||!Y&&_&16)&&Se(q,P,M),re&&Ke(w)}(fe&&(oe=$&&$.onVnodeUnmounted)||H)&&jt(()=>{oe&&gn(oe,P,w),H&&_i(w,null,P,"unmounted")},M)},Ke=w=>{const{type:P,el:M,anchor:re,transition:Y}=w;if(P===zn){ee(M,re);return}if(P===Bo){E(w);return}const K=()=>{r(M),Y&&!Y.persisted&&Y.afterLeave&&Y.afterLeave()};if(w.shapeFlag&1&&Y&&!Y.persisted){const{leave:$,delayLeave:se}=Y,q=()=>$(M,K);se?se(w.el,K,q):q()}else K()},ee=(w,P)=>{let M;for(;w!==P;)M=h(w),r(w),w=M;r(P)},ce=(w,P,M)=>{const{bum:re,scope:Y,job:K,subTree:$,um:se,m:q,a:x}=w;bc(q),bc(x),re&&Io(re),Y.stop(),K&&(K.flags|=8,Ce($,w,P,M)),se&&jt(se,P),jt(()=>{w.isUnmounted=!0},P),P&&P.pendingBranch&&!P.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===P.pendingId&&(P.deps--,P.deps===0&&P.resolve())},Se=(w,P,M,re=!1,Y=!1,K=0)=>{for(let $=K;$<w.length;$++)Ce(w[$],P,M,re,Y)},he=w=>{if(w.shapeFlag&6)return he(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const P=h(w.anchor||w.el),M=P&&P[rp];return M?h(M):P};let Ae=!1;const Ue=(w,P,M)=>{w==null?P._vnode&&Ce(P._vnode,null,null,!0):v(P._vnode||null,w,P,null,null,null,M),P._vnode=w,Ae||(Ae=!0,xc(),Rf(),Ae=!1)},ze={p:v,um:Ce,m:Te,r:Ke,mt:te,mc:U,pc:V,pbc:S,n:he,o:n};return{render:Ue,hydrate:void 0,createApp:bp(Ue)}}function No({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function vi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Fp(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function jf(n,e,t=!1){const i=n.children,r=e.children;if(We(i)&&We(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=ti(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&jf(o,a)),a.type===Mo&&(a.el=o.el)}}function Np(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function Kf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Kf(e)}function bc(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const Op=Symbol.for("v-scx"),Bp=()=>Ws(Op);function Oo(n,e,t){return $f(n,e,t)}function $f(n,e,t=ct){const{immediate:i,deep:r,flush:s,once:o}=t,a=Vt({},t),l=e&&i||!e&&s!=="post";let c;if(es){if(s==="sync"){const d=Bp();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=bn,d.resume=bn,d.pause=bn,d}}const u=zt;a.call=(d,g,v)=>wn(d,u,g,v);let f=!1;s==="post"?a.scheduler=d=>{jt(d,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(d,g)=>{g?d():Hl(d)}),a.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=Jd(n,e,a);return es&&(c?c.push(h):l&&h()),h}function zp(n,e,t){const i=this.proxy,r=Tt(n)?n.includes(".")?Zf(i,n):()=>i[n]:n.bind(i,i);let s;Xe(e)?s=e:(s=e.handler,t=e);const o=as(this),a=$f(r,s.bind(i),t);return o(),a}function Zf(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Vp=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${ci(e)}Modifiers`]||n[`${Fi(e)}Modifiers`];function Hp(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ct;let r=t;const s=e.startsWith("update:"),o=s&&Vp(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>Tt(u)?u.trim():u)),o.number&&(r=t.map(md)));let a,l=i[a=Po(e)]||i[a=Po(ci(e))];!l&&s&&(l=i[a=Po(Fi(e))]),l&&wn(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,wn(c,n,6,r)}}function Jf(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Xe(n)){const l=c=>{const u=Jf(c,e,!0);u&&(a=!0,Vt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(xt(n)&&i.set(n,null),null):(We(s)?s.forEach(l=>o[l]=null):Vt(o,s),xt(n)&&i.set(n,o),o)}function xo(n,e){return!n||!ho(e)?!1:(e=e.slice(2).replace(/Once$/,""),rt(n,e[0].toLowerCase()+e.slice(1))||rt(n,Fi(e))||rt(n,e))}function Ac(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:g,inheritAttrs:v}=n,m=to(n);let p,A;try{if(t.shapeFlag&4){const E=r||i,L=E;p=vn(c.call(L,E,u,f,d,h,g)),A=a}else{const E=e;p=vn(E.length>1?E(f,{attrs:a,slots:o,emit:l}):E(f,null)),A=e.props?a:kp(a)}}catch(E){Xr.length=0,_o(E,n,1),p=oi(Jr)}let T=p;if(A&&v!==!1){const E=Object.keys(A),{shapeFlag:L}=T;E.length&&L&7&&(s&&E.some(wl)&&(A=Gp(A,s)),T=fr(T,A,!1,!0))}return t.dirs&&(T=fr(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(t.dirs):t.dirs),t.transition&&kl(T,t.transition),p=T,to(m),p}const kp=n=>{let e;for(const t in n)(t==="class"||t==="style"||ho(t))&&((e||(e={}))[t]=n[t]);return e},Gp=(n,e)=>{const t={};for(const i in n)(!wl(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Wp(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?wc(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!xo(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?wc(i,o,c):!0:!!o;return!1}function wc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!xo(t,s))return!0}return!1}function Xp({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Qf=n=>n.__isSuspense;function qp(n,e){e&&e.pendingBranch?We(n)?e.effects.push(...n):e.effects.push(n):np(n)}const zn=Symbol.for("v-fgt"),Mo=Symbol.for("v-txt"),Jr=Symbol.for("v-cmt"),Bo=Symbol.for("v-stc"),Xr=[];let $t=null;function eh(n=!1){Xr.push($t=n?null:[])}function Yp(){Xr.pop(),$t=Xr[Xr.length-1]||null}let Qr=1;function Rc(n,e=!1){Qr+=n,n<0&&$t&&e&&($t.hasOnce=!0)}function th(n){return n.dynamicChildren=Qr>0?$t||sr:null,Yp(),Qr>0&&$t&&$t.push(n),n}function jp(n,e,t,i,r,s){return th(rh(n,e,t,i,r,s,!0))}function Kp(n,e,t,i,r){return th(oi(n,e,t,i,r,!0))}function nh(n){return n?n.__v_isVNode===!0:!1}function Cr(n,e){return n.type===e.type&&n.key===e.key}const ih=({key:n})=>n??null,Xs=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Tt(n)||It(n)||Xe(n)?{i:yn,r:n,k:e,f:!!t}:n:null);function rh(n,e=null,t=null,i=0,r=null,s=n===zn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&ih(e),ref:e&&Xs(e),scopeId:Pf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:yn};return a?(Wl(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=Tt(t)?8:16),Qr>0&&!o&&$t&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&$t.push(l),l}const oi=$p;function $p(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===_p)&&(n=Jr),nh(n)){const a=fr(n,e,!0);return t&&Wl(a,t),Qr>0&&!s&&$t&&(a.shapeFlag&6?$t[$t.indexOf(n)]=a:$t.push(a)),a.patchFlag=-2,a}if(am(n)&&(n=n.__vccOpts),e){e=Zp(e);let{class:a,style:l}=e;a&&!Tt(a)&&(e.class=Il(a)),xt(l)&&(Vl(l)&&!We(l)&&(l=Vt({},l)),e.style=Pl(l))}const o=Tt(n)?1:Qf(n)?128:sp(n)?64:xt(n)?4:Xe(n)?2:0;return rh(n,e,t,i,r,o,s,!0)}function Zp(n){return n?Vl(n)||Hf(n)?Vt({},n):n:null}function fr(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?Qp(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&ih(c),ref:e&&e.ref?t&&s?We(s)?s.concat(Xs(e)):[s,Xs(e)]:Xs(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==zn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&fr(n.ssContent),ssFallback:n.ssFallback&&fr(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&kl(u,l.clone(u)),u}function Jp(n=" ",e=0){return oi(Mo,null,n,e)}function vn(n){return n==null||typeof n=="boolean"?oi(Jr):We(n)?oi(zn,null,n.slice()):nh(n)?ti(n):oi(Mo,null,String(n))}function ti(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:fr(n)}function Wl(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(We(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Wl(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Hf(e)?e._ctx=yn:r===3&&yn&&(yn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Xe(e)?(e={default:e,_ctx:yn},t=32):(e=String(e),i&64?(t=16,e=[Jp(e)]):t=8);n.children=e,n.shapeFlag|=t}function Qp(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Il([e.class,i.class]));else if(r==="style")e.style=Pl([e.style,i.style]);else if(ho(r)){const s=e[r],o=i[r];o&&s!==o&&!(We(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function gn(n,e,t,i=null){wn(n,e,7,[t,i])}const em=Bf();let tm=0;function nm(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||em,s={uid:tm++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Sd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Gf(i,r),emitsOptions:Jf(i,r),emit:null,emitted:null,propsDefaults:ct,inheritAttrs:i.inheritAttrs,ctx:ct,data:ct,props:ct,attrs:ct,slots:ct,refs:ct,setupState:ct,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Hp.bind(null,s),n.ce&&n.ce(s),s}let zt=null,ro,Fa;{const n=go(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};ro=e("__VUE_INSTANCE_SETTERS__",t=>zt=t),Fa=e("__VUE_SSR_SETTERS__",t=>es=t)}const as=n=>{const e=zt;return ro(n),n.scope.on(),()=>{n.scope.off(),ro(e)}},Cc=()=>{zt&&zt.scope.off(),ro(null)};function sh(n){return n.vnode.shapeFlag&4}let es=!1;function im(n,e=!1,t=!1){e&&Fa(e);const{props:i,children:r}=n.vnode,s=sh(n);wp(n,i,s,e),Ip(n,r,t);const o=s?rm(n,e):void 0;return e&&Fa(!1),o}function rm(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,vp);const{setup:i}=t;if(i){hi();const r=n.setupContext=i.length>1?om(n):null,s=as(n),o=os(i,n,0,[n.props,r]),a=of(o);if(di(),s(),(a||n.sp)&&!Gr(n)&&If(n),a){if(o.then(Cc,Cc),e)return o.then(l=>{Pc(n,l)}).catch(l=>{_o(l,n,0)});n.asyncDep=o}else Pc(n,o)}else oh(n)}function Pc(n,e,t){Xe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:xt(e)&&(n.setupState=bf(e)),oh(n)}function oh(n,e,t){const i=n.type;n.render||(n.render=i.render||bn);{const r=as(n);hi();try{xp(n)}finally{di(),r()}}}const sm={get(n,e){return Ct(n,"get",""),n[e]}};function om(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,sm),slots:n.slots,emit:n.emit,expose:e}}function Xl(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(bf(Gd(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Wr)return Wr[t](n)},has(e,t){return t in e||t in Wr}})):n.proxy}function am(n){return Xe(n)&&"__vccOpts"in n}const lm=(n,e)=>$d(n,e,es),cm="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Na;const Ic=typeof window<"u"&&window.trustedTypes;if(Ic)try{Na=Ic.createPolicy("vue",{createHTML:n=>n})}catch{}const ah=Na?n=>Na.createHTML(n):n=>n,um="http://www.w3.org/2000/svg",fm="http://www.w3.org/1998/Math/MathML",Bn=typeof document<"u"?document:null,Lc=Bn&&Bn.createElement("template"),hm={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Bn.createElementNS(um,n):e==="mathml"?Bn.createElementNS(fm,n):t?Bn.createElement(n,{is:t}):Bn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Bn.createTextNode(n),createComment:n=>Bn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Bn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Lc.innerHTML=ah(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Lc.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},dm=Symbol("_vtc");function pm(n,e,t){const i=n[dm];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Dc=Symbol("_vod"),mm=Symbol("_vsh"),gm=Symbol(""),_m=/(^|;)\s*display\s*:/;function vm(n,e,t){const i=n.style,r=Tt(t);let s=!1;if(t&&!r){if(e)if(Tt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&qs(i,a,"")}else for(const o in e)t[o]==null&&qs(i,o,"");for(const o in t)o==="display"&&(s=!0),qs(i,o,t[o])}else if(r){if(e!==t){const o=i[gm];o&&(t+=";"+o),i.cssText=t,s=_m.test(t)}}else e&&n.removeAttribute("style");Dc in n&&(n[Dc]=s?i.display:"",n[mm]&&(i.display="none"))}const Uc=/\s*!important$/;function qs(n,e,t){if(We(t))t.forEach(i=>qs(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=xm(n,e);Uc.test(t)?n.setProperty(Fi(i),t.replace(Uc,""),"important"):n[i]=t}}const Fc=["Webkit","Moz","ms"],zo={};function xm(n,e){const t=zo[e];if(t)return t;let i=ci(e);if(i!=="filter"&&i in n)return zo[e]=i;i=af(i);for(let r=0;r<Fc.length;r++){const s=Fc[r]+i;if(s in n)return zo[e]=s}return e}const Nc="http://www.w3.org/1999/xlink";function Oc(n,e,t,i,r,s=yd(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Nc,e.slice(6,e.length)):n.setAttributeNS(Nc,e,t):t==null||s&&!cf(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Mr(t)?String(t):t)}function Bc(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?ah(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=cf(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function Mm(n,e,t,i){n.addEventListener(e,t,i)}function ym(n,e,t,i){n.removeEventListener(e,t,i)}const zc=Symbol("_vei");function Sm(n,e,t,i,r=null){const s=n[zc]||(n[zc]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=Em(e);if(i){const c=s[e]=Am(i,r);Mm(n,a,c,l)}else o&&(ym(n,a,o,l),s[e]=void 0)}}const Vc=/(?:Once|Passive|Capture)$/;function Em(n){let e;if(Vc.test(n)){e={};let i;for(;i=n.match(Vc);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Fi(n.slice(2)),e]}let Vo=0;const Tm=Promise.resolve(),bm=()=>Vo||(Tm.then(()=>Vo=0),Vo=Date.now());function Am(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;wn(wm(i,t.value),e,5,[i])};return t.value=n,t.attached=bm(),t}function wm(n,e){if(We(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Hc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Rm=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?pm(n,i,o):e==="style"?vm(n,t,i):ho(e)?wl(e)||Sm(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Cm(n,e,i,o))?(Bc(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Oc(n,e,i,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Tt(i))?Bc(n,ci(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Oc(n,e,i,o))};function Cm(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Hc(e)&&Xe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Hc(e)&&Tt(t)?!1:e in n}const Pm=Vt({patchProp:Rm},hm);let kc;function Im(){return kc||(kc=Dp(Pm))}const Lm=(...n)=>{const e=Im().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Um(i);if(!r)return;const s=e._component;!Xe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,Dm(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Dm(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Um(n){return Tt(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yo="172",Fm=0,Gc=1,Nm=2,lh=1,Om=2,On=3,ui=0,Wt=1,Hn=2,ai=0,lr=1,Wc=2,Xc=3,qc=4,Bm=5,Ri=100,zm=101,Vm=102,Hm=103,km=104,Gm=200,Wm=201,Xm=202,qm=203,Oa=204,Ba=205,Ym=206,jm=207,Km=208,$m=209,Zm=210,Jm=211,Qm=212,eg=213,tg=214,za=0,Va=1,Ha=2,hr=3,ka=4,Ga=5,Wa=6,Xa=7,So=0,ng=1,ig=2,li=0,rg=1,sg=2,og=3,ag=4,lg=5,cg=6,ug=7,Yc="attached",fg="detached",ch=300,dr=301,pr=302,so=303,qa=304,Eo=306,ts=1e3,kn=1001,Ya=1002,Zt=1003,hg=1004,vs=1005,Sn=1006,Ho=1007,Pi=1008,Xn=1009,uh=1010,fh=1011,ns=1012,ql=1013,Di=1014,En=1015,ls=1016,Yl=1017,jl=1018,mr=1020,hh=35902,dh=1021,ph=1022,rn=1023,mh=1024,gh=1025,cr=1026,gr=1027,_h=1028,Kl=1029,vh=1030,$l=1031,Zl=1033,Ys=33776,js=33777,Ks=33778,$s=33779,ja=35840,Ka=35841,$a=35842,Za=35843,Ja=36196,Qa=37492,el=37496,tl=37808,nl=37809,il=37810,rl=37811,sl=37812,ol=37813,al=37814,ll=37815,cl=37816,ul=37817,fl=37818,hl=37819,dl=37820,pl=37821,Zs=36492,ml=36494,gl=36495,xh=36283,_l=36284,vl=36285,xl=36286,oo=2300,Ml=2301,ko=2302,jc=2400,Kc=2401,$c=2402,dg=2500,pg=3200,mg=3201,Jl=0,gg=1,ii="",tn="srgb",_r="srgb-linear",ao="linear",ot="srgb",zi=7680,Zc=519,_g=512,vg=513,xg=514,Mh=515,Mg=516,yg=517,Sg=518,Eg=519,Jc=35044,Qc="300 es",Gn=2e3,lo=2001;class yr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let eu=1234567;const qr=Math.PI/180,vr=180/Math.PI;function pi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(wt[n&255]+wt[n>>8&255]+wt[n>>16&255]+wt[n>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[t&63|128]+wt[t>>8&255]+"-"+wt[t>>16&255]+wt[t>>24&255]+wt[i&255]+wt[i>>8&255]+wt[i>>16&255]+wt[i>>24&255]).toLowerCase()}function qe(n,e,t){return Math.max(e,Math.min(t,n))}function Ql(n,e){return(n%e+e)%e}function Tg(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function bg(n,e,t){return n!==e?(t-n)/(e-n):0}function Yr(n,e,t){return(1-t)*n+t*e}function Ag(n,e,t,i){return Yr(n,e,1-Math.exp(-t*i))}function wg(n,e=1){return e-Math.abs(Ql(n,e*2)-e)}function Rg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Cg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Pg(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Ig(n,e){return n+Math.random()*(e-n)}function Lg(n){return n*(.5-Math.random())}function Dg(n){n!==void 0&&(eu=n);let e=eu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ug(n){return n*qr}function Fg(n){return n*vr}function Ng(n){return(n&n-1)===0&&n!==0}function Og(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Bg(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function zg(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),h=o((e-i)/2),d=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*f,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*f,a*c);break;case"ZXZ":n.set(l*f,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function tr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ut(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Mn={DEG2RAD:qr,RAD2DEG:vr,generateUUID:pi,clamp:qe,euclideanModulo:Ql,mapLinear:Tg,inverseLerp:bg,lerp:Yr,damp:Ag,pingpong:wg,smoothstep:Rg,smootherstep:Cg,randInt:Pg,randFloat:Ig,randFloatSpread:Lg,seededRandom:Dg,degToRad:Ug,radToDeg:Fg,isPowerOfTwo:Ng,ceilPowerOfTwo:Og,floorPowerOfTwo:Bg,setQuaternionFromProperEuler:zg,normalize:Ut,denormalize:tr};class Ze{constructor(e=0,t=0){Ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,i,r,s,o,a,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],g=i[8],v=r[0],m=r[3],p=r[6],A=r[1],T=r[4],E=r[7],L=r[2],I=r[5],C=r[8];return s[0]=o*v+a*A+l*L,s[3]=o*m+a*T+l*I,s[6]=o*p+a*E+l*C,s[1]=c*v+u*A+f*L,s[4]=c*m+u*T+f*I,s[7]=c*p+u*E+f*C,s[2]=h*v+d*A+g*L,s[5]=h*m+d*T+g*I,s[8]=h*p+d*E+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,g=t*f+i*h+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(r*c-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=h*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=d*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Go.makeScale(e,t)),this}rotate(e){return this.premultiply(Go.makeRotation(-e)),this}translate(e,t){return this.premultiply(Go.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Go=new He;function yh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function is(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Vg(){const n=is("canvas");return n.style.display="block",n}const tu={};function nr(n){n in tu||(tu[n]=!0,console.warn(n))}function Hg(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function kg(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Gg(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const nu=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),iu=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wg(){const n={enabled:!0,workingColorSpace:_r,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ot&&(r.r=Wn(r.r),r.g=Wn(r.g),r.b=Wn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ot&&(r.r=ur(r.r),r.g=ur(r.g),r.b=ur(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ii?ao:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[_r]:{primaries:e,whitePoint:i,transfer:ao,toXYZ:nu,fromXYZ:iu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:tn},outputColorSpaceConfig:{drawingBufferColorSpace:tn}},[tn]:{primaries:e,whitePoint:i,transfer:ot,toXYZ:nu,fromXYZ:iu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:tn}}}),n}const et=Wg();function Wn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ur(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Vi;class Xg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Vi===void 0&&(Vi=is("canvas")),Vi.width=e.width,Vi.height=e.height;const i=Vi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Vi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=is("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Wn(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Wn(t[i]/255)*255):t[i]=Wn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let qg=0;class Sh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qg++}),this.uuid=pi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Wo(r[o].image)):s.push(Wo(r[o]))}else s=Wo(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Wo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Xg.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yg=0;class Et extends yr{constructor(e=Et.DEFAULT_IMAGE,t=Et.DEFAULT_MAPPING,i=kn,r=kn,s=Sn,o=Pi,a=rn,l=Xn,c=Et.DEFAULT_ANISOTROPY,u=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yg++}),this.uuid=pi(),this.name="",this.source=new Sh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ch)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ts:e.x=e.x-Math.floor(e.x);break;case kn:e.x=e.x<0?0:1;break;case Ya:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ts:e.y=e.y-Math.floor(e.y);break;case kn:e.y=e.y<0?0:1;break;case Ya:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Et.DEFAULT_IMAGE=null;Et.DEFAULT_MAPPING=ch;Et.DEFAULT_ANISOTROPY=1;class je{constructor(e=0,t=0,i=0,r=1){je.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,E=(d+1)/2,L=(p+1)/2,I=(u+h)/4,C=(f+v)/4,U=(g+m)/4;return T>E&&T>L?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=I/i,s=C/i):E>L?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=I/r,s=U/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=C/s,r=U/s),this.set(i,r,s,t),this}let A=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(f-v)/A,this.z=(h-u)/A,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jg extends yr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new je(0,0,e,t),this.scissorTest=!1,this.viewport=new je(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Et(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new Sh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ui extends jg{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Eh extends Et{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Kg extends Et{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tn{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],d=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=v;return}if(f!==v||l!==h||c!==d||u!==g){let m=1-a;const p=l*h+c*d+u*g+f*v,A=p>=0?1:-1,T=1-p*p;if(T>Number.EPSILON){const L=Math.sqrt(T),I=Math.atan2(L,p*A);m=Math.sin(m*I)/L,a=Math.sin(a*I)/L}const E=a*A;if(l=l*m+h*E,c=c*m+d*E,u=u*m+g*E,f=f*m+v*E,m===1-a){const L=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=L,c*=L,u*=L,f*=L}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-a*d,e[t+2]=c*g+u*d+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ru.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ru.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Xo.copy(this).projectOnVector(e),this.sub(Xo)}reflect(e){return this.sub(Xo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xo=new O,ru=new Tn;class Sr{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ln):ln.fromBufferAttribute(s,o),ln.applyMatrix4(e.matrixWorld),this.expandByPoint(ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xs.copy(i.boundingBox)),xs.applyMatrix4(e.matrixWorld),this.union(xs)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ln),ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pr),Ms.subVectors(this.max,Pr),Hi.subVectors(e.a,Pr),ki.subVectors(e.b,Pr),Gi.subVectors(e.c,Pr),Yn.subVectors(ki,Hi),jn.subVectors(Gi,ki),xi.subVectors(Hi,Gi);let t=[0,-Yn.z,Yn.y,0,-jn.z,jn.y,0,-xi.z,xi.y,Yn.z,0,-Yn.x,jn.z,0,-jn.x,xi.z,0,-xi.x,-Yn.y,Yn.x,0,-jn.y,jn.x,0,-xi.y,xi.x,0];return!qo(t,Hi,ki,Gi,Ms)||(t=[1,0,0,0,1,0,0,0,1],!qo(t,Hi,ki,Gi,Ms))?!1:(ys.crossVectors(Yn,jn),t=[ys.x,ys.y,ys.z],qo(t,Hi,ki,Gi,Ms))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(In),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const In=[new O,new O,new O,new O,new O,new O,new O,new O],ln=new O,xs=new Sr,Hi=new O,ki=new O,Gi=new O,Yn=new O,jn=new O,xi=new O,Pr=new O,Ms=new O,ys=new O,Mi=new O;function qo(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Mi.fromArray(n,s);const a=r.x*Math.abs(Mi.x)+r.y*Math.abs(Mi.y)+r.z*Math.abs(Mi.z),l=e.dot(Mi),c=t.dot(Mi),u=i.dot(Mi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const $g=new Sr,Ir=new O,Yo=new O;class Er{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):$g.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ir.subVectors(e,this.center);const t=Ir.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ir,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ir.copy(e.center).add(Yo)),this.expandByPoint(Ir.copy(e.center).sub(Yo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ln=new O,jo=new O,Ss=new O,Kn=new O,Ko=new O,Es=new O,$o=new O;class ec{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ln)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ln.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ln.copy(this.origin).addScaledVector(this.direction,t),Ln.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){jo.copy(e).add(t).multiplyScalar(.5),Ss.copy(t).sub(e).normalize(),Kn.copy(this.origin).sub(jo);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ss),a=Kn.dot(this.direction),l=-Kn.dot(Ss),c=Kn.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const v=1/u;f*=v,h*=v,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(jo).addScaledVector(Ss,h),d}intersectSphere(e,t){Ln.subVectors(e.center,this.origin);const i=Ln.dot(this.direction),r=Ln.dot(Ln)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ln)!==null}intersectTriangle(e,t,i,r,s){Ko.subVectors(t,e),Es.subVectors(i,e),$o.crossVectors(Ko,Es);let o=this.direction.dot($o),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Kn.subVectors(this.origin,e);const l=a*this.direction.dot(Es.crossVectors(Kn,Es));if(l<0)return null;const c=a*this.direction.dot(Ko.cross(Kn));if(c<0||l+c>o)return null;const u=-a*Kn.dot($o);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Re{constructor(e,t,i,r,s,o,a,l,c,u,f,h,d,g,v,m){Re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,h,d,g,v,m)}set(e,t,i,r,s,o,a,l,c,u,f,h,d,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Re().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Wi.setFromMatrixColumn(e,0).length(),s=1/Wi.setFromMatrixColumn(e,1).length(),o=1/Wi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,d=o*f,g=a*u,v=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-v*c,t[9]=-a*l,t[2]=v-h*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,v=c*f;t[0]=h+v*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=v+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,v=c*f;t[0]=h-v*a,t[4]=-o*f,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=v-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,g=a*u,v=a*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+v,t[1]=l*f,t[5]=v*c+h,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=v-h*f,t[8]=g*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-v*f}else if(e.order==="XZY"){const h=o*l,d=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+v,t[5]=o*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=a*u,t[10]=v*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zg,e,Jg)}lookAt(e,t,i){const r=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),$n.crossVectors(i,qt),$n.lengthSq()===0&&(Math.abs(i.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),$n.crossVectors(i,qt)),$n.normalize(),Ts.crossVectors(qt,$n),r[0]=$n.x,r[4]=Ts.x,r[8]=qt.x,r[1]=$n.y,r[5]=Ts.y,r[9]=qt.y,r[2]=$n.z,r[6]=Ts.z,r[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],g=i[2],v=i[6],m=i[10],p=i[14],A=i[3],T=i[7],E=i[11],L=i[15],I=r[0],C=r[4],U=r[8],b=r[12],S=r[1],D=r[5],J=r[9],W=r[13],te=r[2],ie=r[6],j=r[10],Q=r[14],V=r[3],ue=r[7],me=r[11],Te=r[15];return s[0]=o*I+a*S+l*te+c*V,s[4]=o*C+a*D+l*ie+c*ue,s[8]=o*U+a*J+l*j+c*me,s[12]=o*b+a*W+l*Q+c*Te,s[1]=u*I+f*S+h*te+d*V,s[5]=u*C+f*D+h*ie+d*ue,s[9]=u*U+f*J+h*j+d*me,s[13]=u*b+f*W+h*Q+d*Te,s[2]=g*I+v*S+m*te+p*V,s[6]=g*C+v*D+m*ie+p*ue,s[10]=g*U+v*J+m*j+p*me,s[14]=g*b+v*W+m*Q+p*Te,s[3]=A*I+T*S+E*te+L*V,s[7]=A*C+T*D+E*ie+L*ue,s[11]=A*U+T*J+E*j+L*me,s[15]=A*b+T*W+E*Q+L*Te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*d-i*l*d)+v*(+t*l*d-t*c*h+s*o*h-r*o*d+r*c*u-s*l*u)+m*(+t*c*f-t*a*d-s*o*f+i*o*d+s*a*u-i*c*u)+p*(-r*a*u-t*l*f+t*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],v=e[13],m=e[14],p=e[15],A=f*m*c-v*h*c+v*l*d-a*m*d-f*l*p+a*h*p,T=g*h*c-u*m*c-g*l*d+o*m*d+u*l*p-o*h*p,E=u*v*c-g*f*c+g*a*d-o*v*d-u*a*p+o*f*p,L=g*f*l-u*v*l-g*a*h+o*v*h+u*a*m-o*f*m,I=t*A+i*T+r*E+s*L;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/I;return e[0]=A*C,e[1]=(v*h*s-f*m*s-v*r*d+i*m*d+f*r*p-i*h*p)*C,e[2]=(a*m*s-v*l*s+v*r*c-i*m*c-a*r*p+i*l*p)*C,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*d-i*l*d)*C,e[4]=T*C,e[5]=(u*m*s-g*h*s+g*r*d-t*m*d-u*r*p+t*h*p)*C,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*p-t*l*p)*C,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*d+t*l*d)*C,e[8]=E*C,e[9]=(g*f*s-u*v*s-g*i*d+t*v*d+u*i*p-t*f*p)*C,e[10]=(o*v*s-g*a*s+g*i*c-t*v*c-o*i*p+t*a*p)*C,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*d-t*a*d)*C,e[12]=L*C,e[13]=(u*v*r-g*f*r+g*i*h-t*v*h-u*i*m+t*f*m)*C,e[14]=(g*a*r-o*v*r-g*i*l+t*v*l+o*i*m-t*a*m)*C,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*h+t*a*h)*C,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,g=s*f,v=o*u,m=o*f,p=a*f,A=l*c,T=l*u,E=l*f,L=i.x,I=i.y,C=i.z;return r[0]=(1-(v+p))*L,r[1]=(d+E)*L,r[2]=(g-T)*L,r[3]=0,r[4]=(d-E)*I,r[5]=(1-(h+p))*I,r[6]=(m+A)*I,r[7]=0,r[8]=(g+T)*C,r[9]=(m-A)*C,r[10]=(1-(h+v))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Wi.set(r[0],r[1],r[2]).length();const o=Wi.set(r[4],r[5],r[6]).length(),a=Wi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],cn.copy(this);const c=1/s,u=1/o,f=1/a;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=u,cn.elements[5]*=u,cn.elements[6]*=u,cn.elements[8]*=f,cn.elements[9]*=f,cn.elements[10]*=f,t.setFromRotationMatrix(cn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Gn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let d,g;if(a===Gn)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===lo)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Gn){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),h=(t+e)*c,d=(i+r)*u;let g,v;if(a===Gn)g=(o+s)*f,v=-2*f;else if(a===lo)g=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Wi=new O,cn=new Re,Zg=new O(0,0,0),Jg=new O(1,1,1),$n=new O,Ts=new O,qt=new O,su=new Re,ou=new Tn;class Pt{constructor(e=0,t=0,i=0,r=Pt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return su.makeRotationFromQuaternion(e),this.setFromRotationMatrix(su,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ou.setFromEuler(this),this.setFromQuaternion(ou,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pt.DEFAULT_ORDER="XYZ";class Th{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Qg=0;const au=new O,Xi=new Tn,Dn=new Re,bs=new O,Lr=new O,e_=new O,t_=new Tn,lu=new O(1,0,0),cu=new O(0,1,0),uu=new O(0,0,1),fu={type:"added"},n_={type:"removed"},qi={type:"childadded",child:null},Zo={type:"childremoved",child:null};class dt extends yr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qg++}),this.uuid=pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new O,t=new Pt,i=new Tn,r=new O(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Re},normalMatrix:{value:new He}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Th,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.multiply(Xi),this}rotateOnWorldAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.premultiply(Xi),this}rotateX(e){return this.rotateOnAxis(lu,e)}rotateY(e){return this.rotateOnAxis(cu,e)}rotateZ(e){return this.rotateOnAxis(uu,e)}translateOnAxis(e,t){return au.copy(e).applyQuaternion(this.quaternion),this.position.add(au.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lu,e)}translateY(e){return this.translateOnAxis(cu,e)}translateZ(e){return this.translateOnAxis(uu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?bs.copy(e):bs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(Lr,bs,this.up):Dn.lookAt(bs,Lr,this.up),this.quaternion.setFromRotationMatrix(Dn),r&&(Dn.extractRotation(r.matrixWorld),Xi.setFromRotationMatrix(Dn),this.quaternion.premultiply(Xi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fu),qi.child=e,this.dispatchEvent(qi),qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(n_),Zo.child=e,this.dispatchEvent(Zo),Zo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fu),qi.child=e,this.dispatchEvent(qi),qi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,e,e_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,t_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}dt.DEFAULT_UP=new O(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new O,Un=new O,Jo=new O,Fn=new O,Yi=new O,ji=new O,hu=new O,Qo=new O,ea=new O,ta=new O,na=new je,ia=new je,ra=new je;class hn{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),un.subVectors(e,t),r.cross(un);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){un.subVectors(r,t),Un.subVectors(i,t),Jo.subVectors(e,t);const o=un.dot(un),a=un.dot(Un),l=un.dot(Jo),c=Un.dot(Un),u=Un.dot(Jo),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-d-g,g,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Fn.x),l.addScaledVector(o,Fn.y),l.addScaledVector(a,Fn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return na.setScalar(0),ia.setScalar(0),ra.setScalar(0),na.fromBufferAttribute(e,t),ia.fromBufferAttribute(e,i),ra.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(na,s.x),o.addScaledVector(ia,s.y),o.addScaledVector(ra,s.z),o}static isFrontFacing(e,t,i,r){return un.subVectors(i,t),Un.subVectors(e,t),un.cross(Un).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),un.cross(Un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return hn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Yi.subVectors(r,i),ji.subVectors(s,i),Qo.subVectors(e,i);const l=Yi.dot(Qo),c=ji.dot(Qo);if(l<=0&&c<=0)return t.copy(i);ea.subVectors(e,r);const u=Yi.dot(ea),f=ji.dot(ea);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Yi,o);ta.subVectors(e,s);const d=Yi.dot(ta),g=ji.dot(ta);if(g>=0&&d<=g)return t.copy(s);const v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(ji,a);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return hu.subVectors(s,r),a=(f-u)/(f-u+(d-g)),t.copy(r).addScaledVector(hu,a);const p=1/(m+v+h);return o=v*p,a=h*p,t.copy(i).addScaledVector(Yi,o).addScaledVector(ji,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const bh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},As={h:0,s:0,l:0};function sa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Fe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=et.workingColorSpace){if(e=Ql(e,1),t=qe(t,0,1),i=qe(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=sa(o,s,e+1/3),this.g=sa(o,s,e),this.b=sa(o,s,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,t=tn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=tn){const i=bh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wn(e.r),this.g=Wn(e.g),this.b=Wn(e.b),this}copyLinearToSRGB(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tn){return et.fromWorkingColorSpace(Rt.copy(this),e),Math.round(qe(Rt.r*255,0,255))*65536+Math.round(qe(Rt.g*255,0,255))*256+Math.round(qe(Rt.b*255,0,255))}getHexString(e=tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(Rt.copy(this),t);const i=Rt.r,r=Rt.g,s=Rt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(Rt.copy(this),t),e.r=Rt.r,e.g=Rt.g,e.b=Rt.b,e}getStyle(e=tn){et.fromWorkingColorSpace(Rt.copy(this),e);const t=Rt.r,i=Rt.g,r=Rt.b;return e!==tn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Zn),this.setHSL(Zn.h+e,Zn.s+t,Zn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Zn),e.getHSL(As);const i=Yr(Zn.h,As.h,t),r=Yr(Zn.s,As.s,t),s=Yr(Zn.l,As.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rt=new Fe;Fe.NAMES=bh;let i_=0;class Ni extends yr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:i_++}),this.uuid=pi(),this.name="",this.type="Material",this.blending=lr,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oa,this.blendDst=Ba,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zi,this.stencilZFail=zi,this.stencilZPass=zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==lr&&(i.blending=this.blending),this.side!==ui&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Oa&&(i.blendSrc=this.blendSrc),this.blendDst!==Ba&&(i.blendDst=this.blendDst),this.blendEquation!==Ri&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==hr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==zi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==zi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ah extends Ni{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pt,this.combine=So,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new O,ws=new Ze;class An{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Jc,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ws.fromBufferAttribute(this,t),ws.applyMatrix3(e),this.setXY(t,ws.x,ws.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=tr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ut(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=tr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=tr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=tr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=tr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),r=Ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),r=Ut(r,this.array),s=Ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jc&&(e.usage=this.usage),e}}class tc extends An{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class wh extends An{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Gt extends An{constructor(e,t,i){super(new Float32Array(e),t,i)}}let r_=0;const en=new Re,oa=new dt,Ki=new O,Yt=new Sr,Dr=new Sr,St=new O;class sn extends yr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:r_++}),this.uuid=pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yh(e)?wh:tc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return en.makeRotationFromQuaternion(e),this.applyMatrix4(en),this}rotateX(e){return en.makeRotationX(e),this.applyMatrix4(en),this}rotateY(e){return en.makeRotationY(e),this.applyMatrix4(en),this}rotateZ(e){return en.makeRotationZ(e),this.applyMatrix4(en),this}translate(e,t,i){return en.makeTranslation(e,t,i),this.applyMatrix4(en),this}scale(e,t,i){return en.makeScale(e,t,i),this.applyMatrix4(en),this}lookAt(e){return oa.lookAt(e),oa.updateMatrix(),this.applyMatrix4(oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Gt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Yt.setFromBufferAttribute(s),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,Yt.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,Yt.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(Yt.min),this.boundingBox.expandByPoint(Yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Er);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(Yt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Dr.setFromBufferAttribute(a),this.morphTargetsRelative?(St.addVectors(Yt.min,Dr.min),Yt.expandByPoint(St),St.addVectors(Yt.max,Dr.max),Yt.expandByPoint(St)):(Yt.expandByPoint(Dr.min),Yt.expandByPoint(Dr.max))}Yt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)St.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(St));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)St.fromBufferAttribute(a,c),l&&(Ki.fromBufferAttribute(e,c),St.add(Ki)),r=Math.max(r,i.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new An(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<i.count;U++)a[U]=new O,l[U]=new O;const c=new O,u=new O,f=new O,h=new Ze,d=new Ze,g=new Ze,v=new O,m=new O;function p(U,b,S){c.fromBufferAttribute(i,U),u.fromBufferAttribute(i,b),f.fromBufferAttribute(i,S),h.fromBufferAttribute(s,U),d.fromBufferAttribute(s,b),g.fromBufferAttribute(s,S),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(D),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(D),a[U].add(v),a[b].add(v),a[S].add(v),l[U].add(m),l[b].add(m),l[S].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let U=0,b=A.length;U<b;++U){const S=A[U],D=S.start,J=S.count;for(let W=D,te=D+J;W<te;W+=3)p(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const T=new O,E=new O,L=new O,I=new O;function C(U){L.fromBufferAttribute(r,U),I.copy(L);const b=a[U];T.copy(b),T.sub(L.multiplyScalar(L.dot(b))).normalize(),E.crossVectors(I,b);const D=E.dot(l[U])<0?-1:1;o.setXYZW(U,T.x,T.y,T.z,D)}for(let U=0,b=A.length;U<b;++U){const S=A[U],D=S.start,J=S.count;for(let W=D,te=D+J;W<te;W+=3)C(e.getX(W+0)),C(e.getX(W+1)),C(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new An(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new O,s=new O,o=new O,a=new O,l=new O,c=new O,u=new O,f=new O;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new An(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new sn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const du=new Re,yi=new ec,Rs=new Er,pu=new O,Cs=new O,Ps=new O,Is=new O,aa=new O,Ls=new O,mu=new O,Ds=new O;class dn extends dt{constructor(e=new sn,t=new Ah){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ls.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(aa.fromBufferAttribute(f,e),o?Ls.addScaledVector(aa,u):Ls.addScaledVector(aa.sub(t),u))}t.add(Ls)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Rs.copy(i.boundingSphere),Rs.applyMatrix4(s),yi.copy(e.ray).recast(e.near),!(Rs.containsPoint(yi.origin)===!1&&(yi.intersectSphere(Rs,pu)===null||yi.origin.distanceToSquared(pu)>(e.far-e.near)**2))&&(du.copy(s).invert(),yi.copy(e.ray).applyMatrix4(du),!(i.boundingBox!==null&&yi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,yi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=o[m.materialIndex],A=Math.max(m.start,d.start),T=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let E=A,L=T;E<L;E+=3){const I=a.getX(E),C=a.getX(E+1),U=a.getX(E+2);r=Us(this,p,e,i,c,u,f,I,C,U),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const A=a.getX(m),T=a.getX(m+1),E=a.getX(m+2);r=Us(this,o,e,i,c,u,f,A,T,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=o[m.materialIndex],A=Math.max(m.start,d.start),T=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let E=A,L=T;E<L;E+=3){const I=E,C=E+1,U=E+2;r=Us(this,p,e,i,c,u,f,I,C,U),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const A=m,T=m+1,E=m+2;r=Us(this,o,e,i,c,u,f,A,T,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function s_(n,e,t,i,r,s,o,a){let l;if(e.side===Wt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ui,a),l===null)return null;Ds.copy(a),Ds.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ds);return c<t.near||c>t.far?null:{distance:c,point:Ds.clone(),object:n}}function Us(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Cs),n.getVertexPosition(l,Ps),n.getVertexPosition(c,Is);const u=s_(n,e,t,i,Cs,Ps,Is,mu);if(u){const f=new O;hn.getBarycoord(mu,Cs,Ps,Is,f),r&&(u.uv=hn.getInterpolatedAttribute(r,a,l,c,f,new Ze)),s&&(u.uv1=hn.getInterpolatedAttribute(s,a,l,c,f,new Ze)),o&&(u.normal=hn.getInterpolatedAttribute(o,a,l,c,f,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new O,materialIndex:0};hn.getNormal(Cs,Ps,Is,h.normal),u.face=h,u.barycoord=f}return u}class cs extends sn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Gt(c,3)),this.setAttribute("normal",new Gt(u,3)),this.setAttribute("uv",new Gt(f,2));function g(v,m,p,A,T,E,L,I,C,U,b){const S=E/C,D=L/U,J=E/2,W=L/2,te=I/2,ie=C+1,j=U+1;let Q=0,V=0;const ue=new O;for(let me=0;me<j;me++){const Te=me*D-W;for(let Ce=0;Ce<ie;Ce++){const Ke=Ce*S-J;ue[v]=Ke*A,ue[m]=Te*T,ue[p]=te,c.push(ue.x,ue.y,ue.z),ue[v]=0,ue[m]=0,ue[p]=I>0?1:-1,u.push(ue.x,ue.y,ue.z),f.push(Ce/C),f.push(1-me/U),Q+=1}}for(let me=0;me<U;me++)for(let Te=0;Te<C;Te++){const Ce=h+Te+ie*me,Ke=h+Te+ie*(me+1),ee=h+(Te+1)+ie*(me+1),ce=h+(Te+1)+ie*me;l.push(Ce,Ke,ce),l.push(Ke,ee,ce),V+=6}a.addGroup(d,V,b),d+=V,h+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ft(n){const e={};for(let t=0;t<n.length;t++){const i=xr(n[t]);for(const r in i)e[r]=i[r]}return e}function o_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Rh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const a_={clone:xr,merge:Ft};var l_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,c_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fi extends Ni{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=l_,this.fragmentShader=c_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xr(e.uniforms),this.uniformsGroups=o_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Ch extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re,this.coordinateSystem=Gn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Jn=new O,gu=new Ze,_u=new Ze;class Bt extends Ch{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vr*2*Math.atan(Math.tan(qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Jn.x,Jn.y).multiplyScalar(-e/Jn.z),Jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Jn.x,Jn.y).multiplyScalar(-e/Jn.z)}getViewSize(e,t){return this.getViewBounds(e,gu,_u),t.subVectors(_u,gu)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const $i=-90,Zi=1;class u_ extends dt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Bt($i,Zi,e,t);r.layers=this.layers,this.add(r);const s=new Bt($i,Zi,e,t);s.layers=this.layers,this.add(s);const o=new Bt($i,Zi,e,t);o.layers=this.layers,this.add(o);const a=new Bt($i,Zi,e,t);a.layers=this.layers,this.add(a);const l=new Bt($i,Zi,e,t);l.layers=this.layers,this.add(l);const c=new Bt($i,Zi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Gn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===lo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Ph extends Et{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:dr,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class f_ extends Ui{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ph(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Sn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new cs(5,5,5),s=new fi({name:"CubemapFromEquirect",uniforms:xr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Wt,blending:ai});s.uniforms.tEquirect.value=t;const o=new dn(r,s),a=t.minFilter;return t.minFilter===Pi&&(t.minFilter=Sn),new u_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class h_ extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pt,this.environmentIntensity=1,this.environmentRotation=new Pt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const vu=new O,xu=new je,Mu=new je,d_=new O,yu=new Re,Fs=new O,la=new Er,Su=new Re,ca=new ec;class p_ extends dn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Yc,this.bindMatrix=new Re,this.bindMatrixInverse=new Re,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Sr),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Fs),this.boundingBox.expandByPoint(Fs)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Er),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Fs),this.boundingSphere.expandByPoint(Fs)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),la.copy(this.boundingSphere),la.applyMatrix4(r),e.ray.intersectsSphere(la)!==!1&&(Su.copy(r).invert(),ca.copy(e.ray).applyMatrix4(Su),!(this.boundingBox!==null&&ca.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ca)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new je,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Yc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===fg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;xu.fromBufferAttribute(r.attributes.skinIndex,e),Mu.fromBufferAttribute(r.attributes.skinWeight,e),vu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Mu.getComponent(s);if(o!==0){const a=xu.getComponent(s);yu.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(d_.copy(vu).applyMatrix4(yu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class yl extends dt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class m_ extends Et{constructor(e=null,t=1,i=1,r,s,o,a,l,c=Zt,u=Zt,f,h){super(null,o,a,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Eu=new Re,g_=new Re;class nc{constructor(e=[],t=[]){this.uuid=pi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Re)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Re;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:g_;Eu.multiplyMatrices(a,t[s]),Eu.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new nc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new m_(t,e,e,rn,En);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new yl),this.bones.push(o),this.boneInverses.push(new Re().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}const ua=new O,__=new O,v_=new He;class Ai{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ua.subVectors(i,t).cross(__.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ua),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||v_.getNormalMatrix(e),r=this.coplanarPoint(ua).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Si=new Er,Ns=new O;class ic{constructor(e=new Ai,t=new Ai,i=new Ai,r=new Ai,s=new Ai,o=new Ai){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Gn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],d=r[8],g=r[9],v=r[10],m=r[11],p=r[12],A=r[13],T=r[14],E=r[15];if(i[0].setComponents(l-s,h-c,m-d,E-p).normalize(),i[1].setComponents(l+s,h+c,m+d,E+p).normalize(),i[2].setComponents(l+o,h+u,m+g,E+A).normalize(),i[3].setComponents(l-o,h-u,m-g,E-A).normalize(),i[4].setComponents(l-a,h-f,m-v,E-T).normalize(),t===Gn)i[5].setComponents(l+a,h+f,m+v,E+T).normalize();else if(t===lo)i[5].setComponents(a,f,v,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(e){return Si.center.set(0,0,0),Si.radius=.7071067811865476,Si.applyMatrix4(e.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ns.x=r.normal.x>0?e.max.x:e.min.x,Ns.y=r.normal.y>0?e.max.y:e.min.y,Ns.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ns)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ih extends Ni{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const co=new O,uo=new O,Tu=new Re,Ur=new ec,Os=new Er,fa=new O,bu=new O;class x_ extends dt{constructor(e=new sn,t=new Ih){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)co.fromBufferAttribute(t,r-1),uo.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=co.distanceTo(uo);e.setAttribute("lineDistance",new Gt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Os.copy(i.boundingSphere),Os.applyMatrix4(r),Os.radius+=s,e.ray.intersectsSphere(Os)===!1)return;Tu.copy(r).invert(),Ur.copy(e.ray).applyMatrix4(Tu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=d,m=g-1;v<m;v+=c){const p=u.getX(v),A=u.getX(v+1),T=Bs(this,e,Ur,l,p,A);T&&t.push(T)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(d),p=Bs(this,e,Ur,l,v,m);p&&t.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=d,m=g-1;v<m;v+=c){const p=Bs(this,e,Ur,l,v,v+1);p&&t.push(p)}if(this.isLineLoop){const v=Bs(this,e,Ur,l,g-1,d);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Bs(n,e,t,i,r,s){const o=n.geometry.attributes.position;if(co.fromBufferAttribute(o,r),uo.fromBufferAttribute(o,s),t.distanceSqToSegment(co,uo,fa,bu)>i)return;fa.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(fa);if(!(l<e.near||l>e.far))return{distance:l,point:bu.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}class ir extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Lh extends Et{constructor(e,t,i,r,s,o,a,l,c,u=cr){if(u!==cr&&u!==gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===cr&&(i=Di),i===void 0&&u===gr&&(i=mr),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Zt,this.minFilter=l!==void 0?l:Zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class M_{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],h=i[r+1]-u,d=(o-u)/h;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new Ze:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new O,r=[],s=[],o=[],a=new O,l=new Re;for(let d=0;d<=e;d++){const g=d/e;r[d]=this.getTangentAt(g,new O)}s[0]=new O,o[0]=new O;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(qe(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(qe(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],d*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class To extends sn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,d=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const A=p*h-o;for(let T=0;T<c;T++){const E=T*f-s;g.push(E,-A,0),v.push(0,0,1),m.push(T/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let A=0;A<a;A++){const T=A+c*p,E=A+c*(p+1),L=A+1+c*(p+1),I=A+1+c*p;d.push(T,E,I),d.push(E,L,I)}this.setIndex(d),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(v,3)),this.setAttribute("uv",new Gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new To(e.width,e.height,e.widthSegments,e.heightSegments)}}class ha extends Ni{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Fe(16777215),this.specular=new Fe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jl,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pt,this.combine=So,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class y_ extends Ni{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jl,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pt,this.combine=So,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class S_ extends Ni{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class E_ extends Ni{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function zs(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function T_(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function b_(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function Au(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=n[a+l]}return r}function Dh(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}class bo{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class A_ extends bo{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:jc,endingEnd:jc}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Kc:s=e,a=2*t-i;break;case $c:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Kc:o=e,l=2*i-t;break;case $c:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,g=(i-t)/(r-t),v=g*g,m=v*g,p=-h*m+2*h*v-h*g,A=(1+h)*m+(-1.5-2*h)*v+(-.5+h)*g+1,T=(-1-d)*m+(1.5+d)*v+.5*g,E=d*m-d*v;for(let L=0;L!==a;++L)s[L]=p*o[u+L]+A*o[c+L]+T*o[l+L]+E*o[f+L];return s}}class w_ extends bo{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(r-t),f=1-u;for(let h=0;h!==a;++h)s[h]=o[c+h]*f+o[l+h]*u;return s}}class R_ extends bo{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Rn{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=zs(t,this.TimeBufferType),this.values=zs(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:zs(e.times,Array),values:zs(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new R_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new w_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new A_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case oo:t=this.InterpolantFactoryMethodDiscrete;break;case Ml:t=this.InterpolantFactoryMethodLinear;break;case ko:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return oo;case this.InterpolantFactoryMethodLinear:return Ml;case this.InterpolantFactoryMethodSmooth:return ko}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&T_(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===ko,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const f=a*i,h=f-i,d=f+i;for(let g=0;g!==i;++g){const v=t[f+g];if(v!==t[h+g]||v!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const f=a*i,h=o*i;for(let d=0;d!==i;++d)t[h+d]=t[f+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Rn.prototype.TimeBufferType=Float32Array;Rn.prototype.ValueBufferType=Float32Array;Rn.prototype.DefaultInterpolation=Ml;class Tr extends Rn{constructor(e,t,i){super(e,t,i)}}Tr.prototype.ValueTypeName="bool";Tr.prototype.ValueBufferType=Array;Tr.prototype.DefaultInterpolation=oo;Tr.prototype.InterpolantFactoryMethodLinear=void 0;Tr.prototype.InterpolantFactoryMethodSmooth=void 0;class Uh extends Rn{}Uh.prototype.ValueTypeName="color";class rs extends Rn{}rs.prototype.ValueTypeName="number";class C_ extends bo{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Tn.slerpFlat(s,0,o,c-a,o,c,l);return s}}class us extends Rn{InterpolantFactoryMethodLinear(e){return new C_(this.times,this.values,this.getValueSize(),e)}}us.prototype.ValueTypeName="quaternion";us.prototype.InterpolantFactoryMethodSmooth=void 0;class br extends Rn{constructor(e,t,i){super(e,t,i)}}br.prototype.ValueTypeName="string";br.prototype.ValueBufferType=Array;br.prototype.DefaultInterpolation=oo;br.prototype.InterpolantFactoryMethodLinear=void 0;br.prototype.InterpolantFactoryMethodSmooth=void 0;class ss extends Rn{}ss.prototype.ValueTypeName="vector";class P_{constructor(e="",t=-1,i=[],r=dg){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=pi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(L_(i[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(Rn.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=b_(l);l=Au(l,1,u),c=Au(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new rs(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const f=u[1];let h=r[f];h||(r[f]=h=[]),h.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(f,h,d,g,v){if(d.length!==0){const m=[],p=[];Dh(d,m,p,g),m.length!==0&&v.push(new f(h,m,p))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const h=c[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const d={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let v=0;v<h[g].morphTargets.length;v++)d[h[g].morphTargets[v]]=-1;for(const v in d){const m=[],p=[];for(let A=0;A!==h[g].morphTargets.length;++A){const T=h[g];m.push(T.time),p.push(T.morphTarget===v?1:0)}r.push(new rs(".morphTargetInfluence["+v+"]",m,p))}l=d.length*o}else{const d=".bones["+t[f].name+"]";i(ss,d+".position",h,"pos",r),i(us,d+".quaternion",h,"rot",r),i(ss,d+".scale",h,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function I_(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return rs;case"vector":case"vector2":case"vector3":case"vector4":return ss;case"color":return Uh;case"quaternion":return us;case"bool":case"boolean":return Tr;case"string":return br}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function L_(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=I_(n.type);if(n.times===void 0){const t=[],i=[];Dh(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const fo={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class D_{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const U_=new D_;class fs{constructor(e){this.manager=e!==void 0?e:U_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}fs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Nn={};class F_ extends Error{constructor(e,t){super(e),this.response=t}}class N_ extends fs{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=fo.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Nn[e]!==void 0){Nn[e].push({onLoad:t,onProgress:i,onError:r});return}Nn[e]=[],Nn[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Nn[e],f=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=h?parseInt(h):0,g=d!==0;let v=0;const m=new ReadableStream({start(p){A();function A(){f.read().then(({done:T,value:E})=>{if(T)p.close();else{v+=E.byteLength;const L=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:d});for(let I=0,C=u.length;I<C;I++){const U=u[I];U.onProgress&&U.onProgress(L)}p.enqueue(E),A()}},T=>{p.error(T)})}}});return new Response(m)}else throw new F_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{fo.add(e,c);const u=Nn[e];delete Nn[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Nn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Nn[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class O_ extends fs{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=fo.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=is("img");function l(){u(),fo.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Fh extends fs{constructor(e){super(e)}load(e,t,i,r){const s=new Et,o=new O_(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Ao extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const da=new Re,wu=new O,Ru=new O;class rc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.map=null,this.mapPass=null,this.matrix=new Re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ic,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;wu.setFromMatrixPosition(e.matrixWorld),t.position.copy(wu),Ru.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ru),t.updateMatrixWorld(),da.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(da),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(da)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class B_ extends rc{constructor(){super(new Bt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=vr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class z_ extends Ao{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new B_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Cu=new Re,Fr=new O,pa=new O;class V_ extends rc{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ze(4,2),this._viewportCount=6,this._viewports=[new je(2,1,1,1),new je(0,1,1,1),new je(3,1,1,1),new je(1,1,1,1),new je(3,0,1,1),new je(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Fr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Fr),pa.copy(i.position),pa.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(pa),i.updateMatrixWorld(),r.makeTranslation(-Fr.x,-Fr.y,-Fr.z),Cu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cu)}}class Sl extends Ao{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new V_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class sc extends Ch{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class H_ extends rc{constructor(){super(new sc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Nh extends Ao{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new H_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Oh extends Ao{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class k_{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class G_ extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}const oc="\\[\\]\\.:\\/",W_=new RegExp("["+oc+"]","g"),ac="[^"+oc+"]",X_="[^"+oc.replace("\\.","")+"]",q_=/((?:WC+[\/:])*)/.source.replace("WC",ac),Y_=/(WCOD+)?/.source.replace("WCOD",X_),j_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ac),K_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ac),$_=new RegExp("^"+q_+Y_+j_+K_+"$"),Z_=["material","materials","bones","map"];class J_{constructor(e,t,i){const r=i||Qe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Qe{constructor(e,t,i){this.path=t,this.parsedPath=i||Qe.parseTrackName(t),this.node=Qe.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Qe.Composite(e,t,i):new Qe(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(W_,"")}static parseTrackName(e){const t=$_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);Z_.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=Qe.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Qe.Composite=J_;Qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Qe.prototype.GetterByBindingType=[Qe.prototype._getValue_direct,Qe.prototype._getValue_array,Qe.prototype._getValue_arrayElement,Qe.prototype._getValue_toArray];Qe.prototype.SetterByBindingTypeAndVersioning=[[Qe.prototype._setValue_direct,Qe.prototype._setValue_direct_setNeedsUpdate,Qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_array,Qe.prototype._setValue_array_setNeedsUpdate,Qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_arrayElement,Qe.prototype._setValue_arrayElement_setNeedsUpdate,Qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_fromArray,Qe.prototype._setValue_fromArray_setNeedsUpdate,Qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function Pu(n,e,t,i){const r=Q_(i);switch(t){case dh:return n*e;case mh:return n*e;case gh:return n*e*2;case _h:return n*e/r.components*r.byteLength;case Kl:return n*e/r.components*r.byteLength;case vh:return n*e*2/r.components*r.byteLength;case $l:return n*e*2/r.components*r.byteLength;case ph:return n*e*3/r.components*r.byteLength;case rn:return n*e*4/r.components*r.byteLength;case Zl:return n*e*4/r.components*r.byteLength;case Ys:case js:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ks:case $s:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ka:case Za:return Math.max(n,16)*Math.max(e,8)/4;case ja:case $a:return Math.max(n,8)*Math.max(e,8)/2;case Ja:case Qa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case el:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case tl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case nl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case il:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case rl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case sl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ol:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case al:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ll:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case cl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ul:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case fl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case hl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case dl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case pl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Zs:case ml:case gl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case xh:case _l:return Math.ceil(n/4)*Math.ceil(e/4)*8;case vl:case xl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Q_(n){switch(n){case Xn:case uh:return{byteLength:1,components:1};case ns:case fh:case ls:return{byteLength:2,components:1};case Yl:case jl:return{byteLength:2,components:4};case Di:case ql:case En:return{byteLength:4,components:1};case hh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yo);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Bh(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function ev(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],v=f[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,f[h]=v)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const v=f[d];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var tv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nv=`#ifdef USE_ALPHAHASH
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
#endif`,iv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ov=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,av=`#ifdef USE_AOMAP
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
#endif`,lv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cv=`#ifdef USE_BATCHING
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
#endif`,uv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pv=`#ifdef USE_IRIDESCENCE
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
#endif`,mv=`#ifdef USE_BUMPMAP
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
#endif`,gv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_v=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ev=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Tv=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,bv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Av=`vec3 transformedNormal = objectNormal;
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
#endif`,wv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Iv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dv=`#ifdef USE_ENVMAP
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
#endif`,Uv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fv=`#ifdef USE_ENVMAP
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
#endif`,Nv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ov=`#ifdef USE_ENVMAP
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
#endif`,Bv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kv=`#ifdef USE_GRADIENTMAP
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
}`,Gv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qv=`uniform bool receiveShadow;
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
#endif`,Yv=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,jv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$v=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Qv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,e0=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif`,t0=`#if defined( RE_IndirectDiffuse )
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
#endif`,n0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,i0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,r0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,s0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,a0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,l0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,c0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,u0=`#if defined( USE_POINTS_UV )
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
#endif`,f0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,h0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,d0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,p0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,m0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,g0=`#ifdef USE_MORPHTARGETS
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
#endif`,_0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,v0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,x0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,M0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,y0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,E0=`#ifdef USE_NORMALMAP
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
#endif`,T0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,b0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,A0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,w0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,R0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,C0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,P0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,I0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,L0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,D0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,U0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,F0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,N0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,O0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,B0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,z0=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,V0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,H0=`#ifdef USE_SKINNING
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
#endif`,k0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,G0=`#ifdef USE_SKINNING
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
#endif`,W0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,X0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,q0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Y0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,j0=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,K0=`#ifdef USE_TRANSMISSION
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
#endif`,$0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,J0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ex=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tx=`uniform sampler2D t2D;
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
}`,nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ix=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ox=`#include <common>
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
}`,ax=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,lx=`#define DISTANCE
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
}`,cx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
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
	gl_FragColor = packDepthToRGBA( dist );
}`,ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hx=`uniform float scale;
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
}`,dx=`uniform vec3 diffuse;
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
}`,px=`#include <common>
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
}`,mx=`uniform vec3 diffuse;
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
}`,gx=`#define LAMBERT
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
}`,_x=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,vx=`#define MATCAP
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
}`,xx=`#define MATCAP
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
}`,Mx=`#define NORMAL
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
}`,yx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Sx=`#define PHONG
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
}`,Ex=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Tx=`#define STANDARD
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
}`,bx=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Ax=`#define TOON
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
}`,wx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Rx=`uniform float size;
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
}`,Cx=`uniform vec3 diffuse;
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
}`,Px=`#include <common>
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
}`,Ix=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Lx=`uniform float rotation;
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
}`,Dx=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:tv,alphahash_pars_fragment:nv,alphamap_fragment:iv,alphamap_pars_fragment:rv,alphatest_fragment:sv,alphatest_pars_fragment:ov,aomap_fragment:av,aomap_pars_fragment:lv,batching_pars_vertex:cv,batching_vertex:uv,begin_vertex:fv,beginnormal_vertex:hv,bsdfs:dv,iridescence_fragment:pv,bumpmap_pars_fragment:mv,clipping_planes_fragment:gv,clipping_planes_pars_fragment:_v,clipping_planes_pars_vertex:vv,clipping_planes_vertex:xv,color_fragment:Mv,color_pars_fragment:yv,color_pars_vertex:Sv,color_vertex:Ev,common:Tv,cube_uv_reflection_fragment:bv,defaultnormal_vertex:Av,displacementmap_pars_vertex:wv,displacementmap_vertex:Rv,emissivemap_fragment:Cv,emissivemap_pars_fragment:Pv,colorspace_fragment:Iv,colorspace_pars_fragment:Lv,envmap_fragment:Dv,envmap_common_pars_fragment:Uv,envmap_pars_fragment:Fv,envmap_pars_vertex:Nv,envmap_physical_pars_fragment:Yv,envmap_vertex:Ov,fog_vertex:Bv,fog_pars_vertex:zv,fog_fragment:Vv,fog_pars_fragment:Hv,gradientmap_pars_fragment:kv,lightmap_pars_fragment:Gv,lights_lambert_fragment:Wv,lights_lambert_pars_fragment:Xv,lights_pars_begin:qv,lights_toon_fragment:jv,lights_toon_pars_fragment:Kv,lights_phong_fragment:$v,lights_phong_pars_fragment:Zv,lights_physical_fragment:Jv,lights_physical_pars_fragment:Qv,lights_fragment_begin:e0,lights_fragment_maps:t0,lights_fragment_end:n0,logdepthbuf_fragment:i0,logdepthbuf_pars_fragment:r0,logdepthbuf_pars_vertex:s0,logdepthbuf_vertex:o0,map_fragment:a0,map_pars_fragment:l0,map_particle_fragment:c0,map_particle_pars_fragment:u0,metalnessmap_fragment:f0,metalnessmap_pars_fragment:h0,morphinstance_vertex:d0,morphcolor_vertex:p0,morphnormal_vertex:m0,morphtarget_pars_vertex:g0,morphtarget_vertex:_0,normal_fragment_begin:v0,normal_fragment_maps:x0,normal_pars_fragment:M0,normal_pars_vertex:y0,normal_vertex:S0,normalmap_pars_fragment:E0,clearcoat_normal_fragment_begin:T0,clearcoat_normal_fragment_maps:b0,clearcoat_pars_fragment:A0,iridescence_pars_fragment:w0,opaque_fragment:R0,packing:C0,premultiplied_alpha_fragment:P0,project_vertex:I0,dithering_fragment:L0,dithering_pars_fragment:D0,roughnessmap_fragment:U0,roughnessmap_pars_fragment:F0,shadowmap_pars_fragment:N0,shadowmap_pars_vertex:O0,shadowmap_vertex:B0,shadowmask_pars_fragment:z0,skinbase_vertex:V0,skinning_pars_vertex:H0,skinning_vertex:k0,skinnormal_vertex:G0,specularmap_fragment:W0,specularmap_pars_fragment:X0,tonemapping_fragment:q0,tonemapping_pars_fragment:Y0,transmission_fragment:j0,transmission_pars_fragment:K0,uv_pars_fragment:$0,uv_pars_vertex:Z0,uv_vertex:J0,worldpos_vertex:Q0,background_vert:ex,background_frag:tx,backgroundCube_vert:nx,backgroundCube_frag:ix,cube_vert:rx,cube_frag:sx,depth_vert:ox,depth_frag:ax,distanceRGBA_vert:lx,distanceRGBA_frag:cx,equirect_vert:ux,equirect_frag:fx,linedashed_vert:hx,linedashed_frag:dx,meshbasic_vert:px,meshbasic_frag:mx,meshlambert_vert:gx,meshlambert_frag:_x,meshmatcap_vert:vx,meshmatcap_frag:xx,meshnormal_vert:Mx,meshnormal_frag:yx,meshphong_vert:Sx,meshphong_frag:Ex,meshphysical_vert:Tx,meshphysical_frag:bx,meshtoon_vert:Ax,meshtoon_frag:wx,points_vert:Rx,points_frag:Cx,shadow_vert:Px,shadow_frag:Ix,sprite_vert:Lx,sprite_frag:Dx},ge={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},xn={basic:{uniforms:Ft([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Ft([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Ft([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Ft([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Ft([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Ft([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Ft([ge.points,ge.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Ft([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Ft([ge.common,ge.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Ft([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Ft([ge.sprite,ge.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Ft([ge.common,ge.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Ft([ge.lights,ge.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};xn.physical={uniforms:Ft([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Vs={r:0,b:0,g:0},Ei=new Pt,Ux=new Re;function Fx(n,e,t,i,r,s,o){const a=new Fe(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function g(T){let E=T.isScene===!0?T.background:null;return E&&E.isTexture&&(E=(T.backgroundBlurriness>0?t:e).get(E)),E}function v(T){let E=!1;const L=g(T);L===null?p(a,l):L&&L.isColor&&(p(L,1),E=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(T,E){const L=g(E);L&&(L.isCubeTexture||L.mapping===Eo)?(u===void 0&&(u=new dn(new cs(1,1,1),new fi({name:"BackgroundCubeMaterial",uniforms:xr(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,C,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ei.copy(E.backgroundRotation),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),u.material.uniforms.envMap.value=L,u.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ux.makeRotationFromEuler(Ei)),u.material.toneMapped=et.getTransfer(L.colorSpace)!==ot,(f!==L||h!==L.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=L,h=L.version,d=n.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):L&&L.isTexture&&(c===void 0&&(c=new dn(new To(2,2),new fi({name:"BackgroundMaterial",uniforms:xr(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=L,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=et.getTransfer(L.colorSpace)!==ot,L.matrixAutoUpdate===!0&&L.updateMatrix(),c.material.uniforms.uvTransform.value.copy(L.matrix),(f!==L||h!==L.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=L,h=L.version,d=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function p(T,E){T.getRGB(Vs,Rh(n)),i.buffers.color.setClear(Vs.r,Vs.g,Vs.b,E,o)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(T,E=1){a.set(T),l=E,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,p(a,l)},render:v,addToRenderList:m,dispose:A}}function Nx(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(S,D,J,W,te){let ie=!1;const j=f(W,J,D);s!==j&&(s=j,c(s.object)),ie=d(S,W,J,te),ie&&g(S,W,J,te),te!==null&&e.update(te,n.ELEMENT_ARRAY_BUFFER),(ie||o)&&(o=!1,E(S,D,J,W),te!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function f(S,D,J){const W=J.wireframe===!0;let te=i[S.id];te===void 0&&(te={},i[S.id]=te);let ie=te[D.id];ie===void 0&&(ie={},te[D.id]=ie);let j=ie[W];return j===void 0&&(j=h(l()),ie[W]=j),j}function h(S){const D=[],J=[],W=[];for(let te=0;te<t;te++)D[te]=0,J[te]=0,W[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:J,attributeDivisors:W,object:S,attributes:{},index:null}}function d(S,D,J,W){const te=s.attributes,ie=D.attributes;let j=0;const Q=J.getAttributes();for(const V in Q)if(Q[V].location>=0){const me=te[V];let Te=ie[V];if(Te===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(Te=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(Te=S.instanceColor)),me===void 0||me.attribute!==Te||Te&&me.data!==Te.data)return!0;j++}return s.attributesNum!==j||s.index!==W}function g(S,D,J,W){const te={},ie=D.attributes;let j=0;const Q=J.getAttributes();for(const V in Q)if(Q[V].location>=0){let me=ie[V];me===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(me=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(me=S.instanceColor));const Te={};Te.attribute=me,me&&me.data&&(Te.data=me.data),te[V]=Te,j++}s.attributes=te,s.attributesNum=j,s.index=W}function v(){const S=s.newAttributes;for(let D=0,J=S.length;D<J;D++)S[D]=0}function m(S){p(S,0)}function p(S,D){const J=s.newAttributes,W=s.enabledAttributes,te=s.attributeDivisors;J[S]=1,W[S]===0&&(n.enableVertexAttribArray(S),W[S]=1),te[S]!==D&&(n.vertexAttribDivisor(S,D),te[S]=D)}function A(){const S=s.newAttributes,D=s.enabledAttributes;for(let J=0,W=D.length;J<W;J++)D[J]!==S[J]&&(n.disableVertexAttribArray(J),D[J]=0)}function T(S,D,J,W,te,ie,j){j===!0?n.vertexAttribIPointer(S,D,J,te,ie):n.vertexAttribPointer(S,D,J,W,te,ie)}function E(S,D,J,W){v();const te=W.attributes,ie=J.getAttributes(),j=D.defaultAttributeValues;for(const Q in ie){const V=ie[Q];if(V.location>=0){let ue=te[Q];if(ue===void 0&&(Q==="instanceMatrix"&&S.instanceMatrix&&(ue=S.instanceMatrix),Q==="instanceColor"&&S.instanceColor&&(ue=S.instanceColor)),ue!==void 0){const me=ue.normalized,Te=ue.itemSize,Ce=e.get(ue);if(Ce===void 0)continue;const Ke=Ce.buffer,ee=Ce.type,ce=Ce.bytesPerElement,Se=ee===n.INT||ee===n.UNSIGNED_INT||ue.gpuType===ql;if(ue.isInterleavedBufferAttribute){const he=ue.data,Ae=he.stride,Ue=ue.offset;if(he.isInstancedInterleavedBuffer){for(let ze=0;ze<V.locationSize;ze++)p(V.location+ze,he.meshPerAttribute);S.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ze=0;ze<V.locationSize;ze++)m(V.location+ze);n.bindBuffer(n.ARRAY_BUFFER,Ke);for(let ze=0;ze<V.locationSize;ze++)T(V.location+ze,Te/V.locationSize,ee,me,Ae*ce,(Ue+Te/V.locationSize*ze)*ce,Se)}else{if(ue.isInstancedBufferAttribute){for(let he=0;he<V.locationSize;he++)p(V.location+he,ue.meshPerAttribute);S.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let he=0;he<V.locationSize;he++)m(V.location+he);n.bindBuffer(n.ARRAY_BUFFER,Ke);for(let he=0;he<V.locationSize;he++)T(V.location+he,Te/V.locationSize,ee,me,Te*ce,Te/V.locationSize*he*ce,Se)}}else if(j!==void 0){const me=j[Q];if(me!==void 0)switch(me.length){case 2:n.vertexAttrib2fv(V.location,me);break;case 3:n.vertexAttrib3fv(V.location,me);break;case 4:n.vertexAttrib4fv(V.location,me);break;default:n.vertexAttrib1fv(V.location,me)}}}}A()}function L(){U();for(const S in i){const D=i[S];for(const J in D){const W=D[J];for(const te in W)u(W[te].object),delete W[te];delete D[J]}delete i[S]}}function I(S){if(i[S.id]===void 0)return;const D=i[S.id];for(const J in D){const W=D[J];for(const te in W)u(W[te].object),delete W[te];delete D[J]}delete i[S.id]}function C(S){for(const D in i){const J=i[D];if(J[S.id]===void 0)continue;const W=J[S.id];for(const te in W)u(W[te].object),delete W[te];delete J[S.id]}}function U(){b(),o=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:U,resetDefaultState:b,dispose:L,releaseStatesOfGeometry:I,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:A}}function Ox(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];t.update(d,i,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let g=0;for(let v=0;v<f;v++)g+=u[v]*h[v];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Bx(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==rn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const U=C===ls&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Xn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==En&&!U)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,I=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:A,maxVaryings:T,maxFragmentUniforms:E,vertexTextures:L,maxSamples:I}}function zx(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Ai,a=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const A=s?0:i,T=A*4;let E=p.clippingState||null;l.value=E,E=u(g,h,T,d);for(let L=0;L!==T;++L)E[L]=t[L];p.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,g){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=d+v*4,A=h.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,E=d;T!==v;++T,E+=4)o.copy(f[T]).applyMatrix4(A,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Vx(n){let e=new WeakMap;function t(o,a){return a===so?o.mapping=dr:a===qa&&(o.mapping=pr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===so||a===qa)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new f_(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const rr=4,Iu=[.125,.215,.35,.446,.526,.582],Ci=20,ma=new sc,Lu=new Fe;let ga=null,_a=0,va=0,xa=!1;const wi=(1+Math.sqrt(5))/2,Ji=1/wi,Du=[new O(-wi,Ji,0),new O(wi,Ji,0),new O(-Ji,0,wi),new O(Ji,0,wi),new O(0,wi,-Ji),new O(0,wi,Ji),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class Uu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ga=this._renderer.getRenderTarget(),_a=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel(),xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ou(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ga,_a,va),this._renderer.xr.enabled=xa,e.scissorTest=!1,Hs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===dr||e.mapping===pr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ga=this._renderer.getRenderTarget(),_a=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel(),xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:ls,format:rn,colorSpace:_r,depthBuffer:!1},r=Fu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fu(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hx(s)),this._blurMaterial=kx(s,e,t)}return r}_compileMaterial(e){const t=new dn(this._lodPlanes[0],e);this._renderer.compile(t,ma)}_sceneToCubeUV(e,t,i,r){const a=new Bt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Lu),u.toneMapping=li,u.autoClear=!1;const d=new Ah({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1}),g=new dn(new cs,d);let v=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,v=!0):(d.color.copy(Lu),v=!0);for(let p=0;p<6;p++){const A=p%3;A===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):A===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const T=this._cubeSize;Hs(r,A*T,p>2?T:0,T,T),u.setRenderTarget(r),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===dr||e.mapping===pr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ou()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nu());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new dn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Hs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ma)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Du[(r-s-1)%Du.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new dn(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Ci-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):Ci;m>Ci&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ci}`);const p=[];let A=0;for(let C=0;C<Ci;++C){const U=C/v,b=Math.exp(-U*U/2);p.push(b),C===0?A+=b:C<m&&(A+=2*b)}for(let C=0;C<p.length;C++)p[C]=p[C]/A;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:T}=this;h.dTheta.value=g,h.mipInt.value=T-i;const E=this._sizeLods[r],L=3*E*(r>T-rr?r-T+rr:0),I=4*(this._cubeSize-E);Hs(t,L,I,3*E,2*E),l.setRenderTarget(t),l.render(f,ma)}}function Hx(n){const e=[],t=[],i=[];let r=n;const s=n-rr+1+Iu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-rr?l=Iu[o-n+rr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,v=3,m=2,p=1,A=new Float32Array(v*g*d),T=new Float32Array(m*g*d),E=new Float32Array(p*g*d);for(let I=0;I<d;I++){const C=I%3*2/3-1,U=I>2?0:-1,b=[C,U,0,C+2/3,U,0,C+2/3,U+1,0,C,U,0,C+2/3,U+1,0,C,U+1,0];A.set(b,v*g*I),T.set(h,m*g*I);const S=[I,I,I,I,I,I];E.set(S,p*g*I)}const L=new sn;L.setAttribute("position",new An(A,v)),L.setAttribute("uv",new An(T,m)),L.setAttribute("faceIndex",new An(E,p)),e.push(L),r>rr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Fu(n,e,t){const i=new Ui(n,e,t);return i.texture.mapping=Eo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Hs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function kx(n,e,t){const i=new Float32Array(Ci),r=new O(0,1,0);return new fi({name:"SphericalGaussianBlur",defines:{n:Ci,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:lc(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Nu(){return new fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lc(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Ou(){return new fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function lc(){return`

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
	`}function Gx(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===so||l===qa,u=l===dr||l===pr;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Uu(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new Uu(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Wx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&nr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Xx(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],n.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,g=f.attributes.position;let v=0;if(d!==null){const A=d.array;v=d.version;for(let T=0,E=A.length;T<E;T+=3){const L=A[T+0],I=A[T+1],C=A[T+2];h.push(L,I,I,C,C,L)}}else if(g!==void 0){const A=g.array;v=g.version;for(let T=0,E=A.length/3-1;T<E;T+=3){const L=T+0,I=T+1,C=T+2;h.push(L,I,I,C,C,L)}}else return;const m=new(yh(h)?wh:tc)(h,1);m.version=v;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function qx(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){n.drawElements(i,d,s,h*o),t.update(d,i,1)}function c(h,d,g){g!==0&&(n.drawElementsInstanced(i,d,s,h*o,g),t.update(d,i,g))}function u(h,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}function f(h,d,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,d[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,h,0,v,0,g);let p=0;for(let A=0;A<g;A++)p+=d[A]*v[A];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Yx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function jx(n,e,t){const i=new WeakMap,r=new je;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let S=function(){U.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var d=S;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let E=0;g===!0&&(E=1),v===!0&&(E=2),m===!0&&(E=3);let L=a.attributes.position.count*E,I=1;L>e.maxTextureSize&&(I=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const C=new Float32Array(L*I*4*f),U=new Eh(C,L,I,f);U.type=En,U.needsUpdate=!0;const b=E*4;for(let D=0;D<f;D++){const J=p[D],W=A[D],te=T[D],ie=L*I*4*D;for(let j=0;j<J.count;j++){const Q=j*b;g===!0&&(r.fromBufferAttribute(J,j),C[ie+Q+0]=r.x,C[ie+Q+1]=r.y,C[ie+Q+2]=r.z,C[ie+Q+3]=0),v===!0&&(r.fromBufferAttribute(W,j),C[ie+Q+4]=r.x,C[ie+Q+5]=r.y,C[ie+Q+6]=r.z,C[ie+Q+7]=0),m===!0&&(r.fromBufferAttribute(te,j),C[ie+Q+8]=r.x,C[ie+Q+9]=r.y,C[ie+Q+10]=r.z,C[ie+Q+11]=te.itemSize===4?r.w:1)}}h={count:f,texture:U,size:new Ze(L,I)},i.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function Kx(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const zh=new Et,Bu=new Lh(1,1),Vh=new Eh,Hh=new Kg,kh=new Ph,zu=[],Vu=[],Hu=new Float32Array(16),ku=new Float32Array(9),Gu=new Float32Array(4);function Ar(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=zu[r];if(s===void 0&&(s=new Float32Array(r),zu[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Mt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function yt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function wo(n,e){let t=Vu[e];t===void 0&&(t=new Int32Array(e),Vu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function $x(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Zx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2fv(this.addr,e),yt(t,e)}}function Jx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;n.uniform3fv(this.addr,e),yt(t,e)}}function Qx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4fv(this.addr,e),yt(t,e)}}function eM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(Mt(t,i))return;Gu.set(i),n.uniformMatrix2fv(this.addr,!1,Gu),yt(t,i)}}function tM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(Mt(t,i))return;ku.set(i),n.uniformMatrix3fv(this.addr,!1,ku),yt(t,i)}}function nM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(Mt(t,i))return;Hu.set(i),n.uniformMatrix4fv(this.addr,!1,Hu),yt(t,i)}}function iM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function rM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2iv(this.addr,e),yt(t,e)}}function sM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3iv(this.addr,e),yt(t,e)}}function oM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4iv(this.addr,e),yt(t,e)}}function aM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function lM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2uiv(this.addr,e),yt(t,e)}}function cM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3uiv(this.addr,e),yt(t,e)}}function uM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4uiv(this.addr,e),yt(t,e)}}function fM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Bu.compareFunction=Mh,s=Bu):s=zh,t.setTexture2D(e||s,r)}function hM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Hh,r)}function dM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||kh,r)}function pM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Vh,r)}function mM(n){switch(n){case 5126:return $x;case 35664:return Zx;case 35665:return Jx;case 35666:return Qx;case 35674:return eM;case 35675:return tM;case 35676:return nM;case 5124:case 35670:return iM;case 35667:case 35671:return rM;case 35668:case 35672:return sM;case 35669:case 35673:return oM;case 5125:return aM;case 36294:return lM;case 36295:return cM;case 36296:return uM;case 35678:case 36198:case 36298:case 36306:case 35682:return fM;case 35679:case 36299:case 36307:return hM;case 35680:case 36300:case 36308:case 36293:return dM;case 36289:case 36303:case 36311:case 36292:return pM}}function gM(n,e){n.uniform1fv(this.addr,e)}function _M(n,e){const t=Ar(e,this.size,2);n.uniform2fv(this.addr,t)}function vM(n,e){const t=Ar(e,this.size,3);n.uniform3fv(this.addr,t)}function xM(n,e){const t=Ar(e,this.size,4);n.uniform4fv(this.addr,t)}function MM(n,e){const t=Ar(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function yM(n,e){const t=Ar(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function SM(n,e){const t=Ar(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function EM(n,e){n.uniform1iv(this.addr,e)}function TM(n,e){n.uniform2iv(this.addr,e)}function bM(n,e){n.uniform3iv(this.addr,e)}function AM(n,e){n.uniform4iv(this.addr,e)}function wM(n,e){n.uniform1uiv(this.addr,e)}function RM(n,e){n.uniform2uiv(this.addr,e)}function CM(n,e){n.uniform3uiv(this.addr,e)}function PM(n,e){n.uniform4uiv(this.addr,e)}function IM(n,e,t){const i=this.cache,r=e.length,s=wo(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||zh,s[o])}function LM(n,e,t){const i=this.cache,r=e.length,s=wo(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Hh,s[o])}function DM(n,e,t){const i=this.cache,r=e.length,s=wo(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||kh,s[o])}function UM(n,e,t){const i=this.cache,r=e.length,s=wo(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Vh,s[o])}function FM(n){switch(n){case 5126:return gM;case 35664:return _M;case 35665:return vM;case 35666:return xM;case 35674:return MM;case 35675:return yM;case 35676:return SM;case 5124:case 35670:return EM;case 35667:case 35671:return TM;case 35668:case 35672:return bM;case 35669:case 35673:return AM;case 5125:return wM;case 36294:return RM;case 36295:return CM;case 36296:return PM;case 35678:case 36198:case 36298:case 36306:case 35682:return IM;case 35679:case 36299:case 36307:return LM;case 35680:case 36300:case 36308:case 36293:return DM;case 36289:case 36303:case 36311:case 36292:return UM}}class NM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=mM(t.type)}}class OM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=FM(t.type)}}class BM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Ma=/(\w+)(\])?(\[|\.)?/g;function Wu(n,e){n.seq.push(e),n.map[e.id]=e}function zM(n,e,t){const i=n.name,r=i.length;for(Ma.lastIndex=0;;){const s=Ma.exec(i),o=Ma.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Wu(t,c===void 0?new NM(a,n,e):new OM(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new BM(a),Wu(t,f)),t=f}}}class Js{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);zM(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Xu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const VM=37297;let HM=0;function kM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const qu=new He;function GM(n){et._getMatrix(qu,et.workingColorSpace,n);const e=`mat3( ${qu.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(n)){case ao:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Yu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+kM(n.getShaderSource(e),o)}else return r}function WM(n,e){const t=GM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function XM(n,e){let t;switch(e){case rg:t="Linear";break;case sg:t="Reinhard";break;case og:t="Cineon";break;case ag:t="ACESFilmic";break;case cg:t="AgX";break;case ug:t="Neutral";break;case lg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ks=new O;function qM(){et.getLuminanceCoefficients(ks);const n=ks.x.toFixed(4),e=ks.y.toFixed(4),t=ks.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function YM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Or).join(`
`)}function jM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function KM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Or(n){return n!==""}function ju(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ku(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $M=/^[ \t]*#include +<([\w\d./]+)>/gm;function El(n){return n.replace($M,JM)}const ZM=new Map;function JM(n,e){let t=Ge[e];if(t===void 0){const i=ZM.get(e);if(i!==void 0)t=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return El(t)}const QM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $u(n){return n.replace(QM,ey)}function ey(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Zu(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ty(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===lh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Om?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===On&&(e="SHADOWMAP_TYPE_VSM"),e}function ny(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case dr:case pr:e="ENVMAP_TYPE_CUBE";break;case Eo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function iy(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case pr:e="ENVMAP_MODE_REFRACTION";break}return e}function ry(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case So:e="ENVMAP_BLENDING_MULTIPLY";break;case ng:e="ENVMAP_BLENDING_MIX";break;case ig:e="ENVMAP_BLENDING_ADD";break}return e}function sy(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function oy(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=ty(t),c=ny(t),u=iy(t),f=ry(t),h=sy(t),d=YM(t),g=jM(s),v=r.createProgram();let m,p,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Or).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Or).join(`
`),p.length>0&&(p+=`
`)):(m=[Zu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Or).join(`
`),p=[Zu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==li?"#define TONE_MAPPING":"",t.toneMapping!==li?Ge.tonemapping_pars_fragment:"",t.toneMapping!==li?XM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,WM("linearToOutputTexel",t.outputColorSpace),qM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Or).join(`
`)),o=El(o),o=ju(o,t),o=Ku(o,t),a=El(a),a=ju(a,t),a=Ku(a,t),o=$u(o),a=$u(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=A+m+o,E=A+p+a,L=Xu(r,r.VERTEX_SHADER,T),I=Xu(r,r.FRAGMENT_SHADER,E);r.attachShader(v,L),r.attachShader(v,I),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function C(D){if(n.debug.checkShaderErrors){const J=r.getProgramInfoLog(v).trim(),W=r.getShaderInfoLog(L).trim(),te=r.getShaderInfoLog(I).trim();let ie=!0,j=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(ie=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,L,I);else{const Q=Yu(r,L,"vertex"),V=Yu(r,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+J+`
`+Q+`
`+V)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(W===""||te==="")&&(j=!1);j&&(D.diagnostics={runnable:ie,programLog:J,vertexShader:{log:W,prefix:m},fragmentShader:{log:te,prefix:p}})}r.deleteShader(L),r.deleteShader(I),U=new Js(r,v),b=KM(r,v)}let U;this.getUniforms=function(){return U===void 0&&C(this),U};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(v,VM)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=HM++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=I,this}let ay=0;class ly{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new cy(e),t.set(e,i)),i}}class cy{constructor(e){this.id=ay++,this.code=e,this.usedTimes=0}}function uy(n,e,t,i,r,s,o){const a=new Th,l=new ly,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,S,D,J,W){const te=J.fog,ie=W.geometry,j=b.isMeshStandardMaterial?J.environment:null,Q=(b.isMeshStandardMaterial?t:e).get(b.envMap||j),V=Q&&Q.mapping===Eo?Q.image.height:null,ue=g[b.type];b.precision!==null&&(d=r.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const me=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Te=me!==void 0?me.length:0;let Ce=0;ie.morphAttributes.position!==void 0&&(Ce=1),ie.morphAttributes.normal!==void 0&&(Ce=2),ie.morphAttributes.color!==void 0&&(Ce=3);let Ke,ee,ce,Se;if(ue){const st=xn[ue];Ke=st.vertexShader,ee=st.fragmentShader}else Ke=b.vertexShader,ee=b.fragmentShader,l.update(b),ce=l.getVertexShaderID(b),Se=l.getFragmentShaderID(b);const he=n.getRenderTarget(),Ae=n.state.buffers.depth.getReversed(),Ue=W.isInstancedMesh===!0,ze=W.isBatchedMesh===!0,ft=!!b.map,w=!!b.matcap,P=!!Q,M=!!b.aoMap,re=!!b.lightMap,Y=!!b.bumpMap,K=!!b.normalMap,$=!!b.displacementMap,se=!!b.emissiveMap,q=!!b.metalnessMap,x=!!b.roughnessMap,_=b.anisotropy>0,R=b.clearcoat>0,z=b.dispersion>0,G=b.iridescence>0,H=b.sheen>0,fe=b.transmission>0,oe=_&&!!b.anisotropyMap,de=R&&!!b.clearcoatMap,Le=R&&!!b.clearcoatNormalMap,ae=R&&!!b.clearcoatRoughnessMap,_e=G&&!!b.iridescenceMap,we=G&&!!b.iridescenceThicknessMap,De=H&&!!b.sheenColorMap,pe=H&&!!b.sheenRoughnessMap,Ne=!!b.specularMap,Ve=!!b.specularColorMap,at=!!b.specularIntensityMap,F=fe&&!!b.transmissionMap,ve=fe&&!!b.thicknessMap,Z=!!b.gradientMap,ne=!!b.alphaMap,ye=b.alphaTest>0,Me=!!b.alphaHash,ke=!!b.extensions;let pt=li;b.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(pt=n.toneMapping);const At={shaderID:ue,shaderType:b.type,shaderName:b.name,vertexShader:Ke,fragmentShader:ee,defines:b.defines,customVertexShaderID:ce,customFragmentShaderID:Se,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:ze,batchingColor:ze&&W._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&W.instanceColor!==null,instancingMorph:Ue&&W.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:he===null?n.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:_r,alphaToCoverage:!!b.alphaToCoverage,map:ft,matcap:w,envMap:P,envMapMode:P&&Q.mapping,envMapCubeUVHeight:V,aoMap:M,lightMap:re,bumpMap:Y,normalMap:K,displacementMap:h&&$,emissiveMap:se,normalMapObjectSpace:K&&b.normalMapType===gg,normalMapTangentSpace:K&&b.normalMapType===Jl,metalnessMap:q,roughnessMap:x,anisotropy:_,anisotropyMap:oe,clearcoat:R,clearcoatMap:de,clearcoatNormalMap:Le,clearcoatRoughnessMap:ae,dispersion:z,iridescence:G,iridescenceMap:_e,iridescenceThicknessMap:we,sheen:H,sheenColorMap:De,sheenRoughnessMap:pe,specularMap:Ne,specularColorMap:Ve,specularIntensityMap:at,transmission:fe,transmissionMap:F,thicknessMap:ve,gradientMap:Z,opaque:b.transparent===!1&&b.blending===lr&&b.alphaToCoverage===!1,alphaMap:ne,alphaTest:ye,alphaHash:Me,combine:b.combine,mapUv:ft&&v(b.map.channel),aoMapUv:M&&v(b.aoMap.channel),lightMapUv:re&&v(b.lightMap.channel),bumpMapUv:Y&&v(b.bumpMap.channel),normalMapUv:K&&v(b.normalMap.channel),displacementMapUv:$&&v(b.displacementMap.channel),emissiveMapUv:se&&v(b.emissiveMap.channel),metalnessMapUv:q&&v(b.metalnessMap.channel),roughnessMapUv:x&&v(b.roughnessMap.channel),anisotropyMapUv:oe&&v(b.anisotropyMap.channel),clearcoatMapUv:de&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:Le&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:we&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:De&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:pe&&v(b.sheenRoughnessMap.channel),specularMapUv:Ne&&v(b.specularMap.channel),specularColorMapUv:Ve&&v(b.specularColorMap.channel),specularIntensityMapUv:at&&v(b.specularIntensityMap.channel),transmissionMapUv:F&&v(b.transmissionMap.channel),thicknessMapUv:ve&&v(b.thicknessMap.channel),alphaMapUv:ne&&v(b.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(K||_),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!ie.attributes.uv&&(ft||ne),fog:!!te,useFog:b.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Ae,skinning:W.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:Ce,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:pt,decodeVideoTexture:ft&&b.map.isVideoTexture===!0&&et.getTransfer(b.map.colorSpace)===ot,decodeVideoTextureEmissive:se&&b.emissiveMap.isVideoTexture===!0&&et.getTransfer(b.emissiveMap.colorSpace)===ot,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Hn,flipSided:b.side===Wt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ke&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&b.extensions.multiDraw===!0||ze)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return At.vertexUv1s=c.has(1),At.vertexUv2s=c.has(2),At.vertexUv3s=c.has(3),c.clear(),At}function p(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const D in b.defines)S.push(D),S.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(A(S,b),T(S,b),S.push(n.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function A(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function T(b,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),b.push(a.mask)}function E(b){const S=g[b.type];let D;if(S){const J=xn[S];D=a_.clone(J.uniforms)}else D=b.uniforms;return D}function L(b,S){let D;for(let J=0,W=u.length;J<W;J++){const te=u[J];if(te.cacheKey===S){D=te,++D.usedTimes;break}}return D===void 0&&(D=new oy(n,S,b,s),u.push(D)),D}function I(b){if(--b.usedTimes===0){const S=u.indexOf(b);u[S]=u[u.length-1],u.pop(),b.destroy()}}function C(b){l.remove(b)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:E,acquireProgram:L,releaseProgram:I,releaseShaderCache:C,programs:u,dispose:U}}function fy(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function hy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ju(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Qu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,d,g,v,m){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:v,group:m},n[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=v,p.group=m),e++,p}function a(f,h,d,g,v,m){const p=o(f,h,d,g,v,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(f,h,d,g,v,m){const p=o(f,h,d,g,v,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||hy),i.length>1&&i.sort(h||Ju),r.length>1&&r.sort(h||Ju)}function u(){for(let f=e,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function dy(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Qu,n.set(i,[o])):r>=s.length?(o=new Qu,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function py(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Fe};break;case"SpotLight":t={position:new O,direction:new O,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function my(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let gy=0;function _y(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function vy(n){const e=new py,t=my(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const r=new O,s=new Re,o=new Re;function a(c){let u=0,f=0,h=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let d=0,g=0,v=0,m=0,p=0,A=0,T=0,E=0,L=0,I=0,C=0;c.sort(_y);for(let b=0,S=c.length;b<S;b++){const D=c[b],J=D.color,W=D.intensity,te=D.distance,ie=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=J.r*W,f+=J.g*W,h+=J.b*W;else if(D.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(D.sh.coefficients[j],W);C++}else if(D.isDirectionalLight){const j=e.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Q=D.shadow,V=t.get(D);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,i.directionalShadow[d]=V,i.directionalShadowMap[d]=ie,i.directionalShadowMatrix[d]=D.shadow.matrix,A++}i.directional[d]=j,d++}else if(D.isSpotLight){const j=e.get(D);j.position.setFromMatrixPosition(D.matrixWorld),j.color.copy(J).multiplyScalar(W),j.distance=te,j.coneCos=Math.cos(D.angle),j.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),j.decay=D.decay,i.spot[v]=j;const Q=D.shadow;if(D.map&&(i.spotLightMap[L]=D.map,L++,Q.updateMatrices(D),D.castShadow&&I++),i.spotLightMatrix[v]=Q.matrix,D.castShadow){const V=t.get(D);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,i.spotShadow[v]=V,i.spotShadowMap[v]=ie,E++}v++}else if(D.isRectAreaLight){const j=e.get(D);j.color.copy(J).multiplyScalar(W),j.halfWidth.set(D.width*.5,0,0),j.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=j,m++}else if(D.isPointLight){const j=e.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity),j.distance=D.distance,j.decay=D.decay,D.castShadow){const Q=D.shadow,V=t.get(D);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,V.shadowCameraNear=Q.camera.near,V.shadowCameraFar=Q.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=ie,i.pointShadowMatrix[g]=D.shadow.matrix,T++}i.point[g]=j,g++}else if(D.isHemisphereLight){const j=e.get(D);j.skyColor.copy(D.color).multiplyScalar(W),j.groundColor.copy(D.groundColor).multiplyScalar(W),i.hemi[p]=j,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const U=i.hash;(U.directionalLength!==d||U.pointLength!==g||U.spotLength!==v||U.rectAreaLength!==m||U.hemiLength!==p||U.numDirectionalShadows!==A||U.numPointShadows!==T||U.numSpotShadows!==E||U.numSpotMaps!==L||U.numLightProbes!==C)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=E+L-I,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=C,U.directionalLength=d,U.pointLength=g,U.spotLength=v,U.rectAreaLength=m,U.hemiLength=p,U.numDirectionalShadows=A,U.numPointShadows=T,U.numSpotShadows=E,U.numSpotMaps=L,U.numLightProbes=C,i.version=gy++)}function l(c,u){let f=0,h=0,d=0,g=0,v=0;const m=u.matrixWorldInverse;for(let p=0,A=c.length;p<A;p++){const T=c[p];if(T.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),f++}else if(T.isSpotLight){const E=i.spot[d];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),d++}else if(T.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(m),o.identity(),s.copy(T.matrixWorld),s.premultiply(m),o.extractRotation(s),E.halfWidth.set(T.width*.5,0,0),E.halfHeight.set(0,T.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(T.isPointLight){const E=i.point[h];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(m),h++}else if(T.isHemisphereLight){const E=i.hemi[v];E.direction.setFromMatrixPosition(T.matrixWorld),E.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function ef(n){const e=new vy(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function xy(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new ef(n),e.set(r,[a])):s>=o.length?(a=new ef(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const My=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Sy(n,e,t){let i=new ic;const r=new Ze,s=new Ze,o=new je,a=new S_({depthPacking:mg}),l=new E_,c={},u=t.maxTextureSize,f={[ui]:Wt,[Wt]:ui,[Hn]:Hn},h=new fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:My,fragmentShader:yy}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new sn;g.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new dn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lh;let p=this.type;this.render=function(I,C,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;const b=n.getRenderTarget(),S=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),J=n.state;J.setBlending(ai),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const W=p!==On&&this.type===On,te=p===On&&this.type!==On;for(let ie=0,j=I.length;ie<j;ie++){const Q=I[ie],V=Q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const ue=V.getFrameExtents();if(r.multiply(ue),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ue.x),r.x=s.x*ue.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ue.y),r.y=s.y*ue.y,V.mapSize.y=s.y)),V.map===null||W===!0||te===!0){const Te=this.type!==On?{minFilter:Zt,magFilter:Zt}:{};V.map!==null&&V.map.dispose(),V.map=new Ui(r.x,r.y,Te),V.map.texture.name=Q.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const me=V.getViewportCount();for(let Te=0;Te<me;Te++){const Ce=V.getViewport(Te);o.set(s.x*Ce.x,s.y*Ce.y,s.x*Ce.z,s.y*Ce.w),J.viewport(o),V.updateMatrices(Q,Te),i=V.getFrustum(),E(C,U,V.camera,Q,this.type)}V.isPointLightShadow!==!0&&this.type===On&&A(V,U),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(b,S,D)};function A(I,C){const U=e.update(v);h.defines.VSM_SAMPLES!==I.blurSamples&&(h.defines.VSM_SAMPLES=I.blurSamples,d.defines.VSM_SAMPLES=I.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Ui(r.x,r.y)),h.uniforms.shadow_pass.value=I.map.texture,h.uniforms.resolution.value=I.mapSize,h.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(C,null,U,h,v,null),d.uniforms.shadow_pass.value=I.mapPass.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(C,null,U,d,v,null)}function T(I,C,U,b){let S=null;const D=U.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(D!==void 0)S=D;else if(S=U.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const J=S.uuid,W=C.uuid;let te=c[J];te===void 0&&(te={},c[J]=te);let ie=te[W];ie===void 0&&(ie=S.clone(),te[W]=ie,C.addEventListener("dispose",L)),S=ie}if(S.visible=C.visible,S.wireframe=C.wireframe,b===On?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:f[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,U.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const J=n.properties.get(S);J.light=U}return S}function E(I,C,U,b,S){if(I.visible===!1)return;if(I.layers.test(C.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&S===On)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,I.matrixWorld);const W=e.update(I),te=I.material;if(Array.isArray(te)){const ie=W.groups;for(let j=0,Q=ie.length;j<Q;j++){const V=ie[j],ue=te[V.materialIndex];if(ue&&ue.visible){const me=T(I,ue,b,S);I.onBeforeShadow(n,I,C,U,W,me,V),n.renderBufferDirect(U,null,W,me,I,V),I.onAfterShadow(n,I,C,U,W,me,V)}}}else if(te.visible){const ie=T(I,te,b,S);I.onBeforeShadow(n,I,C,U,W,ie,null),n.renderBufferDirect(U,null,W,ie,I,null),I.onAfterShadow(n,I,C,U,W,ie,null)}}const J=I.children;for(let W=0,te=J.length;W<te;W++)E(J[W],C,U,b,S)}function L(I){I.target.removeEventListener("dispose",L);for(const U in c){const b=c[U],S=I.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}const Ey={[za]:Va,[Ha]:Wa,[ka]:Xa,[hr]:Ga,[Va]:za,[Wa]:Ha,[Xa]:ka,[Ga]:hr};function Ty(n,e){function t(){let F=!1;const ve=new je;let Z=null;const ne=new je(0,0,0,0);return{setMask:function(ye){Z!==ye&&!F&&(n.colorMask(ye,ye,ye,ye),Z=ye)},setLocked:function(ye){F=ye},setClear:function(ye,Me,ke,pt,At){At===!0&&(ye*=pt,Me*=pt,ke*=pt),ve.set(ye,Me,ke,pt),ne.equals(ve)===!1&&(n.clearColor(ye,Me,ke,pt),ne.copy(ve))},reset:function(){F=!1,Z=null,ne.set(-1,0,0,0)}}}function i(){let F=!1,ve=!1,Z=null,ne=null,ye=null;return{setReversed:function(Me){if(ve!==Me){const ke=e.get("EXT_clip_control");ve?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT);const pt=ye;ye=null,this.setClear(pt)}ve=Me},getReversed:function(){return ve},setTest:function(Me){Me?he(n.DEPTH_TEST):Ae(n.DEPTH_TEST)},setMask:function(Me){Z!==Me&&!F&&(n.depthMask(Me),Z=Me)},setFunc:function(Me){if(ve&&(Me=Ey[Me]),ne!==Me){switch(Me){case za:n.depthFunc(n.NEVER);break;case Va:n.depthFunc(n.ALWAYS);break;case Ha:n.depthFunc(n.LESS);break;case hr:n.depthFunc(n.LEQUAL);break;case ka:n.depthFunc(n.EQUAL);break;case Ga:n.depthFunc(n.GEQUAL);break;case Wa:n.depthFunc(n.GREATER);break;case Xa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ne=Me}},setLocked:function(Me){F=Me},setClear:function(Me){ye!==Me&&(ve&&(Me=1-Me),n.clearDepth(Me),ye=Me)},reset:function(){F=!1,Z=null,ne=null,ye=null,ve=!1}}}function r(){let F=!1,ve=null,Z=null,ne=null,ye=null,Me=null,ke=null,pt=null,At=null;return{setTest:function(st){F||(st?he(n.STENCIL_TEST):Ae(n.STENCIL_TEST))},setMask:function(st){ve!==st&&!F&&(n.stencilMask(st),ve=st)},setFunc:function(st,on,Cn){(Z!==st||ne!==on||ye!==Cn)&&(n.stencilFunc(st,on,Cn),Z=st,ne=on,ye=Cn)},setOp:function(st,on,Cn){(Me!==st||ke!==on||pt!==Cn)&&(n.stencilOp(st,on,Cn),Me=st,ke=on,pt=Cn)},setLocked:function(st){F=st},setClear:function(st){At!==st&&(n.clearStencil(st),At=st)},reset:function(){F=!1,ve=null,Z=null,ne=null,ye=null,Me=null,ke=null,pt=null,At=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],g=null,v=!1,m=null,p=null,A=null,T=null,E=null,L=null,I=null,C=new Fe(0,0,0),U=0,b=!1,S=null,D=null,J=null,W=null,te=null;const ie=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,Q=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(V)[1]),j=Q>=1):V.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),j=Q>=2);let ue=null,me={};const Te=n.getParameter(n.SCISSOR_BOX),Ce=n.getParameter(n.VIEWPORT),Ke=new je().fromArray(Te),ee=new je().fromArray(Ce);function ce(F,ve,Z,ne){const ye=new Uint8Array(4),Me=n.createTexture();n.bindTexture(F,Me),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ke=0;ke<Z;ke++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(ve,0,n.RGBA,1,1,ne,0,n.RGBA,n.UNSIGNED_BYTE,ye):n.texImage2D(ve+ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ye);return Me}const Se={};Se[n.TEXTURE_2D]=ce(n.TEXTURE_2D,n.TEXTURE_2D,1),Se[n.TEXTURE_CUBE_MAP]=ce(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[n.TEXTURE_2D_ARRAY]=ce(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Se[n.TEXTURE_3D]=ce(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),he(n.DEPTH_TEST),o.setFunc(hr),Y(!1),K(Gc),he(n.CULL_FACE),M(ai);function he(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function Ae(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function Ue(F,ve){return f[F]!==ve?(n.bindFramebuffer(F,ve),f[F]=ve,F===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ve),F===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ve),!0):!1}function ze(F,ve){let Z=d,ne=!1;if(F){Z=h.get(ve),Z===void 0&&(Z=[],h.set(ve,Z));const ye=F.textures;if(Z.length!==ye.length||Z[0]!==n.COLOR_ATTACHMENT0){for(let Me=0,ke=ye.length;Me<ke;Me++)Z[Me]=n.COLOR_ATTACHMENT0+Me;Z.length=ye.length,ne=!0}}else Z[0]!==n.BACK&&(Z[0]=n.BACK,ne=!0);ne&&n.drawBuffers(Z)}function ft(F){return g!==F?(n.useProgram(F),g=F,!0):!1}const w={[Ri]:n.FUNC_ADD,[zm]:n.FUNC_SUBTRACT,[Vm]:n.FUNC_REVERSE_SUBTRACT};w[Hm]=n.MIN,w[km]=n.MAX;const P={[Gm]:n.ZERO,[Wm]:n.ONE,[Xm]:n.SRC_COLOR,[Oa]:n.SRC_ALPHA,[Zm]:n.SRC_ALPHA_SATURATE,[Km]:n.DST_COLOR,[Ym]:n.DST_ALPHA,[qm]:n.ONE_MINUS_SRC_COLOR,[Ba]:n.ONE_MINUS_SRC_ALPHA,[$m]:n.ONE_MINUS_DST_COLOR,[jm]:n.ONE_MINUS_DST_ALPHA,[Jm]:n.CONSTANT_COLOR,[Qm]:n.ONE_MINUS_CONSTANT_COLOR,[eg]:n.CONSTANT_ALPHA,[tg]:n.ONE_MINUS_CONSTANT_ALPHA};function M(F,ve,Z,ne,ye,Me,ke,pt,At,st){if(F===ai){v===!0&&(Ae(n.BLEND),v=!1);return}if(v===!1&&(he(n.BLEND),v=!0),F!==Bm){if(F!==m||st!==b){if((p!==Ri||E!==Ri)&&(n.blendEquation(n.FUNC_ADD),p=Ri,E=Ri),st)switch(F){case lr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wc:n.blendFunc(n.ONE,n.ONE);break;case Xc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case qc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case lr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Xc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case qc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}A=null,T=null,L=null,I=null,C.set(0,0,0),U=0,m=F,b=st}return}ye=ye||ve,Me=Me||Z,ke=ke||ne,(ve!==p||ye!==E)&&(n.blendEquationSeparate(w[ve],w[ye]),p=ve,E=ye),(Z!==A||ne!==T||Me!==L||ke!==I)&&(n.blendFuncSeparate(P[Z],P[ne],P[Me],P[ke]),A=Z,T=ne,L=Me,I=ke),(pt.equals(C)===!1||At!==U)&&(n.blendColor(pt.r,pt.g,pt.b,At),C.copy(pt),U=At),m=F,b=!1}function re(F,ve){F.side===Hn?Ae(n.CULL_FACE):he(n.CULL_FACE);let Z=F.side===Wt;ve&&(Z=!Z),Y(Z),F.blending===lr&&F.transparent===!1?M(ai):M(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);const ne=F.stencilWrite;a.setTest(ne),ne&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),se(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?he(n.SAMPLE_ALPHA_TO_COVERAGE):Ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function Y(F){S!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),S=F)}function K(F){F!==Fm?(he(n.CULL_FACE),F!==D&&(F===Gc?n.cullFace(n.BACK):F===Nm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ae(n.CULL_FACE),D=F}function $(F){F!==J&&(j&&n.lineWidth(F),J=F)}function se(F,ve,Z){F?(he(n.POLYGON_OFFSET_FILL),(W!==ve||te!==Z)&&(n.polygonOffset(ve,Z),W=ve,te=Z)):Ae(n.POLYGON_OFFSET_FILL)}function q(F){F?he(n.SCISSOR_TEST):Ae(n.SCISSOR_TEST)}function x(F){F===void 0&&(F=n.TEXTURE0+ie-1),ue!==F&&(n.activeTexture(F),ue=F)}function _(F,ve,Z){Z===void 0&&(ue===null?Z=n.TEXTURE0+ie-1:Z=ue);let ne=me[Z];ne===void 0&&(ne={type:void 0,texture:void 0},me[Z]=ne),(ne.type!==F||ne.texture!==ve)&&(ue!==Z&&(n.activeTexture(Z),ue=Z),n.bindTexture(F,ve||Se[F]),ne.type=F,ne.texture=ve)}function R(){const F=me[ue];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function z(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function G(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function H(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function fe(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function oe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function de(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Le(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ae(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _e(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function we(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function De(F){Ke.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),Ke.copy(F))}function pe(F){ee.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),ee.copy(F))}function Ne(F,ve){let Z=c.get(ve);Z===void 0&&(Z=new WeakMap,c.set(ve,Z));let ne=Z.get(F);ne===void 0&&(ne=n.getUniformBlockIndex(ve,F.name),Z.set(F,ne))}function Ve(F,ve){const ne=c.get(ve).get(F);l.get(ve)!==ne&&(n.uniformBlockBinding(ve,ne,F.__bindingPointIndex),l.set(ve,ne))}function at(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ue=null,me={},f={},h=new WeakMap,d=[],g=null,v=!1,m=null,p=null,A=null,T=null,E=null,L=null,I=null,C=new Fe(0,0,0),U=0,b=!1,S=null,D=null,J=null,W=null,te=null,Ke.set(0,0,n.canvas.width,n.canvas.height),ee.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:he,disable:Ae,bindFramebuffer:Ue,drawBuffers:ze,useProgram:ft,setBlending:M,setMaterial:re,setFlipSided:Y,setCullFace:K,setLineWidth:$,setPolygonOffset:se,setScissorTest:q,activeTexture:x,bindTexture:_,unbindTexture:R,compressedTexImage2D:z,compressedTexImage3D:G,texImage2D:_e,texImage3D:we,updateUBOMapping:Ne,uniformBlockBinding:Ve,texStorage2D:Le,texStorage3D:ae,texSubImage2D:H,texSubImage3D:fe,compressedTexSubImage2D:oe,compressedTexSubImage3D:de,scissor:De,viewport:pe,reset:at}}function by(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ze,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(x,_){return d?new OffscreenCanvas(x,_):is("canvas")}function v(x,_,R){let z=1;const G=q(x);if((G.width>R||G.height>R)&&(z=R/Math.max(G.width,G.height)),z<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){const H=Math.floor(z*G.width),fe=Math.floor(z*G.height);f===void 0&&(f=g(H,fe));const oe=_?g(H,fe):f;return oe.width=H,oe.height=fe,oe.getContext("2d").drawImage(x,0,0,H,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+G.width+"x"+G.height+") to ("+H+"x"+fe+")."),oe}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+G.width+"x"+G.height+")."),x;return x}function m(x){return x.generateMipmaps}function p(x){n.generateMipmap(x)}function A(x){return x.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?n.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(x,_,R,z,G=!1){if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let H=_;if(_===n.RED&&(R===n.FLOAT&&(H=n.R32F),R===n.HALF_FLOAT&&(H=n.R16F),R===n.UNSIGNED_BYTE&&(H=n.R8)),_===n.RED_INTEGER&&(R===n.UNSIGNED_BYTE&&(H=n.R8UI),R===n.UNSIGNED_SHORT&&(H=n.R16UI),R===n.UNSIGNED_INT&&(H=n.R32UI),R===n.BYTE&&(H=n.R8I),R===n.SHORT&&(H=n.R16I),R===n.INT&&(H=n.R32I)),_===n.RG&&(R===n.FLOAT&&(H=n.RG32F),R===n.HALF_FLOAT&&(H=n.RG16F),R===n.UNSIGNED_BYTE&&(H=n.RG8)),_===n.RG_INTEGER&&(R===n.UNSIGNED_BYTE&&(H=n.RG8UI),R===n.UNSIGNED_SHORT&&(H=n.RG16UI),R===n.UNSIGNED_INT&&(H=n.RG32UI),R===n.BYTE&&(H=n.RG8I),R===n.SHORT&&(H=n.RG16I),R===n.INT&&(H=n.RG32I)),_===n.RGB_INTEGER&&(R===n.UNSIGNED_BYTE&&(H=n.RGB8UI),R===n.UNSIGNED_SHORT&&(H=n.RGB16UI),R===n.UNSIGNED_INT&&(H=n.RGB32UI),R===n.BYTE&&(H=n.RGB8I),R===n.SHORT&&(H=n.RGB16I),R===n.INT&&(H=n.RGB32I)),_===n.RGBA_INTEGER&&(R===n.UNSIGNED_BYTE&&(H=n.RGBA8UI),R===n.UNSIGNED_SHORT&&(H=n.RGBA16UI),R===n.UNSIGNED_INT&&(H=n.RGBA32UI),R===n.BYTE&&(H=n.RGBA8I),R===n.SHORT&&(H=n.RGBA16I),R===n.INT&&(H=n.RGBA32I)),_===n.RGB&&R===n.UNSIGNED_INT_5_9_9_9_REV&&(H=n.RGB9_E5),_===n.RGBA){const fe=G?ao:et.getTransfer(z);R===n.FLOAT&&(H=n.RGBA32F),R===n.HALF_FLOAT&&(H=n.RGBA16F),R===n.UNSIGNED_BYTE&&(H=fe===ot?n.SRGB8_ALPHA8:n.RGBA8),R===n.UNSIGNED_SHORT_4_4_4_4&&(H=n.RGBA4),R===n.UNSIGNED_SHORT_5_5_5_1&&(H=n.RGB5_A1)}return(H===n.R16F||H===n.R32F||H===n.RG16F||H===n.RG32F||H===n.RGBA16F||H===n.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function E(x,_){let R;return x?_===null||_===Di||_===mr?R=n.DEPTH24_STENCIL8:_===En?R=n.DEPTH32F_STENCIL8:_===ns&&(R=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Di||_===mr?R=n.DEPTH_COMPONENT24:_===En?R=n.DEPTH_COMPONENT32F:_===ns&&(R=n.DEPTH_COMPONENT16),R}function L(x,_){return m(x)===!0||x.isFramebufferTexture&&x.minFilter!==Zt&&x.minFilter!==Sn?Math.log2(Math.max(_.width,_.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?_.mipmaps.length:1}function I(x){const _=x.target;_.removeEventListener("dispose",I),U(_),_.isVideoTexture&&u.delete(_)}function C(x){const _=x.target;_.removeEventListener("dispose",C),S(_)}function U(x){const _=i.get(x);if(_.__webglInit===void 0)return;const R=x.source,z=h.get(R);if(z){const G=z[_.__cacheKey];G.usedTimes--,G.usedTimes===0&&b(x),Object.keys(z).length===0&&h.delete(R)}i.remove(x)}function b(x){const _=i.get(x);n.deleteTexture(_.__webglTexture);const R=x.source,z=h.get(R);delete z[_.__cacheKey],o.memory.textures--}function S(x){const _=i.get(x);if(x.depthTexture&&(x.depthTexture.dispose(),i.remove(x.depthTexture)),x.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(_.__webglFramebuffer[z]))for(let G=0;G<_.__webglFramebuffer[z].length;G++)n.deleteFramebuffer(_.__webglFramebuffer[z][G]);else n.deleteFramebuffer(_.__webglFramebuffer[z]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[z])}else{if(Array.isArray(_.__webglFramebuffer))for(let z=0;z<_.__webglFramebuffer.length;z++)n.deleteFramebuffer(_.__webglFramebuffer[z]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let z=0;z<_.__webglColorRenderbuffer.length;z++)_.__webglColorRenderbuffer[z]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[z]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const R=x.textures;for(let z=0,G=R.length;z<G;z++){const H=i.get(R[z]);H.__webglTexture&&(n.deleteTexture(H.__webglTexture),o.memory.textures--),i.remove(R[z])}i.remove(x)}let D=0;function J(){D=0}function W(){const x=D;return x>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+r.maxTextures),D+=1,x}function te(x){const _=[];return _.push(x.wrapS),_.push(x.wrapT),_.push(x.wrapR||0),_.push(x.magFilter),_.push(x.minFilter),_.push(x.anisotropy),_.push(x.internalFormat),_.push(x.format),_.push(x.type),_.push(x.generateMipmaps),_.push(x.premultiplyAlpha),_.push(x.flipY),_.push(x.unpackAlignment),_.push(x.colorSpace),_.join()}function ie(x,_){const R=i.get(x);if(x.isVideoTexture&&$(x),x.isRenderTargetTexture===!1&&x.version>0&&R.__version!==x.version){const z=x.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(R,x,_);return}}t.bindTexture(n.TEXTURE_2D,R.__webglTexture,n.TEXTURE0+_)}function j(x,_){const R=i.get(x);if(x.version>0&&R.__version!==x.version){ee(R,x,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,R.__webglTexture,n.TEXTURE0+_)}function Q(x,_){const R=i.get(x);if(x.version>0&&R.__version!==x.version){ee(R,x,_);return}t.bindTexture(n.TEXTURE_3D,R.__webglTexture,n.TEXTURE0+_)}function V(x,_){const R=i.get(x);if(x.version>0&&R.__version!==x.version){ce(R,x,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+_)}const ue={[ts]:n.REPEAT,[kn]:n.CLAMP_TO_EDGE,[Ya]:n.MIRRORED_REPEAT},me={[Zt]:n.NEAREST,[hg]:n.NEAREST_MIPMAP_NEAREST,[vs]:n.NEAREST_MIPMAP_LINEAR,[Sn]:n.LINEAR,[Ho]:n.LINEAR_MIPMAP_NEAREST,[Pi]:n.LINEAR_MIPMAP_LINEAR},Te={[_g]:n.NEVER,[Eg]:n.ALWAYS,[vg]:n.LESS,[Mh]:n.LEQUAL,[xg]:n.EQUAL,[Sg]:n.GEQUAL,[Mg]:n.GREATER,[yg]:n.NOTEQUAL};function Ce(x,_){if(_.type===En&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Sn||_.magFilter===Ho||_.magFilter===vs||_.magFilter===Pi||_.minFilter===Sn||_.minFilter===Ho||_.minFilter===vs||_.minFilter===Pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(x,n.TEXTURE_WRAP_S,ue[_.wrapS]),n.texParameteri(x,n.TEXTURE_WRAP_T,ue[_.wrapT]),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,ue[_.wrapR]),n.texParameteri(x,n.TEXTURE_MAG_FILTER,me[_.magFilter]),n.texParameteri(x,n.TEXTURE_MIN_FILTER,me[_.minFilter]),_.compareFunction&&(n.texParameteri(x,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(x,n.TEXTURE_COMPARE_FUNC,Te[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Zt||_.minFilter!==vs&&_.minFilter!==Pi||_.type===En&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const R=e.get("EXT_texture_filter_anisotropic");n.texParameterf(x,R.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Ke(x,_){let R=!1;x.__webglInit===void 0&&(x.__webglInit=!0,_.addEventListener("dispose",I));const z=_.source;let G=h.get(z);G===void 0&&(G={},h.set(z,G));const H=te(_);if(H!==x.__cacheKey){G[H]===void 0&&(G[H]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,R=!0),G[H].usedTimes++;const fe=G[x.__cacheKey];fe!==void 0&&(G[x.__cacheKey].usedTimes--,fe.usedTimes===0&&b(_)),x.__cacheKey=H,x.__webglTexture=G[H].texture}return R}function ee(x,_,R){let z=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(z=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(z=n.TEXTURE_3D);const G=Ke(x,_),H=_.source;t.bindTexture(z,x.__webglTexture,n.TEXTURE0+R);const fe=i.get(H);if(H.version!==fe.__version||G===!0){t.activeTexture(n.TEXTURE0+R);const oe=et.getPrimaries(et.workingColorSpace),de=_.colorSpace===ii?null:et.getPrimaries(_.colorSpace),Le=_.colorSpace===ii||oe===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let ae=v(_.image,!1,r.maxTextureSize);ae=se(_,ae);const _e=s.convert(_.format,_.colorSpace),we=s.convert(_.type);let De=T(_.internalFormat,_e,we,_.colorSpace,_.isVideoTexture);Ce(z,_);let pe;const Ne=_.mipmaps,Ve=_.isVideoTexture!==!0,at=fe.__version===void 0||G===!0,F=H.dataReady,ve=L(_,ae);if(_.isDepthTexture)De=E(_.format===gr,_.type),at&&(Ve?t.texStorage2D(n.TEXTURE_2D,1,De,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,De,ae.width,ae.height,0,_e,we,null));else if(_.isDataTexture)if(Ne.length>0){Ve&&at&&t.texStorage2D(n.TEXTURE_2D,ve,De,Ne[0].width,Ne[0].height);for(let Z=0,ne=Ne.length;Z<ne;Z++)pe=Ne[Z],Ve?F&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,pe.width,pe.height,_e,we,pe.data):t.texImage2D(n.TEXTURE_2D,Z,De,pe.width,pe.height,0,_e,we,pe.data);_.generateMipmaps=!1}else Ve?(at&&t.texStorage2D(n.TEXTURE_2D,ve,De,ae.width,ae.height),F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae.width,ae.height,_e,we,ae.data)):t.texImage2D(n.TEXTURE_2D,0,De,ae.width,ae.height,0,_e,we,ae.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ve&&at&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,De,Ne[0].width,Ne[0].height,ae.depth);for(let Z=0,ne=Ne.length;Z<ne;Z++)if(pe=Ne[Z],_.format!==rn)if(_e!==null)if(Ve){if(F)if(_.layerUpdates.size>0){const ye=Pu(pe.width,pe.height,_.format,_.type);for(const Me of _.layerUpdates){const ke=pe.data.subarray(Me*ye/pe.data.BYTES_PER_ELEMENT,(Me+1)*ye/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,Me,pe.width,pe.height,1,_e,ke)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,pe.width,pe.height,ae.depth,_e,pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Z,De,pe.width,pe.height,ae.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?F&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,pe.width,pe.height,ae.depth,_e,we,pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Z,De,pe.width,pe.height,ae.depth,0,_e,we,pe.data)}else{Ve&&at&&t.texStorage2D(n.TEXTURE_2D,ve,De,Ne[0].width,Ne[0].height);for(let Z=0,ne=Ne.length;Z<ne;Z++)pe=Ne[Z],_.format!==rn?_e!==null?Ve?F&&t.compressedTexSubImage2D(n.TEXTURE_2D,Z,0,0,pe.width,pe.height,_e,pe.data):t.compressedTexImage2D(n.TEXTURE_2D,Z,De,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?F&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,pe.width,pe.height,_e,we,pe.data):t.texImage2D(n.TEXTURE_2D,Z,De,pe.width,pe.height,0,_e,we,pe.data)}else if(_.isDataArrayTexture)if(Ve){if(at&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,De,ae.width,ae.height,ae.depth),F)if(_.layerUpdates.size>0){const Z=Pu(ae.width,ae.height,_.format,_.type);for(const ne of _.layerUpdates){const ye=ae.data.subarray(ne*Z/ae.data.BYTES_PER_ELEMENT,(ne+1)*Z/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ne,ae.width,ae.height,1,_e,we,ye)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,_e,we,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,ae.width,ae.height,ae.depth,0,_e,we,ae.data);else if(_.isData3DTexture)Ve?(at&&t.texStorage3D(n.TEXTURE_3D,ve,De,ae.width,ae.height,ae.depth),F&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,_e,we,ae.data)):t.texImage3D(n.TEXTURE_3D,0,De,ae.width,ae.height,ae.depth,0,_e,we,ae.data);else if(_.isFramebufferTexture){if(at)if(Ve)t.texStorage2D(n.TEXTURE_2D,ve,De,ae.width,ae.height);else{let Z=ae.width,ne=ae.height;for(let ye=0;ye<ve;ye++)t.texImage2D(n.TEXTURE_2D,ye,De,Z,ne,0,_e,we,null),Z>>=1,ne>>=1}}else if(Ne.length>0){if(Ve&&at){const Z=q(Ne[0]);t.texStorage2D(n.TEXTURE_2D,ve,De,Z.width,Z.height)}for(let Z=0,ne=Ne.length;Z<ne;Z++)pe=Ne[Z],Ve?F&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,_e,we,pe):t.texImage2D(n.TEXTURE_2D,Z,De,_e,we,pe);_.generateMipmaps=!1}else if(Ve){if(at){const Z=q(ae);t.texStorage2D(n.TEXTURE_2D,ve,De,Z.width,Z.height)}F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,_e,we,ae)}else t.texImage2D(n.TEXTURE_2D,0,De,_e,we,ae);m(_)&&p(z),fe.__version=H.version,_.onUpdate&&_.onUpdate(_)}x.__version=_.version}function ce(x,_,R){if(_.image.length!==6)return;const z=Ke(x,_),G=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture,n.TEXTURE0+R);const H=i.get(G);if(G.version!==H.__version||z===!0){t.activeTexture(n.TEXTURE0+R);const fe=et.getPrimaries(et.workingColorSpace),oe=_.colorSpace===ii?null:et.getPrimaries(_.colorSpace),de=_.colorSpace===ii||fe===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Le=_.isCompressedTexture||_.image[0].isCompressedTexture,ae=_.image[0]&&_.image[0].isDataTexture,_e=[];for(let ne=0;ne<6;ne++)!Le&&!ae?_e[ne]=v(_.image[ne],!0,r.maxCubemapSize):_e[ne]=ae?_.image[ne].image:_.image[ne],_e[ne]=se(_,_e[ne]);const we=_e[0],De=s.convert(_.format,_.colorSpace),pe=s.convert(_.type),Ne=T(_.internalFormat,De,pe,_.colorSpace),Ve=_.isVideoTexture!==!0,at=H.__version===void 0||z===!0,F=G.dataReady;let ve=L(_,we);Ce(n.TEXTURE_CUBE_MAP,_);let Z;if(Le){Ve&&at&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,Ne,we.width,we.height);for(let ne=0;ne<6;ne++){Z=_e[ne].mipmaps;for(let ye=0;ye<Z.length;ye++){const Me=Z[ye];_.format!==rn?De!==null?Ve?F&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye,0,0,Me.width,Me.height,De,Me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye,Ne,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye,0,0,Me.width,Me.height,De,pe,Me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye,Ne,Me.width,Me.height,0,De,pe,Me.data)}}}else{if(Z=_.mipmaps,Ve&&at){Z.length>0&&ve++;const ne=q(_e[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,Ne,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(ae){Ve?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,_e[ne].width,_e[ne].height,De,pe,_e[ne].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ne,_e[ne].width,_e[ne].height,0,De,pe,_e[ne].data);for(let ye=0;ye<Z.length;ye++){const ke=Z[ye].image[ne].image;Ve?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye+1,0,0,ke.width,ke.height,De,pe,ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye+1,Ne,ke.width,ke.height,0,De,pe,ke.data)}}else{Ve?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,De,pe,_e[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ne,De,pe,_e[ne]);for(let ye=0;ye<Z.length;ye++){const Me=Z[ye];Ve?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye+1,0,0,De,pe,Me.image[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye+1,Ne,De,pe,Me.image[ne])}}}m(_)&&p(n.TEXTURE_CUBE_MAP),H.__version=G.version,_.onUpdate&&_.onUpdate(_)}x.__version=_.version}function Se(x,_,R,z,G,H){const fe=s.convert(R.format,R.colorSpace),oe=s.convert(R.type),de=T(R.internalFormat,fe,oe,R.colorSpace),Le=i.get(_),ae=i.get(R);if(ae.__renderTarget=_,!Le.__hasExternalTextures){const _e=Math.max(1,_.width>>H),we=Math.max(1,_.height>>H);G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?t.texImage3D(G,H,de,_e,we,_.depth,0,fe,oe,null):t.texImage2D(G,H,de,_e,we,0,fe,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,x),K(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,z,G,ae.__webglTexture,0,Y(_)):(G===n.TEXTURE_2D||G>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&G<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,z,G,ae.__webglTexture,H),t.bindFramebuffer(n.FRAMEBUFFER,null)}function he(x,_,R){if(n.bindRenderbuffer(n.RENDERBUFFER,x),_.depthBuffer){const z=_.depthTexture,G=z&&z.isDepthTexture?z.type:null,H=E(_.stencilBuffer,G),fe=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=Y(_);K(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,H,_.width,_.height):R?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,H,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,H,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,fe,n.RENDERBUFFER,x)}else{const z=_.textures;for(let G=0;G<z.length;G++){const H=z[G],fe=s.convert(H.format,H.colorSpace),oe=s.convert(H.type),de=T(H.internalFormat,fe,oe,H.colorSpace),Le=Y(_);R&&K(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,de,_.width,_.height):K(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Le,de,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,de,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ae(x,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,x),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const z=i.get(_.depthTexture);z.__renderTarget=_,(!z.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),ie(_.depthTexture,0);const G=z.__webglTexture,H=Y(_);if(_.depthTexture.format===cr)K(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,G,0,H):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,G,0);else if(_.depthTexture.format===gr)K(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,G,0,H):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,G,0);else throw new Error("Unknown depthTexture format")}function Ue(x){const _=i.get(x),R=x.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==x.depthTexture){const z=x.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),z){const G=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,z.removeEventListener("dispose",G)};z.addEventListener("dispose",G),_.__depthDisposeCallback=G}_.__boundDepthTexture=z}if(x.depthTexture&&!_.__autoAllocateDepthBuffer){if(R)throw new Error("target.depthTexture not supported in Cube render targets");Ae(_.__webglFramebuffer,x)}else if(R){_.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[z]),_.__webglDepthbuffer[z]===void 0)_.__webglDepthbuffer[z]=n.createRenderbuffer(),he(_.__webglDepthbuffer[z],x,!1);else{const G=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=_.__webglDepthbuffer[z];n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,G,n.RENDERBUFFER,H)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),he(_.__webglDepthbuffer,x,!1);else{const z=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,z,n.RENDERBUFFER,G)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ze(x,_,R){const z=i.get(x);_!==void 0&&Se(z.__webglFramebuffer,x,x.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),R!==void 0&&Ue(x)}function ft(x){const _=x.texture,R=i.get(x),z=i.get(_);x.addEventListener("dispose",C);const G=x.textures,H=x.isWebGLCubeRenderTarget===!0,fe=G.length>1;if(fe||(z.__webglTexture===void 0&&(z.__webglTexture=n.createTexture()),z.__version=_.version,o.memory.textures++),H){R.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(_.mipmaps&&_.mipmaps.length>0){R.__webglFramebuffer[oe]=[];for(let de=0;de<_.mipmaps.length;de++)R.__webglFramebuffer[oe][de]=n.createFramebuffer()}else R.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){R.__webglFramebuffer=[];for(let oe=0;oe<_.mipmaps.length;oe++)R.__webglFramebuffer[oe]=n.createFramebuffer()}else R.__webglFramebuffer=n.createFramebuffer();if(fe)for(let oe=0,de=G.length;oe<de;oe++){const Le=i.get(G[oe]);Le.__webglTexture===void 0&&(Le.__webglTexture=n.createTexture(),o.memory.textures++)}if(x.samples>0&&K(x)===!1){R.__webglMultisampledFramebuffer=n.createFramebuffer(),R.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,R.__webglMultisampledFramebuffer);for(let oe=0;oe<G.length;oe++){const de=G[oe];R.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,R.__webglColorRenderbuffer[oe]);const Le=s.convert(de.format,de.colorSpace),ae=s.convert(de.type),_e=T(de.internalFormat,Le,ae,de.colorSpace,x.isXRRenderTarget===!0),we=Y(x);n.renderbufferStorageMultisample(n.RENDERBUFFER,we,_e,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,R.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),x.depthBuffer&&(R.__webglDepthRenderbuffer=n.createRenderbuffer(),he(R.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(H){t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture),Ce(n.TEXTURE_CUBE_MAP,_);for(let oe=0;oe<6;oe++)if(_.mipmaps&&_.mipmaps.length>0)for(let de=0;de<_.mipmaps.length;de++)Se(R.__webglFramebuffer[oe][de],x,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,de);else Se(R.__webglFramebuffer[oe],x,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(_)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let oe=0,de=G.length;oe<de;oe++){const Le=G[oe],ae=i.get(Le);t.bindTexture(n.TEXTURE_2D,ae.__webglTexture),Ce(n.TEXTURE_2D,Le),Se(R.__webglFramebuffer,x,Le,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,0),m(Le)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(oe=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,z.__webglTexture),Ce(oe,_),_.mipmaps&&_.mipmaps.length>0)for(let de=0;de<_.mipmaps.length;de++)Se(R.__webglFramebuffer[de],x,_,n.COLOR_ATTACHMENT0,oe,de);else Se(R.__webglFramebuffer,x,_,n.COLOR_ATTACHMENT0,oe,0);m(_)&&p(oe),t.unbindTexture()}x.depthBuffer&&Ue(x)}function w(x){const _=x.textures;for(let R=0,z=_.length;R<z;R++){const G=_[R];if(m(G)){const H=A(x),fe=i.get(G).__webglTexture;t.bindTexture(H,fe),p(H),t.unbindTexture()}}}const P=[],M=[];function re(x){if(x.samples>0){if(K(x)===!1){const _=x.textures,R=x.width,z=x.height;let G=n.COLOR_BUFFER_BIT;const H=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=i.get(x),oe=_.length>1;if(oe)for(let de=0;de<_.length;de++)t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let de=0;de<_.length;de++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(G|=n.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(G|=n.STENCIL_BUFFER_BIT)),oe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,fe.__webglColorRenderbuffer[de]);const Le=i.get(_[de]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Le,0)}n.blitFramebuffer(0,0,R,z,0,0,R,z,G,n.NEAREST),l===!0&&(P.length=0,M.length=0,P.push(n.COLOR_ATTACHMENT0+de),x.depthBuffer&&x.resolveDepthBuffer===!1&&(P.push(H),M.push(H),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,M)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,P))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let de=0;de<_.length;de++){t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,fe.__webglColorRenderbuffer[de]);const Le=i.get(_[de]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,Le,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&l){const _=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function Y(x){return Math.min(r.maxSamples,x.samples)}function K(x){const _=i.get(x);return x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function $(x){const _=o.render.frame;u.get(x)!==_&&(u.set(x,_),x.update())}function se(x,_){const R=x.colorSpace,z=x.format,G=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||R!==_r&&R!==ii&&(et.getTransfer(R)===ot?(z!==rn||G!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",R)),_}function q(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(c.width=x.naturalWidth||x.width,c.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(c.width=x.displayWidth,c.height=x.displayHeight):(c.width=x.width,c.height=x.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=J,this.setTexture2D=ie,this.setTexture2DArray=j,this.setTexture3D=Q,this.setTextureCube=V,this.rebindTextures=ze,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=w,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=K}function Ay(n,e){function t(i,r=ii){let s;const o=et.getTransfer(r);if(i===Xn)return n.UNSIGNED_BYTE;if(i===Yl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===jl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===hh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===uh)return n.BYTE;if(i===fh)return n.SHORT;if(i===ns)return n.UNSIGNED_SHORT;if(i===ql)return n.INT;if(i===Di)return n.UNSIGNED_INT;if(i===En)return n.FLOAT;if(i===ls)return n.HALF_FLOAT;if(i===dh)return n.ALPHA;if(i===ph)return n.RGB;if(i===rn)return n.RGBA;if(i===mh)return n.LUMINANCE;if(i===gh)return n.LUMINANCE_ALPHA;if(i===cr)return n.DEPTH_COMPONENT;if(i===gr)return n.DEPTH_STENCIL;if(i===_h)return n.RED;if(i===Kl)return n.RED_INTEGER;if(i===vh)return n.RG;if(i===$l)return n.RG_INTEGER;if(i===Zl)return n.RGBA_INTEGER;if(i===Ys||i===js||i===Ks||i===$s)if(o===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ys)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===js)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ks)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===$s)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ys)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===js)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ks)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===$s)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ja||i===Ka||i===$a||i===Za)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ja)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ka)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===$a)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Za)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ja||i===Qa||i===el)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ja||i===Qa)return o===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===el)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===tl||i===nl||i===il||i===rl||i===sl||i===ol||i===al||i===ll||i===cl||i===ul||i===fl||i===hl||i===dl||i===pl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===tl)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===nl)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===il)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===rl)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===sl)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ol)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===al)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ll)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===cl)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ul)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===fl)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===hl)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===dl)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===pl)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Zs||i===ml||i===gl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Zs)return o===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ml)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===gl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===xh||i===_l||i===vl||i===xl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Zs)return s.COMPRESSED_RED_RGTC1_EXT;if(i===_l)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===vl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===xl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===mr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const wy={type:"move"};class ya{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ir,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ir,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ir,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wy)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ir;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Ry=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cy=`
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

}`;class Py{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Et,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new fi({vertexShader:Ry,fragmentShader:Cy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dn(new To(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Iy extends yr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const v=new Py,m=t.getContextAttributes();let p=null,A=null;const T=[],E=[],L=new Ze;let I=null;const C=new Bt;C.viewport=new je;const U=new Bt;U.viewport=new je;const b=[C,U],S=new G_;let D=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let ce=T[ee];return ce===void 0&&(ce=new ya,T[ee]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(ee){let ce=T[ee];return ce===void 0&&(ce=new ya,T[ee]=ce),ce.getGripSpace()},this.getHand=function(ee){let ce=T[ee];return ce===void 0&&(ce=new ya,T[ee]=ce),ce.getHandSpace()};function W(ee){const ce=E.indexOf(ee.inputSource);if(ce===-1)return;const Se=T[ce];Se!==void 0&&(Se.update(ee.inputSource,ee.frame,c||o),Se.dispatchEvent({type:ee.type,data:ee.inputSource}))}function te(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",te),r.removeEventListener("inputsourceschange",ie);for(let ee=0;ee<T.length;ee++){const ce=E[ee];ce!==null&&(E[ee]=null,T[ee].disconnect(ce))}D=null,J=null,v.reset(),e.setRenderTarget(p),d=null,h=null,f=null,r=null,A=null,Ke.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){s=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",te),r.addEventListener("inputsourceschange",ie),m.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(L),r.enabledFeatures!==void 0&&r.enabledFeatures.includes("layers")){let Se=null,he=null,Ae=null;m.depth&&(Ae=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=m.stencil?gr:cr,he=m.stencil?mr:Di);const Ue={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(Ue),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),A=new Ui(h.textureWidth,h.textureHeight,{format:rn,type:Xn,depthTexture:new Lh(h.textureWidth,h.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}else{const Se={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,Se),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),A=new Ui(d.framebufferWidth,d.framebufferHeight,{format:rn,type:Xn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ke.setContext(r),Ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function ie(ee){for(let ce=0;ce<ee.removed.length;ce++){const Se=ee.removed[ce],he=E.indexOf(Se);he>=0&&(E[he]=null,T[he].disconnect(Se))}for(let ce=0;ce<ee.added.length;ce++){const Se=ee.added[ce];let he=E.indexOf(Se);if(he===-1){for(let Ue=0;Ue<T.length;Ue++)if(Ue>=E.length){E.push(Se),he=Ue;break}else if(E[Ue]===null){E[Ue]=Se,he=Ue;break}if(he===-1)break}const Ae=T[he];Ae&&Ae.connect(Se)}}const j=new O,Q=new O;function V(ee,ce,Se){j.setFromMatrixPosition(ce.matrixWorld),Q.setFromMatrixPosition(Se.matrixWorld);const he=j.distanceTo(Q),Ae=ce.projectionMatrix.elements,Ue=Se.projectionMatrix.elements,ze=Ae[14]/(Ae[10]-1),ft=Ae[14]/(Ae[10]+1),w=(Ae[9]+1)/Ae[5],P=(Ae[9]-1)/Ae[5],M=(Ae[8]-1)/Ae[0],re=(Ue[8]+1)/Ue[0],Y=ze*M,K=ze*re,$=he/(-M+re),se=$*-M;if(ce.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(se),ee.translateZ($),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Ae[10]===-1)ee.projectionMatrix.copy(ce.projectionMatrix),ee.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const q=ze+$,x=ft+$,_=Y-se,R=K+(he-se),z=w*ft/x*q,G=P*ft/x*q;ee.projectionMatrix.makePerspective(_,R,z,G,q,x),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function ue(ee,ce){ce===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(ce.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;let ce=ee.near,Se=ee.far;v.texture!==null&&(v.depthNear>0&&(ce=v.depthNear),v.depthFar>0&&(Se=v.depthFar)),S.near=U.near=C.near=ce,S.far=U.far=C.far=Se,(D!==S.near||J!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),D=S.near,J=S.far),C.layers.mask=ee.layers.mask|2,U.layers.mask=ee.layers.mask|4,S.layers.mask=C.layers.mask|U.layers.mask;const he=ee.parent,Ae=S.cameras;ue(S,he);for(let Ue=0;Ue<Ae.length;Ue++)ue(Ae[Ue],he);Ae.length===2?V(S,C,U):S.projectionMatrix.copy(C.projectionMatrix),me(ee,S,he)};function me(ee,ce,Se){Se===null?ee.matrix.copy(ce.matrixWorld):(ee.matrix.copy(Se.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(ce.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(ce.projectionMatrix),ee.projectionMatrixInverse.copy(ce.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=vr*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(ee){l=ee,h!==null&&(h.fixedFoveation=ee),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ee)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let Te=null;function Ce(ee,ce){if(u=ce.getViewerPose(c||o),g=ce,u!==null){const Se=u.views;d!==null&&(e.setRenderTargetFramebuffer(A,d.framebuffer),e.setRenderTarget(A));let he=!1;Se.length!==S.cameras.length&&(S.cameras.length=0,he=!0);for(let Ue=0;Ue<Se.length;Ue++){const ze=Se[Ue];let ft=null;if(d!==null)ft=d.getViewport(ze);else{const P=f.getViewSubImage(h,ze);ft=P.viewport,Ue===0&&(e.setRenderTargetTextures(A,P.colorTexture,h.ignoreDepthValues?void 0:P.depthStencilTexture),e.setRenderTarget(A))}let w=b[Ue];w===void 0&&(w=new Bt,w.layers.enable(Ue),w.viewport=new je,b[Ue]=w),w.matrix.fromArray(ze.transform.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale),w.projectionMatrix.fromArray(ze.projectionMatrix),w.projectionMatrixInverse.copy(w.projectionMatrix).invert(),w.viewport.set(ft.x,ft.y,ft.width,ft.height),Ue===0&&(S.matrix.copy(w.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),he===!0&&S.cameras.push(w)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Ue=f.getDepthInformation(Se[0]);Ue&&Ue.isValid&&Ue.texture&&v.init(e,Ue,r.renderState)}}for(let Se=0;Se<T.length;Se++){const he=E[Se],Ae=T[Se];he!==null&&Ae!==void 0&&Ae.update(he,ce,c||o)}Te&&Te(ee,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),g=null}const Ke=new Bh;Ke.setAnimationLoop(Ce),this.setAnimationLoop=function(ee){Te=ee},this.dispose=function(){}}}const Ti=new Pt,Ly=new Re;function Dy(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Rh(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,A,T,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,E)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,A,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Wt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Wt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const A=e.get(p),T=A.envMap,E=A.envMapRotation;T&&(m.envMap.value=T,Ti.copy(E),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),m.envMapRotation.value.setFromMatrix4(Ly.makeRotationFromEuler(Ti)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,A,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*A,m.scale.value=T*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,A){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Wt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const A=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Uy(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,T){const E=T.program;i.uniformBlockBinding(A,E)}function c(A,T){let E=r[A.id];E===void 0&&(g(A),E=u(A),r[A.id]=E,A.addEventListener("dispose",m));const L=T.program;i.updateUBOMapping(A,L);const I=e.render.frame;s[A.id]!==I&&(h(A),s[A.id]=I)}function u(A){const T=f();A.__bindingPointIndex=T;const E=n.createBuffer(),L=A.__size,I=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,L,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,E),E}function f(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(A){const T=r[A.id],E=A.uniforms,L=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let I=0,C=E.length;I<C;I++){const U=Array.isArray(E[I])?E[I]:[E[I]];for(let b=0,S=U.length;b<S;b++){const D=U[b];if(d(D,I,b,L)===!0){const J=D.__offset,W=Array.isArray(D.value)?D.value:[D.value];let te=0;for(let ie=0;ie<W.length;ie++){const j=W[ie],Q=v(j);typeof j=="number"||typeof j=="boolean"?(D.__data[0]=j,n.bufferSubData(n.UNIFORM_BUFFER,J+te,D.__data)):j.isMatrix3?(D.__data[0]=j.elements[0],D.__data[1]=j.elements[1],D.__data[2]=j.elements[2],D.__data[3]=0,D.__data[4]=j.elements[3],D.__data[5]=j.elements[4],D.__data[6]=j.elements[5],D.__data[7]=0,D.__data[8]=j.elements[6],D.__data[9]=j.elements[7],D.__data[10]=j.elements[8],D.__data[11]=0):(j.toArray(D.__data,te),te+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,J,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(A,T,E,L){const I=A.value,C=T+"_"+E;if(L[C]===void 0)return typeof I=="number"||typeof I=="boolean"?L[C]=I:L[C]=I.clone(),!0;{const U=L[C];if(typeof I=="number"||typeof I=="boolean"){if(U!==I)return L[C]=I,!0}else if(U.equals(I)===!1)return U.copy(I),!0}return!1}function g(A){const T=A.uniforms;let E=0;const L=16;for(let C=0,U=T.length;C<U;C++){const b=Array.isArray(T[C])?T[C]:[T[C]];for(let S=0,D=b.length;S<D;S++){const J=b[S],W=Array.isArray(J.value)?J.value:[J.value];for(let te=0,ie=W.length;te<ie;te++){const j=W[te],Q=v(j),V=E%L,ue=V%Q.boundary,me=V+ue;E+=ue,me!==0&&L-me<Q.storage&&(E+=L-me),J.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=E,E+=Q.storage}}}const I=E%L;return I>0&&(E+=L-I),A.__size=E,A.__cache={},this}function v(A){const T={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(T.boundary=4,T.storage=4):A.isVector2?(T.boundary=8,T.storage=8):A.isVector3||A.isColor?(T.boundary=16,T.storage=12):A.isVector4?(T.boundary=16,T.storage=16):A.isMatrix3?(T.boundary=48,T.storage=48):A.isMatrix4?(T.boundary=64,T.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),T}function m(A){const T=A.target;T.removeEventListener("dispose",m);const E=o.indexOf(T.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function p(){for(const A in r)n.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class Fy{constructor(e={}){const{canvas:t=Vg(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const A=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=tn,this.toneMapping=li,this.toneMappingExposure=1;const E=this;let L=!1,I=0,C=0,U=null,b=-1,S=null;const D=new je,J=new je;let W=null;const te=new Fe(0);let ie=0,j=t.width,Q=t.height,V=1,ue=null,me=null;const Te=new je(0,0,j,Q),Ce=new je(0,0,j,Q);let Ke=!1;const ee=new ic;let ce=!1,Se=!1;this.transmissionResolutionScale=1;const he=new Re,Ae=new Re,Ue=new O,ze=new je,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let w=!1;function P(){return U===null?V:1}let M=i;function re(y,N){return t.getContext(y,N)}try{const y={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${yo}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",Me,!1),M===null){const N="webgl2";if(M=re(N,y),M===null)throw re(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Y,K,$,se,q,x,_,R,z,G,H,fe,oe,de,Le,ae,_e,we,De,pe,Ne,Ve,at,F;function ve(){Y=new Wx(M),Y.init(),Ve=new Ay(M,Y),K=new Bx(M,Y,e,Ve),$=new Ty(M,Y),K.reverseDepthBuffer&&h&&$.buffers.depth.setReversed(!0),se=new Yx(M),q=new fy,x=new by(M,Y,$,q,K,Ve,se),_=new Vx(E),R=new Gx(E),z=new ev(M),at=new Nx(M,z),G=new Xx(M,z,se,at),H=new Kx(M,G,z,se),De=new jx(M,K,x),ae=new zx(q),fe=new uy(E,_,R,Y,K,at,ae),oe=new Dy(E,q),de=new dy,Le=new xy(Y),we=new Fx(E,_,R,$,H,d,l),_e=new Sy(E,H,K),F=new Uy(M,se,K,$),pe=new Ox(M,Y,se),Ne=new qx(M,Y,se),se.programs=fe.programs,E.capabilities=K,E.extensions=Y,E.properties=q,E.renderLists=de,E.shadowMap=_e,E.state=$,E.info=se}ve();const Z=new Iy(E,M);this.xr=Z,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){const y=Y.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Y.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(y){y!==void 0&&(V=y,this.setSize(j,Q,!1))},this.getSize=function(y){return y.set(j,Q)},this.setSize=function(y,N,k=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=y,Q=N,t.width=Math.floor(y*V),t.height=Math.floor(N*V),k===!0&&(t.style.width=y+"px",t.style.height=N+"px"),this.setViewport(0,0,y,N)},this.getDrawingBufferSize=function(y){return y.set(j*V,Q*V).floor()},this.setDrawingBufferSize=function(y,N,k){j=y,Q=N,V=k,t.width=Math.floor(y*k),t.height=Math.floor(N*k),this.setViewport(0,0,y,N)},this.getCurrentViewport=function(y){return y.copy(D)},this.getViewport=function(y){return y.copy(Te)},this.setViewport=function(y,N,k,X){y.isVector4?Te.set(y.x,y.y,y.z,y.w):Te.set(y,N,k,X),$.viewport(D.copy(Te).multiplyScalar(V).round())},this.getScissor=function(y){return y.copy(Ce)},this.setScissor=function(y,N,k,X){y.isVector4?Ce.set(y.x,y.y,y.z,y.w):Ce.set(y,N,k,X),$.scissor(J.copy(Ce).multiplyScalar(V).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(y){$.setScissorTest(Ke=y)},this.setOpaqueSort=function(y){ue=y},this.setTransparentSort=function(y){me=y},this.getClearColor=function(y){return y.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor.apply(we,arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha.apply(we,arguments)},this.clear=function(y=!0,N=!0,k=!0){let X=0;if(y){let B=!1;if(U!==null){const le=U.texture.format;B=le===Zl||le===$l||le===Kl}if(B){const le=U.texture.type,xe=le===Xn||le===Di||le===ns||le===mr||le===Yl||le===jl,Ee=we.getClearColor(),be=we.getClearAlpha(),Oe=Ee.r,Be=Ee.g,Pe=Ee.b;xe?(g[0]=Oe,g[1]=Be,g[2]=Pe,g[3]=be,M.clearBufferuiv(M.COLOR,0,g)):(v[0]=Oe,v[1]=Be,v[2]=Pe,v[3]=be,M.clearBufferiv(M.COLOR,0,v))}else X|=M.COLOR_BUFFER_BIT}N&&(X|=M.DEPTH_BUFFER_BIT),k&&(X|=M.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),M.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),we.dispose(),de.dispose(),Le.dispose(),q.dispose(),_.dispose(),R.dispose(),H.dispose(),at.dispose(),F.dispose(),fe.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",cc),Z.removeEventListener("sessionend",uc),mi.stop()};function ne(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const y=se.autoReset,N=_e.enabled,k=_e.autoUpdate,X=_e.needsUpdate,B=_e.type;ve(),se.autoReset=y,_e.enabled=N,_e.autoUpdate=k,_e.needsUpdate=X,_e.type=B}function Me(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ke(y){const N=y.target;N.removeEventListener("dispose",ke),pt(N)}function pt(y){At(y),q.remove(y)}function At(y){const N=q.get(y).programs;N!==void 0&&(N.forEach(function(k){fe.releaseProgram(k)}),y.isShaderMaterial&&fe.releaseShaderCache(y))}this.renderBufferDirect=function(y,N,k,X,B,le){N===null&&(N=ft);const xe=B.isMesh&&B.matrixWorld.determinant()<0,Ee=td(y,N,k,X,B);$.setMaterial(X,xe);let be=k.index,Oe=1;if(X.wireframe===!0){if(be=G.getWireframeAttribute(k),be===void 0)return;Oe=2}const Be=k.drawRange,Pe=k.attributes.position;let $e=Be.start*Oe,tt=(Be.start+Be.count)*Oe;le!==null&&($e=Math.max($e,le.start*Oe),tt=Math.min(tt,(le.start+le.count)*Oe)),be!==null?($e=Math.max($e,0),tt=Math.min(tt,be.count)):Pe!=null&&($e=Math.max($e,0),tt=Math.min(tt,Pe.count));const _t=tt-$e;if(_t<0||_t===1/0)return;at.setup(B,X,Ee,k,be);let mt,Je=pe;if(be!==null&&(mt=z.get(be),Je=Ne,Je.setIndex(mt)),B.isMesh)X.wireframe===!0?($.setLineWidth(X.wireframeLinewidth*P()),Je.setMode(M.LINES)):Je.setMode(M.TRIANGLES);else if(B.isLine){let Ie=X.linewidth;Ie===void 0&&(Ie=1),$.setLineWidth(Ie*P()),B.isLineSegments?Je.setMode(M.LINES):B.isLineLoop?Je.setMode(M.LINE_LOOP):Je.setMode(M.LINE_STRIP)}else B.isPoints?Je.setMode(M.POINTS):B.isSprite&&Je.setMode(M.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Je.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Y.get("WEBGL_multi_draw"))Je.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ie=B._multiDrawStarts,bt=B._multiDrawCounts,nt=B._multiDrawCount,an=be?z.get(be).bytesPerElement:1,Oi=q.get(X).currentProgram.getUniforms();for(let Xt=0;Xt<nt;Xt++)Oi.setValue(M,"_gl_DrawID",Xt),Je.render(Ie[Xt]/an,bt[Xt])}else if(B.isInstancedMesh)Je.renderInstances($e,_t,B.count);else if(k.isInstancedBufferGeometry){const Ie=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,bt=Math.min(k.instanceCount,Ie);Je.renderInstances($e,_t,bt)}else Je.render($e,_t)};function st(y,N,k){y.transparent===!0&&y.side===Hn&&y.forceSinglePass===!1?(y.side=Wt,y.needsUpdate=!0,ps(y,N,k),y.side=ui,y.needsUpdate=!0,ps(y,N,k),y.side=Hn):ps(y,N,k)}this.compile=function(y,N,k=null){k===null&&(k=y),p=Le.get(k),p.init(N),T.push(p),k.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),y!==k&&y.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const X=new Set;return y.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const le=B.material;if(le)if(Array.isArray(le))for(let xe=0;xe<le.length;xe++){const Ee=le[xe];st(Ee,k,B),X.add(Ee)}else st(le,k,B),X.add(le)}),T.pop(),p=null,X},this.compileAsync=function(y,N,k=null){const X=this.compile(y,N,k);return new Promise(B=>{function le(){if(X.forEach(function(xe){q.get(xe).currentProgram.isReady()&&X.delete(xe)}),X.size===0){B(y);return}setTimeout(le,10)}Y.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let on=null;function Cn(y){on&&on(y)}function cc(){mi.stop()}function uc(){mi.start()}const mi=new Bh;mi.setAnimationLoop(Cn),typeof self<"u"&&mi.setContext(self),this.setAnimationLoop=function(y){on=y,Z.setAnimationLoop(y),y===null?mi.stop():mi.start()},Z.addEventListener("sessionstart",cc),Z.addEventListener("sessionend",uc),this.render=function(y,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(N),N=Z.getCamera()),y.isScene===!0&&y.onBeforeRender(E,y,N,U),p=Le.get(y,T.length),p.init(N),T.push(p),Ae.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),ee.setFromProjectionMatrix(Ae),Se=this.localClippingEnabled,ce=ae.init(this.clippingPlanes,Se),m=de.get(y,A.length),m.init(),A.push(m),Z.enabled===!0&&Z.isPresenting===!0){const le=E.xr.getDepthSensingMesh();le!==null&&Ro(le,N,-1/0,E.sortObjects)}Ro(y,N,0,E.sortObjects),m.finish(),E.sortObjects===!0&&m.sort(ue,me),w=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,w&&we.addToRenderList(m,y),this.info.render.frame++,ce===!0&&ae.beginShadows();const k=p.state.shadowsArray;_e.render(k,y,N),ce===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,B=m.transmissive;if(p.setupLights(),N.isArrayCamera){const le=N.cameras;if(B.length>0)for(let xe=0,Ee=le.length;xe<Ee;xe++){const be=le[xe];hc(X,B,y,be)}w&&we.render(y);for(let xe=0,Ee=le.length;xe<Ee;xe++){const be=le[xe];fc(m,y,be,be.viewport)}}else B.length>0&&hc(X,B,y,N),w&&we.render(y),fc(m,y,N);U!==null&&C===0&&(x.updateMultisampleRenderTarget(U),x.updateRenderTargetMipmap(U)),y.isScene===!0&&y.onAfterRender(E,y,N),at.resetDefaultState(),b=-1,S=null,T.pop(),T.length>0?(p=T[T.length-1],ce===!0&&ae.setGlobalState(E.clippingPlanes,p.state.camera)):p=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function Ro(y,N,k,X){if(y.visible===!1)return;if(y.layers.test(N.layers)){if(y.isGroup)k=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(N);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||ee.intersectsSprite(y)){X&&ze.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ae);const xe=H.update(y),Ee=y.material;Ee.visible&&m.push(y,xe,Ee,k,ze.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||ee.intersectsObject(y))){const xe=H.update(y),Ee=y.material;if(X&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),ze.copy(y.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),ze.copy(xe.boundingSphere.center)),ze.applyMatrix4(y.matrixWorld).applyMatrix4(Ae)),Array.isArray(Ee)){const be=xe.groups;for(let Oe=0,Be=be.length;Oe<Be;Oe++){const Pe=be[Oe],$e=Ee[Pe.materialIndex];$e&&$e.visible&&m.push(y,xe,$e,k,ze.z,Pe)}}else Ee.visible&&m.push(y,xe,Ee,k,ze.z,null)}}const le=y.children;for(let xe=0,Ee=le.length;xe<Ee;xe++)Ro(le[xe],N,k,X)}function fc(y,N,k,X){const B=y.opaque,le=y.transmissive,xe=y.transparent;p.setupLightsView(k),ce===!0&&ae.setGlobalState(E.clippingPlanes,k),X&&$.viewport(D.copy(X)),B.length>0&&ds(B,N,k),le.length>0&&ds(le,N,k),xe.length>0&&ds(xe,N,k),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function hc(y,N,k,X){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new Ui(1,1,{generateMipmaps:!0,type:Y.has("EXT_color_buffer_half_float")||Y.has("EXT_color_buffer_float")?ls:Xn,minFilter:Pi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const le=p.state.transmissionRenderTarget[X.id],xe=X.viewport||D;le.setSize(xe.z*E.transmissionResolutionScale,xe.w*E.transmissionResolutionScale);const Ee=E.getRenderTarget();E.setRenderTarget(le),E.getClearColor(te),ie=E.getClearAlpha(),ie<1&&E.setClearColor(16777215,.5),E.clear(),w&&we.render(k);const be=E.toneMapping;E.toneMapping=li;const Oe=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),ce===!0&&ae.setGlobalState(E.clippingPlanes,X),ds(y,k,X),x.updateMultisampleRenderTarget(le),x.updateRenderTargetMipmap(le),Y.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Pe=0,$e=N.length;Pe<$e;Pe++){const tt=N[Pe],_t=tt.object,mt=tt.geometry,Je=tt.material,Ie=tt.group;if(Je.side===Hn&&_t.layers.test(X.layers)){const bt=Je.side;Je.side=Wt,Je.needsUpdate=!0,dc(_t,k,X,mt,Je,Ie),Je.side=bt,Je.needsUpdate=!0,Be=!0}}Be===!0&&(x.updateMultisampleRenderTarget(le),x.updateRenderTargetMipmap(le))}E.setRenderTarget(Ee),E.setClearColor(te,ie),Oe!==void 0&&(X.viewport=Oe),E.toneMapping=be}function ds(y,N,k){const X=N.isScene===!0?N.overrideMaterial:null;for(let B=0,le=y.length;B<le;B++){const xe=y[B],Ee=xe.object,be=xe.geometry,Oe=X===null?xe.material:X,Be=xe.group;Ee.layers.test(k.layers)&&dc(Ee,N,k,be,Oe,Be)}}function dc(y,N,k,X,B,le){y.onBeforeRender(E,N,k,X,B,le),y.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),B.onBeforeRender(E,N,k,X,y,le),B.transparent===!0&&B.side===Hn&&B.forceSinglePass===!1?(B.side=Wt,B.needsUpdate=!0,E.renderBufferDirect(k,N,X,B,y,le),B.side=ui,B.needsUpdate=!0,E.renderBufferDirect(k,N,X,B,y,le),B.side=Hn):E.renderBufferDirect(k,N,X,B,y,le),y.onAfterRender(E,N,k,X,B,le)}function ps(y,N,k){N.isScene!==!0&&(N=ft);const X=q.get(y),B=p.state.lights,le=p.state.shadowsArray,xe=B.state.version,Ee=fe.getParameters(y,B.state,le,N,k),be=fe.getProgramCacheKey(Ee);let Oe=X.programs;X.environment=y.isMeshStandardMaterial?N.environment:null,X.fog=N.fog,X.envMap=(y.isMeshStandardMaterial?R:_).get(y.envMap||X.environment),X.envMapRotation=X.environment!==null&&y.envMap===null?N.environmentRotation:y.envMapRotation,Oe===void 0&&(y.addEventListener("dispose",ke),Oe=new Map,X.programs=Oe);let Be=Oe.get(be);if(Be!==void 0){if(X.currentProgram===Be&&X.lightsStateVersion===xe)return mc(y,Ee),Be}else Ee.uniforms=fe.getUniforms(y),y.onBeforeCompile(Ee,E),Be=fe.acquireProgram(Ee,be),Oe.set(be,Be),X.uniforms=Ee.uniforms;const Pe=X.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Pe.clippingPlanes=ae.uniform),mc(y,Ee),X.needsLights=id(y),X.lightsStateVersion=xe,X.needsLights&&(Pe.ambientLightColor.value=B.state.ambient,Pe.lightProbe.value=B.state.probe,Pe.directionalLights.value=B.state.directional,Pe.directionalLightShadows.value=B.state.directionalShadow,Pe.spotLights.value=B.state.spot,Pe.spotLightShadows.value=B.state.spotShadow,Pe.rectAreaLights.value=B.state.rectArea,Pe.ltc_1.value=B.state.rectAreaLTC1,Pe.ltc_2.value=B.state.rectAreaLTC2,Pe.pointLights.value=B.state.point,Pe.pointLightShadows.value=B.state.pointShadow,Pe.hemisphereLights.value=B.state.hemi,Pe.directionalShadowMap.value=B.state.directionalShadowMap,Pe.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Pe.spotShadowMap.value=B.state.spotShadowMap,Pe.spotLightMatrix.value=B.state.spotLightMatrix,Pe.spotLightMap.value=B.state.spotLightMap,Pe.pointShadowMap.value=B.state.pointShadowMap,Pe.pointShadowMatrix.value=B.state.pointShadowMatrix),X.currentProgram=Be,X.uniformsList=null,Be}function pc(y){if(y.uniformsList===null){const N=y.currentProgram.getUniforms();y.uniformsList=Js.seqWithValue(N.seq,y.uniforms)}return y.uniformsList}function mc(y,N){const k=q.get(y);k.outputColorSpace=N.outputColorSpace,k.batching=N.batching,k.batchingColor=N.batchingColor,k.instancing=N.instancing,k.instancingColor=N.instancingColor,k.instancingMorph=N.instancingMorph,k.skinning=N.skinning,k.morphTargets=N.morphTargets,k.morphNormals=N.morphNormals,k.morphColors=N.morphColors,k.morphTargetsCount=N.morphTargetsCount,k.numClippingPlanes=N.numClippingPlanes,k.numIntersection=N.numClipIntersection,k.vertexAlphas=N.vertexAlphas,k.vertexTangents=N.vertexTangents,k.toneMapping=N.toneMapping}function td(y,N,k,X,B){N.isScene!==!0&&(N=ft),x.resetTextureUnits();const le=N.fog,xe=X.isMeshStandardMaterial?N.environment:null,Ee=U===null?E.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:_r,be=(X.isMeshStandardMaterial?R:_).get(X.envMap||xe),Oe=X.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Be=!!k.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Pe=!!k.morphAttributes.position,$e=!!k.morphAttributes.normal,tt=!!k.morphAttributes.color;let _t=li;X.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(_t=E.toneMapping);const mt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Je=mt!==void 0?mt.length:0,Ie=q.get(X),bt=p.state.lights;if(ce===!0&&(Se===!0||y!==S)){const Lt=y===S&&X.id===b;ae.setState(X,y,Lt)}let nt=!1;X.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==bt.state.version||Ie.outputColorSpace!==Ee||B.isBatchedMesh&&Ie.batching===!1||!B.isBatchedMesh&&Ie.batching===!0||B.isBatchedMesh&&Ie.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ie.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ie.instancing===!1||!B.isInstancedMesh&&Ie.instancing===!0||B.isSkinnedMesh&&Ie.skinning===!1||!B.isSkinnedMesh&&Ie.skinning===!0||B.isInstancedMesh&&Ie.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ie.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ie.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ie.instancingMorph===!1&&B.morphTexture!==null||Ie.envMap!==be||X.fog===!0&&Ie.fog!==le||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==ae.numPlanes||Ie.numIntersection!==ae.numIntersection)||Ie.vertexAlphas!==Oe||Ie.vertexTangents!==Be||Ie.morphTargets!==Pe||Ie.morphNormals!==$e||Ie.morphColors!==tt||Ie.toneMapping!==_t||Ie.morphTargetsCount!==Je)&&(nt=!0):(nt=!0,Ie.__version=X.version);let an=Ie.currentProgram;nt===!0&&(an=ps(X,N,B));let Oi=!1,Xt=!1,wr=!1;const ht=an.getUniforms(),Jt=Ie.uniforms;if($.useProgram(an.program)&&(Oi=!0,Xt=!0,wr=!0),X.id!==b&&(b=X.id,Xt=!0),Oi||S!==y){$.buffers.depth.getReversed()?(he.copy(y.projectionMatrix),kg(he),Gg(he),ht.setValue(M,"projectionMatrix",he)):ht.setValue(M,"projectionMatrix",y.projectionMatrix),ht.setValue(M,"viewMatrix",y.matrixWorldInverse);const Ht=ht.map.cameraPosition;Ht!==void 0&&Ht.setValue(M,Ue.setFromMatrixPosition(y.matrixWorld)),K.logarithmicDepthBuffer&&ht.setValue(M,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ht.setValue(M,"isOrthographic",y.isOrthographicCamera===!0),S!==y&&(S=y,Xt=!0,wr=!0)}if(B.isSkinnedMesh){ht.setOptional(M,B,"bindMatrix"),ht.setOptional(M,B,"bindMatrixInverse");const Lt=B.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),ht.setValue(M,"boneTexture",Lt.boneTexture,x))}B.isBatchedMesh&&(ht.setOptional(M,B,"batchingTexture"),ht.setValue(M,"batchingTexture",B._matricesTexture,x),ht.setOptional(M,B,"batchingIdTexture"),ht.setValue(M,"batchingIdTexture",B._indirectTexture,x),ht.setOptional(M,B,"batchingColorTexture"),B._colorsTexture!==null&&ht.setValue(M,"batchingColorTexture",B._colorsTexture,x));const Qt=k.morphAttributes;if((Qt.position!==void 0||Qt.normal!==void 0||Qt.color!==void 0)&&De.update(B,k,an),(Xt||Ie.receiveShadow!==B.receiveShadow)&&(Ie.receiveShadow=B.receiveShadow,ht.setValue(M,"receiveShadow",B.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Jt.envMap.value=be,Jt.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&N.environment!==null&&(Jt.envMapIntensity.value=N.environmentIntensity),Xt&&(ht.setValue(M,"toneMappingExposure",E.toneMappingExposure),Ie.needsLights&&nd(Jt,wr),le&&X.fog===!0&&oe.refreshFogUniforms(Jt,le),oe.refreshMaterialUniforms(Jt,X,V,Q,p.state.transmissionRenderTarget[y.id]),Js.upload(M,pc(Ie),Jt,x)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Js.upload(M,pc(Ie),Jt,x),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ht.setValue(M,"center",B.center),ht.setValue(M,"modelViewMatrix",B.modelViewMatrix),ht.setValue(M,"normalMatrix",B.normalMatrix),ht.setValue(M,"modelMatrix",B.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Lt=X.uniformsGroups;for(let Ht=0,Co=Lt.length;Ht<Co;Ht++){const gi=Lt[Ht];F.update(gi,an),F.bind(gi,an)}}return an}function nd(y,N){y.ambientLightColor.needsUpdate=N,y.lightProbe.needsUpdate=N,y.directionalLights.needsUpdate=N,y.directionalLightShadows.needsUpdate=N,y.pointLights.needsUpdate=N,y.pointLightShadows.needsUpdate=N,y.spotLights.needsUpdate=N,y.spotLightShadows.needsUpdate=N,y.rectAreaLights.needsUpdate=N,y.hemisphereLights.needsUpdate=N}function id(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(y,N,k){q.get(y.texture).__webglTexture=N,q.get(y.depthTexture).__webglTexture=k;const X=q.get(y);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=k===void 0,X.__autoAllocateDepthBuffer||Y.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,N){const k=q.get(y);k.__webglFramebuffer=N,k.__useDefaultFramebuffer=N===void 0};const rd=M.createFramebuffer();this.setRenderTarget=function(y,N=0,k=0){U=y,I=N,C=k;let X=!0,B=null,le=!1,xe=!1;if(y){const be=q.get(y);if(be.__useDefaultFramebuffer!==void 0)$.bindFramebuffer(M.FRAMEBUFFER,null),X=!1;else if(be.__webglFramebuffer===void 0)x.setupRenderTarget(y);else if(be.__hasExternalTextures)x.rebindTextures(y,q.get(y.texture).__webglTexture,q.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Pe=y.depthTexture;if(be.__boundDepthTexture!==Pe){if(Pe!==null&&q.has(Pe)&&(y.width!==Pe.image.width||y.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");x.setupDepthRenderbuffer(y)}}const Oe=y.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(xe=!0);const Be=q.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Be[N])?B=Be[N][k]:B=Be[N],le=!0):y.samples>0&&x.useMultisampledRTT(y)===!1?B=q.get(y).__webglMultisampledFramebuffer:Array.isArray(Be)?B=Be[k]:B=Be,D.copy(y.viewport),J.copy(y.scissor),W=y.scissorTest}else D.copy(Te).multiplyScalar(V).floor(),J.copy(Ce).multiplyScalar(V).floor(),W=Ke;if(k!==0&&(B=rd),$.bindFramebuffer(M.FRAMEBUFFER,B)&&X&&$.drawBuffers(y,B),$.viewport(D),$.scissor(J),$.setScissorTest(W),le){const be=q.get(y.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+N,be.__webglTexture,k)}else if(xe){const be=q.get(y.texture),Oe=N;M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,be.__webglTexture,k,Oe)}else if(y!==null&&k!==0){const be=q.get(y.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,be.__webglTexture,k)}b=-1},this.readRenderTargetPixels=function(y,N,k,X,B,le,xe){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=q.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&xe!==void 0&&(Ee=Ee[xe]),Ee){$.bindFramebuffer(M.FRAMEBUFFER,Ee);try{const be=y.texture,Oe=be.format,Be=be.type;if(!K.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!K.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=y.width-X&&k>=0&&k<=y.height-B&&M.readPixels(N,k,X,B,Ve.convert(Oe),Ve.convert(Be),le)}finally{const be=U!==null?q.get(U).__webglFramebuffer:null;$.bindFramebuffer(M.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(y,N,k,X,B,le,xe){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=q.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&xe!==void 0&&(Ee=Ee[xe]),Ee){const be=y.texture,Oe=be.format,Be=be.type;if(!K.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!K.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=y.width-X&&k>=0&&k<=y.height-B){$.bindFramebuffer(M.FRAMEBUFFER,Ee);const Pe=M.createBuffer();M.bindBuffer(M.PIXEL_PACK_BUFFER,Pe),M.bufferData(M.PIXEL_PACK_BUFFER,le.byteLength,M.STREAM_READ),M.readPixels(N,k,X,B,Ve.convert(Oe),Ve.convert(Be),0);const $e=U!==null?q.get(U).__webglFramebuffer:null;$.bindFramebuffer(M.FRAMEBUFFER,$e);const tt=M.fenceSync(M.SYNC_GPU_COMMANDS_COMPLETE,0);return M.flush(),await Hg(M,tt,4),M.bindBuffer(M.PIXEL_PACK_BUFFER,Pe),M.getBufferSubData(M.PIXEL_PACK_BUFFER,0,le),M.deleteBuffer(Pe),M.deleteSync(tt),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,N=null,k=0){y.isTexture!==!0&&(nr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,y=arguments[1]);const X=Math.pow(2,-k),B=Math.floor(y.image.width*X),le=Math.floor(y.image.height*X),xe=N!==null?N.x:0,Ee=N!==null?N.y:0;x.setTexture2D(y,0),M.copyTexSubImage2D(M.TEXTURE_2D,k,0,0,xe,Ee,B,le),$.unbindTexture()};const sd=M.createFramebuffer(),od=M.createFramebuffer();this.copyTextureToTexture=function(y,N,k=null,X=null,B=0,le=null){y.isTexture!==!0&&(nr("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,y=arguments[1],N=arguments[2],le=arguments[3]||0,k=null),le===null&&(B!==0?(nr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),le=B,B=0):le=0);let xe,Ee,be,Oe,Be,Pe,$e,tt,_t;const mt=y.isCompressedTexture?y.mipmaps[le]:y.image;if(k!==null)xe=k.max.x-k.min.x,Ee=k.max.y-k.min.y,be=k.isBox3?k.max.z-k.min.z:1,Oe=k.min.x,Be=k.min.y,Pe=k.isBox3?k.min.z:0;else{const Qt=Math.pow(2,-B);xe=Math.floor(mt.width*Qt),Ee=Math.floor(mt.height*Qt),y.isDataArrayTexture?be=mt.depth:y.isData3DTexture?be=Math.floor(mt.depth*Qt):be=1,Oe=0,Be=0,Pe=0}X!==null?($e=X.x,tt=X.y,_t=X.z):($e=0,tt=0,_t=0);const Je=Ve.convert(N.format),Ie=Ve.convert(N.type);let bt;N.isData3DTexture?(x.setTexture3D(N,0),bt=M.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(x.setTexture2DArray(N,0),bt=M.TEXTURE_2D_ARRAY):(x.setTexture2D(N,0),bt=M.TEXTURE_2D),M.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,N.flipY),M.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),M.pixelStorei(M.UNPACK_ALIGNMENT,N.unpackAlignment);const nt=M.getParameter(M.UNPACK_ROW_LENGTH),an=M.getParameter(M.UNPACK_IMAGE_HEIGHT),Oi=M.getParameter(M.UNPACK_SKIP_PIXELS),Xt=M.getParameter(M.UNPACK_SKIP_ROWS),wr=M.getParameter(M.UNPACK_SKIP_IMAGES);M.pixelStorei(M.UNPACK_ROW_LENGTH,mt.width),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,mt.height),M.pixelStorei(M.UNPACK_SKIP_PIXELS,Oe),M.pixelStorei(M.UNPACK_SKIP_ROWS,Be),M.pixelStorei(M.UNPACK_SKIP_IMAGES,Pe);const ht=y.isDataArrayTexture||y.isData3DTexture,Jt=N.isDataArrayTexture||N.isData3DTexture;if(y.isDepthTexture){const Qt=q.get(y),Lt=q.get(N),Ht=q.get(Qt.__renderTarget),Co=q.get(Lt.__renderTarget);$.bindFramebuffer(M.READ_FRAMEBUFFER,Ht.__webglFramebuffer),$.bindFramebuffer(M.DRAW_FRAMEBUFFER,Co.__webglFramebuffer);for(let gi=0;gi<be;gi++)ht&&(M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,q.get(y).__webglTexture,B,Pe+gi),M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,q.get(N).__webglTexture,le,_t+gi)),M.blitFramebuffer(Oe,Be,xe,Ee,$e,tt,xe,Ee,M.DEPTH_BUFFER_BIT,M.NEAREST);$.bindFramebuffer(M.READ_FRAMEBUFFER,null),$.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else if(B!==0||y.isRenderTargetTexture||q.has(y)){const Qt=q.get(y),Lt=q.get(N);$.bindFramebuffer(M.READ_FRAMEBUFFER,sd),$.bindFramebuffer(M.DRAW_FRAMEBUFFER,od);for(let Ht=0;Ht<be;Ht++)ht?M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,Qt.__webglTexture,B,Pe+Ht):M.framebufferTexture2D(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,Qt.__webglTexture,B),Jt?M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,Lt.__webglTexture,le,_t+Ht):M.framebufferTexture2D(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,Lt.__webglTexture,le),B!==0?M.blitFramebuffer(Oe,Be,xe,Ee,$e,tt,xe,Ee,M.COLOR_BUFFER_BIT,M.NEAREST):Jt?M.copyTexSubImage3D(bt,le,$e,tt,_t+Ht,Oe,Be,xe,Ee):M.copyTexSubImage2D(bt,le,$e,tt,Oe,Be,xe,Ee);$.bindFramebuffer(M.READ_FRAMEBUFFER,null),$.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else Jt?y.isDataTexture||y.isData3DTexture?M.texSubImage3D(bt,le,$e,tt,_t,xe,Ee,be,Je,Ie,mt.data):N.isCompressedArrayTexture?M.compressedTexSubImage3D(bt,le,$e,tt,_t,xe,Ee,be,Je,mt.data):M.texSubImage3D(bt,le,$e,tt,_t,xe,Ee,be,Je,Ie,mt):y.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,le,$e,tt,xe,Ee,Je,Ie,mt.data):y.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,le,$e,tt,mt.width,mt.height,Je,mt.data):M.texSubImage2D(M.TEXTURE_2D,le,$e,tt,xe,Ee,Je,Ie,mt);M.pixelStorei(M.UNPACK_ROW_LENGTH,nt),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,an),M.pixelStorei(M.UNPACK_SKIP_PIXELS,Oi),M.pixelStorei(M.UNPACK_SKIP_ROWS,Xt),M.pixelStorei(M.UNPACK_SKIP_IMAGES,wr),le===0&&N.generateMipmaps&&M.generateMipmap(bt),$.unbindTexture()},this.copyTextureToTexture3D=function(y,N,k=null,X=null,B=0){return y.isTexture!==!0&&(nr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,X=arguments[1]||null,y=arguments[2],N=arguments[3],B=arguments[4]||0),nr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,N,k,X,B)},this.initRenderTarget=function(y){q.get(y).__webglFramebuffer===void 0&&x.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?x.setTextureCube(y,0):y.isData3DTexture?x.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?x.setTexture2DArray(y,0):x.setTexture2D(y,0),$.unbindTexture()},this.resetState=function(){I=0,C=0,U=null,$.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}const Ny=parseInt(yo.replace(/\D+/g,"")),Oy=Ny>=125?"uv1":"uv2";var nn=Uint8Array,ri=Uint16Array,Tl=Uint32Array,Gh=new nn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Wh=new nn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),By=new nn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Xh=function(n,e){for(var t=new ri(31),i=0;i<31;++i)t[i]=e+=1<<n[i-1];for(var r=new Tl(t[30]),i=1;i<30;++i)for(var s=t[i];s<t[i+1];++s)r[s]=s-t[i]<<5|i;return[t,r]},qh=Xh(Gh,2),Yh=qh[0],zy=qh[1];Yh[28]=258,zy[258]=28;var Vy=Xh(Wh,0),Hy=Vy[0],bl=new ri(32768);for(var ut=0;ut<32768;++ut){var Qn=(ut&43690)>>>1|(ut&21845)<<1;Qn=(Qn&52428)>>>2|(Qn&13107)<<2,Qn=(Qn&61680)>>>4|(Qn&3855)<<4,bl[ut]=((Qn&65280)>>>8|(Qn&255)<<8)>>>1}var jr=function(n,e,t){for(var i=n.length,r=0,s=new ri(e);r<i;++r)++s[n[r]-1];var o=new ri(e);for(r=0;r<e;++r)o[r]=o[r-1]+s[r-1]<<1;var a;if(t){a=new ri(1<<e);var l=15-e;for(r=0;r<i;++r)if(n[r])for(var c=r<<4|n[r],u=e-n[r],f=o[n[r]-1]++<<u,h=f|(1<<u)-1;f<=h;++f)a[bl[f]>>>l]=c}else for(a=new ri(i),r=0;r<i;++r)n[r]&&(a[r]=bl[o[n[r]-1]++]>>>15-n[r]);return a},hs=new nn(288);for(var ut=0;ut<144;++ut)hs[ut]=8;for(var ut=144;ut<256;++ut)hs[ut]=9;for(var ut=256;ut<280;++ut)hs[ut]=7;for(var ut=280;ut<288;++ut)hs[ut]=8;var jh=new nn(32);for(var ut=0;ut<32;++ut)jh[ut]=5;var ky=jr(hs,9,1),Gy=jr(jh,5,1),Sa=function(n){for(var e=n[0],t=1;t<n.length;++t)n[t]>e&&(e=n[t]);return e},fn=function(n,e,t){var i=e/8|0;return(n[i]|n[i+1]<<8)>>(e&7)&t},Ea=function(n,e){var t=e/8|0;return(n[t]|n[t+1]<<8|n[t+2]<<16)>>(e&7)},Wy=function(n){return(n/8|0)+(n&7&&1)},Xy=function(n,e,t){(t==null||t>n.length)&&(t=n.length);var i=new(n instanceof ri?ri:n instanceof Tl?Tl:nn)(t-e);return i.set(n.subarray(e,t)),i},qy=function(n,e,t){var i=n.length;if(!i||t&&!t.l&&i<5)return e||new nn(0);var r=!e||t,s=!t||t.i;t||(t={}),e||(e=new nn(i*3));var o=function(Se){var he=e.length;if(Se>he){var Ae=new nn(Math.max(he*2,Se));Ae.set(e),e=Ae}},a=t.f||0,l=t.p||0,c=t.b||0,u=t.l,f=t.d,h=t.m,d=t.n,g=i*8;do{if(!u){t.f=a=fn(n,l,1);var v=fn(n,l+1,3);if(l+=3,v)if(v==1)u=ky,f=Gy,h=9,d=5;else if(v==2){var T=fn(n,l,31)+257,E=fn(n,l+10,15)+4,L=T+fn(n,l+5,31)+1;l+=14;for(var I=new nn(L),C=new nn(19),U=0;U<E;++U)C[By[U]]=fn(n,l+U*3,7);l+=E*3;for(var b=Sa(C),S=(1<<b)-1,D=jr(C,b,1),U=0;U<L;){var J=D[fn(n,l,S)];l+=J&15;var m=J>>>4;if(m<16)I[U++]=m;else{var W=0,te=0;for(m==16?(te=3+fn(n,l,3),l+=2,W=I[U-1]):m==17?(te=3+fn(n,l,7),l+=3):m==18&&(te=11+fn(n,l,127),l+=7);te--;)I[U++]=W}}var ie=I.subarray(0,T),j=I.subarray(T);h=Sa(ie),d=Sa(j),u=jr(ie,h,1),f=jr(j,d,1)}else throw"invalid block type";else{var m=Wy(l)+4,p=n[m-4]|n[m-3]<<8,A=m+p;if(A>i){if(s)throw"unexpected EOF";break}r&&o(c+p),e.set(n.subarray(m,A),c),t.b=c+=p,t.p=l=A*8;continue}if(l>g){if(s)throw"unexpected EOF";break}}r&&o(c+131072);for(var Q=(1<<h)-1,V=(1<<d)-1,ue=l;;ue=l){var W=u[Ea(n,l)&Q],me=W>>>4;if(l+=W&15,l>g){if(s)throw"unexpected EOF";break}if(!W)throw"invalid length/literal";if(me<256)e[c++]=me;else if(me==256){ue=l,u=null;break}else{var Te=me-254;if(me>264){var U=me-257,Ce=Gh[U];Te=fn(n,l,(1<<Ce)-1)+Yh[U],l+=Ce}var Ke=f[Ea(n,l)&V],ee=Ke>>>4;if(!Ke)throw"invalid distance";l+=Ke&15;var j=Hy[ee];if(ee>3){var Ce=Wh[ee];j+=Ea(n,l)&(1<<Ce)-1,l+=Ce}if(l>g){if(s)throw"unexpected EOF";break}r&&o(c+131072);for(var ce=c+Te;c<ce;c+=4)e[c]=e[c-j],e[c+1]=e[c+1-j],e[c+2]=e[c+2-j],e[c+3]=e[c+3-j];c=ce}}t.l=u,t.p=ue,t.b=c,u&&(a=1,t.m=h,t.d=f,t.n=d)}while(!a);return c==e.length?e:Xy(e,0,c)},Yy=new nn(0),jy=function(n){if((n[0]&15)!=8||n[0]>>>4>7||(n[0]<<8|n[1])%31)throw"invalid zlib data";if(n[1]&32)throw"invalid zlib data: preset dictionaries not supported"};function Ky(n,e){return qy((jy(n),n.subarray(2,-4)),e)}var $y=typeof TextDecoder<"u"&&new TextDecoder,Zy=0;try{$y.decode(Yy,{stream:!0}),Zy=1}catch{}function Kh(n){if(typeof TextDecoder<"u")return new TextDecoder().decode(n);let e="";for(let t=0,i=n.length;t<i;t++)e+=String.fromCharCode(n[t]);try{return decodeURIComponent(escape(e))}catch{return e}}function $h(n,e,t){const i=t.length-n-1;if(e>=t[i])return i-1;if(e<=t[n])return n;let r=n,s=i,o=Math.floor((r+s)/2);for(;e<t[o]||e>=t[o+1];)e<t[o]?s=o:r=o,o=Math.floor((r+s)/2);return o}function Jy(n,e,t,i){const r=[],s=[],o=[];r[0]=1;for(let a=1;a<=t;++a){s[a]=e-i[n+1-a],o[a]=i[n+a]-e;let l=0;for(let c=0;c<a;++c){const u=o[c+1],f=s[a-c],h=r[c]/(u+f);r[c]=l+u*h,l=f*h}r[a]=l}return r}function Qy(n,e,t,i){const r=$h(n,i,e),s=Jy(r,i,n,e),o=new je(0,0,0,0);for(let a=0;a<=n;++a){const l=t[r-n+a],c=s[a],u=l.w*c;o.x+=l.x*u,o.y+=l.y*u,o.z+=l.z*u,o.w+=l.w*c}return o}function eS(n,e,t,i,r){const s=[];for(let f=0;f<=t;++f)s[f]=0;const o=[];for(let f=0;f<=i;++f)o[f]=s.slice(0);const a=[];for(let f=0;f<=t;++f)a[f]=s.slice(0);a[0][0]=1;const l=s.slice(0),c=s.slice(0);for(let f=1;f<=t;++f){l[f]=e-r[n+1-f],c[f]=r[n+f]-e;let h=0;for(let d=0;d<f;++d){const g=c[d+1],v=l[f-d];a[f][d]=g+v;const m=a[d][f-1]/a[f][d];a[d][f]=h+g*m,h=v*m}a[f][f]=h}for(let f=0;f<=t;++f)o[0][f]=a[f][t];for(let f=0;f<=t;++f){let h=0,d=1;const g=[];for(let v=0;v<=t;++v)g[v]=s.slice(0);g[0][0]=1;for(let v=1;v<=i;++v){let m=0;const p=f-v,A=t-v;f>=v&&(g[d][0]=g[h][0]/a[A+1][p],m=g[d][0]*a[p][A]);const T=p>=-1?1:-p,E=f-1<=A?v-1:t-f;for(let I=T;I<=E;++I)g[d][I]=(g[h][I]-g[h][I-1])/a[A+1][p+I],m+=g[d][I]*a[p+I][A];f<=A&&(g[d][v]=-g[h][v-1]/a[A+1][f],m+=g[d][v]*a[f][A]),o[v][f]=m;const L=h;h=d,d=L}}let u=t;for(let f=1;f<=i;++f){for(let h=0;h<=t;++h)o[f][h]*=u;u*=t-f}return o}function tS(n,e,t,i,r){const s=r<n?r:n,o=[],a=$h(n,i,e),l=eS(a,i,n,s,e),c=[];for(let u=0;u<t.length;++u){const f=t[u].clone(),h=f.w;f.x*=h,f.y*=h,f.z*=h,c[u]=f}for(let u=0;u<=s;++u){const f=c[a-n].clone().multiplyScalar(l[u][0]);for(let h=1;h<=n;++h)f.add(c[a-n+h].clone().multiplyScalar(l[u][h]));o[u]=f}for(let u=s+1;u<=r+1;++u)o[u]=new je(0,0,0);return o}function nS(n,e){let t=1;for(let r=2;r<=n;++r)t*=r;let i=1;for(let r=2;r<=e;++r)i*=r;for(let r=2;r<=n-e;++r)i*=r;return t/i}function iS(n){const e=n.length,t=[],i=[];for(let s=0;s<e;++s){const o=n[s];t[s]=new O(o.x,o.y,o.z),i[s]=o.w}const r=[];for(let s=0;s<e;++s){const o=t[s].clone();for(let a=1;a<=s;++a)o.sub(r[s-a].clone().multiplyScalar(nS(s,a)*i[a]));r[s]=o.divideScalar(i[0])}return r}function rS(n,e,t,i,r){const s=tS(n,e,t,i,r);return iS(s)}class tf extends M_{constructor(e,t,i,r,s){super(),this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=r||0,this.endKnot=s||this.knots.length-1;for(let o=0;o<i.length;++o){const a=i[o];this.controlPoints[o]=new je(a.x,a.y,a.z,a.w)}}getPoint(e,t){const i=t||new O,r=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),s=Qy(this.degree,this.knots,this.controlPoints,r);return s.w!=1&&s.divideScalar(s.w),i.set(s.x,s.y,s.z)}getTangent(e,t){const i=t||new O,r=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),s=rS(this.degree,this.knots,this.controlPoints,r,1);return i.copy(s[1]).normalize(),i}}let Ye,gt,kt;class sS extends fs{constructor(e){super(e)}load(e,t,i,r){const s=this,o=s.path===""?k_.extractUrlBase(e):s.path,a=new N_(this.manager);a.setPath(s.path),a.setResponseType("arraybuffer"),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(l){try{t(s.parse(l,o))}catch(c){r?r(c):console.error(c),s.manager.itemError(e)}},i,r)}parse(e,t){if(fS(e))Ye=new uS().parse(e);else{const r=ed(e);if(!hS(r))throw new Error("THREE.FBXLoader: Unknown format.");if(rf(r)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+rf(r));Ye=new cS().parse(r)}const i=new Fh(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new oS(i,this.manager).parse(Ye)}}class oS{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){gt=this.parseConnections();const e=this.parseImages(),t=this.parseTextures(e),i=this.parseMaterials(t),r=this.parseDeformers(),s=new aS().parse(r);return this.parseScene(r,s,i),kt}parseConnections(){const e=new Map;return"Connections"in Ye&&Ye.Connections.connections.forEach(function(i){const r=i[0],s=i[1],o=i[2];e.has(r)||e.set(r,{parents:[],children:[]});const a={ID:s,relationship:o};e.get(r).parents.push(a),e.has(s)||e.set(s,{parents:[],children:[]});const l={ID:r,relationship:o};e.get(s).children.push(l)}),e}parseImages(){const e={},t={};if("Video"in Ye.Objects){const i=Ye.Objects.Video;for(const r in i){const s=i[r],o=parseInt(r);if(e[o]=s.RelativeFilename||s.Filename,"Content"in s){const a=s.Content instanceof ArrayBuffer&&s.Content.byteLength>0,l=typeof s.Content=="string"&&s.Content!=="";if(a||l){const c=this.parseImage(i[r]);t[s.RelativeFilename||s.Filename]=c}}}}for(const i in e){const r=e[i];t[r]!==void 0?e[i]=t[r]:e[i]=e[i].split("\\").pop()}return e}parseImage(e){const t=e.Content,i=e.RelativeFilename||e.Filename,r=i.slice(i.lastIndexOf(".")+1).toLowerCase();let s;switch(r){case"bmp":s="image/bmp";break;case"jpg":case"jpeg":s="image/jpeg";break;case"png":s="image/png";break;case"tif":s="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",i),s="image/tga";break;default:console.warn('FBXLoader: Image type "'+r+'" is not supported.');return}if(typeof t=="string")return"data:"+s+";base64,"+t;{const o=new Uint8Array(t);return window.URL.createObjectURL(new Blob([o],{type:s}))}}parseTextures(e){const t=new Map;if("Texture"in Ye.Objects){const i=Ye.Objects.Texture;for(const r in i){const s=this.parseTexture(i[r],e);t.set(parseInt(r),s)}}return t}parseTexture(e,t){const i=this.loadTexture(e,t);i.ID=e.id,i.name=e.attrName;const r=e.WrapModeU,s=e.WrapModeV,o=r!==void 0?r.value:0,a=s!==void 0?s.value:0;if(i.wrapS=o===0?ts:kn,i.wrapT=a===0?ts:kn,"Scaling"in e){const l=e.Scaling.value;i.repeat.x=l[0],i.repeat.y=l[1]}return i}loadTexture(e,t){let i;const r=this.textureLoader.path,s=gt.get(e.id).children;s!==void 0&&s.length>0&&t[s[0].ID]!==void 0&&(i=t[s[0].ID],(i.indexOf("blob:")===0||i.indexOf("data:")===0)&&this.textureLoader.setPath(void 0));let o;const a=e.FileName.slice(-3).toLowerCase();if(a==="tga"){const l=this.manager.getHandler(".tga");l===null?(console.warn("FBXLoader: TGA loader not found, creating placeholder texture for",e.RelativeFilename),o=new Et):(l.setPath(this.textureLoader.path),o=l.load(i))}else a==="psd"?(console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for",e.RelativeFilename),o=new Et):o=this.textureLoader.load(i);return this.textureLoader.setPath(r),o}parseMaterials(e){const t=new Map;if("Material"in Ye.Objects){const i=Ye.Objects.Material;for(const r in i){const s=this.parseMaterial(i[r],e);s!==null&&t.set(parseInt(r),s)}}return t}parseMaterial(e,t){const i=e.id,r=e.attrName;let s=e.ShadingModel;if(typeof s=="object"&&(s=s.value),!gt.has(i))return null;const o=this.parseParameters(e,t,i);let a;switch(s.toLowerCase()){case"phong":a=new ha;break;case"lambert":a=new y_;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',s),a=new ha;break}return a.setValues(o),a.name=r,a}parseParameters(e,t,i){const r={};e.BumpFactor&&(r.bumpScale=e.BumpFactor.value),e.Diffuse?r.color=new Fe().fromArray(e.Diffuse.value):e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(r.color=new Fe().fromArray(e.DiffuseColor.value)),e.DisplacementFactor&&(r.displacementScale=e.DisplacementFactor.value),e.Emissive?r.emissive=new Fe().fromArray(e.Emissive.value):e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(r.emissive=new Fe().fromArray(e.EmissiveColor.value)),e.EmissiveFactor&&(r.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),e.Opacity&&(r.opacity=parseFloat(e.Opacity.value)),r.opacity<1&&(r.transparent=!0),e.ReflectionFactor&&(r.reflectivity=e.ReflectionFactor.value),e.Shininess&&(r.shininess=e.Shininess.value),e.Specular?r.specular=new Fe().fromArray(e.Specular.value):e.SpecularColor&&e.SpecularColor.type==="Color"&&(r.specular=new Fe().fromArray(e.SpecularColor.value));const s=this;return gt.get(i).children.forEach(function(o){const a=o.relationship;switch(a){case"Bump":r.bumpMap=s.getTexture(t,o.ID);break;case"Maya|TEX_ao_map":r.aoMap=s.getTexture(t,o.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":r.map=s.getTexture(t,o.ID),r.map!==void 0&&("colorSpace"in r.map?r.map.colorSpace="srgb":r.map.encoding=3001);break;case"DisplacementColor":r.displacementMap=s.getTexture(t,o.ID);break;case"EmissiveColor":r.emissiveMap=s.getTexture(t,o.ID),r.emissiveMap!==void 0&&("colorSpace"in r.emissiveMap?r.emissiveMap.colorSpace="srgb":r.emissiveMap.encoding=3001);break;case"NormalMap":case"Maya|TEX_normal_map":r.normalMap=s.getTexture(t,o.ID);break;case"ReflectionColor":r.envMap=s.getTexture(t,o.ID),r.envMap!==void 0&&(r.envMap.mapping=so,"colorSpace"in r.envMap?r.envMap.colorSpace="srgb":r.envMap.encoding=3001);break;case"SpecularColor":r.specularMap=s.getTexture(t,o.ID),r.specularMap!==void 0&&("colorSpace"in r.specularMap?r.specularMap.colorSpace="srgb":r.specularMap.encoding=3001);break;case"TransparentColor":case"TransparencyFactor":r.alphaMap=s.getTexture(t,o.ID),r.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",a);break}}),r}getTexture(e,t){return"LayeredTexture"in Ye.Objects&&t in Ye.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=gt.get(t).children[0].ID),e.get(t)}parseDeformers(){const e={},t={};if("Deformer"in Ye.Objects){const i=Ye.Objects.Deformer;for(const r in i){const s=i[r],o=gt.get(parseInt(r));if(s.attrType==="Skin"){const a=this.parseSkeleton(o,i);a.ID=r,o.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),a.geometryID=o.parents[0].ID,e[r]=a}else if(s.attrType==="BlendShape"){const a={id:r};a.rawTargets=this.parseMorphTargets(o,i),a.id=r,o.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[r]=a}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){const i=[];return e.children.forEach(function(r){const s=t[r.ID];if(s.attrType!=="Cluster")return;const o={ID:r.ID,indices:[],weights:[],transformLink:new Re().fromArray(s.TransformLink.a)};"Indexes"in s&&(o.indices=s.Indexes.a,o.weights=s.Weights.a),i.push(o)}),{rawBones:i,bones:[]}}parseMorphTargets(e,t){const i=[];for(let r=0;r<e.children.length;r++){const s=e.children[r],o=t[s.ID],a={name:o.attrName,initialWeight:o.DeformPercent,id:o.id,fullWeights:o.FullWeights.a};if(o.attrType!=="BlendShapeChannel")return;a.geoID=gt.get(parseInt(s.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,i.push(a)}return i}parseScene(e,t,i){kt=new ir;const r=this.parseModels(e.skeletons,t,i),s=Ye.Objects.Model,o=this;r.forEach(function(l){const c=s[l.ID];o.setLookAtProperties(l,c),gt.get(l.ID).parents.forEach(function(f){const h=r.get(f.ID);h!==void 0&&h.add(l)}),l.parent===null&&kt.add(l)}),this.bindSkeleton(e.skeletons,t,r),this.createAmbientLight(),kt.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);const c=Jh(l.userData.transformData);l.applyMatrix4(c),l.updateWorldMatrix()}});const a=new lS().parse();kt.children.length===1&&kt.children[0].isGroup&&(kt.children[0].animations=a,kt=kt.children[0]),kt.animations=a}parseModels(e,t,i){const r=new Map,s=Ye.Objects.Model;for(const o in s){const a=parseInt(o),l=s[o],c=gt.get(a);let u=this.buildSkeleton(c,e,a,l.attrName);if(!u){switch(l.attrType){case"Camera":u=this.createCamera(c);break;case"Light":u=this.createLight(c);break;case"Mesh":u=this.createMesh(c,t,i);break;case"NurbsCurve":u=this.createCurve(c,t);break;case"LimbNode":case"Root":u=new yl;break;case"Null":default:u=new ir;break}u.name=l.attrName?Qe.sanitizeNodeName(l.attrName):"",u.ID=a}this.getTransformData(u,l),r.set(a,u)}return r}buildSkeleton(e,t,i,r){let s=null;return e.parents.forEach(function(o){for(const a in t){const l=t[a];l.rawBones.forEach(function(c,u){if(c.ID===o.ID){const f=s;s=new yl,s.matrixWorld.copy(c.transformLink),s.name=r?Qe.sanitizeNodeName(r):"",s.ID=i,l.bones[u]=s,f!==null&&s.add(f)}})}}),s}createCamera(e){let t,i;if(e.children.forEach(function(r){const s=Ye.Objects.NodeAttribute[r.ID];s!==void 0&&(i=s)}),i===void 0)t=new dt;else{let r=0;i.CameraProjectionType!==void 0&&i.CameraProjectionType.value===1&&(r=1);let s=1;i.NearPlane!==void 0&&(s=i.NearPlane.value/1e3);let o=1e3;i.FarPlane!==void 0&&(o=i.FarPlane.value/1e3);let a=window.innerWidth,l=window.innerHeight;i.AspectWidth!==void 0&&i.AspectHeight!==void 0&&(a=i.AspectWidth.value,l=i.AspectHeight.value);const c=a/l;let u=45;i.FieldOfView!==void 0&&(u=i.FieldOfView.value);const f=i.FocalLength?i.FocalLength.value:null;switch(r){case 0:t=new Bt(u,c,s,o),f!==null&&t.setFocalLength(f);break;case 1:t=new sc(-a/2,a/2,l/2,-l/2,s,o);break;default:console.warn("THREE.FBXLoader: Unknown camera type "+r+"."),t=new dt;break}}return t}createLight(e){let t,i;if(e.children.forEach(function(r){const s=Ye.Objects.NodeAttribute[r.ID];s!==void 0&&(i=s)}),i===void 0)t=new dt;else{let r;i.LightType===void 0?r=0:r=i.LightType.value;let s=16777215;i.Color!==void 0&&(s=new Fe().fromArray(i.Color.value));let o=i.Intensity===void 0?1:i.Intensity.value/100;i.CastLightOnObject!==void 0&&i.CastLightOnObject.value===0&&(o=0);let a=0;i.FarAttenuationEnd!==void 0&&(i.EnableFarAttenuation!==void 0&&i.EnableFarAttenuation.value===0?a=0:a=i.FarAttenuationEnd.value);const l=1;switch(r){case 0:t=new Sl(s,o,a,l);break;case 1:t=new Nh(s,o);break;case 2:let c=Math.PI/3;i.InnerAngle!==void 0&&(c=Mn.degToRad(i.InnerAngle.value));let u=0;i.OuterAngle!==void 0&&(u=Mn.degToRad(i.OuterAngle.value),u=Math.max(u,1)),t=new z_(s,o,a,c,u,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+i.LightType.value+", defaulting to a PointLight."),t=new Sl(s,o);break}i.CastShadows!==void 0&&i.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,i){let r,s=null,o=null;const a=[];return e.children.forEach(function(l){t.has(l.ID)&&(s=t.get(l.ID)),i.has(l.ID)&&a.push(i.get(l.ID))}),a.length>1?o=a:a.length>0?o=a[0]:(o=new ha({color:13421772}),a.push(o)),"color"in s.attributes&&a.forEach(function(l){l.vertexColors=!0}),s.FBX_Deformer?(r=new p_(s,o),r.normalizeSkinWeights()):r=new dn(s,o),r}createCurve(e,t){const i=e.children.reduce(function(s,o){return t.has(o.ID)&&(s=t.get(o.ID)),s},null),r=new Ih({color:3342591,linewidth:1});return new x_(i,r)}getTransformData(e,t){const i={};"InheritType"in t&&(i.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?i.eulerOrder=Qh(t.RotationOrder.value):i.eulerOrder="ZYX","Lcl_Translation"in t&&(i.translation=t.Lcl_Translation.value),"PreRotation"in t&&(i.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(i.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(i.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(i.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(i.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(i.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(i.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(i.rotationPivot=t.RotationPivot.value),e.userData.transformData=i}setLookAtProperties(e,t){"LookAtProperty"in t&&gt.get(e.ID).children.forEach(function(r){if(r.relationship==="LookAtProperty"){const s=Ye.Objects.Model[r.ID];if("Lcl_Translation"in s){const o=s.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(o),kt.add(e.target)):e.lookAt(new O().fromArray(o))}}})}bindSkeleton(e,t,i){const r=this.parsePoseNodes();for(const s in e){const o=e[s];gt.get(parseInt(o.ID)).parents.forEach(function(l){if(t.has(l.ID)){const c=l.ID;gt.get(c).parents.forEach(function(f){i.has(f.ID)&&i.get(f.ID).bind(new nc(o.bones),r[f.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in Ye.Objects){const t=Ye.Objects.Pose;for(const i in t)if(t[i].attrType==="BindPose"&&t[i].NbPoseNodes>0){const r=t[i].PoseNode;Array.isArray(r)?r.forEach(function(s){e[s.Node]=new Re().fromArray(s.Matrix.a)}):e[r.Node]=new Re().fromArray(r.Matrix.a)}}return e}createAmbientLight(){if("GlobalSettings"in Ye&&"AmbientColor"in Ye.GlobalSettings){const e=Ye.GlobalSettings.AmbientColor.value,t=e[0],i=e[1],r=e[2];if(t!==0||i!==0||r!==0){const s=new Fe(t,i,r);kt.add(new Oh(s,1))}}}}class aS{parse(e){const t=new Map;if("Geometry"in Ye.Objects){const i=Ye.Objects.Geometry;for(const r in i){const s=gt.get(parseInt(r)),o=this.parseGeometry(s,i[r],e);t.set(parseInt(r),o)}}return t}parseGeometry(e,t,i){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,i);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,i){const r=i.skeletons,s=[],o=e.parents.map(function(f){return Ye.Objects.Model[f.ID]});if(o.length===0)return;const a=e.children.reduce(function(f,h){return r[h.ID]!==void 0&&(f=r[h.ID]),f},null);e.children.forEach(function(f){i.morphTargets[f.ID]!==void 0&&s.push(i.morphTargets[f.ID])});const l=o[0],c={};"RotationOrder"in l&&(c.eulerOrder=Qh(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);const u=Jh(c);return this.genGeometry(t,a,s,u)}genGeometry(e,t,i,r){const s=new sn;e.attrName&&(s.name=e.attrName);const o=this.parseGeoNode(e,t),a=this.genBuffers(o),l=new Gt(a.vertex,3);if(l.applyMatrix4(r),s.setAttribute("position",l),a.colors.length>0&&s.setAttribute("color",new Gt(a.colors,3)),t&&(s.setAttribute("skinIndex",new tc(a.weightsIndices,4)),s.setAttribute("skinWeight",new Gt(a.vertexWeights,4)),s.FBX_Deformer=t),a.normal.length>0){const c=new He().getNormalMatrix(r),u=new Gt(a.normal,3);u.applyNormalMatrix(c),s.setAttribute("normal",u)}if(a.uvs.forEach(function(c,u){Oy==="uv2"&&u++;const f=u===0?"uv":`uv${u}`;s.setAttribute(f,new Gt(a.uvs[u],2))}),o.material&&o.material.mappingType!=="AllSame"){let c=a.materialIndex[0],u=0;if(a.materialIndex.forEach(function(f,h){f!==c&&(s.addGroup(u,h-u,c),c=f,u=h)}),s.groups.length>0){const f=s.groups[s.groups.length-1],h=f.start+f.count;h!==a.materialIndex.length&&s.addGroup(h,a.materialIndex.length-h,c)}s.groups.length===0&&s.addGroup(0,a.materialIndex.length,a.materialIndex[0])}return this.addMorphTargets(s,e,i,r),s}parseGeoNode(e,t){const i={};if(i.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],i.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&(i.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(i.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(i.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){i.uv=[];let r=0;for(;e.LayerElementUV[r];)e.LayerElementUV[r].UV&&i.uv.push(this.parseUVs(e.LayerElementUV[r])),r++}return i.weightTable={},t!==null&&(i.skeleton=t,t.rawBones.forEach(function(r,s){r.indices.forEach(function(o,a){i.weightTable[o]===void 0&&(i.weightTable[o]=[]),i.weightTable[o].push({id:s,weight:r.weights[a]})})})),i}genBuffers(e){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let i=0,r=0,s=!1,o=[],a=[],l=[],c=[],u=[],f=[];const h=this;return e.vertexIndices.forEach(function(d,g){let v,m=!1;d<0&&(d=d^-1,m=!0);let p=[],A=[];if(o.push(d*3,d*3+1,d*3+2),e.color){const T=Gs(g,i,d,e.color);l.push(T[0],T[1],T[2])}if(e.skeleton){if(e.weightTable[d]!==void 0&&e.weightTable[d].forEach(function(T){A.push(T.weight),p.push(T.id)}),A.length>4){s||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),s=!0);const T=[0,0,0,0],E=[0,0,0,0];A.forEach(function(L,I){let C=L,U=p[I];E.forEach(function(b,S,D){if(C>b){D[S]=C,C=b;const J=T[S];T[S]=U,U=J}})}),p=T,A=E}for(;A.length<4;)A.push(0),p.push(0);for(let T=0;T<4;++T)u.push(A[T]),f.push(p[T])}if(e.normal){const T=Gs(g,i,d,e.normal);a.push(T[0],T[1],T[2])}e.material&&e.material.mappingType!=="AllSame"&&(v=Gs(g,i,d,e.material)[0]),e.uv&&e.uv.forEach(function(T,E){const L=Gs(g,i,d,T);c[E]===void 0&&(c[E]=[]),c[E].push(L[0]),c[E].push(L[1])}),r++,m&&(h.genFace(t,e,o,v,a,l,c,u,f,r),i++,r=0,o=[],a=[],l=[],c=[],u=[],f=[])}),t}genFace(e,t,i,r,s,o,a,l,c,u){for(let f=2;f<u;f++)e.vertex.push(t.vertexPositions[i[0]]),e.vertex.push(t.vertexPositions[i[1]]),e.vertex.push(t.vertexPositions[i[2]]),e.vertex.push(t.vertexPositions[i[(f-1)*3]]),e.vertex.push(t.vertexPositions[i[(f-1)*3+1]]),e.vertex.push(t.vertexPositions[i[(f-1)*3+2]]),e.vertex.push(t.vertexPositions[i[f*3]]),e.vertex.push(t.vertexPositions[i[f*3+1]]),e.vertex.push(t.vertexPositions[i[f*3+2]]),t.skeleton&&(e.vertexWeights.push(l[0]),e.vertexWeights.push(l[1]),e.vertexWeights.push(l[2]),e.vertexWeights.push(l[3]),e.vertexWeights.push(l[(f-1)*4]),e.vertexWeights.push(l[(f-1)*4+1]),e.vertexWeights.push(l[(f-1)*4+2]),e.vertexWeights.push(l[(f-1)*4+3]),e.vertexWeights.push(l[f*4]),e.vertexWeights.push(l[f*4+1]),e.vertexWeights.push(l[f*4+2]),e.vertexWeights.push(l[f*4+3]),e.weightsIndices.push(c[0]),e.weightsIndices.push(c[1]),e.weightsIndices.push(c[2]),e.weightsIndices.push(c[3]),e.weightsIndices.push(c[(f-1)*4]),e.weightsIndices.push(c[(f-1)*4+1]),e.weightsIndices.push(c[(f-1)*4+2]),e.weightsIndices.push(c[(f-1)*4+3]),e.weightsIndices.push(c[f*4]),e.weightsIndices.push(c[f*4+1]),e.weightsIndices.push(c[f*4+2]),e.weightsIndices.push(c[f*4+3])),t.color&&(e.colors.push(o[0]),e.colors.push(o[1]),e.colors.push(o[2]),e.colors.push(o[(f-1)*3]),e.colors.push(o[(f-1)*3+1]),e.colors.push(o[(f-1)*3+2]),e.colors.push(o[f*3]),e.colors.push(o[f*3+1]),e.colors.push(o[f*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(r),e.materialIndex.push(r),e.materialIndex.push(r)),t.normal&&(e.normal.push(s[0]),e.normal.push(s[1]),e.normal.push(s[2]),e.normal.push(s[(f-1)*3]),e.normal.push(s[(f-1)*3+1]),e.normal.push(s[(f-1)*3+2]),e.normal.push(s[f*3]),e.normal.push(s[f*3+1]),e.normal.push(s[f*3+2])),t.uv&&t.uv.forEach(function(h,d){e.uvs[d]===void 0&&(e.uvs[d]=[]),e.uvs[d].push(a[d][0]),e.uvs[d].push(a[d][1]),e.uvs[d].push(a[d][(f-1)*2]),e.uvs[d].push(a[d][(f-1)*2+1]),e.uvs[d].push(a[d][f*2]),e.uvs[d].push(a[d][f*2+1])})}addMorphTargets(e,t,i,r){if(i.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const s=this;i.forEach(function(o){o.rawTargets.forEach(function(a){const l=Ye.Objects.Geometry[a.geoID];l!==void 0&&s.genMorphGeometry(e,t,l,r,a.name)})})}genMorphGeometry(e,t,i,r,s){const o=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],a=i.Vertices!==void 0?i.Vertices.a:[],l=i.Indexes!==void 0?i.Indexes.a:[],c=e.attributes.position.count*3,u=new Float32Array(c);for(let g=0;g<l.length;g++){const v=l[g]*3;u[v]=a[g*3],u[v+1]=a[g*3+1],u[v+2]=a[g*3+2]}const f={vertexIndices:o,vertexPositions:u},h=this.genBuffers(f),d=new Gt(h.vertex,3);d.name=s||i.attrName,d.applyMatrix4(r),e.morphAttributes.position.push(d)}parseNormals(e){const t=e.MappingInformationType,i=e.ReferenceInformationType,r=e.Normals.a;let s=[];return i==="IndexToDirect"&&("NormalIndex"in e?s=e.NormalIndex.a:"NormalsIndex"in e&&(s=e.NormalsIndex.a)),{dataSize:3,buffer:r,indices:s,mappingType:t,referenceType:i}}parseUVs(e){const t=e.MappingInformationType,i=e.ReferenceInformationType,r=e.UV.a;let s=[];return i==="IndexToDirect"&&(s=e.UVIndex.a),{dataSize:2,buffer:r,indices:s,mappingType:t,referenceType:i}}parseVertexColors(e){const t=e.MappingInformationType,i=e.ReferenceInformationType,r=e.Colors.a;let s=[];return i==="IndexToDirect"&&(s=e.ColorIndex.a),{dataSize:4,buffer:r,indices:s,mappingType:t,referenceType:i}}parseMaterialIndices(e){const t=e.MappingInformationType,i=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:i};const r=e.Materials.a,s=[];for(let o=0;o<r.length;++o)s.push(o);return{dataSize:1,buffer:r,indices:s,mappingType:t,referenceType:i}}parseNurbsGeometry(e){if(tf===void 0)return console.error("THREE.FBXLoader: The loader relies on NURBSCurve for any nurbs present in the model. Nurbs will show up as empty geometry."),new sn;const t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new sn;const i=t-1,r=e.KnotVector.a,s=[],o=e.Points.a;for(let f=0,h=o.length;f<h;f+=4)s.push(new je().fromArray(o,f));let a,l;if(e.Form==="Closed")s.push(s[0]);else if(e.Form==="Periodic"){a=i,l=r.length-1-a;for(let f=0;f<i;++f)s.push(s[f])}const u=new tf(i,r,s,a,l).getPoints(s.length*12);return new sn().setFromPoints(u)}}class lS{parse(){const e=[],t=this.parseClips();if(t!==void 0)for(const i in t){const r=t[i],s=this.addClip(r);e.push(s)}return e}parseClips(){if(Ye.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const e=Ye.Objects.AnimationCurveNode,t=new Map;for(const i in e){const r=e[i];if(r.attrName.match(/S|R|T|DeformPercent/)!==null){const s={id:r.id,attr:r.attrName,curves:{}};t.set(s.id,s)}}return t}parseAnimationCurves(e){const t=Ye.Objects.AnimationCurve;for(const i in t){const r={id:t[i].id,times:t[i].KeyTime.a.map(dS),values:t[i].KeyValueFloat.a},s=gt.get(r.id);if(s!==void 0){const o=s.parents[0].ID,a=s.parents[0].relationship;a.match(/X/)?e.get(o).curves.x=r:a.match(/Y/)?e.get(o).curves.y=r:a.match(/Z/)?e.get(o).curves.z=r:a.match(/d|DeformPercent/)&&e.has(o)&&(e.get(o).curves.morph=r)}}}parseAnimationLayers(e){const t=Ye.Objects.AnimationLayer,i=new Map;for(const r in t){const s=[],o=gt.get(parseInt(r));o!==void 0&&(o.children.forEach(function(l,c){if(e.has(l.ID)){const u=e.get(l.ID);if(u.curves.x!==void 0||u.curves.y!==void 0||u.curves.z!==void 0){if(s[c]===void 0){const f=gt.get(l.ID).parents.filter(function(h){return h.relationship!==void 0})[0].ID;if(f!==void 0){const h=Ye.Objects.Model[f.toString()];if(h===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}const d={modelName:h.attrName?Qe.sanitizeNodeName(h.attrName):"",ID:h.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};kt.traverse(function(g){g.ID===h.id&&(d.transform=g.matrix,g.userData.transformData&&(d.eulerOrder=g.userData.transformData.eulerOrder))}),d.transform||(d.transform=new Re),"PreRotation"in h&&(d.preRotation=h.PreRotation.value),"PostRotation"in h&&(d.postRotation=h.PostRotation.value),s[c]=d}}s[c]&&(s[c][u.attr]=u)}else if(u.curves.morph!==void 0){if(s[c]===void 0){const f=gt.get(l.ID).parents.filter(function(p){return p.relationship!==void 0})[0].ID,h=gt.get(f).parents[0].ID,d=gt.get(h).parents[0].ID,g=gt.get(d).parents[0].ID,v=Ye.Objects.Model[g],m={modelName:v.attrName?Qe.sanitizeNodeName(v.attrName):"",morphName:Ye.Objects.Deformer[f].attrName};s[c]=m}s[c][u.attr]=u}}}),i.set(parseInt(r),s))}return i}parseAnimStacks(e){const t=Ye.Objects.AnimationStack,i={};for(const r in t){const s=gt.get(parseInt(r)).children;s.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const o=e.get(s[0].ID);i[r]={name:t[r].attrName,layer:o}}return i}addClip(e){let t=[];const i=this;return e.layer.forEach(function(r){t=t.concat(i.generateTracks(r))}),new P_(e.name,-1,t)}generateTracks(e){const t=[];let i=new O,r=new Tn,s=new O;if(e.transform&&e.transform.decompose(i,r,s),i=i.toArray(),r=new Pt().setFromQuaternion(r,e.eulerOrder).toArray(),s=s.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const o=this.generateVectorTrack(e.modelName,e.T.curves,i,"position");o!==void 0&&t.push(o)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const o=this.generateRotationTrack(e.modelName,e.R.curves,r,e.preRotation,e.postRotation,e.eulerOrder);o!==void 0&&t.push(o)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const o=this.generateVectorTrack(e.modelName,e.S.curves,s,"scale");o!==void 0&&t.push(o)}if(e.DeformPercent!==void 0){const o=this.generateMorphTrack(e);o!==void 0&&t.push(o)}return t}generateVectorTrack(e,t,i,r){const s=this.getTimesForAllAxes(t),o=this.getKeyframeTrackValues(s,t,i);return new ss(e+"."+r,s,o)}generateRotationTrack(e,t,i,r,s,o){t.x!==void 0&&(this.interpolateRotations(t.x),t.x.values=t.x.values.map(Mn.degToRad)),t.y!==void 0&&(this.interpolateRotations(t.y),t.y.values=t.y.values.map(Mn.degToRad)),t.z!==void 0&&(this.interpolateRotations(t.z),t.z.values=t.z.values.map(Mn.degToRad));const a=this.getTimesForAllAxes(t),l=this.getKeyframeTrackValues(a,t,i);r!==void 0&&(r=r.map(Mn.degToRad),r.push(o),r=new Pt().fromArray(r),r=new Tn().setFromEuler(r)),s!==void 0&&(s=s.map(Mn.degToRad),s.push(o),s=new Pt().fromArray(s),s=new Tn().setFromEuler(s).invert());const c=new Tn,u=new Pt,f=[];for(let h=0;h<l.length;h+=3)u.set(l[h],l[h+1],l[h+2],o),c.setFromEuler(u),r!==void 0&&c.premultiply(r),s!==void 0&&c.multiply(s),c.toArray(f,h/3*4);return new us(e+".quaternion",a,f)}generateMorphTrack(e){const t=e.DeformPercent.curves.morph,i=t.values.map(function(s){return s/100}),r=kt.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new rs(e.modelName+".morphTargetInfluences["+r+"]",t.times,i)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(i,r){return i-r}),t.length>1){let i=1,r=t[0];for(let s=1;s<t.length;s++){const o=t[s];o!==r&&(t[i]=o,r=o,i++)}t=t.slice(0,i)}return t}getKeyframeTrackValues(e,t,i){const r=i,s=[];let o=-1,a=-1,l=-1;return e.forEach(function(c){if(t.x&&(o=t.x.times.indexOf(c)),t.y&&(a=t.y.times.indexOf(c)),t.z&&(l=t.z.times.indexOf(c)),o!==-1){const u=t.x.values[o];s.push(u),r[0]=u}else s.push(r[0]);if(a!==-1){const u=t.y.values[a];s.push(u),r[1]=u}else s.push(r[1]);if(l!==-1){const u=t.z.values[l];s.push(u),r[2]=u}else s.push(r[2])}),s}interpolateRotations(e){for(let t=1;t<e.values.length;t++){const i=e.values[t-1],r=e.values[t]-i,s=Math.abs(r);if(s>=180){const o=s/180,a=r/o;let l=i+a;const c=e.times[t-1],f=(e.times[t]-c)/o;let h=c+f;const d=[],g=[];for(;h<e.times[t];)d.push(h),h+=f,g.push(l),l+=a;e.times=sf(e.times,t,d),e.values=sf(e.values,t,g)}}}}class cS{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new Zh,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,i=e.split(/[\r\n]+/);return i.forEach(function(r,s){const o=r.match(/^[\s\t]*;/),a=r.match(/^[\s\t]*$/);if(o||a)return;const l=r.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),c=r.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),u=r.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(r,l):c?t.parseNodeProperty(r,c,i[++s]):u?t.popStack():r.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(r)}),this.allNodes}parseNodeBegin(e,t){const i=t[1].trim().replace(/^"/,"").replace(/"$/,""),r=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),s={name:i},o=this.parseNodeAttr(r),a=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(i,s):i in a?(i==="PoseNode"?a.PoseNode.push(s):a[i].id!==void 0&&(a[i]={},a[i][a[i].id]=a[i]),o.id!==""&&(a[i][o.id]=s)):typeof o.id=="number"?(a[i]={},a[i][o.id]=s):i!=="Properties70"&&(i==="PoseNode"?a[i]=[s]:a[i]=s),typeof o.id=="number"&&(s.id=o.id),o.name!==""&&(s.attrName=o.name),o.type!==""&&(s.attrType=o.type),this.pushStack(s)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let i="",r="";return e.length>1&&(i=e[1].replace(/^(\w+)::/,""),r=e[2]),{id:t,name:i,type:r}}parseNodeProperty(e,t,i){let r=t[1].replace(/^"/,"").replace(/"$/,"").trim(),s=t[2].replace(/^"/,"").replace(/"$/,"").trim();r==="Content"&&s===","&&(s=i.replace(/"/g,"").replace(/,$/,"").trim());const o=this.getCurrentNode();if(o.name==="Properties70"){this.parseNodeSpecialProperty(e,r,s);return}if(r==="C"){const l=s.split(",").slice(1),c=parseInt(l[0]),u=parseInt(l[1]);let f=s.split(",").slice(3);f=f.map(function(h){return h.trim().replace(/^"/,"")}),r="connections",s=[c,u],mS(s,f),o[r]===void 0&&(o[r]=[])}r==="Node"&&(o.id=s),r in o&&Array.isArray(o[r])?o[r].push(s):r!=="a"?o[r]=s:o.a=s,this.setCurrentProp(o,r),r==="a"&&s.slice(-1)!==","&&(o.a=ba(s))}parseNodePropertyContinued(e){const t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=ba(t.a))}parseNodeSpecialProperty(e,t,i){const r=i.split('",').map(function(u){return u.trim().replace(/^\"/,"").replace(/\s/,"_")}),s=r[0],o=r[1],a=r[2],l=r[3];let c=r[4];switch(o){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=ba(c);break}this.getPrevNode()[s]={type:o,type2:a,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),s)}}class uS{parse(e){const t=new nf(e);t.skip(23);const i=t.getUint32();if(i<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+i);const r=new Zh;for(;!this.endOfContent(t);){const s=this.parseNode(t,i);s!==null&&r.add(s.name,s)}return r}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){const i={},r=t>=7500?e.getUint64():e.getUint32(),s=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();const o=e.getUint8(),a=e.getString(o);if(r===0)return null;const l=[];for(let h=0;h<s;h++)l.push(this.parseProperty(e));const c=l.length>0?l[0]:"",u=l.length>1?l[1]:"",f=l.length>2?l[2]:"";for(i.singleProperty=s===1&&e.getOffset()===r;r>e.getOffset();){const h=this.parseNode(e,t);h!==null&&this.parseSubNode(a,i,h)}return i.propertyList=l,typeof c=="number"&&(i.id=c),u!==""&&(i.attrName=u),f!==""&&(i.attrType=f),a!==""&&(i.name=a),i}parseSubNode(e,t,i){if(i.singleProperty===!0){const r=i.propertyList[0];Array.isArray(r)?(t[i.name]=i,i.a=r):t[i.name]=r}else if(e==="Connections"&&i.name==="C"){const r=[];i.propertyList.forEach(function(s,o){o!==0&&r.push(s)}),t.connections===void 0&&(t.connections=[]),t.connections.push(r)}else if(i.name==="Properties70")Object.keys(i).forEach(function(s){t[s]=i[s]});else if(e==="Properties70"&&i.name==="P"){let r=i.propertyList[0],s=i.propertyList[1];const o=i.propertyList[2],a=i.propertyList[3];let l;r.indexOf("Lcl ")===0&&(r=r.replace("Lcl ","Lcl_")),s.indexOf("Lcl ")===0&&(s=s.replace("Lcl ","Lcl_")),s==="Color"||s==="ColorRGB"||s==="Vector"||s==="Vector3D"||s.indexOf("Lcl_")===0?l=[i.propertyList[4],i.propertyList[5],i.propertyList[6]]:l=i.propertyList[4],t[r]={type:s,type2:o,flag:a,value:l}}else t[i.name]===void 0?typeof i.id=="number"?(t[i.name]={},t[i.name][i.id]=i):t[i.name]=i:i.name==="PoseNode"?(Array.isArray(t[i.name])||(t[i.name]=[t[i.name]]),t[i.name].push(i)):t[i.name][i.id]===void 0&&(t[i.name][i.id]=i)}parseProperty(e){const t=e.getString(1);let i;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return i=e.getUint32(),e.getArrayBuffer(i);case"S":return i=e.getUint32(),e.getString(i);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const r=e.getUint32(),s=e.getUint32(),o=e.getUint32();if(s===0)switch(t){case"b":case"c":return e.getBooleanArray(r);case"d":return e.getFloat64Array(r);case"f":return e.getFloat32Array(r);case"i":return e.getInt32Array(r);case"l":return e.getInt64Array(r)}const a=Ky(new Uint8Array(e.getArrayBuffer(o))),l=new nf(a.buffer);switch(t){case"b":case"c":return l.getBooleanArray(r);case"d":return l.getFloat64Array(r);case"f":return l.getFloat32Array(r);case"i":return l.getInt32Array(r);case"l":return l.getInt64Array(r)}default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class nf{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const t=[];for(let i=0;i<e;i++)t.push(this.getBoolean());return t}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const t=[];for(let i=0;i<e;i++)t.push(this.getInt32());return t}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){const t=[];for(let i=0;i<e;i++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const t=[];for(let i=0;i<e;i++)t.push(this.getFloat32());return t}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const t=[];for(let i=0;i<e;i++)t.push(this.getFloat64());return t}getArrayBuffer(e){const t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){let t=[];for(let r=0;r<e;r++)t[r]=this.getUint8();const i=t.indexOf(0);return i>=0&&(t=t.slice(0,i)),Kh(new Uint8Array(t))}}class Zh{add(e,t){this[e]=t}}function fS(n){const e="Kaydara FBX Binary  \0";return n.byteLength>=e.length&&e===ed(n,0,e.length)}function hS(n){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function i(r){const s=n[r-1];return n=n.slice(t+r),t++,s}for(let r=0;r<e.length;++r)if(i(1)===e[r])return!1;return!0}function rf(n){const e=/FBXVersion: (\d+)/,t=n.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function dS(n){return n/46186158e3}const pS=[];function Gs(n,e,t,i){let r;switch(i.mappingType){case"ByPolygonVertex":r=n;break;case"ByPolygon":r=e;break;case"ByVertice":r=t;break;case"AllSame":r=i.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+i.mappingType)}i.referenceType==="IndexToDirect"&&(r=i.indices[r]);const s=r*i.dataSize,o=s+i.dataSize;return gS(pS,i.buffer,s,o)}const Ta=new Pt,Qi=new O;function Jh(n){const e=new Re,t=new Re,i=new Re,r=new Re,s=new Re,o=new Re,a=new Re,l=new Re,c=new Re,u=new Re,f=new Re,h=new Re,d=n.inheritType?n.inheritType:0;if(n.translation&&e.setPosition(Qi.fromArray(n.translation)),n.preRotation){const S=n.preRotation.map(Mn.degToRad);S.push(n.eulerOrder),t.makeRotationFromEuler(Ta.fromArray(S))}if(n.rotation){const S=n.rotation.map(Mn.degToRad);S.push(n.eulerOrder),i.makeRotationFromEuler(Ta.fromArray(S))}if(n.postRotation){const S=n.postRotation.map(Mn.degToRad);S.push(n.eulerOrder),r.makeRotationFromEuler(Ta.fromArray(S)),r.invert()}n.scale&&s.scale(Qi.fromArray(n.scale)),n.scalingOffset&&a.setPosition(Qi.fromArray(n.scalingOffset)),n.scalingPivot&&o.setPosition(Qi.fromArray(n.scalingPivot)),n.rotationOffset&&l.setPosition(Qi.fromArray(n.rotationOffset)),n.rotationPivot&&c.setPosition(Qi.fromArray(n.rotationPivot)),n.parentMatrixWorld&&(f.copy(n.parentMatrix),u.copy(n.parentMatrixWorld));const g=t.clone().multiply(i).multiply(r),v=new Re;v.extractRotation(u);const m=new Re;m.copyPosition(u);const p=m.clone().invert().multiply(u),A=v.clone().invert().multiply(p),T=s,E=new Re;if(d===0)E.copy(v).multiply(g).multiply(A).multiply(T);else if(d===1)E.copy(v).multiply(A).multiply(g).multiply(T);else{const D=new Re().scale(new O().setFromMatrixScale(f)).clone().invert(),J=A.clone().multiply(D);E.copy(v).multiply(g).multiply(J).multiply(T)}const L=c.clone().invert(),I=o.clone().invert();let C=e.clone().multiply(l).multiply(c).multiply(t).multiply(i).multiply(r).multiply(L).multiply(a).multiply(o).multiply(s).multiply(I);const U=new Re().copyPosition(C),b=u.clone().multiply(U);return h.copyPosition(b),C=h.clone().multiply(E),C.premultiply(u.invert()),C}function Qh(n){n=n||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return n===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[n]}function ba(n){return n.split(",").map(function(t){return parseFloat(t)})}function ed(n,e,t){return e===void 0&&(e=0),t===void 0&&(t=n.byteLength),Kh(new Uint8Array(n,e,t))}function mS(n,e){for(let t=0,i=n.length,r=e.length;t<r;t++,i++)n[i]=e[t]}function gS(n,e,t,i){for(let r=t,s=0;r<i;r++,s++)n[s]=e[r];return n}function sf(n,e,t){return n.slice(0,e).concat(t).concat(n.slice(e))}const _S={__name:"rose",setup(n){const e=Wd("");return Uf(()=>{const t=new h_,i=new Bt(75,window.innerWidth/window.innerHeight,.1,1e3);i.position.set(0,4.6,3.6),i.lookAt(0,1,-1);const r=new Fy({antialias:!0});r.setSize(window.innerWidth,window.innerHeight),document.getElementById("app").appendChild(r.domElement);const s=new Oh("fff",.5);t.add(s);const o=new Nh("fff",1);o.position.set(10,15,5),t.add(o);const a=new Sl(16777215,.5,50);a.position.set(0,1,3),t.add(a),t.background=new Fe("#c9e3e7");const l=new Fh,c=l.load("src/assets/textures/m_petal_roughness.jpg"),u=l.load("src/assets/textures/m_stem_roughness.jpg"),f=l.load("src/assets/textures/m_leafs_roughness.jpg"),h=l.load("src/assets/textures/m_thorns_roughness.jpg");new sS().load("src/assets/fbx/rose01.fbx",g=>{console.log("资源",g),g.traverse(v=>{v.isMesh&&v.material.forEach(m=>{console.log(m.name,m),m.name=="m_petal"&&(m.map=c,m.needsUpdate=!0),m.name=="m_stem"&&(m.map=u,m.emissive=new Fe(3497531),m.emissiveIntensity=.2,m.needsUpdate=!0),m.name=="m_leafs"&&(m.map=f,m.roughness=.8,m.metalness=0,m.emissive=new Fe(7048739),m.emissiveIntensity=.2,m.needsUpdate=!0),m.name=="m_thorns"&&(m.map=h,m.needsUpdate=!0)})}),t.add(g),g.scale.set(.034,.034,.034),setInterval(()=>{g.rotation.y+=.01,r.render(t,i)},30)},g=>{console.log(g.loaded/g.total*100+"% loaded")},g=>{console.error("Error loading FBX:",g)})}),(t,i)=>(eh(),jp("div",{ref_key:"rose",ref:e},null,512))}},vS={__name:"App",setup(n){return(e,t)=>(eh(),Kp(_S))}};Lm(vS).mount("#app");
