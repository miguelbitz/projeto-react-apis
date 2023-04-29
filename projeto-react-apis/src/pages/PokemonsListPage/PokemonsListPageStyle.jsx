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

export const ContainerListPage = styled.div`
    background-color: #5c5c5d;
    background-size: contain;
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;;
    justify-items: center;

    @media screen and (min-width: 600px) and (max-width: 992px){
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
    }

    @media screen and (min-width: 993px){
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
  }
`

export const PaginationDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 1rem;

  @media screen and (min-width: 401px) and (max-width: 1300px) {  
    padding-top: 1rem;
    }

  @media screen and (max-width: 400px) { 
    align-items: center; 
  }
`