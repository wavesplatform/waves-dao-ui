import React, { createContext } from 'react';
import ReactModal from 'react-modal';

export interface ModalContext {
	openModal: (modal: React.ReactElement, modalProps: ReactModal.Props) => void;
	closeModal: () => void;
	showingModalComponent?: React.ReactElement;
    modalProps?: ReactModal.Props;
}

export const ModalContext = createContext<ModalContext>({
    showingModalComponent: undefined,
    openModal: () => null,
    closeModal: () => null
});

export const ModalContextProvider = ModalContext.Provider;
