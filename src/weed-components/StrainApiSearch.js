import {useState, useEffect} from 'react';
import axios from 'axios';

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