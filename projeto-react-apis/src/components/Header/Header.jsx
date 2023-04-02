import pokemon from '../../assets/image1.png'
import { HeaderContainer, Logo, BtnHeader, AllPokemons } from './HeaderStyle'

export const Header = () => {
    return (
        <HeaderContainer>
            <AllPokemons>Todos Pokemons</AllPokemons>
            <Logo src={pokemon} alt='logo' />
            <BtnHeader>Pokédex</BtnHeader>
        </HeaderContainer>
    )
}