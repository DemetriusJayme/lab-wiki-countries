import { Link } from 'react-router-dom';

function CountriesList({ countriesList }) {
  return (
    <div className="col-5">
      <div className="list-group">
        {countriesList.map((country) => (
          <Link
            key={country.alpha3code}
            to={`/${country.alpha3Code}`}
            className="list-group-item list-group-item-action"
          >
            {country.name.common}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CountriesList;
