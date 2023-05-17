import * as React from 'react';
import { TState } from './ModalContainer';
import { MODAL_NAMES } from './MODAL_NAMES';
import { AuthModal } from '../modals/AuthModal/AuthModal';

const modals = {
    [MODAL_NAMES.authModal]: AuthModal
};

export const useSystemModals = (modalsState: TState): { Component: React.FC; props: any }[] => {
    const [visibleModals, setVisibleModals] = React.useState([]);

    const concatPropsWithWillClose = (state, modalName) => {
        const { props, willClose, willOpen } = state;

        return ({ ...props, willClose, willOpen, modalName });
    };

    React.useEffect(() => {
        setVisibleModals(Object.entries(modals)
            .filter(([modalName]) => modalsState[modalName]?.isOpen)
            .map(([modalName, Component]) => {
                return {
                    Component: Component,
                    props: concatPropsWithWillClose(modalsState[modalName], modalName)
                };
            }));
    }, [modalsState]);

    return visibleModals;
};
