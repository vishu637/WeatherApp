const config = {
  apiKeyName: "REACT_APP_OPENWEATHER_API_KEY",
  openWeatherBaseUrl: "https://api.openweathermap.org/data/2.5",
  backendBaseUrl: process.env.REACT_APP_BACKEND_URL || "http://localhost:5000/api/weather",
};

export const BACKEND_URL = config.backendBaseUrl;
export const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
export const BASE_URL = config.openWeatherBaseUrl;

export default config;
