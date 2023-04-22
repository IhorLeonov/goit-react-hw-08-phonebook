import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from 'components/appBar/AppBar';
import { Suspense } from 'react';
import { Container } from 'components/layout/Layout.styled';
import { RotatingLines } from 'react-loader-spinner';

<RotatingLines
  strokeColor="grey"
  strokeWidth="5"
  animationDuration="0.75"
  width="96"
  visible={true}
/>;

export const Layout = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<RotatingLines />}>
        <Outlet />
      </Suspense>
      <Toaster position="top-left" reverseOrder={false} />
    </Container>
  );
};
