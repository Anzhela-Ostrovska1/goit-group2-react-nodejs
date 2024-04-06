import sprite from '../../assets/images/sprite/sprite.svg';
import { PopIcon, UserDiv } from './UserLogo.styled';
import { logOutThunk } from '../../redux/Auth/AuthOperations';
import { useDispatch } from 'react-redux';

export const UserLogo = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => dispatch(logOutThunk());
  return (
    <UserDiv>
      <p>Name</p>
      <p>Avatar</p>
      <button type="button" onClick={handleLogOut}>
        <PopIcon>
          <use href={`${sprite}#icon-pop-up`}></use>
        </PopIcon>
      </button>
    </UserDiv>
  );
};
