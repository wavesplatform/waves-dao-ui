import { ChildStore } from '../ChildStore';
import { AppStore } from '../AppStore';
import { FetchTracker } from '../utils/FetchTracker';
import { IRatesResponse, TRatesHash } from './index';
import { reaction, when } from 'mobx';
import { createBaseAsset, getPair } from '../../utils/dataEntriesUtils';
import { BigNumber } from '@waves/bignumber';
import { getInUsd } from '../../utils/usdUtils';
import { Money } from '@waves/data-entities';
import { uniq } from 'ramda';

export class RatesStore extends ChildStore {
    rates: FetchTracker<TRatesHash, IRatesResponse>;

    constructor(rs: AppStore) {
        super(rs);

        this.rates = new FetchTracker<TRatesHash, IRatesResponse>({
            fetchUrl: `${this.rs.configStore.config.apiUrl.rates}`,
            options: {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: this.getRatesBody(),
            },
            parser: this.ratesParser,
            refreshInterval: 30_000,
        });

        when(
            () => (
                !this.rs.assetsStore.assetsData.isFirstLoad &&
                !this.rs.contractBalanceStore.balanceTracker.isFirstLoad
            ),
            () => {
                this.rates.load();
            }
        );

        reaction(
            () => this.rates.data,
            () => this.rs.contractBalanceStore.updateTotals(),
        )
    }

    public static get baseAsset() {
        return createBaseAsset({
            name: 'USD',
            id: 'USD',
            precision: 2,
        });
    }

    public get currentPriceWavesInUsd(): BigNumber {
        return getInUsd(
            new Money(0, this.rs.assetsStore.WAVES).cloneWithTokens(1),
            this.rates.data
        ).getTokens();
    }

    public off() {
        this.rates.off();
    }

    public updateOptions(): void {
        // update ids in body
        this.rates.setOptions({
            fetchUrl: `${this.rs.configStore.config.apiUrl.rates}`,
            options: {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: this.getRatesBody(),
            },
            parser: this.ratesParser,
            refreshInterval: 30_000,
        })
    }

    private ratesParser({ data }: IRatesResponse): TRatesHash {
        return data.reduce<TRatesHash>((acc, item) => {
            acc[item.pair] = {
                exchange: new BigNumber(item.data.exchange),
                heuristic: new BigNumber(item.data.heuristic),
            };
            return acc;
        }, Object.create(null));
    }

    private getRatesBody(): string {
        const contractBalanceAssetsIds = Object.keys(this.rs.contractBalanceStore.balances);
        const assetStoreIds = this.rs.configStore.config.assets.map((asset) => {
            return asset.id;
        });
        const assetsIds = uniq([...contractBalanceAssetsIds, ...assetStoreIds]);
        const toAsset = 'USD';
        const pairs = assetsIds.map((assetId) => getPair(assetId, toAsset));
        return JSON.stringify({ pairs });
    }
}
