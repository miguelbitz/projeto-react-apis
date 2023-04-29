import pokemon from '../../assets/image1.png'
import { HeaderContainer, Logo, BtnHeader, AllPokemons, CatchButton } from './HeaderStyle'
import { Link, useLocation } from "react-router-dom";

export const Header = (props) => {
    const location = useLocation()

    const buttonText = props.isInPokedex ? 'Excluir da pokedex' : 'Capturar!';
    const buttonAction = props.isInPokedex ? props.removeFromPokedex : props.addToPokedex;

    const color = props.isInPokedex ? '#FF6262' : '#33A4F5'

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
                        <CatchButton
                            color={color}
                            onClick={() => buttonAction(props.handlePokemon)}>{buttonText}
                        </CatchButton>
                    </Link>
                </HeaderContainer>
            )
        }
    }

    return (
        changePage()
    )
}