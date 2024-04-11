import{n as u,r as w,p as Ct,g as Zt,e as en,f as tn,a as re,R as $e,j as a,N as Ve,h as nn,i as xe,k as X,l as Et,s as Xe,b as rn,L as on,m as Z,o as an,q as sn,B as cn,t as ln,v as jt,w as dn}from"./index-611a4c9e.js";import{b as un}from"./bg_element_des@1x-1805b66c.js";const fn=u.div`
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
`,pn=u.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,hn=u.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`,mn=u.div`
  overflow: auto;
  position: absolute;
  background-color: #ffffff;
  width: 280px;
  max-height: 90vh;
  top: 40px;
  left: 50%;
  padding: 24px 12px 24px 12px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-radius: 10px;
  transform: translateX(-50%);

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 696px;
    padding: 32px 24px 32px 24px;
  }

  @media screen and (min-width: 1140px) {
    width: 592px;
    height: 712px;
    top: 44px;
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

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    color: #2f2f2f;

    @media screen and (min-width: 768px) {
      font-size: 16px;
    }
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
    @media screen and (min-width: 768px) {
      width: auto;
    }
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
    background: transparent;
    /* position: absolute; */
  }
`;var Re={exports:{}},te={},Le={exports:{}},I={},Be={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=h;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var n="none",r="contents",o=/input|select|textarea|button|object|iframe/;function s(p,g){return g.getPropertyValue("overflow")!=="visible"||p.scrollWidth<=0&&p.scrollHeight<=0}function l(p){var g=p.offsetWidth<=0&&p.offsetHeight<=0;if(g&&!p.innerHTML)return!0;try{var y=window.getComputedStyle(p),M=y.getPropertyValue("display");return g?M!==r&&s(p,y):M===n}catch{return console.warn("Failed to inspect element style"),!1}}function i(p){for(var g=p,y=p.getRootNode&&p.getRootNode();g&&g!==document.body;){if(y&&g===y&&(g=y.host.parentNode),l(g))return!1;g=g.parentNode}return!0}function d(p,g){var y=p.nodeName.toLowerCase(),M=o.test(y)&&!p.disabled||y==="a"&&p.href||g;return M&&i(p)}function f(p){var g=p.getAttribute("tabindex");g===null&&(g=void 0);var y=isNaN(g);return(y||g>=0)&&d(p,!y)}function h(p){var g=[].slice.call(p.querySelectorAll("*"),0).reduce(function(y,M){return y.concat(M.shadowRoot?h(M.shadowRoot):[M])},[]);return g.filter(f)}e.exports=t.default})(Be,Be.exports);var Pt=Be.exports;Object.defineProperty(I,"__esModule",{value:!0});I.resetState=vn;I.log=yn;I.handleBlur=he;I.handleFocus=me;I.markForFocusLater=wn;I.returnFocus=An;I.popWithoutFocus=On;I.setupScopedFocus=Mn;I.teardownScopedFocus=Sn;var gn=Pt,xn=bn(gn);function bn(e){return e&&e.__esModule?e:{default:e}}var ie=[],ae=null,He=!1;function vn(){ie=[]}function yn(){}function he(){He=!0}function me(){if(He){if(He=!1,!ae)return;setTimeout(function(){if(!ae.contains(document.activeElement)){var e=(0,xn.default)(ae)[0]||ae;e.focus()}},0)}}function wn(){ie.push(document.activeElement)}function An(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=null;try{ie.length!==0&&(t=ie.pop(),t.focus({preventScroll:e}));return}catch{console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}}function On(){ie.length>0&&ie.pop()}function Mn(e){ae=e,window.addEventListener?(window.addEventListener("blur",he,!1),document.addEventListener("focus",me,!0)):(window.attachEvent("onBlur",he),document.attachEvent("onFocus",me))}function Sn(){ae=null,window.addEventListener?(window.removeEventListener("blur",he),document.removeEventListener("focus",me)):(window.detachEvent("onBlur",he),document.detachEvent("onFocus",me))}var Ie={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=l;var n=Pt,r=o(n);function o(i){return i&&i.__esModule?i:{default:i}}function s(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return i.activeElement.shadowRoot?s(i.activeElement.shadowRoot):i.activeElement}function l(i,d){var f=(0,r.default)(i);if(!f.length){d.preventDefault();return}var h=void 0,p=d.shiftKey,g=f[0],y=f[f.length-1],M=s();if(i===M){if(!p)return;h=y}if(y===M&&!p&&(h=g),g===M&&p&&(h=y),h){d.preventDefault(),h.focus();return}var P=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),C=P!=null&&P[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(C){var D=f.indexOf(M);if(D>-1&&(D+=p?-1:1),h=f[D],typeof h>"u"){d.preventDefault(),h=p?y:g,h.focus();return}d.preventDefault(),h.focus()}}e.exports=t.default})(Ie,Ie.exports);var kn=Ie.exports,$={},Cn=function(){},En=Cn,H={},Dt={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(e){(function(){var t=!!(typeof window<"u"&&window.document&&window.document.createElement),n={canUseDOM:t,canUseWorkers:typeof Worker<"u",canUseEventListeners:t&&!!(window.addEventListener||window.attachEvent),canUseViewport:t&&!!window.screen};e.exports?e.exports=n:window.ExecutionEnvironment=n})()})(Dt);var jn=Dt.exports;Object.defineProperty(H,"__esModule",{value:!0});H.canUseDOM=H.SafeNodeList=H.SafeHTMLCollection=void 0;var Pn=jn,Dn=Tn(Pn);function Tn(e){return e&&e.__esModule?e:{default:e}}var De=Dn.default,Nn=De.canUseDOM?window.HTMLElement:{};H.SafeHTMLCollection=De.canUseDOM?window.HTMLCollection:{};H.SafeNodeList=De.canUseDOM?window.NodeList:{};H.canUseDOM=De.canUseDOM;H.default=Nn;Object.defineProperty($,"__esModule",{value:!0});$.resetState=Rn;$.log=Ln;$.assertNodeList=Tt;$.setElement=Bn;$.validateElement=qe;$.hide=Hn;$.show=In;$.documentNotReadyOrSSRTesting=$n;var Wn=En,_n=Vn(Wn),Fn=H;function Vn(e){return e&&e.__esModule?e:{default:e}}var L=null;function Rn(){L&&(L.removeAttribute?L.removeAttribute("aria-hidden"):L.length!=null?L.forEach(function(e){return e.removeAttribute("aria-hidden")}):document.querySelectorAll(L).forEach(function(e){return e.removeAttribute("aria-hidden")})),L=null}function Ln(){}function Tt(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function Bn(e){var t=e;if(typeof t=="string"&&Fn.canUseDOM){var n=document.querySelectorAll(t);Tt(n,t),t=n}return L=t||L,L}function qe(e){var t=e||L;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,_n.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function Hn(e){var t=!0,n=!1,r=void 0;try{for(var o=qe(e)[Symbol.iterator](),s;!(t=(s=o.next()).done);t=!0){var l=s.value;l.setAttribute("aria-hidden","true")}}catch(i){n=!0,r=i}finally{try{!t&&o.return&&o.return()}finally{if(n)throw r}}}function In(e){var t=!0,n=!1,r=void 0;try{for(var o=qe(e)[Symbol.iterator](),s;!(t=(s=o.next()).done);t=!0){var l=s.value;l.removeAttribute("aria-hidden")}}catch(i){n=!0,r=i}finally{try{!t&&o.return&&o.return()}finally{if(n)throw r}}}function $n(){L=null}var se={};Object.defineProperty(se,"__esModule",{value:!0});se.resetState=qn;se.log=zn;var fe={},pe={};function Ge(e,t){e.classList.remove(t)}function qn(){var e=document.getElementsByTagName("html")[0];for(var t in fe)Ge(e,fe[t]);var n=document.body;for(var r in pe)Ge(n,pe[r]);fe={},pe={}}function zn(){}var Yn=function(t,n){return t[n]||(t[n]=0),t[n]+=1,n},Un=function(t,n){return t[n]&&(t[n]-=1),n},Xn=function(t,n,r){r.forEach(function(o){Yn(n,o),t.add(o)})},Gn=function(t,n,r){r.forEach(function(o){Un(n,o),n[o]===0&&t.remove(o)})};se.add=function(t,n){return Xn(t.classList,t.nodeName.toLowerCase()=="html"?fe:pe,n.split(" "))};se.remove=function(t,n){return Gn(t.classList,t.nodeName.toLowerCase()=="html"?fe:pe,n.split(" "))};var ce={};Object.defineProperty(ce,"__esModule",{value:!0});ce.log=Kn;ce.resetState=Jn;function Qn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var Nt=function e(){var t=this;Qn(this,e),this.register=function(n){t.openInstances.indexOf(n)===-1&&(t.openInstances.push(n),t.emit("register"))},this.deregister=function(n){var r=t.openInstances.indexOf(n);r!==-1&&(t.openInstances.splice(r,1),t.emit("deregister"))},this.subscribe=function(n){t.subscribers.push(n)},this.emit=function(n){t.subscribers.forEach(function(r){return r(n,t.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},Se=new Nt;function Kn(){console.log("portalOpenInstances ----------"),console.log(Se.openInstances.length),Se.openInstances.forEach(function(e){return console.log(e)}),console.log("end portalOpenInstances ----------")}function Jn(){Se=new Nt}ce.default=Se;var ze={};Object.defineProperty(ze,"__esModule",{value:!0});ze.resetState=nr;ze.log=rr;var Zn=ce,er=tr(Zn);function tr(e){return e&&e.__esModule?e:{default:e}}var V=void 0,B=void 0,ee=[];function nr(){for(var e=[V,B],t=0;t<e.length;t++){var n=e[t];n&&n.parentNode&&n.parentNode.removeChild(n)}V=B=null,ee=[]}function rr(){console.log("bodyTrap ----------"),console.log(ee.length);for(var e=[V,B],t=0;t<e.length;t++){var n=e[t],r=n||{};console.log(r.nodeName,r.className,r.id)}console.log("edn bodyTrap ----------")}function Qe(){ee.length!==0&&ee[ee.length-1].focusContent()}function or(e,t){!V&&!B&&(V=document.createElement("div"),V.setAttribute("data-react-modal-body-trap",""),V.style.position="absolute",V.style.opacity="0",V.setAttribute("tabindex","0"),V.addEventListener("focus",Qe),B=V.cloneNode(),B.addEventListener("focus",Qe)),ee=t,ee.length>0?(document.body.firstChild!==V&&document.body.insertBefore(V,document.body.firstChild),document.body.lastChild!==B&&document.body.appendChild(B)):(V.parentElement&&V.parentElement.removeChild(V),B.parentElement&&B.parentElement.removeChild(B))}er.default.subscribe(or);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(v){for(var b=1;b<arguments.length;b++){var j=arguments[b];for(var c in j)Object.prototype.hasOwnProperty.call(j,c)&&(v[c]=j[c])}return v},r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(v){return typeof v}:function(v){return v&&typeof Symbol=="function"&&v.constructor===Symbol&&v!==Symbol.prototype?"symbol":typeof v},o=function(){function v(b,j){for(var c=0;c<j.length;c++){var m=j[c];m.enumerable=m.enumerable||!1,m.configurable=!0,"value"in m&&(m.writable=!0),Object.defineProperty(b,m.key,m)}}return function(b,j,c){return j&&v(b.prototype,j),c&&v(b,c),b}}(),s=w,l=Ct,i=T(l),d=I,f=W(d),h=kn,p=T(h),g=$,y=W(g),M=se,P=W(M),C=H,D=T(C),S=ce,A=T(S);function W(v){if(v&&v.__esModule)return v;var b={};if(v!=null)for(var j in v)Object.prototype.hasOwnProperty.call(v,j)&&(b[j]=v[j]);return b.default=v,b}function T(v){return v&&v.__esModule?v:{default:v}}function E(v,b){if(!(v instanceof b))throw new TypeError("Cannot call a class as a function")}function k(v,b){if(!v)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&(typeof b=="object"||typeof b=="function")?b:v}function _(v,b){if(typeof b!="function"&&b!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof b);v.prototype=Object.create(b&&b.prototype,{constructor:{value:v,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(v,b):v.__proto__=b)}var le={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},Xt=function(b){return b.code==="Tab"||b.keyCode===9},Gt=function(b){return b.code==="Escape"||b.keyCode===27},ye=0,We=function(v){_(b,v);function b(j){E(this,b);var c=k(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,j));return c.setOverlayRef=function(m){c.overlay=m,c.props.overlayRef&&c.props.overlayRef(m)},c.setContentRef=function(m){c.content=m,c.props.contentRef&&c.props.contentRef(m)},c.afterClose=function(){var m=c.props,F=m.appElement,R=m.ariaHideApp,N=m.htmlOpenClassName,G=m.bodyOpenClassName,Q=m.parentSelector,we=Q&&Q().ownerDocument||document;G&&P.remove(we.body,G),N&&P.remove(we.getElementsByTagName("html")[0],N),R&&ye>0&&(ye-=1,ye===0&&y.show(F)),c.props.shouldFocusAfterRender&&(c.props.shouldReturnFocusAfterClose?(f.returnFocus(c.props.preventScroll),f.teardownScopedFocus()):f.popWithoutFocus()),c.props.onAfterClose&&c.props.onAfterClose(),A.default.deregister(c)},c.open=function(){c.beforeOpen(),c.state.afterOpen&&c.state.beforeClose?(clearTimeout(c.closeTimer),c.setState({beforeClose:!1})):(c.props.shouldFocusAfterRender&&(f.setupScopedFocus(c.node),f.markForFocusLater()),c.setState({isOpen:!0},function(){c.openAnimationFrame=requestAnimationFrame(function(){c.setState({afterOpen:!0}),c.props.isOpen&&c.props.onAfterOpen&&c.props.onAfterOpen({overlayEl:c.overlay,contentEl:c.content})})}))},c.close=function(){c.props.closeTimeoutMS>0?c.closeWithTimeout():c.closeWithoutTimeout()},c.focusContent=function(){return c.content&&!c.contentHasFocus()&&c.content.focus({preventScroll:!0})},c.closeWithTimeout=function(){var m=Date.now()+c.props.closeTimeoutMS;c.setState({beforeClose:!0,closesAt:m},function(){c.closeTimer=setTimeout(c.closeWithoutTimeout,c.state.closesAt-Date.now())})},c.closeWithoutTimeout=function(){c.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},c.afterClose)},c.handleKeyDown=function(m){Xt(m)&&(0,p.default)(c.content,m),c.props.shouldCloseOnEsc&&Gt(m)&&(m.stopPropagation(),c.requestClose(m))},c.handleOverlayOnClick=function(m){c.shouldClose===null&&(c.shouldClose=!0),c.shouldClose&&c.props.shouldCloseOnOverlayClick&&(c.ownerHandlesClose()?c.requestClose(m):c.focusContent()),c.shouldClose=null},c.handleContentOnMouseUp=function(){c.shouldClose=!1},c.handleOverlayOnMouseDown=function(m){!c.props.shouldCloseOnOverlayClick&&m.target==c.overlay&&m.preventDefault()},c.handleContentOnClick=function(){c.shouldClose=!1},c.handleContentOnMouseDown=function(){c.shouldClose=!1},c.requestClose=function(m){return c.ownerHandlesClose()&&c.props.onRequestClose(m)},c.ownerHandlesClose=function(){return c.props.onRequestClose},c.shouldBeClosed=function(){return!c.state.isOpen&&!c.state.beforeClose},c.contentHasFocus=function(){return document.activeElement===c.content||c.content.contains(document.activeElement)},c.buildClassName=function(m,F){var R=(typeof F>"u"?"undefined":r(F))==="object"?F:{base:le[m],afterOpen:le[m]+"--after-open",beforeClose:le[m]+"--before-close"},N=R.base;return c.state.afterOpen&&(N=N+" "+R.afterOpen),c.state.beforeClose&&(N=N+" "+R.beforeClose),typeof F=="string"&&F?N+" "+F:N},c.attributesFromObject=function(m,F){return Object.keys(F).reduce(function(R,N){return R[m+"-"+N]=F[N],R},{})},c.state={afterOpen:!1,beforeClose:!1},c.shouldClose=null,c.moveFromContentToOverlay=null,c}return o(b,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(c,m){this.props.isOpen&&!c.isOpen?this.open():!this.props.isOpen&&c.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!m.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var c=this.props,m=c.appElement,F=c.ariaHideApp,R=c.htmlOpenClassName,N=c.bodyOpenClassName,G=c.parentSelector,Q=G&&G().ownerDocument||document;N&&P.add(Q.body,N),R&&P.add(Q.getElementsByTagName("html")[0],R),F&&(ye+=1,y.hide(m)),A.default.register(this)}},{key:"render",value:function(){var c=this.props,m=c.id,F=c.className,R=c.overlayClassName,N=c.defaultStyles,G=c.children,Q=F?{}:N.content,we=R?{}:N.overlay;if(this.shouldBeClosed())return null;var Qt={ref:this.setOverlayRef,className:this.buildClassName("overlay",R),style:n({},we,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},Kt=n({id:m,ref:this.setContentRef,style:n({},Q,this.props.style.content),className:this.buildClassName("content",F),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",n({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),Jt=this.props.contentElement(Kt,G);return this.props.overlayElement(Qt,Jt)}}]),b}(s.Component);We.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},We.propTypes={isOpen:i.default.bool.isRequired,defaultStyles:i.default.shape({content:i.default.object,overlay:i.default.object}),style:i.default.shape({content:i.default.object,overlay:i.default.object}),className:i.default.oneOfType([i.default.string,i.default.object]),overlayClassName:i.default.oneOfType([i.default.string,i.default.object]),parentSelector:i.default.func,bodyOpenClassName:i.default.string,htmlOpenClassName:i.default.string,ariaHideApp:i.default.bool,appElement:i.default.oneOfType([i.default.instanceOf(D.default),i.default.instanceOf(C.SafeHTMLCollection),i.default.instanceOf(C.SafeNodeList),i.default.arrayOf(i.default.instanceOf(D.default))]),onAfterOpen:i.default.func,onAfterClose:i.default.func,onRequestClose:i.default.func,closeTimeoutMS:i.default.number,shouldFocusAfterRender:i.default.bool,shouldCloseOnOverlayClick:i.default.bool,shouldReturnFocusAfterClose:i.default.bool,preventScroll:i.default.bool,role:i.default.string,contentLabel:i.default.string,aria:i.default.object,data:i.default.object,children:i.default.node,shouldCloseOnEsc:i.default.bool,overlayRef:i.default.func,contentRef:i.default.func,id:i.default.string,overlayElement:i.default.func,contentElement:i.default.func,testId:i.default.string},t.default=We,e.exports=t.default})(Le,Le.exports);var ar=Le.exports;function Wt(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);e!=null&&this.setState(e)}function _t(e){function t(n){var r=this.constructor.getDerivedStateFromProps(e,n);return r??null}this.setState(t.bind(this))}function Ft(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}Wt.__suppressDeprecationWarning=!0;_t.__suppressDeprecationWarning=!0;Ft.__suppressDeprecationWarning=!0;function ir(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if(typeof e.getDerivedStateFromProps!="function"&&typeof t.getSnapshotBeforeUpdate!="function")return e;var n=null,r=null,o=null;if(typeof t.componentWillMount=="function"?n="componentWillMount":typeof t.UNSAFE_componentWillMount=="function"&&(n="UNSAFE_componentWillMount"),typeof t.componentWillReceiveProps=="function"?r="componentWillReceiveProps":typeof t.UNSAFE_componentWillReceiveProps=="function"&&(r="UNSAFE_componentWillReceiveProps"),typeof t.componentWillUpdate=="function"?o="componentWillUpdate":typeof t.UNSAFE_componentWillUpdate=="function"&&(o="UNSAFE_componentWillUpdate"),n!==null||r!==null||o!==null){var s=e.displayName||e.name,l=typeof e.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+s+" uses "+l+" but also contains the following legacy lifecycles:"+(n!==null?`
  `+n:"")+(r!==null?`
  `+r:"")+(o!==null?`
  `+o:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof e.getDerivedStateFromProps=="function"&&(t.componentWillMount=Wt,t.componentWillReceiveProps=_t),typeof t.getSnapshotBeforeUpdate=="function"){if(typeof t.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=Ft;var i=t.componentDidUpdate;t.componentDidUpdate=function(f,h,p){var g=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:p;i.call(this,f,h,g)}}return e}const sr=Object.freeze(Object.defineProperty({__proto__:null,polyfill:ir},Symbol.toStringTag,{value:"Module"})),cr=Zt(sr);Object.defineProperty(te,"__esModule",{value:!0});te.bodyOpenClassName=te.portalClassName=void 0;var Ke=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},lr=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Vt=w,ke=be(Vt),dr=en,Ce=be(dr),ur=Ct,x=be(ur),fr=ar,Je=be(fr),pr=$,hr=gr(pr),U=H,Ze=be(U),mr=cr;function gr(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function be(e){return e&&e.__esModule?e:{default:e}}function xr(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function et(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function br(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var vr=te.portalClassName="ReactModalPortal",yr=te.bodyOpenClassName="ReactModal__Body--open",K=U.canUseDOM&&Ce.default.createPortal!==void 0,tt=function(t){return document.createElement(t)},nt=function(){return K?Ce.default.createPortal:Ce.default.unstable_renderSubtreeIntoContainer};function Ae(e){return e()}var ve=function(e){br(t,e);function t(){var n,r,o,s;xr(this,t);for(var l=arguments.length,i=Array(l),d=0;d<l;d++)i[d]=arguments[d];return s=(r=(o=et(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(i))),o),o.removePortal=function(){!K&&Ce.default.unmountComponentAtNode(o.node);var f=Ae(o.props.parentSelector);f&&f.contains(o.node)?f.removeChild(o.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},o.portalRef=function(f){o.portal=f},o.renderPortal=function(f){var h=nt(),p=h(o,ke.default.createElement(Je.default,Ke({defaultStyles:t.defaultStyles},f)),o.node);o.portalRef(p)},r),et(o,s)}return lr(t,[{key:"componentDidMount",value:function(){if(U.canUseDOM){K||(this.node=tt("div")),this.node.className=this.props.portalClassName;var r=Ae(this.props.parentSelector);r.appendChild(this.node),!K&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(r){var o=Ae(r.parentSelector),s=Ae(this.props.parentSelector);return{prevParent:o,nextParent:s}}},{key:"componentDidUpdate",value:function(r,o,s){if(U.canUseDOM){var l=this.props,i=l.isOpen,d=l.portalClassName;r.portalClassName!==d&&(this.node.className=d);var f=s.prevParent,h=s.nextParent;h!==f&&(f.removeChild(this.node),h.appendChild(this.node)),!(!r.isOpen&&!i)&&!K&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!U.canUseDOM||!this.node||!this.portal)){var r=this.portal.state,o=Date.now(),s=r.isOpen&&this.props.closeTimeoutMS&&(r.closesAt||o+this.props.closeTimeoutMS);s?(r.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,s-o)):this.removePortal()}}},{key:"render",value:function(){if(!U.canUseDOM||!K)return null;!this.node&&K&&(this.node=tt("div"));var r=nt();return r(ke.default.createElement(Je.default,Ke({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(r){hr.setElement(r)}}]),t}(Vt.Component);ve.propTypes={isOpen:x.default.bool.isRequired,style:x.default.shape({content:x.default.object,overlay:x.default.object}),portalClassName:x.default.string,bodyOpenClassName:x.default.string,htmlOpenClassName:x.default.string,className:x.default.oneOfType([x.default.string,x.default.shape({base:x.default.string.isRequired,afterOpen:x.default.string.isRequired,beforeClose:x.default.string.isRequired})]),overlayClassName:x.default.oneOfType([x.default.string,x.default.shape({base:x.default.string.isRequired,afterOpen:x.default.string.isRequired,beforeClose:x.default.string.isRequired})]),appElement:x.default.oneOfType([x.default.instanceOf(Ze.default),x.default.instanceOf(U.SafeHTMLCollection),x.default.instanceOf(U.SafeNodeList),x.default.arrayOf(x.default.instanceOf(Ze.default))]),onAfterOpen:x.default.func,onRequestClose:x.default.func,closeTimeoutMS:x.default.number,ariaHideApp:x.default.bool,shouldFocusAfterRender:x.default.bool,shouldCloseOnOverlayClick:x.default.bool,shouldReturnFocusAfterClose:x.default.bool,preventScroll:x.default.bool,parentSelector:x.default.func,aria:x.default.object,data:x.default.object,role:x.default.string,contentLabel:x.default.string,shouldCloseOnEsc:x.default.bool,overlayRef:x.default.func,contentRef:x.default.func,id:x.default.string,overlayElement:x.default.func,contentElement:x.default.func};ve.defaultProps={isOpen:!1,portalClassName:vr,bodyOpenClassName:yr,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(t,n){return ke.default.createElement("div",t,n)},contentElement:function(t,n){return ke.default.createElement("div",t,n)}};ve.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,mr.polyfill)(ve);te.default=ve;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=te,r=o(n);function o(s){return s&&s.__esModule?s:{default:s}}t.default=r.default,e.exports=t.default})(Re,Re.exports);var wr=Re.exports;const Ye=tn(wr);function q(e){const t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new e.constructor(+e):typeof e=="number"||t==="[object Number]"||typeof e=="string"||t==="[object String]"?new Date(e):new Date(NaN)}function ne(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}const Rt=6048e5,Ar=864e5;let Or={};function Te(){return Or}function ge(e,t){var i,d,f,h;const n=Te(),r=(t==null?void 0:t.weekStartsOn)??((d=(i=t==null?void 0:t.locale)==null?void 0:i.options)==null?void 0:d.weekStartsOn)??n.weekStartsOn??((h=(f=n.locale)==null?void 0:f.options)==null?void 0:h.weekStartsOn)??0,o=q(e),s=o.getDay(),l=(s<r?7:0)+s-r;return o.setDate(o.getDate()-l),o.setHours(0,0,0,0),o}function Ee(e){return ge(e,{weekStartsOn:1})}function Lt(e){const t=q(e),n=t.getFullYear(),r=ne(e,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const o=Ee(r),s=ne(e,0);s.setFullYear(n,0,4),s.setHours(0,0,0,0);const l=Ee(s);return t.getTime()>=o.getTime()?n+1:t.getTime()>=l.getTime()?n:n-1}function rt(e){const t=q(e);return t.setHours(0,0,0,0),t}function ot(e){const t=q(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function Mr(e,t){const n=rt(e),r=rt(t),o=+n-ot(n),s=+r-ot(r);return Math.round((o-s)/Ar)}function Sr(e){const t=Lt(e),n=ne(e,0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),Ee(n)}function kr(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function Cr(e){if(!kr(e)&&typeof e!="number")return!1;const t=q(e);return!isNaN(Number(t))}function Er(e){const t=q(e),n=ne(e,0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}const jr={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Pr=(e,t,n)=>{let r;const o=jr[e];return typeof o=="string"?r=o:t===1?r=o.one:r=o.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function _e(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const Dr={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Tr={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Nr={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Wr={date:_e({formats:Dr,defaultWidth:"full"}),time:_e({formats:Tr,defaultWidth:"full"}),dateTime:_e({formats:Nr,defaultWidth:"full"})},_r={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Fr=(e,t,n,r)=>_r[e];function de(e){return(t,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let o;if(r==="formatting"&&e.formattingValues){const l=e.defaultFormattingWidth||e.defaultWidth,i=n!=null&&n.width?String(n.width):l;o=e.formattingValues[i]||e.formattingValues[l]}else{const l=e.defaultWidth,i=n!=null&&n.width?String(n.width):e.defaultWidth;o=e.values[i]||e.values[l]}const s=e.argumentCallback?e.argumentCallback(t):t;return o[s]}}const Vr={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Rr={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Lr={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Br={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Hr={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Ir={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},$r=(e,t)=>{const n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},qr={ordinalNumber:$r,era:de({values:Vr,defaultWidth:"wide"}),quarter:de({values:Rr,defaultWidth:"wide",argumentCallback:e=>e-1}),month:de({values:Lr,defaultWidth:"wide"}),day:de({values:Br,defaultWidth:"wide"}),dayPeriod:de({values:Hr,defaultWidth:"wide",formattingValues:Ir,defaultFormattingWidth:"wide"})};function ue(e){return(t,n={})=>{const r=n.width,o=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],s=t.match(o);if(!s)return null;const l=s[0],i=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],d=Array.isArray(i)?Yr(i,p=>p.test(l)):zr(i,p=>p.test(l));let f;f=e.valueCallback?e.valueCallback(d):d,f=n.valueCallback?n.valueCallback(f):f;const h=t.slice(l.length);return{value:f,rest:h}}}function zr(e,t){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function Yr(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function Ur(e){return(t,n={})=>{const r=t.match(e.matchPattern);if(!r)return null;const o=r[0],s=t.match(e.parsePattern);if(!s)return null;let l=e.valueCallback?e.valueCallback(s[0]):s[0];l=n.valueCallback?n.valueCallback(l):l;const i=t.slice(o.length);return{value:l,rest:i}}}const Xr=/^(\d+)(th|st|nd|rd)?/i,Gr=/\d+/i,Qr={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Kr={any:[/^b/i,/^(a|c)/i]},Jr={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Zr={any:[/1/i,/2/i,/3/i,/4/i]},eo={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},to={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},no={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},ro={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},oo={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},ao={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},io={ordinalNumber:Ur({matchPattern:Xr,parsePattern:Gr,valueCallback:e=>parseInt(e,10)}),era:ue({matchPatterns:Qr,defaultMatchWidth:"wide",parsePatterns:Kr,defaultParseWidth:"any"}),quarter:ue({matchPatterns:Jr,defaultMatchWidth:"wide",parsePatterns:Zr,defaultParseWidth:"any",valueCallback:e=>e+1}),month:ue({matchPatterns:eo,defaultMatchWidth:"wide",parsePatterns:to,defaultParseWidth:"any"}),day:ue({matchPatterns:no,defaultMatchWidth:"wide",parsePatterns:ro,defaultParseWidth:"any"}),dayPeriod:ue({matchPatterns:oo,defaultMatchWidth:"any",parsePatterns:ao,defaultParseWidth:"any"})},so={code:"en-US",formatDistance:Pr,formatLong:Wr,formatRelative:Fr,localize:qr,match:io,options:{weekStartsOn:0,firstWeekContainsDate:1}};function co(e){const t=q(e);return Mr(t,Er(t))+1}function lo(e){const t=q(e),n=+Ee(t)-+Sr(t);return Math.round(n/Rt)+1}function Bt(e,t){var h,p,g,y;const n=q(e),r=n.getFullYear(),o=Te(),s=(t==null?void 0:t.firstWeekContainsDate)??((p=(h=t==null?void 0:t.locale)==null?void 0:h.options)==null?void 0:p.firstWeekContainsDate)??o.firstWeekContainsDate??((y=(g=o.locale)==null?void 0:g.options)==null?void 0:y.firstWeekContainsDate)??1,l=ne(e,0);l.setFullYear(r+1,0,s),l.setHours(0,0,0,0);const i=ge(l,t),d=ne(e,0);d.setFullYear(r,0,s),d.setHours(0,0,0,0);const f=ge(d,t);return n.getTime()>=i.getTime()?r+1:n.getTime()>=f.getTime()?r:r-1}function uo(e,t){var i,d,f,h;const n=Te(),r=(t==null?void 0:t.firstWeekContainsDate)??((d=(i=t==null?void 0:t.locale)==null?void 0:i.options)==null?void 0:d.firstWeekContainsDate)??n.firstWeekContainsDate??((h=(f=n.locale)==null?void 0:f.options)==null?void 0:h.firstWeekContainsDate)??1,o=Bt(e,t),s=ne(e,0);return s.setFullYear(o,0,r),s.setHours(0,0,0,0),ge(s,t)}function fo(e,t){const n=q(e),r=+ge(n,t)-+uo(n,t);return Math.round(r/Rt)+1}function O(e,t){const n=e<0?"-":"",r=Math.abs(e).toString().padStart(t,"0");return n+r}const Y={y(e,t){const n=e.getFullYear(),r=n>0?n:1-n;return O(t==="yy"?r%100:r,t.length)},M(e,t){const n=e.getMonth();return t==="M"?String(n+1):O(n+1,2)},d(e,t){return O(e.getDate(),t.length)},a(e,t){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(e,t){return O(e.getHours()%12||12,t.length)},H(e,t){return O(e.getHours(),t.length)},m(e,t){return O(e.getMinutes(),t.length)},s(e,t){return O(e.getSeconds(),t.length)},S(e,t){const n=t.length,r=e.getMilliseconds(),o=Math.trunc(r*Math.pow(10,n-3));return O(o,t.length)}},oe={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},at={G:function(e,t,n){const r=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if(t==="yo"){const r=e.getFullYear(),o=r>0?r:1-r;return n.ordinalNumber(o,{unit:"year"})}return Y.y(e,t)},Y:function(e,t,n,r){const o=Bt(e,r),s=o>0?o:1-o;if(t==="YY"){const l=s%100;return O(l,2)}return t==="Yo"?n.ordinalNumber(s,{unit:"year"}):O(s,t.length)},R:function(e,t){const n=Lt(e);return O(n,t.length)},u:function(e,t){const n=e.getFullYear();return O(n,t.length)},Q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return O(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return O(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){const r=e.getMonth();switch(t){case"M":case"MM":return Y.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){const r=e.getMonth();switch(t){case"L":return String(r+1);case"LL":return O(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){const o=fo(e,r);return t==="wo"?n.ordinalNumber(o,{unit:"week"}):O(o,t.length)},I:function(e,t,n){const r=lo(e);return t==="Io"?n.ordinalNumber(r,{unit:"week"}):O(r,t.length)},d:function(e,t,n){return t==="do"?n.ordinalNumber(e.getDate(),{unit:"date"}):Y.d(e,t)},D:function(e,t,n){const r=co(e);return t==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):O(r,t.length)},E:function(e,t,n){const r=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){const o=e.getDay(),s=(o-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(s);case"ee":return O(s,2);case"eo":return n.ordinalNumber(s,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});case"eeee":default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){const o=e.getDay(),s=(o-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(s);case"cc":return O(s,t.length);case"co":return n.ordinalNumber(s,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});case"cccc":default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(e,t,n){const r=e.getDay(),o=r===0?7:r;switch(t){case"i":return String(o);case"ii":return O(o,t.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){const o=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(e,t,n){const r=e.getHours();let o;switch(r===12?o=oe.noon:r===0?o=oe.midnight:o=r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(e,t,n){const r=e.getHours();let o;switch(r>=17?o=oe.evening:r>=12?o=oe.afternoon:r>=4?o=oe.morning:o=oe.night,t){case"B":case"BB":case"BBB":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(e,t,n){if(t==="ho"){let r=e.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return Y.h(e,t)},H:function(e,t,n){return t==="Ho"?n.ordinalNumber(e.getHours(),{unit:"hour"}):Y.H(e,t)},K:function(e,t,n){const r=e.getHours()%12;return t==="Ko"?n.ordinalNumber(r,{unit:"hour"}):O(r,t.length)},k:function(e,t,n){let r=e.getHours();return r===0&&(r=24),t==="ko"?n.ordinalNumber(r,{unit:"hour"}):O(r,t.length)},m:function(e,t,n){return t==="mo"?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):Y.m(e,t)},s:function(e,t,n){return t==="so"?n.ordinalNumber(e.getSeconds(),{unit:"second"}):Y.s(e,t)},S:function(e,t){return Y.S(e,t)},X:function(e,t,n){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(t){case"X":return st(r);case"XXXX":case"XX":return J(r);case"XXXXX":case"XXX":default:return J(r,":")}},x:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"x":return st(r);case"xxxx":case"xx":return J(r);case"xxxxx":case"xxx":default:return J(r,":")}},O:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+it(r,":");case"OOOO":default:return"GMT"+J(r,":")}},z:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+it(r,":");case"zzzz":default:return"GMT"+J(r,":")}},t:function(e,t,n){const r=Math.trunc(e.getTime()/1e3);return O(r,t.length)},T:function(e,t,n){const r=e.getTime();return O(r,t.length)}};function it(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),o=Math.trunc(r/60),s=r%60;return s===0?n+String(o):n+String(o)+t+O(s,2)}function st(e,t){return e%60===0?(e>0?"-":"+")+O(Math.abs(e)/60,2):J(e,t)}function J(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),o=O(Math.trunc(r/60),2),s=O(r%60,2);return n+o+t+s}const ct=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},Ht=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},po=(e,t)=>{const n=e.match(/(P+)(p+)?/)||[],r=n[1],o=n[2];if(!o)return ct(e,t);let s;switch(r){case"P":s=t.dateTime({width:"short"});break;case"PP":s=t.dateTime({width:"medium"});break;case"PPP":s=t.dateTime({width:"long"});break;case"PPPP":default:s=t.dateTime({width:"full"});break}return s.replace("{{date}}",ct(r,t)).replace("{{time}}",Ht(o,t))},ho={p:Ht,P:po},mo=/^D+$/,go=/^Y+$/,xo=["D","DD","YY","YYYY"];function bo(e){return mo.test(e)}function vo(e){return go.test(e)}function yo(e,t,n){const r=wo(e,t,n);if(console.warn(r),xo.includes(e))throw new RangeError(r)}function wo(e,t,n){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Ao=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Oo=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Mo=/^'([^]*?)'?$/,So=/''/g,ko=/[a-zA-Z]/;function Co(e,t,n){var h,p,g,y,M,P,C,D;const r=Te(),o=(n==null?void 0:n.locale)??r.locale??so,s=(n==null?void 0:n.firstWeekContainsDate)??((p=(h=n==null?void 0:n.locale)==null?void 0:h.options)==null?void 0:p.firstWeekContainsDate)??r.firstWeekContainsDate??((y=(g=r.locale)==null?void 0:g.options)==null?void 0:y.firstWeekContainsDate)??1,l=(n==null?void 0:n.weekStartsOn)??((P=(M=n==null?void 0:n.locale)==null?void 0:M.options)==null?void 0:P.weekStartsOn)??r.weekStartsOn??((D=(C=r.locale)==null?void 0:C.options)==null?void 0:D.weekStartsOn)??0,i=q(e);if(!Cr(i))throw new RangeError("Invalid time value");let d=t.match(Oo).map(S=>{const A=S[0];if(A==="p"||A==="P"){const W=ho[A];return W(S,o.formatLong)}return S}).join("").match(Ao).map(S=>{if(S==="''")return{isToken:!1,value:"'"};const A=S[0];if(A==="'")return{isToken:!1,value:Eo(S)};if(at[A])return{isToken:!0,value:S};if(A.match(ko))throw new RangeError("Format string contains an unescaped latin alphabet character `"+A+"`");return{isToken:!1,value:S}});o.localize.preprocessor&&(d=o.localize.preprocessor(i,d));const f={firstWeekContainsDate:s,weekStartsOn:l,locale:o};return d.map(S=>{if(!S.isToken)return S.value;const A=S.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&vo(A)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&bo(A))&&yo(A,t,String(e));const W=at[A[0]];return W(i,A,o.localize,f)}).join("")}function Eo(e){const t=e.match(Mo);return t?t[1].replace(So,"'"):e}const jo=e=>Co(new Date(e),"p"),Ne=(e=new Date)=>{const t=e.getFullYear(),n=e.getMonth()+1;return{year:t.toString(),month:n.toString()}};Ye.setAppElement("#root");const Po=({onClose:e})=>{const[t,n]=w.useState(0),[r,o]=w.useState(0),[s,l]=w.useState(0),[i,d]=w.useState(!0),[f,h]=w.useState(0),p=re(),{year:g,month:y}=Ne(),M=()=>{d(!i)},P=A=>{n(Number(A.target.value))},C=A=>{o(Number(A.target.value))};w.useEffect(()=>{l(i?Math.ceil((t*.03+r*.4)*100)/100<2?2:Math.ceil((t*.03+r*.4)*100)/100:Math.ceil((t*.04+r*.6)*100)/100<2?2:Math.ceil((t*.04+r*.6)*100)/100)},[i,t,r]);const D=A=>{h(Number(A.target.value))},S=async A=>{try{if(A.preventDefault(),f<2)return Ve.Notify.failure("The required amount of water in liters per day: 2L");if(f>15)return Ve.Notify.failure("The maximum amount of water in liters per day: 15L");await p(nn(f)),await p(xe({year:g,month:y})),e()}catch(W){console.error("error",W)}};return w.useEffect(()=>{const A=W=>{W.key==="Escape"&&e()};window.addEventListener("keydown",A)},[e]),$e.createPortal(a.jsx(hn,{onClick:e,children:a.jsxs(mn,{onClick:A=>A.stopPropagation(),children:[a.jsxs("div",{className:"headerDaily",children:[a.jsx("h2",{children:"My daily norma"}),a.jsx("button",{type:"button",className:"closeButton",onClick:e,children:a.jsx("svg",{width:"24",height:"24",children:a.jsx("use",{href:"/goit-group2-react-nodejs/src/assets/images/sprite/horodiukIcons.svg#icon-close"})})})]}),a.jsxs("div",{className:"formulaContainer",children:[a.jsxs("div",{className:"formula",children:[a.jsxs("div",{className:"formulaText",children:[a.jsx("p",{children:"For girl:"}),a.jsx("span",{className:"formulaSpan",children:"V=(M*0,03) + (T*0,4)"})]}),a.jsxs("div",{className:"formulaText",children:[a.jsx("p",{children:"For man:"}),a.jsx("span",{className:"formulaSpan",children:"V=(M*0,04) + (T*0,6)"})]})]}),a.jsxs("p",{className:"formulaDescription",children:[a.jsx("span",{className:"formulaStar",children:"*"})," V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]})]}),a.jsxs("form",{onSubmit:S,children:[a.jsx("h3",{children:"Calculate your rate:"}),a.jsxs("div",{className:"checkBox",children:[a.jsxs("label",{children:[a.jsx("input",{type:"radio",name:"gender",value:"woman",checked:i,onChange:M})," ","For woman"]}),a.jsxs("label",{children:[a.jsx("input",{type:"radio",name:"gender",value:"man",checked:!i,onChange:M})," ","For man"]})]}),a.jsx("label",{className:"inputDescription",children:"Your weight in kilograms:"}),a.jsx("input",{className:"inputForm",placeholder:"0",onChange:P}),a.jsx("label",{className:"inputDescription",children:"The time of active participation in sports or other activities with a high physical. load in hours:"}),a.jsx("input",{className:"inputForm",placeholder:"0",onChange:C}),a.jsxs("div",{className:"requiredAmount",children:[a.jsx("p",{className:"amountDescription",children:"The required amount of water in liters per day:"}),a.jsxs("span",{className:"amount",children:[s," L"]})]}),a.jsx("h3",{children:"Write down how much water you will drink:"}),a.jsx("input",{className:"inputForm",placeholder:"0",onChange:D}),a.jsx("button",{className:"saveButton",type:"submit",children:"Save"})]})]})}),document.getElementById("modal-root"))},Do=()=>{const[e,t]=w.useState(!1),{waterRate:n}=X(Et),r=n/1e3,o=()=>{t(!1)},s=()=>{t(!0)};return a.jsx("div",{children:a.jsxs(fn,{children:[a.jsx("h2",{children:"My daily norma:"}),a.jsxs(pn,{children:[a.jsxs("p",{children:[" ",r," L"]}),a.jsx("button",{type:"button",onClick:s,children:"Edit"}),e&&a.jsx(Po,{isOpen:e,onClose:o})]})]})})},To=Do,Ue=e=>e.water.notes,No=e=>e.water.currentNote,Wo=e=>e.water.monthNotes,_o=e=>e.water.isLoading,lt=new Date,dt=[lt.getFullYear(),lt.getMonth()+1],ut=(e=dt,t)=>{const[n,r]=e;switch(t){case"forward":return r>=12?[n+1,1]:[n,r+1];case"back":return r<=1?[n-1,12]:[n,r-1];default:return dt}},Fo=u.div`
  width: 100%;
  margin-top: 15px;
  height: 490px;

  @media screen and (min-width: 768px) {
    height: 308px;
  }
