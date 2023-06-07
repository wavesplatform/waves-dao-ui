import { reaction } from 'mobx';
import { ChildStore } from '../ChildStore';
import { AppStore } from '../AppStore';
import { FetchTracker } from '../utils/FetchTracker';
import { search } from '../../utils/search/searchRequest';
import { IState } from '../../utils/search';
import { parseSearchStr } from '../../utils/search/parseContractData';
import { Money } from '@waves/data-entities';
import { ICommonContractData, IUserContractData, IWithdrawal } from '.';
import BigNumber from '@waves/bignumber';

export class ContractDataStore extends ChildStore {
    public commonContractData: FetchTracker<ICommonContractData, IState>;
    public userContractData: FetchTracker<IUserContractData, IState> =
        new FetchTracker();

    constructor(rs: AppStore) {
        super(rs);
        const searchUrl = this.rs.configStore.config.apiUrl.stateSearch;
        const contractAddress = this.rs.configStore.config.contracts.factory;
        this.commonContractData = new FetchTracker<any, any>({
            fetchUrl: searchUrl,
            fetcher: (fetchUrl) =>
                search(fetchUrl, {
                    filter: {
                        or: [
                            {
                                and: [
                                    {
                                        address: {
                                            operation: 'eq',
                                            value: contractAddress,
                                        },
                                    },
                                    {
                                        or: [
                                            {
                                                key: {
                                                    operation: 'eq',
                                                    value: '%s__periodLength',
                                                },
                                            },
                                            {
                                                key: {
                                                    operation: 'eq',
                                                    value: '%s__currentPeriod',
                                                },
                                            },
                                            {
                                                key: {
                                                    operation: 'eq',
                                                    value: '%s%s__invested__WAVES',
                                                },
                                            },
                                            {
                                                key: {
                                                    operation: 'eq',
                                                    value: `%s%s__invested__${
                                                        this.rs.assetsStore.getXTN()
                                                            .id
                                                    }`,
                                                },
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                in: {
                                    properties: [
                                        { address: {} },
                                        {
                                            fragment: {
                                                position: 0,
                                                type: 'string',
                                            },
                                        },
                                    ],
                                    values: [[contractAddress, 'price']],
                                },
                            },
                            {
                                in: {
                                    properties: [
                                        { address: {} },
                                        {
                                            fragment: {
                                                position: 0,
                                                type: 'string',
                                            },
                                        },
                                    ],
                                    values: [[contractAddress, 'startHeight']],
                                },
                            },
                        ],
                    },
                }),
            refreshInterval: 60_000,
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
                            search(fetchUrl, {
                                filter: {
                                    or: [
                                        {
                                            and: [
                                                {
                                                    address: {
                                                        operation: 'eq',
                                                        value: contractAddress,
                                                    },
                                                },
                                                {
                                                    or: [
                                                        {
                                                            key: {
                                                                operation: 'eq',
                                                                value: `%s%s__available__${userAddress}`,
                                                            },
                                                        },
                                                        {
                                                            key: {
                                                                operation: 'eq',
                                                                value: `%s%s__claimed__${userAddress}`,
                                                            },
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                        {
                                            in: {
                                                //%s%s%s__withdrawal__<userAddress>__<txId>
                                                properties: [
                                                    { address: {} },
                                                    {
                                                        fragment: {
                                                            position: 0,
                                                            type: 'string',
                                                        },
                                                    },
                                                    {
                                                        fragment: {
                                                            position: 1,
                                                            type: 'string',
                                                        },
                                                    },
                                                ],
                                                values: [
                                                    [
                                                        contractAddress,
                                                        'withdrawal',
                                                        userAddress,
                                                    ],
                                                ],
                                            },
                                        },
                                    ],
                                },
                            }),
                        refreshInterval: 60_000,
                        parser: this.userContractDataParser,
                        autoFetch: true,
                    });
                }
            }
        );
    }

    public get getTreasuryUsd(): BigNumber {
        return this.rs.ratesStore.getInvestedWavesUsd.add(
            this.rs.ratesStore.getInvestedXtnUsd
        );
    }

    public get withdraws(): IWithdrawal[] {
        return this.userContractData.data?.withdraws || [];
    }

    public get availableToClaim(): Money {
        return (
            this.userContractData?.data?.availableToClaim ||
            new Money(0, this.rs.assetsStore.getWAVESDAOLP())
        );
    }

    public get isUnlockedTokensMS(): boolean {
        return Boolean(
            this.withdraws.filter((item) => item.status === 'FINISHED').length
        );
    }

    public get investedWaves(): Money {
        return (
            this.commonContractData.data?.investedWaves ||
            new Money(0, this.rs.assetsStore.getWaves())
        );
    }

    public get investedXtn(): Money {
        return (
            this.commonContractData.data?.investedXtn ||
            new Money(0, this.rs.assetsStore.getXTN())
        );
    }

    public get getCurrentPeriod(): number {
        return this.commonContractData.data?.currentPeriod || 0;
    }

    public get getCurrentPriceWaves(): Money {
        const { prices = {}, currentPeriod = 0 } =
            this.commonContractData?.data || {};

        return new Money(
            prices[currentPeriod] || 0,
            this.rs.assetsStore.getWaves()
        );
    }

    public get getCurrentPriceWavesLp(): Money {
        const { prices = {}, currentPeriod = 0 } =
            this.commonContractData?.data || {};
        const price = new Money(100000000, this.rs.assetsStore.getWaves())
            .getCoins()
            .div(prices[currentPeriod]);

        return new Money(price, this.rs.assetsStore.getWAVESDAOLP());
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

    private contractDataParser = (data: IState): ICommonContractData => {
        const parseEntries = (key: string, value: string | number, acc) => {
            switch (true) {
                case key.includes('startHeight'):
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
                    const pricePeriod = key.split('__')[2];
                    if (pricePeriod) {
                        acc.prices[pricePeriod] = value;
                    }
                    return;
                case key.includes('invested__WAVES'):
                    return {
                        investedWaves: new Money(
                            value,
                            this.rs.assetsStore.getWaves()
                        ),
                    };
                case key.includes(
                    `invested__${this.rs.assetsStore.getXTN().id}`
                ):
                    return {
                        investedXtn: new Money(
                            value,
                            this.rs.assetsStore.getXTN()
                        ),
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
                investedXtn: undefined,
                periodLength: undefined,
                startHeights: {},
                prices: {},
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
                            this.rs.assetsStore.getWAVESDAOLP()
                        ),
                    };
                case key.includes('claimed'):
                    return {
                        claimed: new Money(
                            value,
                            this.rs.assetsStore.getWAVESDAOLP()
                        ),
                    };
                case key.includes('withdrawal'):
                    return {
                        withdrawal: new Money(
                            value,
                            this.rs.assetsStore.getWAVESDAOLP()
                        ),
                    };
                default:
                    return {};
            }
        };

        const parseWithdrawal = (entry) => {
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
                lpAssetAmount: new Money(
                    parsedStr.lpAssetAmount,
                    this.rs.assetsStore.getWAVESDAOLP()
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
