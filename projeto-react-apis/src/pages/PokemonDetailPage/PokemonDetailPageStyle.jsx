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

  @media screen and (min-width: 993px) and (max-width: 1366px){
    padding-left: 8.5rem;
  }

  @media screen and (min-width: 1367px){
    padding-left: 8.5rem;
  }
`

export const ContainerDetail = styled.div`
  background-color: ${(props) => props.color};
  background-size: contain;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(8, 1fr);
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
    flex-direction: row;
    height: 70vh

  }

  @media screen and (min-width: 993px) and (max-width: 1366px){
    //display: flex;
    align-items: center;
    flex-direction: row;
    height: 95vh
  }

  @media screen and (min-width: 1367px){
    display: flex;
    align-items: center;
    flex-direction: row;
    height: 80vh;
    gap: 3.5rem;
  }
`

export const PicContainer = styled.div`
  position: relative;
  background-color: white;
  color: black;
  width: 10rem;
  height: 10rem;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;

@media screen and (min-width: 600px) and (max-width: 992px){

}

@media screen and (min-width: 993px) and (max-width: 1366px){
  margin-top: 0;
  width: 18rem;
  height: 18rem;
}

@media screen and (min-width: 1367px){
  margin-top: 0;
  width: 18rem;
  height: 18rem;
  margin-top: 8rem;
}
`
export const FrontPic = styled.img`
  height: 12rem;
  display: ${(props) => props.imgLoad};
  z-index: 3;
`

export const BackPic = styled.img`
  height: 12rem;
  display: ${(props) => props.imgLoad};
  z-index: 3;
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

  @media screen and (min-width: 600px) and (max-width: 992px){

  }

  @media screen and (min-width: 993px) and (max-width: 1366px){
  }

  @media screen and (min-width: 1367px){
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
`

export const InfoPokemon = styled.div`
  position: relative;
  z-index: 3;
  


  @media screen and (min-width: 600px) and (max-width: 992px){
  top: 1rem;

  }

  @media screen and (min-width: 993px) and (max-width: 1366px){
  }

  @media screen and (min-width: 1367px){
    top: 1rem;
  left: 1.3rem;
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

`
export const PokeballDetail = styled.img`
  position: absolute;
  height: 100vh;
  margin-left: -14rem;


  @media screen and (min-width: 600px) and (max-width: 992px){
    height: 100%;
  }

  @media screen and (min-width: 993px) and (max-width: 1366px){
    height: 100%;
  }

  @media screen and (min-width: 1367px){
    height: 100%;
    width: 25rem;
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

  @media screen and (min-width: 600px) and (max-width: 992px){
    height: 12.063rem;
  }

  @media screen and (min-width: 993px) and (max-width: 1366px){
    top: -5rem;
    height: 15rem;
  }

  @media screen and (min-width: 1367px){
    top: -5rem;
    height: 20rem;
    right: 2rem;
  }
`
