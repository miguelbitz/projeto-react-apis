import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Header } from './components/Header/Header'
import { PokedexPage } from './pages/PokedexPage/PokedexPage'
import { PokemonsListPage } from './pages/PokemonsListPage/PokemonsListPage'
import { PokemonDetailPage } from './pages/PokemonDetailPage/PokemonDetailPage'
import './App.css'
import PaginationQuantity from './components/Pagination/Pagination'


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

  const renderList = () => {
    switch (screen) {
      case 1:
        return (
          <>
            <PokemonsListPage
              headers={headers}
              pokemons={pokemons}
              BASE_URL={BASE_URL}
              AUTH_TOKEN={AUTH_TOKEN}
              screen={screen}
              setScreen={setScreen} />
            <PaginationQuantity
              totalPosts={pokemons.length} />
          </>
        )
      case 2:
        return (
          <>
            <PokedexPage
              AUTH_TOKEN={AUTH_TOKEN}
              BASE_URL={BASE_URL} />
          </>
        )
      case 3:
        return (
          <>
            <PokemonDetailPage
              AUTH_TOKEN={AUTH_TOKEN}
              BASE_URL={BASE_URL} />
          </>
        )
    }
  }

  return (
    <div className="App">
      <Header
        screen={screen}
        setScreen={setScreen} />
      {renderList()}
    </div>
  )
}

export default App
