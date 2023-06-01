import styled from 'styled-components';
import { ButtonSubmit } from 'components/contactForm/ContactForm.styled';
import { FaUserAlt } from 'react-icons/fa';

export const UserIcon = styled(FaUserAlt)`
  fill: ${props => `${props.theme.colors.primary}`};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Username = styled.p`
  font-weight: 700;
  color: ${props => `${props.theme.colors.hover}`};
`;

export const Button = styled(ButtonSubmit)`
  margin-top: 0;
`;
