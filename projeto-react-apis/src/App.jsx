import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Router from './routes/Router'


function App() {
  const AUTH_TOKEN = "miguel-alves-ozemela"
  const BASE_URL = "https://pokeapi.co/api/v2/pokemon"
  const headers = { headers: { Authorization: AUTH_TOKEN } }

  const [pokemons, setPokemons] = useState([])
  const [pokedex, setPokedex] = useState([])
  

  /* const getPokemons = async () => {
    try {
      const response = await axios.get(BASE_URL, headers)
      setPokemons(response.data.results)
    }
    catch (error) {
      console.log(error.response);
    }
  } 

  useEffect(() => {
    getPokemons()
  }, [])*/

  const getPokemons = async (ids) => {
    try {
      const promises = ids.map((id) =>
        axios.get(`${BASE_URL}/${id}`, headers),
      )
      const responses = await Promise.all(promises)
      const pokemonsData = responses.map((response) => response.data)
      setPokemons(pokemonsData)
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    const ids = Array.from({ length: 20 }, (_, i) => i + 1)
    getPokemons(ids)
  }, [])

  const addToPokedex = (pokemon) => {
    setPokedex([...pokedex, pokemon])
    setPokemons(pokemons.filter(p => p.name !== pokemon.name))
  }

  const removeFromPokedex = (pokemon) => {
    setPokemons([...pokemons, pokemon])
    setPokedex(pokedex.filter(p => p.name !== pokemon.name))
  }



  return (
    <div className="App">
      <Router
      getPokemons={getPokemons}
        addToPokedex={addToPokedex}
        removeFromPokedex={removeFromPokedex}
        headers={headers}
        pokedex={pokedex}
        pokemons={pokemons}
        BASE_URL={BASE_URL}
        AUTH_TOKEN={AUTH_TOKEN} />
    </div>
  )
}

export default App
