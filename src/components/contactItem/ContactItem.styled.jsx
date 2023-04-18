import styled from 'styled-components';
import { ButtonSubmit } from 'components/contactForm/ContactForm.styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-top: 10px;
  padding-bottom: 10px;

  :first-child {
    margin-top: 0;
  }
  font-size: 20px;
  border-bottom: ${props => `1px solid ${props.theme.colors.bd}`};
`;

export const ButtonDelete = styled(ButtonSubmit)`
  margin: 0;
  margin-left: auto;
  font-size: 11px;
`;

export const FirstLetterBox = styled.div`
  margin-left: 15px;
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
  /* border: 1px solid red; */
  margin-left: 25px;
`;

export const Number = styled.div`
  width: 200px;
  /* border: 1px solid blue; */
  /* margin-left: 10px; */
`;
