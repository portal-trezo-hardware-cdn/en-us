import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Cpu, Smartphone, RefreshCw, Users } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    id: 1,
    title: "Military-Grade Encryption",
    description: "Trezor hardware wallet io utilizes advanced encryption algorithms to ensure your private keys remain secure at all times.",
    icon: Shield
  },
  {
    id: 2,
    title: "Offline Security",
    description: "Your private keys never leave the Trezor hardware wallet io device, keeping them safe from online threats and hackers.",
    icon: Lock
  },
  {
    id: 3,
    title: "Advanced Chip Technology",
    description: "Built with specialized secure elements that protect against physical tampering and side-channel attacks.",
    icon: Cpu
  },
  {
    id: 4,
    title: "User-Friendly Interface",
    description: "Intuitive companion app makes managing your cryptocurrency portfolio simple for both beginners and experts.",
    icon: Smartphone
  },
  {
    id: 5,
    title: "Regular Firmware Updates",
    description: "Trezor hardware wallet io receives continuous security updates to protect against emerging threats.",
    icon: RefreshCw
  },
  {
    id: 6,
    title: "Multi-Signature Support",
    description: "Create multi-signature wallets requiring approval from multiple devices for enhanced security.",
    icon: Users
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Features: React.FC = () => {
  return (
    <section id="features" className="section bg-background-secondary">
      <div className="text-center mb-16">
        <motion.h2 
          className="text-4xl font-bold mb-4 gradient-text"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Trezor Hardware Wallet IO
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Discover the advanced features that make Trezor hardware wallet io the preferred choice for securing cryptocurrency assets.
        </motion.p>
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {features.map((feature) => (
          <motion.div 
            key={feature.id} 
            className="card hover:border-l-4 hover:border-primary futuristic-glow"
            variants={item}
          >
            <div className="flex flex-col items-center text-center">
              <div className="p-4 rounded-full bg-primary bg-opacity-10 mb-6">
                <feature.icon size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Features;