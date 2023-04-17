import { Title, Container } from './HomePage.styled';

const HomePage = () => {
  return (
    <Container>
      <Title>
        Task manager welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </Title>
    </Container>
  );
};

export default HomePage;
