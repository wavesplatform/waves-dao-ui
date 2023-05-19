import { createContext } from 'react';
import configMainnet from '../configs/configMainnet';

export type TAssetConfig = { label: string; id: string };

export type ConfigContextType = {
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

export const ConfigContext = createContext<ConfigContextType>(configMainnet);

ConfigContext.displayName = 'ConfigContext';

export const ConfigContextProvider = ConfigContext.Provider;
