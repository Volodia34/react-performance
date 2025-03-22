import { useContext, useCallback, ChangeEvent } from 'react';
import styles from './FilterBar.module.css';
import { CountryContext } from '../../context/CountryContext.tsx';

const FilterBar = () => {
  const context = useContext(CountryContext);

  if (!context) {
    throw new Error('FilterBar must be used within a CountryProvider');
  }

  const { region, search, setRegion, setSearch, setSort } = context;

  const handleRegionChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => setRegion(e.target.value),
    [setRegion]
  );

  const handleSearchChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value),
    [setSearch]
  );

  const handleSort = useCallback(
    (key: string, order: 'asc' | 'desc') => () => setSort({ key, order }),
    [setSort]
  );

  return (
    <div className={styles.filterBar}>
      <select value={region} onChange={handleRegionChange}>
        <option value="">All Regions</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
      <input
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={handleSearchChange}
      />
      <button onClick={handleSort('name', 'asc')}>Sort by Name Asc</button>
      <button onClick={handleSort('name', 'desc')}>Sort by Name Desc</button>
      <button onClick={handleSort('population', 'asc')}>Sort by Population Asc</button>
      <button onClick={handleSort('population', 'desc')}>Sort by Population Desc</button>
    </div>
  );
};

export default FilterBar;
