import { Header } from "../../components/Header/Header"
import { Container, ContainerPokedex, Title } from "./PokedexPageStyle"
import { PokemonCard } from "../../components/PokemonCard/PokemonCard"

export const PokedexPage = (props) => {
    return (
        <div>
            <Header/>
            <Container>
                <Title>
                    <h1>Meus Pokémons</h1>
                </Title>
                <ContainerPokedex>
                    {props.pokedex
                        .sort((a, b) => {
                            return a.id - b.id
                        })
                        .map((pokemon, index) => {
                            return (
                                <PokemonCard
                                    key={index}
                                    pokemon={pokemon}
                                    removeFromPokedex={props.removeFromPokedex}
                                    isInPokedex={true}
                                />
                            )
                        })}
                </ContainerPokedex>
            </Container>
        </div>

    )
}