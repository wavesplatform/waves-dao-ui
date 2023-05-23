import { Money } from '@waves/data-entities';
import { TRatesHash } from '../stores/rates';
import { getPair } from './dataEntriesUtils';
import { BigNumber } from '@waves/bignumber';
import { RatesStore } from '../stores/rates/RatesStore';

export const getInUsd = (value: Money, ratesData: TRatesHash): Money => {
    const baseMoney = new Money(0, RatesStore.baseAsset);

    if (!value) {
        return baseMoney;
    }

    const rateData = ratesData[
        getPair(value.asset.id, RatesStore.baseAsset.id)
    ];

    if (!rateData) {
        return baseMoney;
    }

    const rate =
        !rateData || rateData.rate?.isNaN()
            ? new BigNumber(0)
            : rateData.rate;

    const exchangeRate =
        !rateData.exchange || rateData.exchange?.isNaN()
            ? new BigNumber(0)
            : rateData.exchange;

    const resultRate =
        !rateData.heuristic || rateData.heuristic?.isNaN()
            ? exchangeRate
            : rate;

    return baseMoney.cloneWithTokens(value.getTokens().mul(resultRate));
};
