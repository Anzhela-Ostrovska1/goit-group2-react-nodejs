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
  position: relative;
  margin-right: 18px;
  background-color: transparent;

  padding: 0;
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -5px;
    width: 16px;
    height: 1px;
    background-color: #9ebbff;
    transition: 350ms cubic-bezier(0.23, 1, 0.32, 1);
    opacity: 0;
    transform: translateX(-50%);
  }

  &:is(:hover, :focus)::after {
    opacity: 1;
  }
`;

export const DeleteButton = styled.button`
  background-color: transparent;
  position: relative;

  padding: 0;
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -5px;
    width: 16px;
    height: 1px;
    background-color: #ef5050;
    transition: 350ms cubic-bezier(0.23, 1, 0.32, 1);
    opacity: 0;
    transform: translateX(-50%);
  }

  &:is(:hover, :focus)::after {
    opacity: 1;
  }
`;
