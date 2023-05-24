import { reaction } from 'mobx';
import { ChildStore } from '../ChildStore';
import { AppStore } from '../AppStore';
import { FetchTracker } from '../utils/FetchTracker';
import { search } from '../../utils/search/searchRequest';
import { IState } from '../../utils/search';

// const CONTRACT_DATA_VALUES_MAP = [
//     'startHeight': ['%s__startHeight'],
//

export class ContractDataStore extends ChildStore {

    public contractData: FetchTracker<any, any>;
    public priceData: FetchTracker<any, any>;

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
                    const period = this.contractData.data; // TODO: get period from contractData
                    this.priceData = new FetchTracker<any, any>({
                        fetchUrl: `${this.rs.configStore.config.apiUrl.stateSearch}`,
                        fetcher: (fetchUrl) => search(
                            fetchUrl,
                            {
                                filter: {
                                    or: [{
                                        and: [
                                            { address: { operation: 'eq', value: contractAddress } },
                                            { or: [{ key: { operation: 'eq', value: `%s%d__price__${period}` } }] }
                                        ]
                                    }]
                                }
                            }),
                        refreshInterval: 60_000,
                        autoFetch: true
                    });
                }
            }
        );
    }

    private contractDataParser(data: IState): any {
        const withdraws = [];
        const parsedValues = data.entries.map((entry) => {
            if (entry.key.includes('withdrawal')) {
                withdraws.push(entry);
                return null;
            }
            // return parseSearchStr(entry.value, getContractValues(entry.key));
        });
    }

}
