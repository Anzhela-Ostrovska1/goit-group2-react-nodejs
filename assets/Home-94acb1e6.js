import{n as c,r as A,a as ye,j as n,b as _t,c as $,s as Se,d as me,e as Dt,f as Rt,L as Vt,R as Y,g as st,h as Wt,i as lt,k as ct,l as Ft,m as Lt}from"./index-8cbf9160.js";import{b as It}from"./bg_element_des@1x-1805b66c.js";const Ht=c.div`
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
`,Bt=c.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,zt=c.div`
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
`,Ut=()=>{const[e,t]=A.useState(0),[o,r]=A.useState(0),[i,l]=A.useState(0),[p,s]=A.useState(!0),[d,u]=A.useState(0),[b,f]=A.useState(!0),v=ye(),y=()=>{s(!p)},w=_=>{t(Number(_.target.value))},C=_=>{r(Number(_.target.value))};A.useEffect(()=>{l(p?Math.ceil((e*.03+o*.4)*100)/100<2?2:Math.ceil((e*.03+o*.4)*100)/100:Math.ceil((e*.04+o*.6)*100)/100<2?2:Math.ceil((e*.04+o*.6)*100)/100)},[p,e,o]);const T=_=>{u(Number(_.target.value))},M=_=>{_.preventDefault(),v(_t(d)),f(!b)},q=()=>{f(!b)};return b&&n.jsx("div",{children:n.jsxs(zt,{children:[n.jsxs("div",{className:"headerDaily",children:[n.jsx("h2",{children:"My daily norma"}),n.jsx("button",{type:"button",className:"closeButton",onClick:q,children:n.jsx("svg",{className:"icon-Vector",width:"24",height:"24",children:n.jsx("use",{href:"../../assets/images/sprite/horodiukIcons.svg#icon-close"})})})]}),n.jsxs("div",{className:"formulaContainer",children:[n.jsxs("div",{className:"formula",children:[n.jsxs("div",{className:"formulaText",children:[n.jsx("p",{children:"For girl:"}),n.jsx("span",{className:"formulaSpan",children:"V=(M*0,03) + (T*0,4)"})]}),n.jsxs("div",{className:"formulaText",children:[n.jsx("p",{children:"For man:"}),n.jsx("span",{className:"formulaSpan",children:"V=(M*0,04) + (T*0,6)"})]})]}),n.jsxs("p",{className:"formulaDescription",children:[n.jsx("span",{className:"formulaStar",children:"*"})," V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]})]}),n.jsxs("form",{onSubmit:M,children:[n.jsx("h3",{children:"Calculate your rate:"}),n.jsxs("div",{className:"checkBox",children:[n.jsxs("label",{children:[n.jsx("input",{type:"radio",name:"gender",value:"woman",checked:p,onChange:y})," For woman"]}),n.jsxs("label",{children:[n.jsx("input",{type:"radio",name:"gender",value:"man",checked:!p,onChange:y})," For man"]})]}),n.jsx("label",{className:"inputDescription",children:"Your weight in kilograms:"}),n.jsx("input",{className:"inputForm",placeholder:"0",onChange:w}),n.jsx("label",{className:"inputDescription",children:"The time of active participation in sports or other activities with a high physical. load in hours:"}),n.jsx("input",{className:"inputForm",placeholder:"0",onChange:C}),n.jsxs("div",{className:"requiredAmount",children:[n.jsx("p",{className:"amountDescription",children:"The required amount of water in liters per day:"}),n.jsxs("span",{className:"amount",children:[i," L"]})]}),n.jsx("h3",{children:"Write down how much water you will drink:"}),n.jsx("input",{className:"inputForm",placeholder:"0",onChange:T}),n.jsx("button",{className:"saveButton",type:"submit",children:"Save"})]})]})})},$t=()=>{const[e,t]=A.useState(!1),o=()=>{t(!1)},r=()=>{t(!0)};return n.jsx("div",{children:n.jsxs(Ht,{children:[n.jsx("h2",{children:"My daily norma:"}),n.jsxs(Bt,{children:[n.jsx("p",{children:"1.5 L"}),n.jsx("button",{type:"button",onClick:r,children:"Edit"}),e&&n.jsx(Ut,{isOpen:e,onClose:o})]})]})})},qt=$t,Xt=e=>e.water.notes,Kt=e=>e.water.currentNote,Gt=e=>e.water.monthNotes,Yt=e=>e.water.isLoading,Re=new Date,Ve=[Re.getFullYear(),Re.getMonth()+1],We=(e=Ve,t)=>{const[o,r]=e;switch(t){case"forward":return r>=12?[o+1,1]:[o,r+1];case"back":return r<=1?[o-1,12]:[o,r-1];default:return Ve}},Jt=$.div`
  width: 100%;
  margin-top: 15px;
`,Qt=$.h3`
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
  color: #2f2f2f;

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 32px;
  }
`,Zt=$.div`
  display: flex;
  justify-content: space-between;
`,en=$.div`
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
  }
  .arrow:is(:hover, :focus) {
    transform: translateY(-1px);
  }

  .month__name {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: center;
    color: #407bff;
  }
`,tn=$.ul`
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
`,nn=$.li`
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
    background: #ffffff;
    border-radius: 50%;
    border: none;
    border: ${({$percentage:e})=>e<100?"1px solid #ff9d43":"none"};
    box-shadow: ${({$isActive:e})=>e?" 0px 2px 4px 0px #407BFF4D":"none"};
    font-size: 16px;
    line-height: 20px;

    @media screen and (min-width: 768px) {
      width: 34px;
      height: 34px;
      font-size: 14px;
      line-height: 18px;
    }
  }
  .percentage {
    font-size: 10px;
    line-height: 16px;
    color: #9ebbff;
  }
`,dt=["January","February","March","April","May","June","July","August","September","October","November","December"],on=e=>dt[e-1],rn=e=>{const t=A.useRef(null);return A.useEffect(()=>{const o=r=>{t.current&&!t.current.contains(r.target)&&e()};return document.addEventListener("click",o,!0),()=>{document.removeEventListener("click",o,!0)}},[e]),t},pe={sm:68,md:74},an={sm:5,md:10},ue={md:69,xl:56},Oe=(e,t)=>{const o=e/an[t],r=Math.floor(o);switch(t){case"sm":return r===o?parseInt(o-1)*pe[t]-12:parseInt(o)*pe[t]-12;case"md":return r===o?parseInt(o-1)*pe[t]:parseInt(o)*pe[t];default:return 0}},Fe=(e,t)=>{const[o,r]=e%10===0?[9,!1]:[e%10-1,e%10<5];return r?o*ue[t]+ue[t]/4:o*ue[t]-280+ue[t]/4},sn=$.div`
  position: absolute;
  left: 50%;
  top: -194px;
  transform: translate(
    -50%,
    ${({$dayNumber:e})=>`${Oe(e,"sm")}px`}
  );
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 280px;
  height: 188px;
  padding: 24px 13px;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0px 4px 4px 0px rgba(64, 123, 255, 0.3);

  p {
    color: #2f2f2f;
    line-height: 1.25;

    span {
      color: #407bff;
      font-size: 18px;
      font-weight: 500;
      line-height: 1.33;
    }
  }

  @media screen and (min-width: 768px) {
    top: -190px;
    left: 0;
    transform: translate(
      ${({$dayNumber:e})=>`${Fe(e,"md")}px`},
      ${({$dayNumber:e})=>`${Oe(e,"md")}px`}
    );
  }

  @media screen and (min-width: 1440px) {
    transform: translate(
      ${({$dayNumber:e})=>`${Fe(e,"xl")}px`},
      ${({$dayNumber:e})=>`${Oe(e,"md")}px`}
    );
  }
`,ln=$.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  p {
    color: #407bff;
    font-size: 16px;
    line-height: 1.25;
  }
`,cn=({currentDay:e,close:t})=>{const o=rn(t),{date:r,percent:i,quantity:l,waterRate:p}=e,s={dailyNorma:p??0,percent:i??0},d=dt[(r==null?void 0:r.month)-1],u=s.dailyNorma/1e3;return n.jsxs(sn,{ref:o,$dayNumber:r.day,children:[n.jsx(ln,{children:n.jsxs("p",{children:[n.jsxs("span",{children:[r==null?void 0:r.day,", "]}),n.jsx("span",{children:d})]})}),n.jsxs("p",{children:["Daily norma : ",n.jsxs("span",{children:[u,"L"]})]}),n.jsxs("p",{children:["Fulfillment of the daily norm : ",n.jsxs("span",{children:[parseInt(s.percent),"%"]})]}),n.jsxs("p",{children:["How many servings of water : ",n.jsx("span",{children:l??0})]})]})},dn=({monthData:e})=>{const[t,o]=A.useState(null);console.log("monthData",e);const r=A.useCallback(()=>{o(null)},[]);return n.jsxs(tn,{children:[t&&n.jsx(cn,{currentDay:t,close:r}),e.map(i=>n.jsxs(nn,{onClick:()=>o(i),$percentage:i.percent,$isActive:(t==null?void 0:t.date.day)===i.date.day,children:[n.jsx("span",{className:"day",children:i.date.day}),n.jsxs("span",{className:"percentage",children:[parseInt(i.percent)||0,"%"]})]},i.date.day))]})},pn=({changeDirection:e,month:t,year:o})=>n.jsxs(Zt,{children:[n.jsx(Qt,{children:"Month"}),n.jsxs(en,{children:[n.jsx("button",{className:"arrow",onClick:()=>e("back"),type:"button",children:n.jsx("svg",{width:"14",height:"14",children:n.jsx("use",{href:`${Se}#icon-arrow-left`})})}),n.jsxs("p",{className:"month__name",children:[on(t),", ",o]}),n.jsx("button",{className:"arrow",onClick:()=>e("forward"),type:"button",children:n.jsx("svg",{width:"14",height:"14",transform:"rotate(180)",children:n.jsx("use",{href:`${Se}#icon-arrow-left`})})})]})]}),un=()=>{var d;const e=me(Gt),t=me(Yt),[o,r]=Dt(),i=ye();let[l,p]=((d=o.get("date"))==null?void 0:d.split("_"))??We();A.useEffect(()=>{i(Rt({year:l.toString(),month:p.toString()}))},[i,l,p]);const s=A.useCallback(u=>{const b=We([+l,+p],u);r({date:b.join("_")})},[r,l,p]);return n.jsxs(Jt,{children:[n.jsx(pn,{changeDirection:s,month:p,year:l}),t?n.jsx(Vt,{}):n.jsx(dn,{monthData:e})]})},fn=un;var pt={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Le=Y.createContext&&Y.createContext(pt),hn=["attr","size","title"];function mn(e,t){if(e==null)return{};var o=xn(e,t),r,i;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)r=l[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function xn(e,t){if(e==null)return{};var o={},r=Object.keys(e),i,l;for(l=0;l<r.length;l++)i=r[l],!(t.indexOf(i)>=0)&&(o[i]=e[i]);return o}function xe(){return xe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},xe.apply(this,arguments)}function Ie(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),o.push.apply(o,r)}return o}function ge(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?Ie(Object(o),!0).forEach(function(r){gn(e,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):Ie(Object(o)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))})}return e}function gn(e,t,o){return t=vn(t),t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function vn(e){var t=bn(e,"string");return typeof t=="symbol"?t:String(t)}function bn(e,t){if(typeof e!="object"||e===null)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var r=o.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ut(e){return e&&e.map((t,o)=>Y.createElement(t.tag,ge({key:o},t.attr),ut(t.child)))}function ft(e){return t=>Y.createElement(An,xe({attr:ge({},e.attr)},t),ut(e.child))}function An(e){var t=o=>{var{attr:r,size:i,title:l}=e,p=mn(e,hn),s=i||o.size||"1em",d;return o.className&&(d=o.className),e.className&&(d=(d?d+" ":"")+e.className),Y.createElement("svg",xe({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},o.attr,r,p,{className:d,style:ge(ge({color:e.color||o.color},o.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),l&&Y.createElement("title",null,l),e.children)};return Le!==void 0?Y.createElement(Le.Consumer,null,o=>t(o)):t(pt)}function yn(e){return ft({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"},child:[]}]})(e)}const wn="/goit-group2-react-nodejs/assets/glass-00cf2fb8.svg",jn="/goit-group2-react-nodejs/assets/edit-7f0c7b6a.svg",Cn="/goit-group2-react-nodejs/assets/delete-6bf30e40.svg";var Ee={exports:{}},Q={},ht={exports:{}},On="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Sn=On,En=Sn;function mt(){}function xt(){}xt.resetWarningCache=mt;var Mn=function(){function e(r,i,l,p,s,d){if(d!==En){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var o={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:xt,resetWarningCache:mt};return o.PropTypes=o,o};ht.exports=Mn();var Ne=ht.exports;const fe=st(Ne);var Me={exports:{}},L={},ke={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=b;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var o="none",r="contents",i=/input|select|textarea|button|object|iframe/;function l(f,v){return v.getPropertyValue("overflow")!=="visible"||f.scrollWidth<=0&&f.scrollHeight<=0}function p(f){var v=f.offsetWidth<=0&&f.offsetHeight<=0;if(v&&!f.innerHTML)return!0;try{var y=window.getComputedStyle(f),w=y.getPropertyValue("display");return v?w!==r&&l(f,y):w===o}catch{return console.warn("Failed to inspect element style"),!1}}function s(f){for(var v=f,y=f.getRootNode&&f.getRootNode();v&&v!==document.body;){if(y&&v===y&&(v=y.host.parentNode),p(v))return!1;v=v.parentNode}return!0}function d(f,v){var y=f.nodeName.toLowerCase(),w=i.test(y)&&!f.disabled||y==="a"&&f.href||v;return w&&s(f)}function u(f){var v=f.getAttribute("tabindex");v===null&&(v=void 0);var y=isNaN(v);return(y||v>=0)&&d(f,!y)}function b(f){var v=[].slice.call(f.querySelectorAll("*"),0).reduce(function(y,w){return y.concat(w.shadowRoot?b(w.shadowRoot):[w])},[]);return v.filter(u)}e.exports=t.default})(ke,ke.exports);var gt=ke.exports;Object.defineProperty(L,"__esModule",{value:!0});L.resetState=Nn;L.log=_n;L.handleBlur=ae;L.handleFocus=ie;L.markForFocusLater=Dn;L.returnFocus=Rn;L.popWithoutFocus=Vn;L.setupScopedFocus=Wn;L.teardownScopedFocus=Fn;var kn=gt,Pn=Tn(kn);function Tn(e){return e&&e.__esModule?e:{default:e}}var ee=[],Z=null,Pe=!1;function Nn(){ee=[]}function _n(){}function ae(){Pe=!0}function ie(){if(Pe){if(Pe=!1,!Z)return;setTimeout(function(){if(!Z.contains(document.activeElement)){var e=(0,Pn.default)(Z)[0]||Z;e.focus()}},0)}}function Dn(){ee.push(document.activeElement)}function Rn(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=null;try{ee.length!==0&&(t=ee.pop(),t.focus({preventScroll:e}));return}catch{console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}}function Vn(){ee.length>0&&ee.pop()}function Wn(e){Z=e,window.addEventListener?(window.addEventListener("blur",ae,!1),document.addEventListener("focus",ie,!0)):(window.attachEvent("onBlur",ae),document.attachEvent("onFocus",ie))}function Fn(){Z=null,window.addEventListener?(window.removeEventListener("blur",ae),document.removeEventListener("focus",ie)):(window.detachEvent("onBlur",ae),document.detachEvent("onFocus",ie))}var Te={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=p;var o=gt,r=i(o);function i(s){return s&&s.__esModule?s:{default:s}}function l(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return s.activeElement.shadowRoot?l(s.activeElement.shadowRoot):s.activeElement}function p(s,d){var u=(0,r.default)(s);if(!u.length){d.preventDefault();return}var b=void 0,f=d.shiftKey,v=u[0],y=u[u.length-1],w=l();if(s===w){if(!f)return;b=y}if(y===w&&!f&&(b=v),v===w&&f&&(b=y),b){d.preventDefault(),b.focus();return}var C=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),T=C!=null&&C[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(T){var M=u.indexOf(w);if(M>-1&&(M+=f?-1:1),b=u[M],typeof b>"u"){d.preventDefault(),b=f?y:v,b.focus();return}d.preventDefault(),b.focus()}}e.exports=t.default})(Te,Te.exports);var Ln=Te.exports,I={},In=function(){},Hn=In,F={},vt={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(e){(function(){var t=!!(typeof window<"u"&&window.document&&window.document.createElement),o={canUseDOM:t,canUseWorkers:typeof Worker<"u",canUseEventListeners:t&&!!(window.addEventListener||window.attachEvent),canUseViewport:t&&!!window.screen};e.exports?e.exports=o:window.ExecutionEnvironment=o})()})(vt);var Bn=vt.exports;Object.defineProperty(F,"__esModule",{value:!0});F.canUseDOM=F.SafeNodeList=F.SafeHTMLCollection=void 0;var zn=Bn,Un=$n(zn);function $n(e){return e&&e.__esModule?e:{default:e}}var we=Un.default,qn=we.canUseDOM?window.HTMLElement:{};F.SafeHTMLCollection=we.canUseDOM?window.HTMLCollection:{};F.SafeNodeList=we.canUseDOM?window.NodeList:{};F.canUseDOM=we.canUseDOM;F.default=qn;Object.defineProperty(I,"__esModule",{value:!0});I.resetState=Jn;I.log=Qn;I.assertNodeList=bt;I.setElement=Zn;I.validateElement=_e;I.hide=eo;I.show=to;I.documentNotReadyOrSSRTesting=no;var Xn=Hn,Kn=Yn(Xn),Gn=F;function Yn(e){return e&&e.__esModule?e:{default:e}}var V=null;function Jn(){V&&(V.removeAttribute?V.removeAttribute("aria-hidden"):V.length!=null?V.forEach(function(e){return e.removeAttribute("aria-hidden")}):document.querySelectorAll(V).forEach(function(e){return e.removeAttribute("aria-hidden")})),V=null}function Qn(){}function bt(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function Zn(e){var t=e;if(typeof t=="string"&&Gn.canUseDOM){var o=document.querySelectorAll(t);bt(o,t),t=o}return V=t||V,V}function _e(e){var t=e||V;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,Kn.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function eo(e){var t=!0,o=!1,r=void 0;try{for(var i=_e(e)[Symbol.iterator](),l;!(t=(l=i.next()).done);t=!0){var p=l.value;p.setAttribute("aria-hidden","true")}}catch(s){o=!0,r=s}finally{try{!t&&i.return&&i.return()}finally{if(o)throw r}}}function to(e){var t=!0,o=!1,r=void 0;try{for(var i=_e(e)[Symbol.iterator](),l;!(t=(l=i.next()).done);t=!0){var p=l.value;p.removeAttribute("aria-hidden")}}catch(s){o=!0,r=s}finally{try{!t&&i.return&&i.return()}finally{if(o)throw r}}}function no(){V=null}var te={};Object.defineProperty(te,"__esModule",{value:!0});te.resetState=oo;te.log=ro;var oe={},re={};function He(e,t){e.classList.remove(t)}function oo(){var e=document.getElementsByTagName("html")[0];for(var t in oe)He(e,oe[t]);var o=document.body;for(var r in re)He(o,re[r]);oe={},re={}}function ro(){}var ao=function(t,o){return t[o]||(t[o]=0),t[o]+=1,o},io=function(t,o){return t[o]&&(t[o]-=1),o},so=function(t,o,r){r.forEach(function(i){ao(o,i),t.add(i)})},lo=function(t,o,r){r.forEach(function(i){io(o,i),o[i]===0&&t.remove(i)})};te.add=function(t,o){return so(t.classList,t.nodeName.toLowerCase()=="html"?oe:re,o.split(" "))};te.remove=function(t,o){return lo(t.classList,t.nodeName.toLowerCase()=="html"?oe:re,o.split(" "))};var ne={};Object.defineProperty(ne,"__esModule",{value:!0});ne.log=po;ne.resetState=uo;function co(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var At=function e(){var t=this;co(this,e),this.register=function(o){t.openInstances.indexOf(o)===-1&&(t.openInstances.push(o),t.emit("register"))},this.deregister=function(o){var r=t.openInstances.indexOf(o);r!==-1&&(t.openInstances.splice(r,1),t.emit("deregister"))},this.subscribe=function(o){t.subscribers.push(o)},this.emit=function(o){t.subscribers.forEach(function(r){return r(o,t.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},ve=new At;function po(){console.log("portalOpenInstances ----------"),console.log(ve.openInstances.length),ve.openInstances.forEach(function(e){return console.log(e)}),console.log("end portalOpenInstances ----------")}function uo(){ve=new At}ne.default=ve;var De={};Object.defineProperty(De,"__esModule",{value:!0});De.resetState=xo;De.log=go;var fo=ne,ho=mo(fo);function mo(e){return e&&e.__esModule?e:{default:e}}var P=void 0,W=void 0,J=[];function xo(){for(var e=[P,W],t=0;t<e.length;t++){var o=e[t];o&&o.parentNode&&o.parentNode.removeChild(o)}P=W=null,J=[]}function go(){console.log("bodyTrap ----------"),console.log(J.length);for(var e=[P,W],t=0;t<e.length;t++){var o=e[t],r=o||{};console.log(r.nodeName,r.className,r.id)}console.log("edn bodyTrap ----------")}function Be(){J.length!==0&&J[J.length-1].focusContent()}function vo(e,t){!P&&!W&&(P=document.createElement("div"),P.setAttribute("data-react-modal-body-trap",""),P.style.position="absolute",P.style.opacity="0",P.setAttribute("tabindex","0"),P.addEventListener("focus",Be),W=P.cloneNode(),W.addEventListener("focus",Be)),J=t,J.length>0?(document.body.firstChild!==P&&document.body.insertBefore(P,document.body.firstChild),document.body.lastChild!==W&&document.body.appendChild(W)):(P.parentElement&&P.parentElement.removeChild(P),W.parentElement&&W.parentElement.removeChild(W))}ho.default.subscribe(vo);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(g){for(var x=1;x<arguments.length;x++){var O=arguments[x];for(var a in O)Object.prototype.hasOwnProperty.call(O,a)&&(g[a]=O[a])}return g},r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(g){return typeof g}:function(g){return g&&typeof Symbol=="function"&&g.constructor===Symbol&&g!==Symbol.prototype?"symbol":typeof g},i=function(){function g(x,O){for(var a=0;a<O.length;a++){var h=O[a];h.enumerable=h.enumerable||!1,h.configurable=!0,"value"in h&&(h.writable=!0),Object.defineProperty(x,h.key,h)}}return function(x,O,a){return O&&g(x.prototype,O),a&&g(x,a),x}}(),l=A,p=Ne,s=H(p),d=L,u=z(d),b=Ln,f=H(b),v=I,y=z(v),w=te,C=z(w),T=F,M=H(T),q=ne,_=H(q);function z(g){if(g&&g.__esModule)return g;var x={};if(g!=null)for(var O in g)Object.prototype.hasOwnProperty.call(g,O)&&(x[O]=g[O]);return x.default=g,x}function H(g){return g&&g.__esModule?g:{default:g}}function S(g,x){if(!(g instanceof x))throw new TypeError("Cannot call a class as a function")}function j(g,x){if(!g)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return x&&(typeof x=="object"||typeof x=="function")?x:g}function N(g,x){if(typeof x!="function"&&x!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof x);g.prototype=Object.create(x&&x.prototype,{constructor:{value:g,enumerable:!1,writable:!0,configurable:!0}}),x&&(Object.setPrototypeOf?Object.setPrototypeOf(g,x):g.__proto__=x)}var R={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},je=function(x){return x.code==="Tab"||x.keyCode===9},kt=function(x){return x.code==="Escape"||x.keyCode===27},ce=0,Ce=function(g){N(x,g);function x(O){S(this,x);var a=j(this,(x.__proto__||Object.getPrototypeOf(x)).call(this,O));return a.setOverlayRef=function(h){a.overlay=h,a.props.overlayRef&&a.props.overlayRef(h)},a.setContentRef=function(h){a.content=h,a.props.contentRef&&a.props.contentRef(h)},a.afterClose=function(){var h=a.props,k=h.appElement,D=h.ariaHideApp,E=h.htmlOpenClassName,X=h.bodyOpenClassName,K=h.parentSelector,de=K&&K().ownerDocument||document;X&&C.remove(de.body,X),E&&C.remove(de.getElementsByTagName("html")[0],E),D&&ce>0&&(ce-=1,ce===0&&y.show(k)),a.props.shouldFocusAfterRender&&(a.props.shouldReturnFocusAfterClose?(u.returnFocus(a.props.preventScroll),u.teardownScopedFocus()):u.popWithoutFocus()),a.props.onAfterClose&&a.props.onAfterClose(),_.default.deregister(a)},a.open=function(){a.beforeOpen(),a.state.afterOpen&&a.state.beforeClose?(clearTimeout(a.closeTimer),a.setState({beforeClose:!1})):(a.props.shouldFocusAfterRender&&(u.setupScopedFocus(a.node),u.markForFocusLater()),a.setState({isOpen:!0},function(){a.openAnimationFrame=requestAnimationFrame(function(){a.setState({afterOpen:!0}),a.props.isOpen&&a.props.onAfterOpen&&a.props.onAfterOpen({overlayEl:a.overlay,contentEl:a.content})})}))},a.close=function(){a.props.closeTimeoutMS>0?a.closeWithTimeout():a.closeWithoutTimeout()},a.focusContent=function(){return a.content&&!a.contentHasFocus()&&a.content.focus({preventScroll:!0})},a.closeWithTimeout=function(){var h=Date.now()+a.props.closeTimeoutMS;a.setState({beforeClose:!0,closesAt:h},function(){a.closeTimer=setTimeout(a.closeWithoutTimeout,a.state.closesAt-Date.now())})},a.closeWithoutTimeout=function(){a.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},a.afterClose)},a.handleKeyDown=function(h){je(h)&&(0,f.default)(a.content,h),a.props.shouldCloseOnEsc&&kt(h)&&(h.stopPropagation(),a.requestClose(h))},a.handleOverlayOnClick=function(h){a.shouldClose===null&&(a.shouldClose=!0),a.shouldClose&&a.props.shouldCloseOnOverlayClick&&(a.ownerHandlesClose()?a.requestClose(h):a.focusContent()),a.shouldClose=null},a.handleContentOnMouseUp=function(){a.shouldClose=!1},a.handleOverlayOnMouseDown=function(h){!a.props.shouldCloseOnOverlayClick&&h.target==a.overlay&&h.preventDefault()},a.handleContentOnClick=function(){a.shouldClose=!1},a.handleContentOnMouseDown=function(){a.shouldClose=!1},a.requestClose=function(h){return a.ownerHandlesClose()&&a.props.onRequestClose(h)},a.ownerHandlesClose=function(){return a.props.onRequestClose},a.shouldBeClosed=function(){return!a.state.isOpen&&!a.state.beforeClose},a.contentHasFocus=function(){return document.activeElement===a.content||a.content.contains(document.activeElement)},a.buildClassName=function(h,k){var D=(typeof k>"u"?"undefined":r(k))==="object"?k:{base:R[h],afterOpen:R[h]+"--after-open",beforeClose:R[h]+"--before-close"},E=D.base;return a.state.afterOpen&&(E=E+" "+D.afterOpen),a.state.beforeClose&&(E=E+" "+D.beforeClose),typeof k=="string"&&k?E+" "+k:E},a.attributesFromObject=function(h,k){return Object.keys(k).reduce(function(D,E){return D[h+"-"+E]=k[E],D},{})},a.state={afterOpen:!1,beforeClose:!1},a.shouldClose=null,a.moveFromContentToOverlay=null,a}return i(x,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(a,h){this.props.isOpen&&!a.isOpen?this.open():!this.props.isOpen&&a.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!h.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var a=this.props,h=a.appElement,k=a.ariaHideApp,D=a.htmlOpenClassName,E=a.bodyOpenClassName,X=a.parentSelector,K=X&&X().ownerDocument||document;E&&C.add(K.body,E),D&&C.add(K.getElementsByTagName("html")[0],D),k&&(ce+=1,y.hide(h)),_.default.register(this)}},{key:"render",value:function(){var a=this.props,h=a.id,k=a.className,D=a.overlayClassName,E=a.defaultStyles,X=a.children,K=k?{}:E.content,de=D?{}:E.overlay;if(this.shouldBeClosed())return null;var Pt={ref:this.setOverlayRef,className:this.buildClassName("overlay",D),style:o({},de,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},Tt=o({id:h,ref:this.setContentRef,style:o({},K,this.props.style.content),className:this.buildClassName("content",k),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",o({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),Nt=this.props.contentElement(Tt,X);return this.props.overlayElement(Pt,Nt)}}]),x}(l.Component);Ce.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},Ce.propTypes={isOpen:s.default.bool.isRequired,defaultStyles:s.default.shape({content:s.default.object,overlay:s.default.object}),style:s.default.shape({content:s.default.object,overlay:s.default.object}),className:s.default.oneOfType([s.default.string,s.default.object]),overlayClassName:s.default.oneOfType([s.default.string,s.default.object]),parentSelector:s.default.func,bodyOpenClassName:s.default.string,htmlOpenClassName:s.default.string,ariaHideApp:s.default.bool,appElement:s.default.oneOfType([s.default.instanceOf(M.default),s.default.instanceOf(T.SafeHTMLCollection),s.default.instanceOf(T.SafeNodeList),s.default.arrayOf(s.default.instanceOf(M.default))]),onAfterOpen:s.default.func,onAfterClose:s.default.func,onRequestClose:s.default.func,closeTimeoutMS:s.default.number,shouldFocusAfterRender:s.default.bool,shouldCloseOnOverlayClick:s.default.bool,shouldReturnFocusAfterClose:s.default.bool,preventScroll:s.default.bool,role:s.default.string,contentLabel:s.default.string,aria:s.default.object,data:s.default.object,children:s.default.node,shouldCloseOnEsc:s.default.bool,overlayRef:s.default.func,contentRef:s.default.func,id:s.default.string,overlayElement:s.default.func,contentElement:s.default.func,testId:s.default.string},t.default=Ce,e.exports=t.default})(Me,Me.exports);var bo=Me.exports;function yt(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);e!=null&&this.setState(e)}function wt(e){function t(o){var r=this.constructor.getDerivedStateFromProps(e,o);return r??null}this.setState(t.bind(this))}function jt(e,t){try{var o=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(o,r)}finally{this.props=o,this.state=r}}yt.__suppressDeprecationWarning=!0;wt.__suppressDeprecationWarning=!0;jt.__suppressDeprecationWarning=!0;function Ao(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if(typeof e.getDerivedStateFromProps!="function"&&typeof t.getSnapshotBeforeUpdate!="function")return e;var o=null,r=null,i=null;if(typeof t.componentWillMount=="function"?o="componentWillMount":typeof t.UNSAFE_componentWillMount=="function"&&(o="UNSAFE_componentWillMount"),typeof t.componentWillReceiveProps=="function"?r="componentWillReceiveProps":typeof t.UNSAFE_componentWillReceiveProps=="function"&&(r="UNSAFE_componentWillReceiveProps"),typeof t.componentWillUpdate=="function"?i="componentWillUpdate":typeof t.UNSAFE_componentWillUpdate=="function"&&(i="UNSAFE_componentWillUpdate"),o!==null||r!==null||i!==null){var l=e.displayName||e.name,p=typeof e.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+l+" uses "+p+" but also contains the following legacy lifecycles:"+(o!==null?`
  `+o:"")+(r!==null?`
  `+r:"")+(i!==null?`
  `+i:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof e.getDerivedStateFromProps=="function"&&(t.componentWillMount=yt,t.componentWillReceiveProps=wt),typeof t.getSnapshotBeforeUpdate=="function"){if(typeof t.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=jt;var s=t.componentDidUpdate;t.componentDidUpdate=function(u,b,f){var v=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:f;s.call(this,u,b,v)}}return e}const yo=Object.freeze(Object.defineProperty({__proto__:null,polyfill:Ao},Symbol.toStringTag,{value:"Module"})),wo=Wt(yo);Object.defineProperty(Q,"__esModule",{value:!0});Q.bodyOpenClassName=Q.portalClassName=void 0;var ze=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},jo=function(){function e(t,o){for(var r=0;r<o.length;r++){var i=o[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),Ct=A,be=se(Ct),Co=lt,Ae=se(Co),Oo=Ne,m=se(Oo),So=bo,Ue=se(So),Eo=I,Mo=Po(Eo),U=F,$e=se(U),ko=wo;function Po(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}function se(e){return e&&e.__esModule?e:{default:e}}function To(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function qe(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function No(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var _o=Q.portalClassName="ReactModalPortal",Do=Q.bodyOpenClassName="ReactModal__Body--open",G=U.canUseDOM&&Ae.default.createPortal!==void 0,Xe=function(t){return document.createElement(t)},Ke=function(){return G?Ae.default.createPortal:Ae.default.unstable_renderSubtreeIntoContainer};function he(e){return e()}var le=function(e){No(t,e);function t(){var o,r,i,l;To(this,t);for(var p=arguments.length,s=Array(p),d=0;d<p;d++)s[d]=arguments[d];return l=(r=(i=qe(this,(o=t.__proto__||Object.getPrototypeOf(t)).call.apply(o,[this].concat(s))),i),i.removePortal=function(){!G&&Ae.default.unmountComponentAtNode(i.node);var u=he(i.props.parentSelector);u&&u.contains(i.node)?u.removeChild(i.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},i.portalRef=function(u){i.portal=u},i.renderPortal=function(u){var b=Ke(),f=b(i,be.default.createElement(Ue.default,ze({defaultStyles:t.defaultStyles},u)),i.node);i.portalRef(f)},r),qe(i,l)}return jo(t,[{key:"componentDidMount",value:function(){if(U.canUseDOM){G||(this.node=Xe("div")),this.node.className=this.props.portalClassName;var r=he(this.props.parentSelector);r.appendChild(this.node),!G&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(r){var i=he(r.parentSelector),l=he(this.props.parentSelector);return{prevParent:i,nextParent:l}}},{key:"componentDidUpdate",value:function(r,i,l){if(U.canUseDOM){var p=this.props,s=p.isOpen,d=p.portalClassName;r.portalClassName!==d&&(this.node.className=d);var u=l.prevParent,b=l.nextParent;b!==u&&(u.removeChild(this.node),b.appendChild(this.node)),!(!r.isOpen&&!s)&&!G&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!U.canUseDOM||!this.node||!this.portal)){var r=this.portal.state,i=Date.now(),l=r.isOpen&&this.props.closeTimeoutMS&&(r.closesAt||i+this.props.closeTimeoutMS);l?(r.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,l-i)):this.removePortal()}}},{key:"render",value:function(){if(!U.canUseDOM||!G)return null;!this.node&&G&&(this.node=Xe("div"));var r=Ke();return r(be.default.createElement(Ue.default,ze({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(r){Mo.setElement(r)}}]),t}(Ct.Component);le.propTypes={isOpen:m.default.bool.isRequired,style:m.default.shape({content:m.default.object,overlay:m.default.object}),portalClassName:m.default.string,bodyOpenClassName:m.default.string,htmlOpenClassName:m.default.string,className:m.default.oneOfType([m.default.string,m.default.shape({base:m.default.string.isRequired,afterOpen:m.default.string.isRequired,beforeClose:m.default.string.isRequired})]),overlayClassName:m.default.oneOfType([m.default.string,m.default.shape({base:m.default.string.isRequired,afterOpen:m.default.string.isRequired,beforeClose:m.default.string.isRequired})]),appElement:m.default.oneOfType([m.default.instanceOf($e.default),m.default.instanceOf(U.SafeHTMLCollection),m.default.instanceOf(U.SafeNodeList),m.default.arrayOf(m.default.instanceOf($e.default))]),onAfterOpen:m.default.func,onRequestClose:m.default.func,closeTimeoutMS:m.default.number,ariaHideApp:m.default.bool,shouldFocusAfterRender:m.default.bool,shouldCloseOnOverlayClick:m.default.bool,shouldReturnFocusAfterClose:m.default.bool,preventScroll:m.default.bool,parentSelector:m.default.func,aria:m.default.object,data:m.default.object,role:m.default.string,contentLabel:m.default.string,shouldCloseOnEsc:m.default.bool,overlayRef:m.default.func,contentRef:m.default.func,id:m.default.string,overlayElement:m.default.func,contentElement:m.default.func};le.defaultProps={isOpen:!1,portalClassName:_o,bodyOpenClassName:Do,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(t,o){return be.default.createElement("div",t,o)},contentElement:function(t,o){return be.default.createElement("div",t,o)}};le.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,ko.polyfill)(le);Q.default=le;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var o=Q,r=i(o);function i(l){return l&&l.__esModule?l:{default:l}}t.default=r.default,e.exports=t.default})(Ee,Ee.exports);var Ro=Ee.exports;const Ot=st(Ro),B="/goit-group2-react-nodejs/assets/horodiukIcons-b8c45607.svg",Ge=c.select`
  margin-bottom: 24px;
  border: 1px solid #d7e3ff;
  border-radius: 6px;
  padding: 12px 10px;
  width: 90px;
  height: 44px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`,Vo=c.div``,Ye=c.div`
  position: relative;
  display: inline-block;
`,Je=c.svg`
  position: absolute;
  top: 10px;
  right: 6px;
  pointer-events: none;
`;function St({onChange:e,value:t}){const o=Array.from(new Array(24),(d,u)=>u),r=[0,5,10,15,20,25,30,35,40,45,50,55],i=new Date(t);let l=i.getHours(),p=i.getMinutes();const s=r.reduce((d,u)=>u>=p&&(d===null||Math.abs(u-p)<Math.abs(d-p))?u:d,null);return s===null?(l=(l+1)%24,p=0):p=s,n.jsxs(Vo,{id:"selectTimeWrapper",children:[n.jsxs(Ye,{children:[n.jsx(Ge,{onChange:d=>e(d,"hour"),value:l,children:o.map(d=>n.jsx("option",{value:d,children:d.toString().padStart(2,"0")},d))}),n.jsx(Je,{width:"24",height:"24",children:n.jsx("use",{href:`${B}#icon-arrow`})})]}),":",n.jsxs(Ye,{children:[n.jsx(Ge,{onChange:d=>e(d,"minute"),value:p,children:r.map(d=>n.jsx("option",{value:d,children:d.toString().padStart(2,"0")},d))}),n.jsx(Je,{width:"24",height:"24",children:n.jsx("use",{href:`${B}#icon-arrow`})})]})]})}const Wo=c.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  overflow: scroll;
`,Fo=c.div`
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
`,Lo=c.button`
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
`,Io=c.h2`
  font-weight: 500;
  font-size: 26px;
  line-height: 123%;
  color: #2f2f2f;
  margin-bottom: 24px;
`,Qe=c.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  color: #2f2f2f;
  margin-bottom: 16px;
`,Ze=c.p`
  font-size: 16px;
  line-height: 125%;
  color: #2f2f2f;
  margin-bottom: 12px;
`,et=c.button`
  box-shadow: 0 2px 4px 0 rgba(64, 123, 255, 0.2);
  background-color: #fff;
  border: 1px solid #9ebbff;
  border-radius: 30px;
  padding: 0px;
  width: 44px;
  height: 44px;
  cursor: pointer;
`,tt=c.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 133%;
  color: #407bff;
  text-align: center;
`,Ho=c.input`
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
`,Bo=c.input`
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
`,zo=c.button`
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
`,Uo=c.div`
  background-color: #d7e3ff;
  border-radius: 40px;
  padding: 6px 10px;
  height: 36px;
`,$o=c.div`
  display: flex;
  width: 194px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`,qo=c.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
  }
`;Ot.setAppElement("#root");function Et({isOpen:e,onClose:t,onAddWater:o}){const[r,i]=A.useState(0),[l,p]=A.useState(!1),[s,d]=A.useState(0),u=ye(),[b,f]=A.useState(new Date),v=(S,j="")=>{let N=new Date(b);switch(j){case"hour":N.setHours(parseInt(S.target.value,10));break;case"minute":N.setMinutes(Math.ceil(parseInt(S.target.value,10)/5)*5);break}f(N)},y=()=>{u(Ft({amount:r,date:Date(b)}))},w=()=>{t()},C=()=>{i(r+50),d(r+50)},T=()=>{if(r-50<0){i(0),d(0);return}i(r-50),d(r-50)},M=()=>{i(s)},q=S=>{const j=parseInt(S.target.value>0?S.target.value:0,10);d(j)},_=S=>{S.target.closest("#selectTimeWrapper")||(p(!1),S.target===S.currentTarget&&w())},z=S=>{S.key==="Escape"&&w()};A.useEffect(()=>(window.addEventListener("keydown",z),()=>{window.removeEventListener("keydown",z)}),[]);const H=S=>{const j=new Date(S),N=R=>R.toString().padStart(2,"0");return`${N(j.getHours())}:${N(j.getMinutes())}`};return ct.createPortal(n.jsx(Wo,{onClick:_,children:n.jsxs(Fo,{children:[n.jsx(Lo,{onClick:w,children:n.jsx("svg",{width:"24",height:"24",children:n.jsx("use",{href:`${B}#icon-close`})})}),n.jsx(Io,{children:"Add water"}),n.jsx(Qe,{children:"Choose a value:"}),n.jsx(Ze,{children:"Amount of water:"}),n.jsxs($o,{children:[n.jsx(et,{onClick:T,children:n.jsx("svg",{width:"44",height:"44",children:n.jsx("use",{href:`${B}#icon-minus`})})}),n.jsx(Uo,{children:n.jsxs(tt,{children:[r,"ml"]})}),n.jsx(et,{onClick:C,children:n.jsx("svg",{width:"44",height:"44",children:n.jsx("use",{href:`${B}#icon-plus`})})})]}),n.jsx(Ze,{children:"Recording time:"}),l?n.jsx(St,{onChange:v,value:b}):n.jsx(Ho,{type:"text","aria-label":"Choose time",value:H(b),onChange:()=>{},onFocus:()=>p(!0)}),n.jsx(Qe,{children:"Enter the value of the water used:"}),n.jsx(Bo,{value:s,onBlur:M,onChange:q,type:"number"}),n.jsxs(qo,{children:[n.jsxs(tt,{children:[r,"ml"]}),n.jsx(zo,{onClick:y,type:"button",children:"Save"})]})]})}),document.getElementById("modal-root"))}const Xo=c.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  overflow: scroll;
`,Ko=c.div`
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
`,Go=c.button`
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
`,Yo=c.h2`
  font-weight: 500;
  font-size: 26px;
  line-height: 123%;
  color: #2f2f2f;
  margin-bottom: 24px;
`,nt=c.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  color: #2f2f2f;
  margin-bottom: 16px;
`,ot=c.p`
  font-size: 16px;
  line-height: 125%;
  color: #2f2f2f;
  margin-bottom: 12px;
`,rt=c.button`
  box-shadow: 0 2px 4px 0 rgba(64, 123, 255, 0.2);
  background-color: #fff;
  border: 1px solid #9ebbff;
  border-radius: 30px;
  padding: 0px;
  width: 44px;
  height: 44px;
  cursor: pointer;
`,at=c.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 133%;
  color: #407bff;
  text-align: center;
`,Jo=c.input`
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
`,Qo=c.input`
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
`,Zo=c.button`
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
`,er=c.div`
  background-color: #d7e3ff;
  border-radius: 40px;
  padding: 6px 10px;
  height: 36px;
`,tr=c.div`
  display: flex;
  width: 194px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`,nr=c.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
  }
`,or=c.div`
  display: flex;
  gap: 14px;
  align-items: center;
  margin-bottom: 24px;
  border-radius: 10px;
  padding: 8px 24px;
  width: 256px;
  background-color: #ecf2ff;
`,rr=c.p`
  font-size: 18px;
  line-height: 133%;
  color: #407bff;
`,ar=c.p`
  font-size: 16px;
  line-height: 125%;
  color: #2f2f2f;
`;Ot.setAppElement("#root");function ir({isOpen:e,onClose:t,onAddWater:o}){const r=me(Kt)||{amount:250,date:new Date},[i,l]=A.useState(r.amount),[p,s]=A.useState(!1),[d,u]=A.useState(0),b=ye(),[f,v]=A.useState(r.date),y=(j,N="")=>{let R=new Date(f);switch(N){case"hour":R.setHours(parseInt(j.target.value,10));break;case"minute":R.setMinutes(Math.ceil(parseInt(j.target.value,10)/5)*5);break}v(R)},w=()=>{b(Lt({amount:i,date:Date(f)}))},C=()=>{t()},T=()=>{l(i+50),u(i+50)},M=()=>{if(i-50<0){l(0),u(0);return}l(i-50),u(i-50)},q=()=>{l(d)},_=j=>{const N=parseInt(j.target.value>0?j.target.value:0,10);u(N)},z=j=>{j.target.closest("#selectTimeWrapper")||(s(!1),j.target===j.currentTarget&&C())},H=j=>{j.key==="Escape"&&C()};A.useEffect(()=>(window.addEventListener("keydown",H),()=>{window.removeEventListener("keydown",H)}),[]);const S=j=>{const N=new Date(j),R=je=>je.toString().padStart(2,"0");return`${R(N.getHours())}:${R(N.getMinutes())}`};return ct.createPortal(n.jsx(Xo,{onClick:z,children:n.jsxs(Ko,{children:[n.jsx(Go,{onClick:C,children:n.jsx("svg",{width:"24",height:"24",children:n.jsx("use",{href:`${B}#icon-close`})})}),n.jsx(Yo,{children:"Edit the entered amount of water"}),n.jsxs(or,{children:[" ",n.jsx("svg",{width:"36",height:"36",children:n.jsx("use",{href:`${B}#icon-glass`})}),n.jsxs(rr,{children:[r.amount,"ml"]}),n.jsx(ar,{children:S(r.time)})]}),n.jsx(nt,{children:"Correct entered data:"}),n.jsx(ot,{children:"Amount of water:"}),n.jsxs(tr,{children:[n.jsx(rt,{onClick:M,children:n.jsx("svg",{width:"44",height:"44",children:n.jsx("use",{href:`${B}#icon-minus`})})}),n.jsx(er,{children:n.jsxs(at,{children:[i,"ml"]})}),n.jsx(rt,{onClick:T,children:n.jsx("svg",{width:"44",height:"44",children:n.jsx("use",{href:`${B}#icon-plus`})})})]}),n.jsx(ot,{children:"Recording time:"}),p?n.jsx(St,{onChange:y,value:f}):n.jsx(Jo,{type:"text","aria-label":"Choose time",value:S(f),onChange:()=>{},onFocus:()=>s(!0)}),n.jsx(nt,{children:"Enter the value of the water used:"}),n.jsx(Qo,{value:d,onBlur:q,onChange:_,type:"number"}),n.jsxs(nr,{children:[n.jsxs(at,{children:[i,"ml"]}),n.jsx(Zo,{onClick:w,type:"button",children:"Save"})]})]})}),document.getElementById("modal-root"))}const sr=c.div`
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
`,lr=c.div`
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
`,cr=c.div`
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
`,dr=c.button`
  width: 24px;
  height: 24px;
  background-color: transparent;
  padding: 0;
`,pr=c.svg`
  width: 100%;
  height: 100%;
  stroke: ${({theme:e})=>e.color.primaryAccent};

  &:hover,
  &:focus {
    stroke: ${({theme:e})=>e.color.secondaryYellow};
  }
`,Mt=({onShow:e,children:t,title:o,onClose:r})=>{const i=document.querySelector("#modal-root");if(A.useEffect(()=>{const p=s=>{s.code==="Escape"&&r()};return e&&(document.body.style.overflow="hidden",window.addEventListener("keydown",p)),()=>{document.body.style.overflow="auto",window.removeEventListener("keydown",p)}},[e,r]),!e)return null;const l=n.jsx(sr,{onClick:r,children:n.jsxs(lr,{onClick:p=>p.stopPropagation(),children:[n.jsxs(cr,{children:[n.jsx("h2",{children:o}),n.jsx(dr,{onClick:r,children:n.jsx(pr,{children:n.jsx("use",{href:`${Se}#icon-Vector`})})})]}),t]})});return lt.createPortal(l,i)};Mt.propTypes={onClose:fe.func.isRequired,children:fe.node.isRequired,onShow:fe.bool.isRequired,title:fe.string.isRequired};const ur=c.div`
  padding: 0 24px 32px;
`,fr=c.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    flex-direction: row-reverse;
  }
`,it=c.button`
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
`,hr=c.p`
  font-size: 18px;
  color: ${({theme:e})=>e.color.primaryBlack};
  line-height: 20px;
  font-weight: 500;

  margin-bottom: 24px;
`,mr=({onClose:e,onShow:t})=>n.jsx(Mt,{onClose:e,onShow:t,title:"Delete Entry",children:n.jsxs(ur,{children:[n.jsx(hr,{children:"Are you sure you want to delete the entry?"}),n.jsxs(fr,{children:[n.jsx(it,{onClick:e,children:"Delete"}),n.jsx(it,{onClick:e,children:"Cancel"})]})]})}),xr=c.ul`
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
`,gr=c.li`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: space-between;
`,vr=c.div`
  display: flex;
  align-items: center;
`,br=c.p`
  color: #407bff;
  font-size: 18px;
  line-height: 24px;
  margin-left: 12px;
`,Ar=c.p`
  margin-left: 12px;
  line-height: 24px;
  font-size: 12px;
  color: #2f2f2f;

  @media screen and (min-width: 768px) {
    margin-left: 16px;
  }
`,yr=c.h2`
  margin-bottom: 16px;
  color: #2f2f2f;
  font-weight: 500px;
  font-size: 24px;
  line-height: 30px;

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 32px;
  }
`,wr=c.button`
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
`,jr=c.button`
  margin-right: 18px;
  background-color: transparent;
`,Cr=c.button`
  background-color: transparent;
`,Or=[{id:"1",amount:"250ml",time:"14:00 PM"},{id:"2",amount:"250ml",time:"14:00 PM"},{id:"3",amount:"250ml",time:"14:00 PM"},{id:"4",amount:"250ml",time:"14:00 PM"},{id:"5",amount:"250ml",time:"14:00 PM"},{id:"6",amount:"250ml",time:"14:00 PM"}],Sr=()=>{const[e,t]=A.useState(Or),[o,r]=A.useState(!1),[i,l]=A.useState(!1),[p,s]=A.useState(!1),d=me(Xt);console.log(d);const u=()=>{r(!1)},b=()=>{r(!0)},f=()=>{l(!1)},v=()=>{l(!0)},y=()=>{s(!1)},w=C=>{t(T=>T.filter(M=>M.id!==C))};return n.jsxs("div",{children:[n.jsxs("div",{children:[n.jsx(yr,{children:"Today"}),n.jsx(xr,{children:e.length>0&&e.map(({id:C,amount:T,time:M})=>n.jsxs(n.Fragment,{children:[n.jsxs(gr,{children:[n.jsxs(vr,{children:[n.jsx("img",{src:wn,alt:"Icon glass"}),n.jsx(br,{children:T}),n.jsx(Ar,{children:M})]}),n.jsxs("div",{children:[n.jsx(jr,{type:"button",onClick:v,children:n.jsx("img",{src:jn,alt:"Icon glass"})}),n.jsx(Cr,{type:"button",onClick:()=>w(C),children:n.jsx("img",{src:Cn,alt:"Icon glass"})}),o&&n.jsx(mr,{isOpen:p,onClose:y})]})]},C),i&&n.jsx(ir,{isOpen:i,onClose:f})]}))})]}),n.jsxs(wr,{type:"button",onClick:b,children:[n.jsx(yn,{})," Add Water"]}),o&&n.jsx(Et,{isOpen:o,onClose:u})]})},Er=Sr;function Mr(e){return ft({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"16"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"16",y2:"12"},child:[]}]})(e)}const kr=c.div`
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
`,Pr=c.div`
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
`,Tr=c.input`
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
`,Nr=c.div`
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
`,_r=c.button`
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
`,Dr=()=>{const[e,t]=A.useState(!1),o=()=>{t(!1)},r=95,i=()=>{t(!0)};return n.jsxs(kr,{children:[n.jsxs(Pr,{children:[n.jsx("h2",{children:"Today"}),n.jsx(Tr,{value:r,type:"range",min:"0",max:"100"}),n.jsxs(Nr,{children:[n.jsx("p",{children:"0%"}),n.jsx("p",{children:"50%"}),n.jsx("p",{children:"100%"})]})]}),n.jsxs(_r,{onClick:i,type:"button",children:[n.jsx(Mr,{}),"Add Water"]}),e&&n.jsx(Et,{isOpen:e,onClose:o})]})},Rr=Dr,Vr="/goit-group2-react-nodejs/assets/bottleHomeScreenDesk-630fd92f.png",Wr="/goit-group2-react-nodejs/assets/bottleHomeScreenDesk2x@2x-51f4e9e6.png",Fr="/goit-group2-react-nodejs/assets/bottleHomeScreenTab-2759a74b.png",Lr="/goit-group2-react-nodejs/assets/bottleHomeScreenTab@2x-805003a0.png",Ir="/goit-group2-react-nodejs/assets/bottleHomeScreenMob-fe8938bc.png",Hr="/goit-group2-react-nodejs/assets/bottleHomeScreenMob2x@2x-9640a1cb.png",Br="data:image/png;base64,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",zr="/goit-group2-react-nodejs/assets/backgroundElementHomeScreenTab-4de5d48f.png",Ur=c.div`
  background-size: cover;
  background: url(${Br});
  height: max-content;
  background-repeat: no-repeat;
  min-height: calc(100% - 64px);

  @media screen and (min-width: 768px) {
    background: url(${zr});
    min-height: calc(100% - 80px);
  }

  @media screen and (min-width: 1440px) {
    background: url(${It});
    min-height: calc(100% - 72px);
  }
`,$r=c.div`
  margin-bottom: 40px;
  margin-top: 20px;
  background-size: 280px 208px;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${Ir});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 440px;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${Hr});
  }

  @media screen and (min-width: 768px) {
    background-size: 518px 386px;
    background-position: calc(50% + 9px) 8px;
    height: 492px;
    background-image: url(${Fr});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background: url(${Lr});
      background-size: 518px 386px;
      background-repeat: no-repeat;
    }
  }

  @media screen and (min-width: 1440px) {
    background-size: 738px 548px;
    background-position: calc(50% + 10px) 46px;
    height: 680px;
    background-image: url(${Vr});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${Wr});
    }
  }
`,qr=c.div`
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
`,Xr=c.div`
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
`;function Yr(){return n.jsx(Ur,{children:n.jsxs(qr,{children:[n.jsxs($r,{children:[n.jsx(qt,{}),n.jsx(Rr,{})]}),n.jsxs(Xr,{children:[n.jsx(Er,{}),n.jsx(fn,{})]})]})})}export{Yr as default};
