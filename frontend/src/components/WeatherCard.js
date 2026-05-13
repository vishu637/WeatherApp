import React from 'react';
import { FiWind, FiDroplet } from 'react-icons/fi';
import { 
  WiDaySunny, 
  WiCloudy, 
  WiRain, 
  WiSnow, 
  WiThunderstorm, 
  WiFog 
} from 'react-icons/wi';

const WeatherCard = ({ data }) => {
  if (!data) return null;

  const { name, sys, main, weather, wind } = data;
  
  // Choose icon based on weather condition
  const getWeatherIcon = (condition) => {
    switch (condition.toLowerCase()) {
      case 'clear':
        return <WiDaySunny className="weather-icon-large" />;
      case 'clouds':
        return <WiCloudy className="weather-icon-large" />;
      case 'rain':
      case 'drizzle':
        return <WiRain className="weather-icon-large" />;
      case 'snow':
        return <WiSnow className="weather-icon-large" />;
      case 'thunderstorm':
        return <WiThunderstorm className="weather-icon-large" />;
      case 'mist':
      case 'fog':
      case 'haze':
      case 'smoke':
        return <WiFog className="weather-icon-large" />;
      default:
        return <WiDaySunny className="weather-icon-large" />;
    }
  };

  return (
    <div className="weather-card">
      <div className="location">
        <h2>{name}, {sys.country}</h2>
        <p>{weather[0].description}</p>
      </div>
      
      {getWeatherIcon(weather[0].main)}

      <div className="temperature">
        <h1>{Math.round(main.temp)}</h1>
        <span>&deg;C</span>
      </div>

      <div className="weather-details">
        <div className="detail-item">
          <FiDroplet className="detail-icon" />
          <div className="detail-info">
            <span>{main.humidity}%</span>
            <p>Humidity</p>
          </div>
        </div>
        <div className="detail-item">
          <FiWind className="detail-icon" />
          <div className="detail-info">
            <span>{Math.round(wind.speed)} km/h</span>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
