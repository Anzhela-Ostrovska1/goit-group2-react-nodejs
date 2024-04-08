import{n as x,c as wt,g as Et,r as R,a as Be,j as r,b as ta,d as Te,e as bn,s as At,f as na,h as aa,L as oa,R as Ee,i as ia,k as yn,l as wn,m as ra,o as sa,p as la}from"./index-bc91b970.js";import{b as ca}from"./bg_element_des@1x-1805b66c.js";const da=x.div`
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
`,fa=x.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,pa=x.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`,ua=x.div`
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
`;var vn={exports:{}};(function(e){(function(t,n){e.exports=n(t)})(typeof wt>"u"?typeof window>"u"?wt:window:wt,function(t){if(typeof t>"u"&&typeof t.document>"u")return!1;var n,a,o,s,d,f=`

Visit documentation page to learn more: https://notiflix.github.io/documentation`,u='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',m={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},b={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},g={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},N={ID:"NotiflixReportWrap",className:"notiflix-report",width:"320px",backgroundColor:"#f8f8f8",borderRadius:"25px",rtl:!1,zindex:4002,backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",backOverlayClickToClose:!1,fontFamily:"Quicksand",svgSize:"110px",plainText:!0,titleFontSize:"16px",titleMaxLength:34,messageFontSize:"13px",messageMaxLength:400,buttonFontSize:"14px",buttonMaxLength:34,cssAnimation:!0,cssAnimationDuration:360,cssAnimationStyle:"fade",success:{svgColor:"#32c682",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#32c682",buttonColor:"#fff",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{svgColor:"#ff5549",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#ff5549",buttonColor:"#fff",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{svgColor:"#eebf31",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#eebf31",buttonColor:"#fff",backOverlayColor:"rgba(238,191,49,0.2)"},info:{svgColor:"#26c0d3",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#26c0d3",buttonColor:"#fff",backOverlayColor:"rgba(38,192,211,0.2)"}},w={Show:"Show",Ask:"Ask",Prompt:"Prompt"},I={ID:"NotiflixConfirmWrap",className:"notiflix-confirm",width:"300px",zindex:4003,position:"center",distance:"10px",backgroundColor:"#f8f8f8",borderRadius:"25px",backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,cssAnimationStyle:"fade",plainText:!0,titleColor:"#32c682",titleFontSize:"16px",titleMaxLength:34,messageColor:"#1e1e1e",messageFontSize:"14px",messageMaxLength:110,buttonsFontSize:"15px",buttonsMaxLength:34,okButtonColor:"#f8f8f8",okButtonBackground:"#32c682",cancelButtonColor:"#f8f8f8",cancelButtonBackground:"#a9a9a9"},T={Standard:"Standard",Hourglass:"Hourglass",Circle:"Circle",Arrows:"Arrows",Dots:"Dots",Pulse:"Pulse",Custom:"Custom",Notiflix:"Notiflix"},Q={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},j={Standard:"Standard",Hourglass:"Hourglass",Circle:"Circle",Arrows:"Arrows",Dots:"Dots",Pulse:"Pulse"},B={ID:"NotiflixBlockWrap",querySelectorLimit:200,className:"notiflix-block",position:"absolute",zindex:1e3,backgroundColor:"rgba(255,255,255,0.9)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,svgSize:"45px",svgColor:"#383838",messageFontSize:"14px",messageMaxLength:34,messageColor:"#383838"},D=function(i){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549",`
`+i+f)},oe=function(i){return console.log("%c Notiflix Info ","padding:2px;border-radius:20px;color:#fff;background:#26c0d3",`
`+i+f)},ee=function(i){return i||(i="head"),t.document[i]!==null||(D(`
Notiflix needs to be appended to the "<`+i+'>" element, but you called it before the "<'+i+'>" element has been created.'),!1)},V=function(i,l){if(!ee("head"))return!1;if(i()!==null&&!t.document.getElementById(l)){var c=t.document.createElement("style");c.id=l,c.innerHTML=i(),t.document.head.appendChild(c)}},v=function(){var i={},l=!1,c=0;Object.prototype.toString.call(arguments[0])==="[object Boolean]"&&(l=arguments[0],c++);for(var y=function(C){for(var z in C)Object.prototype.hasOwnProperty.call(C,z)&&(i[z]=l&&Object.prototype.toString.call(C[z])==="[object Object]"?v(i[z],C[z]):C[z])};c<arguments.length;c++)y(arguments[c]);return i},_=function(i){var l=t.document.createElement("div");return l.innerHTML=i,l.textContent||l.innerText||""},le=function(i,l){i||(i="110px"),l||(l="#32c682");var c='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="'+i+'" height="'+i+'" fill="'+l+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';return c},Xe=function(i,l){i||(i="110px"),l||(l="#ff5549");var c='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="'+i+'" height="'+i+'" fill="'+l+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';return c},xt=function(i,l){i||(i="110px"),l||(l="#eebf31");var c='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="'+i+'" height="'+i+'" fill="'+l+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';return c},De=function(i,l){i||(i="110px"),l||(l="#26c0d3");var c='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="'+i+'" height="'+i+'" fill="'+l+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';return c},Le=function(i,l){i||(i="60px"),l||(l="#32c682");var c='<svg xmlns="http://www.w3.org/2000/svg" stroke="'+l+'" width="'+i+'" height="'+i+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>';return c},O=function(i,l){i||(i="60px"),l||(l="#32c682");var c='<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+l+'" width="'+i+'" height="'+i+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>';return c},S=function(i,l){i||(i="60px"),l||(l="#32c682");var c='<svg xmlns="http://www.w3.org/2000/svg" width="'+i+'" height="'+i+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+i+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+i+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+l+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>';return c},q=function(i,l){i||(i="60px"),l||(l="#32c682");var c='<svg xmlns="http://www.w3.org/2000/svg" fill="'+l+'" width="'+i+'" height="'+i+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>';return c},p=function(i,l){i||(i="60px"),l||(l="#32c682");var c='<svg xmlns="http://www.w3.org/2000/svg" fill="'+l+'" width="'+i+'" height="'+i+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>';return c},A=function(i,l){i||(i="60px"),l||(l="#32c682");var c='<svg xmlns="http://www.w3.org/2000/svg" stroke="'+l+'" width="'+i+'" height="'+i+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>';return c},Z=function(i,l,c){i||(i="60px"),l||(l="#f8f8f8"),c||(c="#32c682");var y='<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+i+'" height="'+i+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+l+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+c+'" stroke="'+c+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>';return y},te=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},U=0,ce=function(i,l,c,y){if(!ee("body"))return!1;n||ie.Notify.init({});var C=v(!0,n,{});if(typeof c=="object"&&!Array.isArray(c)||typeof y=="object"&&!Array.isArray(y)){var z={};typeof c=="object"?z=c:typeof y=="object"&&(z=y),n=v(!0,n,z)}var E=n[i.toLocaleLowerCase("en")];U++,typeof l!="string"&&(l="Notiflix "+i),n.plainText&&(l=_(l)),!n.plainText&&l.length>n.messageMaxLength&&(n=v(!0,n,{closeButton:!0,messageMaxLength:150}),l='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),l.length>n.messageMaxLength&&(l=l.substring(0,n.messageMaxLength)+"..."),n.fontAwesomeIconStyle==="shadow"&&(E.fontAwesomeIconColor=E.background),n.cssAnimation||(n.cssAnimationDuration=0);var h=t.document.getElementById(b.wrapID)||t.document.createElement("div");if(h.id=b.wrapID,h.style.width=n.width,h.style.zIndex=n.zindex,h.style.opacity=n.opacity,n.position==="center-center"?(h.style.left=n.distance,h.style.top=n.distance,h.style.right=n.distance,h.style.bottom=n.distance,h.style.margin="auto",h.classList.add("nx-flex-center-center"),h.style.maxHeight="calc((100vh - "+n.distance+") - "+n.distance+")",h.style.display="flex",h.style.flexWrap="wrap",h.style.flexDirection="column",h.style.justifyContent="center",h.style.alignItems="center",h.style.pointerEvents="none"):n.position==="center-top"?(h.style.left=n.distance,h.style.right=n.distance,h.style.top=n.distance,h.style.bottom="auto",h.style.margin="auto"):n.position==="center-bottom"?(h.style.left=n.distance,h.style.right=n.distance,h.style.bottom=n.distance,h.style.top="auto",h.style.margin="auto"):n.position==="right-bottom"?(h.style.right=n.distance,h.style.bottom=n.distance,h.style.top="auto",h.style.left="auto"):n.position==="left-top"?(h.style.left=n.distance,h.style.top=n.distance,h.style.right="auto",h.style.bottom="auto"):n.position==="left-bottom"?(h.style.left=n.distance,h.style.bottom=n.distance,h.style.top="auto",h.style.right="auto"):(h.style.right=n.distance,h.style.top=n.distance,h.style.left="auto",h.style.bottom="auto"),n.backOverlay){var L=t.document.getElementById(b.overlayID)||t.document.createElement("div");L.id=b.overlayID,L.style.width="100%",L.style.height="100%",L.style.position="fixed",L.style.zIndex=n.zindex-1,L.style.left=0,L.style.top=0,L.style.right=0,L.style.bottom=0,L.style.background=E.backOverlayColor||n.backOverlayColor,L.className=n.cssAnimation?"nx-with-animation":"",L.style.animationDuration=n.cssAnimation?n.cssAnimationDuration+"ms":"",t.document.getElementById(b.overlayID)||t.document.body.appendChild(L)}t.document.getElementById(b.wrapID)||t.document.body.appendChild(h);var k=t.document.createElement("div");k.id=n.ID+"-"+U,k.className=n.className+" "+E.childClassName+" "+(n.cssAnimation?"nx-with-animation":"")+" "+(n.useIcon?"nx-with-icon":"")+" nx-"+n.cssAnimationStyle+" "+(n.closeButton&&typeof c!="function"?"nx-with-close-button":"")+" "+(typeof c=="function"?"nx-with-callback":"")+" "+(n.clickToClose?"nx-notify-click-to-close":""),k.style.fontSize=n.fontSize,k.style.color=E.textColor,k.style.background=E.background,k.style.borderRadius=n.borderRadius,k.style.pointerEvents="all",n.rtl&&(k.setAttribute("dir","rtl"),k.classList.add("nx-rtl-on")),k.style.fontFamily='"'+n.fontFamily+'", '+u,n.cssAnimation&&(k.style.animationDuration=n.cssAnimationDuration+"ms");var X="";if(n.closeButton&&typeof c!="function"&&(X='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+E.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),!n.useIcon)k.innerHTML='<span class="nx-message">'+l+"</span>"+(n.closeButton?X:"");else if(n.useFontAwesome)k.innerHTML='<i style="color:'+E.fontAwesomeIconColor+"; font-size:"+n.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+E.fontAwesomeClassName+" "+(n.fontAwesomeIconStyle==="shadow"?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+l+"</span>"+(n.closeButton?X:"");else{var G="";i===m.Success?G='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+E.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':i===m.Failure?G='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+E.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':i===m.Warning?G='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+E.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':i===m.Info&&(G='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+E.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),k.innerHTML=G+'<span class="nx-message nx-with-icon">'+l+"</span>"+(n.closeButton?X:"")}if(n.position==="left-bottom"||n.position==="right-bottom"){var J=t.document.getElementById(b.wrapID);J.insertBefore(k,J.firstChild)}else t.document.getElementById(b.wrapID).appendChild(k);var $=t.document.getElementById(k.id);if($){var P,K,F=function(){$.classList.add("nx-remove");var W=t.document.getElementById(b.overlayID);W&&0>=h.childElementCount&&W.classList.add("nx-remove"),clearTimeout(P)},pe=function(){if($&&$.parentNode!==null&&$.parentNode.removeChild($),0>=h.childElementCount&&h.parentNode!==null){h.parentNode.removeChild(h);var W=t.document.getElementById(b.overlayID);W&&W.parentNode!==null&&W.parentNode.removeChild(W)}clearTimeout(K)};if(n.closeButton&&typeof c!="function"){var ue=t.document.getElementById(k.id).querySelector("span.nx-close-button");ue.addEventListener("click",function(){F();var W=setTimeout(function(){pe(),clearTimeout(W)},n.cssAnimationDuration)})}if((typeof c=="function"||n.clickToClose)&&$.addEventListener("click",function(){typeof c=="function"&&c(),F();var W=setTimeout(function(){pe(),clearTimeout(W)},n.cssAnimationDuration)}),!n.closeButton&&typeof c!="function"){var re=function(){P=setTimeout(function(){F()},n.timeout),K=setTimeout(function(){pe()},n.timeout+n.cssAnimationDuration)};re(),n.pauseOnHover&&($.addEventListener("mouseenter",function(){$.classList.add("nx-paused"),clearTimeout(P),clearTimeout(K)}),$.addEventListener("mouseleave",function(){$.classList.remove("nx-paused"),re()}))}}if(n.showOnlyTheLastOne&&0<U)for(var se,Y=t.document.querySelectorAll("[id^="+n.ID+"-]:not([id="+n.ID+"-"+U+"])"),Ae=0;Ae<Y.length;Ae++)se=Y[Ae],se.parentNode!==null&&se.parentNode.removeChild(se);n=v(!0,n,C)},ye=function(){return'[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},we=function(i,l,c,y,C,z){if(!ee("body"))return!1;a||ie.Report.init({});var E={};if(typeof C=="object"&&!Array.isArray(C)||typeof z=="object"&&!Array.isArray(z)){var h={};typeof C=="object"?h=C:typeof z=="object"&&(h=z),E=v(!0,a,{}),a=v(!0,a,h)}var L=a[i.toLocaleLowerCase("en")];typeof l!="string"&&(l="Notiflix "+i),typeof c!="string"&&(i===g.Success?c='"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein':i===g.Failure?c='"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford':i===g.Warning?c='"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk':i===g.Info&&(c='"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')),typeof y!="string"&&(y="Okay"),a.plainText&&(l=_(l),c=_(c),y=_(y)),a.plainText||(l.length>a.titleMaxLength&&(l="Possible HTML Tags Error",c='The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.',y="Okay"),c.length>a.messageMaxLength&&(l="Possible HTML Tags Error",c='The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.',y="Okay"),y.length>a.buttonMaxLength&&(l="Possible HTML Tags Error",c='The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.',y="Okay")),l.length>a.titleMaxLength&&(l=l.substring(0,a.titleMaxLength)+"..."),c.length>a.messageMaxLength&&(c=c.substring(0,a.messageMaxLength)+"..."),y.length>a.buttonMaxLength&&(y=y.substring(0,a.buttonMaxLength)+"..."),a.cssAnimation||(a.cssAnimationDuration=0);var k=t.document.createElement("div");k.id=N.ID,k.className=a.className,k.style.zIndex=a.zindex,k.style.borderRadius=a.borderRadius,k.style.fontFamily='"'+a.fontFamily+'", '+u,a.rtl&&(k.setAttribute("dir","rtl"),k.classList.add("nx-rtl-on")),k.style.display="flex",k.style.flexWrap="wrap",k.style.flexDirection="column",k.style.alignItems="center",k.style.justifyContent="center";var X="",G=a.backOverlayClickToClose===!0;a.backOverlay&&(X='<div class="'+a.className+"-overlay"+(a.cssAnimation?" nx-with-animation":"")+(G?" nx-report-click-to-close":"")+'" style="background:'+(L.backOverlayColor||a.backOverlayColor)+";animation-duration:"+a.cssAnimationDuration+'ms;"></div>');var J="";if(i===g.Success?J=le(a.svgSize,L.svgColor):i===g.Failure?J=Xe(a.svgSize,L.svgColor):i===g.Warning?J=xt(a.svgSize,L.svgColor):i===g.Info&&(J=De(a.svgSize,L.svgColor)),k.innerHTML=X+'<div class="'+a.className+"-content"+(a.cssAnimation?" nx-with-animation ":"")+" nx-"+a.cssAnimationStyle+'" style="width:'+a.width+"; background:"+a.backgroundColor+"; animation-duration:"+a.cssAnimationDuration+'ms;"><div style="width:'+a.svgSize+"; height:"+a.svgSize+';" class="'+a.className+'-icon">'+J+'</div><h5 class="'+a.className+'-title" style="font-weight:500; font-size:'+a.titleFontSize+"; color:"+L.titleColor+';">'+l+'</h5><p class="'+a.className+'-message" style="font-size:'+a.messageFontSize+"; color:"+L.messageColor+';">'+c+'</p><a id="NXReportButton" class="'+a.className+'-button" style="font-weight:500; font-size:'+a.buttonFontSize+"; background:"+L.buttonBackground+"; color:"+L.buttonColor+';">'+y+"</a></div>",!t.document.getElementById(k.id)){t.document.body.appendChild(k);var $=function(){var F=t.document.getElementById(k.id);F.classList.add("nx-remove");var pe=setTimeout(function(){F.parentNode!==null&&F.parentNode.removeChild(F),clearTimeout(pe)},a.cssAnimationDuration)},P=t.document.getElementById("NXReportButton");if(P.addEventListener("click",function(){typeof C=="function"&&C(),$()}),X&&G){var K=t.document.querySelector(".nx-report-click-to-close");K.addEventListener("click",function(){$()})}}a=v(!0,a,E)},ht=function(){return'[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*="-content"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-head"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*="-content"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*="-content"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},Ve=function(i,l,c,y,C,z,E,h,L){if(!ee("body"))return!1;o||ie.Confirm.init({});var k=v(!0,o,{});typeof L!="object"||Array.isArray(L)||(o=v(!0,o,L)),typeof l!="string"&&(l="Notiflix Confirm"),typeof c!="string"&&(c="Do you agree with me?"),typeof C!="string"&&(C="Yes"),typeof z!="string"&&(z="No"),typeof E!="function"&&(E=void 0),typeof h!="function"&&(h=void 0),o.plainText&&(l=_(l),c=_(c),C=_(C),z=_(z)),o.plainText||(l.length>o.titleMaxLength&&(l="Possible HTML Tags Error",c='The "plainText" option is "false" and the title content length is more than "titleMaxLength" option.',C="Okay",z="..."),c.length>o.messageMaxLength&&(l="Possible HTML Tags Error",c='The "plainText" option is "false" and the message content length is more than "messageMaxLength" option.',C="Okay",z="..."),(C.length||z.length)>o.buttonsMaxLength&&(l="Possible HTML Tags Error",c='The "plainText" option is "false" and the buttons content length is more than "buttonsMaxLength" option.',C="Okay",z="...")),l.length>o.titleMaxLength&&(l=l.substring(0,o.titleMaxLength)+"..."),c.length>o.messageMaxLength&&(c=c.substring(0,o.messageMaxLength)+"..."),C.length>o.buttonsMaxLength&&(C=C.substring(0,o.buttonsMaxLength)+"..."),z.length>o.buttonsMaxLength&&(z=z.substring(0,o.buttonsMaxLength)+"..."),o.cssAnimation||(o.cssAnimationDuration=0);var X=t.document.createElement("div");X.id=I.ID,X.className=o.className+(o.cssAnimation?" nx-with-animation nx-"+o.cssAnimationStyle:""),X.style.zIndex=o.zindex,X.style.padding=o.distance,o.rtl&&(X.setAttribute("dir","rtl"),X.classList.add("nx-rtl-on"));var G=typeof o.position=="string"?o.position.trim():"center";X.classList.add("nx-position-"+G),X.style.fontFamily='"'+o.fontFamily+'", '+u;var J="";o.backOverlay&&(J='<div class="'+o.className+"-overlay"+(o.cssAnimation?" nx-with-animation":"")+'" style="background:'+o.backOverlayColor+";animation-duration:"+o.cssAnimationDuration+'ms;"></div>');var $="";typeof E=="function"&&($='<a id="NXConfirmButtonCancel" class="nx-confirm-button-cancel" style="color:'+o.cancelButtonColor+";background:"+o.cancelButtonBackground+";font-size:"+o.buttonsFontSize+';">'+z+"</a>");var P="",K=null,F=void 0;if(i===w.Ask||i===w.Prompt){K=y||"";var pe=i===w.Ask||200<K.length?Math.ceil(1.5*K.length):250,ue=i===w.Prompt?'value="'+K+'"':"";P='<div><input id="NXConfirmValidationInput" type="text" '+ue+' maxlength="'+pe+'" style="font-size:'+o.messageFontSize+";border-radius: "+o.borderRadius+';" autocomplete="off" spellcheck="false" autocapitalize="none" /></div>'}if(X.innerHTML=J+'<div class="'+o.className+'-content" style="width:'+o.width+"; background:"+o.backgroundColor+"; animation-duration:"+o.cssAnimationDuration+"ms; border-radius: "+o.borderRadius+';"><div class="'+o.className+'-head"><h5 style="color:'+o.titleColor+";font-size:"+o.titleFontSize+';">'+l+'</h5><div style="color:'+o.messageColor+";font-size:"+o.messageFontSize+';">'+c+P+'</div></div><div class="'+o.className+'-buttons"><a id="NXConfirmButtonOk" class="nx-confirm-button-ok'+(typeof E=="function"?"":" nx-full")+'" style="color:'+o.okButtonColor+";background:"+o.okButtonBackground+";font-size:"+o.buttonsFontSize+';">'+C+"</a>"+$+"</div></div>",!t.document.getElementById(X.id)){t.document.body.appendChild(X);var re=t.document.getElementById(X.id),se=t.document.getElementById("NXConfirmButtonOk"),Y=t.document.getElementById("NXConfirmValidationInput");if(Y&&(Y.focus(),Y.setSelectionRange(0,(Y.value||"").length),Y.addEventListener("keyup",function(W){var Pe=W.target.value;if(i===w.Ask&&Pe!==K)W.preventDefault(),Y.classList.add("nx-validation-failure"),Y.classList.remove("nx-validation-success");else{i===w.Ask&&(Y.classList.remove("nx-validation-failure"),Y.classList.add("nx-validation-success"));var qe=(W.key||"").toLocaleLowerCase("en")==="enter"||W.keyCode===13;qe&&se.dispatchEvent(new Event("click"))}})),se.addEventListener("click",function(W){if(i===w.Ask&&K&&Y){var Pe=(Y.value||"").toString();if(Pe!==K)return Y.focus(),Y.classList.add("nx-validation-failure"),W.stopPropagation(),W.preventDefault(),W.returnValue=!1,W.cancelBubble=!0,!1;Y.classList.remove("nx-validation-failure")}typeof E=="function"&&(i===w.Prompt&&Y&&(F=Y.value||""),E(F)),re.classList.add("nx-remove");var qe=setTimeout(function(){re.parentNode!==null&&(re.parentNode.removeChild(re),clearTimeout(qe))},o.cssAnimationDuration)}),typeof E=="function"){var Ae=t.document.getElementById("NXConfirmButtonCancel");Ae.addEventListener("click",function(){typeof h=="function"&&(i===w.Prompt&&Y&&(F=Y.value||""),h(F)),re.classList.add("nx-remove");var W=setTimeout(function(){re.parentNode!==null&&(re.parentNode.removeChild(re),clearTimeout(W))},o.cssAnimationDuration)})}}o=v(!0,o,k)},gt=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},ve=function(i,l,c,y,C){if(!ee("body"))return!1;s||ie.Loading.init({});var z=v(!0,s,{});if(typeof l=="object"&&!Array.isArray(l)||typeof c=="object"&&!Array.isArray(c)){var E={};typeof l=="object"?E=l:typeof c=="object"&&(E=c),s=v(!0,s,E)}var h="";if(typeof l=="string"&&0<l.length&&(h=l),y){h=h.length>s.messageMaxLength?_(h).toString().substring(0,s.messageMaxLength)+"...":_(h).toString();var L="";0<h.length&&(L='<p id="'+s.messageID+'" class="nx-loading-message" style="color:'+s.messageColor+";font-size:"+s.messageFontSize+';">'+h+"</p>"),s.cssAnimation||(s.cssAnimationDuration=0);var k="";if(i===T.Standard)k=Le(s.svgSize,s.svgColor);else if(i===T.Hourglass)k=O(s.svgSize,s.svgColor);else if(i===T.Circle)k=S(s.svgSize,s.svgColor);else if(i===T.Arrows)k=q(s.svgSize,s.svgColor);else if(i===T.Dots)k=p(s.svgSize,s.svgColor);else if(i===T.Pulse)k=A(s.svgSize,s.svgColor);else if(i===T.Custom&&s.customSvgCode!==null&&s.customSvgUrl===null)k=s.customSvgCode||"";else if(i===T.Custom&&s.customSvgUrl!==null&&s.customSvgCode===null)k='<img class="nx-custom-loading-icon" width="'+s.svgSize+'" height="'+s.svgSize+'" src="'+s.customSvgUrl+'" alt="Notiflix">';else{if(i===T.Custom&&(s.customSvgUrl===null||s.customSvgCode===null))return D('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;k=Z(s.svgSize,"#f8f8f8","#32c682")}var X=parseInt((s.svgSize||"").replace(/[^0-9]/g,"")),G=t.innerWidth,J=X>=G?G-40+"px":X+"px",$='<div style="width:'+J+"; height:"+J+';" class="'+s.className+"-icon"+(0<h.length?" nx-with-message":"")+'">'+k+"</div>",P=t.document.createElement("div");if(P.id=Q.ID,P.className=s.className+(s.cssAnimation?" nx-with-animation":"")+(s.clickToClose?" nx-loading-click-to-close":""),P.style.zIndex=s.zindex,P.style.background=s.backgroundColor,P.style.animationDuration=s.cssAnimationDuration+"ms",P.style.fontFamily='"'+s.fontFamily+'", '+u,P.style.display="flex",P.style.flexWrap="wrap",P.style.flexDirection="column",P.style.alignItems="center",P.style.justifyContent="center",s.rtl&&(P.setAttribute("dir","rtl"),P.classList.add("nx-rtl-on")),P.innerHTML=$+L,!t.document.getElementById(P.id)&&(t.document.body.appendChild(P),s.clickToClose)){var K=t.document.getElementById(P.id);K.addEventListener("click",function(){P.classList.add("nx-remove");var ue=setTimeout(function(){P.parentNode!==null&&(P.parentNode.removeChild(P),clearTimeout(ue))},s.cssAnimationDuration)})}}else if(t.document.getElementById(Q.ID))var F=t.document.getElementById(Q.ID),pe=setTimeout(function(){F.classList.add("nx-remove");var ue=setTimeout(function(){F.parentNode!==null&&(F.parentNode.removeChild(F),clearTimeout(ue))},s.cssAnimationDuration);clearTimeout(pe)},C);s=v(!0,s,z)},Un=function(i){typeof i!="string"&&(i="");var l=t.document.getElementById(Q.ID);if(l)if(0<i.length){i=i.length>s.messageMaxLength?_(i).substring(0,s.messageMaxLength)+"...":_(i);var c=l.getElementsByTagName("p")[0];if(c)c.innerHTML=i;else{var y=t.document.createElement("p");y.id=s.messageID,y.className="nx-loading-message nx-loading-message-new",y.style.color=s.messageColor,y.style.fontSize=s.messageFontSize,y.innerHTML=i,l.appendChild(y)}}else D("Where is the new message?")},Yn=function(){return'[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*="-icon"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*="-icon"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*="-message"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].nx-with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}'},bt=0,Se=function(i,l,c,y,C,z){var E;if(Array.isArray(c)){if(1>c.length)return D("Array of HTMLElements should contains at least one HTMLElement."),!1;E=c}else if(Object.prototype.isPrototypeOf.call(NodeList.prototype,c)){if(1>c.length)return D("NodeListOf<HTMLElement> should contains at least one HTMLElement."),!1;E=Array.prototype.slice.call(c)}else{var h=typeof c!="string"||1>(c||"").length||(c||"").length===1&&((c||"")[0]==="#"||(c||"")[0]===".");if(h)return D("The selector parameter must be a string and matches a specified CSS selector(s)."),!1;var L=t.document.querySelectorAll(c);if(1>L.length)return D('You called the "Notiflix.Block..." function with "'+c+'" selector, but there is no such element(s) in the document.'),!1;E=L}d||ie.Block.init({});var k=v(!0,d,{});if(typeof y=="object"&&!Array.isArray(y)||typeof C=="object"&&!Array.isArray(C)){var X={};typeof y=="object"?X=y:typeof C=="object"&&(X=C),d=v(!0,d,X)}var G="";typeof y=="string"&&0<y.length&&(G=y),d.cssAnimation||(d.cssAnimationDuration=0);var J=B.className;typeof d.className=="string"&&(J=d.className.trim());var $=typeof d.querySelectorLimit=="number"?d.querySelectorLimit:200,P=(E||[]).length>=$?$:E.length,K="nx-block-temporary-position";if(i){for(var F,pe=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr","html","head","title","script","style","iframe"],ue=0;ue<P;ue++)if(F=E[ue],F){if(-1<pe.indexOf(F.tagName.toLocaleLowerCase("en")))break;var re=F.querySelectorAll("[id^="+B.ID+"]");if(1>re.length){var se="";l&&(l===j.Hourglass?se=O(d.svgSize,d.svgColor):l===j.Circle?se=S(d.svgSize,d.svgColor):l===j.Arrows?se=q(d.svgSize,d.svgColor):l===j.Dots?se=p(d.svgSize,d.svgColor):l===j.Pulse?se=A(d.svgSize,d.svgColor):se=Le(d.svgSize,d.svgColor));var Y='<span class="'+J+'-icon" style="width:'+d.svgSize+";height:"+d.svgSize+';">'+se+"</span>",Ae="";0<G.length&&(G=G.length>d.messageMaxLength?_(G).substring(0,d.messageMaxLength)+"...":_(G),Ae='<span style="font-size:'+d.messageFontSize+";color:"+d.messageColor+';" class="'+J+'-message">'+G+"</span>"),bt++;var W=t.document.createElement("div");W.id=B.ID+"-"+bt,W.className=J+(d.cssAnimation?" nx-with-animation":""),W.style.position=d.position,W.style.zIndex=d.zindex,W.style.background=d.backgroundColor,W.style.animationDuration=d.cssAnimationDuration+"ms",W.style.fontFamily='"'+d.fontFamily+'", '+u,W.style.display="flex",W.style.flexWrap="wrap",W.style.flexDirection="column",W.style.alignItems="center",W.style.justifyContent="center",d.rtl&&(W.setAttribute("dir","rtl"),W.classList.add("nx-rtl-on")),W.innerHTML=Y+Ae;var Pe=t.getComputedStyle(F).getPropertyValue("position"),qe=typeof Pe=="string"?Pe.toLocaleLowerCase("en"):"relative",jt=Math.round(1.25*parseInt(d.svgSize))+40,$n=F.offsetHeight||0,yt="";jt>$n&&(yt="min-height:"+jt+"px;");var Dt="";Dt=F.getAttribute("id")?"#"+F.getAttribute("id"):F.classList[0]?"."+F.classList[0]:(F.tagName||"").toLocaleLowerCase("en");var Lt="",Pt=-1>=["absolute","relative","fixed","sticky"].indexOf(qe);if(Pt||0<yt.length){if(!ee("head"))return!1;Pt&&(Lt="position:relative!important;");var Gn='<style id="Style-'+B.ID+"-"+bt+'">'+Dt+"."+K+"{"+Lt+yt+"}</style>",Rt=t.document.createRange();Rt.selectNode(t.document.head);var Qn=Rt.createContextualFragment(Gn);t.document.head.appendChild(Qn),F.classList.add(K)}F.appendChild(W)}}}else var Kn=function(ne){var de=setTimeout(function(){ne.parentNode!==null&&ne.parentNode.removeChild(ne);var Ue=ne.getAttribute("id"),nt=t.document.getElementById("Style-"+Ue);nt&&nt.parentNode!==null&&nt.parentNode.removeChild(nt),clearTimeout(de)},d.cssAnimationDuration)},Jn=function(ne){if(ne&&0<ne.length)for(var de,Ue=0;Ue<ne.length;Ue++)de=ne[Ue],de&&(de.classList.add("nx-remove"),Kn(de));else oe(typeof c=="string"?'"Notiflix.Block.remove();" function called with "'+c+'" selector, but this selector does not have a "Block" element to remove.':'"Notiflix.Block.remove();" function called with "'+c+'", but this "Array<HTMLElement>" or "NodeListOf<HTMLElement>" does not have a "Block" element to remove.')},Zn=function(ne){var de=setTimeout(function(){ne.classList.remove(K),clearTimeout(de)},d.cssAnimationDuration+300)},ea=setTimeout(function(){for(var ne,de=0;de<P;de++)ne=E[de],ne&&(Zn(ne),re=ne.querySelectorAll("[id^="+B.ID+"]"),Jn(re));clearTimeout(ea)},z);d=v(!0,d,k)},ie={Notify:{init:function(i){n=v(!0,b,i),V(te,"NotiflixNotifyInternalCSS")},merge:function(i){return n?void(n=v(!0,n,i)):(D("You have to initialize the Notify module before call Merge function."),!1)},success:function(i,l,c){ce(m.Success,i,l,c)},failure:function(i,l,c){ce(m.Failure,i,l,c)},warning:function(i,l,c){ce(m.Warning,i,l,c)},info:function(i,l,c){ce(m.Info,i,l,c)}},Report:{init:function(i){a=v(!0,N,i),V(ye,"NotiflixReportInternalCSS")},merge:function(i){return a?void(a=v(!0,a,i)):(D("You have to initialize the Report module before call Merge function."),!1)},success:function(i,l,c,y,C){we(g.Success,i,l,c,y,C)},failure:function(i,l,c,y,C){we(g.Failure,i,l,c,y,C)},warning:function(i,l,c,y,C){we(g.Warning,i,l,c,y,C)},info:function(i,l,c,y,C){we(g.Info,i,l,c,y,C)}},Confirm:{init:function(i){o=v(!0,I,i),V(ht,"NotiflixConfirmInternalCSS")},merge:function(i){return o?void(o=v(!0,o,i)):(D("You have to initialize the Confirm module before call Merge function."),!1)},show:function(i,l,c,y,C,z,E){Ve(w.Show,i,l,null,c,y,C,z,E)},ask:function(i,l,c,y,C,z,E,h){Ve(w.Ask,i,l,c,y,C,z,E,h)},prompt:function(i,l,c,y,C,z,E,h){Ve(w.Prompt,i,l,c,y,C,z,E,h)}},Loading:{init:function(i){s=v(!0,Q,i),V(gt,"NotiflixLoadingInternalCSS")},merge:function(i){return s?void(s=v(!0,s,i)):(D("You have to initialize the Loading module before call Merge function."),!1)},standard:function(i,l){ve(T.Standard,i,l,!0,0)},hourglass:function(i,l){ve(T.Hourglass,i,l,!0,0)},circle:function(i,l){ve(T.Circle,i,l,!0,0)},arrows:function(i,l){ve(T.Arrows,i,l,!0,0)},dots:function(i,l){ve(T.Dots,i,l,!0,0)},pulse:function(i,l){ve(T.Pulse,i,l,!0,0)},custom:function(i,l){ve(T.Custom,i,l,!0,0)},notiflix:function(i,l){ve(T.Notiflix,i,l,!0,0)},remove:function(i){typeof i!="number"&&(i=0),ve(null,null,null,!1,i)},change:function(i){Un(i)}},Block:{init:function(i){d=v(!0,B,i),V(Yn,"NotiflixBlockInternalCSS")},merge:function(i){return d?void(d=v(!0,d,i)):(D('You have to initialize the "Notiflix.Block" module before call Merge function.'),!1)},standard:function(i,l,c){Se(!0,j.Standard,i,l,c)},hourglass:function(i,l,c){Se(!0,j.Hourglass,i,l,c)},circle:function(i,l,c){Se(!0,j.Circle,i,l,c)},arrows:function(i,l,c){Se(!0,j.Arrows,i,l,c)},dots:function(i,l,c){Se(!0,j.Dots,i,l,c)},pulse:function(i,l,c){Se(!0,j.Pulse,i,l,c)},remove:function(i,l){typeof l!="number"&&(l=0),Se(!1,null,i,null,null,l)}}};return typeof t.Notiflix=="object"?v(!0,t.Notiflix,{Notify:ie.Notify,Report:ie.Report,Confirm:ie.Confirm,Loading:ie.Loading,Block:ie.Block}):{Notify:ie.Notify,Report:ie.Report,Confirm:ie.Confirm,Loading:ie.Loading,Block:ie.Block}})})(vn);var ma=vn.exports;const Ft=Et(ma),xa=({onClose:e})=>{const[t,n]=R.useState(0),[a,o]=R.useState(0),[s,d]=R.useState(0),[f,u]=R.useState(!0),[m,b]=R.useState(0),g=Be(),N=()=>{u(!f)},w=j=>{n(Number(j.target.value))},I=j=>{o(Number(j.target.value))};R.useEffect(()=>{d(f?Math.ceil((t*.03+a*.4)*100)/100<2?2:Math.ceil((t*.03+a*.4)*100)/100:Math.ceil((t*.04+a*.6)*100)/100<2?2:Math.ceil((t*.04+a*.6)*100)/100)},[f,t,a]);const T=j=>{b(Number(j.target.value))},Q=j=>{try{if(j.preventDefault(),m<2)return Ft.Notify.failure("The required amount of water in liters per day: 2L");if(m>15)return Ft.Notify.failure("The maximum amount of water in liters per day: 15L");g(ta(m)),e()}catch(B){console.error("error",B)}};return R.useEffect(()=>{const j=B=>{B.key==="Escape"&&e()};window.addEventListener("keydown",j)},[e]),r.jsx(pa,{onClick:e,children:r.jsxs(ua,{onClick:j=>j.stopPropagation(),children:[r.jsxs("div",{className:"headerDaily",children:[r.jsx("h2",{children:"My daily norma"}),r.jsx("button",{type:"button",className:"closeButton",onClick:e,children:r.jsx("svg",{width:"24",height:"24",children:r.jsx("use",{href:"/goit-group2-react-nodejs/src/assets/images/sprite/horodiukIcons.svg#icon-close"})})})]}),r.jsxs("div",{className:"formulaContainer",children:[r.jsxs("div",{className:"formula",children:[r.jsxs("div",{className:"formulaText",children:[r.jsx("p",{children:"For girl:"}),r.jsx("span",{className:"formulaSpan",children:"V=(M*0,03) + (T*0,4)"})]}),r.jsxs("div",{className:"formulaText",children:[r.jsx("p",{children:"For man:"}),r.jsx("span",{className:"formulaSpan",children:"V=(M*0,04) + (T*0,6)"})]})]}),r.jsxs("p",{className:"formulaDescription",children:[r.jsx("span",{className:"formulaStar",children:"*"})," V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]})]}),r.jsxs("form",{onSubmit:Q,children:[r.jsx("h3",{children:"Calculate your rate:"}),r.jsxs("div",{className:"checkBox",children:[r.jsxs("label",{children:[r.jsx("input",{type:"radio",name:"gender",value:"woman",checked:f,onChange:N})," For woman"]}),r.jsxs("label",{children:[r.jsx("input",{type:"radio",name:"gender",value:"man",checked:!f,onChange:N})," For man"]})]}),r.jsx("label",{className:"inputDescription",children:"Your weight in kilograms:"}),r.jsx("input",{className:"inputForm",placeholder:"0",onChange:w}),r.jsx("label",{className:"inputDescription",children:"The time of active participation in sports or other activities with a high physical. load in hours:"}),r.jsx("input",{className:"inputForm",placeholder:"0",onChange:I}),r.jsxs("div",{className:"requiredAmount",children:[r.jsx("p",{className:"amountDescription",children:"The required amount of water in liters per day:"}),r.jsxs("span",{className:"amount",children:[s," L"]})]}),r.jsx("h3",{children:"Write down how much water you will drink:"}),r.jsx("input",{className:"inputForm",placeholder:"0",onChange:T}),r.jsx("button",{className:"saveButton",type:"submit",children:"Save"})]})]})})},ha=()=>{const[e,t]=R.useState(!1),{waterRate:n}=Te(bn),a=n/1e3,o=()=>{t(!1)},s=()=>{t(!0)};return r.jsx("div",{children:r.jsxs(da,{children:[r.jsx("h2",{children:"My daily norma:"}),r.jsxs(fa,{children:[r.jsxs("p",{children:[" ",a," L"]}),r.jsx("button",{type:"button",onClick:s,children:"Edit"}),e&&r.jsx(xa,{isOpen:e,onClose:o})]})]})})},ga=ha,kn=e=>e.water.notes,ba=e=>e.water.currentNote,ya=e=>e.water.monthNotes,wa=e=>e.water.isLoading,It=new Date,Bt=[It.getFullYear(),It.getMonth()+1],_t=(e=Bt,t)=>{const[n,a]=e;switch(t){case"forward":return a>=12?[n+1,1]:[n,a+1];case"back":return a<=1?[n-1,12]:[n,a-1];default:return Bt}},va=x.div`
  width: 100%;
  margin-top: 15px;
  height: 490px;

  @media screen and (min-width: 768px) {
    height: 308px;
  }
