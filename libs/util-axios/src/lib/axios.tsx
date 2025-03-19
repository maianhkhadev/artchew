import axios from 'axios';

// http://localhost:3000
const BASE_URL = 'http://g0oosc84s0sgwwk0o000gso0.109.106.255.129.sslip.io'

const instance = axios.create({
  baseURL: BASE_URL,
});

export default instance;
