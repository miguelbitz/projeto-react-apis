import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #5c5c5d;
  color: white;
  height: 100%;
`

export const Title = styled.div`
  width: 100%;
  padding: 2.5rem;
  padding-left: 2rem;

  @media screen and (min-width: 600px) and (max-width: 992px){
    padding-left: 8.5rem;

  }

  @media screen and (min-width: 993px) and (max-width: 1365px){
    padding-left: 8.5rem;
  }

  @media screen and (min-width: 1366px){
    padding-left: 8.5rem;
  }
`

export const ContainerDetail = styled.div`
  background-color: ${(props) => props.color};
  background-size: contain;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(7, 1fr);
  row-gap: 20px;
  justify-items: center;
  align-items: center;
  height: 85rem;
  width: 85vw;
  border-radius: 37px;
  position: relative;
  z-index: 1;
  padding: 1rem 2rem;

  @media screen and (min-width: 600px) and (max-width: 992px){
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(7, 1fr);
    height: 77rem;
  } 

  @media screen and (min-width: 993px){
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    height: 40rem;
    column-gap: 20px;
    padding: 1.5rem 1.5rem;
  }

 @media screen and (min-width: 1600px){
    width: 70vw;
  } 
`

export const PicContainer = styled.div`
  position: relative;
  background-color: white;
  color: black;
  width: 7rem;
  height: 7rem;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;

@media screen and (min-width: 992px) and (max-width: 1365px){
    margin-top: 0;
    width: 13rem;
    height: 13rem;
}

@media screen and (min-width: 1366px){
  margin-top: 0;
  width: 16rem;
  height: 16rem;
}
`
export const FrontPic = styled.img`
  height: 8rem;
  display: ${(props) => props.imgLoad};
  z-index: 3;

  @media screen and (min-width: 992px) and (max-width: 1365px){
    height: 10rem;
  }

  @media screen and (min-width: 1366px){
    height: 13rem;
  }
`

export const BackPic = styled.img`
  height: 8rem;
  display: ${(props) => props.imgLoad};
  z-index: 3;

  @media screen and (min-width: 992px) and (max-width: 1365px){
    height: 10rem;
  }

  @media screen and (min-width: 1366px){
    height: 13rem;
  }
`
export const ContainerStats = styled.div`
  position: relative;
  background-color: white;
  color: black;
  width: 15rem;
  height: 25rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1rem;
  gap: 1rem;
  z-index: 3;

  @media screen and (min-width: 993px) and (max-width: 1365px){
    height: 100%;
    width: 17rem;
  }

  @media screen and (min-width: 1366px){
    height: 100%;
    width: 25rem;
  }
`

export const Stats = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  width: 100%;
  margin-left: -1rem;
  padding: 1rem;
`
export const ButtonStats = styled.button`
  background-color: ${(props) => props.color};
  height: 1rem;
  width: ${(props) => props.width}%;
  border: none;
  border-radius: 10px;
  grid-column: 4 / span 5;
  align-items: center;
`

export const ButtonStatsTotal = styled.button`
  background-color: white;
  height: 1rem;
  width: 12rem;
  border: none;
  grid-column: 4 / span 5
`

export const StatsName = styled.p`
  grid-column: 1 / span 2;
  justify-self: end;
  font-weight: 400;
`

export const Number = styled.div`
  justify-self: end;
  font-weight: 600;
`

export const DivStats = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: auto;
  gap: .5rem;
  align-items: center;
  padding-left: 1rem;
`

export const InfoPokemon = styled.div`
  position: relative;
  z-index: 3;
  
  @media screen and (min-width: 600px){
  top: 1rem;
  }

  @media screen and (min-width: 1366px){
    width: 15rem;
  }
`
export const MovesContainer = styled.div`
  background-color: white;
  color: black;
  width: 15rem;
  height: 22rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1rem;
  z-index: 3;

  @media screen and (min-width: 993px){
    height: 100%;
  }


`
export const PokeballDetail = styled.img`
  display: none;


  @media screen and (min-width: 769px){
    display: block;
    position: absolute;
    margin-left: -14rem;
    height: 100%;
    overflow: hidden;
  }
`
export const PokemonNumber = styled.p`
  font-size: 13px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  text-align: left;

  @media screen and (min-width: 600px){
    font-size: 1rem;
  }
`
export const PokemonName = styled.h1`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  text-align: left;
  margin-bottom: 10px;

  @media screen and (min-width: 600px) and (max-width: 1365px){
    font-size: 2rem;
  }

  @media screen and (min-width: 1366px){
    font-size: 3rem;
  }
`
export const PokemonType = styled.img`
  height: 1.4rem;
  border-radius: 8px;
  overflow: hidden;
  border: 1px dashed #ffffff;
  margin-right: 8px;

  @media screen and (min-width: 600px) and (max-width: 1365px){
    max-width: 6.25rem;
    height: 1.8rem;
  } 

  @media screen and (min-width: 1366px){

    height: 2.2rem;
  }

`
export const TypesContainer = styled.div`

  @media screen and (min-width: 600px){
    margin-bottom: 3.25rem;
  }
`
export const Pokeball = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  height: 13rem;
  z-index: 2;

  @media screen and (min-width: 600px) and (max-width: 992px){
    height: 30rem;
  }

  @media screen and (min-width: 993px){
    height: 100%;
  }
`
export const Pokemon = styled.img`
  height: 10rem;
  position: absolute;
  top: -5.125rem;
  
  z-index: 3;
  display: ${(props) => props.imgLoad};

  @media screen and (min-width: 600px) and (max-width: 1134px){
    height: 12.063rem;

  }

  @media screen and (min-width: 1135px){
    top: -7rem;
    height: 15rem;
    right: 10px;
  }


`
