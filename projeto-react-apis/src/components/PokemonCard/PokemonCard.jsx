import { Container, PokemonNumber, PokemonName, TypesContainer, PokemonType, Pokemon, CatchButton, Pokeball, Detail } from "./PokemonCardStyle";
import pokeball from '../../assets/pngwing 2.png'
import { getPokemonTypes } from '../PokemonTypes/PokemonTypes'


export const PokemonCard = (props) => {

    return (
        <Container color={props.getPokemonColors} >
            <div>
                <PokemonNumber>{props.pokemon.id}</PokemonNumber>
                <PokemonName>{props.pokemon.name}</PokemonName>
                <TypesContainer>
                    {props.pokemon.types.map((typeObj, index) => {
                        return (
                            <PokemonType
                                key={index}
                                src={getPokemonTypes(typeObj.type.name)}
                                alt=''
                            />)
                    })}
                </TypesContainer>
                <Detail>Detalhes</Detail>
            </div>
            <div>
                <Pokemon src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.pokemon.id}.png`} alt="" />
                <CatchButton>Capturar!</CatchButton>
            </div>
            <Pokeball src={pokeball} alt="pokeball" />
        </Container>
    );
}
