import{n as u,r as w,p as Mt,g as Kt,e as Jt,f as Zt,a as te,R as Le,j as a,N as qe,h as en,i as J,k as St,s as ze,b as tn,l as nn,L as rn,m as Q,o as on,q as an,B as sn,t as cn,v as ln,w as dn}from"./index-e45b41cf.js";import{b as un}from"./bg_element_des@1x-1805b66c.js";const fn=u.div`
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
`;var We={exports:{}},Z={},_e={exports:{}},H={},Fe={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=h;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var n="none",r="contents",o=/input|select|textarea|button|object|iframe/;function s(p,g){return g.getPropertyValue("overflow")!=="visible"||p.scrollWidth<=0&&p.scrollHeight<=0}function l(p){var g=p.offsetWidth<=0&&p.offsetHeight<=0;if(g&&!p.innerHTML)return!0;try{var y=window.getComputedStyle(p),O=y.getPropertyValue("display");return g?O!==r&&s(p,y):O===n}catch{return console.warn("Failed to inspect element style"),!1}}function i(p){for(var g=p,y=p.getRootNode&&p.getRootNode();g&&g!==document.body;){if(y&&g===y&&(g=y.host.parentNode),l(g))return!1;g=g.parentNode}return!0}function d(p,g){var y=p.nodeName.toLowerCase(),O=o.test(y)&&!p.disabled||y==="a"&&p.href||g;return O&&i(p)}function f(p){var g=p.getAttribute("tabindex");g===null&&(g=void 0);var y=isNaN(g);return(y||g>=0)&&d(p,!y)}function h(p){var g=[].slice.call(p.querySelectorAll("*"),0).reduce(function(y,O){return y.concat(O.shadowRoot?h(O.shadowRoot):[O])},[]);return g.filter(f)}e.exports=t.default})(Fe,Fe.exports);var kt=Fe.exports;Object.defineProperty(H,"__esModule",{value:!0});H.resetState=vn;H.log=yn;H.handleBlur=ue;H.handleFocus=fe;H.markForFocusLater=wn;H.returnFocus=An;H.popWithoutFocus=On;H.setupScopedFocus=Mn;H.teardownScopedFocus=Sn;var gn=kt,xn=bn(gn);function bn(e){return e&&e.__esModule?e:{default:e}}var oe=[],re=null,Ve=!1;function vn(){oe=[]}function yn(){}function ue(){Ve=!0}function fe(){if(Ve){if(Ve=!1,!re)return;setTimeout(function(){if(!re.contains(document.activeElement)){var e=(0,xn.default)(re)[0]||re;e.focus()}},0)}}function wn(){oe.push(document.activeElement)}function An(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=null;try{oe.length!==0&&(t=oe.pop(),t.focus({preventScroll:e}));return}catch{console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}}function On(){oe.length>0&&oe.pop()}function Mn(e){re=e,window.addEventListener?(window.addEventListener("blur",ue,!1),document.addEventListener("focus",fe,!0)):(window.attachEvent("onBlur",ue),document.attachEvent("onFocus",fe))}function Sn(){re=null,window.addEventListener?(window.removeEventListener("blur",ue),document.removeEventListener("focus",fe)):(window.detachEvent("onBlur",ue),document.detachEvent("onFocus",fe))}var Re={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=l;var n=kt,r=o(n);function o(i){return i&&i.__esModule?i:{default:i}}function s(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return i.activeElement.shadowRoot?s(i.activeElement.shadowRoot):i.activeElement}function l(i,d){var f=(0,r.default)(i);if(!f.length){d.preventDefault();return}var h=void 0,p=d.shiftKey,g=f[0],y=f[f.length-1],O=s();if(i===O){if(!p)return;h=y}if(y===O&&!p&&(h=g),g===O&&p&&(h=y),h){d.preventDefault(),h.focus();return}var j=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),D=j!=null&&j[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(D){var S=f.indexOf(O);if(S>-1&&(S+=p?-1:1),h=f[S],typeof h>"u"){d.preventDefault(),h=p?y:g,h.focus();return}d.preventDefault(),h.focus()}}e.exports=t.default})(Re,Re.exports);var kn=Re.exports,B={},Cn=function(){},En=Cn,L={},Ct={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(e){(function(){var t=!!(typeof window<"u"&&window.document&&window.document.createElement),n={canUseDOM:t,canUseWorkers:typeof Worker<"u",canUseEventListeners:t&&!!(window.addEventListener||window.attachEvent),canUseViewport:t&&!!window.screen};e.exports?e.exports=n:window.ExecutionEnvironment=n})()})(Ct);var jn=Ct.exports;Object.defineProperty(L,"__esModule",{value:!0});L.canUseDOM=L.SafeNodeList=L.SafeHTMLCollection=void 0;var Pn=jn,Dn=Tn(Pn);function Tn(e){return e&&e.__esModule?e:{default:e}}var Ce=Dn.default,Nn=Ce.canUseDOM?window.HTMLElement:{};L.SafeHTMLCollection=Ce.canUseDOM?window.HTMLCollection:{};L.SafeNodeList=Ce.canUseDOM?window.NodeList:{};L.canUseDOM=Ce.canUseDOM;L.default=Nn;Object.defineProperty(B,"__esModule",{value:!0});B.resetState=Rn;B.log=Ln;B.assertNodeList=Et;B.setElement=Hn;B.validateElement=He;B.hide=Bn;B.show=In;B.documentNotReadyOrSSRTesting=qn;var Wn=En,_n=Vn(Wn),Fn=L;function Vn(e){return e&&e.__esModule?e:{default:e}}var V=null;function Rn(){V&&(V.removeAttribute?V.removeAttribute("aria-hidden"):V.length!=null?V.forEach(function(e){return e.removeAttribute("aria-hidden")}):document.querySelectorAll(V).forEach(function(e){return e.removeAttribute("aria-hidden")})),V=null}function Ln(){}function Et(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function Hn(e){var t=e;if(typeof t=="string"&&Fn.canUseDOM){var n=document.querySelectorAll(t);Et(n,t),t=n}return V=t||V,V}function He(e){var t=e||V;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,_n.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function Bn(e){var t=!0,n=!1,r=void 0;try{for(var o=He(e)[Symbol.iterator](),s;!(t=(s=o.next()).done);t=!0){var l=s.value;l.setAttribute("aria-hidden","true")}}catch(i){n=!0,r=i}finally{try{!t&&o.return&&o.return()}finally{if(n)throw r}}}function In(e){var t=!0,n=!1,r=void 0;try{for(var o=He(e)[Symbol.iterator](),s;!(t=(s=o.next()).done);t=!0){var l=s.value;l.removeAttribute("aria-hidden")}}catch(i){n=!0,r=i}finally{try{!t&&o.return&&o.return()}finally{if(n)throw r}}}function qn(){V=null}var ae={};Object.defineProperty(ae,"__esModule",{value:!0});ae.resetState=zn;ae.log=Yn;var le={},de={};function Ye(e,t){e.classList.remove(t)}function zn(){var e=document.getElementsByTagName("html")[0];for(var t in le)Ye(e,le[t]);var n=document.body;for(var r in de)Ye(n,de[r]);le={},de={}}function Yn(){}var $n=function(t,n){return t[n]||(t[n]=0),t[n]+=1,n},Un=function(t,n){return t[n]&&(t[n]-=1),n},Xn=function(t,n,r){r.forEach(function(o){$n(n,o),t.add(o)})},Gn=function(t,n,r){r.forEach(function(o){Un(n,o),n[o]===0&&t.remove(o)})};ae.add=function(t,n){return Xn(t.classList,t.nodeName.toLowerCase()=="html"?le:de,n.split(" "))};ae.remove=function(t,n){return Gn(t.classList,t.nodeName.toLowerCase()=="html"?le:de,n.split(" "))};var ie={};Object.defineProperty(ie,"__esModule",{value:!0});ie.log=Kn;ie.resetState=Jn;function Qn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var jt=function e(){var t=this;Qn(this,e),this.register=function(n){t.openInstances.indexOf(n)===-1&&(t.openInstances.push(n),t.emit("register"))},this.deregister=function(n){var r=t.openInstances.indexOf(n);r!==-1&&(t.openInstances.splice(r,1),t.emit("deregister"))},this.subscribe=function(n){t.subscribers.push(n)},this.emit=function(n){t.subscribers.forEach(function(r){return r(n,t.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},we=new jt;function Kn(){console.log("portalOpenInstances ----------"),console.log(we.openInstances.length),we.openInstances.forEach(function(e){return console.log(e)}),console.log("end portalOpenInstances ----------")}function Jn(){we=new jt}ie.default=we;var Be={};Object.defineProperty(Be,"__esModule",{value:!0});Be.resetState=nr;Be.log=rr;var Zn=ie,er=tr(Zn);function tr(e){return e&&e.__esModule?e:{default:e}}var _=void 0,R=void 0,K=[];function nr(){for(var e=[_,R],t=0;t<e.length;t++){var n=e[t];n&&n.parentNode&&n.parentNode.removeChild(n)}_=R=null,K=[]}function rr(){console.log("bodyTrap ----------"),console.log(K.length);for(var e=[_,R],t=0;t<e.length;t++){var n=e[t],r=n||{};console.log(r.nodeName,r.className,r.id)}console.log("edn bodyTrap ----------")}function $e(){K.length!==0&&K[K.length-1].focusContent()}function or(e,t){!_&&!R&&(_=document.createElement("div"),_.setAttribute("data-react-modal-body-trap",""),_.style.position="absolute",_.style.opacity="0",_.setAttribute("tabindex","0"),_.addEventListener("focus",$e),R=_.cloneNode(),R.addEventListener("focus",$e)),K=t,K.length>0?(document.body.firstChild!==_&&document.body.insertBefore(_,document.body.firstChild),document.body.lastChild!==R&&document.body.appendChild(R)):(_.parentElement&&_.parentElement.removeChild(_),R.parentElement&&R.parentElement.removeChild(R))}er.default.subscribe(or);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(v){for(var b=1;b<arguments.length;b++){var P=arguments[b];for(var c in P)Object.prototype.hasOwnProperty.call(P,c)&&(v[c]=P[c])}return v},r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(v){return typeof v}:function(v){return v&&typeof Symbol=="function"&&v.constructor===Symbol&&v!==Symbol.prototype?"symbol":typeof v},o=function(){function v(b,P){for(var c=0;c<P.length;c++){var m=P[c];m.enumerable=m.enumerable||!1,m.configurable=!0,"value"in m&&(m.writable=!0),Object.defineProperty(b,m.key,m)}}return function(b,P,c){return P&&v(b.prototype,P),c&&v(b,c),b}}(),s=w,l=Mt,i=E(l),d=H,f=k(d),h=kn,p=E(h),g=B,y=k(g),O=ae,j=k(O),D=L,S=E(D),C=ie,A=E(C);function k(v){if(v&&v.__esModule)return v;var b={};if(v!=null)for(var P in v)Object.prototype.hasOwnProperty.call(v,P)&&(b[P]=v[P]);return b.default=v,b}function E(v){return v&&v.__esModule?v:{default:v}}function N(v,b){if(!(v instanceof b))throw new TypeError("Cannot call a class as a function")}function je(v,b){if(!v)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&(typeof b=="object"||typeof b=="function")?b:v}function Yt(v,b){if(typeof b!="function"&&b!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof b);v.prototype=Object.create(b&&b.prototype,{constructor:{value:v,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(v,b):v.__proto__=b)}var Pe={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},$t=function(b){return b.code==="Tab"||b.keyCode===9},Ut=function(b){return b.code==="Escape"||b.keyCode===27},ge=0,De=function(v){Yt(b,v);function b(P){N(this,b);var c=je(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,P));return c.setOverlayRef=function(m){c.overlay=m,c.props.overlayRef&&c.props.overlayRef(m)},c.setContentRef=function(m){c.content=m,c.props.contentRef&&c.props.contentRef(m)},c.afterClose=function(){var m=c.props,W=m.appElement,F=m.ariaHideApp,T=m.htmlOpenClassName,$=m.bodyOpenClassName,U=m.parentSelector,xe=U&&U().ownerDocument||document;$&&j.remove(xe.body,$),T&&j.remove(xe.getElementsByTagName("html")[0],T),F&&ge>0&&(ge-=1,ge===0&&y.show(W)),c.props.shouldFocusAfterRender&&(c.props.shouldReturnFocusAfterClose?(f.returnFocus(c.props.preventScroll),f.teardownScopedFocus()):f.popWithoutFocus()),c.props.onAfterClose&&c.props.onAfterClose(),A.default.deregister(c)},c.open=function(){c.beforeOpen(),c.state.afterOpen&&c.state.beforeClose?(clearTimeout(c.closeTimer),c.setState({beforeClose:!1})):(c.props.shouldFocusAfterRender&&(f.setupScopedFocus(c.node),f.markForFocusLater()),c.setState({isOpen:!0},function(){c.openAnimationFrame=requestAnimationFrame(function(){c.setState({afterOpen:!0}),c.props.isOpen&&c.props.onAfterOpen&&c.props.onAfterOpen({overlayEl:c.overlay,contentEl:c.content})})}))},c.close=function(){c.props.closeTimeoutMS>0?c.closeWithTimeout():c.closeWithoutTimeout()},c.focusContent=function(){return c.content&&!c.contentHasFocus()&&c.content.focus({preventScroll:!0})},c.closeWithTimeout=function(){var m=Date.now()+c.props.closeTimeoutMS;c.setState({beforeClose:!0,closesAt:m},function(){c.closeTimer=setTimeout(c.closeWithoutTimeout,c.state.closesAt-Date.now())})},c.closeWithoutTimeout=function(){c.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},c.afterClose)},c.handleKeyDown=function(m){$t(m)&&(0,p.default)(c.content,m),c.props.shouldCloseOnEsc&&Ut(m)&&(m.stopPropagation(),c.requestClose(m))},c.handleOverlayOnClick=function(m){c.shouldClose===null&&(c.shouldClose=!0),c.shouldClose&&c.props.shouldCloseOnOverlayClick&&(c.ownerHandlesClose()?c.requestClose(m):c.focusContent()),c.shouldClose=null},c.handleContentOnMouseUp=function(){c.shouldClose=!1},c.handleOverlayOnMouseDown=function(m){!c.props.shouldCloseOnOverlayClick&&m.target==c.overlay&&m.preventDefault()},c.handleContentOnClick=function(){c.shouldClose=!1},c.handleContentOnMouseDown=function(){c.shouldClose=!1},c.requestClose=function(m){return c.ownerHandlesClose()&&c.props.onRequestClose(m)},c.ownerHandlesClose=function(){return c.props.onRequestClose},c.shouldBeClosed=function(){return!c.state.isOpen&&!c.state.beforeClose},c.contentHasFocus=function(){return document.activeElement===c.content||c.content.contains(document.activeElement)},c.buildClassName=function(m,W){var F=(typeof W>"u"?"undefined":r(W))==="object"?W:{base:Pe[m],afterOpen:Pe[m]+"--after-open",beforeClose:Pe[m]+"--before-close"},T=F.base;return c.state.afterOpen&&(T=T+" "+F.afterOpen),c.state.beforeClose&&(T=T+" "+F.beforeClose),typeof W=="string"&&W?T+" "+W:T},c.attributesFromObject=function(m,W){return Object.keys(W).reduce(function(F,T){return F[m+"-"+T]=W[T],F},{})},c.state={afterOpen:!1,beforeClose:!1},c.shouldClose=null,c.moveFromContentToOverlay=null,c}return o(b,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(c,m){this.props.isOpen&&!c.isOpen?this.open():!this.props.isOpen&&c.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!m.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var c=this.props,m=c.appElement,W=c.ariaHideApp,F=c.htmlOpenClassName,T=c.bodyOpenClassName,$=c.parentSelector,U=$&&$().ownerDocument||document;T&&j.add(U.body,T),F&&j.add(U.getElementsByTagName("html")[0],F),W&&(ge+=1,y.hide(m)),A.default.register(this)}},{key:"render",value:function(){var c=this.props,m=c.id,W=c.className,F=c.overlayClassName,T=c.defaultStyles,$=c.children,U=W?{}:T.content,xe=F?{}:T.overlay;if(this.shouldBeClosed())return null;var Xt={ref:this.setOverlayRef,className:this.buildClassName("overlay",F),style:n({},xe,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},Gt=n({id:m,ref:this.setContentRef,style:n({},U,this.props.style.content),className:this.buildClassName("content",W),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",n({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),Qt=this.props.contentElement(Gt,$);return this.props.overlayElement(Xt,Qt)}}]),b}(s.Component);De.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},De.propTypes={isOpen:i.default.bool.isRequired,defaultStyles:i.default.shape({content:i.default.object,overlay:i.default.object}),style:i.default.shape({content:i.default.object,overlay:i.default.object}),className:i.default.oneOfType([i.default.string,i.default.object]),overlayClassName:i.default.oneOfType([i.default.string,i.default.object]),parentSelector:i.default.func,bodyOpenClassName:i.default.string,htmlOpenClassName:i.default.string,ariaHideApp:i.default.bool,appElement:i.default.oneOfType([i.default.instanceOf(S.default),i.default.instanceOf(D.SafeHTMLCollection),i.default.instanceOf(D.SafeNodeList),i.default.arrayOf(i.default.instanceOf(S.default))]),onAfterOpen:i.default.func,onAfterClose:i.default.func,onRequestClose:i.default.func,closeTimeoutMS:i.default.number,shouldFocusAfterRender:i.default.bool,shouldCloseOnOverlayClick:i.default.bool,shouldReturnFocusAfterClose:i.default.bool,preventScroll:i.default.bool,role:i.default.string,contentLabel:i.default.string,aria:i.default.object,data:i.default.object,children:i.default.node,shouldCloseOnEsc:i.default.bool,overlayRef:i.default.func,contentRef:i.default.func,id:i.default.string,overlayElement:i.default.func,contentElement:i.default.func,testId:i.default.string},t.default=De,e.exports=t.default})(_e,_e.exports);var ar=_e.exports;function Pt(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);e!=null&&this.setState(e)}function Dt(e){function t(n){var r=this.constructor.getDerivedStateFromProps(e,n);return r??null}this.setState(t.bind(this))}function Tt(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}Pt.__suppressDeprecationWarning=!0;Dt.__suppressDeprecationWarning=!0;Tt.__suppressDeprecationWarning=!0;function ir(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if(typeof e.getDerivedStateFromProps!="function"&&typeof t.getSnapshotBeforeUpdate!="function")return e;var n=null,r=null,o=null;if(typeof t.componentWillMount=="function"?n="componentWillMount":typeof t.UNSAFE_componentWillMount=="function"&&(n="UNSAFE_componentWillMount"),typeof t.componentWillReceiveProps=="function"?r="componentWillReceiveProps":typeof t.UNSAFE_componentWillReceiveProps=="function"&&(r="UNSAFE_componentWillReceiveProps"),typeof t.componentWillUpdate=="function"?o="componentWillUpdate":typeof t.UNSAFE_componentWillUpdate=="function"&&(o="UNSAFE_componentWillUpdate"),n!==null||r!==null||o!==null){var s=e.displayName||e.name,l=typeof e.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+s+" uses "+l+" but also contains the following legacy lifecycles:"+(n!==null?`
  `+n:"")+(r!==null?`
  `+r:"")+(o!==null?`
  `+o:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof e.getDerivedStateFromProps=="function"&&(t.componentWillMount=Pt,t.componentWillReceiveProps=Dt),typeof t.getSnapshotBeforeUpdate=="function"){if(typeof t.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=Tt;var i=t.componentDidUpdate;t.componentDidUpdate=function(f,h,p){var g=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:p;i.call(this,f,h,g)}}return e}const sr=Object.freeze(Object.defineProperty({__proto__:null,polyfill:ir},Symbol.toStringTag,{value:"Module"})),cr=Kt(sr);Object.defineProperty(Z,"__esModule",{value:!0});Z.bodyOpenClassName=Z.portalClassName=void 0;var Ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},lr=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Nt=w,Ae=he(Nt),dr=Jt,Oe=he(dr),ur=Mt,x=he(ur),fr=ar,Xe=he(fr),pr=B,hr=gr(pr),Y=L,Ge=he(Y),mr=cr;function gr(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function he(e){return e&&e.__esModule?e:{default:e}}function xr(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Qe(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function br(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var vr=Z.portalClassName="ReactModalPortal",yr=Z.bodyOpenClassName="ReactModal__Body--open",X=Y.canUseDOM&&Oe.default.createPortal!==void 0,Ke=function(t){return document.createElement(t)},Je=function(){return X?Oe.default.createPortal:Oe.default.unstable_renderSubtreeIntoContainer};function be(e){return e()}var me=function(e){br(t,e);function t(){var n,r,o,s;xr(this,t);for(var l=arguments.length,i=Array(l),d=0;d<l;d++)i[d]=arguments[d];return s=(r=(o=Qe(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(i))),o),o.removePortal=function(){!X&&Oe.default.unmountComponentAtNode(o.node);var f=be(o.props.parentSelector);f&&f.contains(o.node)?f.removeChild(o.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},o.portalRef=function(f){o.portal=f},o.renderPortal=function(f){var h=Je(),p=h(o,Ae.default.createElement(Xe.default,Ue({defaultStyles:t.defaultStyles},f)),o.node);o.portalRef(p)},r),Qe(o,s)}return lr(t,[{key:"componentDidMount",value:function(){if(Y.canUseDOM){X||(this.node=Ke("div")),this.node.className=this.props.portalClassName;var r=be(this.props.parentSelector);r.appendChild(this.node),!X&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(r){var o=be(r.parentSelector),s=be(this.props.parentSelector);return{prevParent:o,nextParent:s}}},{key:"componentDidUpdate",value:function(r,o,s){if(Y.canUseDOM){var l=this.props,i=l.isOpen,d=l.portalClassName;r.portalClassName!==d&&(this.node.className=d);var f=s.prevParent,h=s.nextParent;h!==f&&(f.removeChild(this.node),h.appendChild(this.node)),!(!r.isOpen&&!i)&&!X&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!Y.canUseDOM||!this.node||!this.portal)){var r=this.portal.state,o=Date.now(),s=r.isOpen&&this.props.closeTimeoutMS&&(r.closesAt||o+this.props.closeTimeoutMS);s?(r.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,s-o)):this.removePortal()}}},{key:"render",value:function(){if(!Y.canUseDOM||!X)return null;!this.node&&X&&(this.node=Ke("div"));var r=Je();return r(Ae.default.createElement(Xe.default,Ue({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(r){hr.setElement(r)}}]),t}(Nt.Component);me.propTypes={isOpen:x.default.bool.isRequired,style:x.default.shape({content:x.default.object,overlay:x.default.object}),portalClassName:x.default.string,bodyOpenClassName:x.default.string,htmlOpenClassName:x.default.string,className:x.default.oneOfType([x.default.string,x.default.shape({base:x.default.string.isRequired,afterOpen:x.default.string.isRequired,beforeClose:x.default.string.isRequired})]),overlayClassName:x.default.oneOfType([x.default.string,x.default.shape({base:x.default.string.isRequired,afterOpen:x.default.string.isRequired,beforeClose:x.default.string.isRequired})]),appElement:x.default.oneOfType([x.default.instanceOf(Ge.default),x.default.instanceOf(Y.SafeHTMLCollection),x.default.instanceOf(Y.SafeNodeList),x.default.arrayOf(x.default.instanceOf(Ge.default))]),onAfterOpen:x.default.func,onRequestClose:x.default.func,closeTimeoutMS:x.default.number,ariaHideApp:x.default.bool,shouldFocusAfterRender:x.default.bool,shouldCloseOnOverlayClick:x.default.bool,shouldReturnFocusAfterClose:x.default.bool,preventScroll:x.default.bool,parentSelector:x.default.func,aria:x.default.object,data:x.default.object,role:x.default.string,contentLabel:x.default.string,shouldCloseOnEsc:x.default.bool,overlayRef:x.default.func,contentRef:x.default.func,id:x.default.string,overlayElement:x.default.func,contentElement:x.default.func};me.defaultProps={isOpen:!1,portalClassName:vr,bodyOpenClassName:yr,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(t,n){return Ae.default.createElement("div",t,n)},contentElement:function(t,n){return Ae.default.createElement("div",t,n)}};me.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,mr.polyfill)(me);Z.default=me;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=Z,r=o(n);function o(s){return s&&s.__esModule?s:{default:s}}t.default=r.default,e.exports=t.default})(We,We.exports);var wr=We.exports;const Ie=Zt(wr);Ie.setAppElement("#root");const Ar=({onClose:e})=>{const[t,n]=w.useState(0),[r,o]=w.useState(0),[s,l]=w.useState(0),[i,d]=w.useState(!0),[f,h]=w.useState(0),p=te(),g=()=>{d(!i)},y=S=>{n(Number(S.target.value))},O=S=>{o(Number(S.target.value))};w.useEffect(()=>{l(i?Math.ceil((t*.03+r*.4)*100)/100<2?2:Math.ceil((t*.03+r*.4)*100)/100:Math.ceil((t*.04+r*.6)*100)/100<2?2:Math.ceil((t*.04+r*.6)*100)/100)},[i,t,r]);const j=S=>{h(Number(S.target.value))},D=S=>{try{if(S.preventDefault(),f<2)return qe.Notify.failure("The required amount of water in liters per day: 2L");if(f>15)return qe.Notify.failure("The maximum amount of water in liters per day: 15L");p(en(f)),e()}catch(C){console.error("error",C)}};return w.useEffect(()=>{const S=C=>{C.key==="Escape"&&e()};window.addEventListener("keydown",S)},[e]),Le.createPortal(a.jsx(hn,{onClick:e,children:a.jsxs(mn,{onClick:S=>S.stopPropagation(),children:[a.jsxs("div",{className:"headerDaily",children:[a.jsx("h2",{children:"My daily norma"}),a.jsx("button",{type:"button",className:"closeButton",onClick:e,children:a.jsx("svg",{width:"24",height:"24",children:a.jsx("use",{href:"/goit-group2-react-nodejs/src/assets/images/sprite/horodiukIcons.svg#icon-close"})})})]}),a.jsxs("div",{className:"formulaContainer",children:[a.jsxs("div",{className:"formula",children:[a.jsxs("div",{className:"formulaText",children:[a.jsx("p",{children:"For girl:"}),a.jsx("span",{className:"formulaSpan",children:"V=(M*0,03) + (T*0,4)"})]}),a.jsxs("div",{className:"formulaText",children:[a.jsx("p",{children:"For man:"}),a.jsx("span",{className:"formulaSpan",children:"V=(M*0,04) + (T*0,6)"})]})]}),a.jsxs("p",{className:"formulaDescription",children:[a.jsx("span",{className:"formulaStar",children:"*"})," V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]})]}),a.jsxs("form",{onSubmit:D,children:[a.jsx("h3",{children:"Calculate your rate:"}),a.jsxs("div",{className:"checkBox",children:[a.jsxs("label",{children:[a.jsx("input",{type:"radio",name:"gender",value:"woman",checked:i,onChange:g})," For woman"]}),a.jsxs("label",{children:[a.jsx("input",{type:"radio",name:"gender",value:"man",checked:!i,onChange:g})," For man"]})]}),a.jsx("label",{className:"inputDescription",children:"Your weight in kilograms:"}),a.jsx("input",{className:"inputForm",placeholder:"0",onChange:y}),a.jsx("label",{className:"inputDescription",children:"The time of active participation in sports or other activities with a high physical. load in hours:"}),a.jsx("input",{className:"inputForm",placeholder:"0",onChange:O}),a.jsxs("div",{className:"requiredAmount",children:[a.jsx("p",{className:"amountDescription",children:"The required amount of water in liters per day:"}),a.jsxs("span",{className:"amount",children:[s," L"]})]}),a.jsx("h3",{children:"Write down how much water you will drink:"}),a.jsx("input",{className:"inputForm",placeholder:"0",onChange:j}),a.jsx("button",{className:"saveButton",type:"submit",children:"Save"})]})]})}),document.getElementById("modal-root"))},Or=()=>{const[e,t]=w.useState(!1),{waterRate:n}=J(St),r=n/1e3,o=()=>{t(!1)},s=()=>{t(!0)};return a.jsx("div",{children:a.jsxs(fn,{children:[a.jsx("h2",{children:"My daily norma:"}),a.jsxs(pn,{children:[a.jsxs("p",{children:[" ",r," L"]}),a.jsx("button",{type:"button",onClick:s,children:"Edit"}),e&&a.jsx(Ar,{isOpen:e,onClose:o})]})]})})},Mr=Or,Wt=e=>e.water.notes,Sr=e=>e.water.currentNote,kr=e=>e.water.monthNotes,Cr=e=>e.water.isLoading,Ze=new Date,et=[Ze.getFullYear(),Ze.getMonth()+1],tt=(e=et,t)=>{const[n,r]=e;switch(t){case"forward":return r>=12?[n+1,1]:[n,r+1];case"back":return r<=1?[n-1,12]:[n,r-1];default:return et}},Er=u.div`
  width: 100%;
  margin-top: 15px;
  height: 490px;

  @media screen and (min-width: 768px) {
    height: 308px;
  }
`,jr=u.h3`
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
`,Pr=u.div`
  display: flex;
  justify-content: space-between;
`,Dr=u.div`
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
`,Tr=u.ul`
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
`,Nr=u.li`
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
`,_t=["January","February","March","April","May","June","July","August","September","October","November","December"],Wr=e=>_t[e-1],_r=e=>{const t=w.useRef(null);return w.useEffect(()=>{const n=r=>{t.current&&!t.current.contains(r.target)&&e()};return document.addEventListener("click",n,!0),()=>{document.removeEventListener("click",n,!0)}},[e]),t},ve={sm:68,md:74},Fr={sm:5,md:10},ye={md:69,xl:56},Te=(e,t)=>{const n=e/Fr[t],r=Math.floor(n);switch(t){case"sm":return r===n?parseInt(n-1)*ve[t]-12:parseInt(n)*ve[t]-12;case"md":return r===n?parseInt(n-1)*ve[t]:parseInt(n)*ve[t];default:return 0}},nt=(e,t)=>{const[n,r]=e%10===0?[9,!1]:[e%10-1,e%10<5];return r?n*ye[t]+ye[t]/4:n*ye[t]-280+ye[t]/4},Vr=u.div`
  position: absolute;
  left: 50%;
  top: -194px;
  transform: translate(
    -50%,
    ${({$dayNumber:e})=>`${Te(e,"sm")}px`}
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
      ${({$dayNumber:e})=>`${nt(e,"md")}px`},
      ${({$dayNumber:e})=>`${Te(e,"md")}px`}
    );
  }

  @media screen and (min-width: 1440px) {
    transform: translate(
      ${({$dayNumber:e})=>`${nt(e,"xl")}px`},
      ${({$dayNumber:e})=>`${Te(e,"md")}px`}
    );
  }
`,Rr=u.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  p {
    color: ${({theme:e})=>e.color.primaryAccent};
    font-size: 16px;
    line-height: 1.25;
  }
`,Lr=({currentDay:e,close:t})=>{const n=_r(t),{date:r,percent:o,quantity:s,waterRate:l}=e,i={dailyNorma:l??0,percent:o??0},d=_t[(r==null?void 0:r.month)-1],f=i.dailyNorma/1e3;return a.jsxs(Vr,{ref:n,$dayNumber:r.day,children:[a.jsx(Rr,{children:a.jsxs("p",{children:[a.jsxs("span",{children:[r==null?void 0:r.day,", "]}),a.jsx("span",{children:d})]})}),a.jsxs("p",{children:["Daily norma : ",a.jsxs("span",{children:[f,"L"]})]}),a.jsxs("p",{children:["Fulfillment of the daily norm : ",a.jsxs("span",{children:[parseInt(i.percent),"%"]})]}),a.jsxs("p",{children:["How many servings of water : ",a.jsx("span",{children:s??0})]})]})},Hr=({monthData:e})=>{const[t,n]=w.useState(null),r=w.useCallback(()=>{n(null)},[]);return a.jsxs(Tr,{children:[t&&a.jsx(Lr,{currentDay:t,close:r}),e.map(o=>a.jsxs(Nr,{onClick:()=>n(o),$percentage:o.percent,$isActive:(t==null?void 0:t.date.day)===o.date.day,children:[a.jsx("span",{className:"day",children:o.date.day}),a.jsxs("span",{className:"percentage",children:[parseInt(o.percent)||0,"%"]})]},o.date.day))]})},Br=({changeDirection:e,month:t,year:n})=>{function r(o,s){const l=new Date,i=l.getFullYear(),d=l.getMonth()+1;return Number(s)>i||Number(s)===i&&Number(o)>=d}return a.jsxs(Pr,{children:[a.jsx(jr,{children:"Month"}),a.jsxs(Dr,{children:[a.jsx("button",{className:"arrow arrow-left",onClick:()=>e("back"),type:"button",children:a.jsx("svg",{fill:"#407BFF",width:"14",height:"14",children:a.jsx("use",{href:`${ze}#icon-arrow-left`})})}),a.jsxs("p",{className:"month__name",children:[Wr(t),", ",n]}),a.jsx("button",{className:`arrow arrow-right ${r(t,n)?"arrow-right-disabled":""}`,onClick:()=>e("forward"),type:"button",disabled:r(t,n),children:a.jsx("svg",{fill:`${r(t,n)?"#9ebbff":"#407BFF"}`,width:"14",height:"14",transform:"rotate(180)",children:a.jsx("use",{href:`${ze}#icon-arrow-left`})})})]})]})},Ir=()=>{var d;const e=J(kr),t=J(Cr),[n,r]=tn(),o=te();let[s,l]=((d=n.get("date"))==null?void 0:d.split("_"))??tt();w.useEffect(()=>{o(nn({year:s.toString(),month:l.toString()}))},[o,s,l]);const i=w.useCallback(f=>{const h=tt([+s,+l],f);r({date:h.join("_")})},[r,s,l]);return a.jsxs(Er,{children:[a.jsx(Br,{changeDirection:i,month:l,year:s}),t?a.jsx(rn,{}):a.jsx(Hr,{monthData:e})]})},qr=Ir;var Ft={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},rt=Q.createContext&&Q.createContext(Ft),zr=["attr","size","title"];function Yr(e,t){if(e==null)return{};var n=$r(e,t),r,o;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function $r(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,s;for(s=0;s<r.length;s++)o=r[s],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Me(){return Me=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Me.apply(this,arguments)}function ot(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Se(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ot(Object(n),!0).forEach(function(r){Ur(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ot(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ur(e,t,n){return t=Xr(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Xr(e){var t=Gr(e,"string");return typeof t=="symbol"?t:String(t)}function Gr(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Vt(e){return e&&e.map((t,n)=>Q.createElement(t.tag,Se({key:n},t.attr),Vt(t.child)))}function Rt(e){return t=>Q.createElement(Qr,Me({attr:Se({},e.attr)},t),Vt(e.child))}function Qr(e){var t=n=>{var{attr:r,size:o,title:s}=e,l=Yr(e,zr),i=o||n.size||"1em",d;return n.className&&(d=n.className),e.className&&(d=(d?d+" ":"")+e.className),Q.createElement("svg",Me({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:d,style:Se(Se({color:e.color||n.color},n.style),e.style),height:i,width:i,xmlns:"http://www.w3.org/2000/svg"}),s&&Q.createElement("title",null,s),e.children)};return rt!==void 0?Q.createElement(rt.Consumer,null,n=>t(n)):t(Ft)}function Kr(e){return Rt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"},child:[]}]})(e)}const Jr="/goit-group2-react-nodejs/assets/glass-00cf2fb8.svg",Zr="/goit-group2-react-nodejs/assets/edit-7f0c7b6a.svg",eo="/goit-group2-react-nodejs/assets/delete-6bf30e40.svg",q="/goit-group2-react-nodejs/assets/horodiukIcons-b8c45607.svg",at=u.select`
  margin-bottom: 24px;
  border: 1px solid #d7e3ff;
  border-radius: 6px;
  padding: 12px 10px;
  width: 90px;
  height: 44px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`,to=u.div``,it=u.div`
  position: relative;
  display: inline-block;
`,st=u.svg`
  position: absolute;
  top: 10px;
  right: 6px;
  pointer-events: none;
`;function Lt({onChange:e,value:t}){const n=Array.from(new Array(24),(d,f)=>f),r=[0,5,10,15,20,25,30,35,40,45,50,55],o=new Date(t);let s=o.getHours(),l=o.getMinutes();const i=r.reduce((d,f)=>f>=l&&(d===null||Math.abs(f-l)<Math.abs(d-l))?f:d,null);return i===null?(s=(s+1)%24,l=0):l=i,a.jsxs(to,{id:"selectTimeWrapper",children:[a.jsxs(it,{children:[a.jsx(at,{onChange:d=>e(d,"hour"),value:s,children:n.map(d=>a.jsx("option",{value:d,children:d.toString().padStart(2,"0")},d))}),a.jsx(st,{width:"24",height:"24",children:a.jsx("use",{href:`${q}#icon-arrow`})})]}),":",a.jsxs(it,{children:[a.jsx(at,{onChange:d=>e(d,"minute"),value:l,children:r.map(d=>a.jsx("option",{value:d,children:d.toString().padStart(2,"0")},d))}),a.jsx(st,{width:"24",height:"24",children:a.jsx("use",{href:`${q}#icon-arrow`})})]})]})}const no=u.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  overflow: scroll;
`,ro=u.div`
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
`,oo=u.button`
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
`,ao=u.h2`
  font-weight: 500;
  font-size: 26px;
  line-height: 123%;
  color: #2f2f2f;
  margin-bottom: 24px;
`,ct=u.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  color: #2f2f2f;
  margin-bottom: 16px;
`,lt=u.p`
  font-size: 16px;
  line-height: 125%;
  color: #2f2f2f;
  margin-bottom: 12px;
`,dt=u.button`
  box-shadow: 0 2px 4px 0 rgba(64, 123, 255, 0.2);
  background-color: #fff;
  border: 1px solid #9ebbff;
  border-radius: 30px;
  padding: 0px;
  width: 44px;
  height: 44px;
  cursor: pointer;
`,ut=u.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 133%;
  color: #407bff;
  text-align: center;
`,io=u.input`
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
`,so=u.input`
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
`,co=u.button`
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
`,lo=u.div`
  background-color: #d7e3ff;
  border-radius: 40px;
  padding: 6px 10px;
  height: 36px;
`,uo=u.div`
  display: flex;
  width: 194px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`,fo=u.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
  }
`;Ie.setAppElement("#root");function Ht({onClose:e}){const[t,n]=w.useState(0),[r,o]=w.useState(!1),[s,l]=w.useState(0),i=te(),[d,f]=w.useState(new Date),h=(A,k="")=>{let E=new Date(d);switch(k){case"hour":E.setHours(parseInt(A.target.value,10));break;case"minute":E.setMinutes(Math.ceil(parseInt(A.target.value,10)/5)*5);break}f(E)},p=()=>{i(on({amount:t,date:Date(d)})),e()},g=()=>{n(t+50),l(t+50)},y=()=>{if(t-50<0){n(0),l(0);return}n(t-50),l(t-50)},O=()=>{n(s)},j=A=>{const{value:k}=A.target;if(k==="")l("");else{let E=parseInt(k,10);E=isNaN(E)||E<0?0:E,l(E)}},D=A=>{A.target.closest("#selectTimeWrapper")||(o(!1),A.target===A.currentTarget&&e())},S=w.useCallback(()=>{},[e]);w.useEffect(()=>(window.addEventListener("keydown",S),()=>{window.removeEventListener("keydown",S)}),[S]);const C=A=>{const k=new Date(A),E=N=>N.toString().padStart(2,"0");return`${E(k.getHours())}:${E(k.getMinutes())}`};return Le.createPortal(a.jsx(no,{onClick:D,children:a.jsxs(ro,{children:[a.jsx(oo,{onClick:e,children:a.jsx("svg",{width:"24",height:"24",children:a.jsx("use",{href:`${q}#icon-close`})})}),a.jsx(ao,{children:"Add water"}),a.jsx(ct,{children:"Choose a value:"}),a.jsx(lt,{children:"Amount of water:"}),a.jsxs(uo,{children:[a.jsx(dt,{onClick:y,children:a.jsx("svg",{width:"44",height:"44",children:a.jsx("use",{href:`${q}#icon-minus`})})}),a.jsx(lo,{children:a.jsxs(ut,{children:[t,"ml"]})}),a.jsx(dt,{onClick:g,children:a.jsx("svg",{width:"44",height:"44",children:a.jsx("use",{href:`${q}#icon-plus`})})})]}),a.jsx(lt,{children:"Recording time:"}),r?a.jsx(Lt,{onChange:h,value:d}):a.jsx(io,{type:"text","aria-label":"Choose time",value:C(d),onChange:()=>{},onFocus:()=>o(!0)}),a.jsx(ct,{children:"Enter the value of the water used:"}),a.jsx(so,{value:s,onBlur:O,onChange:j,type:"number"}),a.jsxs(fo,{children:[a.jsxs(ut,{children:[t,"ml"]}),a.jsx(co,{onClick:p,type:"button",children:"Save"})]})]})}),document.getElementById("modal-root"))}const po=u.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  overflow: scroll;
`,ho=u.div`
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
`,mo=u.button`
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
`,go=u.h2`
  font-weight: 500;
  font-size: 26px;
  line-height: 123%;
  color: #2f2f2f;
  margin-bottom: 24px;
`,ft=u.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  color: #2f2f2f;
  margin-bottom: 16px;
`,pt=u.p`
  font-size: 16px;
  line-height: 125%;
  color: #2f2f2f;
  margin-bottom: 12px;
`,ht=u.button`
  box-shadow: 0 2px 4px 0 rgba(64, 123, 255, 0.2);
  background-color: #fff;
  border: 1px solid #9ebbff;
  border-radius: 30px;
  padding: 0px;
  width: 44px;
  height: 44px;
  cursor: pointer;
`,mt=u.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 133%;
  color: #407bff;
  text-align: center;
`,xo=u.input`
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
`,bo=u.input`
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
`,vo=u.button`
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
`,yo=u.div`
  background-color: #d7e3ff;
  border-radius: 40px;
  padding: 6px 10px;
  height: 36px;
`,wo=u.div`
  display: flex;
  width: 194px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`,Ao=u.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
  }
`,Oo=u.div`
  display: flex;
  gap: 14px;
  align-items: center;
  margin-bottom: 24px;
  border-radius: 10px;
  padding: 8px 24px;
  width: 256px;
  background-color: #ecf2ff;
`,Mo=u.p`
  font-size: 18px;
  line-height: 133%;
  color: #407bff;
`,So=u.p`
  font-size: 16px;
  line-height: 125%;
  color: #2f2f2f;
`;Ie.setAppElement("#root");function gt({onClose:e}){const t=J(Sr),[n,r]=w.useState(t.amount),[o,s]=w.useState(!1),[l,i]=w.useState(0),d=te(),[f,h]=w.useState(t.date),p=(k,E="")=>{let N=new Date(f);switch(E){case"hour":N.setHours(parseInt(k.target.value,10));break;case"minute":N.setMinutes(Math.ceil(parseInt(k.target.value,10)/5)*5);break}h(N)},g=()=>{d(an({_id:t._id,amount:n,date:Date(f)})),e()},y=()=>{r(n+50),i(n+50)},O=()=>{if(n-50<0){r(0),i(0);return}r(n-50),i(n-50)},j=()=>{r(l)},D=k=>{const{value:E}=k.target;if(E==="")i("");else{let N=parseInt(E,10);N=isNaN(N)||N<0?0:N,i(N)}},S=k=>{k.target.closest("#selectTimeWrapper")||(s(!1),k.target===k.currentTarget&&e())},C=w.useCallback(()=>{},[e]);w.useEffect(()=>(window.addEventListener("keydown",C),()=>{window.removeEventListener("keydown",C)}),[C]);const A=k=>{const E=new Date(k),N=je=>je.toString().padStart(2,"0");return`${N(E.getHours())}:${N(E.getMinutes())}`};return Le.createPortal(a.jsx(po,{onClick:S,children:a.jsxs(ho,{children:[a.jsx(mo,{onClick:e,children:a.jsx("svg",{width:"24",height:"24",children:a.jsx("use",{href:`${q}#icon-close`})})}),a.jsx(go,{children:"Edit the entered amount of water"}),a.jsxs(Oo,{children:[" ",a.jsx("svg",{width:"36",height:"36",children:a.jsx("use",{href:`${q}#icon-glass`})}),a.jsxs(Mo,{children:[t.amount,"ml"]}),a.jsx(So,{children:A(t.date)})]}),a.jsx(ft,{children:"Correct entered data:"}),a.jsx(pt,{children:"Amount of water:"}),a.jsxs(wo,{children:[a.jsx(ht,{onClick:O,children:a.jsx("svg",{width:"44",height:"44",children:a.jsx("use",{href:`${q}#icon-minus`})})}),a.jsx(yo,{children:a.jsxs(mt,{children:[n,"ml"]})}),a.jsx(ht,{onClick:y,children:a.jsx("svg",{width:"44",height:"44",children:a.jsx("use",{href:`${q}#icon-plus`})})})]}),a.jsx(pt,{children:"Recording time:"}),o?a.jsx(Lt,{onChange:p,value:f}):a.jsx(xo,{type:"text","aria-label":"Choose time",value:A(f),onChange:()=>{},onFocus:()=>s(!0)}),a.jsx(ft,{children:"Enter the value of the water used:"}),a.jsx(bo,{value:l,onBlur:j,onChange:D,type:"number"}),a.jsxs(Ao,{children:[a.jsxs(mt,{children:[n,"ml"]}),a.jsx(vo,{onClick:g,type:"button",children:"Save"})]})]})}),document.getElementById("modal-root"))}const ko=u.div`
  padding: 0 24px 32px;
`,Co=u.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    flex-direction: row-reverse;
  }
`,xt=u.button`
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
`,Eo=u.p`
  font-size: 18px;
  color: ${({theme:e})=>e.color.primaryBlack};
  line-height: 20px;
  font-weight: 500;

  margin-bottom: 24px;
`,jo=({onClose:e,onShow:t,id:n})=>{const r=te(),o=()=>{r(cn(n)),e()};return a.jsx(sn,{onClose:e,onShow:t,title:"Delete Entry",children:a.jsxs(ko,{children:[a.jsx(Eo,{children:"Are you sure you want to delete the entry?"}),a.jsxs(Co,{children:[a.jsx(xt,{onClick:o,children:"Delete"}),a.jsx(xt,{onClick:e,style:{color:"#407BFF"},children:"Cancel"})]})]})})},Po=u.ul`
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
`,Do=u.li`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: space-between;
`,To=u.div`
  display: flex;
  align-items: center;
`,No=u.p`
  color: #407bff;
  font-size: 18px;
  line-height: 24px;
  margin-left: 12px;
`,Wo=u.p`
  margin-left: 12px;
  line-height: 24px;
  font-size: 12px;
  color: #2f2f2f;

  @media screen and (min-width: 768px) {
    margin-left: 16px;
  }
`,_o=u.h2`
  margin-bottom: 16px;
  color: #2f2f2f;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 32px;
  }
`,Fo=u.button`
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
`,Vo=u.button`
  margin-right: 18px;
  background-color: transparent;
`,Ro=u.button`
  background-color: transparent;
`;function I(e){const t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new e.constructor(+e):typeof e=="number"||t==="[object Number]"||typeof e=="string"||t==="[object String]"?new Date(e):new Date(NaN)}function ee(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}const Bt=6048e5,Lo=864e5;let Ho={};function Ee(){return Ho}function pe(e,t){var i,d,f,h;const n=Ee(),r=(t==null?void 0:t.weekStartsOn)??((d=(i=t==null?void 0:t.locale)==null?void 0:i.options)==null?void 0:d.weekStartsOn)??n.weekStartsOn??((h=(f=n.locale)==null?void 0:f.options)==null?void 0:h.weekStartsOn)??0,o=I(e),s=o.getDay(),l=(s<r?7:0)+s-r;return o.setDate(o.getDate()-l),o.setHours(0,0,0,0),o}function ke(e){return pe(e,{weekStartsOn:1})}function It(e){const t=I(e),n=t.getFullYear(),r=ee(e,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const o=ke(r),s=ee(e,0);s.setFullYear(n,0,4),s.setHours(0,0,0,0);const l=ke(s);return t.getTime()>=o.getTime()?n+1:t.getTime()>=l.getTime()?n:n-1}function bt(e){const t=I(e);return t.setHours(0,0,0,0),t}function vt(e){const t=I(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function Bo(e,t){const n=bt(e),r=bt(t),o=+n-vt(n),s=+r-vt(r);return Math.round((o-s)/Lo)}function Io(e){const t=It(e),n=ee(e,0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),ke(n)}function qo(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function zo(e){if(!qo(e)&&typeof e!="number")return!1;const t=I(e);return!isNaN(Number(t))}function Yo(e){const t=I(e),n=ee(e,0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}const $o={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Uo=(e,t,n)=>{let r;const o=$o[e];return typeof o=="string"?r=o:t===1?r=o.one:r=o.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function Ne(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const Xo={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Go={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Qo={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Ko={date:Ne({formats:Xo,defaultWidth:"full"}),time:Ne({formats:Go,defaultWidth:"full"}),dateTime:Ne({formats:Qo,defaultWidth:"full"})},Jo={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Zo=(e,t,n,r)=>Jo[e];function se(e){return(t,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let o;if(r==="formatting"&&e.formattingValues){const l=e.defaultFormattingWidth||e.defaultWidth,i=n!=null&&n.width?String(n.width):l;o=e.formattingValues[i]||e.formattingValues[l]}else{const l=e.defaultWidth,i=n!=null&&n.width?String(n.width):e.defaultWidth;o=e.values[i]||e.values[l]}const s=e.argumentCallback?e.argumentCallback(t):t;return o[s]}}const ea={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},ta={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},na={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},ra={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},oa={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},aa={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},ia=(e,t)=>{const n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},sa={ordinalNumber:ia,era:se({values:ea,defaultWidth:"wide"}),quarter:se({values:ta,defaultWidth:"wide",argumentCallback:e=>e-1}),month:se({values:na,defaultWidth:"wide"}),day:se({values:ra,defaultWidth:"wide"}),dayPeriod:se({values:oa,defaultWidth:"wide",formattingValues:aa,defaultFormattingWidth:"wide"})};function ce(e){return(t,n={})=>{const r=n.width,o=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],s=t.match(o);if(!s)return null;const l=s[0],i=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],d=Array.isArray(i)?la(i,p=>p.test(l)):ca(i,p=>p.test(l));let f;f=e.valueCallback?e.valueCallback(d):d,f=n.valueCallback?n.valueCallback(f):f;const h=t.slice(l.length);return{value:f,rest:h}}}function ca(e,t){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function la(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function da(e){return(t,n={})=>{const r=t.match(e.matchPattern);if(!r)return null;const o=r[0],s=t.match(e.parsePattern);if(!s)return null;let l=e.valueCallback?e.valueCallback(s[0]):s[0];l=n.valueCallback?n.valueCallback(l):l;const i=t.slice(o.length);return{value:l,rest:i}}}const ua=/^(\d+)(th|st|nd|rd)?/i,fa=/\d+/i,pa={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},ha={any:[/^b/i,/^(a|c)/i]},ma={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},ga={any:[/1/i,/2/i,/3/i,/4/i]},xa={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},ba={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},va={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},ya={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},wa={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Aa={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Oa={ordinalNumber:da({matchPattern:ua,parsePattern:fa,valueCallback:e=>parseInt(e,10)}),era:ce({matchPatterns:pa,defaultMatchWidth:"wide",parsePatterns:ha,defaultParseWidth:"any"}),quarter:ce({matchPatterns:ma,defaultMatchWidth:"wide",parsePatterns:ga,defaultParseWidth:"any",valueCallback:e=>e+1}),month:ce({matchPatterns:xa,defaultMatchWidth:"wide",parsePatterns:ba,defaultParseWidth:"any"}),day:ce({matchPatterns:va,defaultMatchWidth:"wide",parsePatterns:ya,defaultParseWidth:"any"}),dayPeriod:ce({matchPatterns:wa,defaultMatchWidth:"any",parsePatterns:Aa,defaultParseWidth:"any"})},Ma={code:"en-US",formatDistance:Uo,formatLong:Ko,formatRelative:Zo,localize:sa,match:Oa,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Sa(e){const t=I(e);return Bo(t,Yo(t))+1}function ka(e){const t=I(e),n=+ke(t)-+Io(t);return Math.round(n/Bt)+1}function qt(e,t){var h,p,g,y;const n=I(e),r=n.getFullYear(),o=Ee(),s=(t==null?void 0:t.firstWeekContainsDate)??((p=(h=t==null?void 0:t.locale)==null?void 0:h.options)==null?void 0:p.firstWeekContainsDate)??o.firstWeekContainsDate??((y=(g=o.locale)==null?void 0:g.options)==null?void 0:y.firstWeekContainsDate)??1,l=ee(e,0);l.setFullYear(r+1,0,s),l.setHours(0,0,0,0);const i=pe(l,t),d=ee(e,0);d.setFullYear(r,0,s),d.setHours(0,0,0,0);const f=pe(d,t);return n.getTime()>=i.getTime()?r+1:n.getTime()>=f.getTime()?r:r-1}function Ca(e,t){var i,d,f,h;const n=Ee(),r=(t==null?void 0:t.firstWeekContainsDate)??((d=(i=t==null?void 0:t.locale)==null?void 0:i.options)==null?void 0:d.firstWeekContainsDate)??n.firstWeekContainsDate??((h=(f=n.locale)==null?void 0:f.options)==null?void 0:h.firstWeekContainsDate)??1,o=qt(e,t),s=ee(e,0);return s.setFullYear(o,0,r),s.setHours(0,0,0,0),pe(s,t)}function Ea(e,t){const n=I(e),r=+pe(n,t)-+Ca(n,t);return Math.round(r/Bt)+1}function M(e,t){const n=e<0?"-":"",r=Math.abs(e).toString().padStart(t,"0");return n+r}const z={y(e,t){const n=e.getFullYear(),r=n>0?n:1-n;return M(t==="yy"?r%100:r,t.length)},M(e,t){const n=e.getMonth();return t==="M"?String(n+1):M(n+1,2)},d(e,t){return M(e.getDate(),t.length)},a(e,t){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(e,t){return M(e.getHours()%12||12,t.length)},H(e,t){return M(e.getHours(),t.length)},m(e,t){return M(e.getMinutes(),t.length)},s(e,t){return M(e.getSeconds(),t.length)},S(e,t){const n=t.length,r=e.getMilliseconds(),o=Math.trunc(r*Math.pow(10,n-3));return M(o,t.length)}},ne={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},yt={G:function(e,t,n){const r=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if(t==="yo"){const r=e.getFullYear(),o=r>0?r:1-r;return n.ordinalNumber(o,{unit:"year"})}return z.y(e,t)},Y:function(e,t,n,r){const o=qt(e,r),s=o>0?o:1-o;if(t==="YY"){const l=s%100;return M(l,2)}return t==="Yo"?n.ordinalNumber(s,{unit:"year"}):M(s,t.length)},R:function(e,t){const n=It(e);return M(n,t.length)},u:function(e,t){const n=e.getFullYear();return M(n,t.length)},Q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return M(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return M(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){const r=e.getMonth();switch(t){case"M":case"MM":return z.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){const r=e.getMonth();switch(t){case"L":return String(r+1);case"LL":return M(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){const o=Ea(e,r);return t==="wo"?n.ordinalNumber(o,{unit:"week"}):M(o,t.length)},I:function(e,t,n){const r=ka(e);return t==="Io"?n.ordinalNumber(r,{unit:"week"}):M(r,t.length)},d:function(e,t,n){return t==="do"?n.ordinalNumber(e.getDate(),{unit:"date"}):z.d(e,t)},D:function(e,t,n){const r=Sa(e);return t==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):M(r,t.length)},E:function(e,t,n){const r=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){const o=e.getDay(),s=(o-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(s);case"ee":return M(s,2);case"eo":return n.ordinalNumber(s,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});case"eeee":default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){const o=e.getDay(),s=(o-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(s);case"cc":return M(s,t.length);case"co":return n.ordinalNumber(s,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});case"cccc":default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(e,t,n){const r=e.getDay(),o=r===0?7:r;switch(t){case"i":return String(o);case"ii":return M(o,t.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){const o=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(e,t,n){const r=e.getHours();let o;switch(r===12?o=ne.noon:r===0?o=ne.midnight:o=r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(e,t,n){const r=e.getHours();let o;switch(r>=17?o=ne.evening:r>=12?o=ne.afternoon:r>=4?o=ne.morning:o=ne.night,t){case"B":case"BB":case"BBB":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(e,t,n){if(t==="ho"){let r=e.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return z.h(e,t)},H:function(e,t,n){return t==="Ho"?n.ordinalNumber(e.getHours(),{unit:"hour"}):z.H(e,t)},K:function(e,t,n){const r=e.getHours()%12;return t==="Ko"?n.ordinalNumber(r,{unit:"hour"}):M(r,t.length)},k:function(e,t,n){let r=e.getHours();return r===0&&(r=24),t==="ko"?n.ordinalNumber(r,{unit:"hour"}):M(r,t.length)},m:function(e,t,n){return t==="mo"?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):z.m(e,t)},s:function(e,t,n){return t==="so"?n.ordinalNumber(e.getSeconds(),{unit:"second"}):z.s(e,t)},S:function(e,t){return z.S(e,t)},X:function(e,t,n){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(t){case"X":return At(r);case"XXXX":case"XX":return G(r);case"XXXXX":case"XXX":default:return G(r,":")}},x:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"x":return At(r);case"xxxx":case"xx":return G(r);case"xxxxx":case"xxx":default:return G(r,":")}},O:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+wt(r,":");case"OOOO":default:return"GMT"+G(r,":")}},z:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+wt(r,":");case"zzzz":default:return"GMT"+G(r,":")}},t:function(e,t,n){const r=Math.trunc(e.getTime()/1e3);return M(r,t.length)},T:function(e,t,n){const r=e.getTime();return M(r,t.length)}};function wt(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),o=Math.trunc(r/60),s=r%60;return s===0?n+String(o):n+String(o)+t+M(s,2)}function At(e,t){return e%60===0?(e>0?"-":"+")+M(Math.abs(e)/60,2):G(e,t)}function G(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),o=M(Math.trunc(r/60),2),s=M(r%60,2);return n+o+t+s}const Ot=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},zt=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},ja=(e,t)=>{const n=e.match(/(P+)(p+)?/)||[],r=n[1],o=n[2];if(!o)return Ot(e,t);let s;switch(r){case"P":s=t.dateTime({width:"short"});break;case"PP":s=t.dateTime({width:"medium"});break;case"PPP":s=t.dateTime({width:"long"});break;case"PPPP":default:s=t.dateTime({width:"full"});break}return s.replace("{{date}}",Ot(r,t)).replace("{{time}}",zt(o,t))},Pa={p:zt,P:ja},Da=/^D+$/,Ta=/^Y+$/,Na=["D","DD","YY","YYYY"];function Wa(e){return Da.test(e)}function _a(e){return Ta.test(e)}function Fa(e,t,n){const r=Va(e,t,n);if(console.warn(r),Na.includes(e))throw new RangeError(r)}function Va(e,t,n){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Ra=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,La=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Ha=/^'([^]*?)'?$/,Ba=/''/g,Ia=/[a-zA-Z]/;function qa(e,t,n){var h,p,g,y,O,j,D,S;const r=Ee(),o=(n==null?void 0:n.locale)??r.locale??Ma,s=(n==null?void 0:n.firstWeekContainsDate)??((p=(h=n==null?void 0:n.locale)==null?void 0:h.options)==null?void 0:p.firstWeekContainsDate)??r.firstWeekContainsDate??((y=(g=r.locale)==null?void 0:g.options)==null?void 0:y.firstWeekContainsDate)??1,l=(n==null?void 0:n.weekStartsOn)??((j=(O=n==null?void 0:n.locale)==null?void 0:O.options)==null?void 0:j.weekStartsOn)??r.weekStartsOn??((S=(D=r.locale)==null?void 0:D.options)==null?void 0:S.weekStartsOn)??0,i=I(e);if(!zo(i))throw new RangeError("Invalid time value");let d=t.match(La).map(C=>{const A=C[0];if(A==="p"||A==="P"){const k=Pa[A];return k(C,o.formatLong)}return C}).join("").match(Ra).map(C=>{if(C==="''")return{isToken:!1,value:"'"};const A=C[0];if(A==="'")return{isToken:!1,value:za(C)};if(yt[A])return{isToken:!0,value:C};if(A.match(Ia))throw new RangeError("Format string contains an unescaped latin alphabet character `"+A+"`");return{isToken:!1,value:C}});o.localize.preprocessor&&(d=o.localize.preprocessor(i,d));const f={firstWeekContainsDate:s,weekStartsOn:l,locale:o};return d.map(C=>{if(!C.isToken)return C.value;const A=C.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&_a(A)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&Wa(A))&&Fa(A,t,String(e));const k=yt[A[0]];return k(i,A,o.localize,f)}).join("")}function za(e){const t=e.match(Ha);return t?t[1].replace(Ba,"'"):e}const Ya=e=>qa(new Date(e),"p"),$a=()=>{const[e,t]=w.useState(!1),[n,r]=w.useState(!1),o=te(),[s,l]=w.useState(!1),i=J(Wt);console.log(i);const d=()=>{t(!1)},f=()=>{t(!0)},h=()=>{r(!1)},p=({amount:O,date:j,_id:D})=>{r(!0),o(ln({amount:O,date:j,_id:D}))},g=()=>{l(!1)},y=()=>{l(!0)};return a.jsxs("div",{children:[a.jsxs("div",{children:[a.jsx(_o,{children:"Today"}),a.jsxs(Po,{children:[i.length>0&&i.map(({_id:O,amount:j,date:D})=>a.jsx(a.Fragment,{children:a.jsxs(Do,{children:[a.jsxs(To,{children:[a.jsx("img",{src:Jr,alt:"Icon glass"}),a.jsxs(No,{children:[j," ml"]}),a.jsx(Wo,{children:Ya(D)})]}),a.jsxs("div",{children:[a.jsx(Vo,{type:"button",onClick:()=>p({_id:O,amount:j,date:D}),children:a.jsx("img",{src:Zr,alt:"Icon glass"})}),a.jsx(Ro,{type:"button",onClick:y,children:a.jsx("img",{src:eo,alt:"Icon glass"})}),n&&a.jsx(gt,{isOpen:n,onClose:h}),s&&a.jsx(jo,{onShow:s,onClose:g,id:O})]})]},O)})),n&&a.jsx(gt,{isOpen:n,onClose:h})]})]}),a.jsxs(Fo,{type:"button",onClick:f,children:[a.jsx(Kr,{})," Add Water"]}),e&&a.jsx(Ht,{isOpen:e,onClose:d})]})},Ua=$a;function Xa(e){return Rt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"16"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"16",y2:"12"},child:[]}]})(e)}const Ga=u.div`
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
`,Qa=u.div`
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
`,Ka=u.input`
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
`,Ja=u.div`
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
`,Za=u.button`
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
`,ei=()=>{const[e,t]=w.useState(!1),[n,r]=w.useState(0),o=J(Wt),{waterRate:s}=J(St);w.useEffect(()=>{const d=o.reduce((h,p)=>h+p.amount,0),f=Math.round(d/s*100);r(f)},[o,s]);const l=()=>{t(!1)},i=()=>{t(!0)};return a.jsxs(Ga,{children:[a.jsxs(Qa,{children:[a.jsx("h2",{children:"Today"}),a.jsx(Ka,{value:n,type:"range",min:"0",max:"100"}),a.jsxs(Ja,{children:[a.jsx("p",{children:"0%"}),a.jsx("p",{children:"50%"}),a.jsx("p",{children:"100%"})]})]}),a.jsxs(Za,{onClick:i,type:"button",children:[a.jsx(Xa,{}),"Add Water"]}),e&&a.jsx(Ht,{isOpen:e,onClose:l})]})},ti=ei,ni="/goit-group2-react-nodejs/assets/bottleHomeScreenDesk-630fd92f.png",ri="/goit-group2-react-nodejs/assets/bottleHomeScreenDesk2x@2x-51f4e9e6.png",oi="/goit-group2-react-nodejs/assets/bottleHomeScreenTab-2759a74b.png",ai="/goit-group2-react-nodejs/assets/bottleHomeScreenTab@2x-805003a0.png",ii="/goit-group2-react-nodejs/assets/bottleHomeScreenMob-fe8938bc.png",si="/goit-group2-react-nodejs/assets/bottleHomeScreenMob2x@2x-9640a1cb.png",ci="data:image/png;base64,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",li="/goit-group2-react-nodejs/assets/backgroundElementHomeScreenTab-4de5d48f.png",di=u.div`
  background-size: cover;
  background: url(${ci});
  height: max-content;
  background-repeat: no-repeat;
  min-height: calc(100% - 64px);

  @media screen and (min-width: 768px) {
    background: url(${li});
    min-height: calc(100% - 80px);
  }

  @media screen and (min-width: 1440px) {
    background: url(${un});
    min-height: calc(100% - 72px);
  }
`,ui=u.div`
  margin-bottom: 40px;
  margin-top: 20px;
  background-size: 280px 208px;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${ii});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 440px;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${si});
  }

  @media screen and (min-width: 768px) {
    background-size: 518px 386px;
    background-position: calc(50% + 9px) 8px;
    height: 492px;
    background-image: url(${oi});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background: url(${ai});
      background-size: 518px 386px;
      background-repeat: no-repeat;
    }
  }

  @media screen and (min-width: 1440px) {
    background-size: 738px 548px;
    background-position: calc(50% + 10px) 46px;
    height: 680px;
    background-image: url(${ni});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${ri});
    }
  }
`,fi=u.div`
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
`,pi=u.div`
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
`;function gi(){const e=te();return w.useEffect(()=>{e(dn())},[e]),a.jsx(di,{children:a.jsxs(fi,{children:[a.jsxs(ui,{children:[a.jsx(Mr,{}),a.jsx(ti,{})]}),a.jsxs(pi,{children:[a.jsx(Ua,{}),a.jsx(qr,{})]})]})})}export{gi as default};
