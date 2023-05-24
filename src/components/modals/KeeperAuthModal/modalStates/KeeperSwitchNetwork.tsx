import * as React from 'react';
import { AuthTemplate, AuthTemplateProps } from '../../components/AuthTemplate';
import { keeperCalm } from './icons';
import {
    getKeeperWalletDeviceName,
    networkCodeToNetworkMap,
} from '../../../../utils/helpersInformationDevices';

interface KeeperSwitchNetworkProps {
    onRetry: AuthTemplateProps['onRetry'];
}

export const KeeperSwitchNetwork: React.FC<KeeperSwitchNetworkProps> = ({
    onRetry,
}) => {
    return (
        <AuthTemplate
            icon={keeperCalm}
            title={{
                i18key: 'switchNetwork.title',
                i18Params: { network: networkCodeToNetworkMap.W },
            }}
            text={{
                i18key: 'switchNetwork.desc',
                i18Params: {
                    network: networkCodeToNetworkMap.W,
                    device: getKeeperWalletDeviceName(),
                },
            }}
            onRetry={onRetry}
        />
    );
};

KeeperSwitchNetwork.displayName = 'KeeperSwitchNetwork';
