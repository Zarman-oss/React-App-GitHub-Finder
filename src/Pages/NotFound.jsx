import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="hero">
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <div className="h1 text-8xl font-bold mb-8">404-Page not found</div>
          <Link to="/" className="btn btn-info btn-lg">
            <FaHome className="mr-2" />
            Click to go back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
