import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { CryptoPrice } from '../types';

const CryptoTicker: React.FC = () => {
  const [cryptoPrices, setCryptoPrices] = useState<CryptoPrice[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCryptoPrices = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets',
          {
            params: {
              vs_currency: 'usd',
              order: 'market_cap_desc',
              per_page: 10,
              page: 1,
              sparkline: false,
              price_change_percentage: '24h',
            },
          }
        );
        setCryptoPrices(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching crypto prices:', error);
        setLoading(false);
      }
    };

    fetchCryptoPrices();
    const interval = setInterval(fetchCryptoPrices, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="w-full bg-primary-dark text-white py-2 px-4">
        <div className="flex justify-center items-center">
          <div className="animate-pulse">Loading cryptocurrency prices...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-primary-dark text-white py-2 overflow-hidden">
      <div className="crypto-ticker">
        <div className="crypto-ticker-content">
          {cryptoPrices.map((crypto) => (
            <span key={crypto.id} className="inline-flex items-center mx-4">
              <span className="font-bold">{crypto.name}</span>
              <span className="mx-1">({crypto.symbol.toUpperCase()})</span>
              <span className="font-mono">${crypto.current_price.toLocaleString()}</span>
              <span
                className={`ml-2 flex items-center ${
                  crypto.price_change_percentage_24h >= 0
                    ? 'text-green-400'
                    : 'text-red-400'
                }`}
              >
                {crypto.price_change_percentage_24h >= 0 ? (
                  <ArrowUp size={14} className="mr-1" />
                ) : (
                  <ArrowDown size={14} className="mr-1" />
                )}
                {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%
              </span>
            </span>
          ))}
          {/* Duplicate for continuous scrolling effect */}
          {cryptoPrices.map((crypto) => (
            <span key={`dup-${crypto.id}`} className="inline-flex items-center mx-4">
              <span className="font-bold">{crypto.name}</span>
              <span className="mx-1">({crypto.symbol.toUpperCase()})</span>
              <span className="font-mono">${crypto.current_price.toLocaleString()}</span>
              <span
                className={`ml-2 flex items-center ${
                  crypto.price_change_percentage_24h >= 0
                    ? 'text-green-400'
                    : 'text-red-400'
                }`}
              >
                {crypto.price_change_percentage_24h >= 0 ? (
                  <ArrowUp size={14} className="mr-1" />
                ) : (
                  <ArrowDown size={14} className="mr-1" />
                )}
                {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CryptoTicker;