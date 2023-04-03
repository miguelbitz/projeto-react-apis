import { useState, useEffect } from 'react'
import axios from 'axios'
import { Container } from "./PokemonsListPageStyle"
import { PokemonCard } from "../../components/PokemonCard/PokemonCard"
import { getPokemonColors } from '../../components/PokemonColors/PokemonColors'

export const PokemonsListPage = (props) => {
    const [pokemons, setPokemons] = useState([])

    const getPokemons = async (ids) => {
        try {
          const promises = ids.map((id) =>
            axios.get(`${props.BASE_URL}/pokemon/${id}`, {
              headers: {
                Authorization: props.AUTH_TOKEN,
              },
            }),
          )
    
          const responses = await Promise.all(promises)
          const pokemonsData = responses.map((response) => response.data);
          setPokemons(pokemonsData);
        } catch (error) {
          console.log(error.response.data.message);
        }
      }
    
      useEffect(() => {
        const ids = Array.from({ length: 151 }, (_, i) => i + 1)
        getPokemons(ids)
      }, [])

    return (
        <Container>
            {pokemons.map((pokemon, index) => {
                return (
                    <PokemonCard
                        key={index}
                        pokemon={pokemon}
                        getPokemonColors={getPokemonColors(pokemon.types[0].type.name)} />
                )
            })}
        </Container>
    )
}