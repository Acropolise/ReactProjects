import { useState } from "react";
import axios from "axios";
import CountryList from "./components/CountryList";
import WeatherInfo from "./components/WeatherInfo";
import "./styles/App.css";

const App = () => {
  const countries = ["Haifa", "London", "France", "India", "Japan"];
  const [weather, setWeather] = useState(null);

  const fetchWeather = async (country) => {
    const API_KEY = "d9b1f07c3fef4896918163234251701";
    try {
      const response = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${country}&aqi=no`
      );
      setWeather(response.data);
    }
    catch (error) {
      console.error("Error fetching weather data:", error);
      setWeather(null);
    }
  };

  return (
    <div className="app-container">
      <h1>City Weather</h1>
      <CountryList countries={countries} onSelectCountry={fetchWeather} />
      <WeatherInfo weather={weather} />
    </div>
  );
};

export default App;