import pokemon from '../../assets/image1.png'
import { HeaderContainer } from './HeaderStyle'

export const Header = () =>{
    return(
        <HeaderContainer>
            <img src={pokemon} alt='logo'/>
        </HeaderContainer>
    )
}