import{n as e,j as n,u as p,s as a}from"./index-bc91b970.js";import{b as c}from"./bg_element_des@1x-1805b66c.js";import{b as l}from"./bg_element_des@2x-cb13cb99.js";const g=e.h3`
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 12px;
`,x=e.li`
  font-size: 16px;
  line-height: 20px;

  margin-bottom: 16px;
  position: relative;
  padding-left: 16px;

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    background-color: ${({theme:i})=>i.color.primaryAccent};
    border-radius: 50%;
  }

  @media screen and (min-width: ${({theme:i})=>i.breakpoint.tablet}) {
    /* list-style-position: inside; */
    list-style-position: outside;
  }
`,m=e.div`
  display: inline-block;
  margin: 0;
`,h=e.div`
  display: inline-block;
  

  width: 280px;

  padding: 24px 16px;
  background-color: ${({theme:i})=>i.color.secondaryWhite};
  box-shadow: ${({theme:i})=>i.boxShadowforButton.hoverButton};
  border-radius: 10px;

  @media screen and (min-width: ${({theme:i})=>i.breakpoint.tablet}) {
    padding: 32px 24px;
    width: auto;
    list-style-position: inside;
  }
`,b=e.ul`
  list-style-type: none;
  padding-left: 0;
`,u=()=>{const i=["Supply of nutrients to all organs","Providing oxygen to the lungs","Maintaining the work of the heart","Release of processed substances","Ensuring the stability of the internal environment","Maintaining within the normal temperature","Maintaining an immune system capable of resisting disease"];return n.jsx(m,{children:n.jsxs(h,{children:[n.jsx(g,{children:"Why drink water"}),n.jsx(b,{children:i.map((t,o)=>n.jsx(x,{children:t},o))})]})})},k=e.div`
  display: inline-block;
  max-width: 280px;
  margin: auto;

  @media only screen and (min-width: ${({theme:i})=>i.breakpoint.tablet}) {
    max-width: 100%;
    margin: 0;
  }

  @media only screen and (min-width: ${({theme:i})=>i.breakpoint.desktop}) {
    min-width: 439px;
  }
`,w=e.h2`
  font-size: 28px;
  font-weight: 700;
  line-height: 32px;
  vertical-align: top;
  margin-bottom: 16px;
  @media only screen and (min-width: ${({theme:i})=>i.breakpoint.tablet}) {
    font-size: 36px;
    line-height: 42px;
  }
`,f=e.h3`
  font-size: 24px;
  font-weight: 400;
  line-height: 30px;
  margin-bottom: 24px;
  @media only screen and (min-width: ${({theme:i})=>i.breakpoint.tablet}) {
    font-size: 26px;
    line-height: 32px;
  }
`,$=e.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  margin-bottom: 12px;
`,y=e.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 16px;

  line-height: 20px;
  margin-bottom: 24px;

  @media only screen and (min-width: ${({theme:i})=>i.breakpoint.tablet}) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media only screen and (min-width: ${({theme:i})=>i.breakpoint.desktop}) {
    flex-direction: column;
    justify-content: center;
  }
`,j=e.li`
  display: flex;
  gap: 8px;
  align-items: center;
`,v=e.svg`
  width: 32px;
  height: 32px;
  @media only screen and (min-width: ${({theme:i})=>i.breakpoint.tablet}) {
    width: 40px;
    height: 40px;
  }
`,z=e.button`
  width: 100%;
  padding: 8px 30px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  height: 36px;
  border-radius: 10px;
  border: none;
  color: ${({theme:i})=>i.color.primaryWhite};
  background-color: ${({theme:i})=>i.color.primaryAccent};
  box-shadow: ${({theme:i})=>i.boxShadowforButton.normalButton};
  transition: background-color ${({theme:i})=>i.transition.main};

  &:hover, &:focus  {
    box-shadow: ${({theme:i})=>i.boxShadowforButton.hoverButton};
  }
  &:active {
    box-shadow: ${({theme:i})=>i.boxShadowforButton.activeButton};
  }
  @media only screen and (min-width: ${({theme:i})=>i.breakpoint.tablet}) {
    width: 336px;
    height: 44px;
    padding: 10px 30px;
    font-size: 18px;
    line-height: 24px;
  }
  @media only screen and (min-width: ${({theme:i})=>i.breakpoint.desktop}) {
    width: 384px;
  }
`,_=()=>{const i=p(),t=()=>{i("/signup")},o=[{text:"Habit drive",id:`${a}#icon-calendar-days`},{text:"View statistics",id:`${a}#icon-presentation-chart-bar`},{text:"Personal rate setting",id:`${a}#icon-wrench-screwdriver`}];return n.jsxs(k,{children:[n.jsx(w,{children:"Water consumption tracker"}),n.jsx(f,{children:"Record daily water intake and track"}),n.jsx($,{children:"Tracker Benefits"}),n.jsx(y,{children:o.map(({id:r,text:d},s)=>n.jsxs(j,{children:[n.jsx(v,{children:n.jsx("use",{href:r})}),d]},s))}),n.jsx(z,{type:"button",onClick:t,children:"Try tracker"})]})},B=e.div`
display: flex;
margin: auto;
flex-direction: column;
width: 280px;
gap: 40px;
padding: 0;

  @media only screen and (min-width: 768px) {
    margin: auto;
    gap: 60px;
    width: 704px;
  }
  @media only screen and (min-width: 1440px) {
    padding-top: 30px;
    flex-direction: row;
    align-items: flex-end;
    gap: 81px;
    width: 1014px;

  }
`,W=()=>n.jsxs(B,{children:[n.jsx(_,{}),n.jsx(u,{})]}),T="/goit-group2-react-nodejs/assets/bg_img_mob@1x-c5c3006f.png",C="/goit-group2-react-nodejs/assets/bg_img_mob@2x-cab432e7.png",S="/goit-group2-react-nodejs/assets/bg_img_tab@1x-ae218387.png",M="/goit-group2-react-nodejs/assets/bg_img_tab@2x-6c4f8ac4.png",D="/goit-group2-react-nodejs/assets/bg_img_des@1x-b6cc26cc.png",I="/goit-group2-react-nodejs/assets/bg_img_des@2x-168beeb7.png",L=e.div`
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 100%;
  min-height: 100vh;
  background-image: url(${T});

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${C});
  }

  @media screen and (min-width: ${({theme:i})=>i.breakpoint.tablet}) {
    background-image: url(${S});
  }

  @media screen and (min-width: ${({theme:i})=>i.breakpoint.tablet}) and (min-device-pixel-ratio: 2) and (min-resolution: 192dpi) and (min-resolution: 2dppx) {
    background-image: url(${M});
  }

  @media screen and (min-width: ${({theme:i})=>i.breakpoint.desktop}) {
    background-image: url(${D});
  }

  @media screen and (min-width: ${({theme:i})=>i.breakpoint.desktop}) and (min-device-pixel-ratio: 2) and (min-resolution: 192dpi) and (min-resolution: 2dppx) {
    background-image: url(${I});
  }
`,R=e.section`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  padding-top: 24px;
  padding-bottom: 40px;
  @media screen and (min-width: ${({theme:i})=>i.breakpoint.tablet}) {
    padding-top: 40px;
    padding-bottom: 50px;
  }
  @media screen and (min-width: ${({theme:i})=>i.breakpoint.desktop}) {
    padding-top: 50px;
    padding-bottom: 109px;
    background-image: url(${c});
  }

  @media screen and (min-width: ${({theme:i})=>i.breakpoint.desktop}) and (min-device-pixel-ratio: 2) and (min-resolution: 192dpi) and (min-resolution: 2dppx) {
    background-image: url(${l});
    /* height: 582px; */
  }
`;function P(){return n.jsx(L,{children:n.jsx(R,{children:n.jsx(W,{})})})}export{P as default};
