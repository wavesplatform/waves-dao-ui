import { AssetsStore } from './AssetsStore';
import { ConfigContextType } from '../context/ConfigContext';

export class AppStore {

    public assetsStore: AssetsStore;

    constructor(config: ConfigContextType) {
        this.assetsStore = new AssetsStore(config);
    }


}
