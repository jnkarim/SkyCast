import React, { useState } from "react";
import axios from "axios";
import { WiThermometer, WiHumidity, WiStrongWind, WiBarometer } from "react-icons/wi";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() === "") {
      setError("Please enter a valid city name");
      return;
    }

    setError(null); 
    fetchData();
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=0a83e4adece1062816b15e9dcb2c1056`
      );

      setWeatherData(response.data);
      setError(null);
    } catch (error) {
      console.error(error);
      setWeatherData(null);
      setError("City not found. Try again with a valid city name");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-[#6B7280] shadow-md rounded-lg p-20 max-w-lg w-full">
        <h1 className="text-3xl font-bold text-black text-center mb-6">
          Weather Check
        </h1>
        <form onSubmit={handleSubmit} className="mb-4">
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring focus:ring-blue-300 text-black font-semibold"
          />
          <button
            type="submit"
            className="w-full bg-[#01796F] text-white py-3 rounded-lg font-medium hover:bg-black focus:outline-none focus:ring focus:ring-blue-300"
          >
            Get Weather
          </button>
        </form>
        {error && (
          <p className="text-red-500 text-center mb-4">{error}</p>
        )}
        {weatherData && (
          <div className="mt-6">
            <h2 className="text-2xl font-bold text-white text-center">
              {weatherData.name}
            </h2>
            <p className="text-3xl font-bold text-center text-black mt-2">
              {Math.round(weatherData.main.temp)}°C
            </p>
            <p className="text-white text-center capitalize my-2">
              {weatherData.weather[0].description}
            </p>
            <div className="mt-4 text-black space-y-2">
              <p className="flex items-center gap-2">
                <WiThermometer className="text-2xl text-blue-700" />
                <strong>Feels Like:</strong> {Math.round(weatherData.main.feels_like)}°C
              </p>
              <p className="flex items-center gap-2">
                <WiHumidity className="text-2xl text-blue-700" />
                <strong>Humidity:</strong> {weatherData.main.humidity}%
              </p>
              <p className="flex items-center gap-2">
                <WiStrongWind className="text-2xl text-blue-700" />
                <strong>Wind Speed:</strong> {weatherData.wind.speed} m/s
              </p>
              <p className="flex items-center gap-2">
                <WiBarometer className="text-2xl text-blue-700" />
                <strong>Pressure:</strong> {weatherData.main.pressure} hPa
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
