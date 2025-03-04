const Countries = ({ filteredCountries }) => {
  if (filteredCountries.length > 10 || !filteredCountries) {
    return <div>Too many matches, specify another filter.</div>;
  } else if (filteredCountries.length > 1) {
    return (
      <ul>
        {filteredCountries.map((country) => (
          <li key={country.cca3}>{country.name.common}</li>
        ))}
      </ul>
    );
  } else if (filteredCountries.length === 1) {
    const country = filteredCountries[0];
    return (
      <div>
        <h2>{country.name.common}</h2>
        <img
          src={country.flags.svg}
          alt={`${country.name.common} flag`}
          style={{ maxWidth: '200px' }}
        />
        <h2>Languages</h2>
        <ul>
          {Object.values(country.languages || {}).map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
      </div>
    );
  }
};

export default Countries;
