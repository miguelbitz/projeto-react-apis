import styled from "styled-components"

export const StatsName = styled.p`
  grid-column: 1 / span 2;
  justify-self: end;
  font-weight: 400;
  font-size: 13px;

  @media screen and (min-width: 1366px){
    font-size: 18px
  }
`

export const Number = styled.div`
  justify-self: end;
  font-weight: 600;
  font-size: 14px;
  
  @media screen and (min-width: 1366px){
    font-size: 18px
  }
`

export const DivStats = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: auto;
  gap: .5rem;
  align-items: center;
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