import { UserAuth } from '../UserAuth/UserAuth';
import { Logo } from '../Logo/Logo';
import { MainContainer, Wrapper } from './Header.styled';

const Header = () => {
  return (
    <header>
      <MainContainer>
        <Wrapper>
        <Logo />
        <UserAuth />
      </Wrapper>
      </MainContainer>
    </header>
  );
};

export default Header;
