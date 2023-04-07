import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Router from './routes/Router'


function App() {
  const AUTH_TOKEN = "miguel-alves-ozemela"
  const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=151"
  const headers = { headers: { Authorization: AUTH_TOKEN } }

  const [screen, setScreen] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(20)
  const [pokemons, setPokemons] = useState([])

  const getPokemons = async () => {
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
  }, [])

  return (
    <div className="App">
      <Router
        headers={headers}
        pokemons={pokemons}
        BASE_URL={BASE_URL}
        AUTH_TOKEN={AUTH_TOKEN} />
    </div>
  )
}

export default App
