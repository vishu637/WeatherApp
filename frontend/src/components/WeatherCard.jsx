import React from "react";
import "../styles/WeatherCard.css";

function WeatherCard({ weather }) {
  if (!weather) return null;

  const {
    name,
    sys: { country },
    main: { temp, humidity },
    weather: weatherInfo,
  } = weather;

  return (
    <section className="weather-card">
      <div className="weather-card__header">
        <h2>{name}, {country}</h2>
        <p>{weatherInfo[0]?.description}</p>
      </div>
      <div className="weather-card__body">
        <p>Temperature: {Math.round(temp)}°C</p>
        <p>Humidity: {humidity}%</p>
      </div>
    </section>
  );
}

export default WeatherCard;
