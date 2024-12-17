import axios from "axios";

export const axiosClient = axios.create({
    baseURL: 'https://brikool-server.vercel.app',
    headers: {
        'Content-Type': 'multipart/form-data',
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