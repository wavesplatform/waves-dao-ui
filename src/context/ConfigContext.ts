import { createContext } from 'react';

export type ConfigContextType = {
	nodeUrl: string;
	signerClientUrl: string;
	explorerUrl: string;
	dataServicesUrl: string;
	iconServiceUrl: string;
};

export const ConfigContext = createContext<ConfigContextType>({
    nodeUrl: '',
    signerClientUrl: '',
    explorerUrl: '',
    dataServicesUrl: '',
    iconServiceUrl: ''
});

ConfigContext.displayName = 'ConfigContext';

export const ConfigContextProvider = ConfigContext.Provider;
