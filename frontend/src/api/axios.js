import axios from 'axios';

/**
 * Central Axios instance for all API calls.
 * In dev, Vite proxies "/api" to the Express server (see vite.config.js),
 * so we keep the baseURL relative. In production, set VITE_API_BASE_URL.
 */
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;