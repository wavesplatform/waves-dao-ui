import { reaction } from 'mobx';
import { ChildStore } from '../ChildStore';
import { AppStore } from '../AppStore';
import { FetchTracker } from '../utils/FetchTracker';
import { search } from '../../utils/search/searchRequest';
import { IState } from '../../utils/search';
import { parseSearchStr } from '../../utils/search/parseContractData';
import { Money } from '@waves/data-entities';
import { ICommonContractData, IUserContractData, IWithdrawal, TWithdrawalsData } from '.';
import BigNumber from '@waves/bignumber';
import { filterObjectCommonContract, filterObjectUserContract } from './utils';
import { evaluate } from '../../utils/evaluate/evaluateRequest.ts';

const COMMON_DATA_POLLING_TIME = 60_000;
const POLLING_TIME = 10_000;
// const POLLING_TIME = 3_000;

export class ContractDataStore extends ChildStore {
    public commonContractData: FetchTracker<ICommonContractData, IState>;
    public userContractData: FetchTracker<IUserContractData, IState> =
        new FetchTracker();
    public withdrawalsData: FetchTracker<TWithdrawalsData, IState> =
        new FetchTracker();

    constructor(rs: AppStore) {
        super(rs);
        const searchUrl = this.rs.configStore.config.apiUrl.stateSearch;
        const contractAddress = this.rs.configStore.config.contracts.factory;
        this.commonContractData = new FetchTracker<any, any>({
            fetchUrl: searchUrl,
            fetcher: (fetchUrl) =>
                search(
                    fetchUrl,
                    filterObjectCommonContract({ contractAddress }),
                    true
                ),
            refreshInterval: COMMON_DATA_POLLING_TIME,
            parser: this.contractDataParser,
            autoFetch: true,
        });

        reaction(
            () => this.rs.authStore.isAuthorized,
            () => {
                if (this.rs.authStore.isAuthorized) {
                    const userAddress = this.rs.authStore.user.address;
                    this.userContractData.setOptions({
                        fetchUrl: searchUrl,
                        fetcher: (fetchUrl) =>
                            search(
                                fetchUrl,
                                filterObjectUserContract({
                                    userAddress,
                                    contractAddress,
                                })
                            ),
                        refreshInterval: POLLING_TIME,
                        parser: this.userContractDataParser,
                        autoFetch: true,
                    });
                }
            }
        );

        // reaction(
        //     () => this.userContractData?.data?.withdraws,
        //     () => {
        //         console.info('withdraws', this.userContractData?.data?.withdraws);
        //         const evaluateUrl = this.rs.configStore.config.apiUrl.evaluate;
        //         const ids = (this.userContractData?.data?.withdraws || [])
        //             .reduce((acc, { withdrawTxId, targetPeriod }) => {
        //                 if (targetPeriod <= this.currentPeriod) {
        //                     acc.push(withdrawTxId);
        //                 }
        //                 return acc;
        //             }, []);
        //         console.info('ids', ids);
        //         if (!ids.length) {
        //             return;
        //         }
        //         const userAddress = this.rs.authStore.user.address;
        //         this.withdrawalsData.setOptions({
        //             fetchUrl: evaluateUrl,
        //             fetcher: (fetchUrl: string) => {
        //                 return evaluate({
        //                     url: fetchUrl,
        //                     contractAddress,
        //                     expr: `claimCollateralBulkREADONLY("${userAddress}", [${ids.toString()}])`,
        //                 })
        //             },
        //             parser: (data) => {
        //                 console.info(data);
        //             },
        //             autoFetch: true,
        //         });
        //     },
        // )
        //
        // window.store = this;
    }

    public get getTreasuryUsd(): BigNumber {
        return this.rs.ratesStore.investedWavesInUsd.add(
            this.rs.ratesStore.donatedWavesInUsd
        );
    }

    public get withdraws(): IWithdrawal[] {
        return this.userContractData.data?.withdraws || [];
    }

    public get availableToClaim(): Money {
        return (
            this.userContractData?.data?.availableToClaim ||
            new Money(0, this.rs.assetsStore.LPToken)
        );
    }

    public get isUnlockedTokensMS(): boolean {
        const pendingWithdrawals = this.withdraws.filter((item) => item.status === 'PENDING');
        return pendingWithdrawals
            .some(withdraw => withdraw.targetPeriod  <= this.commonContractData.data.currentPeriod);
    }

    public get investedWaves(): Money {
        return (
            this.commonContractData.data?.investedWaves ||
            new Money(0, this.rs.assetsStore.WAVES)
        );
    }

    public get donatedWaves(): Money {
        return (
            this.commonContractData.data?.donatedWaves ||
            new Money(0, this.rs.assetsStore.WAVES)
        );
    }

    public get currentPeriod(): number {
        return this.commonContractData.data?.currentPeriod || 0;
    }

