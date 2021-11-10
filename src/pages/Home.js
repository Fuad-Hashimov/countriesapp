import React, { useState, useEffect } from "react";
import axios from "axios";

import MediaCard from "./HomePage";
function Home() {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      await axios.get("https://restcountries.com/v3.1/all").then((res) => {
        const { data } = res;
        const result = data.map((m) => {
          return {
            name: m.name.common,
            official: m.name.official,
            capital: m.capital,
            region: m.region,
            flags: m.flags.png,
          };
        });
        setCountry(result);
      });
    };
    fetchCountries();
  }, []);

  return (
    <>
      <h1>Home FUad</h1>
      
      <MediaCard country={country} />
    </>
  );
}

export default Home;
