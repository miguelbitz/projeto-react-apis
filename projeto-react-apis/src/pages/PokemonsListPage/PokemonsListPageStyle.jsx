import styled from "styled-components";

export const Container = styled.div`
    background-color: #5c5c5d;
    background-size: contain;
    height: 220vh;
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