`,ka=x.h3`
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
`,Aa=x.div`
  display: flex;
  justify-content: space-between;
`,Na=x.div`
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
`,Ca=x.ul`
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
`,Sa=x.li`
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
`,An=["January","February","March","April","May","June","July","August","September","October","November","December"],Ma=e=>An[e-1],Oa=e=>{const t=R.useRef(null);return R.useEffect(()=>{const n=a=>{t.current&&!t.current.contains(a.target)&&e()};return document.addEventListener("click",n,!0),()=>{document.removeEventListener("click",n,!0)}},[e]),t},at={sm:68,md:74},Ea={sm:5,md:10},ot={md:69,xl:56},vt=(e,t)=>{const n=e/Ea[t],a=Math.floor(n);switch(t){case"sm":return a===n?parseInt(n-1)*at[t]-12:parseInt(n)*at[t]-12;case"md":return a===n?parseInt(n-1)*at[t]:parseInt(n)*at[t];default:return 0}},Ht=(e,t)=>{const[n,a]=e%10===0?[9,!1]:[e%10-1,e%10<5];return a?n*ot[t]+ot[t]/4:n*ot[t]-280+ot[t]/4},Wa=x.div`
  position: absolute;
  left: 50%;
  top: -194px;
  transform: translate(
    -50%,
    ${({$dayNumber:e})=>`${vt(e,"sm")}px`}
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
      ${({$dayNumber:e})=>`${Ht(e,"md")}px`},
      ${({$dayNumber:e})=>`${vt(e,"md")}px`}
    );
  }

  @media screen and (min-width: 1440px) {
    transform: translate(
      ${({$dayNumber:e})=>`${Ht(e,"xl")}px`},
      ${({$dayNumber:e})=>`${vt(e,"md")}px`}
    );
  }
