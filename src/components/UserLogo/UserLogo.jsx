import sprite from '../../assets/images/sprite/sprite.svg';
import { UserLogoModal } from '../UserLogoModal/UserLogoModal';
import { motion, AnimatePresence } from 'framer-motion';
import {
  StyledBtn,
  UserDefaultAvatar,
  PopIcon,
  User,
  LogoAvatar,
  PopoverContainer,
  AvatarContainer,
} from './UserLogo.styled';
import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/Auth/AuthSelectors';

export const UserLogo = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  // const { email, name, avatarURL } = useSelector(selectUser);

  const popoverRef = useRef(null);
  const handleTogglePopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  const handleClickOutside = event => {
    if (popoverRef.current && !popoverRef.current.contains(event.target)) {
      setIsPopoverOpen(false);
    }
  };

  useEffect(() => {
    if (isPopoverOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isPopoverOpen]);

  // const firstLetters = name
  //   ? name.slice(0, 2).toUpperCase()
  //   : email.slice(0, 2).toUpperCase();

  // const getUser = () => {
  //   if (name && avatarURL) {
  //     return {
  //       userName: name,
  //       avatar: avatarURL,
  //     };
  //   } else if (name || avatarURL) {
  //     return {
  //       userName: name || firstLetters,
  //       avatar: avatarURL || firstLetters,
  //     };
  //   } else {
  //     return {
  //       userName: firstLetters,
  //       avatar: firstLetters,
  //     };
  //   }
  // };

  // const { userName, avatar } = getUser();

  return (
    <div ref={popoverRef}>
      <StyledBtn onClick={handleTogglePopover}>
        {/* <User>{userName}</User> */}
        <AvatarContainer>
          {/* {avatarURL ? (
            <LogoAvatar src={avatar} alt="user-avatar" />
          ) : (
            <UserDefaultAvatar>{avatar}</UserDefaultAvatar>
          )} */}

          <PopIcon
            style={{ transform: isPopoverOpen ? 'rotate(180deg)' : 'none' }}
          >
            <use href={`${sprite}#icon-pop-up`}></use>
          </PopIcon>
        </AvatarContainer>
      </StyledBtn>
      <PopoverContainer>
        <AnimatePresence>
          {isPopoverOpen && (
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <UserLogoModal />
            </motion.div>
          )}
        </AnimatePresence>
      </PopoverContainer>
    </div>
  );
};
