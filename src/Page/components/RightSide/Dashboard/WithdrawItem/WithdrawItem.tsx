import { FC, useContext } from 'react';
import { Money } from '@waves/data-entities';
import { WithdrawItemUnlocked } from './WithdrawItemUnlocked';
import { WithdrawItemLocked } from './WithdrawItemLocked';
import { IWithdrawal } from '../../../../../stores/contractData';
import { wavesAsset } from '../../../../../services/assets';
import { observer } from 'mobx-react-lite';
import { AppStoreContext } from '../../../../../App';
import { getInUsd } from '../../../../../utils/usdUtils';

export const WithdrawItem: FC<{ item: IWithdrawal }> = observer(({ item }) => {
    const { contractDataStore, ratesStore } = useContext(AppStoreContext);

    const equil = item.status === 'PENDING' ?
        undefined :
        getInUsd(item.lpAssetAmount, ratesStore.rates.data).getTokens();

    const baseTokenAmount =
        item.targetPeriod <= contractDataStore.commonContractData.data.currentPeriod
            ? new Money(0, wavesAsset).cloneWithCoins(contractDataStore.commonContractData.data.prices[item.targetPeriod])
            : undefined;

    return baseTokenAmount ? (
        <WithdrawItemUnlocked
            lpAmount={item.lpAssetAmount}
            equil={equil}
            baseTokenAmount={baseTokenAmount}
            withdrawTxId={item.withdrawTxId}
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
