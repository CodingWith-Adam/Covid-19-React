import React, { Component } from "react";

class CountryTable extends Component {
  render() {
    const { countries, onSortByTotal, onSortByCountryName } = this.props;
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>
              <a href="/" onClick={onSortByCountryName}>
                Country
              </a>
            </th>
            <th>
              <a href="/" onClick={onSortByTotal}>
                Total
              </a>
            </th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country) => (
            <tr key={country.name}>
              <td>{country.name}</td>
              <td>{country.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default CountryTable;
