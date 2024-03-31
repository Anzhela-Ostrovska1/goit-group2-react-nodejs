import styled from '@emotion/styled';
export const Container = styled.div`
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
`;
export const Heading = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 28px;
  font-weight: 700;
  line-height: 32px;
  /* text-align: left;
  display: inline-block;  */
  vertical-align: top;
  margin-bottom: 16px;
  @media only screen and (min-width: 768px) {
    font-size: 36px;
    line-height: 42px;
  }
  /* @media only screen and (min-width: 1440px) {
    } */
`;
export const Title = styled.h3`
  font-size: 24px;
  font-weight: 400;
  line-height: 30px;
  margin-bottom: 24px;
  @media only screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 32px;
  }
`;
export const ListTitle = styled.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  margin-bottom: 12px;
`;
export const List = styled.ul`
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
`;
export const Item = styled.li`
  display: flex;
  gap: 8px;
  align-items: center;
`;
export const Icon = styled.svg`
  width: 32px;
  height: 32px;
  @media only screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;
export const Button = styled.button`
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
`;