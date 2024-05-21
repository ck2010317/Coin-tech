// pages/index.js
import { useEffect, useState } from 'react';
import { fetchCoins } from '../services/coinService';
import CoinCard from '../components/CoinCard';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [coins, setCoins] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(10);
  const [filterField, setFilterField] = useState('id');
  const [filterValue, setFilterValue] = useState('');

  useEffect(() => {
    const getCoins = async () => {
      const data = await fetchCoins(page, perPage);
      setCoins(data);
      setTotalPages(Math.ceil(100 / perPage));
    };
    getCoins();
  }, [page, perPage]);

  const filteredCoins = coins.filter(coin => coin[filterField].toString().toLowerCase().includes(filterValue.toLowerCase()));

  return (
    <div className={styles.container}>
      <h1>Available Coins</h1>
      <div className={styles.filter}>
        <select value={filterField} onChange={(e) => setFilterField(e.target.value)}>
          <option value="id">ID</option>
          <option value="symbol">Symbol</option>
          <option value="name">Name</option>
          <option value="type">Type</option>
        </select>
        <input
          type="text"
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
          placeholder={`Filter by ${filterField}`}
        />
      </div>
      <div className={styles.grid}>
        {filteredCoins.map((coin) => (
          <CoinCard key={coin.id} coin={coin} />
        ))}
      </div>
      <div className={styles.pagination}>
        <button onClick={() => setPage(1)} disabled={page === 1}>First</button>
        <button onClick={() => setPage(prev => Math.max(prev - 1, 1))} disabled={page === 1}>Previous</button>
        <span>Page {page} of {totalPages}</span>
        <button onClick={() => setPage(prev => Math.min(prev + 1, totalPages))} disabled={page === totalPages}>Next</button>
        <button onClick={() => setPage(totalPages)} disabled={page === totalPages}>Last</button>
        <select value={perPage} onChange={(e) => setPerPage(Number(e.target.value))}>
          <option value={10}>10</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
      </div>
    </div>
  );
}
