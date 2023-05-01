import { useRequestData } from '../components/hooks/useRequestData'
import { useState, useEffect } from 'react'
import axios from 'axios'
import addImage from '../assets/addImage.png'
import removeImage from '../assets/removeImage.png'
import { GlobalContext } from './GlobalContext'
import { BASE_URL } from '../constants/url'

export const GlobalState = ({ children }) => {

  const [pokemons, setPokemons] = useState([])
  const [pokedex, setPokedex] = useState([])
  const [openModal, setOpenModal] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState(null);
  const [pokemonsData, isLoading, error] = useRequestData(
    `${BASE_URL}/?limit=386`,
    []
  )
  const [currentPage, setCurrentPage] = useState(1)
  const [pokemonsPerPage, setPokemonsPerPage] = useState(20)

  const totalPokemons = pokemons.length

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

  const removeFromPokedex = (pokemonToRemove) => {
    setPokedex((prevPokedex) => prevPokedex.filter((pokemon) => pokemon.id !== pokemonToRemove.id))

    setPokemons((prevPokemons) => {
      const updatedPokemons = [...prevPokemons, pokemonToRemove]
      return updatedPokemons.sort((a, b) => a.id - b.id);
    })

    setModalImageSrc(removeImage)
    setOpenModal(true)
  }

  const context = {
    pokemons,
    setPokemons,
    pokedex,
    setPokedex,
    openModal,
    setOpenModal,
    modalImageSrc,
    addToPokedex,
    removeFromPokedex,
    currentPage,
    setCurrentPage,
    pokemonsPerPage,
    totalPokemons,
    isLoading,
    error,
    pokemonsData
  }

  return (
    <GlobalContext.Provider value={context}>
      {children}
    </GlobalContext.Provider>
  );

}