`,Vo=u.h3`
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
  color: ${({theme:e})=>e.color.primaryBlack};

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 32px;
  }
`,Ro=u.div`
  display: flex;
  justify-content: space-between;
`,Lo=u.div`
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .arrow {
    background: transparent;
    border: none;
    padding: 0;
    width: 14px;
    height: 14px;
    cursor: pointer;
    transition: 250ms cubic-bezier(0.165, 0.84, 0.44, 1.03);

    &:hover {
      transform: scale(1.3);
    }

    &-right {
      margin-bottom: 6px;
    }

    &-left {
      margin-top: 3px;
    }
  }
  .arrow-right-disabled:is(:hover, :focus) {
    transform: none;
  }

  .month__name {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: center;
    color: ${({theme:e})=>e.color.primaryAccent};
  }
`,Bo=u.ul`
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px 26px;
  margin-top: 16px;
  list-style: none;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(10, 1fr);
    gap: 20px 34px;
  }

  @media screen and (min-width: 1440px) {
    gap: 20px 22px;
  }
`,Ho=u.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  text-align: center;
  font-weight: 400;
  letter-spacing: 0em;

  cursor: pointer;
  span {
    display: block;
  }
  .day {
    width: 32px;
    height: 32px;

    padding: ${({$percentage:e})=>e<100?"7px 6px":"7px"};
    background: ${({theme:e})=>e.color.primaryWhite};
    border-radius: 50%;
    border: none;
    border: ${({$percentage:e})=>e<100?"1px solid #ff9d43":"none"};
    box-shadow: ${({$isActive:e})=>e?" 0px 2px 4px 0px #407BFF4D":"none"};
    font-size: 14px;
    line-height: 18px;

    @media screen and (min-width: 768px) {
      width: 34px;
      height: 34px;
      font-size: 16px;
      line-height: 20px;
    }
  }
  .percentage {
    font-size: 12px;
    line-height: 16px;
    color: ${({theme:e})=>e.color.secondaryLightBlue};
  }
`,It=["January","February","March","April","May","June","July","August","September","October","November","December"],Io=e=>It[e-1],$o=e=>{const t=w.useRef(null);return w.useEffect(()=>{const n=r=>{t.current&&!t.current.contains(r.target)&&e()};return document.addEventListener("click",n,!0),()=>{document.removeEventListener("click",n,!0)}},[e]),t},Oe={sm:68,md:74},qo={sm:5,md:10},Me={md:69,xl:56},Fe=(e,t)=>{const n=e/qo[t],r=Math.floor(n);switch(t){case"sm":return r===n?parseInt(n-1)*Oe[t]-12:parseInt(n)*Oe[t]-12;case"md":return r===n?parseInt(n-1)*Oe[t]:parseInt(n)*Oe[t];default:return 0}},ft=(e,t)=>{const[n,r]=e%10===0?[9,!1]:[e%10-1,e%10<5];return r?n*Me[t]+Me[t]/4:n*Me[t]-280+Me[t]/4},zo=u.div`
  position: absolute;
  left: 50%;
  top: -194px;
  transform: translate(
    -50%,
    ${({$dayNumber:e})=>`${Fe(e,"sm")}px`}
  );
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 280px;
  height: 188px;
  padding: 24px 13px;
  border-radius: 10px;
  background: ${({theme:e})=>e.color.primaryWhite};
  box-shadow: 0px 4px 4px 0px rgba(64, 123, 255, 0.3);

  p {
    color: ${({theme:e})=>e.color.primaryBlack};
    line-height: 1.25;

    span {
      color: ${({theme:e})=>e.color.primaryAccent};
      font-size: 18px;
      font-weight: 500;
      line-height: 1.33;
    }
  }

  @media screen and (min-width: 768px) {
    top: -190px;
    left: 0;
    transform: translate(
      ${({$dayNumber:e})=>`${ft(e,"md")}px`},
      ${({$dayNumber:e})=>`${Fe(e,"md")}px`}
    );
  }

  @media screen and (min-width: 1440px) {
    transform: translate(
      ${({$dayNumber:e})=>`${ft(e,"xl")}px`},
      ${({$dayNumber:e})=>`${Fe(e,"md")}px`}
    );
  }
`,Yo=u.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  p {
    color: ${({theme:e})=>e.color.primaryAccent};
    font-size: 16px;
    line-height: 1.25;
  }
