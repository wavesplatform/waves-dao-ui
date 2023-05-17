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
} from './components/modals/KeeperAuthModal/KeeperAuthModal';

function App() {
    const config =
        import.meta.env.VITE_NETWORK === "testnet"
            ? configs.testnet
            : configs.mainnet;

    return (
        <ConfigContextProvider value={config}>
            <ThemeProvider theme={theme}>
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
                </Box>
                <ModalContainer />
            </ThemeProvider>
        </ConfigContextProvider>
    );
}

export default App;
