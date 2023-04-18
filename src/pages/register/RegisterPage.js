import { RegisterForm } from 'components/registerForm/RegisterForm';
import { RegisterBox, Title } from './RegisterPage.styled';
// import { Helmet } from 'react-helmet-async';
// import { HelmetProvider } from 'react-helmet-async';

const RegisterPage = () => {
  return (
    <>
      {/* <Helmet> */}
      <Title>Registration</Title>
      {/* </Helmet> */}
      <RegisterBox>
        <RegisterForm />
      </RegisterBox>
    </>
  );
};

export default RegisterPage;
