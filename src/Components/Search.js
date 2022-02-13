import React from 'react'
import { useState } from 'react'

function Search() {

   const [input, setInput] = useState('')
   const [zipState, setZipState] = useState('')


    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipState},us&units=imperial&appid=38222c42a0dcccecfc49b4c189891895`

    const handleChange = (event) => {
      setInput(event.target.value)
    }

   const handleSubmit = (event) => {
      event.preventDefault()
      setZipState(input);
    }

      console.log(zipState)


  return (
    <div> 
        {/* this will be the input field that records the user's input and assigns it to the zipcode variable */}
        <form onSubmit={handleSubmit}>
            <input type="text" value={input} onChange={handleChange}></input>
            <input type="submit"></input>
        </form>
    </div>
  )
}

export default Search