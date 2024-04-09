import React from 'react';
import { BaseModalWindow } from '../../common/BaseModalWindow/BaseModalWindow.jsx';
import {
  ModalContainer,
  ModalTitle,
  ButtonContainer,
  ButtonStyle,
} from './LogOutModal.styled.jsx';
import { logOutThunk } from '../../../redux/Auth/AuthOperations.jsx';
import { logout } from '../../../redux/Api/api.js';
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const UserLogoutModal = ({ onClose, onShow }) => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const handleLogout = () => {
    dispatch(logOutThunk())
    dispatch(logout())
    navigate('/login')
  }
  return (
    <BaseModalWindow onClose={onClose} onShow={onShow} title="Log out">
      <ModalContainer>
        <ModalTitle>Do you really want to leave?</ModalTitle>
        <ButtonContainer>
          <ButtonStyle onClick={handleLogout}>Log out</ButtonStyle>
          <ButtonStyle onClick={onClose} style={{color:'#407BFF'}}>Cancel</ButtonStyle>
        </ButtonContainer>
      </ModalContainer>
    </BaseModalWindow>
  );
};
