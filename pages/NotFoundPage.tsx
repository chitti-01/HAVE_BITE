
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="text-center py-20">
      <img src="https://picsum.photos/seed/404/500/300" alt="Lost" className="mx-auto rounded-lg mb-8 shadow-lg" />
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <h2 className="text-3xl font-semibold text-dark-text mt-4">Page Not Found</h2>
      <p className="text-dark-text/90 mt-2">Oops! The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="mt-8 inline-block bg-accent text-white font-bold py-3 px-8 rounded-full hover:opacity-90 transition-all"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;