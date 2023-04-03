import styled from "styled-components";

export const Container = styled.div`
  padding: 16px;
  min-width: 25rem;
  max-width: 27.5rem;
  max-height: 13.125rem;
  background-color: ${(props) => props.color};
  border-radius: 12px;
  display: flex;
  position: relative;
  margin: 50px;
  color: #ffffff;
`

export const PokemonNumber = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  text-align: left;
`

export const PokemonName = styled.h1`
  font-family: 'Inter', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  text-align: left;
  margin-bottom: 10px;
`

export const PokemonType = styled.img`
  max-width: 6.25rem;
  height: 2rem;
  border-radius: 8px;
  overflow: hidden;
  border: 1px dashed #ffffff;
  margin-right: 8px;
`

export const TypesContainer = styled.div`
  margin-bottom: 52px;
`

export const Pokeball = styled.img`
  position: absolute;
  top: 0;
  right: 0;
`

export const Detail = styled.p`
  text-decoration: underline;
`

export const CatchButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  width: 146px;
  height: 38px;
  background: #ffffff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  right: 22px;
  z-index: 2;
  color: #000;
`

export const Pokemon = styled.img`
width: 12.063rem;
height: 12.063rem;
position: absolute;
top: -60px;
right: 0;
z-index: 2;
`
