import{n as g,e as yt,g as xn,r as F,a as Be,j as r,f as Gn,h as ze,i as hn,s as jt,b as Qn,k as Kn,L as Jn,R as We,p as gn,l as Zn,m as ea,o as bn,q as ta,t as na,B as aa,v as oa}from"./index-9862af10.js";import{b as ia}from"./bg_element_des@1x-1805b66c.js";const ra=g.div`
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
`,sa=g.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,la=g.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`,ca=g.div`
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
`;var yn={exports:{}};(function(t){(function(e,n){t.exports=n(e)})(typeof yt>"u"?typeof window>"u"?yt:window:yt,function(e){if(typeof e>"u"&&typeof e.document>"u")return!1;var n,a,o,s,d,f=`

Visit documentation page to learn more: https://notiflix.github.io/documentation`,p='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',m={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},b={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},h={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},N={ID:"NotiflixReportWrap",className:"notiflix-report",width:"320px",backgroundColor:"#f8f8f8",borderRadius:"25px",rtl:!1,zindex:4002,backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",backOverlayClickToClose:!1,fontFamily:"Quicksand",svgSize:"110px",plainText:!0,titleFontSize:"16px",titleMaxLength:34,messageFontSize:"13px",messageMaxLength:400,buttonFontSize:"14px",buttonMaxLength:34,cssAnimation:!0,cssAnimationDuration:360,cssAnimationStyle:"fade",success:{svgColor:"#32c682",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#32c682",buttonColor:"#fff",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{svgColor:"#ff5549",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#ff5549",buttonColor:"#fff",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{svgColor:"#eebf31",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#eebf31",buttonColor:"#fff",backOverlayColor:"rgba(238,191,49,0.2)"},info:{svgColor:"#26c0d3",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#26c0d3",buttonColor:"#fff",backOverlayColor:"rgba(38,192,211,0.2)"}},w={Show:"Show",Ask:"Ask",Prompt:"Prompt"},I={ID:"NotiflixConfirmWrap",className:"notiflix-confirm",width:"300px",zindex:4003,position:"center",distance:"10px",backgroundColor:"#f8f8f8",borderRadius:"25px",backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,cssAnimationStyle:"fade",plainText:!0,titleColor:"#32c682",titleFontSize:"16px",titleMaxLength:34,messageColor:"#1e1e1e",messageFontSize:"14px",messageMaxLength:110,buttonsFontSize:"15px",buttonsMaxLength:34,okButtonColor:"#f8f8f8",okButtonBackground:"#32c682",cancelButtonColor:"#f8f8f8",cancelButtonBackground:"#a9a9a9"},z={Standard:"Standard",Hourglass:"Hourglass",Circle:"Circle",Arrows:"Arrows",Dots:"Dots",Pulse:"Pulse",Custom:"Custom",Notiflix:"Notiflix"},Q={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},D={Standard:"Standard",Hourglass:"Hourglass",Circle:"Circle",Arrows:"Arrows",Dots:"Dots",Pulse:"Pulse"},B={ID:"NotiflixBlockWrap",querySelectorLimit:200,className:"notiflix-block",position:"absolute",zindex:1e3,backgroundColor:"rgba(255,255,255,0.9)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,svgSize:"45px",svgColor:"#383838",messageFontSize:"14px",messageMaxLength:34,messageColor:"#383838"},j=function(i){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549",`
`+i+f)},oe=function(i){return console.log("%c Notiflix Info ","padding:2px;border-radius:20px;color:#fff;background:#26c0d3",`
`+i+f)},ee=function(i){return i||(i="head"),e.document[i]!==null||(j(`
Notiflix needs to be appended to the "<`+i+'>" element, but you called it before the "<'+i+'>" element has been created.'),!1)},V=function(i,l){if(!ee("head"))return!1;if(i()!==null&&!e.document.getElementById(l)){var c=e.document.createElement("style");c.id=l,c.innerHTML=i(),e.document.head.appendChild(c)}},v=function(){var i={},l=!1,c=0;Object.prototype.toString.call(arguments[0])==="[object Boolean]"&&(l=arguments[0],c++);for(var y=function(C){for(var T in C)Object.prototype.hasOwnProperty.call(C,T)&&(i[T]=l&&Object.prototype.toString.call(C[T])==="[object Object]"?v(i[T],C[T]):C[T])};c<arguments.length;c++)y(arguments[c]);return i},H=function(i){var l=e.document.createElement("div");return l.innerHTML=i,l.textContent||l.innerText||""},le=function(i,l){i||(i="110px"),l||(l="#32c682");var c='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="'+i+'" height="'+i+'" fill="'+l+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';return c},Xe=function(i,l){i||(i="110px"),l||(l="#ff5549");var c='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="'+i+'" height="'+i+'" fill="'+l+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';return c},mt=function(i,l){i||(i="110px"),l||(l="#eebf31");var c='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="'+i+'" height="'+i+'" fill="'+l+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';return c},je=function(i,l){i||(i="110px"),l||(l="#26c0d3");var c='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="'+i+'" height="'+i+'" fill="'+l+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';return c},Le=function(i,l){i||(i="60px"),l||(l="#32c682");var c='<svg xmlns="http://www.w3.org/2000/svg" stroke="'+l+'" width="'+i+'" height="'+i+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>';return c},O=function(i,l){i||(i="60px"),l||(l="#32c682");var c='<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+l+'" width="'+i+'" height="'+i+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>';return c},S=function(i,l){i||(i="60px"),l||(l="#32c682");var c='<svg xmlns="http://www.w3.org/2000/svg" width="'+i+'" height="'+i+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+i+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+i+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+l+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>';return c},q=function(i,l){i||(i="60px"),l||(l="#32c682");var c='<svg xmlns="http://www.w3.org/2000/svg" fill="'+l+'" width="'+i+'" height="'+i+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>';return c},u=function(i,l){i||(i="60px"),l||(l="#32c682");var c='<svg xmlns="http://www.w3.org/2000/svg" fill="'+l+'" width="'+i+'" height="'+i+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>';return c},A=function(i,l){i||(i="60px"),l||(l="#32c682");var c='<svg xmlns="http://www.w3.org/2000/svg" stroke="'+l+'" width="'+i+'" height="'+i+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>';return c},Z=function(i,l,c){i||(i="60px"),l||(l="#f8f8f8"),c||(c="#32c682");var y='<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+i+'" height="'+i+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+l+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+c+'" stroke="'+c+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>';return y},te=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},U=0,ce=function(i,l,c,y){if(!ee("body"))return!1;n||ie.Notify.init({});var C=v(!0,n,{});if(typeof c=="object"&&!Array.isArray(c)||typeof y=="object"&&!Array.isArray(y)){var T={};typeof c=="object"?T=c:typeof y=="object"&&(T=y),n=v(!0,n,T)}var W=n[i.toLocaleLowerCase("en")];U++,typeof l!="string"&&(l="Notiflix "+i),n.plainText&&(l=H(l)),!n.plainText&&l.length>n.messageMaxLength&&(n=v(!0,n,{closeButton:!0,messageMaxLength:150}),l='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),l.length>n.messageMaxLength&&(l=l.substring(0,n.messageMaxLength)+"..."),n.fontAwesomeIconStyle==="shadow"&&(W.fontAwesomeIconColor=W.background),n.cssAnimation||(n.cssAnimationDuration=0);var x=e.document.getElementById(b.wrapID)||e.document.createElement("div");if(x.id=b.wrapID,x.style.width=n.width,x.style.zIndex=n.zindex,x.style.opacity=n.opacity,n.position==="center-center"?(x.style.left=n.distance,x.style.top=n.distance,x.style.right=n.distance,x.style.bottom=n.distance,x.style.margin="auto",x.classList.add("nx-flex-center-center"),x.style.maxHeight="calc((100vh - "+n.distance+") - "+n.distance+")",x.style.display="flex",x.style.flexWrap="wrap",x.style.flexDirection="column",x.style.justifyContent="center",x.style.alignItems="center",x.style.pointerEvents="none"):n.position==="center-top"?(x.style.left=n.distance,x.style.right=n.distance,x.style.top=n.distance,x.style.bottom="auto",x.style.margin="auto"):n.position==="center-bottom"?(x.style.left=n.distance,x.style.right=n.distance,x.style.bottom=n.distance,x.style.top="auto",x.style.margin="auto"):n.position==="right-bottom"?(x.style.right=n.distance,x.style.bottom=n.distance,x.style.top="auto",x.style.left="auto"):n.position==="left-top"?(x.style.left=n.distance,x.style.top=n.distance,x.style.right="auto",x.style.bottom="auto"):n.position==="left-bottom"?(x.style.left=n.distance,x.style.bottom=n.distance,x.style.top="auto",x.style.right="auto"):(x.style.right=n.distance,x.style.top=n.distance,x.style.left="auto",x.style.bottom="auto"),n.backOverlay){var L=e.document.getElementById(b.overlayID)||e.document.createElement("div");L.id=b.overlayID,L.style.width="100%",L.style.height="100%",L.style.position="fixed",L.style.zIndex=n.zindex-1,L.style.left=0,L.style.top=0,L.style.right=0,L.style.bottom=0,L.style.background=W.backOverlayColor||n.backOverlayColor,L.className=n.cssAnimation?"nx-with-animation":"",L.style.animationDuration=n.cssAnimation?n.cssAnimationDuration+"ms":"",e.document.getElementById(b.overlayID)||e.document.body.appendChild(L)}e.document.getElementById(b.wrapID)||e.document.body.appendChild(x);var k=e.document.createElement("div");k.id=n.ID+"-"+U,k.className=n.className+" "+W.childClassName+" "+(n.cssAnimation?"nx-with-animation":"")+" "+(n.useIcon?"nx-with-icon":"")+" nx-"+n.cssAnimationStyle+" "+(n.closeButton&&typeof c!="function"?"nx-with-close-button":"")+" "+(typeof c=="function"?"nx-with-callback":"")+" "+(n.clickToClose?"nx-notify-click-to-close":""),k.style.fontSize=n.fontSize,k.style.color=W.textColor,k.style.background=W.background,k.style.borderRadius=n.borderRadius,k.style.pointerEvents="all",n.rtl&&(k.setAttribute("dir","rtl"),k.classList.add("nx-rtl-on")),k.style.fontFamily='"'+n.fontFamily+'", '+p,n.cssAnimation&&(k.style.animationDuration=n.cssAnimationDuration+"ms");var X="";if(n.closeButton&&typeof c!="function"&&(X='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+W.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),!n.useIcon)k.innerHTML='<span class="nx-message">'+l+"</span>"+(n.closeButton?X:"");else if(n.useFontAwesome)k.innerHTML='<i style="color:'+W.fontAwesomeIconColor+"; font-size:"+n.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+W.fontAwesomeClassName+" "+(n.fontAwesomeIconStyle==="shadow"?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+l+"</span>"+(n.closeButton?X:"");else{var G="";i===m.Success?G='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+W.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':i===m.Failure?G='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+W.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':i===m.Warning?G='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+W.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':i===m.Info&&(G='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+W.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),k.innerHTML=G+'<span class="nx-message nx-with-icon">'+l+"</span>"+(n.closeButton?X:"")}if(n.position==="left-bottom"||n.position==="right-bottom"){var J=e.document.getElementById(b.wrapID);J.insertBefore(k,J.firstChild)}else e.document.getElementById(b.wrapID).appendChild(k);var $=e.document.getElementById(k.id);if($){var P,K,R=function(){$.classList.add("nx-remove");var E=e.document.getElementById(b.overlayID);E&&0>=x.childElementCount&&E.classList.add("nx-remove"),clearTimeout(P)},ue=function(){if($&&$.parentNode!==null&&$.parentNode.removeChild($),0>=x.childElementCount&&x.parentNode!==null){x.parentNode.removeChild(x);var E=e.document.getElementById(b.overlayID);E&&E.parentNode!==null&&E.parentNode.removeChild(E)}clearTimeout(K)};if(n.closeButton&&typeof c!="function"){var pe=e.document.getElementById(k.id).querySelector("span.nx-close-button");pe.addEventListener("click",function(){R();var E=setTimeout(function(){ue(),clearTimeout(E)},n.cssAnimationDuration)})}if((typeof c=="function"||n.clickToClose)&&$.addEventListener("click",function(){typeof c=="function"&&c(),R();var E=setTimeout(function(){ue(),clearTimeout(E)},n.cssAnimationDuration)}),!n.closeButton&&typeof c!="function"){var re=function(){P=setTimeout(function(){R()},n.timeout),K=setTimeout(function(){ue()},n.timeout+n.cssAnimationDuration)};re(),n.pauseOnHover&&($.addEventListener("mouseenter",function(){$.classList.add("nx-paused"),clearTimeout(P),clearTimeout(K)}),$.addEventListener("mouseleave",function(){$.classList.remove("nx-paused"),re()}))}}if(n.showOnlyTheLastOne&&0<U)for(var se,Y=e.document.querySelectorAll("[id^="+n.ID+"-]:not([id="+n.ID+"-"+U+"])"),Ae=0;Ae<Y.length;Ae++)se=Y[Ae],se.parentNode!==null&&se.parentNode.removeChild(se);n=v(!0,n,C)},ye=function(){return'[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},we=function(i,l,c,y,C,T){if(!ee("body"))return!1;a||ie.Report.init({});var W={};if(typeof C=="object"&&!Array.isArray(C)||typeof T=="object"&&!Array.isArray(T)){var x={};typeof C=="object"?x=C:typeof T=="object"&&(x=T),W=v(!0,a,{}),a=v(!0,a,x)}var L=a[i.toLocaleLowerCase("en")];typeof l!="string"&&(l="Notiflix "+i),typeof c!="string"&&(i===h.Success?c='"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein':i===h.Failure?c='"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford':i===h.Warning?c='"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk':i===h.Info&&(c='"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')),typeof y!="string"&&(y="Okay"),a.plainText&&(l=H(l),c=H(c),y=H(y)),a.plainText||(l.length>a.titleMaxLength&&(l="Possible HTML Tags Error",c='The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.',y="Okay"),c.length>a.messageMaxLength&&(l="Possible HTML Tags Error",c='The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.',y="Okay"),y.length>a.buttonMaxLength&&(l="Possible HTML Tags Error",c='The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.',y="Okay")),l.length>a.titleMaxLength&&(l=l.substring(0,a.titleMaxLength)+"..."),c.length>a.messageMaxLength&&(c=c.substring(0,a.messageMaxLength)+"..."),y.length>a.buttonMaxLength&&(y=y.substring(0,a.buttonMaxLength)+"..."),a.cssAnimation||(a.cssAnimationDuration=0);var k=e.document.createElement("div");k.id=N.ID,k.className=a.className,k.style.zIndex=a.zindex,k.style.borderRadius=a.borderRadius,k.style.fontFamily='"'+a.fontFamily+'", '+p,a.rtl&&(k.setAttribute("dir","rtl"),k.classList.add("nx-rtl-on")),k.style.display="flex",k.style.flexWrap="wrap",k.style.flexDirection="column",k.style.alignItems="center",k.style.justifyContent="center";var X="",G=a.backOverlayClickToClose===!0;a.backOverlay&&(X='<div class="'+a.className+"-overlay"+(a.cssAnimation?" nx-with-animation":"")+(G?" nx-report-click-to-close":"")+'" style="background:'+(L.backOverlayColor||a.backOverlayColor)+";animation-duration:"+a.cssAnimationDuration+'ms;"></div>');var J="";if(i===h.Success?J=le(a.svgSize,L.svgColor):i===h.Failure?J=Xe(a.svgSize,L.svgColor):i===h.Warning?J=mt(a.svgSize,L.svgColor):i===h.Info&&(J=je(a.svgSize,L.svgColor)),k.innerHTML=X+'<div class="'+a.className+"-content"+(a.cssAnimation?" nx-with-animation ":"")+" nx-"+a.cssAnimationStyle+'" style="width:'+a.width+"; background:"+a.backgroundColor+"; animation-duration:"+a.cssAnimationDuration+'ms;"><div style="width:'+a.svgSize+"; height:"+a.svgSize+';" class="'+a.className+'-icon">'+J+'</div><h5 class="'+a.className+'-title" style="font-weight:500; font-size:'+a.titleFontSize+"; color:"+L.titleColor+';">'+l+'</h5><p class="'+a.className+'-message" style="font-size:'+a.messageFontSize+"; color:"+L.messageColor+';">'+c+'</p><a id="NXReportButton" class="'+a.className+'-button" style="font-weight:500; font-size:'+a.buttonFontSize+"; background:"+L.buttonBackground+"; color:"+L.buttonColor+';">'+y+"</a></div>",!e.document.getElementById(k.id)){e.document.body.appendChild(k);var $=function(){var R=e.document.getElementById(k.id);R.classList.add("nx-remove");var ue=setTimeout(function(){R.parentNode!==null&&R.parentNode.removeChild(R),clearTimeout(ue)},a.cssAnimationDuration)},P=e.document.getElementById("NXReportButton");if(P.addEventListener("click",function(){typeof C=="function"&&C(),$()}),X&&G){var K=e.document.querySelector(".nx-report-click-to-close");K.addEventListener("click",function(){$()})}}a=v(!0,a,W)},xt=function(){return'[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*="-content"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-head"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*="-content"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*="-content"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},Ve=function(i,l,c,y,C,T,W,x,L){if(!ee("body"))return!1;o||ie.Confirm.init({});var k=v(!0,o,{});typeof L!="object"||Array.isArray(L)||(o=v(!0,o,L)),typeof l!="string"&&(l="Notiflix Confirm"),typeof c!="string"&&(c="Do you agree with me?"),typeof C!="string"&&(C="Yes"),typeof T!="string"&&(T="No"),typeof W!="function"&&(W=void 0),typeof x!="function"&&(x=void 0),o.plainText&&(l=H(l),c=H(c),C=H(C),T=H(T)),o.plainText||(l.length>o.titleMaxLength&&(l="Possible HTML Tags Error",c='The "plainText" option is "false" and the title content length is more than "titleMaxLength" option.',C="Okay",T="..."),c.length>o.messageMaxLength&&(l="Possible HTML Tags Error",c='The "plainText" option is "false" and the message content length is more than "messageMaxLength" option.',C="Okay",T="..."),(C.length||T.length)>o.buttonsMaxLength&&(l="Possible HTML Tags Error",c='The "plainText" option is "false" and the buttons content length is more than "buttonsMaxLength" option.',C="Okay",T="...")),l.length>o.titleMaxLength&&(l=l.substring(0,o.titleMaxLength)+"..."),c.length>o.messageMaxLength&&(c=c.substring(0,o.messageMaxLength)+"..."),C.length>o.buttonsMaxLength&&(C=C.substring(0,o.buttonsMaxLength)+"..."),T.length>o.buttonsMaxLength&&(T=T.substring(0,o.buttonsMaxLength)+"..."),o.cssAnimation||(o.cssAnimationDuration=0);var X=e.document.createElement("div");X.id=I.ID,X.className=o.className+(o.cssAnimation?" nx-with-animation nx-"+o.cssAnimationStyle:""),X.style.zIndex=o.zindex,X.style.padding=o.distance,o.rtl&&(X.setAttribute("dir","rtl"),X.classList.add("nx-rtl-on"));var G=typeof o.position=="string"?o.position.trim():"center";X.classList.add("nx-position-"+G),X.style.fontFamily='"'+o.fontFamily+'", '+p;var J="";o.backOverlay&&(J='<div class="'+o.className+"-overlay"+(o.cssAnimation?" nx-with-animation":"")+'" style="background:'+o.backOverlayColor+";animation-duration:"+o.cssAnimationDuration+'ms;"></div>');var $="";typeof W=="function"&&($='<a id="NXConfirmButtonCancel" class="nx-confirm-button-cancel" style="color:'+o.cancelButtonColor+";background:"+o.cancelButtonBackground+";font-size:"+o.buttonsFontSize+';">'+T+"</a>");var P="",K=null,R=void 0;if(i===w.Ask||i===w.Prompt){K=y||"";var ue=i===w.Ask||200<K.length?Math.ceil(1.5*K.length):250,pe=i===w.Prompt?'value="'+K+'"':"";P='<div><input id="NXConfirmValidationInput" type="text" '+pe+' maxlength="'+ue+'" style="font-size:'+o.messageFontSize+";border-radius: "+o.borderRadius+';" autocomplete="off" spellcheck="false" autocapitalize="none" /></div>'}if(X.innerHTML=J+'<div class="'+o.className+'-content" style="width:'+o.width+"; background:"+o.backgroundColor+"; animation-duration:"+o.cssAnimationDuration+"ms; border-radius: "+o.borderRadius+';"><div class="'+o.className+'-head"><h5 style="color:'+o.titleColor+";font-size:"+o.titleFontSize+';">'+l+'</h5><div style="color:'+o.messageColor+";font-size:"+o.messageFontSize+';">'+c+P+'</div></div><div class="'+o.className+'-buttons"><a id="NXConfirmButtonOk" class="nx-confirm-button-ok'+(typeof W=="function"?"":" nx-full")+'" style="color:'+o.okButtonColor+";background:"+o.okButtonBackground+";font-size:"+o.buttonsFontSize+';">'+C+"</a>"+$+"</div></div>",!e.document.getElementById(X.id)){e.document.body.appendChild(X);var re=e.document.getElementById(X.id),se=e.document.getElementById("NXConfirmButtonOk"),Y=e.document.getElementById("NXConfirmValidationInput");if(Y&&(Y.focus(),Y.setSelectionRange(0,(Y.value||"").length),Y.addEventListener("keyup",function(E){var Pe=E.target.value;if(i===w.Ask&&Pe!==K)E.preventDefault(),Y.classList.add("nx-validation-failure"),Y.classList.remove("nx-validation-success");else{i===w.Ask&&(Y.classList.remove("nx-validation-failure"),Y.classList.add("nx-validation-success"));var qe=(E.key||"").toLocaleLowerCase("en")==="enter"||E.keyCode===13;qe&&se.dispatchEvent(new Event("click"))}})),se.addEventListener("click",function(E){if(i===w.Ask&&K&&Y){var Pe=(Y.value||"").toString();if(Pe!==K)return Y.focus(),Y.classList.add("nx-validation-failure"),E.stopPropagation(),E.preventDefault(),E.returnValue=!1,E.cancelBubble=!0,!1;Y.classList.remove("nx-validation-failure")}typeof W=="function"&&(i===w.Prompt&&Y&&(R=Y.value||""),W(R)),re.classList.add("nx-remove");var qe=setTimeout(function(){re.parentNode!==null&&(re.parentNode.removeChild(re),clearTimeout(qe))},o.cssAnimationDuration)}),typeof W=="function"){var Ae=e.document.getElementById("NXConfirmButtonCancel");Ae.addEventListener("click",function(){typeof x=="function"&&(i===w.Prompt&&Y&&(R=Y.value||""),x(R)),re.classList.add("nx-remove");var E=setTimeout(function(){re.parentNode!==null&&(re.parentNode.removeChild(re),clearTimeout(E))},o.cssAnimationDuration)})}}o=v(!0,o,k)},ht=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},ve=function(i,l,c,y,C){if(!ee("body"))return!1;s||ie.Loading.init({});var T=v(!0,s,{});if(typeof l=="object"&&!Array.isArray(l)||typeof c=="object"&&!Array.isArray(c)){var W={};typeof l=="object"?W=l:typeof c=="object"&&(W=c),s=v(!0,s,W)}var x="";if(typeof l=="string"&&0<l.length&&(x=l),y){x=x.length>s.messageMaxLength?H(x).toString().substring(0,s.messageMaxLength)+"...":H(x).toString();var L="";0<x.length&&(L='<p id="'+s.messageID+'" class="nx-loading-message" style="color:'+s.messageColor+";font-size:"+s.messageFontSize+';">'+x+"</p>"),s.cssAnimation||(s.cssAnimationDuration=0);var k="";if(i===z.Standard)k=Le(s.svgSize,s.svgColor);else if(i===z.Hourglass)k=O(s.svgSize,s.svgColor);else if(i===z.Circle)k=S(s.svgSize,s.svgColor);else if(i===z.Arrows)k=q(s.svgSize,s.svgColor);else if(i===z.Dots)k=u(s.svgSize,s.svgColor);else if(i===z.Pulse)k=A(s.svgSize,s.svgColor);else if(i===z.Custom&&s.customSvgCode!==null&&s.customSvgUrl===null)k=s.customSvgCode||"";else if(i===z.Custom&&s.customSvgUrl!==null&&s.customSvgCode===null)k='<img class="nx-custom-loading-icon" width="'+s.svgSize+'" height="'+s.svgSize+'" src="'+s.customSvgUrl+'" alt="Notiflix">';else{if(i===z.Custom&&(s.customSvgUrl===null||s.customSvgCode===null))return j('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;k=Z(s.svgSize,"#f8f8f8","#32c682")}var X=parseInt((s.svgSize||"").replace(/[^0-9]/g,"")),G=e.innerWidth,J=X>=G?G-40+"px":X+"px",$='<div style="width:'+J+"; height:"+J+';" class="'+s.className+"-icon"+(0<x.length?" nx-with-message":"")+'">'+k+"</div>",P=e.document.createElement("div");if(P.id=Q.ID,P.className=s.className+(s.cssAnimation?" nx-with-animation":"")+(s.clickToClose?" nx-loading-click-to-close":""),P.style.zIndex=s.zindex,P.style.background=s.backgroundColor,P.style.animationDuration=s.cssAnimationDuration+"ms",P.style.fontFamily='"'+s.fontFamily+'", '+p,P.style.display="flex",P.style.flexWrap="wrap",P.style.flexDirection="column",P.style.alignItems="center",P.style.justifyContent="center",s.rtl&&(P.setAttribute("dir","rtl"),P.classList.add("nx-rtl-on")),P.innerHTML=$+L,!e.document.getElementById(P.id)&&(e.document.body.appendChild(P),s.clickToClose)){var K=e.document.getElementById(P.id);K.addEventListener("click",function(){P.classList.add("nx-remove");var pe=setTimeout(function(){P.parentNode!==null&&(P.parentNode.removeChild(P),clearTimeout(pe))},s.cssAnimationDuration)})}}else if(e.document.getElementById(Q.ID))var R=e.document.getElementById(Q.ID),ue=setTimeout(function(){R.classList.add("nx-remove");var pe=setTimeout(function(){R.parentNode!==null&&(R.parentNode.removeChild(R),clearTimeout(pe))},s.cssAnimationDuration);clearTimeout(ue)},C);s=v(!0,s,T)},Bn=function(i){typeof i!="string"&&(i="");var l=e.document.getElementById(Q.ID);if(l)if(0<i.length){i=i.length>s.messageMaxLength?H(i).substring(0,s.messageMaxLength)+"...":H(i);var c=l.getElementsByTagName("p")[0];if(c)c.innerHTML=i;else{var y=e.document.createElement("p");y.id=s.messageID,y.className="nx-loading-message nx-loading-message-new",y.style.color=s.messageColor,y.style.fontSize=s.messageFontSize,y.innerHTML=i,l.appendChild(y)}}else j("Where is the new message?")},Hn=function(){return'[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*="-icon"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*="-icon"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*="-message"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].nx-with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}'},gt=0,Se=function(i,l,c,y,C,T){var W;if(Array.isArray(c)){if(1>c.length)return j("Array of HTMLElements should contains at least one HTMLElement."),!1;W=c}else if(Object.prototype.isPrototypeOf.call(NodeList.prototype,c)){if(1>c.length)return j("NodeListOf<HTMLElement> should contains at least one HTMLElement."),!1;W=Array.prototype.slice.call(c)}else{var x=typeof c!="string"||1>(c||"").length||(c||"").length===1&&((c||"")[0]==="#"||(c||"")[0]===".");if(x)return j("The selector parameter must be a string and matches a specified CSS selector(s)."),!1;var L=e.document.querySelectorAll(c);if(1>L.length)return j('You called the "Notiflix.Block..." function with "'+c+'" selector, but there is no such element(s) in the document.'),!1;W=L}d||ie.Block.init({});var k=v(!0,d,{});if(typeof y=="object"&&!Array.isArray(y)||typeof C=="object"&&!Array.isArray(C)){var X={};typeof y=="object"?X=y:typeof C=="object"&&(X=C),d=v(!0,d,X)}var G="";typeof y=="string"&&0<y.length&&(G=y),d.cssAnimation||(d.cssAnimationDuration=0);var J=B.className;typeof d.className=="string"&&(J=d.className.trim());var $=typeof d.querySelectorLimit=="number"?d.querySelectorLimit:200,P=(W||[]).length>=$?$:W.length,K="nx-block-temporary-position";if(i){for(var R,ue=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr","html","head","title","script","style","iframe"],pe=0;pe<P;pe++)if(R=W[pe],R){if(-1<ue.indexOf(R.tagName.toLocaleLowerCase("en")))break;var re=R.querySelectorAll("[id^="+B.ID+"]");if(1>re.length){var se="";l&&(l===D.Hourglass?se=O(d.svgSize,d.svgColor):l===D.Circle?se=S(d.svgSize,d.svgColor):l===D.Arrows?se=q(d.svgSize,d.svgColor):l===D.Dots?se=u(d.svgSize,d.svgColor):l===D.Pulse?se=A(d.svgSize,d.svgColor):se=Le(d.svgSize,d.svgColor));var Y='<span class="'+J+'-icon" style="width:'+d.svgSize+";height:"+d.svgSize+';">'+se+"</span>",Ae="";0<G.length&&(G=G.length>d.messageMaxLength?H(G).substring(0,d.messageMaxLength)+"...":H(G),Ae='<span style="font-size:'+d.messageFontSize+";color:"+d.messageColor+';" class="'+J+'-message">'+G+"</span>"),gt++;var E=e.document.createElement("div");E.id=B.ID+"-"+gt,E.className=J+(d.cssAnimation?" nx-with-animation":""),E.style.position=d.position,E.style.zIndex=d.zindex,E.style.background=d.backgroundColor,E.style.animationDuration=d.cssAnimationDuration+"ms",E.style.fontFamily='"'+d.fontFamily+'", '+p,E.style.display="flex",E.style.flexWrap="wrap",E.style.flexDirection="column",E.style.alignItems="center",E.style.justifyContent="center",d.rtl&&(E.setAttribute("dir","rtl"),E.classList.add("nx-rtl-on")),E.innerHTML=Y+Ae;var Pe=e.getComputedStyle(R).getPropertyValue("position"),qe=typeof Pe=="string"?Pe.toLocaleLowerCase("en"):"relative",Wt=Math.round(1.25*parseInt(d.svgSize))+40,_n=R.offsetHeight||0,bt="";Wt>_n&&(bt="min-height:"+Wt+"px;");var Et="";Et=R.getAttribute("id")?"#"+R.getAttribute("id"):R.classList[0]?"."+R.classList[0]:(R.tagName||"").toLocaleLowerCase("en");var zt="",Tt=-1>=["absolute","relative","fixed","sticky"].indexOf(qe);if(Tt||0<bt.length){if(!ee("head"))return!1;Tt&&(zt="position:relative!important;");var Xn='<style id="Style-'+B.ID+"-"+gt+'">'+Et+"."+K+"{"+zt+bt+"}</style>",Dt=e.document.createRange();Dt.selectNode(e.document.head);var Vn=Dt.createContextualFragment(Xn);e.document.head.appendChild(Vn),R.classList.add(K)}R.appendChild(E)}}}else var qn=function(ne){var de=setTimeout(function(){ne.parentNode!==null&&ne.parentNode.removeChild(ne);var Ue=ne.getAttribute("id"),nt=e.document.getElementById("Style-"+Ue);nt&&nt.parentNode!==null&&nt.parentNode.removeChild(nt),clearTimeout(de)},d.cssAnimationDuration)},Un=function(ne){if(ne&&0<ne.length)for(var de,Ue=0;Ue<ne.length;Ue++)de=ne[Ue],de&&(de.classList.add("nx-remove"),qn(de));else oe(typeof c=="string"?'"Notiflix.Block.remove();" function called with "'+c+'" selector, but this selector does not have a "Block" element to remove.':'"Notiflix.Block.remove();" function called with "'+c+'", but this "Array<HTMLElement>" or "NodeListOf<HTMLElement>" does not have a "Block" element to remove.')},Yn=function(ne){var de=setTimeout(function(){ne.classList.remove(K),clearTimeout(de)},d.cssAnimationDuration+300)},$n=setTimeout(function(){for(var ne,de=0;de<P;de++)ne=W[de],ne&&(Yn(ne),re=ne.querySelectorAll("[id^="+B.ID+"]"),Un(re));clearTimeout($n)},T);d=v(!0,d,k)},ie={Notify:{init:function(i){n=v(!0,b,i),V(te,"NotiflixNotifyInternalCSS")},merge:function(i){return n?void(n=v(!0,n,i)):(j("You have to initialize the Notify module before call Merge function."),!1)},success:function(i,l,c){ce(m.Success,i,l,c)},failure:function(i,l,c){ce(m.Failure,i,l,c)},warning:function(i,l,c){ce(m.Warning,i,l,c)},info:function(i,l,c){ce(m.Info,i,l,c)}},Report:{init:function(i){a=v(!0,N,i),V(ye,"NotiflixReportInternalCSS")},merge:function(i){return a?void(a=v(!0,a,i)):(j("You have to initialize the Report module before call Merge function."),!1)},success:function(i,l,c,y,C){we(h.Success,i,l,c,y,C)},failure:function(i,l,c,y,C){we(h.Failure,i,l,c,y,C)},warning:function(i,l,c,y,C){we(h.Warning,i,l,c,y,C)},info:function(i,l,c,y,C){we(h.Info,i,l,c,y,C)}},Confirm:{init:function(i){o=v(!0,I,i),V(xt,"NotiflixConfirmInternalCSS")},merge:function(i){return o?void(o=v(!0,o,i)):(j("You have to initialize the Confirm module before call Merge function."),!1)},show:function(i,l,c,y,C,T,W){Ve(w.Show,i,l,null,c,y,C,T,W)},ask:function(i,l,c,y,C,T,W,x){Ve(w.Ask,i,l,c,y,C,T,W,x)},prompt:function(i,l,c,y,C,T,W,x){Ve(w.Prompt,i,l,c,y,C,T,W,x)}},Loading:{init:function(i){s=v(!0,Q,i),V(ht,"NotiflixLoadingInternalCSS")},merge:function(i){return s?void(s=v(!0,s,i)):(j("You have to initialize the Loading module before call Merge function."),!1)},standard:function(i,l){ve(z.Standard,i,l,!0,0)},hourglass:function(i,l){ve(z.Hourglass,i,l,!0,0)},circle:function(i,l){ve(z.Circle,i,l,!0,0)},arrows:function(i,l){ve(z.Arrows,i,l,!0,0)},dots:function(i,l){ve(z.Dots,i,l,!0,0)},pulse:function(i,l){ve(z.Pulse,i,l,!0,0)},custom:function(i,l){ve(z.Custom,i,l,!0,0)},notiflix:function(i,l){ve(z.Notiflix,i,l,!0,0)},remove:function(i){typeof i!="number"&&(i=0),ve(null,null,null,!1,i)},change:function(i){Bn(i)}},Block:{init:function(i){d=v(!0,B,i),V(Hn,"NotiflixBlockInternalCSS")},merge:function(i){return d?void(d=v(!0,d,i)):(j('You have to initialize the "Notiflix.Block" module before call Merge function.'),!1)},standard:function(i,l,c){Se(!0,D.Standard,i,l,c)},hourglass:function(i,l,c){Se(!0,D.Hourglass,i,l,c)},circle:function(i,l,c){Se(!0,D.Circle,i,l,c)},arrows:function(i,l,c){Se(!0,D.Arrows,i,l,c)},dots:function(i,l,c){Se(!0,D.Dots,i,l,c)},pulse:function(i,l,c){Se(!0,D.Pulse,i,l,c)},remove:function(i,l){typeof l!="number"&&(l=0),Se(!1,null,i,null,null,l)}}};return typeof e.Notiflix=="object"?v(!0,e.Notiflix,{Notify:ie.Notify,Report:ie.Report,Confirm:ie.Confirm,Loading:ie.Loading,Block:ie.Block}):{Notify:ie.Notify,Report:ie.Report,Confirm:ie.Confirm,Loading:ie.Loading,Block:ie.Block}})})(yn);var da=yn.exports;const Lt=xn(da),fa=({onClose:t})=>{const[e,n]=F.useState(0),[a,o]=F.useState(0),[s,d]=F.useState(0),[f,p]=F.useState(!0),[m,b]=F.useState(0),h=Be(),N=()=>{p(!f)},w=D=>{n(Number(D.target.value))},I=D=>{o(Number(D.target.value))};F.useEffect(()=>{d(f?Math.ceil((e*.03+a*.4)*100)/100<2?2:Math.ceil((e*.03+a*.4)*100)/100:Math.ceil((e*.04+a*.6)*100)/100<2?2:Math.ceil((e*.04+a*.6)*100)/100)},[f,e,a]);const z=D=>{b(Number(D.target.value))},Q=D=>{try{if(D.preventDefault(),m<2)return Lt.Notify.failure("The required amount of water in liters per day: 2L");if(m>15)return Lt.Notify.failure("The maximum amount of water in liters per day: 15L");h(Gn(m)),t()}catch(B){console.error("error",B)}};return F.useEffect(()=>{const D=B=>{B.key==="Escape"&&t()};window.addEventListener("keydown",D)},[t]),r.jsx(la,{onClick:t,children:r.jsxs(ca,{onClick:D=>D.stopPropagation(),children:[r.jsxs("div",{className:"headerDaily",children:[r.jsx("h2",{children:"My daily norma"}),r.jsx("button",{type:"button",className:"closeButton",onClick:t,children:r.jsx("svg",{width:"24",height:"24",children:r.jsx("use",{href:"/goit-group2-react-nodejs/src/assets/images/sprite/horodiukIcons.svg#icon-close"})})})]}),r.jsxs("div",{className:"formulaContainer",children:[r.jsxs("div",{className:"formula",children:[r.jsxs("div",{className:"formulaText",children:[r.jsx("p",{children:"For girl:"}),r.jsx("span",{className:"formulaSpan",children:"V=(M*0,03) + (T*0,4)"})]}),r.jsxs("div",{className:"formulaText",children:[r.jsx("p",{children:"For man:"}),r.jsx("span",{className:"formulaSpan",children:"V=(M*0,04) + (T*0,6)"})]})]}),r.jsxs("p",{className:"formulaDescription",children:[r.jsx("span",{className:"formulaStar",children:"*"})," V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]})]}),r.jsxs("form",{onSubmit:Q,children:[r.jsx("h3",{children:"Calculate your rate:"}),r.jsxs("div",{className:"checkBox",children:[r.jsxs("label",{children:[r.jsx("input",{type:"radio",name:"gender",value:"woman",checked:f,onChange:N})," For woman"]}),r.jsxs("label",{children:[r.jsx("input",{type:"radio",name:"gender",value:"man",checked:!f,onChange:N})," For man"]})]}),r.jsx("label",{className:"inputDescription",children:"Your weight in kilograms:"}),r.jsx("input",{className:"inputForm",placeholder:"0",onChange:w}),r.jsx("label",{className:"inputDescription",children:"The time of active participation in sports or other activities with a high physical. load in hours:"}),r.jsx("input",{className:"inputForm",placeholder:"0",onChange:I}),r.jsxs("div",{className:"requiredAmount",children:[r.jsx("p",{className:"amountDescription",children:"The required amount of water in liters per day:"}),r.jsxs("span",{className:"amount",children:[s," L"]})]}),r.jsx("h3",{children:"Write down how much water you will drink:"}),r.jsx("input",{className:"inputForm",placeholder:"0",onChange:z}),r.jsx("button",{className:"saveButton",type:"submit",children:"Save"})]})]})})},ua=()=>{const[t,e]=F.useState(!1),{waterRate:n}=ze(hn),a=n/1e3,o=()=>{e(!1)},s=()=>{e(!0)};return r.jsx("div",{children:r.jsxs(ra,{children:[r.jsx("h2",{children:"My daily norma:"}),r.jsxs(sa,{children:[r.jsxs("p",{children:[" ",a," L"]}),r.jsx("button",{type:"button",onClick:s,children:"Edit"}),t&&r.jsx(fa,{isOpen:t,onClose:o})]})]})})},pa=ua,wn=t=>t.water.notes,ma=t=>t.water.currentNote,xa=t=>t.water.monthNotes,ha=t=>t.water.isLoading,Pt=new Date,Rt=[Pt.getFullYear(),Pt.getMonth()+1],Ft=(t=Rt,e)=>{const[n,a]=t;switch(e){case"forward":return a>=12?[n+1,1]:[n,a+1];case"back":return a<=1?[n-1,12]:[n,a-1];default:return Rt}},ga=g.div`
  width: 100%;
  margin-top: 15px;
  height: 490px;

  @media screen and (min-width: 768px) {
    height: 308px;
  }
