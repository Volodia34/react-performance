import { useContext } from 'react';
import { CountryContext } from '../context/CountryContext';

const FilterBar = () => {
  const context = useContext(CountryContext);

  if (!context) {
    throw new Error('FilterBar must be used within a CountryProvider');
  }

  const { region, search, setRegion, setSearch, setSort } = context;

  return (
    <div>
      <select value={region} onChange={(e) => setRegion(e.target.value)}>
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
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => setSort({ key: 'name', order: 'asc' })}>
        Sort by Name Asc
      </button>
      <button onClick={() => setSort({ key: 'name', order: 'desc' })}>
        Sort by Name Desc
      </button>
      <button onClick={() => setSort({ key: 'population', order: 'asc' })}>
        Sort by Population Asc
      </button>
      <button onClick={() => setSort({ key: 'population', order: 'desc' })}>
        Sort by Population Desc
      </button>
    </div>
  );
};

export default FilterBar;
