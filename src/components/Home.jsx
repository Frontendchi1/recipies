import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto py-4 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Recipe Site</h1>
        <nav className="flex items-center space-x-5 ml-5">
          <a href="/" className="no-underline hover:text-gray-300 transition-colors duration-300">Home</a>
          <a href="/recipes" className="no-underline hover:text-gray-300 transition-colors duration-300">Recipes</a>
          <a href="/categories" className="no-underline hover:text-gray-300 transition-colors duration-300">Categories</a>
          <a href="/search" className="no-underline hover:text-gray-300 transition-colors duration-300">Search</a>
          <a href="/about" className="no-underline hover:text-gray-300 transition-colors duration-300">About Us</a>
        </nav>
        {/* Add user account section */}
      </div>
    </header>
  );
};

export default Header;