`,Uo=({currentDay:e,close:t})=>{const n=$o(t),{date:r,percent:o,quantity:s,waterRate:l}=e,i={dailyNorma:l??0,percent:o??0},d=It[(r==null?void 0:r.month)-1],f=i.dailyNorma/1e3;return a.jsxs(zo,{ref:n,$dayNumber:r.day,children:[a.jsx(Yo,{children:a.jsxs("p",{children:[a.jsxs("span",{children:[r==null?void 0:r.day,", "]}),a.jsx("span",{children:d})]})}),a.jsxs("p",{children:["Daily norma : ",a.jsxs("span",{children:[f,"L"]})]}),a.jsxs("p",{children:["Fulfillment of the daily norm : ",a.jsxs("span",{children:[parseInt(i.percent),"%"]})]}),a.jsxs("p",{children:["How many servings of water : ",a.jsx("span",{children:s??0})]})]})},Xo=({monthData:e})=>{const[t,n]=w.useState(null),r=w.useCallback(()=>{n(null)},[]);return a.jsxs(Bo,{children:[t&&a.jsx(Uo,{currentDay:t,close:r}),e.map(o=>a.jsxs(Ho,{onClick:()=>n(o),$percentage:o.percent,$isActive:(t==null?void 0:t.date.day)===o.date.day,children:[a.jsx("span",{className:"day",children:o.date.day}),a.jsxs("span",{className:"percentage",children:[parseInt(o.percent)||0,"%"]})]},o.date.day))]})},Go=({changeDirection:e,month:t,year:n})=>{function r(o,s){const l=new Date,i=l.getFullYear(),d=l.getMonth()+1;return Number(s)>i||Number(s)===i&&Number(o)>=d}return a.jsxs(Ro,{children:[a.jsx(Vo,{children:"Month"}),a.jsxs(Lo,{children:[a.jsx("button",{className:"arrow arrow-left",onClick:()=>e("back"),type:"button",children:a.jsx("svg",{fill:"#407BFF",width:"14",height:"14",children:a.jsx("use",{href:`${Xe}#icon-arrow-left`})})}),a.jsxs("p",{className:"month__name",children:[Io(t),", ",n]}),a.jsx("button",{className:`arrow arrow-right ${r(t,n)?"arrow-right-disabled":""}`,onClick:()=>e("forward"),type:"button",disabled:r(t,n),children:a.jsx("svg",{fill:`${r(t,n)?"#9ebbff":"#407BFF"}`,width:"14",height:"14",transform:"rotate(180)",children:a.jsx("use",{href:`${Xe}#icon-arrow-left`})})})]})]})},Qo=()=>{var d;const e=X(Wo),t=X(_o);X(Ue);const[n,r]=rn(),o=re();let[s,l]=((d=n.get("date"))==null?void 0:d.split("_"))??ut();w.useEffect(()=>{o(xe({year:s.toString(),month:l.toString()}))},[o,s,l]);const i=w.useCallback(f=>{const h=ut([+s,+l],f);r({date:h.join("_")})},[r,s,l]);return a.jsxs(Fo,{children:[a.jsx(Go,{changeDirection:i,month:l,year:s}),t?a.jsx(on,{}):a.jsx(Xo,{monthData:e})]})},Ko=Qo;var $t={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},pt=Z.createContext&&Z.createContext($t),Jo=["attr","size","title"];function Zo(e,t){if(e==null)return{};var n=ea(e,t),r,o;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function ea(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,s;for(s=0;s<r.length;s++)o=r[s],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function je(){return je=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},je.apply(this,arguments)}function ht(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Pe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ht(Object(n),!0).forEach(function(r){ta(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ht(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ta(e,t,n){return t=na(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function na(e){var t=ra(e,"string");return typeof t=="symbol"?t:String(t)}function ra(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function qt(e){return e&&e.map((t,n)=>Z.createElement(t.tag,Pe({key:n},t.attr),qt(t.child)))}function zt(e){return t=>Z.createElement(oa,je({attr:Pe({},e.attr)},t),qt(e.child))}function oa(e){var t=n=>{var{attr:r,size:o,title:s}=e,l=Zo(e,Jo),i=o||n.size||"1em",d;return n.className&&(d=n.className),e.className&&(d=(d?d+" ":"")+e.className),Z.createElement("svg",je({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:d,style:Pe(Pe({color:e.color||n.color},n.style),e.style),height:i,width:i,xmlns:"http://www.w3.org/2000/svg"}),s&&Z.createElement("title",null,s),e.children)};return pt!==void 0?Z.createElement(pt.Consumer,null,n=>t(n)):t($t)}function aa(e){return zt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"},child:[]}]})(e)}const z="/goit-group2-react-nodejs/assets/horodiukIcons-b8c45607.svg",mt=u.select`
  margin-bottom: 24px;
  border: 1px solid #d7e3ff;
  border-radius: 6px;
  padding: 12px 10px;
  width: 90px;
  height: 44px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`,ia=u.div``,gt=u.div`
  position: relative;
  display: inline-block;
