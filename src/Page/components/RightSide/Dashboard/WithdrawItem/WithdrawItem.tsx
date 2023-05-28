import { FC, memo } from 'react';
import { Money } from '@waves/data-entities';
import BigNumber from '@waves/bignumber';
import { WithdrawItemUnlocked } from './WithdrawItemUnlocked';
import { WithdrawItemLocked } from './WithdrawItemLocked';

export type TWithdrawItem = {
    lpAmount: Money;
    baseTokenAmount?: Money;
    equil?: BigNumber;
};

export const WithdrawItem: FC<TWithdrawItem> = memo(
    ({ baseTokenAmount, lpAmount, equil }) => {
        return !!baseTokenAmount ? (
            <WithdrawItemUnlocked
                lpAmount={lpAmount}
                equil={equil}
                baseTokenAmount={baseTokenAmount}
            />
        ) : (
            <WithdrawItemLocked
                lpAmount={lpAmount}
                equil={equil}
                baseTokenAmount={baseTokenAmount}
            />
        );
    }
);

WithdrawItem.displayName = 'WithdrawItem';
