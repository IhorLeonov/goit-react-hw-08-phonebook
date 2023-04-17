import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <>
      <h2>Sorry, something went wrong :( </h2>
      <Link to="/">Home</Link>
    </>
  );
};

export default NotFoundPage;
