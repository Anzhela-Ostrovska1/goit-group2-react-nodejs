import { MainComponent } from '../../components/Main/MainComponent/MainComponent';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { setToken } from '../../redux/Auth/AuthSlice';
// import { refreshUserThunk } from '../../redux/Auth/AuthOperations';
import { SettingsModal } from '../../components/SettingsModal/SettingsModal';

import { Wrapper, Section } from './Welcome.styled';
export default function Welcome() {
  return (
    <Wrapper>
      <SettingsModal />
      <Section>
        <MainComponent />
      </Section>
    </Wrapper>
  );
}
