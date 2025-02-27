import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="section">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">The Ultimate Security Solution for Your Digital Assets</h2>
          
          <p className="text-gray-700 mb-6">
            In today's digital economy, securing your cryptocurrency investments is paramount. <strong>Trezor hardware wallet io</strong> stands at the forefront of blockchain security technology, offering unparalleled protection for your digital assets. Unlike software wallets that remain vulnerable to online threats, <strong>Trezor hardware wallet io</strong> keeps your private keys completely offline, ensuring they never get exposed to potential hackers.
          </p>
          
          <p className="text-gray-700 mb-6">
            Developed by SatoshiLabs, a pioneer in cryptocurrency security, <strong>Trezor hardware wallet io</strong> combines cutting-edge technology with user-friendly design. The device supports over 1,000 cryptocurrencies, making it the perfect solution for diverse investment portfolios. Whether you're a seasoned investor or just beginning your cryptocurrency journey, <strong>Trezor hardware wallet io</strong> provides the security foundation you need.
          </p>
          
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Key Security Benefits</h3>
            <ul className="space-y-3">
              {[
                "Complete isolation from potentially vulnerable computers",
                "PIN protection and optional passphrase encryption",
                "Recovery seed backup for wallet restoration",
                "Open-source firmware for community verification",
                "Physical design that makes tampering evident"
              ].map((benefit, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <CheckCircle className="text-primary flex-shrink-0 mr-2 mt-1" size={20} />
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <p className="text-gray-700">
            With <a href="#" className="text-primary hover:underline animated-border">Trezor hardware wallet io</a>, you're not just buying a device; you're investing in peace of mind. Join the millions of users worldwide who trust <strong>Trezor hardware wallet io</strong> to safeguard their digital wealth.
          </p>
        </motion.div>
        
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1625806335347-a20e8b5a9c5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Trezor hardware wallet io device" 
              className="rounded-xl shadow-2xl animate-float"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary rounded-full opacity-10 z-0"></div>
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary rounded-full opacity-10 z-0"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;