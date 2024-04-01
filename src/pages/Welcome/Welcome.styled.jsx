import styled from '@emotion/styled';
import bgMob1x from '../../assets/images/background/main/bg_img_mob@1x.png';
import bgMob2x from '../../assets/images/background/main/bg_img_mob@2x.png';
import bgTab1x from '../../assets/images/background/main/bg_img_tab@1x.png';
import bgTab2x from '../../assets/images/background/main/bg_img_tab@2x.png';
import imgDes1x from '../../assets/images/background/main/bg_img_des@1x.png';
import imgDes2x from '../../assets/images/background/main/bg_img_des@2x.png';
import bgDes1x from '../../assets/images/background/main/bg_element_des@1x.png';
import bgDes2x from '../../assets/images/background/main/bg_element_des@2x.png';

export const Wrapper = styled.div`
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 100%;
  min-height: calc(100vh - 109px);
  background-image: url(${bgMob1x});

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bgMob2x});
  }

  @media screen and (min-width: 768px) {
    background-image: url(${bgTab1x});
  }

  @media screen and (min-width: 768px) and (min-device-pixel-ratio: 2) and (min-resolution: 192dpi) and (min-resolution: 2dppx) {
    background-image: url(${bgTab2x});
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${imgDes1x});
  }

  @media screen and (min-width: 1440px) and (min-device-pixel-ratio: 2) and (min-resolution: 192dpi) and (min-resolution: 2dppx) {
    background-image: url(${imgDes2x});
  }
`;

export const Section = styled.section`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  padding-top: 24px;
  padding-bottom: 40px;
  @media screen and (min-width: 1440px) {
    background-image: url(${bgDes1x});
  }

  @media screen and (min-width: 1440px) and (min-device-pixel-ratio: 2) and (min-resolution: 192dpi) and (min-resolution: 2dppx) {
    background-image: url(${bgDes2x});
  }
`;
