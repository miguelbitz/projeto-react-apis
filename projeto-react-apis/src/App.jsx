import React from 'react'
import { useState } from 'react'
import { Header } from './components/Header/Header'
import { PokedexPage } from './pages/PokedexPage/PokedexPage'
import { PokemonsListPage } from './pages/PokemonsListPage/PokemonsListPage'
import { PokemonDetailPage } from './pages/PokemonDetailPage/PokemonDetailPage'
import './App.css'


function App() {
  const [screen, setScreen] = useState(1)

  const renderList = () => {
    switch (screen) {
      case 1:
        return (
          <>
            <PokemonsListPage />
          </>
        )
      case 2:
        return (
          <>
            <PokedexPage />
          </>
        )
      case 3:
        return (
          <>
            <PokemonDetailPage />
          </>
        )
    }
  }

  return (
    <div className="App">
      <Header />
      {renderList()}
    </div>
  )
}

export default App
