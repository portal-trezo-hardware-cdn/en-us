export interface CryptoPrice {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.FC;
}

export interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
}