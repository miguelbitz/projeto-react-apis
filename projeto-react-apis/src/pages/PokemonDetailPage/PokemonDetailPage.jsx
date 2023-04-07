import { Container, ContainerDetail, Title, PokemonNumber, PokemonName, TypesContainer, PokemonType, Pokemon, CatchButton, Pokeball, Detail } from "./PokemonDetailPageStyle"
import { Header } from "../../components/Header/Header"
import pokeball from '../../assets/pngwing 2.png'
import { getPokemonTypes } from '../../components/PokemonTypes/PokemonTypes'
import { getPokemonColors } from '../../components/PokemonColors/PokemonColors'
import { useState, useEffect } from "react";
import axios from "axios";

export const PokemonDetailPage = (props) => {

    const [pokemonDetail, setPokemonDetail] = useState([])
    const [img, setImg] = useState()

    const getDetails = async () => {
        try {
            const response = await axios.get(props.pokemon.url)
            console.log(response.data)
            setPokemonDetail(response.data)
            setImg(response.data.sprites.other["official-artwork"].front_default)
        }
        catch (error) {
            console.log(error.response);
        }
    }

    useEffect(() => {
        getDetails()
    }, [props.pokemon])

    const pokemonId = () => {
        if (pokemonDetail.id < 10) {
            return `#0${pokemonDetail.id}`
        } else {
            return `#${pokemonDetail.id}`
        }
    }

    const pokemonName = (name) => {
        return name.charAt(0).toUpperCase() + name.slice(1)
    }

    return (
        <div>
            <Header />
            <Container>
                <Title>
                    <h1>Detalhes</h1>
                </Title>
                <ContainerDetail>
                    <Container color={getPokemonColors(pokemonDetail.types[0].type.name)}>
                        <div>
                            <PokemonNumber>{pokemonId()}</PokemonNumber>
                            <PokemonName>{pokemonName(pokemonDetail.name)}</PokemonName>
                            <TypesContainer>{pokemonDetail.types.map((typeObj, index) => {
                                return (
                                    <PokemonType
                                        key={index}
                                        src={getPokemonTypes(typeObj.type.name)}
                                        alt=''
                                    />)
                            })}
                            </TypesContainer>
                            <Detail onClick={() => goToDetail(navigate)}>Detalhes</Detail>
                        </div>
                        <div>
                            <Pokemon src={img} alt="" />
                            <CatchButton onClick={() => buttonAction({ ...pokemonDetail })}>{buttonText}</CatchButton>
                        </div>
                        <Pokeball src={pokeball} alt="pokeball" />
                    </Container>
                </ContainerDetail>
            </Container>
        </div>
    )
}