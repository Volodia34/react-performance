import React, { useState } from 'react';
import styles from './CountryCard.module.css';

interface Country {
  cca3: string;
  flags: { png: string };
  name: { common: string };
  population: number;
  region: string;
}

const CountryCard = React.memo(({ country }: { country: Country }) => {
  const [visited, setVisited] = useState(() => {
    const visitedCountries: string[] = JSON.parse(
      localStorage.getItem('visitedCountries') || '[]'
    );
    return visitedCountries.includes(country.cca3);
  });

  const toggleVisited = () => {
    const visitedCountries: string[] = JSON.parse(
      localStorage.getItem('visitedCountries') || '[]'
    );
    if (visited) {
      const updatedVisited = visitedCountries.filter(
        (code: string) => code !== country.cca3
      );
      localStorage.setItem('visitedCountries', JSON.stringify(updatedVisited));
    } else {
      visitedCountries.push(country.cca3);
      localStorage.setItem(
        'visitedCountries',
        JSON.stringify(visitedCountries)
      );
    }
    setVisited(!visited);
  };

  return (
    <li className={styles.countryCard}>
      <img src={country.flags.png} alt={`${country.name.common} flag`} />
      <h3>{country.name.common}</h3>
      <p>Population: {country.population}</p>
      <p>Region: {country.region}</p>
      <button onClick={toggleVisited}>
        {visited ? 'Unmark as Visited' : 'Mark as Visited'}
      </button>
    </li>
  );
});

CountryCard.displayName = 'CountryCard';

export default CountryCard;