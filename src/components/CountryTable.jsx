import React, { Component } from "react";

class CountryTable extends Component {
  render() {
    const { countries } = this.props;
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Country</th>
            <th>Total</th>
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
