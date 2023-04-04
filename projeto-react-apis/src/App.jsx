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
  const BASE_URL = "https://pokeapi.co/api/v2"

  const [screen, setScreen] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(20)
  const [pokemons, setPokemons] = useState([])

  const getPokemons = async (ids) => {
    try {
      const promises = ids.map((id) =>
        axios.get(`${BASE_URL}/pokemon/${id}`, {
          headers: {
            Authorization: AUTH_TOKEN,
          },
        }),
      )

      const responses = await Promise.all(promises)
      const pokemonsData = responses.map((response) => response.data);
      setPokemons(pokemonsData);
    } catch (error) {
      console.log(error.response);
    }
  }

  useEffect(() => {
    const ids = Array.from({ length: 151 }, (_, i) => i + 1)
    getPokemons(ids)
  }, [])



  const renderList = () => {
    switch (screen) {
      case 1:
        return (
          <>
            <PokemonsListPage
              pokemons={pokemons}
              BASE_URL={BASE_URL}
              AUTH_TOKEN={AUTH_TOKEN}
              screen={screen}
              setScreen={setScreen} />
              <PaginationQuantity
              totalPosts={pokemons.length}/>
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
