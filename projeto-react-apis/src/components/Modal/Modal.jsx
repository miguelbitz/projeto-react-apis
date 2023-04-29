import React from 'react'
import { ModalCloseButton, ModalContent, ModalOverlay , ImageModal} from './ModalStyle';
import { GlobalContext } from '../../contexts/GlobalContext';
import { useContext } from 'react';

export default function Modal() { 

    const { openModal, setOpenModal, modalImageSrc } = useContext(GlobalContext)

    const onClose = () => setOpenModal(false)

    if (!openModal) {
        return null;
    }

    return (
        <ModalOverlay>
            <ModalContent >
                <ModalCloseButton onClick={onClose} >
                    X
                </ModalCloseButton>
                <ImageModal src={modalImageSrc} alt="Modal" />
            </ModalContent>
        </ModalOverlay>
    );

}
