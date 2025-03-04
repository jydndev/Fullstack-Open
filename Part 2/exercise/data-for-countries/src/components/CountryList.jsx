import Country from './Country';

const CountryList = ({ countries, showCountry }) => {
  if (countries.length > 10) {
    return <div> too many matches </div>;
  } else if (countries.length > 1) {
    return countries.map((c) => (
      <div key={c.cca3}>
        {c.name.common}
        <button onClick={() => showCountry(c.name.common)}>Show</button>
      </div>
    ));
  } else if (countries.length === 1) {
    return <Country country={countries[0]} />;
  }
  return <div>no matches</div>;
};

export default CountryList;
