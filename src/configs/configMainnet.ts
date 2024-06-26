import { TConfig } from '../stores/ConfigStore';

export default<TConfig> {
    apiUrl: {
        node: 'https://nodes.wavesnodes.com',
        balance: 'https://nodes.wavesnodes.com/addresses/balance',
        wavesBalance: 'https://nodes.wavesnodes.com/addresses/balance/details',
        assets: 'https://wx.network/api/v1/assets',
        assetsIcons: 'https://wx.network/static/icons/assets',
        rates: 'https://wx.network/api/v1/rates',
        nodeHeight: 'https://nodes.wavesnodes.com/blocks/height',
        signerWeb: 'https://wx.network/signer/',
        signerCloud: 'https://wx.network/signer-cloud/',
        stateSearch: 'https://wx.network/api/v1/state/search',
        evaluate: 'https://nodes.wavesnodes.com/utils/script/evaluate',
    },
    contracts: {
        factory: '3PJVm7xLPabmYohbnvdgGDYHMwnZxF2x18m',
        calculator: '3PAFngdaQ9rmbX3bKLu94fvSTUe4vDn1T2F',
        lpToken: 'HYogWffUjS8Uw4bYA1Dn3qrGmJerMqkf139aJcHhk8yq',
        treasury: '3PEwRcYNAUtoFvKpBhKoiwajnZfdoDR6h4h',
    },
    network: {
        code: 'W'
    },
    assets: [
        { label: 'WAVES', id: 'WAVES' },
        { label: 'WAVESDLP', id: 'HYogWffUjS8Uw4bYA1Dn3qrGmJerMqkf139aJcHhk8yq' },
        { label: 'XTN', id: 'DG2xFkPdDwKUoBkzGAhQtLpSGzfXLiCYPEzeKH2Ad24p' },
    ]
};