`,xt=u.svg`
  position: absolute;
  top: 10px;
  right: 6px;
  pointer-events: none;
`;function Yt({onChange:e,value:t}){const n=Array.from(new Array(24),(d,f)=>f),r=[0,5,10,15,20,25,30,35,40,45,50,55],o=new Date(t);let s=o.getHours(),l=o.getMinutes();const i=r.reduce((d,f)=>f>=l&&(d===null||Math.abs(f-l)<Math.abs(d-l))?f:d,null);return i===null?(s=(s+1)%24,l=0):l=i,a.jsxs(ia,{id:"selectTimeWrapper",children:[a.jsxs(gt,{children:[a.jsx(mt,{onChange:d=>e(d,"hour"),value:s,children:n.map(d=>a.jsx("option",{value:d,children:d.toString().padStart(2,"0")},d))}),a.jsx(xt,{width:"24",height:"24",children:a.jsx("use",{href:`${z}#icon-arrow`})})]}),":",a.jsxs(gt,{children:[a.jsx(mt,{onChange:d=>e(d,"minute"),value:l,children:r.map(d=>a.jsx("option",{value:d,children:d.toString().padStart(2,"0")},d))}),a.jsx(xt,{width:"24",height:"24",children:a.jsx("use",{href:`${z}#icon-arrow`})})]})]})}const sa=u.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  overflow: scroll;
`,ca=u.div`
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
`,la=u.button`
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
`,da=u.svg`
  fill: transparent;
  stroke: ${({theme:e})=>e.color.primaryAccent};
