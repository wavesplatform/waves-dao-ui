import { AssetsStore } from './assets/AssetsStore';
import { ConfigStore } from './ConfigStore';
import { AuthStore } from './AuthStore';
import { BalanceStore } from './balance/BalanceStore';
import { NodeHeightStore } from './NodeHeightStore';
import { RatesStore } from './rates/RatesStore';
import { ContractDataStore } from './contractData/ContractDataStore';
import { reaction } from 'mobx';

export class AppStore {

    public assetsStore: AssetsStore;
    public configStore: ConfigStore;
    public authStore: AuthStore;
    public balanceStore: BalanceStore;
    public nodeHeightStore: NodeHeightStore;
    public ratesStore: RatesStore;
    public contractDataStore: ContractDataStore;

    constructor() {
        this.configStore = new ConfigStore();
        this.assetsStore = new AssetsStore(this);

        reaction(
            () => this.assetsStore.assetsData.isLoading,
            () => {
                if (!this.assetsStore.assetsData.isLoading) {
                    this.authStore = new AuthStore(this);
                    this.balanceStore = new BalanceStore(this);
                    this.nodeHeightStore = new NodeHeightStore(this);
                    this.ratesStore = new RatesStore(this);
                    this.contractDataStore = new ContractDataStore(this);
                }
            }
        );
    }

}
