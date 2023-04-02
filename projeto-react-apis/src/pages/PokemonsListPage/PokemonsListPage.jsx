import { useState, useEffect } from 'react'
import axios from 'axios'
import { Container } from "./PokemonsListPageStyle"
import { PokemonCard } from "../../components/PokemonCard/PokemonCard"
/* import { getPokemonColors } from '../../components/PokemonColors/PokemonColors' */

export const PokemonsListPage = () =>{
    const [pokemons, setPokemons] = useState([])

    const getPokemons =()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/`, {
            headers:{
                Authorization: 'miguel-alves-ozemela'
            }
        })
        .then((response)=>{
            console.log(response.data.results)
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
            {pokemons.map((pokemon, index)=>{
                console.log(pokemon)
                return(
                    <PokemonCard 
                    key={index}
                    pokemon={pokemon}
                    /* getPokemonColors={getPokemonColors(pokemon.type[0])} *//>
                )
            })}
        </Container>
    )
}