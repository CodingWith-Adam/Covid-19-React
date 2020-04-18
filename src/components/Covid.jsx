import React, { Component } from "react";
import Loading from "./Loading";
import axios from "axios";
import CountryTable from "./CountryTable";

class Covid extends Component {
  state = {
    countries: [],
    allCountryTotal: 0,
  };

  url =
    "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/web-data/data/cases_country.csv";

  async componentDidMount() {
    const response = await axios.get(this.url);
    const rows = response.data.split("\n");

    const countries = [];
    let allCountryTotal = 0;

    for (let i = 1; i < rows.length; i++) {
      const row = rows[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/); //splitting on ,
      const countryName = row[0];
      const total = Number(row[4]);
      if (countryName !== "") {
        countries.push({
          name: countryName,
          total: total,
        });
        allCountryTotal += total;
      }
    }

    await new Promise((x) => setTimeout(x, 500));

    this.setState({ countries, allCountryTotal });
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  render() {
    const { countries, allCountryTotal } = this.state;
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>
          All Country Total: {this.numberWithCommas(allCountryTotal)}
        </h1>
        {allCountryTotal === 0 ? (
          <Loading />
        ) : (
          <CountryTable countries={countries} />
        )}
      </div>
    );
  }
}

export default Covid;
