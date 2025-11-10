import axios from 'axios';

const Http = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8080',
})

Http.interceptors.request.use( cfg => {
    const token = localStorage.getItem('sl_token');
    if(token){
        cfg.headers.Authorization = `Bearer ${token}`;
    }
    
    return cfg;
})

export default Http;