`,ua=u.h2`
  font-weight: 500;
  font-size: 26px;
  line-height: 123%;
  color: #2f2f2f;
  margin-bottom: 24px;
`,bt=u.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  color: #2f2f2f;
  margin-bottom: 16px;
`,vt=u.p`
  font-size: 16px;
  line-height: 125%;
  color: #2f2f2f;
  margin-bottom: 12px;
`,yt=u.button`
  box-shadow: 0 2px 4px 0 rgba(64, 123, 255, 0.2);
  background-color: #fff;
  border: 1px solid #9ebbff;
  border-radius: 30px;
  padding: 0px;
  width: 44px;
  height: 44px;
  cursor: pointer;
`,wt=u.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 133%;
  color: #407bff;
  text-align: center;
`,fa=u.input`
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
`,pa=u.input`
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
`,ha=u.button`
  /* margin-top: 16px; */
  box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);
  color: #fff;
  background-color: #407bff;
  border-radius: 10px;
  padding: 8px 30px;
  width: 256px;
  height: 36px;
  transition: color ${({theme:e})=>e.transition.modal};
  &:hover,
  &:focus {
    box-shadow: ${({theme:e})=>e.boxShadowforButton.hoverButton};
  }
  &:active {
    box-shadow: ${({theme:e})=>e.boxShadowforButton.activeButton};
  }

  @media screen and (min-width: 768px) {
    width: 160px;
  }
