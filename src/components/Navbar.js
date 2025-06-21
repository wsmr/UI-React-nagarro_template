import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaGlobe } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 text-white py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-white flex items-center">
            <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30 30C45 15 55 15 70 30C85 45 85 55 70 70C55 85 45 85 30 70C15 55 15 45 30 30Z" stroke="#00e6b0" strokeWidth="5" fill="none" />
              <path d="M40 40C50 30 50 30 60 40C70 50 70 50 60 60C50 70 50 70 40 60C30 50 30 50 40 40Z" stroke="#00e6b0" strokeWidth="5" fill="none" />
            </svg>
            <span className="ml-2">nagarro</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#industries" className="nav-link">industries</a>
          <a href="#services" className="nav-link">services</a>
          <a href="#insights" className="nav-link">insights</a>
          <a href="#about" className="nav-link">about</a>
          <a href="#careers" className="nav-link">careers</a>
          <a href="#contact" className="nav-link">contact us</a>
          <button className="text-white hover:text-primary-teal transition-colors">
            <FaSearch size={18} />
          </button>
          
          {/* Language Selector */}
          <div className="relative">
            <button 
              className="flex items-center text-white hover:text-primary-teal transition-colors"
              onClick={() => setLanguageOpen(!languageOpen)}
            >
              <span className="mr-1">en</span>
              <FaGlobe size={14} />
            </button>
            
            {languageOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full right-0 mt-2 bg-gray-900 rounded-md shadow-lg py-2 w-20"
              >
                <a href="#en" className="block px-4 py-1 text-sm hover:bg-gray-800">en</a>
                <a href="#de" className="block px-4 py-1 text-sm hover:bg-gray-800">de</a>
                <a href="#ja" className="block px-4 py-1 text-sm hover:bg-gray-800">ja</a>
                <a href="#tr" className="block px-4 py-1 text-sm hover:bg-gray-800">tr</a>
              </motion.div>
            )}
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-black bg-opacity-95"
        >
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col space-y-4">
              <a href="#industries" className="nav-link py-2">industries</a>
              <a href="#services" className="nav-link py-2">services</a>
              <a href="#insights" className="nav-link py-2">insights</a>
              <a href="#about" className="nav-link py-2">about</a>
              <a href="#careers" className="nav-link py-2">careers</a>
              <a href="#contact" className="nav-link py-2">contact us</a>
              
              <div className="flex items-center space-x-4 pt-2">
                <button className="text-white hover:text-primary-teal transition-colors">
                  <FaSearch size={18} />
                </button>
                <div className="flex space-x-2">
                  <a href="#en" className="text-white hover:text-primary-teal">en</a>
                  <a href="#de" className="text-white hover:text-primary-teal">de</a>
                  <a href="#ja" className="text-white hover:text-primary-teal">ja</a>
                  <a href="#tr" className="text-white hover:text-primary-teal">tr</a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
