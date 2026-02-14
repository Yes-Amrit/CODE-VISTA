import axios from "axios"

const axiosInstance = axios.create({
    
    baseURL: import.meta.env.VITE_API_URL,     //by adding this field browser will send the cookies to server automatically, on every single req 
    withCredentials: true,
});

export default axiosInstance;