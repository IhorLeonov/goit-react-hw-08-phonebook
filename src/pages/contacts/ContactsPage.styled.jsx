import styled from 'styled-components';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';

export const Phonebook = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 30px;
  border: ${props => `1px solid ${props.theme.colors.bd}`};
  border-top: 0px;
`;

export const SecondTitle = styled.h2`
  display: inline;
  color: ${props => `${props.theme.colors.hover}`};
`;

export const UpperBox = styled.div`
  padding-bottom: 25px;
  display: flex;
  align-items: center;
  border-bottom: ${props => `1px solid ${props.theme.colors.bd}`};
`;

export const ButtonAdd = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
  cursor: pointer;
`;

export const ShowIcon = styled(MdExpandMore)`
  width: 34px;
  height: 34px;
  fill: ${props => `${props.theme.colors.primary}`};
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, 0);
  transition: all 0.218s ease 0s;

  :hover,
  :focus {
    fill: ${props => `${props.theme.colors.hover}`};
    border: 1px solid rgb(198, 198, 198);
    background: #f7f7f7 linear-gradient(#f7f7f7, #f1f1f1);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }
`;

export const HideIcon = styled(MdExpandLess)`
  width: 34px;
  height: 34px;
  fill: ${props => `${props.theme.colors.primary}`};
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, 0);

  transition: all 0.218s ease 0s;

  :hover,
  :focus {
    fill: ${props => `${props.theme.colors.hover}`};
    border: 1px solid rgb(198, 198, 198);
    background: #f7f7f7 linear-gradient(#f7f7f7, #f1f1f1);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }
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
