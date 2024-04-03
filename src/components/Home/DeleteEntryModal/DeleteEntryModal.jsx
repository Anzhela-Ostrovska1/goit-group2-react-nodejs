import React from 'react';
import { BaseModalWindow } from '../../common/BaseModalWindow/BaseModalWindow';
import {
  ModalContainer,
  ButtonContainer,
  ButtonStyle,
  ModalTitle,
} from './DeleteEntryModal.styled';

export const DeleteEntryModal = ({ onClose, onShow }) => {
  return (
    <BaseModalWindow onClose={onClose} onShow={onShow} title={'Delete Entry'}>
      <ModalContainer>
        <ModalTitle>Are you sure you want to delete the entry?</ModalTitle>
        <ButtonContainer>
          <ButtonStyle onClick={onClose}>Delete</ButtonStyle>
          <ButtonStyle onClick={onClose}>Cancel</ButtonStyle>
        </ButtonContainer>
      </ModalContainer>
    </BaseModalWindow>
  );
};
