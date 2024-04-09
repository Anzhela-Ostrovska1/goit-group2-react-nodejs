import React from 'react';
import { BaseModalWindow } from '../../common/BaseModalWindow/BaseModalWindow';

import {
  ModalContainer,
  ButtonContainer,
  ButtonStyle,
  ModalTitle,
} from './DeleteEntryModal.styled';
import { deleteWaterThunk } from '../../../redux/water/waterOperations';

import { useDispatch } from 'react-redux';

export const DeleteEntryModal = ({ onClose, onShow, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteWaterThunk(id));
    onClose();
  };

  return (
    <BaseModalWindow onClose={onClose} onShow={onShow} title={'Delete Entry'}>
      <ModalContainer>
        <ModalTitle>Are you sure you want to delete the entry?</ModalTitle>
        <ButtonContainer>
          <ButtonStyle onClick={handleDelete}>Delete</ButtonStyle>

          <ButtonStyle onClick={onClose}  style={{color:'#407BFF'}}>Cancel</ButtonStyle>
        </ButtonContainer>
      </ModalContainer>
    </BaseModalWindow>
  );
};
