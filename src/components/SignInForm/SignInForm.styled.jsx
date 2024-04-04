import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import bottleMob1x from '../../assets/images/background/signin/bg_bottle_signin_mob@1x.png';
import bottleMob2x from '../../assets/images/background/signin/bg_bottle_signin_mob@2x.png';
import bottleDes1x from '../../assets/images/background/signin/bg_signin_des@1x.png';
import bottleDes2x from '../../assets/images/background/signin/bg_signin_des@2x.png';

export const SigninContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 66px;
  align-items: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    gap: 0;
    flex-direction: row-reverse;
  }
`;

export const BottleBg = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    order: 2;
    background-image: url(${bottleMob1x});
    background-size: contain;
    background-repeat: no-repeat;
    width: 280px;
    height: 210px;
    background-position: center;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoint.tablet}) and (min-device-pixel-ratio: 2) and (min-resolution: 192dpi) and (min-resolution: 2dppx) {
    background-image: url(${bottleMob2x});
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    order: 1;
    width: 916px;
    min-height: 680px;
    background-image: url(${bottleDes1x});
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) and (min-device-pixel-ratio: 2) and (min-resolution: 192dpi) and (min-resolution: 2dppx) {
    background-image: url(${bottleDes2x});
  }
`;
export const FormContainer = styled.div`
    display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 280px;
  min-height: 304px;
`
export const StyledLink = styled(NavLink)`
    font-size: 16px;
    line-height: 20px;
    color: ${({ theme }) => theme.color.primaryAccent};
    transition: color ${({ theme }) => theme.transition.main};
    &:hover {
    color: ${({ theme }) => theme.color.secondaryYellow};
  }
`