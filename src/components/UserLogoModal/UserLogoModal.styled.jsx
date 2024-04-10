import styled from '@emotion/styled';
export const Popover = styled.div`
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.primaryWhite};
  box-shadow: ${({ theme }) => theme.boxShadowforButton.normalButton};
`;
export const PopList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  width: 118px;
  height: 88px;
  border-radius: 10px;
  font-size: 16px;
  line-height: 20px;
`;
export const PopItem = styled.li`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
`;
export const PopBtn = styled.button`
  border: none;
  padding: 0;
  background-color: transparent;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  line-height: 20px;
  color: ${({ theme }) => theme.color.primaryAccent};
  transition: color ${({ theme }) => theme.transition.modal};
  &:is(:hover, :focus) {
    color: ${({ theme }) => theme.color.secondaryYellow};
  }

  &:is(:hover, :focus) svg {
    stroke: ${({ theme }) => theme.color.secondaryYellow};
  }
`;
export const PopIcon = styled.svg`
  width: 16px;
  height: 16px;
  fill: transparent;
  stroke: ${({ theme }) => theme.color.primaryAccent};
  transition: stroke ${({ theme }) => theme.transition.modal};
  &:hover {
    stroke: ${({ theme }) => theme.color.secondaryYellow};
  }
`;
