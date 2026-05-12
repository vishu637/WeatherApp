import React, { useState } from "react";
import "./styles/App.css";

import { BACKEND_URL } from "./config";

function App() {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  // Fetch Weather Data
  const getWeather = async () => {

    if (city === "") {
      setError("Please enter a city name");
      setWeather(null);
      return;
    }

    try {

      setError("");

      const response = await fetch(`${BACKEND_URL}/${encodeURIComponent(city)}`);
      const data = await response.json();

      if (!response.ok) {
        setError(data?.error || data?.message || "City not found");
        setWeather(null);
      } else {
        setWeather(data);
      }

    } catch (err) {

      setError("Something went wrong");
      setWeather(null);

    }
  };

  return (

    <div className="app">

      <div className="weather-container">

        <h1>Weather App</h1>

        {/* Search Box */}

        <div className="search-box">

          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <button onClick={getWeather}>
            Search
          </button>

        </div>

        {/* Error Message */}

        {error && (
          <p className="error">
            {error}
          </p>
        )}

        {/* Weather Data */}

        {weather && (

          <div className="weather-card">

            <h2>{weather.city}, {weather.country}</h2>

            <img
              src={weather.weather?.iconUrl}
              alt={weather.weather?.description || "Weather Icon"}
            />

            <h3>
              {weather.temperature?.current} °C
            </h3>

            <p>
              <strong>Condition:</strong>{" "}
              {weather.weather?.description}
            </p>

            <p>
              <strong>Humidity:</strong>{" "}
              {weather.temperature?.humidity}%
            </p>

            <p>
              <strong>Wind Speed:</strong>{" "}
              {weather.wind?.speed} km/h
            </p>

          </div>

        )}

      </div>

    </div>
  );
}

export default App;
