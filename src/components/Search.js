import React, { useState } from "react"

function Search({ allPokemon, setAllPokemon, originalPokemon }) {
  const [input, setInput] = useState("")

  function handleChange(event) {
    const newInput = event.target.value
    setInput(newInput)

    if (newInput.toLowerCase() === "") {
      setAllPokemon(originalPokemon)
    } else {
      const filteredPokemon = allPokemon.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(newInput.toLowerCase())
      )
      setAllPokemon(filteredPokemon)
    }
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={handleChange} className="prompt" value={input} />
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
