import axios from 'axios';
const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
const fetchWeatherData = async (lat, lon) => {
  try {
    const baseUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    const res = await axios.get(baseUrl);
    return res.data;
  } catch (err) {
    console.error('error fetching weather data:', err);
    throw err;
  }
};

export default { fetchWeatherData };
