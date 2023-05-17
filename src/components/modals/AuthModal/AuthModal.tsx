import * as React from 'react';
import { MODAL_NAMES } from '../../ModalContainer/MODAL_NAMES';
import {  ModalProps } from '../../Modal/Modal';
import { Box } from '@waves.exchange/wx-react-uikit';
import { ModalStyled } from '../../Modal/ModalStyled';
import { KeeperSignCustom } from './modalStates/keeper/KeeperSignCustom';

export enum AUTH_KEEPER_STATES {
    signCustom = 'signCustom'
}

export interface AuthModalProps {
    modalState: AUTH_KEEPER_STATES;
}

export const AuthModal: React.FC<AuthModalProps & ModalProps> = ({ modalState, willClose, willOpen }) => {

    return (
        <ModalStyled
            modalName={MODAL_NAMES.authModal}
            willClose={willClose}
            willOpen={willOpen}
        >
            {(() => {
                switch (modalState) {
                    case AUTH_KEEPER_STATES.signCustom:
                        return <KeeperSignCustom onRetry={() => { console.log('retry'); }} />;
                    default:
                        return <Box>something went wrong</Box>;
                }
            })()}
        </ModalStyled>
    );
};

AuthModal.displayName = 'AuthModal';
