import{n as c,j as a,R as X,r as j,g as At,a as vt,b as bt,c as Xe,d as Ke,e as yt,f as Ge,h as wt}from"./index-edbb13a2.js";import{b as Ot}from"./bg_element_des@1x-1805b66c.js";const Ct=c.div`
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
`,Et=c.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,St=()=>{const e=()=>{console.log("Open modal")};return a.jsx("div",{children:a.jsxs(Ct,{children:[a.jsx("h2",{children:"My daily norma:"}),a.jsxs(Et,{children:[a.jsx("p",{children:"1.5 L"}),a.jsx("button",{onClick:e,type:"button",children:"Edit"})]})]})})},Mt=St;var Ye={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Se=X.createContext&&X.createContext(Ye),jt=["attr","size","title"];function Pt(e,t){if(e==null)return{};var n=Tt(e,t),o,i;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)o=l[i],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function Tt(e,t){if(e==null)return{};var n={},o=Object.keys(e),i,l;for(l=0;l<o.length;l++)i=o[l],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function ue(){return ue=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},ue.apply(this,arguments)}function Me(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,o)}return n}function pe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Me(Object(n),!0).forEach(function(o){kt(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Me(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function kt(e,t,n){return t=_t(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _t(e){var t=Nt(e,"string");return typeof t=="symbol"?t:String(t)}function Nt(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Je(e){return e&&e.map((t,n)=>X.createElement(t.tag,pe({key:n},t.attr),Je(t.child)))}function Qe(e){return t=>X.createElement(Rt,ue({attr:pe({},e.attr)},t),Je(e.child))}function Rt(e){var t=n=>{var{attr:o,size:i,title:l}=e,A=Pt(e,jt),s=i||n.size||"1em",d;return n.className&&(d=n.className),e.className&&(d=(d?d+" ":"")+e.className),X.createElement("svg",ue({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,o,A,{className:d,style:pe(pe({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),l&&X.createElement("title",null,l),e.children)};return Se!==void 0?X.createElement(Se.Consumer,null,n=>t(n)):t(Ye)}function Dt(e){return Qe({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"},child:[]}]})(e)}const Vt=e=>e.water.notes,Wt=e=>e.water.currentNote,Ft="/goit-group2-react-nodejs/assets/glass-00cf2fb8.svg",Lt="/goit-group2-react-nodejs/assets/edit-7f0c7b6a.svg",It="/goit-group2-react-nodejs/assets/delete-6bf30e40.svg";var ve={exports:{}},G={},Ze={exports:{}},Ht="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Ut=Ht,Bt=Ut;function et(){}function tt(){}tt.resetWarningCache=et;var zt=function(){function e(o,i,l,A,s,d){if(d!==Bt){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:tt,resetWarningCache:et};return n.PropTypes=n,n};Ze.exports=zt();var nt=Ze.exports,be={exports:{}},V={},ye={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=v;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var n="none",o="contents",i=/input|select|textarea|button|object|iframe/;function l(h,x){return x.getPropertyValue("overflow")!=="visible"||h.scrollWidth<=0&&h.scrollHeight<=0}function A(h){var x=h.offsetWidth<=0&&h.offsetHeight<=0;if(x&&!h.innerHTML)return!0;try{var b=window.getComputedStyle(h),y=b.getPropertyValue("display");return x?y!==o&&l(h,b):y===n}catch{return console.warn("Failed to inspect element style"),!1}}function s(h){for(var x=h,b=h.getRootNode&&h.getRootNode();x&&x!==document.body;){if(b&&x===b&&(x=b.host.parentNode),A(x))return!1;x=x.parentNode}return!0}function d(h,x){var b=h.nodeName.toLowerCase(),y=i.test(b)&&!h.disabled||b==="a"&&h.href||x;return y&&s(h)}function p(h){var x=h.getAttribute("tabindex");x===null&&(x=void 0);var b=isNaN(x);return(b||x>=0)&&d(h,!b)}function v(h){var x=[].slice.call(h.querySelectorAll("*"),0).reduce(function(b,y){return b.concat(y.shadowRoot?v(y.shadowRoot):[y])},[]);return x.filter(p)}e.exports=t.default})(ye,ye.exports);var ot=ye.exports;Object.defineProperty(V,"__esModule",{value:!0});V.resetState=Kt;V.log=Gt;V.handleBlur=re;V.handleFocus=ae;V.markForFocusLater=Yt;V.returnFocus=Jt;V.popWithoutFocus=Qt;V.setupScopedFocus=Zt;V.teardownScopedFocus=en;var qt=ot,$t=Xt(qt);function Xt(e){return e&&e.__esModule?e:{default:e}}var Q=[],J=null,we=!1;function Kt(){Q=[]}function Gt(){}function re(){we=!0}function ae(){if(we){if(we=!1,!J)return;setTimeout(function(){if(!J.contains(document.activeElement)){var e=(0,$t.default)(J)[0]||J;e.focus()}},0)}}function Yt(){Q.push(document.activeElement)}function Jt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=null;try{Q.length!==0&&(t=Q.pop(),t.focus({preventScroll:e}));return}catch{console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}}function Qt(){Q.length>0&&Q.pop()}function Zt(e){J=e,window.addEventListener?(window.addEventListener("blur",re,!1),document.addEventListener("focus",ae,!0)):(window.attachEvent("onBlur",re),document.attachEvent("onFocus",ae))}function en(){J=null,window.addEventListener?(window.removeEventListener("blur",re),document.removeEventListener("focus",ae)):(window.detachEvent("onBlur",re),document.detachEvent("onFocus",ae))}var Oe={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=A;var n=ot,o=i(n);function i(s){return s&&s.__esModule?s:{default:s}}function l(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return s.activeElement.shadowRoot?l(s.activeElement.shadowRoot):s.activeElement}function A(s,d){var p=(0,o.default)(s);if(!p.length){d.preventDefault();return}var v=void 0,h=d.shiftKey,x=p[0],b=p[p.length-1],y=l();if(s===y){if(!h)return;v=b}if(b===y&&!h&&(v=x),x===y&&h&&(v=b),v){d.preventDefault(),v.focus();return}var T=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),L=T!=null&&T[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(L){var F=p.indexOf(y);if(F>-1&&(F+=h?-1:1),v=p[F],typeof v>"u"){d.preventDefault(),v=h?b:x,v.focus();return}d.preventDefault(),v.focus()}}e.exports=t.default})(Oe,Oe.exports);var tn=Oe.exports,W={},nn=function(){},on=nn,D={},rt={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(e){(function(){var t=!!(typeof window<"u"&&window.document&&window.document.createElement),n={canUseDOM:t,canUseWorkers:typeof Worker<"u",canUseEventListeners:t&&!!(window.addEventListener||window.attachEvent),canUseViewport:t&&!!window.screen};e.exports?e.exports=n:window.ExecutionEnvironment=n})()})(rt);var rn=rt.exports;Object.defineProperty(D,"__esModule",{value:!0});D.canUseDOM=D.SafeNodeList=D.SafeHTMLCollection=void 0;var an=rn,sn=ln(an);function ln(e){return e&&e.__esModule?e:{default:e}}var ge=sn.default,cn=ge.canUseDOM?window.HTMLElement:{};D.SafeHTMLCollection=ge.canUseDOM?window.HTMLCollection:{};D.SafeNodeList=ge.canUseDOM?window.NodeList:{};D.canUseDOM=ge.canUseDOM;D.default=cn;Object.defineProperty(W,"__esModule",{value:!0});W.resetState=hn;W.log=mn;W.assertNodeList=at;W.setElement=gn;W.validateElement=Ce;W.hide=xn;W.show=An;W.documentNotReadyOrSSRTesting=vn;var dn=on,un=fn(dn),pn=D;function fn(e){return e&&e.__esModule?e:{default:e}}var N=null;function hn(){N&&(N.removeAttribute?N.removeAttribute("aria-hidden"):N.length!=null?N.forEach(function(e){return e.removeAttribute("aria-hidden")}):document.querySelectorAll(N).forEach(function(e){return e.removeAttribute("aria-hidden")})),N=null}function mn(){}function at(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function gn(e){var t=e;if(typeof t=="string"&&pn.canUseDOM){var n=document.querySelectorAll(t);at(n,t),t=n}return N=t||N,N}function Ce(e){var t=e||N;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,un.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function xn(e){var t=!0,n=!1,o=void 0;try{for(var i=Ce(e)[Symbol.iterator](),l;!(t=(l=i.next()).done);t=!0){var A=l.value;A.setAttribute("aria-hidden","true")}}catch(s){n=!0,o=s}finally{try{!t&&i.return&&i.return()}finally{if(n)throw o}}}function An(e){var t=!0,n=!1,o=void 0;try{for(var i=Ce(e)[Symbol.iterator](),l;!(t=(l=i.next()).done);t=!0){var A=l.value;A.removeAttribute("aria-hidden")}}catch(s){n=!0,o=s}finally{try{!t&&i.return&&i.return()}finally{if(n)throw o}}}function vn(){N=null}var Z={};Object.defineProperty(Z,"__esModule",{value:!0});Z.resetState=bn;Z.log=yn;var ne={},oe={};function je(e,t){e.classList.remove(t)}function bn(){var e=document.getElementsByTagName("html")[0];for(var t in ne)je(e,ne[t]);var n=document.body;for(var o in oe)je(n,oe[o]);ne={},oe={}}function yn(){}var wn=function(t,n){return t[n]||(t[n]=0),t[n]+=1,n},On=function(t,n){return t[n]&&(t[n]-=1),n},Cn=function(t,n,o){o.forEach(function(i){wn(n,i),t.add(i)})},En=function(t,n,o){o.forEach(function(i){On(n,i),n[i]===0&&t.remove(i)})};Z.add=function(t,n){return Cn(t.classList,t.nodeName.toLowerCase()=="html"?ne:oe,n.split(" "))};Z.remove=function(t,n){return En(t.classList,t.nodeName.toLowerCase()=="html"?ne:oe,n.split(" "))};var ee={};Object.defineProperty(ee,"__esModule",{value:!0});ee.log=Mn;ee.resetState=jn;function Sn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var it=function e(){var t=this;Sn(this,e),this.register=function(n){t.openInstances.indexOf(n)===-1&&(t.openInstances.push(n),t.emit("register"))},this.deregister=function(n){var o=t.openInstances.indexOf(n);o!==-1&&(t.openInstances.splice(o,1),t.emit("deregister"))},this.subscribe=function(n){t.subscribers.push(n)},this.emit=function(n){t.subscribers.forEach(function(o){return o(n,t.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},fe=new it;function Mn(){console.log("portalOpenInstances ----------"),console.log(fe.openInstances.length),fe.openInstances.forEach(function(e){return console.log(e)}),console.log("end portalOpenInstances ----------")}function jn(){fe=new it}ee.default=fe;var Ee={};Object.defineProperty(Ee,"__esModule",{value:!0});Ee.resetState=_n;Ee.log=Nn;var Pn=ee,Tn=kn(Pn);function kn(e){return e&&e.__esModule?e:{default:e}}var M=void 0,R=void 0,K=[];function _n(){for(var e=[M,R],t=0;t<e.length;t++){var n=e[t];n&&n.parentNode&&n.parentNode.removeChild(n)}M=R=null,K=[]}function Nn(){console.log("bodyTrap ----------"),console.log(K.length);for(var e=[M,R],t=0;t<e.length;t++){var n=e[t],o=n||{};console.log(o.nodeName,o.className,o.id)}console.log("edn bodyTrap ----------")}function Pe(){K.length!==0&&K[K.length-1].focusContent()}function Rn(e,t){!M&&!R&&(M=document.createElement("div"),M.setAttribute("data-react-modal-body-trap",""),M.style.position="absolute",M.style.opacity="0",M.setAttribute("tabindex","0"),M.addEventListener("focus",Pe),R=M.cloneNode(),R.addEventListener("focus",Pe)),K=t,K.length>0?(document.body.firstChild!==M&&document.body.insertBefore(M,document.body.firstChild),document.body.lastChild!==R&&document.body.appendChild(R)):(M.parentElement&&M.parentElement.removeChild(M),R.parentElement&&R.parentElement.removeChild(R))}Tn.default.subscribe(Rn);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(g){for(var m=1;m<arguments.length;m++){var O=arguments[m];for(var r in O)Object.prototype.hasOwnProperty.call(O,r)&&(g[r]=O[r])}return g},o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(g){return typeof g}:function(g){return g&&typeof Symbol=="function"&&g.constructor===Symbol&&g!==Symbol.prototype?"symbol":typeof g},i=function(){function g(m,O){for(var r=0;r<O.length;r++){var u=O[r];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(m,u.key,u)}}return function(m,O,r){return O&&g(m.prototype,O),r&&g(m,r),m}}(),l=j,A=nt,s=I(A),d=V,p=U(d),v=tn,h=I(v),x=W,b=U(x),y=Z,T=U(y),L=D,F=I(L),te=ee,Y=I(te);function U(g){if(g&&g.__esModule)return g;var m={};if(g!=null)for(var O in g)Object.prototype.hasOwnProperty.call(g,O)&&(m[O]=g[O]);return m.default=g,m}function I(g){return g&&g.__esModule?g:{default:g}}function C(g,m){if(!(g instanceof m))throw new TypeError("Cannot call a class as a function")}function w(g,m){if(!g)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return m&&(typeof m=="object"||typeof m=="function")?m:g}function P(g,m){if(typeof m!="function"&&m!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof m);g.prototype=Object.create(m&&m.prototype,{constructor:{value:g,enumerable:!1,writable:!0,configurable:!0}}),m&&(Object.setPrototypeOf?Object.setPrototypeOf(g,m):g.__proto__=m)}var _={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},xe=function(m){return m.code==="Tab"||m.keyCode===9},ht=function(m){return m.code==="Escape"||m.keyCode===27},le=0,Ae=function(g){P(m,g);function m(O){C(this,m);var r=w(this,(m.__proto__||Object.getPrototypeOf(m)).call(this,O));return r.setOverlayRef=function(u){r.overlay=u,r.props.overlayRef&&r.props.overlayRef(u)},r.setContentRef=function(u){r.content=u,r.props.contentRef&&r.props.contentRef(u)},r.afterClose=function(){var u=r.props,S=u.appElement,k=u.ariaHideApp,E=u.htmlOpenClassName,z=u.bodyOpenClassName,q=u.parentSelector,ce=q&&q().ownerDocument||document;z&&T.remove(ce.body,z),E&&T.remove(ce.getElementsByTagName("html")[0],E),k&&le>0&&(le-=1,le===0&&b.show(S)),r.props.shouldFocusAfterRender&&(r.props.shouldReturnFocusAfterClose?(p.returnFocus(r.props.preventScroll),p.teardownScopedFocus()):p.popWithoutFocus()),r.props.onAfterClose&&r.props.onAfterClose(),Y.default.deregister(r)},r.open=function(){r.beforeOpen(),r.state.afterOpen&&r.state.beforeClose?(clearTimeout(r.closeTimer),r.setState({beforeClose:!1})):(r.props.shouldFocusAfterRender&&(p.setupScopedFocus(r.node),p.markForFocusLater()),r.setState({isOpen:!0},function(){r.openAnimationFrame=requestAnimationFrame(function(){r.setState({afterOpen:!0}),r.props.isOpen&&r.props.onAfterOpen&&r.props.onAfterOpen({overlayEl:r.overlay,contentEl:r.content})})}))},r.close=function(){r.props.closeTimeoutMS>0?r.closeWithTimeout():r.closeWithoutTimeout()},r.focusContent=function(){return r.content&&!r.contentHasFocus()&&r.content.focus({preventScroll:!0})},r.closeWithTimeout=function(){var u=Date.now()+r.props.closeTimeoutMS;r.setState({beforeClose:!0,closesAt:u},function(){r.closeTimer=setTimeout(r.closeWithoutTimeout,r.state.closesAt-Date.now())})},r.closeWithoutTimeout=function(){r.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},r.afterClose)},r.handleKeyDown=function(u){xe(u)&&(0,h.default)(r.content,u),r.props.shouldCloseOnEsc&&ht(u)&&(u.stopPropagation(),r.requestClose(u))},r.handleOverlayOnClick=function(u){r.shouldClose===null&&(r.shouldClose=!0),r.shouldClose&&r.props.shouldCloseOnOverlayClick&&(r.ownerHandlesClose()?r.requestClose(u):r.focusContent()),r.shouldClose=null},r.handleContentOnMouseUp=function(){r.shouldClose=!1},r.handleOverlayOnMouseDown=function(u){!r.props.shouldCloseOnOverlayClick&&u.target==r.overlay&&u.preventDefault()},r.handleContentOnClick=function(){r.shouldClose=!1},r.handleContentOnMouseDown=function(){r.shouldClose=!1},r.requestClose=function(u){return r.ownerHandlesClose()&&r.props.onRequestClose(u)},r.ownerHandlesClose=function(){return r.props.onRequestClose},r.shouldBeClosed=function(){return!r.state.isOpen&&!r.state.beforeClose},r.contentHasFocus=function(){return document.activeElement===r.content||r.content.contains(document.activeElement)},r.buildClassName=function(u,S){var k=(typeof S>"u"?"undefined":o(S))==="object"?S:{base:_[u],afterOpen:_[u]+"--after-open",beforeClose:_[u]+"--before-close"},E=k.base;return r.state.afterOpen&&(E=E+" "+k.afterOpen),r.state.beforeClose&&(E=E+" "+k.beforeClose),typeof S=="string"&&S?E+" "+S:E},r.attributesFromObject=function(u,S){return Object.keys(S).reduce(function(k,E){return k[u+"-"+E]=S[E],k},{})},r.state={afterOpen:!1,beforeClose:!1},r.shouldClose=null,r.moveFromContentToOverlay=null,r}return i(m,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(r,u){this.props.isOpen&&!r.isOpen?this.open():!this.props.isOpen&&r.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!u.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var r=this.props,u=r.appElement,S=r.ariaHideApp,k=r.htmlOpenClassName,E=r.bodyOpenClassName,z=r.parentSelector,q=z&&z().ownerDocument||document;E&&T.add(q.body,E),k&&T.add(q.getElementsByTagName("html")[0],k),S&&(le+=1,b.hide(u)),Y.default.register(this)}},{key:"render",value:function(){var r=this.props,u=r.id,S=r.className,k=r.overlayClassName,E=r.defaultStyles,z=r.children,q=S?{}:E.content,ce=k?{}:E.overlay;if(this.shouldBeClosed())return null;var mt={ref:this.setOverlayRef,className:this.buildClassName("overlay",k),style:n({},ce,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},gt=n({id:u,ref:this.setContentRef,style:n({},q,this.props.style.content),className:this.buildClassName("content",S),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",n({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),xt=this.props.contentElement(gt,z);return this.props.overlayElement(mt,xt)}}]),m}(l.Component);Ae.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},Ae.propTypes={isOpen:s.default.bool.isRequired,defaultStyles:s.default.shape({content:s.default.object,overlay:s.default.object}),style:s.default.shape({content:s.default.object,overlay:s.default.object}),className:s.default.oneOfType([s.default.string,s.default.object]),overlayClassName:s.default.oneOfType([s.default.string,s.default.object]),parentSelector:s.default.func,bodyOpenClassName:s.default.string,htmlOpenClassName:s.default.string,ariaHideApp:s.default.bool,appElement:s.default.oneOfType([s.default.instanceOf(F.default),s.default.instanceOf(L.SafeHTMLCollection),s.default.instanceOf(L.SafeNodeList),s.default.arrayOf(s.default.instanceOf(F.default))]),onAfterOpen:s.default.func,onAfterClose:s.default.func,onRequestClose:s.default.func,closeTimeoutMS:s.default.number,shouldFocusAfterRender:s.default.bool,shouldCloseOnOverlayClick:s.default.bool,shouldReturnFocusAfterClose:s.default.bool,preventScroll:s.default.bool,role:s.default.string,contentLabel:s.default.string,aria:s.default.object,data:s.default.object,children:s.default.node,shouldCloseOnEsc:s.default.bool,overlayRef:s.default.func,contentRef:s.default.func,id:s.default.string,overlayElement:s.default.func,contentElement:s.default.func,testId:s.default.string},t.default=Ae,e.exports=t.default})(be,be.exports);var Dn=be.exports;function st(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);e!=null&&this.setState(e)}function lt(e){function t(n){var o=this.constructor.getDerivedStateFromProps(e,n);return o??null}this.setState(t.bind(this))}function ct(e,t){try{var n=this.props,o=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,o)}finally{this.props=n,this.state=o}}st.__suppressDeprecationWarning=!0;lt.__suppressDeprecationWarning=!0;ct.__suppressDeprecationWarning=!0;function Vn(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if(typeof e.getDerivedStateFromProps!="function"&&typeof t.getSnapshotBeforeUpdate!="function")return e;var n=null,o=null,i=null;if(typeof t.componentWillMount=="function"?n="componentWillMount":typeof t.UNSAFE_componentWillMount=="function"&&(n="UNSAFE_componentWillMount"),typeof t.componentWillReceiveProps=="function"?o="componentWillReceiveProps":typeof t.UNSAFE_componentWillReceiveProps=="function"&&(o="UNSAFE_componentWillReceiveProps"),typeof t.componentWillUpdate=="function"?i="componentWillUpdate":typeof t.UNSAFE_componentWillUpdate=="function"&&(i="UNSAFE_componentWillUpdate"),n!==null||o!==null||i!==null){var l=e.displayName||e.name,A=typeof e.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+l+" uses "+A+" but also contains the following legacy lifecycles:"+(n!==null?`
  `+n:"")+(o!==null?`
  `+o:"")+(i!==null?`
  `+i:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof e.getDerivedStateFromProps=="function"&&(t.componentWillMount=st,t.componentWillReceiveProps=lt),typeof t.getSnapshotBeforeUpdate=="function"){if(typeof t.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=ct;var s=t.componentDidUpdate;t.componentDidUpdate=function(p,v,h){var x=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:h;s.call(this,p,v,x)}}return e}const Wn=Object.freeze(Object.defineProperty({__proto__:null,polyfill:Vn},Symbol.toStringTag,{value:"Module"})),Fn=At(Wn);Object.defineProperty(G,"__esModule",{value:!0});G.bodyOpenClassName=G.portalClassName=void 0;var Te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Ln=function(){function e(t,n){for(var o=0;o<n.length;o++){var i=n[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),dt=j,he=ie(dt),In=vt,me=ie(In),Hn=nt,f=ie(Hn),Un=Dn,ke=ie(Un),Bn=W,zn=$n(Bn),B=D,_e=ie(B),qn=Fn;function $n(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function ie(e){return e&&e.__esModule?e:{default:e}}function Xn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ne(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Kn(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Gn=G.portalClassName="ReactModalPortal",Yn=G.bodyOpenClassName="ReactModal__Body--open",$=B.canUseDOM&&me.default.createPortal!==void 0,Re=function(t){return document.createElement(t)},De=function(){return $?me.default.createPortal:me.default.unstable_renderSubtreeIntoContainer};function de(e){return e()}var se=function(e){Kn(t,e);function t(){var n,o,i,l;Xn(this,t);for(var A=arguments.length,s=Array(A),d=0;d<A;d++)s[d]=arguments[d];return l=(o=(i=Ne(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(s))),i),i.removePortal=function(){!$&&me.default.unmountComponentAtNode(i.node);var p=de(i.props.parentSelector);p&&p.contains(i.node)?p.removeChild(i.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},i.portalRef=function(p){i.portal=p},i.renderPortal=function(p){var v=De(),h=v(i,he.default.createElement(ke.default,Te({defaultStyles:t.defaultStyles},p)),i.node);i.portalRef(h)},o),Ne(i,l)}return Ln(t,[{key:"componentDidMount",value:function(){if(B.canUseDOM){$||(this.node=Re("div")),this.node.className=this.props.portalClassName;var o=de(this.props.parentSelector);o.appendChild(this.node),!$&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(o){var i=de(o.parentSelector),l=de(this.props.parentSelector);return{prevParent:i,nextParent:l}}},{key:"componentDidUpdate",value:function(o,i,l){if(B.canUseDOM){var A=this.props,s=A.isOpen,d=A.portalClassName;o.portalClassName!==d&&(this.node.className=d);var p=l.prevParent,v=l.nextParent;v!==p&&(p.removeChild(this.node),v.appendChild(this.node)),!(!o.isOpen&&!s)&&!$&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!B.canUseDOM||!this.node||!this.portal)){var o=this.portal.state,i=Date.now(),l=o.isOpen&&this.props.closeTimeoutMS&&(o.closesAt||i+this.props.closeTimeoutMS);l?(o.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,l-i)):this.removePortal()}}},{key:"render",value:function(){if(!B.canUseDOM||!$)return null;!this.node&&$&&(this.node=Re("div"));var o=De();return o(he.default.createElement(ke.default,Te({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(o){zn.setElement(o)}}]),t}(dt.Component);se.propTypes={isOpen:f.default.bool.isRequired,style:f.default.shape({content:f.default.object,overlay:f.default.object}),portalClassName:f.default.string,bodyOpenClassName:f.default.string,htmlOpenClassName:f.default.string,className:f.default.oneOfType([f.default.string,f.default.shape({base:f.default.string.isRequired,afterOpen:f.default.string.isRequired,beforeClose:f.default.string.isRequired})]),overlayClassName:f.default.oneOfType([f.default.string,f.default.shape({base:f.default.string.isRequired,afterOpen:f.default.string.isRequired,beforeClose:f.default.string.isRequired})]),appElement:f.default.oneOfType([f.default.instanceOf(_e.default),f.default.instanceOf(B.SafeHTMLCollection),f.default.instanceOf(B.SafeNodeList),f.default.arrayOf(f.default.instanceOf(_e.default))]),onAfterOpen:f.default.func,onRequestClose:f.default.func,closeTimeoutMS:f.default.number,ariaHideApp:f.default.bool,shouldFocusAfterRender:f.default.bool,shouldCloseOnOverlayClick:f.default.bool,shouldReturnFocusAfterClose:f.default.bool,preventScroll:f.default.bool,parentSelector:f.default.func,aria:f.default.object,data:f.default.object,role:f.default.string,contentLabel:f.default.string,shouldCloseOnEsc:f.default.bool,overlayRef:f.default.func,contentRef:f.default.func,id:f.default.string,overlayElement:f.default.func,contentElement:f.default.func};se.defaultProps={isOpen:!1,portalClassName:Gn,bodyOpenClassName:Yn,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(t,n){return he.default.createElement("div",t,n)},contentElement:function(t,n){return he.default.createElement("div",t,n)}};se.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,qn.polyfill)(se);G.default=se;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=G,o=i(n);function i(l){return l&&l.__esModule?l:{default:l}}t.default=o.default,e.exports=t.default})(ve,ve.exports);var Jn=ve.exports;const ut=bt(Jn),H="/goit-group2-react-nodejs/assets/horodiukIcons-b8c45607.svg",Ve=c.select`
  margin-bottom: 24px;
  border: 1px solid #d7e3ff;
  border-radius: 6px;
  padding: 12px 10px;
  width: 90px;
  height: 44px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`,Qn=c.div``,We=c.div`
  position: relative;
  display: inline-block;
`,Fe=c.svg`
  position: absolute;
  top: 10px;
  right: 6px;
  pointer-events: none;
`;function pt({onChange:e,value:t}){const n=Array.from(new Array(24),(d,p)=>p),o=[0,5,10,15,20,25,30,35,40,45,50,55],i=new Date(t);let l=i.getHours(),A=i.getMinutes();const s=o.reduce((d,p)=>p>=A&&(d===null||Math.abs(p-A)<Math.abs(d-A))?p:d,null);return s===null?(l=(l+1)%24,A=0):A=s,a.jsxs(Qn,{id:"selectTimeWrapper",children:[a.jsxs(We,{children:[a.jsx(Ve,{onChange:d=>e(d,"hour"),value:l,children:n.map(d=>a.jsx("option",{value:d,children:d.toString().padStart(2,"0")},d))}),a.jsx(Fe,{width:"24",height:"24",children:a.jsx("use",{href:`${H}#icon-arrow`})})]}),":",a.jsxs(We,{children:[a.jsx(Ve,{onChange:d=>e(d,"minute"),value:A,children:o.map(d=>a.jsx("option",{value:d,children:d.toString().padStart(2,"0")},d))}),a.jsx(Fe,{width:"24",height:"24",children:a.jsx("use",{href:`${H}#icon-arrow`})})]})]})}const Zn=c.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  overflow: scroll;
`,eo=c.div`
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
`,to=c.button`
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
`,no=c.h2`
  font-weight: 500;
  font-size: 26px;
  line-height: 123%;
  color: #2f2f2f;
  margin-bottom: 24px;
`,Le=c.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  color: #2f2f2f;
  margin-bottom: 16px;
`,Ie=c.p`
  font-size: 16px;
  line-height: 125%;
  color: #2f2f2f;
  margin-bottom: 12px;
`,He=c.button`
  box-shadow: 0 2px 4px 0 rgba(64, 123, 255, 0.2);
  background-color: #fff;
  border: 1px solid #9ebbff;
  border-radius: 30px;
  padding: 0px;
  width: 44px;
  height: 44px;
  cursor: pointer;
`,Ue=c.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 133%;
  color: #407bff;
  text-align: center;
`,oo=c.input`
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
`,ro=c.input`
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
`,ao=c.button`
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
`,io=c.div`
  background-color: #d7e3ff;
  border-radius: 40px;
  padding: 6px 10px;
  height: 36px;
`,so=c.div`
  display: flex;
  width: 194px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`,lo=c.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
  }
`;ut.setAppElement("#root");function ft({isOpen:e,onClose:t,onAddWater:n}){const[o,i]=j.useState(0),[l,A]=j.useState(!1),[s,d]=j.useState(0),p=Xe(),[v,h]=j.useState(new Date),x=(C,w="")=>{let P=new Date(v);switch(w){case"hour":P.setHours(parseInt(C.target.value,10));break;case"minute":P.setMinutes(Math.ceil(parseInt(C.target.value,10)/5)*5);break}h(P)},b=()=>{p(yt({amount:o,date:Date(v)}))},y=()=>{t()},T=()=>{i(o+50),d(o+50)},L=()=>{if(o-50<0){i(0),d(0);return}i(o-50),d(o-50)},F=()=>{i(s)},te=C=>{const w=parseInt(C.target.value>0?C.target.value:0,10);d(w)},Y=C=>{C.target.closest("#selectTimeWrapper")||(A(!1),C.target===C.currentTarget&&y())},U=C=>{C.key==="Escape"&&y()};j.useEffect(()=>(window.addEventListener("keydown",U),()=>{window.removeEventListener("keydown",U)}),[]);const I=C=>{const w=new Date(C),P=_=>_.toString().padStart(2,"0");return`${P(w.getHours())}:${P(w.getMinutes())}`};return Ke.createPortal(a.jsx(Zn,{onClick:Y,children:a.jsxs(eo,{children:[a.jsx(to,{onClick:y,children:a.jsx("svg",{width:"24",height:"24",children:a.jsx("use",{href:`${H}#icon-close`})})}),a.jsx(no,{children:"Add water"}),a.jsx(Le,{children:"Choose a value:"}),a.jsx(Ie,{children:"Amount of water:"}),a.jsxs(so,{children:[a.jsx(He,{onClick:L,children:a.jsx("svg",{width:"44",height:"44",children:a.jsx("use",{href:`${H}#icon-minus`})})}),a.jsx(io,{children:a.jsxs(Ue,{children:[o,"ml"]})}),a.jsx(He,{onClick:T,children:a.jsx("svg",{width:"44",height:"44",children:a.jsx("use",{href:`${H}#icon-plus`})})})]}),a.jsx(Ie,{children:"Recording time:"}),l?a.jsx(pt,{onChange:x,value:v}):a.jsx(oo,{type:"text","aria-label":"Choose time",value:I(v),onChange:()=>{},onFocus:()=>A(!0)}),a.jsx(Le,{children:"Enter the value of the water used:"}),a.jsx(ro,{value:s,onBlur:F,onChange:te,type:"number"}),a.jsxs(lo,{children:[a.jsxs(Ue,{children:[o,"ml"]}),a.jsx(ao,{onClick:b,type:"button",children:"Save"})]})]})}),document.getElementById("modal-root"))}const co=c.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  overflow: scroll;
`,uo=c.div`
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
`,po=c.button`
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
`,fo=c.h2`
  font-weight: 500;
  font-size: 26px;
  line-height: 123%;
  color: #2f2f2f;
  margin-bottom: 24px;
`,Be=c.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  color: #2f2f2f;
  margin-bottom: 16px;
`,ze=c.p`
  font-size: 16px;
  line-height: 125%;
  color: #2f2f2f;
  margin-bottom: 12px;
`,qe=c.button`
  box-shadow: 0 2px 4px 0 rgba(64, 123, 255, 0.2);
  background-color: #fff;
  border: 1px solid #9ebbff;
  border-radius: 30px;
  padding: 0px;
  width: 44px;
  height: 44px;
  cursor: pointer;
`,$e=c.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 133%;
  color: #407bff;
  text-align: center;
`,ho=c.input`
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
`,mo=c.input`
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
`,go=c.button`
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
`,xo=c.div`
  background-color: #d7e3ff;
  border-radius: 40px;
  padding: 6px 10px;
  height: 36px;
`,Ao=c.div`
  display: flex;
  width: 194px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`,vo=c.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
  }
`,bo=c.div`
  display: flex;
  gap: 14px;
  align-items: center;
  margin-bottom: 24px;
  border-radius: 10px;
  padding: 8px 24px;
  width: 256px;
  background-color: #ecf2ff;
`,yo=c.p`
  font-size: 18px;
  line-height: 133%;
  color: #407bff;
`,wo=c.p`
  font-size: 16px;
  line-height: 125%;
  color: #2f2f2f;
`;ut.setAppElement("#root");function Oo({isOpen:e,onClose:t,onAddWater:n}){const o=Ge(Wt)||{amount:250,date:new Date},[i,l]=j.useState(o.amount),[A,s]=j.useState(!1),[d,p]=j.useState(0),v=Xe(),[h,x]=j.useState(o.date),b=(w,P="")=>{let _=new Date(h);switch(P){case"hour":_.setHours(parseInt(w.target.value,10));break;case"minute":_.setMinutes(Math.ceil(parseInt(w.target.value,10)/5)*5);break}x(_)},y=()=>{v(wt({amount:i,date:Date(h)}))},T=()=>{t()},L=()=>{l(i+50),p(i+50)},F=()=>{if(i-50<0){l(0),p(0);return}l(i-50),p(i-50)},te=()=>{l(d)},Y=w=>{const P=parseInt(w.target.value>0?w.target.value:0,10);p(P)},U=w=>{w.target.closest("#selectTimeWrapper")||(s(!1),w.target===w.currentTarget&&T())},I=w=>{w.key==="Escape"&&T()};j.useEffect(()=>(window.addEventListener("keydown",I),()=>{window.removeEventListener("keydown",I)}),[]);const C=w=>{const P=new Date(w),_=xe=>xe.toString().padStart(2,"0");return`${_(P.getHours())}:${_(P.getMinutes())}`};return Ke.createPortal(a.jsx(co,{onClick:U,children:a.jsxs(uo,{children:[a.jsx(po,{onClick:T,children:a.jsx("svg",{width:"24",height:"24",children:a.jsx("use",{href:`${H}#icon-close`})})}),a.jsx(fo,{children:"Edit the entered amount of water"}),a.jsxs(bo,{children:[" ",a.jsx("svg",{width:"36",height:"36",children:a.jsx("use",{href:`${H}#icon-glass`})}),a.jsxs(yo,{children:[o.amount,"ml"]}),a.jsx(wo,{children:C(o.time)})]}),a.jsx(Be,{children:"Correct entered data:"}),a.jsx(ze,{children:"Amount of water:"}),a.jsxs(Ao,{children:[a.jsx(qe,{onClick:F,children:a.jsx("svg",{width:"44",height:"44",children:a.jsx("use",{href:`${H}#icon-minus`})})}),a.jsx(xo,{children:a.jsxs($e,{children:[i,"ml"]})}),a.jsx(qe,{onClick:L,children:a.jsx("svg",{width:"44",height:"44",children:a.jsx("use",{href:`${H}#icon-plus`})})})]}),a.jsx(ze,{children:"Recording time:"}),A?a.jsx(pt,{onChange:b,value:h}):a.jsx(ho,{type:"text","aria-label":"Choose time",value:C(h),onChange:()=>{},onFocus:()=>s(!0)}),a.jsx(Be,{children:"Enter the value of the water used:"}),a.jsx(mo,{value:d,onBlur:te,onChange:Y,type:"number"}),a.jsxs(vo,{children:[a.jsxs($e,{children:[i,"ml"]}),a.jsx(go,{onClick:y,type:"button",children:"Save"})]})]})}),document.getElementById("modal-root"))}const Co=c.ul`
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
`,Eo=c.li`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: space-between;
`,So=c.div`
  display: flex;
  align-items: center;
`,Mo=c.p`
  color: #407bff;
  font-size: 18px;
  line-height: 24px;
  margin-left: 12px;
`,jo=c.p`
  margin-left: 12px;
  line-height: 24px;
  font-size: 12px;
  color: #2f2f2f;

  @media screen and (min-width: 768px) {
    margin-left: 16px;
  }
`,Po=c.h2`
  margin-bottom: 16px;
  color: #2f2f2f;
  font-weight: 500px;
  font-size: 24px;
  line-height: 30px;

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 32px;
  }
`,To=c.button`
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
`,ko=c.button`
  margin-right: 18px;
  background-color: transparent;
`,_o=c.button`
  background-color: transparent;
`,No=[{id:"1",amount:"250ml",time:"14:00 PM"},{id:"2",amount:"250ml",time:"14:00 PM"},{id:"3",amount:"250ml",time:"14:00 PM"},{id:"4",amount:"250ml",time:"14:00 PM"},{id:"5",amount:"250ml",time:"14:00 PM"},{id:"6",amount:"250ml",time:"14:00 PM"}],Ro=()=>{const[e,t]=j.useState(No),[n,o]=j.useState(!1),[i,l]=j.useState(!1),A=Ge(Vt);console.log(A);const s=()=>{o(!1)},d=()=>{o(!0)},p=()=>{l(!1)},v=()=>{l(!0)},h=x=>{t(b=>b.filter(y=>y.id!==x))};return a.jsxs("div",{children:[a.jsxs("div",{children:[a.jsx(Po,{children:"Today"}),a.jsx(Co,{children:e.length>0&&e.map(({id:x,amount:b,time:y})=>a.jsxs(a.Fragment,{children:[" ",a.jsxs(Eo,{children:[a.jsxs(So,{children:[a.jsx("img",{src:Ft,alt:"Icon glass"}),a.jsx(Mo,{children:b}),a.jsx(jo,{children:y})]}),a.jsxs("div",{children:[a.jsx(ko,{type:"button",onClick:v,children:a.jsx("img",{src:Lt,alt:"Icon glass"})}),a.jsx(_o,{type:"button",onClick:()=>h(x),children:a.jsx("img",{src:It,alt:"Icon glass"})})]})]},x),i&&a.jsx(Oo,{isOpen:i,onClose:p})]}))})]}),a.jsxs(To,{type:"button",onClick:d,children:[a.jsx(Dt,{})," Add Water"]}),n&&a.jsx(ft,{isOpen:n,onClose:s})]})},Do=Ro;function Vo(e){return Qe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"16"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"16",y2:"12"},child:[]}]})(e)}const Wo=c.div`
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
`,Fo=c.div`
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
`,Lo=c.input`
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
`,Io=c.div`
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
`,Ho=c.button`
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
`,Uo=()=>{const[e,t]=j.useState(!1),n=()=>{t(!1)},o=95,i=()=>{t(!0)};return a.jsxs(Wo,{children:[a.jsxs(Fo,{children:[a.jsx("h2",{children:"Today"}),a.jsx(Lo,{value:o,type:"range",min:"0",max:"100"}),a.jsxs(Io,{children:[a.jsx("p",{children:"0%"}),a.jsx("p",{children:"50%"}),a.jsx("p",{children:"100%"})]})]}),a.jsxs(Ho,{onClick:i,type:"button",children:[a.jsx(Vo,{}),"Add Water"]}),e&&a.jsx(ft,{isOpen:e,onClose:n})]})},Bo=Uo,zo="/goit-group2-react-nodejs/assets/bottleHomeScreenDesk-630fd92f.png",qo="/goit-group2-react-nodejs/assets/bottleHomeScreenDesk2x@2x-51f4e9e6.png",$o="/goit-group2-react-nodejs/assets/bottleHomeScreenTab-2759a74b.png",Xo="/goit-group2-react-nodejs/assets/bottleHomeScreenTab@2x-805003a0.png",Ko="/goit-group2-react-nodejs/assets/bottleHomeScreenMob-fe8938bc.png",Go="/goit-group2-react-nodejs/assets/bottleHomeScreenMob2x@2x-9640a1cb.png",Yo="data:image/png;base64,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",Jo="/goit-group2-react-nodejs/assets/backgroundElementHomeScreenTab-4de5d48f.png",Qo=c.div`
  background-size: cover;
  background: url(${Yo});
  height: max-content;
  background-repeat: no-repeat;
  min-height: calc(100% - 64px);

  @media screen and (min-width: 768px) {
    background: url(${Jo});
    min-height: calc(100% - 80px);
  }

  @media screen and (min-width: 1440px) {
    background: url(${Ot});
    min-height: calc(100% - 72px);
  }
`,Zo=c.div`
  margin-bottom: 40px;
  margin-top: 20px;
  background-size: 280px 208px;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${Ko});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 440px;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${Go});
  }

  @media screen and (min-width: 768px) {
    background-size: 518px 386px;
    background-position: calc(50% + 9px) 8px;
    height: 492px;
    background-image: url(${$o});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background: url(${Xo});
      background-size: 518px 386px;
      background-repeat: no-repeat;
    }
  }

  @media screen and (min-width: 1440px) {
    background-size: 738px 548px;
    background-position: calc(50% + 10px) 46px;
    height: 680px;
    background-image: url(${zo});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${qo});
    }
  }
`,er=c.div`
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
`,tr=c.div`
  margin-bottom: 40px;
  margin-top: 20px;
  padding: 24px 8px;
  background-color: #ecf2ff;
  box-shadow: 0px 4px 14px 0px #407bff4d;
  border-radius: 10px;
  @media screen and (min-width: 768px) {
    padding: 32px 24px;
  }

  @media screen and (min-width: 1440px) {
    width: 50%;
  }
`;function rr(){return a.jsx(Qo,{children:a.jsxs(er,{children:[a.jsxs(Zo,{children:[a.jsx(Mt,{}),a.jsx(Bo,{})]}),a.jsx(tr,{children:a.jsx(Do,{})})]})})}export{rr as default};
