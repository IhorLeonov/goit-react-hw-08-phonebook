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
  /* margin-top: 15px;
  text-align: center; */
  display: inline;
`;

export const UpperBox = styled.div`
  padding-bottom: 15px;
  display: flex;
  align-items: center;
  border-bottom: ${props => `1px solid ${props.theme.colors.bd}`};
`;

export const ButtonAdd = styled(ButtonSubmit)`
  margin: 0;
  margin-left: 10px;
  padding: 0.2em 0.6em;

  background: rgb(128, 244, 126);
  color: rgb(68, 68, 68);
  font-size: 18px;
`;

export const Headers = styled.div`
  display: flex;
  padding-bottom: 10px;
  padding-top: 10px;
  align-items: center;
  /* margin-left: 10px; */
  /* border: 1px solid black; */
  border-bottom: ${props => `1px solid ${props.theme.colors.bd}`};
`;

export const Total = styled.div`
  width: 70px;
`;

export const Name = styled.div`
  width: 200px;
  /* border: 1px solid red; */
  margin-left: 10px;
`;

export const Number = styled.div`
  width: 200px;
  /* border: 1px solid blue; */
  /* margin-left: 10px; */
`;
