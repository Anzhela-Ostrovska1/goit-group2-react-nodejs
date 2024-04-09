import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikError,
} from 'formik';
import bottleMob1x from '../../assets/images/background/signin/bg_bottle_signin_mob@1x.png';
import bottleMob2x from '../../assets/images/background/signin/bg_bottle_signin_mob@2x.png';
import bottleDes1x from '../../assets/images/background/signin/bg_signin_des@1x.png';
import bottleDes2x from '../../assets/images/background/signin/bg_signin_des@2x.png';

export const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* gap: 66px; */
  align-items: center;
  margin: 0 auto;
  padding-right: 20px;
  padding-left: 20px;
  position: relative;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 768px;
    padding-right: 32px;
    padding-left: 32px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    gap: 0;
    flex-direction: row-reverse;
    align-items: center;
    width: 1440px;
    height: 582px;
    padding-right: 120px;
    padding-left: 120px;
  }
`;

export const BottleBg = styled.div`
  @media screen and (max-width: ${({ theme }) => `calc(${theme.breakpoint.tablet} - 1px)`}) {
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
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    position: relative;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    order: 1;
    width: 916px;
    min-height: 680px;
    background-image: url(${bottleDes1x});
    /* background-position: left center; */
    /* flex-grow: 1; */
    /* background-size: cover; 
  background-position: center center; */
    top: 50px;
    left: -130px;

    /* position: absolute;
   
   left: -20px; 
  top: 20px
    */
    /* background-attachment: fixed;  */
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) and (min-device-pixel-ratio: 2) and (min-resolution: 192dpi) and (min-resolution: 2dppx) {
    background-image: url(${bottleDes2x});
    /* background-position: -120px center; */
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 280px;
  min-height: 304px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    position: absolute;
    /* top: 104px; */
    left: 30px;
    z-index: 1;
    min-width: 336px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    position: static;
    min-width: 384px;
    min-height: 312px;
    /* padding-right: 104px; */
    flex-grow: 1;
    /* padding-left: 104px; */
  }
`;

export const FormTitle = styled.h2`
  font-size: 26px;
  line-height: 32px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.primaryBlack};
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 16px;

  .button-disabled {
    background-color: ${({ theme }) => theme.color.secondaryLightBlue};
    cursor: not-allowed;
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  gap: 8px;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  color: ${({ theme }) => theme.color.primaryBlack};
  .input-with-error {
    border-color: ${({ theme }) => theme.color.secondaryRed};
    color: ${({ theme }) => theme.color.secondaryRed};
  }
`;
export const Field = styled(FormikField)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  /* height: 44px; */
  font-size: 16px;
  line-height: 20px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.color.secondaryPowderBlue};
  padding: 12px 10px;
  color: ${({ theme }) => theme.color.primaryAccent};
  &::placeholder {
    color: ${({ theme }) => theme.color.secondaryLightBlue};
  }
  &:focus-within {
    outline: none;
  }
`;

export const FormButton = styled.button`
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

  color: ${({ theme }) => theme.color.primaryWhite};
  background-color: ${({ theme }) => theme.color.primaryAccent};
  box-shadow: ${({ theme }) => theme.boxShadowforButton.normalButton};
  transition: background-color ${({ theme }) => theme.transition.main};

  &:hover,
  &:focus {
    box-shadow: ${({ theme }) => theme.boxShadowforButton.hoverButton};
  }
  &:active {
    box-shadow: ${({ theme }) => theme.boxShadowforButton.activeButton};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 18px;
    line-height: 24px;
    padding: 10px 30px;
  }
`;
export const ErrorMessage = styled(FormikError)`
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme }) => theme.color.secondaryRed};
`;

export const EyeIcon = styled.svg`
  position: absolute;
  right: 10px;
  top: 46px;
  width: 16px;
  height: 16px;
  border: 1px;
  fill: transparent;
  stroke: ${({ theme }) => theme.color.primaryAccent};
`;
export const StyledLink = styled(NavLink)`
  font-size: 16px;
  line-height: 20px;
  color: ${({ theme }) => theme.color.primaryAccent};
  transition: color ${({ theme }) => theme.transition.main};
  &:hover {
    color: ${({ theme }) => theme.color.secondaryYellow};
  }
`;
