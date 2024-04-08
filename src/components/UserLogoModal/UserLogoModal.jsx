import sprite from '../../assets/images/sprite/sprite.svg';
import {
  PopBtn,
  PopIcon,
  PopItem,
  PopList,
  Popover,
} from './UserLogoModal.styled';
import { useDispatch } from 'react-redux';
import { logOutThunk } from '../../redux/Auth/AuthOperations';
export const UserLogoModal = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => dispatch(logOutThunk());
  return (
    <Popover>
      <PopList>
        <PopItem>
          <PopBtn type="button">
            <PopIcon>
              <use href={`${sprite}#icon-settings`}></use>
            </PopIcon>
            Setting
          </PopBtn>
        </PopItem>
        <PopItem>
          <PopBtn type="button" onClick={handleLogOut}>
            <PopIcon>
              <use href={`${sprite}#icon-logout`}></use>
            </PopIcon>
            Log out
          </PopBtn>
        </PopItem>
      </PopList>
    </Popover>
  );
};
