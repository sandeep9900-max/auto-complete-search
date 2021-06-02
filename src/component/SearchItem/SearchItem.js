import React, { useEffect, useState } from "react";
import { Input, Card, Select } from "antd";
import countryData from "../Array";
const { Option } = Select;
const SearchItem = () => {
  const [countries, setCountries] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [countriesMatch, setCountriesMatch] = useState([]);

  useEffect(() => {
    const loadCountries = async () => {
      const response = countryData;
      setCountries(response);
    };
    loadCountries();
  }, []);

  console.log(countries, "countries>>");
  const searchCountries = (text) => {
    setSearchVal(text);
    let matches = countries.filter((country) => {
      const regex = new RegExp(`${text}`, "gi");
      return country.name.match(regex) || country.name.match(regex);
    });
    setCountriesMatch(matches);
    console.log(countriesMatch, "countriesMatch>>");
  };
  return (
    <div>
      <h2>Select your country</h2>
      <Input
        value={searchVal}
        style={{ width: "40%", marginTop: "10px" }}
        onChange={(e) => {
          searchCountries(e.target.value);
        }}
      ></Input>
      {countriesMatch &&
        countriesMatch.map((item, index) => {
          return (
            <div
              key={index}
              style={{ marginLeft: "35%", marginTop: "5px", cursor: "pointer" }}
            >
              <Card style={{ width: "50%" }}>
                <div
                  onClick={() => {
                    console.log(item, "on press");
                    setSearchVal(item && item.name);
                  }}
                >
                  Capital: {item.name}
                </div>
              </Card>
            </div>
          );
        })}
    </div>
  );
};

export default SearchItem;
