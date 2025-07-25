import axios from "axios";

export const axiosClient = axios.create({
    baseURL: 'https://brikool-server-2.vercel.app',
    // baseURL: 'http://localhost:8000',
    headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'multipart/form-data',
    },
    withCredentials: true
});

axiosClient.interceptors.request.use((config) => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
        config.headers.Authorization = `Bearer ${jwt}`;
    }
    return config;
});
