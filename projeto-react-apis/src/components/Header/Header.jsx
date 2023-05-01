import pokemon from '../../assets/image1.png'
import arrow from '../../assets/arrow.png'
import { HeaderContainer, Logo, BtnHeader, AllPokemons, CatchButton, Arrow } from './HeaderStyle'
import { Link, useLocation } from "react-router-dom";
import { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';

export const Header = (props) => {
    const location = useLocation()
    const { addToPokedex, removeFromPokedex } = useContext(GlobalContext)

    const buttonText = props.isInPokedex ? 'Excluir da pokédex' : 'Capturar!';
    const buttonAction = props.isInPokedex ? removeFromPokedex : addToPokedex;
    const buttonBackPage = props.isInPokedex ? "Pokédex" : "Todos Pokémons"

    const handlePage = () => {
        if (props.isInPokedex) {
            return '/pokedex'
        } else {
            return '/'
        }
    }

    const color = props.isInPokedex ? '#FF6262' : '#33A4F5'

    const pokedexPage = location.pathname === '/pokedex'
    const home = location.pathname === '/'
    const detailPage = location.pathname.startsWith('/pokemondetail/')

    const changePage = () => {
        if (pokedexPage) {
            return (
                <HeaderContainer>
                    <Link to='/' className='nav-link, all-pokemons'>
                        <AllPokemons >
                            <img src={arrow} alt='arrow' /> <span><u>{buttonBackPage}</u></span>
                        </AllPokemons>
                    </Link>

                    <Logo className='logo' src={pokemon} alt='logo' />
                </HeaderContainer>
            )
        } else if (home) {
            return (
                <HeaderContainer>
                    <Logo className='logo' src={pokemon} alt='logo' />

                    <Link to='/pokedex' className='btn-pokedex'>
                        <BtnHeader >
                            Pokédex
                        </BtnHeader>
                    </Link>
                </HeaderContainer>
            )
        } else if (detailPage) {
            return (
                <HeaderContainer>
                    <Link to={handlePage()} className='nav-link, all-pokemons-detail'>
                        <AllPokemons >
                            <Arrow src={arrow} alt='arrow' /> <span><u>{buttonBackPage}</u></span>
                        </AllPokemons>
                    </Link>

                    <Logo className='logo-detail' src={pokemon} alt='logo' />

                    <Link to={handlePage()} className='btn-header'>
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