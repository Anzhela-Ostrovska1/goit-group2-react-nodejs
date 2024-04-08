import{n as p,e as Ot,g as Xe,r as P,a as bt,j as s,f as Ve,h as ct,i as pe,s as Ut,b as He,k as Ye,L as qe,R as lt,M as Ge,l as Qe,m as At,T as Ue,o as $e,B as Je,p as Ke,A as ue}from"./index-35d78900.js";import{b as Ze}from"./bg_element_des@1x-1805b66c.js";const _e=p.div`
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
`,tn=p.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,en=p.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`,nn=p.div`
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
`;var xe={exports:{}};(function(e){(function(n,t){e.exports=t(n)})(typeof Ot>"u"?typeof window>"u"?Ot:window:Ot,function(n){if(typeof n>"u"&&typeof n.document>"u")return!1;var t,i,o,l,m,x=`

Visit documentation page to learn more: https://notiflix.github.io/documentation`,h='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',w={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},A={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},N={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},H={ID:"NotiflixReportWrap",className:"notiflix-report",width:"320px",backgroundColor:"#f8f8f8",borderRadius:"25px",rtl:!1,zindex:4002,backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",backOverlayClickToClose:!1,fontFamily:"Quicksand",svgSize:"110px",plainText:!0,titleFontSize:"16px",titleMaxLength:34,messageFontSize:"13px",messageMaxLength:400,buttonFontSize:"14px",buttonMaxLength:34,cssAnimation:!0,cssAnimationDuration:360,cssAnimationStyle:"fade",success:{svgColor:"#32c682",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#32c682",buttonColor:"#fff",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{svgColor:"#ff5549",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#ff5549",buttonColor:"#fff",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{svgColor:"#eebf31",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#eebf31",buttonColor:"#fff",backOverlayColor:"rgba(238,191,49,0.2)"},info:{svgColor:"#26c0d3",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#26c0d3",buttonColor:"#fff",backOverlayColor:"rgba(38,192,211,0.2)"}},T={Show:"Show",Ask:"Ask",Prompt:"Prompt"},$={ID:"NotiflixConfirmWrap",className:"notiflix-confirm",width:"300px",zindex:4003,position:"center",distance:"10px",backgroundColor:"#f8f8f8",borderRadius:"25px",backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,cssAnimationStyle:"fade",plainText:!0,titleColor:"#32c682",titleFontSize:"16px",titleMaxLength:34,messageColor:"#1e1e1e",messageFontSize:"14px",messageMaxLength:110,buttonsFontSize:"15px",buttonsMaxLength:34,okButtonColor:"#f8f8f8",okButtonBackground:"#32c682",cancelButtonColor:"#f8f8f8",cancelButtonBackground:"#a9a9a9"},j={Standard:"Standard",Hourglass:"Hourglass",Circle:"Circle",Arrows:"Arrows",Dots:"Dots",Pulse:"Pulse",Custom:"Custom",Notiflix:"Notiflix"},Q={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},D={Standard:"Standard",Hourglass:"Hourglass",Circle:"Circle",Arrows:"Arrows",Dots:"Dots",Pulse:"Pulse"},O={ID:"NotiflixBlockWrap",querySelectorLimit:200,className:"notiflix-block",position:"absolute",zindex:1e3,backgroundColor:"rgba(255,255,255,0.9)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,svgSize:"45px",svgColor:"#383838",messageFontSize:"14px",messageMaxLength:34,messageColor:"#383838"},S=function(a){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549",`
`+a+x)},et=function(a){return console.log("%c Notiflix Info ","padding:2px;border-radius:20px;color:#fff;background:#26c0d3",`
`+a+x)},_=function(a){return a||(a="head"),n.document[a]!==null||(S(`
Notiflix needs to be appended to the "<`+a+'>" element, but you called it before the "<'+a+'>" element has been created.'),!1)},nt=function(a,r){if(!_("head"))return!1;if(a()!==null&&!n.document.getElementById(r)){var c=n.document.createElement("style");c.id=r,c.innerHTML=a(),n.document.head.appendChild(c)}},b=function(){var a={},r=!1,c=0;Object.prototype.toString.call(arguments[0])==="[object Boolean]"&&(r=arguments[0],c++);for(var f=function(g){for(var v in g)Object.prototype.hasOwnProperty.call(g,v)&&(a[v]=r&&Object.prototype.toString.call(g[v])==="[object Object]"?b(a[v],g[v]):g[v])};c<arguments.length;c++)f(arguments[c]);return a},I=function(a){var r=n.document.createElement("div");return r.innerHTML=a,r.textContent||r.innerText||""},it=function(a,r){a||(a="110px"),r||(r="#32c682");var c='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="'+a+'" height="'+a+'" fill="'+r+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';return c},jt=function(a,r){a||(a="110px"),r||(r="#ff5549");var c='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="'+a+'" height="'+a+'" fill="'+r+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';return c},Ce=function(a,r){a||(a="110px"),r||(r="#eebf31");var c='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="'+a+'" height="'+a+'" fill="'+r+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';return c},ze=function(a,r){a||(a="110px"),r||(r="#26c0d3");var c='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="'+a+'" height="'+a+'" fill="'+r+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';return c},Bt=function(a,r){a||(a="60px"),r||(r="#32c682");var c='<svg xmlns="http://www.w3.org/2000/svg" stroke="'+r+'" width="'+a+'" height="'+a+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>';return c},It=function(a,r){a||(a="60px"),r||(r="#32c682");var c='<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+r+'" width="'+a+'" height="'+a+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>';return c},Rt=function(a,r){a||(a="60px"),r||(r="#32c682");var c='<svg xmlns="http://www.w3.org/2000/svg" width="'+a+'" height="'+a+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+a+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+a+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+r+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>';return c},Ft=function(a,r){a||(a="60px"),r||(r="#32c682");var c='<svg xmlns="http://www.w3.org/2000/svg" fill="'+r+'" width="'+a+'" height="'+a+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>';return c},Xt=function(a,r){a||(a="60px"),r||(r="#32c682");var c='<svg xmlns="http://www.w3.org/2000/svg" fill="'+r+'" width="'+a+'" height="'+a+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>';return c},Vt=function(a,r){a||(a="60px"),r||(r="#32c682");var c='<svg xmlns="http://www.w3.org/2000/svg" stroke="'+r+'" width="'+a+'" height="'+a+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>';return c},Me=function(a,r,c){a||(a="60px"),r||(r="#f8f8f8"),c||(c="#32c682");var f='<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+a+'" height="'+a+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+r+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+c+'" stroke="'+c+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>';return f},Se=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},yt=0,wt=function(a,r,c,f){if(!_("body"))return!1;t||Y.Notify.init({});var g=b(!0,t,{});if(typeof c=="object"&&!Array.isArray(c)||typeof f=="object"&&!Array.isArray(f)){var v={};typeof c=="object"?v=c:typeof f=="object"&&(v=f),t=b(!0,t,v)}var y=t[a.toLocaleLowerCase("en")];yt++,typeof r!="string"&&(r="Notiflix "+a),t.plainText&&(r=I(r)),!t.plainText&&r.length>t.messageMaxLength&&(t=b(!0,t,{closeButton:!0,messageMaxLength:150}),r='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),r.length>t.messageMaxLength&&(r=r.substring(0,t.messageMaxLength)+"..."),t.fontAwesomeIconStyle==="shadow"&&(y.fontAwesomeIconColor=y.background),t.cssAnimation||(t.cssAnimationDuration=0);var d=n.document.getElementById(A.wrapID)||n.document.createElement("div");if(d.id=A.wrapID,d.style.width=t.width,d.style.zIndex=t.zindex,d.style.opacity=t.opacity,t.position==="center-center"?(d.style.left=t.distance,d.style.top=t.distance,d.style.right=t.distance,d.style.bottom=t.distance,d.style.margin="auto",d.classList.add("nx-flex-center-center"),d.style.maxHeight="calc((100vh - "+t.distance+") - "+t.distance+")",d.style.display="flex",d.style.flexWrap="wrap",d.style.flexDirection="column",d.style.justifyContent="center",d.style.alignItems="center",d.style.pointerEvents="none"):t.position==="center-top"?(d.style.left=t.distance,d.style.right=t.distance,d.style.top=t.distance,d.style.bottom="auto",d.style.margin="auto"):t.position==="center-bottom"?(d.style.left=t.distance,d.style.right=t.distance,d.style.bottom=t.distance,d.style.top="auto",d.style.margin="auto"):t.position==="right-bottom"?(d.style.right=t.distance,d.style.bottom=t.distance,d.style.top="auto",d.style.left="auto"):t.position==="left-top"?(d.style.left=t.distance,d.style.top=t.distance,d.style.right="auto",d.style.bottom="auto"):t.position==="left-bottom"?(d.style.left=t.distance,d.style.bottom=t.distance,d.style.top="auto",d.style.right="auto"):(d.style.right=t.distance,d.style.top=t.distance,d.style.left="auto",d.style.bottom="auto"),t.backOverlay){var C=n.document.getElementById(A.overlayID)||n.document.createElement("div");C.id=A.overlayID,C.style.width="100%",C.style.height="100%",C.style.position="fixed",C.style.zIndex=t.zindex-1,C.style.left=0,C.style.top=0,C.style.right=0,C.style.bottom=0,C.style.background=y.backOverlayColor||t.backOverlayColor,C.className=t.cssAnimation?"nx-with-animation":"",C.style.animationDuration=t.cssAnimation?t.cssAnimationDuration+"ms":"",n.document.getElementById(A.overlayID)||n.document.body.appendChild(C)}n.document.getElementById(A.wrapID)||n.document.body.appendChild(d);var u=n.document.createElement("div");u.id=t.ID+"-"+yt,u.className=t.className+" "+y.childClassName+" "+(t.cssAnimation?"nx-with-animation":"")+" "+(t.useIcon?"nx-with-icon":"")+" nx-"+t.cssAnimationStyle+" "+(t.closeButton&&typeof c!="function"?"nx-with-close-button":"")+" "+(typeof c=="function"?"nx-with-callback":"")+" "+(t.clickToClose?"nx-notify-click-to-close":""),u.style.fontSize=t.fontSize,u.style.color=y.textColor,u.style.background=y.background,u.style.borderRadius=t.borderRadius,u.style.pointerEvents="all",t.rtl&&(u.setAttribute("dir","rtl"),u.classList.add("nx-rtl-on")),u.style.fontFamily='"'+t.fontFamily+'", '+h,t.cssAnimation&&(u.style.animationDuration=t.cssAnimationDuration+"ms");var L="";if(t.closeButton&&typeof c!="function"&&(L='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+y.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),!t.useIcon)u.innerHTML='<span class="nx-message">'+r+"</span>"+(t.closeButton?L:"");else if(t.useFontAwesome)u.innerHTML='<i style="color:'+y.fontAwesomeIconColor+"; font-size:"+t.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+y.fontAwesomeClassName+" "+(t.fontAwesomeIconStyle==="shadow"?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+r+"</span>"+(t.closeButton?L:"");else{var R="";a===w.Success?R='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+y.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':a===w.Failure?R='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+y.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':a===w.Warning?R='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+y.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':a===w.Info&&(R='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+y.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),u.innerHTML=R+'<span class="nx-message nx-with-icon">'+r+"</span>"+(t.closeButton?L:"")}if(t.position==="left-bottom"||t.position==="right-bottom"){var X=n.document.getElementById(A.wrapID);X.insertBefore(u,X.firstChild)}else n.document.getElementById(A.wrapID).appendChild(u);var B=n.document.getElementById(u.id);if(B){var z,F,M=function(){B.classList.add("nx-remove");var k=n.document.getElementById(A.overlayID);k&&0>=d.childElementCount&&k.classList.add("nx-remove"),clearTimeout(z)},J=function(){if(B&&B.parentNode!==null&&B.parentNode.removeChild(B),0>=d.childElementCount&&d.parentNode!==null){d.parentNode.removeChild(d);var k=n.document.getElementById(A.overlayID);k&&k.parentNode!==null&&k.parentNode.removeChild(k)}clearTimeout(F)};if(t.closeButton&&typeof c!="function"){var K=n.document.getElementById(u.id).querySelector("span.nx-close-button");K.addEventListener("click",function(){M();var k=setTimeout(function(){J(),clearTimeout(k)},t.cssAnimationDuration)})}if((typeof c=="function"||t.clickToClose)&&B.addEventListener("click",function(){typeof c=="function"&&c(),M();var k=setTimeout(function(){J(),clearTimeout(k)},t.cssAnimationDuration)}),!t.closeButton&&typeof c!="function"){var q=function(){z=setTimeout(function(){M()},t.timeout),F=setTimeout(function(){J()},t.timeout+t.cssAnimationDuration)};q(),t.pauseOnHover&&(B.addEventListener("mouseenter",function(){B.classList.add("nx-paused"),clearTimeout(z),clearTimeout(F)}),B.addEventListener("mouseleave",function(){B.classList.remove("nx-paused"),q()}))}}if(t.showOnlyTheLastOne&&0<yt)for(var G,E=n.document.querySelectorAll("[id^="+t.ID+"-]:not([id="+t.ID+"-"+yt+"])"),at=0;at<E.length;at++)G=E[at],G.parentNode!==null&&G.parentNode.removeChild(G);t=b(!0,t,g)},We=function(){return'[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},kt=function(a,r,c,f,g,v){if(!_("body"))return!1;i||Y.Report.init({});var y={};if(typeof g=="object"&&!Array.isArray(g)||typeof v=="object"&&!Array.isArray(v)){var d={};typeof g=="object"?d=g:typeof v=="object"&&(d=v),y=b(!0,i,{}),i=b(!0,i,d)}var C=i[a.toLocaleLowerCase("en")];typeof r!="string"&&(r="Notiflix "+a),typeof c!="string"&&(a===N.Success?c='"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein':a===N.Failure?c='"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford':a===N.Warning?c='"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk':a===N.Info&&(c='"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')),typeof f!="string"&&(f="Okay"),i.plainText&&(r=I(r),c=I(c),f=I(f)),i.plainText||(r.length>i.titleMaxLength&&(r="Possible HTML Tags Error",c='The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.',f="Okay"),c.length>i.messageMaxLength&&(r="Possible HTML Tags Error",c='The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.',f="Okay"),f.length>i.buttonMaxLength&&(r="Possible HTML Tags Error",c='The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.',f="Okay")),r.length>i.titleMaxLength&&(r=r.substring(0,i.titleMaxLength)+"..."),c.length>i.messageMaxLength&&(c=c.substring(0,i.messageMaxLength)+"..."),f.length>i.buttonMaxLength&&(f=f.substring(0,i.buttonMaxLength)+"..."),i.cssAnimation||(i.cssAnimationDuration=0);var u=n.document.createElement("div");u.id=H.ID,u.className=i.className,u.style.zIndex=i.zindex,u.style.borderRadius=i.borderRadius,u.style.fontFamily='"'+i.fontFamily+'", '+h,i.rtl&&(u.setAttribute("dir","rtl"),u.classList.add("nx-rtl-on")),u.style.display="flex",u.style.flexWrap="wrap",u.style.flexDirection="column",u.style.alignItems="center",u.style.justifyContent="center";var L="",R=i.backOverlayClickToClose===!0;i.backOverlay&&(L='<div class="'+i.className+"-overlay"+(i.cssAnimation?" nx-with-animation":"")+(R?" nx-report-click-to-close":"")+'" style="background:'+(C.backOverlayColor||i.backOverlayColor)+";animation-duration:"+i.cssAnimationDuration+'ms;"></div>');var X="";if(a===N.Success?X=it(i.svgSize,C.svgColor):a===N.Failure?X=jt(i.svgSize,C.svgColor):a===N.Warning?X=Ce(i.svgSize,C.svgColor):a===N.Info&&(X=ze(i.svgSize,C.svgColor)),u.innerHTML=L+'<div class="'+i.className+"-content"+(i.cssAnimation?" nx-with-animation ":"")+" nx-"+i.cssAnimationStyle+'" style="width:'+i.width+"; background:"+i.backgroundColor+"; animation-duration:"+i.cssAnimationDuration+'ms;"><div style="width:'+i.svgSize+"; height:"+i.svgSize+';" class="'+i.className+'-icon">'+X+'</div><h5 class="'+i.className+'-title" style="font-weight:500; font-size:'+i.titleFontSize+"; color:"+C.titleColor+';">'+r+'</h5><p class="'+i.className+'-message" style="font-size:'+i.messageFontSize+"; color:"+C.messageColor+';">'+c+'</p><a id="NXReportButton" class="'+i.className+'-button" style="font-weight:500; font-size:'+i.buttonFontSize+"; background:"+C.buttonBackground+"; color:"+C.buttonColor+';">'+f+"</a></div>",!n.document.getElementById(u.id)){n.document.body.appendChild(u);var B=function(){var M=n.document.getElementById(u.id);M.classList.add("nx-remove");var J=setTimeout(function(){M.parentNode!==null&&M.parentNode.removeChild(M),clearTimeout(J)},i.cssAnimationDuration)},z=n.document.getElementById("NXReportButton");if(z.addEventListener("click",function(){typeof g=="function"&&g(),B()}),L&&R){var F=n.document.querySelector(".nx-report-click-to-close");F.addEventListener("click",function(){B()})}}i=b(!0,i,y)},je=function(){return'[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*="-content"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-head"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*="-content"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*="-content"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},Dt=function(a,r,c,f,g,v,y,d,C){if(!_("body"))return!1;o||Y.Confirm.init({});var u=b(!0,o,{});typeof C!="object"||Array.isArray(C)||(o=b(!0,o,C)),typeof r!="string"&&(r="Notiflix Confirm"),typeof c!="string"&&(c="Do you agree with me?"),typeof g!="string"&&(g="Yes"),typeof v!="string"&&(v="No"),typeof y!="function"&&(y=void 0),typeof d!="function"&&(d=void 0),o.plainText&&(r=I(r),c=I(c),g=I(g),v=I(v)),o.plainText||(r.length>o.titleMaxLength&&(r="Possible HTML Tags Error",c='The "plainText" option is "false" and the title content length is more than "titleMaxLength" option.',g="Okay",v="..."),c.length>o.messageMaxLength&&(r="Possible HTML Tags Error",c='The "plainText" option is "false" and the message content length is more than "messageMaxLength" option.',g="Okay",v="..."),(g.length||v.length)>o.buttonsMaxLength&&(r="Possible HTML Tags Error",c='The "plainText" option is "false" and the buttons content length is more than "buttonsMaxLength" option.',g="Okay",v="...")),r.length>o.titleMaxLength&&(r=r.substring(0,o.titleMaxLength)+"..."),c.length>o.messageMaxLength&&(c=c.substring(0,o.messageMaxLength)+"..."),g.length>o.buttonsMaxLength&&(g=g.substring(0,o.buttonsMaxLength)+"..."),v.length>o.buttonsMaxLength&&(v=v.substring(0,o.buttonsMaxLength)+"..."),o.cssAnimation||(o.cssAnimationDuration=0);var L=n.document.createElement("div");L.id=$.ID,L.className=o.className+(o.cssAnimation?" nx-with-animation nx-"+o.cssAnimationStyle:""),L.style.zIndex=o.zindex,L.style.padding=o.distance,o.rtl&&(L.setAttribute("dir","rtl"),L.classList.add("nx-rtl-on"));var R=typeof o.position=="string"?o.position.trim():"center";L.classList.add("nx-position-"+R),L.style.fontFamily='"'+o.fontFamily+'", '+h;var X="";o.backOverlay&&(X='<div class="'+o.className+"-overlay"+(o.cssAnimation?" nx-with-animation":"")+'" style="background:'+o.backOverlayColor+";animation-duration:"+o.cssAnimationDuration+'ms;"></div>');var B="";typeof y=="function"&&(B='<a id="NXConfirmButtonCancel" class="nx-confirm-button-cancel" style="color:'+o.cancelButtonColor+";background:"+o.cancelButtonBackground+";font-size:"+o.buttonsFontSize+';">'+v+"</a>");var z="",F=null,M=void 0;if(a===T.Ask||a===T.Prompt){F=f||"";var J=a===T.Ask||200<F.length?Math.ceil(1.5*F.length):250,K=a===T.Prompt?'value="'+F+'"':"";z='<div><input id="NXConfirmValidationInput" type="text" '+K+' maxlength="'+J+'" style="font-size:'+o.messageFontSize+";border-radius: "+o.borderRadius+';" autocomplete="off" spellcheck="false" autocapitalize="none" /></div>'}if(L.innerHTML=X+'<div class="'+o.className+'-content" style="width:'+o.width+"; background:"+o.backgroundColor+"; animation-duration:"+o.cssAnimationDuration+"ms; border-radius: "+o.borderRadius+';"><div class="'+o.className+'-head"><h5 style="color:'+o.titleColor+";font-size:"+o.titleFontSize+';">'+r+'</h5><div style="color:'+o.messageColor+";font-size:"+o.messageFontSize+';">'+c+z+'</div></div><div class="'+o.className+'-buttons"><a id="NXConfirmButtonOk" class="nx-confirm-button-ok'+(typeof y=="function"?"":" nx-full")+'" style="color:'+o.okButtonColor+";background:"+o.okButtonBackground+";font-size:"+o.buttonsFontSize+';">'+g+"</a>"+B+"</div></div>",!n.document.getElementById(L.id)){n.document.body.appendChild(L);var q=n.document.getElementById(L.id),G=n.document.getElementById("NXConfirmButtonOk"),E=n.document.getElementById("NXConfirmValidationInput");if(E&&(E.focus(),E.setSelectionRange(0,(E.value||"").length),E.addEventListener("keyup",function(k){var dt=k.target.value;if(a===T.Ask&&dt!==F)k.preventDefault(),E.classList.add("nx-validation-failure"),E.classList.remove("nx-validation-success");else{a===T.Ask&&(E.classList.remove("nx-validation-failure"),E.classList.add("nx-validation-success"));var pt=(k.key||"").toLocaleLowerCase("en")==="enter"||k.keyCode===13;pt&&G.dispatchEvent(new Event("click"))}})),G.addEventListener("click",function(k){if(a===T.Ask&&F&&E){var dt=(E.value||"").toString();if(dt!==F)return E.focus(),E.classList.add("nx-validation-failure"),k.stopPropagation(),k.preventDefault(),k.returnValue=!1,k.cancelBubble=!0,!1;E.classList.remove("nx-validation-failure")}typeof y=="function"&&(a===T.Prompt&&E&&(M=E.value||""),y(M)),q.classList.add("nx-remove");var pt=setTimeout(function(){q.parentNode!==null&&(q.parentNode.removeChild(q),clearTimeout(pt))},o.cssAnimationDuration)}),typeof y=="function"){var at=n.document.getElementById("NXConfirmButtonCancel");at.addEventListener("click",function(){typeof d=="function"&&(a===T.Prompt&&E&&(M=E.value||""),d(M)),q.classList.add("nx-remove");var k=setTimeout(function(){q.parentNode!==null&&(q.parentNode.removeChild(q),clearTimeout(k))},o.cssAnimationDuration)})}}o=b(!0,o,u)},De=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},tt=function(a,r,c,f,g){if(!_("body"))return!1;l||Y.Loading.init({});var v=b(!0,l,{});if(typeof r=="object"&&!Array.isArray(r)||typeof c=="object"&&!Array.isArray(c)){var y={};typeof r=="object"?y=r:typeof c=="object"&&(y=c),l=b(!0,l,y)}var d="";if(typeof r=="string"&&0<r.length&&(d=r),f){d=d.length>l.messageMaxLength?I(d).toString().substring(0,l.messageMaxLength)+"...":I(d).toString();var C="";0<d.length&&(C='<p id="'+l.messageID+'" class="nx-loading-message" style="color:'+l.messageColor+";font-size:"+l.messageFontSize+';">'+d+"</p>"),l.cssAnimation||(l.cssAnimationDuration=0);var u="";if(a===j.Standard)u=Bt(l.svgSize,l.svgColor);else if(a===j.Hourglass)u=It(l.svgSize,l.svgColor);else if(a===j.Circle)u=Rt(l.svgSize,l.svgColor);else if(a===j.Arrows)u=Ft(l.svgSize,l.svgColor);else if(a===j.Dots)u=Xt(l.svgSize,l.svgColor);else if(a===j.Pulse)u=Vt(l.svgSize,l.svgColor);else if(a===j.Custom&&l.customSvgCode!==null&&l.customSvgUrl===null)u=l.customSvgCode||"";else if(a===j.Custom&&l.customSvgUrl!==null&&l.customSvgCode===null)u='<img class="nx-custom-loading-icon" width="'+l.svgSize+'" height="'+l.svgSize+'" src="'+l.customSvgUrl+'" alt="Notiflix">';else{if(a===j.Custom&&(l.customSvgUrl===null||l.customSvgCode===null))return S('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;u=Me(l.svgSize,"#f8f8f8","#32c682")}var L=parseInt((l.svgSize||"").replace(/[^0-9]/g,"")),R=n.innerWidth,X=L>=R?R-40+"px":L+"px",B='<div style="width:'+X+"; height:"+X+';" class="'+l.className+"-icon"+(0<d.length?" nx-with-message":"")+'">'+u+"</div>",z=n.document.createElement("div");if(z.id=Q.ID,z.className=l.className+(l.cssAnimation?" nx-with-animation":"")+(l.clickToClose?" nx-loading-click-to-close":""),z.style.zIndex=l.zindex,z.style.background=l.backgroundColor,z.style.animationDuration=l.cssAnimationDuration+"ms",z.style.fontFamily='"'+l.fontFamily+'", '+h,z.style.display="flex",z.style.flexWrap="wrap",z.style.flexDirection="column",z.style.alignItems="center",z.style.justifyContent="center",l.rtl&&(z.setAttribute("dir","rtl"),z.classList.add("nx-rtl-on")),z.innerHTML=B+C,!n.document.getElementById(z.id)&&(n.document.body.appendChild(z),l.clickToClose)){var F=n.document.getElementById(z.id);F.addEventListener("click",function(){z.classList.add("nx-remove");var K=setTimeout(function(){z.parentNode!==null&&(z.parentNode.removeChild(z),clearTimeout(K))},l.cssAnimationDuration)})}}else if(n.document.getElementById(Q.ID))var M=n.document.getElementById(Q.ID),J=setTimeout(function(){M.classList.add("nx-remove");var K=setTimeout(function(){M.parentNode!==null&&(M.parentNode.removeChild(M),clearTimeout(K))},l.cssAnimationDuration);clearTimeout(J)},g);l=b(!0,l,v)},Le=function(a){typeof a!="string"&&(a="");var r=n.document.getElementById(Q.ID);if(r)if(0<a.length){a=a.length>l.messageMaxLength?I(a).substring(0,l.messageMaxLength)+"...":I(a);var c=r.getElementsByTagName("p")[0];if(c)c.innerHTML=a;else{var f=n.document.createElement("p");f.id=l.messageID,f.className="nx-loading-message nx-loading-message-new",f.style.color=l.messageColor,f.style.fontSize=l.messageFontSize,f.innerHTML=a,r.appendChild(f)}}else S("Where is the new message?")},Te=function(){return'[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*="-icon"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*="-icon"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*="-message"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].nx-with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}'},Lt=0,rt=function(a,r,c,f,g,v){var y;if(Array.isArray(c)){if(1>c.length)return S("Array of HTMLElements should contains at least one HTMLElement."),!1;y=c}else if(Object.prototype.isPrototypeOf.call(NodeList.prototype,c)){if(1>c.length)return S("NodeListOf<HTMLElement> should contains at least one HTMLElement."),!1;y=Array.prototype.slice.call(c)}else{var d=typeof c!="string"||1>(c||"").length||(c||"").length===1&&((c||"")[0]==="#"||(c||"")[0]===".");if(d)return S("The selector parameter must be a string and matches a specified CSS selector(s)."),!1;var C=n.document.querySelectorAll(c);if(1>C.length)return S('You called the "Notiflix.Block..." function with "'+c+'" selector, but there is no such element(s) in the document.'),!1;y=C}m||Y.Block.init({});var u=b(!0,m,{});if(typeof f=="object"&&!Array.isArray(f)||typeof g=="object"&&!Array.isArray(g)){var L={};typeof f=="object"?L=f:typeof g=="object"&&(L=g),m=b(!0,m,L)}var R="";typeof f=="string"&&0<f.length&&(R=f),m.cssAnimation||(m.cssAnimationDuration=0);var X=O.className;typeof m.className=="string"&&(X=m.className.trim());var B=typeof m.querySelectorLimit=="number"?m.querySelectorLimit:200,z=(y||[]).length>=B?B:y.length,F="nx-block-temporary-position";if(a){for(var M,J=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr","html","head","title","script","style","iframe"],K=0;K<z;K++)if(M=y[K],M){if(-1<J.indexOf(M.tagName.toLocaleLowerCase("en")))break;var q=M.querySelectorAll("[id^="+O.ID+"]");if(1>q.length){var G="";r&&(r===D.Hourglass?G=It(m.svgSize,m.svgColor):r===D.Circle?G=Rt(m.svgSize,m.svgColor):r===D.Arrows?G=Ft(m.svgSize,m.svgColor):r===D.Dots?G=Xt(m.svgSize,m.svgColor):r===D.Pulse?G=Vt(m.svgSize,m.svgColor):G=Bt(m.svgSize,m.svgColor));var E='<span class="'+X+'-icon" style="width:'+m.svgSize+";height:"+m.svgSize+';">'+G+"</span>",at="";0<R.length&&(R=R.length>m.messageMaxLength?I(R).substring(0,m.messageMaxLength)+"...":I(R),at='<span style="font-size:'+m.messageFontSize+";color:"+m.messageColor+';" class="'+X+'-message">'+R+"</span>"),Lt++;var k=n.document.createElement("div");k.id=O.ID+"-"+Lt,k.className=X+(m.cssAnimation?" nx-with-animation":""),k.style.position=m.position,k.style.zIndex=m.zindex,k.style.background=m.backgroundColor,k.style.animationDuration=m.cssAnimationDuration+"ms",k.style.fontFamily='"'+m.fontFamily+'", '+h,k.style.display="flex",k.style.flexWrap="wrap",k.style.flexDirection="column",k.style.alignItems="center",k.style.justifyContent="center",m.rtl&&(k.setAttribute("dir","rtl"),k.classList.add("nx-rtl-on")),k.innerHTML=E+at;var dt=n.getComputedStyle(M).getPropertyValue("position"),pt=typeof dt=="string"?dt.toLocaleLowerCase("en"):"relative",Ht=Math.round(1.25*parseInt(m.svgSize))+40,Oe=M.offsetHeight||0,Tt="";Ht>Oe&&(Tt="min-height:"+Ht+"px;");var Yt="";Yt=M.getAttribute("id")?"#"+M.getAttribute("id"):M.classList[0]?"."+M.classList[0]:(M.tagName||"").toLocaleLowerCase("en");var qt="",Gt=-1>=["absolute","relative","fixed","sticky"].indexOf(pt);if(Gt||0<Tt.length){if(!_("head"))return!1;Gt&&(qt="position:relative!important;");var Pe='<style id="Style-'+O.ID+"-"+Lt+'">'+Yt+"."+F+"{"+qt+Tt+"}</style>",Qt=n.document.createRange();Qt.selectNode(n.document.head);var Ee=Qt.createContextualFragment(Pe);n.document.head.appendChild(Ee),M.classList.add(F)}M.appendChild(k)}}}else var Be=function(V){var U=setTimeout(function(){V.parentNode!==null&&V.parentNode.removeChild(V);var ut=V.getAttribute("id"),vt=n.document.getElementById("Style-"+ut);vt&&vt.parentNode!==null&&vt.parentNode.removeChild(vt),clearTimeout(U)},m.cssAnimationDuration)},Ie=function(V){if(V&&0<V.length)for(var U,ut=0;ut<V.length;ut++)U=V[ut],U&&(U.classList.add("nx-remove"),Be(U));else et(typeof c=="string"?'"Notiflix.Block.remove();" function called with "'+c+'" selector, but this selector does not have a "Block" element to remove.':'"Notiflix.Block.remove();" function called with "'+c+'", but this "Array<HTMLElement>" or "NodeListOf<HTMLElement>" does not have a "Block" element to remove.')},Re=function(V){var U=setTimeout(function(){V.classList.remove(F),clearTimeout(U)},m.cssAnimationDuration+300)},Fe=setTimeout(function(){for(var V,U=0;U<z;U++)V=y[U],V&&(Re(V),q=V.querySelectorAll("[id^="+O.ID+"]"),Ie(q));clearTimeout(Fe)},v);m=b(!0,m,u)},Y={Notify:{init:function(a){t=b(!0,A,a),nt(Se,"NotiflixNotifyInternalCSS")},merge:function(a){return t?void(t=b(!0,t,a)):(S("You have to initialize the Notify module before call Merge function."),!1)},success:function(a,r,c){wt(w.Success,a,r,c)},failure:function(a,r,c){wt(w.Failure,a,r,c)},warning:function(a,r,c){wt(w.Warning,a,r,c)},info:function(a,r,c){wt(w.Info,a,r,c)}},Report:{init:function(a){i=b(!0,H,a),nt(We,"NotiflixReportInternalCSS")},merge:function(a){return i?void(i=b(!0,i,a)):(S("You have to initialize the Report module before call Merge function."),!1)},success:function(a,r,c,f,g){kt(N.Success,a,r,c,f,g)},failure:function(a,r,c,f,g){kt(N.Failure,a,r,c,f,g)},warning:function(a,r,c,f,g){kt(N.Warning,a,r,c,f,g)},info:function(a,r,c,f,g){kt(N.Info,a,r,c,f,g)}},Confirm:{init:function(a){o=b(!0,$,a),nt(je,"NotiflixConfirmInternalCSS")},merge:function(a){return o?void(o=b(!0,o,a)):(S("You have to initialize the Confirm module before call Merge function."),!1)},show:function(a,r,c,f,g,v,y){Dt(T.Show,a,r,null,c,f,g,v,y)},ask:function(a,r,c,f,g,v,y,d){Dt(T.Ask,a,r,c,f,g,v,y,d)},prompt:function(a,r,c,f,g,v,y,d){Dt(T.Prompt,a,r,c,f,g,v,y,d)}},Loading:{init:function(a){l=b(!0,Q,a),nt(De,"NotiflixLoadingInternalCSS")},merge:function(a){return l?void(l=b(!0,l,a)):(S("You have to initialize the Loading module before call Merge function."),!1)},standard:function(a,r){tt(j.Standard,a,r,!0,0)},hourglass:function(a,r){tt(j.Hourglass,a,r,!0,0)},circle:function(a,r){tt(j.Circle,a,r,!0,0)},arrows:function(a,r){tt(j.Arrows,a,r,!0,0)},dots:function(a,r){tt(j.Dots,a,r,!0,0)},pulse:function(a,r){tt(j.Pulse,a,r,!0,0)},custom:function(a,r){tt(j.Custom,a,r,!0,0)},notiflix:function(a,r){tt(j.Notiflix,a,r,!0,0)},remove:function(a){typeof a!="number"&&(a=0),tt(null,null,null,!1,a)},change:function(a){Le(a)}},Block:{init:function(a){m=b(!0,O,a),nt(Te,"NotiflixBlockInternalCSS")},merge:function(a){return m?void(m=b(!0,m,a)):(S('You have to initialize the "Notiflix.Block" module before call Merge function.'),!1)},standard:function(a,r,c){rt(!0,D.Standard,a,r,c)},hourglass:function(a,r,c){rt(!0,D.Hourglass,a,r,c)},circle:function(a,r,c){rt(!0,D.Circle,a,r,c)},arrows:function(a,r,c){rt(!0,D.Arrows,a,r,c)},dots:function(a,r,c){rt(!0,D.Dots,a,r,c)},pulse:function(a,r,c){rt(!0,D.Pulse,a,r,c)},remove:function(a,r){typeof r!="number"&&(r=0),rt(!1,null,a,null,null,r)}}};return typeof n.Notiflix=="object"?b(!0,n.Notiflix,{Notify:Y.Notify,Report:Y.Report,Confirm:Y.Confirm,Loading:Y.Loading,Block:Y.Block}):{Notify:Y.Notify,Report:Y.Report,Confirm:Y.Confirm,Loading:Y.Loading,Block:Y.Block}})})(xe);var an=xe.exports;const $t=Xe(an),on=({onClose:e})=>{const[n,t]=P.useState(0),[i,o]=P.useState(0),[l,m]=P.useState(0),[x,h]=P.useState(!0),[w,A]=P.useState(0),N=bt(),H=()=>{h(!x)},T=D=>{t(Number(D.target.value))},$=D=>{o(Number(D.target.value))};P.useEffect(()=>{m(x?Math.ceil((n*.03+i*.4)*100)/100<2?2:Math.ceil((n*.03+i*.4)*100)/100:Math.ceil((n*.04+i*.6)*100)/100<2?2:Math.ceil((n*.04+i*.6)*100)/100)},[x,n,i]);const j=D=>{A(Number(D.target.value))},Q=D=>{try{if(D.preventDefault(),w<2)return $t.Notify.failure("The required amount of water in liters per day: 2L");if(w>15)return $t.Notify.failure("The maximum amount of water in liters per day: 15L");N(Ve(w)),e()}catch(O){console.error("error",O)}};return P.useEffect(()=>{const D=O=>{O.key==="Escape"&&e()};window.addEventListener("keydown",D)},[e]),s.jsx(en,{onClick:e,children:s.jsxs(nn,{onClick:D=>D.stopPropagation(),children:[s.jsxs("div",{className:"headerDaily",children:[s.jsx("h2",{children:"My daily norma"}),s.jsx("button",{type:"button",className:"closeButton",onClick:e,children:s.jsx("svg",{width:"24",height:"24",children:s.jsx("use",{href:"/goit-group2-react-nodejs/src/assets/images/sprite/horodiukIcons.svg#icon-close"})})})]}),s.jsxs("div",{className:"formulaContainer",children:[s.jsxs("div",{className:"formula",children:[s.jsxs("div",{className:"formulaText",children:[s.jsx("p",{children:"For girl:"}),s.jsx("span",{className:"formulaSpan",children:"V=(M*0,03) + (T*0,4)"})]}),s.jsxs("div",{className:"formulaText",children:[s.jsx("p",{children:"For man:"}),s.jsx("span",{className:"formulaSpan",children:"V=(M*0,04) + (T*0,6)"})]})]}),s.jsxs("p",{className:"formulaDescription",children:[s.jsx("span",{className:"formulaStar",children:"*"})," V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]})]}),s.jsxs("form",{onSubmit:Q,children:[s.jsx("h3",{children:"Calculate your rate:"}),s.jsxs("div",{className:"checkBox",children:[s.jsxs("label",{children:[s.jsx("input",{type:"radio",name:"gender",value:"woman",checked:x,onChange:H})," For woman"]}),s.jsxs("label",{children:[s.jsx("input",{type:"radio",name:"gender",value:"man",checked:!x,onChange:H})," For man"]})]}),s.jsx("label",{className:"inputDescription",children:"Your weight in kilograms:"}),s.jsx("input",{className:"inputForm",placeholder:"0",onChange:T}),s.jsx("label",{className:"inputDescription",children:"The time of active participation in sports or other activities with a high physical. load in hours:"}),s.jsx("input",{className:"inputForm",placeholder:"0",onChange:$}),s.jsxs("div",{className:"requiredAmount",children:[s.jsx("p",{className:"amountDescription",children:"The required amount of water in liters per day:"}),s.jsxs("span",{className:"amount",children:[l," L"]})]}),s.jsx("h3",{children:"Write down how much water you will drink:"}),s.jsx("input",{className:"inputForm",placeholder:"0",onChange:j}),s.jsx("button",{className:"saveButton",type:"submit",children:"Save"})]})]})})},rn=()=>{const[e,n]=P.useState(!1),{waterRate:t}=ct(pe),i=t/1e3,o=()=>{n(!1)},l=()=>{n(!0)};return s.jsx("div",{children:s.jsxs(_e,{children:[s.jsx("h2",{children:"My daily norma:"}),s.jsxs(tn,{children:[s.jsxs("p",{children:[" ",i," L"]}),s.jsx("button",{type:"button",onClick:l,children:"Edit"}),e&&s.jsx(on,{isOpen:e,onClose:o})]})]})})},sn=rn,ge=e=>e.water.notes,ln=e=>e.water.currentNote,cn=e=>e.water.monthNotes,mn=e=>e.water.isLoading,Jt=new Date,Kt=[Jt.getFullYear(),Jt.getMonth()+1],Zt=(e=Kt,n)=>{const[t,i]=e;switch(n){case"forward":return i>=12?[t+1,1]:[t,i+1];case"back":return i<=1?[t-1,12]:[t,i-1];default:return Kt}},dn=p.div`
  width: 100%;
  margin-top: 15px;
  height: 490px;

  @media screen and (min-width: 768px) {
    height: 308px;
  }
