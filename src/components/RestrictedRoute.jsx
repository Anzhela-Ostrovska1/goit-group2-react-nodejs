import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/Auth/AuthSelectors';
import { useSelector } from 'react-redux';

const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
