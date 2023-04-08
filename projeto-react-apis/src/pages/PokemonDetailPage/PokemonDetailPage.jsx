import { Container, ContainerDetail, Title, PokemonNumber, PokemonName, TypesContainer, PokemonType, Pokemon, FrontPic, BackPic, Pictures, Pokeball, PokeballDetail, Stats, Infos, InfoPokemon, Moves, FrontPicContainer, BackPicContainer } from "./PokemonDetailPageStyle"
import pokeball from '../../assets/pngwing 3.png'
import { getPokemonTypes } from '../../components/PokemonTypes/PokemonTypes'
import { getPokemonColors } from '../../components/PokemonColors/PokemonColors'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import axios from "axios";

export const PokemonDetailPage = (props) => {

    const [image, setImage] = useState({ img: "" })
    const [imageFront, setImageFront] = useState({ img: "" })
    const [imageBack, setImageBack] = useState({ img: "" })
    const { name } = useParams()
    const [pokemon, setPokemon] = useState([])

    const findPokemon = () => props.pokemons.find((pokemon) => pokemon.name === name)

    const pokemonId = () => {
        if (pokemon) {
            if (pokemon.id < 10) {
                return `#0${pokemon.id}`
            } else {
                return `#${pokemon.id}`
            }
        }
    }

    const pokemonName = (name) => {
        return name.charAt(0).toUpperCase() + name.slice(1)
    }

    useEffect(() => {
        setPokemon(findPokemon())
    }, [props.pokemons])

    useEffect(() => {
        if (pokemon && pokemon.sprites && pokemon.sprites.other) {
            setImage({ img: pokemon.sprites.other["official-artwork"].front_default })
            setImageFront({ img: pokemon.sprites.front_default })
            setImageBack({ img: pokemon.sprites.back_default })
        }
    }, [pokemon]);

    console.log(pokemon)
    return (
        <div>
            <Header />
            <div style={{ display: "flex", justifyContent: "center" }}>
                <PokeballDetail src={pokeball} alt="pokeball" />
            </div>
            <Container>
                <Title>
                    <h1>Detalhes</h1>
                </Title>
                <ContainerDetail color={pokemon && pokemon.types ? getPokemonColors(pokemon.types[0].type.name) : ''}>
                    <Pictures>
                        <FrontPicContainer>
                            <FrontPic src={imageFront?.img} alt="front" />
                        </FrontPicContainer>
                        <BackPicContainer>
                        <BackPic src={imageBack?.img} alt="back" />
                        </BackPicContainer>
                    </Pictures>
                    <Stats>
                        <h2>Base Stats</h2>
                        <div>
                            <p>HP</p>
                        </div>
                    </Stats>
                    <Infos>
                        <InfoPokemon>
                            <PokemonNumber>{pokemonId()}</PokemonNumber>
                            <PokemonName>{pokemon && pokemon.name ? pokemonName(pokemon.name) : ''}</PokemonName>
                            <TypesContainer>{pokemon && pokemon.types ? pokemon.types.map((typeObj, index) => (
                                <PokemonType
                                    key={index}
                                    src={getPokemonTypes(typeObj.type.name)}
                                    alt=''
                                />
                            )) : ''}
                            </TypesContainer>
                        </InfoPokemon>
                        <Moves>
                            <h2>Moves</h2>
                        </Moves>
                    </Infos>
                    <Pokemon src={image?.img} alt="img" />
                    <Pokeball src={pokeball} alt="pokeball" />
                </ContainerDetail>
            </Container>
        </div>
    )
} 