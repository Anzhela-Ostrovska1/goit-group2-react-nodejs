import { MainComponent } from '../../components/Main/MainComponent/MainComponent';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setToken } from '../../redux/Auth/AuthSlice';
import { refreshUserThunk } from '../../redux/Auth/AuthOperations';

import { Wrapper, Section } from './Welcome.styled';
export default function Welcome() {
  const dispatch = useDispatch();
  const searchParam = useSearchParams();
  const token = searchParam[0].get('token');
  const navigate = useNavigate();
console.log(token);
  useEffect(() => {
    if (token) {
      try {
        dispatch(setToken(token));
        dispatch(refreshUserThunk()).then(data => {
          if (!data.error) navigate('/home');
        });
      } catch (error) {
        console.log(error.message);
      }
    }
  }, [dispatch, navigate, token]);

  return (
    <Wrapper>
      <Section>
        <MainComponent />
      </Section>
    </Wrapper>
  );
}
