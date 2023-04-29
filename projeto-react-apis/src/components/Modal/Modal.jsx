import React from 'react'
import {  ModalContent, ModalOverlay , ImageModal} from './ModalStyle';
import { GlobalContext } from '../../contexts/GlobalContext';
import { useContext } from 'react';

export default function Modal() { 

    const { openModal, setOpenModal, modalImageSrc } = useContext(GlobalContext)

    const onClose = () => setOpenModal(false)


    if (!openModal) {
        return null;
    }

    return (
        <ModalOverlay onClick={onClose} >
            <ModalContent >
                <ImageModal src={modalImageSrc} alt="Modal" />
            </ModalContent>
        </ModalOverlay>
    );

}
