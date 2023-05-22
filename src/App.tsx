import { createContext, ReactElement, useState } from 'react';
import i18n from './i18next';
import { ThemeProvider } from 'emotion-theming';
import { TranslateProvider } from '@waves/ui-translator';
import theme from './theme';
import { Observer } from 'mobx-react-lite';
import { DotLoader } from '@waves.exchange/wx-react-uikit';
import { ModalContainer } from './components/ModalContainer/ModalContainer';
import { Page } from './Page/Page';
import { AppStore } from './stores/AppStore';

export const AppStoreContext = createContext<AppStore>(null);

// eslint-disable-next-line react/display-name
function App() {
    const [appStore] = useState<AppStore>(() => new AppStore());

    return (
        <AppStoreContext.Provider value={appStore}>
            <ThemeProvider theme={theme}>
                <TranslateProvider i18n={i18n}>
                    {/* <Stand /> */}
                    <ModalContainer />
                    <Observer>
                        {(): ReactElement => {
                            return appStore.assetsStore.assetsData.isLoading ?
                                <DotLoader /> :
                                <Page />;
                        }}
                    </Observer>
                    <Page />
                </TranslateProvider>
            </ThemeProvider>
        </AppStoreContext.Provider>
    );
}

export default App;
