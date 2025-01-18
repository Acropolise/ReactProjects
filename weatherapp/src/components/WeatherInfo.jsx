import PropTypes from "prop-types";
import "../styles/App.css";

const WeatherInfo = ({ weather }) => {
  if (!weather) {
    return <p className="info-text">Select a country to see the weather.</p>;
  }

  return (
    <div className="weather-info">
      <h3>Weather in {weather.location.name}</h3>
      <p>Temperature: {weather.current.temp_c}</p>
      <p>Condition: {weather.current.condition.text}</p>
      <img src={weather.current.condition.icon}></img>
    </div>
  );
};

WeatherInfo.propTypes = {
  weather: PropTypes.object,
};

export default WeatherInfo;