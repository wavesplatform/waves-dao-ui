
import * as React from "react";
import { AuthTemplate, AuthTemplateProps } from "../../components/AuthTemplate";
import { signCustomIcon } from './icons';

interface KeeperSignCustomProps {
    onRetry: AuthTemplateProps["onRetry"];
}


export const KeeperSignCustom: React.FC<KeeperSignCustomProps> = ({
    onRetry,
}) => {
    return (
        <AuthTemplate
            icon={signCustomIcon}
            title={{
                i18key: "keeperSignCustomTitle",
            }}
            text={{
                i18key: "keeperSignCustomText",
            }}
            onRetry={onRetry}
        />
    );
};

KeeperSignCustom.displayName = "KeeperSignCustom";
