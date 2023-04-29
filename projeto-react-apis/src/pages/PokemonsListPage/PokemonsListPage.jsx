import { Container, ContainerListPage, PaginationDiv, Title } from "./PokemonsListPageStyle"
import { PokemonCard } from "../../components/PokemonCard/PokemonCard"
import { Header } from "../../components/Header/Header"
import { GlobalContext } from "../../contexts/GlobalContext"
import { useContext } from "react"
import Pagination from "../../components/Pagination/Pagination"
import { AudioPlayer } from "../../components/AudioPlayer/AudioPlayer"


export const PokemonsListPage = () => {

    const { pokemons, currentPage, pokemonsPerPage } = useContext(GlobalContext)

    const lastPostIndex = currentPage * pokemonsPerPage
    const firstPostIndex = lastPostIndex - pokemonsPerPage
    const currentPost = pokemons.slice(firstPostIndex, lastPostIndex)

    const audioSrc = '../../../src/assets/pokemon-audio.mp3';

    return (
        <div>
            <Header />

            <Container>
                <Title>
                    <h1>Todos Pokémons</h1>
                    {/* <AudioPlayer src={audioSrc} loop/> */}
                    <audio controls src={audioSrc} loop> </audio>
                </Title>
                <ContainerListPage>
                    {currentPost
                        .sort((a, b) => {
                            return a.id - b.id
                        })
                        .map((pokemon, index) => {
                            return (
                                <PokemonCard
                                    key={index}
                                    pokemon={pokemon}
                                    isInPokedex={false}
                                />
                            )
                        })}
                </ContainerListPage>
                <PaginationDiv>
                    <Pagination />
                </PaginationDiv>
            </Container>
        </div>
    )
}