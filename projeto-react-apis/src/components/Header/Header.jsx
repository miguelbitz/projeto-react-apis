import pokemon from '../../assets/image1.png'
import { HeaderContainer, Logo, BtnHeader, AllPokemons } from './HeaderStyle'
import { Link, useLocation} from "react-router-dom";

export const Header = (props) => {
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
                    <Link to='/' className='nav-link'>
                        <AllPokemons>
                            Todos Pokemons
                        </AllPokemons>
                    </Link>

                    <Logo
                        src={pokemon}
                        alt='logo' />
                </HeaderContainer>
            )
        } else if (home) {
            return (
                <HeaderContainer>
                    <Link to='/' className='nav-link'>
                        <AllPokemons>
                            Todos Pokemons
                        </AllPokemons>
                    </Link>

                    <Logo
                        src={pokemon}
                        alt='logo' />

                    <Link to='/pokedex'>
                        <BtnHeader>
                            Pokédex
                        </BtnHeader>
                    </Link>
                </HeaderContainer>
            )
        } else if (detailPage) {
            return (
                <HeaderContainer>
                    <Link to='/' className='nav-link'>
                        <AllPokemons>
                            Todos Pokemons
                        </AllPokemons>
                    </Link>

                    <Logo
                        src={pokemon}
                        alt='logo' />

                    <Link to='/pokedex'>
                        <BtnHeader>
                            Pokédex
                        </BtnHeader>
                    </Link>
                </HeaderContainer>
            )
        }
    }

    return (
        changePage()
    )
}