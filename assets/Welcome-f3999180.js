import{n,j as e,s as a}from"./index-e993b483.js";const r=n.h3`
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 12px;
`,d=n.li`
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
    background-color: blue;
    border-radius: 50%;
  }

  @media screen and (min-width: 768px) {
    list-style-position: inside;
  }
`,p=n.div`
  display: inline-block;
  margin: 0;
`,c=n.div`
  display: inline-block;

  width: 280px;

  padding: 24px 16px;
  background-color: yellow;
  box-shadow: 0 4px 14px rgba(64, 123, 255, 0.3);
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    padding: 32px 24px;
    width: auto;
    list-style-position: inside;
  }
`,x=n.ul`
  list-style-type: none;
  padding-left: 0;
`,g=()=>{const i=["Supply of nutrients to all organs","Providing oxygen to the lungs","Maintaining the work of the heart","Release of processed substances","Ensuring the stability of the internal environment","Maintaining within the normal temperature","Maintaining an immune system capable of resisting disease"];return e.jsx(p,{children:e.jsxs(c,{children:[e.jsx(r,{children:"Why drink water"}),e.jsx(x,{children:i.map((t,o)=>e.jsx(d,{children:t},o))})]})})},l=n.div`
  display: inline-block;
  max-width: 280px;
  margin: auto;

  @media only screen and (min-width: 768px) {
    max-width: 100%;
    margin: 0;
  }

  @media only screen and (min-width: 1440px) {
    min-width: 439px;
  }
`,m=n.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 28px;
  font-weight: 700;
  line-height: 32px;
  vertical-align: top;
  margin-bottom: 16px;
  @media only screen and (min-width: 768px) {
    font-size: 36px;
    line-height: 42px;
  }
`,h=n.h3`
  font-size: 24px;
  font-weight: 400;
  line-height: 30px;
  margin-bottom: 24px;
  @media only screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 32px;
  }
`,u=n.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  margin-bottom: 12px;
`,b=n.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 16px;

  line-height: 20px;
  margin-bottom: 24px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media only screen and (min-width: 1440px) {
    flex-direction: column;
    justify-content: center;
  }
`,w=n.li`
  display: flex;
  gap: 8px;
  align-items: center;
`,f=n.svg`
  width: 32px;
  height: 32px;
  @media only screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`,y=n.button`
  width: 100%;
  padding: 8px 30px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  height: 36px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  @media only screen and (min-width: 768px) {
    width: 336px;
    height: 44px;
    padding: 10px 30px;
    font-size: 18px;
    line-height: 24px;
  }
  @media only screen and (min-width: 1440px) {
    width: 384px;
    height: 44px;
  }
`,j=()=>{const i=[{text:"Habit drive",id:`${a}#icon-calendar-days`},{text:"View statistics",id:`${a}#icon-presentation-chart-bar`},{text:"Personal rate setting",id:`${a}#icon-wrench-screwdriver`}];return e.jsxs(l,{children:[e.jsx(m,{children:"Water consumption tracker"}),e.jsx(h,{children:"Record daily water intake and track"}),e.jsx(u,{children:"Tracker Benefits"}),e.jsx(b,{children:i.map(({id:t,text:o},s)=>e.jsxs(w,{children:[e.jsx(f,{children:e.jsx("use",{href:t})}),o]},s))}),e.jsx(y,{type:"button",children:"Try tracker"})]})},k=n.div`
display: flex;
flex-direction: column;
width: 280px;
gap: 40px;

  @media only screen and (min-width: 768px) {
    margin: auto;
    gap: 60px;
    width: 704px;
  }
  @media only screen and (min-width: 1440px) {
    flex-direction: row;
    align-items: flex-end;
    gap: 81px;
    width: 1014px;

  }
`,v=()=>e.jsxs(k,{children:[e.jsx(j,{}),e.jsx(g,{})]}),$="/goit-group2-react-nodejs/assets/bg_img_mob@1x-c5c3006f.png",_="/goit-group2-react-nodejs/assets/bg_img_mob@2x-cab432e7.png",z="/goit-group2-react-nodejs/assets/bg_img_tab@1x-ae218387.png",T="/goit-group2-react-nodejs/assets/bg_img_tab@2x-6c4f8ac4.png",W="/goit-group2-react-nodejs/assets/bg_img_des@1x-b6cc26cc.png",M="/goit-group2-react-nodejs/assets/bg_img_des@2x-168beeb7.png",C="/goit-group2-react-nodejs/assets/bg_element_des@1x-86a3ec5e.png",D="/goit-group2-react-nodejs/assets/bg_element_des@2x-ed159c5b.png",R=n.div`
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 100%;
  min-height: calc(100vh - 109px);
  background-image: url(${$});

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${_});
  }

  @media screen and (min-width: 768px) {
    background-image: url(${z});
  }

  @media screen and (min-width: 768px) and (min-device-pixel-ratio: 2) and (min-resolution: 192dpi) and (min-resolution: 2dppx) {
    background-image: url(${T});
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${W});
  }

  @media screen and (min-width: 1440px) and (min-device-pixel-ratio: 2) and (min-resolution: 192dpi) and (min-resolution: 2dppx) {
    background-image: url(${M});
  }
`,I=n.section`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  padding-top: 24px;
  padding-bottom: 40px;
  @media screen and (min-width: 1440px) {
    background-image: url(${C});
  }

  @media screen and (min-width: 1440px) and (min-device-pixel-ratio: 2) and (min-resolution: 192dpi) and (min-resolution: 2dppx) {
    background-image: url(${D});
  }
`;function S(){return e.jsx(R,{children:e.jsx(I,{children:e.jsx(v,{})})})}export{S as default};
