import * as React from 'react';
import { Box, Button } from '@waves.exchange/wx-react-uikit';
import { ModalContext } from '../../context/ModalContext';
import { TestModal } from '../../components/TestModal';


export const Main: React.FC = () => {
    const { openModal, closeModal, isOpen } = React.useContext(ModalContext);

    const onOpenModal = () => {
        openModal(
            <TestModal onClose={() => closeModal()}/>,
            {
                isOpen: true,
                onRequestClose: () => closeModal,
                shouldCloseOnOverlayClick: true
            }
        );
    }

    return (
        <Box>
            <Button onClick={onOpenModal}>
                open
            </Button>
        </Box>
    );
}

Main.displayName = 'Main';
