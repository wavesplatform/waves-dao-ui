import { Signer, Provider, UserData } from '@waves/signer';
import { ProviderKeeper } from '@waves/provider-keeper';
import { ProviderCloud } from '@waves.exchange/provider-cloud';
import { ProviderLedger } from '@waves/provider-ledger';
import { ProviderWeb } from '@waves.exchange/provider-web';


export type TProvider = 'web' | 'cloud' | 'ledger' | 'keeper'

interface AuthServiceParams {
    nodeUrl: string;
    signerWebUrl: string;
    signerCloudUrl: string;
}

export class AuthService {

    public signer: Signer;
    public user?: UserData;

    private provider: Provider | null = null;
    private readonly signerWebUrl: string;
    private readonly signerCloudUrl: string;

    constructor({
        nodeUrl,
        signerWebUrl,
        signerCloudUrl
    }: AuthServiceParams) {
        this.signer = new Signer({
            NODE_URL: nodeUrl,
        });
        this.signerWebUrl = signerWebUrl;
        this.signerCloudUrl = signerCloudUrl;
    }

    public login(providerId?: TProvider): Promise<void> {
        return this.setProvider(providerId)
            .then(() => this.provider?.login())
            .then(userData => {
                this.user = userData;
            });
    }

    public get isAuthorized(): boolean {
        return !!this.user;
    }

    private setProvider(providerId?: TProvider): Promise<void> {
        switch (providerId) {
            case 'web':
                this.provider = new ProviderWeb(this.signerWebUrl, true);
                break;

            case 'cloud':
                this.provider = new ProviderCloud(this.signerCloudUrl, true);
                break;

            case 'ledger':
                this.provider = new ProviderLedger();
                break;

            case 'keeper':
                this.provider = new ProviderKeeper();
                break;

            default:
                this.provider = new ProviderWeb();
        }

        return this.signer.setProvider(this.provider);
    }
}
