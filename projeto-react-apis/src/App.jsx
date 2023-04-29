import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Router from './routes/Router'
import addImage from './assets/addImage.png'
import removeImage from './assets/removeImage.png'
import Modal from './components/Modal/Modal'
import { useRequestData } from './components/hooks/useRequestData'
import { GlobalState } from './contexts/GlobalState'


function App() {
  /*   const BASE_URL = "https://pokeapi.co/api/v2"
  
    const [pokemons, setPokemons] = useState([])
    const [pokedex, setPokedex] = useState([])
    const [openModal, setOpenModal] = useState(false);
    const [modalImageSrc, setModalImageSrc] = useState(null);
    const [pokemonsData, isLoading, error] = useRequestData(
      `${BASE_URL}/pokemon/?limit=151`,
      []
    )
  
    const getPokemons = async (urls) => {
      try {
        const promises = urls.map((url) => axios.get(url))
        const responses = await Promise.all(promises)
        setPokemons(responses.map((response) => response.data))
      } catch (error) {
        console.log(error.response)
      }
    }
  
    useEffect(() => {
      if (pokemonsData.results) {
        getPokemons(pokemonsData.results.map((pokemon) => pokemon.url));
      }
    }, [pokemonsData])
  
    const addToPokedex = (pokemon) => {
      setPokedex([...pokedex, pokemon])
      setPokemons(pokemons.filter(p => p.name !== pokemon.name))
      setModalImageSrc(addImage)
      setOpenModal(true)
    }
  
    const removeFromPokedex = (pokemon) => {
      setPokemons([...pokemons, pokemon])
      setPokedex(pokedex.filter(p => p.name !== pokemon.name))
      setModalImageSrc(removeImage)
      setOpenModal(true)
    } */

  return (
    <div className="App">
      <GlobalState>
        <Modal />
        <Router/>
      </GlobalState>
    </div>
  )
}

export default App
