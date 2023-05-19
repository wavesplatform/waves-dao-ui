import { modalManager } from '../../../../services/modalManager';
import { MODAL_NAMES } from '../../../ModalContainer/MODAL_NAMES';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../../context/AuthContext';
import { TProvider } from '../../../../services/authService';
import { KeeperAuthModalProps } from '../../KeeperAuthModal/KeeperAuthModal';

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
    const authService = useContext(AuthContext);
    const [deviceState, setDeviceState] = useState<AUTH_DEVICE_STATES | undefined>();

    const login = async (): Promise<void> => {
        try {
            await authService.login(selectedProvider);
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

    const onChangeDeviceState = (deviceState: AUTH_DEVICE_STATES) => {
        setDeviceState(deviceState);
        if (deviceState) {
            const modalName = getModalNameBySelectedProvider(selectedProvider);
            if (modalManager.openedModals.includes(modalName)) {
                return;
            }
            modalManager.openModal<KeeperAuthModalProps>(modalName, {
                modalState: deviceState,
                onRetry: () => login()
            });
        }
    };


    return {
        login,
        deviceState
    };
};
