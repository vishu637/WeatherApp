import React from "react";
import "../styles/WeatherCard.css";

function WeatherCard({ weather }) {
  if (!weather) return null;

  const {
    name,
    sys: { country },
    main: { temp, humidity, feels_like, pressure, temp_min, temp_max },
    weather: weatherInfo,
    wind: { speed },
  } = weather;

  const weatherIcon = weatherInfo[0]?.iconUrl;
  const description = weatherInfo[0]?.description;

  return (
    <section className="weather-card">
      <div className="weather-card__header">
        <div className="weather-card__title-section">
          <div>
            <h2>{name}, {country}</h2>
            <p className="weather-description">{description}</p>
          </div>
          {weatherIcon && (
            <img src={weatherIcon} alt={description} className="weather-icon" />
          )}
        </div>
      </div>
      <div className="weather-card__body">
        <div className="weather-stat">
          <span className="stat-label">🌡️ Temperature</span>
          <span className="stat-value">{Math.round(temp)}°C</span>
        </div>
        <div className="weather-stat">
          <span className="stat-label">🤔 Feels Like</span>
          <span className="stat-value">{Math.round(feels_like)}°C</span>
        </div>
        <div className="weather-stat">
          <span className="stat-label">💧 Humidity</span>
          <span className="stat-value">{humidity}%</span>
        </div>
        <div className="weather-stat">
          <span className="stat-label">🌪️ Wind Speed</span>
          <span className="stat-value">{speed} m/s</span>
        </div>
        <div className="weather-stat">
          <span className="stat-label">⬇️ Min Temp</span>
          <span className="stat-value">{Math.round(temp_min)}°C</span>
        </div>
        <div className="weather-stat">
          <span className="stat-label">⬆️ Max Temp</span>
          <span className="stat-value">{Math.round(temp_max)}°C</span>
        </div>
        <div className="weather-stat">
          <span className="stat-label">🔽 Pressure</span>
          <span className="stat-value">{pressure} hPa</span>
        </div>
      </div>
    </section>
  );
}

export default WeatherCard;
