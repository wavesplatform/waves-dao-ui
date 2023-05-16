import React from 'react';
import { ConfigContextProvider } from './context/ConfigContext';
import { Box } from '@waves.exchange/wx-react-uikit';
import { CheckboxStand } from './components/CheckboxStand/CheckboxStand';
import { TextStand } from './components/TextStand/TextStand';
import configs from './configs';
import theme from './theme';
import { ThemeProvider } from 'emotion-theming';
import { ButtonsStand } from './components/ButtonsStand/ButtonsStand';

function App() {
    const config = import.meta.env.VITE_NETWORK === 'testnet' ? configs.testnet : configs.mainnet;

    return (
        <ConfigContextProvider value={config}>
            <ThemeProvider theme={theme}>
                <Box>
                    Waves Dao
                    <ButtonsStand />
                    <CheckboxStand />
                    <TextStand />
                </Box>
            </ThemeProvider>
        </ConfigContextProvider>
    )
}

export default App
