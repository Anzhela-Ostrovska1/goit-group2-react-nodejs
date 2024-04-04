import styled from '@emotion/styled';

import bgMob1x from '../../assets/images/background/signin/bg_element_signin_mob@1x.png';
import bgMob2x from '../../assets/images/background/signin/bg_element_signin_mob@2x.png';
import bgTab1x from '../../assets/images/background/signin/bg_signin_tab@1x.png';
import bgTab2x from '../../assets/images/background/signin/bg_signin_tab@2x.png';
import bgDes1x from '../../assets/images/background/main/bg_element_des@1x.png';
import bgDes2x from '../../assets/images/background/main/bg_element_des@2x.png'

export const Section = styled.section`
 padding: 24px 0 40px;
  
  background-position: center right;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
   min-height: 100vh;
  background-image: url(${bgMob1x});
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bgMob2x});
  }
   @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding: 40px 0 50px;
    background-image: url(${bgTab1x});
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) and (min-device-pixel-ratio: 2) and (min-resolution: 192dpi) and (min-resolution: 2dppx) {
    padding: 50px 0 109px;
    background-image: url(${bgTab2x});
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    background-image: url(${bgDes1x});
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) and (min-device-pixel-ratio: 2) and (min-resolution: 192dpi) and (min-resolution: 2dppx) {
    background-image: url(${bgDes2x});
  }
`;

