import{n as x,c as pt,g as bt,r as I,a as Ve,j as a,b as Tn,d as Ae,s as dt,e as Je,f as Wn,h as Ln,L as Rn,R as Se,i as Dn,k as en,l as tn,m as In,o as Pn,p as Bn}from"./index-e3aa4414.js";import{b as Fn}from"./bg_element_des@1x-1805b66c.js";const _n=x.div`
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
`,Hn=x.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,Xn=x.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`,Vn=x.div`
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
`;var nn={exports:{}};(function(e){(function(t,n){e.exports=n(t)})(typeof pt>"u"?typeof window>"u"?pt:window:pt,function(t){if(typeof t>"u"&&typeof t.document>"u")return!1;var n,o,r,c,d,f=`

Visit documentation page to learn more: https://notiflix.github.io/documentation`,u='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',h={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},A={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},g={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},M={ID:"NotiflixReportWrap",className:"notiflix-report",width:"320px",backgroundColor:"#f8f8f8",borderRadius:"25px",rtl:!1,zindex:4002,backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",backOverlayClickToClose:!1,fontFamily:"Quicksand",svgSize:"110px",plainText:!0,titleFontSize:"16px",titleMaxLength:34,messageFontSize:"13px",messageMaxLength:400,buttonFontSize:"14px",buttonMaxLength:34,cssAnimation:!0,cssAnimationDuration:360,cssAnimationStyle:"fade",success:{svgColor:"#32c682",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#32c682",buttonColor:"#fff",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{svgColor:"#ff5549",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#ff5549",buttonColor:"#fff",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{svgColor:"#eebf31",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#eebf31",buttonColor:"#fff",backOverlayColor:"rgba(238,191,49,0.2)"},info:{svgColor:"#26c0d3",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#26c0d3",buttonColor:"#fff",backOverlayColor:"rgba(38,192,211,0.2)"}},S={Show:"Show",Ask:"Ask",Prompt:"Prompt"},B={ID:"NotiflixConfirmWrap",className:"notiflix-confirm",width:"300px",zindex:4003,position:"center",distance:"10px",backgroundColor:"#f8f8f8",borderRadius:"25px",backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,cssAnimationStyle:"fade",plainText:!0,titleColor:"#32c682",titleFontSize:"16px",titleMaxLength:34,messageColor:"#1e1e1e",messageFontSize:"14px",messageMaxLength:110,buttonsFontSize:"15px",buttonsMaxLength:34,okButtonColor:"#f8f8f8",okButtonBackground:"#32c682",cancelButtonColor:"#f8f8f8",cancelButtonBackground:"#a9a9a9"},j={Standard:"Standard",Hourglass:"Hourglass",Circle:"Circle",Arrows:"Arrows",Dots:"Dots",Pulse:"Pulse",Custom:"Custom",Notiflix:"Notiflix"},$={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},T={Standard:"Standard",Hourglass:"Hourglass",Circle:"Circle",Arrows:"Arrows",Dots:"Dots",Pulse:"Pulse"},J={ID:"NotiflixBlockWrap",querySelectorLimit:200,className:"notiflix-block",position:"absolute",zindex:1e3,backgroundColor:"rgba(255,255,255,0.9)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,svgSize:"45px",svgColor:"#383838",messageFontSize:"14px",messageMaxLength:34,messageColor:"#383838"},G=function(i){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549",`
`+i+f)},pe=function(i){return console.log("%c Notiflix Info ","padding:2px;border-radius:20px;color:#fff;background:#26c0d3",`
`+i+f)},Z=function(i){return i||(i="head"),t.document[i]!==null||(G(`
Notiflix needs to be appended to the "<`+i+'>" element, but you called it before the "<'+i+'>" element has been created.'),!1)},_=function(i,s){if(!Z("head"))return!1;if(i()!==null&&!t.document.getElementById(s)){var l=t.document.createElement("style");l.id=s,l.innerHTML=i(),t.document.head.appendChild(l)}},y=function(){var i={},s=!1,l=0;Object.prototype.toString.call(arguments[0])==="[object Boolean]"&&(s=arguments[0],l++);for(var b=function(k){for(var W in k)Object.prototype.hasOwnProperty.call(k,W)&&(i[W]=s&&Object.prototype.toString.call(k[W])==="[object Object]"?y(i[W],k[W]):k[W])};l<arguments.length;l++)b(arguments[l]);return i},P=function(i){var s=t.document.createElement("div");return s.innerHTML=i,s.textContent||s.innerText||""},re=function(i,s){i||(i="110px"),s||(s="#32c682");var l='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="'+i+'" height="'+i+'" fill="'+s+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';return l},De=function(i,s){i||(i="110px"),s||(s="#ff5549");var l='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="'+i+'" height="'+i+'" fill="'+s+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';return l},at=function(i,s){i||(i="110px"),s||(s="#eebf31");var l='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="'+i+'" height="'+i+'" fill="'+s+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';return l},Ee=function(i,s){i||(i="110px"),s||(s="#26c0d3");var l='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="'+i+'" height="'+i+'" fill="'+s+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';return l},Oe=function(i,s){i||(i="60px"),s||(s="#32c682");var l='<svg xmlns="http://www.w3.org/2000/svg" stroke="'+s+'" width="'+i+'" height="'+i+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>';return l},z=function(i,s){i||(i="60px"),s||(s="#32c682");var l='<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+s+'" width="'+i+'" height="'+i+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>';return l},N=function(i,s){i||(i="60px"),s||(s="#32c682");var l='<svg xmlns="http://www.w3.org/2000/svg" width="'+i+'" height="'+i+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+i+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+i+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+s+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>';return l},H=function(i,s){i||(i="60px"),s||(s="#32c682");var l='<svg xmlns="http://www.w3.org/2000/svg" fill="'+s+'" width="'+i+'" height="'+i+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>';return l},p=function(i,s){i||(i="60px"),s||(s="#32c682");var l='<svg xmlns="http://www.w3.org/2000/svg" fill="'+s+'" width="'+i+'" height="'+i+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>';return l},w=function(i,s){i||(i="60px"),s||(s="#32c682");var l='<svg xmlns="http://www.w3.org/2000/svg" stroke="'+s+'" width="'+i+'" height="'+i+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>';return l},Q=function(i,s,l){i||(i="60px"),s||(s="#f8f8f8"),l||(l="#32c682");var b='<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+i+'" height="'+i+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+s+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+l+'" stroke="'+l+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>';return b},ee=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},X=0,se=function(i,s,l,b){if(!Z("body"))return!1;n||oe.Notify.init({});var k=y(!0,n,{});if(typeof l=="object"&&!Array.isArray(l)||typeof b=="object"&&!Array.isArray(b)){var W={};typeof l=="object"?W=l:typeof b=="object"&&(W=b),n=y(!0,n,W)}var E=n[i.toLocaleLowerCase("en")];X++,typeof s!="string"&&(s="Notiflix "+i),n.plainText&&(s=P(s)),!n.plainText&&s.length>n.messageMaxLength&&(n=y(!0,n,{closeButton:!0,messageMaxLength:150}),s='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),s.length>n.messageMaxLength&&(s=s.substring(0,n.messageMaxLength)+"..."),n.fontAwesomeIconStyle==="shadow"&&(E.fontAwesomeIconColor=E.background),n.cssAnimation||(n.cssAnimationDuration=0);var m=t.document.getElementById(A.wrapID)||t.document.createElement("div");if(m.id=A.wrapID,m.style.width=n.width,m.style.zIndex=n.zindex,m.style.opacity=n.opacity,n.position==="center-center"?(m.style.left=n.distance,m.style.top=n.distance,m.style.right=n.distance,m.style.bottom=n.distance,m.style.margin="auto",m.classList.add("nx-flex-center-center"),m.style.maxHeight="calc((100vh - "+n.distance+") - "+n.distance+")",m.style.display="flex",m.style.flexWrap="wrap",m.style.flexDirection="column",m.style.justifyContent="center",m.style.alignItems="center",m.style.pointerEvents="none"):n.position==="center-top"?(m.style.left=n.distance,m.style.right=n.distance,m.style.top=n.distance,m.style.bottom="auto",m.style.margin="auto"):n.position==="center-bottom"?(m.style.left=n.distance,m.style.right=n.distance,m.style.bottom=n.distance,m.style.top="auto",m.style.margin="auto"):n.position==="right-bottom"?(m.style.right=n.distance,m.style.bottom=n.distance,m.style.top="auto",m.style.left="auto"):n.position==="left-top"?(m.style.left=n.distance,m.style.top=n.distance,m.style.right="auto",m.style.bottom="auto"):n.position==="left-bottom"?(m.style.left=n.distance,m.style.bottom=n.distance,m.style.top="auto",m.style.right="auto"):(m.style.right=n.distance,m.style.top=n.distance,m.style.left="auto",m.style.bottom="auto"),n.backOverlay){var L=t.document.getElementById(A.overlayID)||t.document.createElement("div");L.id=A.overlayID,L.style.width="100%",L.style.height="100%",L.style.position="fixed",L.style.zIndex=n.zindex-1,L.style.left=0,L.style.top=0,L.style.right=0,L.style.bottom=0,L.style.background=E.backOverlayColor||n.backOverlayColor,L.className=n.cssAnimation?"nx-with-animation":"",L.style.animationDuration=n.cssAnimation?n.cssAnimationDuration+"ms":"",t.document.getElementById(A.overlayID)||t.document.body.appendChild(L)}t.document.getElementById(A.wrapID)||t.document.body.appendChild(m);var v=t.document.createElement("div");v.id=n.ID+"-"+X,v.className=n.className+" "+E.childClassName+" "+(n.cssAnimation?"nx-with-animation":"")+" "+(n.useIcon?"nx-with-icon":"")+" nx-"+n.cssAnimationStyle+" "+(n.closeButton&&typeof l!="function"?"nx-with-close-button":"")+" "+(typeof l=="function"?"nx-with-callback":"")+" "+(n.clickToClose?"nx-notify-click-to-close":""),v.style.fontSize=n.fontSize,v.style.color=E.textColor,v.style.background=E.background,v.style.borderRadius=n.borderRadius,v.style.pointerEvents="all",n.rtl&&(v.setAttribute("dir","rtl"),v.classList.add("nx-rtl-on")),v.style.fontFamily='"'+n.fontFamily+'", '+u,n.cssAnimation&&(v.style.animationDuration=n.cssAnimationDuration+"ms");var F="";if(n.closeButton&&typeof l!="function"&&(F='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+E.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),!n.useIcon)v.innerHTML='<span class="nx-message">'+s+"</span>"+(n.closeButton?F:"");else if(n.useFontAwesome)v.innerHTML='<i style="color:'+E.fontAwesomeIconColor+"; font-size:"+n.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+E.fontAwesomeClassName+" "+(n.fontAwesomeIconStyle==="shadow"?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+s+"</span>"+(n.closeButton?F:"");else{var q="";i===h.Success?q='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+E.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':i===h.Failure?q='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+E.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':i===h.Warning?q='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+E.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':i===h.Info&&(q='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+E.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),v.innerHTML=q+'<span class="nx-message nx-with-icon">'+s+"</span>"+(n.closeButton?F:"")}if(n.position==="left-bottom"||n.position==="right-bottom"){var K=t.document.getElementById(A.wrapID);K.insertBefore(v,K.firstChild)}else t.document.getElementById(A.wrapID).appendChild(v);var U=t.document.getElementById(v.id);if(U){var R,Y,D=function(){U.classList.add("nx-remove");var O=t.document.getElementById(A.overlayID);O&&0>=m.childElementCount&&O.classList.add("nx-remove"),clearTimeout(R)},fe=function(){if(U&&U.parentNode!==null&&U.parentNode.removeChild(U),0>=m.childElementCount&&m.parentNode!==null){m.parentNode.removeChild(m);var O=t.document.getElementById(A.overlayID);O&&O.parentNode!==null&&O.parentNode.removeChild(O)}clearTimeout(Y)};if(n.closeButton&&typeof l!="function"){var de=t.document.getElementById(v.id).querySelector("span.nx-close-button");de.addEventListener("click",function(){D();var O=setTimeout(function(){fe(),clearTimeout(O)},n.cssAnimationDuration)})}if((typeof l=="function"||n.clickToClose)&&U.addEventListener("click",function(){typeof l=="function"&&l(),D();var O=setTimeout(function(){fe(),clearTimeout(O)},n.cssAnimationDuration)}),!n.closeButton&&typeof l!="function"){var ie=function(){R=setTimeout(function(){D()},n.timeout),Y=setTimeout(function(){fe()},n.timeout+n.cssAnimationDuration)};ie(),n.pauseOnHover&&(U.addEventListener("mouseenter",function(){U.classList.add("nx-paused"),clearTimeout(R),clearTimeout(Y)}),U.addEventListener("mouseleave",function(){U.classList.remove("nx-paused"),ie()}))}}if(n.showOnlyTheLastOne&&0<X)for(var ae,V=t.document.querySelectorAll("[id^="+n.ID+"-]:not([id="+n.ID+"-"+X+"])"),we=0;we<V.length;we++)ae=V[we],ae.parentNode!==null&&ae.parentNode.removeChild(ae);n=y(!0,n,k)},ge=function(){return'[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},be=function(i,s,l,b,k,W){if(!Z("body"))return!1;o||oe.Report.init({});var E={};if(typeof k=="object"&&!Array.isArray(k)||typeof W=="object"&&!Array.isArray(W)){var m={};typeof k=="object"?m=k:typeof W=="object"&&(m=W),E=y(!0,o,{}),o=y(!0,o,m)}var L=o[i.toLocaleLowerCase("en")];typeof s!="string"&&(s="Notiflix "+i),typeof l!="string"&&(i===g.Success?l='"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein':i===g.Failure?l='"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford':i===g.Warning?l='"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk':i===g.Info&&(l='"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')),typeof b!="string"&&(b="Okay"),o.plainText&&(s=P(s),l=P(l),b=P(b)),o.plainText||(s.length>o.titleMaxLength&&(s="Possible HTML Tags Error",l='The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.',b="Okay"),l.length>o.messageMaxLength&&(s="Possible HTML Tags Error",l='The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.',b="Okay"),b.length>o.buttonMaxLength&&(s="Possible HTML Tags Error",l='The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.',b="Okay")),s.length>o.titleMaxLength&&(s=s.substring(0,o.titleMaxLength)+"..."),l.length>o.messageMaxLength&&(l=l.substring(0,o.messageMaxLength)+"..."),b.length>o.buttonMaxLength&&(b=b.substring(0,o.buttonMaxLength)+"..."),o.cssAnimation||(o.cssAnimationDuration=0);var v=t.document.createElement("div");v.id=M.ID,v.className=o.className,v.style.zIndex=o.zindex,v.style.borderRadius=o.borderRadius,v.style.fontFamily='"'+o.fontFamily+'", '+u,o.rtl&&(v.setAttribute("dir","rtl"),v.classList.add("nx-rtl-on")),v.style.display="flex",v.style.flexWrap="wrap",v.style.flexDirection="column",v.style.alignItems="center",v.style.justifyContent="center";var F="",q=o.backOverlayClickToClose===!0;o.backOverlay&&(F='<div class="'+o.className+"-overlay"+(o.cssAnimation?" nx-with-animation":"")+(q?" nx-report-click-to-close":"")+'" style="background:'+(L.backOverlayColor||o.backOverlayColor)+";animation-duration:"+o.cssAnimationDuration+'ms;"></div>');var K="";if(i===g.Success?K=re(o.svgSize,L.svgColor):i===g.Failure?K=De(o.svgSize,L.svgColor):i===g.Warning?K=at(o.svgSize,L.svgColor):i===g.Info&&(K=Ee(o.svgSize,L.svgColor)),v.innerHTML=F+'<div class="'+o.className+"-content"+(o.cssAnimation?" nx-with-animation ":"")+" nx-"+o.cssAnimationStyle+'" style="width:'+o.width+"; background:"+o.backgroundColor+"; animation-duration:"+o.cssAnimationDuration+'ms;"><div style="width:'+o.svgSize+"; height:"+o.svgSize+';" class="'+o.className+'-icon">'+K+'</div><h5 class="'+o.className+'-title" style="font-weight:500; font-size:'+o.titleFontSize+"; color:"+L.titleColor+';">'+s+'</h5><p class="'+o.className+'-message" style="font-size:'+o.messageFontSize+"; color:"+L.messageColor+';">'+l+'</p><a id="NXReportButton" class="'+o.className+'-button" style="font-weight:500; font-size:'+o.buttonFontSize+"; background:"+L.buttonBackground+"; color:"+L.buttonColor+';">'+b+"</a></div>",!t.document.getElementById(v.id)){t.document.body.appendChild(v);var U=function(){var D=t.document.getElementById(v.id);D.classList.add("nx-remove");var fe=setTimeout(function(){D.parentNode!==null&&D.parentNode.removeChild(D),clearTimeout(fe)},o.cssAnimationDuration)},R=t.document.getElementById("NXReportButton");if(R.addEventListener("click",function(){typeof k=="function"&&k(),U()}),F&&q){var Y=t.document.querySelector(".nx-report-click-to-close");Y.addEventListener("click",function(){U()})}}o=y(!0,o,E)},rt=function(){return'[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*="-content"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-head"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*="-content"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*="-content"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},Ie=function(i,s,l,b,k,W,E,m,L){if(!Z("body"))return!1;r||oe.Confirm.init({});var v=y(!0,r,{});typeof L!="object"||Array.isArray(L)||(r=y(!0,r,L)),typeof s!="string"&&(s="Notiflix Confirm"),typeof l!="string"&&(l="Do you agree with me?"),typeof k!="string"&&(k="Yes"),typeof W!="string"&&(W="No"),typeof E!="function"&&(E=void 0),typeof m!="function"&&(m=void 0),r.plainText&&(s=P(s),l=P(l),k=P(k),W=P(W)),r.plainText||(s.length>r.titleMaxLength&&(s="Possible HTML Tags Error",l='The "plainText" option is "false" and the title content length is more than "titleMaxLength" option.',k="Okay",W="..."),l.length>r.messageMaxLength&&(s="Possible HTML Tags Error",l='The "plainText" option is "false" and the message content length is more than "messageMaxLength" option.',k="Okay",W="..."),(k.length||W.length)>r.buttonsMaxLength&&(s="Possible HTML Tags Error",l='The "plainText" option is "false" and the buttons content length is more than "buttonsMaxLength" option.',k="Okay",W="...")),s.length>r.titleMaxLength&&(s=s.substring(0,r.titleMaxLength)+"..."),l.length>r.messageMaxLength&&(l=l.substring(0,r.messageMaxLength)+"..."),k.length>r.buttonsMaxLength&&(k=k.substring(0,r.buttonsMaxLength)+"..."),W.length>r.buttonsMaxLength&&(W=W.substring(0,r.buttonsMaxLength)+"..."),r.cssAnimation||(r.cssAnimationDuration=0);var F=t.document.createElement("div");F.id=B.ID,F.className=r.className+(r.cssAnimation?" nx-with-animation nx-"+r.cssAnimationStyle:""),F.style.zIndex=r.zindex,F.style.padding=r.distance,r.rtl&&(F.setAttribute("dir","rtl"),F.classList.add("nx-rtl-on"));var q=typeof r.position=="string"?r.position.trim():"center";F.classList.add("nx-position-"+q),F.style.fontFamily='"'+r.fontFamily+'", '+u;var K="";r.backOverlay&&(K='<div class="'+r.className+"-overlay"+(r.cssAnimation?" nx-with-animation":"")+'" style="background:'+r.backOverlayColor+";animation-duration:"+r.cssAnimationDuration+'ms;"></div>');var U="";typeof E=="function"&&(U='<a id="NXConfirmButtonCancel" class="nx-confirm-button-cancel" style="color:'+r.cancelButtonColor+";background:"+r.cancelButtonBackground+";font-size:"+r.buttonsFontSize+';">'+W+"</a>");var R="",Y=null,D=void 0;if(i===S.Ask||i===S.Prompt){Y=b||"";var fe=i===S.Ask||200<Y.length?Math.ceil(1.5*Y.length):250,de=i===S.Prompt?'value="'+Y+'"':"";R='<div><input id="NXConfirmValidationInput" type="text" '+de+' maxlength="'+fe+'" style="font-size:'+r.messageFontSize+";border-radius: "+r.borderRadius+';" autocomplete="off" spellcheck="false" autocapitalize="none" /></div>'}if(F.innerHTML=K+'<div class="'+r.className+'-content" style="width:'+r.width+"; background:"+r.backgroundColor+"; animation-duration:"+r.cssAnimationDuration+"ms; border-radius: "+r.borderRadius+';"><div class="'+r.className+'-head"><h5 style="color:'+r.titleColor+";font-size:"+r.titleFontSize+';">'+s+'</h5><div style="color:'+r.messageColor+";font-size:"+r.messageFontSize+';">'+l+R+'</div></div><div class="'+r.className+'-buttons"><a id="NXConfirmButtonOk" class="nx-confirm-button-ok'+(typeof E=="function"?"":" nx-full")+'" style="color:'+r.okButtonColor+";background:"+r.okButtonBackground+";font-size:"+r.buttonsFontSize+';">'+k+"</a>"+U+"</div></div>",!t.document.getElementById(F.id)){t.document.body.appendChild(F);var ie=t.document.getElementById(F.id),ae=t.document.getElementById("NXConfirmButtonOk"),V=t.document.getElementById("NXConfirmValidationInput");if(V&&(V.focus(),V.setSelectionRange(0,(V.value||"").length),V.addEventListener("keyup",function(O){var je=O.target.value;if(i===S.Ask&&je!==Y)O.preventDefault(),V.classList.add("nx-validation-failure"),V.classList.remove("nx-validation-success");else{i===S.Ask&&(V.classList.remove("nx-validation-failure"),V.classList.add("nx-validation-success"));var Pe=(O.key||"").toLocaleLowerCase("en")==="enter"||O.keyCode===13;Pe&&ae.dispatchEvent(new Event("click"))}})),ae.addEventListener("click",function(O){if(i===S.Ask&&Y&&V){var je=(V.value||"").toString();if(je!==Y)return V.focus(),V.classList.add("nx-validation-failure"),O.stopPropagation(),O.preventDefault(),O.returnValue=!1,O.cancelBubble=!0,!1;V.classList.remove("nx-validation-failure")}typeof E=="function"&&(i===S.Prompt&&V&&(D=V.value||""),E(D)),ie.classList.add("nx-remove");var Pe=setTimeout(function(){ie.parentNode!==null&&(ie.parentNode.removeChild(ie),clearTimeout(Pe))},r.cssAnimationDuration)}),typeof E=="function"){var we=t.document.getElementById("NXConfirmButtonCancel");we.addEventListener("click",function(){typeof m=="function"&&(i===S.Prompt&&V&&(D=V.value||""),m(D)),ie.classList.add("nx-remove");var O=setTimeout(function(){ie.parentNode!==null&&(ie.parentNode.removeChild(ie),clearTimeout(O))},r.cssAnimationDuration)})}}r=y(!0,r,v)},st=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},ye=function(i,s,l,b,k){if(!Z("body"))return!1;c||oe.Loading.init({});var W=y(!0,c,{});if(typeof s=="object"&&!Array.isArray(s)||typeof l=="object"&&!Array.isArray(l)){var E={};typeof s=="object"?E=s:typeof l=="object"&&(E=l),c=y(!0,c,E)}var m="";if(typeof s=="string"&&0<s.length&&(m=s),b){m=m.length>c.messageMaxLength?P(m).toString().substring(0,c.messageMaxLength)+"...":P(m).toString();var L="";0<m.length&&(L='<p id="'+c.messageID+'" class="nx-loading-message" style="color:'+c.messageColor+";font-size:"+c.messageFontSize+';">'+m+"</p>"),c.cssAnimation||(c.cssAnimationDuration=0);var v="";if(i===j.Standard)v=Oe(c.svgSize,c.svgColor);else if(i===j.Hourglass)v=z(c.svgSize,c.svgColor);else if(i===j.Circle)v=N(c.svgSize,c.svgColor);else if(i===j.Arrows)v=H(c.svgSize,c.svgColor);else if(i===j.Dots)v=p(c.svgSize,c.svgColor);else if(i===j.Pulse)v=w(c.svgSize,c.svgColor);else if(i===j.Custom&&c.customSvgCode!==null&&c.customSvgUrl===null)v=c.customSvgCode||"";else if(i===j.Custom&&c.customSvgUrl!==null&&c.customSvgCode===null)v='<img class="nx-custom-loading-icon" width="'+c.svgSize+'" height="'+c.svgSize+'" src="'+c.customSvgUrl+'" alt="Notiflix">';else{if(i===j.Custom&&(c.customSvgUrl===null||c.customSvgCode===null))return G('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;v=Q(c.svgSize,"#f8f8f8","#32c682")}var F=parseInt((c.svgSize||"").replace(/[^0-9]/g,"")),q=t.innerWidth,K=F>=q?q-40+"px":F+"px",U='<div style="width:'+K+"; height:"+K+';" class="'+c.className+"-icon"+(0<m.length?" nx-with-message":"")+'">'+v+"</div>",R=t.document.createElement("div");if(R.id=$.ID,R.className=c.className+(c.cssAnimation?" nx-with-animation":"")+(c.clickToClose?" nx-loading-click-to-close":""),R.style.zIndex=c.zindex,R.style.background=c.backgroundColor,R.style.animationDuration=c.cssAnimationDuration+"ms",R.style.fontFamily='"'+c.fontFamily+'", '+u,R.style.display="flex",R.style.flexWrap="wrap",R.style.flexDirection="column",R.style.alignItems="center",R.style.justifyContent="center",c.rtl&&(R.setAttribute("dir","rtl"),R.classList.add("nx-rtl-on")),R.innerHTML=U+L,!t.document.getElementById(R.id)&&(t.document.body.appendChild(R),c.clickToClose)){var Y=t.document.getElementById(R.id);Y.addEventListener("click",function(){R.classList.add("nx-remove");var de=setTimeout(function(){R.parentNode!==null&&(R.parentNode.removeChild(R),clearTimeout(de))},c.cssAnimationDuration)})}}else if(t.document.getElementById($.ID))var D=t.document.getElementById($.ID),fe=setTimeout(function(){D.classList.add("nx-remove");var de=setTimeout(function(){D.parentNode!==null&&(D.parentNode.removeChild(D),clearTimeout(de))},c.cssAnimationDuration);clearTimeout(fe)},k);c=y(!0,c,W)},An=function(i){typeof i!="string"&&(i="");var s=t.document.getElementById($.ID);if(s)if(0<i.length){i=i.length>c.messageMaxLength?P(i).substring(0,c.messageMaxLength)+"...":P(i);var l=s.getElementsByTagName("p")[0];if(l)l.innerHTML=i;else{var b=t.document.createElement("p");b.id=c.messageID,b.className="nx-loading-message nx-loading-message-new",b.style.color=c.messageColor,b.style.fontSize=c.messageFontSize,b.innerHTML=i,s.appendChild(b)}}else G("Where is the new message?")},Nn=function(){return'[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*="-icon"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*="-icon"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*="-message"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].nx-with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}'},lt=0,Ne=function(i,s,l,b,k,W){var E;if(Array.isArray(l)){if(1>l.length)return G("Array of HTMLElements should contains at least one HTMLElement."),!1;E=l}else if(Object.prototype.isPrototypeOf.call(NodeList.prototype,l)){if(1>l.length)return G("NodeListOf<HTMLElement> should contains at least one HTMLElement."),!1;E=Array.prototype.slice.call(l)}else{var m=typeof l!="string"||1>(l||"").length||(l||"").length===1&&((l||"")[0]==="#"||(l||"")[0]===".");if(m)return G("The selector parameter must be a string and matches a specified CSS selector(s)."),!1;var L=t.document.querySelectorAll(l);if(1>L.length)return G('You called the "Notiflix.Block..." function with "'+l+'" selector, but there is no such element(s) in the document.'),!1;E=L}d||oe.Block.init({});var v=y(!0,d,{});if(typeof b=="object"&&!Array.isArray(b)||typeof k=="object"&&!Array.isArray(k)){var F={};typeof b=="object"?F=b:typeof k=="object"&&(F=k),d=y(!0,d,F)}var q="";typeof b=="string"&&0<b.length&&(q=b),d.cssAnimation||(d.cssAnimationDuration=0);var K=J.className;typeof d.className=="string"&&(K=d.className.trim());var U=typeof d.querySelectorLimit=="number"?d.querySelectorLimit:200,R=(E||[]).length>=U?U:E.length,Y="nx-block-temporary-position";if(i){for(var D,fe=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr","html","head","title","script","style","iframe"],de=0;de<R;de++)if(D=E[de],D){if(-1<fe.indexOf(D.tagName.toLocaleLowerCase("en")))break;var ie=D.querySelectorAll("[id^="+J.ID+"]");if(1>ie.length){var ae="";s&&(s===T.Hourglass?ae=z(d.svgSize,d.svgColor):s===T.Circle?ae=N(d.svgSize,d.svgColor):s===T.Arrows?ae=H(d.svgSize,d.svgColor):s===T.Dots?ae=p(d.svgSize,d.svgColor):s===T.Pulse?ae=w(d.svgSize,d.svgColor):ae=Oe(d.svgSize,d.svgColor));var V='<span class="'+K+'-icon" style="width:'+d.svgSize+";height:"+d.svgSize+';">'+ae+"</span>",we="";0<q.length&&(q=q.length>d.messageMaxLength?P(q).substring(0,d.messageMaxLength)+"...":P(q),we='<span style="font-size:'+d.messageFontSize+";color:"+d.messageColor+';" class="'+K+'-message">'+q+"</span>"),lt++;var O=t.document.createElement("div");O.id=J.ID+"-"+lt,O.className=K+(d.cssAnimation?" nx-with-animation":""),O.style.position=d.position,O.style.zIndex=d.zindex,O.style.background=d.backgroundColor,O.style.animationDuration=d.cssAnimationDuration+"ms",O.style.fontFamily='"'+d.fontFamily+'", '+u,O.style.display="flex",O.style.flexWrap="wrap",O.style.flexDirection="column",O.style.alignItems="center",O.style.justifyContent="center",d.rtl&&(O.setAttribute("dir","rtl"),O.classList.add("nx-rtl-on")),O.innerHTML=V+we;var je=t.getComputedStyle(D).getPropertyValue("position"),Pe=typeof je=="string"?je.toLocaleLowerCase("en"):"relative",kt=Math.round(1.25*parseInt(d.svgSize))+40,Cn=D.offsetHeight||0,ct="";kt>Cn&&(ct="min-height:"+kt+"px;");var At="";At=D.getAttribute("id")?"#"+D.getAttribute("id"):D.classList[0]?"."+D.classList[0]:(D.tagName||"").toLocaleLowerCase("en");var Nt="",Ct=-1>=["absolute","relative","fixed","sticky"].indexOf(Pe);if(Ct||0<ct.length){if(!Z("head"))return!1;Ct&&(Nt="position:relative!important;");var Sn='<style id="Style-'+J.ID+"-"+lt+'">'+At+"."+Y+"{"+Nt+ct+"}</style>",St=t.document.createRange();St.selectNode(t.document.head);var zn=St.createContextualFragment(Sn);t.document.head.appendChild(zn),D.classList.add(Y)}D.appendChild(O)}}}else var Mn=function(te){var le=setTimeout(function(){te.parentNode!==null&&te.parentNode.removeChild(te);var Be=te.getAttribute("id"),qe=t.document.getElementById("Style-"+Be);qe&&qe.parentNode!==null&&qe.parentNode.removeChild(qe),clearTimeout(le)},d.cssAnimationDuration)},En=function(te){if(te&&0<te.length)for(var le,Be=0;Be<te.length;Be++)le=te[Be],le&&(le.classList.add("nx-remove"),Mn(le));else pe(typeof l=="string"?'"Notiflix.Block.remove();" function called with "'+l+'" selector, but this selector does not have a "Block" element to remove.':'"Notiflix.Block.remove();" function called with "'+l+'", but this "Array<HTMLElement>" or "NodeListOf<HTMLElement>" does not have a "Block" element to remove.')},On=function(te){var le=setTimeout(function(){te.classList.remove(Y),clearTimeout(le)},d.cssAnimationDuration+300)},jn=setTimeout(function(){for(var te,le=0;le<R;le++)te=E[le],te&&(On(te),ie=te.querySelectorAll("[id^="+J.ID+"]"),En(ie));clearTimeout(jn)},W);d=y(!0,d,v)},oe={Notify:{init:function(i){n=y(!0,A,i),_(ee,"NotiflixNotifyInternalCSS")},merge:function(i){return n?void(n=y(!0,n,i)):(G("You have to initialize the Notify module before call Merge function."),!1)},success:function(i,s,l){se(h.Success,i,s,l)},failure:function(i,s,l){se(h.Failure,i,s,l)},warning:function(i,s,l){se(h.Warning,i,s,l)},info:function(i,s,l){se(h.Info,i,s,l)}},Report:{init:function(i){o=y(!0,M,i),_(ge,"NotiflixReportInternalCSS")},merge:function(i){return o?void(o=y(!0,o,i)):(G("You have to initialize the Report module before call Merge function."),!1)},success:function(i,s,l,b,k){be(g.Success,i,s,l,b,k)},failure:function(i,s,l,b,k){be(g.Failure,i,s,l,b,k)},warning:function(i,s,l,b,k){be(g.Warning,i,s,l,b,k)},info:function(i,s,l,b,k){be(g.Info,i,s,l,b,k)}},Confirm:{init:function(i){r=y(!0,B,i),_(rt,"NotiflixConfirmInternalCSS")},merge:function(i){return r?void(r=y(!0,r,i)):(G("You have to initialize the Confirm module before call Merge function."),!1)},show:function(i,s,l,b,k,W,E){Ie(S.Show,i,s,null,l,b,k,W,E)},ask:function(i,s,l,b,k,W,E,m){Ie(S.Ask,i,s,l,b,k,W,E,m)},prompt:function(i,s,l,b,k,W,E,m){Ie(S.Prompt,i,s,l,b,k,W,E,m)}},Loading:{init:function(i){c=y(!0,$,i),_(st,"NotiflixLoadingInternalCSS")},merge:function(i){return c?void(c=y(!0,c,i)):(G("You have to initialize the Loading module before call Merge function."),!1)},standard:function(i,s){ye(j.Standard,i,s,!0,0)},hourglass:function(i,s){ye(j.Hourglass,i,s,!0,0)},circle:function(i,s){ye(j.Circle,i,s,!0,0)},arrows:function(i,s){ye(j.Arrows,i,s,!0,0)},dots:function(i,s){ye(j.Dots,i,s,!0,0)},pulse:function(i,s){ye(j.Pulse,i,s,!0,0)},custom:function(i,s){ye(j.Custom,i,s,!0,0)},notiflix:function(i,s){ye(j.Notiflix,i,s,!0,0)},remove:function(i){typeof i!="number"&&(i=0),ye(null,null,null,!1,i)},change:function(i){An(i)}},Block:{init:function(i){d=y(!0,J,i),_(Nn,"NotiflixBlockInternalCSS")},merge:function(i){return d?void(d=y(!0,d,i)):(G('You have to initialize the "Notiflix.Block" module before call Merge function.'),!1)},standard:function(i,s,l){Ne(!0,T.Standard,i,s,l)},hourglass:function(i,s,l){Ne(!0,T.Hourglass,i,s,l)},circle:function(i,s,l){Ne(!0,T.Circle,i,s,l)},arrows:function(i,s,l){Ne(!0,T.Arrows,i,s,l)},dots:function(i,s,l){Ne(!0,T.Dots,i,s,l)},pulse:function(i,s,l){Ne(!0,T.Pulse,i,s,l)},remove:function(i,s){typeof s!="number"&&(s=0),Ne(!1,null,i,null,null,s)}}};return typeof t.Notiflix=="object"?y(!0,t.Notiflix,{Notify:oe.Notify,Report:oe.Report,Confirm:oe.Confirm,Loading:oe.Loading,Block:oe.Block}):{Notify:oe.Notify,Report:oe.Report,Confirm:oe.Confirm,Loading:oe.Loading,Block:oe.Block}})})(nn);var Un=nn.exports;const zt=bt(Un),$n=({onClose:e})=>{const[t,n]=I.useState(0),[o,r]=I.useState(0),[c,d]=I.useState(0),[f,u]=I.useState(!0),[h,A]=I.useState(0),g=Ve(),M=()=>{u(!f)},S=T=>{n(Number(T.target.value))},B=T=>{r(Number(T.target.value))};I.useEffect(()=>{d(f?Math.ceil((t*.03+o*.4)*100)/100<2?2:Math.ceil((t*.03+o*.4)*100)/100:Math.ceil((t*.04+o*.6)*100)/100<2?2:Math.ceil((t*.04+o*.6)*100)/100)},[f,t,o]);const j=T=>{A(Number(T.target.value))},$=T=>{try{if(T.preventDefault(),h<2)return zt.Notify.failure("The required amount of water in liters per day: 2L");if(h>15)return zt.Notify.failure("The maximum amount of water in liters per day: 15L");g(Tn(h)),e()}catch(J){console.error("error",J)}};return I.useEffect(()=>{const T=J=>{J.key==="Escape"&&e()};window.addEventListener("keydown",T)},[e]),a.jsx(Xn,{onClick:e,children:a.jsxs(Vn,{onClick:T=>T.stopPropagation(),children:[a.jsxs("div",{className:"headerDaily",children:[a.jsx("h2",{children:"My daily norma"}),a.jsx("button",{type:"button",className:"closeButton",onClick:e,children:a.jsx("svg",{width:"24",height:"24",children:a.jsx("use",{href:"/goit-group2-react-nodejs/src/assets/images/sprite/horodiukIcons.svg#icon-close"})})})]}),a.jsxs("div",{className:"formulaContainer",children:[a.jsxs("div",{className:"formula",children:[a.jsxs("div",{className:"formulaText",children:[a.jsx("p",{children:"For girl:"}),a.jsx("span",{className:"formulaSpan",children:"V=(M*0,03) + (T*0,4)"})]}),a.jsxs("div",{className:"formulaText",children:[a.jsx("p",{children:"For man:"}),a.jsx("span",{className:"formulaSpan",children:"V=(M*0,04) + (T*0,6)"})]})]}),a.jsxs("p",{className:"formulaDescription",children:[a.jsx("span",{className:"formulaStar",children:"*"})," V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]})]}),a.jsxs("form",{onSubmit:$,children:[a.jsx("h3",{children:"Calculate your rate:"}),a.jsxs("div",{className:"checkBox",children:[a.jsxs("label",{children:[a.jsx("input",{type:"radio",name:"gender",value:"woman",checked:f,onChange:M})," For woman"]}),a.jsxs("label",{children:[a.jsx("input",{type:"radio",name:"gender",value:"man",checked:!f,onChange:M})," For man"]})]}),a.jsx("label",{className:"inputDescription",children:"Your weight in kilograms:"}),a.jsx("input",{className:"inputForm",placeholder:"0",onChange:S}),a.jsx("label",{className:"inputDescription",children:"The time of active participation in sports or other activities with a high physical. load in hours:"}),a.jsx("input",{className:"inputForm",placeholder:"0",onChange:B}),a.jsxs("div",{className:"requiredAmount",children:[a.jsx("p",{className:"amountDescription",children:"The required amount of water in liters per day:"}),a.jsxs("span",{className:"amount",children:[c," L"]})]}),a.jsx("h3",{children:"Write down how much water you will drink:"}),a.jsx("input",{className:"inputForm",placeholder:"0",onChange:j}),a.jsx("button",{className:"saveButton",type:"submit",children:"Save"})]})]})})},qn=()=>{const[e,t]=I.useState(!1),n=()=>{t(!1)},o=()=>{t(!0)};return a.jsx("div",{children:a.jsxs(_n,{children:[a.jsx("h2",{children:"My daily norma:"}),a.jsxs(Hn,{children:[a.jsx("p",{children:"1.5 L"}),a.jsx("button",{type:"button",onClick:o,children:"Edit"}),e&&a.jsx($n,{isOpen:e,onClose:n})]})]})})},Yn=qn,Gn=e=>e.water.notes,Kn=e=>e.water.currentNote,Qn=e=>e.water.monthNotes,Jn=e=>e.water.isLoading,Mt=new Date,Et=[Mt.getFullYear(),Mt.getMonth()+1],Ot=(e=Et,t)=>{const[n,o]=e;switch(t){case"forward":return o>=12?[n+1,1]:[n,o+1];case"back":return o<=1?[n-1,12]:[n,o-1];default:return Et}},Zn=Ae.div`
  width: 100%;
  margin-top: 15px;
