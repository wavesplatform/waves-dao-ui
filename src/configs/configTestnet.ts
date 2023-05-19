import { ConfigContextType } from '../context/ConfigContext';

export default<ConfigContextType> {
    apiUrl: {
        node: 'https://nodes-testnet.waves.exchange',
        balance: 'https://nodes-testnet.wavesnodes.com/addresses/balance',
        wavesBalance: 'https://nodes-testnet.wavesnodes.com/addresses/balance/details',
        assets: 'https://testnet.wx.network/api/v1/assets',
        assetsIcons: 'https://testnet.wx.network/static/icons/assets',
        rates: 'https://testnet.wx.network/api/v1/rates',
        nodeHeight: 'https://nodes-testnet.wavesnodes.com/blocks/height',
        signerWeb: "https://testnet.wx.network/signer/",
        signerCloud: "https://testnet.wx.network/signer-cloud/"
    },
    contracts: {

    },
    assets: [
        { label: 'WAVES', id: 'WAVES' },
        { label: 'WAVESDLP', id: '' },
        { label: 'XTN', id: '25FEqEjRkqK6yCkiT7Lz6SAYz7gUFCtxfCChnrVFD5AT' },
    ]
};
