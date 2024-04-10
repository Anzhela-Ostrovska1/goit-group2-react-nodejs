import{n as h,e as yt,g as bn,r as D,p as yn,f as Qn,h as Kn,a as je,R as Mt,j as r,i as Jn,k as We,l as wn,s as Pt,b as Zn,m as ea,L as ta,o as Oe,q as na,t as aa,B as ia,v as oa,w as ra,x as sa}from"./index-744d2f76.js";import{b as la}from"./bg_element_des@1x-1805b66c.js";const ca=h.div`
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
`,da=h.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,fa=h.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`,ua=h.div`
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
`;var vn={exports:{}};(function(t){(function(e,n){t.exports=n(e)})(typeof yt>"u"?typeof window>"u"?yt:window:yt,function(e){if(typeof e>"u"&&typeof e.document>"u")return!1;var n,a,i,s,f,d=`

Visit documentation page to learn more: https://notiflix.github.io/documentation`,p='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',m={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},b={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},g={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},A={ID:"NotiflixReportWrap",className:"notiflix-report",width:"320px",backgroundColor:"#f8f8f8",borderRadius:"25px",rtl:!1,zindex:4002,backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",backOverlayClickToClose:!1,fontFamily:"Quicksand",svgSize:"110px",plainText:!0,titleFontSize:"16px",titleMaxLength:34,messageFontSize:"13px",messageMaxLength:400,buttonFontSize:"14px",buttonMaxLength:34,cssAnimation:!0,cssAnimationDuration:360,cssAnimationStyle:"fade",success:{svgColor:"#32c682",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#32c682",buttonColor:"#fff",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{svgColor:"#ff5549",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#ff5549",buttonColor:"#fff",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{svgColor:"#eebf31",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#eebf31",buttonColor:"#fff",backOverlayColor:"rgba(238,191,49,0.2)"},info:{svgColor:"#26c0d3",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#26c0d3",buttonColor:"#fff",backOverlayColor:"rgba(38,192,211,0.2)"}},v={Show:"Show",Ask:"Ask",Prompt:"Prompt"},L={ID:"NotiflixConfirmWrap",className:"notiflix-confirm",width:"300px",zindex:4003,position:"center",distance:"10px",backgroundColor:"#f8f8f8",borderRadius:"25px",backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,cssAnimationStyle:"fade",plainText:!0,titleColor:"#32c682",titleFontSize:"16px",titleMaxLength:34,messageColor:"#1e1e1e",messageFontSize:"14px",messageMaxLength:110,buttonsFontSize:"15px",buttonsMaxLength:34,okButtonColor:"#f8f8f8",okButtonBackground:"#32c682",cancelButtonColor:"#f8f8f8",cancelButtonBackground:"#a9a9a9"},W={Standard:"Standard",Hourglass:"Hourglass",Circle:"Circle",Arrows:"Arrows",Dots:"Dots",Pulse:"Pulse",Custom:"Custom",Notiflix:"Notiflix"},q={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},T={Standard:"Standard",Hourglass:"Hourglass",Circle:"Circle",Arrows:"Arrows",Dots:"Dots",Pulse:"Pulse"},F={ID:"NotiflixBlockWrap",querySelectorLimit:200,className:"notiflix-block",position:"absolute",zindex:1e3,backgroundColor:"rgba(255,255,255,0.9)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,svgSize:"45px",svgColor:"#383838",messageFontSize:"14px",messageMaxLength:34,messageColor:"#383838"},S=function(o){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549",`
`+o+d)},_=function(o){return console.log("%c Notiflix Info ","padding:2px;border-radius:20px;color:#fff;background:#26c0d3",`
`+o+d)},I=function(o){return o||(o="head"),e.document[o]!==null||(S(`
Notiflix needs to be appended to the "<`+o+'>" element, but you called it before the "<'+o+'>" element has been created.'),!1)},G=function(o,l){if(!I("head"))return!1;if(o()!==null&&!e.document.getElementById(l)){var c=e.document.createElement("style");c.id=l,c.innerHTML=o(),e.document.head.appendChild(c)}},B=function(){var o={},l=!1,c=0;Object.prototype.toString.call(arguments[0])==="[object Boolean]"&&(l=arguments[0],c++);for(var y=function(N){for(var j in N)Object.prototype.hasOwnProperty.call(N,j)&&(o[j]=l&&Object.prototype.toString.call(N[j])==="[object Object]"?B(o[j],N[j]):N[j])};c<arguments.length;c++)y(arguments[c]);return o},te=function(o){var l=e.document.createElement("div");return l.innerHTML=o,l.textContent||l.innerText||""},_e=function(o,l){o||(o="110px"),l||(l="#32c682");var c='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="'+o+'" height="'+o+'" fill="'+l+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';return c},pt=function(o,l){o||(o="110px"),l||(l="#ff5549");var c='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="'+o+'" height="'+o+'" fill="'+l+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';return c},mt=function(o,l){o||(o="110px"),l||(l="#eebf31");var c='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="'+o+'" height="'+o+'" fill="'+l+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';return c},De=function(o,l){o||(o="110px"),l||(l="#26c0d3");var c='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="'+o+'" height="'+o+'" fill="'+l+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';return c},Le=function(o,l){o||(o="60px"),l||(l="#32c682");var c='<svg xmlns="http://www.w3.org/2000/svg" stroke="'+l+'" width="'+o+'" height="'+o+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>';return c},O=function(o,l){o||(o="60px"),l||(l="#32c682");var c='<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+l+'" width="'+o+'" height="'+o+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>';return c},C=function(o,l){o||(o="60px"),l||(l="#32c682");var c='<svg xmlns="http://www.w3.org/2000/svg" width="'+o+'" height="'+o+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+o+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+o+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+l+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>';return c},U=function(o,l){o||(o="60px"),l||(l="#32c682");var c='<svg xmlns="http://www.w3.org/2000/svg" fill="'+l+'" width="'+o+'" height="'+o+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>';return c},u=function(o,l){o||(o="60px"),l||(l="#32c682");var c='<svg xmlns="http://www.w3.org/2000/svg" fill="'+l+'" width="'+o+'" height="'+o+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>';return c},k=function(o,l){o||(o="60px"),l||(l="#32c682");var c='<svg xmlns="http://www.w3.org/2000/svg" stroke="'+l+'" width="'+o+'" height="'+o+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>';return c},ee=function(o,l,c){o||(o="60px"),l||(l="#f8f8f8"),c||(c="#32c682");var y='<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+o+'" height="'+o+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+l+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+c+'" stroke="'+c+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>';return y},ne=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},Y=0,le=function(o,l,c,y){if(!I("body"))return!1;n||oe.Notify.init({});var N=B(!0,n,{});if(typeof c=="object"&&!Array.isArray(c)||typeof y=="object"&&!Array.isArray(y)){var j={};typeof c=="object"?j=c:typeof y=="object"&&(j=y),n=B(!0,n,j)}var E=n[o.toLocaleLowerCase("en")];Y++,typeof l!="string"&&(l="Notiflix "+o),n.plainText&&(l=te(l)),!n.plainText&&l.length>n.messageMaxLength&&(n=B(!0,n,{closeButton:!0,messageMaxLength:150}),l='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),l.length>n.messageMaxLength&&(l=l.substring(0,n.messageMaxLength)+"..."),n.fontAwesomeIconStyle==="shadow"&&(E.fontAwesomeIconColor=E.background),n.cssAnimation||(n.cssAnimationDuration=0);var x=e.document.getElementById(b.wrapID)||e.document.createElement("div");if(x.id=b.wrapID,x.style.width=n.width,x.style.zIndex=n.zindex,x.style.opacity=n.opacity,n.position==="center-center"?(x.style.left=n.distance,x.style.top=n.distance,x.style.right=n.distance,x.style.bottom=n.distance,x.style.margin="auto",x.classList.add("nx-flex-center-center"),x.style.maxHeight="calc((100vh - "+n.distance+") - "+n.distance+")",x.style.display="flex",x.style.flexWrap="wrap",x.style.flexDirection="column",x.style.justifyContent="center",x.style.alignItems="center",x.style.pointerEvents="none"):n.position==="center-top"?(x.style.left=n.distance,x.style.right=n.distance,x.style.top=n.distance,x.style.bottom="auto",x.style.margin="auto"):n.position==="center-bottom"?(x.style.left=n.distance,x.style.right=n.distance,x.style.bottom=n.distance,x.style.top="auto",x.style.margin="auto"):n.position==="right-bottom"?(x.style.right=n.distance,x.style.bottom=n.distance,x.style.top="auto",x.style.left="auto"):n.position==="left-top"?(x.style.left=n.distance,x.style.top=n.distance,x.style.right="auto",x.style.bottom="auto"):n.position==="left-bottom"?(x.style.left=n.distance,x.style.bottom=n.distance,x.style.top="auto",x.style.right="auto"):(x.style.right=n.distance,x.style.top=n.distance,x.style.left="auto",x.style.bottom="auto"),n.backOverlay){var P=e.document.getElementById(b.overlayID)||e.document.createElement("div");P.id=b.overlayID,P.style.width="100%",P.style.height="100%",P.style.position="fixed",P.style.zIndex=n.zindex-1,P.style.left=0,P.style.top=0,P.style.right=0,P.style.bottom=0,P.style.background=E.backOverlayColor||n.backOverlayColor,P.className=n.cssAnimation?"nx-with-animation":"",P.style.animationDuration=n.cssAnimation?n.cssAnimationDuration+"ms":"",e.document.getElementById(b.overlayID)||e.document.body.appendChild(P)}e.document.getElementById(b.wrapID)||e.document.body.appendChild(x);var w=e.document.createElement("div");w.id=n.ID+"-"+Y,w.className=n.className+" "+E.childClassName+" "+(n.cssAnimation?"nx-with-animation":"")+" "+(n.useIcon?"nx-with-icon":"")+" nx-"+n.cssAnimationStyle+" "+(n.closeButton&&typeof c!="function"?"nx-with-close-button":"")+" "+(typeof c=="function"?"nx-with-callback":"")+" "+(n.clickToClose?"nx-notify-click-to-close":""),w.style.fontSize=n.fontSize,w.style.color=E.textColor,w.style.background=E.background,w.style.borderRadius=n.borderRadius,w.style.pointerEvents="all",n.rtl&&(w.setAttribute("dir","rtl"),w.classList.add("nx-rtl-on")),w.style.fontFamily='"'+n.fontFamily+'", '+p,n.cssAnimation&&(w.style.animationDuration=n.cssAnimationDuration+"ms");var V="";if(n.closeButton&&typeof c!="function"&&(V='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+E.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),!n.useIcon)w.innerHTML='<span class="nx-message">'+l+"</span>"+(n.closeButton?V:"");else if(n.useFontAwesome)w.innerHTML='<i style="color:'+E.fontAwesomeIconColor+"; font-size:"+n.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+E.fontAwesomeClassName+" "+(n.fontAwesomeIconStyle==="shadow"?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+l+"</span>"+(n.closeButton?V:"");else{var K="";o===m.Success?K='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+E.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':o===m.Failure?K='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+E.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':o===m.Warning?K='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+E.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':o===m.Info&&(K='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+E.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),w.innerHTML=K+'<span class="nx-message nx-with-icon">'+l+"</span>"+(n.closeButton?V:"")}if(n.position==="left-bottom"||n.position==="right-bottom"){var Z=e.document.getElementById(b.wrapID);Z.insertBefore(w,Z.firstChild)}else e.document.getElementById(b.wrapID).appendChild(w);var Q=e.document.getElementById(w.id);if(Q){var R,J,H=function(){Q.classList.add("nx-remove");var z=e.document.getElementById(b.overlayID);z&&0>=x.childElementCount&&z.classList.add("nx-remove"),clearTimeout(R)},fe=function(){if(Q&&Q.parentNode!==null&&Q.parentNode.removeChild(Q),0>=x.childElementCount&&x.parentNode!==null){x.parentNode.removeChild(x);var z=e.document.getElementById(b.overlayID);z&&z.parentNode!==null&&z.parentNode.removeChild(z)}clearTimeout(J)};if(n.closeButton&&typeof c!="function"){var ue=e.document.getElementById(w.id).querySelector("span.nx-close-button");ue.addEventListener("click",function(){H();var z=setTimeout(function(){fe(),clearTimeout(z)},n.cssAnimationDuration)})}if((typeof c=="function"||n.clickToClose)&&Q.addEventListener("click",function(){typeof c=="function"&&c(),H();var z=setTimeout(function(){fe(),clearTimeout(z)},n.cssAnimationDuration)}),!n.closeButton&&typeof c!="function"){var re=function(){R=setTimeout(function(){H()},n.timeout),J=setTimeout(function(){fe()},n.timeout+n.cssAnimationDuration)};re(),n.pauseOnHover&&(Q.addEventListener("mouseenter",function(){Q.classList.add("nx-paused"),clearTimeout(R),clearTimeout(J)}),Q.addEventListener("mouseleave",function(){Q.classList.remove("nx-paused"),re()}))}}if(n.showOnlyTheLastOne&&0<Y)for(var se,$=e.document.querySelectorAll("[id^="+n.ID+"-]:not([id="+n.ID+"-"+Y+"])"),ke=0;ke<$.length;ke++)se=$[ke],se.parentNode!==null&&se.parentNode.removeChild(se);n=B(!0,n,N)},be=function(){return'[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},ye=function(o,l,c,y,N,j){if(!I("body"))return!1;a||oe.Report.init({});var E={};if(typeof N=="object"&&!Array.isArray(N)||typeof j=="object"&&!Array.isArray(j)){var x={};typeof N=="object"?x=N:typeof j=="object"&&(x=j),E=B(!0,a,{}),a=B(!0,a,x)}var P=a[o.toLocaleLowerCase("en")];typeof l!="string"&&(l="Notiflix "+o),typeof c!="string"&&(o===g.Success?c='"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein':o===g.Failure?c='"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford':o===g.Warning?c='"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk':o===g.Info&&(c='"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')),typeof y!="string"&&(y="Okay"),a.plainText&&(l=te(l),c=te(c),y=te(y)),a.plainText||(l.length>a.titleMaxLength&&(l="Possible HTML Tags Error",c='The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.',y="Okay"),c.length>a.messageMaxLength&&(l="Possible HTML Tags Error",c='The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.',y="Okay"),y.length>a.buttonMaxLength&&(l="Possible HTML Tags Error",c='The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.',y="Okay")),l.length>a.titleMaxLength&&(l=l.substring(0,a.titleMaxLength)+"..."),c.length>a.messageMaxLength&&(c=c.substring(0,a.messageMaxLength)+"..."),y.length>a.buttonMaxLength&&(y=y.substring(0,a.buttonMaxLength)+"..."),a.cssAnimation||(a.cssAnimationDuration=0);var w=e.document.createElement("div");w.id=A.ID,w.className=a.className,w.style.zIndex=a.zindex,w.style.borderRadius=a.borderRadius,w.style.fontFamily='"'+a.fontFamily+'", '+p,a.rtl&&(w.setAttribute("dir","rtl"),w.classList.add("nx-rtl-on")),w.style.display="flex",w.style.flexWrap="wrap",w.style.flexDirection="column",w.style.alignItems="center",w.style.justifyContent="center";var V="",K=a.backOverlayClickToClose===!0;a.backOverlay&&(V='<div class="'+a.className+"-overlay"+(a.cssAnimation?" nx-with-animation":"")+(K?" nx-report-click-to-close":"")+'" style="background:'+(P.backOverlayColor||a.backOverlayColor)+";animation-duration:"+a.cssAnimationDuration+'ms;"></div>');var Z="";if(o===g.Success?Z=_e(a.svgSize,P.svgColor):o===g.Failure?Z=pt(a.svgSize,P.svgColor):o===g.Warning?Z=mt(a.svgSize,P.svgColor):o===g.Info&&(Z=De(a.svgSize,P.svgColor)),w.innerHTML=V+'<div class="'+a.className+"-content"+(a.cssAnimation?" nx-with-animation ":"")+" nx-"+a.cssAnimationStyle+'" style="width:'+a.width+"; background:"+a.backgroundColor+"; animation-duration:"+a.cssAnimationDuration+'ms;"><div style="width:'+a.svgSize+"; height:"+a.svgSize+';" class="'+a.className+'-icon">'+Z+'</div><h5 class="'+a.className+'-title" style="font-weight:500; font-size:'+a.titleFontSize+"; color:"+P.titleColor+';">'+l+'</h5><p class="'+a.className+'-message" style="font-size:'+a.messageFontSize+"; color:"+P.messageColor+';">'+c+'</p><a id="NXReportButton" class="'+a.className+'-button" style="font-weight:500; font-size:'+a.buttonFontSize+"; background:"+P.buttonBackground+"; color:"+P.buttonColor+';">'+y+"</a></div>",!e.document.getElementById(w.id)){e.document.body.appendChild(w);var Q=function(){var H=e.document.getElementById(w.id);H.classList.add("nx-remove");var fe=setTimeout(function(){H.parentNode!==null&&H.parentNode.removeChild(H),clearTimeout(fe)},a.cssAnimationDuration)},R=e.document.getElementById("NXReportButton");if(R.addEventListener("click",function(){typeof N=="function"&&N(),Q()}),V&&K){var J=e.document.querySelector(".nx-report-click-to-close");J.addEventListener("click",function(){Q()})}}a=B(!0,a,E)},xt=function(){return'[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*="-content"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-head"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*="-content"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*="-content"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},Xe=function(o,l,c,y,N,j,E,x,P){if(!I("body"))return!1;i||oe.Confirm.init({});var w=B(!0,i,{});typeof P!="object"||Array.isArray(P)||(i=B(!0,i,P)),typeof l!="string"&&(l="Notiflix Confirm"),typeof c!="string"&&(c="Do you agree with me?"),typeof N!="string"&&(N="Yes"),typeof j!="string"&&(j="No"),typeof E!="function"&&(E=void 0),typeof x!="function"&&(x=void 0),i.plainText&&(l=te(l),c=te(c),N=te(N),j=te(j)),i.plainText||(l.length>i.titleMaxLength&&(l="Possible HTML Tags Error",c='The "plainText" option is "false" and the title content length is more than "titleMaxLength" option.',N="Okay",j="..."),c.length>i.messageMaxLength&&(l="Possible HTML Tags Error",c='The "plainText" option is "false" and the message content length is more than "messageMaxLength" option.',N="Okay",j="..."),(N.length||j.length)>i.buttonsMaxLength&&(l="Possible HTML Tags Error",c='The "plainText" option is "false" and the buttons content length is more than "buttonsMaxLength" option.',N="Okay",j="...")),l.length>i.titleMaxLength&&(l=l.substring(0,i.titleMaxLength)+"..."),c.length>i.messageMaxLength&&(c=c.substring(0,i.messageMaxLength)+"..."),N.length>i.buttonsMaxLength&&(N=N.substring(0,i.buttonsMaxLength)+"..."),j.length>i.buttonsMaxLength&&(j=j.substring(0,i.buttonsMaxLength)+"..."),i.cssAnimation||(i.cssAnimationDuration=0);var V=e.document.createElement("div");V.id=L.ID,V.className=i.className+(i.cssAnimation?" nx-with-animation nx-"+i.cssAnimationStyle:""),V.style.zIndex=i.zindex,V.style.padding=i.distance,i.rtl&&(V.setAttribute("dir","rtl"),V.classList.add("nx-rtl-on"));var K=typeof i.position=="string"?i.position.trim():"center";V.classList.add("nx-position-"+K),V.style.fontFamily='"'+i.fontFamily+'", '+p;var Z="";i.backOverlay&&(Z='<div class="'+i.className+"-overlay"+(i.cssAnimation?" nx-with-animation":"")+'" style="background:'+i.backOverlayColor+";animation-duration:"+i.cssAnimationDuration+'ms;"></div>');var Q="";typeof E=="function"&&(Q='<a id="NXConfirmButtonCancel" class="nx-confirm-button-cancel" style="color:'+i.cancelButtonColor+";background:"+i.cancelButtonBackground+";font-size:"+i.buttonsFontSize+';">'+j+"</a>");var R="",J=null,H=void 0;if(o===v.Ask||o===v.Prompt){J=y||"";var fe=o===v.Ask||200<J.length?Math.ceil(1.5*J.length):250,ue=o===v.Prompt?'value="'+J+'"':"";R='<div><input id="NXConfirmValidationInput" type="text" '+ue+' maxlength="'+fe+'" style="font-size:'+i.messageFontSize+";border-radius: "+i.borderRadius+';" autocomplete="off" spellcheck="false" autocapitalize="none" /></div>'}if(V.innerHTML=Z+'<div class="'+i.className+'-content" style="width:'+i.width+"; background:"+i.backgroundColor+"; animation-duration:"+i.cssAnimationDuration+"ms; border-radius: "+i.borderRadius+';"><div class="'+i.className+'-head"><h5 style="color:'+i.titleColor+";font-size:"+i.titleFontSize+';">'+l+'</h5><div style="color:'+i.messageColor+";font-size:"+i.messageFontSize+';">'+c+R+'</div></div><div class="'+i.className+'-buttons"><a id="NXConfirmButtonOk" class="nx-confirm-button-ok'+(typeof E=="function"?"":" nx-full")+'" style="color:'+i.okButtonColor+";background:"+i.okButtonBackground+";font-size:"+i.buttonsFontSize+';">'+N+"</a>"+Q+"</div></div>",!e.document.getElementById(V.id)){e.document.body.appendChild(V);var re=e.document.getElementById(V.id),se=e.document.getElementById("NXConfirmButtonOk"),$=e.document.getElementById("NXConfirmValidationInput");if($&&($.focus(),$.setSelectionRange(0,($.value||"").length),$.addEventListener("keyup",function(z){var Pe=z.target.value;if(o===v.Ask&&Pe!==J)z.preventDefault(),$.classList.add("nx-validation-failure"),$.classList.remove("nx-validation-success");else{o===v.Ask&&($.classList.remove("nx-validation-failure"),$.classList.add("nx-validation-success"));var Ve=(z.key||"").toLocaleLowerCase("en")==="enter"||z.keyCode===13;Ve&&se.dispatchEvent(new Event("click"))}})),se.addEventListener("click",function(z){if(o===v.Ask&&J&&$){var Pe=($.value||"").toString();if(Pe!==J)return $.focus(),$.classList.add("nx-validation-failure"),z.stopPropagation(),z.preventDefault(),z.returnValue=!1,z.cancelBubble=!0,!1;$.classList.remove("nx-validation-failure")}typeof E=="function"&&(o===v.Prompt&&$&&(H=$.value||""),E(H)),re.classList.add("nx-remove");var Ve=setTimeout(function(){re.parentNode!==null&&(re.parentNode.removeChild(re),clearTimeout(Ve))},i.cssAnimationDuration)}),typeof E=="function"){var ke=e.document.getElementById("NXConfirmButtonCancel");ke.addEventListener("click",function(){typeof x=="function"&&(o===v.Prompt&&$&&(H=$.value||""),x(H)),re.classList.add("nx-remove");var z=setTimeout(function(){re.parentNode!==null&&(re.parentNode.removeChild(re),clearTimeout(z))},i.cssAnimationDuration)})}}i=B(!0,i,w)},ht=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},we=function(o,l,c,y,N){if(!I("body"))return!1;s||oe.Loading.init({});var j=B(!0,s,{});if(typeof l=="object"&&!Array.isArray(l)||typeof c=="object"&&!Array.isArray(c)){var E={};typeof l=="object"?E=l:typeof c=="object"&&(E=c),s=B(!0,s,E)}var x="";if(typeof l=="string"&&0<l.length&&(x=l),y){x=x.length>s.messageMaxLength?te(x).toString().substring(0,s.messageMaxLength)+"...":te(x).toString();var P="";0<x.length&&(P='<p id="'+s.messageID+'" class="nx-loading-message" style="color:'+s.messageColor+";font-size:"+s.messageFontSize+';">'+x+"</p>"),s.cssAnimation||(s.cssAnimationDuration=0);var w="";if(o===W.Standard)w=Le(s.svgSize,s.svgColor);else if(o===W.Hourglass)w=O(s.svgSize,s.svgColor);else if(o===W.Circle)w=C(s.svgSize,s.svgColor);else if(o===W.Arrows)w=U(s.svgSize,s.svgColor);else if(o===W.Dots)w=u(s.svgSize,s.svgColor);else if(o===W.Pulse)w=k(s.svgSize,s.svgColor);else if(o===W.Custom&&s.customSvgCode!==null&&s.customSvgUrl===null)w=s.customSvgCode||"";else if(o===W.Custom&&s.customSvgUrl!==null&&s.customSvgCode===null)w='<img class="nx-custom-loading-icon" width="'+s.svgSize+'" height="'+s.svgSize+'" src="'+s.customSvgUrl+'" alt="Notiflix">';else{if(o===W.Custom&&(s.customSvgUrl===null||s.customSvgCode===null))return S('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;w=ee(s.svgSize,"#f8f8f8","#32c682")}var V=parseInt((s.svgSize||"").replace(/[^0-9]/g,"")),K=e.innerWidth,Z=V>=K?K-40+"px":V+"px",Q='<div style="width:'+Z+"; height:"+Z+';" class="'+s.className+"-icon"+(0<x.length?" nx-with-message":"")+'">'+w+"</div>",R=e.document.createElement("div");if(R.id=q.ID,R.className=s.className+(s.cssAnimation?" nx-with-animation":"")+(s.clickToClose?" nx-loading-click-to-close":""),R.style.zIndex=s.zindex,R.style.background=s.backgroundColor,R.style.animationDuration=s.cssAnimationDuration+"ms",R.style.fontFamily='"'+s.fontFamily+'", '+p,R.style.display="flex",R.style.flexWrap="wrap",R.style.flexDirection="column",R.style.alignItems="center",R.style.justifyContent="center",s.rtl&&(R.setAttribute("dir","rtl"),R.classList.add("nx-rtl-on")),R.innerHTML=Q+P,!e.document.getElementById(R.id)&&(e.document.body.appendChild(R),s.clickToClose)){var J=e.document.getElementById(R.id);J.addEventListener("click",function(){R.classList.add("nx-remove");var ue=setTimeout(function(){R.parentNode!==null&&(R.parentNode.removeChild(R),clearTimeout(ue))},s.cssAnimationDuration)})}}else if(e.document.getElementById(q.ID))var H=e.document.getElementById(q.ID),fe=setTimeout(function(){H.classList.add("nx-remove");var ue=setTimeout(function(){H.parentNode!==null&&(H.parentNode.removeChild(H),clearTimeout(ue))},s.cssAnimationDuration);clearTimeout(fe)},N);s=B(!0,s,j)},Hn=function(o){typeof o!="string"&&(o="");var l=e.document.getElementById(q.ID);if(l)if(0<o.length){o=o.length>s.messageMaxLength?te(o).substring(0,s.messageMaxLength)+"...":te(o);var c=l.getElementsByTagName("p")[0];if(c)c.innerHTML=o;else{var y=e.document.createElement("p");y.id=s.messageID,y.className="nx-loading-message nx-loading-message-new",y.style.color=s.messageColor,y.style.fontSize=s.messageFontSize,y.innerHTML=o,l.appendChild(y)}}else S("Where is the new message?")},_n=function(){return'[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*="-icon"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*="-icon"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*="-message"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].nx-with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}'},gt=0,Ce=function(o,l,c,y,N,j){var E;if(Array.isArray(c)){if(1>c.length)return S("Array of HTMLElements should contains at least one HTMLElement."),!1;E=c}else if(Object.prototype.isPrototypeOf.call(NodeList.prototype,c)){if(1>c.length)return S("NodeListOf<HTMLElement> should contains at least one HTMLElement."),!1;E=Array.prototype.slice.call(c)}else{var x=typeof c!="string"||1>(c||"").length||(c||"").length===1&&((c||"")[0]==="#"||(c||"")[0]===".");if(x)return S("The selector parameter must be a string and matches a specified CSS selector(s)."),!1;var P=e.document.querySelectorAll(c);if(1>P.length)return S('You called the "Notiflix.Block..." function with "'+c+'" selector, but there is no such element(s) in the document.'),!1;E=P}f||oe.Block.init({});var w=B(!0,f,{});if(typeof y=="object"&&!Array.isArray(y)||typeof N=="object"&&!Array.isArray(N)){var V={};typeof y=="object"?V=y:typeof N=="object"&&(V=N),f=B(!0,f,V)}var K="";typeof y=="string"&&0<y.length&&(K=y),f.cssAnimation||(f.cssAnimationDuration=0);var Z=F.className;typeof f.className=="string"&&(Z=f.className.trim());var Q=typeof f.querySelectorLimit=="number"?f.querySelectorLimit:200,R=(E||[]).length>=Q?Q:E.length,J="nx-block-temporary-position";if(o){for(var H,fe=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr","html","head","title","script","style","iframe"],ue=0;ue<R;ue++)if(H=E[ue],H){if(-1<fe.indexOf(H.tagName.toLocaleLowerCase("en")))break;var re=H.querySelectorAll("[id^="+F.ID+"]");if(1>re.length){var se="";l&&(l===T.Hourglass?se=O(f.svgSize,f.svgColor):l===T.Circle?se=C(f.svgSize,f.svgColor):l===T.Arrows?se=U(f.svgSize,f.svgColor):l===T.Dots?se=u(f.svgSize,f.svgColor):l===T.Pulse?se=k(f.svgSize,f.svgColor):se=Le(f.svgSize,f.svgColor));var $='<span class="'+Z+'-icon" style="width:'+f.svgSize+";height:"+f.svgSize+';">'+se+"</span>",ke="";0<K.length&&(K=K.length>f.messageMaxLength?te(K).substring(0,f.messageMaxLength)+"...":te(K),ke='<span style="font-size:'+f.messageFontSize+";color:"+f.messageColor+';" class="'+Z+'-message">'+K+"</span>"),gt++;var z=e.document.createElement("div");z.id=F.ID+"-"+gt,z.className=Z+(f.cssAnimation?" nx-with-animation":""),z.style.position=f.position,z.style.zIndex=f.zindex,z.style.background=f.backgroundColor,z.style.animationDuration=f.cssAnimationDuration+"ms",z.style.fontFamily='"'+f.fontFamily+'", '+p,z.style.display="flex",z.style.flexWrap="wrap",z.style.flexDirection="column",z.style.alignItems="center",z.style.justifyContent="center",f.rtl&&(z.setAttribute("dir","rtl"),z.classList.add("nx-rtl-on")),z.innerHTML=$+ke;var Pe=e.getComputedStyle(H).getPropertyValue("position"),Ve=typeof Pe=="string"?Pe.toLocaleLowerCase("en"):"relative",zt=Math.round(1.25*parseInt(f.svgSize))+40,Xn=H.offsetHeight||0,bt="";zt>Xn&&(bt="min-height:"+zt+"px;");var Tt="";Tt=H.getAttribute("id")?"#"+H.getAttribute("id"):H.classList[0]?"."+H.classList[0]:(H.tagName||"").toLocaleLowerCase("en");var jt="",Dt=-1>=["absolute","relative","fixed","sticky"].indexOf(Ve);if(Dt||0<bt.length){if(!I("head"))return!1;Dt&&(jt="position:relative!important;");var Vn='<style id="Style-'+F.ID+"-"+gt+'">'+Tt+"."+J+"{"+jt+bt+"}</style>",Lt=e.document.createRange();Lt.selectNode(e.document.head);var qn=Lt.createContextualFragment(Vn);e.document.head.appendChild(qn),H.classList.add(J)}H.appendChild(z)}}}else var Un=function(ae){var ce=setTimeout(function(){ae.parentNode!==null&&ae.parentNode.removeChild(ae);var qe=ae.getAttribute("id"),tt=e.document.getElementById("Style-"+qe);tt&&tt.parentNode!==null&&tt.parentNode.removeChild(tt),clearTimeout(ce)},f.cssAnimationDuration)},Yn=function(ae){if(ae&&0<ae.length)for(var ce,qe=0;qe<ae.length;qe++)ce=ae[qe],ce&&(ce.classList.add("nx-remove"),Un(ce));else _(typeof c=="string"?'"Notiflix.Block.remove();" function called with "'+c+'" selector, but this selector does not have a "Block" element to remove.':'"Notiflix.Block.remove();" function called with "'+c+'", but this "Array<HTMLElement>" or "NodeListOf<HTMLElement>" does not have a "Block" element to remove.')},$n=function(ae){var ce=setTimeout(function(){ae.classList.remove(J),clearTimeout(ce)},f.cssAnimationDuration+300)},Gn=setTimeout(function(){for(var ae,ce=0;ce<R;ce++)ae=E[ce],ae&&($n(ae),re=ae.querySelectorAll("[id^="+F.ID+"]"),Yn(re));clearTimeout(Gn)},j);f=B(!0,f,w)},oe={Notify:{init:function(o){n=B(!0,b,o),G(ne,"NotiflixNotifyInternalCSS")},merge:function(o){return n?void(n=B(!0,n,o)):(S("You have to initialize the Notify module before call Merge function."),!1)},success:function(o,l,c){le(m.Success,o,l,c)},failure:function(o,l,c){le(m.Failure,o,l,c)},warning:function(o,l,c){le(m.Warning,o,l,c)},info:function(o,l,c){le(m.Info,o,l,c)}},Report:{init:function(o){a=B(!0,A,o),G(be,"NotiflixReportInternalCSS")},merge:function(o){return a?void(a=B(!0,a,o)):(S("You have to initialize the Report module before call Merge function."),!1)},success:function(o,l,c,y,N){ye(g.Success,o,l,c,y,N)},failure:function(o,l,c,y,N){ye(g.Failure,o,l,c,y,N)},warning:function(o,l,c,y,N){ye(g.Warning,o,l,c,y,N)},info:function(o,l,c,y,N){ye(g.Info,o,l,c,y,N)}},Confirm:{init:function(o){i=B(!0,L,o),G(xt,"NotiflixConfirmInternalCSS")},merge:function(o){return i?void(i=B(!0,i,o)):(S("You have to initialize the Confirm module before call Merge function."),!1)},show:function(o,l,c,y,N,j,E){Xe(v.Show,o,l,null,c,y,N,j,E)},ask:function(o,l,c,y,N,j,E,x){Xe(v.Ask,o,l,c,y,N,j,E,x)},prompt:function(o,l,c,y,N,j,E,x){Xe(v.Prompt,o,l,c,y,N,j,E,x)}},Loading:{init:function(o){s=B(!0,q,o),G(ht,"NotiflixLoadingInternalCSS")},merge:function(o){return s?void(s=B(!0,s,o)):(S("You have to initialize the Loading module before call Merge function."),!1)},standard:function(o,l){we(W.Standard,o,l,!0,0)},hourglass:function(o,l){we(W.Hourglass,o,l,!0,0)},circle:function(o,l){we(W.Circle,o,l,!0,0)},arrows:function(o,l){we(W.Arrows,o,l,!0,0)},dots:function(o,l){we(W.Dots,o,l,!0,0)},pulse:function(o,l){we(W.Pulse,o,l,!0,0)},custom:function(o,l){we(W.Custom,o,l,!0,0)},notiflix:function(o,l){we(W.Notiflix,o,l,!0,0)},remove:function(o){typeof o!="number"&&(o=0),we(null,null,null,!1,o)},change:function(o){Hn(o)}},Block:{init:function(o){f=B(!0,F,o),G(_n,"NotiflixBlockInternalCSS")},merge:function(o){return f?void(f=B(!0,f,o)):(S('You have to initialize the "Notiflix.Block" module before call Merge function.'),!1)},standard:function(o,l,c){Ce(!0,T.Standard,o,l,c)},hourglass:function(o,l,c){Ce(!0,T.Hourglass,o,l,c)},circle:function(o,l,c){Ce(!0,T.Circle,o,l,c)},arrows:function(o,l,c){Ce(!0,T.Arrows,o,l,c)},dots:function(o,l,c){Ce(!0,T.Dots,o,l,c)},pulse:function(o,l,c){Ce(!0,T.Pulse,o,l,c)},remove:function(o,l){typeof l!="number"&&(l=0),Ce(!1,null,o,null,null,l)}}};return typeof e.Notiflix=="object"?B(!0,e.Notiflix,{Notify:oe.Notify,Report:oe.Report,Confirm:oe.Confirm,Loading:oe.Loading,Block:oe.Block}):{Notify:oe.Notify,Report:oe.Report,Confirm:oe.Confirm,Loading:oe.Loading,Block:oe.Block}})})(vn);var pa=vn.exports;const Rt=bn(pa);var kt={exports:{}},ze={},At={exports:{}},xe={},Nt={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=b;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var n="none",a="contents",i=/input|select|textarea|button|object|iframe/;function s(g,A){return A.getPropertyValue("overflow")!=="visible"||g.scrollWidth<=0&&g.scrollHeight<=0}function f(g){var A=g.offsetWidth<=0&&g.offsetHeight<=0;if(A&&!g.innerHTML)return!0;try{var v=window.getComputedStyle(g),L=v.getPropertyValue("display");return A?L!==a&&s(g,v):L===n}catch{return console.warn("Failed to inspect element style"),!1}}function d(g){for(var A=g,v=g.getRootNode&&g.getRootNode();A&&A!==document.body;){if(v&&A===v&&(A=v.host.parentNode),f(A))return!1;A=A.parentNode}return!0}function p(g,A){var v=g.nodeName.toLowerCase(),L=i.test(v)&&!g.disabled||v==="a"&&g.href||A;return L&&d(g)}function m(g){var A=g.getAttribute("tabindex");A===null&&(A=void 0);var v=isNaN(A);return(v||A>=0)&&p(g,!v)}function b(g){var A=[].slice.call(g.querySelectorAll("*"),0).reduce(function(v,L){return v.concat(L.shadowRoot?b(L.shadowRoot):[L])},[]);return A.filter(m)}t.exports=e.default})(Nt,Nt.exports);var kn=Nt.exports;Object.defineProperty(xe,"__esModule",{value:!0});xe.resetState=ga;xe.log=ba;xe.handleBlur=Qe;xe.handleFocus=Ke;xe.markForFocusLater=ya;xe.returnFocus=wa;xe.popWithoutFocus=va;xe.setupScopedFocus=ka;xe.teardownScopedFocus=Aa;var ma=kn,xa=ha(ma);function ha(t){return t&&t.__esModule?t:{default:t}}var Ie=[],Fe=null,Ct=!1;function ga(){Ie=[]}function ba(){}function Qe(){Ct=!0}function Ke(){if(Ct){if(Ct=!1,!Fe)return;setTimeout(function(){if(!Fe.contains(document.activeElement)){var t=(0,xa.default)(Fe)[0]||Fe;t.focus()}},0)}}function ya(){Ie.push(document.activeElement)}function wa(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=null;try{Ie.length!==0&&(e=Ie.pop(),e.focus({preventScroll:t}));return}catch{console.warn(["You tried to return focus to",e,"but it is not in the DOM anymore"].join(" "))}}function va(){Ie.length>0&&Ie.pop()}function ka(t){Fe=t,window.addEventListener?(window.addEventListener("blur",Qe,!1),document.addEventListener("focus",Ke,!0)):(window.attachEvent("onBlur",Qe),document.attachEvent("onFocus",Ke))}function Aa(){Fe=null,window.addEventListener?(window.removeEventListener("blur",Qe),document.removeEventListener("focus",Ke)):(window.detachEvent("onBlur",Qe),document.detachEvent("onFocus",Ke))}var St={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=f;var n=kn,a=i(n);function i(d){return d&&d.__esModule?d:{default:d}}function s(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return d.activeElement.shadowRoot?s(d.activeElement.shadowRoot):d.activeElement}function f(d,p){var m=(0,a.default)(d);if(!m.length){p.preventDefault();return}var b=void 0,g=p.shiftKey,A=m[0],v=m[m.length-1],L=s();if(d===L){if(!g)return;b=v}if(v===L&&!g&&(b=A),A===L&&g&&(b=v),b){p.preventDefault(),b.focus();return}var W=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),q=W!=null&&W[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(q){var T=m.indexOf(L);if(T>-1&&(T+=g?-1:1),b=m[T],typeof b>"u"){p.preventDefault(),b=g?v:A,b.focus();return}p.preventDefault(),b.focus()}}t.exports=e.default})(St,St.exports);var Na=St.exports,he={},Ca=function(){},Sa=Ca,me={},An={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(t){(function(){var e=!!(typeof window<"u"&&window.document&&window.document.createElement),n={canUseDOM:e,canUseWorkers:typeof Worker<"u",canUseEventListeners:e&&!!(window.addEventListener||window.attachEvent),canUseViewport:e&&!!window.screen};t.exports?t.exports=n:window.ExecutionEnvironment=n})()})(An);var Ma=An.exports;Object.defineProperty(me,"__esModule",{value:!0});me.canUseDOM=me.SafeNodeList=me.SafeHTMLCollection=void 0;var Oa=Ma,Ea=Wa(Oa);function Wa(t){return t&&t.__esModule?t:{default:t}}var ft=Ea.default,za=ft.canUseDOM?window.HTMLElement:{};me.SafeHTMLCollection=ft.canUseDOM?window.HTMLCollection:{};me.SafeNodeList=ft.canUseDOM?window.NodeList:{};me.canUseDOM=ft.canUseDOM;me.default=za;Object.defineProperty(he,"__esModule",{value:!0});he.resetState=Pa;he.log=Ra;he.assertNodeList=Nn;he.setElement=Fa;he.validateElement=Ot;he.hide=Ia;he.show=Ba;he.documentNotReadyOrSSRTesting=Ha;var Ta=Sa,ja=La(Ta),Da=me;function La(t){return t&&t.__esModule?t:{default:t}}var de=null;function Pa(){de&&(de.removeAttribute?de.removeAttribute("aria-hidden"):de.length!=null?de.forEach(function(t){return t.removeAttribute("aria-hidden")}):document.querySelectorAll(de).forEach(function(t){return t.removeAttribute("aria-hidden")})),de=null}function Ra(){}function Nn(t,e){if(!t||!t.length)throw new Error("react-modal: No elements were found for selector "+e+".")}function Fa(t){var e=t;if(typeof e=="string"&&Da.canUseDOM){var n=document.querySelectorAll(e);Nn(n,e),e=n}return de=e||de,de}function Ot(t){var e=t||de;return e?Array.isArray(e)||e instanceof HTMLCollection||e instanceof NodeList?e:[e]:((0,ja.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function Ia(t){var e=!0,n=!1,a=void 0;try{for(var i=Ot(t)[Symbol.iterator](),s;!(e=(s=i.next()).done);e=!0){var f=s.value;f.setAttribute("aria-hidden","true")}}catch(d){n=!0,a=d}finally{try{!e&&i.return&&i.return()}finally{if(n)throw a}}}function Ba(t){var e=!0,n=!1,a=void 0;try{for(var i=Ot(t)[Symbol.iterator](),s;!(e=(s=i.next()).done);e=!0){var f=s.value;f.removeAttribute("aria-hidden")}}catch(d){n=!0,a=d}finally{try{!e&&i.return&&i.return()}finally{if(n)throw a}}}function Ha(){de=null}var Be={};Object.defineProperty(Be,"__esModule",{value:!0});Be.resetState=_a;Be.log=Xa;var $e={},Ge={};function Ft(t,e){t.classList.remove(e)}function _a(){var t=document.getElementsByTagName("html")[0];for(var e in $e)Ft(t,$e[e]);var n=document.body;for(var a in Ge)Ft(n,Ge[a]);$e={},Ge={}}function Xa(){}var Va=function(e,n){return e[n]||(e[n]=0),e[n]+=1,n},qa=function(e,n){return e[n]&&(e[n]-=1),n},Ua=function(e,n,a){a.forEach(function(i){Va(n,i),e.add(i)})},Ya=function(e,n,a){a.forEach(function(i){qa(n,i),n[i]===0&&e.remove(i)})};Be.add=function(e,n){return Ua(e.classList,e.nodeName.toLowerCase()=="html"?$e:Ge,n.split(" "))};Be.remove=function(e,n){return Ya(e.classList,e.nodeName.toLowerCase()=="html"?$e:Ge,n.split(" "))};var He={};Object.defineProperty(He,"__esModule",{value:!0});He.log=Ga;He.resetState=Qa;function $a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var Cn=function t(){var e=this;$a(this,t),this.register=function(n){e.openInstances.indexOf(n)===-1&&(e.openInstances.push(n),e.emit("register"))},this.deregister=function(n){var a=e.openInstances.indexOf(n);a!==-1&&(e.openInstances.splice(a,1),e.emit("deregister"))},this.subscribe=function(n){e.subscribers.push(n)},this.emit=function(n){e.subscribers.forEach(function(a){return a(n,e.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},ot=new Cn;function Ga(){console.log("portalOpenInstances ----------"),console.log(ot.openInstances.length),ot.openInstances.forEach(function(t){return console.log(t)}),console.log("end portalOpenInstances ----------")}function Qa(){ot=new Cn}He.default=ot;var Et={};Object.defineProperty(Et,"__esModule",{value:!0});Et.resetState=ei;Et.log=ti;var Ka=He,Ja=Za(Ka);function Za(t){return t&&t.__esModule?t:{default:t}}var ie=void 0,pe=void 0,Ee=[];function ei(){for(var t=[ie,pe],e=0;e<t.length;e++){var n=t[e];n&&n.parentNode&&n.parentNode.removeChild(n)}ie=pe=null,Ee=[]}function ti(){console.log("bodyTrap ----------"),console.log(Ee.length);for(var t=[ie,pe],e=0;e<t.length;e++){var n=t[e],a=n||{};console.log(a.nodeName,a.className,a.id)}console.log("edn bodyTrap ----------")}function It(){Ee.length!==0&&Ee[Ee.length-1].focusContent()}function ni(t,e){!ie&&!pe&&(ie=document.createElement("div"),ie.setAttribute("data-react-modal-body-trap",""),ie.style.position="absolute",ie.style.opacity="0",ie.setAttribute("tabindex","0"),ie.addEventListener("focus",It),pe=ie.cloneNode(),pe.addEventListener("focus",It)),Ee=e,Ee.length>0?(document.body.firstChild!==ie&&document.body.insertBefore(ie,document.body.firstChild),document.body.lastChild!==pe&&document.body.appendChild(pe)):(ie.parentElement&&ie.parentElement.removeChild(ie),pe.parentElement&&pe.parentElement.removeChild(pe))}Ja.default.subscribe(ni);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(O){for(var C=1;C<arguments.length;C++){var U=arguments[C];for(var u in U)Object.prototype.hasOwnProperty.call(U,u)&&(O[u]=U[u])}return O},a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(O){return typeof O}:function(O){return O&&typeof Symbol=="function"&&O.constructor===Symbol&&O!==Symbol.prototype?"symbol":typeof O},i=function(){function O(C,U){for(var u=0;u<U.length;u++){var k=U[u];k.enumerable=k.enumerable||!1,k.configurable=!0,"value"in k&&(k.writable=!0),Object.defineProperty(C,k.key,k)}}return function(C,U,u){return U&&O(C.prototype,U),u&&O(C,u),C}}(),s=D,f=yn,d=I(f),p=xe,m=_(p),b=Na,g=I(b),A=he,v=_(A),L=Be,W=_(L),q=me,T=I(q),F=He,S=I(F);function _(O){if(O&&O.__esModule)return O;var C={};if(O!=null)for(var U in O)Object.prototype.hasOwnProperty.call(O,U)&&(C[U]=O[U]);return C.default=O,C}function I(O){return O&&O.__esModule?O:{default:O}}function G(O,C){if(!(O instanceof C))throw new TypeError("Cannot call a class as a function")}function B(O,C){if(!O)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return C&&(typeof C=="object"||typeof C=="function")?C:O}function te(O,C){if(typeof C!="function"&&C!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof C);O.prototype=Object.create(C&&C.prototype,{constructor:{value:O,enumerable:!1,writable:!0,configurable:!0}}),C&&(Object.setPrototypeOf?Object.setPrototypeOf(O,C):O.__proto__=C)}var _e={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},pt=function(C){return C.code==="Tab"||C.keyCode===9},mt=function(C){return C.code==="Escape"||C.keyCode===27},De=0,Le=function(O){te(C,O);function C(U){G(this,C);var u=B(this,(C.__proto__||Object.getPrototypeOf(C)).call(this,U));return u.setOverlayRef=function(k){u.overlay=k,u.props.overlayRef&&u.props.overlayRef(k)},u.setContentRef=function(k){u.content=k,u.props.contentRef&&u.props.contentRef(k)},u.afterClose=function(){var k=u.props,ee=k.appElement,ne=k.ariaHideApp,Y=k.htmlOpenClassName,le=k.bodyOpenClassName,be=k.parentSelector,ye=be&&be().ownerDocument||document;le&&W.remove(ye.body,le),Y&&W.remove(ye.getElementsByTagName("html")[0],Y),ne&&De>0&&(De-=1,De===0&&v.show(ee)),u.props.shouldFocusAfterRender&&(u.props.shouldReturnFocusAfterClose?(m.returnFocus(u.props.preventScroll),m.teardownScopedFocus()):m.popWithoutFocus()),u.props.onAfterClose&&u.props.onAfterClose(),S.default.deregister(u)},u.open=function(){u.beforeOpen(),u.state.afterOpen&&u.state.beforeClose?(clearTimeout(u.closeTimer),u.setState({beforeClose:!1})):(u.props.shouldFocusAfterRender&&(m.setupScopedFocus(u.node),m.markForFocusLater()),u.setState({isOpen:!0},function(){u.openAnimationFrame=requestAnimationFrame(function(){u.setState({afterOpen:!0}),u.props.isOpen&&u.props.onAfterOpen&&u.props.onAfterOpen({overlayEl:u.overlay,contentEl:u.content})})}))},u.close=function(){u.props.closeTimeoutMS>0?u.closeWithTimeout():u.closeWithoutTimeout()},u.focusContent=function(){return u.content&&!u.contentHasFocus()&&u.content.focus({preventScroll:!0})},u.closeWithTimeout=function(){var k=Date.now()+u.props.closeTimeoutMS;u.setState({beforeClose:!0,closesAt:k},function(){u.closeTimer=setTimeout(u.closeWithoutTimeout,u.state.closesAt-Date.now())})},u.closeWithoutTimeout=function(){u.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},u.afterClose)},u.handleKeyDown=function(k){pt(k)&&(0,g.default)(u.content,k),u.props.shouldCloseOnEsc&&mt(k)&&(k.stopPropagation(),u.requestClose(k))},u.handleOverlayOnClick=function(k){u.shouldClose===null&&(u.shouldClose=!0),u.shouldClose&&u.props.shouldCloseOnOverlayClick&&(u.ownerHandlesClose()?u.requestClose(k):u.focusContent()),u.shouldClose=null},u.handleContentOnMouseUp=function(){u.shouldClose=!1},u.handleOverlayOnMouseDown=function(k){!u.props.shouldCloseOnOverlayClick&&k.target==u.overlay&&k.preventDefault()},u.handleContentOnClick=function(){u.shouldClose=!1},u.handleContentOnMouseDown=function(){u.shouldClose=!1},u.requestClose=function(k){return u.ownerHandlesClose()&&u.props.onRequestClose(k)},u.ownerHandlesClose=function(){return u.props.onRequestClose},u.shouldBeClosed=function(){return!u.state.isOpen&&!u.state.beforeClose},u.contentHasFocus=function(){return document.activeElement===u.content||u.content.contains(document.activeElement)},u.buildClassName=function(k,ee){var ne=(typeof ee>"u"?"undefined":a(ee))==="object"?ee:{base:_e[k],afterOpen:_e[k]+"--after-open",beforeClose:_e[k]+"--before-close"},Y=ne.base;return u.state.afterOpen&&(Y=Y+" "+ne.afterOpen),u.state.beforeClose&&(Y=Y+" "+ne.beforeClose),typeof ee=="string"&&ee?Y+" "+ee:Y},u.attributesFromObject=function(k,ee){return Object.keys(ee).reduce(function(ne,Y){return ne[k+"-"+Y]=ee[Y],ne},{})},u.state={afterOpen:!1,beforeClose:!1},u.shouldClose=null,u.moveFromContentToOverlay=null,u}return i(C,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(u,k){this.props.isOpen&&!u.isOpen?this.open():!this.props.isOpen&&u.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!k.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var u=this.props,k=u.appElement,ee=u.ariaHideApp,ne=u.htmlOpenClassName,Y=u.bodyOpenClassName,le=u.parentSelector,be=le&&le().ownerDocument||document;Y&&W.add(be.body,Y),ne&&W.add(be.getElementsByTagName("html")[0],ne),ee&&(De+=1,v.hide(k)),S.default.register(this)}},{key:"render",value:function(){var u=this.props,k=u.id,ee=u.className,ne=u.overlayClassName,Y=u.defaultStyles,le=u.children,be=ee?{}:Y.content,ye=ne?{}:Y.overlay;if(this.shouldBeClosed())return null;var xt={ref:this.setOverlayRef,className:this.buildClassName("overlay",ne),style:n({},ye,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},Xe=n({id:k,ref:this.setContentRef,style:n({},be,this.props.style.content),className:this.buildClassName("content",ee),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",n({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),ht=this.props.contentElement(Xe,le);return this.props.overlayElement(xt,ht)}}]),C}(s.Component);Le.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},Le.propTypes={isOpen:d.default.bool.isRequired,defaultStyles:d.default.shape({content:d.default.object,overlay:d.default.object}),style:d.default.shape({content:d.default.object,overlay:d.default.object}),className:d.default.oneOfType([d.default.string,d.default.object]),overlayClassName:d.default.oneOfType([d.default.string,d.default.object]),parentSelector:d.default.func,bodyOpenClassName:d.default.string,htmlOpenClassName:d.default.string,ariaHideApp:d.default.bool,appElement:d.default.oneOfType([d.default.instanceOf(T.default),d.default.instanceOf(q.SafeHTMLCollection),d.default.instanceOf(q.SafeNodeList),d.default.arrayOf(d.default.instanceOf(T.default))]),onAfterOpen:d.default.func,onAfterClose:d.default.func,onRequestClose:d.default.func,closeTimeoutMS:d.default.number,shouldFocusAfterRender:d.default.bool,shouldCloseOnOverlayClick:d.default.bool,shouldReturnFocusAfterClose:d.default.bool,preventScroll:d.default.bool,role:d.default.string,contentLabel:d.default.string,aria:d.default.object,data:d.default.object,children:d.default.node,shouldCloseOnEsc:d.default.bool,overlayRef:d.default.func,contentRef:d.default.func,id:d.default.string,overlayElement:d.default.func,contentElement:d.default.func,testId:d.default.string},e.default=Le,t.exports=e.default})(At,At.exports);var ai=At.exports;function Sn(){var t=this.constructor.getDerivedStateFromProps(this.props,this.state);t!=null&&this.setState(t)}function Mn(t){function e(n){var a=this.constructor.getDerivedStateFromProps(t,n);return a??null}this.setState(e.bind(this))}function On(t,e){try{var n=this.props,a=this.state;this.props=t,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,a)}finally{this.props=n,this.state=a}}Sn.__suppressDeprecationWarning=!0;Mn.__suppressDeprecationWarning=!0;On.__suppressDeprecationWarning=!0;function ii(t){var e=t.prototype;if(!e||!e.isReactComponent)throw new Error("Can only polyfill class components");if(typeof t.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function")return t;var n=null,a=null,i=null;if(typeof e.componentWillMount=="function"?n="componentWillMount":typeof e.UNSAFE_componentWillMount=="function"&&(n="UNSAFE_componentWillMount"),typeof e.componentWillReceiveProps=="function"?a="componentWillReceiveProps":typeof e.UNSAFE_componentWillReceiveProps=="function"&&(a="UNSAFE_componentWillReceiveProps"),typeof e.componentWillUpdate=="function"?i="componentWillUpdate":typeof e.UNSAFE_componentWillUpdate=="function"&&(i="UNSAFE_componentWillUpdate"),n!==null||a!==null||i!==null){var s=t.displayName||t.name,f=typeof t.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+s+" uses "+f+" but also contains the following legacy lifecycles:"+(n!==null?`
  `+n:"")+(a!==null?`
  `+a:"")+(i!==null?`
  `+i:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof t.getDerivedStateFromProps=="function"&&(e.componentWillMount=Sn,e.componentWillReceiveProps=Mn),typeof e.getSnapshotBeforeUpdate=="function"){if(typeof e.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");e.componentWillUpdate=On;var d=e.componentDidUpdate;e.componentDidUpdate=function(m,b,g){var A=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:g;d.call(this,m,b,A)}}return t}const oi=Object.freeze(Object.defineProperty({__proto__:null,polyfill:ii},Symbol.toStringTag,{value:"Module"})),ri=Qn(oi);Object.defineProperty(ze,"__esModule",{value:!0});ze.bodyOpenClassName=ze.portalClassName=void 0;var Bt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},si=function(){function t(e,n){for(var a=0;a<n.length;a++){var i=n[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),En=D,rt=Ze(En),li=Kn,st=Ze(li),ci=yn,M=Ze(ci),di=ai,Ht=Ze(di),fi=he,ui=mi(fi),Ne=me,_t=Ze(Ne),pi=ri;function mi(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function Ze(t){return t&&t.__esModule?t:{default:t}}function xi(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Xt(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function hi(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var gi=ze.portalClassName="ReactModalPortal",bi=ze.bodyOpenClassName="ReactModal__Body--open",Se=Ne.canUseDOM&&st.default.createPortal!==void 0,Vt=function(e){return document.createElement(e)},qt=function(){return Se?st.default.createPortal:st.default.unstable_renderSubtreeIntoContainer};function nt(t){return t()}var et=function(t){hi(e,t);function e(){var n,a,i,s;xi(this,e);for(var f=arguments.length,d=Array(f),p=0;p<f;p++)d[p]=arguments[p];return s=(a=(i=Xt(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(d))),i),i.removePortal=function(){!Se&&st.default.unmountComponentAtNode(i.node);var m=nt(i.props.parentSelector);m&&m.contains(i.node)?m.removeChild(i.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},i.portalRef=function(m){i.portal=m},i.renderPortal=function(m){var b=qt(),g=b(i,rt.default.createElement(Ht.default,Bt({defaultStyles:e.defaultStyles},m)),i.node);i.portalRef(g)},a),Xt(i,s)}return si(e,[{key:"componentDidMount",value:function(){if(Ne.canUseDOM){Se||(this.node=Vt("div")),this.node.className=this.props.portalClassName;var a=nt(this.props.parentSelector);a.appendChild(this.node),!Se&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(a){var i=nt(a.parentSelector),s=nt(this.props.parentSelector);return{prevParent:i,nextParent:s}}},{key:"componentDidUpdate",value:function(a,i,s){if(Ne.canUseDOM){var f=this.props,d=f.isOpen,p=f.portalClassName;a.portalClassName!==p&&(this.node.className=p);var m=s.prevParent,b=s.nextParent;b!==m&&(m.removeChild(this.node),b.appendChild(this.node)),!(!a.isOpen&&!d)&&!Se&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!Ne.canUseDOM||!this.node||!this.portal)){var a=this.portal.state,i=Date.now(),s=a.isOpen&&this.props.closeTimeoutMS&&(a.closesAt||i+this.props.closeTimeoutMS);s?(a.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,s-i)):this.removePortal()}}},{key:"render",value:function(){if(!Ne.canUseDOM||!Se)return null;!this.node&&Se&&(this.node=Vt("div"));var a=qt();return a(rt.default.createElement(Ht.default,Bt({ref:this.portalRef,defaultStyles:e.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(a){ui.setElement(a)}}]),e}(En.Component);et.propTypes={isOpen:M.default.bool.isRequired,style:M.default.shape({content:M.default.object,overlay:M.default.object}),portalClassName:M.default.string,bodyOpenClassName:M.default.string,htmlOpenClassName:M.default.string,className:M.default.oneOfType([M.default.string,M.default.shape({base:M.default.string.isRequired,afterOpen:M.default.string.isRequired,beforeClose:M.default.string.isRequired})]),overlayClassName:M.default.oneOfType([M.default.string,M.default.shape({base:M.default.string.isRequired,afterOpen:M.default.string.isRequired,beforeClose:M.default.string.isRequired})]),appElement:M.default.oneOfType([M.default.instanceOf(_t.default),M.default.instanceOf(Ne.SafeHTMLCollection),M.default.instanceOf(Ne.SafeNodeList),M.default.arrayOf(M.default.instanceOf(_t.default))]),onAfterOpen:M.default.func,onRequestClose:M.default.func,closeTimeoutMS:M.default.number,ariaHideApp:M.default.bool,shouldFocusAfterRender:M.default.bool,shouldCloseOnOverlayClick:M.default.bool,shouldReturnFocusAfterClose:M.default.bool,preventScroll:M.default.bool,parentSelector:M.default.func,aria:M.default.object,data:M.default.object,role:M.default.string,contentLabel:M.default.string,shouldCloseOnEsc:M.default.bool,overlayRef:M.default.func,contentRef:M.default.func,id:M.default.string,overlayElement:M.default.func,contentElement:M.default.func};et.defaultProps={isOpen:!1,portalClassName:gi,bodyOpenClassName:bi,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,n){return rt.default.createElement("div",e,n)},contentElement:function(e,n){return rt.default.createElement("div",e,n)}};et.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,pi.polyfill)(et);ze.default=et;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=ze,a=i(n);function i(s){return s&&s.__esModule?s:{default:s}}e.default=a.default,t.exports=e.default})(kt,kt.exports);var yi=kt.exports;const Wt=bn(yi);Wt.setAppElement("#root");const wi=({onClose:t})=>{const[e,n]=D.useState(0),[a,i]=D.useState(0),[s,f]=D.useState(0),[d,p]=D.useState(!0),[m,b]=D.useState(0),g=je(),A=()=>{p(!d)},v=T=>{n(Number(T.target.value))},L=T=>{i(Number(T.target.value))};D.useEffect(()=>{f(d?Math.ceil((e*.03+a*.4)*100)/100<2?2:Math.ceil((e*.03+a*.4)*100)/100:Math.ceil((e*.04+a*.6)*100)/100<2?2:Math.ceil((e*.04+a*.6)*100)/100)},[d,e,a]);const W=T=>{b(Number(T.target.value))},q=T=>{try{if(T.preventDefault(),m<2)return Rt.Notify.failure("The required amount of water in liters per day: 2L");if(m>15)return Rt.Notify.failure("The maximum amount of water in liters per day: 15L");g(Jn(m)),t()}catch(F){console.error("error",F)}};return D.useEffect(()=>{const T=F=>{F.key==="Escape"&&t()};window.addEventListener("keydown",T)},[t]),Mt.createPortal(r.jsx(fa,{onClick:t,children:r.jsxs(ua,{onClick:T=>T.stopPropagation(),children:[r.jsxs("div",{className:"headerDaily",children:[r.jsx("h2",{children:"My daily norma"}),r.jsx("button",{type:"button",className:"closeButton",onClick:t,children:r.jsx("svg",{width:"24",height:"24",children:r.jsx("use",{href:"/goit-group2-react-nodejs/src/assets/images/sprite/horodiukIcons.svg#icon-close"})})})]}),r.jsxs("div",{className:"formulaContainer",children:[r.jsxs("div",{className:"formula",children:[r.jsxs("div",{className:"formulaText",children:[r.jsx("p",{children:"For girl:"}),r.jsx("span",{className:"formulaSpan",children:"V=(M*0,03) + (T*0,4)"})]}),r.jsxs("div",{className:"formulaText",children:[r.jsx("p",{children:"For man:"}),r.jsx("span",{className:"formulaSpan",children:"V=(M*0,04) + (T*0,6)"})]})]}),r.jsxs("p",{className:"formulaDescription",children:[r.jsx("span",{className:"formulaStar",children:"*"})," V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]})]}),r.jsxs("form",{onSubmit:q,children:[r.jsx("h3",{children:"Calculate your rate:"}),r.jsxs("div",{className:"checkBox",children:[r.jsxs("label",{children:[r.jsx("input",{type:"radio",name:"gender",value:"woman",checked:d,onChange:A})," For woman"]}),r.jsxs("label",{children:[r.jsx("input",{type:"radio",name:"gender",value:"man",checked:!d,onChange:A})," For man"]})]}),r.jsx("label",{className:"inputDescription",children:"Your weight in kilograms:"}),r.jsx("input",{className:"inputForm",placeholder:"0",onChange:v}),r.jsx("label",{className:"inputDescription",children:"The time of active participation in sports or other activities with a high physical. load in hours:"}),r.jsx("input",{className:"inputForm",placeholder:"0",onChange:L}),r.jsxs("div",{className:"requiredAmount",children:[r.jsx("p",{className:"amountDescription",children:"The required amount of water in liters per day:"}),r.jsxs("span",{className:"amount",children:[s," L"]})]}),r.jsx("h3",{children:"Write down how much water you will drink:"}),r.jsx("input",{className:"inputForm",placeholder:"0",onChange:W}),r.jsx("button",{className:"saveButton",type:"submit",children:"Save"})]})]})}),document.getElementById("modal-root"))},vi=()=>{const[t,e]=D.useState(!1),{waterRate:n}=We(wn),a=n/1e3,i=()=>{e(!1)},s=()=>{e(!0)};return r.jsx("div",{children:r.jsxs(ca,{children:[r.jsx("h2",{children:"My daily norma:"}),r.jsxs(da,{children:[r.jsxs("p",{children:[" ",a," L"]}),r.jsx("button",{type:"button",onClick:s,children:"Edit"}),t&&r.jsx(wi,{isOpen:t,onClose:i})]})]})})},ki=vi,Wn=t=>t.water.notes,Ai=t=>t.water.currentNote,Ni=t=>t.water.monthNotes,Ci=t=>t.water.isLoading,Ut=new Date,Yt=[Ut.getFullYear(),Ut.getMonth()+1],$t=(t=Yt,e)=>{const[n,a]=t;switch(e){case"forward":return a>=12?[n+1,1]:[n,a+1];case"back":return a<=1?[n-1,12]:[n,a-1];default:return Yt}},Si=h.div`
  width: 100%;
  margin-top: 15px;
  height: 490px;

  @media screen and (min-width: 768px) {
    height: 308px;
  }
