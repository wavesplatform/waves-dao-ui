import { AssetsStore } from './assets/AssetsStore';
import { ConfigStore } from './ConfigStore';
import { AuthStore } from './AuthStore';
import { BalanceStore } from './balance/BalanceStore';
import { NodeHeightStore } from './NodeHeightStore';
import { RatesStore } from './rates/RatesStore';
import { ContractDataStore } from './contractData/ContractDataStore';
import { when } from 'mobx';
import { ProviderStore } from './ProviderStore';
import { ContractBalanceStore } from './contractBalanceStore/ContractBalanceStore.ts';

export class AppStore {

    public assetsStore: AssetsStore;
    public configStore: ConfigStore;
    public authStore: AuthStore;
    public balanceStore: BalanceStore;
    public nodeHeightStore: NodeHeightStore;
    public ratesStore: RatesStore;
    public contractDataStore: ContractDataStore;
    public providerStore: ProviderStore;
    public contractBalanceStore: ContractBalanceStore;

    constructor() {
        this.configStore = new ConfigStore();
        this.assetsStore = new AssetsStore(this);
        this.authStore = new AuthStore(this);
        this.contractBalanceStore = new ContractBalanceStore(this);

        when(
            () => !this.assetsStore.assetsData.isFirstLoad && !this.contractBalanceStore.balanceTracker.isFirstLoad,
            () => {
                this.providerStore = new ProviderStore(this);
                this.balanceStore = new BalanceStore(this);
                this.nodeHeightStore = new NodeHeightStore(this);
                this.ratesStore = new RatesStore(this);
                this.contractDataStore = new ContractDataStore(this);
            }
        );
    }

}
