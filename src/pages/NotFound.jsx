import React from 'react';
import { Link } from 'react-router';
import { FaArrowLeft } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-center px-4">
      <h1 className="text-6xl font-bold text-gray-800 dark:text-white mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
        Page Not Found
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-all duration-300"
      >
        <FaArrowLeft />
        Go back Home
      </Link>
    </div>
  );
};

export default NotFound;
