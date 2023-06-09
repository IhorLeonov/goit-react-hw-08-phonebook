import styled from 'styled-components';
import { ButtonSubmit } from 'components/contactForm/ContactForm.styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-top: 10px;
  padding: 10px;
  font-size: 20px;
  /* background-color: ${props => ` ${props.theme.colors.bd}`}; */
  border: ${props => `1px solid ${props.theme.colors.bd}`};

  :first-child {
    margin-top: 0;
  }
`;

export const ButtonDelete = styled(ButtonSubmit)`
  margin: 0;
  margin-left: auto;
  font-size: 11px;
`;

export const FirstLetterBox = styled.div`
  margin-left: 5px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: 700;
  font-size: 22px;
  text-shadow: 0 0 1px #000000;
`;

export const Name = styled.div`
  width: 200px;
  margin-left: 25px;
`;

export const Number = styled.div`
  width: 200px;
`;
