import{n as g,e as yt,g as hn,r as B,a as De,j as r,f as Qn,h as ze,i as gn,s as Dt,b as Kn,k as Jn,L as Zn,R as We,p as bn,l as ea,m as ta,o as yn,q as na,t as aa,B as ia,v as oa,w as ra}from"./index-2339d0d0.js";import{b as sa}from"./bg_element_des@1x-1805b66c.js";const la=g.div`
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
`,ca=g.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,da=g.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`,fa=g.div`
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
`;var wn={exports:{}};(function(t){(function(e,n){t.exports=n(e)})(typeof yt>"u"?typeof window>"u"?yt:window:yt,function(e){if(typeof e>"u"&&typeof e.document>"u")return!1;var n,a,i,s,f,d=`

Visit documentation page to learn more: https://notiflix.github.io/documentation`,p='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',m={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},b={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},h={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},N={ID:"NotiflixReportWrap",className:"notiflix-report",width:"320px",backgroundColor:"#f8f8f8",borderRadius:"25px",rtl:!1,zindex:4002,backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",backOverlayClickToClose:!1,fontFamily:"Quicksand",svgSize:"110px",plainText:!0,titleFontSize:"16px",titleMaxLength:34,messageFontSize:"13px",messageMaxLength:400,buttonFontSize:"14px",buttonMaxLength:34,cssAnimation:!0,cssAnimationDuration:360,cssAnimationStyle:"fade",success:{svgColor:"#32c682",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#32c682",buttonColor:"#fff",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{svgColor:"#ff5549",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#ff5549",buttonColor:"#fff",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{svgColor:"#eebf31",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#eebf31",buttonColor:"#fff",backOverlayColor:"rgba(238,191,49,0.2)"},info:{svgColor:"#26c0d3",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#26c0d3",buttonColor:"#fff",backOverlayColor:"rgba(38,192,211,0.2)"}},k={Show:"Show",Ask:"Ask",Prompt:"Prompt"},L={ID:"NotiflixConfirmWrap",className:"notiflix-confirm",width:"300px",zindex:4003,position:"center",distance:"10px",backgroundColor:"#f8f8f8",borderRadius:"25px",backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,cssAnimationStyle:"fade",plainText:!0,titleColor:"#32c682",titleFontSize:"16px",titleMaxLength:34,messageColor:"#1e1e1e",messageFontSize:"14px",messageMaxLength:110,buttonsFontSize:"15px",buttonsMaxLength:34,okButtonColor:"#f8f8f8",okButtonBackground:"#32c682",cancelButtonColor:"#f8f8f8",cancelButtonBackground:"#a9a9a9"},W={Standard:"Standard",Hourglass:"Hourglass",Circle:"Circle",Arrows:"Arrows",Dots:"Dots",Pulse:"Pulse",Custom:"Custom",Notiflix:"Notiflix"},V={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},j={Standard:"Standard",Hourglass:"Hourglass",Circle:"Circle",Arrows:"Arrows",Dots:"Dots",Pulse:"Pulse"},H={ID:"NotiflixBlockWrap",querySelectorLimit:200,className:"notiflix-block",position:"absolute",zindex:1e3,backgroundColor:"rgba(255,255,255,0.9)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,svgSize:"45px",svgColor:"#383838",messageFontSize:"14px",messageMaxLength:34,messageColor:"#383838"},P=function(o){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549",`
`+o+d)},oe=function(o){return console.log("%c Notiflix Info ","padding:2px;border-radius:20px;color:#fff;background:#26c0d3",`
`+o+d)},te=function(o){return o||(o="head"),e.document[o]!==null||(P(`
Notiflix needs to be appended to the "<`+o+'>" element, but you called it before the "<'+o+'>" element has been created.'),!1)},q=function(o,l){if(!te("head"))return!1;if(o()!==null&&!e.document.getElementById(l)){var c=e.document.createElement("style");c.id=l,c.innerHTML=o(),e.document.head.appendChild(c)}},w=function(){var o={},l=!1,c=0;Object.prototype.toString.call(arguments[0])==="[object Boolean]"&&(l=arguments[0],c++);for(var y=function(C){for(var T in C)Object.prototype.hasOwnProperty.call(C,T)&&(o[T]=l&&Object.prototype.toString.call(C[T])==="[object Object]"?w(o[T],C[T]):C[T])};c<arguments.length;c++)y(arguments[c]);return o},D=function(o){var l=e.document.createElement("div");return l.innerHTML=o,l.textContent||l.innerText||""},K=function(o,l){o||(o="110px"),l||(l="#32c682");var c='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="'+o+'" height="'+o+'" fill="'+l+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';return c},Xe=function(o,l){o||(o="110px"),l||(l="#ff5549");var c='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="'+o+'" height="'+o+'" fill="'+l+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';return c},mt=function(o,l){o||(o="110px"),l||(l="#eebf31");var c='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="'+o+'" height="'+o+'" fill="'+l+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';return c},Le=function(o,l){o||(o="110px"),l||(l="#26c0d3");var c='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="'+o+'" height="'+o+'" fill="'+l+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';return c},Pe=function(o,l){o||(o="60px"),l||(l="#32c682");var c='<svg xmlns="http://www.w3.org/2000/svg" stroke="'+l+'" width="'+o+'" height="'+o+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>';return c},O=function(o,l){o||(o="60px"),l||(l="#32c682");var c='<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+l+'" width="'+o+'" height="'+o+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>';return c},S=function(o,l){o||(o="60px"),l||(l="#32c682");var c='<svg xmlns="http://www.w3.org/2000/svg" width="'+o+'" height="'+o+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+o+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+o+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+l+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>';return c},U=function(o,l){o||(o="60px"),l||(l="#32c682");var c='<svg xmlns="http://www.w3.org/2000/svg" fill="'+l+'" width="'+o+'" height="'+o+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>';return c},u=function(o,l){o||(o="60px"),l||(l="#32c682");var c='<svg xmlns="http://www.w3.org/2000/svg" fill="'+l+'" width="'+o+'" height="'+o+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>';return c},A=function(o,l){o||(o="60px"),l||(l="#32c682");var c='<svg xmlns="http://www.w3.org/2000/svg" stroke="'+l+'" width="'+o+'" height="'+o+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>';return c},ee=function(o,l,c){o||(o="60px"),l||(l="#f8f8f8"),c||(c="#32c682");var y='<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+o+'" height="'+o+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+l+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+c+'" stroke="'+c+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>';return y},ne=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},Y=0,ce=function(o,l,c,y){if(!te("body"))return!1;n||re.Notify.init({});var C=w(!0,n,{});if(typeof c=="object"&&!Array.isArray(c)||typeof y=="object"&&!Array.isArray(y)){var T={};typeof c=="object"?T=c:typeof y=="object"&&(T=y),n=w(!0,n,T)}var E=n[o.toLocaleLowerCase("en")];Y++,typeof l!="string"&&(l="Notiflix "+o),n.plainText&&(l=D(l)),!n.plainText&&l.length>n.messageMaxLength&&(n=w(!0,n,{closeButton:!0,messageMaxLength:150}),l='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),l.length>n.messageMaxLength&&(l=l.substring(0,n.messageMaxLength)+"..."),n.fontAwesomeIconStyle==="shadow"&&(E.fontAwesomeIconColor=E.background),n.cssAnimation||(n.cssAnimationDuration=0);var x=e.document.getElementById(b.wrapID)||e.document.createElement("div");if(x.id=b.wrapID,x.style.width=n.width,x.style.zIndex=n.zindex,x.style.opacity=n.opacity,n.position==="center-center"?(x.style.left=n.distance,x.style.top=n.distance,x.style.right=n.distance,x.style.bottom=n.distance,x.style.margin="auto",x.classList.add("nx-flex-center-center"),x.style.maxHeight="calc((100vh - "+n.distance+") - "+n.distance+")",x.style.display="flex",x.style.flexWrap="wrap",x.style.flexDirection="column",x.style.justifyContent="center",x.style.alignItems="center",x.style.pointerEvents="none"):n.position==="center-top"?(x.style.left=n.distance,x.style.right=n.distance,x.style.top=n.distance,x.style.bottom="auto",x.style.margin="auto"):n.position==="center-bottom"?(x.style.left=n.distance,x.style.right=n.distance,x.style.bottom=n.distance,x.style.top="auto",x.style.margin="auto"):n.position==="right-bottom"?(x.style.right=n.distance,x.style.bottom=n.distance,x.style.top="auto",x.style.left="auto"):n.position==="left-top"?(x.style.left=n.distance,x.style.top=n.distance,x.style.right="auto",x.style.bottom="auto"):n.position==="left-bottom"?(x.style.left=n.distance,x.style.bottom=n.distance,x.style.top="auto",x.style.right="auto"):(x.style.right=n.distance,x.style.top=n.distance,x.style.left="auto",x.style.bottom="auto"),n.backOverlay){var R=e.document.getElementById(b.overlayID)||e.document.createElement("div");R.id=b.overlayID,R.style.width="100%",R.style.height="100%",R.style.position="fixed",R.style.zIndex=n.zindex-1,R.style.left=0,R.style.top=0,R.style.right=0,R.style.bottom=0,R.style.background=E.backOverlayColor||n.backOverlayColor,R.className=n.cssAnimation?"nx-with-animation":"",R.style.animationDuration=n.cssAnimation?n.cssAnimationDuration+"ms":"",e.document.getElementById(b.overlayID)||e.document.body.appendChild(R)}e.document.getElementById(b.wrapID)||e.document.body.appendChild(x);var v=e.document.createElement("div");v.id=n.ID+"-"+Y,v.className=n.className+" "+E.childClassName+" "+(n.cssAnimation?"nx-with-animation":"")+" "+(n.useIcon?"nx-with-icon":"")+" nx-"+n.cssAnimationStyle+" "+(n.closeButton&&typeof c!="function"?"nx-with-close-button":"")+" "+(typeof c=="function"?"nx-with-callback":"")+" "+(n.clickToClose?"nx-notify-click-to-close":""),v.style.fontSize=n.fontSize,v.style.color=E.textColor,v.style.background=E.background,v.style.borderRadius=n.borderRadius,v.style.pointerEvents="all",n.rtl&&(v.setAttribute("dir","rtl"),v.classList.add("nx-rtl-on")),v.style.fontFamily='"'+n.fontFamily+'", '+p,n.cssAnimation&&(v.style.animationDuration=n.cssAnimationDuration+"ms");var X="";if(n.closeButton&&typeof c!="function"&&(X='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+E.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),!n.useIcon)v.innerHTML='<span class="nx-message">'+l+"</span>"+(n.closeButton?X:"");else if(n.useFontAwesome)v.innerHTML='<i style="color:'+E.fontAwesomeIconColor+"; font-size:"+n.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+E.fontAwesomeClassName+" "+(n.fontAwesomeIconStyle==="shadow"?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+l+"</span>"+(n.closeButton?X:"");else{var Q="";o===m.Success?Q='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+E.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':o===m.Failure?Q='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+E.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':o===m.Warning?Q='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+E.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':o===m.Info&&(Q='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+E.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),v.innerHTML=Q+'<span class="nx-message nx-with-icon">'+l+"</span>"+(n.closeButton?X:"")}if(n.position==="left-bottom"||n.position==="right-bottom"){var Z=e.document.getElementById(b.wrapID);Z.insertBefore(v,Z.firstChild)}else e.document.getElementById(b.wrapID).appendChild(v);var G=e.document.getElementById(v.id);if(G){var F,J,I=function(){G.classList.add("nx-remove");var z=e.document.getElementById(b.overlayID);z&&0>=x.childElementCount&&z.classList.add("nx-remove"),clearTimeout(F)},ue=function(){if(G&&G.parentNode!==null&&G.parentNode.removeChild(G),0>=x.childElementCount&&x.parentNode!==null){x.parentNode.removeChild(x);var z=e.document.getElementById(b.overlayID);z&&z.parentNode!==null&&z.parentNode.removeChild(z)}clearTimeout(J)};if(n.closeButton&&typeof c!="function"){var pe=e.document.getElementById(v.id).querySelector("span.nx-close-button");pe.addEventListener("click",function(){I();var z=setTimeout(function(){ue(),clearTimeout(z)},n.cssAnimationDuration)})}if((typeof c=="function"||n.clickToClose)&&G.addEventListener("click",function(){typeof c=="function"&&c(),I();var z=setTimeout(function(){ue(),clearTimeout(z)},n.cssAnimationDuration)}),!n.closeButton&&typeof c!="function"){var se=function(){F=setTimeout(function(){I()},n.timeout),J=setTimeout(function(){ue()},n.timeout+n.cssAnimationDuration)};se(),n.pauseOnHover&&(G.addEventListener("mouseenter",function(){G.classList.add("nx-paused"),clearTimeout(F),clearTimeout(J)}),G.addEventListener("mouseleave",function(){G.classList.remove("nx-paused"),se()}))}}if(n.showOnlyTheLastOne&&0<Y)for(var le,$=e.document.querySelectorAll("[id^="+n.ID+"-]:not([id="+n.ID+"-"+Y+"])"),Ae=0;Ae<$.length;Ae++)le=$[Ae],le.parentNode!==null&&le.parentNode.removeChild(le);n=w(!0,n,C)},ye=function(){return'[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},we=function(o,l,c,y,C,T){if(!te("body"))return!1;a||re.Report.init({});var E={};if(typeof C=="object"&&!Array.isArray(C)||typeof T=="object"&&!Array.isArray(T)){var x={};typeof C=="object"?x=C:typeof T=="object"&&(x=T),E=w(!0,a,{}),a=w(!0,a,x)}var R=a[o.toLocaleLowerCase("en")];typeof l!="string"&&(l="Notiflix "+o),typeof c!="string"&&(o===h.Success?c='"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein':o===h.Failure?c='"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford':o===h.Warning?c='"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk':o===h.Info&&(c='"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')),typeof y!="string"&&(y="Okay"),a.plainText&&(l=D(l),c=D(c),y=D(y)),a.plainText||(l.length>a.titleMaxLength&&(l="Possible HTML Tags Error",c='The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.',y="Okay"),c.length>a.messageMaxLength&&(l="Possible HTML Tags Error",c='The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.',y="Okay"),y.length>a.buttonMaxLength&&(l="Possible HTML Tags Error",c='The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.',y="Okay")),l.length>a.titleMaxLength&&(l=l.substring(0,a.titleMaxLength)+"..."),c.length>a.messageMaxLength&&(c=c.substring(0,a.messageMaxLength)+"..."),y.length>a.buttonMaxLength&&(y=y.substring(0,a.buttonMaxLength)+"..."),a.cssAnimation||(a.cssAnimationDuration=0);var v=e.document.createElement("div");v.id=N.ID,v.className=a.className,v.style.zIndex=a.zindex,v.style.borderRadius=a.borderRadius,v.style.fontFamily='"'+a.fontFamily+'", '+p,a.rtl&&(v.setAttribute("dir","rtl"),v.classList.add("nx-rtl-on")),v.style.display="flex",v.style.flexWrap="wrap",v.style.flexDirection="column",v.style.alignItems="center",v.style.justifyContent="center";var X="",Q=a.backOverlayClickToClose===!0;a.backOverlay&&(X='<div class="'+a.className+"-overlay"+(a.cssAnimation?" nx-with-animation":"")+(Q?" nx-report-click-to-close":"")+'" style="background:'+(R.backOverlayColor||a.backOverlayColor)+";animation-duration:"+a.cssAnimationDuration+'ms;"></div>');var Z="";if(o===h.Success?Z=K(a.svgSize,R.svgColor):o===h.Failure?Z=Xe(a.svgSize,R.svgColor):o===h.Warning?Z=mt(a.svgSize,R.svgColor):o===h.Info&&(Z=Le(a.svgSize,R.svgColor)),v.innerHTML=X+'<div class="'+a.className+"-content"+(a.cssAnimation?" nx-with-animation ":"")+" nx-"+a.cssAnimationStyle+'" style="width:'+a.width+"; background:"+a.backgroundColor+"; animation-duration:"+a.cssAnimationDuration+'ms;"><div style="width:'+a.svgSize+"; height:"+a.svgSize+';" class="'+a.className+'-icon">'+Z+'</div><h5 class="'+a.className+'-title" style="font-weight:500; font-size:'+a.titleFontSize+"; color:"+R.titleColor+';">'+l+'</h5><p class="'+a.className+'-message" style="font-size:'+a.messageFontSize+"; color:"+R.messageColor+';">'+c+'</p><a id="NXReportButton" class="'+a.className+'-button" style="font-weight:500; font-size:'+a.buttonFontSize+"; background:"+R.buttonBackground+"; color:"+R.buttonColor+';">'+y+"</a></div>",!e.document.getElementById(v.id)){e.document.body.appendChild(v);var G=function(){var I=e.document.getElementById(v.id);I.classList.add("nx-remove");var ue=setTimeout(function(){I.parentNode!==null&&I.parentNode.removeChild(I),clearTimeout(ue)},a.cssAnimationDuration)},F=e.document.getElementById("NXReportButton");if(F.addEventListener("click",function(){typeof C=="function"&&C(),G()}),X&&Q){var J=e.document.querySelector(".nx-report-click-to-close");J.addEventListener("click",function(){G()})}}a=w(!0,a,E)},xt=function(){return'[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*="-content"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-head"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*="-content"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*="-content"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},Ve=function(o,l,c,y,C,T,E,x,R){if(!te("body"))return!1;i||re.Confirm.init({});var v=w(!0,i,{});typeof R!="object"||Array.isArray(R)||(i=w(!0,i,R)),typeof l!="string"&&(l="Notiflix Confirm"),typeof c!="string"&&(c="Do you agree with me?"),typeof C!="string"&&(C="Yes"),typeof T!="string"&&(T="No"),typeof E!="function"&&(E=void 0),typeof x!="function"&&(x=void 0),i.plainText&&(l=D(l),c=D(c),C=D(C),T=D(T)),i.plainText||(l.length>i.titleMaxLength&&(l="Possible HTML Tags Error",c='The "plainText" option is "false" and the title content length is more than "titleMaxLength" option.',C="Okay",T="..."),c.length>i.messageMaxLength&&(l="Possible HTML Tags Error",c='The "plainText" option is "false" and the message content length is more than "messageMaxLength" option.',C="Okay",T="..."),(C.length||T.length)>i.buttonsMaxLength&&(l="Possible HTML Tags Error",c='The "plainText" option is "false" and the buttons content length is more than "buttonsMaxLength" option.',C="Okay",T="...")),l.length>i.titleMaxLength&&(l=l.substring(0,i.titleMaxLength)+"..."),c.length>i.messageMaxLength&&(c=c.substring(0,i.messageMaxLength)+"..."),C.length>i.buttonsMaxLength&&(C=C.substring(0,i.buttonsMaxLength)+"..."),T.length>i.buttonsMaxLength&&(T=T.substring(0,i.buttonsMaxLength)+"..."),i.cssAnimation||(i.cssAnimationDuration=0);var X=e.document.createElement("div");X.id=L.ID,X.className=i.className+(i.cssAnimation?" nx-with-animation nx-"+i.cssAnimationStyle:""),X.style.zIndex=i.zindex,X.style.padding=i.distance,i.rtl&&(X.setAttribute("dir","rtl"),X.classList.add("nx-rtl-on"));var Q=typeof i.position=="string"?i.position.trim():"center";X.classList.add("nx-position-"+Q),X.style.fontFamily='"'+i.fontFamily+'", '+p;var Z="";i.backOverlay&&(Z='<div class="'+i.className+"-overlay"+(i.cssAnimation?" nx-with-animation":"")+'" style="background:'+i.backOverlayColor+";animation-duration:"+i.cssAnimationDuration+'ms;"></div>');var G="";typeof E=="function"&&(G='<a id="NXConfirmButtonCancel" class="nx-confirm-button-cancel" style="color:'+i.cancelButtonColor+";background:"+i.cancelButtonBackground+";font-size:"+i.buttonsFontSize+';">'+T+"</a>");var F="",J=null,I=void 0;if(o===k.Ask||o===k.Prompt){J=y||"";var ue=o===k.Ask||200<J.length?Math.ceil(1.5*J.length):250,pe=o===k.Prompt?'value="'+J+'"':"";F='<div><input id="NXConfirmValidationInput" type="text" '+pe+' maxlength="'+ue+'" style="font-size:'+i.messageFontSize+";border-radius: "+i.borderRadius+';" autocomplete="off" spellcheck="false" autocapitalize="none" /></div>'}if(X.innerHTML=Z+'<div class="'+i.className+'-content" style="width:'+i.width+"; background:"+i.backgroundColor+"; animation-duration:"+i.cssAnimationDuration+"ms; border-radius: "+i.borderRadius+';"><div class="'+i.className+'-head"><h5 style="color:'+i.titleColor+";font-size:"+i.titleFontSize+';">'+l+'</h5><div style="color:'+i.messageColor+";font-size:"+i.messageFontSize+';">'+c+F+'</div></div><div class="'+i.className+'-buttons"><a id="NXConfirmButtonOk" class="nx-confirm-button-ok'+(typeof E=="function"?"":" nx-full")+'" style="color:'+i.okButtonColor+";background:"+i.okButtonBackground+";font-size:"+i.buttonsFontSize+';">'+C+"</a>"+G+"</div></div>",!e.document.getElementById(X.id)){e.document.body.appendChild(X);var se=e.document.getElementById(X.id),le=e.document.getElementById("NXConfirmButtonOk"),$=e.document.getElementById("NXConfirmValidationInput");if($&&($.focus(),$.setSelectionRange(0,($.value||"").length),$.addEventListener("keyup",function(z){var Re=z.target.value;if(o===k.Ask&&Re!==J)z.preventDefault(),$.classList.add("nx-validation-failure"),$.classList.remove("nx-validation-success");else{o===k.Ask&&($.classList.remove("nx-validation-failure"),$.classList.add("nx-validation-success"));var qe=(z.key||"").toLocaleLowerCase("en")==="enter"||z.keyCode===13;qe&&le.dispatchEvent(new Event("click"))}})),le.addEventListener("click",function(z){if(o===k.Ask&&J&&$){var Re=($.value||"").toString();if(Re!==J)return $.focus(),$.classList.add("nx-validation-failure"),z.stopPropagation(),z.preventDefault(),z.returnValue=!1,z.cancelBubble=!0,!1;$.classList.remove("nx-validation-failure")}typeof E=="function"&&(o===k.Prompt&&$&&(I=$.value||""),E(I)),se.classList.add("nx-remove");var qe=setTimeout(function(){se.parentNode!==null&&(se.parentNode.removeChild(se),clearTimeout(qe))},i.cssAnimationDuration)}),typeof E=="function"){var Ae=e.document.getElementById("NXConfirmButtonCancel");Ae.addEventListener("click",function(){typeof x=="function"&&(o===k.Prompt&&$&&(I=$.value||""),x(I)),se.classList.add("nx-remove");var z=setTimeout(function(){se.parentNode!==null&&(se.parentNode.removeChild(se),clearTimeout(z))},i.cssAnimationDuration)})}}i=w(!0,i,v)},ht=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},ve=function(o,l,c,y,C){if(!te("body"))return!1;s||re.Loading.init({});var T=w(!0,s,{});if(typeof l=="object"&&!Array.isArray(l)||typeof c=="object"&&!Array.isArray(c)){var E={};typeof l=="object"?E=l:typeof c=="object"&&(E=c),s=w(!0,s,E)}var x="";if(typeof l=="string"&&0<l.length&&(x=l),y){x=x.length>s.messageMaxLength?D(x).toString().substring(0,s.messageMaxLength)+"...":D(x).toString();var R="";0<x.length&&(R='<p id="'+s.messageID+'" class="nx-loading-message" style="color:'+s.messageColor+";font-size:"+s.messageFontSize+';">'+x+"</p>"),s.cssAnimation||(s.cssAnimationDuration=0);var v="";if(o===W.Standard)v=Pe(s.svgSize,s.svgColor);else if(o===W.Hourglass)v=O(s.svgSize,s.svgColor);else if(o===W.Circle)v=S(s.svgSize,s.svgColor);else if(o===W.Arrows)v=U(s.svgSize,s.svgColor);else if(o===W.Dots)v=u(s.svgSize,s.svgColor);else if(o===W.Pulse)v=A(s.svgSize,s.svgColor);else if(o===W.Custom&&s.customSvgCode!==null&&s.customSvgUrl===null)v=s.customSvgCode||"";else if(o===W.Custom&&s.customSvgUrl!==null&&s.customSvgCode===null)v='<img class="nx-custom-loading-icon" width="'+s.svgSize+'" height="'+s.svgSize+'" src="'+s.customSvgUrl+'" alt="Notiflix">';else{if(o===W.Custom&&(s.customSvgUrl===null||s.customSvgCode===null))return P('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;v=ee(s.svgSize,"#f8f8f8","#32c682")}var X=parseInt((s.svgSize||"").replace(/[^0-9]/g,"")),Q=e.innerWidth,Z=X>=Q?Q-40+"px":X+"px",G='<div style="width:'+Z+"; height:"+Z+';" class="'+s.className+"-icon"+(0<x.length?" nx-with-message":"")+'">'+v+"</div>",F=e.document.createElement("div");if(F.id=V.ID,F.className=s.className+(s.cssAnimation?" nx-with-animation":"")+(s.clickToClose?" nx-loading-click-to-close":""),F.style.zIndex=s.zindex,F.style.background=s.backgroundColor,F.style.animationDuration=s.cssAnimationDuration+"ms",F.style.fontFamily='"'+s.fontFamily+'", '+p,F.style.display="flex",F.style.flexWrap="wrap",F.style.flexDirection="column",F.style.alignItems="center",F.style.justifyContent="center",s.rtl&&(F.setAttribute("dir","rtl"),F.classList.add("nx-rtl-on")),F.innerHTML=G+R,!e.document.getElementById(F.id)&&(e.document.body.appendChild(F),s.clickToClose)){var J=e.document.getElementById(F.id);J.addEventListener("click",function(){F.classList.add("nx-remove");var pe=setTimeout(function(){F.parentNode!==null&&(F.parentNode.removeChild(F),clearTimeout(pe))},s.cssAnimationDuration)})}}else if(e.document.getElementById(V.ID))var I=e.document.getElementById(V.ID),ue=setTimeout(function(){I.classList.add("nx-remove");var pe=setTimeout(function(){I.parentNode!==null&&(I.parentNode.removeChild(I),clearTimeout(pe))},s.cssAnimationDuration);clearTimeout(ue)},C);s=w(!0,s,T)},Hn=function(o){typeof o!="string"&&(o="");var l=e.document.getElementById(V.ID);if(l)if(0<o.length){o=o.length>s.messageMaxLength?D(o).substring(0,s.messageMaxLength)+"...":D(o);var c=l.getElementsByTagName("p")[0];if(c)c.innerHTML=o;else{var y=e.document.createElement("p");y.id=s.messageID,y.className="nx-loading-message nx-loading-message-new",y.style.color=s.messageColor,y.style.fontSize=s.messageFontSize,y.innerHTML=o,l.appendChild(y)}}else P("Where is the new message?")},_n=function(){return'[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*="-icon"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*="-icon"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*="-message"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].nx-with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}'},gt=0,Se=function(o,l,c,y,C,T){var E;if(Array.isArray(c)){if(1>c.length)return P("Array of HTMLElements should contains at least one HTMLElement."),!1;E=c}else if(Object.prototype.isPrototypeOf.call(NodeList.prototype,c)){if(1>c.length)return P("NodeListOf<HTMLElement> should contains at least one HTMLElement."),!1;E=Array.prototype.slice.call(c)}else{var x=typeof c!="string"||1>(c||"").length||(c||"").length===1&&((c||"")[0]==="#"||(c||"")[0]===".");if(x)return P("The selector parameter must be a string and matches a specified CSS selector(s)."),!1;var R=e.document.querySelectorAll(c);if(1>R.length)return P('You called the "Notiflix.Block..." function with "'+c+'" selector, but there is no such element(s) in the document.'),!1;E=R}f||re.Block.init({});var v=w(!0,f,{});if(typeof y=="object"&&!Array.isArray(y)||typeof C=="object"&&!Array.isArray(C)){var X={};typeof y=="object"?X=y:typeof C=="object"&&(X=C),f=w(!0,f,X)}var Q="";typeof y=="string"&&0<y.length&&(Q=y),f.cssAnimation||(f.cssAnimationDuration=0);var Z=H.className;typeof f.className=="string"&&(Z=f.className.trim());var G=typeof f.querySelectorLimit=="number"?f.querySelectorLimit:200,F=(E||[]).length>=G?G:E.length,J="nx-block-temporary-position";if(o){for(var I,ue=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr","html","head","title","script","style","iframe"],pe=0;pe<F;pe++)if(I=E[pe],I){if(-1<ue.indexOf(I.tagName.toLocaleLowerCase("en")))break;var se=I.querySelectorAll("[id^="+H.ID+"]");if(1>se.length){var le="";l&&(l===j.Hourglass?le=O(f.svgSize,f.svgColor):l===j.Circle?le=S(f.svgSize,f.svgColor):l===j.Arrows?le=U(f.svgSize,f.svgColor):l===j.Dots?le=u(f.svgSize,f.svgColor):l===j.Pulse?le=A(f.svgSize,f.svgColor):le=Pe(f.svgSize,f.svgColor));var $='<span class="'+Z+'-icon" style="width:'+f.svgSize+";height:"+f.svgSize+';">'+le+"</span>",Ae="";0<Q.length&&(Q=Q.length>f.messageMaxLength?D(Q).substring(0,f.messageMaxLength)+"...":D(Q),Ae='<span style="font-size:'+f.messageFontSize+";color:"+f.messageColor+';" class="'+Z+'-message">'+Q+"</span>"),gt++;var z=e.document.createElement("div");z.id=H.ID+"-"+gt,z.className=Z+(f.cssAnimation?" nx-with-animation":""),z.style.position=f.position,z.style.zIndex=f.zindex,z.style.background=f.backgroundColor,z.style.animationDuration=f.cssAnimationDuration+"ms",z.style.fontFamily='"'+f.fontFamily+'", '+p,z.style.display="flex",z.style.flexWrap="wrap",z.style.flexDirection="column",z.style.alignItems="center",z.style.justifyContent="center",f.rtl&&(z.setAttribute("dir","rtl"),z.classList.add("nx-rtl-on")),z.innerHTML=$+Ae;var Re=e.getComputedStyle(I).getPropertyValue("position"),qe=typeof Re=="string"?Re.toLocaleLowerCase("en"):"relative",Wt=Math.round(1.25*parseInt(f.svgSize))+40,Xn=I.offsetHeight||0,bt="";Wt>Xn&&(bt="min-height:"+Wt+"px;");var Et="";Et=I.getAttribute("id")?"#"+I.getAttribute("id"):I.classList[0]?"."+I.classList[0]:(I.tagName||"").toLocaleLowerCase("en");var zt="",Tt=-1>=["absolute","relative","fixed","sticky"].indexOf(qe);if(Tt||0<bt.length){if(!te("head"))return!1;Tt&&(zt="position:relative!important;");var Vn='<style id="Style-'+H.ID+"-"+gt+'">'+Et+"."+J+"{"+zt+bt+"}</style>",jt=e.document.createRange();jt.selectNode(e.document.head);var qn=jt.createContextualFragment(Vn);e.document.head.appendChild(qn),I.classList.add(J)}I.appendChild(z)}}}else var Un=function(ae){var de=setTimeout(function(){ae.parentNode!==null&&ae.parentNode.removeChild(ae);var Ue=ae.getAttribute("id"),nt=e.document.getElementById("Style-"+Ue);nt&&nt.parentNode!==null&&nt.parentNode.removeChild(nt),clearTimeout(de)},f.cssAnimationDuration)},Yn=function(ae){if(ae&&0<ae.length)for(var de,Ue=0;Ue<ae.length;Ue++)de=ae[Ue],de&&(de.classList.add("nx-remove"),Un(de));else oe(typeof c=="string"?'"Notiflix.Block.remove();" function called with "'+c+'" selector, but this selector does not have a "Block" element to remove.':'"Notiflix.Block.remove();" function called with "'+c+'", but this "Array<HTMLElement>" or "NodeListOf<HTMLElement>" does not have a "Block" element to remove.')},$n=function(ae){var de=setTimeout(function(){ae.classList.remove(J),clearTimeout(de)},f.cssAnimationDuration+300)},Gn=setTimeout(function(){for(var ae,de=0;de<F;de++)ae=E[de],ae&&($n(ae),se=ae.querySelectorAll("[id^="+H.ID+"]"),Yn(se));clearTimeout(Gn)},T);f=w(!0,f,v)},re={Notify:{init:function(o){n=w(!0,b,o),q(ne,"NotiflixNotifyInternalCSS")},merge:function(o){return n?void(n=w(!0,n,o)):(P("You have to initialize the Notify module before call Merge function."),!1)},success:function(o,l,c){ce(m.Success,o,l,c)},failure:function(o,l,c){ce(m.Failure,o,l,c)},warning:function(o,l,c){ce(m.Warning,o,l,c)},info:function(o,l,c){ce(m.Info,o,l,c)}},Report:{init:function(o){a=w(!0,N,o),q(ye,"NotiflixReportInternalCSS")},merge:function(o){return a?void(a=w(!0,a,o)):(P("You have to initialize the Report module before call Merge function."),!1)},success:function(o,l,c,y,C){we(h.Success,o,l,c,y,C)},failure:function(o,l,c,y,C){we(h.Failure,o,l,c,y,C)},warning:function(o,l,c,y,C){we(h.Warning,o,l,c,y,C)},info:function(o,l,c,y,C){we(h.Info,o,l,c,y,C)}},Confirm:{init:function(o){i=w(!0,L,o),q(xt,"NotiflixConfirmInternalCSS")},merge:function(o){return i?void(i=w(!0,i,o)):(P("You have to initialize the Confirm module before call Merge function."),!1)},show:function(o,l,c,y,C,T,E){Ve(k.Show,o,l,null,c,y,C,T,E)},ask:function(o,l,c,y,C,T,E,x){Ve(k.Ask,o,l,c,y,C,T,E,x)},prompt:function(o,l,c,y,C,T,E,x){Ve(k.Prompt,o,l,c,y,C,T,E,x)}},Loading:{init:function(o){s=w(!0,V,o),q(ht,"NotiflixLoadingInternalCSS")},merge:function(o){return s?void(s=w(!0,s,o)):(P("You have to initialize the Loading module before call Merge function."),!1)},standard:function(o,l){ve(W.Standard,o,l,!0,0)},hourglass:function(o,l){ve(W.Hourglass,o,l,!0,0)},circle:function(o,l){ve(W.Circle,o,l,!0,0)},arrows:function(o,l){ve(W.Arrows,o,l,!0,0)},dots:function(o,l){ve(W.Dots,o,l,!0,0)},pulse:function(o,l){ve(W.Pulse,o,l,!0,0)},custom:function(o,l){ve(W.Custom,o,l,!0,0)},notiflix:function(o,l){ve(W.Notiflix,o,l,!0,0)},remove:function(o){typeof o!="number"&&(o=0),ve(null,null,null,!1,o)},change:function(o){Hn(o)}},Block:{init:function(o){f=w(!0,H,o),q(_n,"NotiflixBlockInternalCSS")},merge:function(o){return f?void(f=w(!0,f,o)):(P('You have to initialize the "Notiflix.Block" module before call Merge function.'),!1)},standard:function(o,l,c){Se(!0,j.Standard,o,l,c)},hourglass:function(o,l,c){Se(!0,j.Hourglass,o,l,c)},circle:function(o,l,c){Se(!0,j.Circle,o,l,c)},arrows:function(o,l,c){Se(!0,j.Arrows,o,l,c)},dots:function(o,l,c){Se(!0,j.Dots,o,l,c)},pulse:function(o,l,c){Se(!0,j.Pulse,o,l,c)},remove:function(o,l){typeof l!="number"&&(l=0),Se(!1,null,o,null,null,l)}}};return typeof e.Notiflix=="object"?w(!0,e.Notiflix,{Notify:re.Notify,Report:re.Report,Confirm:re.Confirm,Loading:re.Loading,Block:re.Block}):{Notify:re.Notify,Report:re.Report,Confirm:re.Confirm,Loading:re.Loading,Block:re.Block}})})(wn);var ua=wn.exports;const Lt=hn(ua),pa=({onClose:t})=>{const[e,n]=B.useState(0),[a,i]=B.useState(0),[s,f]=B.useState(0),[d,p]=B.useState(!0),[m,b]=B.useState(0),h=De(),N=()=>{p(!d)},k=j=>{n(Number(j.target.value))},L=j=>{i(Number(j.target.value))};B.useEffect(()=>{f(d?Math.ceil((e*.03+a*.4)*100)/100<2?2:Math.ceil((e*.03+a*.4)*100)/100:Math.ceil((e*.04+a*.6)*100)/100<2?2:Math.ceil((e*.04+a*.6)*100)/100)},[d,e,a]);const W=j=>{b(Number(j.target.value))},V=j=>{try{if(j.preventDefault(),m<2)return Lt.Notify.failure("The required amount of water in liters per day: 2L");if(m>15)return Lt.Notify.failure("The maximum amount of water in liters per day: 15L");h(Qn(m)),t()}catch(H){console.error("error",H)}};return B.useEffect(()=>{const j=H=>{H.key==="Escape"&&t()};window.addEventListener("keydown",j)},[t]),r.jsx(da,{onClick:t,children:r.jsxs(fa,{onClick:j=>j.stopPropagation(),children:[r.jsxs("div",{className:"headerDaily",children:[r.jsx("h2",{children:"My daily norma"}),r.jsx("button",{type:"button",className:"closeButton",onClick:t,children:r.jsx("svg",{width:"24",height:"24",children:r.jsx("use",{href:"/goit-group2-react-nodejs/src/assets/images/sprite/horodiukIcons.svg#icon-close"})})})]}),r.jsxs("div",{className:"formulaContainer",children:[r.jsxs("div",{className:"formula",children:[r.jsxs("div",{className:"formulaText",children:[r.jsx("p",{children:"For girl:"}),r.jsx("span",{className:"formulaSpan",children:"V=(M*0,03) + (T*0,4)"})]}),r.jsxs("div",{className:"formulaText",children:[r.jsx("p",{children:"For man:"}),r.jsx("span",{className:"formulaSpan",children:"V=(M*0,04) + (T*0,6)"})]})]}),r.jsxs("p",{className:"formulaDescription",children:[r.jsx("span",{className:"formulaStar",children:"*"})," V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]})]}),r.jsxs("form",{onSubmit:V,children:[r.jsx("h3",{children:"Calculate your rate:"}),r.jsxs("div",{className:"checkBox",children:[r.jsxs("label",{children:[r.jsx("input",{type:"radio",name:"gender",value:"woman",checked:d,onChange:N})," For woman"]}),r.jsxs("label",{children:[r.jsx("input",{type:"radio",name:"gender",value:"man",checked:!d,onChange:N})," For man"]})]}),r.jsx("label",{className:"inputDescription",children:"Your weight in kilograms:"}),r.jsx("input",{className:"inputForm",placeholder:"0",onChange:k}),r.jsx("label",{className:"inputDescription",children:"The time of active participation in sports or other activities with a high physical. load in hours:"}),r.jsx("input",{className:"inputForm",placeholder:"0",onChange:L}),r.jsxs("div",{className:"requiredAmount",children:[r.jsx("p",{className:"amountDescription",children:"The required amount of water in liters per day:"}),r.jsxs("span",{className:"amount",children:[s," L"]})]}),r.jsx("h3",{children:"Write down how much water you will drink:"}),r.jsx("input",{className:"inputForm",placeholder:"0",onChange:W}),r.jsx("button",{className:"saveButton",type:"submit",children:"Save"})]})]})})},ma=()=>{const[t,e]=B.useState(!1),{waterRate:n}=ze(gn),a=n/1e3,i=()=>{e(!1)},s=()=>{e(!0)};return r.jsx("div",{children:r.jsxs(la,{children:[r.jsx("h2",{children:"My daily norma:"}),r.jsxs(ca,{children:[r.jsxs("p",{children:[" ",a," L"]}),r.jsx("button",{type:"button",onClick:s,children:"Edit"}),t&&r.jsx(pa,{isOpen:t,onClose:i})]})]})})},xa=ma,vn=t=>t.water.notes,ha=t=>t.water.currentNote,ga=t=>t.water.monthNotes,ba=t=>t.water.isLoading,Pt=new Date,Rt=[Pt.getFullYear(),Pt.getMonth()+1],Ft=(t=Rt,e)=>{const[n,a]=t;switch(e){case"forward":return a>=12?[n+1,1]:[n,a+1];case"back":return a<=1?[n-1,12]:[n,a-1];default:return Rt}},ya=g.div`
  width: 100%;
  margin-top: 15px;
  height: 490px;

  @media screen and (min-width: 768px) {
    height: 308px;
  }
