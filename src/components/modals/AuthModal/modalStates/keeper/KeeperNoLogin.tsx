
import * as React from "react";
import { AuthTemplate, AuthTemplateProps } from "../../components/AuthTemplate";
import { keeperCalm } from './icons';

interface KeeperNoLoginProps {
    onRetry: AuthTemplateProps["onRetry"];
}

export const KeeperNoLogin: React.FC<KeeperNoLoginProps> = ({
    onRetry,
}) => {
    return (
        <AuthTemplate
            icon={keeperCalm}
            title={{
                i18key: "keeperNoLoginPropsTitle",
            }}
            text={{
                i18key: "keeperNoLoginPropsText",
            }}
            onRetry={onRetry}
        />
    );
};

KeeperNoLogin.displayName = "KeeperNoLogin";
