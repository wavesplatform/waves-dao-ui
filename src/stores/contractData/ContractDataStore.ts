import { ChildStore } from '../ChildStore';
import { AppStore } from '../AppStore';
import { FetchTracker } from '../utils/FetchTracker';
import { search } from './searchUtils';
import { reaction } from 'mobx';

export class ContractDataStore extends ChildStore {

    public contractData: FetchTracker<any, any>;
    public priceData: FetchTracker<any, any>;

    constructor(rs: AppStore) {
        super(rs);

        this.contractData = new FetchTracker<any, any>({
            fetchUrl: `${this.rs.configStore.config.apiUrl.stateSearch}`,
            fetcher: (fetchUrl) => search(
                fetchUrl,
                {
                    filter: {
                        or: [
                            {
                                and: [
                                    { address: { operation: 'eq', value: '3MuqubsQAq9mrsN65SePHeThcN3JVAbgZ9d' } },
                                    {
                                        or: [
                                            { key: { operation: 'eq', value: '%s__startHeight' } },
                                            { key: { operation: 'eq', value: '%s__votingResult' } },
                                            { key: { operation: 'eq', value: '%s__votingThreshold' } },
                                        ]
                                    }
                                ]
                            },
                            {
                                in: {
                                    properties: [
                                        { address: {} },
                                        { fragment: { position: 0, type: 'string' } },
                                        { fragment: { position: 1, type: 'string' } },
                                    ],
                                    values: [['3MuqubsQAq9mrsN65SePHeThcN3JVAbgZ9d', 'vote', '3Mqtn6v9na7hgbRXbuwNCH28rAr44VxB4ih']]
                                }
                            }
                        ],
                    }
                }
            ),
            refreshInterval: 60_000,
            autoFetch: true,
        });

        reaction(
            () => this.contractData.isLoading,
            () => {
                console.log('%c data', 'color: #e5b6ed', this.contractData.data);
            }
        );
    }

}
