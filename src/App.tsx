import React from 'react';
import { ConfigContextProvider } from './context/ConfigContext';
import configs from './configs';
import theme from './theme';
import { ThemeProvider } from 'emotion-theming';
import { ModalContextProvider } from './context/ModalContext';
import { ModalManager } from './components/ModalManager/ModalManager';
import { useModalContext } from './hooks/useModalContext';
import { Main } from './pages/Main/Main';

function App() {
    const config = import.meta.env.VITE_NETWORK === 'testnet' ? configs.testnet : configs.mainnet;

    const modalContextValue = useModalContext();

    return (
        <ConfigContextProvider value={config}>
            <ThemeProvider theme={theme}>
                <ModalContextProvider value={modalContextValue}>
                    <Main />
                    <ModalManager />
                </ModalContextProvider>
            </ThemeProvider>
        </ConfigContextProvider>
    )
}

export default App
