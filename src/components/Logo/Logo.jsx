import sprite from 'src/assets/images/sprite/sprite.svg';
import { StyledLogo } from './Logo.styled';
import { Link } from 'react-router-dom';
export const Logo = () => {
  return (
    <div>
      <Link to="/home">
        <StyledLogo>
          <use href={`${sprite}#icon-logo`}></use>
        </StyledLogo>
      </Link>
    </div>
  );
};
