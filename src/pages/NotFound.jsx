// src/components/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router for navigation
import { ArrowRightCircle } from 'lucide-react'; // Import a Lucide icon for visual appeal

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-50">
      {/* Heading with bigger font and animation */}
      <h1 className="text-8xl font-extrabold text-red-600 animate-pulse">
        404
      </h1>

      {/* Subheading with a little bit of text-shadow and a modern font */}
      <p className="text-2xl font-semibold text-gray-700 mt-4 max-w-lg text-center">
        Oops! The page you're looking for isn't here.
      </p>

      {/* Description with some padding */}
      <p className="text-lg text-gray-500 mt-2 mb-6">
        We can't seem to find the page you're looking for. Please check the URL or go back to the homepage.
      </p>

      {/* Navigation link with a button design */}
      <Link to="/" className="flex items-center text-blue-600 hover:text-blue-800 text-lg font-medium p-3 rounded-lg border-2 border-blue-600 hover:bg-blue-100 transition duration-300 ease-in-out">
        <ArrowRightCircle size={24} className="mr-2 animate-bounce" />
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
