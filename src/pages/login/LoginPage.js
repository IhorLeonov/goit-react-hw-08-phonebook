import { LoginForm } from 'components/loginForm/LoginForm';
import { LoginBox, LoginTitle } from './LoginPage.styled';
// import { Helmet } from 'react-helmet-async';
// import { HelmetProvider } from 'react-helmet-async';
// const helmetContext = {};

const LoginPage = () => {
  return (
    <>
      {/* <Helmet> */}
      <LoginTitle>Login</LoginTitle>
      {/* </Helmet> */}
      <LoginBox>
        <LoginForm />
      </LoginBox>
    </>
  );
};

export default LoginPage;