`,ma=u.div`
  background-color: #d7e3ff;
  border-radius: 40px;
  padding: 6px 10px;
  height: 36px;
`,ga=u.div`
  display: flex;
  width: 194px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`,xa=u.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
  }
`;Ye.setAppElement("#root");function Ut({onClose:e}){const[t,n]=w.useState(0),[r,o]=w.useState(!1),[s,l]=w.useState(0),i=re(),[d,f]=w.useState(Date()),{year:h,month:p}=Ne(),g=(T,E="")=>{let k=new Date(d);switch(E){case"hour":k.setHours(parseInt(T.target.value,10));break;case"minute":k.setMinutes(Math.ceil(parseInt(T.target.value,10)/5)*5);break}f(k)},y=()=>{i(an({amount:t,date:new Date(d)})).then(()=>i(xe({year:h,month:p}))).then(e)},M=()=>{n(t+50),l(t+50)},P=()=>{if(t-50<0){n(0),l(0);return}n(t-50),l(t-50)},C=()=>{n(s)},D=T=>{const{value:E}=T.target;if(E==="")l("");else{let k=parseInt(E,10);k=isNaN(k)||k<0?0:k,l(k)}},S=T=>{T.target.closest("#selectTimeWrapper")||(o(!1),T.target===T.currentTarget&&e())},A=w.useCallback(()=>{},[e]);w.useEffect(()=>(window.addEventListener("keydown",A),()=>{window.removeEventListener("keydown",A)}),[A]);const W=T=>{const E=new Date(T),k=_=>_.toString().padStart(2,"0");return`${k(E.getHours())}:${k(E.getMinutes())}`};return $e.createPortal(a.jsx(sa,{onClick:S,children:a.jsxs(ca,{children:[a.jsx(la,{onClick:e,children:a.jsx(da,{width:"24",height:"24",children:a.jsx("use",{href:`${z}#icon-close`})})}),a.jsx(ua,{children:"Add water"}),a.jsx(bt,{children:"Choose a value:"}),a.jsx(vt,{children:"Amount of water:"}),a.jsxs(ga,{children:[a.jsx(yt,{onClick:P,children:a.jsx("svg",{width:"44",height:"44",children:a.jsx("use",{href:`${z}#icon-minus`})})}),a.jsx(ma,{children:a.jsxs(wt,{children:[t,"ml"]})}),a.jsx(yt,{onClick:M,children:a.jsx("svg",{width:"44",height:"44",children:a.jsx("use",{href:`${z}#icon-plus`})})})]}),a.jsx(vt,{children:"Recording time:"}),r?a.jsx(Yt,{onChange:g,value:d}):a.jsx(fa,{type:"text","aria-label":"Choose time",value:W(d),onChange:()=>{},onFocus:()=>o(!0)}),a.jsx(bt,{children:"Enter the value of the water used:"}),a.jsx(pa,{value:s,onBlur:C,onChange:D}),a.jsxs(xa,{children:[a.jsxs(wt,{children:[t,"ml"]}),a.jsx(ha,{onClick:y,type:"button",children:"Save"})]})]})}),document.getElementById("modal-root"))}const ba=u.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  overflow: scroll;
`,va=u.div`
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
`,ya=u.button`
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
`,wa=u.h2`
  font-weight: 500;
  font-size: 26px;
  line-height: 123%;
  color: #2f2f2f;
  margin-bottom: 24px;
