import React from 'react'
import { useState, useEffect } from 'react'

function Search() {

   const [input, setInput] = useState('')
   const [zipState, setZipState] = useState(91708)
   const [weatherMain, setWeatherMain] = useState('')
   const [weatherData, setWeatherData] = useState('')


   // this is the url that has a zipcode variable so it can become dynamic when performing fetches
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipState},us&units=imperial&appid=38222c42a0dcccecfc49b4c189891895`

    const handleChange = (event) => {
      setInput(event.target.value)
    }

   const handleSubmit = (event) => {
      event.preventDefault()
      setZipState(input);
    }

    // this will fetch the data from an api using specific zipcode
    useEffect(() => {
       fetch(url)
      .then(response => response.json())
      .then(data => setWeatherMain(data.main)) 

    },[zipState])

    useEffect(() => {
       fetch(url)
      .then(response => response.json())
      .then(data => setWeatherData(data)) 

    },[zipState])

    useEffect(() => {
       fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=boolean')
      .then(response => response.json())
      .then(data => console.log(data.results[0].question)) 

    },[zipState])


  return (
    // dot notation needed for fetching certain data in the array
    // .name .weather.description .main.humidity .main.temp
    <div className='input'> 
        {/* this will be the input field that records the user's input and assigns it to the zipcode variable */}
        <form onSubmit={handleSubmit}>
            <input type="text" value={input} onChange={handleChange} id="email"></input>
            <input type="submit" id="submitButton" value="Get Weather"></input>
        </form>
      <h1>City: {weatherData.name}</h1>
      <h1>Temperature: {weatherMain.temp}</h1>
      <h1>Humidity: {weatherMain.humidity}%</h1>
    </div>
  )
}

export default Search