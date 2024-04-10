import { BaseModalWindow } from '../../common/BaseModalWindow/BaseModalWindow.jsx';
import {
  ModalContainer,
  ModalTitle,
  ButtonContainer,
  ButtonStyle,
} from './LogOutModal.styled.jsx';
import { logOutThunk } from '../../../redux/Auth/AuthOperations.jsx';
import { useDispatch } from 'react-redux';

export const UserLogoutModal = ({ onClose, isShow }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOutThunk());
  };
  return (
    <BaseModalWindow onClose={onClose} isShow={isShow} title="Log out">
      <ModalContainer>
        <ModalTitle>Do you really want to leave?</ModalTitle>
        <ButtonContainer>
          <ButtonStyle onClick={handleLogout}>Log out</ButtonStyle>
          <ButtonStyle onClick={onClose} style={{ color: '#407BFF' }}>
            Cancel
          </ButtonStyle>
        </ButtonContainer>
      </ModalContainer>
    </BaseModalWindow>
  );
};