`,At=u.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  color: #2f2f2f;
  margin-bottom: 16px;
`,Ot=u.p`
  font-size: 16px;
  line-height: 125%;
  color: #2f2f2f;
  margin-bottom: 12px;
`,Mt=u.button`
  box-shadow: 0 2px 4px 0 rgba(64, 123, 255, 0.2);
  background-color: #fff;
  border: 1px solid #9ebbff;
  border-radius: 30px;
  padding: 0px;
  width: 44px;
  height: 44px;
  cursor: pointer;
`,St=u.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 133%;
  color: #407bff;
  text-align: center;
`,Aa=u.input`
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
`,Oa=u.input`
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
`,Ma=u.button`
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
`,Sa=u.div`
  background-color: #d7e3ff;
  border-radius: 40px;
  padding: 6px 10px;
  height: 36px;
`,ka=u.div`
  display: flex;
  width: 194px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`,Ca=u.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
  }
`,Ea=u.div`
  display: flex;
  gap: 14px;
  align-items: center;
  margin-bottom: 24px;
  border-radius: 10px;
  padding: 8px 24px;
  width: 256px;
  background-color: #ecf2ff;
`,ja=u.p`
  font-size: 18px;
  line-height: 133%;
  color: #407bff;
`,Pa=u.p`
  font-size: 16px;
  line-height: 125%;
  color: #2f2f2f;
`;Ye.setAppElement("#root");function Da({onClose:e}){const t=X(No),[n,r]=w.useState(t.amount),[o,s]=w.useState(!1),[l,i]=w.useState(t.amount),d=re(),[f,h]=w.useState(t.date),{year:p,month:g}=Ne(),y=(E,k="")=>{let _=new Date(f);switch(k){case"hour":_.setHours(parseInt(E.target.value,10));break;case"minute":_.setMinutes(Math.ceil(parseInt(E.target.value,10)/5)*5);break}h(_)},M=()=>{if(n<1)return Ve.Notify.failure("The amount of water should be no less than 1 ml.");d(sn({_id:t.id,amount:n,date:new Date(f)})).then(()=>d(xe({year:p,month:g}))).then(e)},P=()=>{r(n+50),i(n+50)},C=()=>{if(n-50<0){r(0),i(0);return}r(n-50),i(n-50)},D=()=>{r(l)},S=E=>{const{value:k}=E.target;if(k==="")i("");else{let _=parseInt(k,10);_=isNaN(_)||_<0?0:_,i(_)}},A=E=>{E.target.closest("#selectTimeWrapper")||(s(!1),E.target===E.currentTarget&&e())},W=w.useCallback(()=>{},[e]);w.useEffect(()=>(window.addEventListener("keydown",W),()=>{window.removeEventListener("keydown",W)}),[W]);const T=E=>{const k=new Date(E),_=le=>le.toString().padStart(2,"0");return`${_(k.getHours())}:${_(k.getMinutes())}`};return $e.createPortal(a.jsx(ba,{onClick:A,children:a.jsxs(va,{children:[a.jsx(ya,{onClick:e,children:a.jsx("svg",{width:"24",height:"24",children:a.jsx("use",{href:`${z}#icon-close`})})}),a.jsx(wa,{children:"Edit the entered amount of water"}),a.jsxs(Ea,{children:[" ",a.jsx("svg",{width:"36",height:"36",children:a.jsx("use",{href:`${z}#icon-glass`})}),a.jsxs(ja,{children:[t.amount,"ml"]}),a.jsx(Pa,{children:T(t.date)})]}),a.jsx(At,{children:"Correct entered data:"}),a.jsx(Ot,{children:"Amount of water:"}),a.jsxs(ka,{children:[a.jsx(Mt,{onClick:C,children:a.jsx("svg",{width:"44",height:"44",children:a.jsx("use",{href:`${z}#icon-minus`})})}),a.jsx(Sa,{children:a.jsxs(St,{children:[n,"ml"]})}),a.jsx(Mt,{onClick:P,children:a.jsx("svg",{width:"44",height:"44",children:a.jsx("use",{href:`${z}#icon-plus`})})})]}),a.jsx(Ot,{children:"Recording time:"}),o?a.jsx(Yt,{onChange:y,value:f}):a.jsx(Aa,{type:"text","aria-label":"Choose time",value:T(f),onChange:()=>{},onFocus:()=>s(!0)}),a.jsx(At,{children:"Enter the value of the water used:"}),a.jsx(Oa,{value:l,onBlur:D,onChange:S}),a.jsxs(Ca,{children:[a.jsxs(St,{children:[n,"ml"]}),a.jsx(Ma,{onClick:M,type:"button",children:"Save"})]})]})}),document.getElementById("modal-root"))}const Ta=u.div`
  padding: 0 24px 32px;
`,Na=u.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    flex-direction: row-reverse;
  }
