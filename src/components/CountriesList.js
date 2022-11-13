import { Link } from 'react-router-dom';

function CountriesList({ allCountries }) {
  return (
    <div
      className="CountriesList col-5"
      style={{ maxHeight: '90vh', overflow: 'scroll' }}
    >
      <div className="list-group">
        {allCountries.map((country) => {
          let code = country.alpha2Code.toLowerCase();
          let url = `https://flagpedia.net/data/flags/icon/72x54/${code}.png`;
          return (
            <Link
              to={`/${country.alpha3Code}`}
              className="list-group-item list-group-item-action"
              key={country.alpha3Code}
            >
              <img
                src={url}
                alt="flag"
                style={{ width: 20 }}
                className="mx-2"
              />
              {country.name.common}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CountriesList;
