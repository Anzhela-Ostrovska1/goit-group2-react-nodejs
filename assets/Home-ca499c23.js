import{r as A,R as ne,n as g,j as s,a as B,g as ct,b as dt,c as ft,d as pt,e as ht}from"./index-97a09532.js";function Be(e=ne){return function(){return A.useContext(e)}}const mt=Be();function qe(e=ne){const t=e===ne?mt:Be(e);return function(){const{store:o}=t();return o}}const vt=qe();function yt(e=ne){const t=e===ne?vt:qe(e);return function(){return t().dispatch}}const bt=yt(),gt=g.div`
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
`,xt=g.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,wt=()=>{const e=()=>{console.log("Open modal")};return s.jsx("div",{children:s.jsxs(gt,{children:[s.jsx("h2",{children:"My daily norma:"}),s.jsxs(xt,{children:[s.jsx("p",{children:"1.5 L"}),s.jsx("button",{onClick:e,type:"button",children:"Edit"})]})]})})},Ot=wt;var ze={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Se=B.createContext&&B.createContext(ze),Ct=["attr","size","title"];function _t(e,t){if(e==null)return{};var n=Et(e,t),o,a;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(a=0;a<u.length;a++)o=u[a],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function Et(e,t){if(e==null)return{};var n={},o=Object.keys(e),a,u;for(u=0;u<o.length;u++)a=o[u],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function de(){return de=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},de.apply(this,arguments)}function Me(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,o)}return n}function fe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Me(Object(n),!0).forEach(function(o){St(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Me(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function St(e,t,n){return t=Mt(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Mt(e){var t=Tt(e,"string");return typeof t=="symbol"?t:String(t)}function Tt(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ke(e){return e&&e.map((t,n)=>B.createElement(t.tag,fe({key:n},t.attr),Ke(t.child)))}function Pt(e){return t=>B.createElement(Rt,de({attr:fe({},e.attr)},t),Ke(e.child))}function Rt(e){var t=n=>{var{attr:o,size:a,title:u}=e,y=_t(e,Ct),i=a||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),B.createElement("svg",de({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,o,y,{className:l,style:fe(fe({color:e.color||n.color},n.style),e.style),height:i,width:i,xmlns:"http://www.w3.org/2000/svg"}),u&&B.createElement("title",null,u),e.children)};return Se!==void 0?B.createElement(Se.Consumer,null,n=>t(n)):t(ze)}function Nt(e){return Pt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"16"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"16",y2:"12"},child:[]}]})(e)}var ge={exports:{}},z={},Ve={exports:{}},jt="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Dt=jt,At=Dt;function Ye(){}function Ge(){}Ge.resetWarningCache=Ye;var kt=function(){function e(o,a,u,y,i,l){if(l!==At){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Ge,resetWarningCache:Ye};return n.PropTypes=n,n};Ve.exports=kt();var Xe=Ve.exports,xe={exports:{}},N={},we={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=b;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var n="none",o="contents",a=/input|select|textarea|button|object|iframe/;function u(m,v){return v.getPropertyValue("overflow")!=="visible"||m.scrollWidth<=0&&m.scrollHeight<=0}function y(m){var v=m.offsetWidth<=0&&m.offsetHeight<=0;if(v&&!m.innerHTML)return!0;try{var x=window.getComputedStyle(m),O=x.getPropertyValue("display");return v?O!==o&&u(m,x):O===n}catch{return console.warn("Failed to inspect element style"),!1}}function i(m){for(var v=m,x=m.getRootNode&&m.getRootNode();v&&v!==document.body;){if(x&&v===x&&(v=x.host.parentNode),y(v))return!1;v=v.parentNode}return!0}function l(m,v){var x=m.nodeName.toLowerCase(),O=a.test(x)&&!m.disabled||x==="a"&&m.href||v;return O&&i(m)}function h(m){var v=m.getAttribute("tabindex");v===null&&(v=void 0);var x=isNaN(v);return(x||v>=0)&&l(m,!x)}function b(m){var v=[].slice.call(m.querySelectorAll("*"),0).reduce(function(x,O){return x.concat(O.shadowRoot?b(O.shadowRoot):[O])},[]);return v.filter(h)}e.exports=t.default})(we,we.exports);var Je=we.exports;Object.defineProperty(N,"__esModule",{value:!0});N.resetState=Ut;N.log=It;N.handleBlur=oe;N.handleFocus=re;N.markForFocusLater=Ht;N.returnFocus=$t;N.popWithoutFocus=Bt;N.setupScopedFocus=qt;N.teardownScopedFocus=zt;var Wt=Je,Ft=Lt(Wt);function Lt(e){return e&&e.__esModule?e:{default:e}}var G=[],Y=null,Oe=!1;function Ut(){G=[]}function It(){}function oe(){Oe=!0}function re(){if(Oe){if(Oe=!1,!Y)return;setTimeout(function(){if(!Y.contains(document.activeElement)){var e=(0,Ft.default)(Y)[0]||Y;e.focus()}},0)}}function Ht(){G.push(document.activeElement)}function $t(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=null;try{G.length!==0&&(t=G.pop(),t.focus({preventScroll:e}));return}catch{console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}}function Bt(){G.length>0&&G.pop()}function qt(e){Y=e,window.addEventListener?(window.addEventListener("blur",oe,!1),document.addEventListener("focus",re,!0)):(window.attachEvent("onBlur",oe),document.attachEvent("onFocus",re))}function zt(){Y=null,window.addEventListener?(window.removeEventListener("blur",oe),document.removeEventListener("focus",re)):(window.detachEvent("onBlur",oe),document.detachEvent("onFocus",re))}var Ce={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=y;var n=Je,o=a(n);function a(i){return i&&i.__esModule?i:{default:i}}function u(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return i.activeElement.shadowRoot?u(i.activeElement.shadowRoot):i.activeElement}function y(i,l){var h=(0,o.default)(i);if(!h.length){l.preventDefault();return}var b=void 0,m=l.shiftKey,v=h[0],x=h[h.length-1],O=u();if(i===O){if(!m)return;b=x}if(x===O&&!m&&(b=v),v===O&&m&&(b=x),b){l.preventDefault(),b.focus();return}var D=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),U=D!=null&&D[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(U){var k=h.indexOf(O);if(k>-1&&(k+=m?-1:1),b=h[k],typeof b>"u"){l.preventDefault(),b=m?x:v,b.focus();return}l.preventDefault(),b.focus()}}e.exports=t.default})(Ce,Ce.exports);var Kt=Ce.exports,j={},Vt=function(){},Yt=Vt,R={},Qe={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(e){(function(){var t=!!(typeof window<"u"&&window.document&&window.document.createElement),n={canUseDOM:t,canUseWorkers:typeof Worker<"u",canUseEventListeners:t&&!!(window.addEventListener||window.attachEvent),canUseViewport:t&&!!window.screen};e.exports?e.exports=n:window.ExecutionEnvironment=n})()})(Qe);var Gt=Qe.exports;Object.defineProperty(R,"__esModule",{value:!0});R.canUseDOM=R.SafeNodeList=R.SafeHTMLCollection=void 0;var Xt=Gt,Jt=Qt(Xt);function Qt(e){return e&&e.__esModule?e:{default:e}}var ve=Jt.default,Zt=ve.canUseDOM?window.HTMLElement:{};R.SafeHTMLCollection=ve.canUseDOM?window.HTMLCollection:{};R.SafeNodeList=ve.canUseDOM?window.NodeList:{};R.canUseDOM=ve.canUseDOM;R.default=Zt;Object.defineProperty(j,"__esModule",{value:!0});j.resetState=rn;j.log=an;j.assertNodeList=Ze;j.setElement=sn;j.validateElement=_e;j.hide=ln;j.show=un;j.documentNotReadyOrSSRTesting=cn;var en=Yt,tn=on(en),nn=R;function on(e){return e&&e.__esModule?e:{default:e}}var T=null;function rn(){T&&(T.removeAttribute?T.removeAttribute("aria-hidden"):T.length!=null?T.forEach(function(e){return e.removeAttribute("aria-hidden")}):document.querySelectorAll(T).forEach(function(e){return e.removeAttribute("aria-hidden")})),T=null}function an(){}function Ze(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function sn(e){var t=e;if(typeof t=="string"&&nn.canUseDOM){var n=document.querySelectorAll(t);Ze(n,t),t=n}return T=t||T,T}function _e(e){var t=e||T;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,tn.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function ln(e){var t=!0,n=!1,o=void 0;try{for(var a=_e(e)[Symbol.iterator](),u;!(t=(u=a.next()).done);t=!0){var y=u.value;y.setAttribute("aria-hidden","true")}}catch(i){n=!0,o=i}finally{try{!t&&a.return&&a.return()}finally{if(n)throw o}}}function un(e){var t=!0,n=!1,o=void 0;try{for(var a=_e(e)[Symbol.iterator](),u;!(t=(u=a.next()).done);t=!0){var y=u.value;y.removeAttribute("aria-hidden")}}catch(i){n=!0,o=i}finally{try{!t&&a.return&&a.return()}finally{if(n)throw o}}}function cn(){T=null}var X={};Object.defineProperty(X,"__esModule",{value:!0});X.resetState=dn;X.log=fn;var Z={},ee={};function Te(e,t){e.classList.remove(t)}function dn(){var e=document.getElementsByTagName("html")[0];for(var t in Z)Te(e,Z[t]);var n=document.body;for(var o in ee)Te(n,ee[o]);Z={},ee={}}function fn(){}var pn=function(t,n){return t[n]||(t[n]=0),t[n]+=1,n},hn=function(t,n){return t[n]&&(t[n]-=1),n},mn=function(t,n,o){o.forEach(function(a){pn(n,a),t.add(a)})},vn=function(t,n,o){o.forEach(function(a){hn(n,a),n[a]===0&&t.remove(a)})};X.add=function(t,n){return mn(t.classList,t.nodeName.toLowerCase()=="html"?Z:ee,n.split(" "))};X.remove=function(t,n){return vn(t.classList,t.nodeName.toLowerCase()=="html"?Z:ee,n.split(" "))};var J={};Object.defineProperty(J,"__esModule",{value:!0});J.log=bn;J.resetState=gn;function yn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var et=function e(){var t=this;yn(this,e),this.register=function(n){t.openInstances.indexOf(n)===-1&&(t.openInstances.push(n),t.emit("register"))},this.deregister=function(n){var o=t.openInstances.indexOf(n);o!==-1&&(t.openInstances.splice(o,1),t.emit("deregister"))},this.subscribe=function(n){t.subscribers.push(n)},this.emit=function(n){t.subscribers.forEach(function(o){return o(n,t.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},pe=new et;function bn(){console.log("portalOpenInstances ----------"),console.log(pe.openInstances.length),pe.openInstances.forEach(function(e){return console.log(e)}),console.log("end portalOpenInstances ----------")}function gn(){pe=new et}J.default=pe;var Ee={};Object.defineProperty(Ee,"__esModule",{value:!0});Ee.resetState=Cn;Ee.log=_n;var xn=J,wn=On(xn);function On(e){return e&&e.__esModule?e:{default:e}}var E=void 0,P=void 0,q=[];function Cn(){for(var e=[E,P],t=0;t<e.length;t++){var n=e[t];n&&n.parentNode&&n.parentNode.removeChild(n)}E=P=null,q=[]}function _n(){console.log("bodyTrap ----------"),console.log(q.length);for(var e=[E,P],t=0;t<e.length;t++){var n=e[t],o=n||{};console.log(o.nodeName,o.className,o.id)}console.log("edn bodyTrap ----------")}function Pe(){q.length!==0&&q[q.length-1].focusContent()}function En(e,t){!E&&!P&&(E=document.createElement("div"),E.setAttribute("data-react-modal-body-trap",""),E.style.position="absolute",E.style.opacity="0",E.setAttribute("tabindex","0"),E.addEventListener("focus",Pe),P=E.cloneNode(),P.addEventListener("focus",Pe)),q=t,q.length>0?(document.body.firstChild!==E&&document.body.insertBefore(E,document.body.firstChild),document.body.lastChild!==P&&document.body.appendChild(P)):(E.parentElement&&E.parentElement.removeChild(E),P.parentElement&&P.parentElement.removeChild(P))}wn.default.subscribe(En);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(p){for(var f=1;f<arguments.length;f++){var w=arguments[f];for(var r in w)Object.prototype.hasOwnProperty.call(w,r)&&(p[r]=w[r])}return p},o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(p){return typeof p}:function(p){return p&&typeof Symbol=="function"&&p.constructor===Symbol&&p!==Symbol.prototype?"symbol":typeof p},a=function(){function p(f,w){for(var r=0;r<w.length;r++){var c=w[r];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(f,c.key,c)}}return function(f,w,r){return w&&p(f.prototype,w),r&&p(f,r),f}}(),u=A,y=Xe,i=V(y),l=N,h=K(l),b=Kt,m=V(b),v=j,x=K(v),O=X,D=K(O),U=R,k=V(U),ye=J,se=V(ye);function K(p){if(p&&p.__esModule)return p;var f={};if(p!=null)for(var w in p)Object.prototype.hasOwnProperty.call(p,w)&&(f[w]=p[w]);return f.default=p,f}function V(p){return p&&p.__esModule?p:{default:p}}function S(p,f){if(!(p instanceof f))throw new TypeError("Cannot call a class as a function")}function W(p,f){if(!p)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return f&&(typeof f=="object"||typeof f=="function")?f:p}function F(p,f){if(typeof f!="function"&&f!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof f);p.prototype=Object.create(f&&f.prototype,{constructor:{value:p,enumerable:!1,writable:!0,configurable:!0}}),f&&(Object.setPrototypeOf?Object.setPrototypeOf(p,f):p.__proto__=f)}var Q={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},at=function(f){return f.code==="Tab"||f.keyCode===9},it=function(f){return f.code==="Escape"||f.keyCode===27},le=0,be=function(p){F(f,p);function f(w){S(this,f);var r=W(this,(f.__proto__||Object.getPrototypeOf(f)).call(this,w));return r.setOverlayRef=function(c){r.overlay=c,r.props.overlayRef&&r.props.overlayRef(c)},r.setContentRef=function(c){r.content=c,r.props.contentRef&&r.props.contentRef(c)},r.afterClose=function(){var c=r.props,_=c.appElement,M=c.ariaHideApp,C=c.htmlOpenClassName,I=c.bodyOpenClassName,H=c.parentSelector,ue=H&&H().ownerDocument||document;I&&D.remove(ue.body,I),C&&D.remove(ue.getElementsByTagName("html")[0],C),M&&le>0&&(le-=1,le===0&&x.show(_)),r.props.shouldFocusAfterRender&&(r.props.shouldReturnFocusAfterClose?(h.returnFocus(r.props.preventScroll),h.teardownScopedFocus()):h.popWithoutFocus()),r.props.onAfterClose&&r.props.onAfterClose(),se.default.deregister(r)},r.open=function(){r.beforeOpen(),r.state.afterOpen&&r.state.beforeClose?(clearTimeout(r.closeTimer),r.setState({beforeClose:!1})):(r.props.shouldFocusAfterRender&&(h.setupScopedFocus(r.node),h.markForFocusLater()),r.setState({isOpen:!0},function(){r.openAnimationFrame=requestAnimationFrame(function(){r.setState({afterOpen:!0}),r.props.isOpen&&r.props.onAfterOpen&&r.props.onAfterOpen({overlayEl:r.overlay,contentEl:r.content})})}))},r.close=function(){r.props.closeTimeoutMS>0?r.closeWithTimeout():r.closeWithoutTimeout()},r.focusContent=function(){return r.content&&!r.contentHasFocus()&&r.content.focus({preventScroll:!0})},r.closeWithTimeout=function(){var c=Date.now()+r.props.closeTimeoutMS;r.setState({beforeClose:!0,closesAt:c},function(){r.closeTimer=setTimeout(r.closeWithoutTimeout,r.state.closesAt-Date.now())})},r.closeWithoutTimeout=function(){r.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},r.afterClose)},r.handleKeyDown=function(c){at(c)&&(0,m.default)(r.content,c),r.props.shouldCloseOnEsc&&it(c)&&(c.stopPropagation(),r.requestClose(c))},r.handleOverlayOnClick=function(c){r.shouldClose===null&&(r.shouldClose=!0),r.shouldClose&&r.props.shouldCloseOnOverlayClick&&(r.ownerHandlesClose()?r.requestClose(c):r.focusContent()),r.shouldClose=null},r.handleContentOnMouseUp=function(){r.shouldClose=!1},r.handleOverlayOnMouseDown=function(c){!r.props.shouldCloseOnOverlayClick&&c.target==r.overlay&&c.preventDefault()},r.handleContentOnClick=function(){r.shouldClose=!1},r.handleContentOnMouseDown=function(){r.shouldClose=!1},r.requestClose=function(c){return r.ownerHandlesClose()&&r.props.onRequestClose(c)},r.ownerHandlesClose=function(){return r.props.onRequestClose},r.shouldBeClosed=function(){return!r.state.isOpen&&!r.state.beforeClose},r.contentHasFocus=function(){return document.activeElement===r.content||r.content.contains(document.activeElement)},r.buildClassName=function(c,_){var M=(typeof _>"u"?"undefined":o(_))==="object"?_:{base:Q[c],afterOpen:Q[c]+"--after-open",beforeClose:Q[c]+"--before-close"},C=M.base;return r.state.afterOpen&&(C=C+" "+M.afterOpen),r.state.beforeClose&&(C=C+" "+M.beforeClose),typeof _=="string"&&_?C+" "+_:C},r.attributesFromObject=function(c,_){return Object.keys(_).reduce(function(M,C){return M[c+"-"+C]=_[C],M},{})},r.state={afterOpen:!1,beforeClose:!1},r.shouldClose=null,r.moveFromContentToOverlay=null,r}return a(f,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(r,c){this.props.isOpen&&!r.isOpen?this.open():!this.props.isOpen&&r.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!c.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var r=this.props,c=r.appElement,_=r.ariaHideApp,M=r.htmlOpenClassName,C=r.bodyOpenClassName,I=r.parentSelector,H=I&&I().ownerDocument||document;C&&D.add(H.body,C),M&&D.add(H.getElementsByTagName("html")[0],M),_&&(le+=1,x.hide(c)),se.default.register(this)}},{key:"render",value:function(){var r=this.props,c=r.id,_=r.className,M=r.overlayClassName,C=r.defaultStyles,I=r.children,H=_?{}:C.content,ue=M?{}:C.overlay;if(this.shouldBeClosed())return null;var st={ref:this.setOverlayRef,className:this.buildClassName("overlay",M),style:n({},ue,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},lt=n({id:c,ref:this.setContentRef,style:n({},H,this.props.style.content),className:this.buildClassName("content",_),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",n({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),ut=this.props.contentElement(lt,I);return this.props.overlayElement(st,ut)}}]),f}(u.Component);be.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},be.propTypes={isOpen:i.default.bool.isRequired,defaultStyles:i.default.shape({content:i.default.object,overlay:i.default.object}),style:i.default.shape({content:i.default.object,overlay:i.default.object}),className:i.default.oneOfType([i.default.string,i.default.object]),overlayClassName:i.default.oneOfType([i.default.string,i.default.object]),parentSelector:i.default.func,bodyOpenClassName:i.default.string,htmlOpenClassName:i.default.string,ariaHideApp:i.default.bool,appElement:i.default.oneOfType([i.default.instanceOf(k.default),i.default.instanceOf(U.SafeHTMLCollection),i.default.instanceOf(U.SafeNodeList),i.default.arrayOf(i.default.instanceOf(k.default))]),onAfterOpen:i.default.func,onAfterClose:i.default.func,onRequestClose:i.default.func,closeTimeoutMS:i.default.number,shouldFocusAfterRender:i.default.bool,shouldCloseOnOverlayClick:i.default.bool,shouldReturnFocusAfterClose:i.default.bool,preventScroll:i.default.bool,role:i.default.string,contentLabel:i.default.string,aria:i.default.object,data:i.default.object,children:i.default.node,shouldCloseOnEsc:i.default.bool,overlayRef:i.default.func,contentRef:i.default.func,id:i.default.string,overlayElement:i.default.func,contentElement:i.default.func,testId:i.default.string},t.default=be,e.exports=t.default})(xe,xe.exports);var Sn=xe.exports;function tt(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);e!=null&&this.setState(e)}function nt(e){function t(n){var o=this.constructor.getDerivedStateFromProps(e,n);return o??null}this.setState(t.bind(this))}function ot(e,t){try{var n=this.props,o=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,o)}finally{this.props=n,this.state=o}}tt.__suppressDeprecationWarning=!0;nt.__suppressDeprecationWarning=!0;ot.__suppressDeprecationWarning=!0;function Mn(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if(typeof e.getDerivedStateFromProps!="function"&&typeof t.getSnapshotBeforeUpdate!="function")return e;var n=null,o=null,a=null;if(typeof t.componentWillMount=="function"?n="componentWillMount":typeof t.UNSAFE_componentWillMount=="function"&&(n="UNSAFE_componentWillMount"),typeof t.componentWillReceiveProps=="function"?o="componentWillReceiveProps":typeof t.UNSAFE_componentWillReceiveProps=="function"&&(o="UNSAFE_componentWillReceiveProps"),typeof t.componentWillUpdate=="function"?a="componentWillUpdate":typeof t.UNSAFE_componentWillUpdate=="function"&&(a="UNSAFE_componentWillUpdate"),n!==null||o!==null||a!==null){var u=e.displayName||e.name,y=typeof e.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+u+" uses "+y+" but also contains the following legacy lifecycles:"+(n!==null?`
  `+n:"")+(o!==null?`
  `+o:"")+(a!==null?`
  `+a:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof e.getDerivedStateFromProps=="function"&&(t.componentWillMount=tt,t.componentWillReceiveProps=nt),typeof t.getSnapshotBeforeUpdate=="function"){if(typeof t.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=ot;var i=t.componentDidUpdate;t.componentDidUpdate=function(h,b,m){var v=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:m;i.call(this,h,b,v)}}return e}const Tn=Object.freeze(Object.defineProperty({__proto__:null,polyfill:Mn},Symbol.toStringTag,{value:"Module"})),Pn=ct(Tn);Object.defineProperty(z,"__esModule",{value:!0});z.bodyOpenClassName=z.portalClassName=void 0;var Re=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Rn=function(){function e(t,n){for(var o=0;o<n.length;o++){var a=n[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),rt=A,he=ae(rt),Nn=dt,me=ae(Nn),jn=Xe,d=ae(jn),Dn=Sn,Ne=ae(Dn),An=j,kn=Fn(An),L=R,je=ae(L),Wn=Pn;function Fn(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function ae(e){return e&&e.__esModule?e:{default:e}}function Ln(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function De(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Un(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var In=z.portalClassName="ReactModalPortal",Hn=z.bodyOpenClassName="ReactModal__Body--open",$=L.canUseDOM&&me.default.createPortal!==void 0,Ae=function(t){return document.createElement(t)},ke=function(){return $?me.default.createPortal:me.default.unstable_renderSubtreeIntoContainer};function ce(e){return e()}var ie=function(e){Un(t,e);function t(){var n,o,a,u;Ln(this,t);for(var y=arguments.length,i=Array(y),l=0;l<y;l++)i[l]=arguments[l];return u=(o=(a=De(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(i))),a),a.removePortal=function(){!$&&me.default.unmountComponentAtNode(a.node);var h=ce(a.props.parentSelector);h&&h.contains(a.node)?h.removeChild(a.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},a.portalRef=function(h){a.portal=h},a.renderPortal=function(h){var b=ke(),m=b(a,he.default.createElement(Ne.default,Re({defaultStyles:t.defaultStyles},h)),a.node);a.portalRef(m)},o),De(a,u)}return Rn(t,[{key:"componentDidMount",value:function(){if(L.canUseDOM){$||(this.node=Ae("div")),this.node.className=this.props.portalClassName;var o=ce(this.props.parentSelector);o.appendChild(this.node),!$&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(o){var a=ce(o.parentSelector),u=ce(this.props.parentSelector);return{prevParent:a,nextParent:u}}},{key:"componentDidUpdate",value:function(o,a,u){if(L.canUseDOM){var y=this.props,i=y.isOpen,l=y.portalClassName;o.portalClassName!==l&&(this.node.className=l);var h=u.prevParent,b=u.nextParent;b!==h&&(h.removeChild(this.node),b.appendChild(this.node)),!(!o.isOpen&&!i)&&!$&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!L.canUseDOM||!this.node||!this.portal)){var o=this.portal.state,a=Date.now(),u=o.isOpen&&this.props.closeTimeoutMS&&(o.closesAt||a+this.props.closeTimeoutMS);u?(o.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,u-a)):this.removePortal()}}},{key:"render",value:function(){if(!L.canUseDOM||!$)return null;!this.node&&$&&(this.node=Ae("div"));var o=ke();return o(he.default.createElement(Ne.default,Re({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(o){kn.setElement(o)}}]),t}(rt.Component);ie.propTypes={isOpen:d.default.bool.isRequired,style:d.default.shape({content:d.default.object,overlay:d.default.object}),portalClassName:d.default.string,bodyOpenClassName:d.default.string,htmlOpenClassName:d.default.string,className:d.default.oneOfType([d.default.string,d.default.shape({base:d.default.string.isRequired,afterOpen:d.default.string.isRequired,beforeClose:d.default.string.isRequired})]),overlayClassName:d.default.oneOfType([d.default.string,d.default.shape({base:d.default.string.isRequired,afterOpen:d.default.string.isRequired,beforeClose:d.default.string.isRequired})]),appElement:d.default.oneOfType([d.default.instanceOf(je.default),d.default.instanceOf(L.SafeHTMLCollection),d.default.instanceOf(L.SafeNodeList),d.default.arrayOf(d.default.instanceOf(je.default))]),onAfterOpen:d.default.func,onRequestClose:d.default.func,closeTimeoutMS:d.default.number,ariaHideApp:d.default.bool,shouldFocusAfterRender:d.default.bool,shouldCloseOnOverlayClick:d.default.bool,shouldReturnFocusAfterClose:d.default.bool,preventScroll:d.default.bool,parentSelector:d.default.func,aria:d.default.object,data:d.default.object,role:d.default.string,contentLabel:d.default.string,shouldCloseOnEsc:d.default.bool,overlayRef:d.default.func,contentRef:d.default.func,id:d.default.string,overlayElement:d.default.func,contentElement:d.default.func};ie.defaultProps={isOpen:!1,portalClassName:In,bodyOpenClassName:Hn,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(t,n){return he.default.createElement("div",t,n)},contentElement:function(t,n){return he.default.createElement("div",t,n)}};ie.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,Wn.polyfill)(ie);z.default=ie;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=z,o=a(n);function a(u){return u&&u.__esModule?u:{default:u}}t.default=o.default,e.exports=t.default})(ge,ge.exports);var $n=ge.exports;const Bn=ft($n),te="/goit-group2-react-nodejs/assets/horodiukIcons-b8c45607.svg",We=g.select`
  margin-bottom: 24px;
  border: 1px solid #d7e3ff;
  border-radius: 6px;
  padding: 12px 10px;
  width: 90px;
  height: 44px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`,qn=g.div``,Fe=g.div`
  position: relative;
  display: inline-block;
`,Le=g.svg`
  position: absolute;
  top: 10px;
  right: 6px;
  pointer-events: none;
`;function zn({onChange:e,value:t}){const n=Array.from(new Array(24),(l,h)=>h),o=[0,5,10,15,20,25,30,35,40,45,50,55],a=new Date(t);let u=a.getHours(),y=a.getMinutes();const i=o.reduce((l,h)=>h>=y&&(l===null||Math.abs(h-y)<Math.abs(l-y))?h:l,null);return i===null?(u=(u+1)%24,y=0):y=i,s.jsxs(qn,{id:"selectTimeWrapper",children:[s.jsxs(Fe,{children:[s.jsx(We,{onChange:l=>e(l,"hour"),value:u,children:n.map(l=>s.jsx("option",{value:l,children:l.toString().padStart(2,"0")},l))}),s.jsx(Le,{width:"24",height:"24",children:s.jsx("use",{href:`${te}#icon-arrow`})})]}),":",s.jsxs(Fe,{children:[s.jsx(We,{onChange:l=>e(l,"minute"),value:y,children:o.map(l=>s.jsx("option",{value:l,children:l.toString().padStart(2,"0")},l))}),s.jsx(Le,{width:"24",height:"24",children:s.jsx("use",{href:`${te}#icon-arrow`})})]})]})}const Kn=g.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  overflow: scroll;
`,Vn=g.div`
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
`,Yn=g.button`
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
`,Gn=g.h2`
  font-weight: 500;
  font-size: 26px;
  line-height: 123%;
  color: #2f2f2f;
  margin-bottom: 24px;
`,Ue=g.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  color: #2f2f2f;
  margin-bottom: 16px;
`,Ie=g.p`
  font-size: 16px;
  line-height: 125%;
  color: #2f2f2f;
  margin-bottom: 12px;
`,He=g.button`
  box-shadow: 0 2px 4px 0 rgba(64, 123, 255, 0.2);
  background-color: #fff;
  border: 1px solid #9ebbff;
  border-radius: 30px;
  padding: 0px;
  width: 44px;
  height: 44px;
  cursor: pointer;
`,$e=g.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 133%;
  color: #407bff;
  text-align: center;
`,Xn=g.input`
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
`,Jn=g.input`
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
`,Qn=g.button`
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
`,Zn=g.div`
  background-color: #d7e3ff;
  border-radius: 40px;
  padding: 6px 10px;
  height: 36px;
`,eo=g.div`
  display: flex;
  width: 194px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`,to=g.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
  }
`;Bn.setAppElement("#root");function no({isOpen:e,onClose:t,onAddWater:n}){const[o,a]=A.useState(0),[u,y]=A.useState(!1),[i,l]=A.useState(0),h=bt(),[b,m]=A.useState(new Date),v=(S,W="")=>{let F=new Date(b);switch(W){case"hour":F.setHours(parseInt(S.target.value,10));break;case"minute":F.setMinutes(Math.ceil(parseInt(S.target.value,10)/5)*5);break}m(F)},x=()=>{h(ht({amount:o,date:Date(b)}))},O=()=>{t()},D=()=>{a(o+50),l(o+50)},U=()=>{if(o-50<0){a(0),l(0);return}a(o-50),l(o-50)},k=()=>{a(i)},ye=S=>{const W=parseInt(S.target.value>0?S.target.value:0,10);l(W)},se=S=>{S.target.closest("#selectTimeWrapper")||(y(!1),S.target===S.currentTarget&&O())},K=S=>{S.key==="Escape"&&O()};A.useEffect(()=>(window.addEventListener("keydown",K),()=>{window.removeEventListener("keydown",K)}),[]);const V=S=>{const W=new Date(S),F=Q=>Q.toString().padStart(2,"0");return`${F(W.getHours())}:${F(W.getMinutes())}`};return pt.createPortal(s.jsx(Kn,{onClick:se,children:s.jsxs(Vn,{children:[s.jsx(Yn,{onClick:O,children:s.jsx("svg",{width:"24",height:"24",children:s.jsx("use",{href:`${te}#icon-close`})})}),s.jsx(Gn,{children:"Add water"}),s.jsx(Ue,{children:"Choose a value:"}),s.jsx(Ie,{children:"Amount of water:"}),s.jsxs(eo,{children:[s.jsx(He,{onClick:U,children:s.jsx("svg",{width:"44",height:"44",children:s.jsx("use",{href:`${te}#icon-minus`})})}),s.jsx(Zn,{children:s.jsxs($e,{children:[o,"ml"]})}),s.jsx(He,{onClick:D,children:s.jsx("svg",{width:"44",height:"44",children:s.jsx("use",{href:`${te}#icon-plus`})})})]}),s.jsx(Ie,{children:"Recording time:"}),u?s.jsx(zn,{onChange:v,value:b}):s.jsx(Xn,{type:"text","aria-label":"Choose time",value:V(b),onChange:()=>{},onFocus:()=>y(!0)}),s.jsx(Ue,{children:"Enter the value of the water used:"}),s.jsx(Jn,{value:i,onBlur:k,onChange:ye,type:"number"}),s.jsxs(to,{children:[s.jsxs($e,{children:[o,"ml"]}),s.jsx(Qn,{onClick:x,type:"button",children:"Save"})]})]})}),document.getElementById("modal-root"))}const oo=g.div`
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
`,ro=g.div`
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
`,ao=g.input`
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
`,io=g.div`
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
`,so=g.button`
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
`,lo=()=>{const[e,t]=A.useState(!1),n=()=>{t(!1)},o=70,a=()=>{t(!0)};return s.jsxs(oo,{children:[s.jsxs(ro,{children:[s.jsx("h2",{children:"Today"}),s.jsx(ao,{value:o,type:"range",min:"0",max:"100"}),s.jsxs(io,{children:[s.jsx("p",{children:"0%"}),s.jsx("p",{children:"50%"}),s.jsx("p",{children:"100%"})]})]}),s.jsxs(so,{onClick:a,type:"button",children:[s.jsx(Nt,{}),"Add Water"]}),e&&s.jsx(no,{isOpen:e,onClose:n})]})},uo=lo,co=g.div`
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
`;function po(){return s.jsx("div",{children:s.jsxs(co,{children:[s.jsxs("div",{children:[s.jsx(Ot,{}),s.jsx(uo,{})]}),s.jsx("div",{})]})})}export{po as default};
