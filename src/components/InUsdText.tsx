import * as React from 'react';
import { BigNumber } from '@waves/bignumber';
import { Text, TextProps } from '../uikit/Text/Text';

interface Props extends TextProps {
    usd: BigNumber | null | undefined;
    decimals: number;
    isBalanceMoreHundred?: boolean;
}

export const InUsdText: React.FC<Props> = ({ usd, decimals, isBalanceMoreHundred = false, ...props }) => {
    const inUsdText = React.useMemo(() => {
        if (!usd || usd.isZero() || usd.isNaN() || !usd.isFinite()) {
            return '';
        }
        const isRoundBalance = isBalanceMoreHundred && usd.toNumber() > 100;
        return `($${isRoundBalance ? usd.roundTo(null, 3) : usd.toFormat(decimals)})`;
    }, [usd]);

    return <Text {...props}>{inUsdText}</Text>;
};
