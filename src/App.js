import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NextDays from './components/days/NextDays.jsx';
import WeatherCard from './components/WeatherCard/WeatherCard.jsx'
import { Route, Routes } from 'react-router-dom';
import Hours from './components/Houres/Hours';
import { getWeather } from './redux/actions/weatherActions';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const data=useSelector(state=>state.data)
  const dispatch=useDispatch()
  const [input, setInput] = useState("")
  const [query, setQuery] = useState("Gafsa")
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(input)
    setInput('')
  }
 
  useEffect(() => {
    dispatch(getWeather(query));
  }, [query]);
  //console.log(data)
  return (

    <div style={{ width: 1000 }}>
      <Routes>
        <Route path="/" element={data ? <>
          <form onSubmit={handleSubmit}>
            <input value={input} placeholder='add place..' onChange={(e) => setInput(e.target.value)} />
          </form>
          <WeatherCard location={data.location} current={data.current} />
{
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            {data.forecast.forecastday.map(el =>
              <NextDays el={el} />)}</div>}
        </>
          : <h1>Loading</h1>} />
        <Route path='/:date' element={data && <Hours days={data.forecast.forecastday} />} />

      </Routes>
    </div>

  );
}

export default App;
