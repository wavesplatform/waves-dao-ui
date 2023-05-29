import * as React from 'react';
import { Modal, ModalProps } from './Modal';
import { Box, Icon, iconClose, BoxProps } from '@waves.exchange/wx-react-uikit';
import { modalManager } from '../../services/modalManager';
import bgModal from '/src/img/bg-modal.png';
import bgMobileModal from '/src/img/bg-modal-mobile.png';

export const ModalStyled: React.FC<ModalProps & BoxProps> = ({
    children,
    ...props
}) => {
    return (
        <Modal {...props}>
            <Box
                p={24}
                backgroundImage={[`url(${bgMobileModal})`, `url(${bgModal})`]}
                backgroundSize="contain"
                backgroundColor="wdBg"
                backgroundRepeat="no-repeat"
            >
                <Icon
                    cursor="pointer"
                    icon={iconClose}
                    size={15}
                    color="standard.$0"
                    sx={{ float: 'right' }}
                    onClick={() =>
                        modalManager.closeModal(props.modalName, 'close')
                    }
                />
                <Box>{children}</Box>
            </Box>
        </Modal>
    );
};

ModalStyled.displayName = 'ModalStyled';
