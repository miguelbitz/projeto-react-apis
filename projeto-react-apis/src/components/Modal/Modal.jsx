import React from 'react'
import { ModalCloseButton, ModalContent, ModalOverlay } from './ModalStyle';

export default function Modal({ isOpen, onClose, imageSrc }) {

    if (!isOpen) {
        return null;
    }

    return (
        <ModalOverlay>
            <ModalContent >
                <ModalCloseButton onClick={onClose} >
                    X
                </ModalCloseButton>
                <img src={imageSrc} alt="Modal" />
            </ModalContent>
        </ModalOverlay>
    );

}
