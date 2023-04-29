import { Header } from "../../components/Header/Header"
import { Container, ContainerPokedex, Title } from "./PokedexPageStyle"
import { PokemonCard } from "../../components/PokemonCard/PokemonCard"
import { GlobalContext } from "../../contexts/GlobalContext"
import { useContext } from "react"

export const PokedexPage = () => {

    const { pokedex } =  useContext(GlobalContext)

    return (
        <div>
            <Header/>
            <Container>
                <Title>
                    <h1>Meus Pokémons</h1>
                </Title>
                <ContainerPokedex>
                    {pokedex
                        .sort((a, b) => {
                            return a.id - b.id
                        })
                        .map((pokemon, index) => {
                            return (
                                <PokemonCard
                                    key={index}
                                    pokemon={pokemon}
                                    isInPokedex={true}
                                />
                            )
                        })}
                </ContainerPokedex>
            </Container>
        </div>

    )
}