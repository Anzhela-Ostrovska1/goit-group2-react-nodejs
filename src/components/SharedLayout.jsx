import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Loader from '../components/common/Loader/Loader';
import { Footer } from './Footer/Footer';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default SharedLayout;
