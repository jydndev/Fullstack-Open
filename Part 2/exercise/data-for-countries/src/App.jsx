import React, { useEffect, useState } from 'react';
import './App.css';
import helper from './helper/api';
import Countries from './components/Countries';
import weatherApi from './helper/weatherApi';

function App() {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    helper
      .fetchAll()
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => {
        console.error('Error fetching countries:', error);
      });
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      weatherApi
        .fetchWeatherData(selectedCountry.latlng[0], selectedCountry.latlng[1])
        .then((weatherData) => {
          setWeather(weatherData);
        })
        .catch((err) => {
          console.error('Error fetching weather data', err);
          setWeather(null);
        });
    } else {
      setWeather(null);
    }
  }, [selectedCountry]);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setFilter(searchTerm);

    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCountries(filtered);
    setSelectedCountry(null);
    setWeather(null);
  };

  const handleShow = (country) => {
    setSelectedCountry(country);
  };

  return (
    <>
      <div>find countries</div>
      <input type="text" onChange={handleSearch} />
      {selectedCountry ? (
        <div>
          <h2>{selectedCountry.name.common}</h2>
          <img
            src={selectedCountry.flags.svg}
            alt={`${selectedCountry.name.common} flag`}
            style={{ maxWidth: '200px' }}
          />
          <h2>Languages</h2>
          <ul>
            {Object.values(selectedCountry.languages || {}).map((language) => (
              <li key={language}>{language}</li>
            ))}
          </ul>
          {weather && (
            <div>
              <h3>Weather</h3>
              <p>Current Temperature: {weather.main.temp}</p>
            </div>
          )}
        </div>
      ) : (
        <Countries
          filteredCountries={filteredCountries}
          handleShow={handleShow}
        />
      )}
    </>
  );
}

export default App;
