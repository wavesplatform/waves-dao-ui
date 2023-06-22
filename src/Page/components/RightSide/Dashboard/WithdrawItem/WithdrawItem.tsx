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

    const isWithdrawUnlocked = useMemo(() => {
        return item.targetPeriod <= contractDataStore.commonContractData.data.currentPeriod;
    }, [contractDataStore.commonContractData.data.currentPeriod, item.targetPeriod]);

    const equal = useMemo(() => {
        return isWithdrawUnlocked
            ? getInUsd(item.lpAssetAmount, ratesStore.rates.data).getTokens()
            : undefined;
    }, [isWithdrawUnlocked, item.lpAssetAmount, ratesStore.rates.data]);

    const baseTokenAmount = useMemo<Money | undefined>(() => {
        if (isWithdrawUnlocked) {
            const price = contractDataStore.commonContractData.data.prices[item.targetPeriod];
            return new Money(0, assetsStore.WAVES).cloneWithCoins(item.lpAssetAmount.getTokens().mul(price));
        }
        return undefined;
    }, [
        assetsStore.WAVES,
        contractDataStore.commonContractData.data.prices,
        isWithdrawUnlocked,
        item.lpAssetAmount,
        item.targetPeriod
    ]);

    return isWithdrawUnlocked ? (
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
