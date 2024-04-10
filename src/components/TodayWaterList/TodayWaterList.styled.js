import styled from '@emotion/styled';

export const WaterList = styled.ul`
  overflow-y: scroll;
  height: 180px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  gap: 12px;
  list-style: none;
  @media screen and (min-width: 768px) {
    height: 176px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 16px;
  color: #2f2f2f;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 32px;
  }
`;

export const AddButton = styled.button`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
  color: #407bff;
  font-weight: 500px;
  font-size: 16px;
  line-height: 20px;
  gap: 8px;
  transition: color ${({ theme }) => theme.transition.main};
  &:hover {
    color: ${({ theme }) => theme.color.secondaryYellow};
  }
 

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`;
