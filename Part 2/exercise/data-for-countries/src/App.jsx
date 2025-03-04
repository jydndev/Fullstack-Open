import React, { useEffect, useState } from 'react';
import './App.css';
import helper from './helper/api';
import Countries from './components/Countries';

function App() {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    helper
      .fetchAll()
      .then((data) => {
        setCountries(data);
        setFilteredCountries(data); // Initialize filteredCountries with all countries
      })
      .catch((error) => {
        console.error('Error fetching countries:', error);
      });
  }, []);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setFilter(searchTerm);

    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCountries(filtered);
  };

  return (
    <>
      <div>find countries</div>
      <input type="text" onChange={handleSearch} />
      <Countries filteredCountries={filteredCountries} />
    </>
  );
}

export default App;
