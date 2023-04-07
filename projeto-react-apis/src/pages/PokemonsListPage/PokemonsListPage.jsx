import { Container, ContainerListPage, Title } from "./PokemonsListPageStyle"
import { PokemonCard } from "../../components/PokemonCard/PokemonCard"

export const PokemonsListPage = (props) => {

    return (
        <ContainerListPage>
            <Title>
                <h1>Todos Pokémons</h1>
            </Title>
            <Container>
             {props.pokemons.map((pokemon, index) => {
                return (
                    <PokemonCard
                        key={index}
                        pokemon={pokemon}
                        />
                )
            })}
            </Container>
        </ContainerListPage>
    )
}