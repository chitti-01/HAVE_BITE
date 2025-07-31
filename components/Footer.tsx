import React from 'react';
import { Link } from 'react-router-dom';
import { LogoIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-subtle border-t border-dark-text/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center text-center md:text-left gap-4">
          <div className="flex items-center space-x-2 justify-center md:justify-start">
            <LogoIcon className="h-8 w-8 text-primary" />
            <span className="text-2xl font-logo text-dark-text tracking-wide">Have Bite</span>
          </div>
          <div className="flex justify-center space-x-6 text-dark-text/75">
            <Link to="/about" className="hover:text-primary">About Us</Link>
            <Link to="/contact" className="hover:text-primary">Contact</Link>
            <Link to="/privacy-policy" className="hover:text-primary">Privacy Policy</Link>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-dark-text/60">&copy; {new Date().getFullYear()} Have Bite. All rights reserved.</p>
             <Link to="/admin/login" className="text-xs text-dark-text/60 hover:text-primary mt-1 inline-block">Admin Login</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;