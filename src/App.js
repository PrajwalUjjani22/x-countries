import "./App.css";
import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.error("Error fetching data: ", err));
  }, []);

  const imageStyle = {
    width: "100px",
    height: "100px",
  };

  return (
    <div className="container">
      {countries.map((country) => (
        <div key={country.cca3} className="card-style">
          <img
            style={imageStyle}
            src={country.flags.png}
            alt={`Flag of ${country.name.common}`}
          />
          <h2>{country.name.common}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;
