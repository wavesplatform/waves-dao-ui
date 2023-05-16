import React from 'react';
import { ModalContext } from '../context/ModalContext';

export const useModalContext = (): ModalContext => {
    const [showingModalComponent, setShowingModalComponent] = React.useState<React.ReactElement>();
    const [modalProps, setModalProps] = React.useState<ModalContext['modalProps']>();

    const openModal: ModalContext['openModal'] = (modal, _modalProps) => {
        setShowingModalComponent(modal);
        setModalProps(_modalProps);
    }

    const closeModal = () => {
        setShowingModalComponent(undefined);
        setModalProps((prevProps) => ({ ...prevProps, isOpen: false }));
    }

    return {
        showingModalComponent,
        openModal,
        closeModal,
        modalProps
    }
}
