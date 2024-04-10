import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import {
  BaseModalStyled,
  CloseButton,
  CloseIcon,
  ModalContent,
  ModalHeader,
} from './BaseModalWindow.styled';
import sprite from 'src/assets/images/sprite/sprite.svg';

export const BaseModalWindow = ({ isShow, children, title, onClose }) => {
  const modalRoot = document.querySelector('#modal-root');

  useEffect(() => {
    const handleEsc = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    if (isShow) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isShow, onClose]);

  if (!isShow) {
    return null;
  }

  const modalContent = (
    <BaseModalStyled onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <h2>{title}</h2>
          <CloseButton onClick={onClose}>
            <CloseIcon>
              <use href={`${sprite}#icon-Vector`}></use>
            </CloseIcon>
          </CloseButton>
        </ModalHeader>
        {children}
      </ModalContent>
    </BaseModalStyled>
  );

  return createPortal(modalContent, modalRoot);
};

BaseModalWindow.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  isShow: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};
