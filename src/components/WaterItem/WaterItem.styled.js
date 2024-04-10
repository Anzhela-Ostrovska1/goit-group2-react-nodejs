import styled from '@emotion/styled';

export const WaterListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: space-between;
`;

export const WaterPortion = styled.div`
  display: flex;
  align-items: center;
`;

export const Amount = styled.p`
  color: #407bff;
  font-size: 18px;
  line-height: 24px;
  margin-left: 12px;
`;
export const Time = styled.p`
  margin-left: 12px;
  line-height: 24px;
  font-size: 12px;
  color: #2f2f2f;

  @media screen and (min-width: 768px) {
    margin-left: 16px;
  }
`;

export const EditButton = styled.button`
  margin-right: 18px;
  background-color: transparent;
`;

export const DeleteButton = styled.button`
  background-color: transparent;
`;
