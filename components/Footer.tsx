
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-700/50">
      <div className="container mx-auto px-6 py-6 text-center text-gray-500">
        <p>&copy; {currentYear} {PERSONAL_INFO.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
