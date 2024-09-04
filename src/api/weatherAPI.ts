import axios from 'axios';


const BASE_URL = import.meta.env.VITE_WEATHER_BASE_URL;
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
//console.log(BASE_URL,API_KEY)

export const fetchWeatherData = async (city: string) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                q: city,
                appid: API_KEY
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};
