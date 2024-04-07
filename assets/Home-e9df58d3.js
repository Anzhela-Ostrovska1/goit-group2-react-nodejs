import{n as l,r as y,a as Ee,j as n,b as Ot,R as G,g as Je,c as Ct,d as Qe,e as Ze,f as Et,h as et,i as jt,s as St}from"./index-1025adad.js";import{b as Mt}from"./bg_element_des@1x-1805b66c.js";const kt=l.div`
  padding: 8px 20px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 10px;
  border: 1px solid #ecf2ff;
  box-shadow: 0px 4px 8px 0px rgba(158, 187, 255, 0.12);
  background: #ffffff;
  max-width: 172px;

  h2 {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.33;
    color: #2f2f2f;
    margin-bottom: 16px;
  }

  p {
    font-size: 22px;
    font-weight: 700;
    line-height: 1;
    color: #407bff;

    @media screen and (min-width: 768px) {
      font-size: 24px;
    }
  }

  button {
    font-family: inherit;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
    color: #407bff;
    background: transparent;

    &:hover,
    &:focus {
      color: #ff9d43;
    }
  }

  @media screen and (min-width: 768px) {
    margin-top: 16px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 30px;
  }
`,Pt=l.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,Tt=l.div`
  position: absolute;
  background-color: #ffffff;
  width: 280px;
  height: 816px;
  top: 40px;
  padding: 24px 12px 24px 12px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-radius: 10px;
  margin: auto;
  @media screen and (min-width: 768px) {
    width: 704px;
    height: 696px;
    padding: 32px 24px 32px 24px;
  }

  @media screen and (min-width: 1140px) {
    width: 592px;
    height: 712px;
    top: 44px;
    left: 424px;
  }

  h2 {
    font-size: 26px;
    font-weight: 500;
    line-height: 32px;
    text-align: left;
  }
  .headerDaily {
    display: flex;
    justify-content: space-between;
    height: 32px;
  }

  .formula {
    display: flex;
    flex-direction: column;
    gap: 16px;
    @media screen and (min-width: 768px) {
      flex-direction: row;
      gap: 24px;
    }
  }

  .formulaText {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    display: flex;
    gap: 4px;
  }
  .formulaSpan {
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    color: #407bff;
  }
  .formulaStar {
    color: #407bff;
  }

  .formulaDescription {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    text-align: left;
    padding: 10px;
    border-radius: 10px;
    border: solid 1px #d7e3ff;
  }
  .formulaContainer {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  h3 {
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
    text-align: left;
  }

  .checkBox {
    height: 20px;
    gap: 24px;
    opacity: 0px;
    display: flex;
  }
  .checkBox input {
    border-color: #407bff;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .inputDescription {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
  }
  .requiredAmount {
    display: flex;
    align-items: center;
    height: 40px;
    gap: 6px;
  }
  .amount {
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    text-align: left;
    color: #407bff;
  }
  .amountDescription {
    width: 190px;
  }
  .inputForm {
    height: 44px;
    border: solid 1px #d7e3ff;
    border-radius: 6px;
    padding: 12px 10px;
  }
  .saveButton {
    color: #ffffff;
    background: #407bff;
    height: 36px;
    padding: 8px 30px 8px 30px;
    gap: 10px;
    border-radius: 10px;
    border: 0;
    box-shadow: 0px 4px 8px 0px #407bff57;
    @media screen and (min-width: 768px) {
      width: 160px;
      align-self: flex-end;
    }
  }
  .saveButton:hover {
    cursor: pointer;
  }

  input::placeholder {
    color: #407bff;
    size: 16px;
  }

  .closeButton {
    /* background: transparent; */
    /* position: absolute; */
  }
  .icon-Vector {
    /* color: #407bff; */
    fill: 407bff;

    /* stroke: #407bff; */
  }
`,Nt=()=>{const[e,t]=y.useState(0),[o,r]=y.useState(0),[i,c]=y.useState(0),[h,s]=y.useState(!0),[d,p]=y.useState(0),[A,u]=y.useState(!0),v=Ee(),b=()=>{s(!h)},w=_=>{t(Number(_.target.value))},C=_=>{r(Number(_.target.value))};y.useEffect(()=>{c(h?Math.ceil((e*.03+o*.4)*100)/100<2?2:Math.ceil((e*.03+o*.4)*100)/100:Math.ceil((e*.04+o*.6)*100)/100<2?2:Math.ceil((e*.04+o*.6)*100)/100)},[h,e,o]);const T=_=>{p(Number(_.target.value))},M=_=>{_.preventDefault(),v(Ot(d)),u(!A)},q=()=>{u(!A)};return A&&n.jsx("div",{children:n.jsxs(Tt,{children:[n.jsxs("div",{className:"headerDaily",children:[n.jsx("h2",{children:"My daily norma"}),n.jsx("button",{type:"button",className:"closeButton",onClick:q,children:n.jsx("svg",{className:"icon-Vector",width:"24",height:"24",children:n.jsx("use",{href:"../../assets/images/sprite/horodiukIcons.svg#icon-close"})})})]}),n.jsxs("div",{className:"formulaContainer",children:[n.jsxs("div",{className:"formula",children:[n.jsxs("div",{className:"formulaText",children:[n.jsx("p",{children:"For girl:"}),n.jsx("span",{className:"formulaSpan",children:"V=(M*0,03) + (T*0,4)"})]}),n.jsxs("div",{className:"formulaText",children:[n.jsx("p",{children:"For man:"}),n.jsx("span",{className:"formulaSpan",children:"V=(M*0,04) + (T*0,6)"})]})]}),n.jsxs("p",{className:"formulaDescription",children:[n.jsx("span",{className:"formulaStar",children:"*"})," V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]})]}),n.jsxs("form",{onSubmit:M,children:[n.jsx("h3",{children:"Calculate your rate:"}),n.jsxs("div",{className:"checkBox",children:[n.jsxs("label",{children:[n.jsx("input",{type:"radio",name:"gender",value:"woman",checked:h,onChange:b})," For woman"]}),n.jsxs("label",{children:[n.jsx("input",{type:"radio",name:"gender",value:"man",checked:!h,onChange:b})," For man"]})]}),n.jsx("label",{className:"inputDescription",children:"Your weight in kilograms:"}),n.jsx("input",{className:"inputForm",placeholder:"0",onChange:w}),n.jsx("label",{className:"inputDescription",children:"The time of active participation in sports or other activities with a high physical. load in hours:"}),n.jsx("input",{className:"inputForm",placeholder:"0",onChange:C}),n.jsxs("div",{className:"requiredAmount",children:[n.jsx("p",{className:"amountDescription",children:"The required amount of water in liters per day:"}),n.jsxs("span",{className:"amount",children:[i," L"]})]}),n.jsx("h3",{children:"Write down how much water you will drink:"}),n.jsx("input",{className:"inputForm",placeholder:"0",onChange:T}),n.jsx("button",{className:"saveButton",type:"submit",children:"Save"})]})]})})},_t=()=>{const[e,t]=y.useState(!1),o=()=>{t(!1)},r=()=>{t(!0)};return n.jsx("div",{children:n.jsxs(kt,{children:[n.jsx("h2",{children:"My daily norma:"}),n.jsxs(Pt,{children:[n.jsx("p",{children:"1.5 L"}),n.jsx("button",{type:"button",onClick:r,children:"Edit"}),e&&n.jsx(Nt,{isOpen:e,onClose:o})]})]})})},Dt=_t;var tt={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},ke=G.createContext&&G.createContext(tt),Rt=["attr","size","title"];function Vt(e,t){if(e==null)return{};var o=Wt(e,t),r,i;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(i=0;i<c.length;i++)r=c[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function Wt(e,t){if(e==null)return{};var o={},r=Object.keys(e),i,c;for(c=0;c<r.length;c++)i=r[c],!(t.indexOf(i)>=0)&&(o[i]=e[i]);return o}function ue(){return ue=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},ue.apply(this,arguments)}function Pe(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),o.push.apply(o,r)}return o}function fe(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?Pe(Object(o),!0).forEach(function(r){Ft(e,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):Pe(Object(o)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))})}return e}function Ft(e,t,o){return t=Lt(t),t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function Lt(e){var t=It(e,"string");return typeof t=="symbol"?t:String(t)}function It(e,t){if(typeof e!="object"||e===null)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var r=o.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function nt(e){return e&&e.map((t,o)=>G.createElement(t.tag,fe({key:o},t.attr),nt(t.child)))}function ot(e){return t=>G.createElement(Ht,ue({attr:fe({},e.attr)},t),nt(e.child))}function Ht(e){var t=o=>{var{attr:r,size:i,title:c}=e,h=Vt(e,Rt),s=i||o.size||"1em",d;return o.className&&(d=o.className),e.className&&(d=(d?d+" ":"")+e.className),G.createElement("svg",ue({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},o.attr,r,h,{className:d,style:fe(fe({color:e.color||o.color},o.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),c&&G.createElement("title",null,c),e.children)};return ke!==void 0?G.createElement(ke.Consumer,null,o=>t(o)):t(tt)}function Bt(e){return ot({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"},child:[]}]})(e)}const zt=e=>e.water.notes,Ut=e=>e.water.currentNote,qt="/goit-group2-react-nodejs/assets/glass-00cf2fb8.svg",$t="/goit-group2-react-nodejs/assets/edit-7f0c7b6a.svg",Xt="/goit-group2-react-nodejs/assets/delete-6bf30e40.svg";var be={exports:{}},J={},rt={exports:{}},Kt="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Gt=Kt,Yt=Gt;function at(){}function it(){}it.resetWarningCache=at;var Jt=function(){function e(r,i,c,h,s,d){if(d!==Yt){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}e.isRequired=e;function t(){return e}var o={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:it,resetWarningCache:at};return o.PropTypes=o,o};rt.exports=Jt();var je=rt.exports;const de=Je(je);var ye={exports:{}},L={},we={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=A;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var o="none",r="contents",i=/input|select|textarea|button|object|iframe/;function c(u,v){return v.getPropertyValue("overflow")!=="visible"||u.scrollWidth<=0&&u.scrollHeight<=0}function h(u){var v=u.offsetWidth<=0&&u.offsetHeight<=0;if(v&&!u.innerHTML)return!0;try{var b=window.getComputedStyle(u),w=b.getPropertyValue("display");return v?w!==r&&c(u,b):w===o}catch{return console.warn("Failed to inspect element style"),!1}}function s(u){for(var v=u,b=u.getRootNode&&u.getRootNode();v&&v!==document.body;){if(b&&v===b&&(v=b.host.parentNode),h(v))return!1;v=v.parentNode}return!0}function d(u,v){var b=u.nodeName.toLowerCase(),w=i.test(b)&&!u.disabled||b==="a"&&u.href||v;return w&&s(u)}function p(u){var v=u.getAttribute("tabindex");v===null&&(v=void 0);var b=isNaN(v);return(b||v>=0)&&d(u,!b)}function A(u){var v=[].slice.call(u.querySelectorAll("*"),0).reduce(function(b,w){return b.concat(w.shadowRoot?A(w.shadowRoot):[w])},[]);return v.filter(p)}e.exports=t.default})(we,we.exports);var st=we.exports;Object.defineProperty(L,"__esModule",{value:!0});L.resetState=tn;L.log=nn;L.handleBlur=re;L.handleFocus=ae;L.markForFocusLater=on;L.returnFocus=rn;L.popWithoutFocus=an;L.setupScopedFocus=sn;L.teardownScopedFocus=ln;var Qt=st,Zt=en(Qt);function en(e){return e&&e.__esModule?e:{default:e}}var Z=[],Q=null,Oe=!1;function tn(){Z=[]}function nn(){}function re(){Oe=!0}function ae(){if(Oe){if(Oe=!1,!Q)return;setTimeout(function(){if(!Q.contains(document.activeElement)){var e=(0,Zt.default)(Q)[0]||Q;e.focus()}},0)}}function on(){Z.push(document.activeElement)}function rn(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=null;try{Z.length!==0&&(t=Z.pop(),t.focus({preventScroll:e}));return}catch{console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}}function an(){Z.length>0&&Z.pop()}function sn(e){Q=e,window.addEventListener?(window.addEventListener("blur",re,!1),document.addEventListener("focus",ae,!0)):(window.attachEvent("onBlur",re),document.attachEvent("onFocus",ae))}function ln(){Q=null,window.addEventListener?(window.removeEventListener("blur",re),document.removeEventListener("focus",ae)):(window.detachEvent("onBlur",re),document.detachEvent("onFocus",ae))}var Ce={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=h;var o=st,r=i(o);function i(s){return s&&s.__esModule?s:{default:s}}function c(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return s.activeElement.shadowRoot?c(s.activeElement.shadowRoot):s.activeElement}function h(s,d){var p=(0,r.default)(s);if(!p.length){d.preventDefault();return}var A=void 0,u=d.shiftKey,v=p[0],b=p[p.length-1],w=c();if(s===w){if(!u)return;A=b}if(b===w&&!u&&(A=v),v===w&&u&&(A=b),A){d.preventDefault(),A.focus();return}var C=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),T=C!=null&&C[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(T){var M=p.indexOf(w);if(M>-1&&(M+=u?-1:1),A=p[M],typeof A>"u"){d.preventDefault(),A=u?b:v,A.focus();return}d.preventDefault(),A.focus()}}e.exports=t.default})(Ce,Ce.exports);var cn=Ce.exports,I={},dn=function(){},pn=dn,F={},lt={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(e){(function(){var t=!!(typeof window<"u"&&window.document&&window.document.createElement),o={canUseDOM:t,canUseWorkers:typeof Worker<"u",canUseEventListeners:t&&!!(window.addEventListener||window.attachEvent),canUseViewport:t&&!!window.screen};e.exports?e.exports=o:window.ExecutionEnvironment=o})()})(lt);var un=lt.exports;Object.defineProperty(F,"__esModule",{value:!0});F.canUseDOM=F.SafeNodeList=F.SafeHTMLCollection=void 0;var fn=un,hn=mn(fn);function mn(e){return e&&e.__esModule?e:{default:e}}var ge=hn.default,xn=ge.canUseDOM?window.HTMLElement:{};F.SafeHTMLCollection=ge.canUseDOM?window.HTMLCollection:{};F.SafeNodeList=ge.canUseDOM?window.NodeList:{};F.canUseDOM=ge.canUseDOM;F.default=xn;Object.defineProperty(I,"__esModule",{value:!0});I.resetState=yn;I.log=wn;I.assertNodeList=ct;I.setElement=On;I.validateElement=Se;I.hide=Cn;I.show=En;I.documentNotReadyOrSSRTesting=jn;var gn=pn,vn=bn(gn),An=F;function bn(e){return e&&e.__esModule?e:{default:e}}var V=null;function yn(){V&&(V.removeAttribute?V.removeAttribute("aria-hidden"):V.length!=null?V.forEach(function(e){return e.removeAttribute("aria-hidden")}):document.querySelectorAll(V).forEach(function(e){return e.removeAttribute("aria-hidden")})),V=null}function wn(){}function ct(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function On(e){var t=e;if(typeof t=="string"&&An.canUseDOM){var o=document.querySelectorAll(t);ct(o,t),t=o}return V=t||V,V}function Se(e){var t=e||V;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,vn.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function Cn(e){var t=!0,o=!1,r=void 0;try{for(var i=Se(e)[Symbol.iterator](),c;!(t=(c=i.next()).done);t=!0){var h=c.value;h.setAttribute("aria-hidden","true")}}catch(s){o=!0,r=s}finally{try{!t&&i.return&&i.return()}finally{if(o)throw r}}}function En(e){var t=!0,o=!1,r=void 0;try{for(var i=Se(e)[Symbol.iterator](),c;!(t=(c=i.next()).done);t=!0){var h=c.value;h.removeAttribute("aria-hidden")}}catch(s){o=!0,r=s}finally{try{!t&&i.return&&i.return()}finally{if(o)throw r}}}function jn(){V=null}var ee={};Object.defineProperty(ee,"__esModule",{value:!0});ee.resetState=Sn;ee.log=Mn;var ne={},oe={};function Te(e,t){e.classList.remove(t)}function Sn(){var e=document.getElementsByTagName("html")[0];for(var t in ne)Te(e,ne[t]);var o=document.body;for(var r in oe)Te(o,oe[r]);ne={},oe={}}function Mn(){}var kn=function(t,o){return t[o]||(t[o]=0),t[o]+=1,o},Pn=function(t,o){return t[o]&&(t[o]-=1),o},Tn=function(t,o,r){r.forEach(function(i){kn(o,i),t.add(i)})},Nn=function(t,o,r){r.forEach(function(i){Pn(o,i),o[i]===0&&t.remove(i)})};ee.add=function(t,o){return Tn(t.classList,t.nodeName.toLowerCase()=="html"?ne:oe,o.split(" "))};ee.remove=function(t,o){return Nn(t.classList,t.nodeName.toLowerCase()=="html"?ne:oe,o.split(" "))};var te={};Object.defineProperty(te,"__esModule",{value:!0});te.log=Dn;te.resetState=Rn;function _n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var dt=function e(){var t=this;_n(this,e),this.register=function(o){t.openInstances.indexOf(o)===-1&&(t.openInstances.push(o),t.emit("register"))},this.deregister=function(o){var r=t.openInstances.indexOf(o);r!==-1&&(t.openInstances.splice(r,1),t.emit("deregister"))},this.subscribe=function(o){t.subscribers.push(o)},this.emit=function(o){t.subscribers.forEach(function(r){return r(o,t.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},he=new dt;function Dn(){console.log("portalOpenInstances ----------"),console.log(he.openInstances.length),he.openInstances.forEach(function(e){return console.log(e)}),console.log("end portalOpenInstances ----------")}function Rn(){he=new dt}te.default=he;var Me={};Object.defineProperty(Me,"__esModule",{value:!0});Me.resetState=Ln;Me.log=In;var Vn=te,Wn=Fn(Vn);function Fn(e){return e&&e.__esModule?e:{default:e}}var P=void 0,W=void 0,Y=[];function Ln(){for(var e=[P,W],t=0;t<e.length;t++){var o=e[t];o&&o.parentNode&&o.parentNode.removeChild(o)}P=W=null,Y=[]}function In(){console.log("bodyTrap ----------"),console.log(Y.length);for(var e=[P,W],t=0;t<e.length;t++){var o=e[t],r=o||{};console.log(r.nodeName,r.className,r.id)}console.log("edn bodyTrap ----------")}function Ne(){Y.length!==0&&Y[Y.length-1].focusContent()}function Hn(e,t){!P&&!W&&(P=document.createElement("div"),P.setAttribute("data-react-modal-body-trap",""),P.style.position="absolute",P.style.opacity="0",P.setAttribute("tabindex","0"),P.addEventListener("focus",Ne),W=P.cloneNode(),W.addEventListener("focus",Ne)),Y=t,Y.length>0?(document.body.firstChild!==P&&document.body.insertBefore(P,document.body.firstChild),document.body.lastChild!==W&&document.body.appendChild(W)):(P.parentElement&&P.parentElement.removeChild(P),W.parentElement&&W.parentElement.removeChild(W))}Wn.default.subscribe(Hn);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(g){for(var x=1;x<arguments.length;x++){var E=arguments[x];for(var a in E)Object.prototype.hasOwnProperty.call(E,a)&&(g[a]=E[a])}return g},r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(g){return typeof g}:function(g){return g&&typeof Symbol=="function"&&g.constructor===Symbol&&g!==Symbol.prototype?"symbol":typeof g},i=function(){function g(x,E){for(var a=0;a<E.length;a++){var f=E[a];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(x,f.key,f)}}return function(x,E,a){return E&&g(x.prototype,E),a&&g(x,a),x}}(),c=y,h=je,s=H(h),d=L,p=z(d),A=cn,u=H(A),v=I,b=z(v),w=ee,C=z(w),T=F,M=H(T),q=te,_=H(q);function z(g){if(g&&g.__esModule)return g;var x={};if(g!=null)for(var E in g)Object.prototype.hasOwnProperty.call(g,E)&&(x[E]=g[E]);return x.default=g,x}function H(g){return g&&g.__esModule?g:{default:g}}function j(g,x){if(!(g instanceof x))throw new TypeError("Cannot call a class as a function")}function O(g,x){if(!g)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return x&&(typeof x=="object"||typeof x=="function")?x:g}function N(g,x){if(typeof x!="function"&&x!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof x);g.prototype=Object.create(x&&x.prototype,{constructor:{value:g,enumerable:!1,writable:!0,configurable:!0}}),x&&(Object.setPrototypeOf?Object.setPrototypeOf(g,x):g.__proto__=x)}var R={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},ve=function(x){return x.code==="Tab"||x.keyCode===9},At=function(x){return x.code==="Escape"||x.keyCode===27},le=0,Ae=function(g){N(x,g);function x(E){j(this,x);var a=O(this,(x.__proto__||Object.getPrototypeOf(x)).call(this,E));return a.setOverlayRef=function(f){a.overlay=f,a.props.overlayRef&&a.props.overlayRef(f)},a.setContentRef=function(f){a.content=f,a.props.contentRef&&a.props.contentRef(f)},a.afterClose=function(){var f=a.props,k=f.appElement,D=f.ariaHideApp,S=f.htmlOpenClassName,$=f.bodyOpenClassName,X=f.parentSelector,ce=X&&X().ownerDocument||document;$&&C.remove(ce.body,$),S&&C.remove(ce.getElementsByTagName("html")[0],S),D&&le>0&&(le-=1,le===0&&b.show(k)),a.props.shouldFocusAfterRender&&(a.props.shouldReturnFocusAfterClose?(p.returnFocus(a.props.preventScroll),p.teardownScopedFocus()):p.popWithoutFocus()),a.props.onAfterClose&&a.props.onAfterClose(),_.default.deregister(a)},a.open=function(){a.beforeOpen(),a.state.afterOpen&&a.state.beforeClose?(clearTimeout(a.closeTimer),a.setState({beforeClose:!1})):(a.props.shouldFocusAfterRender&&(p.setupScopedFocus(a.node),p.markForFocusLater()),a.setState({isOpen:!0},function(){a.openAnimationFrame=requestAnimationFrame(function(){a.setState({afterOpen:!0}),a.props.isOpen&&a.props.onAfterOpen&&a.props.onAfterOpen({overlayEl:a.overlay,contentEl:a.content})})}))},a.close=function(){a.props.closeTimeoutMS>0?a.closeWithTimeout():a.closeWithoutTimeout()},a.focusContent=function(){return a.content&&!a.contentHasFocus()&&a.content.focus({preventScroll:!0})},a.closeWithTimeout=function(){var f=Date.now()+a.props.closeTimeoutMS;a.setState({beforeClose:!0,closesAt:f},function(){a.closeTimer=setTimeout(a.closeWithoutTimeout,a.state.closesAt-Date.now())})},a.closeWithoutTimeout=function(){a.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},a.afterClose)},a.handleKeyDown=function(f){ve(f)&&(0,u.default)(a.content,f),a.props.shouldCloseOnEsc&&At(f)&&(f.stopPropagation(),a.requestClose(f))},a.handleOverlayOnClick=function(f){a.shouldClose===null&&(a.shouldClose=!0),a.shouldClose&&a.props.shouldCloseOnOverlayClick&&(a.ownerHandlesClose()?a.requestClose(f):a.focusContent()),a.shouldClose=null},a.handleContentOnMouseUp=function(){a.shouldClose=!1},a.handleOverlayOnMouseDown=function(f){!a.props.shouldCloseOnOverlayClick&&f.target==a.overlay&&f.preventDefault()},a.handleContentOnClick=function(){a.shouldClose=!1},a.handleContentOnMouseDown=function(){a.shouldClose=!1},a.requestClose=function(f){return a.ownerHandlesClose()&&a.props.onRequestClose(f)},a.ownerHandlesClose=function(){return a.props.onRequestClose},a.shouldBeClosed=function(){return!a.state.isOpen&&!a.state.beforeClose},a.contentHasFocus=function(){return document.activeElement===a.content||a.content.contains(document.activeElement)},a.buildClassName=function(f,k){var D=(typeof k>"u"?"undefined":r(k))==="object"?k:{base:R[f],afterOpen:R[f]+"--after-open",beforeClose:R[f]+"--before-close"},S=D.base;return a.state.afterOpen&&(S=S+" "+D.afterOpen),a.state.beforeClose&&(S=S+" "+D.beforeClose),typeof k=="string"&&k?S+" "+k:S},a.attributesFromObject=function(f,k){return Object.keys(k).reduce(function(D,S){return D[f+"-"+S]=k[S],D},{})},a.state={afterOpen:!1,beforeClose:!1},a.shouldClose=null,a.moveFromContentToOverlay=null,a}return i(x,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(a,f){this.props.isOpen&&!a.isOpen?this.open():!this.props.isOpen&&a.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!f.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var a=this.props,f=a.appElement,k=a.ariaHideApp,D=a.htmlOpenClassName,S=a.bodyOpenClassName,$=a.parentSelector,X=$&&$().ownerDocument||document;S&&C.add(X.body,S),D&&C.add(X.getElementsByTagName("html")[0],D),k&&(le+=1,b.hide(f)),_.default.register(this)}},{key:"render",value:function(){var a=this.props,f=a.id,k=a.className,D=a.overlayClassName,S=a.defaultStyles,$=a.children,X=k?{}:S.content,ce=D?{}:S.overlay;if(this.shouldBeClosed())return null;var bt={ref:this.setOverlayRef,className:this.buildClassName("overlay",D),style:o({},ce,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},yt=o({id:f,ref:this.setContentRef,style:o({},X,this.props.style.content),className:this.buildClassName("content",k),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",o({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),wt=this.props.contentElement(yt,$);return this.props.overlayElement(bt,wt)}}]),x}(c.Component);Ae.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},Ae.propTypes={isOpen:s.default.bool.isRequired,defaultStyles:s.default.shape({content:s.default.object,overlay:s.default.object}),style:s.default.shape({content:s.default.object,overlay:s.default.object}),className:s.default.oneOfType([s.default.string,s.default.object]),overlayClassName:s.default.oneOfType([s.default.string,s.default.object]),parentSelector:s.default.func,bodyOpenClassName:s.default.string,htmlOpenClassName:s.default.string,ariaHideApp:s.default.bool,appElement:s.default.oneOfType([s.default.instanceOf(M.default),s.default.instanceOf(T.SafeHTMLCollection),s.default.instanceOf(T.SafeNodeList),s.default.arrayOf(s.default.instanceOf(M.default))]),onAfterOpen:s.default.func,onAfterClose:s.default.func,onRequestClose:s.default.func,closeTimeoutMS:s.default.number,shouldFocusAfterRender:s.default.bool,shouldCloseOnOverlayClick:s.default.bool,shouldReturnFocusAfterClose:s.default.bool,preventScroll:s.default.bool,role:s.default.string,contentLabel:s.default.string,aria:s.default.object,data:s.default.object,children:s.default.node,shouldCloseOnEsc:s.default.bool,overlayRef:s.default.func,contentRef:s.default.func,id:s.default.string,overlayElement:s.default.func,contentElement:s.default.func,testId:s.default.string},t.default=Ae,e.exports=t.default})(ye,ye.exports);var Bn=ye.exports;function pt(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);e!=null&&this.setState(e)}function ut(e){function t(o){var r=this.constructor.getDerivedStateFromProps(e,o);return r??null}this.setState(t.bind(this))}function ft(e,t){try{var o=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(o,r)}finally{this.props=o,this.state=r}}pt.__suppressDeprecationWarning=!0;ut.__suppressDeprecationWarning=!0;ft.__suppressDeprecationWarning=!0;function zn(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if(typeof e.getDerivedStateFromProps!="function"&&typeof t.getSnapshotBeforeUpdate!="function")return e;var o=null,r=null,i=null;if(typeof t.componentWillMount=="function"?o="componentWillMount":typeof t.UNSAFE_componentWillMount=="function"&&(o="UNSAFE_componentWillMount"),typeof t.componentWillReceiveProps=="function"?r="componentWillReceiveProps":typeof t.UNSAFE_componentWillReceiveProps=="function"&&(r="UNSAFE_componentWillReceiveProps"),typeof t.componentWillUpdate=="function"?i="componentWillUpdate":typeof t.UNSAFE_componentWillUpdate=="function"&&(i="UNSAFE_componentWillUpdate"),o!==null||r!==null||i!==null){var c=e.displayName||e.name,h=typeof e.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+c+" uses "+h+" but also contains the following legacy lifecycles:"+(o!==null?`
  `+o:"")+(r!==null?`
  `+r:"")+(i!==null?`
  `+i:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof e.getDerivedStateFromProps=="function"&&(t.componentWillMount=pt,t.componentWillReceiveProps=ut),typeof t.getSnapshotBeforeUpdate=="function"){if(typeof t.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=ft;var s=t.componentDidUpdate;t.componentDidUpdate=function(p,A,u){var v=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:u;s.call(this,p,A,v)}}return e}const Un=Object.freeze(Object.defineProperty({__proto__:null,polyfill:zn},Symbol.toStringTag,{value:"Module"})),qn=Ct(Un);Object.defineProperty(J,"__esModule",{value:!0});J.bodyOpenClassName=J.portalClassName=void 0;var _e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},$n=function(){function e(t,o){for(var r=0;r<o.length;r++){var i=o[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),ht=y,me=ie(ht),Xn=Qe,xe=ie(Xn),Kn=je,m=ie(Kn),Gn=Bn,De=ie(Gn),Yn=I,Jn=Zn(Yn),U=F,Re=ie(U),Qn=qn;function Zn(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}function ie(e){return e&&e.__esModule?e:{default:e}}function eo(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ve(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function to(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var no=J.portalClassName="ReactModalPortal",oo=J.bodyOpenClassName="ReactModal__Body--open",K=U.canUseDOM&&xe.default.createPortal!==void 0,We=function(t){return document.createElement(t)},Fe=function(){return K?xe.default.createPortal:xe.default.unstable_renderSubtreeIntoContainer};function pe(e){return e()}var se=function(e){to(t,e);function t(){var o,r,i,c;eo(this,t);for(var h=arguments.length,s=Array(h),d=0;d<h;d++)s[d]=arguments[d];return c=(r=(i=Ve(this,(o=t.__proto__||Object.getPrototypeOf(t)).call.apply(o,[this].concat(s))),i),i.removePortal=function(){!K&&xe.default.unmountComponentAtNode(i.node);var p=pe(i.props.parentSelector);p&&p.contains(i.node)?p.removeChild(i.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},i.portalRef=function(p){i.portal=p},i.renderPortal=function(p){var A=Fe(),u=A(i,me.default.createElement(De.default,_e({defaultStyles:t.defaultStyles},p)),i.node);i.portalRef(u)},r),Ve(i,c)}return $n(t,[{key:"componentDidMount",value:function(){if(U.canUseDOM){K||(this.node=We("div")),this.node.className=this.props.portalClassName;var r=pe(this.props.parentSelector);r.appendChild(this.node),!K&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(r){var i=pe(r.parentSelector),c=pe(this.props.parentSelector);return{prevParent:i,nextParent:c}}},{key:"componentDidUpdate",value:function(r,i,c){if(U.canUseDOM){var h=this.props,s=h.isOpen,d=h.portalClassName;r.portalClassName!==d&&(this.node.className=d);var p=c.prevParent,A=c.nextParent;A!==p&&(p.removeChild(this.node),A.appendChild(this.node)),!(!r.isOpen&&!s)&&!K&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!U.canUseDOM||!this.node||!this.portal)){var r=this.portal.state,i=Date.now(),c=r.isOpen&&this.props.closeTimeoutMS&&(r.closesAt||i+this.props.closeTimeoutMS);c?(r.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,c-i)):this.removePortal()}}},{key:"render",value:function(){if(!U.canUseDOM||!K)return null;!this.node&&K&&(this.node=We("div"));var r=Fe();return r(me.default.createElement(De.default,_e({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(r){Jn.setElement(r)}}]),t}(ht.Component);se.propTypes={isOpen:m.default.bool.isRequired,style:m.default.shape({content:m.default.object,overlay:m.default.object}),portalClassName:m.default.string,bodyOpenClassName:m.default.string,htmlOpenClassName:m.default.string,className:m.default.oneOfType([m.default.string,m.default.shape({base:m.default.string.isRequired,afterOpen:m.default.string.isRequired,beforeClose:m.default.string.isRequired})]),overlayClassName:m.default.oneOfType([m.default.string,m.default.shape({base:m.default.string.isRequired,afterOpen:m.default.string.isRequired,beforeClose:m.default.string.isRequired})]),appElement:m.default.oneOfType([m.default.instanceOf(Re.default),m.default.instanceOf(U.SafeHTMLCollection),m.default.instanceOf(U.SafeNodeList),m.default.arrayOf(m.default.instanceOf(Re.default))]),onAfterOpen:m.default.func,onRequestClose:m.default.func,closeTimeoutMS:m.default.number,ariaHideApp:m.default.bool,shouldFocusAfterRender:m.default.bool,shouldCloseOnOverlayClick:m.default.bool,shouldReturnFocusAfterClose:m.default.bool,preventScroll:m.default.bool,parentSelector:m.default.func,aria:m.default.object,data:m.default.object,role:m.default.string,contentLabel:m.default.string,shouldCloseOnEsc:m.default.bool,overlayRef:m.default.func,contentRef:m.default.func,id:m.default.string,overlayElement:m.default.func,contentElement:m.default.func};se.defaultProps={isOpen:!1,portalClassName:no,bodyOpenClassName:oo,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(t,o){return me.default.createElement("div",t,o)},contentElement:function(t,o){return me.default.createElement("div",t,o)}};se.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,Qn.polyfill)(se);J.default=se;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var o=J,r=i(o);function i(c){return c&&c.__esModule?c:{default:c}}t.default=r.default,e.exports=t.default})(be,be.exports);var ro=be.exports;const mt=Je(ro),B="/goit-group2-react-nodejs/assets/horodiukIcons-b8c45607.svg",Le=l.select`
  margin-bottom: 24px;
  border: 1px solid #d7e3ff;
  border-radius: 6px;
  padding: 12px 10px;
  width: 90px;
  height: 44px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`,ao=l.div``,Ie=l.div`
  position: relative;
  display: inline-block;
`,He=l.svg`
  position: absolute;
  top: 10px;
  right: 6px;
  pointer-events: none;
`;function xt({onChange:e,value:t}){const o=Array.from(new Array(24),(d,p)=>p),r=[0,5,10,15,20,25,30,35,40,45,50,55],i=new Date(t);let c=i.getHours(),h=i.getMinutes();const s=r.reduce((d,p)=>p>=h&&(d===null||Math.abs(p-h)<Math.abs(d-h))?p:d,null);return s===null?(c=(c+1)%24,h=0):h=s,n.jsxs(ao,{id:"selectTimeWrapper",children:[n.jsxs(Ie,{children:[n.jsx(Le,{onChange:d=>e(d,"hour"),value:c,children:o.map(d=>n.jsx("option",{value:d,children:d.toString().padStart(2,"0")},d))}),n.jsx(He,{width:"24",height:"24",children:n.jsx("use",{href:`${B}#icon-arrow`})})]}),":",n.jsxs(Ie,{children:[n.jsx(Le,{onChange:d=>e(d,"minute"),value:h,children:r.map(d=>n.jsx("option",{value:d,children:d.toString().padStart(2,"0")},d))}),n.jsx(He,{width:"24",height:"24",children:n.jsx("use",{href:`${B}#icon-arrow`})})]})]})}const io=l.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  overflow: scroll;
`,so=l.div`
  position: absolute;
  left: 50%;
  top: 40px;
  transform: translateX(-50%);
  border-radius: 10px;
  width: 280px;
  background-color: #fff;
  padding: 24px 12px;

  @media screen and (min-width: 768px) {
    padding: 32px 24px;
    width: 704px;
  }
  @media screen and (min-width: 1440px) {
    top: 50%;
    width: 592px;
    transform: translate(-50%, -50%);
  }
`,lo=l.button`
  position: absolute;
  top: 24px;
  right: 12px;
  width: 24px;
  height: 24px;
  border: none;
  padding: 0;
  background-color: transparent;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    top: 32px;
    right: 24px;
  }
`,co=l.h2`
  font-weight: 500;
  font-size: 26px;
  line-height: 123%;
  color: #2f2f2f;
  margin-bottom: 24px;
`,Be=l.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  color: #2f2f2f;
  margin-bottom: 16px;
`,ze=l.p`
  font-size: 16px;
  line-height: 125%;
  color: #2f2f2f;
  margin-bottom: 12px;
`,Ue=l.button`
  box-shadow: 0 2px 4px 0 rgba(64, 123, 255, 0.2);
  background-color: #fff;
  border: 1px solid #9ebbff;
  border-radius: 30px;
  padding: 0px;
  width: 44px;
  height: 44px;
  cursor: pointer;
`,qe=l.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 133%;
  color: #407bff;
  text-align: center;
`,po=l.input`
  margin-bottom: 24px;
  border: 1px solid #d7e3ff;
  border-radius: 6px;
  padding: 12px 10px;
  width: 120px;
  height: 44px;
  color: #407bff;
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;

  &::-webkit-calendar-picker-indicator {
    display: none;
  }

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`,uo=l.input`
  border: 1px solid #d7e3ff;
  border-radius: 6px;
  padding: 12px 10px;
  width: 120px;
  height: 44px;
  margin-bottom: 24px;
  color: #407bff;
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`,fo=l.button`
  /* margin-top: 16px; */
  box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);
  color: #fff;
  background-color: #407bff;
  border-radius: 10px;
  padding: 8px 30px;
  width: 256px;
  height: 36px;

  @media screen and (min-width: 768px) {
    width: 160px;
  }
`,ho=l.div`
  background-color: #d7e3ff;
  border-radius: 40px;
  padding: 6px 10px;
  height: 36px;
`,mo=l.div`
  display: flex;
  width: 194px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`,xo=l.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
  }
`;mt.setAppElement("#root");function gt({isOpen:e,onClose:t,onAddWater:o}){const[r,i]=y.useState(0),[c,h]=y.useState(!1),[s,d]=y.useState(0),p=Ee(),[A,u]=y.useState(new Date),v=(j,O="")=>{let N=new Date(A);switch(O){case"hour":N.setHours(parseInt(j.target.value,10));break;case"minute":N.setMinutes(Math.ceil(parseInt(j.target.value,10)/5)*5);break}u(N)},b=()=>{p(Et({amount:r,date:Date(A)}))},w=()=>{t()},C=()=>{i(r+50),d(r+50)},T=()=>{if(r-50<0){i(0),d(0);return}i(r-50),d(r-50)},M=()=>{i(s)},q=j=>{const O=parseInt(j.target.value>0?j.target.value:0,10);d(O)},_=j=>{j.target.closest("#selectTimeWrapper")||(h(!1),j.target===j.currentTarget&&w())},z=j=>{j.key==="Escape"&&w()};y.useEffect(()=>(window.addEventListener("keydown",z),()=>{window.removeEventListener("keydown",z)}),[]);const H=j=>{const O=new Date(j),N=R=>R.toString().padStart(2,"0");return`${N(O.getHours())}:${N(O.getMinutes())}`};return Ze.createPortal(n.jsx(io,{onClick:_,children:n.jsxs(so,{children:[n.jsx(lo,{onClick:w,children:n.jsx("svg",{width:"24",height:"24",children:n.jsx("use",{href:`${B}#icon-close`})})}),n.jsx(co,{children:"Add water"}),n.jsx(Be,{children:"Choose a value:"}),n.jsx(ze,{children:"Amount of water:"}),n.jsxs(mo,{children:[n.jsx(Ue,{onClick:T,children:n.jsx("svg",{width:"44",height:"44",children:n.jsx("use",{href:`${B}#icon-minus`})})}),n.jsx(ho,{children:n.jsxs(qe,{children:[r,"ml"]})}),n.jsx(Ue,{onClick:C,children:n.jsx("svg",{width:"44",height:"44",children:n.jsx("use",{href:`${B}#icon-plus`})})})]}),n.jsx(ze,{children:"Recording time:"}),c?n.jsx(xt,{onChange:v,value:A}):n.jsx(po,{type:"text","aria-label":"Choose time",value:H(A),onChange:()=>{},onFocus:()=>h(!0)}),n.jsx(Be,{children:"Enter the value of the water used:"}),n.jsx(uo,{value:s,onBlur:M,onChange:q,type:"number"}),n.jsxs(xo,{children:[n.jsxs(qe,{children:[r,"ml"]}),n.jsx(fo,{onClick:b,type:"button",children:"Save"})]})]})}),document.getElementById("modal-root"))}const go=l.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  overflow: scroll;
`,vo=l.div`
  position: absolute;
  left: 50%;
  top: 40px;
  transform: translateX(-50%);
  border-radius: 10px;
  width: 280px;
  background-color: #fff;
  padding: 24px 12px;

  @media screen and (min-width: 768px) {
    padding: 32px 24px;
    width: 704px;
  }
  @media screen and (min-width: 1440px) {
    top: 50%;
    width: 592px;
    transform: translate(-50%, -50%);
  }
`,Ao=l.button`
  position: absolute;
  top: 24px;
  right: 12px;
  width: 24px;
  height: 24px;
  border: none;
  padding: 0;
  background-color: transparent;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    top: 32px;
    right: 24px;
  }
`,bo=l.h2`
  font-weight: 500;
  font-size: 26px;
  line-height: 123%;
  color: #2f2f2f;
  margin-bottom: 24px;
`,$e=l.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  color: #2f2f2f;
  margin-bottom: 16px;
`,Xe=l.p`
  font-size: 16px;
  line-height: 125%;
  color: #2f2f2f;
  margin-bottom: 12px;
`,Ke=l.button`
  box-shadow: 0 2px 4px 0 rgba(64, 123, 255, 0.2);
  background-color: #fff;
  border: 1px solid #9ebbff;
  border-radius: 30px;
  padding: 0px;
  width: 44px;
  height: 44px;
  cursor: pointer;
`,Ge=l.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 133%;
  color: #407bff;
  text-align: center;
`,yo=l.input`
  margin-bottom: 24px;
  border: 1px solid #d7e3ff;
  border-radius: 6px;
  padding: 12px 10px;
  width: 120px;
  height: 44px;
  color: #407bff;
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;

  &::-webkit-calendar-picker-indicator {
    display: none;
  }

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`,wo=l.input`
  border: 1px solid #d7e3ff;
  border-radius: 6px;
  padding: 12px 10px;
  width: 120px;
  height: 44px;
  margin-bottom: 24px;
  color: #407bff;
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`,Oo=l.button`
  /* margin-top: 16px; */
  box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);
  color: #fff;
  background-color: #407bff;
  border-radius: 10px;
  padding: 8px 30px;
  width: 256px;
  height: 36px;

  @media screen and (min-width: 768px) {
    width: 160px;
  }
`,Co=l.div`
  background-color: #d7e3ff;
  border-radius: 40px;
  padding: 6px 10px;
  height: 36px;
`,Eo=l.div`
  display: flex;
  width: 194px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`,jo=l.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
  }
`,So=l.div`
  display: flex;
  gap: 14px;
  align-items: center;
  margin-bottom: 24px;
  border-radius: 10px;
  padding: 8px 24px;
  width: 256px;
  background-color: #ecf2ff;
`,Mo=l.p`
  font-size: 18px;
  line-height: 133%;
  color: #407bff;
`,ko=l.p`
  font-size: 16px;
  line-height: 125%;
  color: #2f2f2f;
`;mt.setAppElement("#root");function Po({isOpen:e,onClose:t,onAddWater:o}){const r=et(Ut)||{amount:250,date:new Date},[i,c]=y.useState(r.amount),[h,s]=y.useState(!1),[d,p]=y.useState(0),A=Ee(),[u,v]=y.useState(r.date),b=(O,N="")=>{let R=new Date(u);switch(N){case"hour":R.setHours(parseInt(O.target.value,10));break;case"minute":R.setMinutes(Math.ceil(parseInt(O.target.value,10)/5)*5);break}v(R)},w=()=>{A(jt({amount:i,date:Date(u)}))},C=()=>{t()},T=()=>{c(i+50),p(i+50)},M=()=>{if(i-50<0){c(0),p(0);return}c(i-50),p(i-50)},q=()=>{c(d)},_=O=>{const N=parseInt(O.target.value>0?O.target.value:0,10);p(N)},z=O=>{O.target.closest("#selectTimeWrapper")||(s(!1),O.target===O.currentTarget&&C())},H=O=>{O.key==="Escape"&&C()};y.useEffect(()=>(window.addEventListener("keydown",H),()=>{window.removeEventListener("keydown",H)}),[]);const j=O=>{const N=new Date(O),R=ve=>ve.toString().padStart(2,"0");return`${R(N.getHours())}:${R(N.getMinutes())}`};return Ze.createPortal(n.jsx(go,{onClick:z,children:n.jsxs(vo,{children:[n.jsx(Ao,{onClick:C,children:n.jsx("svg",{width:"24",height:"24",children:n.jsx("use",{href:`${B}#icon-close`})})}),n.jsx(bo,{children:"Edit the entered amount of water"}),n.jsxs(So,{children:[" ",n.jsx("svg",{width:"36",height:"36",children:n.jsx("use",{href:`${B}#icon-glass`})}),n.jsxs(Mo,{children:[r.amount,"ml"]}),n.jsx(ko,{children:j(r.time)})]}),n.jsx($e,{children:"Correct entered data:"}),n.jsx(Xe,{children:"Amount of water:"}),n.jsxs(Eo,{children:[n.jsx(Ke,{onClick:M,children:n.jsx("svg",{width:"44",height:"44",children:n.jsx("use",{href:`${B}#icon-minus`})})}),n.jsx(Co,{children:n.jsxs(Ge,{children:[i,"ml"]})}),n.jsx(Ke,{onClick:T,children:n.jsx("svg",{width:"44",height:"44",children:n.jsx("use",{href:`${B}#icon-plus`})})})]}),n.jsx(Xe,{children:"Recording time:"}),h?n.jsx(xt,{onChange:b,value:u}):n.jsx(yo,{type:"text","aria-label":"Choose time",value:j(u),onChange:()=>{},onFocus:()=>s(!0)}),n.jsx($e,{children:"Enter the value of the water used:"}),n.jsx(wo,{value:d,onBlur:q,onChange:_,type:"number"}),n.jsxs(jo,{children:[n.jsxs(Ge,{children:[i,"ml"]}),n.jsx(Oo,{onClick:w,type:"button",children:"Save"})]})]})}),document.getElementById("modal-root"))}const To=l.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  position: fixed;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1;

  &.base-modal-enter {
    opacity: 0;
  }

  &.base-modal-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in-out;
  }

  &.base-modal-exit {
    opacity: 1;
  }

  &.base-modal-exit-active {
    opacity: 0;
    transition: opacity 300ms ease-in-out 200ms;
  }
`,No=l.div`
  translate: -50% -50%;
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 280px;
  max-height: 90vh;
  background: ${({theme:e})=>e.color.primaryWhite};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: auto;
  z-index: 1;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    min-width: 592px;
  }

  &.modal-content-enter {
    opacity: 0;
    scale: 0.5;
  }

  &.modal-content-enter-active {
    opacity: 1;
    scale: 1;
    transition:
      opacity 300ms ease-in-out 200ms,
      scale 200ms ease-in-out 200ms;
  }

  &.modal-content-exit {
    opacity: 1;
    scale: 1;
  }

  &.modal-content-exit-active {
    opacity: 0;
    scale: 0.5;
    transition:
      opacity 300ms ease-in-out,
      scale 200ms ease-in-out;
  }
`,_o=l.div`
  display: flex;
  justify-content: space-between;
  padding: ${({stylesPadding:e})=>e||"24px 12px"};
  color: ${({theme:e})=>e.color.primaryBlack};

  h2 {
    font-weight: 500;
    font-size: 26px;
    line-height: 1.2;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 32px;
  }
`,Do=l.button`
  width: 24px;
  height: 24px;
  background-color: transparent;
  padding: 0;
`,Ro=l.svg`
  width: 100%;
  height: 100%;
  stroke: ${({theme:e})=>e.color.primaryAccent};

  &:hover,
  &:focus {
    stroke: ${({theme:e})=>e.color.secondaryYellow};
  }
`,vt=({onShow:e,children:t,title:o,onClose:r})=>{const i=document.querySelector("#modal-root");if(y.useEffect(()=>{const h=s=>{s.code==="Escape"&&r()};return e&&(document.body.style.overflow="hidden",window.addEventListener("keydown",h)),()=>{document.body.style.overflow="auto",window.removeEventListener("keydown",h)}},[e,r]),!e)return null;const c=n.jsx(To,{onClick:r,children:n.jsxs(No,{onClick:h=>h.stopPropagation(),children:[n.jsxs(_o,{children:[n.jsx("h2",{children:o}),n.jsx(Do,{onClick:r,children:n.jsx(Ro,{children:n.jsx("use",{href:`${St}#icon-Vector`})})})]}),t]})});return Qe.createPortal(c,i)};vt.propTypes={onClose:de.func.isRequired,children:de.node.isRequired,onShow:de.bool.isRequired,title:de.string.isRequired};const Vo=l.div`
  padding: 0 24px 32px;
`,Wo=l.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    flex-direction: row-reverse;
  }
`,Ye=l.button`
  display: inline-block;
  width: 100%;
  padding: 8px 30px;
  color: #fff;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  background-color: ${({theme:e})=>e.color.secondaryRed};
  box-shadow: ${({theme:e})=>e.boxShadowforButton.normalButton};
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    box-shadow: ${({theme:e})=>e.boxShadowforButton.hoverButton};
  }
  &:active {
    box-shadow: ${({theme:e})=>e.boxShadowforButton.activeButton};
  }

  &:last-of-type {
    color: ${({theme:e})=>e.color.accent};
    background-color: ${({theme:e})=>e.color.secondaryPowderBlue};
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 160px;
    padding: 10px 30px;
  }
`,Fo=l.p`
  font-size: 18px;
  color: ${({theme:e})=>e.color.primaryBlack};
  line-height: 20px;
  font-weight: 500;

  margin-bottom: 24px;
`,Lo=({onClose:e,onShow:t})=>n.jsx(vt,{onClose:e,onShow:t,title:"Delete Entry",children:n.jsxs(Vo,{children:[n.jsx(Fo,{children:"Are you sure you want to delete the entry?"}),n.jsxs(Wo,{children:[n.jsx(Ye,{onClick:e,children:"Delete"}),n.jsx(Ye,{onClick:e,children:"Cancel"})]})]})}),Io=l.ul`
  overflow-y: scroll;
  height: 180px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  gap: 12px;
  list-style: none;
  @media screen and (min-width: 768px) {
    height: 176px;
  }
`,Ho=l.li`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: space-between;
`,Bo=l.div`
  display: flex;
  align-items: center;
`,zo=l.p`
  color: #407bff;
  font-size: 18px;
  line-height: 24px;
  margin-left: 12px;
`,Uo=l.p`
  margin-left: 12px;
  line-height: 24px;
  font-size: 12px;
  color: #2f2f2f;

  @media screen and (min-width: 768px) {
    margin-left: 16px;
  }
`,qo=l.h2`
  margin-bottom: 16px;
  color: #2f2f2f;
  font-weight: 500px;
  font-size: 24px;
  line-height: 30px;

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 32px;
  }
`,$o=l.button`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
  color: #407bff;
  font-weight: 500px;
  font-size: 16px;
  line-height: 20px;
  gap: 8px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`,Xo=l.button`
  margin-right: 18px;
  background-color: transparent;
`,Ko=l.button`
  background-color: transparent;
`,Go=[{id:"1",amount:"250ml",time:"14:00 PM"},{id:"2",amount:"250ml",time:"14:00 PM"},{id:"3",amount:"250ml",time:"14:00 PM"},{id:"4",amount:"250ml",time:"14:00 PM"},{id:"5",amount:"250ml",time:"14:00 PM"},{id:"6",amount:"250ml",time:"14:00 PM"}],Yo=()=>{const[e,t]=y.useState(Go),[o,r]=y.useState(!1),[i,c]=y.useState(!1),[h,s]=y.useState(!1),d=et(zt);console.log(d);const p=()=>{r(!1)},A=()=>{r(!0)},u=()=>{c(!1)},v=()=>{c(!0)},b=()=>{s(!1)},w=C=>{t(T=>T.filter(M=>M.id!==C))};return n.jsxs("div",{children:[n.jsxs("div",{children:[n.jsx(qo,{children:"Today"}),n.jsx(Io,{children:e.length>0&&e.map(({id:C,amount:T,time:M})=>n.jsxs(n.Fragment,{children:[n.jsxs(Ho,{children:[n.jsxs(Bo,{children:[n.jsx("img",{src:qt,alt:"Icon glass"}),n.jsx(zo,{children:T}),n.jsx(Uo,{children:M})]}),n.jsxs("div",{children:[n.jsx(Xo,{type:"button",onClick:v,children:n.jsx("img",{src:$t,alt:"Icon glass"})}),n.jsx(Ko,{type:"button",onClick:()=>w(C),children:n.jsx("img",{src:Xt,alt:"Icon glass"})}),o&&n.jsx(Lo,{isOpen:h,onClose:b})]})]},C),i&&n.jsx(Po,{isOpen:i,onClose:u})]}))})]}),n.jsxs($o,{type:"button",onClick:A,children:[n.jsx(Bt,{})," Add Water"]}),o&&n.jsx(gt,{isOpen:o,onClose:p})]})},Jo=Yo;function Qo(e){return ot({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"16"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"16",y2:"12"},child:[]}]})(e)}const Zo=l.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 12px;
    width: 704px;
  }

  @media screen and (min-width: 1440px) {
    gap: 23px;
    width: 592px;
  }
