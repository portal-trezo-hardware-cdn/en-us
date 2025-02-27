import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import CryptoTicker from './components/CryptoTicker';
import Features from './components/Features';
import About from './components/About';
import SecurityFeatures from './components/SecurityFeatures';
import Comparison from './components/Comparison';
import Footer from './components/Footer';

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-background">
        <Helmet>
          <title>Trezor Hardware Wallet IO | Ultimate Cryptocurrency Security</title>
          <meta name="description" content="Discover the ultimate security for your cryptocurrency with Trezor hardware wallet io. Protect your digital assets with military-grade encryption and user-friendly interface." />
          <meta name="keywords" content="trezor hardware wallet io, cryptocurrency security, bitcoin hardware wallet, crypto security, digital asset protection" />
        </Helmet>
        
        <Navbar />
        <HeroSlider />
        <CryptoTicker />
        <About />
        <Features />
        <SecurityFeatures />
        <Comparison />
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;