import React, { useEffect } from 'react';
import { BaseModalWindow } from '../../common/BaseModalWindow/BaseModalWindow';

import {
  ModalContainer,
  ButtonContainer,
  ButtonStyle,
  ModalTitle,
} from './DeleteEntryModal.styled';
import {
  deleteWaterThunk,
  fetchMonthWaterThunk,
  fetchTodayWaterThunk,
} from '../../../redux/water/waterOperations';

import { useDispatch } from 'react-redux';
import { formatCurrentDate } from '../../../helpers/formatDate';

export const DeleteEntryModal = ({ onClose, onShow, id }) => {
  const dispatch = useDispatch();
  const { year, month } = formatCurrentDate();
  console.log('id в DeleteEntryModal який прийшов з пропсів', id);

  const handleDelete = id => {
    console.log('id в DeleteEntryModal - handleDelete', id);
    dispatch(deleteWaterThunk(id));
    dispatch(fetchMonthWaterThunk({ year, month }));
    dispatch(fetchTodayWaterThunk());
    onClose();
  };

  return (
    <BaseModalWindow onClose={onClose} onShow={onShow} title={'Delete Entry'}>
      <ModalContainer>
        <ModalTitle>Are you sure you want to delete the entry?</ModalTitle>
        <ButtonContainer>
          <ButtonStyle onClick={() => handleDelete(id)}>Delete</ButtonStyle>

          <ButtonStyle onClick={onClose} style={{ color: '#407BFF' }}>
            Cancel
          </ButtonStyle>
        </ButtonContainer>
      </ModalContainer>
    </BaseModalWindow>
  );
};