`,Mi=h.h3`
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
  color: ${({theme:t})=>t.color.primaryBlack};

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 32px;
  }
`,Oi=h.div`
  display: flex;
  justify-content: space-between;
`,Ei=h.div`
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
    color: ${({theme:t})=>t.color.primaryAccent};
  }
`,Wi=h.ul`
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
`,zi=h.li`
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

    padding: ${({$percentage:t})=>t<100?"7px 6px":"7px"};
    background: ${({theme:t})=>t.color.primaryWhite};
    border-radius: 50%;
    border: none;
    border: ${({$percentage:t})=>t<100?"1px solid #ff9d43":"none"};
    box-shadow: ${({$isActive:t})=>t?" 0px 2px 4px 0px #407BFF4D":"none"};
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
    color: ${({theme:t})=>t.color.secondaryLightBlue};
  }
`,zn=["January","February","March","April","May","June","July","August","September","October","November","December"],Ti=t=>zn[t-1],ji=t=>{const e=D.useRef(null);return D.useEffect(()=>{const n=a=>{e.current&&!e.current.contains(a.target)&&t()};return document.addEventListener("click",n,!0),()=>{document.removeEventListener("click",n,!0)}},[t]),e},at={sm:68,md:74},Di={sm:5,md:10},it={md:69,xl:56},wt=(t,e)=>{const n=t/Di[e],a=Math.floor(n);switch(e){case"sm":return a===n?parseInt(n-1)*at[e]-12:parseInt(n)*at[e]-12;case"md":return a===n?parseInt(n-1)*at[e]:parseInt(n)*at[e];default:return 0}},Gt=(t,e)=>{const[n,a]=t%10===0?[9,!1]:[t%10-1,t%10<5];return a?n*it[e]+it[e]/4:n*it[e]-280+it[e]/4},Li=h.div`
  position: absolute;
  left: 50%;
  top: -194px;
  transform: translate(
    -50%,
    ${({$dayNumber:t})=>`${wt(t,"sm")}px`}
  );
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 280px;
  height: 188px;
  padding: 24px 13px;
  border-radius: 10px;
  background: ${({theme:t})=>t.color.primaryWhite};
  box-shadow: 0px 4px 4px 0px rgba(64, 123, 255, 0.3);

  p {
    color: ${({theme:t})=>t.color.primaryBlack};
    line-height: 1.25;

    span {
      color: ${({theme:t})=>t.color.primaryAccent};
      font-size: 18px;
      font-weight: 500;
      line-height: 1.33;
    }
  }

  @media screen and (min-width: 768px) {
    top: -190px;
    left: 0;
    transform: translate(
      ${({$dayNumber:t})=>`${Gt(t,"md")}px`},
      ${({$dayNumber:t})=>`${wt(t,"md")}px`}
    );
  }

  @media screen and (min-width: 1440px) {
    transform: translate(
      ${({$dayNumber:t})=>`${Gt(t,"xl")}px`},
      ${({$dayNumber:t})=>`${wt(t,"md")}px`}
    );
  }
