import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import weatherService from "../services/weatherService";
import "../styles/Home.css";

function Home() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (city) => {
    if (!city) return;
    setLoading(true);
    setError("");
    try {
      const data = await weatherService.getWeather(city);
      setWeather(data);
    } catch (err) {
      setWeather(null);
      setError(err.response?.data?.message || err.message || "Unable to fetch weather.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="home-page">
      <header className="home-header">
        <h1>Weather App</h1>
        <p>Search any city to see current weather conditions.</p>
      </header>

      <SearchBar onSearch={handleSearch} />

      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {weather && <WeatherCard weather={weather} />}
    </main>
  );
}

export default Home;
