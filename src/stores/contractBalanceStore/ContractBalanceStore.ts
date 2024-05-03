import { ChildStore } from '../ChildStore.ts';
import { AppStore } from '../AppStore.ts';
import { FetchTracker } from '../utils/FetchTracker.ts';
import { TNodeBalanceResponse } from '../balance/interface';
import BigNumber from '@waves/bignumber';
import { action, computed, makeObservable, observable, reaction, when } from 'mobx';
import { Money } from '@waves/data-entities';
import { RatesStore } from '../rates/RatesStore.ts';
import { getPair } from '../../utils/dataEntriesUtils.ts';
import { equals } from 'ramda';

export interface ISimpleBalance {
    assetId: string;
    balance: BigNumber;
}

const POLLING_TIME = 60 * 1000;

export class ContractBalanceStore extends ChildStore {

    public balanceTracker:
        | FetchTracker<Record<string, ISimpleBalance>, TNodeBalanceResponse>
        | undefined;

    public totalBalanceInWaves: Money;
    public totalBalanceInUSD: Money;

    protected balanceAssetIds: Array<string> = [];

    public get currentPriceLpInUsd(): BigNumber {
        if (!this.totalBalanceInUSD) {
            return;
        }
        const lpAssetQuantity = new Money(this.rs.assetsStore.LPToken.quantity, this.rs.assetsStore.LPToken);
        const baseZeroMoney = new Money(0, RatesStore.baseAsset);

        return baseZeroMoney.cloneWithTokens(
            this.totalBalanceInUSD.getTokens().div(lpAssetQuantity.getTokens())
        ).getTokens();
    };

    public get balances(): Record<string, ISimpleBalance> {
        return this.balanceTracker?.data || Object.create(null)
    }

    constructor(rs: AppStore) {
        super(rs);
        this.loadBalances();
        makeObservable(this, {
            totalBalanceInWaves: observable,
            setTotalBalanceInWaves: action.bound,
            totalBalanceInUSD: observable,
            setTotalBalanceInUSD: action.bound,
            currentPriceLpInUsd: computed,
        });

        reaction(
            () => this.balances,
            () => {
                this.updateTotals();
                const prevIds = [...this.balanceAssetIds];
                const nextIds = Object.keys(this.balances);

                if (prevIds.length && !equals(prevIds.sort(), nextIds.sort())) {
                    this.rs.ratesStore.updateOptions();
                }

                this.balanceAssetIds = Object.keys(this.balances);
            },
        )
    }

    public loadBalances() {
        const config = this.rs.configStore.config;
        this.balanceTracker = new FetchTracker<
            Record<string, ISimpleBalance>,
            TNodeBalanceResponse
        >({
            fetchUrl: `${config.apiUrl.node}/assets/balance/${config.contracts.treasury}`,
            options: {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            },
            autoFetch: true,
            refreshInterval: POLLING_TIME,
            parser: this.balancesParser,
        });
    }

    public updateTotals(): void {
        if (!this.rs.ratesStore || this.rs.ratesStore.rates.isFirstLoad) {
            return;
        }
        const zeroWaves = new Money(0, this.rs.assetsStore.WAVES);
        const zeroUSD = new Money(0, RatesStore.baseAsset);
        const totalInUSD = Object.values(this.balances).reduce((acc, { assetId, balance }) => {
            const rate = this.rs.ratesStore.rates.data[
                getPair(assetId, RatesStore.baseAsset.ticker)
            ];
            if (rate?.exchange && !rate.exchange.isNaN()) {
                acc = acc.cloneWithTokens(
                    acc.getTokens().add(balance.mul(rate.exchange))
                )
            }
            return acc;
        }, zeroUSD);

        const wavesRate = this.rs.ratesStore.rates.data[
            getPair(this.rs.assetsStore.WAVES.id, RatesStore.baseAsset.ticker)
        ];
        const totalInWaves = wavesRate?.exchange.isNaN() || wavesRate?.exchange.eq(0) ?
            zeroWaves :
            zeroWaves.cloneWithTokens(
                totalInUSD.getTokens().div(wavesRate.exchange)
            )

        this.setTotalBalanceInWaves(totalInWaves);
        this.setTotalBalanceInUSD(totalInUSD);
    }

    public setTotalBalanceInWaves(balance: Money): void {
        if (this.totalBalanceInWaves && this.totalBalanceInWaves.getTokens().eq(balance.getTokens())) {
            return;
        }
        this.totalBalanceInWaves = balance;
    }

    public setTotalBalanceInUSD(balance: Money): void {
        if (this.totalBalanceInUSD && this.totalBalanceInUSD.getTokens().eq(balance.getTokens())) {
            return;
        }
        this.totalBalanceInUSD = balance;
    }

    protected balancesParser = (
        data: TNodeBalanceResponse
    ): Record<string, ISimpleBalance> => {
        return data.balances.reduce((acc, item) => {
            const assetId = item.assetId;
            const decimals = item.issueTransaction?.decimals;
            if (decimals === undefined || assetId === this.rs.assetsStore.WAVES.id) {
                return acc;
            }
            acc[assetId] = {
                assetId,
                balance: new BigNumber(item.balance).mul(10 ** (-decimals)),
            };
            return acc;
        }, Object.create(null));
    };
}
