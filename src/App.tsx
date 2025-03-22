import './App.css';
import { CountryProvider } from './context/CountryContext.tsx';
import FilterBar from './components/FilterBar.tsx';

function App() {
  return (
    <CountryProvider>
      <div className="App">
        <h1>Country Information</h1>
        <FilterBar />
      </div>
    </CountryProvider>
  );
}

export default App;
