import "./App.css";
import { useEffect, useState } from "react";

import "./App.css";
import axios from "axios";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect( () => {
    getCountries()
      
  }, []);

  const getCountries = async ()=>{

    try{
      const res = await axios.get("https://restcountries.com/v3.1/all")
      setCountries(res.data)
      return res.data

    }catch(e){
      console.error(("Error fetching data: ", e))
    }

  }

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
