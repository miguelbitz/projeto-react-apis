import { Container, ContainerDetail, Title, PokemonNumber, PokemonName, TypesContainer, PokemonType, Pokemon, FrontPic, BackPic, Pictures, Pokeball, PokeballDetail, Stats, Infos, InfoPokemon, Moves, FrontPicContainer, BackPicContainer, ButtonStats, DivStats, Number, ContainerStats, StatsName, ButtonStatsTotal } from "./PokemonDetailPageStyle"
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
    const [loadImg, setLoadImg] = useState(false)
    const [loadImgFront, setLoadImgFront] = useState(false)
    const [loadImgBack, setLoadImgBack] = useState(false)
    const [stats, setStats] = useState([])

    const loadPokemonData = async (name) => {
        try {
            const response = await axios.get(`${props.BASE_URL}/pokemon/${name}`);
            return response.data;
        } catch (error) {
            console.error(error.response);
        }
    };

    useEffect(() => {
        const getPokemonData = async () => {
            const pokemonData = await loadPokemonData(name);
            setPokemon(pokemonData);
        };

        getPokemonData()
    }, [name])

    useEffect(() => {
        if (pokemon && pokemon.sprites && pokemon.sprites.other) {
            setImage({ img: pokemon.sprites.other["official-artwork"].front_default })
            setImageFront({ img: pokemon.sprites.front_default })
            setImageBack({ img: pokemon.sprites.back_default })
        }
    }, [pokemon]);

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

    const health = pokemon && pokemon.stats ? pokemon.stats[0].base_stat : ''
    const attack = pokemon && pokemon.stats ? pokemon.stats[1].base_stat : ''
    const defense = pokemon && pokemon.stats ? pokemon.stats[2].base_stat : ''
    const spAtk = pokemon && pokemon.stats ? pokemon.stats[3].base_stat : ''
    const spDef = pokemon && pokemon.stats ? pokemon.stats[4].base_stat : ''
    const speed = pokemon && pokemon.stats ? pokemon.stats[5].base_stat : ''

    const total = health + attack + defense + spAtk + spDef + speed

    /*    const stats = pokemon && pokemon.stats
           ? pokemon.stats.map((stat) => stat.base_stat)
           : Array(6).fill('');
   
       const [health, attack, defense, spAtk, spDef, speed] = stats;
   
       const total = stats.reduce((acc, statValue) => acc + statValue, 0); */

    const colorStats = (value) => {
        if (value > 0 && value <= 20) {
            return '#ff0000'
        } else if (value > 20 && value <= 50) {
            return '#ff4800'
        } else if (value > 50 && value <= 80) {
            return '#ffd000'
        } else if (value > 80) {
            return '#2ca50e'
        } else {
            return ""
        }
    }

    const widthStats = (value) => {
        if (value > 100) {
            return value = 100
        } else {
            return value
        }
    }

    const isInPokedex = () => {
        const findPokemonBoolean = props.pokedex.find((poke) => {
            return poke.name === pokemon.name
        })

        return !!findPokemonBoolean
    }

    const handlePokemon = () => {
        if (!isInPokedex()) {
            const findPokemon = props.pokemons.find((poke) => {
                if (poke.name === pokemon.name) {
                    return poke
                }
            })
            return findPokemon
        }else{
            const findPokemon = props.pokedex.find((poke) => {
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
                addToPokedex={props.addToPokedex}
                removeFromPokedex={props.removeFromPokedex}
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
                        <FrontPicContainer>
                            <FrontPic
                                onLoad={() => setLoadImgFront(true)}
                                imgLoad={loadImgFront ? 'block' : 'none'}
                                src={imageFront?.img} alt="" />
                        </FrontPicContainer>
                        <BackPicContainer>
                            <BackPic
                                onLoad={() => setLoadImgBack(true)}
                                imgLoad={loadImgBack ? 'block' : 'none'}
                                src={imageBack?.img}
                                alt="" />
                        </BackPicContainer>
                    </Pictures>
                    <ContainerStats>
                        <h2>Base Stats</h2>
                        <Stats>
                            <DivStats>
                                <StatsName>HP</StatsName>
                                <Number>{health}</Number>
                                <ButtonStats
                                    color={colorStats(health)}
                                    width={widthStats(health)} />
                            </DivStats>
                            <DivStats>
                                <StatsName>Attack</StatsName>
                                <Number>{attack}</Number>
                                <ButtonStats
                                    color={colorStats(attack)}
                                    width={widthStats(attack)} />
                            </DivStats>
                            <DivStats>
                                <StatsName>Defense</StatsName>
                                <Number>{defense}</Number>
                                <ButtonStats
                                    color={colorStats(defense)}
                                    width={widthStats(defense)} />
                            </DivStats>
                            <DivStats>
                                <StatsName>Sp. Atk</StatsName>
                                <Number>{spAtk}</Number>
                                <ButtonStats
                                    color={colorStats(spAtk)}
                                    width={widthStats(spAtk)} />
                            </DivStats>
                            <DivStats>
                                <StatsName>Sp. Def</StatsName>
                                <Number>{spDef}</Number>
                                <ButtonStats
                                    color={colorStats(spDef)}
                                    width={widthStats(spDef)} />
                            </DivStats>
                            <DivStats>
                                <StatsName>Speed</StatsName>
                                <Number>{speed}</Number>
                                <ButtonStats
                                    color={colorStats(speed)}
                                    width={widthStats(speed)} />
                            </DivStats>
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