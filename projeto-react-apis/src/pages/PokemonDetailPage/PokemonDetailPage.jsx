import { Container, ContainerDetail, Title, PokemonNumber, PokemonName, TypesContainer, PokemonType, Pokemon, FrontPic, BackPic, Pictures, Pokeball, PokeballDetail, Stats, Infos, InfoPokemon, MovesContainer, PicContainer, ContainerStats, ButtonStatsTotal, DivStats, StatsName, Number } from "./PokemonDetailPageStyle"
import pokeball from '../../assets/pngwing 3.png'
import { getPokemonTypes } from '../../components/PokemonTypes/PokemonTypes'
import { getPokemonColors } from '../../components/PokemonColors/PokemonColors'
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { StatRow } from "../../components/StatRow/StatRow";
import { useRequestData } from "../../components/hooks/useRequestData";
import { Moves } from "../../components/Moves/Moves";
import { GlobalContext } from "../../contexts/GlobalContext";
import { BASE_URL } from '../../constants/url'

export const PokemonDetailPage = () => {

    const {addToPokedex, removeFromPokedex, pokedex, pokemons} = useContext(GlobalContext)

    const [image, setImage] = useState({ img: "" })
    const [imageFront, setImageFront] = useState({ img: "" })
    const [imageBack, setImageBack] = useState({ img: "" })
    const { name } = useParams()
    const [loadImg, setLoadImg] = useState(false)
    const [loadImgFront, setLoadImgFront] = useState(false)
    const [loadImgBack, setLoadImgBack] = useState(false)
    const [pokemon, isLoading, error] = useRequestData(
        `${BASE_URL}/${name}`,
        []
    )

    useEffect(() => {
        if (pokemon && pokemon.sprites && pokemon.sprites.other) {
            setImage({ img: pokemon.sprites.other['official-artwork'].front_default })
            setImageFront({ img: pokemon.sprites.front_default })
            setImageBack({ img: pokemon.sprites.back_default })
        }
    }, [pokemon])

    const pokemonId = () => {
        if (pokemon) {
            if (pokemon.id < 10) {
                return `#0${pokemon.id}`
            } else {
                return `#${pokemon.id}`
            }
        }
    }

    const firstLetterUppercase = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }

    const getStatValue = (stats, index) => {
        return pokemon && stats ? stats[index].base_stat : ''
    }

    const health = getStatValue(pokemon.stats, 0)
    const attack = getStatValue(pokemon.stats, 1)
    const defense = getStatValue(pokemon.stats, 2)
    const spAtk = getStatValue(pokemon.stats, 3)
    const spDef = getStatValue(pokemon.stats, 4)
    const speed = getStatValue(pokemon.stats, 5)

    const total = health + attack + defense + spAtk + spDef + speed

    const getMoves = (moves, index) => {
        return pokemon && moves ? moves[index].move.name : ''
    }

    const move1 = firstLetterUppercase(getMoves(pokemon.moves, 0))
    const move2 = firstLetterUppercase(getMoves(pokemon.moves, 1))
    const move3 = firstLetterUppercase(getMoves(pokemon.moves, 2))
    const move4 = firstLetterUppercase(getMoves(pokemon.moves, 3))
    const move5 = firstLetterUppercase(getMoves(pokemon.moves, 4))


    const isInPokedex = () => {
        const findPokemonBoolean = pokedex.find((poke) => {
            return poke.name === pokemon.name
        })

        return !!findPokemonBoolean
    }

    const handlePokemon = () => {
        if (!isInPokedex()) {
            const findPokemon = pokemons.find((poke) => {
                if (poke.name === pokemon.name) {
                    return poke
                }
            })
            return findPokemon
        } else {
            const findPokemon = pokedex.find((poke) => {
                if (poke.name === pokemon.name) {
                    return poke
                }
            })
            return findPokemon
        }
    }

    return (
        <div>
            <Header
                isInPokedex={isInPokedex()}
                handlePokemon={handlePokemon()}
            />
            <div style={{ display: "flex", justifyContent: "center" }}>
                <PokeballDetail src={pokeball} alt="pokeball" />
            </div>
            <Container>
                <Title>
                    <h1>Detalhes</h1>
                </Title>
                <ContainerDetail color={pokemon && pokemon.types ? getPokemonColors(pokemon.types[0].type.name) : ''}>
                    <Pictures>
                        <PicContainer>
                            <FrontPic
                                onLoad={() => setLoadImgFront(true)}
                                imgLoad={loadImgFront ? 'block' : 'none'}
                                src={imageFront?.img} alt="" />
                        </PicContainer>
                        <PicContainer>
                            <BackPic
                                onLoad={() => setLoadImgBack(true)}
                                imgLoad={loadImgBack ? 'block' : 'none'}
                                src={imageBack?.img}
                                alt="" />
                        </PicContainer>
                    </Pictures>
                    <ContainerStats>
                        <h2>Base Stats</h2>
                        <Stats>
                            <StatRow statName="HP" statValue={health} />
                            <StatRow statName="Attack" statValue={attack} />
                            <StatRow statName="Defense" statValue={defense} />
                            <StatRow statName="Sp. Atk" statValue={spAtk} />
                            <StatRow statName="Sp. Def" statValue={spDef} />
                            <StatRow statName="Speed" statValue={speed} />
                            <DivStats>
                                <StatsName>Total</StatsName>
                                <Number>{total}</Number>
                                <ButtonStatsTotal />
                            </DivStats>
                        </Stats>

                    </ContainerStats>
                    <Infos>
                        <InfoPokemon>
                            <PokemonNumber>{pokemonId()}</PokemonNumber>
                            <PokemonName>{pokemon && pokemon.name ? firstLetterUppercase(pokemon.name) : ''}</PokemonName>
                            <TypesContainer>{pokemon && pokemon.types ? pokemon.types.map((typeObj, index) => (
                                <PokemonType
                                    key={index}
                                    src={getPokemonTypes(typeObj.type.name)}
                                    alt=''
                                />
                            )) : ''}
                            </TypesContainer>
                        </InfoPokemon>
                        <MovesContainer>
                            <h2>Moves</h2>
                            <Moves moveName={move1}/>
                            <Moves moveName={move2}/>
                            <Moves moveName={move3}/>
                            <Moves moveName={move4}/>
                            <Moves moveName={move5}/>
                        </MovesContainer>
                    </Infos>
                    <Pokemon
                        onLoad={() => setLoadImg(true)}
                        imgLoad={loadImg ? 'block' : 'none'}
                        src={image?.img}
                        alt="" />
                    <Pokeball src={pokeball} alt="pokeball" />
                </ContainerDetail>
            </Container>
        </div >
    )
} 