import { Container, PokemonNumber, PokemonName, TypesContainer, PokemonType, Pokemon, CatchButton, Pokeball, Detail } from "./PokemonCardStyle";
import pokeball from '../../assets/pngwing 2.png'
import { getPokemonTypes } from '../PokemonTypes/PokemonTypes'


export const PokemonCard = (props) => {

    const pokemonId = ()=>{
        if(props.pokemon.id<10){
            return `#0${props.pokemon.id}`
        }else{
            return `#${props.pokemon.id}`
        }
    }

    const pokemonName = (name) =>{
        return name.charAt(0).toUpperCase() + name.slice(1)
    }

    const pokemonType = props.pokemon.types.map((typeObj, index) => {
        return (
            <PokemonType
                key={index}
                src={getPokemonTypes(typeObj.type.name)}
                alt=''
            />)
    })

    return (
        <Container color={props.getPokemonColors} >
            <div>
                <PokemonNumber>{pokemonId()}</PokemonNumber>
                <PokemonName>{pokemonName(props.pokemon.name)}</PokemonName>
                <TypesContainer>{pokemonType}</TypesContainer>
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
