import { Container, PokemonNumber, PokemonName, TypesContainer, PokemonType, Pokemon, CatchButton, Pokeball, Detail } from "./PokemonCardStyle";
import pokeball from '../../assets/pngwing 2.png'
import { getPokemonTypes } from '../PokemonTypes/PokemonTypes'
import { getPokemonColors } from '../../components/PokemonColors/PokemonColors'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToDetail } from "../../routes/coordinator";
import '../../App.css'

export const PokemonCard = (props) => {
    const navigate = useNavigate()
    const [image, setImage] = useState({ img: "" })
    const [imageLoaded, setImageLoaded] = useState(false);
    const [isLoad, setIsLoad] = useState(false)


    const pokemonId = () => {
        if (props.pokemon.id < 10) {
            return `#0${props.pokemon.id}`
        } else {
            return `#${props.pokemon.id}`
        }
    }

    const pokemonName = (name) => {
        return name.charAt(0).toUpperCase() + name.slice(1)
    }

    const buttonText = props.isInPokedex ? 'Excluir' : 'Capturar!'

    const buttonAction = props.isInPokedex ? props.removeFromPokedex : props.addToPokedex
    
    const color = props.isInPokedex ? '#FF6262' : '#ffffff'

    useEffect(() => {
        setIsLoad(true)
        setImage({ img: props.pokemon.sprites.other["official-artwork"].front_default })
    }, [props.pokemon])

    return (
        isLoad ?
            <Container color={getPokemonColors(props.pokemon.types[0].type.name)}>
                <div>
                    <PokemonNumber>{pokemonId()}</PokemonNumber>
                    <PokemonName>{pokemonName(props.pokemon.name)}</PokemonName>
                    <TypesContainer>{props.pokemon.types.map((typeObj, index) => {
                        return (
                            <PokemonType
                                key={index}
                                src={getPokemonTypes(typeObj.type.name)}
                                alt=''
                            />)
                    })}
                    </TypesContainer>
                    <Detail onClick={() => goToDetail(navigate, props.pokemon.name)}>Detalhes</Detail>
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
                        onClick={() => buttonAction({ ...props.pokemon })}>{buttonText}
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
