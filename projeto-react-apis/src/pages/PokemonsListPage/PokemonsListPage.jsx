import { useState, useEffect } from 'react'
import axios from 'axios'
import { Container } from "./PokemonsListPageStyle"
import { PokemonCard } from "../../components/PokemonCard/PokemonCard"
import { getPokemonColors } from '../../components/PokemonColors/PokemonColors'
import pokemonsJson from '../../components/Pokemons/Pokemons.json'

export const PokemonsListPage = () =>{
    const [pokemons, setPokemons] = useState([])
    console.log(pokemons.index)

    const getPokemons =()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/`, {
            headers:{
                Authorization: 'miguel-alves-ozemela'
            }
        })
        .then((response)=>{
            setPokemons(response.data.results)
        })
        .catch((error)=>{
            console.log(error.response)
        })
        
    }

    useEffect(()=>{
        getPokemons()
    },[])

    return(
        <Container>
            {pokemonsJson.map((pokemon, index)=>{
                return(
                    <PokemonCard 
                    key={index}
                    pokemon={pokemon}
                    getPokemonColors={getPokemonColors(pokemon.type[0])} />
                )
            })}
        </Container>
    )
}