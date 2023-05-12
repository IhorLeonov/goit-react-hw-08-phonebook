import styled from 'styled-components';
import { ButtonSubmit } from 'components/contactForm/ContactForm.styled';

export const Phonebook = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 30px;
  border: ${props => `1px solid ${props.theme.colors.bd}`};
  border-top: 0px;
`;

export const SecondTitle = styled.h2`
  display: inline;
`;

export const UpperBox = styled.div`
  padding-bottom: 25px;
  display: flex;
  align-items: center;
  border-bottom: ${props => `1px solid ${props.theme.colors.bd}`};
  
`;

export const ButtonAdd = styled(ButtonSubmit)`
  margin: 0;
  margin-left: 15px;
  padding: 0.2em 0.6em;

  background: #ed8e6b;
  color: rgb(247, 239, 239);
  font-size: 18px;
`;

export const Headers = styled.div`
  display: flex;
  padding-bottom: 10px;
  padding-top: 10px;
  align-items: center;
  border-bottom: ${props => `1px solid ${props.theme.colors.bd}`};
`;

export const Total = styled.div`
  width: 70px;
`;

export const Name = styled.div`
  width: 200px;
  margin-left: 10px;
`;

export const Number = styled.div`
  width: 200px;
`;
