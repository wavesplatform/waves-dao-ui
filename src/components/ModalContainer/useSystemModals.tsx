import * as React from 'react';
import { TState } from './ModalContainer';
import { MODAL_NAMES } from './MODAL_NAMES';
import { KeeperAuthModal } from '../modals/KeeperAuthModal/KeeperAuthModal';
import { AuthModal } from '../modals/AuthModal/AuthModal';
import { LegalDisclaimerModal } from '../modals/LegalDisclaimerModal/LegalDisclaimerModal';
import { GetWavesModal } from '../modals/GetWavesModal/GetWavesModal';
import { ClaimWavesModal } from '../modals/ClaimWavesModal/ClaimWavesModal';
import { CancelWithdrawalModal } from '../modals/CancelWithdrawalModal/CancelWithdrawalModal';
import { DepositWavesModal } from '../modals/DepositWavesModal/DepositWavesModal';
import { WithdrawModal } from '../modals/WithdrawModal/WithdrawModal';

const modals = {
    [MODAL_NAMES.authModal]: AuthModal,
    [MODAL_NAMES.keeperAuth]: KeeperAuthModal,
    [MODAL_NAMES.legalDisclaimer]: LegalDisclaimerModal,
    [MODAL_NAMES.getWaves]: GetWavesModal,
    [MODAL_NAMES.claimWaves]: ClaimWavesModal,
    [MODAL_NAMES.cancelWithdrawal]: CancelWithdrawalModal,
    [MODAL_NAMES.depositWaves]: DepositWavesModal,
    [MODAL_NAMES.withdraw]: WithdrawModal,
};

export const useSystemModals = (
    modalsState: TState
): { Component: React.FC; props: any }[] => {
    const [visibleModals, setVisibleModals] = React.useState([]);

    const concatPropsWithWillClose = (state, modalName) => {
        const { props, willClose, willOpen } = state;

        return { ...props, willClose, willOpen, modalName };
    };

    React.useEffect(() => {
        setVisibleModals(
            Object.entries(modals)
                .filter(([modalName]) => modalsState[modalName]?.isOpen)
                .map(([modalName, Component]) => {
                    return {
                        Component: Component,
                        props: concatPropsWithWillClose(
                            modalsState[modalName],
                            modalName
                        ),
                    };
                })
        );
    }, [modalsState]);

    return visibleModals;
};
