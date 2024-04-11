import{n as i,E as o,G as n,H as t,I as a,j as A,T as r}from"./index-1938c307.js";import{b as d}from"./bg_element_des@1x-1805b66c.js";import{b as s}from"./bg_element_des@2x-cb13cb99.js";const p="/goit-group2-react-nodejs/assets/bg_bottle_signin_mob@1x-fad615a5.png",l="/goit-group2-react-nodejs/assets/bg_bottle_signin_mob@2x-ada1b009.png",c="/goit-group2-react-nodejs/assets/bg_signin_des@1x-7ec0cc57.png",g="/goit-group2-react-nodejs/assets/bg_signin_des@2x-f16bac49.png",k=i.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* gap: 66px; */
  align-items: center;
  margin: 0 auto;
  padding-right: 20px;
  padding-left: 20px;
  position: relative;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 768px;
    padding-right: 32px;
    padding-left: 32px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    gap: 0;
    flex-direction: row-reverse;
    align-items: center;
    width: 1440px;
    height: 582px;
    padding-right: 120px;
    padding-left: 120px;
  }
`,w=i.div`
  @media screen and (max-width: ${({theme:e})=>`calc(${e.breakpoint.tablet} - 1px)`}) {
    order: 2;
    background-image: url(${p});
    background-size: contain;
    background-repeat: no-repeat;
    width: 280px;
    height: 210px;
    background-position: center;
  }

  @media screen and (max-width: ${({theme:e})=>e.breakpoint.tablet}) and (min-device-pixel-ratio: 2) and (min-resolution: 192dpi) and (min-resolution: 2dppx) {
    background-image: url(${l});
  }
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    position: relative;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    order: 1;
    width: 916px;
    min-height: 680px;
    background-image: url(${c});
    top: 50px;
    left: -130px;
  }
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) and (min-device-pixel-ratio: 2) and (min-resolution: 192dpi) and (min-resolution: 2dppx) {
    background-image: url(${g});
  }
`,y=i.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 280px;
  min-height: 304px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    position: absolute;
    /* top: 104px; */
    left: 30px;
    z-index: 1;
    min-width: 336px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    position: static;
    min-width: 384px;
    min-height: 312px;
    /* padding-right: 104px; */
    flex-grow: 1;
  }
`,B=i.h2`
  font-size: 26px;
  line-height: 32px;
  font-weight: 500;
  color: ${({theme:e})=>e.color.primaryBlack};
`,G=i(o)`
  display: flex;
  flex-direction: column;
  gap: 16px;

  .button-disabled {
    background-color: ${({theme:e})=>e.color.secondaryLightBlue};
    cursor: not-allowed;
  }
`,N=i.label`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  gap: 8px;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  color: ${({theme:e})=>e.color.primaryBlack};
  .input-with-error {
    border-color: ${({theme:e})=>e.color.secondaryRed};
    color: ${({theme:e})=>e.color.secondaryRed};
  }
`,j=i(n)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  /* height: 44px; */
  font-size: 16px;
  line-height: 20px;
  border-radius: 6px;
  border: 1px solid ${({theme:e})=>e.color.secondaryPowderBlue};
  padding: 12px 10px;
  color: ${({theme:e})=>e.color.primaryAccent};
  &::placeholder {
    color: ${({theme:e})=>e.color.secondaryLightBlue};
  }
  &:focus-within {
    outline: none;
  }
`,z=i.button`
  display: flex;
  gap: 15px;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  padding: 8px 30px;
  border-radius: 10px;

  color: ${({theme:e})=>e.color.primaryWhite};
  background-color: ${({theme:e})=>e.color.primaryAccent};
  box-shadow: ${({theme:e})=>e.boxShadowforButton.normalButton};
  transition: background-color ${({theme:e})=>e.transition.main};

  &:hover,
  &:focus {
    box-shadow: ${({theme:e})=>e.boxShadowforButton.hoverButton};
  }
  &:active {
    box-shadow: ${({theme:e})=>e.boxShadowforButton.activeButton};
  }
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 18px;
    line-height: 24px;
    padding: 10px 30px;
  }
`,D=i(t)`
  font-size: 14px;
  line-height: 18px;
  color: ${({theme:e})=>e.color.secondaryRed};
`,E=i.svg`
  position: absolute;
  right: 10px;
  top: 46px;
  width: 16px;
  height: 16px;
  border: 1px;
  fill: transparent;
  stroke: ${({theme:e})=>e.color.primaryAccent};
`,R=i(a)`
  font-size: 16px;
  line-height: 20px;
  color: ${({theme:e})=>e.color.primaryAccent};
  transition: color ${({theme:e})=>e.transition.main};
  &:hover {
    color: ${({theme:e})=>e.color.secondaryYellow};
  }
`,V=()=>A.jsx("div",{children:A.jsx(r,{color:"#ecf2ff",height:20,width:20})}),x="data:image/png;base64,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",b="/goit-group2-react-nodejs/assets/bg_element_signin_mob@2x-043867ba.png",m="/goit-group2-react-nodejs/assets/bg_signin_tab@1x-d482f6d9.png",h="/goit-group2-react-nodejs/assets/bg_signin_tab@2x-e0b65432.png",T=i.section`
  padding: 24px 0 40px;

  background-position: center right;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 100vh;
  background-image: url(${x});
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${b});
  }
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    padding: 40px 0 50px;
    background-image: url(${m});
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) and (min-device-pixel-ratio: 2) and (min-resolution: 192dpi) and (min-resolution: 2dppx) {
    padding: 50px 0 109px;
    background-image: url(${h});
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    background-image: url(${d});
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) and (min-device-pixel-ratio: 2) and (min-resolution: 192dpi) and (min-resolution: 2dppx) {
    background-image: url(${s});
  }
`;export{w as B,D as E,y as F,k as S,B as a,G as b,N as c,j as d,E as e,z as f,V as g,R as h,T as i};