`,kt=u.button`
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
`,Wa=u.p`
  font-size: 18px;
  color: ${({theme:e})=>e.color.primaryBlack};
  line-height: 20px;
  font-weight: 500;

  margin-bottom: 24px;
`,_a=({onClose:e,isShow:t,id:n})=>{const r=re(),{year:o,month:s}=Ne(),l=i=>{r(ln(i)),r(xe({year:o,month:s})),r(jt()),e()};return a.jsx(cn,{onClose:e,isShow:t,title:"Delete Entry",children:a.jsxs(Ta,{children:[a.jsx(Wa,{children:"Are you sure you want to delete the entry?"}),a.jsxs(Na,{children:[a.jsx(kt,{onClick:()=>l(n),children:"Delete"}),a.jsx(kt,{onClick:e,style:{color:"#407BFF"},children:"Cancel"})]})]})})},Fa=u.ul`
  overflow-y: scroll;
  height: 180px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  padding-left: 4px;
  padding-right: 4px;
  gap: 12px;
  list-style: none;
  @media screen and (min-width: 768px) {
    height: 176px;
  }
`,Va=u.h2`
  margin-bottom: 16px;
  color: #2f2f2f;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 32px;
  }
`,Ra=u.button`
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
  transition: color ${({theme:e})=>e.transition.main};
  &:hover {
    color: ${({theme:e})=>e.color.secondaryYellow};
  }
 

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`,La=u.li`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: space-between;
  border-bottom: 1px solid ${({theme:e})=>e.color.secondaryPowderBlue};
`,Ba=u.div`
  display: flex;
  align-items: center;
`,Ha=u.p`
  color: #407bff;
  font-size: 18px;
  line-height: 24px;
  margin-left: 12px;
`,Ia=u.p`
  margin-left: 12px;
  line-height: 24px;
  font-size: 12px;
  color: #2f2f2f;

  @media screen and (min-width: 768px) {
    margin-left: 16px;
  }
`,$a=u.button`
  position: relative;
  margin-right: 18px;
  background-color: transparent;

  padding: 0;
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -5px;
    width: 16px;
    height: 1px;
    background-color: #9ebbff;
    transition: 350ms cubic-bezier(0.23, 1, 0.32, 1);
    opacity: 0;
    transform: translateX(-50%);
  }

  &:is(:hover, :focus)::after {
    opacity: 1;
  }
`,qa=u.button`
  background-color: transparent;
  position: relative;

  padding: 0;
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -5px;
    width: 16px;
    height: 1px;
    background-color: #ef5050;
    transition: 350ms cubic-bezier(0.23, 1, 0.32, 1);
    opacity: 0;
    transform: translateX(-50%);
  }

  &:is(:hover, :focus)::after {
    opacity: 1;
  }
`,za="/goit-group2-react-nodejs/assets/glass-00cf2fb8.svg",Ya="/goit-group2-react-nodejs/assets/edit-7f0c7b6a.svg",Ua="/goit-group2-react-nodejs/assets/delete-6bf30e40.svg",Xa=({id:e,amount:t,date:n,onDelete:r,onEdit:o})=>a.jsxs(La,{children:[a.jsxs(Ba,{children:[a.jsx("img",{src:za,alt:"Icon glass"}),a.jsxs(Ha,{children:[t," ml"]}),a.jsx(Ia,{children:jo(n)})]}),a.jsxs("div",{children:[a.jsx($a,{type:"button",onClick:()=>o({id:e,amount:t,date:n}),children:a.jsx("img",{src:Ya,alt:"Icon glass"})}),a.jsx(qa,{type:"button",onClick:()=>r(e),children:a.jsx("img",{src:Ua,alt:"Icon glass"})})]})]},e),Ga=()=>{const[e,t]=w.useState(!1),[n,r]=w.useState(!1),[o,s]=w.useState(""),l=re(),[i,d]=w.useState(!1),f=X(Ue),h=()=>{t(!1)},p=()=>{t(!0)},g=()=>{r(!1)},y=({amount:C,date:D,id:S})=>{r(!0),l(dn({amount:C,date:D,id:S}))},M=()=>{d(!1)},P=C=>{d(!0),s(C)};return a.jsxs("div",{children:[a.jsxs("div",{children:[a.jsx(Va,{children:"Today"}),a.jsxs(Fa,{children:[f.length>0&&f.map(({_id:C,amount:D,date:S})=>a.jsx(Xa,{id:C,amount:D,date:S,onDelete:P,onEdit:y},C)),n&&a.jsx(Da,{isOpen:n,onClose:g})]}),i&&a.jsx(_a,{isShow:i,onClose:M,id:o})]}),a.jsxs(Ra,{type:"button",onClick:p,children:[a.jsx(aa,{})," Add Water"]}),e&&a.jsx(Ut,{isOpen:e,onClose:h})]})},Qa=Ga;function Ka(e){return zt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"16"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"16",y2:"12"},child:[]}]})(e)}const Ja=u.div`
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
`,Za=u.div`
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
`,ei=u.input`
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
`,ti=u.div`
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
`,ni=u.button`
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

  transition: color ${({theme:e})=>e.transition.main};
  &:hover,
  &:focus {
    box-shadow: ${({theme:e})=>e.boxShadowforButton.hoverButton};
  }
  &:active {
    box-shadow: ${({theme:e})=>e.boxShadowforButton.activeButton};
  }
  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1440px) {
    width: 178px;
  }
`,ri=()=>{const[e,t]=w.useState(!1),[n,r]=w.useState(0),o=X(Ue),{waterRate:s}=X(Et);w.useEffect(()=>{const d=o.reduce((h,p)=>h+p.amount,0),f=Math.round(d/s*100);r(f)},[o,s]);const l=()=>{t(!1)},i=()=>{t(!0)};return a.jsxs(Ja,{children:[a.jsxs(Za,{children:[a.jsx("h2",{children:"Today"}),a.jsx(ei,{value:n,onChange:()=>{},type:"range",min:"0",max:"100",readOnly:!0}),a.jsxs(ti,{children:[a.jsx("p",{children:"0%"}),a.jsx("p",{children:"50%"}),a.jsx("p",{children:"100%"})]})]}),a.jsxs(ni,{onClick:i,type:"button",children:[a.jsx(Ka,{}),"Add Water"]}),e&&a.jsx(Ut,{isOpen:e,onClose:l})]})},oi=ri,ai="/goit-group2-react-nodejs/assets/bottleHomeScreenDesk-630fd92f.png",ii="/goit-group2-react-nodejs/assets/bottleHomeScreenDesk2x@2x-51f4e9e6.png",si="/goit-group2-react-nodejs/assets/bottleHomeScreenTab-2759a74b.png",ci="/goit-group2-react-nodejs/assets/bottleHomeScreenTab@2x-805003a0.png",li="/goit-group2-react-nodejs/assets/bottleHomeScreenMob-fe8938bc.png",di="/goit-group2-react-nodejs/assets/bottleHomeScreenMob2x@2x-9640a1cb.png",ui="data:image/png;base64,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",fi="/goit-group2-react-nodejs/assets/backgroundElementHomeScreenTab-4de5d48f.png",pi=u.div`
  background-size: cover;
  background: url(${ui});
  height: max-content;
  background-repeat: no-repeat;
  min-height: calc(100% - 64px);

  @media screen and (min-width: 768px) {
    background: url(${fi});
    min-height: calc(100% - 80px);
  }

  @media screen and (min-width: 1440px) {
    background: url(${un});
    min-height: calc(100% - 72px);
  }
`,hi=u.div`
  margin-bottom: 40px;
  margin-top: 20px;
  background-size: 280px 208px;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${li});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 440px;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${di});
  }

  @media screen and (min-width: 768px) {
    background-size: 518px 386px;
    background-position: calc(50% + 9px) 8px;
    height: 492px;
    background-image: url(${si});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background: url(${ci});
      background-size: 518px 386px;
      background-repeat: no-repeat;
    }
  }

  @media screen and (min-width: 1440px) {
    background-size: 738px 548px;
    background-position: calc(50% + 10px) 46px;
    height: 680px;
    background-image: url(${ai});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${ii});
    }
  }
`,mi=u.div`
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
`,gi=u.div`
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
`;function vi(){const e=re();return w.useEffect(()=>{e(jt())},[e]),a.jsx(pi,{children:a.jsxs(mi,{children:[a.jsxs(hi,{children:[a.jsx(To,{}),a.jsx(oi,{})]}),a.jsxs(gi,{children:[a.jsx(Qa,{}),a.jsx(Ko,{})]})]})})}export{vi as default};
