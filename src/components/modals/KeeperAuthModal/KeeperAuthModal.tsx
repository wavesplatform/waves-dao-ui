import * as React from 'react';
import { MODAL_NAMES } from '../../ModalContainer/MODAL_NAMES';
import {  ModalProps } from '../../Modal/Modal';
import { Box } from '@waves.exchange/wx-react-uikit';
import { ModalStyled } from '../../Modal/ModalStyled';
import { KeeperSignCustom } from './modalStates/KeeperSignCustom';
import { KeeperSwitchNetwork } from './modalStates/KeeperSwitchNetwork';
import { KeeperConnectionRejected } from './modalStates/KeeperConnectionRejected';
import { KeeperNoAccounts } from './modalStates/KeeperNoAccounts';
import { KeeperNoLogin } from './modalStates/KeeperNoLogin';

export enum AUTH_KEEPER_STATES {
    signCustom = 'signCustom',
    switchNetwork = 'switchNetwork',
    connectionRejected = 'connectionRejected',
    noAccounts = 'noAccounts',
    noLogin = 'noLogin'
}

export interface KeeperAuthModalProps {
    modalState: AUTH_KEEPER_STATES;
}

export const KeeperAuthModal: React.FC<KeeperAuthModalProps & ModalProps> = ({ modalState, willClose, willOpen }) => {

    return (
        <ModalStyled
            modalName={MODAL_NAMES.keeperAuth}
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

KeeperAuthModal.displayName = 'AuthModal';
