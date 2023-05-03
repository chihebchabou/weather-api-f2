import './App.css';
import Search from './components/weather/Search';
import Weather from './components/weather/Weather';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [response, setResponse] = useState(null);
  const [loading, setLaoding] = useState(false);
  const [error, setError] = useState("");

  console.log(process.env)
  console.log(process.env.REACT_APP_WEATHER_KEY)

  const searchWeather = async (query) => {
    setLaoding(true);
    try {
      const res = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_KEY}&q=${query}&days=3&aqi=no&alerts=no`);
      console.log(res.data);
      setResponse(res.data);
      setError("");
      setLaoding(false)
    } catch (error) {
      setError(error.message);
      setResponse(null);
      setLaoding(false)
    }
  }

  // useEffect(()=>{
  //   searchWeather();
  // }, [])
  
  return (
    <div className="App">
     <Search searchWeather={searchWeather} />
     <Weather response={response} loading={loading} error={error} />
    </div>
  );
}

export default App;
