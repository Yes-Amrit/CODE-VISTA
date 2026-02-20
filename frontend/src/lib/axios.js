import axios from "axios";

const axiosInstance = axios.create({
    // Logic: If the variable has /api, use it. If not, add it.
    baseURL: import.meta.env.VITE_API_URL?.endsWith("/api") 
            ? import.meta.env.VITE_API_URL 
            : `${import.meta.env.VITE_API_URL}/api`,
    withCredentials: true,
});

export default axiosInstance;