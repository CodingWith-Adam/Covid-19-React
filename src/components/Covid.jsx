import React, { Component } from "react";
import Loading from "./Loading";
import axios from "axios";
import CountryTable from "./CountryTable";
import Chart from "./Chart";
import { Search } from "react-bootstrap-icons";

class Covid extends Component {
  state = {
    countries: [],
    filterText: "",
    allCountryTotal: 0,
    selectedCountries: [],
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
      const countryName = row[0].replace(/"/g, "");
      const total = Number(row[4]);
      if (countryName !== "") {
        countries.push({
          name: countryName,
          total: total,
        });
        allCountryTotal += total;
      }
    }

    // await new Promise(function (x) {
    //   setTimeout(x, 1000);
    // });

    this.setState({ countries, allCountryTotal });
  }

  handleOnRowSelected = (countryToUpdate) => {
    const countries = [...this.state.countries];

    const countryIndex = countries.findIndex(
      (c) => c.name === countryToUpdate.name
    );

    const country = {
      name: countryToUpdate.name,
      total: countryToUpdate.total,
      selected: !countryToUpdate.selected,
    };

    countries[countryIndex] = country;

    this.setState({
      countries,
      selectedCountries: countries.filter((c) => c.selected),
    });
  };

  sortByTotal = (countryA, countryB) => {
    // 0 equal
    // 1 greater
    // -1 less
    if (countryB.total > countryA.total) return 1;
    else if (countryB.total < countryA.total) return -1;
    else return 0;
  };

  handleOnSortByTotal = (event) => {
    this.handleOnSortBy(event, this.sortByTotal);
  };

  sortByCountryName = (countryA, countryB) => {
    // 0 equal
    // 1 greater
    // -1 less
    if (countryA.name > countryB.name) return 1;
    else if (countryA.name < countryB.name) return -1;
    else return 0;
  };

  handleOnSortByCountryName = (event) => {
    this.handleOnSortBy(event, this.sortByCountryName);
  };

  handleOnSortBy = (event, sortOperation) => {
    event.preventDefault();
    const countries = [...this.state.countries];
    countries.sort(sortOperation);
    this.setState({ countries });
  };

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  handleFilterTextChange = (event) => {
    const filterText = event.target.value;
    this.setState({ filterText: filterText });
  };

  clear= ()=>{
    const countries = [...this.state.countries];

    for(let i =0; i< countries.length;i++){
      var c = countries[i];

      const country = {
        name: c.name,
        total: c.total,
        selected: false,
      };
      countries[i] = country;
    }

    this.setState({
      countries,
      selectedCountries: countries.filter((c) => c.selected),
    });
  }

  render() {
    const {
      countries,
      allCountryTotal,
      selectedCountries,
      filterText,
    } = this.state;
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>
          All Country Total: {this.numberWithCommas(allCountryTotal)}
        </h1>
        
        {allCountryTotal === 0 ? (
          <Loading />
        ) : (
          <div>
            <button onClick={this.clear}>Clear</button>
            <div className="input-group input-group-lg mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-lg">
                  <Search />
                </span>
              </div>
              <input
                type="text"
                value={filterText}
                onChange={this.handleFilterTextChange}
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
                placeholder="Search"
              />
            </div>

            <Chart countries={selectedCountries} />
            <CountryTable
              countries={countries.filter((country) => {
                if (filterText === "") {
                  return country;
                }
                return (
                  country.name
                    .toLowerCase()
                    .indexOf(filterText.toLowerCase()) >= 0
                );
              })}
              onSortByTotal={this.handleOnSortByTotal}
              onSortByCountryName={this.handleOnSortByCountryName}
              onRowSelected={this.handleOnRowSelected}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Covid;
