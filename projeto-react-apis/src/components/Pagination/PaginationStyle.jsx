import styled from "styled-components";

export const PaginationButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 6px;
    border: none;
    background-color: transparent;
    position: absolute;
    
    button.active{
        background-color: white;
        
    }

    @media screen and (max-width: 430px) { 
        padding-bottom: 1rem;
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

    @media screen and (max-width: 430px) { 
        font-size: 1rem;
        width: 2rem;
        height: 2rem;
    }
`