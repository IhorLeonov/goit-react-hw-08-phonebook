import { Wrapper, HomeButton } from 'pages/home/HomePage.styled';
import { NavLink } from 'components/navigation/Navigation.styled';

const HomePage = () => {
  return (
    <Wrapper>
      <NavLink to="/contacts">
        <HomeButton></HomeButton>
      </NavLink>
    </Wrapper>
  );
};

export default HomePage;
