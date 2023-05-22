import { Asset } from '@waves/data-entities';
import { FetchTracker } from '../utils/FetchTracker';
import { AssetWithMeta, IAssetsResponse, IExpandedAssetJson } from './interface';
import { AppStore } from '../AppStore';
import { ChildStore } from '../ChildStore';


export class AssetsStore extends ChildStore {

    public assetsData: FetchTracker<Record<string, AssetWithMeta>>;

    constructor(rs: AppStore) {
        super(rs);
        const config = this.rs.configStore.config;
        const assetsIds = config.assets.map(a => a.id);
        this.assetsData = new FetchTracker<Record<string, AssetWithMeta>>({
            fetchUrl: `${config.apiUrl.assets}?ids=${assetsIds.join('&ids=')}`,
            parser: this.assetsParser,
            autoFetch: true
        });
    }

    private assetsParser = ({ data }: IAssetsResponse): Record<string, AssetWithMeta> => {
        return data
            .map(this.transformAsset)
            .filter(Boolean)
            .reduce((acc, asset) => {
                acc[asset.id] = asset;
                return acc;
            }, Object.create(null));
    };

    private transformAsset = (data: IExpandedAssetJson): AssetWithMeta => {
        return data == null ?
            (data === null ? null : undefined) :
            Object.assign(new Asset(({
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
