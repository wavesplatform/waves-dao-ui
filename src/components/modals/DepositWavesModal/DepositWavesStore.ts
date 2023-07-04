import { InvokeScriptCall, InvokeScriptPayment } from '@waves/ts-types';
import {
    BaseInputFormStore,
    BaseInputFormStoreParams,
} from '../../../stores/utils/BaseInputFormStore';
import BigNumber from '@waves/bignumber';
import { modalManager } from '../../../services/modalManager';
import { MODAL_NAMES } from '../../ModalContainer/MODAL_NAMES';
import { Money } from '@waves/data-entities';

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
                args: [],
            },
            payment: [
                {
                    assetId: this.currentAmount.asset.id,
                    amount: this.currentAmount.getCoins().toNumber(),
                },
            ],
        };
    }

    public get receiveLp(): Money {
        return this.rs.contractDataStore.currentPriceWavesLp.cloneWithTokens(this.rs.contractDataStore.currentPriceWavesLp
            .getTokens()
            .mul(this.inputString || 0));
    }

    public invoke = () => {
        const inputResult = this.checkInput();
        if (!inputResult) {
            return;
        }
        this.sendTransaction(() =>
            this.rs.providerStore.sendInvoke(this.tx)
        ).then(() => {
            this.reset();
            modalManager.closeModal(MODAL_NAMES.depositWaves, 'close');
        });
    };
}
