import { reaction } from 'mobx';
import { ChildStore } from '../ChildStore';
import { AppStore } from '../AppStore';
import { FetchTracker } from '../utils/FetchTracker';
import { search } from '../../utils/search/searchRequest';
import { IState } from '../../utils/search';
import { parseSearchStr } from '../../utils/search/parseContractData';
import { Money } from '@waves/data-entities';
import { IContractData, TPriceData } from '.';


export class ContractDataStore extends ChildStore {

    public contractData: FetchTracker<IContractData, IState>;
    public priceData: FetchTracker<TPriceData, IState>;

    constructor(rs: AppStore) {
        super(rs);

        const searchUrl = this.rs.configStore.config.apiUrl.stateSearch;
        const contractAddress = this.rs.configStore.config.contracts.factory;
        const userAddress = this.rs.authStore.user.address;

        this.contractData = new FetchTracker<any, any>({
            fetchUrl: searchUrl,
            fetcher: (fetchUrl) => search(
                fetchUrl,
                {
                    filter: {
                        or: [
                            {
                                and: [
                                    { address: { operation: 'eq', value: contractAddress } },
                                    {
                                        or: [
                                            { key: { operation: 'eq', value: '%s__startHeight' } },
                                            { key: { operation: 'eq', value: '%s__periodLength' } },
                                            { key: { operation: 'eq', value: '%s__currentPeriod' } },
                                            { key: { operation: 'eq', value: '%s%s__invested__WAVES' } },
                                            { key: { operation: 'eq', value: `%s%s__invested__${'lPAssetId'}` } },
                                            { key: { operation: 'eq', value: `%s%s%s__available__${userAddress}` } },
                                            { key: { operation: 'eq', value: `%s%s%s__claimed__${userAddress}` } },
                                        ]
                                    }
                                ]
                            },
                            {
                                in: {
                                    //%s%s%s__withdrawal__<userAddress>__<txId>
                                    properties: [
                                        { address: {} },
                                        { fragment: { position: 0, type: 'string' } },
                                        { fragment: { position: 1, type: 'string' } },
                                    ],
                                    values: [[contractAddress, 'withdrawal', userAddress]]
                                }
                            }
                        ],
                    }
                }
            ),
            refreshInterval: 60_000,
            autoFetch: true,
            parser: this.contractDataParser
        });


        reaction(
            () => this.contractData.isLoading,
            () => {
                if (!this.contractData.isLoading) {
                    const period = this.contractData.data.withdraws.map(w => w.targetPeriod); // TODO: get period from contractData
                    this.priceData = new FetchTracker<any, any>({
                        fetchUrl: `${this.rs.configStore.config.apiUrl.stateSearch}`,
                        fetcher: (fetchUrl) => search(
                            fetchUrl,
                            {
                                filter: {
                                    or: [{
                                        and: [
                                            { address: { operation: 'eq', value: contractAddress } },
                                            { or: period.map(p => {
                                                return { key: { operation: 'eq', value: `%s%d__price__${p}` } };
                                            }) }
                                        ]
                                    }]
                                }
                            }),
                        refreshInterval: 60_000,
                        autoFetch: true,
                        parser: this.priceDataParser
                    });
                }
            }
        );
    }

    private contractDataParser(data: IState): IContractData {
        const parseEntries = (key: string, value: string | number) => {
            switch (true) {
                case key.includes('startHeight'):
                    return { startHeight: value };
                case key.includes('periodLength'):
                    return { periodLength: value };
                case key.includes('currentPeriod'):
                    return { currentPeriod: value };
                case key.includes('invested__WAVES'):
                    return { investedWaves: new Money(value, this.rs.assetsStore.assetsData.data.WAVES) };
                case key.includes(`invested__${'lPAssetId'}`):
                    return { investedLp: new Money(value, this.rs.assetsStore.assetsData.data['lPAssetId']) };
                case key.includes('available'):
                    return { availableToClaim: new Money(value, this.rs.assetsStore.assetsData.data['lPAssetId']) };
                case key.includes('claimed'):
                    return { claimed: new Money(value, this.rs.assetsStore.assetsData.data['lPAssetId']) };
                case key.includes('withdrawal'):
                    return { withdrawal: new Money(value, this.rs.assetsStore.assetsData.data['lPAssetId']) };
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
            }>(entry, [
                'status',
                'lpAssetAmount',
                'targetPeriod',
                'claimTxId'
            ]);

            return {
                ...parsedStr,
                lpAssetAmount: new Money(parsedStr.lpAssetAmount, this.rs.assetsStore.assetsData.data['lPAssetId'])
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
    }

    private priceDataParser(data: IState): TPriceData {
        return data.entries.reduce((acc, entry) => {
            return { ...acc, [entry.key]: entry.value }; // todo
        }, Object.create(null));
    }

}
