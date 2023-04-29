import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`
export const ModalContent = styled.div`
  position: relative;
  background-color: white;
  border-radius: 4px;
  padding: 20px;
`

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background-color: transparent;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
`