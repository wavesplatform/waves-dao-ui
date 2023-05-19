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

// eslint-disable-next-line react/display-name
function App() {
    const [isAuthorized, setIsAuthorized] = useState();
    const config =
        import.meta.env.VITE_NETWORK === "testnet"
            ? configs.testnet
            : configs.mainnet;

    const authService = new AuthService({
        nodeUrl: config.apiUrl.node,
        signerWebUrl: config.apiUrl.signerWeb,
        signerCloudUrl: config.apiUrl.signerCloud
    });

    return (
        <ConfigContextProvider value={config}>
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
        </ConfigContextProvider>
    );
}

export default App;
