import React from 'react';
import { TailSpin } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderContainer>
      <TailSpin color="#007bff" height={50} width={50} />
    </LoaderContainer>
  );
};

export default Loader;
