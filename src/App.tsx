import React, { useState } from "react";
import "./app.css";
import CountryDetails from "./components/CountryDetails";
import ContinentCountries from "./components/ContinentCountries";

const App: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [continentCode, setContinentCode] = useState<string>("");

  return (
    <div className="container">
      <div className="county-style">
        <input
          className="input-style"
          value={selectedCountry}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSelectedCountry(e.target.value.toUpperCase())
          }
          type="text"
          placeholder="Enter Country Code"
        />
        <div className="details">
          <CountryDetails code={selectedCountry} />
        </div>
      </div>
      <div className="continent-style">
        <input
          className="input-style"
          type="text"
          value={continentCode}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setContinentCode(e.target.value.toUpperCase())
          }
          placeholder="Enter continent Code"
        />
        <div className="details">
          {" "}
          <h4>Countries</h4>
          <ContinentCountries code={continentCode} />
        </div>
      </div>
    </div>
  );
};

export default App;
