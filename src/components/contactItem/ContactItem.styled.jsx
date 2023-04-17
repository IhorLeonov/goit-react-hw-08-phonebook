import styled from 'styled-components';
import { ButtonSubmit } from 'components/contactForm/ContactForm.styled';

export const Item = styled.li`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  margin-top: 10px;
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

export const TextWraper = styled.span`
  margin-left: 10px;
`;
