import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { WiDaySunny } from 'react-icons/wi';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import './styles/App.css';

// Import images
import sunnyBg from './assets/images/sunny.png';
import cloudyBg from './assets/images/cloudy.png';
import rainyBg from './assets/images/rainy.png';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [bgImage, setBgImage] = useState(sunnyBg);

  const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;

  const fetchWeather = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      setWeatherData(response.data);
      updateBackground(response.data.weather[0].main);
    } catch (err) {
      setWeatherData(null);
      setError("City not found. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const updateBackground = (weatherCondition) => {
    const condition = weatherCondition.toLowerCase();
    if (condition.includes('clear')) {
      setBgImage(sunnyBg);
    } else if (condition.includes('cloud') || condition.includes('mist') || condition.includes('fog')) {
      setBgImage(cloudyBg);
    } else if (condition.includes('rain') || condition.includes('drizzle') || condition.includes('thunderstorm') || condition.includes('snow')) {
      setBgImage(rainyBg);
    } else {
      setBgImage(sunnyBg);
    }
  };

  // Fetch default city on load
  useEffect(() => {
    if(API_KEY) {
      fetchWeather('London');
    } else {
      setError("API Key is missing!");
    }
  }, [API_KEY]);

  return (
    <div 
      className="app-container" 
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="weather-app">
        <SearchBar onSearch={fetchWeather} />
        
        {loading && <div className="loading-spinner"><WiDaySunny /></div>}
        
        {error && <div className="error-message">{error}</div>}
        
        {!loading && !error && weatherData && (
          <WeatherCard data={weatherData} />
        )}
      </div>
    </div>
  );
};

export default App;
