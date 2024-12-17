import axios from "axios";

export const axiosClient = axios.create({
    baseURL: 'https://brikool-server.vercel.app',
    headers: {
        'Content-Type': 'multipart/form-data',
    },
    withCredentials: true
});