    public get currentPriceLpInWaves(): Money {
        const { prices = {}, currentPeriod = 0 } =
            this.commonContractData?.data || {};

        return new Money(prices[currentPeriod] || 0, this.rs.assetsStore.WAVES);
    }

    public get currentPriceWavesLp(): Money {
        const { prices = {}, currentPeriod } = this.commonContractData?.data || {};

        const price = new Money(0, this.rs.assetsStore.WAVES)
            .cloneWithTokens(1)
            .getCoins()
            .div(prices[currentPeriod || 0]);

        return new Money(0, this.rs.assetsStore.LPToken).cloneWithTokens(price);
    }

    public get finalizingKPI(): number {
        const {
            periodLength = 0,
            startHeights = {},
            currentPeriod = 0,
        } = this.commonContractData?.data || {};

        return (
            (startHeights[currentPeriod] || 0) +
            periodLength -
            this.rs.nodeHeightStore.heightData.data
        );
    }

    public get startHeight(): number {
        const { startHeights = {}, currentPeriod } = this.commonContractData?.data || {};
        return startHeights[currentPeriod] || 0;
    }

    public get blocksForDeposit(): number {
        return this.commonContractData.data.heightForDeposit || 0;
    }

    private contractDataParser = (data: IState): ICommonContractData => {
        const parseEntries = (key: string, value: string | number, acc) => {
            switch (true) {
                case key.includes('startHeight'):
                    // eslint-disable-next-line no-case-declarations
                    const startHeightPeriod = key.split('__')[2];
                    if (startHeightPeriod) {
                        acc.startHeights[startHeightPeriod] = value;
                    }
                    return;
                case key.includes('periodLength'):
                    return { periodLength: value };
                case key.includes('currentPeriod'):
                    return { currentPeriod: value };
                case key.includes('price'):
                    // eslint-disable-next-line no-case-declarations
                    const pricePeriod = key.split('__')[2];
                    if (pricePeriod) {
                        acc.prices[pricePeriod] = value;
                    }
                    return;
                case key.includes('invested__WAVES'):
                    return {
                        investedWaves: new Money(
                            value,
                            this.rs.assetsStore.WAVES
                        ),
                    };
                case key.includes('donated__WAVES'):
                    return {
                        donatedWaves: new Money(value, this.rs.assetsStore.WAVES),
                    };
                case key.includes('heightForDeposit'):
                    return {
                        heightForDeposit: Number(value),
                    };
                default:
                    return {};
            }
        };

        return data.entries.reduce(
            (acc, entry) => {
                const parsed = parseEntries(entry.key, entry.value, acc);
                return { ...acc, ...parsed };
            },
            {
                currentPeriod: undefined,
                investedWaves: undefined,
                donatedWaves: undefined,
                periodLength: undefined,
                startHeights: {},
                prices: {},
                heightForDeposit: undefined,
            }
        );
    };

    private userContractDataParser = (data: IState): IUserContractData => {
        const parseEntries = (key: string, value: string | number) => {
            switch (true) {
                case key.includes('available'):
                    return {
                        availableToClaim: new Money(
                            value,
                            this.rs.assetsStore.LPToken
                        ),
                    };
                case key.includes('claimed'):
                    return {
                        claimed: new Money(
                            value,
                            this.rs.assetsStore.LPToken
                        ),
                    };
                case key.includes('withdrawal'):
                    return {
                        withdrawal: new Money(
                            value,
                            this.rs.assetsStore.LPToken
                        ),
                    };
                default:
                    return {};
            }
        };

        const parseWithdrawal = (entry) => {
            // key %s%s%s__withdrawal__<userAddress>__<txId>
            // %s%d%d%s__<status:"PENDING"|"FINISHED">__<lpAssetAmount>__<targetPeriod>__<claimTxId|"SOON">
            const parsedStr = parseSearchStr<{
                status: string;
                lpAssetAmount: number;
                targetPeriod: number;
                claimTxId: string;
            }>(entry?.value || '', [
                'status',
                'lpAssetAmount',
                'targetPeriod',
                'claimTxId',
            ]);

            return {
                ...parsedStr,
                withdrawTxId: entry?.key.split('__')[3],
                lpAssetAmount: new Money(
                    parsedStr.lpAssetAmount,
                    this.rs.assetsStore.LPToken
                ),
            };
        };

        return data.entries.reduce((acc, entry) => {
            if (entry.key.includes('withdrawal')) {
                const parsedWithdrawal = parseWithdrawal(entry);

                if (acc.withdraws) {
                    acc.withdraws = [...acc.withdraws, parsedWithdrawal];
                } else {
                    acc.withdraws = [parsedWithdrawal];
                }
                return acc;
            } else {
                const parsed = parseEntries(entry.key, entry.value);
                return { ...acc, ...parsed };
            }
        }, Object.create(null));
    };
}
