import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, RefreshCw, Zap, Layers } from 'lucide-react';

const SecurityFeatures: React.FC = () => {
  return (
    <section className="section bg-background-secondary">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Advanced Security Architecture</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Trezor hardware wallet io employs multiple layers of security to ensure your cryptocurrency remains protected against all threats.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card"
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <Shield className="mr-3 text-primary" size={28} />
            Secure Element Technology
          </h3>
          <p className="text-gray-700 mb-4">
            At the core of <strong>Trezor hardware wallet io</strong> is a specialized secure element chip designed to resist physical attacks and tampering attempts. This dedicated hardware:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Stores private keys in an isolated environment</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Performs cryptographic operations without exposing sensitive data</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Prevents side-channel attacks that target electromagnetic emissions</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Includes tamper-evident design to reveal physical interference</span>
            </li>
          </ul>
          <p className="text-gray-700">
            The secure element in <strong>Trezor hardware wallet io</strong> has undergone rigorous security certifications to ensure it meets the highest industry standards.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card"
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <Lock className="mr-3 text-primary" size={28} />
            Multi-Layer Authentication
          </h3>
          <p className="text-gray-700 mb-4">
            <strong>Trezor hardware wallet io</strong> implements multiple authentication factors to ensure only authorized users can access funds:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>PIN protection with exponentially increasing wait times between incorrect attempts</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Optional passphrase that acts as a "25th word" to your recovery seed</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Physical button confirmation required for all transactions</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Advanced address verification to prevent man-in-the-middle attacks</span>
            </li>
          </ul>
          <p className="text-gray-700">
            This multi-layered approach ensures that even if one security measure is compromised, your assets remain protected by additional safeguards.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="card"
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <Eye className="mr-3 text-primary" size={28} />
            Transparent Security
          </h3>
          <p className="text-gray-700 mb-4">
            <strong>Trezor hardware wallet io</strong> embraces open-source principles to ensure maximum security through transparency:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Fully open-source firmware that can be audited by security researchers</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Community-driven security improvements and bug bounty programs</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Deterministic builds that allow users to verify the code running on their device</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Regular third-party security audits with published results</span>
            </li>
          </ul>
          <p className="text-gray-700">
            This commitment to transparency ensures that <strong>Trezor hardware wallet io</strong> maintains the highest security standards without hidden vulnerabilities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="card"
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <RefreshCw className="mr-3 text-primary" size={28} />
            Disaster Recovery
          </h3>
          <p className="text-gray-700 mb-4">
            <strong>Trezor hardware wallet io</strong> includes comprehensive backup and recovery options:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>12-24 word recovery seed based on BIP39 standard</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Shamir Backup allowing seed splitting across multiple locations</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Cross-compatibility with other BIP39 wallets for recovery flexibility</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Dry-run recovery to verify backup integrity without exposing real seeds</span>
            </li>
          </ul>
          <p className="text-gray-700">
            These recovery mechanisms ensure that even if your <strong>Trezor hardware wallet io</strong> device is lost, damaged, or stolen, your cryptocurrency remains accessible.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SecurityFeatures;