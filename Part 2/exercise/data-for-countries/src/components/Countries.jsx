import React from 'react';

const Countries = ({ filteredCountries }) => {
  return (
    <ul>
      {filteredCountries.map((country) => (
        <li key={country.cca3}>{country.name.common}</li>
      ))}
    </ul>
  );
};

export default Countries;
