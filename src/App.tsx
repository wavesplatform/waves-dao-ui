import {createContext, useContext} from "react"
import { ConfigContextProvider } from './context/ConfigContext';
import configs from './configs';
import theme from './theme';
import { ThemeProvider } from 'emotion-theming';
import { ModalContainer } from './components/ModalContainer/ModalContainer';
import { TranslateProvider } from '@waves/ui-translator';
import i18n from './i18next';
import { Page } from './Page/Page';
import { AuthProvider } from './context/AuthContext';
import { AuthService } from './services/authService';
import { useState } from 'react';
import { AppStore } from './stores/AppStore';

export const AppStoreContext = createContext<AppStore>(null);

// eslint-disable-next-line react/display-name
function App() {
    const [isAuthorized, setIsAuthorized] = useState();
    const config =
        import.meta.env.VITE_NETWORK === "testnet"
            ? configs.testnet
            : configs.mainnet;

    const appStore = new AppStore(config);

    const authService = new AuthService({
        nodeUrl: config.apiUrl.node,
        signerWebUrl: config.apiUrl.signerWeb,
        signerCloudUrl: config.apiUrl.signerCloud
    });

    return (
        <ConfigContextProvider value={config}>
            <AppStoreContext.Provider value={appStore}>
                <ThemeProvider theme={theme}>
                    <AuthProvider value={{
                        authService,
                        isAuthorized,
                        setIsAuthorized
                    }}>
                        <TranslateProvider i18n={i18n}>
                            {/* <Stand /> */}
                            <ModalContainer />
                            <Page />
                        </TranslateProvider>
                    </AuthProvider>
                </ThemeProvider>
            </AppStoreContext.Provider>
        </ConfigContextProvider>
    );
}

export default App;
