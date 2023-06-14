import { FC } from 'react';
import { Money } from '@waves/data-entities';
import BigNumber from '@waves/bignumber';
import { WithdrawItemUnlocked } from './WithdrawItemUnlocked';
import { WithdrawItemLocked } from './WithdrawItemLocked';
import { IWithdrawal } from '../../../../../stores/contractData';
import { wavesAsset } from '../../../../../services/assets';
import { observer } from 'mobx-react-lite';

export type TWithdrawItem = {
    lpAmount: Money;
    withdrawTxId?: string;
    claimTxId?: string;
    baseTokenAmount?: Money;
    equil?: BigNumber;
};

export const WithdrawItem: FC<{ item: IWithdrawal }> = observer(({ item }) => {
    const equil = item.status === 'PENDING' ? undefined : new BigNumber(100);
    const baseTokenAmount =
        item.status === 'FINISHED'
            ? new Money(0, wavesAsset).cloneWithTokens(250)
            : undefined;

    return !!baseTokenAmount ? (
        <WithdrawItemUnlocked
            lpAmount={item.lpAssetAmount}
            equil={equil}
            baseTokenAmount={baseTokenAmount}
            claimTxId={item.claimTxId}
        />
    ) : (
        <WithdrawItemLocked
            lpAmount={item.lpAssetAmount}
            equil={equil}
            withdrawTxId={item.withdrawTxId}
        />
    );
});

WithdrawItem.displayName = 'WithdrawItem';
