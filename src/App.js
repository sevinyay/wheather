import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import City from './City';

function App() {
  const key="7d3292b74d97dfcff5e3dce07e181a4a";
  const [search, setSearch] =useState("");
  const [city, setCity] =  useState();
  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`);
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  }, [search]);
  console.log(search);
  return (
   <div className='App'>
   <div> 
   <label for="input-id">Check The Wheather</label>
   <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Enter City Name"
          className=" my-5 px-3 w-[250px] py-3 placeholder-blueGray-300 text-blueGray-600   bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring "
        />
        {city && <City city={city} />}
   </div>
   </div>
  );
}

export default App;
