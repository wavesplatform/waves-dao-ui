
import * as React from "react";
import { AuthTemplate, AuthTemplateProps } from "../components/AuthTemplate";
import { keeperCalm } from './icons';

interface KeeperSwitchNetworkProps {
    onRetry: AuthTemplateProps["onRetry"];
}

export const KeeperSwitchNetwork: React.FC<KeeperSwitchNetworkProps> = ({
    onRetry,
}) => {
    return (
        <AuthTemplate
            icon={keeperCalm}
            title={{
                i18key: "keeperSwitchNetworkTitle",
            }}
            text={{
                i18key: "keeperSwitchNetworkText",
            }}
            onRetry={onRetry}
        />
    );
};

KeeperSwitchNetwork.displayName = "KeeperSwitchNetwork";
