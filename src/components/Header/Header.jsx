import { UserAuth } from '../UserAuth/UserAuth';
import { Logo } from '../Logo/Logo';
import { MainContainer, Wrapper } from './Header.styled';
import { UserLogo } from '../UserLogo/UserLogo';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/Auth/AuthSelectors';

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header>
      <MainContainer>
        <Wrapper>
          <Logo />
          {isLoggedIn ? <UserLogo /> : <UserAuth />}
        </Wrapper>
      </MainContainer>
    </header>
  );
};

export default Header;
