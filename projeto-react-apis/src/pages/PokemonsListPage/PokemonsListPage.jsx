import { Container, ContainerListPage, Title } from "./PokemonsListPageStyle"
import { PokemonCard } from "../../components/PokemonCard/PokemonCard"
import { Header } from "../../components/Header/Header"

export const PokemonsListPage = (props) => {
    return (
        <div>
            <Header />
            <Container>
                <Title>
                    <h1>Todos Pokémons</h1>
                </Title>
                <ContainerListPage>
                    {props.pokemons
                    .sort((a,b) =>{
                        return a.id - b.id
                    })
                    .map((pokemon, index) => {
                        return (
                            <PokemonCard
                                getPokemons={props.getPokemons}
                                key={index}
                                pokemon={pokemon}
                                addToPokedex={props.addToPokedex}
                                isInPokedex={false}
                            />
                        )
                    })}
                </ContainerListPage>
            </Container>
        </div>
    )
}