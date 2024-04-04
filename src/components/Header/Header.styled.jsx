import styled from '@emotion/styled';
export const MainContainer = styled.div`
  margin: 0 auto;
  padding-right: 20px;
  padding-left: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 768px;
    padding-right: 32px;
    padding-left: 32px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    width: 1440px;
    padding-right: 120px;
    padding-left: 120px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 8px;
  align-items: center;

  /* margin-bottom: 24px; */

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    /* margin-bottom: 40px; */
    padding-top: 16px;
  }
  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    /* margin-bottom: 50px; */
    /* margin-bottom: 30px; */
    padding-top: 12px;
  }
`;
