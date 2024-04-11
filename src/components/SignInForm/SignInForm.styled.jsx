import styled from '@emotion/styled';
import { SignupContainer } from '../SignUpForm/SignUpForm.styled';
export const SigninContainer = styled(SignupContainer)`
  gap: 66px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    gap: 0;
  }
`;
