import axios from "axios";
import { Input, Card } from "antd";
import React, { useEffect, useState } from "react";

const SearchComponent = () => {
  const [countries, setCountries] = useState([]);
  const [searchVal, setSearchVal] = useState("");

  const [countriesMatch, setCountriesMatch] = useState([]);

  useEffect(() => {
    const loadCountries = async () => {
      const response = await axios.get("https://restcountries.eu/rest/v2/all");
      setCountries(response.data);
    };
    loadCountries();
  }, []);

  console.log(countries, "countries>>");
  const searchCountries = (text) => {
    setSearchVal(text);
    if (!text) {
      setCountriesMatch([]);
    } else {
      let matches = countries.filter((country) => {
        const regex = new RegExp(`${text}`, "gi");
        return country.name.match(regex) || country.capital.match(regex);
      });
      setCountriesMatch(matches);
      console.log(countriesMatch, "countriesMatch>>");
    }
  };

  return (
    <div>
      <h2>Select your country</h2>

      <Input
        value={searchVal}
        style={{ width: "40%", marginTop: "10px" }}
        placeholder="Enter your city.."
        onChange={(e) => {
          searchCountries(e.target.value);
        }}
      />
      {countriesMatch &&
        countriesMatch.map((item, index) => {
          return (
            <div
              key={index}
              style={{ marginLeft: "30%",  cursor: "pointer" }}
            >
              <Card style={{ width: "57%" }}>
                <h4
                  onClick={() => {
                    console.log(item, "on press");
                    setSearchVal(item && item.name);
                    setCountriesMatch([]);

                  }}
                >
                  Country: {item.name}
                </h4>
              </Card>
            </div>
          );
        })}
    </div>
  );
};

export default SearchComponent;
