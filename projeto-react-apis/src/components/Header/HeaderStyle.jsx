import styled from 'styled-components'

export const HeaderContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 1rem;
    background-color: white;
    justify-items: center;
    align-items: center;
    height: 10rem;
    padding: 1rem;

    @media screen and (min-width: 501px){
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr;
        height: 8rem;
        padding: 1rem;
    }
`

export const Logo = styled.img`
    width: 10rem;

    @media screen and (min-width: 600px) and (max-width: 992px){
        width: 20vw;
    }

    @media screen and (min-width: 993px){
        width: 15rem;
    }
`

export const BtnHeader = styled.button`
    width: 7rem;
    height: 3rem;
    border-radius: 8px;
    background-color: #33A4F5;
    border: none;
    color: white;
    font-size: 1rem;
    cursor: pointer;

@media screen and (min-width: 600px) and (max-width: 992px){
    width: 20vw;
    height: 6vw;
}

@media screen and (min-width: 993px){
    width: 14vw;
    height: 3.2vw;
    font-size: 1.2rem;
}
`

export const CatchButton = styled.button`
    width: 30vw;
    height: 6vh;
    border-radius: 8px;
    background-color: ${(props) => props.color};
    border: none;
    color: white;
    font-size: 13px;
    cursor: pointer;

@media screen and (min-width: 600px) and (max-width: 992px){
    width: 20vw;
    height: 5vw;
    font-size: 1rem;
}

@media screen and (min-width: 993px){
    width: 16vw;
    height: 4vw;
    font-size: 1.2rem;
}
`

export const AllPokemons = styled.div`
    font-size: 0.8rem;
    font-weight: 800;
    display: flex;
    gap: 5px;
    align-items: center;

    @media screen and (min-width: 600px) and (max-width: 992px){
        font-size: 1.2rem;
    }

    @media screen and (min-width: 993px){
        font-size: 1.4rem;
    }
`

export const Arrow = styled.img`
    height: .7rem;

    @media screen and (min-width: 992px){
        height: 1rem;
    }
`