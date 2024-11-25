import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

const ErrorPages = () => {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Career - Counseling | ErrorPages</title>
      </Helmet>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
        <h1 className="text-8xl font-bold text-red-500">404</h1>
        <p className="mt-4 text-2xl font-semibold">Oops! Page not found.</p>
        <p className="mt-2 text-gray-600 text-center">
          Sorry, the page you’re looking for doesn’t exist. <br />
          You might have the wrong address, or the page may have moved.
        </p>
        <button
          onClick={() => navigate('/')}
          className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
        >
          Go Back to Home
        </button>
      </div>
    </>
  );
};

export default ErrorPages;
