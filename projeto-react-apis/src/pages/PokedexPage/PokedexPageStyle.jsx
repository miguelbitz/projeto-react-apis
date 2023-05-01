import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #5c5c5d;
  color: white;
`

export const Title = styled.div`
  display: block;
  width: 100%;
  padding: 2.5rem;
`

export const ContainerPokedex = styled.div`
    background-color: #5c5c5d;
    background-size: contain;
    height: 100%;
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-columns: repeat(auto-fill, 1fr);
    justify-content: center;

    @media screen and (min-width: 600px){
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
    }

`