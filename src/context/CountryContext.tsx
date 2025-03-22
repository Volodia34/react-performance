import { createContext, useState, useMemo, ReactNode } from 'react';

interface CountryContextProps {
  region: string;
  search: string;
  sort: { key: string; order: string };
  setRegion: (region: string) => void;
  setSearch: (search: string) => void;
  setSort: (sort: { key: string; order: string }) => void;
}

const CountryContext = createContext<CountryContextProps | undefined>(
  undefined
);

const CountryProvider = ({ children }: { children: ReactNode }) => {
  const [region, setRegion] = useState('');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState({ key: 'name', order: 'asc' });

  const value = useMemo(
    () => ({
      region,
      search,
      sort,
      setRegion,
      setSearch,
      setSort,
    }),
    [region, search, sort]
  );

  return (
    <CountryContext.Provider value={value}>{children}</CountryContext.Provider>
  );
};

export { CountryContext, CountryProvider };
