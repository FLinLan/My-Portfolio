import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 py-4">
      <div className="container mx-auto px-4 text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} Max Lan. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
