import{i as V,aa as yt,I as et,Y as mt,_ as _t,m as bt}from"./index.3dbb7196.js";import{K as tt,E as j,h as X,j as x,n as Tt,k as he,m as ye,U as Et,f as wt,P as St,r as oe,A as Pt,X as Ee,x as At}from"./entry.7712d61e.js";var Ot=typeof global=="object"&&global&&global.Object===Object&&global;const nt=Ot;var $t=typeof self=="object"&&self&&self.Object===Object&&self,Ct=nt||$t||Function("return this")();const b=Ct;var xt=b.Symbol;const A=xt;var rt=Object.prototype,Ft=rt.hasOwnProperty,It=rt.toString,K=A?A.toStringTag:void 0;function jt(e){var t=Ft.call(e,K),n=e[K];try{e[K]=void 0;var r=!0}catch{}var o=It.call(e);return r&&(t?e[K]=n:delete e[K]),o}var Lt=Object.prototype,Nt=Lt.toString;function Rt(e){return Nt.call(e)}var Dt="[object Null]",Mt="[object Undefined]",we=A?A.toStringTag:void 0;function D(e){return e==null?e===void 0?Mt:Dt:we&&we in Object(e)?jt(e):Rt(e)}function R(e){return e!=null&&typeof e=="object"}var Ut="[object Symbol]";function me(e){return typeof e=="symbol"||R(e)&&D(e)==Ut}function Kt(e,t){for(var n=-1,r=e==null?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}var zt=Array.isArray;const F=zt;var Bt=1/0,Se=A?A.prototype:void 0,Pe=Se?Se.toString:void 0;function at(e){if(typeof e=="string")return e;if(F(e))return Kt(e,at)+"";if(me(e))return Pe?Pe.call(e):"";var t=e+"";return t=="0"&&1/e==-Bt?"-0":t}function ot(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Gt="[object AsyncFunction]",Ht="[object Function]",Wt="[object GeneratorFunction]",Yt="[object Proxy]";function st(e){if(!ot(e))return!1;var t=D(e);return t==Ht||t==Wt||t==Gt||t==Yt}var Jt=b["__core-js_shared__"];const se=Jt;var Ae=function(){var e=/[^.]+$/.exec(se&&se.keys&&se.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Zt(e){return!!Ae&&Ae in e}var qt=Function.prototype,Vt=qt.toString;function L(e){if(e!=null){try{return Vt.call(e)}catch{}try{return e+""}catch{}}return""}var Xt=/[\\^$.*+?()[\]{}|]/g,kt=/^\[object .+?Constructor\]$/,Qt=Function.prototype,en=Object.prototype,tn=Qt.toString,nn=en.hasOwnProperty,rn=RegExp("^"+tn.call(nn).replace(Xt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function an(e){if(!ot(e)||Zt(e))return!1;var t=st(e)?rn:kt;return t.test(L(e))}function on(e,t){return e==null?void 0:e[t]}function M(e,t){var n=on(e,t);return an(n)?n:void 0}var sn=M(b,"WeakMap");const fe=sn;var cn=9007199254740991,un=/^(?:0|[1-9]\d*)$/;function ln(e,t){var n=typeof e;return t=t??cn,!!t&&(n=="number"||n!="symbol"&&un.test(e))&&e>-1&&e%1==0&&e<t}function it(e,t){return e===t||e!==e&&t!==t}var fn=9007199254740991;function ct(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=fn}function dn(e){return e!=null&&ct(e.length)&&!st(e)}var pn=Object.prototype;function gn(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||pn;return e===n}function vn(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}var hn="[object Arguments]";function Oe(e){return R(e)&&D(e)==hn}var ut=Object.prototype,yn=ut.hasOwnProperty,mn=ut.propertyIsEnumerable,_n=Oe(function(){return arguments}())?Oe:function(e){return R(e)&&yn.call(e,"callee")&&!mn.call(e,"callee")};const bn=_n;function Tn(){return!1}var lt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,$e=lt&&typeof module=="object"&&module&&!module.nodeType&&module,En=$e&&$e.exports===lt,Ce=En?b.Buffer:void 0,wn=Ce?Ce.isBuffer:void 0,Sn=wn||Tn;const de=Sn;var Pn="[object Arguments]",An="[object Array]",On="[object Boolean]",$n="[object Date]",Cn="[object Error]",xn="[object Function]",Fn="[object Map]",In="[object Number]",jn="[object Object]",Ln="[object RegExp]",Nn="[object Set]",Rn="[object String]",Dn="[object WeakMap]",Mn="[object ArrayBuffer]",Un="[object DataView]",Kn="[object Float32Array]",zn="[object Float64Array]",Bn="[object Int8Array]",Gn="[object Int16Array]",Hn="[object Int32Array]",Wn="[object Uint8Array]",Yn="[object Uint8ClampedArray]",Jn="[object Uint16Array]",Zn="[object Uint32Array]",f={};f[Kn]=f[zn]=f[Bn]=f[Gn]=f[Hn]=f[Wn]=f[Yn]=f[Jn]=f[Zn]=!0;f[Pn]=f[An]=f[Mn]=f[On]=f[Un]=f[$n]=f[Cn]=f[xn]=f[Fn]=f[In]=f[jn]=f[Ln]=f[Nn]=f[Rn]=f[Dn]=!1;function qn(e){return R(e)&&ct(e.length)&&!!f[D(e)]}function Vn(e){return function(t){return e(t)}}var ft=typeof exports=="object"&&exports&&!exports.nodeType&&exports,z=ft&&typeof module=="object"&&module&&!module.nodeType&&module,Xn=z&&z.exports===ft,ie=Xn&&nt.process,kn=function(){try{var e=z&&z.require&&z.require("util").types;return e||ie&&ie.binding&&ie.binding("util")}catch{}}();const xe=kn;var Fe=xe&&xe.isTypedArray,Qn=Fe?Vn(Fe):qn;const dt=Qn;var er=Object.prototype,tr=er.hasOwnProperty;function nr(e,t){var n=F(e),r=!n&&bn(e),o=!n&&!r&&de(e),a=!n&&!r&&!o&&dt(e),i=n||r||o||a,l=i?vn(e.length,String):[],d=l.length;for(var u in e)(t||tr.call(e,u))&&!(i&&(u=="length"||o&&(u=="offset"||u=="parent")||a&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||ln(u,d)))&&l.push(u);return l}function rr(e,t){return function(n){return e(t(n))}}var ar=rr(Object.keys,Object);const or=ar;var sr=Object.prototype,ir=sr.hasOwnProperty;function cr(e){if(!gn(e))return or(e);var t=[];for(var n in Object(e))ir.call(e,n)&&n!="constructor"&&t.push(n);return t}function ur(e){return dn(e)?nr(e):cr(e)}var lr=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,fr=/^\w*$/;function dr(e,t){if(F(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||me(e)?!0:fr.test(e)||!lr.test(e)||t!=null&&e in Object(t)}var pr=M(Object,"create");const B=pr;function gr(){this.__data__=B?B(null):{},this.size=0}function vr(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var hr="__lodash_hash_undefined__",yr=Object.prototype,mr=yr.hasOwnProperty;function _r(e){var t=this.__data__;if(B){var n=t[e];return n===hr?void 0:n}return mr.call(t,e)?t[e]:void 0}var br=Object.prototype,Tr=br.hasOwnProperty;function Er(e){var t=this.__data__;return B?t[e]!==void 0:Tr.call(t,e)}var wr="__lodash_hash_undefined__";function Sr(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=B&&t===void 0?wr:t,this}function I(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}I.prototype.clear=gr;I.prototype.delete=vr;I.prototype.get=_r;I.prototype.has=Er;I.prototype.set=Sr;function Pr(){this.__data__=[],this.size=0}function Q(e,t){for(var n=e.length;n--;)if(it(e[n][0],t))return n;return-1}var Ar=Array.prototype,Or=Ar.splice;function $r(e){var t=this.__data__,n=Q(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():Or.call(t,n,1),--this.size,!0}function Cr(e){var t=this.__data__,n=Q(t,e);return n<0?void 0:t[n][1]}function xr(e){return Q(this.__data__,e)>-1}function Fr(e,t){var n=this.__data__,r=Q(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function T(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}T.prototype.clear=Pr;T.prototype.delete=$r;T.prototype.get=Cr;T.prototype.has=xr;T.prototype.set=Fr;var Ir=M(b,"Map");const G=Ir;function jr(){this.size=0,this.__data__={hash:new I,map:new(G||T),string:new I}}function Lr(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function ee(e,t){var n=e.__data__;return Lr(t)?n[typeof t=="string"?"string":"hash"]:n.map}function Nr(e){var t=ee(this,e).delete(e);return this.size-=t?1:0,t}function Rr(e){return ee(this,e).get(e)}function Dr(e){return ee(this,e).has(e)}function Mr(e,t){var n=ee(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function E(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}E.prototype.clear=jr;E.prototype.delete=Nr;E.prototype.get=Rr;E.prototype.has=Dr;E.prototype.set=Mr;var Ur="Expected a function";function _e(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(Ur);var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],a=n.cache;if(a.has(o))return a.get(o);var i=e.apply(this,r);return n.cache=a.set(o,i)||a,i};return n.cache=new(_e.Cache||E),n}_e.Cache=E;var Kr=500;function zr(e){var t=_e(e,function(r){return n.size===Kr&&n.clear(),r}),n=t.cache;return t}var Br=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Gr=/\\(\\)?/g,Hr=zr(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(Br,function(n,r,o,a){t.push(o?a.replace(Gr,"$1"):r||n)}),t});const Wr=Hr;function Yr(e){return e==null?"":at(e)}function Jr(e,t){return F(e)?e:dr(e,t)?[e]:Wr(Yr(e))}var Zr=1/0;function qr(e){if(typeof e=="string"||me(e))return e;var t=e+"";return t=="0"&&1/e==-Zr?"-0":t}function Vr(e,t){t=Jr(t,e);for(var n=0,r=t.length;e!=null&&n<r;)e=e[qr(t[n++])];return n&&n==r?e:void 0}function Xr(e,t,n){var r=e==null?void 0:Vr(e,t);return r===void 0?n:r}function kr(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e}function Qr(){this.__data__=new T,this.size=0}function ea(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function ta(e){return this.__data__.get(e)}function na(e){return this.__data__.has(e)}var ra=200;function aa(e,t){var n=this.__data__;if(n instanceof T){var r=n.__data__;if(!G||r.length<ra-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new E(r)}return n.set(e,t),this.size=n.size,this}function P(e){var t=this.__data__=new T(e);this.size=t.size}P.prototype.clear=Qr;P.prototype.delete=ea;P.prototype.get=ta;P.prototype.has=na;P.prototype.set=aa;function oa(e,t){for(var n=-1,r=e==null?0:e.length,o=0,a=[];++n<r;){var i=e[n];t(i,n,e)&&(a[o++]=i)}return a}function sa(){return[]}var ia=Object.prototype,ca=ia.propertyIsEnumerable,Ie=Object.getOwnPropertySymbols,ua=Ie?function(e){return e==null?[]:(e=Object(e),oa(Ie(e),function(t){return ca.call(e,t)}))}:sa;const la=ua;function fa(e,t,n){var r=t(e);return F(e)?r:kr(r,n(e))}function je(e){return fa(e,ur,la)}var da=M(b,"DataView");const pe=da;var pa=M(b,"Promise");const ge=pa;var ga=M(b,"Set");const ve=ga;var Le="[object Map]",va="[object Object]",Ne="[object Promise]",Re="[object Set]",De="[object WeakMap]",Me="[object DataView]",ha=L(pe),ya=L(G),ma=L(ge),_a=L(ve),ba=L(fe),C=D;(pe&&C(new pe(new ArrayBuffer(1)))!=Me||G&&C(new G)!=Le||ge&&C(ge.resolve())!=Ne||ve&&C(new ve)!=Re||fe&&C(new fe)!=De)&&(C=function(e){var t=D(e),n=t==va?e.constructor:void 0,r=n?L(n):"";if(r)switch(r){case ha:return Me;case ya:return Le;case ma:return Ne;case _a:return Re;case ba:return De}return t});const Ue=C;var Ta=b.Uint8Array;const Ke=Ta;var Ea="__lodash_hash_undefined__";function wa(e){return this.__data__.set(e,Ea),this}function Sa(e){return this.__data__.has(e)}function k(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new E;++t<n;)this.add(e[t])}k.prototype.add=k.prototype.push=wa;k.prototype.has=Sa;function Pa(e,t){for(var n=-1,r=e==null?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}function Aa(e,t){return e.has(t)}var Oa=1,$a=2;function pt(e,t,n,r,o,a){var i=n&Oa,l=e.length,d=t.length;if(l!=d&&!(i&&d>l))return!1;var u=a.get(e),m=a.get(t);if(u&&m)return u==t&&m==e;var y=-1,g=!0,_=n&$a?new k:void 0;for(a.set(e,t),a.set(t,e);++y<l;){var s=e[y],c=t[y];if(r)var p=i?r(c,s,y,t,e,a):r(s,c,y,e,t,a);if(p!==void 0){if(p)continue;g=!1;break}if(_){if(!Pa(t,function(v,h){if(!Aa(_,h)&&(s===v||o(s,v,n,r,a)))return _.push(h)})){g=!1;break}}else if(!(s===c||o(s,c,n,r,a))){g=!1;break}}return a.delete(e),a.delete(t),g}function Ca(e){var t=-1,n=Array(e.size);return e.forEach(function(r,o){n[++t]=[o,r]}),n}function xa(e){var t=-1,n=Array(e.size);return e.forEach(function(r){n[++t]=r}),n}var Fa=1,Ia=2,ja="[object Boolean]",La="[object Date]",Na="[object Error]",Ra="[object Map]",Da="[object Number]",Ma="[object RegExp]",Ua="[object Set]",Ka="[object String]",za="[object Symbol]",Ba="[object ArrayBuffer]",Ga="[object DataView]",ze=A?A.prototype:void 0,ce=ze?ze.valueOf:void 0;function Ha(e,t,n,r,o,a,i){switch(n){case Ga:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case Ba:return!(e.byteLength!=t.byteLength||!a(new Ke(e),new Ke(t)));case ja:case La:case Da:return it(+e,+t);case Na:return e.name==t.name&&e.message==t.message;case Ma:case Ka:return e==t+"";case Ra:var l=Ca;case Ua:var d=r&Fa;if(l||(l=xa),e.size!=t.size&&!d)return!1;var u=i.get(e);if(u)return u==t;r|=Ia,i.set(e,t);var m=pt(l(e),l(t),r,o,a,i);return i.delete(e),m;case za:if(ce)return ce.call(e)==ce.call(t)}return!1}var Wa=1,Ya=Object.prototype,Ja=Ya.hasOwnProperty;function Za(e,t,n,r,o,a){var i=n&Wa,l=je(e),d=l.length,u=je(t),m=u.length;if(d!=m&&!i)return!1;for(var y=d;y--;){var g=l[y];if(!(i?g in t:Ja.call(t,g)))return!1}var _=a.get(e),s=a.get(t);if(_&&s)return _==t&&s==e;var c=!0;a.set(e,t),a.set(t,e);for(var p=i;++y<d;){g=l[y];var v=e[g],h=t[g];if(r)var U=i?r(h,v,g,t,e,a):r(v,h,g,e,t,a);if(!(U===void 0?v===h||o(v,h,n,r,a):U)){c=!1;break}p||(p=g=="constructor")}if(c&&!p){var O=e.constructor,$=t.constructor;O!=$&&"constructor"in e&&"constructor"in t&&!(typeof O=="function"&&O instanceof O&&typeof $=="function"&&$ instanceof $)&&(c=!1)}return a.delete(e),a.delete(t),c}var qa=1,Be="[object Arguments]",Ge="[object Array]",W="[object Object]",Va=Object.prototype,He=Va.hasOwnProperty;function Xa(e,t,n,r,o,a){var i=F(e),l=F(t),d=i?Ge:Ue(e),u=l?Ge:Ue(t);d=d==Be?W:d,u=u==Be?W:u;var m=d==W,y=u==W,g=d==u;if(g&&de(e)){if(!de(t))return!1;i=!0,m=!1}if(g&&!m)return a||(a=new P),i||dt(e)?pt(e,t,n,r,o,a):Ha(e,t,d,n,r,o,a);if(!(n&qa)){var _=m&&He.call(e,"__wrapped__"),s=y&&He.call(t,"__wrapped__");if(_||s){var c=_?e.value():e,p=s?t.value():t;return a||(a=new P),o(c,p,n,r,a)}}return g?(a||(a=new P),Za(e,t,n,r,o,a)):!1}function gt(e,t,n,r,o){return e===t?!0:e==null||t==null||!R(e)&&!R(t)?e!==e&&t!==t:Xa(e,t,n,r,gt,o)}function Eo(e,t){return gt(e,t)}let Y;const wo=e=>{var t;if(!V)return 0;if(Y!==void 0)return Y;const n=document.createElement("div");n.className=`${e}-scrollbar__wrap`,n.style.visibility="hidden",n.style.width="100px",n.style.position="absolute",n.style.top="-9999px",document.body.appendChild(n);const r=n.offsetWidth;n.style.overflow="scroll";const o=document.createElement("div");o.style.width="100%",n.appendChild(o);const a=o.offsetWidth;return(t=n.parentNode)==null||t.removeChild(n),Y=r-a,Y};function So(e,t){if(!V)return;if(!t){e.scrollTop=0;return}const n=[];let r=t.offsetParent;for(;r!==null&&e!==r&&e.contains(r);)n.push(r),r=r.offsetParent;const o=t.offsetTop+n.reduce((d,u)=>d+u.offsetTop,0),a=o+t.offsetHeight,i=e.scrollTop,l=i+e.clientHeight;o<i?e.scrollTop=o:a>l&&(e.scrollTop=a-e.clientHeight)}const Po=e=>["",...yt].includes(e);var ka={name:"en",el:{colorpicker:{confirm:"OK",clear:"Clear",defaultLabel:"color picker",description:"current color is {color}. press enter to select a new color."},datepicker:{now:"Now",today:"Today",cancel:"Cancel",clear:"Clear",confirm:"OK",dateTablePrompt:"Use the arrow keys and enter to select the day of the month",monthTablePrompt:"Use the arrow keys and enter to select the month",yearTablePrompt:"Use the arrow keys and enter to select the year",selectedDate:"Selected date",selectDate:"Select date",selectTime:"Select time",startDate:"Start Date",startTime:"Start Time",endDate:"End Date",endTime:"End Time",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",year:"",month1:"January",month2:"February",month3:"March",month4:"April",month5:"May",month6:"June",month7:"July",month8:"August",month9:"September",month10:"October",month11:"November",month12:"December",week:"week",weeks:{sun:"Sun",mon:"Mon",tue:"Tue",wed:"Wed",thu:"Thu",fri:"Fri",sat:"Sat"},weeksFull:{sun:"Sunday",mon:"Monday",tue:"Tuesday",wed:"Wednesday",thu:"Thursday",fri:"Friday",sat:"Saturday"},months:{jan:"Jan",feb:"Feb",mar:"Mar",apr:"Apr",may:"May",jun:"Jun",jul:"Jul",aug:"Aug",sep:"Sep",oct:"Oct",nov:"Nov",dec:"Dec"}},inputNumber:{decrease:"decrease number",increase:"increase number"},select:{loading:"Loading",noMatch:"No matching data",noData:"No data",placeholder:"Select"},dropdown:{toggleDropdown:"Toggle Dropdown"},cascader:{noMatch:"No matching data",loading:"Loading",placeholder:"Select",noData:"No data"},pagination:{goto:"Go to",pagesize:"/page",total:"Total {total}",pageClassifier:"",page:"Page",prev:"Go to previous page",next:"Go to next page",currentPage:"page {pager}",prevPages:"Previous {pager} pages",nextPages:"Next {pager} pages",deprecationWarning:"Deprecated usages detected, please refer to the el-pagination documentation for more details"},dialog:{close:"Close this dialog"},drawer:{close:"Close this dialog"},messagebox:{title:"Message",confirm:"OK",cancel:"Cancel",error:"Illegal input",close:"Close this dialog"},upload:{deleteTip:"press delete to remove",delete:"Delete",preview:"Preview",continue:"Continue"},slider:{defaultLabel:"slider between {min} and {max}",defaultRangeStartLabel:"pick start value",defaultRangeEndLabel:"pick end value"},table:{emptyText:"No Data",confirmFilter:"Confirm",resetFilter:"Reset",clearFilter:"All",sumText:"Sum"},tree:{emptyText:"No Data"},transfer:{noMatch:"No matching data",noData:"No data",titles:["List 1","List 2"],filterPlaceholder:"Enter keyword",noCheckedFormat:"{total} items",hasCheckedFormat:"{checked}/{total} checked"},image:{error:"FAILED"},pageHeader:{title:"Back"},popconfirm:{confirmButtonText:"Yes",cancelButtonText:"No"}}};const Qa=e=>(t,n)=>eo(t,n,x(e)),eo=(e,t,n)=>Xr(n,e,e).replace(/\{(\w+)\}/g,(r,o)=>{var a;return`${(a=t==null?void 0:t[o])!=null?a:`{${o}}`}`}),to=e=>{const t=X(()=>x(e).name),n=Tt(e)?e:j(e);return{lang:t,locale:n,t:Qa(e)}},no=Symbol("localeContextKey"),Ao=e=>{const t=e||tt(no,j());return to(X(()=>t.value||ka))};let N=[];const We=e=>{const t=e;t.key===et.esc&&N.forEach(n=>n(t))},ro=e=>{he(()=>{N.length===0&&document.addEventListener("keydown",We),V&&N.push(e)}),ye(()=>{N=N.filter(t=>t!==e),N.length===0&&V&&document.removeEventListener("keydown",We)})},Ye=j(0),ao=2e3,oo=Symbol("zIndexContextKey"),Oo=e=>{const t=e||(Et()?tt(oo,void 0):void 0),n=X(()=>{const a=x(t);return mt(a)?a:ao}),r=X(()=>n.value+Ye.value);return{initialZIndex:n,currentZIndex:r,nextZIndex:()=>(Ye.value++,r.value)}},ue="focus-trap.focus-after-trapped",le="focus-trap.focus-after-released",so="focus-trap.focusout-prevented",Je={cancelable:!0,bubbles:!1},io={cancelable:!0,bubbles:!1},Ze="focusAfterTrapped",qe="focusAfterReleased",co=Symbol("elFocusTrap"),be=j(),te=j(0),Te=j(0);let J=0;const vt=e=>{const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0||r===document.activeElement?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t},Ve=(e,t)=>{for(const n of e)if(!uo(n,t))return n},uo=(e,t)=>{if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1},lo=e=>{const t=vt(e),n=Ve(t,e),r=Ve(t.reverse(),e);return[n,r]},fo=e=>e instanceof HTMLInputElement&&"select"in e,S=(e,t)=>{if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),Te.value=window.performance.now(),e!==n&&fo(e)&&t&&e.select()}};function Xe(e,t){const n=[...e],r=e.indexOf(t);return r!==-1&&n.splice(r,1),n}const po=()=>{let e=[];return{push:r=>{const o=e[0];o&&r!==o&&o.pause(),e=Xe(e,r),e.unshift(r)},remove:r=>{var o,a;e=Xe(e,r),(a=(o=e[0])==null?void 0:o.resume)==null||a.call(o)}}},go=(e,t=!1)=>{const n=document.activeElement;for(const r of e)if(S(r,t),document.activeElement!==n)return},ke=po(),vo=()=>te.value>Te.value,Z=()=>{be.value="pointer",te.value=window.performance.now()},Qe=()=>{be.value="keyboard",te.value=window.performance.now()},ho=()=>(he(()=>{J===0&&(document.addEventListener("mousedown",Z),document.addEventListener("touchstart",Z),document.addEventListener("keydown",Qe)),J++}),ye(()=>{J--,J<=0&&(document.removeEventListener("mousedown",Z),document.removeEventListener("touchstart",Z),document.removeEventListener("keydown",Qe))}),{focusReason:be,lastUserFocusTimestamp:te,lastAutomatedFocusTimestamp:Te}),q=e=>new CustomEvent(so,{...io,detail:e}),yo=wt({name:"ElFocusTrap",inheritAttrs:!1,props:{loop:Boolean,trapped:Boolean,focusTrapEl:Object,focusStartEl:{type:[Object,String],default:"first"}},emits:[Ze,qe,"focusin","focusout","focusout-prevented","release-requested"],setup(e,{emit:t}){const n=j();let r,o;const{focusReason:a}=ho();ro(s=>{e.trapped&&!i.paused&&t("release-requested",s)});const i={paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}},l=s=>{if(!e.loop&&!e.trapped||i.paused)return;const{key:c,altKey:p,ctrlKey:v,metaKey:h,currentTarget:U,shiftKey:O}=s,{loop:$}=e,ht=c===et.tab&&!p&&!v&&!h,H=document.activeElement;if(ht&&H){const ne=U,[re,ae]=lo(ne);if(re&&ae){if(!O&&H===ae){const w=q({focusReason:a.value});t("focusout-prevented",w),w.defaultPrevented||(s.preventDefault(),$&&S(re,!0))}else if(O&&[re,ne].includes(H)){const w=q({focusReason:a.value});t("focusout-prevented",w),w.defaultPrevented||(s.preventDefault(),$&&S(ae,!0))}}else if(H===ne){const w=q({focusReason:a.value});t("focusout-prevented",w),w.defaultPrevented||s.preventDefault()}}};St(co,{focusTrapRef:n,onKeydown:l}),oe(()=>e.focusTrapEl,s=>{s&&(n.value=s)},{immediate:!0}),oe([n],([s],[c])=>{s&&(s.addEventListener("keydown",l),s.addEventListener("focusin",m),s.addEventListener("focusout",y)),c&&(c.removeEventListener("keydown",l),c.removeEventListener("focusin",m),c.removeEventListener("focusout",y))});const d=s=>{t(Ze,s)},u=s=>t(qe,s),m=s=>{const c=x(n);if(!c)return;const p=s.target,v=s.relatedTarget,h=p&&c.contains(p);e.trapped||v&&c.contains(v)||(r=v),h&&t("focusin",s),!i.paused&&e.trapped&&(h?o=p:S(o,!0))},y=s=>{const c=x(n);if(!(i.paused||!c))if(e.trapped){const p=s.relatedTarget;!bt(p)&&!c.contains(p)&&setTimeout(()=>{if(!i.paused&&e.trapped){const v=q({focusReason:a.value});t("focusout-prevented",v),v.defaultPrevented||S(o,!0)}},0)}else{const p=s.target;p&&c.contains(p)||t("focusout",s)}};async function g(){await Ee();const s=x(n);if(s){ke.push(i);const c=s.contains(document.activeElement)?r:document.activeElement;if(r=c,!s.contains(c)){const v=new Event(ue,Je);s.addEventListener(ue,d),s.dispatchEvent(v),v.defaultPrevented||Ee(()=>{let h=e.focusStartEl;At(h)||(S(h),document.activeElement!==h&&(h="first")),h==="first"&&go(vt(s),!0),(document.activeElement===c||h==="container")&&S(s)})}}}function _(){const s=x(n);if(s){s.removeEventListener(ue,d);const c=new CustomEvent(le,{...Je,detail:{focusReason:a.value}});s.addEventListener(le,u),s.dispatchEvent(c),!c.defaultPrevented&&(a.value=="keyboard"||!vo()||s.contains(document.activeElement))&&S(r??document.body),s.removeEventListener(le,u),ke.remove(i)}}return he(()=>{e.trapped&&g(),oe(()=>e.trapped,s=>{s?g():_()})}),ye(()=>{e.trapped&&_()}),{onKeydown:l}}});function mo(e,t,n,r,o,a){return Pt(e.$slots,"default",{handleKeydown:e.onKeydown})}var $o=_t(yo,[["render",mo],["__file","/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);export{no as A,oo as B,Po as C,me as D,$o as E,Xr as F,So as G,A as S,Ke as U,gn as a,dn as b,nr as c,la as d,it as e,kr as f,M as g,fa as h,ot as i,R as j,ur as k,Ue as l,Vn as m,xe as n,rr as o,F as p,de as q,b as r,sa as s,P as t,je as u,wo as v,Ao as w,Eo as x,Oo as y,ao as z};
