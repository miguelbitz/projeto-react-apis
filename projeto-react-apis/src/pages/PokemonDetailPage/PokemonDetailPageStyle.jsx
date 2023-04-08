import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #5c5c5d;
  color: white;
  height: 100vh;
`

export const Title = styled.div`
  width: 100%;
  padding: 2.5rem;
  padding-left: 8.5rem;
`

export const ContainerDetail = styled.div`
  background-color: ${(props) => props.color};
  background-size: contain;
  display: flex;
  align-items: center;
  height: 75vh;
  width: 85vw;
  border-radius: 37px;
  position: relative;
  z-index: 1;
  padding: 0 2rem;
  gap: 3.5rem;

  @media screen and (min-width: 600px) and (max-width: 992px){

  }

  @media screen and (min-width: 993px){

  }
`
export const Pictures = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 3rem;
`
export const FrontPicContainer = styled.div`
  background-color: white;
  color: black;
  width: 18rem;
  height: 18rem;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const FrontPic = styled.img`
  height: 15rem;
`
export const BackPicContainer = styled.div`
  background-color: white;
  color: black;
  width: 18rem;
  height: 18rem;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const BackPic = styled.img`
  height: 15rem;
`
export const Stats = styled.div`
  background-color: white;
  color: black;
  width: 25rem;
  height: 39rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1rem;
  gap: 2rem;
`
export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  z-index: 3;
`
export const InfoPokemon = styled.div`
  z-index: 3;
`
export const Moves = styled.div`
  background-color: white;
  color: black;
  width: 25rem;
  height: 30rem;
  border-radius: 8px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1rem;
  z-index: 3;
`
export const PokeballDetail = styled.img`
  position: absolute;
  height: 9rem;
  margin-left: -14rem;


  @media screen and (min-width: 600px) and (max-width: 992px){
    height: 12rem;
  }

  @media screen and (min-width: 993px){
    height: 52rem;
  }
`
export const PokemonNumber = styled.p`
  font-size: 13px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  text-align: left;

  @media screen and (min-width: 600px) and (max-width: 992px){
    font-size: 1rem;
  }

  @media screen and (min-width: 993px){
    font-size: 1rem;
  }
`
export const PokemonName = styled.h1`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  text-align: left;
  margin-bottom: 10px;

  @media screen and (min-width: 600px) and (max-width: 992px){
    font-size: 2rem;
  }

  @media screen and (min-width: 993px){
    font-size: 2rem;
  }
`
export const PokemonType = styled.img`
  height: 1.4rem;
  border-radius: 8px;
  overflow: hidden;
  border: 1px dashed #ffffff;
  margin-right: 8px;

  @media screen and (min-width: 600px) and (max-width: 992px){
    max-width: 6.25rem;
    height: 1.8rem;
  } 

  @media screen and (min-width: 993px){
    max-width: 6.25rem;
    height: 1.8rem;
  }
`
export const TypesContainer = styled.div`

  @media screen and (min-width: 600px) and (max-width: 992px){
    margin-bottom: 3.25rem;
  }

  @media screen and (min-width: 993px){
    margin-bottom: 3.25rem;

  }
`
export const Pokeball = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  height: 9rem;
  z-index: 2;

  @media screen and (min-width: 600px) and (max-width: 992px){
    height: 12rem;
  }

  @media screen and (min-width: 993px){
    height: 100%;
  }
`
export const Pokemon = styled.img`
  height: 8rem;
  position: absolute;
  top: -3.125rem;
  right: 2rem;
  z-index: 3;

  @media screen and (min-width: 600px) and (max-width: 992px){
    width: 12.063rem;
    height: 12.063rem;
  }

  @media screen and (min-width: 993px){
    top: -5rem;
    width: 16rem;
    height: 16rem;
  }
`
