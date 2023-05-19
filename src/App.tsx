import { ConfigContextProvider } from './context/ConfigContext';
import configs from './configs';
import theme from './theme';
import { ThemeProvider } from 'emotion-theming';
import { ModalContainer } from './components/ModalContainer/ModalContainer';
import { Stand } from './components/Stand';
import { TranslateProvider } from '@waves/ui-translator';
import i18n from './i18next';
import { Page } from './Page/Page';
import { modalManager } from './services/modalManager';
import { MODAL_NAMES } from './components/ModalContainer/MODAL_NAMES';
import { AuthProvider } from './context/AuthContext';
import { AuthService } from './services/authService';

// eslint-disable-next-line react/display-name
function App() {
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
                <AuthProvider value={authService}>
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
