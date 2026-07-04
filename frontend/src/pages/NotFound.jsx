import { Link } from 'react-router-dom';
import Button from '../components/Button.jsx';

const NotFound = () => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">404 Error</p>
      <h1 className="mt-3 text-4xl font-extrabold text-gray-900 sm:text-5xl">Page not found</h1>
      <p className="mt-4 max-w-md text-gray-500">
        The page you're looking for doesn't exist or may have been moved.
      </p>
      <Link to="/" className="mt-8">
        <Button variant="primary">Back to Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;