import PropTypes from "prop-types";
import "../styles/App.css";

const CountryList = ({ countries, onSelectCountry }) => {
  return (
    <div className="country-list">
      {countries.map((country) => (
        <div
          key={country}
          onClick={() => onSelectCountry(country)}
          className="country-item"
        >
          {country}
        </div>
      ))}
    </div>
  );
};

CountryList.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelectCountry: PropTypes.func.isRequired,
};

export default CountryList;