import styled from 'styled-components'

export const HeaderContainer = styled.div`
    display: flex;
    background-color: white;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
    padding: 10px;

    @media screen and (min-width: 600px) and (max-width: 992px){
        gap: 0;
    }

    @media screen and (min-width: 993px){
        gap: 0;
    }
`

export const Logo = styled.img`
    width: 40vw;

    @media screen and (min-width: 600px) and (max-width: 992px){
        width: 30vw;
    }

    @media screen and (min-width: 993px){
        width: 15vw;
    }
`

export const BtnHeader = styled.button`
    width: 30vw;
    height: 10vw;
    border-radius: 8px;
    background-color: #33A4F5;
    border: none;
    color: white;
    font-size: 1rem;

@media screen and (min-width: 600px) and (max-width: 992px){
    width: 25vw;
    height: 8vw;
}

@media screen and (min-width: 993px){
    width: 14vw;
    height: 3.2vw;
    font-size: 1.4rem;
}
`

export const AllPokemons = styled.p`
    font-size: 0.8rem;
    font-weight: 800;

@media screen and (min-width: 600px) and (max-width: 992px){
    font-size: 1.2rem;
}

@media screen and (min-width: 993px){
    font-size: 1.4rem;
}
`