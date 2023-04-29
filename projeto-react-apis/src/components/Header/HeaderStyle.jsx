import styled from 'styled-components'

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: white;
    justify-items: center;
    align-items: center;
    height: 8rem;


    @media screen and (min-width: 600px) and (max-width: 992px){
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        background-color: white;
        justify-items: center;
        align-items: center;
        height: 8rem;
    }

    @media screen and (min-width: 993px){
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        background-color: white;
        justify-items: center;
        align-items: center;
        height: 8rem;
    }
`

export const HeaderContainerDetail = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: white;
    justify-items: center;
    align-items: center;
    height: 10rem;
    padding: .5rem;


    @media screen and (min-width: 600px) and (max-width: 992px){
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        background-color: white;
        justify-items: center;
        align-items: center;
        height: 8rem;
    }

    @media screen and (min-width: 993px){
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        background-color: white;
        justify-items: center;
        align-items: center;
        height: 8rem;
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
    cursor: pointer;

@media screen and (min-width: 600px) and (max-width: 992px){
    width: 25vw;
    height: 8vw;
}

@media screen and (min-width: 993px){
    width: 14vw;
    height: 3.2vw;
    font-size: 1.2rem;
}
`

export const CatchButton = styled.button`
    width: 30vw;
    height: 10vw;
    border-radius: 8px;
    background-color: ${(props) => props.color};
    border: none;
    color: white;
    font-size: 1rem;
    cursor: pointer;

@media screen and (min-width: 600px) and (max-width: 992px){
    width: 25vw;
    height: 8vw;
}

@media screen and (min-width: 993px){
    width: 14vw;
    height: 3.2vw;
    font-size: 1.2rem;
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