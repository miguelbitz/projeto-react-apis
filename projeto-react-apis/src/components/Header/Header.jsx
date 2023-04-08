import pokemon from '../../assets/image1.png'
import { HeaderContainer, Logo, BtnHeader, AllPokemons } from './HeaderStyle'
import { useLocation, useNavigate } from "react-router-dom";
import { goToHome, goToPokedex } from '../../routes/coordinator';

export const Header = (props) => {
    const navigate = useNavigate()
    const location = useLocation()


    /* const buttonText = isInPokedex ? 'Excluir da pokedex' : 'Capturar!';
    const buttonAction = isInPokedex ? props.removeFromPokedex : props.addToPokedex;

    const color = isInPokedex ? '#FF6262' : '#ffffff'; */

    const pokedexPage = location.pathname === '/pokedex'
    const home = location.pathname === '/'
    const detailPage = location.pathname.startsWith('/pokemondetail/')

    const changePage = () => {
        if (pokedexPage) {
            return (
                <HeaderContainer>
                    <AllPokemons
                        onClick={() => goToHome(navigate)}>Todos Pokemons</AllPokemons>

                    <Logo
                        src={pokemon}
                        alt='logo' />
                </HeaderContainer>
            )
        } else if (home) {
            return (
                <HeaderContainer>
                    <AllPokemons
                        onClick={() => goToHome(navigate)}>Todos Pokemons</AllPokemons>

                    <Logo
                        src={pokemon}
                        alt='logo' />

                    <BtnHeader
                        onClick={() => goToPokedex(navigate)}>Pokédex</BtnHeader>
                </HeaderContainer>
            )
        } else if (detailPage) {
            return (
                <HeaderContainer>
                    <AllPokemons
                        onClick={() => goToHome(navigate)}>Todos Pokemons</AllPokemons>

                    <Logo
                        src={pokemon}
                        alt='logo' />


                    <BtnHeader
                        onClick={() => goToPokedex(navigate)}>Pokédex</BtnHeader>
                </HeaderContainer>
            )
        }
    }

return (
    changePage()
)
}