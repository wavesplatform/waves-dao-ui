import { ChildStore } from '../ChildStore';
import { AppStore } from '../AppStore';
import { FetchTracker } from '../utils/FetchTracker';
import { IRatesResponse, TRatesHash } from './index';
import { reaction } from 'mobx';
import { createBaseAsset, getPair } from '../../utils/dataEntriesUtils';
import { BigNumber } from '@waves/bignumber';

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
            autoFetch: true,
        });

        reaction(
            () => this.rs.assetsStore.assetsData.isLoading,
            () => {
                if (!this.rs.assetsStore.assetsData.isLoading) {
                    this.rates.load();
                }
            }
        );
    }

    public static get baseAsset() {
        return createBaseAsset({
            name: 'USD',
            id: 'USD',
            precision: 2,
        });
    }

    public get getInvestedXtnUsd(): BigNumber {
        if (this.getRateXTN.isZero()) {
            return this.rs.contractDataStore.investedXtn.getTokens();
        }
        return this.rs.contractDataStore.investedXtn
            .getTokens()
            .mul(this.getRateXTN);
    }

    public get getCurrentPriceWavesUsd(): BigNumber {
        if (this.getRateWaves.isZero()) {
            return this.rs.contractDataStore.investedWaves.getTokens();
        }
        return this.rs.contractDataStore.investedWaves
            .getTokens()
            .mul(this.getRateWaves);
    }

    public get getInvestedWavesUsd(): BigNumber {
        return this.rs.contractDataStore.getCurrentPriceWaves
            .getTokens()
            .mul(this.getRateWaves);
    }

    public get getRateWaves(): BigNumber {
        const rateWaves = this.rs.ratesStore.rates.data['WAVES/USD'];
        return rateWaves?.exchange && !rateWaves.exchange.isNaN()
            ? rateWaves.exchange
            : new BigNumber(0);
    }

    public get getRateXTN(): BigNumber {
        const rateXTN =
            this.rs.ratesStore.rates.data[
                `${this.rs.assetsStore.getXTN().id}/USD`
            ];
        return rateXTN?.exchange && !rateXTN.exchange.isNaN()
            ? rateXTN.exchange
            : new BigNumber(0);
    }

    public off() {
        this.rates.off();
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
        const assetsIds = this.rs.configStore.config.assets.map(
            (asset) => asset.id
        );
        const toAsset = 'USD';
        const pairs = assetsIds.map((assetId) => getPair(assetId, toAsset));
        return JSON.stringify({ pairs });
    }
}
