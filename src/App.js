import React, { useState, useEffect } from 'react';
import config from './config.json';
import Strain from './Strain.js';
import axios from 'axios';

const App = () => {
  const [strains, setStrain] = useState([]);
  const [strainName, setStrainName] = useState('');

  useEffect(() => {
    try{
      axios.get(`http://strainapi.evanbusse.com/${config.api_key}/strains/search/name/${strainName}`)
      .then(res =>{
        console.log(res.data[0]);
        setStrain(res.data[0]);
      });

    } catch (error) {
      return error;
    }
  },[]);

  function showStrain() {
    if(strains != null) {
      return(
        <Strain
        name={strains.name}
        race={strains.race}
        desc={strains.desc}
        >
        </Strain>
      );
    } else {
      return(
        <Strain
          name={null}
          race={null}
          desc={null}
          >
          </Strain>
      );
    }
  }

  return(
    <div className="App">

      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button onClick={e => console.log("Hello World" + e.target.value)} type="submit">Search</button>
      </form>

      <div>
        {showStrain()}
      </div>
    </div>
  );
};

export default App;
