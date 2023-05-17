import { ConfigContextProvider } from './context/ConfigContext';
import { Box } from '@waves.exchange/wx-react-uikit';
import configs from './configs';
import theme from './theme';
import { ThemeProvider } from 'emotion-theming';
import { ButtonsStand } from './components/ButtonsStand/ButtonsStand';
import { ModalContainer } from './components/ModalContainer/ModalContainer';
import { modalManager } from './services/modalManager';
import { MODAL_NAMES } from './components/ModalContainer/MODAL_NAMES';

function App() {
    const config = import.meta.env.VITE_NETWORK === 'testnet' ? configs.testnet : configs.mainnet;

    return (
        <ConfigContextProvider value={config}>
            <ThemeProvider theme={theme}>
                <Box>
                    <Box onClick={() => {
                        modalManager.openModal(MODAL_NAMES.authModal, undefined, 500);
                    }}>Waves Dao</Box>
                    <ButtonsStand />
                </Box>
                <ModalContainer />
            </ThemeProvider>
        </ConfigContextProvider>
    )
}

export default App