`,eo=Ae.h3`
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
`,to=Ae.div`
  display: flex;
  justify-content: space-between;
`,no=Ae.div`
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
`,oo=Ae.ul`
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
`,io=Ae.li`
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
`,on=["January","February","March","April","May","June","July","August","September","October","November","December"],ao=e=>on[e-1],ro=e=>{const t=I.useRef(null);return I.useEffect(()=>{const n=o=>{t.current&&!t.current.contains(o.target)&&e()};return document.addEventListener("click",n,!0),()=>{document.removeEventListener("click",n,!0)}},[e]),t},Ye={sm:68,md:74},so={sm:5,md:10},Ge={md:69,xl:56},ft=(e,t)=>{const n=e/so[t],o=Math.floor(n);switch(t){case"sm":return o===n?parseInt(n-1)*Ye[t]-12:parseInt(n)*Ye[t]-12;case"md":return o===n?parseInt(n-1)*Ye[t]:parseInt(n)*Ye[t];default:return 0}},jt=(e,t)=>{const[n,o]=e%10===0?[9,!1]:[e%10-1,e%10<5];return o?n*Ge[t]+Ge[t]/4:n*Ge[t]-280+Ge[t]/4},lo=Ae.div`
  position: absolute;
  left: 50%;
  top: -194px;
  transform: translate(
    -50%,
    ${({$dayNumber:e})=>`${ft(e,"sm")}px`}
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
      ${({$dayNumber:e})=>`${jt(e,"md")}px`},
      ${({$dayNumber:e})=>`${ft(e,"md")}px`}
    );
  }

  @media screen and (min-width: 1440px) {
    transform: translate(
      ${({$dayNumber:e})=>`${jt(e,"xl")}px`},
      ${({$dayNumber:e})=>`${ft(e,"md")}px`}
    );
  }
