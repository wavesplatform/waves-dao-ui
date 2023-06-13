import { TConfig } from '../stores/ConfigStore';

export default<TConfig> {
    apiUrl: {
        node: 'https://nodes-testnet.waves.exchange',
        balance: 'https://nodes-testnet.wavesnodes.com/addresses/balance',
        wavesBalance: 'https://nodes-testnet.wavesnodes.com/addresses/balance/details',
        assets: 'https://testnet.wx.network/api/v1/assets',
        assetsIcons: 'https://testnet.wx.network/static/icons/assets',
        rates: 'https://testnet.wx.network/api/v1/rates',
        nodeHeight: 'https://nodes-testnet.wavesnodes.com/blocks/height',
        signerWeb: 'https://testnet.wx.network/signer/',
        signerCloud: 'https://testnet.wx.network/signer-cloud/',
        stateSearch: 'https://testnet.wx.network/api/v1/state/search',
    },
    contracts: {
        factory: '3MuS6qVvhBR6wSynFRdcE3fVqmGBjoc7Hhx',
        calculator: '',
    },
    assets: [
        { label: 'WAVES', id: 'WAVES' },
        { label: 'WAVESDAOLP', id: 'FLEJVe9MaJbmkHm5vJE6qmRAzRBnYR8YVTd1PwvZwh3U' },
        { label: 'XTN', id: '25FEqEjRkqK6yCkiT7Lz6SAYz7gUFCtxfCChnrVFD5AT' },
    ]
};
