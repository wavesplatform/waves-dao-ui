import { Signer, Provider, UserData } from '@waves/signer';
import MobileDetect from 'mobile-detect';
import { ProviderKeeper } from '@waves/provider-keeper';
import { ProviderCloud } from '@waves.exchange/provider-cloud';
import { ProviderLedger } from '@waves/provider-ledger';
import { ProviderWeb } from '@waves.exchange/provider-web';
import { AppStore } from './AppStore';
import { ChildStore } from './ChildStore';
import { computed, makeObservable, observable, runInAction } from 'mobx';

export enum USER_TYPES {
    keeper = 'keeper',
    ledger = 'ledger',
    metamask = 'metamask',
    wx = 'wx'
}

export enum PROVIDER_TYPES {
    keeper = 'keeper',
    ledger = 'ledger',
    metamask = 'metamask',
    wx = 'wx',
    web = 'web',
    cloud = 'cloud'
}

export type USER_TYPES_VALUES = keyof typeof USER_TYPES;
export type PROVIDER_TYPES_VALUES = keyof typeof PROVIDER_TYPES;

export interface IUserData extends UserData {
    type: USER_TYPES_VALUES;
}

const canIUseLedger = () => {
    const isChrome = !!(window as any).chrome;
    const mb = new MobileDetect(window.navigator.userAgent);
    return isChrome && mb.phone() == null && mb.tablet() == null;
};

export class AuthStore extends ChildStore  {

    public signer: Signer;
    public user?: IUserData;

    private provider: Provider | null = null;
    private readonly signerWebUrl: string;
    private readonly signerCloudUrl: string;

    constructor(rs: AppStore) {
        super(rs);

        makeObservable(this, {
            user: observable,
            isAuthorized: computed
        });

        this.signer = new Signer({
            NODE_URL: rs.configStore.config.apiUrl.signerNode,
        });
        this.signerWebUrl = rs.configStore.config.apiUrl.signerWeb;
        this.signerCloudUrl = rs.configStore.config.apiUrl.signerCloud;
    }

    public login = (providerId?: PROVIDER_TYPES_VALUES): Promise<void> => {
        return this.setProvider(providerId)
            .then(() => {
                return this.provider?.login();
            })
            .then((userData) => {
                runInAction(() => {
                    this.user = {
                        ...userData,
                        type: this.getUserType(providerId),
                    };
                });
            });
    };

    public logout(): Promise<void> {
        if (this.provider) {
            return this.provider?.logout()
                .then(() => {
                    runInAction(() => {
                        this.user = undefined;
                    });
                });
        } else {
            return Promise.resolve();
        }
    };

    public get isAuthorized(): boolean {
        return !!this.user;
    }

    private async setProvider(providerId?: PROVIDER_TYPES_VALUES): Promise<void> {
        await this.checkDevice(providerId);
        switch (providerId) {
            case PROVIDER_TYPES.web:
                this.provider = new ProviderWeb(this.signerWebUrl, true);
                break;

            case PROVIDER_TYPES.cloud:
                this.provider = new ProviderCloud(this.signerCloudUrl, true);
                break;

            case PROVIDER_TYPES.ledger:
                this.provider = new ProviderLedger();
                break;

            case PROVIDER_TYPES.keeper:
                this.provider = new ProviderKeeper();
                break;

            default:
                this.provider = new ProviderWeb();
        }

        return this.signer.setProvider(this.provider);
    }

    private checkDevice(providerId?: PROVIDER_TYPES_VALUES): Promise<void> {
        if (providerId === PROVIDER_TYPES.metamask) {
            return (window as any).Metamask // todo check
                ? Promise.resolve()
                : Promise.reject(new Error(`${providerId} is not installed`));
        } else if (providerId === PROVIDER_TYPES.keeper) {
            return window.WavesKeeper
                ? Promise.resolve()
                : Promise.reject(new Error(`${providerId} is not installed`));
        } else if (providerId === PROVIDER_TYPES.ledger) {
            return canIUseLedger()
                ? Promise.resolve()
                : Promise.reject(new Error(`${providerId} is not installed`));
        } else {
            return Promise.resolve();
        }
    }

    private getUserType(providerId?: PROVIDER_TYPES_VALUES): USER_TYPES_VALUES {
        switch (providerId) {
            case null:
                return null;
            case PROVIDER_TYPES.keeper:
                return USER_TYPES.keeper;
            case PROVIDER_TYPES.metamask:
                return USER_TYPES.metamask;
            default:
                return USER_TYPES.wx;
        }
    }
}
