// pages/coins/[id].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import styles from '../../styles/Detail.module.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CoinDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [coin, setCoin] = useState(null);
  const [historicalData, setHistoricalData] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
        .then(response => setCoin(response.data))
        .catch(error => console.error('Error fetching coin data:', error));

      axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=30`)
        .then(response => setHistoricalData(response.data))
        .catch(error => console.error('Error fetching historical data:', error));
    }
  }, [id]);

  if (!coin || !historicalData) return <div>Loading...</div>;

  const chartData = {
    labels: historicalData.prices.map(price => new Date(price[0]).toLocaleDateString()),
    datasets: [
      {
        label: 'Price (USD)',
        data: historicalData.prices.map(price => price[1]),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div className={styles.container}>
      <Link href="/">
        <a className={styles.backButton}>Back</a>
      </Link>
      <div className={styles.card}>
        <div className={styles.header}>
          <img src={coin.image.large} alt={coin.name} width={100} height={100} />
          <h1>{coin.name} ({coin.symbol.toUpperCase()})</h1>
        </div>
        <div className={styles.details}>
          <div className={styles.detailItem}>
            <span>Current Price:</span> <span>${coin.market_data.current_price.usd}</span>
          </div>
          <div className={styles.detailItem}>
            <span>Market Cap:</span> <span>${coin.market_data.market_cap.usd}</span>
          </div>
          <div className={styles.detailItem}>
            <span>Market Cap Rank:</span> <span>{coin.market_cap_rank}</span>
          </div>
          <div className={styles.detailItem}>
            <span>Fully Diluted Valuation:</span> <span>${coin.market_data.fully_diluted_valuation.usd}</span>
          </div>
          <div className={styles.detailItem}>
            <span>Total Volume:</span> <span>${coin.market_data.total_volume.usd}</span>
          </div>
          <div className={styles.detailItem}>
            <span>24h Price Change:</span> <span>{coin.market_data.price_change_percentage_24h.toFixed(2)}%</span>
          </div>
          <div className={styles.detailItem}>
            <span>Circulating Supply:</span> <span>{coin.market_data.circulating_supply}</span>
          </div>
        </div>
        <div className={styles.chart}>
          <h2>Price Chart (Last 30 Days)</h2>
          <Line data={chartData} />
        </div>
      </div>
    </div>
  );
};

export default CoinDetail;
