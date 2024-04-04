import React from 'react';
import { BaseModalWindow } from '../../common/BaseModalWindow/BaseModalWindow.jsx';
import {
  ModalContainer,
  ModalTitle,
  ButtonContainer,
  ButtonStyle,
} from './LogOutModal.styled.jsx';

export const UserLogoutModal = ({ onClose, onShow }) => {
  return (
    <BaseModalWindow onClose={onClose} onShow={onShow} title="Log out">
      <ModalContainer>
        <ModalTitle>Do you really want to leave?</ModalTitle>
        <ButtonContainer>
          <ButtonStyle onClick={onClose}>Log out</ButtonStyle>
          <ButtonStyle onClick={onClose}>Cancel</ButtonStyle>
        </ButtonContainer>
      </ModalContainer>
    </BaseModalWindow>
  );
};
