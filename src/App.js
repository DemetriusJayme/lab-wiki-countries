import './App.css';
import Navbar from './components/NavBar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Routes, Route } from 'react-router-dom';
import countries from './countries.json';
import { useState } from 'react';

function App() {
  const [allCountries, setCountries] = useState(countries);

  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <CountriesList allCountries={allCountries} />
          <Routes>
            <Route
              path="/:alpha3Code"
              element={<CountryDetails allCountries={allCountries} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
