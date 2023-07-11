import { InvokeScriptCall, InvokeScriptPayment } from '@waves/ts-types';
import { AppStore } from '../../../stores/AppStore';
import { IUserData } from '../../../stores/AuthStore';
import { BaseFormStore } from '../../../stores/utils/BaseFormStore';
import { modalManager } from '../../../services/modalManager';
import { MODAL_NAMES } from '../../ModalContainer/MODAL_NAMES';

export class ClaimWavesDaoLpStore extends BaseFormStore {
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
                args: [],
            },
            payment: [],
        };
    }

    public invoke = (): void => {
        this.sendTransaction(() =>
            this.rs.providerStore.sendInvoke(this.tx)
        ).then(() => {
            this.reset();
            modalManager.closeModal(MODAL_NAMES.claimWavesDaoLp, 'close');
        });
    };
}
