import { Container, ContainerListPage, PaginationDiv, Title, TitleContainer } from "./PokemonsListPageStyle"
import { PokemonCard } from "../../components/PokemonCard/PokemonCard"
import { Header } from "../../components/Header/Header"
import { GlobalContext } from "../../contexts/GlobalContext"
import { useContext } from "react"
import CustomPagination from "../../components/Pagination/Pagination"



export const PokemonsListPage = () => {

    const { pokemons, currentPage, pokemonsPerPage } = useContext(GlobalContext)

    const lastPostIndex = currentPage * pokemonsPerPage
    const firstPostIndex = lastPostIndex - pokemonsPerPage
    const currentPost = pokemons.slice(firstPostIndex, lastPostIndex)

    return (
        <div>
            <Header />

            <Container>
                <TitleContainer>
                    <Title>Todos Pokémons</Title>
                </TitleContainer>
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
                    <CustomPagination />
                </PaginationDiv>
            </Container>
        </div>
    )
}