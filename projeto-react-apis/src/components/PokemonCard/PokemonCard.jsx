import { Container, PokemonNumber, PokemonName, TypesContainer, PokemonType, Pokemon, CatchButton, Pokeball, Detail } from "./PokemonCardStyle";
import pokeball from '../../assets/pngwing 2.png'
import { getPokemonTypes } from '../PokemonType/PokemonType'


export const PokemonCard = (props) => {

    return (
        <Container color={props.getPokemonColors}>
            <div>
                <PokemonNumber>{props.pokemon.id}</PokemonNumber>
                <PokemonName>{props.pokemon.name.english}</PokemonName>
                <TypesContainer>
                    {props.pokemon.type.map((type) => {
                        return (
                            <PokemonType
                                key={type}
                                src={getPokemonTypes(type)}
                                alt=''
                            />)
                    })}
                </TypesContainer>
                <Detail>Detalhes</Detail>
            </div>
            <div>
                <Pokemon src={`https://www.serebii.net/swordshield/pokemon/${props.pokemon.id}.png`} alt="" />
                <CatchButton>Capturar!</CatchButton>
            </div>
            <Pokeball src={pokeball} alt="pokeball" />
        </Container>
    );
}
