import { InvokeScriptCall, InvokeScriptPayment } from '@waves/ts-types';
import { BaseInputFormStore, BaseInputFormStoreParams } from '../../../stores/utils/BaseInputFormStore';


export class DepositWavesStore extends BaseInputFormStore {

    constructor(params: BaseInputFormStoreParams) {
        super(params);
    }

    public get tx(): {
        call: InvokeScriptCall<string | number> | null;
        payment: Array<InvokeScriptPayment<string | number>> | null;
        } {
        return {
            call: {
                function: 'invest',
                args: [{ type: 'string', value: this.rs.authStore.user?.address }],
            },
            payment: [{ assetId: this.currentAmount.asset.id, amount: this.currentAmount.getCoins().toNumber() }]
        };
    }

    invoke = () => {
        const inputResult = this.checkInput();
        if (!inputResult) {
            return;
        }
        this.sendTransaction(() => this.rs.providerStore.sendInvoke(this.tx));
    };

}
