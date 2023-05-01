import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #5c5c5d;
  color: white;
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2.5rem;
`

export const Title = styled.h1`
  font-weight: 900;
`

export const ContainerListPage = styled.div`
    background-color: #5c5c5d;
    height: 100%;
    min-height: 100vh;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
    align-items: center;

    @media screen and (min-width: 401px){  
      justify-items: center;
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