`,Pi=h.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  p {
    color: ${({theme:t})=>t.color.primaryAccent};
    font-size: 16px;
    line-height: 1.25;
  }
`,Ri=({currentDay:t,close:e})=>{const n=ji(e),{date:a,percent:i,quantity:s,waterRate:f}=t,d={dailyNorma:f??0,percent:i??0},p=zn[(a==null?void 0:a.month)-1],m=d.dailyNorma/1e3;return r.jsxs(Li,{ref:n,$dayNumber:a.day,children:[r.jsx(Pi,{children:r.jsxs("p",{children:[r.jsxs("span",{children:[a==null?void 0:a.day,", "]}),r.jsx("span",{children:p})]})}),r.jsxs("p",{children:["Daily norma : ",r.jsxs("span",{children:[m,"L"]})]}),r.jsxs("p",{children:["Fulfillment of the daily norm : ",r.jsxs("span",{children:[parseInt(d.percent),"%"]})]}),r.jsxs("p",{children:["How many servings of water : ",r.jsx("span",{children:s??0})]})]})},Fi=({monthData:t})=>{const[e,n]=D.useState(null),a=D.useCallback(()=>{n(null)},[]);return r.jsxs(Wi,{children:[e&&r.jsx(Ri,{currentDay:e,close:a}),t.map(i=>r.jsxs(zi,{onClick:()=>n(i),$percentage:i.percent,$isActive:(e==null?void 0:e.date.day)===i.date.day,children:[r.jsx("span",{className:"day",children:i.date.day}),r.jsxs("span",{className:"percentage",children:[parseInt(i.percent)||0,"%"]})]},i.date.day))]})},Ii=({changeDirection:t,month:e,year:n})=>{function a(i,s){const f=new Date,d=f.getFullYear(),p=f.getMonth()+1;return Number(s)>d||Number(s)===d&&Number(i)>=p}return r.jsxs(Oi,{children:[r.jsx(Mi,{children:"Month"}),r.jsxs(Ei,{children:[r.jsx("button",{className:"arrow arrow-left",onClick:()=>t("back"),type:"button",children:r.jsx("svg",{fill:"#407BFF",width:"14",height:"14",children:r.jsx("use",{href:`${Pt}#icon-arrow-left`})})}),r.jsxs("p",{className:"month__name",children:[Ti(e),", ",n]}),r.jsx("button",{className:`arrow arrow-right ${a(e,n)?"arrow-right-disabled":""}`,onClick:()=>t("forward"),type:"button",disabled:a(e,n),children:r.jsx("svg",{fill:`${a(e,n)?"#9ebbff":"#407BFF"}`,width:"14",height:"14",transform:"rotate(180)",children:r.jsx("use",{href:`${Pt}#icon-arrow-left`})})})]})]})},Bi=()=>{var p;const t=We(Ni),e=We(Ci),[n,a]=Zn(),i=je();let[s,f]=((p=n.get("date"))==null?void 0:p.split("_"))??$t();D.useEffect(()=>{i(ea({year:s.toString(),month:f.toString()}))},[i,s,f]);const d=D.useCallback(m=>{const b=$t([+s,+f],m);a({date:b.join("_")})},[a,s,f]);return r.jsxs(Si,{children:[r.jsx(Ii,{changeDirection:d,month:f,year:s}),e?r.jsx(ta,{}):r.jsx(Fi,{monthData:t})]})},Hi=Bi;var Tn={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Qt=Oe.createContext&&Oe.createContext(Tn),_i=["attr","size","title"];function Xi(t,e){if(t==null)return{};var n=Vi(t,e),a,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)a=s[i],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function Vi(t,e){if(t==null)return{};var n={},a=Object.keys(t),i,s;for(s=0;s<a.length;s++)i=a[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function lt(){return lt=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},lt.apply(this,arguments)}function Kt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,a)}return n}function ct(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Kt(Object(n),!0).forEach(function(a){qi(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Kt(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function qi(t,e,n){return e=Ui(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ui(t){var e=Yi(t,"string");return typeof e=="symbol"?e:String(e)}function Yi(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function jn(t){return t&&t.map((e,n)=>Oe.createElement(e.tag,ct({key:n},e.attr),jn(e.child)))}function Dn(t){return e=>Oe.createElement($i,lt({attr:ct({},t.attr)},e),jn(t.child))}function $i(t){var e=n=>{var{attr:a,size:i,title:s}=t,f=Xi(t,_i),d=i||n.size||"1em",p;return n.className&&(p=n.className),t.className&&(p=(p?p+" ":"")+t.className),Oe.createElement("svg",lt({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,a,f,{className:p,style:ct(ct({color:t.color||n.color},n.style),t.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),s&&Oe.createElement("title",null,s),t.children)};return Qt!==void 0?Oe.createElement(Qt.Consumer,null,n=>e(n)):e(Tn)}function Gi(t){return Dn({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"},child:[]}]})(t)}const Qi="/goit-group2-react-nodejs/assets/glass-00cf2fb8.svg",Ki="/goit-group2-react-nodejs/assets/edit-7f0c7b6a.svg",Ji="/goit-group2-react-nodejs/assets/delete-6bf30e40.svg",ve="/goit-group2-react-nodejs/assets/horodiukIcons-b8c45607.svg",Jt=h.select`
  margin-bottom: 24px;
  border: 1px solid #d7e3ff;
  border-radius: 6px;
  padding: 12px 10px;
  width: 90px;
  height: 44px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`,Zi=h.div``,Zt=h.div`
  position: relative;
  display: inline-block;
`,en=h.svg`
  position: absolute;
  top: 10px;
  right: 6px;
  pointer-events: none;
`;function Ln({onChange:t,value:e}){const n=Array.from(new Array(24),(p,m)=>m),a=[0,5,10,15,20,25,30,35,40,45,50,55],i=new Date(e);let s=i.getHours(),f=i.getMinutes();const d=a.reduce((p,m)=>m>=f&&(p===null||Math.abs(m-f)<Math.abs(p-f))?m:p,null);return d===null?(s=(s+1)%24,f=0):f=d,r.jsxs(Zi,{id:"selectTimeWrapper",children:[r.jsxs(Zt,{children:[r.jsx(Jt,{onChange:p=>t(p,"hour"),value:s,children:n.map(p=>r.jsx("option",{value:p,children:p.toString().padStart(2,"0")},p))}),r.jsx(en,{width:"24",height:"24",children:r.jsx("use",{href:`${ve}#icon-arrow`})})]}),":",r.jsxs(Zt,{children:[r.jsx(Jt,{onChange:p=>t(p,"minute"),value:f,children:a.map(p=>r.jsx("option",{value:p,children:p.toString().padStart(2,"0")},p))}),r.jsx(en,{width:"24",height:"24",children:r.jsx("use",{href:`${ve}#icon-arrow`})})]})]})}const eo=h.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  overflow: scroll;
`,to=h.div`
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
`,no=h.button`
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
`,ao=h.h2`
  font-weight: 500;
  font-size: 26px;
  line-height: 123%;
  color: #2f2f2f;
  margin-bottom: 24px;
`,tn=h.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  color: #2f2f2f;
  margin-bottom: 16px;
`,nn=h.p`
  font-size: 16px;
  line-height: 125%;
  color: #2f2f2f;
  margin-bottom: 12px;
`,an=h.button`
  box-shadow: 0 2px 4px 0 rgba(64, 123, 255, 0.2);
  background-color: #fff;
  border: 1px solid #9ebbff;
  border-radius: 30px;
  padding: 0px;
  width: 44px;
  height: 44px;
  cursor: pointer;
`,on=h.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 133%;
  color: #407bff;
  text-align: center;
`,io=h.input`
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
`,oo=h.input`
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
`,ro=h.button`
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
`,so=h.div`
  background-color: #d7e3ff;
  border-radius: 40px;
  padding: 6px 10px;
  height: 36px;
`,lo=h.div`
  display: flex;
  width: 194px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`,co=h.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
  }
`;Wt.setAppElement("#root");function Pn({onClose:t}){const[e,n]=D.useState(0),[a,i]=D.useState(!1),[s,f]=D.useState(0),d=je(),[p,m]=D.useState(new Date),b=(S,_="")=>{let I=new Date(p);switch(_){case"hour":I.setHours(parseInt(S.target.value,10));break;case"minute":I.setMinutes(Math.ceil(parseInt(S.target.value,10)/5)*5);break}m(I)},g=()=>{d(na({amount:e,date:Date(p)})),t()},A=()=>{n(e+50),f(e+50)},v=()=>{if(e-50<0){n(0),f(0);return}n(e-50),f(e-50)},L=()=>{n(s)},W=S=>{const{value:_}=S.target;if(_==="")f("");else{let I=parseInt(_,10);I=isNaN(I)||I<0?0:I,f(I)}},q=S=>{S.target.closest("#selectTimeWrapper")||(i(!1),S.target===S.currentTarget&&t())},T=D.useCallback(()=>{},[t]);D.useEffect(()=>(window.addEventListener("keydown",T),()=>{window.removeEventListener("keydown",T)}),[T]);const F=S=>{const _=new Date(S),I=G=>G.toString().padStart(2,"0");return`${I(_.getHours())}:${I(_.getMinutes())}`};return Mt.createPortal(r.jsx(eo,{onClick:q,children:r.jsxs(to,{children:[r.jsx(no,{onClick:t,children:r.jsx("svg",{width:"24",height:"24",children:r.jsx("use",{href:`${ve}#icon-close`})})}),r.jsx(ao,{children:"Add water"}),r.jsx(tn,{children:"Choose a value:"}),r.jsx(nn,{children:"Amount of water:"}),r.jsxs(lo,{children:[r.jsx(an,{onClick:v,children:r.jsx("svg",{width:"44",height:"44",children:r.jsx("use",{href:`${ve}#icon-minus`})})}),r.jsx(so,{children:r.jsxs(on,{children:[e,"ml"]})}),r.jsx(an,{onClick:A,children:r.jsx("svg",{width:"44",height:"44",children:r.jsx("use",{href:`${ve}#icon-plus`})})})]}),r.jsx(nn,{children:"Recording time:"}),a?r.jsx(Ln,{onChange:b,value:p}):r.jsx(io,{type:"text","aria-label":"Choose time",value:F(p),onChange:()=>{},onFocus:()=>i(!0)}),r.jsx(tn,{children:"Enter the value of the water used:"}),r.jsx(oo,{value:s,onBlur:L,onChange:W,type:"number"}),r.jsxs(co,{children:[r.jsxs(on,{children:[e,"ml"]}),r.jsx(ro,{onClick:g,type:"button",children:"Save"})]})]})}),document.getElementById("modal-root"))}const fo=h.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  overflow: scroll;
`,uo=h.div`
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
`,po=h.button`
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
`,mo=h.h2`
  font-weight: 500;
  font-size: 26px;
  line-height: 123%;
  color: #2f2f2f;
  margin-bottom: 24px;
`,rn=h.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  color: #2f2f2f;
  margin-bottom: 16px;
`,sn=h.p`
  font-size: 16px;
  line-height: 125%;
  color: #2f2f2f;
  margin-bottom: 12px;
`,ln=h.button`
  box-shadow: 0 2px 4px 0 rgba(64, 123, 255, 0.2);
  background-color: #fff;
  border: 1px solid #9ebbff;
  border-radius: 30px;
  padding: 0px;
  width: 44px;
  height: 44px;
  cursor: pointer;
`,cn=h.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 133%;
  color: #407bff;
  text-align: center;
`,xo=h.input`
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
`,ho=h.input`
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
`,go=h.button`
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
`,bo=h.div`
  background-color: #d7e3ff;
  border-radius: 40px;
  padding: 6px 10px;
  height: 36px;
`,yo=h.div`
  display: flex;
  width: 194px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`,wo=h.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
  }
`,vo=h.div`
  display: flex;
  gap: 14px;
  align-items: center;
  margin-bottom: 24px;
  border-radius: 10px;
  padding: 8px 24px;
  width: 256px;
  background-color: #ecf2ff;
`,ko=h.p`
  font-size: 18px;
  line-height: 133%;
  color: #407bff;
`,Ao=h.p`
  font-size: 16px;
  line-height: 125%;
  color: #2f2f2f;
`;Wt.setAppElement("#root");function dn({onClose:t}){const e=We(Ai),[n,a]=D.useState(e.amount),[i,s]=D.useState(!1),[f,d]=D.useState(0),p=je(),[m,b]=D.useState(e.date),g=(_,I="")=>{let G=new Date(m);switch(I){case"hour":G.setHours(parseInt(_.target.value,10));break;case"minute":G.setMinutes(Math.ceil(parseInt(_.target.value,10)/5)*5);break}b(G)},A=()=>{p(aa({_id:e._id,amount:n,date:Date(m)})),t()},v=()=>{a(n+50),d(n+50)},L=()=>{if(n-50<0){a(0),d(0);return}a(n-50),d(n-50)},W=()=>{a(f)},q=_=>{const{value:I}=_.target;if(I==="")d("");else{let G=parseInt(I,10);G=isNaN(G)||G<0?0:G,d(G)}},T=_=>{_.target.closest("#selectTimeWrapper")||(s(!1),_.target===_.currentTarget&&t())},F=D.useCallback(()=>{},[t]);D.useEffect(()=>(window.addEventListener("keydown",F),()=>{window.removeEventListener("keydown",F)}),[F]);const S=_=>{const I=new Date(_),G=B=>B.toString().padStart(2,"0");return`${G(I.getHours())}:${G(I.getMinutes())}`};return Mt.createPortal(r.jsx(fo,{onClick:T,children:r.jsxs(uo,{children:[r.jsx(po,{onClick:t,children:r.jsx("svg",{width:"24",height:"24",children:r.jsx("use",{href:`${ve}#icon-close`})})}),r.jsx(mo,{children:"Edit the entered amount of water"}),r.jsxs(vo,{children:[" ",r.jsx("svg",{width:"36",height:"36",children:r.jsx("use",{href:`${ve}#icon-glass`})}),r.jsxs(ko,{children:[e.amount,"ml"]}),r.jsx(Ao,{children:S(e.date)})]}),r.jsx(rn,{children:"Correct entered data:"}),r.jsx(sn,{children:"Amount of water:"}),r.jsxs(yo,{children:[r.jsx(ln,{onClick:L,children:r.jsx("svg",{width:"44",height:"44",children:r.jsx("use",{href:`${ve}#icon-minus`})})}),r.jsx(bo,{children:r.jsxs(cn,{children:[n,"ml"]})}),r.jsx(ln,{onClick:v,children:r.jsx("svg",{width:"44",height:"44",children:r.jsx("use",{href:`${ve}#icon-plus`})})})]}),r.jsx(sn,{children:"Recording time:"}),i?r.jsx(Ln,{onChange:g,value:m}):r.jsx(xo,{type:"text","aria-label":"Choose time",value:S(m),onChange:()=>{},onFocus:()=>s(!0)}),r.jsx(rn,{children:"Enter the value of the water used:"}),r.jsx(ho,{value:f,onBlur:W,onChange:q,type:"number"}),r.jsxs(wo,{children:[r.jsxs(cn,{children:[n,"ml"]}),r.jsx(go,{onClick:A,type:"button",children:"Save"})]})]})}),document.getElementById("modal-root"))}const No=h.div`
  padding: 0 24px 32px;
`,Co=h.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
    flex-direction: row-reverse;
  }
`,fn=h.button`
  display: inline-block;
  width: 100%;
  padding: 8px 30px;
  color: #fff;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  background-color: ${({theme:t})=>t.color.secondaryRed};
  box-shadow: ${({theme:t})=>t.boxShadowforButton.normalButton};
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    box-shadow: ${({theme:t})=>t.boxShadowforButton.hoverButton};
  }
  &:active {
    box-shadow: ${({theme:t})=>t.boxShadowforButton.activeButton};
  }

  &:last-of-type {
    color: ${({theme:t})=>t.color.accent};
    background-color: ${({theme:t})=>t.color.secondaryPowderBlue};
  }

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
    width: 160px;
    padding: 10px 30px;
  }
`,So=h.p`
  font-size: 18px;
  color: ${({theme:t})=>t.color.primaryBlack};
  line-height: 20px;
  font-weight: 500;

  margin-bottom: 24px;
`,Mo=({onClose:t,onShow:e,id:n})=>{const a=je(),i=()=>{a(oa(n)),t()};return r.jsx(ia,{onClose:t,onShow:e,title:"Delete Entry",children:r.jsxs(No,{children:[r.jsx(So,{children:"Are you sure you want to delete the entry?"}),r.jsxs(Co,{children:[r.jsx(fn,{onClick:i,children:"Delete"}),r.jsx(fn,{onClick:t,style:{color:"#407BFF"},children:"Cancel"})]})]})})},Oo=h.ul`
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
`,Eo=h.li`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: space-between;
`,Wo=h.div`
  display: flex;
  align-items: center;
`,zo=h.p`
  color: #407bff;
  font-size: 18px;
  line-height: 24px;
  margin-left: 12px;
`,To=h.p`
  margin-left: 12px;
  line-height: 24px;
  font-size: 12px;
  color: #2f2f2f;

  @media screen and (min-width: 768px) {
    margin-left: 16px;
  }
`,jo=h.h2`
  margin-bottom: 16px;
  color: #2f2f2f;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 32px;
  }
`,Do=h.button`
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
`,Lo=h.button`
  margin-right: 18px;
  background-color: transparent;
`,Po=h.button`
  background-color: transparent;
`;function ge(t){const e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new t.constructor(+t):typeof t=="number"||e==="[object Number]"||typeof t=="string"||e==="[object String]"?new Date(t):new Date(NaN)}function Te(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}const Rn=6048e5,Ro=864e5;let Fo={};function ut(){return Fo}function Je(t,e){var d,p,m,b;const n=ut(),a=(e==null?void 0:e.weekStartsOn)??((p=(d=e==null?void 0:e.locale)==null?void 0:d.options)==null?void 0:p.weekStartsOn)??n.weekStartsOn??((b=(m=n.locale)==null?void 0:m.options)==null?void 0:b.weekStartsOn)??0,i=ge(t),s=i.getDay(),f=(s<a?7:0)+s-a;return i.setDate(i.getDate()-f),i.setHours(0,0,0,0),i}function dt(t){return Je(t,{weekStartsOn:1})}function Fn(t){const e=ge(t),n=e.getFullYear(),a=Te(t,0);a.setFullYear(n+1,0,4),a.setHours(0,0,0,0);const i=dt(a),s=Te(t,0);s.setFullYear(n,0,4),s.setHours(0,0,0,0);const f=dt(s);return e.getTime()>=i.getTime()?n+1:e.getTime()>=f.getTime()?n:n-1}function un(t){const e=ge(t);return e.setHours(0,0,0,0),e}function pn(t){const e=ge(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function Io(t,e){const n=un(t),a=un(e),i=+n-pn(n),s=+a-pn(a);return Math.round((i-s)/Ro)}function Bo(t){const e=Fn(t),n=Te(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),dt(n)}function Ho(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function _o(t){if(!Ho(t)&&typeof t!="number")return!1;const e=ge(t);return!isNaN(Number(e))}function Xo(t){const e=ge(t),n=Te(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}const Vo={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},qo=(t,e,n)=>{let a;const i=Vo[t];return typeof i=="string"?a=i:e===1?a=i.one:a=i.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a};function vt(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const Uo={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Yo={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},$o={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Go={date:vt({formats:Uo,defaultWidth:"full"}),time:vt({formats:Yo,defaultWidth:"full"}),dateTime:vt({formats:$o,defaultWidth:"full"})},Qo={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Ko=(t,e,n,a)=>Qo[t];function Ue(t){return(e,n)=>{const a=n!=null&&n.context?String(n.context):"standalone";let i;if(a==="formatting"&&t.formattingValues){const f=t.defaultFormattingWidth||t.defaultWidth,d=n!=null&&n.width?String(n.width):f;i=t.formattingValues[d]||t.formattingValues[f]}else{const f=t.defaultWidth,d=n!=null&&n.width?String(n.width):t.defaultWidth;i=t.values[d]||t.values[f]}const s=t.argumentCallback?t.argumentCallback(e):e;return i[s]}}const Jo={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Zo={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},er={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},tr={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},nr={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},ar={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},ir=(t,e)=>{const n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},or={ordinalNumber:ir,era:Ue({values:Jo,defaultWidth:"wide"}),quarter:Ue({values:Zo,defaultWidth:"wide",argumentCallback:t=>t-1}),month:Ue({values:er,defaultWidth:"wide"}),day:Ue({values:tr,defaultWidth:"wide"}),dayPeriod:Ue({values:nr,defaultWidth:"wide",formattingValues:ar,defaultFormattingWidth:"wide"})};function Ye(t){return(e,n={})=>{const a=n.width,i=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],s=e.match(i);if(!s)return null;const f=s[0],d=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],p=Array.isArray(d)?sr(d,g=>g.test(f)):rr(d,g=>g.test(f));let m;m=t.valueCallback?t.valueCallback(p):p,m=n.valueCallback?n.valueCallback(m):m;const b=e.slice(f.length);return{value:m,rest:b}}}function rr(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function sr(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}function lr(t){return(e,n={})=>{const a=e.match(t.matchPattern);if(!a)return null;const i=a[0],s=e.match(t.parsePattern);if(!s)return null;let f=t.valueCallback?t.valueCallback(s[0]):s[0];f=n.valueCallback?n.valueCallback(f):f;const d=e.slice(i.length);return{value:f,rest:d}}}const cr=/^(\d+)(th|st|nd|rd)?/i,dr=/\d+/i,fr={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},ur={any:[/^b/i,/^(a|c)/i]},pr={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},mr={any:[/1/i,/2/i,/3/i,/4/i]},xr={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},hr={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},gr={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},br={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},yr={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},wr={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},vr={ordinalNumber:lr({matchPattern:cr,parsePattern:dr,valueCallback:t=>parseInt(t,10)}),era:Ye({matchPatterns:fr,defaultMatchWidth:"wide",parsePatterns:ur,defaultParseWidth:"any"}),quarter:Ye({matchPatterns:pr,defaultMatchWidth:"wide",parsePatterns:mr,defaultParseWidth:"any",valueCallback:t=>t+1}),month:Ye({matchPatterns:xr,defaultMatchWidth:"wide",parsePatterns:hr,defaultParseWidth:"any"}),day:Ye({matchPatterns:gr,defaultMatchWidth:"wide",parsePatterns:br,defaultParseWidth:"any"}),dayPeriod:Ye({matchPatterns:yr,defaultMatchWidth:"any",parsePatterns:wr,defaultParseWidth:"any"})},kr={code:"en-US",formatDistance:qo,formatLong:Go,formatRelative:Ko,localize:or,match:vr,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Ar(t){const e=ge(t);return Io(e,Xo(e))+1}function Nr(t){const e=ge(t),n=+dt(e)-+Bo(e);return Math.round(n/Rn)+1}function In(t,e){var b,g,A,v;const n=ge(t),a=n.getFullYear(),i=ut(),s=(e==null?void 0:e.firstWeekContainsDate)??((g=(b=e==null?void 0:e.locale)==null?void 0:b.options)==null?void 0:g.firstWeekContainsDate)??i.firstWeekContainsDate??((v=(A=i.locale)==null?void 0:A.options)==null?void 0:v.firstWeekContainsDate)??1,f=Te(t,0);f.setFullYear(a+1,0,s),f.setHours(0,0,0,0);const d=Je(f,e),p=Te(t,0);p.setFullYear(a,0,s),p.setHours(0,0,0,0);const m=Je(p,e);return n.getTime()>=d.getTime()?a+1:n.getTime()>=m.getTime()?a:a-1}function Cr(t,e){var d,p,m,b;const n=ut(),a=(e==null?void 0:e.firstWeekContainsDate)??((p=(d=e==null?void 0:e.locale)==null?void 0:d.options)==null?void 0:p.firstWeekContainsDate)??n.firstWeekContainsDate??((b=(m=n.locale)==null?void 0:m.options)==null?void 0:b.firstWeekContainsDate)??1,i=In(t,e),s=Te(t,0);return s.setFullYear(i,0,a),s.setHours(0,0,0,0),Je(s,e)}function Sr(t,e){const n=ge(t),a=+Je(n,e)-+Cr(n,e);return Math.round(a/Rn)+1}function X(t,e){const n=t<0?"-":"",a=Math.abs(t).toString().padStart(e,"0");return n+a}const Ae={y(t,e){const n=t.getFullYear(),a=n>0?n:1-n;return X(e==="yy"?a%100:a,e.length)},M(t,e){const n=t.getMonth();return e==="M"?String(n+1):X(n+1,2)},d(t,e){return X(t.getDate(),e.length)},a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(t,e){return X(t.getHours()%12||12,e.length)},H(t,e){return X(t.getHours(),e.length)},m(t,e){return X(t.getMinutes(),e.length)},s(t,e){return X(t.getSeconds(),e.length)},S(t,e){const n=e.length,a=t.getMilliseconds(),i=Math.trunc(a*Math.pow(10,n-3));return X(i,e.length)}},Re={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},mn={G:function(t,e,n){const a=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});case"GGGG":default:return n.era(a,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){const a=t.getFullYear(),i=a>0?a:1-a;return n.ordinalNumber(i,{unit:"year"})}return Ae.y(t,e)},Y:function(t,e,n,a){const i=In(t,a),s=i>0?i:1-i;if(e==="YY"){const f=s%100;return X(f,2)}return e==="Yo"?n.ordinalNumber(s,{unit:"year"}):X(s,e.length)},R:function(t,e){const n=Fn(t);return X(n,e.length)},u:function(t,e){const n=t.getFullYear();return X(n,e.length)},Q:function(t,e,n){const a=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return X(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,n){const a=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return X(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,n){const a=t.getMonth();switch(e){case"M":case"MM":return Ae.M(t,e);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,n){const a=t.getMonth();switch(e){case"L":return String(a+1);case"LL":return X(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(t,e,n,a){const i=Sr(t,a);return e==="wo"?n.ordinalNumber(i,{unit:"week"}):X(i,e.length)},I:function(t,e,n){const a=Nr(t);return e==="Io"?n.ordinalNumber(a,{unit:"week"}):X(a,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getDate(),{unit:"date"}):Ae.d(t,e)},D:function(t,e,n){const a=Ar(t);return e==="Do"?n.ordinalNumber(a,{unit:"dayOfYear"}):X(a,e.length)},E:function(t,e,n){const a=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});case"EEEE":default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,n,a){const i=t.getDay(),s=(i-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(s);case"ee":return X(s,2);case"eo":return n.ordinalNumber(s,{unit:"day"});case"eee":return n.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(i,{width:"short",context:"formatting"});case"eeee":default:return n.day(i,{width:"wide",context:"formatting"})}},c:function(t,e,n,a){const i=t.getDay(),s=(i-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(s);case"cc":return X(s,e.length);case"co":return n.ordinalNumber(s,{unit:"day"});case"ccc":return n.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(i,{width:"narrow",context:"standalone"});case"cccccc":return n.day(i,{width:"short",context:"standalone"});case"cccc":default:return n.day(i,{width:"wide",context:"standalone"})}},i:function(t,e,n){const a=t.getDay(),i=a===0?7:a;switch(e){case"i":return String(i);case"ii":return X(i,e.length);case"io":return n.ordinalNumber(i,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});case"iiii":default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,n){const i=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(t,e,n){const a=t.getHours();let i;switch(a===12?i=Re.noon:a===0?i=Re.midnight:i=a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(t,e,n){const a=t.getHours();let i;switch(a>=17?i=Re.evening:a>=12?i=Re.afternoon:a>=4?i=Re.morning:i=Re.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){let a=t.getHours()%12;return a===0&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return Ae.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getHours(),{unit:"hour"}):Ae.H(t,e)},K:function(t,e,n){const a=t.getHours()%12;return e==="Ko"?n.ordinalNumber(a,{unit:"hour"}):X(a,e.length)},k:function(t,e,n){let a=t.getHours();return a===0&&(a=24),e==="ko"?n.ordinalNumber(a,{unit:"hour"}):X(a,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):Ae.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getSeconds(),{unit:"second"}):Ae.s(t,e)},S:function(t,e){return Ae.S(t,e)},X:function(t,e,n){const a=t.getTimezoneOffset();if(a===0)return"Z";switch(e){case"X":return hn(a);case"XXXX":case"XX":return Me(a);case"XXXXX":case"XXX":default:return Me(a,":")}},x:function(t,e,n){const a=t.getTimezoneOffset();switch(e){case"x":return hn(a);case"xxxx":case"xx":return Me(a);case"xxxxx":case"xxx":default:return Me(a,":")}},O:function(t,e,n){const a=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+xn(a,":");case"OOOO":default:return"GMT"+Me(a,":")}},z:function(t,e,n){const a=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+xn(a,":");case"zzzz":default:return"GMT"+Me(a,":")}},t:function(t,e,n){const a=Math.trunc(t.getTime()/1e3);return X(a,e.length)},T:function(t,e,n){const a=t.getTime();return X(a,e.length)}};function xn(t,e=""){const n=t>0?"-":"+",a=Math.abs(t),i=Math.trunc(a/60),s=a%60;return s===0?n+String(i):n+String(i)+e+X(s,2)}function hn(t,e){return t%60===0?(t>0?"-":"+")+X(Math.abs(t)/60,2):Me(t,e)}function Me(t,e=""){const n=t>0?"-":"+",a=Math.abs(t),i=X(Math.trunc(a/60),2),s=X(a%60,2);return n+i+e+s}const gn=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},Bn=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},Mr=(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],a=n[1],i=n[2];if(!i)return gn(t,e);let s;switch(a){case"P":s=e.dateTime({width:"short"});break;case"PP":s=e.dateTime({width:"medium"});break;case"PPP":s=e.dateTime({width:"long"});break;case"PPPP":default:s=e.dateTime({width:"full"});break}return s.replace("{{date}}",gn(a,e)).replace("{{time}}",Bn(i,e))},Or={p:Bn,P:Mr},Er=/^D+$/,Wr=/^Y+$/,zr=["D","DD","YY","YYYY"];function Tr(t){return Er.test(t)}function jr(t){return Wr.test(t)}function Dr(t,e,n){const a=Lr(t,e,n);if(console.warn(a),zr.includes(t))throw new RangeError(a)}function Lr(t,e,n){const a=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${a} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Pr=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Rr=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Fr=/^'([^]*?)'?$/,Ir=/''/g,Br=/[a-zA-Z]/;function Hr(t,e,n){var b,g,A,v,L,W,q,T;const a=ut(),i=(n==null?void 0:n.locale)??a.locale??kr,s=(n==null?void 0:n.firstWeekContainsDate)??((g=(b=n==null?void 0:n.locale)==null?void 0:b.options)==null?void 0:g.firstWeekContainsDate)??a.firstWeekContainsDate??((v=(A=a.locale)==null?void 0:A.options)==null?void 0:v.firstWeekContainsDate)??1,f=(n==null?void 0:n.weekStartsOn)??((W=(L=n==null?void 0:n.locale)==null?void 0:L.options)==null?void 0:W.weekStartsOn)??a.weekStartsOn??((T=(q=a.locale)==null?void 0:q.options)==null?void 0:T.weekStartsOn)??0,d=ge(t);if(!_o(d))throw new RangeError("Invalid time value");let p=e.match(Rr).map(F=>{const S=F[0];if(S==="p"||S==="P"){const _=Or[S];return _(F,i.formatLong)}return F}).join("").match(Pr).map(F=>{if(F==="''")return{isToken:!1,value:"'"};const S=F[0];if(S==="'")return{isToken:!1,value:_r(F)};if(mn[S])return{isToken:!0,value:F};if(S.match(Br))throw new RangeError("Format string contains an unescaped latin alphabet character `"+S+"`");return{isToken:!1,value:F}});i.localize.preprocessor&&(p=i.localize.preprocessor(d,p));const m={firstWeekContainsDate:s,weekStartsOn:f,locale:i};return p.map(F=>{if(!F.isToken)return F.value;const S=F.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&jr(S)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&Tr(S))&&Dr(S,e,String(t));const _=mn[S[0]];return _(d,S,i.localize,m)}).join("")}function _r(t){const e=t.match(Fr);return e?e[1].replace(Ir,"'"):t}const Xr=t=>Hr(new Date(t),"p"),Vr=()=>{const[t,e]=D.useState(!1),[n,a]=D.useState(!1),i=je(),[s,f]=D.useState(!1),d=We(Wn);console.log(d);const p=()=>{e(!1)},m=()=>{e(!0)},b=()=>{a(!1)},g=({amount:L,date:W,_id:q})=>{a(!0),i(ra({amount:L,date:W,_id:q}))},A=()=>{f(!1)},v=()=>{f(!0)};return r.jsxs("div",{children:[r.jsxs("div",{children:[r.jsx(jo,{children:"Today"}),r.jsxs(Oo,{children:[d.length>0&&d.map(({_id:L,amount:W,date:q})=>r.jsx(r.Fragment,{children:r.jsxs(Eo,{children:[r.jsxs(Wo,{children:[r.jsx("img",{src:Qi,alt:"Icon glass"}),r.jsxs(zo,{children:[W," ml"]}),r.jsx(To,{children:Xr(q)})]}),r.jsxs("div",{children:[r.jsx(Lo,{type:"button",onClick:()=>g({_id:L,amount:W,date:q}),children:r.jsx("img",{src:Ki,alt:"Icon glass"})}),r.jsx(Po,{type:"button",onClick:v,children:r.jsx("img",{src:Ji,alt:"Icon glass"})}),n&&r.jsx(dn,{isOpen:n,onClose:b}),s&&r.jsx(Mo,{onShow:s,onClose:A,id:L})]})]},L)})),n&&r.jsx(dn,{isOpen:n,onClose:b})]})]}),r.jsxs(Do,{type:"button",onClick:m,children:[r.jsx(Gi,{})," Add Water"]}),t&&r.jsx(Pn,{isOpen:t,onClose:p})]})},qr=Vr;function Ur(t){return Dn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"16"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"16",y2:"12"},child:[]}]})(t)}const Yr=h.div`
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
`,$r=h.div`
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
`,Gr=h.input`
  &[type='range'] {
    width: 100%;
    height: 8px;
    background: linear-gradient(
      to right,
      #9ebbff 0%,
      #9ebbff ${t=>t.value}%,
      #d7e3ff ${t=>t.value}%,
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
`,Qr=h.div`
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
`,Kr=h.button`
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
`,Jr=()=>{const[t,e]=D.useState(!1),[n,a]=D.useState(0),i=We(Wn),{waterRate:s}=We(wn);D.useEffect(()=>{const p=i.reduce((b,g)=>b+g.amount,0),m=Math.round(p/s*100);a(m)},[i,s]);const f=()=>{e(!1)},d=()=>{e(!0)};return r.jsxs(Yr,{children:[r.jsxs($r,{children:[r.jsx("h2",{children:"Today"}),r.jsx(Gr,{value:n,type:"range",min:"0",max:"100"}),r.jsxs(Qr,{children:[r.jsx("p",{children:"0%"}),r.jsx("p",{children:"50%"}),r.jsx("p",{children:"100%"})]})]}),r.jsxs(Kr,{onClick:d,type:"button",children:[r.jsx(Ur,{}),"Add Water"]}),t&&r.jsx(Pn,{isOpen:t,onClose:f})]})},Zr=Jr,es="/goit-group2-react-nodejs/assets/bottleHomeScreenDesk-630fd92f.png",ts="/goit-group2-react-nodejs/assets/bottleHomeScreenDesk2x@2x-51f4e9e6.png",ns="/goit-group2-react-nodejs/assets/bottleHomeScreenTab-2759a74b.png",as="/goit-group2-react-nodejs/assets/bottleHomeScreenTab@2x-805003a0.png",is="/goit-group2-react-nodejs/assets/bottleHomeScreenMob-fe8938bc.png",os="/goit-group2-react-nodejs/assets/bottleHomeScreenMob2x@2x-9640a1cb.png",rs="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAUwCAMAAAAFI3xKAAAA21BMVEUAAADH1/+fvP+vyf/H2P/H2P+euf/I1v/G1//F3P/G1//H1v/H1/+fu/+duv+fvP/H2P+fvP+gvP+euv+fu//F1v/H1/+eu//Fz//H1//G1v/F0f/H1/+fvP+fuv/I1//F2P+fvP/H1//H1//H1f/H2f/H1//H2P+eu/+euv/w9P/t7//t8v+euv/t8v+fvP/v8/+cuv/H2f/s8f/s8v/t8//v8//G2P+fuv/J2P/v9P/s8//t8//t8//u8//t8f+eu//J2P/t8//r8f/s8//u8//r8//G1//s8v/T/+bSAAAAR3RSTlMAsrILbyAWpy0W35x9hSynWZybQ2RDv1kQkE4Wn29vP++QX2RYN4abTjcfEN9C73o/IYXfv48vz5ybb7+ff19/e0LPz69PQNkZ8PsAAAouSURBVHja7NuxkoMgEAbg/QeZlcHChuK0JGqfLmXe/6UuelfkJgEJNFf8X6flDi7usggVMSEOXgH4dZis0EfMtOKPreuFSs1R8WoLQiXMRbHzMVizP9slfmG3zUKneo8HHZ08c+F4fRE6Mf2Ez8iL4LkIz0U8RCNvjYzgmQ6ABkmxHtiEkkYANytpzgNC2fg5yXGeAUyaAaiTPOeFEjyASc6wqst9wJ1QrdkfCZBaFuBdqJoHbkLVFmbA9hqEGbCBAl9C1SyAKFQtAFiEmtpYPPVoMHAPaXMF+1QM4AcYwP/myhzYXoiw09fYi+HkQYPAXkIbB0CF6nmWIm0iuwltegBqhKpdOXzVvg8rJ4cat5FVqFpfNkHJtmvSgIJyZObfYpLxANTm48fprAyrZ2vQcj4w6458HpyUbcO8e+46wzwAPD0+sSh23Zy6PjKwWslzHodukWd9VPCiSJkRv9Zx6Z1zdpkGxeHGfk0J1+EtHfn5frNvBykIw0AUhgd0oeiiGzceoYYSSOui2gq1ytz/RLrSUrOYNLj7vyM8XpgwIeYIiS/T6rDfTdPjt+sC282xKPbrdXHgwRMAAAAAgDl/q4PqfexLQbpzrR8NESZrdSqcBUluOtMLcvLTig4m8PornARWQSM6gdFDYyoqaHXVKC+wCRrVCExOGjcKTEqNc4KsAAdB1hG+CGwcQ+Qv15iHwMYzQzLV+sY+ZjlPATO1OlexlE7SsQ7M1FY64ehfsvL6rV/HJmuJsh8H54bmSXwAAAAA8GIPDgQAAAAAgPxfG0FVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWG/7lIQhIIwgM56TERIe1CrBylm/ysKIsL7eJV6OmcJw/x883NNcwr26ocuM9dbsMdpzI9zE9Rb86u7BLXuuXG2CWs1WbgGdaYstEGdIUtm+GABnREF/K8lS0GdPgtzUKnNrWdwpAXH4EgSnIWYPfo23zpvyF6PcZ6XSfsBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvduwltWEgCAJoG2QQg9aDFAQSuoSP0Pe/USAQ8pvFKI6DF+8doTbdVQAAAAAAT2oe1pK512UMzpunPd9VEZ42lvxsCk4Z9/xqDU647vndEvQr+dNL0OvIhjIHnUq2HEGfLZtq0GfKpj3oc8m2a9ClZtsWCPA/rNmmEXcaHJGHvDGXoNPNI/2IKhd0q27wfa5vbdikek+C8vvLBPchOOv4iLBqwb+yLbWU2zpYUgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADglV27120UiKIAfK8Ya0C4oKEwlI7t3t2W+/4vtZE3xUYxGCJtEen7GvqjM3d+BAAAAAAAAAAAAAAAAD9dd2jbQxN8RzMdaz6cShvs1LzVzOyPpVxPmXkbgz0uNfM6NR9hjtfMMgebDZmnNv7R9nk7BBuVzPPXTKsEt/fvLb6YslrFm4yP/J4leHOi2WDus8RT53wLXhqydvFUU6sKvtZnWcxWBTdNwC5isYLBC8e8xqJ7utS90ucQi6acglVN5iUWXbIEqw65tkq7vAarWgH+zwa2AnylyxzXZuAxWFfzHIvOOQTr7tnHolNegnXTyhCcM12GX2lyeaMojoEblMUKzukmt0FXFx5Om14Bt07B4/Nq1i7Y4J5ZmmdL+3ewRXPKvM3xyXxKr6m7Eswyf/pPQX67DPnuOB7iXTeWmvnLBrxLV/Kh9n8/gxP0/gj7/HAV3/c07TgO00V6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8Ic9O0htGAaiAKqADUV4bZQgSPAlfIS5/43aTWnTaiFbkE3eO8LwJc2MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOC9lKmueb1MH4kT5jW+7VviqCl+qyVxSI1neU4ccI2/sgwesMV/10S3HA33RHcAW9ZEpz2a3IKdSrTpBjvdo21JdNmirSYU8BVu8UUneN7sERmUo8k43GuJlj3RqTyc4DGLSW7QGmEhOKLkePbwMXJMqfI3aMs/8VssYs641T0i8mVSPgAAAAAAAACAT/bgQAAAAAAAyP+1EVRVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVdi1Y9XYYSAKw8MRqJOEbYEqG9TZxbJsd8u8/1Pd3RACCZHkbAik+L92u8NoZ0YWAAAAAOAvc7djWY7oDE+IedKbukXD9yxBr6Yp6WG+GM6LVVLKh7c7F/cgafaGk4qk8OHU+lVSMZzhVintdvc5wivt5IzaOK5FqoahLFVnX7lIm2GgSLMzayW4G7q8lHynOhO9uG+VLtZWFQz9ApytI0osJcMC7An0kR4nzda1KDEMth3DQcUlHYaWrGE8QdnQEiQ3ypg+3DFJNrDon6FF43QWyUCAv0RKBPgT07iJFP4DO+p4U3uhC3fk8X3VxBzYsWhUXzexifQXNd1Gtw3swh0vg2XYc6vfF9UvwZX7wIEg1U6+FOCIT1Ju/jhJfBMZ2CWVVn68TjhhlVQa+TEDnuCqpKu3z44kVUaYE9xV0rzbBzFICuR3TtHdvMX3SJcgcX6/wU96SGErJW9VDzMD4BMvVB94ofocX4LeTJnqe46P8VhutA4AAAAAAAAAAAAAAAAAAAAAAAAAAID/7dlNi+JAFIXhOycaREyKJOLHYKL2ShcS3M2yd/n//2jSjAwq+agkNPTifXbi7nDqVnkFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAIEFWJE5y5+IWGIaKS31JEqdaERqGCNaSoiy0WhDnibSmhQPc3xPLEqWU0NvdKY3tRZgrvRu8hE7nwN5t6aCnMFEamDUlyBz0kbdVLdfa0CuUbtYocOIQexXQWmypoG8B2yromIJ9MinoaGdm6PapqCNdznCvc1dGoc6GbtLF2umPoZuUdX5rIMBv5bS1ViFHuFei0lrFigzdcjn7wq/hkTIp7qhnbOgWOEXt4aaGPuv2CibaGvqE7rE4ZSc90lYqrMFVuhg8RGo6qrFTafARJlIZ2quL+EtkUILp7aV+kXRmAHoLcknp5f74lEWScvo3RJao5qKyKBPV0qthmCzSf9GF+o0QXrdFEX2uLww/AAAAAAAAAACAH23+sVqtZkfDGLvZpvrndJgbhvp9qp4Q4VD76tWSBAc5VO9OC4O3VVWjg6MtqiYbg6dl1Yj3jKdjVVHBaTdIC6bglBNcmxk87Ko2B8P4EVj7ZfALkFtkigUBftcM3Bsm3cIfBh973oHTHHnFTLShgNPMT1wh08ya9oE7g7cV+9SJZm+neEN+A82fl1on9jAjLA7LR/tmjL+RdsfjcUF6AAAAAAAAAAA8+QuvE3xjFcspUAAAAABJRU5ErkJggg==",ss="/goit-group2-react-nodejs/assets/backgroundElementHomeScreenTab-4de5d48f.png",ls=h.div`
  background-size: cover;
  background: url(${rs});
  height: max-content;
  background-repeat: no-repeat;
  min-height: calc(100% - 64px);

  @media screen and (min-width: 768px) {
    background: url(${ss});
    min-height: calc(100% - 80px);
  }

  @media screen and (min-width: 1440px) {
    background: url(${la});
    min-height: calc(100% - 72px);
  }
`,cs=h.div`
  margin-bottom: 40px;
  margin-top: 20px;
  background-size: 280px 208px;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${is});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 440px;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${os});
  }

  @media screen and (min-width: 768px) {
    background-size: 518px 386px;
    background-position: calc(50% + 9px) 8px;
    height: 492px;
    background-image: url(${ns});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background: url(${as});
      background-size: 518px 386px;
      background-repeat: no-repeat;
    }
  }

  @media screen and (min-width: 1440px) {
    background-size: 738px 548px;
    background-position: calc(50% + 10px) 46px;
    height: 680px;
    background-image: url(${es});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${ts});
    }
  }
`,ds=h.div`
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
`,fs=h.div`
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
`;function ms(){const t=je();return D.useEffect(()=>{t(sa())},[t]),r.jsx(ls,{children:r.jsxs(ds,{children:[r.jsxs(cs,{children:[r.jsx(ki,{}),r.jsx(Zr,{})]}),r.jsxs(fs,{children:[r.jsx(qr,{}),r.jsx(Hi,{})]})]})})}export{ms as default};
