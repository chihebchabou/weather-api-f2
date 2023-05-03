import React from 'react'
import { useState } from 'react'

const Search = ({searchWeather}) => {
    const [text, setText] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        if (!text) {
            alert('Please enter the city name')
        } else {
            searchWeather(text);
            setText("")
        }
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='enter city name' value={text} onChange={e => setText(e.target.value)} />
    </form>
  )
}

export default Search