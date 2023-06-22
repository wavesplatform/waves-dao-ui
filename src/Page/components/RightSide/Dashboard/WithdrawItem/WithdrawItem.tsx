import { FC, useContext, useMemo } from 'react';
import { Money } from '@waves/data-entities';
import { WithdrawItemUnlocked } from './WithdrawItemUnlocked';
import { WithdrawItemLocked } from './WithdrawItemLocked';
import { IWithdrawal } from '../../../../../stores/contractData';
import { observer } from 'mobx-react-lite';
import { AppStoreContext } from '../../../../../App';
import { getInUsd } from '../../../../../utils/usdUtils';

export const WithdrawItem: FC<{ item: IWithdrawal }> = observer(({ item }) => {
    const { contractDataStore, ratesStore, assetsStore } = useContext(AppStoreContext);

    const equal =
        item.status === 'PENDING'
            ? undefined
            : getInUsd(item.lpAssetAmount, ratesStore.rates.data).getTokens();

    const baseTokenAmount = useMemo<Money | undefined>(() => {
        if (item.targetPeriod <= contractDataStore.commonContractData.data.currentPeriod) {
            const price = contractDataStore.commonContractData.data.prices[item.targetPeriod];
            return new Money(0, assetsStore.WAVES).cloneWithCoins(item.lpAssetAmount.getTokens().mul(price));
        }
        return undefined;
    }, [
        assetsStore.WAVES,
        contractDataStore.commonContractData.data.currentPeriod,
        contractDataStore.commonContractData.data.prices,
        item.lpAssetAmount,
        item.targetPeriod
    ]);

    return baseTokenAmount ? (
        <WithdrawItemUnlocked
            lpAmount={item.lpAssetAmount}
            equal={equal}
            baseTokenAmount={baseTokenAmount}
            withdrawTxId={item.withdrawTxId}
        />
    ) : (
        <WithdrawItemLocked
            lpAmount={item.lpAssetAmount}
            equal={equal}
            withdrawTxId={item.withdrawTxId}
        />
    );
});

WithdrawItem.displayName = 'WithdrawItem';
