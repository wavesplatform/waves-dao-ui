import * as React from 'react';
import Modal from 'react-modal';
import { ModalContext } from '../../context/ModalContext';

Modal.setAppElement('#modalWrapper');

export const ModalManager: React.FC = () => {
    const { showingModalComponent, modalProps } = React.useContext<ModalContext>(ModalContext);

    return (
        <Modal {...modalProps}>
            {showingModalComponent}
        </Modal>
    )
}

ModalManager.displayName = 'ModalManager';
