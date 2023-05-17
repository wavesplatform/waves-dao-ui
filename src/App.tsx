import { ConfigContextProvider } from './context/ConfigContext';
import { Box } from '@waves.exchange/wx-react-uikit';
import { CheckboxStand } from './components/CheckboxStand/CheckboxStand';
import { TextStand } from './components/TextStand/TextStand';
import configs from './configs';
import theme from './theme';
import { ThemeProvider } from 'emotion-theming';
import { ButtonsStand } from './components/ButtonsStand/ButtonsStand';
import { ModalContainer } from './components/ModalContainer/ModalContainer';
import { modalManager } from './services/modalManager';
import { MODAL_NAMES } from './components/ModalContainer/MODAL_NAMES';
import { DiagramStand } from './components/DiagramStand/DiagramStand';
import {
    AUTH_KEEPER_STATES,
    AuthModalProps,
} from './components/modals/AuthModal/AuthModal';
import { AuthProvider } from './context/AuthContext';
import { AuthService } from './services/authService';

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
                    <Box>
                        <Box
                            onClick={() => {
                                modalManager.openModal<AuthModalProps>(
                                    MODAL_NAMES.authModal,
                                    {
                                        modalState: AUTH_KEEPER_STATES.signCustom,
                                    }
                                );
                            }}
                        >
                        Waves Dao
                        </Box>
                        <ButtonsStand />
                        <CheckboxStand />
                        <TextStand />
                        <DiagramStand />
                    </Box>
                    <ModalContainer />
                </AuthProvider>
            </ThemeProvider>
        </ConfigContextProvider>
    );
}

export default App;
