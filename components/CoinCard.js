// components/CoinCard.js
import Link from 'next/link';
import styles from '../styles/CoinCard.module.css';

const CoinCard = ({ coin }) => (
  <Link href={`/coins/${coin.id}`}>
    <a className={styles.card}>
      <img src={coin.image} alt={coin.name} width={50} height={50} />
      <h2>{coin.name} ({coin.symbol.toUpperCase()})</h2>
      <p>Current Price: ${coin.current_price}</p>
      <p>Market Cap: ${coin.market_cap}</p>
      <p>24h Change: {coin.price_change_24h.toFixed(2)}%</p>
    </a>
  </Link>
);

export default CoinCard;
