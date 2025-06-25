import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CountryDetail from "./pages/CountryDetail";
import NavBar from "./components/NavBAr";
import { useEffect, useState } from "react";

import countriesData from "./data.json";

function App() {
  // =================DECLARE INITIAL=======================

  const [allCountries] = useState(countriesData);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [isLoading, setLoading] = useState(true);

 

  // ==============Filter By Search===============================
  const filterBySearch = (searched) => {
    const searchedCountry = allCountries.filter((country) => {
      return country.name.toLowerCase().includes(searched);
    });
    setFilteredCountries(searchedCountry);
  };

  console.log(filteredCountries);

  //======================FILTER BY REGION======================
  const filterByRegion = (region) => {
    const selectedRegion = allCountries.filter((eCountry) => {
      return eCountry.region === region;
    });

    setFilteredCountries(selectedRegion);
  };

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                theWorld={
                  filteredCountries.length > 0
                    ? filteredCountries
                    : allCountries
                }
                inputedCountry={filterBySearch}
                clickedRegion={filterByRegion}
              />
            }
          />
          <Route
            path="/details/:countryName"
            element={<CountryDetail detailsByCountry={allCountries} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