`,co=Ae.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  p {
    color: #407bff;
    font-size: 16px;
    line-height: 1.25;
  }
`,po=({currentDay:e,close:t})=>{const n=ro(t),{date:o,percent:r,quantity:c,waterRate:d}=e,f={dailyNorma:d??0,percent:r??0},u=on[(o==null?void 0:o.month)-1],h=f.dailyNorma/1e3;return a.jsxs(lo,{ref:n,$dayNumber:o.day,children:[a.jsx(co,{children:a.jsxs("p",{children:[a.jsxs("span",{children:[o==null?void 0:o.day,", "]}),a.jsx("span",{children:u})]})}),a.jsxs("p",{children:["Daily norma : ",a.jsxs("span",{children:[h,"L"]})]}),a.jsxs("p",{children:["Fulfillment of the daily norm : ",a.jsxs("span",{children:[parseInt(f.percent),"%"]})]}),a.jsxs("p",{children:["How many servings of water : ",a.jsx("span",{children:c??0})]})]})},fo=({monthData:e})=>{const[t,n]=I.useState(null);console.log("monthData",e);const o=I.useCallback(()=>{n(null)},[]);return a.jsxs(oo,{children:[t&&a.jsx(po,{currentDay:t,close:o}),e.map(r=>a.jsxs(io,{onClick:()=>n(r),$percentage:r.percent,$isActive:(t==null?void 0:t.date.day)===r.date.day,children:[a.jsx("span",{className:"day",children:r.date.day}),a.jsxs("span",{className:"percentage",children:[parseInt(r.percent)||0,"%"]})]},r.date.day))]})},mo=({changeDirection:e,month:t,year:n})=>a.jsxs(to,{children:[a.jsx(eo,{children:"Month"}),a.jsxs(no,{children:[a.jsx("button",{className:"arrow",onClick:()=>e("back"),type:"button",children:a.jsx("svg",{width:"14",height:"14",children:a.jsx("use",{href:`${dt}#icon-arrow-left`})})}),a.jsxs("p",{className:"month__name",children:[ao(t),", ",n]}),a.jsx("button",{className:"arrow",onClick:()=>e("forward"),type:"button",children:a.jsx("svg",{width:"14",height:"14",transform:"rotate(180)",children:a.jsx("use",{href:`${dt}#icon-arrow-left`})})})]})]}),uo=()=>{var u;const e=Je(Qn),t=Je(Jn),[n,o]=Wn(),r=Ve();let[c,d]=((u=n.get("date"))==null?void 0:u.split("_"))??Ot();I.useEffect(()=>{r(Ln({year:c.toString(),month:d.toString()}))},[r,c,d]);const f=I.useCallback(h=>{const A=Ot([+c,+d],h);o({date:A.join("_")})},[o,c,d]);return a.jsxs(Zn,{children:[a.jsx(mo,{changeDirection:f,month:d,year:c}),t?a.jsx(Rn,{}):a.jsx(fo,{monthData:e})]})},xo=uo;var an={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Tt=Se.createContext&&Se.createContext(an),ho=["attr","size","title"];function go(e,t){if(e==null)return{};var n=bo(e,t),o,r;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)o=c[r],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function bo(e,t){if(e==null)return{};var n={},o=Object.keys(e),r,c;for(c=0;c<o.length;c++)r=o[c],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function Ze(){return Ze=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Ze.apply(this,arguments)}function Wt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,o)}return n}function et(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Wt(Object(n),!0).forEach(function(o){yo(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Wt(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function yo(e,t,n){return t=vo(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function vo(e){var t=wo(e,"string");return typeof t=="symbol"?t:String(t)}function wo(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function rn(e){return e&&e.map((t,n)=>Se.createElement(t.tag,et({key:n},t.attr),rn(t.child)))}function sn(e){return t=>Se.createElement(ko,Ze({attr:et({},e.attr)},t),rn(e.child))}function ko(e){var t=n=>{var{attr:o,size:r,title:c}=e,d=go(e,ho),f=r||n.size||"1em",u;return n.className&&(u=n.className),e.className&&(u=(u?u+" ":"")+e.className),Se.createElement("svg",Ze({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,o,d,{className:u,style:et(et({color:e.color||n.color},n.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),c&&Se.createElement("title",null,c),e.children)};return Tt!==void 0?Se.createElement(Tt.Consumer,null,n=>t(n)):t(an)}function Ao(e){return sn({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"},child:[]}]})(e)}const No="/goit-group2-react-nodejs/assets/glass-00cf2fb8.svg",Co="/goit-group2-react-nodejs/assets/edit-7f0c7b6a.svg",So="/goit-group2-react-nodejs/assets/delete-6bf30e40.svg";var mt={exports:{}},Me={},ln={exports:{}},zo="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Mo=zo,Eo=Mo;function cn(){}function pn(){}pn.resetWarningCache=cn;var Oo=function(){function e(o,r,c,d,f,u){if(u!==Eo){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:pn,resetWarningCache:cn};return n.PropTypes=n,n};ln.exports=Oo();var yt=ln.exports;const Ke=bt(yt);var ut={exports:{}},xe={},xt={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=A;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var n="none",o="contents",r=/input|select|textarea|button|object|iframe/;function c(g,M){return M.getPropertyValue("overflow")!=="visible"||g.scrollWidth<=0&&g.scrollHeight<=0}function d(g){var M=g.offsetWidth<=0&&g.offsetHeight<=0;if(M&&!g.innerHTML)return!0;try{var S=window.getComputedStyle(g),B=S.getPropertyValue("display");return M?B!==o&&c(g,S):B===n}catch{return console.warn("Failed to inspect element style"),!1}}function f(g){for(var M=g,S=g.getRootNode&&g.getRootNode();M&&M!==document.body;){if(S&&M===S&&(M=S.host.parentNode),d(M))return!1;M=M.parentNode}return!0}function u(g,M){var S=g.nodeName.toLowerCase(),B=r.test(S)&&!g.disabled||S==="a"&&g.href||M;return B&&f(g)}function h(g){var M=g.getAttribute("tabindex");M===null&&(M=void 0);var S=isNaN(M);return(S||M>=0)&&u(g,!S)}function A(g){var M=[].slice.call(g.querySelectorAll("*"),0).reduce(function(S,B){return S.concat(B.shadowRoot?A(B.shadowRoot):[B])},[]);return M.filter(h)}e.exports=t.default})(xt,xt.exports);var fn=xt.exports;Object.defineProperty(xe,"__esModule",{value:!0});xe.resetState=Lo;xe.log=Ro;xe.handleBlur=He;xe.handleFocus=Xe;xe.markForFocusLater=Do;xe.returnFocus=Io;xe.popWithoutFocus=Po;xe.setupScopedFocus=Bo;xe.teardownScopedFocus=Fo;var jo=fn,To=Wo(jo);function Wo(e){return e&&e.__esModule?e:{default:e}}var We=[],Te=null,ht=!1;function Lo(){We=[]}function Ro(){}function He(){ht=!0}function Xe(){if(ht){if(ht=!1,!Te)return;setTimeout(function(){if(!Te.contains(document.activeElement)){var e=(0,To.default)(Te)[0]||Te;e.focus()}},0)}}function Do(){We.push(document.activeElement)}function Io(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=null;try{We.length!==0&&(t=We.pop(),t.focus({preventScroll:e}));return}catch{console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}}function Po(){We.length>0&&We.pop()}function Bo(e){Te=e,window.addEventListener?(window.addEventListener("blur",He,!1),document.addEventListener("focus",Xe,!0)):(window.attachEvent("onBlur",He),document.attachEvent("onFocus",Xe))}function Fo(){Te=null,window.addEventListener?(window.removeEventListener("blur",He),document.removeEventListener("focus",Xe)):(window.detachEvent("onBlur",He),document.detachEvent("onFocus",Xe))}var gt={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=d;var n=fn,o=r(n);function r(f){return f&&f.__esModule?f:{default:f}}function c(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return f.activeElement.shadowRoot?c(f.activeElement.shadowRoot):f.activeElement}function d(f,u){var h=(0,o.default)(f);if(!h.length){u.preventDefault();return}var A=void 0,g=u.shiftKey,M=h[0],S=h[h.length-1],B=c();if(f===B){if(!g)return;A=S}if(S===B&&!g&&(A=M),M===B&&g&&(A=S),A){u.preventDefault(),A.focus();return}var j=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),$=j!=null&&j[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if($){var T=h.indexOf(B);if(T>-1&&(T+=g?-1:1),A=h[T],typeof A>"u"){u.preventDefault(),A=g?S:M,A.focus();return}u.preventDefault(),A.focus()}}e.exports=t.default})(gt,gt.exports);var _o=gt.exports,he={},Ho=function(){},Xo=Ho,ue={},dn={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(e){(function(){var t=!!(typeof window<"u"&&window.document&&window.document.createElement),n={canUseDOM:t,canUseWorkers:typeof Worker<"u",canUseEventListeners:t&&!!(window.addEventListener||window.attachEvent),canUseViewport:t&&!!window.screen};e.exports?e.exports=n:window.ExecutionEnvironment=n})()})(dn);var Vo=dn.exports;Object.defineProperty(ue,"__esModule",{value:!0});ue.canUseDOM=ue.SafeNodeList=ue.SafeHTMLCollection=void 0;var Uo=Vo,$o=qo(Uo);function qo(e){return e&&e.__esModule?e:{default:e}}var it=$o.default,Yo=it.canUseDOM?window.HTMLElement:{};ue.SafeHTMLCollection=it.canUseDOM?window.HTMLCollection:{};ue.SafeNodeList=it.canUseDOM?window.NodeList:{};ue.canUseDOM=it.canUseDOM;ue.default=Yo;Object.defineProperty(he,"__esModule",{value:!0});he.resetState=Zo;he.log=ei;he.assertNodeList=mn;he.setElement=ti;he.validateElement=vt;he.hide=ni;he.show=oi;he.documentNotReadyOrSSRTesting=ii;var Go=Xo,Ko=Jo(Go),Qo=ue;function Jo(e){return e&&e.__esModule?e:{default:e}}var ce=null;function Zo(){ce&&(ce.removeAttribute?ce.removeAttribute("aria-hidden"):ce.length!=null?ce.forEach(function(e){return e.removeAttribute("aria-hidden")}):document.querySelectorAll(ce).forEach(function(e){return e.removeAttribute("aria-hidden")})),ce=null}function ei(){}function mn(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function ti(e){var t=e;if(typeof t=="string"&&Qo.canUseDOM){var n=document.querySelectorAll(t);mn(n,t),t=n}return ce=t||ce,ce}function vt(e){var t=e||ce;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,Ko.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function ni(e){var t=!0,n=!1,o=void 0;try{for(var r=vt(e)[Symbol.iterator](),c;!(t=(c=r.next()).done);t=!0){var d=c.value;d.setAttribute("aria-hidden","true")}}catch(f){n=!0,o=f}finally{try{!t&&r.return&&r.return()}finally{if(n)throw o}}}function oi(e){var t=!0,n=!1,o=void 0;try{for(var r=vt(e)[Symbol.iterator](),c;!(t=(c=r.next()).done);t=!0){var d=c.value;d.removeAttribute("aria-hidden")}}catch(f){n=!0,o=f}finally{try{!t&&r.return&&r.return()}finally{if(n)throw o}}}function ii(){ce=null}var Le={};Object.defineProperty(Le,"__esModule",{value:!0});Le.resetState=ai;Le.log=ri;var Fe={},_e={};function Lt(e,t){e.classList.remove(t)}function ai(){var e=document.getElementsByTagName("html")[0];for(var t in Fe)Lt(e,Fe[t]);var n=document.body;for(var o in _e)Lt(n,_e[o]);Fe={},_e={}}function ri(){}var si=function(t,n){return t[n]||(t[n]=0),t[n]+=1,n},li=function(t,n){return t[n]&&(t[n]-=1),n},ci=function(t,n,o){o.forEach(function(r){si(n,r),t.add(r)})},pi=function(t,n,o){o.forEach(function(r){li(n,r),n[r]===0&&t.remove(r)})};Le.add=function(t,n){return ci(t.classList,t.nodeName.toLowerCase()=="html"?Fe:_e,n.split(" "))};Le.remove=function(t,n){return pi(t.classList,t.nodeName.toLowerCase()=="html"?Fe:_e,n.split(" "))};var Re={};Object.defineProperty(Re,"__esModule",{value:!0});Re.log=di;Re.resetState=mi;function fi(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var un=function e(){var t=this;fi(this,e),this.register=function(n){t.openInstances.indexOf(n)===-1&&(t.openInstances.push(n),t.emit("register"))},this.deregister=function(n){var o=t.openInstances.indexOf(n);o!==-1&&(t.openInstances.splice(o,1),t.emit("deregister"))},this.subscribe=function(n){t.subscribers.push(n)},this.emit=function(n){t.subscribers.forEach(function(o){return o(n,t.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},tt=new un;function di(){console.log("portalOpenInstances ----------"),console.log(tt.openInstances.length),tt.openInstances.forEach(function(e){return console.log(e)}),console.log("end portalOpenInstances ----------")}function mi(){tt=new un}Re.default=tt;var wt={};Object.defineProperty(wt,"__esModule",{value:!0});wt.resetState=gi;wt.log=bi;var ui=Re,xi=hi(ui);function hi(e){return e&&e.__esModule?e:{default:e}}var ne=void 0,me=void 0,ze=[];function gi(){for(var e=[ne,me],t=0;t<e.length;t++){var n=e[t];n&&n.parentNode&&n.parentNode.removeChild(n)}ne=me=null,ze=[]}function bi(){console.log("bodyTrap ----------"),console.log(ze.length);for(var e=[ne,me],t=0;t<e.length;t++){var n=e[t],o=n||{};console.log(o.nodeName,o.className,o.id)}console.log("edn bodyTrap ----------")}function Rt(){ze.length!==0&&ze[ze.length-1].focusContent()}function yi(e,t){!ne&&!me&&(ne=document.createElement("div"),ne.setAttribute("data-react-modal-body-trap",""),ne.style.position="absolute",ne.style.opacity="0",ne.setAttribute("tabindex","0"),ne.addEventListener("focus",Rt),me=ne.cloneNode(),me.addEventListener("focus",Rt)),ze=t,ze.length>0?(document.body.firstChild!==ne&&document.body.insertBefore(ne,document.body.firstChild),document.body.lastChild!==me&&document.body.appendChild(me)):(ne.parentElement&&ne.parentElement.removeChild(ne),me.parentElement&&me.parentElement.removeChild(me))}xi.default.subscribe(yi);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(z){for(var N=1;N<arguments.length;N++){var H=arguments[N];for(var p in H)Object.prototype.hasOwnProperty.call(H,p)&&(z[p]=H[p])}return z},o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(z){return typeof z}:function(z){return z&&typeof Symbol=="function"&&z.constructor===Symbol&&z!==Symbol.prototype?"symbol":typeof z},r=function(){function z(N,H){for(var p=0;p<H.length;p++){var w=H[p];w.enumerable=w.enumerable||!1,w.configurable=!0,"value"in w&&(w.writable=!0),Object.defineProperty(N,w.key,w)}}return function(N,H,p){return H&&z(N.prototype,H),p&&z(N,p),N}}(),c=I,d=yt,f=Z(d),u=xe,h=pe(u),A=_o,g=Z(A),M=he,S=pe(M),B=Le,j=pe(B),$=ue,T=Z($),J=Re,G=Z(J);function pe(z){if(z&&z.__esModule)return z;var N={};if(z!=null)for(var H in z)Object.prototype.hasOwnProperty.call(z,H)&&(N[H]=z[H]);return N.default=z,N}function Z(z){return z&&z.__esModule?z:{default:z}}function _(z,N){if(!(z instanceof N))throw new TypeError("Cannot call a class as a function")}function y(z,N){if(!z)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return N&&(typeof N=="object"||typeof N=="function")?N:z}function P(z,N){if(typeof N!="function"&&N!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof N);z.prototype=Object.create(N&&N.prototype,{constructor:{value:z,enumerable:!1,writable:!0,configurable:!0}}),N&&(Object.setPrototypeOf?Object.setPrototypeOf(z,N):z.__proto__=N)}var re={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},De=function(N){return N.code==="Tab"||N.keyCode===9},at=function(N){return N.code==="Escape"||N.keyCode===27},Ee=0,Oe=function(z){P(N,z);function N(H){_(this,N);var p=y(this,(N.__proto__||Object.getPrototypeOf(N)).call(this,H));return p.setOverlayRef=function(w){p.overlay=w,p.props.overlayRef&&p.props.overlayRef(w)},p.setContentRef=function(w){p.content=w,p.props.contentRef&&p.props.contentRef(w)},p.afterClose=function(){var w=p.props,Q=w.appElement,ee=w.ariaHideApp,X=w.htmlOpenClassName,se=w.bodyOpenClassName,ge=w.parentSelector,be=ge&&ge().ownerDocument||document;se&&j.remove(be.body,se),X&&j.remove(be.getElementsByTagName("html")[0],X),ee&&Ee>0&&(Ee-=1,Ee===0&&S.show(Q)),p.props.shouldFocusAfterRender&&(p.props.shouldReturnFocusAfterClose?(h.returnFocus(p.props.preventScroll),h.teardownScopedFocus()):h.popWithoutFocus()),p.props.onAfterClose&&p.props.onAfterClose(),G.default.deregister(p)},p.open=function(){p.beforeOpen(),p.state.afterOpen&&p.state.beforeClose?(clearTimeout(p.closeTimer),p.setState({beforeClose:!1})):(p.props.shouldFocusAfterRender&&(h.setupScopedFocus(p.node),h.markForFocusLater()),p.setState({isOpen:!0},function(){p.openAnimationFrame=requestAnimationFrame(function(){p.setState({afterOpen:!0}),p.props.isOpen&&p.props.onAfterOpen&&p.props.onAfterOpen({overlayEl:p.overlay,contentEl:p.content})})}))},p.close=function(){p.props.closeTimeoutMS>0?p.closeWithTimeout():p.closeWithoutTimeout()},p.focusContent=function(){return p.content&&!p.contentHasFocus()&&p.content.focus({preventScroll:!0})},p.closeWithTimeout=function(){var w=Date.now()+p.props.closeTimeoutMS;p.setState({beforeClose:!0,closesAt:w},function(){p.closeTimer=setTimeout(p.closeWithoutTimeout,p.state.closesAt-Date.now())})},p.closeWithoutTimeout=function(){p.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},p.afterClose)},p.handleKeyDown=function(w){De(w)&&(0,g.default)(p.content,w),p.props.shouldCloseOnEsc&&at(w)&&(w.stopPropagation(),p.requestClose(w))},p.handleOverlayOnClick=function(w){p.shouldClose===null&&(p.shouldClose=!0),p.shouldClose&&p.props.shouldCloseOnOverlayClick&&(p.ownerHandlesClose()?p.requestClose(w):p.focusContent()),p.shouldClose=null},p.handleContentOnMouseUp=function(){p.shouldClose=!1},p.handleOverlayOnMouseDown=function(w){!p.props.shouldCloseOnOverlayClick&&w.target==p.overlay&&w.preventDefault()},p.handleContentOnClick=function(){p.shouldClose=!1},p.handleContentOnMouseDown=function(){p.shouldClose=!1},p.requestClose=function(w){return p.ownerHandlesClose()&&p.props.onRequestClose(w)},p.ownerHandlesClose=function(){return p.props.onRequestClose},p.shouldBeClosed=function(){return!p.state.isOpen&&!p.state.beforeClose},p.contentHasFocus=function(){return document.activeElement===p.content||p.content.contains(document.activeElement)},p.buildClassName=function(w,Q){var ee=(typeof Q>"u"?"undefined":o(Q))==="object"?Q:{base:re[w],afterOpen:re[w]+"--after-open",beforeClose:re[w]+"--before-close"},X=ee.base;return p.state.afterOpen&&(X=X+" "+ee.afterOpen),p.state.beforeClose&&(X=X+" "+ee.beforeClose),typeof Q=="string"&&Q?X+" "+Q:X},p.attributesFromObject=function(w,Q){return Object.keys(Q).reduce(function(ee,X){return ee[w+"-"+X]=Q[X],ee},{})},p.state={afterOpen:!1,beforeClose:!1},p.shouldClose=null,p.moveFromContentToOverlay=null,p}return r(N,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(p,w){this.props.isOpen&&!p.isOpen?this.open():!this.props.isOpen&&p.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!w.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var p=this.props,w=p.appElement,Q=p.ariaHideApp,ee=p.htmlOpenClassName,X=p.bodyOpenClassName,se=p.parentSelector,ge=se&&se().ownerDocument||document;X&&j.add(ge.body,X),ee&&j.add(ge.getElementsByTagName("html")[0],ee),Q&&(Ee+=1,S.hide(w)),G.default.register(this)}},{key:"render",value:function(){var p=this.props,w=p.id,Q=p.className,ee=p.overlayClassName,X=p.defaultStyles,se=p.children,ge=Q?{}:X.content,be=ee?{}:X.overlay;if(this.shouldBeClosed())return null;var rt={ref:this.setOverlayRef,className:this.buildClassName("overlay",ee),style:n({},be,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},Ie=n({id:w,ref:this.setContentRef,style:n({},ge,this.props.style.content),className:this.buildClassName("content",Q),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",n({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),st=this.props.contentElement(Ie,se);return this.props.overlayElement(rt,st)}}]),N}(c.Component);Oe.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},Oe.propTypes={isOpen:f.default.bool.isRequired,defaultStyles:f.default.shape({content:f.default.object,overlay:f.default.object}),style:f.default.shape({content:f.default.object,overlay:f.default.object}),className:f.default.oneOfType([f.default.string,f.default.object]),overlayClassName:f.default.oneOfType([f.default.string,f.default.object]),parentSelector:f.default.func,bodyOpenClassName:f.default.string,htmlOpenClassName:f.default.string,ariaHideApp:f.default.bool,appElement:f.default.oneOfType([f.default.instanceOf(T.default),f.default.instanceOf($.SafeHTMLCollection),f.default.instanceOf($.SafeNodeList),f.default.arrayOf(f.default.instanceOf(T.default))]),onAfterOpen:f.default.func,onAfterClose:f.default.func,onRequestClose:f.default.func,closeTimeoutMS:f.default.number,shouldFocusAfterRender:f.default.bool,shouldCloseOnOverlayClick:f.default.bool,shouldReturnFocusAfterClose:f.default.bool,preventScroll:f.default.bool,role:f.default.string,contentLabel:f.default.string,aria:f.default.object,data:f.default.object,children:f.default.node,shouldCloseOnEsc:f.default.bool,overlayRef:f.default.func,contentRef:f.default.func,id:f.default.string,overlayElement:f.default.func,contentElement:f.default.func,testId:f.default.string},t.default=Oe,e.exports=t.default})(ut,ut.exports);var vi=ut.exports;function xn(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);e!=null&&this.setState(e)}function hn(e){function t(n){var o=this.constructor.getDerivedStateFromProps(e,n);return o??null}this.setState(t.bind(this))}function gn(e,t){try{var n=this.props,o=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,o)}finally{this.props=n,this.state=o}}xn.__suppressDeprecationWarning=!0;hn.__suppressDeprecationWarning=!0;gn.__suppressDeprecationWarning=!0;function wi(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if(typeof e.getDerivedStateFromProps!="function"&&typeof t.getSnapshotBeforeUpdate!="function")return e;var n=null,o=null,r=null;if(typeof t.componentWillMount=="function"?n="componentWillMount":typeof t.UNSAFE_componentWillMount=="function"&&(n="UNSAFE_componentWillMount"),typeof t.componentWillReceiveProps=="function"?o="componentWillReceiveProps":typeof t.UNSAFE_componentWillReceiveProps=="function"&&(o="UNSAFE_componentWillReceiveProps"),typeof t.componentWillUpdate=="function"?r="componentWillUpdate":typeof t.UNSAFE_componentWillUpdate=="function"&&(r="UNSAFE_componentWillUpdate"),n!==null||o!==null||r!==null){var c=e.displayName||e.name,d=typeof e.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+c+" uses "+d+" but also contains the following legacy lifecycles:"+(n!==null?`
  `+n:"")+(o!==null?`
  `+o:"")+(r!==null?`
  `+r:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof e.getDerivedStateFromProps=="function"&&(t.componentWillMount=xn,t.componentWillReceiveProps=hn),typeof t.getSnapshotBeforeUpdate=="function"){if(typeof t.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=gn;var f=t.componentDidUpdate;t.componentDidUpdate=function(h,A,g){var M=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:g;f.call(this,h,A,M)}}return e}const ki=Object.freeze(Object.defineProperty({__proto__:null,polyfill:wi},Symbol.toStringTag,{value:"Module"})),Ai=Dn(ki);Object.defineProperty(Me,"__esModule",{value:!0});Me.bodyOpenClassName=Me.portalClassName=void 0;var Dt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Ni=function(){function e(t,n){for(var o=0;o<n.length;o++){var r=n[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),bn=I,nt=Ue(bn),Ci=en,ot=Ue(Ci),Si=yt,C=Ue(Si),zi=vi,It=Ue(zi),Mi=he,Ei=ji(Mi),ke=ue,Pt=Ue(ke),Oi=Ai;function ji(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function Ue(e){return e&&e.__esModule?e:{default:e}}function Ti(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Bt(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Wi(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Li=Me.portalClassName="ReactModalPortal",Ri=Me.bodyOpenClassName="ReactModal__Body--open",Ce=ke.canUseDOM&&ot.default.createPortal!==void 0,Ft=function(t){return document.createElement(t)},_t=function(){return Ce?ot.default.createPortal:ot.default.unstable_renderSubtreeIntoContainer};function Qe(e){return e()}var $e=function(e){Wi(t,e);function t(){var n,o,r,c;Ti(this,t);for(var d=arguments.length,f=Array(d),u=0;u<d;u++)f[u]=arguments[u];return c=(o=(r=Bt(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(f))),r),r.removePortal=function(){!Ce&&ot.default.unmountComponentAtNode(r.node);var h=Qe(r.props.parentSelector);h&&h.contains(r.node)?h.removeChild(r.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},r.portalRef=function(h){r.portal=h},r.renderPortal=function(h){var A=_t(),g=A(r,nt.default.createElement(It.default,Dt({defaultStyles:t.defaultStyles},h)),r.node);r.portalRef(g)},o),Bt(r,c)}return Ni(t,[{key:"componentDidMount",value:function(){if(ke.canUseDOM){Ce||(this.node=Ft("div")),this.node.className=this.props.portalClassName;var o=Qe(this.props.parentSelector);o.appendChild(this.node),!Ce&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(o){var r=Qe(o.parentSelector),c=Qe(this.props.parentSelector);return{prevParent:r,nextParent:c}}},{key:"componentDidUpdate",value:function(o,r,c){if(ke.canUseDOM){var d=this.props,f=d.isOpen,u=d.portalClassName;o.portalClassName!==u&&(this.node.className=u);var h=c.prevParent,A=c.nextParent;A!==h&&(h.removeChild(this.node),A.appendChild(this.node)),!(!o.isOpen&&!f)&&!Ce&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!ke.canUseDOM||!this.node||!this.portal)){var o=this.portal.state,r=Date.now(),c=o.isOpen&&this.props.closeTimeoutMS&&(o.closesAt||r+this.props.closeTimeoutMS);c?(o.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,c-r)):this.removePortal()}}},{key:"render",value:function(){if(!ke.canUseDOM||!Ce)return null;!this.node&&Ce&&(this.node=Ft("div"));var o=_t();return o(nt.default.createElement(It.default,Dt({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(o){Ei.setElement(o)}}]),t}(bn.Component);$e.propTypes={isOpen:C.default.bool.isRequired,style:C.default.shape({content:C.default.object,overlay:C.default.object}),portalClassName:C.default.string,bodyOpenClassName:C.default.string,htmlOpenClassName:C.default.string,className:C.default.oneOfType([C.default.string,C.default.shape({base:C.default.string.isRequired,afterOpen:C.default.string.isRequired,beforeClose:C.default.string.isRequired})]),overlayClassName:C.default.oneOfType([C.default.string,C.default.shape({base:C.default.string.isRequired,afterOpen:C.default.string.isRequired,beforeClose:C.default.string.isRequired})]),appElement:C.default.oneOfType([C.default.instanceOf(Pt.default),C.default.instanceOf(ke.SafeHTMLCollection),C.default.instanceOf(ke.SafeNodeList),C.default.arrayOf(C.default.instanceOf(Pt.default))]),onAfterOpen:C.default.func,onRequestClose:C.default.func,closeTimeoutMS:C.default.number,ariaHideApp:C.default.bool,shouldFocusAfterRender:C.default.bool,shouldCloseOnOverlayClick:C.default.bool,shouldReturnFocusAfterClose:C.default.bool,preventScroll:C.default.bool,parentSelector:C.default.func,aria:C.default.object,data:C.default.object,role:C.default.string,contentLabel:C.default.string,shouldCloseOnEsc:C.default.bool,overlayRef:C.default.func,contentRef:C.default.func,id:C.default.string,overlayElement:C.default.func,contentElement:C.default.func};$e.defaultProps={isOpen:!1,portalClassName:Li,bodyOpenClassName:Ri,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(t,n){return nt.default.createElement("div",t,n)},contentElement:function(t,n){return nt.default.createElement("div",t,n)}};$e.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,Oi.polyfill)($e);Me.default=$e;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=Me,o=r(n);function r(c){return c&&c.__esModule?c:{default:c}}t.default=o.default,e.exports=t.default})(mt,mt.exports);var Di=mt.exports;const yn=bt(Di),ve="/goit-group2-react-nodejs/assets/horodiukIcons-b8c45607.svg",Ht=x.select`
  margin-bottom: 24px;
  border: 1px solid #d7e3ff;
  border-radius: 6px;
  padding: 12px 10px;
  width: 90px;
  height: 44px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`,Ii=x.div``,Xt=x.div`
  position: relative;
  display: inline-block;
`,Vt=x.svg`
  position: absolute;
  top: 10px;
  right: 6px;
  pointer-events: none;
`;function vn({onChange:e,value:t}){const n=Array.from(new Array(24),(u,h)=>h),o=[0,5,10,15,20,25,30,35,40,45,50,55],r=new Date(t);let c=r.getHours(),d=r.getMinutes();const f=o.reduce((u,h)=>h>=d&&(u===null||Math.abs(h-d)<Math.abs(u-d))?h:u,null);return f===null?(c=(c+1)%24,d=0):d=f,a.jsxs(Ii,{id:"selectTimeWrapper",children:[a.jsxs(Xt,{children:[a.jsx(Ht,{onChange:u=>e(u,"hour"),value:c,children:n.map(u=>a.jsx("option",{value:u,children:u.toString().padStart(2,"0")},u))}),a.jsx(Vt,{width:"24",height:"24",children:a.jsx("use",{href:`${ve}#icon-arrow`})})]}),":",a.jsxs(Xt,{children:[a.jsx(Ht,{onChange:u=>e(u,"minute"),value:d,children:o.map(u=>a.jsx("option",{value:u,children:u.toString().padStart(2,"0")},u))}),a.jsx(Vt,{width:"24",height:"24",children:a.jsx("use",{href:`${ve}#icon-arrow`})})]})]})}const Pi=x.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  overflow: scroll;
`,Bi=x.div`
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
`,Fi=x.button`
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
`,_i=x.h2`
  font-weight: 500;
  font-size: 26px;
  line-height: 123%;
  color: #2f2f2f;
  margin-bottom: 24px;
`,Ut=x.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  color: #2f2f2f;
  margin-bottom: 16px;
`,$t=x.p`
  font-size: 16px;
  line-height: 125%;
  color: #2f2f2f;
  margin-bottom: 12px;
`,qt=x.button`
  box-shadow: 0 2px 4px 0 rgba(64, 123, 255, 0.2);
  background-color: #fff;
  border: 1px solid #9ebbff;
  border-radius: 30px;
  padding: 0px;
  width: 44px;
  height: 44px;
  cursor: pointer;
`,Yt=x.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 133%;
  color: #407bff;
  text-align: center;
`,Hi=x.input`
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
`,Xi=x.input`
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
`,Vi=x.button`
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
`,Ui=x.div`
  background-color: #d7e3ff;
  border-radius: 40px;
  padding: 6px 10px;
  height: 36px;
`,$i=x.div`
  display: flex;
  width: 194px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`,qi=x.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
  }
`;yn.setAppElement("#root");function wn({isOpen:e,onClose:t,onAddWater:n}){const[o,r]=I.useState(0),[c,d]=I.useState(!1),[f,u]=I.useState(0),h=Ve(),[A,g]=I.useState(new Date),M=(_,y="")=>{let P=new Date(A);switch(y){case"hour":P.setHours(parseInt(_.target.value,10));break;case"minute":P.setMinutes(Math.ceil(parseInt(_.target.value,10)/5)*5);break}g(P)},S=()=>{h(In({amount:o,date:Date(A)}))},B=()=>{t()},j=()=>{r(o+50),u(o+50)},$=()=>{if(o-50<0){r(0),u(0);return}r(o-50),u(o-50)},T=()=>{r(f)},J=_=>{const y=parseInt(_.target.value>0?_.target.value:0,10);u(y)},G=_=>{_.target.closest("#selectTimeWrapper")||(d(!1),_.target===_.currentTarget&&B())},pe=_=>{_.key==="Escape"&&B()};I.useEffect(()=>(window.addEventListener("keydown",pe),()=>{window.removeEventListener("keydown",pe)}),[]);const Z=_=>{const y=new Date(_),P=re=>re.toString().padStart(2,"0");return`${P(y.getHours())}:${P(y.getMinutes())}`};return tn.createPortal(a.jsx(Pi,{onClick:G,children:a.jsxs(Bi,{children:[a.jsx(Fi,{onClick:B,children:a.jsx("svg",{width:"24",height:"24",children:a.jsx("use",{href:`${ve}#icon-close`})})}),a.jsx(_i,{children:"Add water"}),a.jsx(Ut,{children:"Choose a value:"}),a.jsx($t,{children:"Amount of water:"}),a.jsxs($i,{children:[a.jsx(qt,{onClick:$,children:a.jsx("svg",{width:"44",height:"44",children:a.jsx("use",{href:`${ve}#icon-minus`})})}),a.jsx(Ui,{children:a.jsxs(Yt,{children:[o,"ml"]})}),a.jsx(qt,{onClick:j,children:a.jsx("svg",{width:"44",height:"44",children:a.jsx("use",{href:`${ve}#icon-plus`})})})]}),a.jsx($t,{children:"Recording time:"}),c?a.jsx(vn,{onChange:M,value:A}):a.jsx(Hi,{type:"text","aria-label":"Choose time",value:Z(A),onChange:()=>{},onFocus:()=>d(!0)}),a.jsx(Ut,{children:"Enter the value of the water used:"}),a.jsx(Xi,{value:f,onBlur:T,onChange:J,type:"number"}),a.jsxs(qi,{children:[a.jsxs(Yt,{children:[o,"ml"]}),a.jsx(Vi,{onClick:S,type:"button",children:"Save"})]})]})}),document.getElementById("modal-root"))}const Yi=x.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  overflow: scroll;
`,Gi=x.div`
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
`,Ki=x.button`
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
`,Qi=x.h2`
  font-weight: 500;
  font-size: 26px;
  line-height: 123%;
  color: #2f2f2f;
  margin-bottom: 24px;
`,Gt=x.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  color: #2f2f2f;
  margin-bottom: 16px;
`,Kt=x.p`
  font-size: 16px;
  line-height: 125%;
  color: #2f2f2f;
  margin-bottom: 12px;
`,Qt=x.button`
  box-shadow: 0 2px 4px 0 rgba(64, 123, 255, 0.2);
  background-color: #fff;
  border: 1px solid #9ebbff;
  border-radius: 30px;
  padding: 0px;
  width: 44px;
  height: 44px;
  cursor: pointer;
`,Jt=x.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 133%;
  color: #407bff;
  text-align: center;
`,Ji=x.input`
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
`,Zi=x.input`
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
`,ea=x.button`
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
`,ta=x.div`
  background-color: #d7e3ff;
  border-radius: 40px;
  padding: 6px 10px;
  height: 36px;
`,na=x.div`
  display: flex;
  width: 194px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`,oa=x.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
  }
`,ia=x.div`
  display: flex;
  gap: 14px;
  align-items: center;
  margin-bottom: 24px;
  border-radius: 10px;
  padding: 8px 24px;
  width: 256px;
  background-color: #ecf2ff;
`,aa=x.p`
  font-size: 18px;
  line-height: 133%;
  color: #407bff;
`,ra=x.p`
  font-size: 16px;
  line-height: 125%;
  color: #2f2f2f;
`;yn.setAppElement("#root");function sa({isOpen:e,onClose:t,onAddWater:n}){const o=Je(Kn)||{amount:250,date:new Date},[r,c]=I.useState(o.amount),[d,f]=I.useState(!1),[u,h]=I.useState(0),A=Ve(),[g,M]=I.useState(o.date),S=(y,P="")=>{let re=new Date(g);switch(P){case"hour":re.setHours(parseInt(y.target.value,10));break;case"minute":re.setMinutes(Math.ceil(parseInt(y.target.value,10)/5)*5);break}M(re)},B=()=>{A(Pn({amount:r,date:Date(g)}))},j=()=>{t()},$=()=>{c(r+50),h(r+50)},T=()=>{if(r-50<0){c(0),h(0);return}c(r-50),h(r-50)},J=()=>{c(u)},G=y=>{const P=parseInt(y.target.value>0?y.target.value:0,10);h(P)},pe=y=>{y.target.closest("#selectTimeWrapper")||(f(!1),y.target===y.currentTarget&&j())},Z=y=>{y.key==="Escape"&&j()};I.useEffect(()=>(window.addEventListener("keydown",Z),()=>{window.removeEventListener("keydown",Z)}),[]);const _=y=>{const P=new Date(y),re=De=>De.toString().padStart(2,"0");return`${re(P.getHours())}:${re(P.getMinutes())}`};return tn.createPortal(a.jsx(Yi,{onClick:pe,children:a.jsxs(Gi,{children:[a.jsx(Ki,{onClick:j,children:a.jsx("svg",{width:"24",height:"24",children:a.jsx("use",{href:`${ve}#icon-close`})})}),a.jsx(Qi,{children:"Edit the entered amount of water"}),a.jsxs(ia,{children:[" ",a.jsx("svg",{width:"36",height:"36",children:a.jsx("use",{href:`${ve}#icon-glass`})}),a.jsxs(aa,{children:[o.amount,"ml"]}),a.jsx(ra,{children:_(o.time)})]}),a.jsx(Gt,{children:"Correct entered data:"}),a.jsx(Kt,{children:"Amount of water:"}),a.jsxs(na,{children:[a.jsx(Qt,{onClick:T,children:a.jsx("svg",{width:"44",height:"44",children:a.jsx("use",{href:`${ve}#icon-minus`})})}),a.jsx(ta,{children:a.jsxs(Jt,{children:[r,"ml"]})}),a.jsx(Qt,{onClick:$,children:a.jsx("svg",{width:"44",height:"44",children:a.jsx("use",{href:`${ve}#icon-plus`})})})]}),a.jsx(Kt,{children:"Recording time:"}),d?a.jsx(vn,{onChange:S,value:g}):a.jsx(Ji,{type:"text","aria-label":"Choose time",value:_(g),onChange:()=>{},onFocus:()=>f(!0)}),a.jsx(Gt,{children:"Enter the value of the water used:"}),a.jsx(Zi,{value:u,onBlur:J,onChange:G,type:"number"}),a.jsxs(oa,{children:[a.jsxs(Jt,{children:[r,"ml"]}),a.jsx(ea,{onClick:B,type:"button",children:"Save"})]})]})}),document.getElementById("modal-root"))}const la=x.div`
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
`,ca=x.div`
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
`,pa=x.div`
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
`,fa=x.button`
  width: 24px;
  height: 24px;
  background-color: transparent;
  padding: 0;
`,da=x.svg`
  width: 100%;
  height: 100%;
  stroke: ${({theme:e})=>e.color.primaryAccent};

  &:hover,
  &:focus {
    stroke: ${({theme:e})=>e.color.secondaryYellow};
  }
`,kn=({onShow:e,children:t,title:n,onClose:o})=>{const r=document.querySelector("#modal-root");if(I.useEffect(()=>{const d=f=>{f.code==="Escape"&&o()};return e&&(document.body.style.overflow="hidden",window.addEventListener("keydown",d)),()=>{document.body.style.overflow="auto",window.removeEventListener("keydown",d)}},[e,o]),!e)return null;const c=a.jsx(la,{onClick:o,children:a.jsxs(ca,{onClick:d=>d.stopPropagation(),children:[a.jsxs(pa,{children:[a.jsx("h2",{children:n}),a.jsx(fa,{onClick:o,children:a.jsx(da,{children:a.jsx("use",{href:`${dt}#icon-Vector`})})})]}),t]})});return en.createPortal(c,r)};kn.propTypes={onClose:Ke.func.isRequired,children:Ke.node.isRequired,onShow:Ke.bool.isRequired,title:Ke.string.isRequired};const ma=x.div`
  padding: 0 24px 32px;
`,ua=x.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    flex-direction: row-reverse;
  }
`,Zt=x.button`
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
`,xa=x.p`
  font-size: 18px;
  color: ${({theme:e})=>e.color.primaryBlack};
  line-height: 20px;
  font-weight: 500;

  margin-bottom: 24px;
`,ha=({onClose:e,onShow:t,waterId:n})=>{const o=Ve(),r=()=>{o(Bn(n)),e()};return a.jsx(kn,{onClose:e,onShow:t,title:"Delete Entry",children:a.jsxs(ma,{children:[a.jsx(xa,{children:"Are you sure you want to delete the entry?"}),a.jsxs(ua,{children:[a.jsx(Zt,{onClick:r,children:"Delete"}),a.jsx(Zt,{onClick:e,children:"Cancel"})]})]})})},ga=x.ul`
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
`,ba=x.li`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: space-between;
`,ya=x.div`
  display: flex;
  align-items: center;
`,va=x.p`
  color: #407bff;
  font-size: 18px;
  line-height: 24px;
  margin-left: 12px;
`,wa=x.p`
  margin-left: 12px;
  line-height: 24px;
  font-size: 12px;
  color: #2f2f2f;

  @media screen and (min-width: 768px) {
    margin-left: 16px;
  }
`,ka=x.h2`
  margin-bottom: 16px;
  color: #2f2f2f;
  font-weight: 500px;
  font-size: 24px;
  line-height: 30px;

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 32px;
  }
`,Aa=x.button`
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
`,Na=x.button`
  margin-right: 18px;
  background-color: transparent;
`,Ca=x.button`
  background-color: transparent;
`,Sa=[{id:"1",amount:"250ml",time:"14:00 PM"},{id:"2",amount:"250ml",time:"14:00 PM"},{id:"3",amount:"250ml",time:"14:00 PM"},{id:"4",amount:"250ml",time:"14:00 PM"},{id:"5",amount:"250ml",time:"14:00 PM"},{id:"6",amount:"250ml",time:"14:00 PM"}],za=()=>{const[e,t]=I.useState(Sa),[n,o]=I.useState(!1),[r,c]=I.useState(!1),[d,f]=I.useState(!1),u=Je(Gn);console.log(u);const h=()=>{o(!1)},A=()=>{o(!0)},g=()=>{c(!1)},M=()=>{c(!0)},S=()=>{f(!1)},B=j=>{t($=>$.filter(T=>T.id!==j))};return a.jsxs("div",{children:[a.jsxs("div",{children:[a.jsx(ka,{children:"Today"}),a.jsx(ga,{children:e.length>0&&e.map(({id:j,amount:$,time:T})=>a.jsxs(a.Fragment,{children:[a.jsxs(ba,{children:[a.jsxs(ya,{children:[a.jsx("img",{src:No,alt:"Icon glass"}),a.jsx(va,{children:$}),a.jsx(wa,{children:T})]}),a.jsxs("div",{children:[a.jsx(Na,{type:"button",onClick:M,children:a.jsx("img",{src:Co,alt:"Icon glass"})}),a.jsx(Ca,{type:"button",onClick:()=>B(j),children:a.jsx("img",{src:So,alt:"Icon glass"})}),n&&a.jsx(ha,{isOpen:d,onClose:S})]})]},j),r&&a.jsx(sa,{isOpen:r,onClose:g})]}))})]}),a.jsxs(Aa,{type:"button",onClick:A,children:[a.jsx(Ao,{})," Add Water"]}),n&&a.jsx(wn,{isOpen:n,onClose:h})]})},Ma=za;function Ea(e){return sn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"16"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"16",y2:"12"},child:[]}]})(e)}const Oa=x.div`
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
`,ja=x.div`
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
`,Ta=x.input`
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
`,Wa=x.div`
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
`,La=x.button`
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
`,Ra=()=>{const[e,t]=I.useState(!1),n=()=>{t(!1)},o=95,r=()=>{t(!0)};return a.jsxs(Oa,{children:[a.jsxs(ja,{children:[a.jsx("h2",{children:"Today"}),a.jsx(Ta,{value:o,type:"range",min:"0",max:"100"}),a.jsxs(Wa,{children:[a.jsx("p",{children:"0%"}),a.jsx("p",{children:"50%"}),a.jsx("p",{children:"100%"})]})]}),a.jsxs(La,{onClick:r,type:"button",children:[a.jsx(Ea,{}),"Add Water"]}),e&&a.jsx(wn,{isOpen:e,onClose:n})]})},Da=Ra,Ia="/goit-group2-react-nodejs/assets/bottleHomeScreenDesk-630fd92f.png",Pa="/goit-group2-react-nodejs/assets/bottleHomeScreenDesk2x@2x-51f4e9e6.png",Ba="/goit-group2-react-nodejs/assets/bottleHomeScreenTab-2759a74b.png",Fa="/goit-group2-react-nodejs/assets/bottleHomeScreenTab@2x-805003a0.png",_a="/goit-group2-react-nodejs/assets/bottleHomeScreenMob-fe8938bc.png",Ha="/goit-group2-react-nodejs/assets/bottleHomeScreenMob2x@2x-9640a1cb.png",Xa="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAUwCAMAAAAFI3xKAAAA21BMVEUAAADH1/+fvP+vyf/H2P/H2P+euf/I1v/G1//F3P/G1//H1v/H1/+fu/+duv+fvP/H2P+fvP+gvP+euv+fu//F1v/H1/+eu//Fz//H1//G1v/F0f/H1/+fvP+fuv/I1//F2P+fvP/H1//H1//H1f/H2f/H1//H2P+eu/+euv/w9P/t7//t8v+euv/t8v+fvP/v8/+cuv/H2f/s8f/s8v/t8//v8//G2P+fuv/J2P/v9P/s8//t8//t8//u8//t8f+eu//J2P/t8//r8f/s8//u8//r8//G1//s8v/T/+bSAAAAR3RSTlMAsrILbyAWpy0W35x9hSynWZybQ2RDv1kQkE4Wn29vP++QX2RYN4abTjcfEN9C73o/IYXfv48vz5ybb7+ff19/e0LPz69PQNkZ8PsAAAouSURBVHja7NuxkoMgEAbg/QeZlcHChuK0JGqfLmXe/6UuelfkJgEJNFf8X6flDi7usggVMSEOXgH4dZis0EfMtOKPreuFSs1R8WoLQiXMRbHzMVizP9slfmG3zUKneo8HHZ08c+F4fRE6Mf2Ez8iL4LkIz0U8RCNvjYzgmQ6ABkmxHtiEkkYANytpzgNC2fg5yXGeAUyaAaiTPOeFEjyASc6wqst9wJ1QrdkfCZBaFuBdqJoHbkLVFmbA9hqEGbCBAl9C1SyAKFQtAFiEmtpYPPVoMHAPaXMF+1QM4AcYwP/myhzYXoiw09fYi+HkQYPAXkIbB0CF6nmWIm0iuwltegBqhKpdOXzVvg8rJ4cat5FVqFpfNkHJtmvSgIJyZObfYpLxANTm48fprAyrZ2vQcj4w6458HpyUbcO8e+46wzwAPD0+sSh23Zy6PjKwWslzHodukWd9VPCiSJkRv9Zx6Z1zdpkGxeHGfk0J1+EtHfn5frNvBykIw0AUhgd0oeiiGzceoYYSSOui2gq1ytz/RLrSUrOYNLj7vyM8XpgwIeYIiS/T6rDfTdPjt+sC282xKPbrdXHgwRMAAAAAgDl/q4PqfexLQbpzrR8NESZrdSqcBUluOtMLcvLTig4m8PornARWQSM6gdFDYyoqaHXVKC+wCRrVCExOGjcKTEqNc4KsAAdB1hG+CGwcQ+Qv15iHwMYzQzLV+sY+ZjlPATO1OlexlE7SsQ7M1FY64ehfsvL6rV/HJmuJsh8H54bmSXwAAAAA8GIPDgQAAAAAgPxfG0FVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWG/7lIQhIIwgM56TERIe1CrBylm/ysKIsL7eJV6OmcJw/x883NNcwr26ocuM9dbsMdpzI9zE9Rb86u7BLXuuXG2CWs1WbgGdaYstEGdIUtm+GABnREF/K8lS0GdPgtzUKnNrWdwpAXH4EgSnIWYPfo23zpvyF6PcZ6XSfsBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvduwltWEgCAJoG2QQg9aDFAQSuoSP0Pe/USAQ8pvFKI6DF+8doTbdVQAAAAAAT2oe1pK512UMzpunPd9VEZ42lvxsCk4Z9/xqDU647vndEvQr+dNL0OvIhjIHnUq2HEGfLZtq0GfKpj3oc8m2a9ClZtsWCPA/rNmmEXcaHJGHvDGXoNPNI/2IKhd0q27wfa5vbdikek+C8vvLBPchOOv4iLBqwb+yLbWU2zpYUgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADglV27120UiKIAfK8Ya0C4oKEwlI7t3t2W+/4vtZE3xUYxGCJtEen7GvqjM3d+BAAAAAAAAAAAAAAAAD9dd2jbQxN8RzMdaz6cShvs1LzVzOyPpVxPmXkbgz0uNfM6NR9hjtfMMgebDZmnNv7R9nk7BBuVzPPXTKsEt/fvLb6YslrFm4yP/J4leHOi2WDus8RT53wLXhqydvFUU6sKvtZnWcxWBTdNwC5isYLBC8e8xqJ7utS90ucQi6acglVN5iUWXbIEqw65tkq7vAarWgH+zwa2AnylyxzXZuAxWFfzHIvOOQTr7tnHolNegnXTyhCcM12GX2lyeaMojoEblMUKzukmt0FXFx5Om14Bt07B4/Nq1i7Y4J5ZmmdL+3ewRXPKvM3xyXxKr6m7Eswyf/pPQX67DPnuOB7iXTeWmvnLBrxLV/Kh9n8/gxP0/gj7/HAV3/c07TgO00V6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8Ic9O0htGAaiAKqADUV4bZQgSPAlfIS5/43aTWnTaiFbkE3eO8LwJc2MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOC9lKmueb1MH4kT5jW+7VviqCl+qyVxSI1neU4ccI2/sgwesMV/10S3HA33RHcAW9ZEpz2a3IKdSrTpBjvdo21JdNmirSYU8BVu8UUneN7sERmUo8k43GuJlj3RqTyc4DGLSW7QGmEhOKLkePbwMXJMqfI3aMs/8VssYs641T0i8mVSPgAAAAAAAACAT/bgQAAAAAAAyP+1EVRVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVdi1Y9XYYSAKw8MRqJOEbYEqG9TZxbJsd8u8/1Pd3RACCZHkbAik+L92u8NoZ0YWAAAAAOAvc7djWY7oDE+IedKbukXD9yxBr6Yp6WG+GM6LVVLKh7c7F/cgafaGk4qk8OHU+lVSMZzhVintdvc5wivt5IzaOK5FqoahLFVnX7lIm2GgSLMzayW4G7q8lHynOhO9uG+VLtZWFQz9ApytI0osJcMC7An0kR4nzda1KDEMth3DQcUlHYaWrGE8QdnQEiQ3ypg+3DFJNrDon6FF43QWyUCAv0RKBPgT07iJFP4DO+p4U3uhC3fk8X3VxBzYsWhUXzexifQXNd1Gtw3swh0vg2XYc6vfF9UvwZX7wIEg1U6+FOCIT1Ju/jhJfBMZ2CWVVn68TjhhlVQa+TEDnuCqpKu3z44kVUaYE9xV0rzbBzFICuR3TtHdvMX3SJcgcX6/wU96SGErJW9VDzMD4BMvVB94ofocX4LeTJnqe46P8VhutA4AAAAAAAAAAAAAAAAAAAAAAAAAAID/7dlNi+JAFIXhOycaREyKJOLHYKL2ShcS3M2yd/n//2jSjAwq+agkNPTifXbi7nDqVnkFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAIEFWJE5y5+IWGIaKS31JEqdaERqGCNaSoiy0WhDnibSmhQPc3xPLEqWU0NvdKY3tRZgrvRu8hE7nwN5t6aCnMFEamDUlyBz0kbdVLdfa0CuUbtYocOIQexXQWmypoG8B2yromIJ9MinoaGdm6PapqCNdznCvc1dGoc6GbtLF2umPoZuUdX5rIMBv5bS1ViFHuFei0lrFigzdcjn7wq/hkTIp7qhnbOgWOEXt4aaGPuv2CibaGvqE7rE4ZSc90lYqrMFVuhg8RGo6qrFTafARJlIZ2quL+EtkUILp7aV+kXRmAHoLcknp5f74lEWScvo3RJao5qKyKBPV0qthmCzSf9GF+o0QXrdFEX2uLww/AAAAAAAAAACAH23+sVqtZkfDGLvZpvrndJgbhvp9qp4Q4VD76tWSBAc5VO9OC4O3VVWjg6MtqiYbg6dl1Yj3jKdjVVHBaTdIC6bglBNcmxk87Ko2B8P4EVj7ZfALkFtkigUBftcM3Bsm3cIfBh973oHTHHnFTLShgNPMT1wh08ya9oE7g7cV+9SJZm+neEN+A82fl1on9jAjLA7LR/tmjL+RdsfjcUF6AAAAAAAAAAA8+QuvE3xjFcspUAAAAABJRU5ErkJggg==",Va="/goit-group2-react-nodejs/assets/backgroundElementHomeScreenTab-4de5d48f.png",Ua=x.div`
  background-size: cover;
  background: url(${Xa});
  height: max-content;
  background-repeat: no-repeat;
  min-height: calc(100% - 64px);

  @media screen and (min-width: 768px) {
    background: url(${Va});
    min-height: calc(100% - 80px);
  }

  @media screen and (min-width: 1440px) {
    background: url(${Fn});
    min-height: calc(100% - 72px);
  }
`,$a=x.div`
  margin-bottom: 40px;
  margin-top: 20px;
  background-size: 280px 208px;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${_a});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 440px;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${Ha});
  }

  @media screen and (min-width: 768px) {
    background-size: 518px 386px;
    background-position: calc(50% + 9px) 8px;
    height: 492px;
    background-image: url(${Ba});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background: url(${Fa});
      background-size: 518px 386px;
      background-repeat: no-repeat;
    }
  }

  @media screen and (min-width: 1440px) {
    background-size: 738px 548px;
    background-position: calc(50% + 10px) 46px;
    height: 680px;
    background-image: url(${Ia});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${Pa});
    }
  }
`,qa=x.div`
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
`,Ya=x.div`
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
`;function Qa(){return a.jsx(Ua,{children:a.jsxs(qa,{children:[a.jsxs($a,{children:[a.jsx(Yn,{}),a.jsx(Da,{})]}),a.jsxs(Ya,{children:[a.jsx(Ma,{}),a.jsx(xo,{})]})]})})}export{Qa as default};
