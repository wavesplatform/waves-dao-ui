
import * as React from 'react';
import { AuthTemplate, AuthTemplateProps } from '../components/AuthTemplate';
import { keeperCalm } from './icons';

interface KeeperNotInstalledProps {
    onRetry: AuthTemplateProps['onRetry'];
}

export const KeeperNotInstalled: React.FC<KeeperNotInstalledProps> = ({
    onRetry,
}) => {
    return (
        <AuthTemplate
            icon={keeperCalm}
            title={{
                i18key: 'keeperNotInstalledTitle',
            }}
            text={{
                i18key: 'keeperNotInstalledText',
            }}
            onRetry={onRetry}
        />
    );
};

KeeperNotInstalled.displayName = 'KeeperNotInstalled';
