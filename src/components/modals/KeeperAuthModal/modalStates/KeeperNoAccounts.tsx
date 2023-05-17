
import * as React from "react";
import { AuthTemplate, AuthTemplateProps } from "../components/AuthTemplate";
import { keeperRed } from './icons';

interface KeeperNoAccountsProps {
    onRetry: AuthTemplateProps["onRetry"];
}

export const KeeperNoAccounts: React.FC<KeeperNoAccountsProps> = ({
    onRetry,
}) => {
    return (
        <AuthTemplate
            icon={keeperRed}
            title={{
                i18key: "keeperNoAccountsTitle",
            }}
            text={{
                i18key: "keeperNoAccountsText",
            }}
            onRetry={onRetry}
        />
    );
};

KeeperNoAccounts.displayName = "KeeperNoAccounts";
