import axios from "axios";

// This logic ensures that /api is always added to whatever URL you provide
const getBaseURL = () => {
    const url = import.meta.env.VITE_API_URL || "https://code-vista-dkx1.onrender.com";
    return url.endsWith('/api') ? url : `${url}/api`;
};

const axiosInstance = axios.create({
    // This adds the /api automatically
    baseURL: `${import.meta.env.VITE_API_URL}/api`, 
    withCredentials: true,
});

export default axiosInstance;