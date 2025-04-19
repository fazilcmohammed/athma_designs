// src/pages/NotFound.jsx
import React from 'react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-xl mb-2">Oops! Page not found.</p>
      <p className="text-gray-500">The page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;
