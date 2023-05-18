
import * as React from "react";
import { AuthTemplate, AuthTemplateProps } from "../components/AuthTemplate";
import { keeperRed } from './icons';

interface KeeperConnectionRejectedProps {
    onRetry: AuthTemplateProps["onRetry"];
}

export const KeeperConnectionRejected: React.FC<KeeperConnectionRejectedProps> = ({
    onRetry,
}) => {
    return (
        <AuthTemplate
            icon={keeperRed}
            title={{
                i18key: "keeperConnectionRejectedTitle",
            }}
            text={{
                i18key: "keeperConnectionRejectedText",
            }}
            onRetry={onRetry}
        />
    );
};

KeeperConnectionRejected.displayName = "KeeperConnectionRejected";
