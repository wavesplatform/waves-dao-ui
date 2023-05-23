import { Signer, Provider, UserData } from '@waves/signer';
import MobileDetect from 'mobile-detect';
import { ProviderKeeper } from '@waves/provider-keeper';
import { ProviderCloud } from '@waves.exchange/provider-cloud';
import { ProviderLedger } from '@waves/provider-ledger';
import { ProviderWeb } from '@waves.exchange/provider-web';
import { AppStore } from './AppStore';
import { ChildStore } from './ChildStore';
import { computed, makeObservable, observable, runInAction } from 'mobx';

export type TProvider = 'web' | 'cloud' | 'ledger' | 'keeper' | 'metamask';
export type TUserType = 'keeper' | 'metamask' | 'wx';
export interface IUserData extends UserData {
    type: TUserType;
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
            NODE_URL: rs.configStore.config.apiUrl.node,
        });
        this.signerWebUrl = rs.configStore.config.apiUrl.signerWeb;
        this.signerCloudUrl = rs.configStore.config.apiUrl.signerCloud;
    }

    public login = (providerId?: TProvider): Promise<void> => {
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

    private async setProvider(providerId?: TProvider): Promise<void> {
        await this.checkDevice(providerId);
        switch (providerId) {
            case "web":
                this.provider = new ProviderWeb(this.signerWebUrl, true);
                break;

            case "cloud":
                this.provider = new ProviderCloud(this.signerCloudUrl, true);
                break;

            case "ledger":
                this.provider = new ProviderLedger();
                break;

            case "keeper":
                this.provider = new ProviderKeeper();
                break;

            default:
                this.provider = new ProviderWeb();
        }

        return this.signer.setProvider(this.provider);
    }

    private checkDevice(providerId?: TProvider): Promise<void> {
        if (providerId === "metamask") {
            return (window as any).Metamask // todo check
                ? Promise.resolve()
                : Promise.reject(new Error(`${providerId} is not installed`));
        } else if (providerId === "keeper") {
            return window.WavesKeeper
                ? Promise.resolve()
                : Promise.reject(new Error(`${providerId} is not installed`));
        } else if (providerId === "ledger") {
            return canIUseLedger()
                ? Promise.resolve()
                : Promise.reject(new Error(`${providerId} is not installed`));
        } else {
            return Promise.resolve();
        }
    }

    private getUserType(providerId?: TProvider): TUserType {
        switch (providerId) {
            case null:
                return null;
            case 'keeper':
                return 'keeper';
            case 'metamask':
                return 'metamask';
            default:
                return 'wx';
        }
    }
}
