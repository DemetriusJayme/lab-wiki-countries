import './App.css';
import Navbar from './components/NavBar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Route, Routes } from 'react-router-dom';
import countries from './countries.json';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countriesList={countries} />
          <Routes>
            <Route
              path="/:id"
              element={<CountryDetails countriesList={countries} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
