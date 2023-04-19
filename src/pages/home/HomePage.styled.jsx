import styled from 'styled-components';
import homeIcon from 'images/home-icon.png';

export const Wrapper = styled.div`
  min-height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const HomeButton = styled.div`
  width: 200px;
  height: 200px;
  background-image: url('${homeIcon}');
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`;
