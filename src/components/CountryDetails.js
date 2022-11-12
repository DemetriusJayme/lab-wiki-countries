import { Link, useParams } from 'react-router-dom';

function CountryDetails({ countriesList }) {
  const { id } = useParams();

  const getCountry = (id) => countriesList.find((c) => c.alpha3Code === id);

  const country = getCountry(id);

  return (
    <div className="col-7">
      <h1>{country.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: 30 }}>Capital</td>
            <td>{country.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders?.map((border) => (
                  <li key={border}>
                    <Link to={`/${border}`}>
                      {getCountry(border).name.common}
                    </Link>
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
