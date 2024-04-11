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

export const DeleteEntryModal = ({ onClose, isShow, id }) => {
  const dispatch = useDispatch();
  const { year, month } = formatCurrentDate();

  const handleDelete = id => {
    dispatch(deleteWaterThunk(id));
    dispatch(fetchMonthWaterThunk({ year, month }));
    dispatch(fetchTodayWaterThunk());
    onClose();
  };

  return (
    <BaseModalWindow onClose={onClose} isShow={isShow} title={'Delete Entry'}>
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
