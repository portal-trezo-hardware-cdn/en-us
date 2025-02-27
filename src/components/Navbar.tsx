import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Shield } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center space-x-2">
            <Shield size={32} className={`${scrolled ? 'text-primary' : 'text-white'}`} />
            <span className={`text-xl font-bold ${scrolled ? 'text-primary' : 'text-white'}`}>
              Trezor Hardware Wallet IO
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className={`font-medium ${scrolled ? 'text-gray-800' : 'text-white'} hover:text-primary transition-colors`}>Home</a>
            <a href="#about" className={`font-medium ${scrolled ? 'text-gray-800' : 'text-white'} hover:text-primary transition-colors`}>About</a>
            <a href="#features" className={`font-medium ${scrolled ? 'text-gray-800' : 'text-white'} hover:text-primary transition-colors`}>Features</a>
            <a href="#" className="btn btn-primary">Get Started</a>
          </div>

          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? 
              <X size={24} className={scrolled ? 'text-gray-800' : 'text-white'} /> : 
              <Menu size={24} className={scrolled ? 'text-gray-800' : 'text-white'} />
            }
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white"
          >
            <div className="px-4 py-6 space-y-4">
              <a 
                href="#" 
                className="block font-medium text-gray-800 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="block font-medium text-gray-800 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a 
                href="#features" 
                className="block font-medium text-gray-800 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Features
              </a>
              <a 
                href="#" 
                className="block btn btn-primary text-center"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;