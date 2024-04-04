import sprite from 'src/assets/images/sprite/sprite.svg';
import { NavLink } from 'react-router-dom';
import { Button, Container, Icon } from './UserAuth.styled';
export const UserAuth = () => {
  return (
    <Container>
      <NavLink to="/signin">
        <Button type="button">Sign in</Button>
      </NavLink>
      <Icon>
        <use href={`${sprite}#icon-user`}></use>
      </Icon>
    </Container>
  );
};
