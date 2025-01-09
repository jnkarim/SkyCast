import React, { useState } from "react";
import axios from "axios";

const Weather1 = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=0a83e4adece1062816b15e9dcb2c1056`
      );
      setWeatherData(response.data);
      setError(null); // Clear previous errors if the request succeeds
    } catch (error) {
      console.error(error);
      setWeatherData(null); // Clear data in case of an error
      setError("City not found or API call failed. Please try again.");
    }
  };

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() === "") {
      setError("Please enter a city name.");
      return;
    }
    fetchData();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={handleInputChange}
          style={{ padding: "10px", marginRight: "10px" }}
        />
        <button type="submit" style={{ padding: "10px" }}>
          Get Weather
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {weatherData && (
        <div style={{ marginTop: "20px" }}>
          <h2>{weatherData.name}</h2>
          <h3>{weatherData.main.temp}°C</h3>
          <p>Condition: {weatherData.weather[0].description}</p>
          <p>Feels like: {weatherData.main.feels_like}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default Weather1;




