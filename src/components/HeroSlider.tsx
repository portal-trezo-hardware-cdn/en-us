import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { Slide } from '../types';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides: Slide[] = [
  {
    id: 1,
    title: "Secure Your Digital Fortune with Trezor Hardware Wallet IO",
    description: "The most trusted hardware wallet in the cryptocurrency industry. Protect your assets with military-grade security.",
    image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 2,
    title: "Complete Control Over Your Crypto Assets",
    description: "Trezor hardware wallet io gives you full ownership of your private keys and complete control over your digital assets.",
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 3,
    title: "User-Friendly Interface with Advanced Security",
    description: "Trezor hardware wallet io combines intuitive design with cutting-edge security features for all users.",
    image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
  }
];

const HeroSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false
  };

  return (
    <div className="relative overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative h-[600px]">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
            <div className="relative h-full flex items-center justify-center px-4 md:px-16">
              <div className="max-w-4xl text-center">
                <motion.h1 
                  className="text-4xl md:text-6xl font-bold text-white mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {slide.title}
                </motion.h1>
                <motion.p 
                  className="text-xl md:text-2xl text-gray-200 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {slide.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <a href="#features" className="btn btn-primary mr-4">Explore Features</a>
                  <a href="#about" className="btn btn-outline text-white border-white hover:bg-white hover:text-primary">Learn More</a>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;