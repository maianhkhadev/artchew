import axios from 'axios';

// http://localhost:3000
const BASE_URL = 'http://zow8kk8ooosk4kso84ggkckg.89.116.23.169.sslip.io'

const instance = axios.create({
  baseURL: BASE_URL,
});

export default instance;
