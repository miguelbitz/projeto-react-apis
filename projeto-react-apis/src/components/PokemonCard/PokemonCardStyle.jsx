import styled from "styled-components";

export const Container = styled.div`
  padding: 16px;
  width: 17rem;
  max-height: 13.125rem;
  background-color: ${(props) => props.color};
  border-radius: 12px;
  display: flex;
  position: relative;
  margin: 3.125rem;
  color: #ffffff;

  @media screen and (min-width: 600px) and (max-width: 992px){
    min-width: 25rem;
    max-width: 27.5rem;
    max-height: 13.125rem;
  }

  @media screen and (min-width: 993px){
    min-width: 25rem;
    max-width: 27.5rem;
    max-height: 13.125rem;

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
  } 

  @media screen and (min-width: 993px){
    max-width: 6.25rem;
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

  @media screen and (min-width: 600px) and (max-width: 992px){
    height: 12rem;
  }

  @media screen and (min-width: 993px){
    height: 12rem;
  }
`

export const Detail = styled.p`
  text-decoration: underline;
  font-size: 14px;

  @media screen and (min-width: 600px) and (max-width: 992px){
    font-size: 1rem;
  }

  @media screen and (min-width: 993px){
    font-size: 1.2rem;
  }
`

export const CatchButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  width: 100px;
  height: 30px;
  background: #ffffff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  right: 22px;
  z-index: 2;
  color: #000;

  @media screen and (min-width: 600px) and (max-width: 992px){
    width: 9.125rem;
    height: 2.375rem;
  }

  @media screen and (min-width: 993px){
    width: 9.125rem;
    height: 2.375rem;
  }
`

export const Pokemon = styled.img`
  height: 8rem;
  position: absolute;
  top: -60px;
  right: 0;
  z-index: 2;

  @media screen and (min-width: 600px) and (max-width: 992px){
    width: 12.063rem;
    height: 12.063rem;
  }

  @media screen and (min-width: 993px){
    width: 12.063rem;
    height: 12.063rem;
  }
`
