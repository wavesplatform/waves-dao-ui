import * as React from 'react';
import { MODAL_NAMES } from '../../ModalContainer/MODAL_NAMES';
import {  ModalProps } from '../../Modal/Modal';
import { Box } from '@waves.exchange/wx-react-uikit';
import { ModalStyled } from '../../Modal/ModalStyled';
import { KeeperSignCustom } from './modalStates/keeper/KeeperSignCustom';
import { KeeperSwitchNetwork } from './modalStates/keeper/KeeperSwitchNetwork';
import { KeeperConnectionRejected } from './modalStates/keeper/KeeperConnectionRejected';
import { KeeperNoAccounts } from './modalStates/keeper/KeeperNoAccounts';
import { KeeperNoLogin } from './modalStates/keeper/KeeperNoLogin';

export enum AUTH_KEEPER_STATES {
    signCustom = 'signCustom',
    switchNetwork = 'switchNetwork',
    connectionRejected = 'connectionRejected',
    noAccounts = 'noAccounts',
    noLogin = 'noLogin'
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
                    case AUTH_KEEPER_STATES.switchNetwork:
                        return <KeeperSwitchNetwork onRetry={() => { console.log('retry'); }} />;
                    case AUTH_KEEPER_STATES.connectionRejected:
                        return <KeeperConnectionRejected onRetry={() => { console.log('retry'); }} />;
                    case AUTH_KEEPER_STATES.noAccounts:
                        return <KeeperNoAccounts onRetry={() => { console.log('retry'); }} />;
                    case AUTH_KEEPER_STATES.noLogin:
                        return <KeeperNoLogin onRetry={() => { console.log('retry'); }} />;
                    default:
                        return <Box>something went wrong</Box>;
                }
            })()}
        </ModalStyled>
    );
};

AuthModal.displayName = 'AuthModal';
