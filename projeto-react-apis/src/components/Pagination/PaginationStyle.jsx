import styled from "styled-components";

export const PaginationButton = styled.div`
    display: flex;
    justify-content: center;
    gap: 6px;
    border: none;
    background-color: transparent;
    position: absolute;
    margin-top: 1rem;
    button.active{
        background-color: rgba(228, 13, 124, 0.7);
        
    }

    @media screen and (min-width: 753px) and (max-width: 1636px) { 
        margin-top: 9rem 
    }

    @media screen and (min-width: 601px) and (max-width: 752px) {  
        margin-top: 13rem
    } 

    @media screen and (min-width: 401px) and (max-width: 600px) {  
        margin-top: 1rem
    }

    @media screen and (max-width: 400px) {  
        margin-top: 130rem
    }
`


export const Button = styled.button`
    width: 3rem;
    height: 3rem;
    border-radius: 8px;
    background-color: transparent;
    border: none;
    font-weight: 600;
    font-size: 1.2rem;
`