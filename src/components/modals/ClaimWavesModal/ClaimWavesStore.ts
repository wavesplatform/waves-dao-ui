import { InvokeScriptCall, InvokeScriptPayment } from '@waves/ts-types';
import { AppStore } from '../../../stores/AppStore';
import { IUserData } from '../../../stores/AuthStore';
import { BaseFormStore } from '../../../stores/utils/BaseFormStore';

export class ClaimWavesStore extends BaseFormStore {
    public user: IUserData;

    constructor(rs: AppStore) {
        super(rs);
        this.user = rs.authStore.user;
    }

    public get tx(): {
        call: InvokeScriptCall<string | number> | null;
        payment: Array<InvokeScriptPayment<string | number>> | null;
    } {
        return {
            call: {
                function: 'claimLP',
                args: [{ type: 'string', value: this.user?.address }],
            },
            payment: [],
        };
    }

    public invoke = (): void => {
        this.sendTransaction(() => this.rs.providerStore.sendInvoke(this.tx));
    };
}
