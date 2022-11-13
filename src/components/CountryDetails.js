import { Link, useParams } from 'react-router-dom';

function CountryDetails({ allCountries }) {
  const { alpha3Code } = useParams();
  const countrySelected = allCountries.find((country) => {
    return country.alpha3Code === alpha3Code;
  });

  return (
    <div className="CountryDetails col-7">
      <div>
        <h1>{countrySelected.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>Capital</td>
              <td>{countrySelected.capital[0]}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {countrySelected.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {countrySelected.borders.map((border) => {
                    return (
                      <li>
                        <Link to={`/${border}`}>{border}</Link>
                      </li>
                    );
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CountryDetails;
