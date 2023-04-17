import styled from 'styled-components';
import { ButtonSubmit } from 'components/contactForm/ContactForm.styled';

export const Phonebook = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 30px;
  /* width: 400px; */

  /* border-radius: 5px; */
  border: ${props => `1px solid ${props.theme.colors.bd}`};
  /* box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16); */
  /* background-color: ${props => `${props.theme.colors.bg}`}; */
`;

export const MainTitle = styled.h1`
  text-align: center;
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
