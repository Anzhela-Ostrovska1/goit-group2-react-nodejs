import styled from '@emotion/styled';

import bottleDesk1X from '../../assets/images/background/home/bottleHomeScreenDesk.png';
import bottleDesk2X from '../../assets/images/background/home/bottleHomeScreenDesk2x@2x.png';
import bottleTab1X from '../../assets/images/background/home/bottleHomeScreenTab.png';
import bottleTab2X from '../../assets/images/background/home/bottleHomeScreenTab@2x.png';
import bottleMob1X from '../../assets/images/background/home/bottleHomeScreenMob.png';
import bottleMob2X from '../../assets/images/background/home/bottleHomeScreenMob2x@2x.png';
import backgroundMob from '../../assets/images/background/home/backgroundElementHomeScreenMob.png';
import backgroundTab from '../../assets/images/background/home/backgroundElementHomeScreenTab.png';
import backgroundDesk from '../../assets/images/background/main/bg_element_des@1x.png';

export const HomeWrapper = styled.div`
  background-size: cover;
  background: url(${backgroundMob});
  height: max-content;
  background-repeat: no-repeat;
  min-height: calc(100% - 64px);

  @media screen and (min-width: 768px) {
    background: url(${backgroundTab});
    min-height: calc(100% - 80px);
  }

  @media screen and (min-width: 1440px) {
    background: url(${backgroundDesk});
    min-height: calc(-64px + 100vh);
  }
`;

export const LeftContainer = styled.div`
  margin-bottom: 40px;
  margin-top: 20px;
  background-size: 280px 208px;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${bottleMob1X});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 440px;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bottleMob2X});
  }

  @media screen and (min-width: 768px) {
    background-size: 518px 386px;
    background-position: calc(50% + 9px) 8px;
    height: 492px;
    background-image: url(${bottleTab1X});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background: url(${bottleTab2X});
      background-size: 518px 386px;
      background-repeat: no-repeat;
    }
  }

  @media screen and (min-width: 1440px) {
    background-size: 738px 548px;
    background-position: calc(50% + 10px) 46px;
    height: 680px;
    background-image: url(${bottleDesk1X});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bottleDesk2X});
    }
  }
`;

export const HomeContainer = styled.div`
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
`;

export const RightContainer = styled.div`
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
`;
