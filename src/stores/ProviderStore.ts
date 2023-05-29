import { Signer, SignerInvokeTx } from '@waves/signer';
import { AppStore } from './AppStore';
import { ChildStore } from './ChildStore';
import { InvokeScriptCall, InvokeScriptPayment } from '@waves/ts-types';
import { normalizeTxTimestamp } from '../utils';

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
            dApp: '3N27HUMt4ddx2X7foQwZRmpFzg5PSzLrUgU',
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
        console.log(call, payment)
        return this.signer.login().then((user) => {
            if (user.address !== this.rs.authStore.user?.address) {
                throw new Error('Your address is not equal to login address.');
            }
            // TODO: this code for test invoke
            return this.signer
                .invoke({
                    dApp: '3N27HUMt4ddx2X7foQwZRmpFzg5PSzLrUgU',
                    call: {
                        function: 'tellme',
                        args: [
                            {
                                type: 'string',
                                value: 'Will?',
                            },
                        ],
                    },
                })
                .broadcast();
            // return this.signer
            // .invoke(
            //     normalizeTxTimestamp({
            //         ...this.invokeTxCommonParams,
            //         call,
            //         payment,
            //         timestamp: Date.now(),
            //     })
            // )
            // .broadcast();
        });
    }
}
