import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.color.primaryAccent};
  transition: color ${({theme}) => theme.transition.main};
  &:hover {
    color: ${({ theme }) => theme.color.secondaryYellow};
  }
`;

export const Icon = styled.svg`
  fill: transparent;
  stroke: ${({ theme }) => theme.color.primaryBlack};
  width: 28px;
  height: 28px;
`;

