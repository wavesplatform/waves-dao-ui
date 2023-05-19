import * as React from "react";
import { Text } from "@waves.exchange/wx-react-uikit";
import BigNumber from "@waves/bignumber";
import { Trans } from "@waves/ui-translator";

type TInputErrorState = "notEnoughFunds" | "minAmount" | "required";
type InputErrorsProps = {
    minAmount?: BigNumber;
    error?: TInputErrorState;
    assetName?: string;
};

export const InputErrors: React.FC<InputErrorsProps> = React.memo(
    ({ error, minAmount, assetName }) => {
        return (
            <>
                {error === "minAmount" && minAmount ? (
                    <Text
                        variant="caption"
                        color="wdred"
                        display="block"
                        mt="8px"
                    >
                        <Trans
                            i18key="error.min"
                            i18Params={{
                                amount: minAmount?.toFormat(),
                                assetName,
                            }}
                        />
                    </Text>
                ) : null}
                {error === "notEnoughFunds" ? (
                    <Text
                        variant="caption"
                        color="wdred"
                        display="block"
                        mt="8px"
                    >
                        <Trans i18key="error.unsufficient" />
                    </Text>
                ) : null}
                {error === "required" ? (
                    <Text
                        variant="caption"
                        color="wdred"
                        display="block"
                        mt="8px"
                    >
                        <Trans i18key="error.required" />
                    </Text>
                ) : null}
            </>
        );
    }
);

InputErrors.displayName = "InputErrors";
