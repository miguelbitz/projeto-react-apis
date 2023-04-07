import pokemon from '../../assets/image1.png'
import { HeaderContainer, Logo, BtnHeader, AllPokemons } from './HeaderStyle'

export const Header = (props) => {
    return (
        <HeaderContainer>
            <AllPokemons 
            onClick={()=>props.setScreen(1)}>Todos Pokemons</AllPokemons>

            <Logo  
            src={pokemon} 
            alt='logo' />

            <BtnHeader 
            onClick={()=>props.setScreen(2)}>Pokédex</BtnHeader>
        </HeaderContainer>
    )
}