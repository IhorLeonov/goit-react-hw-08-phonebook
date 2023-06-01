import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from 'components/appBar/AppBar';
import { Suspense } from 'react';
import { Container } from 'components/layout/Layout.styled';
import { Loader } from 'components/loader/Loader';

export const Layout = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Loader width={96} />}>
        <Outlet />
      </Suspense>
      <Toaster position="top-left" reverseOrder={false} />
    </Container>
  );
};
