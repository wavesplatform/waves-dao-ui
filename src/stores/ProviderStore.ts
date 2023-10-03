import { Signer, SignerInvokeTx } from '@waves/signer';
import { AppStore } from './AppStore';
import { ChildStore } from './ChildStore';
import { InvokeScriptCall, InvokeScriptPayment } from '@waves/ts-types';
import { normalizeTxTimestamp } from '../utils';
import { USER_TYPES } from './AuthStore.ts';

export class ProviderStore extends ChildStore {
    public signer: Signer;

    private invokeTxCommonParams: Pick<
        SignerInvokeTx,
        'dApp' | 'feeAssetId' | 'fee'
    >;

    constructor(rs: AppStore) {
        super(rs);
        this.signer = rs.authStore.signer;

        this.invokeTxCommonParams = {
            dApp: rs.configStore.config.contracts.factory,
            fee: 500000,
            feeAssetId: null,
        };
    }

    public sendInvoke({
        call,
        payment = [],
    }: {
        call: InvokeScriptCall<string | number> | null;
        payment: Array<InvokeScriptPayment<string | number>> | null;
    }): Promise<any> {
        return this.signer.login().then((user) => {
            if (user.address !== this.rs.authStore.user?.address) {
                throw new Error('Your address is not equal to login address.');
            }
            return this.signer
                .invoke(
                    this.rs.authStore.user?.type === USER_TYPES.ledger ?
                        {
                            ...this.invokeTxCommonParams,
                            call,
                            payment,
                        } :
                        normalizeTxTimestamp({
                            ...this.invokeTxCommonParams,
                            call,
                            payment,
                            timestamp: Date.now(),
                        })
                )
                .broadcast();
        });
    }
}
