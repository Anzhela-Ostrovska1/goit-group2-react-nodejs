import { useState } from 'react';
import { useEffect } from 'react';
import sprite from '../../assets/images/sprite/sprite.svg';
import {
  PopBtn,
  PopIcon,
  PopItem,
  PopList,
  Popover,
} from './UserLogoModal.styled';

import { UserLogoutModal } from '../Home/LogOutModal/LogOutModal';
import { SettingsModal } from '../SettingsModal/SettingsModal.jsx';

export const UserLogoModal = () => {
  const [isLogOutModalOpen, setIsLogOutModalOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);

  useEffect(() => {}, [isSettingsModalOpen]);

  const handleLogOutButtonClick = () => {
    setIsLogOutModalOpen(true);
  };

  const handleCloseLogOutButtonClick = () => {
    setIsLogOutModalOpen(false);
  };

  const handleSettingsButtonClick = () => {
    setIsSettingsModalOpen(true);
  };

  const handleCloseSettingsModal = () => {
    setIsSettingsModalOpen(false);
  };

  return (
    <Popover>
      <PopList>
        <PopItem>
          <PopBtn type="button" onClick={handleSettingsButtonClick}>
            <PopIcon>
              <use href={`${sprite}#icon-settings`}></use>
            </PopIcon>
            Setting
          </PopBtn>
        </PopItem>
        <PopItem>
          <PopBtn type="button" onClick={handleLogOutButtonClick}>
            <PopIcon>
              <use href={`${sprite}#icon-logout`}></use>
            </PopIcon>
            Log out
          </PopBtn>
        </PopItem>
      </PopList>
      {isLogOutModalOpen && (
        <UserLogoutModal
          onClose={handleCloseLogOutButtonClick}
          isShow={isLogOutModalOpen}
        />
      )}
      {isSettingsModalOpen && (
        <SettingsModal onClose={handleCloseSettingsModal} />
      )}
    </Popover>
  );
};
