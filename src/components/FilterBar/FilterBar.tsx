import { useContext, useCallback, ChangeEvent } from 'react';
import styles from './FilterBar.module.css';
import { CountryContext } from '../../context/CountryContext.tsx';

type SortState = {
  key: string;
  order: string;
};

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

  const handleSortKeyChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const key = e.target.value;
      setSort((prevSort: SortState) => ({ ...prevSort, key }));
    },
    [setSort]
  );

  const handleSortOrderChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const order = e.target.value;
      setSort((prevSort: SortState) => ({ ...prevSort, order }));
    },
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
      <select onChange={handleSortKeyChange}>
        <option value="">Sort by</option>
        <option value="name">Name</option>
        <option value="population">Population</option>
      </select>
      <select onChange={handleSortOrderChange}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};

export default FilterBar;