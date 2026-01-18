import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 border-t border-stone-800 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-stone-500 text-sm">
        <div className="mb-4 md:mb-0">
          <span className="font-serif text-stone-300 text-lg mr-2">NK.</span>
          © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
        </div>
        
        <div className="flex space-x-6">
          <a href="#" className="hover:text-stone-300 transition-colors">Back to Top</a>
          <a href={PERSONAL_INFO.linkedin} className="hover:text-stone-300 transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;