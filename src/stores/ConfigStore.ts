import configs from "../configs";

export type TAssetConfig = { label: string; id: string };

export type TConfig = {
    apiUrl: {
        node: string,
        balance: string,
        wavesBalance: string,
        assets: string,
        assetsIcons: string,
        rates: string,
        nodeHeight: string,
        signerWeb: string,
        signerCloud: string
    },
    contracts: {},
    assets: Array<TAssetConfig>
};

export class ConfigStore {

    public config: TConfig;

    constructor() {
        this.config =
            import.meta.env.VITE_NETWORK === "testnet"
                ? configs.testnet
                : configs.mainnet;
    }
}
