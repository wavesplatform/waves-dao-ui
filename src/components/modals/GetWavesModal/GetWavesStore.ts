import { InvokeScriptCall, InvokeScriptPayment } from '@waves/ts-types';
import { AppStore } from '../../../stores/AppStore';
import { IUserData } from '../../../stores/AuthStore';
import { BaseFormStore } from '../../../stores/utils/BaseFormStore';
import { modalManager } from '../../../services/modalManager';
import { MODAL_NAMES } from '../../ModalContainer/MODAL_NAMES';

export class GetWavesStore extends BaseFormStore {
    public user: IUserData;
    public claimTxId: string;

    constructor(rs: AppStore, claimTxId: string) {
        super(rs);
        this.user = rs.authStore.user;
        this.claimTxId = claimTxId;
    }

    public get tx(): {
        call: InvokeScriptCall<string | number> | null;
        payment: Array<InvokeScriptPayment<string | number>> | null;
    } {
        return {
            call: {
                function: 'claimWaves',
                args: [{ type: 'string', value: this.claimTxId }],
            },
            payment: [],
        };
    }

    public invoke = (): void => {
        this.sendTransaction(() =>
            this.rs.providerStore.sendInvoke(this.tx)
        ).then(() => {
            this.reset();
            modalManager.closeModal(MODAL_NAMES.getWaves, 'close');
        });
    };
}
