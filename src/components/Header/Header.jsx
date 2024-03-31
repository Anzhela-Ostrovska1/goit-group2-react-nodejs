import { UserAuth } from '../UserAuth/UserAuth';
import { Logo } from '../Logo/Logo';
import { Wrapper } from './Header.styled';

const Header = () => {
  return (
    <header>
      <Wrapper>
        <Logo />
        <UserAuth />
      </Wrapper>
    </header>
  );
};

export default Header;
