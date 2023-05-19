import { Asset, IAssetJSON } from '@waves/data-entities';
import { FetchTracker } from './utils';
import { ConfigContextType } from '../context/ConfigContext';
import { computed, makeObservable } from 'mobx';
import { BigNumber } from '@waves/bignumber';
import { IAssetInfo } from '@waves/data-entities/dist/entities/Asset';

export interface AssetWithMeta extends Asset {
    icon: string;
}

export enum ASSET_LABELS {
    GATEWAY = 'GATEWAY',
    STABLECOIN = 'STABLECOIN',
    WA_VERIFIED = 'WA_VERIFIED',
    COMMUNITY_VERIFIED = 'COMMUNITY_VERIFIED',
    POOLS_LP = 'POOLS_LP',
    LAMBO_LP = 'LAMBO_LP',
    ALGO_LP = 'ALGO_LP',
    STAKING_LP = 'STAKING_LP',
    VIRES_LP = 'VIRES_LP',
    LEVERAGE = 'LEVERAGE',
    '3RD_PARTY' = '3RD_PARTY',
    WX = 'WX',
    STAKING_POOLS_LP = 'STAKING_POOLS_LP',
    MAIN = 'MAIN',
    PEPE = 'PEPE'
}

export interface IOracleData extends Record<string, unknown> {
    logo?: string;
    ticker?: string;
    email?: string;
    status?: string;
    link?: string;
    version?: string;
}

export interface IExpandedAssetJson {
    type: string;
    data: IAssetJSON;
    metadata: {
        has_image: boolean;
        verified_status: number;
        oracle_data?: Array<IOracleData>;
        labels?: Array<ASSET_LABELS>;
        sponsor_balance?: number;
    };
}

export interface IAssetsResponse {
    type: string;
    item_type: string;
    data: Array<IExpandedAssetJson>;
    cursor: string;
}

export interface INewAssetJSON extends IAssetInfo {
    readonly ticker?: string;
    readonly id: string;
    readonly name: string;
    readonly precision: number;
    readonly description: string;
    readonly height: number;
    readonly timestamp: Date;
    readonly sender: string;
    readonly reissuable: boolean;
    readonly quantity: BigNumber;
    readonly has_script?: boolean;
    readonly min_sponsored_fee?: BigNumber;
}

const transformAsset = (data: INewAssetJSON): AssetWithMeta => data == null ?
    (data === null ? null : undefined) :
    new Asset(({
        ...data,
        ticker: data.ticker || '',
        hasScript: data.has_script,
    })) as AssetWithMeta;

const transformData = (data: Array<{ data: any }>): Array<any> => data.map(el => el ? el.data : undefined);

const assetsParser = ({ data }: IAssetsResponse): AssetWithMeta[] => {
    return transformData(data)
        .map(transformAsset)
        .filter(Boolean);
};

export class AssetsStore {

    assetsData: FetchTracker<AssetWithMeta[]>;

    constructor(config: ConfigContextType) {
        makeObservable(this, {
            assetsMap: computed
        });
        const assetsIds = config.assets.map(a => a.id);
        this.assetsData = new FetchTracker({
            fetchUrl: `${config.apiUrl.assets}?ids=${assetsIds.join('&ids=')}`,
            parser: assetsParser
        });
        this.fetchAssets();
    }

    private fetchAssets() {
        this.assetsData.load();
    }

    public get assetsMap(): Record<string, AssetWithMeta> {
        return this.assetsData.data ?
            this.assetsData.data.reduce((acc, asset) => {
                acc[asset.id] = asset;
                return acc;
            }, Object.create(null)) :
            Object.create(null);
    }

}