`,er=l.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  @media screen and (min-width: 768px) {
    width: 356px;
  }

  @media screen and (min-width: 1440px) {
    width: 391px;
  }

  h2 {
    color: #407bff;
    font-weight: 400;
    size: 18px;
    line-height: 24px;
    margin-bottom: 8px;

    @media screen and (min-width: 768px) {
      margin-bottom: 16px;
    }
  }
`,tr=l.input`
  &[type='range'] {
    width: 100%;
    height: 8px;
    background: linear-gradient(
      to right,
      #9ebbff 0%,
      #9ebbff ${e=>e.value}%,
      #d7e3ff ${e=>e.value}%,
      #d7e3ff 100%
    );
    border-radius: 10px;
    appearance: none;
  }

  &[type='range']::-webkit-slider-thumb {
    width: 14px;
    height: 14px;
    background-color: #ffffff;
    border-radius: 50%;
    border: solid 1px #407bff;
    appearance: none;
  }

  @media screen and (min-width: 768px) {
    width: 325px;
  }

  @media screen and (min-width: 1440px) {
    width: 360px;
  }
`,nr=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    color: #407bff;
    line-height: 16px;
    font-size: 12px;
    &::before {
      content: '|';
      color: #d7e3ff;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &:nth-of-type(2) {
      color: #407bff;
      line-height: 20px;
      font-size: 16px;
      font-weight: 500;
    }
  }
