const Countries = ({ filteredCountries, handleShow }) => {
  if (filteredCountries.length > 10 || !filteredCountries) {
    return <div>Too many matches, specify another filter.</div>;
  } else if (filteredCountries.length > 1) {
    return (
      <ul>
        {filteredCountries.map((country) => (
          <li key={country.cca3}>
            {country.name.common}
            <button onClick={() => handleShow(country)}>show</button>
          </li>
        ))}
      </ul>
    );
  }
};

export default Countries;
