import { useEffect, useState } from 'react';
import CountryList from './components/CountryList';
import axios from 'axios';

const COUNTRY_API_URL = 'https://studies.cs.helsinki.fi/restcountries/';

const App2 = () => {
  const [search, setSearch] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get(`${COUNTRY_API_URL}/api/all`)
      .then((res) => setCountries(res.data));
  }, []);

  const searchedCountries = countries.filter((c) =>
    c.name.common.toLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <>
      <div>
        find countries{' '}
        <input value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      {search === '' ? null : (
        <CountryList countries={searchedCountries} showCountry={setSearch} />
      )}
    </>
  );
};

export default App2;
