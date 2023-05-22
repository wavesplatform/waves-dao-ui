import { AssetsStore } from './assets/AssetsStore';
import { ConfigStore } from './ConfigStore';
import { AuthStore } from './AuthStore';
import { NodeHeightStore } from './NodeHeightStore';

export class AppStore {

    public assetsStore: AssetsStore;
    public configStore: ConfigStore;
    public authStore: AuthStore;
    public nodeHeightStore: NodeHeightStore;

    constructor() {
        this.configStore = new ConfigStore();
        this.assetsStore = new AssetsStore(this);
        this.authStore = new AuthStore(this);
        this.nodeHeightStore = new NodeHeightStore(this);
    }


}