`,fn=p.h3`
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
`,pn=p.div`
  display: flex;
  justify-content: space-between;
`,un=p.div`
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
`,xn=p.ul`
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
`,gn=p.li`
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
`,he=["January","February","March","April","May","June","July","August","September","October","November","December"],hn=e=>he[e-1],bn=e=>{const n=P.useRef(null);return P.useEffect(()=>{const t=i=>{n.current&&!n.current.contains(i.target)&&e()};return document.addEventListener("click",t,!0),()=>{document.removeEventListener("click",t,!0)}},[e]),n},Nt={sm:68,md:74},yn={sm:5,md:10},Ct={md:69,xl:56},Pt=(e,n)=>{const t=e/yn[n],i=Math.floor(t);switch(n){case"sm":return i===t?parseInt(t-1)*Nt[n]-12:parseInt(t)*Nt[n]-12;case"md":return i===t?parseInt(t-1)*Nt[n]:parseInt(t)*Nt[n];default:return 0}},_t=(e,n)=>{const[t,i]=e%10===0?[9,!1]:[e%10-1,e%10<5];return i?t*Ct[n]+Ct[n]/4:t*Ct[n]-280+Ct[n]/4},wn=p.div`
  position: absolute;
  left: 50%;
  top: -194px;
  transform: translate(
    -50%,
    ${({$dayNumber:e})=>`${Pt(e,"sm")}px`}
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
      ${({$dayNumber:e})=>`${_t(e,"md")}px`},
      ${({$dayNumber:e})=>`${Pt(e,"md")}px`}
    );
  }

  @media screen and (min-width: 1440px) {
    transform: translate(
      ${({$dayNumber:e})=>`${_t(e,"xl")}px`},
      ${({$dayNumber:e})=>`${Pt(e,"md")}px`}
    );
  }