`,Ta=x.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  p {
    color: ${({theme:e})=>e.color.primaryAccent};
    font-size: 16px;
    line-height: 1.25;
  }
`,za=({currentDay:e,close:t})=>{const n=Oa(t),{date:a,percent:o,quantity:s,waterRate:d}=e,f={dailyNorma:d??0,percent:o??0},u=An[(a==null?void 0:a.month)-1],m=f.dailyNorma/1e3;return r.jsxs(Wa,{ref:n,$dayNumber:a.day,children:[r.jsx(Ta,{children:r.jsxs("p",{children:[r.jsxs("span",{children:[a==null?void 0:a.day,", "]}),r.jsx("span",{children:u})]})}),r.jsxs("p",{children:["Daily norma : ",r.jsxs("span",{children:[m,"L"]})]}),r.jsxs("p",{children:["Fulfillment of the daily norm : ",r.jsxs("span",{children:[parseInt(f.percent),"%"]})]}),r.jsxs("p",{children:["How many servings of water : ",r.jsx("span",{children:s??0})]})]})},ja=({monthData:e})=>{const[t,n]=R.useState(null),a=R.useCallback(()=>{n(null)},[]);return r.jsxs(Ca,{children:[t&&r.jsx(za,{currentDay:t,close:a}),e.map(o=>r.jsxs(Sa,{onClick:()=>n(o),$percentage:o.percent,$isActive:(t==null?void 0:t.date.day)===o.date.day,children:[r.jsx("span",{className:"day",children:o.date.day}),r.jsxs("span",{className:"percentage",children:[parseInt(o.percent)||0,"%"]})]},o.date.day))]})},Da=({changeDirection:e,month:t,year:n})=>{function a(o,s){const d=new Date,f=d.getFullYear(),u=d.getMonth()+1;return Number(s)>f||Number(s)===f&&Number(o)>=u}return r.jsxs(Aa,{children:[r.jsx(ka,{children:"Month"}),r.jsxs(Na,{children:[r.jsx("button",{className:"arrow arrow-left",onClick:()=>e("back"),type:"button",children:r.jsx("svg",{fill:"#407BFF",width:"14",height:"14",children:r.jsx("use",{href:`${At}#icon-arrow-left`})})}),r.jsxs("p",{className:"month__name",children:[Ma(t),", ",n]}),r.jsx("button",{className:`arrow arrow-right ${a(t,n)?"arrow-right-disabled":""}`,onClick:()=>e("forward"),type:"button",disabled:a(t,n),children:r.jsx("svg",{fill:`${a(t,n)?"#9ebbff":"#407BFF"}`,width:"14",height:"14",transform:"rotate(180)",children:r.jsx("use",{href:`${At}#icon-arrow-left`})})})]})]})},La=()=>{var u;const e=Te(ya),t=Te(wa),[n,a]=na(),o=Be();let[s,d]=((u=n.get("date"))==null?void 0:u.split("_"))??_t();R.useEffect(()=>{o(aa({year:s.toString(),month:d.toString()}))},[o,s,d]);const f=R.useCallback(m=>{const b=_t([+s,+d],m);a({date:b.join("_")})},[a,s,d]);return r.jsxs(va,{children:[r.jsx(Da,{changeDirection:f,month:d,year:s}),t?r.jsx(oa,{}):r.jsx(ja,{monthData:e})]})},Pa=La;var Nn={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Xt=Ee.createContext&&Ee.createContext(Nn),Ra=["attr","size","title"];function Fa(e,t){if(e==null)return{};var n=Ia(e,t),a,o;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)a=s[o],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function Ia(e,t){if(e==null)return{};var n={},a=Object.keys(e),o,s;for(s=0;s<a.length;s++)o=a[s],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function st(){return st=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},st.apply(this,arguments)}function Vt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,a)}return n}function lt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Vt(Object(n),!0).forEach(function(a){Ba(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Vt(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function Ba(e,t,n){return t=_a(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _a(e){var t=Ha(e,"string");return typeof t=="symbol"?t:String(t)}function Ha(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Cn(e){return e&&e.map((t,n)=>Ee.createElement(t.tag,lt({key:n},t.attr),Cn(t.child)))}function Sn(e){return t=>Ee.createElement(Xa,st({attr:lt({},e.attr)},t),Cn(e.child))}function Xa(e){var t=n=>{var{attr:a,size:o,title:s}=e,d=Fa(e,Ra),f=o||n.size||"1em",u;return n.className&&(u=n.className),e.className&&(u=(u?u+" ":"")+e.className),Ee.createElement("svg",st({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,a,d,{className:u,style:lt(lt({color:e.color||n.color},n.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),s&&Ee.createElement("title",null,s),e.children)};return Xt!==void 0?Ee.createElement(Xt.Consumer,null,n=>t(n)):t(Nn)}function Va(e){return Sn({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"},child:[]}]})(e)}const qa="/goit-group2-react-nodejs/assets/glass-00cf2fb8.svg",Ua="/goit-group2-react-nodejs/assets/edit-7f0c7b6a.svg",Ya="/goit-group2-react-nodejs/assets/delete-6bf30e40.svg";var Nt={exports:{}},ze={},Mn={exports:{}},$a="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Ga=$a,Qa=Ga;function On(){}function En(){}En.resetWarningCache=On;var Ka=function(){function e(a,o,s,d,f,u){if(u!==Qa){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:En,resetWarningCache:On};return n.PropTypes=n,n};Mn.exports=Ka();var Wt=Mn.exports;const it=Et(Wt);var Ct={exports:{}},he={},St={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=b;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var n="none",a="contents",o=/input|select|textarea|button|object|iframe/;function s(g,N){return N.getPropertyValue("overflow")!=="visible"||g.scrollWidth<=0&&g.scrollHeight<=0}function d(g){var N=g.offsetWidth<=0&&g.offsetHeight<=0;if(N&&!g.innerHTML)return!0;try{var w=window.getComputedStyle(g),I=w.getPropertyValue("display");return N?I!==a&&s(g,w):I===n}catch{return console.warn("Failed to inspect element style"),!1}}function f(g){for(var N=g,w=g.getRootNode&&g.getRootNode();N&&N!==document.body;){if(w&&N===w&&(N=w.host.parentNode),d(N))return!1;N=N.parentNode}return!0}function u(g,N){var w=g.nodeName.toLowerCase(),I=o.test(w)&&!g.disabled||w==="a"&&g.href||N;return I&&f(g)}function m(g){var N=g.getAttribute("tabindex");N===null&&(N=void 0);var w=isNaN(N);return(w||N>=0)&&u(g,!w)}function b(g){var N=[].slice.call(g.querySelectorAll("*"),0).reduce(function(w,I){return w.concat(I.shadowRoot?b(I.shadowRoot):[I])},[]);return N.filter(m)}e.exports=t.default})(St,St.exports);var Wn=St.exports;Object.defineProperty(he,"__esModule",{value:!0});he.resetState=to;he.log=no;he.handleBlur=Ke;he.handleFocus=Je;he.markForFocusLater=ao;he.returnFocus=oo;he.popWithoutFocus=io;he.setupScopedFocus=ro;he.teardownScopedFocus=so;var Ja=Wn,Za=eo(Ja);function eo(e){return e&&e.__esModule?e:{default:e}}var Ie=[],Fe=null,Mt=!1;function to(){Ie=[]}function no(){}function Ke(){Mt=!0}function Je(){if(Mt){if(Mt=!1,!Fe)return;setTimeout(function(){if(!Fe.contains(document.activeElement)){var e=(0,Za.default)(Fe)[0]||Fe;e.focus()}},0)}}function ao(){Ie.push(document.activeElement)}function oo(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=null;try{Ie.length!==0&&(t=Ie.pop(),t.focus({preventScroll:e}));return}catch{console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}}function io(){Ie.length>0&&Ie.pop()}function ro(e){Fe=e,window.addEventListener?(window.addEventListener("blur",Ke,!1),document.addEventListener("focus",Je,!0)):(window.attachEvent("onBlur",Ke),document.attachEvent("onFocus",Je))}function so(){Fe=null,window.addEventListener?(window.removeEventListener("blur",Ke),document.removeEventListener("focus",Je)):(window.detachEvent("onBlur",Ke),document.detachEvent("onFocus",Je))}var Ot={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=d;var n=Wn,a=o(n);function o(f){return f&&f.__esModule?f:{default:f}}function s(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return f.activeElement.shadowRoot?s(f.activeElement.shadowRoot):f.activeElement}function d(f,u){var m=(0,a.default)(f);if(!m.length){u.preventDefault();return}var b=void 0,g=u.shiftKey,N=m[0],w=m[m.length-1],I=s();if(f===I){if(!g)return;b=w}if(w===I&&!g&&(b=N),N===I&&g&&(b=w),b){u.preventDefault(),b.focus();return}var T=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),Q=T!=null&&T[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(Q){var j=m.indexOf(I);if(j>-1&&(j+=g?-1:1),b=m[j],typeof b>"u"){u.preventDefault(),b=g?w:N,b.focus();return}u.preventDefault(),b.focus()}}e.exports=t.default})(Ot,Ot.exports);var lo=Ot.exports,ge={},co=function(){},fo=co,xe={},Tn={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(e){(function(){var t=!!(typeof window<"u"&&window.document&&window.document.createElement),n={canUseDOM:t,canUseWorkers:typeof Worker<"u",canUseEventListeners:t&&!!(window.addEventListener||window.attachEvent),canUseViewport:t&&!!window.screen};e.exports?e.exports=n:window.ExecutionEnvironment=n})()})(Tn);var po=Tn.exports;Object.defineProperty(xe,"__esModule",{value:!0});xe.canUseDOM=xe.SafeNodeList=xe.SafeHTMLCollection=void 0;var uo=po,mo=xo(uo);function xo(e){return e&&e.__esModule?e:{default:e}}var ut=mo.default,ho=ut.canUseDOM?window.HTMLElement:{};xe.SafeHTMLCollection=ut.canUseDOM?window.HTMLCollection:{};xe.SafeNodeList=ut.canUseDOM?window.NodeList:{};xe.canUseDOM=ut.canUseDOM;xe.default=ho;Object.defineProperty(ge,"__esModule",{value:!0});ge.resetState=vo;ge.log=ko;ge.assertNodeList=zn;ge.setElement=Ao;ge.validateElement=Tt;ge.hide=No;ge.show=Co;ge.documentNotReadyOrSSRTesting=So;var go=fo,bo=wo(go),yo=xe;function wo(e){return e&&e.__esModule?e:{default:e}}var fe=null;function vo(){fe&&(fe.removeAttribute?fe.removeAttribute("aria-hidden"):fe.length!=null?fe.forEach(function(e){return e.removeAttribute("aria-hidden")}):document.querySelectorAll(fe).forEach(function(e){return e.removeAttribute("aria-hidden")})),fe=null}function ko(){}function zn(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function Ao(e){var t=e;if(typeof t=="string"&&yo.canUseDOM){var n=document.querySelectorAll(t);zn(n,t),t=n}return fe=t||fe,fe}function Tt(e){var t=e||fe;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,bo.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function No(e){var t=!0,n=!1,a=void 0;try{for(var o=Tt(e)[Symbol.iterator](),s;!(t=(s=o.next()).done);t=!0){var d=s.value;d.setAttribute("aria-hidden","true")}}catch(f){n=!0,a=f}finally{try{!t&&o.return&&o.return()}finally{if(n)throw a}}}function Co(e){var t=!0,n=!1,a=void 0;try{for(var o=Tt(e)[Symbol.iterator](),s;!(t=(s=o.next()).done);t=!0){var d=s.value;d.removeAttribute("aria-hidden")}}catch(f){n=!0,a=f}finally{try{!t&&o.return&&o.return()}finally{if(n)throw a}}}function So(){fe=null}var _e={};Object.defineProperty(_e,"__esModule",{value:!0});_e.resetState=Mo;_e.log=Oo;var Ge={},Qe={};function qt(e,t){e.classList.remove(t)}function Mo(){var e=document.getElementsByTagName("html")[0];for(var t in Ge)qt(e,Ge[t]);var n=document.body;for(var a in Qe)qt(n,Qe[a]);Ge={},Qe={}}function Oo(){}var Eo=function(t,n){return t[n]||(t[n]=0),t[n]+=1,n},Wo=function(t,n){return t[n]&&(t[n]-=1),n},To=function(t,n,a){a.forEach(function(o){Eo(n,o),t.add(o)})},zo=function(t,n,a){a.forEach(function(o){Wo(n,o),n[o]===0&&t.remove(o)})};_e.add=function(t,n){return To(t.classList,t.nodeName.toLowerCase()=="html"?Ge:Qe,n.split(" "))};_e.remove=function(t,n){return zo(t.classList,t.nodeName.toLowerCase()=="html"?Ge:Qe,n.split(" "))};var He={};Object.defineProperty(He,"__esModule",{value:!0});He.log=Do;He.resetState=Lo;function jo(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var jn=function e(){var t=this;jo(this,e),this.register=function(n){t.openInstances.indexOf(n)===-1&&(t.openInstances.push(n),t.emit("register"))},this.deregister=function(n){var a=t.openInstances.indexOf(n);a!==-1&&(t.openInstances.splice(a,1),t.emit("deregister"))},this.subscribe=function(n){t.subscribers.push(n)},this.emit=function(n){t.subscribers.forEach(function(a){return a(n,t.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},ct=new jn;function Do(){console.log("portalOpenInstances ----------"),console.log(ct.openInstances.length),ct.openInstances.forEach(function(e){return console.log(e)}),console.log("end portalOpenInstances ----------")}function Lo(){ct=new jn}He.default=ct;var zt={};Object.defineProperty(zt,"__esModule",{value:!0});zt.resetState=Io;zt.log=Bo;var Po=He,Ro=Fo(Po);function Fo(e){return e&&e.__esModule?e:{default:e}}var ae=void 0,me=void 0,We=[];function Io(){for(var e=[ae,me],t=0;t<e.length;t++){var n=e[t];n&&n.parentNode&&n.parentNode.removeChild(n)}ae=me=null,We=[]}function Bo(){console.log("bodyTrap ----------"),console.log(We.length);for(var e=[ae,me],t=0;t<e.length;t++){var n=e[t],a=n||{};console.log(a.nodeName,a.className,a.id)}console.log("edn bodyTrap ----------")}function Ut(){We.length!==0&&We[We.length-1].focusContent()}function _o(e,t){!ae&&!me&&(ae=document.createElement("div"),ae.setAttribute("data-react-modal-body-trap",""),ae.style.position="absolute",ae.style.opacity="0",ae.setAttribute("tabindex","0"),ae.addEventListener("focus",Ut),me=ae.cloneNode(),me.addEventListener("focus",Ut)),We=t,We.length>0?(document.body.firstChild!==ae&&document.body.insertBefore(ae,document.body.firstChild),document.body.lastChild!==me&&document.body.appendChild(me)):(ae.parentElement&&ae.parentElement.removeChild(ae),me.parentElement&&me.parentElement.removeChild(me))}Ro.default.subscribe(_o);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(O){for(var S=1;S<arguments.length;S++){var q=arguments[S];for(var p in q)Object.prototype.hasOwnProperty.call(q,p)&&(O[p]=q[p])}return O},a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(O){return typeof O}:function(O){return O&&typeof Symbol=="function"&&O.constructor===Symbol&&O!==Symbol.prototype?"symbol":typeof O},o=function(){function O(S,q){for(var p=0;p<q.length;p++){var A=q[p];A.enumerable=A.enumerable||!1,A.configurable=!0,"value"in A&&(A.writable=!0),Object.defineProperty(S,A.key,A)}}return function(S,q,p){return q&&O(S.prototype,q),p&&O(S,p),S}}(),s=R,d=Wt,f=ee(d),u=he,m=oe(u),b=lo,g=ee(b),N=ge,w=oe(N),I=_e,T=oe(I),Q=xe,j=ee(Q),B=He,D=ee(B);function oe(O){if(O&&O.__esModule)return O;var S={};if(O!=null)for(var q in O)Object.prototype.hasOwnProperty.call(O,q)&&(S[q]=O[q]);return S.default=O,S}function ee(O){return O&&O.__esModule?O:{default:O}}function V(O,S){if(!(O instanceof S))throw new TypeError("Cannot call a class as a function")}function v(O,S){if(!O)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return S&&(typeof S=="object"||typeof S=="function")?S:O}function _(O,S){if(typeof S!="function"&&S!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof S);O.prototype=Object.create(S&&S.prototype,{constructor:{value:O,enumerable:!1,writable:!0,configurable:!0}}),S&&(Object.setPrototypeOf?Object.setPrototypeOf(O,S):O.__proto__=S)}var le={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},Xe=function(S){return S.code==="Tab"||S.keyCode===9},xt=function(S){return S.code==="Escape"||S.keyCode===27},De=0,Le=function(O){_(S,O);function S(q){V(this,S);var p=v(this,(S.__proto__||Object.getPrototypeOf(S)).call(this,q));return p.setOverlayRef=function(A){p.overlay=A,p.props.overlayRef&&p.props.overlayRef(A)},p.setContentRef=function(A){p.content=A,p.props.contentRef&&p.props.contentRef(A)},p.afterClose=function(){var A=p.props,Z=A.appElement,te=A.ariaHideApp,U=A.htmlOpenClassName,ce=A.bodyOpenClassName,ye=A.parentSelector,we=ye&&ye().ownerDocument||document;ce&&T.remove(we.body,ce),U&&T.remove(we.getElementsByTagName("html")[0],U),te&&De>0&&(De-=1,De===0&&w.show(Z)),p.props.shouldFocusAfterRender&&(p.props.shouldReturnFocusAfterClose?(m.returnFocus(p.props.preventScroll),m.teardownScopedFocus()):m.popWithoutFocus()),p.props.onAfterClose&&p.props.onAfterClose(),D.default.deregister(p)},p.open=function(){p.beforeOpen(),p.state.afterOpen&&p.state.beforeClose?(clearTimeout(p.closeTimer),p.setState({beforeClose:!1})):(p.props.shouldFocusAfterRender&&(m.setupScopedFocus(p.node),m.markForFocusLater()),p.setState({isOpen:!0},function(){p.openAnimationFrame=requestAnimationFrame(function(){p.setState({afterOpen:!0}),p.props.isOpen&&p.props.onAfterOpen&&p.props.onAfterOpen({overlayEl:p.overlay,contentEl:p.content})})}))},p.close=function(){p.props.closeTimeoutMS>0?p.closeWithTimeout():p.closeWithoutTimeout()},p.focusContent=function(){return p.content&&!p.contentHasFocus()&&p.content.focus({preventScroll:!0})},p.closeWithTimeout=function(){var A=Date.now()+p.props.closeTimeoutMS;p.setState({beforeClose:!0,closesAt:A},function(){p.closeTimer=setTimeout(p.closeWithoutTimeout,p.state.closesAt-Date.now())})},p.closeWithoutTimeout=function(){p.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},p.afterClose)},p.handleKeyDown=function(A){Xe(A)&&(0,g.default)(p.content,A),p.props.shouldCloseOnEsc&&xt(A)&&(A.stopPropagation(),p.requestClose(A))},p.handleOverlayOnClick=function(A){p.shouldClose===null&&(p.shouldClose=!0),p.shouldClose&&p.props.shouldCloseOnOverlayClick&&(p.ownerHandlesClose()?p.requestClose(A):p.focusContent()),p.shouldClose=null},p.handleContentOnMouseUp=function(){p.shouldClose=!1},p.handleOverlayOnMouseDown=function(A){!p.props.shouldCloseOnOverlayClick&&A.target==p.overlay&&A.preventDefault()},p.handleContentOnClick=function(){p.shouldClose=!1},p.handleContentOnMouseDown=function(){p.shouldClose=!1},p.requestClose=function(A){return p.ownerHandlesClose()&&p.props.onRequestClose(A)},p.ownerHandlesClose=function(){return p.props.onRequestClose},p.shouldBeClosed=function(){return!p.state.isOpen&&!p.state.beforeClose},p.contentHasFocus=function(){return document.activeElement===p.content||p.content.contains(document.activeElement)},p.buildClassName=function(A,Z){var te=(typeof Z>"u"?"undefined":a(Z))==="object"?Z:{base:le[A],afterOpen:le[A]+"--after-open",beforeClose:le[A]+"--before-close"},U=te.base;return p.state.afterOpen&&(U=U+" "+te.afterOpen),p.state.beforeClose&&(U=U+" "+te.beforeClose),typeof Z=="string"&&Z?U+" "+Z:U},p.attributesFromObject=function(A,Z){return Object.keys(Z).reduce(function(te,U){return te[A+"-"+U]=Z[U],te},{})},p.state={afterOpen:!1,beforeClose:!1},p.shouldClose=null,p.moveFromContentToOverlay=null,p}return o(S,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(p,A){this.props.isOpen&&!p.isOpen?this.open():!this.props.isOpen&&p.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!A.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var p=this.props,A=p.appElement,Z=p.ariaHideApp,te=p.htmlOpenClassName,U=p.bodyOpenClassName,ce=p.parentSelector,ye=ce&&ce().ownerDocument||document;U&&T.add(ye.body,U),te&&T.add(ye.getElementsByTagName("html")[0],te),Z&&(De+=1,w.hide(A)),D.default.register(this)}},{key:"render",value:function(){var p=this.props,A=p.id,Z=p.className,te=p.overlayClassName,U=p.defaultStyles,ce=p.children,ye=Z?{}:U.content,we=te?{}:U.overlay;if(this.shouldBeClosed())return null;var ht={ref:this.setOverlayRef,className:this.buildClassName("overlay",te),style:n({},we,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},Ve=n({id:A,ref:this.setContentRef,style:n({},ye,this.props.style.content),className:this.buildClassName("content",Z),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",n({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),gt=this.props.contentElement(Ve,ce);return this.props.overlayElement(ht,gt)}}]),S}(s.Component);Le.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},Le.propTypes={isOpen:f.default.bool.isRequired,defaultStyles:f.default.shape({content:f.default.object,overlay:f.default.object}),style:f.default.shape({content:f.default.object,overlay:f.default.object}),className:f.default.oneOfType([f.default.string,f.default.object]),overlayClassName:f.default.oneOfType([f.default.string,f.default.object]),parentSelector:f.default.func,bodyOpenClassName:f.default.string,htmlOpenClassName:f.default.string,ariaHideApp:f.default.bool,appElement:f.default.oneOfType([f.default.instanceOf(j.default),f.default.instanceOf(Q.SafeHTMLCollection),f.default.instanceOf(Q.SafeNodeList),f.default.arrayOf(f.default.instanceOf(j.default))]),onAfterOpen:f.default.func,onAfterClose:f.default.func,onRequestClose:f.default.func,closeTimeoutMS:f.default.number,shouldFocusAfterRender:f.default.bool,shouldCloseOnOverlayClick:f.default.bool,shouldReturnFocusAfterClose:f.default.bool,preventScroll:f.default.bool,role:f.default.string,contentLabel:f.default.string,aria:f.default.object,data:f.default.object,children:f.default.node,shouldCloseOnEsc:f.default.bool,overlayRef:f.default.func,contentRef:f.default.func,id:f.default.string,overlayElement:f.default.func,contentElement:f.default.func,testId:f.default.string},t.default=Le,e.exports=t.default})(Ct,Ct.exports);var Ho=Ct.exports;function Dn(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);e!=null&&this.setState(e)}function Ln(e){function t(n){var a=this.constructor.getDerivedStateFromProps(e,n);return a??null}this.setState(t.bind(this))}function Pn(e,t){try{var n=this.props,a=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,a)}finally{this.props=n,this.state=a}}Dn.__suppressDeprecationWarning=!0;Ln.__suppressDeprecationWarning=!0;Pn.__suppressDeprecationWarning=!0;function Xo(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if(typeof e.getDerivedStateFromProps!="function"&&typeof t.getSnapshotBeforeUpdate!="function")return e;var n=null,a=null,o=null;if(typeof t.componentWillMount=="function"?n="componentWillMount":typeof t.UNSAFE_componentWillMount=="function"&&(n="UNSAFE_componentWillMount"),typeof t.componentWillReceiveProps=="function"?a="componentWillReceiveProps":typeof t.UNSAFE_componentWillReceiveProps=="function"&&(a="UNSAFE_componentWillReceiveProps"),typeof t.componentWillUpdate=="function"?o="componentWillUpdate":typeof t.UNSAFE_componentWillUpdate=="function"&&(o="UNSAFE_componentWillUpdate"),n!==null||a!==null||o!==null){var s=e.displayName||e.name,d=typeof e.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+s+" uses "+d+" but also contains the following legacy lifecycles:"+(n!==null?`
  `+n:"")+(a!==null?`
  `+a:"")+(o!==null?`
  `+o:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof e.getDerivedStateFromProps=="function"&&(t.componentWillMount=Dn,t.componentWillReceiveProps=Ln),typeof t.getSnapshotBeforeUpdate=="function"){if(typeof t.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=Pn;var f=t.componentDidUpdate;t.componentDidUpdate=function(m,b,g){var N=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:g;f.call(this,m,b,N)}}return e}const Vo=Object.freeze(Object.defineProperty({__proto__:null,polyfill:Xo},Symbol.toStringTag,{value:"Module"})),qo=ia(Vo);Object.defineProperty(ze,"__esModule",{value:!0});ze.bodyOpenClassName=ze.portalClassName=void 0;var Yt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Uo=function(){function e(t,n){for(var a=0;a<n.length;a++){var o=n[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),Rn=R,dt=et(Rn),Yo=yn,ft=et(Yo),$o=Wt,M=et($o),Go=Ho,$t=et(Go),Qo=ge,Ko=Zo(Qo),Ce=xe,Gt=et(Ce),Jo=qo;function Zo(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function et(e){return e&&e.__esModule?e:{default:e}}function ei(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Qt(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function ti(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var ni=ze.portalClassName="ReactModalPortal",ai=ze.bodyOpenClassName="ReactModal__Body--open",Me=Ce.canUseDOM&&ft.default.createPortal!==void 0,Kt=function(t){return document.createElement(t)},Jt=function(){return Me?ft.default.createPortal:ft.default.unstable_renderSubtreeIntoContainer};function rt(e){return e()}var tt=function(e){ti(t,e);function t(){var n,a,o,s;ei(this,t);for(var d=arguments.length,f=Array(d),u=0;u<d;u++)f[u]=arguments[u];return s=(a=(o=Qt(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(f))),o),o.removePortal=function(){!Me&&ft.default.unmountComponentAtNode(o.node);var m=rt(o.props.parentSelector);m&&m.contains(o.node)?m.removeChild(o.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},o.portalRef=function(m){o.portal=m},o.renderPortal=function(m){var b=Jt(),g=b(o,dt.default.createElement($t.default,Yt({defaultStyles:t.defaultStyles},m)),o.node);o.portalRef(g)},a),Qt(o,s)}return Uo(t,[{key:"componentDidMount",value:function(){if(Ce.canUseDOM){Me||(this.node=Kt("div")),this.node.className=this.props.portalClassName;var a=rt(this.props.parentSelector);a.appendChild(this.node),!Me&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(a){var o=rt(a.parentSelector),s=rt(this.props.parentSelector);return{prevParent:o,nextParent:s}}},{key:"componentDidUpdate",value:function(a,o,s){if(Ce.canUseDOM){var d=this.props,f=d.isOpen,u=d.portalClassName;a.portalClassName!==u&&(this.node.className=u);var m=s.prevParent,b=s.nextParent;b!==m&&(m.removeChild(this.node),b.appendChild(this.node)),!(!a.isOpen&&!f)&&!Me&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!Ce.canUseDOM||!this.node||!this.portal)){var a=this.portal.state,o=Date.now(),s=a.isOpen&&this.props.closeTimeoutMS&&(a.closesAt||o+this.props.closeTimeoutMS);s?(a.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,s-o)):this.removePortal()}}},{key:"render",value:function(){if(!Ce.canUseDOM||!Me)return null;!this.node&&Me&&(this.node=Kt("div"));var a=Jt();return a(dt.default.createElement($t.default,Yt({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(a){Ko.setElement(a)}}]),t}(Rn.Component);tt.propTypes={isOpen:M.default.bool.isRequired,style:M.default.shape({content:M.default.object,overlay:M.default.object}),portalClassName:M.default.string,bodyOpenClassName:M.default.string,htmlOpenClassName:M.default.string,className:M.default.oneOfType([M.default.string,M.default.shape({base:M.default.string.isRequired,afterOpen:M.default.string.isRequired,beforeClose:M.default.string.isRequired})]),overlayClassName:M.default.oneOfType([M.default.string,M.default.shape({base:M.default.string.isRequired,afterOpen:M.default.string.isRequired,beforeClose:M.default.string.isRequired})]),appElement:M.default.oneOfType([M.default.instanceOf(Gt.default),M.default.instanceOf(Ce.SafeHTMLCollection),M.default.instanceOf(Ce.SafeNodeList),M.default.arrayOf(M.default.instanceOf(Gt.default))]),onAfterOpen:M.default.func,onRequestClose:M.default.func,closeTimeoutMS:M.default.number,ariaHideApp:M.default.bool,shouldFocusAfterRender:M.default.bool,shouldCloseOnOverlayClick:M.default.bool,shouldReturnFocusAfterClose:M.default.bool,preventScroll:M.default.bool,parentSelector:M.default.func,aria:M.default.object,data:M.default.object,role:M.default.string,contentLabel:M.default.string,shouldCloseOnEsc:M.default.bool,overlayRef:M.default.func,contentRef:M.default.func,id:M.default.string,overlayElement:M.default.func,contentElement:M.default.func};tt.defaultProps={isOpen:!1,portalClassName:ni,bodyOpenClassName:ai,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(t,n){return dt.default.createElement("div",t,n)},contentElement:function(t,n){return dt.default.createElement("div",t,n)}};tt.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,Jo.polyfill)(tt);ze.default=tt;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=ze,a=o(n);function o(s){return s&&s.__esModule?s:{default:s}}t.default=a.default,e.exports=t.default})(Nt,Nt.exports);var oi=Nt.exports;const Fn=Et(oi),ke="/goit-group2-react-nodejs/assets/horodiukIcons-b8c45607.svg",Zt=x.select`
  margin-bottom: 24px;
  border: 1px solid #d7e3ff;
  border-radius: 6px;
  padding: 12px 10px;
  width: 90px;
  height: 44px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`,ii=x.div``,en=x.div`
  position: relative;
  display: inline-block;
`,tn=x.svg`
  position: absolute;
  top: 10px;
  right: 6px;
  pointer-events: none;
`;function In({onChange:e,value:t}){const n=Array.from(new Array(24),(u,m)=>m),a=[0,5,10,15,20,25,30,35,40,45,50,55],o=new Date(t);let s=o.getHours(),d=o.getMinutes();const f=a.reduce((u,m)=>m>=d&&(u===null||Math.abs(m-d)<Math.abs(u-d))?m:u,null);return f===null?(s=(s+1)%24,d=0):d=f,r.jsxs(ii,{id:"selectTimeWrapper",children:[r.jsxs(en,{children:[r.jsx(Zt,{onChange:u=>e(u,"hour"),value:s,children:n.map(u=>r.jsx("option",{value:u,children:u.toString().padStart(2,"0")},u))}),r.jsx(tn,{width:"24",height:"24",children:r.jsx("use",{href:`${ke}#icon-arrow`})})]}),":",r.jsxs(en,{children:[r.jsx(Zt,{onChange:u=>e(u,"minute"),value:d,children:a.map(u=>r.jsx("option",{value:u,children:u.toString().padStart(2,"0")},u))}),r.jsx(tn,{width:"24",height:"24",children:r.jsx("use",{href:`${ke}#icon-arrow`})})]})]})}const ri=x.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  overflow: scroll;
`,si=x.div`
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
`,li=x.button`
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
`,ci=x.h2`
  font-weight: 500;
  font-size: 26px;
  line-height: 123%;
  color: #2f2f2f;
  margin-bottom: 24px;
`,nn=x.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  color: #2f2f2f;
  margin-bottom: 16px;
`,an=x.p`
  font-size: 16px;
  line-height: 125%;
  color: #2f2f2f;
  margin-bottom: 12px;
`,on=x.button`
  box-shadow: 0 2px 4px 0 rgba(64, 123, 255, 0.2);
  background-color: #fff;
  border: 1px solid #9ebbff;
  border-radius: 30px;
  padding: 0px;
  width: 44px;
  height: 44px;
  cursor: pointer;
`,rn=x.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 133%;
  color: #407bff;
  text-align: center;
`,di=x.input`
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
`,fi=x.input`
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
`,pi=x.button`
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
`,ui=x.div`
  background-color: #d7e3ff;
  border-radius: 40px;
  padding: 6px 10px;
  height: 36px;
`,mi=x.div`
  display: flex;
  width: 194px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`,xi=x.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
  }
`;Fn.setAppElement("#root");function Bn({isOpen:e,onClose:t,onAddWater:n}){const[a,o]=R.useState(0),[s,d]=R.useState(!1),[f,u]=R.useState(0),m=Be(),[b,g]=R.useState(new Date),N=(V,v="")=>{let _=new Date(b);switch(v){case"hour":_.setHours(parseInt(V.target.value,10));break;case"minute":_.setMinutes(Math.ceil(parseInt(V.target.value,10)/5)*5);break}g(_)},w=()=>{m(ra({amount:a,date:Date(b)}))},I=()=>{t()},T=()=>{o(a+50),u(a+50)},Q=()=>{if(a-50<0){o(0),u(0);return}o(a-50),u(a-50)},j=()=>{o(f)},B=V=>{const v=parseInt(V.target.value>0?V.target.value:0,10);u(v)},D=V=>{V.target.closest("#selectTimeWrapper")||(d(!1),V.target===V.currentTarget&&I())},oe=V=>{V.key==="Escape"&&I()};R.useEffect(()=>(window.addEventListener("keydown",oe),()=>{window.removeEventListener("keydown",oe)}),[]);const ee=V=>{const v=new Date(V),_=le=>le.toString().padStart(2,"0");return`${_(v.getHours())}:${_(v.getMinutes())}`};return wn.createPortal(r.jsx(ri,{onClick:D,children:r.jsxs(si,{children:[r.jsx(li,{onClick:I,children:r.jsx("svg",{width:"24",height:"24",children:r.jsx("use",{href:`${ke}#icon-close`})})}),r.jsx(ci,{children:"Add water"}),r.jsx(nn,{children:"Choose a value:"}),r.jsx(an,{children:"Amount of water:"}),r.jsxs(mi,{children:[r.jsx(on,{onClick:Q,children:r.jsx("svg",{width:"44",height:"44",children:r.jsx("use",{href:`${ke}#icon-minus`})})}),r.jsx(ui,{children:r.jsxs(rn,{children:[a,"ml"]})}),r.jsx(on,{onClick:T,children:r.jsx("svg",{width:"44",height:"44",children:r.jsx("use",{href:`${ke}#icon-plus`})})})]}),r.jsx(an,{children:"Recording time:"}),s?r.jsx(In,{onChange:N,value:b}):r.jsx(di,{type:"text","aria-label":"Choose time",value:ee(b),onChange:()=>{},onFocus:()=>d(!0)}),r.jsx(nn,{children:"Enter the value of the water used:"}),r.jsx(fi,{value:f,onBlur:j,onChange:B,type:"number"}),r.jsxs(xi,{children:[r.jsxs(rn,{children:[a,"ml"]}),r.jsx(pi,{onClick:w,type:"button",children:"Save"})]})]})}),document.getElementById("modal-root"))}const hi=x.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  overflow: scroll;
`,gi=x.div`
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
`,bi=x.button`
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
`,yi=x.h2`
  font-weight: 500;
  font-size: 26px;
  line-height: 123%;
  color: #2f2f2f;
  margin-bottom: 24px;
`,sn=x.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  color: #2f2f2f;
  margin-bottom: 16px;
`,ln=x.p`
  font-size: 16px;
  line-height: 125%;
  color: #2f2f2f;
  margin-bottom: 12px;
`,cn=x.button`
  box-shadow: 0 2px 4px 0 rgba(64, 123, 255, 0.2);
  background-color: #fff;
  border: 1px solid #9ebbff;
  border-radius: 30px;
  padding: 0px;
  width: 44px;
  height: 44px;
  cursor: pointer;
`,dn=x.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 133%;
  color: #407bff;
  text-align: center;
`,wi=x.input`
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
`,vi=x.input`
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
`,ki=x.button`
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
`,Ai=x.div`
  background-color: #d7e3ff;
  border-radius: 40px;
  padding: 6px 10px;
  height: 36px;
`,Ni=x.div`
  display: flex;
  width: 194px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`,Ci=x.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
  }
`,Si=x.div`
  display: flex;
  gap: 14px;
  align-items: center;
  margin-bottom: 24px;
  border-radius: 10px;
  padding: 8px 24px;
  width: 256px;
  background-color: #ecf2ff;
`,Mi=x.p`
  font-size: 18px;
  line-height: 133%;
  color: #407bff;
`,Oi=x.p`
  font-size: 16px;
  line-height: 125%;
  color: #2f2f2f;
`;Fn.setAppElement("#root");function Ei({isOpen:e,onClose:t,onAddWater:n}){const a=Te(ba)||{amount:250,date:new Date},[o,s]=R.useState(a.amount),[d,f]=R.useState(!1),[u,m]=R.useState(0),b=Be(),[g,N]=R.useState(a.date),w=(v,_="")=>{let le=new Date(g);switch(_){case"hour":le.setHours(parseInt(v.target.value,10));break;case"minute":le.setMinutes(Math.ceil(parseInt(v.target.value,10)/5)*5);break}N(le)},I=()=>{b(sa({amount:o,date:Date(g)}))},T=()=>{t()},Q=()=>{s(o+50),m(o+50)},j=()=>{if(o-50<0){s(0),m(0);return}s(o-50),m(o-50)},B=()=>{s(u)},D=v=>{const _=parseInt(v.target.value>0?v.target.value:0,10);m(_)},oe=v=>{v.target.closest("#selectTimeWrapper")||(f(!1),v.target===v.currentTarget&&T())},ee=v=>{v.key==="Escape"&&T()};R.useEffect(()=>(window.addEventListener("keydown",ee),()=>{window.removeEventListener("keydown",ee)}),[]);const V=v=>{const _=new Date(v),le=Xe=>Xe.toString().padStart(2,"0");return`${le(_.getHours())}:${le(_.getMinutes())}`};return wn.createPortal(r.jsx(hi,{onClick:oe,children:r.jsxs(gi,{children:[r.jsx(bi,{onClick:T,children:r.jsx("svg",{width:"24",height:"24",children:r.jsx("use",{href:`${ke}#icon-close`})})}),r.jsx(yi,{children:"Edit the entered amount of water"}),r.jsxs(Si,{children:[" ",r.jsx("svg",{width:"36",height:"36",children:r.jsx("use",{href:`${ke}#icon-glass`})}),r.jsxs(Mi,{children:[a.amount,"ml"]}),r.jsx(Oi,{children:V(a.time)})]}),r.jsx(sn,{children:"Correct entered data:"}),r.jsx(ln,{children:"Amount of water:"}),r.jsxs(Ni,{children:[r.jsx(cn,{onClick:j,children:r.jsx("svg",{width:"44",height:"44",children:r.jsx("use",{href:`${ke}#icon-minus`})})}),r.jsx(Ai,{children:r.jsxs(dn,{children:[o,"ml"]})}),r.jsx(cn,{onClick:Q,children:r.jsx("svg",{width:"44",height:"44",children:r.jsx("use",{href:`${ke}#icon-plus`})})})]}),r.jsx(ln,{children:"Recording time:"}),d?r.jsx(In,{onChange:w,value:g}):r.jsx(wi,{type:"text","aria-label":"Choose time",value:V(g),onChange:()=>{},onFocus:()=>f(!0)}),r.jsx(sn,{children:"Enter the value of the water used:"}),r.jsx(vi,{value:u,onBlur:B,onChange:D,type:"number"}),r.jsxs(Ci,{children:[r.jsxs(dn,{children:[o,"ml"]}),r.jsx(ki,{onClick:I,type:"button",children:"Save"})]})]})}),document.getElementById("modal-root"))}const Wi=x.div`
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
`,Ti=x.div`
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
`,zi=x.div`
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
`,ji=x.button`
  width: 24px;
  height: 24px;
  background-color: transparent;
  padding: 0;
`,Di=x.svg`
  width: 100%;
  height: 100%;
  stroke: ${({theme:e})=>e.color.primaryAccent};

  &:hover,
  &:focus {
    stroke: ${({theme:e})=>e.color.secondaryYellow};
  }
`,_n=({onShow:e,children:t,title:n,onClose:a})=>{const o=document.querySelector("#modal-root");if(R.useEffect(()=>{const d=f=>{f.code==="Escape"&&a()};return e&&(document.body.style.overflow="hidden",window.addEventListener("keydown",d)),()=>{document.body.style.overflow="auto",window.removeEventListener("keydown",d)}},[e,a]),!e)return null;const s=r.jsx(Wi,{onClick:a,children:r.jsxs(Ti,{onClick:d=>d.stopPropagation(),children:[r.jsxs(zi,{children:[r.jsx("h2",{children:n}),r.jsx(ji,{onClick:a,children:r.jsx(Di,{children:r.jsx("use",{href:`${At}#icon-Vector`})})})]}),t]})});return yn.createPortal(s,o)};_n.propTypes={onClose:it.func.isRequired,children:it.node.isRequired,onShow:it.bool.isRequired,title:it.string.isRequired};const Li=x.div`
  padding: 0 24px 32px;
`,Pi=x.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    flex-direction: row-reverse;
  }
`,fn=x.button`
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
`,Ri=x.p`
  font-size: 18px;
  color: ${({theme:e})=>e.color.primaryBlack};
  line-height: 20px;
  font-weight: 500;

  margin-bottom: 24px;
`,Fi=({onClose:e,onShow:t,waterId:n})=>{const a=Be(),o=()=>{a(la(n)),e()};return r.jsx(_n,{onClose:e,onShow:t,title:"Delete Entry",children:r.jsxs(Li,{children:[r.jsx(Ri,{children:"Are you sure you want to delete the entry?"}),r.jsxs(Pi,{children:[r.jsx(fn,{onClick:o,children:"Delete"}),r.jsx(fn,{onClick:e,children:"Cancel"})]})]})})},Ii=x.ul`
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
`,Bi=x.li`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: space-between;
`,_i=x.div`
  display: flex;
  align-items: center;
`,Hi=x.p`
  color: #407bff;
  font-size: 18px;
  line-height: 24px;
  margin-left: 12px;
`,Xi=x.p`
  margin-left: 12px;
  line-height: 24px;
  font-size: 12px;
  color: #2f2f2f;

  @media screen and (min-width: 768px) {
    margin-left: 16px;
  }
`,Vi=x.h2`
  margin-bottom: 16px;
  color: #2f2f2f;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 32px;
  }
`,qi=x.button`
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
`,Ui=x.button`
  margin-right: 18px;
  background-color: transparent;
`,Yi=x.button`
  background-color: transparent;
`;function be(e){const t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new e.constructor(+e):typeof e=="number"||t==="[object Number]"||typeof e=="string"||t==="[object String]"?new Date(e):new Date(NaN)}function je(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}const Hn=6048e5,$i=864e5;let Gi={};function mt(){return Gi}function Ze(e,t){var f,u,m,b;const n=mt(),a=(t==null?void 0:t.weekStartsOn)??((u=(f=t==null?void 0:t.locale)==null?void 0:f.options)==null?void 0:u.weekStartsOn)??n.weekStartsOn??((b=(m=n.locale)==null?void 0:m.options)==null?void 0:b.weekStartsOn)??0,o=be(e),s=o.getDay(),d=(s<a?7:0)+s-a;return o.setDate(o.getDate()-d),o.setHours(0,0,0,0),o}function pt(e){return Ze(e,{weekStartsOn:1})}function Xn(e){const t=be(e),n=t.getFullYear(),a=je(e,0);a.setFullYear(n+1,0,4),a.setHours(0,0,0,0);const o=pt(a),s=je(e,0);s.setFullYear(n,0,4),s.setHours(0,0,0,0);const d=pt(s);return t.getTime()>=o.getTime()?n+1:t.getTime()>=d.getTime()?n:n-1}function pn(e){const t=be(e);return t.setHours(0,0,0,0),t}function un(e){const t=be(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function Qi(e,t){const n=pn(e),a=pn(t),o=+n-un(n),s=+a-un(a);return Math.round((o-s)/$i)}function Ki(e){const t=Xn(e),n=je(e,0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),pt(n)}function Ji(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function Zi(e){if(!Ji(e)&&typeof e!="number")return!1;const t=be(e);return!isNaN(Number(t))}function er(e){const t=be(e),n=je(e,0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}const tr={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},nr=(e,t,n)=>{let a;const o=tr[e];return typeof o=="string"?a=o:t===1?a=o.one:a=o.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a};function kt(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const ar={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},or={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},ir={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},rr={date:kt({formats:ar,defaultWidth:"full"}),time:kt({formats:or,defaultWidth:"full"}),dateTime:kt({formats:ir,defaultWidth:"full"})},sr={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},lr=(e,t,n,a)=>sr[e];function Ye(e){return(t,n)=>{const a=n!=null&&n.context?String(n.context):"standalone";let o;if(a==="formatting"&&e.formattingValues){const d=e.defaultFormattingWidth||e.defaultWidth,f=n!=null&&n.width?String(n.width):d;o=e.formattingValues[f]||e.formattingValues[d]}else{const d=e.defaultWidth,f=n!=null&&n.width?String(n.width):e.defaultWidth;o=e.values[f]||e.values[d]}const s=e.argumentCallback?e.argumentCallback(t):t;return o[s]}}const cr={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},dr={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},fr={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},pr={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},ur={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},mr={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},xr=(e,t)=>{const n=Number(e),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},hr={ordinalNumber:xr,era:Ye({values:cr,defaultWidth:"wide"}),quarter:Ye({values:dr,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Ye({values:fr,defaultWidth:"wide"}),day:Ye({values:pr,defaultWidth:"wide"}),dayPeriod:Ye({values:ur,defaultWidth:"wide",formattingValues:mr,defaultFormattingWidth:"wide"})};function $e(e){return(t,n={})=>{const a=n.width,o=a&&e.matchPatterns[a]||e.matchPatterns[e.defaultMatchWidth],s=t.match(o);if(!s)return null;const d=s[0],f=a&&e.parsePatterns[a]||e.parsePatterns[e.defaultParseWidth],u=Array.isArray(f)?br(f,g=>g.test(d)):gr(f,g=>g.test(d));let m;m=e.valueCallback?e.valueCallback(u):u,m=n.valueCallback?n.valueCallback(m):m;const b=t.slice(d.length);return{value:m,rest:b}}}function gr(e,t){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function br(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function yr(e){return(t,n={})=>{const a=t.match(e.matchPattern);if(!a)return null;const o=a[0],s=t.match(e.parsePattern);if(!s)return null;let d=e.valueCallback?e.valueCallback(s[0]):s[0];d=n.valueCallback?n.valueCallback(d):d;const f=t.slice(o.length);return{value:d,rest:f}}}const wr=/^(\d+)(th|st|nd|rd)?/i,vr=/\d+/i,kr={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Ar={any:[/^b/i,/^(a|c)/i]},Nr={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Cr={any:[/1/i,/2/i,/3/i,/4/i]},Sr={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Mr={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Or={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Er={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Wr={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Tr={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},zr={ordinalNumber:yr({matchPattern:wr,parsePattern:vr,valueCallback:e=>parseInt(e,10)}),era:$e({matchPatterns:kr,defaultMatchWidth:"wide",parsePatterns:Ar,defaultParseWidth:"any"}),quarter:$e({matchPatterns:Nr,defaultMatchWidth:"wide",parsePatterns:Cr,defaultParseWidth:"any",valueCallback:e=>e+1}),month:$e({matchPatterns:Sr,defaultMatchWidth:"wide",parsePatterns:Mr,defaultParseWidth:"any"}),day:$e({matchPatterns:Or,defaultMatchWidth:"wide",parsePatterns:Er,defaultParseWidth:"any"}),dayPeriod:$e({matchPatterns:Wr,defaultMatchWidth:"any",parsePatterns:Tr,defaultParseWidth:"any"})},jr={code:"en-US",formatDistance:nr,formatLong:rr,formatRelative:lr,localize:hr,match:zr,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Dr(e){const t=be(e);return Qi(t,er(t))+1}function Lr(e){const t=be(e),n=+pt(t)-+Ki(t);return Math.round(n/Hn)+1}function Vn(e,t){var b,g,N,w;const n=be(e),a=n.getFullYear(),o=mt(),s=(t==null?void 0:t.firstWeekContainsDate)??((g=(b=t==null?void 0:t.locale)==null?void 0:b.options)==null?void 0:g.firstWeekContainsDate)??o.firstWeekContainsDate??((w=(N=o.locale)==null?void 0:N.options)==null?void 0:w.firstWeekContainsDate)??1,d=je(e,0);d.setFullYear(a+1,0,s),d.setHours(0,0,0,0);const f=Ze(d,t),u=je(e,0);u.setFullYear(a,0,s),u.setHours(0,0,0,0);const m=Ze(u,t);return n.getTime()>=f.getTime()?a+1:n.getTime()>=m.getTime()?a:a-1}function Pr(e,t){var f,u,m,b;const n=mt(),a=(t==null?void 0:t.firstWeekContainsDate)??((u=(f=t==null?void 0:t.locale)==null?void 0:f.options)==null?void 0:u.firstWeekContainsDate)??n.firstWeekContainsDate??((b=(m=n.locale)==null?void 0:m.options)==null?void 0:b.firstWeekContainsDate)??1,o=Vn(e,t),s=je(e,0);return s.setFullYear(o,0,a),s.setHours(0,0,0,0),Ze(s,t)}function Rr(e,t){const n=be(e),a=+Ze(n,t)-+Pr(n,t);return Math.round(a/Hn)+1}function H(e,t){const n=e<0?"-":"",a=Math.abs(e).toString().padStart(t,"0");return n+a}const Ne={y(e,t){const n=e.getFullYear(),a=n>0?n:1-n;return H(t==="yy"?a%100:a,t.length)},M(e,t){const n=e.getMonth();return t==="M"?String(n+1):H(n+1,2)},d(e,t){return H(e.getDate(),t.length)},a(e,t){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(e,t){return H(e.getHours()%12||12,t.length)},H(e,t){return H(e.getHours(),t.length)},m(e,t){return H(e.getMinutes(),t.length)},s(e,t){return H(e.getSeconds(),t.length)},S(e,t){const n=t.length,a=e.getMilliseconds(),o=Math.trunc(a*Math.pow(10,n-3));return H(o,t.length)}},Re={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},mn={G:function(e,t,n){const a=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});case"GGGG":default:return n.era(a,{width:"wide"})}},y:function(e,t,n){if(t==="yo"){const a=e.getFullYear(),o=a>0?a:1-a;return n.ordinalNumber(o,{unit:"year"})}return Ne.y(e,t)},Y:function(e,t,n,a){const o=Vn(e,a),s=o>0?o:1-o;if(t==="YY"){const d=s%100;return H(d,2)}return t==="Yo"?n.ordinalNumber(s,{unit:"year"}):H(s,t.length)},R:function(e,t){const n=Xn(e);return H(n,t.length)},u:function(e,t){const n=e.getFullYear();return H(n,t.length)},Q:function(e,t,n){const a=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(a);case"QQ":return H(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(e,t,n){const a=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(a);case"qq":return H(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(e,t,n){const a=e.getMonth();switch(t){case"M":case"MM":return Ne.M(e,t);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(e,t,n){const a=e.getMonth();switch(t){case"L":return String(a+1);case"LL":return H(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(e,t,n,a){const o=Rr(e,a);return t==="wo"?n.ordinalNumber(o,{unit:"week"}):H(o,t.length)},I:function(e,t,n){const a=Lr(e);return t==="Io"?n.ordinalNumber(a,{unit:"week"}):H(a,t.length)},d:function(e,t,n){return t==="do"?n.ordinalNumber(e.getDate(),{unit:"date"}):Ne.d(e,t)},D:function(e,t,n){const a=Dr(e);return t==="Do"?n.ordinalNumber(a,{unit:"dayOfYear"}):H(a,t.length)},E:function(e,t,n){const a=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});case"EEEE":default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(e,t,n,a){const o=e.getDay(),s=(o-a.weekStartsOn+8)%7||7;switch(t){case"e":return String(s);case"ee":return H(s,2);case"eo":return n.ordinalNumber(s,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});case"eeee":default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(e,t,n,a){const o=e.getDay(),s=(o-a.weekStartsOn+8)%7||7;switch(t){case"c":return String(s);case"cc":return H(s,t.length);case"co":return n.ordinalNumber(s,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});case"cccc":default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(e,t,n){const a=e.getDay(),o=a===0?7:a;switch(t){case"i":return String(o);case"ii":return H(o,t.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});case"iiii":default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(e,t,n){const o=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(e,t,n){const a=e.getHours();let o;switch(a===12?o=Re.noon:a===0?o=Re.midnight:o=a/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(e,t,n){const a=e.getHours();let o;switch(a>=17?o=Re.evening:a>=12?o=Re.afternoon:a>=4?o=Re.morning:o=Re.night,t){case"B":case"BB":case"BBB":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(e,t,n){if(t==="ho"){let a=e.getHours()%12;return a===0&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return Ne.h(e,t)},H:function(e,t,n){return t==="Ho"?n.ordinalNumber(e.getHours(),{unit:"hour"}):Ne.H(e,t)},K:function(e,t,n){const a=e.getHours()%12;return t==="Ko"?n.ordinalNumber(a,{unit:"hour"}):H(a,t.length)},k:function(e,t,n){let a=e.getHours();return a===0&&(a=24),t==="ko"?n.ordinalNumber(a,{unit:"hour"}):H(a,t.length)},m:function(e,t,n){return t==="mo"?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):Ne.m(e,t)},s:function(e,t,n){return t==="so"?n.ordinalNumber(e.getSeconds(),{unit:"second"}):Ne.s(e,t)},S:function(e,t){return Ne.S(e,t)},X:function(e,t,n){const a=e.getTimezoneOffset();if(a===0)return"Z";switch(t){case"X":return hn(a);case"XXXX":case"XX":return Oe(a);case"XXXXX":case"XXX":default:return Oe(a,":")}},x:function(e,t,n){const a=e.getTimezoneOffset();switch(t){case"x":return hn(a);case"xxxx":case"xx":return Oe(a);case"xxxxx":case"xxx":default:return Oe(a,":")}},O:function(e,t,n){const a=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+xn(a,":");case"OOOO":default:return"GMT"+Oe(a,":")}},z:function(e,t,n){const a=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+xn(a,":");case"zzzz":default:return"GMT"+Oe(a,":")}},t:function(e,t,n){const a=Math.trunc(e.getTime()/1e3);return H(a,t.length)},T:function(e,t,n){const a=e.getTime();return H(a,t.length)}};function xn(e,t=""){const n=e>0?"-":"+",a=Math.abs(e),o=Math.trunc(a/60),s=a%60;return s===0?n+String(o):n+String(o)+t+H(s,2)}function hn(e,t){return e%60===0?(e>0?"-":"+")+H(Math.abs(e)/60,2):Oe(e,t)}function Oe(e,t=""){const n=e>0?"-":"+",a=Math.abs(e),o=H(Math.trunc(a/60),2),s=H(a%60,2);return n+o+t+s}const gn=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},qn=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},Fr=(e,t)=>{const n=e.match(/(P+)(p+)?/)||[],a=n[1],o=n[2];if(!o)return gn(e,t);let s;switch(a){case"P":s=t.dateTime({width:"short"});break;case"PP":s=t.dateTime({width:"medium"});break;case"PPP":s=t.dateTime({width:"long"});break;case"PPPP":default:s=t.dateTime({width:"full"});break}return s.replace("{{date}}",gn(a,t)).replace("{{time}}",qn(o,t))},Ir={p:qn,P:Fr},Br=/^D+$/,_r=/^Y+$/,Hr=["D","DD","YY","YYYY"];function Xr(e){return Br.test(e)}function Vr(e){return _r.test(e)}function qr(e,t,n){const a=Ur(e,t,n);if(console.warn(a),Hr.includes(e))throw new RangeError(a)}function Ur(e,t,n){const a=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${a} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Yr=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,$r=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Gr=/^'([^]*?)'?$/,Qr=/''/g,Kr=/[a-zA-Z]/;function Jr(e,t,n){var b,g,N,w,I,T,Q,j;const a=mt(),o=(n==null?void 0:n.locale)??a.locale??jr,s=(n==null?void 0:n.firstWeekContainsDate)??((g=(b=n==null?void 0:n.locale)==null?void 0:b.options)==null?void 0:g.firstWeekContainsDate)??a.firstWeekContainsDate??((w=(N=a.locale)==null?void 0:N.options)==null?void 0:w.firstWeekContainsDate)??1,d=(n==null?void 0:n.weekStartsOn)??((T=(I=n==null?void 0:n.locale)==null?void 0:I.options)==null?void 0:T.weekStartsOn)??a.weekStartsOn??((j=(Q=a.locale)==null?void 0:Q.options)==null?void 0:j.weekStartsOn)??0,f=be(e);if(!Zi(f))throw new RangeError("Invalid time value");let u=t.match($r).map(B=>{const D=B[0];if(D==="p"||D==="P"){const oe=Ir[D];return oe(B,o.formatLong)}return B}).join("").match(Yr).map(B=>{if(B==="''")return{isToken:!1,value:"'"};const D=B[0];if(D==="'")return{isToken:!1,value:Zr(B)};if(mn[D])return{isToken:!0,value:B};if(D.match(Kr))throw new RangeError("Format string contains an unescaped latin alphabet character `"+D+"`");return{isToken:!1,value:B}});o.localize.preprocessor&&(u=o.localize.preprocessor(f,u));const m={firstWeekContainsDate:s,weekStartsOn:d,locale:o};return u.map(B=>{if(!B.isToken)return B.value;const D=B.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&Vr(D)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&Xr(D))&&qr(D,t,String(e));const oe=mn[D[0]];return oe(f,D,o.localize,m)}).join("")}function Zr(e){const t=e.match(Gr);return t?t[1].replace(Qr,"'"):e}const es=e=>Jr(new Date(e),"p"),ts=()=>{const[e,t]=R.useState(!1),[n,a]=R.useState(!1),[o,s]=R.useState(!1),d=Te(kn);console.log(d);const f=()=>{t(!1)},u=()=>{t(!0)},m=()=>{a(!1)},b=()=>{a(!0)},g=()=>{s(!1)},N=()=>{s(!0)};return r.jsxs("div",{children:[r.jsxs("div",{children:[r.jsx(Vi,{children:"Today"}),r.jsx(Ii,{children:d.length>0&&d.map(({_id:w,amount:I,date:T})=>(console.log(w),r.jsx(r.Fragment,{children:r.jsxs(Bi,{children:[r.jsxs(_i,{children:[r.jsx("img",{src:qa,alt:"Icon glass"}),r.jsxs(Hi,{children:[I," ml"]}),r.jsx(Xi,{children:es(T)})]}),r.jsxs("div",{children:[r.jsx(Ui,{type:"button",onClick:b,children:r.jsx("img",{src:Ua,alt:"Icon glass"})}),r.jsx(Yi,{type:"button",onClick:N,children:r.jsx("img",{src:Ya,alt:"Icon glass"})}),n&&r.jsx(Ei,{isOpen:n,onClose:m}),o&&r.jsx(Fi,{onShow:o,onClose:g,id:w})]})]},w)})))})]}),r.jsxs(qi,{type:"button",onClick:u,children:[r.jsx(Va,{})," Add Water"]}),e&&r.jsx(Bn,{isOpen:e,onClose:f})]})},ns=ts;function as(e){return Sn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"16"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"16",y2:"12"},child:[]}]})(e)}const os=x.div`
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
`,is=x.div`
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
`,rs=x.input`
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
`,ss=x.div`
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
`,ls=x.button`
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
`,cs=()=>{const[e,t]=R.useState(!1),[n,a]=R.useState(0),o=Te(kn),{waterRate:s}=Te(bn);R.useEffect(()=>{const u=o.reduce((b,g)=>b+g.amount,0),m=Math.round(u/s*100);a(m)},[o,s]);const d=()=>{t(!1)},f=()=>{t(!0)};return r.jsxs(os,{children:[r.jsxs(is,{children:[r.jsx("h2",{children:"Today"}),r.jsx(rs,{value:n,type:"range",min:"0",max:"100"}),r.jsxs(ss,{children:[r.jsx("p",{children:"0%"}),r.jsx("p",{children:"50%"}),r.jsx("p",{children:"100%"})]})]}),r.jsxs(ls,{onClick:f,type:"button",children:[r.jsx(as,{}),"Add Water"]}),e&&r.jsx(Bn,{isOpen:e,onClose:d})]})},ds=cs,fs="/goit-group2-react-nodejs/assets/bottleHomeScreenDesk-630fd92f.png",ps="/goit-group2-react-nodejs/assets/bottleHomeScreenDesk2x@2x-51f4e9e6.png",us="/goit-group2-react-nodejs/assets/bottleHomeScreenTab-2759a74b.png",ms="/goit-group2-react-nodejs/assets/bottleHomeScreenTab@2x-805003a0.png",xs="/goit-group2-react-nodejs/assets/bottleHomeScreenMob-fe8938bc.png",hs="/goit-group2-react-nodejs/assets/bottleHomeScreenMob2x@2x-9640a1cb.png",gs="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAUwCAMAAAAFI3xKAAAA21BMVEUAAADH1/+fvP+vyf/H2P/H2P+euf/I1v/G1//F3P/G1//H1v/H1/+fu/+duv+fvP/H2P+fvP+gvP+euv+fu//F1v/H1/+eu//Fz//H1//G1v/F0f/H1/+fvP+fuv/I1//F2P+fvP/H1//H1//H1f/H2f/H1//H2P+eu/+euv/w9P/t7//t8v+euv/t8v+fvP/v8/+cuv/H2f/s8f/s8v/t8//v8//G2P+fuv/J2P/v9P/s8//t8//t8//u8//t8f+eu//J2P/t8//r8f/s8//u8//r8//G1//s8v/T/+bSAAAAR3RSTlMAsrILbyAWpy0W35x9hSynWZybQ2RDv1kQkE4Wn29vP++QX2RYN4abTjcfEN9C73o/IYXfv48vz5ybb7+ff19/e0LPz69PQNkZ8PsAAAouSURBVHja7NuxkoMgEAbg/QeZlcHChuK0JGqfLmXe/6UuelfkJgEJNFf8X6flDi7usggVMSEOXgH4dZis0EfMtOKPreuFSs1R8WoLQiXMRbHzMVizP9slfmG3zUKneo8HHZ08c+F4fRE6Mf2Ez8iL4LkIz0U8RCNvjYzgmQ6ABkmxHtiEkkYANytpzgNC2fg5yXGeAUyaAaiTPOeFEjyASc6wqst9wJ1QrdkfCZBaFuBdqJoHbkLVFmbA9hqEGbCBAl9C1SyAKFQtAFiEmtpYPPVoMHAPaXMF+1QM4AcYwP/myhzYXoiw09fYi+HkQYPAXkIbB0CF6nmWIm0iuwltegBqhKpdOXzVvg8rJ4cat5FVqFpfNkHJtmvSgIJyZObfYpLxANTm48fprAyrZ2vQcj4w6458HpyUbcO8e+46wzwAPD0+sSh23Zy6PjKwWslzHodukWd9VPCiSJkRv9Zx6Z1zdpkGxeHGfk0J1+EtHfn5frNvBykIw0AUhgd0oeiiGzceoYYSSOui2gq1ytz/RLrSUrOYNLj7vyM8XpgwIeYIiS/T6rDfTdPjt+sC282xKPbrdXHgwRMAAAAAgDl/q4PqfexLQbpzrR8NESZrdSqcBUluOtMLcvLTig4m8PornARWQSM6gdFDYyoqaHXVKC+wCRrVCExOGjcKTEqNc4KsAAdB1hG+CGwcQ+Qv15iHwMYzQzLV+sY+ZjlPATO1OlexlE7SsQ7M1FY64ehfsvL6rV/HJmuJsh8H54bmSXwAAAAA8GIPDgQAAAAAgPxfG0FVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWG/7lIQhIIwgM56TERIe1CrBylm/ysKIsL7eJV6OmcJw/x883NNcwr26ocuM9dbsMdpzI9zE9Rb86u7BLXuuXG2CWs1WbgGdaYstEGdIUtm+GABnREF/K8lS0GdPgtzUKnNrWdwpAXH4EgSnIWYPfo23zpvyF6PcZ6XSfsBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvduwltWEgCAJoG2QQg9aDFAQSuoSP0Pe/USAQ8pvFKI6DF+8doTbdVQAAAAAAT2oe1pK512UMzpunPd9VEZ42lvxsCk4Z9/xqDU647vndEvQr+dNL0OvIhjIHnUq2HEGfLZtq0GfKpj3oc8m2a9ClZtsWCPA/rNmmEXcaHJGHvDGXoNPNI/2IKhd0q27wfa5vbdikek+C8vvLBPchOOv4iLBqwb+yLbWU2zpYUgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADglV27120UiKIAfK8Ya0C4oKEwlI7t3t2W+/4vtZE3xUYxGCJtEen7GvqjM3d+BAAAAAAAAAAAAAAAAD9dd2jbQxN8RzMdaz6cShvs1LzVzOyPpVxPmXkbgz0uNfM6NR9hjtfMMgebDZmnNv7R9nk7BBuVzPPXTKsEt/fvLb6YslrFm4yP/J4leHOi2WDus8RT53wLXhqydvFUU6sKvtZnWcxWBTdNwC5isYLBC8e8xqJ7utS90ucQi6acglVN5iUWXbIEqw65tkq7vAarWgH+zwa2AnylyxzXZuAxWFfzHIvOOQTr7tnHolNegnXTyhCcM12GX2lyeaMojoEblMUKzukmt0FXFx5Om14Bt07B4/Nq1i7Y4J5ZmmdL+3ewRXPKvM3xyXxKr6m7Eswyf/pPQX67DPnuOB7iXTeWmvnLBrxLV/Kh9n8/gxP0/gj7/HAV3/c07TgO00V6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8Ic9O0htGAaiAKqADUV4bZQgSPAlfIS5/43aTWnTaiFbkE3eO8LwJc2MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOC9lKmueb1MH4kT5jW+7VviqCl+qyVxSI1neU4ccI2/sgwesMV/10S3HA33RHcAW9ZEpz2a3IKdSrTpBjvdo21JdNmirSYU8BVu8UUneN7sERmUo8k43GuJlj3RqTyc4DGLSW7QGmEhOKLkePbwMXJMqfI3aMs/8VssYs641T0i8mVSPgAAAAAAAACAT/bgQAAAAAAAyP+1EVRVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVdi1Y9XYYSAKw8MRqJOEbYEqG9TZxbJsd8u8/1Pd3RACCZHkbAik+L92u8NoZ0YWAAAAAOAvc7djWY7oDE+IedKbukXD9yxBr6Yp6WG+GM6LVVLKh7c7F/cgafaGk4qk8OHU+lVSMZzhVintdvc5wivt5IzaOK5FqoahLFVnX7lIm2GgSLMzayW4G7q8lHynOhO9uG+VLtZWFQz9ApytI0osJcMC7An0kR4nzda1KDEMth3DQcUlHYaWrGE8QdnQEiQ3ypg+3DFJNrDon6FF43QWyUCAv0RKBPgT07iJFP4DO+p4U3uhC3fk8X3VxBzYsWhUXzexifQXNd1Gtw3swh0vg2XYc6vfF9UvwZX7wIEg1U6+FOCIT1Ju/jhJfBMZ2CWVVn68TjhhlVQa+TEDnuCqpKu3z44kVUaYE9xV0rzbBzFICuR3TtHdvMX3SJcgcX6/wU96SGErJW9VDzMD4BMvVB94ofocX4LeTJnqe46P8VhutA4AAAAAAAAAAAAAAAAAAAAAAAAAAID/7dlNi+JAFIXhOycaREyKJOLHYKL2ShcS3M2yd/n//2jSjAwq+agkNPTifXbi7nDqVnkFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAIEFWJE5y5+IWGIaKS31JEqdaERqGCNaSoiy0WhDnibSmhQPc3xPLEqWU0NvdKY3tRZgrvRu8hE7nwN5t6aCnMFEamDUlyBz0kbdVLdfa0CuUbtYocOIQexXQWmypoG8B2yromIJ9MinoaGdm6PapqCNdznCvc1dGoc6GbtLF2umPoZuUdX5rIMBv5bS1ViFHuFei0lrFigzdcjn7wq/hkTIp7qhnbOgWOEXt4aaGPuv2CibaGvqE7rE4ZSc90lYqrMFVuhg8RGo6qrFTafARJlIZ2quL+EtkUILp7aV+kXRmAHoLcknp5f74lEWScvo3RJao5qKyKBPV0qthmCzSf9GF+o0QXrdFEX2uLww/AAAAAAAAAACAH23+sVqtZkfDGLvZpvrndJgbhvp9qp4Q4VD76tWSBAc5VO9OC4O3VVWjg6MtqiYbg6dl1Yj3jKdjVVHBaTdIC6bglBNcmxk87Ko2B8P4EVj7ZfALkFtkigUBftcM3Bsm3cIfBh973oHTHHnFTLShgNPMT1wh08ya9oE7g7cV+9SJZm+neEN+A82fl1on9jAjLA7LR/tmjL+RdsfjcUF6AAAAAAAAAAA8+QuvE3xjFcspUAAAAABJRU5ErkJggg==",bs="/goit-group2-react-nodejs/assets/backgroundElementHomeScreenTab-4de5d48f.png",ys=x.div`
  background-size: cover;
  background: url(${gs});
  height: max-content;
  background-repeat: no-repeat;
  min-height: calc(100% - 64px);

  @media screen and (min-width: 768px) {
    background: url(${bs});
    min-height: calc(100% - 80px);
  }

  @media screen and (min-width: 1440px) {
    background: url(${ca});
    min-height: calc(100% - 72px);
  }
`,ws=x.div`
  margin-bottom: 40px;
  margin-top: 20px;
  background-size: 280px 208px;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${xs});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 440px;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${hs});
  }

  @media screen and (min-width: 768px) {
    background-size: 518px 386px;
    background-position: calc(50% + 9px) 8px;
    height: 492px;
    background-image: url(${us});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background: url(${ms});
      background-size: 518px 386px;
      background-repeat: no-repeat;
    }
  }

  @media screen and (min-width: 1440px) {
    background-size: 738px 548px;
    background-position: calc(50% + 10px) 46px;
    height: 680px;
    background-image: url(${fs});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${ps});
    }
  }
`,vs=x.div`
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
`,ks=x.div`
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
`;function Cs(){return Be(),r.jsx(ys,{children:r.jsxs(vs,{children:[r.jsxs(ws,{children:[r.jsx(ga,{}),r.jsx(ds,{})]}),r.jsxs(ks,{children:[r.jsx(ns,{}),r.jsx(Pa,{})]})]})})}export{Cs as default};
