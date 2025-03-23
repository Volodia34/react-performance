import './App.css';
import { CountryProvider } from './context/CountryContext.tsx';
import FilterBar from './components/FilterBar/FilterBar.tsx';
import CountryList from './components/CountryList/CountryList.tsx';

function App() {
  return (
    <CountryProvider>
      <div className="App">
        <h1>Country Information</h1>
        <FilterBar />
        <CountryList />
      </div>
    </CountryProvider>
  );
}

export default App;
