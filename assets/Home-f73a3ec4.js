import{n as x,j as f,R as L,r as q,g as rt,a as at,b as it}from"./index-b3f24917.js";const lt=x.div`
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
`,st=x.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,ut=()=>{const e=()=>{console.log("Open modal")};return f.jsx("div",{children:f.jsxs(lt,{children:[f.jsx("h2",{children:"My daily norma:"}),f.jsxs(st,{children:[f.jsx("p",{children:"1.5 L"}),f.jsx("button",{onClick:e,type:"button",children:"Edit"})]})]})})},ct=ut;var je={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},xe=L.createContext&&L.createContext(je),ft=["attr","size","title"];function dt(e,t){if(e==null)return{};var n=pt(e,t),r,a;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function pt(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,s;for(s=0;s<r.length;s++)a=r[s],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function oe(){return oe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},oe.apply(this,arguments)}function Oe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function re(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Oe(Object(n),!0).forEach(function(r){ht(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Oe(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ht(e,t,n){return t=mt(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function mt(e){var t=vt(e,"string");return typeof t=="symbol"?t:String(t)}function vt(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Fe(e){return e&&e.map((t,n)=>L.createElement(t.tag,re({key:n},t.attr),Fe(t.child)))}function yt(e){return t=>L.createElement(bt,oe({attr:re({},e.attr)},t),Fe(e.child))}function bt(e){var t=n=>{var{attr:r,size:a,title:s}=e,y=dt(e,ft),i=a||n.size||"1em",v;return n.className&&(v=n.className),e.className&&(v=(v?v+" ":"")+e.className),L.createElement("svg",oe({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,y,{className:v,style:re(re({color:e.color||n.color},n.style),e.style),height:i,width:i,xmlns:"http://www.w3.org/2000/svg"}),s&&L.createElement("title",null,s),e.children)};return xe!==void 0?L.createElement(xe.Consumer,null,n=>t(n)):t(je)}function gt(e){return yt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"16"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"16",y2:"12"},child:[]}]})(e)}var de={exports:{}},U={},We={exports:{}},xt="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Ot=xt,wt=Ot;function Le(){}function ke(){}ke.resetWarningCache=Le;var _t=function(){function e(r,a,s,y,i,v){if(v!==wt){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:ke,resetWarningCache:Le};return n.PropTypes=n,n};We.exports=_t();var Ue=We.exports,pe={exports:{}},N={},he={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=g;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var n="none",r="contents",a=/input|select|textarea|button|object|iframe/;function s(p,m){return m.getPropertyValue("overflow")!=="visible"||p.scrollWidth<=0&&p.scrollHeight<=0}function y(p){var m=p.offsetWidth<=0&&p.offsetHeight<=0;if(m&&!p.innerHTML)return!0;try{var b=window.getComputedStyle(p),_=b.getPropertyValue("display");return m?_!==r&&s(p,b):_===n}catch{return console.warn("Failed to inspect element style"),!1}}function i(p){for(var m=p,b=p.getRootNode&&p.getRootNode();m&&m!==document.body;){if(b&&m===b&&(m=b.host.parentNode),y(m))return!1;m=m.parentNode}return!0}function v(p,m){var b=p.nodeName.toLowerCase(),_=a.test(b)&&!p.disabled||b==="a"&&p.href||m;return _&&i(p)}function h(p){var m=p.getAttribute("tabindex");m===null&&(m=void 0);var b=isNaN(m);return(b||m>=0)&&v(p,!b)}function g(p){var m=[].slice.call(p.querySelectorAll("*"),0).reduce(function(b,_){return b.concat(_.shadowRoot?g(_.shadowRoot):[_])},[]);return m.filter(h)}e.exports=t.default})(he,he.exports);var Ie=he.exports;Object.defineProperty(N,"__esModule",{value:!0});N.resetState=Mt;N.log=Pt;N.handleBlur=G;N.handleFocus=X;N.markForFocusLater=Tt;N.returnFocus=Nt;N.popWithoutFocus=Rt;N.setupScopedFocus=At;N.teardownScopedFocus=Dt;var Ct=Ie,Et=St(Ct);function St(e){return e&&e.__esModule?e:{default:e}}var B=[],H=null,me=!1;function Mt(){B=[]}function Pt(){}function G(){me=!0}function X(){if(me){if(me=!1,!H)return;setTimeout(function(){if(!H.contains(document.activeElement)){var e=(0,Et.default)(H)[0]||H;e.focus()}},0)}}function Tt(){B.push(document.activeElement)}function Nt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=null;try{B.length!==0&&(t=B.pop(),t.focus({preventScroll:e}));return}catch{console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}}function Rt(){B.length>0&&B.pop()}function At(e){H=e,window.addEventListener?(window.addEventListener("blur",G,!1),document.addEventListener("focus",X,!0)):(window.attachEvent("onBlur",G),document.attachEvent("onFocus",X))}function Dt(){H=null,window.addEventListener?(window.removeEventListener("blur",G),document.removeEventListener("focus",X)):(window.detachEvent("onBlur",G),document.detachEvent("onFocus",X))}var ve={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=y;var n=Ie,r=a(n);function a(i){return i&&i.__esModule?i:{default:i}}function s(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return i.activeElement.shadowRoot?s(i.activeElement.shadowRoot):i.activeElement}function y(i,v){var h=(0,r.default)(i);if(!h.length){v.preventDefault();return}var g=void 0,p=v.shiftKey,m=h[0],b=h[h.length-1],_=s();if(i===_){if(!p)return;g=b}if(b===_&&!p&&(g=m),m===_&&p&&(g=b),g){v.preventDefault(),g.focus();return}var A=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),K=A!=null&&A[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(K){var I=h.indexOf(_);if(I>-1&&(I+=p?-1:1),g=h[I],typeof g>"u"){v.preventDefault(),g=p?b:m,g.focus();return}v.preventDefault(),g.focus()}}e.exports=t.default})(ve,ve.exports);var jt=ve.exports,R={},Ft=function(){},Wt=Ft,T={},He={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(e){(function(){var t=!!(typeof window<"u"&&window.document&&window.document.createElement),n={canUseDOM:t,canUseWorkers:typeof Worker<"u",canUseEventListeners:t&&!!(window.addEventListener||window.attachEvent),canUseViewport:t&&!!window.screen};e.exports?e.exports=n:window.ExecutionEnvironment=n})()})(He);var Lt=He.exports;Object.defineProperty(T,"__esModule",{value:!0});T.canUseDOM=T.SafeNodeList=T.SafeHTMLCollection=void 0;var kt=Lt,Ut=It(kt);function It(e){return e&&e.__esModule?e:{default:e}}var se=Ut.default,Ht=se.canUseDOM?window.HTMLElement:{};T.SafeHTMLCollection=se.canUseDOM?window.HTMLCollection:{};T.SafeNodeList=se.canUseDOM?window.NodeList:{};T.canUseDOM=se.canUseDOM;T.default=Ht;Object.defineProperty(R,"__esModule",{value:!0});R.resetState=Kt;R.log=Yt;R.assertNodeList=qe;R.setElement=Vt;R.validateElement=ye;R.hide=Gt;R.show=Xt;R.documentNotReadyOrSSRTesting=Jt;var qt=Wt,Bt=zt(qt),$t=T;function zt(e){return e&&e.__esModule?e:{default:e}}var M=null;function Kt(){M&&(M.removeAttribute?M.removeAttribute("aria-hidden"):M.length!=null?M.forEach(function(e){return e.removeAttribute("aria-hidden")}):document.querySelectorAll(M).forEach(function(e){return e.removeAttribute("aria-hidden")})),M=null}function Yt(){}function qe(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function Vt(e){var t=e;if(typeof t=="string"&&$t.canUseDOM){var n=document.querySelectorAll(t);qe(n,t),t=n}return M=t||M,M}function ye(e){var t=e||M;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,Bt.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function Gt(e){var t=!0,n=!1,r=void 0;try{for(var a=ye(e)[Symbol.iterator](),s;!(t=(s=a.next()).done);t=!0){var y=s.value;y.setAttribute("aria-hidden","true")}}catch(i){n=!0,r=i}finally{try{!t&&a.return&&a.return()}finally{if(n)throw r}}}function Xt(e){var t=!0,n=!1,r=void 0;try{for(var a=ye(e)[Symbol.iterator](),s;!(t=(s=a.next()).done);t=!0){var y=s.value;y.removeAttribute("aria-hidden")}}catch(i){n=!0,r=i}finally{try{!t&&a.return&&a.return()}finally{if(n)throw r}}}function Jt(){M=null}var $={};Object.defineProperty($,"__esModule",{value:!0});$.resetState=Qt;$.log=Zt;var Y={},V={};function we(e,t){e.classList.remove(t)}function Qt(){var e=document.getElementsByTagName("html")[0];for(var t in Y)we(e,Y[t]);var n=document.body;for(var r in V)we(n,V[r]);Y={},V={}}function Zt(){}var en=function(t,n){return t[n]||(t[n]=0),t[n]+=1,n},tn=function(t,n){return t[n]&&(t[n]-=1),n},nn=function(t,n,r){r.forEach(function(a){en(n,a),t.add(a)})},on=function(t,n,r){r.forEach(function(a){tn(n,a),n[a]===0&&t.remove(a)})};$.add=function(t,n){return nn(t.classList,t.nodeName.toLowerCase()=="html"?Y:V,n.split(" "))};$.remove=function(t,n){return on(t.classList,t.nodeName.toLowerCase()=="html"?Y:V,n.split(" "))};var z={};Object.defineProperty(z,"__esModule",{value:!0});z.log=an;z.resetState=ln;function rn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var Be=function e(){var t=this;rn(this,e),this.register=function(n){t.openInstances.indexOf(n)===-1&&(t.openInstances.push(n),t.emit("register"))},this.deregister=function(n){var r=t.openInstances.indexOf(n);r!==-1&&(t.openInstances.splice(r,1),t.emit("deregister"))},this.subscribe=function(n){t.subscribers.push(n)},this.emit=function(n){t.subscribers.forEach(function(r){return r(n,t.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},ae=new Be;function an(){console.log("portalOpenInstances ----------"),console.log(ae.openInstances.length),ae.openInstances.forEach(function(e){return console.log(e)}),console.log("end portalOpenInstances ----------")}function ln(){ae=new Be}z.default=ae;var be={};Object.defineProperty(be,"__esModule",{value:!0});be.resetState=fn;be.log=dn;var sn=z,un=cn(sn);function cn(e){return e&&e.__esModule?e:{default:e}}var E=void 0,P=void 0,k=[];function fn(){for(var e=[E,P],t=0;t<e.length;t++){var n=e[t];n&&n.parentNode&&n.parentNode.removeChild(n)}E=P=null,k=[]}function dn(){console.log("bodyTrap ----------"),console.log(k.length);for(var e=[E,P],t=0;t<e.length;t++){var n=e[t],r=n||{};console.log(r.nodeName,r.className,r.id)}console.log("edn bodyTrap ----------")}function _e(){k.length!==0&&k[k.length-1].focusContent()}function pn(e,t){!E&&!P&&(E=document.createElement("div"),E.setAttribute("data-react-modal-body-trap",""),E.style.position="absolute",E.style.opacity="0",E.setAttribute("tabindex","0"),E.addEventListener("focus",_e),P=E.cloneNode(),P.addEventListener("focus",_e)),k=t,k.length>0?(document.body.firstChild!==E&&document.body.insertBefore(E,document.body.firstChild),document.body.lastChild!==P&&document.body.appendChild(P)):(E.parentElement&&E.parentElement.removeChild(E),P.parentElement&&P.parentElement.removeChild(P))}un.default.subscribe(pn);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(d){for(var c=1;c<arguments.length;c++){var O=arguments[c];for(var o in O)Object.prototype.hasOwnProperty.call(O,o)&&(d[o]=O[o])}return d},r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},a=function(){function d(c,O){for(var o=0;o<O.length;o++){var l=O[o];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(c,l.key,l)}}return function(c,O,o){return O&&d(c.prototype,O),o&&d(c,o),c}}(),s=q,y=Ue,i=Z(y),v=N,h=ue(v),g=jt,p=Z(g),m=R,b=ue(m),_=$,A=ue(_),K=T,I=Z(K),Ge=z,ge=Z(Ge);function ue(d){if(d&&d.__esModule)return d;var c={};if(d!=null)for(var O in d)Object.prototype.hasOwnProperty.call(d,O)&&(c[O]=d[O]);return c.default=d,c}function Z(d){return d&&d.__esModule?d:{default:d}}function Xe(d,c){if(!(d instanceof c))throw new TypeError("Cannot call a class as a function")}function Je(d,c){if(!d)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return c&&(typeof c=="object"||typeof c=="function")?c:d}function Qe(d,c){if(typeof c!="function"&&c!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof c);d.prototype=Object.create(c&&c.prototype,{constructor:{value:d,enumerable:!1,writable:!0,configurable:!0}}),c&&(Object.setPrototypeOf?Object.setPrototypeOf(d,c):d.__proto__=c)}var ce={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},Ze=function(c){return c.code==="Tab"||c.keyCode===9},et=function(c){return c.code==="Escape"||c.keyCode===27},ee=0,fe=function(d){Qe(c,d);function c(O){Xe(this,c);var o=Je(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,O));return o.setOverlayRef=function(l){o.overlay=l,o.props.overlayRef&&o.props.overlayRef(l)},o.setContentRef=function(l){o.content=l,o.props.contentRef&&o.props.contentRef(l)},o.afterClose=function(){var l=o.props,C=l.appElement,S=l.ariaHideApp,w=l.htmlOpenClassName,j=l.bodyOpenClassName,F=l.parentSelector,te=F&&F().ownerDocument||document;j&&A.remove(te.body,j),w&&A.remove(te.getElementsByTagName("html")[0],w),S&&ee>0&&(ee-=1,ee===0&&b.show(C)),o.props.shouldFocusAfterRender&&(o.props.shouldReturnFocusAfterClose?(h.returnFocus(o.props.preventScroll),h.teardownScopedFocus()):h.popWithoutFocus()),o.props.onAfterClose&&o.props.onAfterClose(),ge.default.deregister(o)},o.open=function(){o.beforeOpen(),o.state.afterOpen&&o.state.beforeClose?(clearTimeout(o.closeTimer),o.setState({beforeClose:!1})):(o.props.shouldFocusAfterRender&&(h.setupScopedFocus(o.node),h.markForFocusLater()),o.setState({isOpen:!0},function(){o.openAnimationFrame=requestAnimationFrame(function(){o.setState({afterOpen:!0}),o.props.isOpen&&o.props.onAfterOpen&&o.props.onAfterOpen({overlayEl:o.overlay,contentEl:o.content})})}))},o.close=function(){o.props.closeTimeoutMS>0?o.closeWithTimeout():o.closeWithoutTimeout()},o.focusContent=function(){return o.content&&!o.contentHasFocus()&&o.content.focus({preventScroll:!0})},o.closeWithTimeout=function(){var l=Date.now()+o.props.closeTimeoutMS;o.setState({beforeClose:!0,closesAt:l},function(){o.closeTimer=setTimeout(o.closeWithoutTimeout,o.state.closesAt-Date.now())})},o.closeWithoutTimeout=function(){o.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},o.afterClose)},o.handleKeyDown=function(l){Ze(l)&&(0,p.default)(o.content,l),o.props.shouldCloseOnEsc&&et(l)&&(l.stopPropagation(),o.requestClose(l))},o.handleOverlayOnClick=function(l){o.shouldClose===null&&(o.shouldClose=!0),o.shouldClose&&o.props.shouldCloseOnOverlayClick&&(o.ownerHandlesClose()?o.requestClose(l):o.focusContent()),o.shouldClose=null},o.handleContentOnMouseUp=function(){o.shouldClose=!1},o.handleOverlayOnMouseDown=function(l){!o.props.shouldCloseOnOverlayClick&&l.target==o.overlay&&l.preventDefault()},o.handleContentOnClick=function(){o.shouldClose=!1},o.handleContentOnMouseDown=function(){o.shouldClose=!1},o.requestClose=function(l){return o.ownerHandlesClose()&&o.props.onRequestClose(l)},o.ownerHandlesClose=function(){return o.props.onRequestClose},o.shouldBeClosed=function(){return!o.state.isOpen&&!o.state.beforeClose},o.contentHasFocus=function(){return document.activeElement===o.content||o.content.contains(document.activeElement)},o.buildClassName=function(l,C){var S=(typeof C>"u"?"undefined":r(C))==="object"?C:{base:ce[l],afterOpen:ce[l]+"--after-open",beforeClose:ce[l]+"--before-close"},w=S.base;return o.state.afterOpen&&(w=w+" "+S.afterOpen),o.state.beforeClose&&(w=w+" "+S.beforeClose),typeof C=="string"&&C?w+" "+C:w},o.attributesFromObject=function(l,C){return Object.keys(C).reduce(function(S,w){return S[l+"-"+w]=C[w],S},{})},o.state={afterOpen:!1,beforeClose:!1},o.shouldClose=null,o.moveFromContentToOverlay=null,o}return a(c,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(o,l){this.props.isOpen&&!o.isOpen?this.open():!this.props.isOpen&&o.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!l.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var o=this.props,l=o.appElement,C=o.ariaHideApp,S=o.htmlOpenClassName,w=o.bodyOpenClassName,j=o.parentSelector,F=j&&j().ownerDocument||document;w&&A.add(F.body,w),S&&A.add(F.getElementsByTagName("html")[0],S),C&&(ee+=1,b.hide(l)),ge.default.register(this)}},{key:"render",value:function(){var o=this.props,l=o.id,C=o.className,S=o.overlayClassName,w=o.defaultStyles,j=o.children,F=C?{}:w.content,te=S?{}:w.overlay;if(this.shouldBeClosed())return null;var tt={ref:this.setOverlayRef,className:this.buildClassName("overlay",S),style:n({},te,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},nt=n({id:l,ref:this.setContentRef,style:n({},F,this.props.style.content),className:this.buildClassName("content",C),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",n({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),ot=this.props.contentElement(nt,j);return this.props.overlayElement(tt,ot)}}]),c}(s.Component);fe.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},fe.propTypes={isOpen:i.default.bool.isRequired,defaultStyles:i.default.shape({content:i.default.object,overlay:i.default.object}),style:i.default.shape({content:i.default.object,overlay:i.default.object}),className:i.default.oneOfType([i.default.string,i.default.object]),overlayClassName:i.default.oneOfType([i.default.string,i.default.object]),parentSelector:i.default.func,bodyOpenClassName:i.default.string,htmlOpenClassName:i.default.string,ariaHideApp:i.default.bool,appElement:i.default.oneOfType([i.default.instanceOf(I.default),i.default.instanceOf(K.SafeHTMLCollection),i.default.instanceOf(K.SafeNodeList),i.default.arrayOf(i.default.instanceOf(I.default))]),onAfterOpen:i.default.func,onAfterClose:i.default.func,onRequestClose:i.default.func,closeTimeoutMS:i.default.number,shouldFocusAfterRender:i.default.bool,shouldCloseOnOverlayClick:i.default.bool,shouldReturnFocusAfterClose:i.default.bool,preventScroll:i.default.bool,role:i.default.string,contentLabel:i.default.string,aria:i.default.object,data:i.default.object,children:i.default.node,shouldCloseOnEsc:i.default.bool,overlayRef:i.default.func,contentRef:i.default.func,id:i.default.string,overlayElement:i.default.func,contentElement:i.default.func,testId:i.default.string},t.default=fe,e.exports=t.default})(pe,pe.exports);var hn=pe.exports;function $e(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);e!=null&&this.setState(e)}function ze(e){function t(n){var r=this.constructor.getDerivedStateFromProps(e,n);return r??null}this.setState(t.bind(this))}function Ke(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}$e.__suppressDeprecationWarning=!0;ze.__suppressDeprecationWarning=!0;Ke.__suppressDeprecationWarning=!0;function mn(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if(typeof e.getDerivedStateFromProps!="function"&&typeof t.getSnapshotBeforeUpdate!="function")return e;var n=null,r=null,a=null;if(typeof t.componentWillMount=="function"?n="componentWillMount":typeof t.UNSAFE_componentWillMount=="function"&&(n="UNSAFE_componentWillMount"),typeof t.componentWillReceiveProps=="function"?r="componentWillReceiveProps":typeof t.UNSAFE_componentWillReceiveProps=="function"&&(r="UNSAFE_componentWillReceiveProps"),typeof t.componentWillUpdate=="function"?a="componentWillUpdate":typeof t.UNSAFE_componentWillUpdate=="function"&&(a="UNSAFE_componentWillUpdate"),n!==null||r!==null||a!==null){var s=e.displayName||e.name,y=typeof e.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+s+" uses "+y+" but also contains the following legacy lifecycles:"+(n!==null?`
  `+n:"")+(r!==null?`
  `+r:"")+(a!==null?`
  `+a:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof e.getDerivedStateFromProps=="function"&&(t.componentWillMount=$e,t.componentWillReceiveProps=ze),typeof t.getSnapshotBeforeUpdate=="function"){if(typeof t.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=Ke;var i=t.componentDidUpdate;t.componentDidUpdate=function(h,g,p){var m=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:p;i.call(this,h,g,m)}}return e}const vn=Object.freeze(Object.defineProperty({__proto__:null,polyfill:mn},Symbol.toStringTag,{value:"Module"})),yn=rt(vn);Object.defineProperty(U,"__esModule",{value:!0});U.bodyOpenClassName=U.portalClassName=void 0;var Ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},bn=function(){function e(t,n){for(var r=0;r<n.length;r++){var a=n[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Ye=q,ie=J(Ye),gn=at,le=J(gn),xn=Ue,u=J(xn),On=hn,Ee=J(On),wn=R,_n=En(wn),D=T,Se=J(D),Cn=yn;function En(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function J(e){return e&&e.__esModule?e:{default:e}}function Sn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Me(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Mn(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Pn=U.portalClassName="ReactModalPortal",Tn=U.bodyOpenClassName="ReactModal__Body--open",W=D.canUseDOM&&le.default.createPortal!==void 0,Pe=function(t){return document.createElement(t)},Te=function(){return W?le.default.createPortal:le.default.unstable_renderSubtreeIntoContainer};function ne(e){return e()}var Q=function(e){Mn(t,e);function t(){var n,r,a,s;Sn(this,t);for(var y=arguments.length,i=Array(y),v=0;v<y;v++)i[v]=arguments[v];return s=(r=(a=Me(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(i))),a),a.removePortal=function(){!W&&le.default.unmountComponentAtNode(a.node);var h=ne(a.props.parentSelector);h&&h.contains(a.node)?h.removeChild(a.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},a.portalRef=function(h){a.portal=h},a.renderPortal=function(h){var g=Te(),p=g(a,ie.default.createElement(Ee.default,Ce({defaultStyles:t.defaultStyles},h)),a.node);a.portalRef(p)},r),Me(a,s)}return bn(t,[{key:"componentDidMount",value:function(){if(D.canUseDOM){W||(this.node=Pe("div")),this.node.className=this.props.portalClassName;var r=ne(this.props.parentSelector);r.appendChild(this.node),!W&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(r){var a=ne(r.parentSelector),s=ne(this.props.parentSelector);return{prevParent:a,nextParent:s}}},{key:"componentDidUpdate",value:function(r,a,s){if(D.canUseDOM){var y=this.props,i=y.isOpen,v=y.portalClassName;r.portalClassName!==v&&(this.node.className=v);var h=s.prevParent,g=s.nextParent;g!==h&&(h.removeChild(this.node),g.appendChild(this.node)),!(!r.isOpen&&!i)&&!W&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!D.canUseDOM||!this.node||!this.portal)){var r=this.portal.state,a=Date.now(),s=r.isOpen&&this.props.closeTimeoutMS&&(r.closesAt||a+this.props.closeTimeoutMS);s?(r.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,s-a)):this.removePortal()}}},{key:"render",value:function(){if(!D.canUseDOM||!W)return null;!this.node&&W&&(this.node=Pe("div"));var r=Te();return r(ie.default.createElement(Ee.default,Ce({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(r){_n.setElement(r)}}]),t}(Ye.Component);Q.propTypes={isOpen:u.default.bool.isRequired,style:u.default.shape({content:u.default.object,overlay:u.default.object}),portalClassName:u.default.string,bodyOpenClassName:u.default.string,htmlOpenClassName:u.default.string,className:u.default.oneOfType([u.default.string,u.default.shape({base:u.default.string.isRequired,afterOpen:u.default.string.isRequired,beforeClose:u.default.string.isRequired})]),overlayClassName:u.default.oneOfType([u.default.string,u.default.shape({base:u.default.string.isRequired,afterOpen:u.default.string.isRequired,beforeClose:u.default.string.isRequired})]),appElement:u.default.oneOfType([u.default.instanceOf(Se.default),u.default.instanceOf(D.SafeHTMLCollection),u.default.instanceOf(D.SafeNodeList),u.default.arrayOf(u.default.instanceOf(Se.default))]),onAfterOpen:u.default.func,onRequestClose:u.default.func,closeTimeoutMS:u.default.number,ariaHideApp:u.default.bool,shouldFocusAfterRender:u.default.bool,shouldCloseOnOverlayClick:u.default.bool,shouldReturnFocusAfterClose:u.default.bool,preventScroll:u.default.bool,parentSelector:u.default.func,aria:u.default.object,data:u.default.object,role:u.default.string,contentLabel:u.default.string,shouldCloseOnEsc:u.default.bool,overlayRef:u.default.func,contentRef:u.default.func,id:u.default.string,overlayElement:u.default.func,contentElement:u.default.func};Q.defaultProps={isOpen:!1,portalClassName:Pn,bodyOpenClassName:Tn,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(t,n){return ie.default.createElement("div",t,n)},contentElement:function(t,n){return ie.default.createElement("div",t,n)}};Q.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,Cn.polyfill)(Q);U.default=Q;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=U,r=a(n);function a(s){return s&&s.__esModule?s:{default:s}}t.default=r.default,e.exports=t.default})(de,de.exports);var Nn=de.exports;const Ve=it(Nn),Rn=x.div`
  padding: 24px 12px;
  width: 280px;
  margin: 0 auto;
  position: relative;
`,An=x.div``,Dn=x.button`
  position: absolute;
  top: 28px;
  right: 12px;
  width: 24px;
  height: 24px;
  border: none;
  padding: 6px;
  background-color: transparent;
  cursor: pointer;
`,jn=x.h2`
  font-weight: 500;
  font-size: 26px;
  line-height: 123%;
  color: #2f2f2f;
  margin-bottom: 24px;
`,Ne=x.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  color: #2f2f2f;
  margin-bottom: 16px;
`,Re=x.p`
  font-size: 16px;
  line-height: 125%;
  color: #2f2f2f;
  margin-bottom: 12px;
`,Ae=x.button`
  box-shadow: 0 2px 4px 0 rgba(64, 123, 255, 0.2);
  background-color: #fff;
  border: 1px solid #9ebbff;
  border-radius: 30px;
  padding: 10px;
  width: 44px;
  height: 44px;
  cursor: pointer;
`,De=x.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 133%;
  color: #407bff;
  text-align: center;
`,Fn=x.input`
  margin-bottom: 24px;
  border: 1px solid #d7e3ff;
  border-radius: 6px;
  padding: 12px 10px;
  width: 120px;
  height: 44px;
`,Wn=x.input`
  border: 1px solid #d7e3ff;
  border-radius: 6px;
  padding: 12px 10px;
  width: 120px;
  height: 44px;
  margin-bottom: 24px;
`,Ln=x.button`
  margin-top: 16px;
  box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);
  background-color: #407bff;
  border-radius: 10px;
  padding: 8px 30px;
  width: 256px;
  height: 36px;
`,kn=x.div`
  background-color: #d7e3ff;
  border-radius: 40px;
  padding: 6px 10px;
  height: 36px;
`,Un=x.div`
  display: flex;
  width: 194px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;Ve.setAppElement("#root");function In({isOpen:e,onClose:t,onAddWater:n}){const[r,a]=q.useState(0),[s,y]=q.useState(0);q.useState(Date.now());const i=()=>{},v=()=>{t()},h=()=>{a(r+50),y(r+50)},g=()=>{if(r-50<0){a(0),y(0);return}a(r-50),y(r-50)},p=()=>{a(s)},m=b=>{const _=parseInt(b.target.value>0?b.target.value:0,10);y(_)};return f.jsx(Ve,{isOpen:e,onRequestClose:t,children:f.jsx(Rn,{children:f.jsxs(An,{children:[f.jsx(Dn,{onClick:v,children:"X"}),f.jsx(jn,{children:"Add water"}),f.jsx(Ne,{children:"Choose a value:"}),f.jsx(Re,{children:"Amount of water:"}),f.jsxs(Un,{children:[f.jsx(Ae,{onClick:g,children:"-"}),f.jsx(kn,{children:f.jsxs(De,{children:[r,"ml"]})}),f.jsx(Ae,{onClick:h,children:"+"})]}),f.jsx(Re,{children:"Recording time:"}),f.jsx(Fn,{type:"time"}),f.jsx(Ne,{children:"Enter the value of the water used:"}),f.jsx(Wn,{value:s,onBlur:p,onChange:m,type:"number"}),f.jsxs(De,{children:[r,"ml"]}),f.jsx(Ln,{onClick:i,type:"button",children:"Save"})]})})})}const Hn=x.div`
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
`,qn=x.div`
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
`,Bn=x.input`
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
`,$n=x.div`
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
`,zn=x.button`
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
`,Kn=()=>{const[e,t]=q.useState(!1),n=()=>{t(!1)},r=70,a=()=>{t(!0)};return f.jsxs(Hn,{children:[f.jsxs(qn,{children:[f.jsx("h2",{children:"Today"}),f.jsx(Bn,{value:r,type:"range",min:"0",max:"100"}),f.jsxs($n,{children:[f.jsx("p",{children:"0%"}),f.jsx("p",{children:"50%"}),f.jsx("p",{children:"100%"})]})]}),f.jsxs(zn,{onClick:a,type:"button",children:[f.jsx(gt,{}),"Add Water"]}),e&&f.jsx(In,{isOpen:e,onClose:n})]})},Yn=Kn,Vn=x.div`
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
`;function Xn(){return f.jsx("div",{children:f.jsxs(Vn,{children:[f.jsxs("div",{children:[f.jsx(ct,{}),f.jsx(Yn,{})]}),f.jsx("div",{})]})})}export{Xn as default};
