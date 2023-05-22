import { modalManager } from '../../../../services/modalManager';
import { MODAL_NAMES } from '../../../ModalContainer/MODAL_NAMES';
import { useContext, useRef, useState } from 'react';
import { KeeperAuthModalProps } from '../../KeeperAuthModal/KeeperAuthModal';
import { AppStoreContext } from '../../../../App';
import { TProvider } from '../../../../stores/AuthStore';

export enum AUTH_DEVICE_STATES {
    notInstalled = "notInstalled",
    signCustom = "signCustom",
    switchNetwork = "switchNetwork",
    connectionRejected = "connectionRejected",
    noAccounts = "noAccounts",
    noLogin = "noLogin",
}

interface IUseAuth {
    login: () => Promise<void>;
    deviceState: AUTH_DEVICE_STATES | undefined;
}

type TKeeperError = {
    code: string; // 10, 13, 14
    data: any;
    message: string;
};

const getModalNameBySelectedProvider = (selectedProvider: TProvider): MODAL_NAMES => {
    return `${selectedProvider}Auth` as MODAL_NAMES;
};

export const useAuth = (selectedProvider: TProvider): IUseAuth => {
    const { authStore } = useContext(AppStoreContext);
    const [deviceState, setDeviceState] = useState<AUTH_DEVICE_STATES | undefined>();
    const prevState = useRef<AUTH_DEVICE_STATES | undefined>();

    const login = async (): Promise<void> => {
        try {
            await authStore.login(selectedProvider);
            await modalManager.closeModal(getModalNameBySelectedProvider(selectedProvider), 'close');
        } catch (e: Error | TKeeperError | unknown) {
            console.log(e);
            let _deviceState: AUTH_DEVICE_STATES | undefined;
            if (e instanceof Error && e.message === `${selectedProvider} is not installed`) {
                _deviceState = AUTH_DEVICE_STATES.notInstalled;
            }
            if (e instanceof Error &&  e.message.includes('Invalid connect options.')) {
                _deviceState = AUTH_DEVICE_STATES.switchNetwork;
            }
            if (e && (e as TKeeperError).code === '13') {
                _deviceState = AUTH_DEVICE_STATES.noLogin;
            }
            if (e && (e as TKeeperError).code === '14') {
                _deviceState = AUTH_DEVICE_STATES.noAccounts;
            }
            if (e && (e as TKeeperError).code === '10') {
                _deviceState = AUTH_DEVICE_STATES.connectionRejected;
            }
            onChangeDeviceState(_deviceState);
        }
    };

    const onChangeDeviceState = async (_deviceState: AUTH_DEVICE_STATES) => {
        setDeviceState(_deviceState);
        if (_deviceState) {
            console.log('%c _deviceState', 'color: #e5b6ed', _deviceState);
            console.log('%c prevState.current', 'color: #e5b6ed', prevState.current);
            const modalName = getModalNameBySelectedProvider(selectedProvider);
            if (modalManager.openedModals.includes(modalName) && prevState.current === _deviceState) {
                return;
            }
            prevState.current = _deviceState;
            await modalManager.abortAll();
            setTimeout(() => {
                modalManager.openModal<KeeperAuthModalProps>(modalName, {
                    modalState: _deviceState,
                    onRetry: () => login()
                });
            }, 200);
        }
    };


    return {
        login,
        deviceState
    };
};
