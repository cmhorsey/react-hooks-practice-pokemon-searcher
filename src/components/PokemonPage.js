import React, { useState, useEffect } from "react"
import PokemonCollection from "./PokemonCollection"
import PokemonForm from "./PokemonForm"
import Search from "./Search"
import { Container } from "semantic-ui-react"

function PokemonPage() {
  const [allPokemon, setAllPokemon] = useState([])
  const [originalPokemon, setOriginalPokemon] = useState([])

  const getPokemon = () => {
    fetch("http://localhost:3001/pokemon")
      .then((res) => res.json())
      .then((data) => {
        setAllPokemon(data)
        setOriginalPokemon(data)
      })
  }

  useEffect(() => {
    getPokemon()
  }, [])

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search
        allPokemon={allPokemon}
        setAllPokemon={setAllPokemon}
        originalPokemon={originalPokemon}
      />
      <br />
      <PokemonCollection allPokemon={allPokemon} />
    </Container>
  )
}

export default PokemonPage
