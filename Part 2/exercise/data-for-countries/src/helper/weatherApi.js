import axios from 'axios';

const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

const baseUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${apiKey}`;