`,wa=g.h3`
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
`,va=g.div`
  display: flex;
  justify-content: space-between;
`,ka=g.div`
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
`,Aa=g.ul`
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
`,Na=g.li`
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
`,kn=["January","February","March","April","May","June","July","August","September","October","November","December"],Ca=t=>kn[t-1],Sa=t=>{const e=B.useRef(null);return B.useEffect(()=>{const n=a=>{e.current&&!e.current.contains(a.target)&&t()};return document.addEventListener("click",n,!0),()=>{document.removeEventListener("click",n,!0)}},[t]),e},at={sm:68,md:74},Ma={sm:5,md:10},it={md:69,xl:56},wt=(t,e)=>{const n=t/Ma[e],a=Math.floor(n);switch(e){case"sm":return a===n?parseInt(n-1)*at[e]-12:parseInt(n)*at[e]-12;case"md":return a===n?parseInt(n-1)*at[e]:parseInt(n)*at[e];default:return 0}},It=(t,e)=>{const[n,a]=t%10===0?[9,!1]:[t%10-1,t%10<5];return a?n*it[e]+it[e]/4:n*it[e]-280+it[e]/4},Oa=g.div`
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
`,Wa=g.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  p {
    color: ${({theme:t})=>t.color.primaryAccent};
    font-size: 16px;
    line-height: 1.25;
  }
`,Ea=({currentDay:t,close:e})=>{const n=Sa(e),{date:a,percent:i,quantity:s,waterRate:f}=t,d={dailyNorma:f??0,percent:i??0},p=kn[(a==null?void 0:a.month)-1],m=d.dailyNorma/1e3;return r.jsxs(Oa,{ref:n,$dayNumber:a.day,children:[r.jsx(Wa,{children:r.jsxs("p",{children:[r.jsxs("span",{children:[a==null?void 0:a.day,", "]}),r.jsx("span",{children:p})]})}),r.jsxs("p",{children:["Daily norma : ",r.jsxs("span",{children:[m,"L"]})]}),r.jsxs("p",{children:["Fulfillment of the daily norm : ",r.jsxs("span",{children:[parseInt(d.percent),"%"]})]}),r.jsxs("p",{children:["How many servings of water : ",r.jsx("span",{children:s??0})]})]})},za=({monthData:t})=>{const[e,n]=B.useState(null),a=B.useCallback(()=>{n(null)},[]);return r.jsxs(Aa,{children:[e&&r.jsx(Ea,{currentDay:e,close:a}),t.map(i=>r.jsxs(Na,{onClick:()=>n(i),$percentage:i.percent,$isActive:(e==null?void 0:e.date.day)===i.date.day,children:[r.jsx("span",{className:"day",children:i.date.day}),r.jsxs("span",{className:"percentage",children:[parseInt(i.percent)||0,"%"]})]},i.date.day))]})},Ta=({changeDirection:t,month:e,year:n})=>{function a(i,s){const f=new Date,d=f.getFullYear(),p=f.getMonth()+1;return Number(s)>d||Number(s)===d&&Number(i)>=p}return r.jsxs(va,{children:[r.jsx(wa,{children:"Month"}),r.jsxs(ka,{children:[r.jsx("button",{className:"arrow arrow-left",onClick:()=>t("back"),type:"button",children:r.jsx("svg",{fill:"#407BFF",width:"14",height:"14",children:r.jsx("use",{href:`${Dt}#icon-arrow-left`})})}),r.jsxs("p",{className:"month__name",children:[Ca(e),", ",n]}),r.jsx("button",{className:`arrow arrow-right ${a(e,n)?"arrow-right-disabled":""}`,onClick:()=>t("forward"),type:"button",disabled:a(e,n),children:r.jsx("svg",{fill:`${a(e,n)?"#9ebbff":"#407BFF"}`,width:"14",height:"14",transform:"rotate(180)",children:r.jsx("use",{href:`${Dt}#icon-arrow-left`})})})]})]})},ja=()=>{var p;const t=ze(ga),e=ze(ba),[n,a]=Kn(),i=De();let[s,f]=((p=n.get("date"))==null?void 0:p.split("_"))??Ft();B.useEffect(()=>{i(Jn({year:s.toString(),month:f.toString()}))},[i,s,f]);const d=B.useCallback(m=>{const b=Ft([+s,+f],m);a({date:b.join("_")})},[a,s,f]);return r.jsxs(ya,{children:[r.jsx(Ta,{changeDirection:d,month:f,year:s}),e?r.jsx(Zn,{}):r.jsx(za,{monthData:t})]})},Da=ja;var An={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Bt=We.createContext&&We.createContext(An),La=["attr","size","title"];function Pa(t,e){if(t==null)return{};var n=Ra(t,e),a,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)a=s[i],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function Ra(t,e){if(t==null)return{};var n={},a=Object.keys(t),i,s;for(s=0;s<a.length;s++)i=a[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function rt(){return rt=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},rt.apply(this,arguments)}function Ht(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,a)}return n}function st(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ht(Object(n),!0).forEach(function(a){Fa(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ht(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Fa(t,e,n){return e=Ia(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ia(t){var e=Ba(t,"string");return typeof e=="symbol"?e:String(e)}function Ba(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Nn(t){return t&&t.map((e,n)=>We.createElement(e.tag,st({key:n},e.attr),Nn(e.child)))}function Cn(t){return e=>We.createElement(Ha,rt({attr:st({},t.attr)},e),Nn(t.child))}function Ha(t){var e=n=>{var{attr:a,size:i,title:s}=t,f=Pa(t,La),d=i||n.size||"1em",p;return n.className&&(p=n.className),t.className&&(p=(p?p+" ":"")+t.className),We.createElement("svg",rt({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,a,f,{className:p,style:st(st({color:t.color||n.color},n.style),t.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),s&&We.createElement("title",null,s),t.children)};return Bt!==void 0?We.createElement(Bt.Consumer,null,n=>e(n)):e(An)}function _a(t){return Cn({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"},child:[]}]})(t)}const Xa="/goit-group2-react-nodejs/assets/glass-00cf2fb8.svg",Va="/goit-group2-react-nodejs/assets/edit-7f0c7b6a.svg",qa="/goit-group2-react-nodejs/assets/delete-6bf30e40.svg";var kt={exports:{}},Te={},At={exports:{}},he={},Nt={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=b;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var n="none",a="contents",i=/input|select|textarea|button|object|iframe/;function s(h,N){return N.getPropertyValue("overflow")!=="visible"||h.scrollWidth<=0&&h.scrollHeight<=0}function f(h){var N=h.offsetWidth<=0&&h.offsetHeight<=0;if(N&&!h.innerHTML)return!0;try{var k=window.getComputedStyle(h),L=k.getPropertyValue("display");return N?L!==a&&s(h,k):L===n}catch{return console.warn("Failed to inspect element style"),!1}}function d(h){for(var N=h,k=h.getRootNode&&h.getRootNode();N&&N!==document.body;){if(k&&N===k&&(N=k.host.parentNode),f(N))return!1;N=N.parentNode}return!0}function p(h,N){var k=h.nodeName.toLowerCase(),L=i.test(k)&&!h.disabled||k==="a"&&h.href||N;return L&&d(h)}function m(h){var N=h.getAttribute("tabindex");N===null&&(N=void 0);var k=isNaN(N);return(k||N>=0)&&p(h,!k)}function b(h){var N=[].slice.call(h.querySelectorAll("*"),0).reduce(function(k,L){return k.concat(L.shadowRoot?b(L.shadowRoot):[L])},[]);return N.filter(m)}t.exports=e.default})(Nt,Nt.exports);var Sn=Nt.exports;Object.defineProperty(he,"__esModule",{value:!0});he.resetState=Ga;he.log=Qa;he.handleBlur=Ke;he.handleFocus=Je;he.markForFocusLater=Ka;he.returnFocus=Ja;he.popWithoutFocus=Za;he.setupScopedFocus=ei;he.teardownScopedFocus=ti;var Ua=Sn,Ya=$a(Ua);function $a(t){return t&&t.__esModule?t:{default:t}}var Be=[],Ie=null,Ct=!1;function Ga(){Be=[]}function Qa(){}function Ke(){Ct=!0}function Je(){if(Ct){if(Ct=!1,!Ie)return;setTimeout(function(){if(!Ie.contains(document.activeElement)){var t=(0,Ya.default)(Ie)[0]||Ie;t.focus()}},0)}}function Ka(){Be.push(document.activeElement)}function Ja(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=null;try{Be.length!==0&&(e=Be.pop(),e.focus({preventScroll:t}));return}catch{console.warn(["You tried to return focus to",e,"but it is not in the DOM anymore"].join(" "))}}function Za(){Be.length>0&&Be.pop()}function ei(t){Ie=t,window.addEventListener?(window.addEventListener("blur",Ke,!1),document.addEventListener("focus",Je,!0)):(window.attachEvent("onBlur",Ke),document.attachEvent("onFocus",Je))}function ti(){Ie=null,window.addEventListener?(window.removeEventListener("blur",Ke),document.removeEventListener("focus",Je)):(window.detachEvent("onBlur",Ke),document.detachEvent("onFocus",Je))}var St={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=f;var n=Sn,a=i(n);function i(d){return d&&d.__esModule?d:{default:d}}function s(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return d.activeElement.shadowRoot?s(d.activeElement.shadowRoot):d.activeElement}function f(d,p){var m=(0,a.default)(d);if(!m.length){p.preventDefault();return}var b=void 0,h=p.shiftKey,N=m[0],k=m[m.length-1],L=s();if(d===L){if(!h)return;b=k}if(k===L&&!h&&(b=N),N===L&&h&&(b=k),b){p.preventDefault(),b.focus();return}var W=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),V=W!=null&&W[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(V){var j=m.indexOf(L);if(j>-1&&(j+=h?-1:1),b=m[j],typeof b>"u"){p.preventDefault(),b=h?k:N,b.focus();return}p.preventDefault(),b.focus()}}t.exports=e.default})(St,St.exports);var ni=St.exports,ge={},ai=function(){},ii=ai,xe={},Mn={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(t){(function(){var e=!!(typeof window<"u"&&window.document&&window.document.createElement),n={canUseDOM:e,canUseWorkers:typeof Worker<"u",canUseEventListeners:e&&!!(window.addEventListener||window.attachEvent),canUseViewport:e&&!!window.screen};t.exports?t.exports=n:window.ExecutionEnvironment=n})()})(Mn);var oi=Mn.exports;Object.defineProperty(xe,"__esModule",{value:!0});xe.canUseDOM=xe.SafeNodeList=xe.SafeHTMLCollection=void 0;var ri=oi,si=li(ri);function li(t){return t&&t.__esModule?t:{default:t}}var ut=si.default,ci=ut.canUseDOM?window.HTMLElement:{};xe.SafeHTMLCollection=ut.canUseDOM?window.HTMLCollection:{};xe.SafeNodeList=ut.canUseDOM?window.NodeList:{};xe.canUseDOM=ut.canUseDOM;xe.default=ci;Object.defineProperty(ge,"__esModule",{value:!0});ge.resetState=mi;ge.log=xi;ge.assertNodeList=On;ge.setElement=hi;ge.validateElement=Mt;ge.hide=gi;ge.show=bi;ge.documentNotReadyOrSSRTesting=yi;var di=ii,fi=pi(di),ui=xe;function pi(t){return t&&t.__esModule?t:{default:t}}var fe=null;function mi(){fe&&(fe.removeAttribute?fe.removeAttribute("aria-hidden"):fe.length!=null?fe.forEach(function(t){return t.removeAttribute("aria-hidden")}):document.querySelectorAll(fe).forEach(function(t){return t.removeAttribute("aria-hidden")})),fe=null}function xi(){}function On(t,e){if(!t||!t.length)throw new Error("react-modal: No elements were found for selector "+e+".")}function hi(t){var e=t;if(typeof e=="string"&&ui.canUseDOM){var n=document.querySelectorAll(e);On(n,e),e=n}return fe=e||fe,fe}function Mt(t){var e=t||fe;return e?Array.isArray(e)||e instanceof HTMLCollection||e instanceof NodeList?e:[e]:((0,fi.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function gi(t){var e=!0,n=!1,a=void 0;try{for(var i=Mt(t)[Symbol.iterator](),s;!(e=(s=i.next()).done);e=!0){var f=s.value;f.setAttribute("aria-hidden","true")}}catch(d){n=!0,a=d}finally{try{!e&&i.return&&i.return()}finally{if(n)throw a}}}function bi(t){var e=!0,n=!1,a=void 0;try{for(var i=Mt(t)[Symbol.iterator](),s;!(e=(s=i.next()).done);e=!0){var f=s.value;f.removeAttribute("aria-hidden")}}catch(d){n=!0,a=d}finally{try{!e&&i.return&&i.return()}finally{if(n)throw a}}}function yi(){fe=null}var He={};Object.defineProperty(He,"__esModule",{value:!0});He.resetState=wi;He.log=vi;var Ge={},Qe={};function _t(t,e){t.classList.remove(e)}function wi(){var t=document.getElementsByTagName("html")[0];for(var e in Ge)_t(t,Ge[e]);var n=document.body;for(var a in Qe)_t(n,Qe[a]);Ge={},Qe={}}function vi(){}var ki=function(e,n){return e[n]||(e[n]=0),e[n]+=1,n},Ai=function(e,n){return e[n]&&(e[n]-=1),n},Ni=function(e,n,a){a.forEach(function(i){ki(n,i),e.add(i)})},Ci=function(e,n,a){a.forEach(function(i){Ai(n,i),n[i]===0&&e.remove(i)})};He.add=function(e,n){return Ni(e.classList,e.nodeName.toLowerCase()=="html"?Ge:Qe,n.split(" "))};He.remove=function(e,n){return Ci(e.classList,e.nodeName.toLowerCase()=="html"?Ge:Qe,n.split(" "))};var _e={};Object.defineProperty(_e,"__esModule",{value:!0});_e.log=Mi;_e.resetState=Oi;function Si(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var Wn=function t(){var e=this;Si(this,t),this.register=function(n){e.openInstances.indexOf(n)===-1&&(e.openInstances.push(n),e.emit("register"))},this.deregister=function(n){var a=e.openInstances.indexOf(n);a!==-1&&(e.openInstances.splice(a,1),e.emit("deregister"))},this.subscribe=function(n){e.subscribers.push(n)},this.emit=function(n){e.subscribers.forEach(function(a){return a(n,e.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},lt=new Wn;function Mi(){console.log("portalOpenInstances ----------"),console.log(lt.openInstances.length),lt.openInstances.forEach(function(t){return console.log(t)}),console.log("end portalOpenInstances ----------")}function Oi(){lt=new Wn}_e.default=lt;var Ot={};Object.defineProperty(Ot,"__esModule",{value:!0});Ot.resetState=Ti;Ot.log=ji;var Wi=_e,Ei=zi(Wi);function zi(t){return t&&t.__esModule?t:{default:t}}var ie=void 0,me=void 0,Ee=[];function Ti(){for(var t=[ie,me],e=0;e<t.length;e++){var n=t[e];n&&n.parentNode&&n.parentNode.removeChild(n)}ie=me=null,Ee=[]}function ji(){console.log("bodyTrap ----------"),console.log(Ee.length);for(var t=[ie,me],e=0;e<t.length;e++){var n=t[e],a=n||{};console.log(a.nodeName,a.className,a.id)}console.log("edn bodyTrap ----------")}function Xt(){Ee.length!==0&&Ee[Ee.length-1].focusContent()}function Di(t,e){!ie&&!me&&(ie=document.createElement("div"),ie.setAttribute("data-react-modal-body-trap",""),ie.style.position="absolute",ie.style.opacity="0",ie.setAttribute("tabindex","0"),ie.addEventListener("focus",Xt),me=ie.cloneNode(),me.addEventListener("focus",Xt)),Ee=e,Ee.length>0?(document.body.firstChild!==ie&&document.body.insertBefore(ie,document.body.firstChild),document.body.lastChild!==me&&document.body.appendChild(me)):(ie.parentElement&&ie.parentElement.removeChild(ie),me.parentElement&&me.parentElement.removeChild(me))}Ei.default.subscribe(Di);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(O){for(var S=1;S<arguments.length;S++){var U=arguments[S];for(var u in U)Object.prototype.hasOwnProperty.call(U,u)&&(O[u]=U[u])}return O},a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(O){return typeof O}:function(O){return O&&typeof Symbol=="function"&&O.constructor===Symbol&&O!==Symbol.prototype?"symbol":typeof O},i=function(){function O(S,U){for(var u=0;u<U.length;u++){var A=U[u];A.enumerable=A.enumerable||!1,A.configurable=!0,"value"in A&&(A.writable=!0),Object.defineProperty(S,A.key,A)}}return function(S,U,u){return U&&O(S.prototype,U),u&&O(S,u),S}}(),s=B,f=bn,d=te(f),p=he,m=oe(p),b=ni,h=te(b),N=ge,k=oe(N),L=He,W=oe(L),V=xe,j=te(V),H=_e,P=te(H);function oe(O){if(O&&O.__esModule)return O;var S={};if(O!=null)for(var U in O)Object.prototype.hasOwnProperty.call(O,U)&&(S[U]=O[U]);return S.default=O,S}function te(O){return O&&O.__esModule?O:{default:O}}function q(O,S){if(!(O instanceof S))throw new TypeError("Cannot call a class as a function")}function w(O,S){if(!O)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return S&&(typeof S=="object"||typeof S=="function")?S:O}function D(O,S){if(typeof S!="function"&&S!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof S);O.prototype=Object.create(S&&S.prototype,{constructor:{value:O,enumerable:!1,writable:!0,configurable:!0}}),S&&(Object.setPrototypeOf?Object.setPrototypeOf(O,S):O.__proto__=S)}var K={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},Xe=function(S){return S.code==="Tab"||S.keyCode===9},mt=function(S){return S.code==="Escape"||S.keyCode===27},Le=0,Pe=function(O){D(S,O);function S(U){q(this,S);var u=w(this,(S.__proto__||Object.getPrototypeOf(S)).call(this,U));return u.setOverlayRef=function(A){u.overlay=A,u.props.overlayRef&&u.props.overlayRef(A)},u.setContentRef=function(A){u.content=A,u.props.contentRef&&u.props.contentRef(A)},u.afterClose=function(){var A=u.props,ee=A.appElement,ne=A.ariaHideApp,Y=A.htmlOpenClassName,ce=A.bodyOpenClassName,ye=A.parentSelector,we=ye&&ye().ownerDocument||document;ce&&W.remove(we.body,ce),Y&&W.remove(we.getElementsByTagName("html")[0],Y),ne&&Le>0&&(Le-=1,Le===0&&k.show(ee)),u.props.shouldFocusAfterRender&&(u.props.shouldReturnFocusAfterClose?(m.returnFocus(u.props.preventScroll),m.teardownScopedFocus()):m.popWithoutFocus()),u.props.onAfterClose&&u.props.onAfterClose(),P.default.deregister(u)},u.open=function(){u.beforeOpen(),u.state.afterOpen&&u.state.beforeClose?(clearTimeout(u.closeTimer),u.setState({beforeClose:!1})):(u.props.shouldFocusAfterRender&&(m.setupScopedFocus(u.node),m.markForFocusLater()),u.setState({isOpen:!0},function(){u.openAnimationFrame=requestAnimationFrame(function(){u.setState({afterOpen:!0}),u.props.isOpen&&u.props.onAfterOpen&&u.props.onAfterOpen({overlayEl:u.overlay,contentEl:u.content})})}))},u.close=function(){u.props.closeTimeoutMS>0?u.closeWithTimeout():u.closeWithoutTimeout()},u.focusContent=function(){return u.content&&!u.contentHasFocus()&&u.content.focus({preventScroll:!0})},u.closeWithTimeout=function(){var A=Date.now()+u.props.closeTimeoutMS;u.setState({beforeClose:!0,closesAt:A},function(){u.closeTimer=setTimeout(u.closeWithoutTimeout,u.state.closesAt-Date.now())})},u.closeWithoutTimeout=function(){u.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},u.afterClose)},u.handleKeyDown=function(A){Xe(A)&&(0,h.default)(u.content,A),u.props.shouldCloseOnEsc&&mt(A)&&(A.stopPropagation(),u.requestClose(A))},u.handleOverlayOnClick=function(A){u.shouldClose===null&&(u.shouldClose=!0),u.shouldClose&&u.props.shouldCloseOnOverlayClick&&(u.ownerHandlesClose()?u.requestClose(A):u.focusContent()),u.shouldClose=null},u.handleContentOnMouseUp=function(){u.shouldClose=!1},u.handleOverlayOnMouseDown=function(A){!u.props.shouldCloseOnOverlayClick&&A.target==u.overlay&&A.preventDefault()},u.handleContentOnClick=function(){u.shouldClose=!1},u.handleContentOnMouseDown=function(){u.shouldClose=!1},u.requestClose=function(A){return u.ownerHandlesClose()&&u.props.onRequestClose(A)},u.ownerHandlesClose=function(){return u.props.onRequestClose},u.shouldBeClosed=function(){return!u.state.isOpen&&!u.state.beforeClose},u.contentHasFocus=function(){return document.activeElement===u.content||u.content.contains(document.activeElement)},u.buildClassName=function(A,ee){var ne=(typeof ee>"u"?"undefined":a(ee))==="object"?ee:{base:K[A],afterOpen:K[A]+"--after-open",beforeClose:K[A]+"--before-close"},Y=ne.base;return u.state.afterOpen&&(Y=Y+" "+ne.afterOpen),u.state.beforeClose&&(Y=Y+" "+ne.beforeClose),typeof ee=="string"&&ee?Y+" "+ee:Y},u.attributesFromObject=function(A,ee){return Object.keys(ee).reduce(function(ne,Y){return ne[A+"-"+Y]=ee[Y],ne},{})},u.state={afterOpen:!1,beforeClose:!1},u.shouldClose=null,u.moveFromContentToOverlay=null,u}return i(S,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(u,A){this.props.isOpen&&!u.isOpen?this.open():!this.props.isOpen&&u.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!A.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var u=this.props,A=u.appElement,ee=u.ariaHideApp,ne=u.htmlOpenClassName,Y=u.bodyOpenClassName,ce=u.parentSelector,ye=ce&&ce().ownerDocument||document;Y&&W.add(ye.body,Y),ne&&W.add(ye.getElementsByTagName("html")[0],ne),ee&&(Le+=1,k.hide(A)),P.default.register(this)}},{key:"render",value:function(){var u=this.props,A=u.id,ee=u.className,ne=u.overlayClassName,Y=u.defaultStyles,ce=u.children,ye=ee?{}:Y.content,we=ne?{}:Y.overlay;if(this.shouldBeClosed())return null;var xt={ref:this.setOverlayRef,className:this.buildClassName("overlay",ne),style:n({},we,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},Ve=n({id:A,ref:this.setContentRef,style:n({},ye,this.props.style.content),className:this.buildClassName("content",ee),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",n({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),ht=this.props.contentElement(Ve,ce);return this.props.overlayElement(xt,ht)}}]),S}(s.Component);Pe.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},Pe.propTypes={isOpen:d.default.bool.isRequired,defaultStyles:d.default.shape({content:d.default.object,overlay:d.default.object}),style:d.default.shape({content:d.default.object,overlay:d.default.object}),className:d.default.oneOfType([d.default.string,d.default.object]),overlayClassName:d.default.oneOfType([d.default.string,d.default.object]),parentSelector:d.default.func,bodyOpenClassName:d.default.string,htmlOpenClassName:d.default.string,ariaHideApp:d.default.bool,appElement:d.default.oneOfType([d.default.instanceOf(j.default),d.default.instanceOf(V.SafeHTMLCollection),d.default.instanceOf(V.SafeNodeList),d.default.arrayOf(d.default.instanceOf(j.default))]),onAfterOpen:d.default.func,onAfterClose:d.default.func,onRequestClose:d.default.func,closeTimeoutMS:d.default.number,shouldFocusAfterRender:d.default.bool,shouldCloseOnOverlayClick:d.default.bool,shouldReturnFocusAfterClose:d.default.bool,preventScroll:d.default.bool,role:d.default.string,contentLabel:d.default.string,aria:d.default.object,data:d.default.object,children:d.default.node,shouldCloseOnEsc:d.default.bool,overlayRef:d.default.func,contentRef:d.default.func,id:d.default.string,overlayElement:d.default.func,contentElement:d.default.func,testId:d.default.string},e.default=Pe,t.exports=e.default})(At,At.exports);var Li=At.exports;function En(){var t=this.constructor.getDerivedStateFromProps(this.props,this.state);t!=null&&this.setState(t)}function zn(t){function e(n){var a=this.constructor.getDerivedStateFromProps(t,n);return a??null}this.setState(e.bind(this))}function Tn(t,e){try{var n=this.props,a=this.state;this.props=t,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,a)}finally{this.props=n,this.state=a}}En.__suppressDeprecationWarning=!0;zn.__suppressDeprecationWarning=!0;Tn.__suppressDeprecationWarning=!0;function Pi(t){var e=t.prototype;if(!e||!e.isReactComponent)throw new Error("Can only polyfill class components");if(typeof t.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function")return t;var n=null,a=null,i=null;if(typeof e.componentWillMount=="function"?n="componentWillMount":typeof e.UNSAFE_componentWillMount=="function"&&(n="UNSAFE_componentWillMount"),typeof e.componentWillReceiveProps=="function"?a="componentWillReceiveProps":typeof e.UNSAFE_componentWillReceiveProps=="function"&&(a="UNSAFE_componentWillReceiveProps"),typeof e.componentWillUpdate=="function"?i="componentWillUpdate":typeof e.UNSAFE_componentWillUpdate=="function"&&(i="UNSAFE_componentWillUpdate"),n!==null||a!==null||i!==null){var s=t.displayName||t.name,f=typeof t.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+s+" uses "+f+" but also contains the following legacy lifecycles:"+(n!==null?`
  `+n:"")+(a!==null?`
  `+a:"")+(i!==null?`
  `+i:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof t.getDerivedStateFromProps=="function"&&(e.componentWillMount=En,e.componentWillReceiveProps=zn),typeof e.getSnapshotBeforeUpdate=="function"){if(typeof e.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");e.componentWillUpdate=Tn;var d=e.componentDidUpdate;e.componentDidUpdate=function(m,b,h){var N=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:h;d.call(this,m,b,N)}}return t}const Ri=Object.freeze(Object.defineProperty({__proto__:null,polyfill:Pi},Symbol.toStringTag,{value:"Module"})),Fi=ea(Ri);Object.defineProperty(Te,"__esModule",{value:!0});Te.bodyOpenClassName=Te.portalClassName=void 0;var Vt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},Ii=function(){function t(e,n){for(var a=0;a<n.length;a++){var i=n[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),jn=B,ct=et(jn),Bi=ta,dt=et(Bi),Hi=bn,M=et(Hi),_i=Li,qt=et(_i),Xi=ge,Vi=Ui(Xi),Ce=xe,Ut=et(Ce),qi=Fi;function Ui(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function et(t){return t&&t.__esModule?t:{default:t}}function Yi(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Yt(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function $i(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var Gi=Te.portalClassName="ReactModalPortal",Qi=Te.bodyOpenClassName="ReactModal__Body--open",Me=Ce.canUseDOM&&dt.default.createPortal!==void 0,$t=function(e){return document.createElement(e)},Gt=function(){return Me?dt.default.createPortal:dt.default.unstable_renderSubtreeIntoContainer};function ot(t){return t()}var tt=function(t){$i(e,t);function e(){var n,a,i,s;Yi(this,e);for(var f=arguments.length,d=Array(f),p=0;p<f;p++)d[p]=arguments[p];return s=(a=(i=Yt(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(d))),i),i.removePortal=function(){!Me&&dt.default.unmountComponentAtNode(i.node);var m=ot(i.props.parentSelector);m&&m.contains(i.node)?m.removeChild(i.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},i.portalRef=function(m){i.portal=m},i.renderPortal=function(m){var b=Gt(),h=b(i,ct.default.createElement(qt.default,Vt({defaultStyles:e.defaultStyles},m)),i.node);i.portalRef(h)},a),Yt(i,s)}return Ii(e,[{key:"componentDidMount",value:function(){if(Ce.canUseDOM){Me||(this.node=$t("div")),this.node.className=this.props.portalClassName;var a=ot(this.props.parentSelector);a.appendChild(this.node),!Me&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(a){var i=ot(a.parentSelector),s=ot(this.props.parentSelector);return{prevParent:i,nextParent:s}}},{key:"componentDidUpdate",value:function(a,i,s){if(Ce.canUseDOM){var f=this.props,d=f.isOpen,p=f.portalClassName;a.portalClassName!==p&&(this.node.className=p);var m=s.prevParent,b=s.nextParent;b!==m&&(m.removeChild(this.node),b.appendChild(this.node)),!(!a.isOpen&&!d)&&!Me&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!Ce.canUseDOM||!this.node||!this.portal)){var a=this.portal.state,i=Date.now(),s=a.isOpen&&this.props.closeTimeoutMS&&(a.closesAt||i+this.props.closeTimeoutMS);s?(a.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,s-i)):this.removePortal()}}},{key:"render",value:function(){if(!Ce.canUseDOM||!Me)return null;!this.node&&Me&&(this.node=$t("div"));var a=Gt();return a(ct.default.createElement(qt.default,Vt({ref:this.portalRef,defaultStyles:e.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(a){Vi.setElement(a)}}]),e}(jn.Component);tt.propTypes={isOpen:M.default.bool.isRequired,style:M.default.shape({content:M.default.object,overlay:M.default.object}),portalClassName:M.default.string,bodyOpenClassName:M.default.string,htmlOpenClassName:M.default.string,className:M.default.oneOfType([M.default.string,M.default.shape({base:M.default.string.isRequired,afterOpen:M.default.string.isRequired,beforeClose:M.default.string.isRequired})]),overlayClassName:M.default.oneOfType([M.default.string,M.default.shape({base:M.default.string.isRequired,afterOpen:M.default.string.isRequired,beforeClose:M.default.string.isRequired})]),appElement:M.default.oneOfType([M.default.instanceOf(Ut.default),M.default.instanceOf(Ce.SafeHTMLCollection),M.default.instanceOf(Ce.SafeNodeList),M.default.arrayOf(M.default.instanceOf(Ut.default))]),onAfterOpen:M.default.func,onRequestClose:M.default.func,closeTimeoutMS:M.default.number,ariaHideApp:M.default.bool,shouldFocusAfterRender:M.default.bool,shouldCloseOnOverlayClick:M.default.bool,shouldReturnFocusAfterClose:M.default.bool,preventScroll:M.default.bool,parentSelector:M.default.func,aria:M.default.object,data:M.default.object,role:M.default.string,contentLabel:M.default.string,shouldCloseOnEsc:M.default.bool,overlayRef:M.default.func,contentRef:M.default.func,id:M.default.string,overlayElement:M.default.func,contentElement:M.default.func};tt.defaultProps={isOpen:!1,portalClassName:Gi,bodyOpenClassName:Qi,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,n){return ct.default.createElement("div",e,n)},contentElement:function(e,n){return ct.default.createElement("div",e,n)}};tt.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,qi.polyfill)(tt);Te.default=tt;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=Te,a=i(n);function i(s){return s&&s.__esModule?s:{default:s}}e.default=a.default,t.exports=e.default})(kt,kt.exports);var Ki=kt.exports;const Dn=hn(Ki),ke="/goit-group2-react-nodejs/assets/horodiukIcons-b8c45607.svg",Qt=g.select`
  margin-bottom: 24px;
  border: 1px solid #d7e3ff;
  border-radius: 6px;
  padding: 12px 10px;
  width: 90px;
  height: 44px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`,Ji=g.div``,Kt=g.div`
  position: relative;
  display: inline-block;
`,Jt=g.svg`
  position: absolute;
  top: 10px;
  right: 6px;
  pointer-events: none;
`;function Ln({onChange:t,value:e}){const n=Array.from(new Array(24),(p,m)=>m),a=[0,5,10,15,20,25,30,35,40,45,50,55],i=new Date(e);let s=i.getHours(),f=i.getMinutes();const d=a.reduce((p,m)=>m>=f&&(p===null||Math.abs(m-f)<Math.abs(p-f))?m:p,null);return d===null?(s=(s+1)%24,f=0):f=d,r.jsxs(Ji,{id:"selectTimeWrapper",children:[r.jsxs(Kt,{children:[r.jsx(Qt,{onChange:p=>t(p,"hour"),value:s,children:n.map(p=>r.jsx("option",{value:p,children:p.toString().padStart(2,"0")},p))}),r.jsx(Jt,{width:"24",height:"24",children:r.jsx("use",{href:`${ke}#icon-arrow`})})]}),":",r.jsxs(Kt,{children:[r.jsx(Qt,{onChange:p=>t(p,"minute"),value:f,children:a.map(p=>r.jsx("option",{value:p,children:p.toString().padStart(2,"0")},p))}),r.jsx(Jt,{width:"24",height:"24",children:r.jsx("use",{href:`${ke}#icon-arrow`})})]})]})}const Zi=g.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  overflow: scroll;
`,eo=g.div`
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
`,to=g.button`
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
`,no=g.h2`
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
`,ao=g.input`
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
`,io=g.input`
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
`,oo=g.button`
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
`,ro=g.div`
  background-color: #d7e3ff;
  border-radius: 40px;
  padding: 6px 10px;
  height: 36px;
`,so=g.div`
  display: flex;
  width: 194px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`,lo=g.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
  }
`;Dn.setAppElement("#root");function Pn({isOpen:t,onClose:e,onAddWater:n}){const[a,i]=B.useState(0),[s,f]=B.useState(!1),[d,p]=B.useState(0),m=De(),[b,h]=B.useState(new Date),N=(q,w="")=>{let D=new Date(b);switch(w){case"hour":D.setHours(parseInt(q.target.value,10));break;case"minute":D.setMinutes(Math.ceil(parseInt(q.target.value,10)/5)*5);break}h(D)},k=()=>{m(na({amount:a,date:Date(b)}))},L=()=>{e()},W=()=>{i(a+50),p(a+50)},V=()=>{if(a-50<0){i(0),p(0);return}i(a-50),p(a-50)},j=()=>{i(d)},H=q=>{const{value:w}=q.target;if(w==="")p("");else{let D=parseInt(w,10);D=isNaN(D)||D<0?0:D,p(D.toString())}},P=q=>{q.target.closest("#selectTimeWrapper")||(f(!1),q.target===q.currentTarget&&L())},oe=q=>{q.key==="Escape"&&L()};B.useEffect(()=>(window.addEventListener("keydown",oe),()=>{window.removeEventListener("keydown",oe)}),[]);const te=q=>{const w=new Date(q),D=K=>K.toString().padStart(2,"0");return`${D(w.getHours())}:${D(w.getMinutes())}`};return yn.createPortal(r.jsx(Zi,{onClick:P,children:r.jsxs(eo,{children:[r.jsx(to,{onClick:L,children:r.jsx("svg",{width:"24",height:"24",children:r.jsx("use",{href:`${ke}#icon-close`})})}),r.jsx(no,{children:"Add water"}),r.jsx(Zt,{children:"Choose a value:"}),r.jsx(en,{children:"Amount of water:"}),r.jsxs(so,{children:[r.jsx(tn,{onClick:V,children:r.jsx("svg",{width:"44",height:"44",children:r.jsx("use",{href:`${ke}#icon-minus`})})}),r.jsx(ro,{children:r.jsxs(nn,{children:[a,"ml"]})}),r.jsx(tn,{onClick:W,children:r.jsx("svg",{width:"44",height:"44",children:r.jsx("use",{href:`${ke}#icon-plus`})})})]}),r.jsx(en,{children:"Recording time:"}),s?r.jsx(Ln,{onChange:N,value:b}):r.jsx(ao,{type:"text","aria-label":"Choose time",value:te(b),onChange:()=>{},onFocus:()=>f(!0)}),r.jsx(Zt,{children:"Enter the value of the water used:"}),r.jsx(io,{value:d,onBlur:j,onChange:H,type:"number"}),r.jsxs(lo,{children:[r.jsxs(nn,{children:[a,"ml"]}),r.jsx(oo,{onClick:k,type:"button",children:"Save"})]})]})}),document.getElementById("modal-root"))}const co=g.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  overflow: scroll;
`,fo=g.div`
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
`,uo=g.button`
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
`,po=g.h2`
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
`,mo=g.input`
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
`,xo=g.input`
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
`,ho=g.button`
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
`,go=g.div`
  background-color: #d7e3ff;
  border-radius: 40px;
  padding: 6px 10px;
  height: 36px;
`,bo=g.div`
  display: flex;
  width: 194px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`,yo=g.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
  }
`,wo=g.div`
  display: flex;
  gap: 14px;
  align-items: center;
  margin-bottom: 24px;
  border-radius: 10px;
  padding: 8px 24px;
  width: 256px;
  background-color: #ecf2ff;
`,vo=g.p`
  font-size: 18px;
  line-height: 133%;
  color: #407bff;
`,ko=g.p`
  font-size: 16px;
  line-height: 125%;
  color: #2f2f2f;
`;Dn.setAppElement("#root");function ln({isOpen:t,onClose:e,onAddWater:n}){const a=ze(ha),[i,s]=B.useState(a.amount),[f,d]=B.useState(!1),[p,m]=B.useState(0),b=De(),[h,N]=B.useState(a.date),k=(w,D="")=>{let K=new Date(h);switch(D){case"hour":K.setHours(parseInt(w.target.value,10));break;case"minute":K.setMinutes(Math.ceil(parseInt(w.target.value,10)/5)*5);break}N(K)},L=()=>{b(aa({amount:i,date:Date(h)}))},W=()=>{e()},V=()=>{s(i+50),m(i+50)},j=()=>{if(i-50<0){s(0),m(0);return}s(i-50),m(i-50)},H=()=>{s(p)},P=w=>{const{value:D}=w.target;if(D==="")m("");else{let K=parseInt(D,10);K=isNaN(K)||K<0?0:K,m(K.toString())}},oe=w=>{w.target.closest("#selectTimeWrapper")||(d(!1),w.target===w.currentTarget&&W())},te=w=>{w.key==="Escape"&&W()};B.useEffect(()=>(window.addEventListener("keydown",te),()=>{window.removeEventListener("keydown",te)}),[]);const q=w=>{const D=new Date(w),K=Xe=>Xe.toString().padStart(2,"0");return`${K(D.getHours())}:${K(D.getMinutes())}`};return yn.createPortal(r.jsx(co,{onClick:oe,children:r.jsxs(fo,{children:[r.jsx(uo,{onClick:W,children:r.jsx("svg",{width:"24",height:"24",children:r.jsx("use",{href:`${ke}#icon-close`})})}),r.jsx(po,{children:"Edit the entered amount of water"}),r.jsxs(wo,{children:[" ",r.jsx("svg",{width:"36",height:"36",children:r.jsx("use",{href:`${ke}#icon-glass`})}),r.jsxs(vo,{children:[a.amount,"ml"]}),r.jsx(ko,{children:q(a.date)})]}),r.jsx(an,{children:"Correct entered data:"}),r.jsx(on,{children:"Amount of water:"}),r.jsxs(bo,{children:[r.jsx(rn,{onClick:j,children:r.jsx("svg",{width:"44",height:"44",children:r.jsx("use",{href:`${ke}#icon-minus`})})}),r.jsx(go,{children:r.jsxs(sn,{children:[i,"ml"]})}),r.jsx(rn,{onClick:V,children:r.jsx("svg",{width:"44",height:"44",children:r.jsx("use",{href:`${ke}#icon-plus`})})})]}),r.jsx(on,{children:"Recording time:"}),f?r.jsx(Ln,{onChange:k,value:h}):r.jsx(mo,{type:"text","aria-label":"Choose time",value:q(h),onChange:()=>{},onFocus:()=>d(!0)}),r.jsx(an,{children:"Enter the value of the water used:"}),r.jsx(xo,{value:p,onBlur:H,onChange:P,type:"number"}),r.jsxs(yo,{children:[r.jsxs(sn,{children:[i,"ml"]}),r.jsx(ho,{onClick:L,type:"button",children:"Save"})]})]})}),document.getElementById("modal-root"))}const Ao=g.div`
  padding: 0 24px 32px;
`,No=g.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
    flex-direction: row-reverse;
  }
`,cn=g.button`
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
`,Co=g.p`
  font-size: 18px;
  color: ${({theme:t})=>t.color.primaryBlack};
  line-height: 20px;
  font-weight: 500;

  margin-bottom: 24px;
`,So=({onClose:t,onShow:e,waterId:n})=>{const a=De(),i=()=>{a(oa(n)),t()};return r.jsx(ia,{onClose:t,onShow:e,title:"Delete Entry",children:r.jsxs(Ao,{children:[r.jsx(Co,{children:"Are you sure you want to delete the entry?"}),r.jsxs(No,{children:[r.jsx(cn,{onClick:i,children:"Delete"}),r.jsx(cn,{onClick:t,children:"Cancel"})]})]})})},Mo=g.ul`
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
`,Oo=g.li`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: space-between;
`,Wo=g.div`
  display: flex;
  align-items: center;
`,Eo=g.p`
  color: #407bff;
  font-size: 18px;
  line-height: 24px;
  margin-left: 12px;
`,zo=g.p`
  margin-left: 12px;
  line-height: 24px;
  font-size: 12px;
  color: #2f2f2f;

  @media screen and (min-width: 768px) {
    margin-left: 16px;
  }
`,To=g.h2`
  margin-bottom: 16px;
  color: #2f2f2f;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 32px;
  }
`,jo=g.button`
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
`,Do=g.button`
  margin-right: 18px;
  background-color: transparent;
`,Lo=g.button`
  background-color: transparent;
`;function be(t){const e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new t.constructor(+t):typeof t=="number"||e==="[object Number]"||typeof t=="string"||e==="[object String]"?new Date(t):new Date(NaN)}function je(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}const Rn=6048e5,Po=864e5;let Ro={};function pt(){return Ro}function Ze(t,e){var d,p,m,b;const n=pt(),a=(e==null?void 0:e.weekStartsOn)??((p=(d=e==null?void 0:e.locale)==null?void 0:d.options)==null?void 0:p.weekStartsOn)??n.weekStartsOn??((b=(m=n.locale)==null?void 0:m.options)==null?void 0:b.weekStartsOn)??0,i=be(t),s=i.getDay(),f=(s<a?7:0)+s-a;return i.setDate(i.getDate()-f),i.setHours(0,0,0,0),i}function ft(t){return Ze(t,{weekStartsOn:1})}function Fn(t){const e=be(t),n=e.getFullYear(),a=je(t,0);a.setFullYear(n+1,0,4),a.setHours(0,0,0,0);const i=ft(a),s=je(t,0);s.setFullYear(n,0,4),s.setHours(0,0,0,0);const f=ft(s);return e.getTime()>=i.getTime()?n+1:e.getTime()>=f.getTime()?n:n-1}function dn(t){const e=be(t);return e.setHours(0,0,0,0),e}function fn(t){const e=be(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function Fo(t,e){const n=dn(t),a=dn(e),i=+n-fn(n),s=+a-fn(a);return Math.round((i-s)/Po)}function Io(t){const e=Fn(t),n=je(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),ft(n)}function Bo(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function Ho(t){if(!Bo(t)&&typeof t!="number")return!1;const e=be(t);return!isNaN(Number(e))}function _o(t){const e=be(t),n=je(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}const Xo={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Vo=(t,e,n)=>{let a;const i=Xo[t];return typeof i=="string"?a=i:e===1?a=i.one:a=i.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a};function vt(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const qo={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Uo={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Yo={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},$o={date:vt({formats:qo,defaultWidth:"full"}),time:vt({formats:Uo,defaultWidth:"full"}),dateTime:vt({formats:Yo,defaultWidth:"full"})},Go={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Qo=(t,e,n,a)=>Go[t];function Ye(t){return(e,n)=>{const a=n!=null&&n.context?String(n.context):"standalone";let i;if(a==="formatting"&&t.formattingValues){const f=t.defaultFormattingWidth||t.defaultWidth,d=n!=null&&n.width?String(n.width):f;i=t.formattingValues[d]||t.formattingValues[f]}else{const f=t.defaultWidth,d=n!=null&&n.width?String(n.width):t.defaultWidth;i=t.values[d]||t.values[f]}const s=t.argumentCallback?t.argumentCallback(e):e;return i[s]}}const Ko={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Jo={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Zo={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},er={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},tr={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},nr={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},ar=(t,e)=>{const n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},ir={ordinalNumber:ar,era:Ye({values:Ko,defaultWidth:"wide"}),quarter:Ye({values:Jo,defaultWidth:"wide",argumentCallback:t=>t-1}),month:Ye({values:Zo,defaultWidth:"wide"}),day:Ye({values:er,defaultWidth:"wide"}),dayPeriod:Ye({values:tr,defaultWidth:"wide",formattingValues:nr,defaultFormattingWidth:"wide"})};function $e(t){return(e,n={})=>{const a=n.width,i=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],s=e.match(i);if(!s)return null;const f=s[0],d=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],p=Array.isArray(d)?rr(d,h=>h.test(f)):or(d,h=>h.test(f));let m;m=t.valueCallback?t.valueCallback(p):p,m=n.valueCallback?n.valueCallback(m):m;const b=e.slice(f.length);return{value:m,rest:b}}}function or(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function rr(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}function sr(t){return(e,n={})=>{const a=e.match(t.matchPattern);if(!a)return null;const i=a[0],s=e.match(t.parsePattern);if(!s)return null;let f=t.valueCallback?t.valueCallback(s[0]):s[0];f=n.valueCallback?n.valueCallback(f):f;const d=e.slice(i.length);return{value:f,rest:d}}}const lr=/^(\d+)(th|st|nd|rd)?/i,cr=/\d+/i,dr={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},fr={any:[/^b/i,/^(a|c)/i]},ur={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},pr={any:[/1/i,/2/i,/3/i,/4/i]},mr={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},xr={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},hr={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},gr={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},br={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},yr={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},wr={ordinalNumber:sr({matchPattern:lr,parsePattern:cr,valueCallback:t=>parseInt(t,10)}),era:$e({matchPatterns:dr,defaultMatchWidth:"wide",parsePatterns:fr,defaultParseWidth:"any"}),quarter:$e({matchPatterns:ur,defaultMatchWidth:"wide",parsePatterns:pr,defaultParseWidth:"any",valueCallback:t=>t+1}),month:$e({matchPatterns:mr,defaultMatchWidth:"wide",parsePatterns:xr,defaultParseWidth:"any"}),day:$e({matchPatterns:hr,defaultMatchWidth:"wide",parsePatterns:gr,defaultParseWidth:"any"}),dayPeriod:$e({matchPatterns:br,defaultMatchWidth:"any",parsePatterns:yr,defaultParseWidth:"any"})},vr={code:"en-US",formatDistance:Vo,formatLong:$o,formatRelative:Qo,localize:ir,match:wr,options:{weekStartsOn:0,firstWeekContainsDate:1}};function kr(t){const e=be(t);return Fo(e,_o(e))+1}function Ar(t){const e=be(t),n=+ft(e)-+Io(e);return Math.round(n/Rn)+1}function In(t,e){var b,h,N,k;const n=be(t),a=n.getFullYear(),i=pt(),s=(e==null?void 0:e.firstWeekContainsDate)??((h=(b=e==null?void 0:e.locale)==null?void 0:b.options)==null?void 0:h.firstWeekContainsDate)??i.firstWeekContainsDate??((k=(N=i.locale)==null?void 0:N.options)==null?void 0:k.firstWeekContainsDate)??1,f=je(t,0);f.setFullYear(a+1,0,s),f.setHours(0,0,0,0);const d=Ze(f,e),p=je(t,0);p.setFullYear(a,0,s),p.setHours(0,0,0,0);const m=Ze(p,e);return n.getTime()>=d.getTime()?a+1:n.getTime()>=m.getTime()?a:a-1}function Nr(t,e){var d,p,m,b;const n=pt(),a=(e==null?void 0:e.firstWeekContainsDate)??((p=(d=e==null?void 0:e.locale)==null?void 0:d.options)==null?void 0:p.firstWeekContainsDate)??n.firstWeekContainsDate??((b=(m=n.locale)==null?void 0:m.options)==null?void 0:b.firstWeekContainsDate)??1,i=In(t,e),s=je(t,0);return s.setFullYear(i,0,a),s.setHours(0,0,0,0),Ze(s,e)}function Cr(t,e){const n=be(t),a=+Ze(n,e)-+Nr(n,e);return Math.round(a/Rn)+1}function _(t,e){const n=t<0?"-":"",a=Math.abs(t).toString().padStart(e,"0");return n+a}const Ne={y(t,e){const n=t.getFullYear(),a=n>0?n:1-n;return _(e==="yy"?a%100:a,e.length)},M(t,e){const n=t.getMonth();return e==="M"?String(n+1):_(n+1,2)},d(t,e){return _(t.getDate(),e.length)},a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(t,e){return _(t.getHours()%12||12,e.length)},H(t,e){return _(t.getHours(),e.length)},m(t,e){return _(t.getMinutes(),e.length)},s(t,e){return _(t.getSeconds(),e.length)},S(t,e){const n=e.length,a=t.getMilliseconds(),i=Math.trunc(a*Math.pow(10,n-3));return _(i,e.length)}},Fe={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},un={G:function(t,e,n){const a=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});case"GGGG":default:return n.era(a,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){const a=t.getFullYear(),i=a>0?a:1-a;return n.ordinalNumber(i,{unit:"year"})}return Ne.y(t,e)},Y:function(t,e,n,a){const i=In(t,a),s=i>0?i:1-i;if(e==="YY"){const f=s%100;return _(f,2)}return e==="Yo"?n.ordinalNumber(s,{unit:"year"}):_(s,e.length)},R:function(t,e){const n=Fn(t);return _(n,e.length)},u:function(t,e){const n=t.getFullYear();return _(n,e.length)},Q:function(t,e,n){const a=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return _(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,n){const a=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return _(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,n){const a=t.getMonth();switch(e){case"M":case"MM":return Ne.M(t,e);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,n){const a=t.getMonth();switch(e){case"L":return String(a+1);case"LL":return _(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(t,e,n,a){const i=Cr(t,a);return e==="wo"?n.ordinalNumber(i,{unit:"week"}):_(i,e.length)},I:function(t,e,n){const a=Ar(t);return e==="Io"?n.ordinalNumber(a,{unit:"week"}):_(a,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getDate(),{unit:"date"}):Ne.d(t,e)},D:function(t,e,n){const a=kr(t);return e==="Do"?n.ordinalNumber(a,{unit:"dayOfYear"}):_(a,e.length)},E:function(t,e,n){const a=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});case"EEEE":default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,n,a){const i=t.getDay(),s=(i-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(s);case"ee":return _(s,2);case"eo":return n.ordinalNumber(s,{unit:"day"});case"eee":return n.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(i,{width:"short",context:"formatting"});case"eeee":default:return n.day(i,{width:"wide",context:"formatting"})}},c:function(t,e,n,a){const i=t.getDay(),s=(i-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(s);case"cc":return _(s,e.length);case"co":return n.ordinalNumber(s,{unit:"day"});case"ccc":return n.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(i,{width:"narrow",context:"standalone"});case"cccccc":return n.day(i,{width:"short",context:"standalone"});case"cccc":default:return n.day(i,{width:"wide",context:"standalone"})}},i:function(t,e,n){const a=t.getDay(),i=a===0?7:a;switch(e){case"i":return String(i);case"ii":return _(i,e.length);case"io":return n.ordinalNumber(i,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});case"iiii":default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,n){const i=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(t,e,n){const a=t.getHours();let i;switch(a===12?i=Fe.noon:a===0?i=Fe.midnight:i=a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(t,e,n){const a=t.getHours();let i;switch(a>=17?i=Fe.evening:a>=12?i=Fe.afternoon:a>=4?i=Fe.morning:i=Fe.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){let a=t.getHours()%12;return a===0&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return Ne.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getHours(),{unit:"hour"}):Ne.H(t,e)},K:function(t,e,n){const a=t.getHours()%12;return e==="Ko"?n.ordinalNumber(a,{unit:"hour"}):_(a,e.length)},k:function(t,e,n){let a=t.getHours();return a===0&&(a=24),e==="ko"?n.ordinalNumber(a,{unit:"hour"}):_(a,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):Ne.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getSeconds(),{unit:"second"}):Ne.s(t,e)},S:function(t,e){return Ne.S(t,e)},X:function(t,e,n){const a=t.getTimezoneOffset();if(a===0)return"Z";switch(e){case"X":return mn(a);case"XXXX":case"XX":return Oe(a);case"XXXXX":case"XXX":default:return Oe(a,":")}},x:function(t,e,n){const a=t.getTimezoneOffset();switch(e){case"x":return mn(a);case"xxxx":case"xx":return Oe(a);case"xxxxx":case"xxx":default:return Oe(a,":")}},O:function(t,e,n){const a=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+pn(a,":");case"OOOO":default:return"GMT"+Oe(a,":")}},z:function(t,e,n){const a=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+pn(a,":");case"zzzz":default:return"GMT"+Oe(a,":")}},t:function(t,e,n){const a=Math.trunc(t.getTime()/1e3);return _(a,e.length)},T:function(t,e,n){const a=t.getTime();return _(a,e.length)}};function pn(t,e=""){const n=t>0?"-":"+",a=Math.abs(t),i=Math.trunc(a/60),s=a%60;return s===0?n+String(i):n+String(i)+e+_(s,2)}function mn(t,e){return t%60===0?(t>0?"-":"+")+_(Math.abs(t)/60,2):Oe(t,e)}function Oe(t,e=""){const n=t>0?"-":"+",a=Math.abs(t),i=_(Math.trunc(a/60),2),s=_(a%60,2);return n+i+e+s}const xn=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},Bn=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},Sr=(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],a=n[1],i=n[2];if(!i)return xn(t,e);let s;switch(a){case"P":s=e.dateTime({width:"short"});break;case"PP":s=e.dateTime({width:"medium"});break;case"PPP":s=e.dateTime({width:"long"});break;case"PPPP":default:s=e.dateTime({width:"full"});break}return s.replace("{{date}}",xn(a,e)).replace("{{time}}",Bn(i,e))},Mr={p:Bn,P:Sr},Or=/^D+$/,Wr=/^Y+$/,Er=["D","DD","YY","YYYY"];function zr(t){return Or.test(t)}function Tr(t){return Wr.test(t)}function jr(t,e,n){const a=Dr(t,e,n);if(console.warn(a),Er.includes(t))throw new RangeError(a)}function Dr(t,e,n){const a=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${a} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Lr=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Pr=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Rr=/^'([^]*?)'?$/,Fr=/''/g,Ir=/[a-zA-Z]/;function Br(t,e,n){var b,h,N,k,L,W,V,j;const a=pt(),i=(n==null?void 0:n.locale)??a.locale??vr,s=(n==null?void 0:n.firstWeekContainsDate)??((h=(b=n==null?void 0:n.locale)==null?void 0:b.options)==null?void 0:h.firstWeekContainsDate)??a.firstWeekContainsDate??((k=(N=a.locale)==null?void 0:N.options)==null?void 0:k.firstWeekContainsDate)??1,f=(n==null?void 0:n.weekStartsOn)??((W=(L=n==null?void 0:n.locale)==null?void 0:L.options)==null?void 0:W.weekStartsOn)??a.weekStartsOn??((j=(V=a.locale)==null?void 0:V.options)==null?void 0:j.weekStartsOn)??0,d=be(t);if(!Ho(d))throw new RangeError("Invalid time value");let p=e.match(Pr).map(H=>{const P=H[0];if(P==="p"||P==="P"){const oe=Mr[P];return oe(H,i.formatLong)}return H}).join("").match(Lr).map(H=>{if(H==="''")return{isToken:!1,value:"'"};const P=H[0];if(P==="'")return{isToken:!1,value:Hr(H)};if(un[P])return{isToken:!0,value:H};if(P.match(Ir))throw new RangeError("Format string contains an unescaped latin alphabet character `"+P+"`");return{isToken:!1,value:H}});i.localize.preprocessor&&(p=i.localize.preprocessor(d,p));const m={firstWeekContainsDate:s,weekStartsOn:f,locale:i};return p.map(H=>{if(!H.isToken)return H.value;const P=H.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&Tr(P)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&zr(P))&&jr(P,e,String(t));const oe=un[P[0]];return oe(d,P,i.localize,m)}).join("")}function Hr(t){const e=t.match(Rr);return e?e[1].replace(Fr,"'"):t}const _r=t=>Br(new Date(t),"p"),Xr=()=>{const[t,e]=B.useState(!1),[n,a]=B.useState(!1),i=De(),[s,f]=B.useState(!1),d=ze(vn);console.log(d);const p=()=>{e(!1)},m=()=>{e(!0)},b=()=>{a(!1)},h=({amount:L,date:W,id:V})=>{a(!0),i(ra({amount:L,date:W,id:V}))},N=()=>{f(!1)},k=()=>{f(!0)};return r.jsxs("div",{children:[r.jsxs("div",{children:[r.jsx(To,{children:"Today"}),r.jsxs(Mo,{children:[d.length>0&&d.map(({_id:L,amount:W,date:V})=>r.jsx(r.Fragment,{children:r.jsxs(Oo,{children:[r.jsxs(Wo,{children:[r.jsx("img",{src:Xa,alt:"Icon glass"}),r.jsxs(Eo,{children:[W," ml"]}),r.jsx(zo,{children:_r(V)})]}),r.jsxs("div",{children:[r.jsx(Do,{type:"button",onClick:()=>h({_id:L,amount:W,date:V}),children:r.jsx("img",{src:Va,alt:"Icon glass"})}),r.jsx(Lo,{type:"button",onClick:k,children:r.jsx("img",{src:qa,alt:"Icon glass"})}),n&&r.jsx(ln,{isOpen:n,onClose:b}),s&&r.jsx(So,{onShow:s,onClose:N,id:L})]})]},L)})),n&&r.jsx(ln,{isOpen:n,onClose:b})]})]}),r.jsxs(jo,{type:"button",onClick:m,children:[r.jsx(_a,{})," Add Water"]}),t&&r.jsx(Pn,{isOpen:t,onClose:p})]})},Vr=Xr;function qr(t){return Cn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"16"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"16",y2:"12"},child:[]}]})(t)}const Ur=g.div`
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
`,Yr=g.div`
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
`,$r=g.input`
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
`,Gr=g.div`
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
`,Qr=g.button`
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
`,Kr=()=>{const[t,e]=B.useState(!1),[n,a]=B.useState(0),i=ze(vn),{waterRate:s}=ze(gn);B.useEffect(()=>{const p=i.reduce((b,h)=>b+h.amount,0),m=Math.round(p/s*100);a(m)},[i,s]);const f=()=>{e(!1)},d=()=>{e(!0)};return r.jsxs(Ur,{children:[r.jsxs(Yr,{children:[r.jsx("h2",{children:"Today"}),r.jsx($r,{value:n,type:"range",min:"0",max:"100"}),r.jsxs(Gr,{children:[r.jsx("p",{children:"0%"}),r.jsx("p",{children:"50%"}),r.jsx("p",{children:"100%"})]})]}),r.jsxs(Qr,{onClick:d,type:"button",children:[r.jsx(qr,{}),"Add Water"]}),t&&r.jsx(Pn,{isOpen:t,onClose:f})]})},Jr=Kr,Zr="/goit-group2-react-nodejs/assets/bottleHomeScreenDesk-630fd92f.png",es="/goit-group2-react-nodejs/assets/bottleHomeScreenDesk2x@2x-51f4e9e6.png",ts="/goit-group2-react-nodejs/assets/bottleHomeScreenTab-2759a74b.png",ns="/goit-group2-react-nodejs/assets/bottleHomeScreenTab@2x-805003a0.png",as="/goit-group2-react-nodejs/assets/bottleHomeScreenMob-fe8938bc.png",is="/goit-group2-react-nodejs/assets/bottleHomeScreenMob2x@2x-9640a1cb.png",os="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAUwCAMAAAAFI3xKAAAA21BMVEUAAADH1/+fvP+vyf/H2P/H2P+euf/I1v/G1//F3P/G1//H1v/H1/+fu/+duv+fvP/H2P+fvP+gvP+euv+fu//F1v/H1/+eu//Fz//H1//G1v/F0f/H1/+fvP+fuv/I1//F2P+fvP/H1//H1//H1f/H2f/H1//H2P+eu/+euv/w9P/t7//t8v+euv/t8v+fvP/v8/+cuv/H2f/s8f/s8v/t8//v8//G2P+fuv/J2P/v9P/s8//t8//t8//u8//t8f+eu//J2P/t8//r8f/s8//u8//r8//G1//s8v/T/+bSAAAAR3RSTlMAsrILbyAWpy0W35x9hSynWZybQ2RDv1kQkE4Wn29vP++QX2RYN4abTjcfEN9C73o/IYXfv48vz5ybb7+ff19/e0LPz69PQNkZ8PsAAAouSURBVHja7NuxkoMgEAbg/QeZlcHChuK0JGqfLmXe/6UuelfkJgEJNFf8X6flDi7usggVMSEOXgH4dZis0EfMtOKPreuFSs1R8WoLQiXMRbHzMVizP9slfmG3zUKneo8HHZ08c+F4fRE6Mf2Ez8iL4LkIz0U8RCNvjYzgmQ6ABkmxHtiEkkYANytpzgNC2fg5yXGeAUyaAaiTPOeFEjyASc6wqst9wJ1QrdkfCZBaFuBdqJoHbkLVFmbA9hqEGbCBAl9C1SyAKFQtAFiEmtpYPPVoMHAPaXMF+1QM4AcYwP/myhzYXoiw09fYi+HkQYPAXkIbB0CF6nmWIm0iuwltegBqhKpdOXzVvg8rJ4cat5FVqFpfNkHJtmvSgIJyZObfYpLxANTm48fprAyrZ2vQcj4w6458HpyUbcO8e+46wzwAPD0+sSh23Zy6PjKwWslzHodukWd9VPCiSJkRv9Zx6Z1zdpkGxeHGfk0J1+EtHfn5frNvBykIw0AUhgd0oeiiGzceoYYSSOui2gq1ytz/RLrSUrOYNLj7vyM8XpgwIeYIiS/T6rDfTdPjt+sC282xKPbrdXHgwRMAAAAAgDl/q4PqfexLQbpzrR8NESZrdSqcBUluOtMLcvLTig4m8PornARWQSM6gdFDYyoqaHXVKC+wCRrVCExOGjcKTEqNc4KsAAdB1hG+CGwcQ+Qv15iHwMYzQzLV+sY+ZjlPATO1OlexlE7SsQ7M1FY64ehfsvL6rV/HJmuJsh8H54bmSXwAAAAA8GIPDgQAAAAAgPxfG0FVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWG/7lIQhIIwgM56TERIe1CrBylm/ysKIsL7eJV6OmcJw/x883NNcwr26ocuM9dbsMdpzI9zE9Rb86u7BLXuuXG2CWs1WbgGdaYstEGdIUtm+GABnREF/K8lS0GdPgtzUKnNrWdwpAXH4EgSnIWYPfo23zpvyF6PcZ6XSfsBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvduwltWEgCAJoG2QQg9aDFAQSuoSP0Pe/USAQ8pvFKI6DF+8doTbdVQAAAAAAT2oe1pK512UMzpunPd9VEZ42lvxsCk4Z9/xqDU647vndEvQr+dNL0OvIhjIHnUq2HEGfLZtq0GfKpj3oc8m2a9ClZtsWCPA/rNmmEXcaHJGHvDGXoNPNI/2IKhd0q27wfa5vbdikek+C8vvLBPchOOv4iLBqwb+yLbWU2zpYUgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADglV27120UiKIAfK8Ya0C4oKEwlI7t3t2W+/4vtZE3xUYxGCJtEen7GvqjM3d+BAAAAAAAAAAAAAAAAD9dd2jbQxN8RzMdaz6cShvs1LzVzOyPpVxPmXkbgz0uNfM6NR9hjtfMMgebDZmnNv7R9nk7BBuVzPPXTKsEt/fvLb6YslrFm4yP/J4leHOi2WDus8RT53wLXhqydvFUU6sKvtZnWcxWBTdNwC5isYLBC8e8xqJ7utS90ucQi6acglVN5iUWXbIEqw65tkq7vAarWgH+zwa2AnylyxzXZuAxWFfzHIvOOQTr7tnHolNegnXTyhCcM12GX2lyeaMojoEblMUKzukmt0FXFx5Om14Bt07B4/Nq1i7Y4J5ZmmdL+3ewRXPKvM3xyXxKr6m7Eswyf/pPQX67DPnuOB7iXTeWmvnLBrxLV/Kh9n8/gxP0/gj7/HAV3/c07TgO00V6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8Ic9O0htGAaiAKqADUV4bZQgSPAlfIS5/43aTWnTaiFbkE3eO8LwJc2MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOC9lKmueb1MH4kT5jW+7VviqCl+qyVxSI1neU4ccI2/sgwesMV/10S3HA33RHcAW9ZEpz2a3IKdSrTpBjvdo21JdNmirSYU8BVu8UUneN7sERmUo8k43GuJlj3RqTyc4DGLSW7QGmEhOKLkePbwMXJMqfI3aMs/8VssYs641T0i8mVSPgAAAAAAAACAT/bgQAAAAAAAyP+1EVRVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVdi1Y9XYYSAKw8MRqJOEbYEqG9TZxbJsd8u8/1Pd3RACCZHkbAik+L92u8NoZ0YWAAAAAOAvc7djWY7oDE+IedKbukXD9yxBr6Yp6WG+GM6LVVLKh7c7F/cgafaGk4qk8OHU+lVSMZzhVintdvc5wivt5IzaOK5FqoahLFVnX7lIm2GgSLMzayW4G7q8lHynOhO9uG+VLtZWFQz9ApytI0osJcMC7An0kR4nzda1KDEMth3DQcUlHYaWrGE8QdnQEiQ3ypg+3DFJNrDon6FF43QWyUCAv0RKBPgT07iJFP4DO+p4U3uhC3fk8X3VxBzYsWhUXzexifQXNd1Gtw3swh0vg2XYc6vfF9UvwZX7wIEg1U6+FOCIT1Ju/jhJfBMZ2CWVVn68TjhhlVQa+TEDnuCqpKu3z44kVUaYE9xV0rzbBzFICuR3TtHdvMX3SJcgcX6/wU96SGErJW9VDzMD4BMvVB94ofocX4LeTJnqe46P8VhutA4AAAAAAAAAAAAAAAAAAAAAAAAAAID/7dlNi+JAFIXhOycaREyKJOLHYKL2ShcS3M2yd/n//2jSjAwq+agkNPTifXbi7nDqVnkFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAIEFWJE5y5+IWGIaKS31JEqdaERqGCNaSoiy0WhDnibSmhQPc3xPLEqWU0NvdKY3tRZgrvRu8hE7nwN5t6aCnMFEamDUlyBz0kbdVLdfa0CuUbtYocOIQexXQWmypoG8B2yromIJ9MinoaGdm6PapqCNdznCvc1dGoc6GbtLF2umPoZuUdX5rIMBv5bS1ViFHuFei0lrFigzdcjn7wq/hkTIp7qhnbOgWOEXt4aaGPuv2CibaGvqE7rE4ZSc90lYqrMFVuhg8RGo6qrFTafARJlIZ2quL+EtkUILp7aV+kXRmAHoLcknp5f74lEWScvo3RJao5qKyKBPV0qthmCzSf9GF+o0QXrdFEX2uLww/AAAAAAAAAACAH23+sVqtZkfDGLvZpvrndJgbhvp9qp4Q4VD76tWSBAc5VO9OC4O3VVWjg6MtqiYbg6dl1Yj3jKdjVVHBaTdIC6bglBNcmxk87Ko2B8P4EVj7ZfALkFtkigUBftcM3Bsm3cIfBh973oHTHHnFTLShgNPMT1wh08ya9oE7g7cV+9SJZm+neEN+A82fl1on9jAjLA7LR/tmjL+RdsfjcUF6AAAAAAAAAAA8+QuvE3xjFcspUAAAAABJRU5ErkJggg==",rs="/goit-group2-react-nodejs/assets/backgroundElementHomeScreenTab-4de5d48f.png",ss=g.div`
  background-size: cover;
  background: url(${os});
  height: max-content;
  background-repeat: no-repeat;
  min-height: calc(100% - 64px);

  @media screen and (min-width: 768px) {
    background: url(${rs});
    min-height: calc(100% - 80px);
  }

  @media screen and (min-width: 1440px) {
    background: url(${sa});
    min-height: calc(100% - 72px);
  }
`,ls=g.div`
  margin-bottom: 40px;
  margin-top: 20px;
  background-size: 280px 208px;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${as});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 440px;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${is});
  }

  @media screen and (min-width: 768px) {
    background-size: 518px 386px;
    background-position: calc(50% + 9px) 8px;
    height: 492px;
    background-image: url(${ts});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background: url(${ns});
      background-size: 518px 386px;
      background-repeat: no-repeat;
    }
  }

  @media screen and (min-width: 1440px) {
    background-size: 738px 548px;
    background-position: calc(50% + 10px) 46px;
    height: 680px;
    background-image: url(${Zr});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${es});
    }
  }
`,cs=g.div`
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
`,ds=g.div`
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
`;function ps(){return De(),r.jsx(ss,{children:r.jsxs(cs,{children:[r.jsxs(ls,{children:[r.jsx(xa,{}),r.jsx(Jr,{})]}),r.jsxs(ds,{children:[r.jsx(Vr,{}),r.jsx(Da,{})]})]})})}export{ps as default};
