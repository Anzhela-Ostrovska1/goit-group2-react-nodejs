import{r as N,R as ne,n as g,j as s,a as q,g as ut,b as dt,c as ft,d as pt,e as ht}from"./index-0b1a3d0f.js";import{b as mt}from"./bg_element_des@1x-1805b66c.js";function qe(e=ne){return function(){return N.useContext(e)}}const At=qe();function Be(e=ne){const t=e===ne?At:qe(e);return function(){const{store:o}=t();return o}}const vt=Be();function gt(e=ne){const t=e===ne?vt:Be(e);return function(){return t().dispatch}}const bt=gt(),xt=g.div`
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
`,yt=g.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,wt=()=>{const e=()=>{console.log("Open modal")};return s.jsx("div",{children:s.jsxs(xt,{children:[s.jsx("h2",{children:"My daily norma:"}),s.jsxs(yt,{children:[s.jsx("p",{children:"1.5 L"}),s.jsx("button",{onClick:e,type:"button",children:"Edit"})]})]})})},Ot=wt,Ct=()=>s.jsx("div",{children:"TodayWaterList"}),Et=Ct;var ze={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Se=q.createContext&&q.createContext(ze),St=["attr","size","title"];function Pt(e,t){if(e==null)return{};var n=Mt(e,t),o,a;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)o=c[a],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function Mt(e,t){if(e==null)return{};var n={},o=Object.keys(e),a,c;for(c=0;c<o.length;c++)a=o[c],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function de(){return de=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},de.apply(this,arguments)}function Pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,o)}return n}function fe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Pe(Object(n),!0).forEach(function(o){_t(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pe(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function _t(e,t,n){return t=Tt(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Tt(e){var t=kt(e,"string");return typeof t=="symbol"?t:String(t)}function kt(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Xe(e){return e&&e.map((t,n)=>q.createElement(t.tag,fe({key:n},t.attr),Xe(t.child)))}function Rt(e){return t=>q.createElement(jt,de({attr:fe({},e.attr)},t),Xe(e.child))}function jt(e){var t=n=>{var{attr:o,size:a,title:c}=e,v=Pt(e,St),i=a||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),q.createElement("svg",de({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,o,v,{className:l,style:fe(fe({color:e.color||n.color},n.style),e.style),height:i,width:i,xmlns:"http://www.w3.org/2000/svg"}),c&&q.createElement("title",null,c),e.children)};return Se!==void 0?q.createElement(Se.Consumer,null,n=>t(n)):t(ze)}function Nt(e){return Rt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"16"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"16",y2:"12"},child:[]}]})(e)}var be={exports:{}},z={},Ke={exports:{}},Vt="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Dt=Vt,Ft=Dt;function Ge(){}function $e(){}$e.resetWarningCache=Ge;var Lt=function(){function e(o,a,c,v,i,l){if(l!==Ft){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:$e,resetWarningCache:Ge};return n.PropTypes=n,n};Ke.exports=Lt();var Ye=Ke.exports,xe={exports:{}},k={},ye={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=b;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var n="none",o="contents",a=/input|select|textarea|button|object|iframe/;function c(m,A){return A.getPropertyValue("overflow")!=="visible"||m.scrollWidth<=0&&m.scrollHeight<=0}function v(m){var A=m.offsetWidth<=0&&m.offsetHeight<=0;if(A&&!m.innerHTML)return!0;try{var x=window.getComputedStyle(m),w=x.getPropertyValue("display");return A?w!==o&&c(m,x):w===n}catch{return console.warn("Failed to inspect element style"),!1}}function i(m){for(var A=m,x=m.getRootNode&&m.getRootNode();A&&A!==document.body;){if(x&&A===x&&(A=x.host.parentNode),v(A))return!1;A=A.parentNode}return!0}function l(m,A){var x=m.nodeName.toLowerCase(),w=a.test(x)&&!m.disabled||x==="a"&&m.href||A;return w&&i(m)}function h(m){var A=m.getAttribute("tabindex");A===null&&(A=void 0);var x=isNaN(A);return(x||A>=0)&&l(m,!x)}function b(m){var A=[].slice.call(m.querySelectorAll("*"),0).reduce(function(x,w){return x.concat(w.shadowRoot?b(w.shadowRoot):[w])},[]);return A.filter(h)}e.exports=t.default})(ye,ye.exports);var Je=ye.exports;Object.defineProperty(k,"__esModule",{value:!0});k.resetState=Ut;k.log=qt;k.handleBlur=oe;k.handleFocus=re;k.markForFocusLater=Bt;k.returnFocus=zt;k.popWithoutFocus=Xt;k.setupScopedFocus=Kt;k.teardownScopedFocus=Gt;var Wt=Je,Ht=It(Wt);function It(e){return e&&e.__esModule?e:{default:e}}var $=[],G=null,we=!1;function Ut(){$=[]}function qt(){}function oe(){we=!0}function re(){if(we){if(we=!1,!G)return;setTimeout(function(){if(!G.contains(document.activeElement)){var e=(0,Ht.default)(G)[0]||G;e.focus()}},0)}}function Bt(){$.push(document.activeElement)}function zt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=null;try{$.length!==0&&(t=$.pop(),t.focus({preventScroll:e}));return}catch{console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}}function Xt(){$.length>0&&$.pop()}function Kt(e){G=e,window.addEventListener?(window.addEventListener("blur",oe,!1),document.addEventListener("focus",re,!0)):(window.attachEvent("onBlur",oe),document.attachEvent("onFocus",re))}function Gt(){G=null,window.addEventListener?(window.removeEventListener("blur",oe),document.removeEventListener("focus",re)):(window.detachEvent("onBlur",oe),document.detachEvent("onFocus",re))}var Oe={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=v;var n=Je,o=a(n);function a(i){return i&&i.__esModule?i:{default:i}}function c(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return i.activeElement.shadowRoot?c(i.activeElement.shadowRoot):i.activeElement}function v(i,l){var h=(0,o.default)(i);if(!h.length){l.preventDefault();return}var b=void 0,m=l.shiftKey,A=h[0],x=h[h.length-1],w=c();if(i===w){if(!m)return;b=x}if(x===w&&!m&&(b=A),A===w&&m&&(b=x),b){l.preventDefault(),b.focus();return}var j=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),W=j!=null&&j[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(W){var V=h.indexOf(w);if(V>-1&&(V+=m?-1:1),b=h[V],typeof b>"u"){l.preventDefault(),b=m?x:A,b.focus();return}l.preventDefault(),b.focus()}}e.exports=t.default})(Oe,Oe.exports);var $t=Oe.exports,R={},Yt=function(){},Jt=Yt,T={},Qe={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(e){(function(){var t=!!(typeof window<"u"&&window.document&&window.document.createElement),n={canUseDOM:t,canUseWorkers:typeof Worker<"u",canUseEventListeners:t&&!!(window.addEventListener||window.attachEvent),canUseViewport:t&&!!window.screen};e.exports?e.exports=n:window.ExecutionEnvironment=n})()})(Qe);var Qt=Qe.exports;Object.defineProperty(T,"__esModule",{value:!0});T.canUseDOM=T.SafeNodeList=T.SafeHTMLCollection=void 0;var Zt=Qt,en=tn(Zt);function tn(e){return e&&e.__esModule?e:{default:e}}var Ae=en.default,nn=Ae.canUseDOM?window.HTMLElement:{};T.SafeHTMLCollection=Ae.canUseDOM?window.HTMLCollection:{};T.SafeNodeList=Ae.canUseDOM?window.NodeList:{};T.canUseDOM=Ae.canUseDOM;T.default=nn;Object.defineProperty(R,"__esModule",{value:!0});R.resetState=ln;R.log=cn;R.assertNodeList=Ze;R.setElement=un;R.validateElement=Ce;R.hide=dn;R.show=fn;R.documentNotReadyOrSSRTesting=pn;var on=Jt,rn=sn(on),an=T;function sn(e){return e&&e.__esModule?e:{default:e}}var M=null;function ln(){M&&(M.removeAttribute?M.removeAttribute("aria-hidden"):M.length!=null?M.forEach(function(e){return e.removeAttribute("aria-hidden")}):document.querySelectorAll(M).forEach(function(e){return e.removeAttribute("aria-hidden")})),M=null}function cn(){}function Ze(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function un(e){var t=e;if(typeof t=="string"&&an.canUseDOM){var n=document.querySelectorAll(t);Ze(n,t),t=n}return M=t||M,M}function Ce(e){var t=e||M;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,rn.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function dn(e){var t=!0,n=!1,o=void 0;try{for(var a=Ce(e)[Symbol.iterator](),c;!(t=(c=a.next()).done);t=!0){var v=c.value;v.setAttribute("aria-hidden","true")}}catch(i){n=!0,o=i}finally{try{!t&&a.return&&a.return()}finally{if(n)throw o}}}function fn(e){var t=!0,n=!1,o=void 0;try{for(var a=Ce(e)[Symbol.iterator](),c;!(t=(c=a.next()).done);t=!0){var v=c.value;v.removeAttribute("aria-hidden")}}catch(i){n=!0,o=i}finally{try{!t&&a.return&&a.return()}finally{if(n)throw o}}}function pn(){M=null}var Y={};Object.defineProperty(Y,"__esModule",{value:!0});Y.resetState=hn;Y.log=mn;var Z={},ee={};function Me(e,t){e.classList.remove(t)}function hn(){var e=document.getElementsByTagName("html")[0];for(var t in Z)Me(e,Z[t]);var n=document.body;for(var o in ee)Me(n,ee[o]);Z={},ee={}}function mn(){}var An=function(t,n){return t[n]||(t[n]=0),t[n]+=1,n},vn=function(t,n){return t[n]&&(t[n]-=1),n},gn=function(t,n,o){o.forEach(function(a){An(n,a),t.add(a)})},bn=function(t,n,o){o.forEach(function(a){vn(n,a),n[a]===0&&t.remove(a)})};Y.add=function(t,n){return gn(t.classList,t.nodeName.toLowerCase()=="html"?Z:ee,n.split(" "))};Y.remove=function(t,n){return bn(t.classList,t.nodeName.toLowerCase()=="html"?Z:ee,n.split(" "))};var J={};Object.defineProperty(J,"__esModule",{value:!0});J.log=yn;J.resetState=wn;function xn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var et=function e(){var t=this;xn(this,e),this.register=function(n){t.openInstances.indexOf(n)===-1&&(t.openInstances.push(n),t.emit("register"))},this.deregister=function(n){var o=t.openInstances.indexOf(n);o!==-1&&(t.openInstances.splice(o,1),t.emit("deregister"))},this.subscribe=function(n){t.subscribers.push(n)},this.emit=function(n){t.subscribers.forEach(function(o){return o(n,t.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},pe=new et;function yn(){console.log("portalOpenInstances ----------"),console.log(pe.openInstances.length),pe.openInstances.forEach(function(e){return console.log(e)}),console.log("end portalOpenInstances ----------")}function wn(){pe=new et}J.default=pe;var Ee={};Object.defineProperty(Ee,"__esModule",{value:!0});Ee.resetState=Sn;Ee.log=Pn;var On=J,Cn=En(On);function En(e){return e&&e.__esModule?e:{default:e}}var E=void 0,_=void 0,B=[];function Sn(){for(var e=[E,_],t=0;t<e.length;t++){var n=e[t];n&&n.parentNode&&n.parentNode.removeChild(n)}E=_=null,B=[]}function Pn(){console.log("bodyTrap ----------"),console.log(B.length);for(var e=[E,_],t=0;t<e.length;t++){var n=e[t],o=n||{};console.log(o.nodeName,o.className,o.id)}console.log("edn bodyTrap ----------")}function _e(){B.length!==0&&B[B.length-1].focusContent()}function Mn(e,t){!E&&!_&&(E=document.createElement("div"),E.setAttribute("data-react-modal-body-trap",""),E.style.position="absolute",E.style.opacity="0",E.setAttribute("tabindex","0"),E.addEventListener("focus",_e),_=E.cloneNode(),_.addEventListener("focus",_e)),B=t,B.length>0?(document.body.firstChild!==E&&document.body.insertBefore(E,document.body.firstChild),document.body.lastChild!==_&&document.body.appendChild(_)):(E.parentElement&&E.parentElement.removeChild(E),_.parentElement&&_.parentElement.removeChild(_))}Cn.default.subscribe(Mn);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(p){for(var f=1;f<arguments.length;f++){var y=arguments[f];for(var r in y)Object.prototype.hasOwnProperty.call(y,r)&&(p[r]=y[r])}return p},o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(p){return typeof p}:function(p){return p&&typeof Symbol=="function"&&p.constructor===Symbol&&p!==Symbol.prototype?"symbol":typeof p},a=function(){function p(f,y){for(var r=0;r<y.length;r++){var u=y[r];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(f,u.key,u)}}return function(f,y,r){return y&&p(f.prototype,y),r&&p(f,r),f}}(),c=N,v=Ye,i=K(v),l=k,h=X(l),b=$t,m=K(b),A=R,x=X(A),w=Y,j=X(w),W=T,V=K(W),ve=J,se=K(ve);function X(p){if(p&&p.__esModule)return p;var f={};if(p!=null)for(var y in p)Object.prototype.hasOwnProperty.call(p,y)&&(f[y]=p[y]);return f.default=p,f}function K(p){return p&&p.__esModule?p:{default:p}}function S(p,f){if(!(p instanceof f))throw new TypeError("Cannot call a class as a function")}function D(p,f){if(!p)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return f&&(typeof f=="object"||typeof f=="function")?f:p}function F(p,f){if(typeof f!="function"&&f!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof f);p.prototype=Object.create(f&&f.prototype,{constructor:{value:p,enumerable:!1,writable:!0,configurable:!0}}),f&&(Object.setPrototypeOf?Object.setPrototypeOf(p,f):p.__proto__=f)}var Q={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},at=function(f){return f.code==="Tab"||f.keyCode===9},it=function(f){return f.code==="Escape"||f.keyCode===27},le=0,ge=function(p){F(f,p);function f(y){S(this,f);var r=D(this,(f.__proto__||Object.getPrototypeOf(f)).call(this,y));return r.setOverlayRef=function(u){r.overlay=u,r.props.overlayRef&&r.props.overlayRef(u)},r.setContentRef=function(u){r.content=u,r.props.contentRef&&r.props.contentRef(u)},r.afterClose=function(){var u=r.props,C=u.appElement,P=u.ariaHideApp,O=u.htmlOpenClassName,H=u.bodyOpenClassName,I=u.parentSelector,ce=I&&I().ownerDocument||document;H&&j.remove(ce.body,H),O&&j.remove(ce.getElementsByTagName("html")[0],O),P&&le>0&&(le-=1,le===0&&x.show(C)),r.props.shouldFocusAfterRender&&(r.props.shouldReturnFocusAfterClose?(h.returnFocus(r.props.preventScroll),h.teardownScopedFocus()):h.popWithoutFocus()),r.props.onAfterClose&&r.props.onAfterClose(),se.default.deregister(r)},r.open=function(){r.beforeOpen(),r.state.afterOpen&&r.state.beforeClose?(clearTimeout(r.closeTimer),r.setState({beforeClose:!1})):(r.props.shouldFocusAfterRender&&(h.setupScopedFocus(r.node),h.markForFocusLater()),r.setState({isOpen:!0},function(){r.openAnimationFrame=requestAnimationFrame(function(){r.setState({afterOpen:!0}),r.props.isOpen&&r.props.onAfterOpen&&r.props.onAfterOpen({overlayEl:r.overlay,contentEl:r.content})})}))},r.close=function(){r.props.closeTimeoutMS>0?r.closeWithTimeout():r.closeWithoutTimeout()},r.focusContent=function(){return r.content&&!r.contentHasFocus()&&r.content.focus({preventScroll:!0})},r.closeWithTimeout=function(){var u=Date.now()+r.props.closeTimeoutMS;r.setState({beforeClose:!0,closesAt:u},function(){r.closeTimer=setTimeout(r.closeWithoutTimeout,r.state.closesAt-Date.now())})},r.closeWithoutTimeout=function(){r.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},r.afterClose)},r.handleKeyDown=function(u){at(u)&&(0,m.default)(r.content,u),r.props.shouldCloseOnEsc&&it(u)&&(u.stopPropagation(),r.requestClose(u))},r.handleOverlayOnClick=function(u){r.shouldClose===null&&(r.shouldClose=!0),r.shouldClose&&r.props.shouldCloseOnOverlayClick&&(r.ownerHandlesClose()?r.requestClose(u):r.focusContent()),r.shouldClose=null},r.handleContentOnMouseUp=function(){r.shouldClose=!1},r.handleOverlayOnMouseDown=function(u){!r.props.shouldCloseOnOverlayClick&&u.target==r.overlay&&u.preventDefault()},r.handleContentOnClick=function(){r.shouldClose=!1},r.handleContentOnMouseDown=function(){r.shouldClose=!1},r.requestClose=function(u){return r.ownerHandlesClose()&&r.props.onRequestClose(u)},r.ownerHandlesClose=function(){return r.props.onRequestClose},r.shouldBeClosed=function(){return!r.state.isOpen&&!r.state.beforeClose},r.contentHasFocus=function(){return document.activeElement===r.content||r.content.contains(document.activeElement)},r.buildClassName=function(u,C){var P=(typeof C>"u"?"undefined":o(C))==="object"?C:{base:Q[u],afterOpen:Q[u]+"--after-open",beforeClose:Q[u]+"--before-close"},O=P.base;return r.state.afterOpen&&(O=O+" "+P.afterOpen),r.state.beforeClose&&(O=O+" "+P.beforeClose),typeof C=="string"&&C?O+" "+C:O},r.attributesFromObject=function(u,C){return Object.keys(C).reduce(function(P,O){return P[u+"-"+O]=C[O],P},{})},r.state={afterOpen:!1,beforeClose:!1},r.shouldClose=null,r.moveFromContentToOverlay=null,r}return a(f,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(r,u){this.props.isOpen&&!r.isOpen?this.open():!this.props.isOpen&&r.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!u.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var r=this.props,u=r.appElement,C=r.ariaHideApp,P=r.htmlOpenClassName,O=r.bodyOpenClassName,H=r.parentSelector,I=H&&H().ownerDocument||document;O&&j.add(I.body,O),P&&j.add(I.getElementsByTagName("html")[0],P),C&&(le+=1,x.hide(u)),se.default.register(this)}},{key:"render",value:function(){var r=this.props,u=r.id,C=r.className,P=r.overlayClassName,O=r.defaultStyles,H=r.children,I=C?{}:O.content,ce=P?{}:O.overlay;if(this.shouldBeClosed())return null;var st={ref:this.setOverlayRef,className:this.buildClassName("overlay",P),style:n({},ce,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},lt=n({id:u,ref:this.setContentRef,style:n({},I,this.props.style.content),className:this.buildClassName("content",C),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",n({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),ct=this.props.contentElement(lt,H);return this.props.overlayElement(st,ct)}}]),f}(c.Component);ge.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},ge.propTypes={isOpen:i.default.bool.isRequired,defaultStyles:i.default.shape({content:i.default.object,overlay:i.default.object}),style:i.default.shape({content:i.default.object,overlay:i.default.object}),className:i.default.oneOfType([i.default.string,i.default.object]),overlayClassName:i.default.oneOfType([i.default.string,i.default.object]),parentSelector:i.default.func,bodyOpenClassName:i.default.string,htmlOpenClassName:i.default.string,ariaHideApp:i.default.bool,appElement:i.default.oneOfType([i.default.instanceOf(V.default),i.default.instanceOf(W.SafeHTMLCollection),i.default.instanceOf(W.SafeNodeList),i.default.arrayOf(i.default.instanceOf(V.default))]),onAfterOpen:i.default.func,onAfterClose:i.default.func,onRequestClose:i.default.func,closeTimeoutMS:i.default.number,shouldFocusAfterRender:i.default.bool,shouldCloseOnOverlayClick:i.default.bool,shouldReturnFocusAfterClose:i.default.bool,preventScroll:i.default.bool,role:i.default.string,contentLabel:i.default.string,aria:i.default.object,data:i.default.object,children:i.default.node,shouldCloseOnEsc:i.default.bool,overlayRef:i.default.func,contentRef:i.default.func,id:i.default.string,overlayElement:i.default.func,contentElement:i.default.func,testId:i.default.string},t.default=ge,e.exports=t.default})(xe,xe.exports);var _n=xe.exports;function tt(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);e!=null&&this.setState(e)}function nt(e){function t(n){var o=this.constructor.getDerivedStateFromProps(e,n);return o??null}this.setState(t.bind(this))}function ot(e,t){try{var n=this.props,o=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,o)}finally{this.props=n,this.state=o}}tt.__suppressDeprecationWarning=!0;nt.__suppressDeprecationWarning=!0;ot.__suppressDeprecationWarning=!0;function Tn(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if(typeof e.getDerivedStateFromProps!="function"&&typeof t.getSnapshotBeforeUpdate!="function")return e;var n=null,o=null,a=null;if(typeof t.componentWillMount=="function"?n="componentWillMount":typeof t.UNSAFE_componentWillMount=="function"&&(n="UNSAFE_componentWillMount"),typeof t.componentWillReceiveProps=="function"?o="componentWillReceiveProps":typeof t.UNSAFE_componentWillReceiveProps=="function"&&(o="UNSAFE_componentWillReceiveProps"),typeof t.componentWillUpdate=="function"?a="componentWillUpdate":typeof t.UNSAFE_componentWillUpdate=="function"&&(a="UNSAFE_componentWillUpdate"),n!==null||o!==null||a!==null){var c=e.displayName||e.name,v=typeof e.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+c+" uses "+v+" but also contains the following legacy lifecycles:"+(n!==null?`
  `+n:"")+(o!==null?`
  `+o:"")+(a!==null?`
  `+a:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof e.getDerivedStateFromProps=="function"&&(t.componentWillMount=tt,t.componentWillReceiveProps=nt),typeof t.getSnapshotBeforeUpdate=="function"){if(typeof t.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=ot;var i=t.componentDidUpdate;t.componentDidUpdate=function(h,b,m){var A=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:m;i.call(this,h,b,A)}}return e}const kn=Object.freeze(Object.defineProperty({__proto__:null,polyfill:Tn},Symbol.toStringTag,{value:"Module"})),Rn=ut(kn);Object.defineProperty(z,"__esModule",{value:!0});z.bodyOpenClassName=z.portalClassName=void 0;var Te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},jn=function(){function e(t,n){for(var o=0;o<n.length;o++){var a=n[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),rt=N,he=ae(rt),Nn=dt,me=ae(Nn),Vn=Ye,d=ae(Vn),Dn=_n,ke=ae(Dn),Fn=R,Ln=Hn(Fn),L=T,Re=ae(L),Wn=Rn;function Hn(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function ae(e){return e&&e.__esModule?e:{default:e}}function In(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function je(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Un(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var qn=z.portalClassName="ReactModalPortal",Bn=z.bodyOpenClassName="ReactModal__Body--open",U=L.canUseDOM&&me.default.createPortal!==void 0,Ne=function(t){return document.createElement(t)},Ve=function(){return U?me.default.createPortal:me.default.unstable_renderSubtreeIntoContainer};function ue(e){return e()}var ie=function(e){Un(t,e);function t(){var n,o,a,c;In(this,t);for(var v=arguments.length,i=Array(v),l=0;l<v;l++)i[l]=arguments[l];return c=(o=(a=je(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(i))),a),a.removePortal=function(){!U&&me.default.unmountComponentAtNode(a.node);var h=ue(a.props.parentSelector);h&&h.contains(a.node)?h.removeChild(a.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},a.portalRef=function(h){a.portal=h},a.renderPortal=function(h){var b=Ve(),m=b(a,he.default.createElement(ke.default,Te({defaultStyles:t.defaultStyles},h)),a.node);a.portalRef(m)},o),je(a,c)}return jn(t,[{key:"componentDidMount",value:function(){if(L.canUseDOM){U||(this.node=Ne("div")),this.node.className=this.props.portalClassName;var o=ue(this.props.parentSelector);o.appendChild(this.node),!U&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(o){var a=ue(o.parentSelector),c=ue(this.props.parentSelector);return{prevParent:a,nextParent:c}}},{key:"componentDidUpdate",value:function(o,a,c){if(L.canUseDOM){var v=this.props,i=v.isOpen,l=v.portalClassName;o.portalClassName!==l&&(this.node.className=l);var h=c.prevParent,b=c.nextParent;b!==h&&(h.removeChild(this.node),b.appendChild(this.node)),!(!o.isOpen&&!i)&&!U&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!L.canUseDOM||!this.node||!this.portal)){var o=this.portal.state,a=Date.now(),c=o.isOpen&&this.props.closeTimeoutMS&&(o.closesAt||a+this.props.closeTimeoutMS);c?(o.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,c-a)):this.removePortal()}}},{key:"render",value:function(){if(!L.canUseDOM||!U)return null;!this.node&&U&&(this.node=Ne("div"));var o=Ve();return o(he.default.createElement(ke.default,Te({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(o){Ln.setElement(o)}}]),t}(rt.Component);ie.propTypes={isOpen:d.default.bool.isRequired,style:d.default.shape({content:d.default.object,overlay:d.default.object}),portalClassName:d.default.string,bodyOpenClassName:d.default.string,htmlOpenClassName:d.default.string,className:d.default.oneOfType([d.default.string,d.default.shape({base:d.default.string.isRequired,afterOpen:d.default.string.isRequired,beforeClose:d.default.string.isRequired})]),overlayClassName:d.default.oneOfType([d.default.string,d.default.shape({base:d.default.string.isRequired,afterOpen:d.default.string.isRequired,beforeClose:d.default.string.isRequired})]),appElement:d.default.oneOfType([d.default.instanceOf(Re.default),d.default.instanceOf(L.SafeHTMLCollection),d.default.instanceOf(L.SafeNodeList),d.default.arrayOf(d.default.instanceOf(Re.default))]),onAfterOpen:d.default.func,onRequestClose:d.default.func,closeTimeoutMS:d.default.number,ariaHideApp:d.default.bool,shouldFocusAfterRender:d.default.bool,shouldCloseOnOverlayClick:d.default.bool,shouldReturnFocusAfterClose:d.default.bool,preventScroll:d.default.bool,parentSelector:d.default.func,aria:d.default.object,data:d.default.object,role:d.default.string,contentLabel:d.default.string,shouldCloseOnEsc:d.default.bool,overlayRef:d.default.func,contentRef:d.default.func,id:d.default.string,overlayElement:d.default.func,contentElement:d.default.func};ie.defaultProps={isOpen:!1,portalClassName:qn,bodyOpenClassName:Bn,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(t,n){return he.default.createElement("div",t,n)},contentElement:function(t,n){return he.default.createElement("div",t,n)}};ie.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,Wn.polyfill)(ie);z.default=ie;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=z,o=a(n);function a(c){return c&&c.__esModule?c:{default:c}}t.default=o.default,e.exports=t.default})(be,be.exports);var zn=be.exports;const Xn=ft(zn),te="/goit-group2-react-nodejs/assets/horodiukIcons-b8c45607.svg",De=g.select`
  margin-bottom: 24px;
  border: 1px solid #d7e3ff;
  border-radius: 6px;
  padding: 12px 10px;
  width: 90px;
  height: 44px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`,Kn=g.div``,Fe=g.div`
  position: relative;
  display: inline-block;
`,Le=g.svg`
  position: absolute;
  top: 10px;
  right: 6px;
  pointer-events: none;
`;function Gn({onChange:e,value:t}){const n=Array.from(new Array(24),(l,h)=>h),o=[0,5,10,15,20,25,30,35,40,45,50,55],a=new Date(t);let c=a.getHours(),v=a.getMinutes();const i=o.reduce((l,h)=>h>=v&&(l===null||Math.abs(h-v)<Math.abs(l-v))?h:l,null);return i===null?(c=(c+1)%24,v=0):v=i,s.jsxs(Kn,{id:"selectTimeWrapper",children:[s.jsxs(Fe,{children:[s.jsx(De,{onChange:l=>e(l,"hour"),value:c,children:n.map(l=>s.jsx("option",{value:l,children:l.toString().padStart(2,"0")},l))}),s.jsx(Le,{width:"24",height:"24",children:s.jsx("use",{href:`${te}#icon-arrow`})})]}),":",s.jsxs(Fe,{children:[s.jsx(De,{onChange:l=>e(l,"minute"),value:v,children:o.map(l=>s.jsx("option",{value:l,children:l.toString().padStart(2,"0")},l))}),s.jsx(Le,{width:"24",height:"24",children:s.jsx("use",{href:`${te}#icon-arrow`})})]})]})}const $n=g.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  overflow: scroll;
`,Yn=g.div`
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
`,Jn=g.button`
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
`,Qn=g.h2`
  font-weight: 500;
  font-size: 26px;
  line-height: 123%;
  color: #2f2f2f;
  margin-bottom: 24px;
`,We=g.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  color: #2f2f2f;
  margin-bottom: 16px;
`,He=g.p`
  font-size: 16px;
  line-height: 125%;
  color: #2f2f2f;
  margin-bottom: 12px;
`,Ie=g.button`
  box-shadow: 0 2px 4px 0 rgba(64, 123, 255, 0.2);
  background-color: #fff;
  border: 1px solid #9ebbff;
  border-radius: 30px;
  padding: 0px;
  width: 44px;
  height: 44px;
  cursor: pointer;
`,Ue=g.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 133%;
  color: #407bff;
  text-align: center;
`,Zn=g.input`
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
`,eo=g.input`
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
`,to=g.button`
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
`,no=g.div`
  background-color: #d7e3ff;
  border-radius: 40px;
  padding: 6px 10px;
  height: 36px;
`,oo=g.div`
  display: flex;
  width: 194px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`,ro=g.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
  }
`;Xn.setAppElement("#root");function ao({isOpen:e,onClose:t,onAddWater:n}){const[o,a]=N.useState(0),[c,v]=N.useState(!1),[i,l]=N.useState(0),h=bt(),[b,m]=N.useState(new Date),A=(S,D="")=>{let F=new Date(b);switch(D){case"hour":F.setHours(parseInt(S.target.value,10));break;case"minute":F.setMinutes(Math.ceil(parseInt(S.target.value,10)/5)*5);break}m(F)},x=()=>{h(ht({amount:o,date:Date(b)}))},w=()=>{t()},j=()=>{a(o+50),l(o+50)},W=()=>{if(o-50<0){a(0),l(0);return}a(o-50),l(o-50)},V=()=>{a(i)},ve=S=>{const D=parseInt(S.target.value>0?S.target.value:0,10);l(D)},se=S=>{S.target.closest("#selectTimeWrapper")||(v(!1),S.target===S.currentTarget&&w())},X=S=>{S.key==="Escape"&&w()};N.useEffect(()=>(window.addEventListener("keydown",X),()=>{window.removeEventListener("keydown",X)}),[]);const K=S=>{const D=new Date(S),F=Q=>Q.toString().padStart(2,"0");return`${F(D.getHours())}:${F(D.getMinutes())}`};return pt.createPortal(s.jsx($n,{onClick:se,children:s.jsxs(Yn,{children:[s.jsx(Jn,{onClick:w,children:s.jsx("svg",{width:"24",height:"24",children:s.jsx("use",{href:`${te}#icon-close`})})}),s.jsx(Qn,{children:"Add water"}),s.jsx(We,{children:"Choose a value:"}),s.jsx(He,{children:"Amount of water:"}),s.jsxs(oo,{children:[s.jsx(Ie,{onClick:W,children:s.jsx("svg",{width:"44",height:"44",children:s.jsx("use",{href:`${te}#icon-minus`})})}),s.jsx(no,{children:s.jsxs(Ue,{children:[o,"ml"]})}),s.jsx(Ie,{onClick:j,children:s.jsx("svg",{width:"44",height:"44",children:s.jsx("use",{href:`${te}#icon-plus`})})})]}),s.jsx(He,{children:"Recording time:"}),c?s.jsx(Gn,{onChange:A,value:b}):s.jsx(Zn,{type:"text","aria-label":"Choose time",value:K(b),onChange:()=>{},onFocus:()=>v(!0)}),s.jsx(We,{children:"Enter the value of the water used:"}),s.jsx(eo,{value:i,onBlur:V,onChange:ve,type:"number"}),s.jsxs(ro,{children:[s.jsxs(Ue,{children:[o,"ml"]}),s.jsx(to,{onClick:x,type:"button",children:"Save"})]})]})}),document.getElementById("modal-root"))}const io=g.div`
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
`,so=g.div`
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
`,lo=g.input`
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
`,co=g.div`
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
    &:nth-child(2) {
      color: #407bff;
      line-height: 20px;
      font-size: 16px;
      font-weight: 500;
    }
  }
`,uo=g.button`
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
`,fo=()=>{const[e,t]=N.useState(!1),n=()=>{t(!1)},o=70,a=()=>{t(!0)};return s.jsxs(io,{children:[s.jsxs(so,{children:[s.jsx("h2",{children:"Today"}),s.jsx(lo,{value:o,type:"range",min:"0",max:"100"}),s.jsxs(co,{children:[s.jsx("p",{children:"0%"}),s.jsx("p",{children:"50%"}),s.jsx("p",{children:"100%"})]})]}),s.jsxs(uo,{onClick:a,type:"button",children:[s.jsx(Nt,{}),"Add Water"]}),e&&s.jsx(ao,{isOpen:e,onClose:n})]})},po=fo,ho="/goit-group2-react-nodejs/assets/bottleHomeScreenDesk-630fd92f.png",mo="/goit-group2-react-nodejs/assets/bottleHomeScreenDesk2x@2x-51f4e9e6.png",Ao="/goit-group2-react-nodejs/assets/bottleHomeScreenTab-2759a74b.png",vo="/goit-group2-react-nodejs/assets/bottleHomeScreenTab@2x-805003a0.png",go="/goit-group2-react-nodejs/assets/bottleHomeScreenMob-fe8938bc.png",bo="/goit-group2-react-nodejs/assets/bottleHomeScreenMob2x@2x-9640a1cb.png",xo="data:image/png;base64,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",yo="/goit-group2-react-nodejs/assets/backgroundElementHomeScreenTab-4de5d48f.png",wo=g.div`
  background-size: cover;
  background: url(${xo});
  height: max-content;
  background-repeat: no-repeat;
  min-height: calc(100% - 64px);

  @media screen and (min-width: 768px) {
    background: url(${yo});
    min-height: calc(100% - 80px);
  }

  @media screen and (min-width: 1440px) {
    background: url(${mt});
    min-height: calc(100% - 72px);
  }
`,Oo=g.div`
  background-size: 280px 208px;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${go});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 440px;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bo});
  }

  @media screen and (min-width: 768px) {
    background-size: 518px 386px;
    background-position: calc(50% + 9px) 8px;
    height: 492px;
    background-image: url(${Ao});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background: url(${vo});
      background-size: 518px 386px;
      background-repeat: no-repeat;
    }
  }

  @media screen and (min-width: 1440px) {
    background-size: 738px 548px;
    background-position: calc(50% + 10px) 46px;
    height: 680px;
    background-image: url(${ho});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${mo});
    }
  }
`,Co=g.div`
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
`,Eo=g.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;function Mo(){return s.jsx(wo,{children:s.jsxs(Co,{children:[s.jsxs(Oo,{children:[s.jsx(Ot,{}),s.jsx(po,{})]}),s.jsx(Eo,{children:s.jsx(Et,{})})]})})}export{Mo as default};
