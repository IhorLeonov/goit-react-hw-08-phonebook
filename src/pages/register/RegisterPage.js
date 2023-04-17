import { RegisterForm } from 'components/registerForm/RegisterForm';
// import { Helmet } from 'react-helmet-async';
// import { HelmetProvider } from 'react-helmet-async';

const RegisterPage = () => {
  return (
    <div>
      {/* <Helmet> */}
      <title>Registration</title>
      {/* </Helmet> */}
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
