import { createContext } from 'react';

export type TAssetConfig = { label: string; id: string };

export type ConfigContextType = {
	apiUrl: {
		balance: string,
		wavesBalance: string,
		assets: string,
		assetsIcons: string,
		rates: string,
		nodeHeight: string,
	},
	contracts: {},
	assets: Array<TAssetConfig>
};

export const ConfigContext = createContext<ConfigContextType>({
	apiUrl: {
		balance: '',
		wavesBalance: '',
		assets: '',
		assetsIcons: '',
		rates: '',
		nodeHeight: '',
	},
	contracts: {},
	assets: []
});

ConfigContext.displayName = 'ConfigContext';

export const ConfigContextProvider = ConfigContext.Provider;
