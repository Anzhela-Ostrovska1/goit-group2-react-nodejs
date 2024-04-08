import { useState } from 'react';
import sprite from '../../assets/images/sprite/sprite.svg';
import {
  PopBtn,
  PopIcon,
  PopItem,
  PopList,
  Popover,
} from './UserLogoModal.styled';

import { UserLogoutModal } from '../Home/LogOutModal/LogOutModal';
import  AddWaterModal from '../AddWaterModal/AddWaterModal';

export const UserLogoModal = () => {
 
  const [isLogOutModalOpen, setIsLogOutModalOpen] = useState(false);
  const [isAddWaterModalOpen, setIsAddWaterModalOpen] = useState(false);

  const handleLogOutButtonClick = () => {
    setIsLogOutModalOpen(true);
  };

  const handleAddWaterButtonClick = () => {
    setIsAddWaterModalOpen(true);
  };

  return (
    <Popover>
      <PopList>
        <PopItem>
          <PopBtn type="button" onClick={handleAddWaterButtonClick}>
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
      {isLogOutModalOpen && <UserLogoutModal />}
      {isAddWaterModalOpen && <AddWaterModal />}
    </Popover>
  );
};
