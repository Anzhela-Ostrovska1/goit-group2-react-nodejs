import styled from '@emotion/styled';
export const StyledBtn = styled.button`
  position: relative;
  display: flex;
  justify-content: flex-end;
  border: none;
  align-items: center;
  background-color: transparent;
  gap: 8px;
  width: 122px;
  height: 28px;
  padding: 0;
`;
export const LogoAvatar = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
`;

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
export const UserDefaultAvatar = styled.span`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.primaryAccent};
  background-color: #d7e3ff;
`;
export const PopIcon = styled.svg`
  fill: ${({ theme }) => theme.color.primaryAccent};
  width: 16px;
  height: 16px;
  stroke: ${({ theme }) => theme.color.primaryAccent};
  &:hover,
  &:focus {
    stroke: ${({ theme }) => theme.color.secondaryYellow};
    fill: ${({ theme }) => theme.color.secondaryYellow};
  }
`;
export const User = styled.p`
  font-size: 16px;
  line-height: 20px;
`;

export const PopoverContainer = styled.div`
  position: absolute;
  top: 56px;
  right: 20px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    right: 32px;
    top: 66px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    right: 112px;
    top: 60px;
  }
`;
