import React from 'react';
import { BaseModalWindow } from '../../common/BaseModalWindow/BaseModalWindow';

import { useDispatch } from 'react-redux';
import {
  ModalContainer,
  ButtonContainer,
  ButtonStyle,
  ModalTitle,
} from './DeleteEntryModal.styled';
import { deleteWaterThunk } from '../../../redux/water/waterOperations';

export const DeleteEntryModal = ({ onClose, onShow, id }) => {
  const dispatch = useDispatch();
  const onDelete = () => {
    dispatch(deleteWaterThunk(id));
    onClose();
  };
  console.log(id);
  return (
    <BaseModalWindow onClose={onClose} onShow={onShow} title={'Delete Entry'}>
      <ModalContainer>
        <ModalTitle>Are you sure you want to delete the entry?</ModalTitle>
        <ButtonContainer>
          <ButtonStyle onClick={onDelete}>Delete</ButtonStyle>
          <ButtonStyle onClick={onClose}>Cancel</ButtonStyle>
        </ButtonContainer>
      </ModalContainer>
    </BaseModalWindow>
  );
};
