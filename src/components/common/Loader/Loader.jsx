import { ThreeDots } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderContainer>
      <ThreeDots color="#007bff" />
    </LoaderContainer>
  );
};

export default Loader;
