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
import { AuthProvider } from './context/AuthContext';
import { AuthService } from './services/authService';
import { FeeStand } from './components/FeeStand/FeeStand';
import { HelpStand } from './components/HelpStand/HelpStand';
import { TooltipStand } from './components/TooltipStand/TooltipStand';

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
                                modalManager.openModal(MODAL_NAMES.authModal);
                            }}
                        >
                        Waves Dao
                        </Box>
                        <ButtonsStand />
                        <CheckboxStand />
                        <TextStand />
                        <DiagramStand />
                        <FeeStand />
                        <HelpStand />
                        <TooltipStand />
                    </Box>
                    <ModalContainer />
                </AuthProvider>
            </ThemeProvider>
        </ConfigContextProvider>
    );
}

export default App;
