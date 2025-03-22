import { useContext, useMemo } from 'react';
import { CountryContext } from '../context/CountryContext';
import CountryCard from './CountryCard';
import useFetchCountries from '../hook/useFetchCountries.ts';

interface Country {
  cca3: string;
  name: {
    common: string;
  };
  region: string;
  population: number;
  flags: {
    svg: string;
    png: string;
  };
}

const CountryList = () => {
  const { countries, loading, error } = useFetchCountries();
  const context = useContext(CountryContext);

  if (!context) {
    throw new Error('CountryList must be used within a CountryProvider');
  }

  const { region, search, sort } = context;

  const filteredCountries = useMemo(() => {
    return countries
      .filter((country: Country) => (region ? country.region === region : true))
      .filter((country: Country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
      )
      .sort((a: Country, b: Country) => {
        if (sort.key === 'name') {
          return sort.order === 'asc'
            ? a.name.common.localeCompare(b.name.common)
            : b.name.common.localeCompare(a.name.common);
        } else {
          return sort.order === 'asc'
            ? a.population - b.population
            : b.population - a.population;
        }
      });
  }, [countries, region, search, sort]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading countries</p>;

  return (
    <ul>
      {filteredCountries.map((country: Country) => (
        <CountryCard key={country.cca3} country={country} />
      ))}
    </ul>
  );
};

export default CountryList;
