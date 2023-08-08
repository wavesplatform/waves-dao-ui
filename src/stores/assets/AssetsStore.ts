import { Asset } from '@waves/data-entities';
import { FetchTracker } from '../utils/FetchTracker';
import { AssetWithMeta, IAssetsResponse, IExpandedAssetJson } from './interface';
import { AppStore } from '../AppStore';
import { ChildStore } from '../ChildStore';

export class AssetsStore extends ChildStore {
    // ключами будут id & displayName токена
    public assetsData: FetchTracker<Record<string, AssetWithMeta>, IAssetsResponse>;

    protected readonly fetchUrl: string;

    constructor(rs: AppStore) {
        super(rs);
        const config = this.rs.configStore.config;
        const assetsIds = config.assets.map(a => a.id);
        this.fetchUrl = config.apiUrl.assets;
        this.assetsData = new FetchTracker<Record<string, AssetWithMeta>, IAssetsResponse>({
            fetchUrl: `${this.fetchUrl}?ids=${assetsIds.join('&ids=')}`,
            parser: this.assetsParser,
            autoFetch: true
        });
    }

    public get XTN(): AssetWithMeta {
        return this.rs.assetsStore.assetsData.data['XTN'];
    }

    public get WAVES(): AssetWithMeta {
        return this.rs.assetsStore.assetsData.data['WAVES'];
    }

    public get LPToken(): AssetWithMeta {
        return this.rs.assetsStore.assetsData.data[this.rs.configStore.config.contracts.lpToken];
    }

    public updateAssets(ids: Array<string>): void {
        const _ids = ids.filter((id) => !this.assetsData?.data[id])
        if (!_ids.length) {
            return;
        }
        this.assetsData.setOptions({
            fetchUrl: `${this.fetchUrl}?ids=${_ids.join('&ids=')}`,
            parser: this.assetsParser,
            autoFetch: true
        })
    }

    private assetsParser = ({ data }: IAssetsResponse): Record<string, AssetWithMeta> => {
        const savedData = this.assetsData.data || {};
        const newData = data
            .map(this.transformAsset)
            .filter(Boolean)
            .reduce((acc, asset) => {
                acc[(asset as AssetWithMeta).id] = asset;
                acc[(asset as AssetWithMeta).displayName] = asset;
                return acc;
            }, Object.create(null));

        return Object.assign(savedData, newData);
    };

    private transformAsset = (data: IExpandedAssetJson): AssetWithMeta | null | undefined => {
        if (data === null) {
            return null;
        } else
            return Object.assign(new Asset(({
                ...data.data,
                ticker: data.data.ticker || '',
                hasScript: data.data.hasScript,
            })), {
                icon:`${ this.rs.configStore.config.apiUrl.assetsIcons}/${data.data.id}.svg`,
                meta: {
                    ... data.metadata,
                    oracleData: data.metadata.oracle_data,
                    hasImage: data.metadata.has_image,
                    sponsorBalance: data.metadata.sponsor_balance
                },
            });
    };

}