`,ba=g.h3`
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
`,ya=g.div`
  display: flex;
  justify-content: space-between;
`,wa=g.div`
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
`,va=g.ul`
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
`,ka=g.li`
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
`,vn=["January","February","March","April","May","June","July","August","September","October","November","December"],Aa=t=>vn[t-1],Na=t=>{const e=F.useRef(null);return F.useEffect(()=>{const n=a=>{e.current&&!e.current.contains(a.target)&&t()};return document.addEventListener("click",n,!0),()=>{document.removeEventListener("click",n,!0)}},[t]),e},at={sm:68,md:74},Ca={sm:5,md:10},ot={md:69,xl:56},wt=(t,e)=>{const n=t/Ca[e],a=Math.floor(n);switch(e){case"sm":return a===n?parseInt(n-1)*at[e]-12:parseInt(n)*at[e]-12;case"md":return a===n?parseInt(n-1)*at[e]:parseInt(n)*at[e];default:return 0}},It=(t,e)=>{const[n,a]=t%10===0?[9,!1]:[t%10-1,t%10<5];return a?n*ot[e]+ot[e]/4:n*ot[e]-280+ot[e]/4},Sa=g.div`
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
      ${({$dayNumber:t})=>`${It(t,"md")}px`},
      ${({$dayNumber:t})=>`${wt(t,"md")}px`}
    );
  }

  @media screen and (min-width: 1440px) {
    transform: translate(
      ${({$dayNumber:t})=>`${It(t,"xl")}px`},
      ${({$dayNumber:t})=>`${wt(t,"md")}px`}
    );
  }
