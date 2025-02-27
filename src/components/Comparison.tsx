import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const Comparison: React.FC = () => {
  return (
    <section className="section">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Why Trezor Hardware Wallet IO Outperforms Alternatives</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          See how Trezor hardware wallet io compares to other cryptocurrency storage solutions.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="overflow-x-auto"
      >
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-primary text-white">
              <th className="p-4 text-left">Security Feature</th>
              <th className="p-4 text-center">Trezor Hardware Wallet IO</th>
              <th className="p-4 text-center">Software Wallets</th>
              <th className="p-4 text-center">Exchange Wallets</th>
              <th className="p-4 text-center">Paper Wallets</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 hover:bg-gray-50">
              <td className="p-4 font-medium">Offline Private Keys</td>
              <td className="p-4 text-center"><Check className="inline text-green-500" size={24} /></td>
              <td className="p-4 text-center"><X className="inline text-red-500" size={24} /></td>
              <td className="p-4 text-center"><X className="inline text-red-500" size={24} /></td>
              <td className="p-4 text-center"><Check className="inline text-green-500" size={24} /></td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-gray-50">
              <td className="p-4 font-medium">Protection Against Malware</td>
              <td className="p-4 text-center"><Check className="inline text-green-500" size={24} /></td>
              <td className="p-4 text-center"><X className="inline text-red-500" size={24} /></td>
              <td className="p-4 text-center"><Check className="inline text-green-500" size={24} /></td>
              <td className="p-4 text-center"><X className="inline text-red-500" size={24} /></td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-gray-50">
              <td className="p-4 font-medium">Physical Security Features</td>
              <td className="p-4 text-center"><Check className="inline text-green-500" size={24} /></td>
              <td className="p-4 text-center"><X className="inline text-red-500" size={24} /></td>
              <td className="p-4 text-center"><X className="inline text-red-500" size={24} /></td>
              <td className="p-4 text-center"><X className="inline text-red-500" size={24} /></td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-gray-50">
              <td className="p-4 font-medium">User-Friendly Interface</td>
              <td className="p-4 text-center"><Check className="inline text-green-500" size={24} /></td>
              <td className="p-4 text-center"><Check className="inline text-green-500" size={24} /></td>
              <td className="p-4 text-center"><Check className="inline text-green-500" size={24} /></td>
              <td className="p-4 text-center"><X className="inline text-red-500" size={24} /></td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-gray-50">
              <td className="p-4 font-medium">Recovery Options</td>
              <td className="p-4 text-center"><Check className="inline text-green-500" size={24} /></td>
              <td className="p-4 text-center"><Check className="inline text-green-500" size={24} /></td>
              <td className="p-4 text-center"><Check className="inline text-green-500" size={24} /></td>
              <td className="p-4 text-center"><X className="inline text-red-500" size={24} /></td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-gray-50">
              <td className="p-4 font-medium">Multi-Currency Support</td>
              <td className="p-4 text-center"><Check className="inline text-green-500" size={24} /></td>
              <td className="p-4 text-center"><Check className="inline text-green-500" size={24} /></td>
              <td className="p-4 text-center"><Check className="inline text-green-500" size={24} /></td>
              <td className="p-4 text-center"><Check className="inline text-green-500" size={24} /></td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-4 font-medium">Protection Against Exchange Hacks</td>
              <td className="p-4 text-center"><Check className="inline text-green-500" size={24} /></td>
              <td className="p-4 text-center"><Check className="inline text-green-500" size={24} /></td>
              <td className="p-4 text-center"><X className="inline text-red-500" size={24} /></td>
              <td className="p-4 text-center"><Check className="inline text-green-500" size={24} /></td>
            </tr>
          </tbody>
        </table>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-8 text-center"
      >
        <p className="text-gray-700 mb-6">
          As the comparison clearly shows, <strong>Trezor hardware wallet io</strong> provides the most comprehensive security solution for cryptocurrency storage, combining the benefits of offline security with user-friendly features.
        </p>
        <a href="#" className="btn btn-primary">
          Learn More About Trezor Hardware Wallet IO
        </a>
      </motion.div>
    </section>
  );
};

export default Comparison;