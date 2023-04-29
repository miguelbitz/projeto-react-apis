import pokemon from '../../assets/image1.png'
import arrow from '../../assets/arrow.png'
import { HeaderContainer, Logo, BtnHeader, AllPokemons, CatchButton, HeaderContainerDetail } from './HeaderStyle'
import { Link, useLocation } from "react-router-dom";
import { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';

export const Header = (props) => {
    const location = useLocation()
    const { addToPokedex, removeFromPokedex } = useContext(GlobalContext)

    const buttonText = props.isInPokedex ? 'Excluir da pokedex' : 'Capturar!';
    const buttonAction = props.isInPokedex ? removeFromPokedex : addToPokedex;

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
                            <img src={arrow} alt='arrow' /> <span><u>Todos Pokemons</u></span>
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
                    <Link>
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
                <HeaderContainerDetail>
                    <Link to='/' className='nav-link'>
                        <AllPokemons>
                            <img src={arrow} alt='arrow' /> <span><u>Todos Pokemons</u></span>
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
                </HeaderContainerDetail>
            )
        }
    }

    return (
        changePage()
    )
}