import React, { useEffect, useState } from 'react';
import './App.css';
import helper from './helper/api';
import Countries from './components/Countries';

function App() {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

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
    if (filteredCountries.length === 1) {
      setSelectedCountry(filteredCountries[0]);
    }
  }, [filteredCountries]);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setFilter(searchTerm);

    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCountries(filtered);
    setSelectedCountry(null);
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
