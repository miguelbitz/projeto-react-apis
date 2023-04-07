import pokemon from '../../assets/image1.png'
import { HeaderContainer, Logo, BtnHeader, AllPokemons } from './HeaderStyle'
import { useNavigate } from "react-router-dom";
import { goToHome, goToPokedex } from '../../routes/coordinator';

export const Header = () => {
    const navigate = useNavigate()

    return (
        <HeaderContainer>
            <AllPokemons 
            onClick={()=>goToHome(navigate)}>Todos Pokemons</AllPokemons>

            <Logo  
            src={pokemon} 
            alt='logo' />

            <BtnHeader 
            onClick={()=>goToPokedex(navigate)}>Pokédex</BtnHeader>
        </HeaderContainer>
    )
}