`,or=l.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  background-color: #407bff;
  border-radius: 10px;
  padding-top: 8px;
  padding-bottom: 8px;
  box-shadow: 0px 4px 8px 0px #407bff57;
  border: none;
  color: #ffffff;
  font-weight: 500;
  size: 16px;
  line-height: 20px;
  cursor: pointer;
  transition: 350ms cubic-bezier(0.165, 0.84, 0.44, 1);
  &:hover,
  &:focus {
    box-shadow: 0px 4px 8px 0px #407bff34;
  }

  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1440px) {
    width: 178px;
  }
`,rr=()=>{const[e,t]=y.useState(!1),o=()=>{t(!1)},r=95,i=()=>{t(!0)};return n.jsxs(Zo,{children:[n.jsxs(er,{children:[n.jsx("h2",{children:"Today"}),n.jsx(tr,{value:r,type:"range",min:"0",max:"100"}),n.jsxs(nr,{children:[n.jsx("p",{children:"0%"}),n.jsx("p",{children:"50%"}),n.jsx("p",{children:"100%"})]})]}),n.jsxs(or,{onClick:i,type:"button",children:[n.jsx(Qo,{}),"Add Water"]}),e&&n.jsx(gt,{isOpen:e,onClose:o})]})},ar=rr,ir="/goit-group2-react-nodejs/assets/bottleHomeScreenDesk-630fd92f.png",sr="/goit-group2-react-nodejs/assets/bottleHomeScreenDesk2x@2x-51f4e9e6.png",lr="/goit-group2-react-nodejs/assets/bottleHomeScreenTab-2759a74b.png",cr="/goit-group2-react-nodejs/assets/bottleHomeScreenTab@2x-805003a0.png",dr="/goit-group2-react-nodejs/assets/bottleHomeScreenMob-fe8938bc.png",pr="/goit-group2-react-nodejs/assets/bottleHomeScreenMob2x@2x-9640a1cb.png",ur="data:image/png;base64,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",fr="/goit-group2-react-nodejs/assets/backgroundElementHomeScreenTab-4de5d48f.png",hr=l.div`
  background-size: cover;
  background: url(${ur});
  height: max-content;
  background-repeat: no-repeat;
  min-height: calc(100% - 64px);

  @media screen and (min-width: 768px) {
    background: url(${fr});
    min-height: calc(100% - 80px);
  }

  @media screen and (min-width: 1440px) {
    background: url(${Mt});
    min-height: calc(100% - 72px);
  }
`,mr=l.div`
  margin-bottom: 40px;
  margin-top: 20px;
  background-size: 280px 208px;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${dr});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 440px;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${pr});
  }

  @media screen and (min-width: 768px) {
    background-size: 518px 386px;
    background-position: calc(50% + 9px) 8px;
    height: 492px;
    background-image: url(${lr});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background: url(${cr});
      background-size: 518px 386px;
      background-repeat: no-repeat;
    }
  }

  @media screen and (min-width: 1440px) {
    background-size: 738px 548px;
    background-position: calc(50% + 10px) 46px;
    height: 680px;
    background-image: url(${ir});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${sr});
    }
  }
`,xr=l.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 320px;
  padding: 0 20px;
  gap: 40px;
  width: 100%;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 112px;
    gap: 32px;
    flex-direction: row;
  }
`,gr=l.div`
  margin-bottom: 40px;
  margin-top: 20px;
  padding: 24px 8px;
  background-color: #ecf2ff;
  box-shadow: 0px 4px 14px 0px #407bff4d;
  border-radius: 10px;
  @media screen and (min-width: 768px) {
    margin-bottom: 44px;
    padding: 32px 24px;
  }

  @media screen and (min-width: 1440px) {
    width: 50%;
  }
`;function br(){return n.jsx(hr,{children:n.jsxs(xr,{children:[n.jsxs(mr,{children:[n.jsx(Dt,{}),n.jsx(ar,{})]}),n.jsx(gr,{children:n.jsx(Jo,{})})]})})}export{br as default};