`,Ma=g.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  p {
    color: ${({theme:t})=>t.color.primaryAccent};
    font-size: 16px;
    line-height: 1.25;
  }
`,Oa=({currentDay:t,close:e})=>{const n=Na(e),{date:a,percent:o,quantity:s,waterRate:d}=t,f={dailyNorma:d??0,percent:o??0},p=vn[(a==null?void 0:a.month)-1],m=f.dailyNorma/1e3;return r.jsxs(Sa,{ref:n,$dayNumber:a.day,children:[r.jsx(Ma,{children:r.jsxs("p",{children:[r.jsxs("span",{children:[a==null?void 0:a.day,", "]}),r.jsx("span",{children:p})]})}),r.jsxs("p",{children:["Daily norma : ",r.jsxs("span",{children:[m,"L"]})]}),r.jsxs("p",{children:["Fulfillment of the daily norm : ",r.jsxs("span",{children:[parseInt(f.percent),"%"]})]}),r.jsxs("p",{children:["How many servings of water : ",r.jsx("span",{children:s??0})]})]})},Wa=({monthData:t})=>{const[e,n]=F.useState(null),a=F.useCallback(()=>{n(null)},[]);return r.jsxs(va,{children:[e&&r.jsx(Oa,{currentDay:e,close:a}),t.map(o=>r.jsxs(ka,{onClick:()=>n(o),$percentage:o.percent,$isActive:(e==null?void 0:e.date.day)===o.date.day,children:[r.jsx("span",{className:"day",children:o.date.day}),r.jsxs("span",{className:"percentage",children:[parseInt(o.percent)||0,"%"]})]},o.date.day))]})},Ea=({changeDirection:t,month:e,year:n})=>{function a(o,s){const d=new Date,f=d.getFullYear(),p=d.getMonth()+1;return Number(s)>f||Number(s)===f&&Number(o)>=p}return r.jsxs(ya,{children:[r.jsx(ba,{children:"Month"}),r.jsxs(wa,{children:[r.jsx("button",{className:"arrow arrow-left",onClick:()=>t("back"),type:"button",children:r.jsx("svg",{fill:"#407BFF",width:"14",height:"14",children:r.jsx("use",{href:`${jt}#icon-arrow-left`})})}),r.jsxs("p",{className:"month__name",children:[Aa(e),", ",n]}),r.jsx("button",{className:`arrow arrow-right ${a(e,n)?"arrow-right-disabled":""}`,onClick:()=>t("forward"),type:"button",disabled:a(e,n),children:r.jsx("svg",{fill:`${a(e,n)?"#9ebbff":"#407BFF"}`,width:"14",height:"14",transform:"rotate(180)",children:r.jsx("use",{href:`${jt}#icon-arrow-left`})})})]})]})},za=()=>{var p;const t=ze(xa),e=ze(ha),[n,a]=Qn(),o=Be();let[s,d]=((p=n.get("date"))==null?void 0:p.split("_"))??Ft();F.useEffect(()=>{o(Kn({year:s.toString(),month:d.toString()}))},[o,s,d]);const f=F.useCallback(m=>{const b=Ft([+s,+d],m);a({date:b.join("_")})},[a,s,d]);return r.jsxs(ga,{children:[r.jsx(Ea,{changeDirection:f,month:d,year:s}),e?r.jsx(Jn,{}):r.jsx(Wa,{monthData:t})]})},Ta=za;var kn={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Bt=We.createContext&&We.createContext(kn),Da=["attr","size","title"];function ja(t,e){if(t==null)return{};var n=La(t,e),a,o;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(o=0;o<s.length;o++)a=s[o],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function La(t,e){if(t==null)return{};var n={},a=Object.keys(t),o,s;for(s=0;s<a.length;s++)o=a[s],!(e.indexOf(o)>=0)&&(n[o]=t[o]);return n}function rt(){return rt=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},rt.apply(this,arguments)}function Ht(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,a)}return n}function st(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ht(Object(n),!0).forEach(function(a){Pa(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ht(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Pa(t,e,n){return e=Ra(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ra(t){var e=Fa(t,"string");return typeof e=="symbol"?e:String(e)}function Fa(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function An(t){return t&&t.map((e,n)=>We.createElement(e.tag,st({key:n},e.attr),An(e.child)))}function Nn(t){return e=>We.createElement(Ia,rt({attr:st({},t.attr)},e),An(t.child))}function Ia(t){var e=n=>{var{attr:a,size:o,title:s}=t,d=ja(t,Da),f=o||n.size||"1em",p;return n.className&&(p=n.className),t.className&&(p=(p?p+" ":"")+t.className),We.createElement("svg",rt({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,a,d,{className:p,style:st(st({color:t.color||n.color},n.style),t.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),s&&We.createElement("title",null,s),t.children)};return Bt!==void 0?We.createElement(Bt.Consumer,null,n=>e(n)):e(kn)}function Ba(t){return Nn({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"},child:[]}]})(t)}const Ha="/goit-group2-react-nodejs/assets/glass-00cf2fb8.svg",_a="/goit-group2-react-nodejs/assets/edit-7f0c7b6a.svg",Xa="/goit-group2-react-nodejs/assets/delete-6bf30e40.svg";var kt={exports:{}},Te={},At={exports:{}},he={},Nt={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=b;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var n="none",a="contents",o=/input|select|textarea|button|object|iframe/;function s(h,N){return N.getPropertyValue("overflow")!=="visible"||h.scrollWidth<=0&&h.scrollHeight<=0}function d(h){var N=h.offsetWidth<=0&&h.offsetHeight<=0;if(N&&!h.innerHTML)return!0;try{var w=window.getComputedStyle(h),I=w.getPropertyValue("display");return N?I!==a&&s(h,w):I===n}catch{return console.warn("Failed to inspect element style"),!1}}function f(h){for(var N=h,w=h.getRootNode&&h.getRootNode();N&&N!==document.body;){if(w&&N===w&&(N=w.host.parentNode),d(N))return!1;N=N.parentNode}return!0}function p(h,N){var w=h.nodeName.toLowerCase(),I=o.test(w)&&!h.disabled||w==="a"&&h.href||N;return I&&f(h)}function m(h){var N=h.getAttribute("tabindex");N===null&&(N=void 0);var w=isNaN(N);return(w||N>=0)&&p(h,!w)}function b(h){var N=[].slice.call(h.querySelectorAll("*"),0).reduce(function(w,I){return w.concat(I.shadowRoot?b(I.shadowRoot):[I])},[]);return N.filter(m)}t.exports=e.default})(Nt,Nt.exports);var Cn=Nt.exports;Object.defineProperty(he,"__esModule",{value:!0});he.resetState=Ya;he.log=$a;he.handleBlur=Ke;he.handleFocus=Je;he.markForFocusLater=Ga;he.returnFocus=Qa;he.popWithoutFocus=Ka;he.setupScopedFocus=Ja;he.teardownScopedFocus=Za;var Va=Cn,qa=Ua(Va);function Ua(t){return t&&t.__esModule?t:{default:t}}var Ie=[],Fe=null,Ct=!1;function Ya(){Ie=[]}function $a(){}function Ke(){Ct=!0}function Je(){if(Ct){if(Ct=!1,!Fe)return;setTimeout(function(){if(!Fe.contains(document.activeElement)){var t=(0,qa.default)(Fe)[0]||Fe;t.focus()}},0)}}function Ga(){Ie.push(document.activeElement)}function Qa(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=null;try{Ie.length!==0&&(e=Ie.pop(),e.focus({preventScroll:t}));return}catch{console.warn(["You tried to return focus to",e,"but it is not in the DOM anymore"].join(" "))}}function Ka(){Ie.length>0&&Ie.pop()}function Ja(t){Fe=t,window.addEventListener?(window.addEventListener("blur",Ke,!1),document.addEventListener("focus",Je,!0)):(window.attachEvent("onBlur",Ke),document.attachEvent("onFocus",Je))}function Za(){Fe=null,window.addEventListener?(window.removeEventListener("blur",Ke),document.removeEventListener("focus",Je)):(window.detachEvent("onBlur",Ke),document.detachEvent("onFocus",Je))}var St={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=d;var n=Cn,a=o(n);function o(f){return f&&f.__esModule?f:{default:f}}function s(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return f.activeElement.shadowRoot?s(f.activeElement.shadowRoot):f.activeElement}function d(f,p){var m=(0,a.default)(f);if(!m.length){p.preventDefault();return}var b=void 0,h=p.shiftKey,N=m[0],w=m[m.length-1],I=s();if(f===I){if(!h)return;b=w}if(w===I&&!h&&(b=N),N===I&&h&&(b=w),b){p.preventDefault(),b.focus();return}var z=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),Q=z!=null&&z[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(Q){var D=m.indexOf(I);if(D>-1&&(D+=h?-1:1),b=m[D],typeof b>"u"){p.preventDefault(),b=h?w:N,b.focus();return}p.preventDefault(),b.focus()}}t.exports=e.default})(St,St.exports);var eo=St.exports,ge={},to=function(){},no=to,xe={},Sn={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(t){(function(){var e=!!(typeof window<"u"&&window.document&&window.document.createElement),n={canUseDOM:e,canUseWorkers:typeof Worker<"u",canUseEventListeners:e&&!!(window.addEventListener||window.attachEvent),canUseViewport:e&&!!window.screen};t.exports?t.exports=n:window.ExecutionEnvironment=n})()})(Sn);var ao=Sn.exports;Object.defineProperty(xe,"__esModule",{value:!0});xe.canUseDOM=xe.SafeNodeList=xe.SafeHTMLCollection=void 0;var oo=ao,io=ro(oo);function ro(t){return t&&t.__esModule?t:{default:t}}var ut=io.default,so=ut.canUseDOM?window.HTMLElement:{};xe.SafeHTMLCollection=ut.canUseDOM?window.HTMLCollection:{};xe.SafeNodeList=ut.canUseDOM?window.NodeList:{};xe.canUseDOM=ut.canUseDOM;xe.default=so;Object.defineProperty(ge,"__esModule",{value:!0});ge.resetState=po;ge.log=mo;ge.assertNodeList=Mn;ge.setElement=xo;ge.validateElement=Mt;ge.hide=ho;ge.show=go;ge.documentNotReadyOrSSRTesting=bo;var lo=no,co=uo(lo),fo=xe;function uo(t){return t&&t.__esModule?t:{default:t}}var fe=null;function po(){fe&&(fe.removeAttribute?fe.removeAttribute("aria-hidden"):fe.length!=null?fe.forEach(function(t){return t.removeAttribute("aria-hidden")}):document.querySelectorAll(fe).forEach(function(t){return t.removeAttribute("aria-hidden")})),fe=null}function mo(){}function Mn(t,e){if(!t||!t.length)throw new Error("react-modal: No elements were found for selector "+e+".")}function xo(t){var e=t;if(typeof e=="string"&&fo.canUseDOM){var n=document.querySelectorAll(e);Mn(n,e),e=n}return fe=e||fe,fe}function Mt(t){var e=t||fe;return e?Array.isArray(e)||e instanceof HTMLCollection||e instanceof NodeList?e:[e]:((0,co.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function ho(t){var e=!0,n=!1,a=void 0;try{for(var o=Mt(t)[Symbol.iterator](),s;!(e=(s=o.next()).done);e=!0){var d=s.value;d.setAttribute("aria-hidden","true")}}catch(f){n=!0,a=f}finally{try{!e&&o.return&&o.return()}finally{if(n)throw a}}}function go(t){var e=!0,n=!1,a=void 0;try{for(var o=Mt(t)[Symbol.iterator](),s;!(e=(s=o.next()).done);e=!0){var d=s.value;d.removeAttribute("aria-hidden")}}catch(f){n=!0,a=f}finally{try{!e&&o.return&&o.return()}finally{if(n)throw a}}}function bo(){fe=null}var He={};Object.defineProperty(He,"__esModule",{value:!0});He.resetState=yo;He.log=wo;var Ge={},Qe={};function _t(t,e){t.classList.remove(e)}function yo(){var t=document.getElementsByTagName("html")[0];for(var e in Ge)_t(t,Ge[e]);var n=document.body;for(var a in Qe)_t(n,Qe[a]);Ge={},Qe={}}function wo(){}var vo=function(e,n){return e[n]||(e[n]=0),e[n]+=1,n},ko=function(e,n){return e[n]&&(e[n]-=1),n},Ao=function(e,n,a){a.forEach(function(o){vo(n,o),e.add(o)})},No=function(e,n,a){a.forEach(function(o){ko(n,o),n[o]===0&&e.remove(o)})};He.add=function(e,n){return Ao(e.classList,e.nodeName.toLowerCase()=="html"?Ge:Qe,n.split(" "))};He.remove=function(e,n){return No(e.classList,e.nodeName.toLowerCase()=="html"?Ge:Qe,n.split(" "))};var _e={};Object.defineProperty(_e,"__esModule",{value:!0});_e.log=So;_e.resetState=Mo;function Co(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var On=function t(){var e=this;Co(this,t),this.register=function(n){e.openInstances.indexOf(n)===-1&&(e.openInstances.push(n),e.emit("register"))},this.deregister=function(n){var a=e.openInstances.indexOf(n);a!==-1&&(e.openInstances.splice(a,1),e.emit("deregister"))},this.subscribe=function(n){e.subscribers.push(n)},this.emit=function(n){e.subscribers.forEach(function(a){return a(n,e.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},lt=new On;function So(){console.log("portalOpenInstances ----------"),console.log(lt.openInstances.length),lt.openInstances.forEach(function(t){return console.log(t)}),console.log("end portalOpenInstances ----------")}function Mo(){lt=new On}_e.default=lt;var Ot={};Object.defineProperty(Ot,"__esModule",{value:!0});Ot.resetState=zo;Ot.log=To;var Oo=_e,Wo=Eo(Oo);function Eo(t){return t&&t.__esModule?t:{default:t}}var ae=void 0,me=void 0,Ee=[];function zo(){for(var t=[ae,me],e=0;e<t.length;e++){var n=t[e];n&&n.parentNode&&n.parentNode.removeChild(n)}ae=me=null,Ee=[]}function To(){console.log("bodyTrap ----------"),console.log(Ee.length);for(var t=[ae,me],e=0;e<t.length;e++){var n=t[e],a=n||{};console.log(a.nodeName,a.className,a.id)}console.log("edn bodyTrap ----------")}function Xt(){Ee.length!==0&&Ee[Ee.length-1].focusContent()}function Do(t,e){!ae&&!me&&(ae=document.createElement("div"),ae.setAttribute("data-react-modal-body-trap",""),ae.style.position="absolute",ae.style.opacity="0",ae.setAttribute("tabindex","0"),ae.addEventListener("focus",Xt),me=ae.cloneNode(),me.addEventListener("focus",Xt)),Ee=e,Ee.length>0?(document.body.firstChild!==ae&&document.body.insertBefore(ae,document.body.firstChild),document.body.lastChild!==me&&document.body.appendChild(me)):(ae.parentElement&&ae.parentElement.removeChild(ae),me.parentElement&&me.parentElement.removeChild(me))}Wo.default.subscribe(Do);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(O){for(var S=1;S<arguments.length;S++){var q=arguments[S];for(var u in q)Object.prototype.hasOwnProperty.call(q,u)&&(O[u]=q[u])}return O},a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(O){return typeof O}:function(O){return O&&typeof Symbol=="function"&&O.constructor===Symbol&&O!==Symbol.prototype?"symbol":typeof O},o=function(){function O(S,q){for(var u=0;u<q.length;u++){var A=q[u];A.enumerable=A.enumerable||!1,A.configurable=!0,"value"in A&&(A.writable=!0),Object.defineProperty(S,A.key,A)}}return function(S,q,u){return q&&O(S.prototype,q),u&&O(S,u),S}}(),s=F,d=gn,f=ee(d),p=he,m=oe(p),b=eo,h=ee(b),N=ge,w=oe(N),I=He,z=oe(I),Q=xe,D=ee(Q),B=_e,j=ee(B);function oe(O){if(O&&O.__esModule)return O;var S={};if(O!=null)for(var q in O)Object.prototype.hasOwnProperty.call(O,q)&&(S[q]=O[q]);return S.default=O,S}function ee(O){return O&&O.__esModule?O:{default:O}}function V(O,S){if(!(O instanceof S))throw new TypeError("Cannot call a class as a function")}function v(O,S){if(!O)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return S&&(typeof S=="object"||typeof S=="function")?S:O}function H(O,S){if(typeof S!="function"&&S!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof S);O.prototype=Object.create(S&&S.prototype,{constructor:{value:O,enumerable:!1,writable:!0,configurable:!0}}),S&&(Object.setPrototypeOf?Object.setPrototypeOf(O,S):O.__proto__=S)}var le={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},Xe=function(S){return S.code==="Tab"||S.keyCode===9},mt=function(S){return S.code==="Escape"||S.keyCode===27},je=0,Le=function(O){H(S,O);function S(q){V(this,S);var u=v(this,(S.__proto__||Object.getPrototypeOf(S)).call(this,q));return u.setOverlayRef=function(A){u.overlay=A,u.props.overlayRef&&u.props.overlayRef(A)},u.setContentRef=function(A){u.content=A,u.props.contentRef&&u.props.contentRef(A)},u.afterClose=function(){var A=u.props,Z=A.appElement,te=A.ariaHideApp,U=A.htmlOpenClassName,ce=A.bodyOpenClassName,ye=A.parentSelector,we=ye&&ye().ownerDocument||document;ce&&z.remove(we.body,ce),U&&z.remove(we.getElementsByTagName("html")[0],U),te&&je>0&&(je-=1,je===0&&w.show(Z)),u.props.shouldFocusAfterRender&&(u.props.shouldReturnFocusAfterClose?(m.returnFocus(u.props.preventScroll),m.teardownScopedFocus()):m.popWithoutFocus()),u.props.onAfterClose&&u.props.onAfterClose(),j.default.deregister(u)},u.open=function(){u.beforeOpen(),u.state.afterOpen&&u.state.beforeClose?(clearTimeout(u.closeTimer),u.setState({beforeClose:!1})):(u.props.shouldFocusAfterRender&&(m.setupScopedFocus(u.node),m.markForFocusLater()),u.setState({isOpen:!0},function(){u.openAnimationFrame=requestAnimationFrame(function(){u.setState({afterOpen:!0}),u.props.isOpen&&u.props.onAfterOpen&&u.props.onAfterOpen({overlayEl:u.overlay,contentEl:u.content})})}))},u.close=function(){u.props.closeTimeoutMS>0?u.closeWithTimeout():u.closeWithoutTimeout()},u.focusContent=function(){return u.content&&!u.contentHasFocus()&&u.content.focus({preventScroll:!0})},u.closeWithTimeout=function(){var A=Date.now()+u.props.closeTimeoutMS;u.setState({beforeClose:!0,closesAt:A},function(){u.closeTimer=setTimeout(u.closeWithoutTimeout,u.state.closesAt-Date.now())})},u.closeWithoutTimeout=function(){u.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},u.afterClose)},u.handleKeyDown=function(A){Xe(A)&&(0,h.default)(u.content,A),u.props.shouldCloseOnEsc&&mt(A)&&(A.stopPropagation(),u.requestClose(A))},u.handleOverlayOnClick=function(A){u.shouldClose===null&&(u.shouldClose=!0),u.shouldClose&&u.props.shouldCloseOnOverlayClick&&(u.ownerHandlesClose()?u.requestClose(A):u.focusContent()),u.shouldClose=null},u.handleContentOnMouseUp=function(){u.shouldClose=!1},u.handleOverlayOnMouseDown=function(A){!u.props.shouldCloseOnOverlayClick&&A.target==u.overlay&&A.preventDefault()},u.handleContentOnClick=function(){u.shouldClose=!1},u.handleContentOnMouseDown=function(){u.shouldClose=!1},u.requestClose=function(A){return u.ownerHandlesClose()&&u.props.onRequestClose(A)},u.ownerHandlesClose=function(){return u.props.onRequestClose},u.shouldBeClosed=function(){return!u.state.isOpen&&!u.state.beforeClose},u.contentHasFocus=function(){return document.activeElement===u.content||u.content.contains(document.activeElement)},u.buildClassName=function(A,Z){var te=(typeof Z>"u"?"undefined":a(Z))==="object"?Z:{base:le[A],afterOpen:le[A]+"--after-open",beforeClose:le[A]+"--before-close"},U=te.base;return u.state.afterOpen&&(U=U+" "+te.afterOpen),u.state.beforeClose&&(U=U+" "+te.beforeClose),typeof Z=="string"&&Z?U+" "+Z:U},u.attributesFromObject=function(A,Z){return Object.keys(Z).reduce(function(te,U){return te[A+"-"+U]=Z[U],te},{})},u.state={afterOpen:!1,beforeClose:!1},u.shouldClose=null,u.moveFromContentToOverlay=null,u}return o(S,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(u,A){this.props.isOpen&&!u.isOpen?this.open():!this.props.isOpen&&u.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!A.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var u=this.props,A=u.appElement,Z=u.ariaHideApp,te=u.htmlOpenClassName,U=u.bodyOpenClassName,ce=u.parentSelector,ye=ce&&ce().ownerDocument||document;U&&z.add(ye.body,U),te&&z.add(ye.getElementsByTagName("html")[0],te),Z&&(je+=1,w.hide(A)),j.default.register(this)}},{key:"render",value:function(){var u=this.props,A=u.id,Z=u.className,te=u.overlayClassName,U=u.defaultStyles,ce=u.children,ye=Z?{}:U.content,we=te?{}:U.overlay;if(this.shouldBeClosed())return null;var xt={ref:this.setOverlayRef,className:this.buildClassName("overlay",te),style:n({},we,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},Ve=n({id:A,ref:this.setContentRef,style:n({},ye,this.props.style.content),className:this.buildClassName("content",Z),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",n({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),ht=this.props.contentElement(Ve,ce);return this.props.overlayElement(xt,ht)}}]),S}(s.Component);Le.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},Le.propTypes={isOpen:f.default.bool.isRequired,defaultStyles:f.default.shape({content:f.default.object,overlay:f.default.object}),style:f.default.shape({content:f.default.object,overlay:f.default.object}),className:f.default.oneOfType([f.default.string,f.default.object]),overlayClassName:f.default.oneOfType([f.default.string,f.default.object]),parentSelector:f.default.func,bodyOpenClassName:f.default.string,htmlOpenClassName:f.default.string,ariaHideApp:f.default.bool,appElement:f.default.oneOfType([f.default.instanceOf(D.default),f.default.instanceOf(Q.SafeHTMLCollection),f.default.instanceOf(Q.SafeNodeList),f.default.arrayOf(f.default.instanceOf(D.default))]),onAfterOpen:f.default.func,onAfterClose:f.default.func,onRequestClose:f.default.func,closeTimeoutMS:f.default.number,shouldFocusAfterRender:f.default.bool,shouldCloseOnOverlayClick:f.default.bool,shouldReturnFocusAfterClose:f.default.bool,preventScroll:f.default.bool,role:f.default.string,contentLabel:f.default.string,aria:f.default.object,data:f.default.object,children:f.default.node,shouldCloseOnEsc:f.default.bool,overlayRef:f.default.func,contentRef:f.default.func,id:f.default.string,overlayElement:f.default.func,contentElement:f.default.func,testId:f.default.string},e.default=Le,t.exports=e.default})(At,At.exports);var jo=At.exports;function Wn(){var t=this.constructor.getDerivedStateFromProps(this.props,this.state);t!=null&&this.setState(t)}function En(t){function e(n){var a=this.constructor.getDerivedStateFromProps(t,n);return a??null}this.setState(e.bind(this))}function zn(t,e){try{var n=this.props,a=this.state;this.props=t,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,a)}finally{this.props=n,this.state=a}}Wn.__suppressDeprecationWarning=!0;En.__suppressDeprecationWarning=!0;zn.__suppressDeprecationWarning=!0;function Lo(t){var e=t.prototype;if(!e||!e.isReactComponent)throw new Error("Can only polyfill class components");if(typeof t.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function")return t;var n=null,a=null,o=null;if(typeof e.componentWillMount=="function"?n="componentWillMount":typeof e.UNSAFE_componentWillMount=="function"&&(n="UNSAFE_componentWillMount"),typeof e.componentWillReceiveProps=="function"?a="componentWillReceiveProps":typeof e.UNSAFE_componentWillReceiveProps=="function"&&(a="UNSAFE_componentWillReceiveProps"),typeof e.componentWillUpdate=="function"?o="componentWillUpdate":typeof e.UNSAFE_componentWillUpdate=="function"&&(o="UNSAFE_componentWillUpdate"),n!==null||a!==null||o!==null){var s=t.displayName||t.name,d=typeof t.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+s+" uses "+d+" but also contains the following legacy lifecycles:"+(n!==null?`
  `+n:"")+(a!==null?`
  `+a:"")+(o!==null?`
  `+o:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof t.getDerivedStateFromProps=="function"&&(e.componentWillMount=Wn,e.componentWillReceiveProps=En),typeof e.getSnapshotBeforeUpdate=="function"){if(typeof e.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");e.componentWillUpdate=zn;var f=e.componentDidUpdate;e.componentDidUpdate=function(m,b,h){var N=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:h;f.call(this,m,b,N)}}return t}const Po=Object.freeze(Object.defineProperty({__proto__:null,polyfill:Lo},Symbol.toStringTag,{value:"Module"})),Ro=Zn(Po);Object.defineProperty(Te,"__esModule",{value:!0});Te.bodyOpenClassName=Te.portalClassName=void 0;var Vt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},Fo=function(){function t(e,n){for(var a=0;a<n.length;a++){var o=n[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),Tn=F,ct=et(Tn),Io=ea,dt=et(Io),Bo=gn,M=et(Bo),Ho=jo,qt=et(Ho),_o=ge,Xo=qo(_o),Ce=xe,Ut=et(Ce),Vo=Ro;function qo(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function et(t){return t&&t.__esModule?t:{default:t}}function Uo(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Yt(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function Yo(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var $o=Te.portalClassName="ReactModalPortal",Go=Te.bodyOpenClassName="ReactModal__Body--open",Me=Ce.canUseDOM&&dt.default.createPortal!==void 0,$t=function(e){return document.createElement(e)},Gt=function(){return Me?dt.default.createPortal:dt.default.unstable_renderSubtreeIntoContainer};function it(t){return t()}var tt=function(t){Yo(e,t);function e(){var n,a,o,s;Uo(this,e);for(var d=arguments.length,f=Array(d),p=0;p<d;p++)f[p]=arguments[p];return s=(a=(o=Yt(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(f))),o),o.removePortal=function(){!Me&&dt.default.unmountComponentAtNode(o.node);var m=it(o.props.parentSelector);m&&m.contains(o.node)?m.removeChild(o.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},o.portalRef=function(m){o.portal=m},o.renderPortal=function(m){var b=Gt(),h=b(o,ct.default.createElement(qt.default,Vt({defaultStyles:e.defaultStyles},m)),o.node);o.portalRef(h)},a),Yt(o,s)}return Fo(e,[{key:"componentDidMount",value:function(){if(Ce.canUseDOM){Me||(this.node=$t("div")),this.node.className=this.props.portalClassName;var a=it(this.props.parentSelector);a.appendChild(this.node),!Me&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(a){var o=it(a.parentSelector),s=it(this.props.parentSelector);return{prevParent:o,nextParent:s}}},{key:"componentDidUpdate",value:function(a,o,s){if(Ce.canUseDOM){var d=this.props,f=d.isOpen,p=d.portalClassName;a.portalClassName!==p&&(this.node.className=p);var m=s.prevParent,b=s.nextParent;b!==m&&(m.removeChild(this.node),b.appendChild(this.node)),!(!a.isOpen&&!f)&&!Me&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!Ce.canUseDOM||!this.node||!this.portal)){var a=this.portal.state,o=Date.now(),s=a.isOpen&&this.props.closeTimeoutMS&&(a.closesAt||o+this.props.closeTimeoutMS);s?(a.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,s-o)):this.removePortal()}}},{key:"render",value:function(){if(!Ce.canUseDOM||!Me)return null;!this.node&&Me&&(this.node=$t("div"));var a=Gt();return a(ct.default.createElement(qt.default,Vt({ref:this.portalRef,defaultStyles:e.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(a){Xo.setElement(a)}}]),e}(Tn.Component);tt.propTypes={isOpen:M.default.bool.isRequired,style:M.default.shape({content:M.default.object,overlay:M.default.object}),portalClassName:M.default.string,bodyOpenClassName:M.default.string,htmlOpenClassName:M.default.string,className:M.default.oneOfType([M.default.string,M.default.shape({base:M.default.string.isRequired,afterOpen:M.default.string.isRequired,beforeClose:M.default.string.isRequired})]),overlayClassName:M.default.oneOfType([M.default.string,M.default.shape({base:M.default.string.isRequired,afterOpen:M.default.string.isRequired,beforeClose:M.default.string.isRequired})]),appElement:M.default.oneOfType([M.default.instanceOf(Ut.default),M.default.instanceOf(Ce.SafeHTMLCollection),M.default.instanceOf(Ce.SafeNodeList),M.default.arrayOf(M.default.instanceOf(Ut.default))]),onAfterOpen:M.default.func,onRequestClose:M.default.func,closeTimeoutMS:M.default.number,ariaHideApp:M.default.bool,shouldFocusAfterRender:M.default.bool,shouldCloseOnOverlayClick:M.default.bool,shouldReturnFocusAfterClose:M.default.bool,preventScroll:M.default.bool,parentSelector:M.default.func,aria:M.default.object,data:M.default.object,role:M.default.string,contentLabel:M.default.string,shouldCloseOnEsc:M.default.bool,overlayRef:M.default.func,contentRef:M.default.func,id:M.default.string,overlayElement:M.default.func,contentElement:M.default.func};tt.defaultProps={isOpen:!1,portalClassName:$o,bodyOpenClassName:Go,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,n){return ct.default.createElement("div",e,n)},contentElement:function(e,n){return ct.default.createElement("div",e,n)}};tt.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,Vo.polyfill)(tt);Te.default=tt;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=Te,a=o(n);function o(s){return s&&s.__esModule?s:{default:s}}e.default=a.default,t.exports=e.default})(kt,kt.exports);var Qo=kt.exports;const Dn=xn(Qo),ke="/goit-group2-react-nodejs/assets/horodiukIcons-b8c45607.svg",Qt=g.select`
  margin-bottom: 24px;
  border: 1px solid #d7e3ff;
  border-radius: 6px;
  padding: 12px 10px;
  width: 90px;
  height: 44px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`,Ko=g.div``,Kt=g.div`
  position: relative;
  display: inline-block;
`,Jt=g.svg`
  position: absolute;
  top: 10px;
  right: 6px;
  pointer-events: none;
`;function jn({onChange:t,value:e}){const n=Array.from(new Array(24),(p,m)=>m),a=[0,5,10,15,20,25,30,35,40,45,50,55],o=new Date(e);let s=o.getHours(),d=o.getMinutes();const f=a.reduce((p,m)=>m>=d&&(p===null||Math.abs(m-d)<Math.abs(p-d))?m:p,null);return f===null?(s=(s+1)%24,d=0):d=f,r.jsxs(Ko,{id:"selectTimeWrapper",children:[r.jsxs(Kt,{children:[r.jsx(Qt,{onChange:p=>t(p,"hour"),value:s,children:n.map(p=>r.jsx("option",{value:p,children:p.toString().padStart(2,"0")},p))}),r.jsx(Jt,{width:"24",height:"24",children:r.jsx("use",{href:`${ke}#icon-arrow`})})]}),":",r.jsxs(Kt,{children:[r.jsx(Qt,{onChange:p=>t(p,"minute"),value:d,children:a.map(p=>r.jsx("option",{value:p,children:p.toString().padStart(2,"0")},p))}),r.jsx(Jt,{width:"24",height:"24",children:r.jsx("use",{href:`${ke}#icon-arrow`})})]})]})}const Jo=g.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  overflow: scroll;
`,Zo=g.div`
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
`,ei=g.button`
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
`,ti=g.h2`
  font-weight: 500;
  font-size: 26px;
  line-height: 123%;
  color: #2f2f2f;
  margin-bottom: 24px;
`,Zt=g.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  color: #2f2f2f;
  margin-bottom: 16px;
`,en=g.p`
  font-size: 16px;
  line-height: 125%;
  color: #2f2f2f;
  margin-bottom: 12px;
`,tn=g.button`
  box-shadow: 0 2px 4px 0 rgba(64, 123, 255, 0.2);
  background-color: #fff;
  border: 1px solid #9ebbff;
  border-radius: 30px;
  padding: 0px;
  width: 44px;
  height: 44px;
  cursor: pointer;
`,nn=g.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 133%;
  color: #407bff;
  text-align: center;
`,ni=g.input`
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
`,ai=g.input`
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
`,oi=g.button`
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
`,ii=g.div`
  background-color: #d7e3ff;
  border-radius: 40px;
  padding: 6px 10px;
  height: 36px;
`,ri=g.div`
  display: flex;
  width: 194px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`,si=g.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
  }
`;Dn.setAppElement("#root");function Ln({isOpen:t,onClose:e,onAddWater:n}){const[a,o]=F.useState(0),[s,d]=F.useState(!1),[f,p]=F.useState(0),m=Be(),[b,h]=F.useState(new Date),N=(V,v="")=>{let H=new Date(b);switch(v){case"hour":H.setHours(parseInt(V.target.value,10));break;case"minute":H.setMinutes(Math.ceil(parseInt(V.target.value,10)/5)*5);break}h(H)},w=()=>{m(ta({amount:a,date:Date(b)}))},I=()=>{e()},z=()=>{o(a+50),p(a+50)},Q=()=>{if(a-50<0){o(0),p(0);return}o(a-50),p(a-50)},D=()=>{o(f)},B=V=>{const v=parseInt(V.target.value>0?V.target.value:0,10);p(v)},j=V=>{V.target.closest("#selectTimeWrapper")||(d(!1),V.target===V.currentTarget&&I())},oe=V=>{V.key==="Escape"&&I()};F.useEffect(()=>(window.addEventListener("keydown",oe),()=>{window.removeEventListener("keydown",oe)}),[]);const ee=V=>{const v=new Date(V),H=le=>le.toString().padStart(2,"0");return`${H(v.getHours())}:${H(v.getMinutes())}`};return bn.createPortal(r.jsx(Jo,{onClick:j,children:r.jsxs(Zo,{children:[r.jsx(ei,{onClick:I,children:r.jsx("svg",{width:"24",height:"24",children:r.jsx("use",{href:`${ke}#icon-close`})})}),r.jsx(ti,{children:"Add water"}),r.jsx(Zt,{children:"Choose a value:"}),r.jsx(en,{children:"Amount of water:"}),r.jsxs(ri,{children:[r.jsx(tn,{onClick:Q,children:r.jsx("svg",{width:"44",height:"44",children:r.jsx("use",{href:`${ke}#icon-minus`})})}),r.jsx(ii,{children:r.jsxs(nn,{children:[a,"ml"]})}),r.jsx(tn,{onClick:z,children:r.jsx("svg",{width:"44",height:"44",children:r.jsx("use",{href:`${ke}#icon-plus`})})})]}),r.jsx(en,{children:"Recording time:"}),s?r.jsx(jn,{onChange:N,value:b}):r.jsx(ni,{type:"text","aria-label":"Choose time",value:ee(b),onChange:()=>{},onFocus:()=>d(!0)}),r.jsx(Zt,{children:"Enter the value of the water used:"}),r.jsx(ai,{value:f,onBlur:D,onChange:B,type:"number"}),r.jsxs(si,{children:[r.jsxs(nn,{children:[a,"ml"]}),r.jsx(oi,{onClick:w,type:"button",children:"Save"})]})]})}),document.getElementById("modal-root"))}const li=g.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  overflow: scroll;
`,ci=g.div`
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
`,di=g.button`
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
`,fi=g.h2`
  font-weight: 500;
  font-size: 26px;
  line-height: 123%;
  color: #2f2f2f;
  margin-bottom: 24px;
`,an=g.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  color: #2f2f2f;
  margin-bottom: 16px;
`,on=g.p`
  font-size: 16px;
  line-height: 125%;
  color: #2f2f2f;
  margin-bottom: 12px;
`,rn=g.button`
  box-shadow: 0 2px 4px 0 rgba(64, 123, 255, 0.2);
  background-color: #fff;
  border: 1px solid #9ebbff;
  border-radius: 30px;
  padding: 0px;
  width: 44px;
  height: 44px;
  cursor: pointer;
`,sn=g.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 133%;
  color: #407bff;
  text-align: center;
`,ui=g.input`
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
`,pi=g.input`
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
`,mi=g.button`
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
`,xi=g.div`
  background-color: #d7e3ff;
  border-radius: 40px;
  padding: 6px 10px;
  height: 36px;
`,hi=g.div`
  display: flex;
  width: 194px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`,gi=g.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
  }
`,bi=g.div`
  display: flex;
  gap: 14px;
  align-items: center;
  margin-bottom: 24px;
  border-radius: 10px;
  padding: 8px 24px;
  width: 256px;
  background-color: #ecf2ff;
`,yi=g.p`
  font-size: 18px;
  line-height: 133%;
  color: #407bff;
`,wi=g.p`
  font-size: 16px;
  line-height: 125%;
  color: #2f2f2f;
`;Dn.setAppElement("#root");function vi({isOpen:t,onClose:e,onAddWater:n}){const a=ze(ma)||{amount:250,date:new Date},[o,s]=F.useState(a.amount),[d,f]=F.useState(!1),[p,m]=F.useState(0),b=Be(),[h,N]=F.useState(a.date),w=(v,H="")=>{let le=new Date(h);switch(H){case"hour":le.setHours(parseInt(v.target.value,10));break;case"minute":le.setMinutes(Math.ceil(parseInt(v.target.value,10)/5)*5);break}N(le)},I=()=>{b(na({amount:o,date:Date(h)}))},z=()=>{e()},Q=()=>{s(o+50),m(o+50)},D=()=>{if(o-50<0){s(0),m(0);return}s(o-50),m(o-50)},B=()=>{s(p)},j=v=>{const H=parseInt(v.target.value>0?v.target.value:0,10);m(H)},oe=v=>{v.target.closest("#selectTimeWrapper")||(f(!1),v.target===v.currentTarget&&z())},ee=v=>{v.key==="Escape"&&z()};F.useEffect(()=>(window.addEventListener("keydown",ee),()=>{window.removeEventListener("keydown",ee)}),[]);const V=v=>{const H=new Date(v),le=Xe=>Xe.toString().padStart(2,"0");return`${le(H.getHours())}:${le(H.getMinutes())}`};return bn.createPortal(r.jsx(li,{onClick:oe,children:r.jsxs(ci,{children:[r.jsx(di,{onClick:z,children:r.jsx("svg",{width:"24",height:"24",children:r.jsx("use",{href:`${ke}#icon-close`})})}),r.jsx(fi,{children:"Edit the entered amount of water"}),r.jsxs(bi,{children:[" ",r.jsx("svg",{width:"36",height:"36",children:r.jsx("use",{href:`${ke}#icon-glass`})}),r.jsxs(yi,{children:[a.amount,"ml"]}),r.jsx(wi,{children:V(a.time)})]}),r.jsx(an,{children:"Correct entered data:"}),r.jsx(on,{children:"Amount of water:"}),r.jsxs(hi,{children:[r.jsx(rn,{onClick:D,children:r.jsx("svg",{width:"44",height:"44",children:r.jsx("use",{href:`${ke}#icon-minus`})})}),r.jsx(xi,{children:r.jsxs(sn,{children:[o,"ml"]})}),r.jsx(rn,{onClick:Q,children:r.jsx("svg",{width:"44",height:"44",children:r.jsx("use",{href:`${ke}#icon-plus`})})})]}),r.jsx(on,{children:"Recording time:"}),d?r.jsx(jn,{onChange:w,value:h}):r.jsx(ui,{type:"text","aria-label":"Choose time",value:V(h),onChange:()=>{},onFocus:()=>f(!0)}),r.jsx(an,{children:"Enter the value of the water used:"}),r.jsx(pi,{value:p,onBlur:B,onChange:j,type:"number"}),r.jsxs(gi,{children:[r.jsxs(sn,{children:[o,"ml"]}),r.jsx(mi,{onClick:I,type:"button",children:"Save"})]})]})}),document.getElementById("modal-root"))}const ki=g.div`
  padding: 0 24px 32px;
`,Ai=g.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
    flex-direction: row-reverse;
  }
`,ln=g.button`
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
`,Ni=g.p`
  font-size: 18px;
  color: ${({theme:t})=>t.color.primaryBlack};
  line-height: 20px;
  font-weight: 500;

  margin-bottom: 24px;
`,Ci=({onClose:t,onShow:e,waterId:n})=>{const a=Be(),o=()=>{a(oa(n)),t()};return r.jsx(aa,{onClose:t,onShow:e,title:"Delete Entry",children:r.jsxs(ki,{children:[r.jsx(Ni,{children:"Are you sure you want to delete the entry?"}),r.jsxs(Ai,{children:[r.jsx(ln,{onClick:o,children:"Delete"}),r.jsx(ln,{onClick:t,children:"Cancel"})]})]})})},Si=g.ul`
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
`,Mi=g.li`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: space-between;
`,Oi=g.div`
  display: flex;
  align-items: center;
`,Wi=g.p`
  color: #407bff;
  font-size: 18px;
  line-height: 24px;
  margin-left: 12px;
`,Ei=g.p`
  margin-left: 12px;
  line-height: 24px;
  font-size: 12px;
  color: #2f2f2f;

  @media screen and (min-width: 768px) {
    margin-left: 16px;
  }
`,zi=g.h2`
  margin-bottom: 16px;
  color: #2f2f2f;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 32px;
  }
`,Ti=g.button`
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
`,Di=g.button`
  margin-right: 18px;
  background-color: transparent;
`,ji=g.button`
  background-color: transparent;
`;function be(t){const e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new t.constructor(+t):typeof t=="number"||e==="[object Number]"||typeof t=="string"||e==="[object String]"?new Date(t):new Date(NaN)}function De(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}const Pn=6048e5,Li=864e5;let Pi={};function pt(){return Pi}function Ze(t,e){var f,p,m,b;const n=pt(),a=(e==null?void 0:e.weekStartsOn)??((p=(f=e==null?void 0:e.locale)==null?void 0:f.options)==null?void 0:p.weekStartsOn)??n.weekStartsOn??((b=(m=n.locale)==null?void 0:m.options)==null?void 0:b.weekStartsOn)??0,o=be(t),s=o.getDay(),d=(s<a?7:0)+s-a;return o.setDate(o.getDate()-d),o.setHours(0,0,0,0),o}function ft(t){return Ze(t,{weekStartsOn:1})}function Rn(t){const e=be(t),n=e.getFullYear(),a=De(t,0);a.setFullYear(n+1,0,4),a.setHours(0,0,0,0);const o=ft(a),s=De(t,0);s.setFullYear(n,0,4),s.setHours(0,0,0,0);const d=ft(s);return e.getTime()>=o.getTime()?n+1:e.getTime()>=d.getTime()?n:n-1}function cn(t){const e=be(t);return e.setHours(0,0,0,0),e}function dn(t){const e=be(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function Ri(t,e){const n=cn(t),a=cn(e),o=+n-dn(n),s=+a-dn(a);return Math.round((o-s)/Li)}function Fi(t){const e=Rn(t),n=De(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),ft(n)}function Ii(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function Bi(t){if(!Ii(t)&&typeof t!="number")return!1;const e=be(t);return!isNaN(Number(e))}function Hi(t){const e=be(t),n=De(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}const _i={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Xi=(t,e,n)=>{let a;const o=_i[t];return typeof o=="string"?a=o:e===1?a=o.one:a=o.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a};function vt(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const Vi={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},qi={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Ui={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Yi={date:vt({formats:Vi,defaultWidth:"full"}),time:vt({formats:qi,defaultWidth:"full"}),dateTime:vt({formats:Ui,defaultWidth:"full"})},$i={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Gi=(t,e,n,a)=>$i[t];function Ye(t){return(e,n)=>{const a=n!=null&&n.context?String(n.context):"standalone";let o;if(a==="formatting"&&t.formattingValues){const d=t.defaultFormattingWidth||t.defaultWidth,f=n!=null&&n.width?String(n.width):d;o=t.formattingValues[f]||t.formattingValues[d]}else{const d=t.defaultWidth,f=n!=null&&n.width?String(n.width):t.defaultWidth;o=t.values[f]||t.values[d]}const s=t.argumentCallback?t.argumentCallback(e):e;return o[s]}}const Qi={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Ki={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Ji={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Zi={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},er={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},tr={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},nr=(t,e)=>{const n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},ar={ordinalNumber:nr,era:Ye({values:Qi,defaultWidth:"wide"}),quarter:Ye({values:Ki,defaultWidth:"wide",argumentCallback:t=>t-1}),month:Ye({values:Ji,defaultWidth:"wide"}),day:Ye({values:Zi,defaultWidth:"wide"}),dayPeriod:Ye({values:er,defaultWidth:"wide",formattingValues:tr,defaultFormattingWidth:"wide"})};function $e(t){return(e,n={})=>{const a=n.width,o=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],s=e.match(o);if(!s)return null;const d=s[0],f=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],p=Array.isArray(f)?ir(f,h=>h.test(d)):or(f,h=>h.test(d));let m;m=t.valueCallback?t.valueCallback(p):p,m=n.valueCallback?n.valueCallback(m):m;const b=e.slice(d.length);return{value:m,rest:b}}}function or(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function ir(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}function rr(t){return(e,n={})=>{const a=e.match(t.matchPattern);if(!a)return null;const o=a[0],s=e.match(t.parsePattern);if(!s)return null;let d=t.valueCallback?t.valueCallback(s[0]):s[0];d=n.valueCallback?n.valueCallback(d):d;const f=e.slice(o.length);return{value:d,rest:f}}}const sr=/^(\d+)(th|st|nd|rd)?/i,lr=/\d+/i,cr={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},dr={any:[/^b/i,/^(a|c)/i]},fr={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},ur={any:[/1/i,/2/i,/3/i,/4/i]},pr={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},mr={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},xr={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},hr={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},gr={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},br={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},yr={ordinalNumber:rr({matchPattern:sr,parsePattern:lr,valueCallback:t=>parseInt(t,10)}),era:$e({matchPatterns:cr,defaultMatchWidth:"wide",parsePatterns:dr,defaultParseWidth:"any"}),quarter:$e({matchPatterns:fr,defaultMatchWidth:"wide",parsePatterns:ur,defaultParseWidth:"any",valueCallback:t=>t+1}),month:$e({matchPatterns:pr,defaultMatchWidth:"wide",parsePatterns:mr,defaultParseWidth:"any"}),day:$e({matchPatterns:xr,defaultMatchWidth:"wide",parsePatterns:hr,defaultParseWidth:"any"}),dayPeriod:$e({matchPatterns:gr,defaultMatchWidth:"any",parsePatterns:br,defaultParseWidth:"any"})},wr={code:"en-US",formatDistance:Xi,formatLong:Yi,formatRelative:Gi,localize:ar,match:yr,options:{weekStartsOn:0,firstWeekContainsDate:1}};function vr(t){const e=be(t);return Ri(e,Hi(e))+1}function kr(t){const e=be(t),n=+ft(e)-+Fi(e);return Math.round(n/Pn)+1}function Fn(t,e){var b,h,N,w;const n=be(t),a=n.getFullYear(),o=pt(),s=(e==null?void 0:e.firstWeekContainsDate)??((h=(b=e==null?void 0:e.locale)==null?void 0:b.options)==null?void 0:h.firstWeekContainsDate)??o.firstWeekContainsDate??((w=(N=o.locale)==null?void 0:N.options)==null?void 0:w.firstWeekContainsDate)??1,d=De(t,0);d.setFullYear(a+1,0,s),d.setHours(0,0,0,0);const f=Ze(d,e),p=De(t,0);p.setFullYear(a,0,s),p.setHours(0,0,0,0);const m=Ze(p,e);return n.getTime()>=f.getTime()?a+1:n.getTime()>=m.getTime()?a:a-1}function Ar(t,e){var f,p,m,b;const n=pt(),a=(e==null?void 0:e.firstWeekContainsDate)??((p=(f=e==null?void 0:e.locale)==null?void 0:f.options)==null?void 0:p.firstWeekContainsDate)??n.firstWeekContainsDate??((b=(m=n.locale)==null?void 0:m.options)==null?void 0:b.firstWeekContainsDate)??1,o=Fn(t,e),s=De(t,0);return s.setFullYear(o,0,a),s.setHours(0,0,0,0),Ze(s,e)}function Nr(t,e){const n=be(t),a=+Ze(n,e)-+Ar(n,e);return Math.round(a/Pn)+1}function _(t,e){const n=t<0?"-":"",a=Math.abs(t).toString().padStart(e,"0");return n+a}const Ne={y(t,e){const n=t.getFullYear(),a=n>0?n:1-n;return _(e==="yy"?a%100:a,e.length)},M(t,e){const n=t.getMonth();return e==="M"?String(n+1):_(n+1,2)},d(t,e){return _(t.getDate(),e.length)},a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(t,e){return _(t.getHours()%12||12,e.length)},H(t,e){return _(t.getHours(),e.length)},m(t,e){return _(t.getMinutes(),e.length)},s(t,e){return _(t.getSeconds(),e.length)},S(t,e){const n=e.length,a=t.getMilliseconds(),o=Math.trunc(a*Math.pow(10,n-3));return _(o,e.length)}},Re={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},fn={G:function(t,e,n){const a=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});case"GGGG":default:return n.era(a,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){const a=t.getFullYear(),o=a>0?a:1-a;return n.ordinalNumber(o,{unit:"year"})}return Ne.y(t,e)},Y:function(t,e,n,a){const o=Fn(t,a),s=o>0?o:1-o;if(e==="YY"){const d=s%100;return _(d,2)}return e==="Yo"?n.ordinalNumber(s,{unit:"year"}):_(s,e.length)},R:function(t,e){const n=Rn(t);return _(n,e.length)},u:function(t,e){const n=t.getFullYear();return _(n,e.length)},Q:function(t,e,n){const a=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return _(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,n){const a=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return _(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,n){const a=t.getMonth();switch(e){case"M":case"MM":return Ne.M(t,e);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,n){const a=t.getMonth();switch(e){case"L":return String(a+1);case"LL":return _(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(t,e,n,a){const o=Nr(t,a);return e==="wo"?n.ordinalNumber(o,{unit:"week"}):_(o,e.length)},I:function(t,e,n){const a=kr(t);return e==="Io"?n.ordinalNumber(a,{unit:"week"}):_(a,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getDate(),{unit:"date"}):Ne.d(t,e)},D:function(t,e,n){const a=vr(t);return e==="Do"?n.ordinalNumber(a,{unit:"dayOfYear"}):_(a,e.length)},E:function(t,e,n){const a=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});case"EEEE":default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,n,a){const o=t.getDay(),s=(o-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(s);case"ee":return _(s,2);case"eo":return n.ordinalNumber(s,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});case"eeee":default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(t,e,n,a){const o=t.getDay(),s=(o-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(s);case"cc":return _(s,e.length);case"co":return n.ordinalNumber(s,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});case"cccc":default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(t,e,n){const a=t.getDay(),o=a===0?7:a;switch(e){case"i":return String(o);case"ii":return _(o,e.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});case"iiii":default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,n){const o=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(t,e,n){const a=t.getHours();let o;switch(a===12?o=Re.noon:a===0?o=Re.midnight:o=a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(t,e,n){const a=t.getHours();let o;switch(a>=17?o=Re.evening:a>=12?o=Re.afternoon:a>=4?o=Re.morning:o=Re.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){let a=t.getHours()%12;return a===0&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return Ne.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getHours(),{unit:"hour"}):Ne.H(t,e)},K:function(t,e,n){const a=t.getHours()%12;return e==="Ko"?n.ordinalNumber(a,{unit:"hour"}):_(a,e.length)},k:function(t,e,n){let a=t.getHours();return a===0&&(a=24),e==="ko"?n.ordinalNumber(a,{unit:"hour"}):_(a,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):Ne.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getSeconds(),{unit:"second"}):Ne.s(t,e)},S:function(t,e){return Ne.S(t,e)},X:function(t,e,n){const a=t.getTimezoneOffset();if(a===0)return"Z";switch(e){case"X":return pn(a);case"XXXX":case"XX":return Oe(a);case"XXXXX":case"XXX":default:return Oe(a,":")}},x:function(t,e,n){const a=t.getTimezoneOffset();switch(e){case"x":return pn(a);case"xxxx":case"xx":return Oe(a);case"xxxxx":case"xxx":default:return Oe(a,":")}},O:function(t,e,n){const a=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+un(a,":");case"OOOO":default:return"GMT"+Oe(a,":")}},z:function(t,e,n){const a=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+un(a,":");case"zzzz":default:return"GMT"+Oe(a,":")}},t:function(t,e,n){const a=Math.trunc(t.getTime()/1e3);return _(a,e.length)},T:function(t,e,n){const a=t.getTime();return _(a,e.length)}};function un(t,e=""){const n=t>0?"-":"+",a=Math.abs(t),o=Math.trunc(a/60),s=a%60;return s===0?n+String(o):n+String(o)+e+_(s,2)}function pn(t,e){return t%60===0?(t>0?"-":"+")+_(Math.abs(t)/60,2):Oe(t,e)}function Oe(t,e=""){const n=t>0?"-":"+",a=Math.abs(t),o=_(Math.trunc(a/60),2),s=_(a%60,2);return n+o+e+s}const mn=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},In=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},Cr=(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],a=n[1],o=n[2];if(!o)return mn(t,e);let s;switch(a){case"P":s=e.dateTime({width:"short"});break;case"PP":s=e.dateTime({width:"medium"});break;case"PPP":s=e.dateTime({width:"long"});break;case"PPPP":default:s=e.dateTime({width:"full"});break}return s.replace("{{date}}",mn(a,e)).replace("{{time}}",In(o,e))},Sr={p:In,P:Cr},Mr=/^D+$/,Or=/^Y+$/,Wr=["D","DD","YY","YYYY"];function Er(t){return Mr.test(t)}function zr(t){return Or.test(t)}function Tr(t,e,n){const a=Dr(t,e,n);if(console.warn(a),Wr.includes(t))throw new RangeError(a)}function Dr(t,e,n){const a=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${a} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const jr=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Lr=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Pr=/^'([^]*?)'?$/,Rr=/''/g,Fr=/[a-zA-Z]/;function Ir(t,e,n){var b,h,N,w,I,z,Q,D;const a=pt(),o=(n==null?void 0:n.locale)??a.locale??wr,s=(n==null?void 0:n.firstWeekContainsDate)??((h=(b=n==null?void 0:n.locale)==null?void 0:b.options)==null?void 0:h.firstWeekContainsDate)??a.firstWeekContainsDate??((w=(N=a.locale)==null?void 0:N.options)==null?void 0:w.firstWeekContainsDate)??1,d=(n==null?void 0:n.weekStartsOn)??((z=(I=n==null?void 0:n.locale)==null?void 0:I.options)==null?void 0:z.weekStartsOn)??a.weekStartsOn??((D=(Q=a.locale)==null?void 0:Q.options)==null?void 0:D.weekStartsOn)??0,f=be(t);if(!Bi(f))throw new RangeError("Invalid time value");let p=e.match(Lr).map(B=>{const j=B[0];if(j==="p"||j==="P"){const oe=Sr[j];return oe(B,o.formatLong)}return B}).join("").match(jr).map(B=>{if(B==="''")return{isToken:!1,value:"'"};const j=B[0];if(j==="'")return{isToken:!1,value:Br(B)};if(fn[j])return{isToken:!0,value:B};if(j.match(Fr))throw new RangeError("Format string contains an unescaped latin alphabet character `"+j+"`");return{isToken:!1,value:B}});o.localize.preprocessor&&(p=o.localize.preprocessor(f,p));const m={firstWeekContainsDate:s,weekStartsOn:d,locale:o};return p.map(B=>{if(!B.isToken)return B.value;const j=B.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&zr(j)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&Er(j))&&Tr(j,e,String(t));const oe=fn[j[0]];return oe(f,j,o.localize,m)}).join("")}function Br(t){const e=t.match(Pr);return e?e[1].replace(Rr,"'"):t}const Hr=t=>Ir(new Date(t),"p"),_r=()=>{const[t,e]=F.useState(!1),[n,a]=F.useState(!1),[o,s]=F.useState(!1),d=ze(wn);console.log(d);const f=()=>{e(!1)},p=()=>{e(!0)},m=()=>{a(!1)},b=()=>{a(!0)},h=()=>{s(!1)},N=()=>{s(!0)};return r.jsxs("div",{children:[r.jsxs("div",{children:[r.jsx(zi,{children:"Today"}),r.jsx(Si,{children:d.length>0&&d.map(({_id:w,amount:I,date:z})=>(console.log(w),r.jsx(r.Fragment,{children:r.jsxs(Mi,{children:[r.jsxs(Oi,{children:[r.jsx("img",{src:Ha,alt:"Icon glass"}),r.jsxs(Wi,{children:[I," ml"]}),r.jsx(Ei,{children:Hr(z)})]}),r.jsxs("div",{children:[r.jsx(Di,{type:"button",onClick:b,children:r.jsx("img",{src:_a,alt:"Icon glass"})}),r.jsx(ji,{type:"button",onClick:N,children:r.jsx("img",{src:Xa,alt:"Icon glass"})}),n&&r.jsx(vi,{isOpen:n,onClose:m}),o&&r.jsx(Ci,{onShow:o,onClose:h,id:w})]})]},w)})))})]}),r.jsxs(Ti,{type:"button",onClick:p,children:[r.jsx(Ba,{})," Add Water"]}),t&&r.jsx(Ln,{isOpen:t,onClose:f})]})},Xr=_r;function Vr(t){return Nn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"16"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"16",y2:"12"},child:[]}]})(t)}const qr=g.div`
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
`,Ur=g.div`
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
`,Yr=g.input`
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
`,$r=g.div`
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
`,Gr=g.button`
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
`,Qr=()=>{const[t,e]=F.useState(!1),[n,a]=F.useState(0),o=ze(wn),{waterRate:s}=ze(hn);F.useEffect(()=>{const p=o.reduce((b,h)=>b+h.amount,0),m=Math.round(p/s*100);a(m)},[o,s]);const d=()=>{e(!1)},f=()=>{e(!0)};return r.jsxs(qr,{children:[r.jsxs(Ur,{children:[r.jsx("h2",{children:"Today"}),r.jsx(Yr,{value:n,type:"range",min:"0",max:"100"}),r.jsxs($r,{children:[r.jsx("p",{children:"0%"}),r.jsx("p",{children:"50%"}),r.jsx("p",{children:"100%"})]})]}),r.jsxs(Gr,{onClick:f,type:"button",children:[r.jsx(Vr,{}),"Add Water"]}),t&&r.jsx(Ln,{isOpen:t,onClose:d})]})},Kr=Qr,Jr="/goit-group2-react-nodejs/assets/bottleHomeScreenDesk-630fd92f.png",Zr="/goit-group2-react-nodejs/assets/bottleHomeScreenDesk2x@2x-51f4e9e6.png",es="/goit-group2-react-nodejs/assets/bottleHomeScreenTab-2759a74b.png",ts="/goit-group2-react-nodejs/assets/bottleHomeScreenTab@2x-805003a0.png",ns="/goit-group2-react-nodejs/assets/bottleHomeScreenMob-fe8938bc.png",as="/goit-group2-react-nodejs/assets/bottleHomeScreenMob2x@2x-9640a1cb.png",os="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAUwCAMAAAAFI3xKAAAA21BMVEUAAADH1/+fvP+vyf/H2P/H2P+euf/I1v/G1//F3P/G1//H1v/H1/+fu/+duv+fvP/H2P+fvP+gvP+euv+fu//F1v/H1/+eu//Fz//H1//G1v/F0f/H1/+fvP+fuv/I1//F2P+fvP/H1//H1//H1f/H2f/H1//H2P+eu/+euv/w9P/t7//t8v+euv/t8v+fvP/v8/+cuv/H2f/s8f/s8v/t8//v8//G2P+fuv/J2P/v9P/s8//t8//t8//u8//t8f+eu//J2P/t8//r8f/s8//u8//r8//G1//s8v/T/+bSAAAAR3RSTlMAsrILbyAWpy0W35x9hSynWZybQ2RDv1kQkE4Wn29vP++QX2RYN4abTjcfEN9C73o/IYXfv48vz5ybb7+ff19/e0LPz69PQNkZ8PsAAAouSURBVHja7NuxkoMgEAbg/QeZlcHChuK0JGqfLmXe/6UuelfkJgEJNFf8X6flDi7usggVMSEOXgH4dZis0EfMtOKPreuFSs1R8WoLQiXMRbHzMVizP9slfmG3zUKneo8HHZ08c+F4fRE6Mf2Ez8iL4LkIz0U8RCNvjYzgmQ6ABkmxHtiEkkYANytpzgNC2fg5yXGeAUyaAaiTPOeFEjyASc6wqst9wJ1QrdkfCZBaFuBdqJoHbkLVFmbA9hqEGbCBAl9C1SyAKFQtAFiEmtpYPPVoMHAPaXMF+1QM4AcYwP/myhzYXoiw09fYi+HkQYPAXkIbB0CF6nmWIm0iuwltegBqhKpdOXzVvg8rJ4cat5FVqFpfNkHJtmvSgIJyZObfYpLxANTm48fprAyrZ2vQcj4w6458HpyUbcO8e+46wzwAPD0+sSh23Zy6PjKwWslzHodukWd9VPCiSJkRv9Zx6Z1zdpkGxeHGfk0J1+EtHfn5frNvBykIw0AUhgd0oeiiGzceoYYSSOui2gq1ytz/RLrSUrOYNLj7vyM8XpgwIeYIiS/T6rDfTdPjt+sC282xKPbrdXHgwRMAAAAAgDl/q4PqfexLQbpzrR8NESZrdSqcBUluOtMLcvLTig4m8PornARWQSM6gdFDYyoqaHXVKC+wCRrVCExOGjcKTEqNc4KsAAdB1hG+CGwcQ+Qv15iHwMYzQzLV+sY+ZjlPATO1OlexlE7SsQ7M1FY64ehfsvL6rV/HJmuJsh8H54bmSXwAAAAA8GIPDgQAAAAAgPxfG0FVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWG/7lIQhIIwgM56TERIe1CrBylm/ysKIsL7eJV6OmcJw/x883NNcwr26ocuM9dbsMdpzI9zE9Rb86u7BLXuuXG2CWs1WbgGdaYstEGdIUtm+GABnREF/K8lS0GdPgtzUKnNrWdwpAXH4EgSnIWYPfo23zpvyF6PcZ6XSfsBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvduwltWEgCAJoG2QQg9aDFAQSuoSP0Pe/USAQ8pvFKI6DF+8doTbdVQAAAAAAT2oe1pK512UMzpunPd9VEZ42lvxsCk4Z9/xqDU647vndEvQr+dNL0OvIhjIHnUq2HEGfLZtq0GfKpj3oc8m2a9ClZtsWCPA/rNmmEXcaHJGHvDGXoNPNI/2IKhd0q27wfa5vbdikek+C8vvLBPchOOv4iLBqwb+yLbWU2zpYUgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADglV27120UiKIAfK8Ya0C4oKEwlI7t3t2W+/4vtZE3xUYxGCJtEen7GvqjM3d+BAAAAAAAAAAAAAAAAD9dd2jbQxN8RzMdaz6cShvs1LzVzOyPpVxPmXkbgz0uNfM6NR9hjtfMMgebDZmnNv7R9nk7BBuVzPPXTKsEt/fvLb6YslrFm4yP/J4leHOi2WDus8RT53wLXhqydvFUU6sKvtZnWcxWBTdNwC5isYLBC8e8xqJ7utS90ucQi6acglVN5iUWXbIEqw65tkq7vAarWgH+zwa2AnylyxzXZuAxWFfzHIvOOQTr7tnHolNegnXTyhCcM12GX2lyeaMojoEblMUKzukmt0FXFx5Om14Bt07B4/Nq1i7Y4J5ZmmdL+3ewRXPKvM3xyXxKr6m7Eswyf/pPQX67DPnuOB7iXTeWmvnLBrxLV/Kh9n8/gxP0/gj7/HAV3/c07TgO00V6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8Ic9O0htGAaiAKqADUV4bZQgSPAlfIS5/43aTWnTaiFbkE3eO8LwJc2MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOC9lKmueb1MH4kT5jW+7VviqCl+qyVxSI1neU4ccI2/sgwesMV/10S3HA33RHcAW9ZEpz2a3IKdSrTpBjvdo21JdNmirSYU8BVu8UUneN7sERmUo8k43GuJlj3RqTyc4DGLSW7QGmEhOKLkePbwMXJMqfI3aMs/8VssYs641T0i8mVSPgAAAAAAAACAT/bgQAAAAAAAyP+1EVRVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVdi1Y9XYYSAKw8MRqJOEbYEqG9TZxbJsd8u8/1Pd3RACCZHkbAik+L92u8NoZ0YWAAAAAOAvc7djWY7oDE+IedKbukXD9yxBr6Yp6WG+GM6LVVLKh7c7F/cgafaGk4qk8OHU+lVSMZzhVintdvc5wivt5IzaOK5FqoahLFVnX7lIm2GgSLMzayW4G7q8lHynOhO9uG+VLtZWFQz9ApytI0osJcMC7An0kR4nzda1KDEMth3DQcUlHYaWrGE8QdnQEiQ3ypg+3DFJNrDon6FF43QWyUCAv0RKBPgT07iJFP4DO+p4U3uhC3fk8X3VxBzYsWhUXzexifQXNd1Gtw3swh0vg2XYc6vfF9UvwZX7wIEg1U6+FOCIT1Ju/jhJfBMZ2CWVVn68TjhhlVQa+TEDnuCqpKu3z44kVUaYE9xV0rzbBzFICuR3TtHdvMX3SJcgcX6/wU96SGErJW9VDzMD4BMvVB94ofocX4LeTJnqe46P8VhutA4AAAAAAAAAAAAAAAAAAAAAAAAAAID/7dlNi+JAFIXhOycaREyKJOLHYKL2ShcS3M2yd/n//2jSjAwq+agkNPTifXbi7nDqVnkFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAIEFWJE5y5+IWGIaKS31JEqdaERqGCNaSoiy0WhDnibSmhQPc3xPLEqWU0NvdKY3tRZgrvRu8hE7nwN5t6aCnMFEamDUlyBz0kbdVLdfa0CuUbtYocOIQexXQWmypoG8B2yromIJ9MinoaGdm6PapqCNdznCvc1dGoc6GbtLF2umPoZuUdX5rIMBv5bS1ViFHuFei0lrFigzdcjn7wq/hkTIp7qhnbOgWOEXt4aaGPuv2CibaGvqE7rE4ZSc90lYqrMFVuhg8RGo6qrFTafARJlIZ2quL+EtkUILp7aV+kXRmAHoLcknp5f74lEWScvo3RJao5qKyKBPV0qthmCzSf9GF+o0QXrdFEX2uLww/AAAAAAAAAACAH23+sVqtZkfDGLvZpvrndJgbhvp9qp4Q4VD76tWSBAc5VO9OC4O3VVWjg6MtqiYbg6dl1Yj3jKdjVVHBaTdIC6bglBNcmxk87Ko2B8P4EVj7ZfALkFtkigUBftcM3Bsm3cIfBh973oHTHHnFTLShgNPMT1wh08ya9oE7g7cV+9SJZm+neEN+A82fl1on9jAjLA7LR/tmjL+RdsfjcUF6AAAAAAAAAAA8+QuvE3xjFcspUAAAAABJRU5ErkJggg==",is="/goit-group2-react-nodejs/assets/backgroundElementHomeScreenTab-4de5d48f.png",rs=g.div`
  background-size: cover;
  background: url(${os});
  height: max-content;
  background-repeat: no-repeat;
  min-height: calc(100% - 64px);

  @media screen and (min-width: 768px) {
    background: url(${is});
    min-height: calc(100% - 80px);
  }

  @media screen and (min-width: 1440px) {
    background: url(${ia});
    min-height: calc(100% - 72px);
  }
`,ss=g.div`
  margin-bottom: 40px;
  margin-top: 20px;
  background-size: 280px 208px;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${ns});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 440px;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${as});
  }

  @media screen and (min-width: 768px) {
    background-size: 518px 386px;
    background-position: calc(50% + 9px) 8px;
    height: 492px;
    background-image: url(${es});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background: url(${ts});
      background-size: 518px 386px;
      background-repeat: no-repeat;
    }
  }

  @media screen and (min-width: 1440px) {
    background-size: 738px 548px;
    background-position: calc(50% + 10px) 46px;
    height: 680px;
    background-image: url(${Jr});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${Zr});
    }
  }
`,ls=g.div`
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
`,cs=g.div`
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
`;function us(){return Be(),r.jsx(rs,{children:r.jsxs(ls,{children:[r.jsxs(ss,{children:[r.jsx(pa,{}),r.jsx(Kr,{})]}),r.jsxs(cs,{children:[r.jsx(Xr,{}),r.jsx(Ta,{})]})]})})}export{us as default};
