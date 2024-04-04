import styled from '@emotion/styled';

export const ModalContainer = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 32px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    flex-direction: row-reverse;
  }
`;

export const ModalTitle = styled.h2`
  margin-bottom: 24px;
  color: ${({ theme }) => theme.color.primaryBlack};
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
`;

export const ButtonStyle = styled.button`
  display: inline-block;
  width: 100%;
  padding: 8px 30px;
  color: #fff;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  background-color: ${({ theme }) => theme.color.secondaryRed};
  box-shadow: ${({ theme }) => theme.boxShadowforButton.normalButton};
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadowforButton.hoverButton};
  }
  &:active {
    box-shadow: ${({ theme }) => theme.boxShadowforButton.activeButton};
  }

  &:last-of-type {
    color: ${({ theme }) => theme.color.accent};
    background-color: ${({ theme }) => theme.color.secondaryPowderBlue};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 160px;
    padding: 10px 30px;
  }
`;
