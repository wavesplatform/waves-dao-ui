import { TConfig } from '../stores/ConfigStore';

export default<TConfig> {
    apiUrl: {
        node: 'https://nodes.wavesplatform.com',
        balance: 'https://nodes.wavesplatform.com/addresses/balance',
        wavesBalance: 'https://nodes.wavesnodes.com/addresses/balance/details',
        assets: 'https://wx.network/api/v1/assets',
        assetsIcons: 'https://wx.network/static/icons/assets',
        rates: 'https://wx.network/api/v1/rates',
        nodeHeight: 'https://nodes.wavesplatform.com/blocks/height',
        signerWeb: 'https://waves.exchange/signer/',
        signerCloud: 'https://waves.exchange/signer-cloud/',
        stateSearch: 'https://wx.network/api/v1/state/search',
    },
    contracts: {
        factory: '',
        calculator: '',
    },
    assets: [
        { label: 'WAVES', id: 'WAVES' },
        // { label: 'WAVESDAOLP', id: '' },
        { label: 'XTN', id: 'DG2xFkPdDwKUoBkzGAhQtLpSGzfXLiCYPEzeKH2Ad24p' },
    ]
};
