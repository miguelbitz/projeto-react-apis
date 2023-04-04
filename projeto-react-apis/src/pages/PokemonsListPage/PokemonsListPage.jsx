import { Container } from "./PokemonsListPageStyle"
import { PokemonCard } from "../../components/PokemonCard/PokemonCard"
import { getPokemonColors } from '../../components/PokemonColors/PokemonColors'

export const PokemonsListPage = (props) => {

    return (
        <Container>
            {props.pokemons.map((pokemon, index) => {
                return (
                    <PokemonCard
                        key={index}
                        pokemon={pokemon}
                        getPokemonColors={getPokemonColors(pokemon.types[0].type.name)} />
                )
            })}
        </Container>
    )
}