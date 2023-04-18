import styled from 'styled-components';
import { ButtonSubmit } from 'components/contactForm/ContactForm.styled';

export const Form = styled.form`
  margin-top: 15px;
  width: 320px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const TextWrapper = styled.span`
  margin-bottom: 10px;
`;

export const Button = styled(ButtonSubmit)`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;
