import { Container, ContainerListPage, Title } from "./PokemonsListPageStyle"
import { PokemonCard } from "../../components/PokemonCard/PokemonCard"
import { Header } from "../../components/Header/Header"
import { GlobalContext } from "../../contexts/GlobalContext"
import { useContext } from "react"

export const PokemonsListPage = () => {

    const {pokemons} = useContext(GlobalContext)

    return (
        <div>
            <Header />
            <Container>
                <Title>
                    <h1>Todos Pokémons</h1>
                </Title>
                <ContainerListPage>
                    {pokemons
                    .sort((a,b) =>{
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
            </Container>
        </div>
    )
}