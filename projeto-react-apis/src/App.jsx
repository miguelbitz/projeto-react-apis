import React from 'react'
import { useState } from 'react'
import { Header } from './components/Header/Header'
import { PokedexPage } from './pages/PokedexPage/PokedexPage'
import { PokemonsListPage } from './pages/PokemonsListPage/PokemonsListPage'
import { PokemonDetailPage } from './pages/PokemonDetailPage/PokemonDetailPage'
import './App.css'


function App() {
  const [screen, setScreen] = useState(1)

  const AUTH_TOKEN = "miguel-alves-ozemela"
  const BASE_URL = "https://pokeapi.co/api/v2"

  const renderList = () => {
    switch (screen) {
      case 1:
        return (
          <>
            <PokemonsListPage 
            BASE_URL={BASE_URL}
            AUTH_TOKEN={AUTH_TOKEN}
            screen={screen}
            setScreen={setScreen}/>
          </>
        )
      case 2:
        return (
          <>
            <PokedexPage 
            AUTH_TOKEN={AUTH_TOKEN}
            BASE_URL={BASE_URL}/>
          </>
        )
      case 3:
        return (
          <>
            <PokemonDetailPage 
            AUTH_TOKEN={AUTH_TOKEN}
            BASE_URL={BASE_URL}/>
          </>
        )
    }
  }

  return (
    <div className="App">
      <Header 
      screen={screen}
      setScreen={setScreen}/>
      {renderList()}
    </div>
  )
}

export default App
