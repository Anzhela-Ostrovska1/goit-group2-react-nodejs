import styled from '@emotion/styled';

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
