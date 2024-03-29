import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import WelcomePage from '../pages/Welcome/Welcome';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
import Loader from './common/Loader/Loader';

import SharedLayout from './sharedLayout';

const HomePage = lazy(() => import('../pages/Home/Home'));
const SignInPage = lazy(() => import('../pages/SignIn/SignIn'));
const SignUpPage = lazy(() => import('../pages/SignUp/SignUp'));
const ErrorPage = lazy(() => import('../pages/Error/Error'));

const App = () => {
  const isRefreshing = false;

  return !isRefreshing ? (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          element={
            <RestrictedRoute component={<WelcomePage />} redirectTo="/home" />
          }
        />
        <Route path="home" element={<PrivateRoute component={HomePage} />} />
        <Route
          path="signin"
          element={
            <RestrictedRoute component={<SignInPage />} redirectTo="/home" />
          }
        />
        <Route
          path="signup"
          element={
            <RestrictedRoute component={<SignUpPage />} redirectTo="/home" />
          }
        />

        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  ) : (
    <Loader />
  );
};

export default App;
