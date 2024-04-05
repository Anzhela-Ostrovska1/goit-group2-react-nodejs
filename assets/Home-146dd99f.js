import{n as g,j as s,R as q,r as F,g as st,a as lt,b as ct,c as ut,d as dt}from"./index-44c88571.js";import{u as ft}from"./useDispatch-e9a2b23d.js";import{b as pt}from"./bg_element_des@1x-1805b66c.js";const ht=g.div`
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
`,mt=g.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,At=()=>{const e=()=>{console.log("Open modal")};return s.jsx("div",{children:s.jsxs(ht,{children:[s.jsx("h2",{children:"My daily norma:"}),s.jsxs(mt,{children:[s.jsx("p",{children:"1.5 L"}),s.jsx("button",{onClick:e,type:"button",children:"Edit"})]})]})})},vt=At,gt=()=>s.jsx("div",{children:"TodayWaterList"}),bt=gt;var Ue={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ce=q.createContext&&q.createContext(Ue),yt=["attr","size","title"];function xt(e,t){if(e==null)return{};var n=wt(e,t),r,a;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function wt(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,c;for(c=0;c<r.length;c++)a=r[c],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function ue(){return ue=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ue.apply(this,arguments)}function Se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function de(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Se(Object(n),!0).forEach(function(r){Ot(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Se(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ot(e,t,n){return t=Et(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Et(e){var t=Ct(e,"string");return typeof t=="symbol"?t:String(t)}function Ct(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function qe(e){return e&&e.map((t,n)=>q.createElement(t.tag,de({key:n},t.attr),qe(t.child)))}function St(e){return t=>q.createElement(Pt,ue({attr:de({},e.attr)},t),qe(e.child))}function Pt(e){var t=n=>{var{attr:r,size:a,title:c}=e,v=xt(e,yt),i=a||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),q.createElement("svg",ue({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,v,{className:l,style:de(de({color:e.color||n.color},n.style),e.style),height:i,width:i,xmlns:"http://www.w3.org/2000/svg"}),c&&q.createElement("title",null,c),e.children)};return Ce!==void 0?q.createElement(Ce.Consumer,null,n=>t(n)):t(Ue)}function Mt(e){return St({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"16"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"16",y2:"12"},child:[]}]})(e)}var ge={exports:{}},z={},Be={exports:{}},_t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Tt=_t,kt=Tt;function ze(){}function Xe(){}Xe.resetWarningCache=ze;var jt=function(){function e(r,a,c,v,i,l){if(l!==kt){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Xe,resetWarningCache:ze};return n.PropTypes=n,n};Be.exports=jt();var Ke=Be.exports,be={exports:{}},k={},ye={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=b;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var n="none",r="contents",a=/input|select|textarea|button|object|iframe/;function c(m,A){return A.getPropertyValue("overflow")!=="visible"||m.scrollWidth<=0&&m.scrollHeight<=0}function v(m){var A=m.offsetWidth<=0&&m.offsetHeight<=0;if(A&&!m.innerHTML)return!0;try{var y=window.getComputedStyle(m),w=y.getPropertyValue("display");return A?w!==r&&c(m,y):w===n}catch{return console.warn("Failed to inspect element style"),!1}}function i(m){for(var A=m,y=m.getRootNode&&m.getRootNode();A&&A!==document.body;){if(y&&A===y&&(A=y.host.parentNode),v(A))return!1;A=A.parentNode}return!0}function l(m,A){var y=m.nodeName.toLowerCase(),w=a.test(y)&&!m.disabled||y==="a"&&m.href||A;return w&&i(m)}function h(m){var A=m.getAttribute("tabindex");A===null&&(A=void 0);var y=isNaN(A);return(y||A>=0)&&l(m,!y)}function b(m){var A=[].slice.call(m.querySelectorAll("*"),0).reduce(function(y,w){return y.concat(w.shadowRoot?b(w.shadowRoot):[w])},[]);return A.filter(h)}e.exports=t.default})(ye,ye.exports);var Ge=ye.exports;Object.defineProperty(k,"__esModule",{value:!0});k.resetState=Dt;k.log=Ft;k.handleBlur=ne;k.handleFocus=oe;k.markForFocusLater=Lt;k.returnFocus=Wt;k.popWithoutFocus=Ht;k.setupScopedFocus=It;k.teardownScopedFocus=Ut;var Nt=Ge,Rt=Vt(Nt);function Vt(e){return e&&e.__esModule?e:{default:e}}var Y=[],G=null,xe=!1;function Dt(){Y=[]}function Ft(){}function ne(){xe=!0}function oe(){if(xe){if(xe=!1,!G)return;setTimeout(function(){if(!G.contains(document.activeElement)){var e=(0,Rt.default)(G)[0]||G;e.focus()}},0)}}function Lt(){Y.push(document.activeElement)}function Wt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=null;try{Y.length!==0&&(t=Y.pop(),t.focus({preventScroll:e}));return}catch{console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}}function Ht(){Y.length>0&&Y.pop()}function It(e){G=e,window.addEventListener?(window.addEventListener("blur",ne,!1),document.addEventListener("focus",oe,!0)):(window.attachEvent("onBlur",ne),document.attachEvent("onFocus",oe))}function Ut(){G=null,window.addEventListener?(window.removeEventListener("blur",ne),document.removeEventListener("focus",oe)):(window.detachEvent("onBlur",ne),document.detachEvent("onFocus",oe))}var we={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=v;var n=Ge,r=a(n);function a(i){return i&&i.__esModule?i:{default:i}}function c(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return i.activeElement.shadowRoot?c(i.activeElement.shadowRoot):i.activeElement}function v(i,l){var h=(0,r.default)(i);if(!h.length){l.preventDefault();return}var b=void 0,m=l.shiftKey,A=h[0],y=h[h.length-1],w=c();if(i===w){if(!m)return;b=y}if(y===w&&!m&&(b=A),A===w&&m&&(b=y),b){l.preventDefault(),b.focus();return}var N=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),W=N!=null&&N[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(W){var R=h.indexOf(w);if(R>-1&&(R+=m?-1:1),b=h[R],typeof b>"u"){l.preventDefault(),b=m?y:A,b.focus();return}l.preventDefault(),b.focus()}}e.exports=t.default})(we,we.exports);var qt=we.exports,j={},Bt=function(){},zt=Bt,T={},Ye={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(e){(function(){var t=!!(typeof window<"u"&&window.document&&window.document.createElement),n={canUseDOM:t,canUseWorkers:typeof Worker<"u",canUseEventListeners:t&&!!(window.addEventListener||window.attachEvent),canUseViewport:t&&!!window.screen};e.exports?e.exports=n:window.ExecutionEnvironment=n})()})(Ye);var Xt=Ye.exports;Object.defineProperty(T,"__esModule",{value:!0});T.canUseDOM=T.SafeNodeList=T.SafeHTMLCollection=void 0;var Kt=Xt,Gt=Yt(Kt);function Yt(e){return e&&e.__esModule?e:{default:e}}var me=Gt.default,$t=me.canUseDOM?window.HTMLElement:{};T.SafeHTMLCollection=me.canUseDOM?window.HTMLCollection:{};T.SafeNodeList=me.canUseDOM?window.NodeList:{};T.canUseDOM=me.canUseDOM;T.default=$t;Object.defineProperty(j,"__esModule",{value:!0});j.resetState=tn;j.log=nn;j.assertNodeList=$e;j.setElement=on;j.validateElement=Oe;j.hide=rn;j.show=an;j.documentNotReadyOrSSRTesting=sn;var Jt=zt,Qt=en(Jt),Zt=T;function en(e){return e&&e.__esModule?e:{default:e}}var M=null;function tn(){M&&(M.removeAttribute?M.removeAttribute("aria-hidden"):M.length!=null?M.forEach(function(e){return e.removeAttribute("aria-hidden")}):document.querySelectorAll(M).forEach(function(e){return e.removeAttribute("aria-hidden")})),M=null}function nn(){}function $e(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function on(e){var t=e;if(typeof t=="string"&&Zt.canUseDOM){var n=document.querySelectorAll(t);$e(n,t),t=n}return M=t||M,M}function Oe(e){var t=e||M;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,Qt.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function rn(e){var t=!0,n=!1,r=void 0;try{for(var a=Oe(e)[Symbol.iterator](),c;!(t=(c=a.next()).done);t=!0){var v=c.value;v.setAttribute("aria-hidden","true")}}catch(i){n=!0,r=i}finally{try{!t&&a.return&&a.return()}finally{if(n)throw r}}}function an(e){var t=!0,n=!1,r=void 0;try{for(var a=Oe(e)[Symbol.iterator](),c;!(t=(c=a.next()).done);t=!0){var v=c.value;v.removeAttribute("aria-hidden")}}catch(i){n=!0,r=i}finally{try{!t&&a.return&&a.return()}finally{if(n)throw r}}}function sn(){M=null}var $={};Object.defineProperty($,"__esModule",{value:!0});$.resetState=ln;$.log=cn;var Z={},ee={};function Pe(e,t){e.classList.remove(t)}function ln(){var e=document.getElementsByTagName("html")[0];for(var t in Z)Pe(e,Z[t]);var n=document.body;for(var r in ee)Pe(n,ee[r]);Z={},ee={}}function cn(){}var un=function(t,n){return t[n]||(t[n]=0),t[n]+=1,n},dn=function(t,n){return t[n]&&(t[n]-=1),n},fn=function(t,n,r){r.forEach(function(a){un(n,a),t.add(a)})},pn=function(t,n,r){r.forEach(function(a){dn(n,a),n[a]===0&&t.remove(a)})};$.add=function(t,n){return fn(t.classList,t.nodeName.toLowerCase()=="html"?Z:ee,n.split(" "))};$.remove=function(t,n){return pn(t.classList,t.nodeName.toLowerCase()=="html"?Z:ee,n.split(" "))};var J={};Object.defineProperty(J,"__esModule",{value:!0});J.log=mn;J.resetState=An;function hn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var Je=function e(){var t=this;hn(this,e),this.register=function(n){t.openInstances.indexOf(n)===-1&&(t.openInstances.push(n),t.emit("register"))},this.deregister=function(n){var r=t.openInstances.indexOf(n);r!==-1&&(t.openInstances.splice(r,1),t.emit("deregister"))},this.subscribe=function(n){t.subscribers.push(n)},this.emit=function(n){t.subscribers.forEach(function(r){return r(n,t.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},fe=new Je;function mn(){console.log("portalOpenInstances ----------"),console.log(fe.openInstances.length),fe.openInstances.forEach(function(e){return console.log(e)}),console.log("end portalOpenInstances ----------")}function An(){fe=new Je}J.default=fe;var Ee={};Object.defineProperty(Ee,"__esModule",{value:!0});Ee.resetState=yn;Ee.log=xn;var vn=J,gn=bn(vn);function bn(e){return e&&e.__esModule?e:{default:e}}var C=void 0,_=void 0,B=[];function yn(){for(var e=[C,_],t=0;t<e.length;t++){var n=e[t];n&&n.parentNode&&n.parentNode.removeChild(n)}C=_=null,B=[]}function xn(){console.log("bodyTrap ----------"),console.log(B.length);for(var e=[C,_],t=0;t<e.length;t++){var n=e[t],r=n||{};console.log(r.nodeName,r.className,r.id)}console.log("edn bodyTrap ----------")}function Me(){B.length!==0&&B[B.length-1].focusContent()}function wn(e,t){!C&&!_&&(C=document.createElement("div"),C.setAttribute("data-react-modal-body-trap",""),C.style.position="absolute",C.style.opacity="0",C.setAttribute("tabindex","0"),C.addEventListener("focus",Me),_=C.cloneNode(),_.addEventListener("focus",Me)),B=t,B.length>0?(document.body.firstChild!==C&&document.body.insertBefore(C,document.body.firstChild),document.body.lastChild!==_&&document.body.appendChild(_)):(C.parentElement&&C.parentElement.removeChild(C),_.parentElement&&_.parentElement.removeChild(_))}gn.default.subscribe(wn);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(p){for(var f=1;f<arguments.length;f++){var x=arguments[f];for(var o in x)Object.prototype.hasOwnProperty.call(x,o)&&(p[o]=x[o])}return p},r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(p){return typeof p}:function(p){return p&&typeof Symbol=="function"&&p.constructor===Symbol&&p!==Symbol.prototype?"symbol":typeof p},a=function(){function p(f,x){for(var o=0;o<x.length;o++){var u=x[o];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(f,u.key,u)}}return function(f,x,o){return x&&p(f.prototype,x),o&&p(f,o),f}}(),c=F,v=Ke,i=K(v),l=k,h=X(l),b=qt,m=K(b),A=j,y=X(A),w=$,N=X(w),W=T,R=K(W),Ae=J,ie=K(Ae);function X(p){if(p&&p.__esModule)return p;var f={};if(p!=null)for(var x in p)Object.prototype.hasOwnProperty.call(p,x)&&(f[x]=p[x]);return f.default=p,f}function K(p){return p&&p.__esModule?p:{default:p}}function S(p,f){if(!(p instanceof f))throw new TypeError("Cannot call a class as a function")}function V(p,f){if(!p)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return f&&(typeof f=="object"||typeof f=="function")?f:p}function D(p,f){if(typeof f!="function"&&f!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof f);p.prototype=Object.create(f&&f.prototype,{constructor:{value:p,enumerable:!1,writable:!0,configurable:!0}}),f&&(Object.setPrototypeOf?Object.setPrototypeOf(p,f):p.__proto__=f)}var Q={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},nt=function(f){return f.code==="Tab"||f.keyCode===9},ot=function(f){return f.code==="Escape"||f.keyCode===27},se=0,ve=function(p){D(f,p);function f(x){S(this,f);var o=V(this,(f.__proto__||Object.getPrototypeOf(f)).call(this,x));return o.setOverlayRef=function(u){o.overlay=u,o.props.overlayRef&&o.props.overlayRef(u)},o.setContentRef=function(u){o.content=u,o.props.contentRef&&o.props.contentRef(u)},o.afterClose=function(){var u=o.props,E=u.appElement,P=u.ariaHideApp,O=u.htmlOpenClassName,H=u.bodyOpenClassName,I=u.parentSelector,le=I&&I().ownerDocument||document;H&&N.remove(le.body,H),O&&N.remove(le.getElementsByTagName("html")[0],O),P&&se>0&&(se-=1,se===0&&y.show(E)),o.props.shouldFocusAfterRender&&(o.props.shouldReturnFocusAfterClose?(h.returnFocus(o.props.preventScroll),h.teardownScopedFocus()):h.popWithoutFocus()),o.props.onAfterClose&&o.props.onAfterClose(),ie.default.deregister(o)},o.open=function(){o.beforeOpen(),o.state.afterOpen&&o.state.beforeClose?(clearTimeout(o.closeTimer),o.setState({beforeClose:!1})):(o.props.shouldFocusAfterRender&&(h.setupScopedFocus(o.node),h.markForFocusLater()),o.setState({isOpen:!0},function(){o.openAnimationFrame=requestAnimationFrame(function(){o.setState({afterOpen:!0}),o.props.isOpen&&o.props.onAfterOpen&&o.props.onAfterOpen({overlayEl:o.overlay,contentEl:o.content})})}))},o.close=function(){o.props.closeTimeoutMS>0?o.closeWithTimeout():o.closeWithoutTimeout()},o.focusContent=function(){return o.content&&!o.contentHasFocus()&&o.content.focus({preventScroll:!0})},o.closeWithTimeout=function(){var u=Date.now()+o.props.closeTimeoutMS;o.setState({beforeClose:!0,closesAt:u},function(){o.closeTimer=setTimeout(o.closeWithoutTimeout,o.state.closesAt-Date.now())})},o.closeWithoutTimeout=function(){o.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},o.afterClose)},o.handleKeyDown=function(u){nt(u)&&(0,m.default)(o.content,u),o.props.shouldCloseOnEsc&&ot(u)&&(u.stopPropagation(),o.requestClose(u))},o.handleOverlayOnClick=function(u){o.shouldClose===null&&(o.shouldClose=!0),o.shouldClose&&o.props.shouldCloseOnOverlayClick&&(o.ownerHandlesClose()?o.requestClose(u):o.focusContent()),o.shouldClose=null},o.handleContentOnMouseUp=function(){o.shouldClose=!1},o.handleOverlayOnMouseDown=function(u){!o.props.shouldCloseOnOverlayClick&&u.target==o.overlay&&u.preventDefault()},o.handleContentOnClick=function(){o.shouldClose=!1},o.handleContentOnMouseDown=function(){o.shouldClose=!1},o.requestClose=function(u){return o.ownerHandlesClose()&&o.props.onRequestClose(u)},o.ownerHandlesClose=function(){return o.props.onRequestClose},o.shouldBeClosed=function(){return!o.state.isOpen&&!o.state.beforeClose},o.contentHasFocus=function(){return document.activeElement===o.content||o.content.contains(document.activeElement)},o.buildClassName=function(u,E){var P=(typeof E>"u"?"undefined":r(E))==="object"?E:{base:Q[u],afterOpen:Q[u]+"--after-open",beforeClose:Q[u]+"--before-close"},O=P.base;return o.state.afterOpen&&(O=O+" "+P.afterOpen),o.state.beforeClose&&(O=O+" "+P.beforeClose),typeof E=="string"&&E?O+" "+E:O},o.attributesFromObject=function(u,E){return Object.keys(E).reduce(function(P,O){return P[u+"-"+O]=E[O],P},{})},o.state={afterOpen:!1,beforeClose:!1},o.shouldClose=null,o.moveFromContentToOverlay=null,o}return a(f,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(o,u){this.props.isOpen&&!o.isOpen?this.open():!this.props.isOpen&&o.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!u.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var o=this.props,u=o.appElement,E=o.ariaHideApp,P=o.htmlOpenClassName,O=o.bodyOpenClassName,H=o.parentSelector,I=H&&H().ownerDocument||document;O&&N.add(I.body,O),P&&N.add(I.getElementsByTagName("html")[0],P),E&&(se+=1,y.hide(u)),ie.default.register(this)}},{key:"render",value:function(){var o=this.props,u=o.id,E=o.className,P=o.overlayClassName,O=o.defaultStyles,H=o.children,I=E?{}:O.content,le=P?{}:O.overlay;if(this.shouldBeClosed())return null;var rt={ref:this.setOverlayRef,className:this.buildClassName("overlay",P),style:n({},le,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},at=n({id:u,ref:this.setContentRef,style:n({},I,this.props.style.content),className:this.buildClassName("content",E),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",n({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),it=this.props.contentElement(at,H);return this.props.overlayElement(rt,it)}}]),f}(c.Component);ve.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},ve.propTypes={isOpen:i.default.bool.isRequired,defaultStyles:i.default.shape({content:i.default.object,overlay:i.default.object}),style:i.default.shape({content:i.default.object,overlay:i.default.object}),className:i.default.oneOfType([i.default.string,i.default.object]),overlayClassName:i.default.oneOfType([i.default.string,i.default.object]),parentSelector:i.default.func,bodyOpenClassName:i.default.string,htmlOpenClassName:i.default.string,ariaHideApp:i.default.bool,appElement:i.default.oneOfType([i.default.instanceOf(R.default),i.default.instanceOf(W.SafeHTMLCollection),i.default.instanceOf(W.SafeNodeList),i.default.arrayOf(i.default.instanceOf(R.default))]),onAfterOpen:i.default.func,onAfterClose:i.default.func,onRequestClose:i.default.func,closeTimeoutMS:i.default.number,shouldFocusAfterRender:i.default.bool,shouldCloseOnOverlayClick:i.default.bool,shouldReturnFocusAfterClose:i.default.bool,preventScroll:i.default.bool,role:i.default.string,contentLabel:i.default.string,aria:i.default.object,data:i.default.object,children:i.default.node,shouldCloseOnEsc:i.default.bool,overlayRef:i.default.func,contentRef:i.default.func,id:i.default.string,overlayElement:i.default.func,contentElement:i.default.func,testId:i.default.string},t.default=ve,e.exports=t.default})(be,be.exports);var On=be.exports;function Qe(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);e!=null&&this.setState(e)}function Ze(e){function t(n){var r=this.constructor.getDerivedStateFromProps(e,n);return r??null}this.setState(t.bind(this))}function et(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}Qe.__suppressDeprecationWarning=!0;Ze.__suppressDeprecationWarning=!0;et.__suppressDeprecationWarning=!0;function En(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if(typeof e.getDerivedStateFromProps!="function"&&typeof t.getSnapshotBeforeUpdate!="function")return e;var n=null,r=null,a=null;if(typeof t.componentWillMount=="function"?n="componentWillMount":typeof t.UNSAFE_componentWillMount=="function"&&(n="UNSAFE_componentWillMount"),typeof t.componentWillReceiveProps=="function"?r="componentWillReceiveProps":typeof t.UNSAFE_componentWillReceiveProps=="function"&&(r="UNSAFE_componentWillReceiveProps"),typeof t.componentWillUpdate=="function"?a="componentWillUpdate":typeof t.UNSAFE_componentWillUpdate=="function"&&(a="UNSAFE_componentWillUpdate"),n!==null||r!==null||a!==null){var c=e.displayName||e.name,v=typeof e.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+c+" uses "+v+" but also contains the following legacy lifecycles:"+(n!==null?`
  `+n:"")+(r!==null?`
  `+r:"")+(a!==null?`
  `+a:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof e.getDerivedStateFromProps=="function"&&(t.componentWillMount=Qe,t.componentWillReceiveProps=Ze),typeof t.getSnapshotBeforeUpdate=="function"){if(typeof t.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=et;var i=t.componentDidUpdate;t.componentDidUpdate=function(h,b,m){var A=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:m;i.call(this,h,b,A)}}return e}const Cn=Object.freeze(Object.defineProperty({__proto__:null,polyfill:En},Symbol.toStringTag,{value:"Module"})),Sn=st(Cn);Object.defineProperty(z,"__esModule",{value:!0});z.bodyOpenClassName=z.portalClassName=void 0;var _e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Pn=function(){function e(t,n){for(var r=0;r<n.length;r++){var a=n[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),tt=F,pe=re(tt),Mn=lt,he=re(Mn),_n=Ke,d=re(_n),Tn=On,Te=re(Tn),kn=j,jn=Rn(kn),L=T,ke=re(L),Nn=Sn;function Rn(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function re(e){return e&&e.__esModule?e:{default:e}}function Vn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function je(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Dn(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Fn=z.portalClassName="ReactModalPortal",Ln=z.bodyOpenClassName="ReactModal__Body--open",U=L.canUseDOM&&he.default.createPortal!==void 0,Ne=function(t){return document.createElement(t)},Re=function(){return U?he.default.createPortal:he.default.unstable_renderSubtreeIntoContainer};function ce(e){return e()}var ae=function(e){Dn(t,e);function t(){var n,r,a,c;Vn(this,t);for(var v=arguments.length,i=Array(v),l=0;l<v;l++)i[l]=arguments[l];return c=(r=(a=je(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(i))),a),a.removePortal=function(){!U&&he.default.unmountComponentAtNode(a.node);var h=ce(a.props.parentSelector);h&&h.contains(a.node)?h.removeChild(a.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},a.portalRef=function(h){a.portal=h},a.renderPortal=function(h){var b=Re(),m=b(a,pe.default.createElement(Te.default,_e({defaultStyles:t.defaultStyles},h)),a.node);a.portalRef(m)},r),je(a,c)}return Pn(t,[{key:"componentDidMount",value:function(){if(L.canUseDOM){U||(this.node=Ne("div")),this.node.className=this.props.portalClassName;var r=ce(this.props.parentSelector);r.appendChild(this.node),!U&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(r){var a=ce(r.parentSelector),c=ce(this.props.parentSelector);return{prevParent:a,nextParent:c}}},{key:"componentDidUpdate",value:function(r,a,c){if(L.canUseDOM){var v=this.props,i=v.isOpen,l=v.portalClassName;r.portalClassName!==l&&(this.node.className=l);var h=c.prevParent,b=c.nextParent;b!==h&&(h.removeChild(this.node),b.appendChild(this.node)),!(!r.isOpen&&!i)&&!U&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!L.canUseDOM||!this.node||!this.portal)){var r=this.portal.state,a=Date.now(),c=r.isOpen&&this.props.closeTimeoutMS&&(r.closesAt||a+this.props.closeTimeoutMS);c?(r.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,c-a)):this.removePortal()}}},{key:"render",value:function(){if(!L.canUseDOM||!U)return null;!this.node&&U&&(this.node=Ne("div"));var r=Re();return r(pe.default.createElement(Te.default,_e({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(r){jn.setElement(r)}}]),t}(tt.Component);ae.propTypes={isOpen:d.default.bool.isRequired,style:d.default.shape({content:d.default.object,overlay:d.default.object}),portalClassName:d.default.string,bodyOpenClassName:d.default.string,htmlOpenClassName:d.default.string,className:d.default.oneOfType([d.default.string,d.default.shape({base:d.default.string.isRequired,afterOpen:d.default.string.isRequired,beforeClose:d.default.string.isRequired})]),overlayClassName:d.default.oneOfType([d.default.string,d.default.shape({base:d.default.string.isRequired,afterOpen:d.default.string.isRequired,beforeClose:d.default.string.isRequired})]),appElement:d.default.oneOfType([d.default.instanceOf(ke.default),d.default.instanceOf(L.SafeHTMLCollection),d.default.instanceOf(L.SafeNodeList),d.default.arrayOf(d.default.instanceOf(ke.default))]),onAfterOpen:d.default.func,onRequestClose:d.default.func,closeTimeoutMS:d.default.number,ariaHideApp:d.default.bool,shouldFocusAfterRender:d.default.bool,shouldCloseOnOverlayClick:d.default.bool,shouldReturnFocusAfterClose:d.default.bool,preventScroll:d.default.bool,parentSelector:d.default.func,aria:d.default.object,data:d.default.object,role:d.default.string,contentLabel:d.default.string,shouldCloseOnEsc:d.default.bool,overlayRef:d.default.func,contentRef:d.default.func,id:d.default.string,overlayElement:d.default.func,contentElement:d.default.func};ae.defaultProps={isOpen:!1,portalClassName:Fn,bodyOpenClassName:Ln,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(t,n){return pe.default.createElement("div",t,n)},contentElement:function(t,n){return pe.default.createElement("div",t,n)}};ae.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,Nn.polyfill)(ae);z.default=ae;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=z,r=a(n);function a(c){return c&&c.__esModule?c:{default:c}}t.default=r.default,e.exports=t.default})(ge,ge.exports);var Wn=ge.exports;const Hn=ct(Wn),te="/goit-group2-react-nodejs/assets/horodiukIcons-b8c45607.svg",Ve=g.select`
  margin-bottom: 24px;
  border: 1px solid #d7e3ff;
  border-radius: 6px;
  padding: 12px 10px;
  width: 90px;
  height: 44px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`,In=g.div``,De=g.div`
  position: relative;
  display: inline-block;
`,Fe=g.svg`
  position: absolute;
  top: 10px;
  right: 6px;
  pointer-events: none;
`;function Un({onChange:e,value:t}){const n=Array.from(new Array(24),(l,h)=>h),r=[0,5,10,15,20,25,30,35,40,45,50,55],a=new Date(t);let c=a.getHours(),v=a.getMinutes();const i=r.reduce((l,h)=>h>=v&&(l===null||Math.abs(h-v)<Math.abs(l-v))?h:l,null);return i===null?(c=(c+1)%24,v=0):v=i,s.jsxs(In,{id:"selectTimeWrapper",children:[s.jsxs(De,{children:[s.jsx(Ve,{onChange:l=>e(l,"hour"),value:c,children:n.map(l=>s.jsx("option",{value:l,children:l.toString().padStart(2,"0")},l))}),s.jsx(Fe,{width:"24",height:"24",children:s.jsx("use",{href:`${te}#icon-arrow`})})]}),":",s.jsxs(De,{children:[s.jsx(Ve,{onChange:l=>e(l,"minute"),value:v,children:r.map(l=>s.jsx("option",{value:l,children:l.toString().padStart(2,"0")},l))}),s.jsx(Fe,{width:"24",height:"24",children:s.jsx("use",{href:`${te}#icon-arrow`})})]})]})}const qn=g.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  overflow: scroll;
`,Bn=g.div`
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
`,zn=g.button`
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
`,Xn=g.h2`
  font-weight: 500;
  font-size: 26px;
  line-height: 123%;
  color: #2f2f2f;
  margin-bottom: 24px;
`,Le=g.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  color: #2f2f2f;
  margin-bottom: 16px;
`,We=g.p`
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
`,Ie=g.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 133%;
  color: #407bff;
  text-align: center;
`,Kn=g.input`
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
`,Gn=g.input`
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
`,Yn=g.button`
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
`,$n=g.div`
  background-color: #d7e3ff;
  border-radius: 40px;
  padding: 6px 10px;
  height: 36px;
`,Jn=g.div`
  display: flex;
  width: 194px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`,Qn=g.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
  }
`;Hn.setAppElement("#root");function Zn({isOpen:e,onClose:t,onAddWater:n}){const[r,a]=F.useState(0),[c,v]=F.useState(!1),[i,l]=F.useState(0),h=ft(),[b,m]=F.useState(new Date),A=(S,V="")=>{let D=new Date(b);switch(V){case"hour":D.setHours(parseInt(S.target.value,10));break;case"minute":D.setMinutes(Math.ceil(parseInt(S.target.value,10)/5)*5);break}m(D)},y=()=>{h(dt({amount:r,date:Date(b)}))},w=()=>{t()},N=()=>{a(r+50),l(r+50)},W=()=>{if(r-50<0){a(0),l(0);return}a(r-50),l(r-50)},R=()=>{a(i)},Ae=S=>{const V=parseInt(S.target.value>0?S.target.value:0,10);l(V)},ie=S=>{S.target.closest("#selectTimeWrapper")||(v(!1),S.target===S.currentTarget&&w())},X=S=>{S.key==="Escape"&&w()};F.useEffect(()=>(window.addEventListener("keydown",X),()=>{window.removeEventListener("keydown",X)}),[]);const K=S=>{const V=new Date(S),D=Q=>Q.toString().padStart(2,"0");return`${D(V.getHours())}:${D(V.getMinutes())}`};return ut.createPortal(s.jsx(qn,{onClick:ie,children:s.jsxs(Bn,{children:[s.jsx(zn,{onClick:w,children:s.jsx("svg",{width:"24",height:"24",children:s.jsx("use",{href:`${te}#icon-close`})})}),s.jsx(Xn,{children:"Add water"}),s.jsx(Le,{children:"Choose a value:"}),s.jsx(We,{children:"Amount of water:"}),s.jsxs(Jn,{children:[s.jsx(He,{onClick:W,children:s.jsx("svg",{width:"44",height:"44",children:s.jsx("use",{href:`${te}#icon-minus`})})}),s.jsx($n,{children:s.jsxs(Ie,{children:[r,"ml"]})}),s.jsx(He,{onClick:N,children:s.jsx("svg",{width:"44",height:"44",children:s.jsx("use",{href:`${te}#icon-plus`})})})]}),s.jsx(We,{children:"Recording time:"}),c?s.jsx(Un,{onChange:A,value:b}):s.jsx(Kn,{type:"text","aria-label":"Choose time",value:K(b),onChange:()=>{},onFocus:()=>v(!0)}),s.jsx(Le,{children:"Enter the value of the water used:"}),s.jsx(Gn,{value:i,onBlur:R,onChange:Ae,type:"number"}),s.jsxs(Qn,{children:[s.jsxs(Ie,{children:[r,"ml"]}),s.jsx(Yn,{onClick:y,type:"button",children:"Save"})]})]})}),document.getElementById("modal-root"))}const eo=g.div`
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
`,to=g.div`
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
`,no=g.input`
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
`,oo=g.div`
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
`,ro=g.button`
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
`,ao=()=>{const[e,t]=F.useState(!1),n=()=>{t(!1)},r=70,a=()=>{t(!0)};return s.jsxs(eo,{children:[s.jsxs(to,{children:[s.jsx("h2",{children:"Today"}),s.jsx(no,{value:r,type:"range",min:"0",max:"100"}),s.jsxs(oo,{children:[s.jsx("p",{children:"0%"}),s.jsx("p",{children:"50%"}),s.jsx("p",{children:"100%"})]})]}),s.jsxs(ro,{onClick:a,type:"button",children:[s.jsx(Mt,{}),"Add Water"]}),e&&s.jsx(Zn,{isOpen:e,onClose:n})]})},io=ao,so="/goit-group2-react-nodejs/assets/bottleHomeScreenDesk-630fd92f.png",lo="/goit-group2-react-nodejs/assets/bottleHomeScreenDesk2x@2x-51f4e9e6.png",co="/goit-group2-react-nodejs/assets/bottleHomeScreenTab-2759a74b.png",uo="/goit-group2-react-nodejs/assets/bottleHomeScreenTab@2x-805003a0.png",fo="/goit-group2-react-nodejs/assets/bottleHomeScreenMob-fe8938bc.png",po="/goit-group2-react-nodejs/assets/bottleHomeScreenMob2x@2x-9640a1cb.png",ho="data:image/png;base64,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",mo="/goit-group2-react-nodejs/assets/backgroundElementHomeScreenTab-4de5d48f.png",Ao=g.div`
  background-size: cover;
  background: url(${ho});
  height: max-content;
  background-repeat: no-repeat;
  min-height: calc(100% - 64px);

  @media screen and (min-width: 768px) {
    background: url(${mo});
    min-height: calc(100% - 80px);
  }

  @media screen and (min-width: 1440px) {
    background: url(${pt});
    min-height: calc(100% - 72px);
  }
`,vo=g.div`
  background-size: 280px 208px;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${fo});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 440px;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${po});
  }

  @media screen and (min-width: 768px) {
    background-size: 518px 386px;
    background-position: calc(50% + 9px) 8px;
    height: 492px;
    background-image: url(${co});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background: url(${uo});
      background-size: 518px 386px;
      background-repeat: no-repeat;
    }
  }

  @media screen and (min-width: 1440px) {
    background-size: 738px 548px;
    background-position: calc(50% + 10px) 46px;
    height: 680px;
    background-image: url(${so});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${lo});
    }
  }
`,go=g.div`
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
`,bo=g.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;function Oo(){return s.jsx(Ao,{children:s.jsxs(go,{children:[s.jsxs(vo,{children:[s.jsx(vt,{}),s.jsx(io,{})]}),s.jsx(bo,{children:s.jsx(bt,{})})]})})}export{Oo as default};
