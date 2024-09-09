import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Max Lan</h1>
        <ul className="flex space-x-4">
          <li><a href="#about" className="text-gray-600 hover:text-gray-900">About</a></li>
          <li><a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a></li>
          <li><a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
