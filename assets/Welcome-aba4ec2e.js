import{n as t,j as n,u as d,s,a as c,b as l,r as g,c as x,d as m}from"./index-a089f699.js";import{b as h}from"./bg_element_des@1x-1805b66c.js";import{b}from"./bg_element_des@2x-cb13cb99.js";const u=t.h3`
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 12px;
`,k=t.li`
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
    background-color: ${({theme:e})=>e.color.primaryAccent};
    border-radius: 50%;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    /* list-style-position: inside; */
    list-style-position: outside;
  }
`,w=t.div`
  display: inline-block;
  margin: 0;
`,f=t.div`
  display: inline-block;
  

  width: 280px;

  padding: 24px 16px;
  background-color: ${({theme:e})=>e.color.secondaryWhite};
  box-shadow: ${({theme:e})=>e.boxShadowforButton.hoverButton};
  border-radius: 10px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    padding: 32px 24px;
    width: auto;
    list-style-position: inside;
  }
`,$=t.ul`
  list-style-type: none;
  padding-left: 0;
`,y=()=>{const e=["Supply of nutrients to all organs","Providing oxygen to the lungs","Maintaining the work of the heart","Release of processed substances","Ensuring the stability of the internal environment","Maintaining within the normal temperature","Maintaining an immune system capable of resisting disease"];return n.jsx(w,{children:n.jsxs(f,{children:[n.jsx(u,{children:"Why drink water"}),n.jsx($,{children:e.map((a,i)=>n.jsx(k,{children:a},i))})]})})},j=t.div`
  display: inline-block;
  max-width: 280px;
  margin: auto;

  @media only screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    max-width: 100%;
    margin: 0;
  }

  @media only screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    min-width: 439px;
  }
`,v=t.h2`
  font-size: 28px;
  font-weight: 700;
  line-height: 32px;
  vertical-align: top;
  margin-bottom: 16px;
  @media only screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 36px;
    line-height: 42px;
  }
`,z=t.h3`
  font-size: 24px;
  font-weight: 400;
  line-height: 30px;
  margin-bottom: 24px;
  @media only screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 26px;
    line-height: 32px;
  }
`,_=t.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  margin-bottom: 12px;
`,B=t.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 16px;

  line-height: 20px;
  margin-bottom: 24px;

  @media only screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media only screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    flex-direction: column;
    justify-content: center;
  }
`,T=t.li`
  display: flex;
  gap: 8px;
  align-items: center;
`,W=t.svg`
  width: 32px;
  height: 32px;
  @media only screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 40px;
    height: 40px;
  }
`,S=t.button`
  width: 100%;
  padding: 8px 30px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  height: 36px;
  border-radius: 10px;
  border: none;
  color: ${({theme:e})=>e.color.primaryWhite};
  background-color: ${({theme:e})=>e.color.primaryAccent};
  box-shadow: ${({theme:e})=>e.boxShadowforButton.normalButton};
  transition: background-color ${({theme:e})=>e.transition.main};

  &:hover, &:focus  {
    box-shadow: ${({theme:e})=>e.boxShadowforButton.hoverButton};
  }
  &:active {
    box-shadow: ${({theme:e})=>e.boxShadowforButton.activeButton};
  }
  @media only screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 336px;
    height: 44px;
    padding: 10px 30px;
    font-size: 18px;
    line-height: 24px;
  }
  @media only screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    width: 384px;
  }
`,C=()=>{const e=d(),a=()=>{e("/signup")},i=[{text:"Habit drive",id:`${s}#icon-calendar-days`},{text:"View statistics",id:`${s}#icon-presentation-chart-bar`},{text:"Personal rate setting",id:`${s}#icon-wrench-screwdriver`}];return n.jsxs(j,{children:[n.jsx(v,{children:"Water consumption tracker"}),n.jsx(z,{children:"Record daily water intake and track"}),n.jsx(_,{children:"Tracker Benefits"}),n.jsx(B,{children:i.map(({id:r,text:o},p)=>n.jsxs(T,{children:[n.jsx(W,{children:n.jsx("use",{href:r})}),o]},p))}),n.jsx(S,{type:"button",onClick:a,children:"Try tracker"})]})},D=t.div`
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
`,M=()=>n.jsxs(D,{children:[n.jsx(C,{}),n.jsx(y,{})]}),P="/goit-group2-react-nodejs/assets/bg_img_mob@1x-c5c3006f.png",E="/goit-group2-react-nodejs/assets/bg_img_mob@2x-cab432e7.png",I="/goit-group2-react-nodejs/assets/bg_img_tab@1x-ae218387.png",L="/goit-group2-react-nodejs/assets/bg_img_tab@2x-6c4f8ac4.png",R="/goit-group2-react-nodejs/assets/bg_img_des@1x-b6cc26cc.png",A="/goit-group2-react-nodejs/assets/bg_img_des@2x-168beeb7.png",H=t.div`
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 100%;
  min-height: calc(-64px + 100vh);

  background-image: url(${P});

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${E});
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    background-image: url(${I});
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) and (min-device-pixel-ratio: 2) and (min-resolution: 192dpi) and (min-resolution: 2dppx) {
    background-image: url(${L});
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    background-image: url(${R});
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) and (min-device-pixel-ratio: 2) and (min-resolution: 192dpi) and (min-resolution: 2dppx) {
    background-image: url(${A});
  }
`,N=t.section`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  padding-top: 24px;
  padding-bottom: 40px;
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    padding-top: 40px;
    padding-bottom: 50px;
  }
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    padding-top: 50px;
    padding-bottom: 109px;
    background-image: url(${h});
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) and (min-device-pixel-ratio: 2) and (min-resolution: 192dpi) and (min-resolution: 2dppx) {
    background-image: url(${b});
    /* height: 582px; */
  }
`;function q(){const e=c(),i=l()[0].get("token"),r=d();return g.useEffect(()=>{if(i)try{e(x(i)),e(m()).then(o=>{o.error||r("/home")})}catch(o){console.log(o.message)}},[e,r,i]),n.jsx(H,{children:n.jsx(N,{children:n.jsx(M,{})})})}export{q as default};
