import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from 'components/appBar/AppBar';
import { Suspense } from 'react';
import { Container } from 'components/layout/Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-left" reverseOrder={false} />
    </Container>
  );
};
