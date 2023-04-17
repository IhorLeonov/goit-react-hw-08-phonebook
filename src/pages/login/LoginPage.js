import { LoginForm } from 'components/loginForm/LoginForm';
// import { Helmet } from 'react-helmet-async';
// import { HelmetProvider } from 'react-helmet-async';
// const helmetContext = {};

const LoginPage = () => {
  return (
    <div>
      {/* <Helmet> */}
      <title>Login</title>
      {/* </Helmet> */}
      <LoginForm />
    </div>
  );
};

export default LoginPage;
