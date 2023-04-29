import { Container, PokemonNumber, PokemonName, TypesContainer, PokemonType, Pokemon, CatchButton, Pokeball, Detail } from "./PokemonCardStyle";
import pokeball from '../../assets/pngwing 2.png'
import { getPokemonTypes } from '../PokemonTypes/PokemonTypes'
import { getPokemonColors } from '../../components/PokemonColors/PokemonColors'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToDetail } from "../../routes/coordinator";
import '../../App.css'
import { GlobalContext } from "../../contexts/GlobalContext"
import { useContext } from "react"

export const PokemonCard = ({pokemon, isInPokedex}) => {

    const {removeFromPokedex, addToPokedex} = useContext(GlobalContext)
    const navigate = useNavigate()
    const [image, setImage] = useState({ img: "" })
    const [imageLoaded, setImageLoaded] = useState(false);
    const [isLoad, setIsLoad] = useState(false)


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

    const buttonText = isInPokedex ? 'Excluir' : 'Capturar!'

    const buttonAction = isInPokedex ? removeFromPokedex : addToPokedex
    
    const color = isInPokedex ? '#FF6262' : '#ffffff'

    useEffect(() => {
        setIsLoad(true)
        setImage({ img: pokemon.sprites.other["official-artwork"].front_default })
    }, [pokemon])

    const handleClick = () => {
        goToDetail(navigate, pokemon.name)
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

    return (
        isLoad ?
            <Container color={getPokemonColors(pokemon.types[0].type.name)}>
                <div>
                    <PokemonNumber>{pokemonId()}</PokemonNumber>
                    <PokemonName>{pokemonName(pokemon.name)}</PokemonName>
                    <TypesContainer>{pokemon.types.map((typeObj, index) => {
                        return (
                            <PokemonType
                                key={index}
                                src={getPokemonTypes(typeObj.type.name)}
                                alt=''
                            />)
                    })}
                    </TypesContainer>
                    <Detail onClick={handleClick}>Detalhes</Detail>
                </div>
                <div>
                    <Pokemon
                        src={image?.img}
                        alt=""
                        onLoad={() => setImageLoaded(true)}
                        imgLoad={imageLoaded ? 'block' : 'none'}
                    />
                    <CatchButton
                        color={color}
                        onClick={() => buttonAction({ ...pokemon })}>{buttonText}
                    </CatchButton>
                </div>
                <Pokeball src={pokeball} alt="pokeball" />
            </Container>
            :

            <Container >
                <div className="dot-spinner">
                    <div className="dot-spinner__dot"></div>
                    <div className="dot-spinner__dot"></div>
                    <div className="dot-spinner__dot"></div>
                    <div className="dot-spinner__dot"></div>
                    <div className="dot-spinner__dot"></div>
                    <div className="dot-spinner__dot"></div>
                    <div className="dot-spinner__dot"></div>
                    <div className="dot-spinner__dot"></div>
                </div>
            </Container>
    )
}
