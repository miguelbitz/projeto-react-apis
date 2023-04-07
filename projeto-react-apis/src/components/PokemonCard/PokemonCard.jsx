import { Container, PokemonNumber, PokemonName, TypesContainer, PokemonType, Pokemon, CatchButton, Pokeball, Detail } from "./PokemonCardStyle";
import pokeball from '../../assets/pngwing 2.png'
import { getPokemonTypes } from '../PokemonTypes/PokemonTypes'
import { useState, useEffect } from "react";
import { getPokemonColors } from '../../components/PokemonColors/PokemonColors'
import axios from "axios";


export const PokemonCard = (props) => {
    const { name, url } = props.pokemon

    const [pokemon, setPokemon] = useState([])

    const getDetails = async () => {
        try {
            const response = await axios.get(url)
            setPokemon(response.data)
        }
        catch (error) {
            console.log(error.response);
        }
    }

    useEffect(() => {
        getDetails()
    }, [])

    const pokemonId = () => {
        if (pokemon.id < 10) {
            return `#0${pokemon.id}`
        } else {
            return `#${pokemon.id}`
        }
    }

    const pokemonName = (name) => {
        return name.charAt(0).toUpperCase() + name.slice(1)
    }

    return (
        <Container color={getPokemonColors(pokemon.types[0].type.name)}>
            <div>
                <PokemonNumber>{pokemonId()}</PokemonNumber>
                <PokemonName>{pokemonName(name)}</PokemonName>
                <TypesContainer>{pokemon.types.map((typeObj, index) => {
                    return (
                        <PokemonType
                            key={index}
                            src={getPokemonTypes(typeObj.type.name)}
                            alt=''
                        />)
                })}
                </TypesContainer>
                <Detail>Detalhes</Detail>
            </div>
            <div>
                <Pokemon src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt="" />
                <CatchButton>Capturar!</CatchButton>
            </div>
            <Pokeball src={pokeball} alt="pokeball" />
        </Container>
    );
}
