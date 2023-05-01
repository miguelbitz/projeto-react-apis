import styled from "styled-components"

export const StatsName = styled.div`
  grid-column: 1 / span 2;
  justify-self: end;
  font-weight: 500;
  font-size: 12px;

  @media screen and (min-width: 1366px){
    font-size: 18px
  }
`

export const Number = styled.div`
  justify-self: center;
  font-weight: 600;
  font-size: 13px;
  
  @media screen and (min-width: 1366px){
    font-size: 18px
  }
`

export const DivStats = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: auto;
  align-items: center;
  margin-left: 1.5rem;
  column-gap: 5px;
`

export const ButtonStats = styled.button`
  background-color: ${(props) => props.color};
  height: 14px;
  width: ${(props) => props.width}%;
  border: none;
  border-radius: 10px;
  grid-column: 4 / span 5;
`