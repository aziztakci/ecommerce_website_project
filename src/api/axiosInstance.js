import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://workintech-fe-ecommerce.onrender.com',
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token") || sessionStorage.getItem("token");
  
  if (token) {
    config.headers.Authorization = token; 
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});