`,kn=p.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  p {
    color: ${({theme:e})=>e.color.primaryAccent};
    font-size: 16px;
    line-height: 1.25;
  }
`,vn=({currentDay:e,close:n})=>{const t=bn(n),{date:i,percent:o,quantity:l,waterRate:m}=e,x={dailyNorma:m??0,percent:o??0},h=he[(i==null?void 0:i.month)-1],w=x.dailyNorma/1e3;return s.jsxs(wn,{ref:t,$dayNumber:i.day,children:[s.jsx(kn,{children:s.jsxs("p",{children:[s.jsxs("span",{children:[i==null?void 0:i.day,", "]}),s.jsx("span",{children:h})]})}),s.jsxs("p",{children:["Daily norma : ",s.jsxs("span",{children:[w,"L"]})]}),s.jsxs("p",{children:["Fulfillment of the daily norm : ",s.jsxs("span",{children:[parseInt(x.percent),"%"]})]}),s.jsxs("p",{children:["How many servings of water : ",s.jsx("span",{children:l??0})]})]})},An=({monthData:e})=>{const[n,t]=P.useState(null),i=P.useCallback(()=>{t(null)},[]);return s.jsxs(xn,{children:[n&&s.jsx(vn,{currentDay:n,close:i}),e.map(o=>s.jsxs(gn,{onClick:()=>t(o),$percentage:o.percent,$isActive:(n==null?void 0:n.date.day)===o.date.day,children:[s.jsx("span",{className:"day",children:o.date.day}),s.jsxs("span",{className:"percentage",children:[parseInt(o.percent)||0,"%"]})]},o.date.day))]})},Nn=({changeDirection:e,month:n,year:t})=>{function i(o,l){const m=new Date,x=m.getFullYear(),h=m.getMonth()+1;return Number(l)>x||Number(l)===x&&Number(o)>=h}return s.jsxs(pn,{children:[s.jsx(fn,{children:"Month"}),s.jsxs(un,{children:[s.jsx("button",{className:"arrow arrow-left",onClick:()=>e("back"),type:"button",children:s.jsx("svg",{fill:"#407BFF",width:"14",height:"14",children:s.jsx("use",{href:`${Ut}#icon-arrow-left`})})}),s.jsxs("p",{className:"month__name",children:[hn(n),", ",t]}),s.jsx("button",{className:`arrow arrow-right ${i(n,t)?"arrow-right-disabled":""}`,onClick:()=>e("forward"),type:"button",disabled:i(n,t),children:s.jsx("svg",{fill:`${i(n,t)?"#9ebbff":"#407BFF"}`,width:"14",height:"14",transform:"rotate(180)",children:s.jsx("use",{href:`${Ut}#icon-arrow-left`})})})]})]})},Cn=()=>{var h;const e=ct(cn),n=ct(mn),[t,i]=He(),o=bt();let[l,m]=((h=t.get("date"))==null?void 0:h.split("_"))??Zt();P.useEffect(()=>{o(Ye({year:l.toString(),month:m.toString()}))},[o,l,m]);const x=P.useCallback(w=>{const A=Zt([+l,+m],w);i({date:A.join("_")})},[i,l,m]);return s.jsxs(dn,{children:[s.jsx(Nn,{changeDirection:x,month:m,year:l}),n?s.jsx(qe,{}):s.jsx(An,{monthData:e})]})},zn=Cn;var be={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},te=lt.createContext&&lt.createContext(be),Mn=["attr","size","title"];function Sn(e,n){if(e==null)return{};var t=Wn(e,n),i,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)i=l[o],!(n.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}function Wn(e,n){if(e==null)return{};var t={},i=Object.keys(e),o,l;for(l=0;l<i.length;l++)o=i[l],!(n.indexOf(o)>=0)&&(t[o]=e[o]);return t}function zt(){return zt=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},zt.apply(this,arguments)}function ee(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,i)}return t}function Mt(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?ee(Object(t),!0).forEach(function(i){jn(e,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ee(Object(t)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))})}return e}function jn(e,n,t){return n=Dn(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Dn(e){var n=Ln(e,"string");return typeof n=="symbol"?n:String(n)}function Ln(e,n){if(typeof e!="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var i=t.call(e,n||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function ye(e){return e&&e.map((n,t)=>lt.createElement(n.tag,Mt({key:t},n.attr),ye(n.child)))}function we(e){return n=>lt.createElement(Tn,zt({attr:Mt({},e.attr)},n),ye(e.child))}function Tn(e){var n=t=>{var{attr:i,size:o,title:l}=e,m=Sn(e,Mn),x=o||t.size||"1em",h;return t.className&&(h=t.className),e.className&&(h=(h?h+" ":"")+e.className),lt.createElement("svg",zt({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,m,{className:h,style:Mt(Mt({color:e.color||t.color},t.style),e.style),height:x,width:x,xmlns:"http://www.w3.org/2000/svg"}),l&&lt.createElement("title",null,l),e.children)};return te!==void 0?lt.createElement(te.Consumer,null,t=>n(t)):n(be)}function On(e){return we({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"},child:[]}]})(e)}const Pn="/goit-group2-react-nodejs/assets/glass-00cf2fb8.svg",En="/goit-group2-react-nodejs/assets/edit-7f0c7b6a.svg",Bn="/goit-group2-react-nodejs/assets/delete-6bf30e40.svg",In=p.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  overflow: scroll;
`,Rn=p.div`
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
`,Fn=p.button`
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
`,Xn=p.h2`
  font-weight: 500;
  font-size: 26px;
  line-height: 123%;
  color: #2f2f2f;
  margin-bottom: 24px;
`,ne=p.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  color: #2f2f2f;
  margin-bottom: 16px;
`,ie=p.p`
  font-size: 16px;
  line-height: 125%;
  color: #2f2f2f;
  margin-bottom: 12px;
`,ae=p.button`
  box-shadow: 0 2px 4px 0 rgba(64, 123, 255, 0.2);
  background-color: #fff;
  border: 1px solid #9ebbff;
  border-radius: 30px;
  padding: 0px;
  width: 44px;
  height: 44px;
  cursor: pointer;
`,oe=p.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 133%;
  color: #407bff;
  text-align: center;
`,Vn=p.input`
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
`,Hn=p.input`
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
`,Yn=p.button`
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
`,qn=p.div`
  background-color: #d7e3ff;
  border-radius: 40px;
  padding: 6px 10px;
  height: 36px;
`,Gn=p.div`
  display: flex;
  width: 194px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`,Qn=p.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
  }
`,Un=p.div`
  display: flex;
  gap: 14px;
  align-items: center;
  margin-bottom: 24px;
  border-radius: 10px;
  padding: 8px 24px;
  width: 256px;
  background-color: #ecf2ff;
`,$n=p.p`
  font-size: 18px;
  line-height: 133%;
  color: #407bff;
`,Jn=p.p`
  font-size: 16px;
  line-height: 125%;
  color: #2f2f2f;
`;Ge.setAppElement("#root");function Kn({isOpen:e,onClose:n,onAddWater:t}){const i=ct(ln)||{amount:250,date:new Date},[o,l]=P.useState(i.amount),[m,x]=P.useState(!1),[h,w]=P.useState(0),A=bt(),[N,H]=P.useState(i.date),T=(b,I="")=>{let it=new Date(N);switch(I){case"hour":it.setHours(parseInt(b.target.value,10));break;case"minute":it.setMinutes(Math.ceil(parseInt(b.target.value,10)/5)*5);break}H(it)},$=()=>{A($e({amount:o,date:Date(N)}))},j=()=>{n()},Q=()=>{l(o+50),w(o+50)},D=()=>{if(o-50<0){l(0),w(0);return}l(o-50),w(o-50)},O=()=>{l(h)},S=b=>{const I=parseInt(b.target.value>0?b.target.value:0,10);w(I)},et=b=>{b.target.closest("#selectTimeWrapper")||(x(!1),b.target===b.currentTarget&&j())},_=b=>{b.key==="Escape"&&j()};P.useEffect(()=>(window.addEventListener("keydown",_),()=>{window.removeEventListener("keydown",_)}),[]);const nt=b=>{const I=new Date(b),it=jt=>jt.toString().padStart(2,"0");return`${it(I.getHours())}:${it(I.getMinutes())}`};return Qe.createPortal(s.jsx(In,{onClick:et,children:s.jsxs(Rn,{children:[s.jsx(Fn,{onClick:j,children:s.jsx("svg",{width:"24",height:"24",children:s.jsx("use",{href:`${At}#icon-close`})})}),s.jsx(Xn,{children:"Edit the entered amount of water"}),s.jsxs(Un,{children:[" ",s.jsx("svg",{width:"36",height:"36",children:s.jsx("use",{href:`${At}#icon-glass`})}),s.jsxs($n,{children:[i.amount,"ml"]}),s.jsx(Jn,{children:nt(i.time)})]}),s.jsx(ne,{children:"Correct entered data:"}),s.jsx(ie,{children:"Amount of water:"}),s.jsxs(Gn,{children:[s.jsx(ae,{onClick:D,children:s.jsx("svg",{width:"44",height:"44",children:s.jsx("use",{href:`${At}#icon-minus`})})}),s.jsx(qn,{children:s.jsxs(oe,{children:[o,"ml"]})}),s.jsx(ae,{onClick:Q,children:s.jsx("svg",{width:"44",height:"44",children:s.jsx("use",{href:`${At}#icon-plus`})})})]}),s.jsx(ie,{children:"Recording time:"}),m?s.jsx(Ue,{onChange:T,value:N}):s.jsx(Vn,{type:"text","aria-label":"Choose time",value:nt(N),onChange:()=>{},onFocus:()=>x(!0)}),s.jsx(ne,{children:"Enter the value of the water used:"}),s.jsx(Hn,{value:h,onBlur:O,onChange:S,type:"number"}),s.jsxs(Qn,{children:[s.jsxs(oe,{children:[o,"ml"]}),s.jsx(Yn,{onClick:$,type:"button",children:"Save"})]})]})}),document.getElementById("modal-root"))}const Zn=p.div`
  padding: 0 24px 32px;
`,_n=p.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    flex-direction: row-reverse;
  }
`,re=p.button`
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
`,ti=p.p`
  font-size: 18px;
  color: ${({theme:e})=>e.color.primaryBlack};
  line-height: 20px;
  font-weight: 500;

  margin-bottom: 24px;
`,ei=({onClose:e,onShow:n,waterId:t})=>{const i=bt(),o=()=>{i(Ke(t)),e()};return s.jsx(Je,{onClose:e,onShow:n,title:"Delete Entry",children:s.jsxs(Zn,{children:[s.jsx(ti,{children:"Are you sure you want to delete the entry?"}),s.jsxs(_n,{children:[s.jsx(re,{onClick:o,children:"Delete"}),s.jsx(re,{onClick:e,children:"Cancel"})]})]})})},ni=p.ul`
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
`,ii=p.li`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: space-between;
`,ai=p.div`
  display: flex;
  align-items: center;
`,oi=p.p`
  color: #407bff;
  font-size: 18px;
  line-height: 24px;
  margin-left: 12px;
`,ri=p.p`
  margin-left: 12px;
  line-height: 24px;
  font-size: 12px;
  color: #2f2f2f;

  @media screen and (min-width: 768px) {
    margin-left: 16px;
  }
`,si=p.h2`
  margin-bottom: 16px;
  color: #2f2f2f;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 32px;
  }
`,li=p.button`
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
`,ci=p.button`
  margin-right: 18px;
  background-color: transparent;
`,mi=p.button`
  background-color: transparent;
`;function Z(e){const n=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&n==="[object Date]"?new e.constructor(+e):typeof e=="number"||n==="[object Number]"||typeof e=="string"||n==="[object String]"?new Date(e):new Date(NaN)}function mt(e,n){return e instanceof Date?new e.constructor(n):new Date(n)}const ke=6048e5,di=864e5;let fi={};function Wt(){return fi}function ht(e,n){var x,h,w,A;const t=Wt(),i=(n==null?void 0:n.weekStartsOn)??((h=(x=n==null?void 0:n.locale)==null?void 0:x.options)==null?void 0:h.weekStartsOn)??t.weekStartsOn??((A=(w=t.locale)==null?void 0:w.options)==null?void 0:A.weekStartsOn)??0,o=Z(e),l=o.getDay(),m=(l<i?7:0)+l-i;return o.setDate(o.getDate()-m),o.setHours(0,0,0,0),o}function St(e){return ht(e,{weekStartsOn:1})}function ve(e){const n=Z(e),t=n.getFullYear(),i=mt(e,0);i.setFullYear(t+1,0,4),i.setHours(0,0,0,0);const o=St(i),l=mt(e,0);l.setFullYear(t,0,4),l.setHours(0,0,0,0);const m=St(l);return n.getTime()>=o.getTime()?t+1:n.getTime()>=m.getTime()?t:t-1}function se(e){const n=Z(e);return n.setHours(0,0,0,0),n}function le(e){const n=Z(e),t=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()));return t.setUTCFullYear(n.getFullYear()),+e-+t}function pi(e,n){const t=se(e),i=se(n),o=+t-le(t),l=+i-le(i);return Math.round((o-l)/di)}function ui(e){const n=ve(e),t=mt(e,0);return t.setFullYear(n,0,4),t.setHours(0,0,0,0),St(t)}function xi(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function gi(e){if(!xi(e)&&typeof e!="number")return!1;const n=Z(e);return!isNaN(Number(n))}function hi(e){const n=Z(e),t=mt(e,0);return t.setFullYear(n.getFullYear(),0,1),t.setHours(0,0,0,0),t}const bi={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},yi=(e,n,t)=>{let i;const o=bi[e];return typeof o=="string"?i=o:n===1?i=o.one:i=o.other.replace("{{count}}",n.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+i:i+" ago":i};function Et(e){return(n={})=>{const t=n.width?String(n.width):e.defaultWidth;return e.formats[t]||e.formats[e.defaultWidth]}}const wi={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},ki={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},vi={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Ai={date:Et({formats:wi,defaultWidth:"full"}),time:Et({formats:ki,defaultWidth:"full"}),dateTime:Et({formats:vi,defaultWidth:"full"})},Ni={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Ci=(e,n,t,i)=>Ni[e];function xt(e){return(n,t)=>{const i=t!=null&&t.context?String(t.context):"standalone";let o;if(i==="formatting"&&e.formattingValues){const m=e.defaultFormattingWidth||e.defaultWidth,x=t!=null&&t.width?String(t.width):m;o=e.formattingValues[x]||e.formattingValues[m]}else{const m=e.defaultWidth,x=t!=null&&t.width?String(t.width):e.defaultWidth;o=e.values[x]||e.values[m]}const l=e.argumentCallback?e.argumentCallback(n):n;return o[l]}}const zi={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Mi={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Si={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Wi={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},ji={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Di={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Li=(e,n)=>{const t=Number(e),i=t%100;if(i>20||i<10)switch(i%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},Ti={ordinalNumber:Li,era:xt({values:zi,defaultWidth:"wide"}),quarter:xt({values:Mi,defaultWidth:"wide",argumentCallback:e=>e-1}),month:xt({values:Si,defaultWidth:"wide"}),day:xt({values:Wi,defaultWidth:"wide"}),dayPeriod:xt({values:ji,defaultWidth:"wide",formattingValues:Di,defaultFormattingWidth:"wide"})};function gt(e){return(n,t={})=>{const i=t.width,o=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],l=n.match(o);if(!l)return null;const m=l[0],x=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth],h=Array.isArray(x)?Pi(x,N=>N.test(m)):Oi(x,N=>N.test(m));let w;w=e.valueCallback?e.valueCallback(h):h,w=t.valueCallback?t.valueCallback(w):w;const A=n.slice(m.length);return{value:w,rest:A}}}function Oi(e,n){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&n(e[t]))return t}function Pi(e,n){for(let t=0;t<e.length;t++)if(n(e[t]))return t}function Ei(e){return(n,t={})=>{const i=n.match(e.matchPattern);if(!i)return null;const o=i[0],l=n.match(e.parsePattern);if(!l)return null;let m=e.valueCallback?e.valueCallback(l[0]):l[0];m=t.valueCallback?t.valueCallback(m):m;const x=n.slice(o.length);return{value:m,rest:x}}}const Bi=/^(\d+)(th|st|nd|rd)?/i,Ii=/\d+/i,Ri={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Fi={any:[/^b/i,/^(a|c)/i]},Xi={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Vi={any:[/1/i,/2/i,/3/i,/4/i]},Hi={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Yi={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},qi={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Gi={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Qi={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Ui={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},$i={ordinalNumber:Ei({matchPattern:Bi,parsePattern:Ii,valueCallback:e=>parseInt(e,10)}),era:gt({matchPatterns:Ri,defaultMatchWidth:"wide",parsePatterns:Fi,defaultParseWidth:"any"}),quarter:gt({matchPatterns:Xi,defaultMatchWidth:"wide",parsePatterns:Vi,defaultParseWidth:"any",valueCallback:e=>e+1}),month:gt({matchPatterns:Hi,defaultMatchWidth:"wide",parsePatterns:Yi,defaultParseWidth:"any"}),day:gt({matchPatterns:qi,defaultMatchWidth:"wide",parsePatterns:Gi,defaultParseWidth:"any"}),dayPeriod:gt({matchPatterns:Qi,defaultMatchWidth:"any",parsePatterns:Ui,defaultParseWidth:"any"})},Ji={code:"en-US",formatDistance:yi,formatLong:Ai,formatRelative:Ci,localize:Ti,match:$i,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Ki(e){const n=Z(e);return pi(n,hi(n))+1}function Zi(e){const n=Z(e),t=+St(n)-+ui(n);return Math.round(t/ke)+1}function Ae(e,n){var A,N,H,T;const t=Z(e),i=t.getFullYear(),o=Wt(),l=(n==null?void 0:n.firstWeekContainsDate)??((N=(A=n==null?void 0:n.locale)==null?void 0:A.options)==null?void 0:N.firstWeekContainsDate)??o.firstWeekContainsDate??((T=(H=o.locale)==null?void 0:H.options)==null?void 0:T.firstWeekContainsDate)??1,m=mt(e,0);m.setFullYear(i+1,0,l),m.setHours(0,0,0,0);const x=ht(m,n),h=mt(e,0);h.setFullYear(i,0,l),h.setHours(0,0,0,0);const w=ht(h,n);return t.getTime()>=x.getTime()?i+1:t.getTime()>=w.getTime()?i:i-1}function _i(e,n){var x,h,w,A;const t=Wt(),i=(n==null?void 0:n.firstWeekContainsDate)??((h=(x=n==null?void 0:n.locale)==null?void 0:x.options)==null?void 0:h.firstWeekContainsDate)??t.firstWeekContainsDate??((A=(w=t.locale)==null?void 0:w.options)==null?void 0:A.firstWeekContainsDate)??1,o=Ae(e,n),l=mt(e,0);return l.setFullYear(o,0,i),l.setHours(0,0,0,0),ht(l,n)}function ta(e,n){const t=Z(e),i=+ht(t,n)-+_i(t,n);return Math.round(i/ke)+1}function W(e,n){const t=e<0?"-":"",i=Math.abs(e).toString().padStart(n,"0");return t+i}const ot={y(e,n){const t=e.getFullYear(),i=t>0?t:1-t;return W(n==="yy"?i%100:i,n.length)},M(e,n){const t=e.getMonth();return n==="M"?String(t+1):W(t+1,2)},d(e,n){return W(e.getDate(),n.length)},a(e,n){const t=e.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(e,n){return W(e.getHours()%12||12,n.length)},H(e,n){return W(e.getHours(),n.length)},m(e,n){return W(e.getMinutes(),n.length)},s(e,n){return W(e.getSeconds(),n.length)},S(e,n){const t=n.length,i=e.getMilliseconds(),o=Math.trunc(i*Math.pow(10,t-3));return W(o,n.length)}},ft={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},ce={G:function(e,n,t){const i=e.getFullYear()>0?1:0;switch(n){case"G":case"GG":case"GGG":return t.era(i,{width:"abbreviated"});case"GGGGG":return t.era(i,{width:"narrow"});case"GGGG":default:return t.era(i,{width:"wide"})}},y:function(e,n,t){if(n==="yo"){const i=e.getFullYear(),o=i>0?i:1-i;return t.ordinalNumber(o,{unit:"year"})}return ot.y(e,n)},Y:function(e,n,t,i){const o=Ae(e,i),l=o>0?o:1-o;if(n==="YY"){const m=l%100;return W(m,2)}return n==="Yo"?t.ordinalNumber(l,{unit:"year"}):W(l,n.length)},R:function(e,n){const t=ve(e);return W(t,n.length)},u:function(e,n){const t=e.getFullYear();return W(t,n.length)},Q:function(e,n,t){const i=Math.ceil((e.getMonth()+1)/3);switch(n){case"Q":return String(i);case"QQ":return W(i,2);case"Qo":return t.ordinalNumber(i,{unit:"quarter"});case"QQQ":return t.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(i,{width:"wide",context:"formatting"})}},q:function(e,n,t){const i=Math.ceil((e.getMonth()+1)/3);switch(n){case"q":return String(i);case"qq":return W(i,2);case"qo":return t.ordinalNumber(i,{unit:"quarter"});case"qqq":return t.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(i,{width:"wide",context:"standalone"})}},M:function(e,n,t){const i=e.getMonth();switch(n){case"M":case"MM":return ot.M(e,n);case"Mo":return t.ordinalNumber(i+1,{unit:"month"});case"MMM":return t.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(i,{width:"wide",context:"formatting"})}},L:function(e,n,t){const i=e.getMonth();switch(n){case"L":return String(i+1);case"LL":return W(i+1,2);case"Lo":return t.ordinalNumber(i+1,{unit:"month"});case"LLL":return t.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(i,{width:"wide",context:"standalone"})}},w:function(e,n,t,i){const o=ta(e,i);return n==="wo"?t.ordinalNumber(o,{unit:"week"}):W(o,n.length)},I:function(e,n,t){const i=Zi(e);return n==="Io"?t.ordinalNumber(i,{unit:"week"}):W(i,n.length)},d:function(e,n,t){return n==="do"?t.ordinalNumber(e.getDate(),{unit:"date"}):ot.d(e,n)},D:function(e,n,t){const i=Ki(e);return n==="Do"?t.ordinalNumber(i,{unit:"dayOfYear"}):W(i,n.length)},E:function(e,n,t){const i=e.getDay();switch(n){case"E":case"EE":case"EEE":return t.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(i,{width:"short",context:"formatting"});case"EEEE":default:return t.day(i,{width:"wide",context:"formatting"})}},e:function(e,n,t,i){const o=e.getDay(),l=(o-i.weekStartsOn+8)%7||7;switch(n){case"e":return String(l);case"ee":return W(l,2);case"eo":return t.ordinalNumber(l,{unit:"day"});case"eee":return t.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(o,{width:"short",context:"formatting"});case"eeee":default:return t.day(o,{width:"wide",context:"formatting"})}},c:function(e,n,t,i){const o=e.getDay(),l=(o-i.weekStartsOn+8)%7||7;switch(n){case"c":return String(l);case"cc":return W(l,n.length);case"co":return t.ordinalNumber(l,{unit:"day"});case"ccc":return t.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(o,{width:"narrow",context:"standalone"});case"cccccc":return t.day(o,{width:"short",context:"standalone"});case"cccc":default:return t.day(o,{width:"wide",context:"standalone"})}},i:function(e,n,t){const i=e.getDay(),o=i===0?7:i;switch(n){case"i":return String(o);case"ii":return W(o,n.length);case"io":return t.ordinalNumber(o,{unit:"day"});case"iii":return t.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(i,{width:"short",context:"formatting"});case"iiii":default:return t.day(i,{width:"wide",context:"formatting"})}},a:function(e,n,t){const o=e.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return t.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(e,n,t){const i=e.getHours();let o;switch(i===12?o=ft.noon:i===0?o=ft.midnight:o=i/12>=1?"pm":"am",n){case"b":case"bb":return t.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(e,n,t){const i=e.getHours();let o;switch(i>=17?o=ft.evening:i>=12?o=ft.afternoon:i>=4?o=ft.morning:o=ft.night,n){case"B":case"BB":case"BBB":return t.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(e,n,t){if(n==="ho"){let i=e.getHours()%12;return i===0&&(i=12),t.ordinalNumber(i,{unit:"hour"})}return ot.h(e,n)},H:function(e,n,t){return n==="Ho"?t.ordinalNumber(e.getHours(),{unit:"hour"}):ot.H(e,n)},K:function(e,n,t){const i=e.getHours()%12;return n==="Ko"?t.ordinalNumber(i,{unit:"hour"}):W(i,n.length)},k:function(e,n,t){let i=e.getHours();return i===0&&(i=24),n==="ko"?t.ordinalNumber(i,{unit:"hour"}):W(i,n.length)},m:function(e,n,t){return n==="mo"?t.ordinalNumber(e.getMinutes(),{unit:"minute"}):ot.m(e,n)},s:function(e,n,t){return n==="so"?t.ordinalNumber(e.getSeconds(),{unit:"second"}):ot.s(e,n)},S:function(e,n){return ot.S(e,n)},X:function(e,n,t){const i=e.getTimezoneOffset();if(i===0)return"Z";switch(n){case"X":return de(i);case"XXXX":case"XX":return st(i);case"XXXXX":case"XXX":default:return st(i,":")}},x:function(e,n,t){const i=e.getTimezoneOffset();switch(n){case"x":return de(i);case"xxxx":case"xx":return st(i);case"xxxxx":case"xxx":default:return st(i,":")}},O:function(e,n,t){const i=e.getTimezoneOffset();switch(n){case"O":case"OO":case"OOO":return"GMT"+me(i,":");case"OOOO":default:return"GMT"+st(i,":")}},z:function(e,n,t){const i=e.getTimezoneOffset();switch(n){case"z":case"zz":case"zzz":return"GMT"+me(i,":");case"zzzz":default:return"GMT"+st(i,":")}},t:function(e,n,t){const i=Math.trunc(e.getTime()/1e3);return W(i,n.length)},T:function(e,n,t){const i=e.getTime();return W(i,n.length)}};function me(e,n=""){const t=e>0?"-":"+",i=Math.abs(e),o=Math.trunc(i/60),l=i%60;return l===0?t+String(o):t+String(o)+n+W(l,2)}function de(e,n){return e%60===0?(e>0?"-":"+")+W(Math.abs(e)/60,2):st(e,n)}function st(e,n=""){const t=e>0?"-":"+",i=Math.abs(e),o=W(Math.trunc(i/60),2),l=W(i%60,2);return t+o+n+l}const fe=(e,n)=>{switch(e){case"P":return n.date({width:"short"});case"PP":return n.date({width:"medium"});case"PPP":return n.date({width:"long"});case"PPPP":default:return n.date({width:"full"})}},Ne=(e,n)=>{switch(e){case"p":return n.time({width:"short"});case"pp":return n.time({width:"medium"});case"ppp":return n.time({width:"long"});case"pppp":default:return n.time({width:"full"})}},ea=(e,n)=>{const t=e.match(/(P+)(p+)?/)||[],i=t[1],o=t[2];if(!o)return fe(e,n);let l;switch(i){case"P":l=n.dateTime({width:"short"});break;case"PP":l=n.dateTime({width:"medium"});break;case"PPP":l=n.dateTime({width:"long"});break;case"PPPP":default:l=n.dateTime({width:"full"});break}return l.replace("{{date}}",fe(i,n)).replace("{{time}}",Ne(o,n))},na={p:Ne,P:ea},ia=/^D+$/,aa=/^Y+$/,oa=["D","DD","YY","YYYY"];function ra(e){return ia.test(e)}function sa(e){return aa.test(e)}function la(e,n,t){const i=ca(e,n,t);if(console.warn(i),oa.includes(e))throw new RangeError(i)}function ca(e,n,t){const i=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${n}\`) for formatting ${i} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const ma=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,da=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,fa=/^'([^]*?)'?$/,pa=/''/g,ua=/[a-zA-Z]/;function xa(e,n,t){var A,N,H,T,$,j,Q,D;const i=Wt(),o=(t==null?void 0:t.locale)??i.locale??Ji,l=(t==null?void 0:t.firstWeekContainsDate)??((N=(A=t==null?void 0:t.locale)==null?void 0:A.options)==null?void 0:N.firstWeekContainsDate)??i.firstWeekContainsDate??((T=(H=i.locale)==null?void 0:H.options)==null?void 0:T.firstWeekContainsDate)??1,m=(t==null?void 0:t.weekStartsOn)??((j=($=t==null?void 0:t.locale)==null?void 0:$.options)==null?void 0:j.weekStartsOn)??i.weekStartsOn??((D=(Q=i.locale)==null?void 0:Q.options)==null?void 0:D.weekStartsOn)??0,x=Z(e);if(!gi(x))throw new RangeError("Invalid time value");let h=n.match(da).map(O=>{const S=O[0];if(S==="p"||S==="P"){const et=na[S];return et(O,o.formatLong)}return O}).join("").match(ma).map(O=>{if(O==="''")return{isToken:!1,value:"'"};const S=O[0];if(S==="'")return{isToken:!1,value:ga(O)};if(ce[S])return{isToken:!0,value:O};if(S.match(ua))throw new RangeError("Format string contains an unescaped latin alphabet character `"+S+"`");return{isToken:!1,value:O}});o.localize.preprocessor&&(h=o.localize.preprocessor(x,h));const w={firstWeekContainsDate:l,weekStartsOn:m,locale:o};return h.map(O=>{if(!O.isToken)return O.value;const S=O.value;(!(t!=null&&t.useAdditionalWeekYearTokens)&&sa(S)||!(t!=null&&t.useAdditionalDayOfYearTokens)&&ra(S))&&la(S,n,String(e));const et=ce[S[0]];return et(x,S,o.localize,w)}).join("")}function ga(e){const n=e.match(fa);return n?n[1].replace(pa,"'"):e}const ha=e=>xa(new Date(e),"p"),ba=()=>{const[e,n]=P.useState(!1),[t,i]=P.useState(!1),[o,l]=P.useState(!1),m=ct(ge);console.log(m);const x=()=>{n(!1)},h=()=>{n(!0)},w=()=>{i(!1)},A=()=>{i(!0)},N=()=>{l(!1)},H=()=>{l(!0)};return s.jsxs("div",{children:[s.jsxs("div",{children:[s.jsx(si,{children:"Today"}),s.jsx(ni,{children:m.length>0&&m.map(({_id:T,amount:$,date:j})=>(console.log(T),s.jsx(s.Fragment,{children:s.jsxs(ii,{children:[s.jsxs(ai,{children:[s.jsx("img",{src:Pn,alt:"Icon glass"}),s.jsxs(oi,{children:[$," ml"]}),s.jsx(ri,{children:ha(j)})]}),s.jsxs("div",{children:[s.jsx(ci,{type:"button",onClick:A,children:s.jsx("img",{src:En,alt:"Icon glass"})}),s.jsx(mi,{type:"button",onClick:H,children:s.jsx("img",{src:Bn,alt:"Icon glass"})}),t&&s.jsx(Kn,{isOpen:t,onClose:w}),o&&s.jsx(ei,{onShow:o,onClose:N,id:T})]})]},T)})))})]}),s.jsxs(li,{type:"button",onClick:h,children:[s.jsx(On,{})," Add Water"]}),e&&s.jsx(ue,{isOpen:e,onClose:x})]})},ya=ba;function wa(e){return we({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"16"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"16",y2:"12"},child:[]}]})(e)}const ka=p.div`
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
`,va=p.div`
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
`,Aa=p.input`
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
`,Na=p.div`
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
`,Ca=p.button`
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
`,za=()=>{const[e,n]=P.useState(!1),[t,i]=P.useState(0),o=ct(ge),{waterRate:l}=ct(pe);P.useEffect(()=>{const h=o.reduce((A,N)=>A+N.amount,0),w=Math.round(h/l*100);i(w)},[o,l]);const m=()=>{n(!1)},x=()=>{n(!0)};return s.jsxs(ka,{children:[s.jsxs(va,{children:[s.jsx("h2",{children:"Today"}),s.jsx(Aa,{value:t,type:"range",min:"0",max:"100"}),s.jsxs(Na,{children:[s.jsx("p",{children:"0%"}),s.jsx("p",{children:"50%"}),s.jsx("p",{children:"100%"})]})]}),s.jsxs(Ca,{onClick:x,type:"button",children:[s.jsx(wa,{}),"Add Water"]}),e&&s.jsx(ue,{isOpen:e,onClose:m})]})},Ma=za,Sa="/goit-group2-react-nodejs/assets/bottleHomeScreenDesk-630fd92f.png",Wa="/goit-group2-react-nodejs/assets/bottleHomeScreenDesk2x@2x-51f4e9e6.png",ja="/goit-group2-react-nodejs/assets/bottleHomeScreenTab-2759a74b.png",Da="/goit-group2-react-nodejs/assets/bottleHomeScreenTab@2x-805003a0.png",La="/goit-group2-react-nodejs/assets/bottleHomeScreenMob-fe8938bc.png",Ta="/goit-group2-react-nodejs/assets/bottleHomeScreenMob2x@2x-9640a1cb.png",Oa="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAUwCAMAAAAFI3xKAAAA21BMVEUAAADH1/+fvP+vyf/H2P/H2P+euf/I1v/G1//F3P/G1//H1v/H1/+fu/+duv+fvP/H2P+fvP+gvP+euv+fu//F1v/H1/+eu//Fz//H1//G1v/F0f/H1/+fvP+fuv/I1//F2P+fvP/H1//H1//H1f/H2f/H1//H2P+eu/+euv/w9P/t7//t8v+euv/t8v+fvP/v8/+cuv/H2f/s8f/s8v/t8//v8//G2P+fuv/J2P/v9P/s8//t8//t8//u8//t8f+eu//J2P/t8//r8f/s8//u8//r8//G1//s8v/T/+bSAAAAR3RSTlMAsrILbyAWpy0W35x9hSynWZybQ2RDv1kQkE4Wn29vP++QX2RYN4abTjcfEN9C73o/IYXfv48vz5ybb7+ff19/e0LPz69PQNkZ8PsAAAouSURBVHja7NuxkoMgEAbg/QeZlcHChuK0JGqfLmXe/6UuelfkJgEJNFf8X6flDi7usggVMSEOXgH4dZis0EfMtOKPreuFSs1R8WoLQiXMRbHzMVizP9slfmG3zUKneo8HHZ08c+F4fRE6Mf2Ez8iL4LkIz0U8RCNvjYzgmQ6ABkmxHtiEkkYANytpzgNC2fg5yXGeAUyaAaiTPOeFEjyASc6wqst9wJ1QrdkfCZBaFuBdqJoHbkLVFmbA9hqEGbCBAl9C1SyAKFQtAFiEmtpYPPVoMHAPaXMF+1QM4AcYwP/myhzYXoiw09fYi+HkQYPAXkIbB0CF6nmWIm0iuwltegBqhKpdOXzVvg8rJ4cat5FVqFpfNkHJtmvSgIJyZObfYpLxANTm48fprAyrZ2vQcj4w6458HpyUbcO8e+46wzwAPD0+sSh23Zy6PjKwWslzHodukWd9VPCiSJkRv9Zx6Z1zdpkGxeHGfk0J1+EtHfn5frNvBykIw0AUhgd0oeiiGzceoYYSSOui2gq1ytz/RLrSUrOYNLj7vyM8XpgwIeYIiS/T6rDfTdPjt+sC282xKPbrdXHgwRMAAAAAgDl/q4PqfexLQbpzrR8NESZrdSqcBUluOtMLcvLTig4m8PornARWQSM6gdFDYyoqaHXVKC+wCRrVCExOGjcKTEqNc4KsAAdB1hG+CGwcQ+Qv15iHwMYzQzLV+sY+ZjlPATO1OlexlE7SsQ7M1FY64ehfsvL6rV/HJmuJsh8H54bmSXwAAAAA8GIPDgQAAAAAgPxfG0FVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWG/7lIQhIIwgM56TERIe1CrBylm/ysKIsL7eJV6OmcJw/x883NNcwr26ocuM9dbsMdpzI9zE9Rb86u7BLXuuXG2CWs1WbgGdaYstEGdIUtm+GABnREF/K8lS0GdPgtzUKnNrWdwpAXH4EgSnIWYPfo23zpvyF6PcZ6XSfsBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvduwltWEgCAJoG2QQg9aDFAQSuoSP0Pe/USAQ8pvFKI6DF+8doTbdVQAAAAAAT2oe1pK512UMzpunPd9VEZ42lvxsCk4Z9/xqDU647vndEvQr+dNL0OvIhjIHnUq2HEGfLZtq0GfKpj3oc8m2a9ClZtsWCPA/rNmmEXcaHJGHvDGXoNPNI/2IKhd0q27wfa5vbdikek+C8vvLBPchOOv4iLBqwb+yLbWU2zpYUgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADglV27120UiKIAfK8Ya0C4oKEwlI7t3t2W+/4vtZE3xUYxGCJtEen7GvqjM3d+BAAAAAAAAAAAAAAAAD9dd2jbQxN8RzMdaz6cShvs1LzVzOyPpVxPmXkbgz0uNfM6NR9hjtfMMgebDZmnNv7R9nk7BBuVzPPXTKsEt/fvLb6YslrFm4yP/J4leHOi2WDus8RT53wLXhqydvFUU6sKvtZnWcxWBTdNwC5isYLBC8e8xqJ7utS90ucQi6acglVN5iUWXbIEqw65tkq7vAarWgH+zwa2AnylyxzXZuAxWFfzHIvOOQTr7tnHolNegnXTyhCcM12GX2lyeaMojoEblMUKzukmt0FXFx5Om14Bt07B4/Nq1i7Y4J5ZmmdL+3ewRXPKvM3xyXxKr6m7Eswyf/pPQX67DPnuOB7iXTeWmvnLBrxLV/Kh9n8/gxP0/gj7/HAV3/c07TgO00V6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8Ic9O0htGAaiAKqADUV4bZQgSPAlfIS5/43aTWnTaiFbkE3eO8LwJc2MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOC9lKmueb1MH4kT5jW+7VviqCl+qyVxSI1neU4ccI2/sgwesMV/10S3HA33RHcAW9ZEpz2a3IKdSrTpBjvdo21JdNmirSYU8BVu8UUneN7sERmUo8k43GuJlj3RqTyc4DGLSW7QGmEhOKLkePbwMXJMqfI3aMs/8VssYs641T0i8mVSPgAAAAAAAACAT/bgQAAAAAAAyP+1EVRVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVdi1Y9XYYSAKw8MRqJOEbYEqG9TZxbJsd8u8/1Pd3RACCZHkbAik+L92u8NoZ0YWAAAAAOAvc7djWY7oDE+IedKbukXD9yxBr6Yp6WG+GM6LVVLKh7c7F/cgafaGk4qk8OHU+lVSMZzhVintdvc5wivt5IzaOK5FqoahLFVnX7lIm2GgSLMzayW4G7q8lHynOhO9uG+VLtZWFQz9ApytI0osJcMC7An0kR4nzda1KDEMth3DQcUlHYaWrGE8QdnQEiQ3ypg+3DFJNrDon6FF43QWyUCAv0RKBPgT07iJFP4DO+p4U3uhC3fk8X3VxBzYsWhUXzexifQXNd1Gtw3swh0vg2XYc6vfF9UvwZX7wIEg1U6+FOCIT1Ju/jhJfBMZ2CWVVn68TjhhlVQa+TEDnuCqpKu3z44kVUaYE9xV0rzbBzFICuR3TtHdvMX3SJcgcX6/wU96SGErJW9VDzMD4BMvVB94ofocX4LeTJnqe46P8VhutA4AAAAAAAAAAAAAAAAAAAAAAAAAAID/7dlNi+JAFIXhOycaREyKJOLHYKL2ShcS3M2yd/n//2jSjAwq+agkNPTifXbi7nDqVnkFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAIEFWJE5y5+IWGIaKS31JEqdaERqGCNaSoiy0WhDnibSmhQPc3xPLEqWU0NvdKY3tRZgrvRu8hE7nwN5t6aCnMFEamDUlyBz0kbdVLdfa0CuUbtYocOIQexXQWmypoG8B2yromIJ9MinoaGdm6PapqCNdznCvc1dGoc6GbtLF2umPoZuUdX5rIMBv5bS1ViFHuFei0lrFigzdcjn7wq/hkTIp7qhnbOgWOEXt4aaGPuv2CibaGvqE7rE4ZSc90lYqrMFVuhg8RGo6qrFTafARJlIZ2quL+EtkUILp7aV+kXRmAHoLcknp5f74lEWScvo3RJao5qKyKBPV0qthmCzSf9GF+o0QXrdFEX2uLww/AAAAAAAAAACAH23+sVqtZkfDGLvZpvrndJgbhvp9qp4Q4VD76tWSBAc5VO9OC4O3VVWjg6MtqiYbg6dl1Yj3jKdjVVHBaTdIC6bglBNcmxk87Ko2B8P4EVj7ZfALkFtkigUBftcM3Bsm3cIfBh973oHTHHnFTLShgNPMT1wh08ya9oE7g7cV+9SJZm+neEN+A82fl1on9jAjLA7LR/tmjL+RdsfjcUF6AAAAAAAAAAA8+QuvE3xjFcspUAAAAABJRU5ErkJggg==",Pa="/goit-group2-react-nodejs/assets/backgroundElementHomeScreenTab-4de5d48f.png",Ea=p.div`
  background-size: cover;
  background: url(${Oa});
  height: max-content;
  background-repeat: no-repeat;
  min-height: calc(100% - 64px);

  @media screen and (min-width: 768px) {
    background: url(${Pa});
    min-height: calc(100% - 80px);
  }

  @media screen and (min-width: 1440px) {
    background: url(${Ze});
    min-height: calc(100% - 72px);
  }
`,Ba=p.div`
  margin-bottom: 40px;
  margin-top: 20px;
  background-size: 280px 208px;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${La});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 440px;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${Ta});
  }

  @media screen and (min-width: 768px) {
    background-size: 518px 386px;
    background-position: calc(50% + 9px) 8px;
    height: 492px;
    background-image: url(${ja});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background: url(${Da});
      background-size: 518px 386px;
      background-repeat: no-repeat;
    }
  }

  @media screen and (min-width: 1440px) {
    background-size: 738px 548px;
    background-position: calc(50% + 10px) 46px;
    height: 680px;
    background-image: url(${Sa});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${Wa});
    }
  }
`,Ia=p.div`
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
`,Ra=p.div`
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
`;function Va(){return bt(),s.jsx(Ea,{children:s.jsxs(Ia,{children:[s.jsxs(Ba,{children:[s.jsx(sn,{}),s.jsx(Ma,{})]}),s.jsxs(Ra,{children:[s.jsx(ya,{}),s.jsx(zn,{})]})]})})}export{Va as default};
