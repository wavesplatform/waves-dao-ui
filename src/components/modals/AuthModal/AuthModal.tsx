import * as React from 'react';
import { MODAL_NAMES } from '../../ModalContainer/MODAL_NAMES';
import { Modal, ModalProps } from '../../Modal/Modal';
import { Box } from '@waves.exchange/wx-react-uikit';


export const AuthModal: React.FC<ModalProps> = ({ willClose, willOpen }) => {

    return (
        <Modal
            modalName={MODAL_NAMES.authModal}
            willClose={willClose}
            willOpen={willOpen}
        >
            <Box height="300px" color="#fff">
                Auth Modal
            </Box>
        </Modal>
    );
}

AuthModal.displayName = 'AuthModal';
