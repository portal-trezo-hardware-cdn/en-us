import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Github, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Trezor Hardware Wallet IO</h3>
            <p className="mb-4 text-gray-300">
              The ultimate security solution for your cryptocurrency assets. Protect your digital wealth with military-grade encryption.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Support</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://bitcoin.org/" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  Bitcoin <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
              <li>
                <a href="https://ethereum.org/" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  Ethereum <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
              <li>
                <a href="https://www.blockchain.com/" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  Blockchain <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
              <li>
                <a href="https://coinmarketcap.com/" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  CoinMarketCap <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
              <li>
                <a href="https://www.coingecko.com/" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  CoinGecko <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4 text-gray-300">
              Subscribe to our newsletter for the latest updates on cryptocurrency security and Trezor hardware wallet io.
            </p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 rounded-lg bg-white bg-opacity-10 border border-white border-opacity-20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40 text-white placeholder-gray-300"
              />
              <button 
                type="submit" 
                className="px-4 py-2 bg-white text-primary font-medium rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white border-opacity-20 pt-8 text-center">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} Trezor Hardware Wallet IO. All rights reserved.
          </p>
          <p className="text-gray-400 mt-2 text-sm">
            "Trezor hardware wallet io" is used for demonstration purposes only. This website is not affiliated with SatoshiLabs or the Trezor brand.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;