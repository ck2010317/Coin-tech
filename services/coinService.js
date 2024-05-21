// services/coinService.js
import axios from 'axios';

export const fetchCoins = async (page = 1, perPage = 10) => {
  const API_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=false&locale=en`;
  const response = await axios.get(API_URL);
  return response.data;
};
