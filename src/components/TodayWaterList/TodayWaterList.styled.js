import styled from '@emotion/styled';

export const WaterList = styled.ul`
  /* overflow-y: overlay; */
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

  /* &::-webkit-scrollbar-button:vertical:start:decrement,
  &::-webkit-scrollbar-button:vertical:end:increment {
    display: none;
  }

  &::-webkit-scrollbar {
    display: none;
  } */
`;

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

export const Title = styled.h2`
  margin-bottom: 16px;
  color: #2f2f2f;
  font-weight: 500px;
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

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const EditButton = styled.button`
  margin-right: 18px;
  background-color: transparent;
`;

export const DeleteButton = styled.button`
  background-color: transparent;
`;
