import { Money } from '@waves/data-entities';
import { ITransProps } from '@waves/ui-translator';
import { action, computed, makeObservable, observable } from 'mobx';
import { isEnoughMoney } from '../../utils';
import { BalanceStore } from '../balance/BalanceStore';
import { wavesAsset } from '../../services/assets';
import { AppStore } from '../AppStore';
import {
    TYPE_DEVICES_NAMES,
    getDevice,
    isAvailableDevice,
} from '../../utils/helpersInformationDevices';
import { isNumber } from 'ts-utils';

const makeErrorTest = (regex: RegExp) => (e: Error | string) => {
    const msg = typeof e === 'string' ? e : e.message;
    return regex.test(msg);
};

export const isUserRejection = makeErrorTest(
    /user rejection|window was closed by user|user denied message/im
);
export const isWrongChain = makeErrorTest(
    /not equals keeper connect|invalid connect options./im
);
export const isAnotherAccount = makeErrorTest(
    /your address is not equal to login address./im
);

export enum FORM_STATE {
    'pending' = 'pending',
    'error' = 'error',
    'initial' = 'initial',
}

export type FORM_STATE_VALUES = keyof typeof FORM_STATE;

export class BaseFormStore {
    public formState: FORM_STATE = FORM_STATE.initial;
    public fee: Money;
    public signError: ITransProps;
    public isConfirmClicked = false;
    public balanceStore: BalanceStore;
    public rs: AppStore;

    constructor(rs: AppStore) {
        this.rs = rs;
        this.balanceStore = rs.balanceStore;
        this.fee = new Money(500000, wavesAsset);
        makeObservable(this, {
            formState: observable,
            isConfirmClicked: observable,
            isRetry: computed,
            isPending: computed,
            isEnoughMoney: computed,
            isDevices: computed,
            signError: observable,
            updateFormState: action,
            sendTransaction: action,
            updateSignError: action,
        });
    }

    public get isEnoughMoney(): boolean {
        if (!this.fee || !this.balanceStore.balances) {
            return false;
        }
        return isEnoughMoney(this.fee, this.balanceStore.balances);
    }

    public get isRetry(): boolean {
        return this.isConfirmClicked && this.formState === FORM_STATE.error;
    }

    public get isDevices(): boolean {
        return isAvailableDevice(this.rs.authStore.user?.type);
    }

    public get currentDevice(): TYPE_DEVICES_NAMES {
        return getDevice(this.rs.authStore.user?.type);
    }

    public get isPending(): boolean {
        return this.formState === FORM_STATE.pending;
    }

    public get activeErrors(): Array<ITransProps> {
        const errors = [];
        if (this.isConfirmClicked && !this.isEnoughMoney) {
            errors.push({ i18key: 'noEnoughFee' });
        }
        if (this.signError) {
            errors.push(this.signError);
        }
        return errors;
    }

    public updateFormState(state: FORM_STATE) {
        this.formState = state;
    }

    public updateSignError(error: ITransProps): void {
        this.signError = error;
    }

    public updateIsConfirmClicked(isConfirmClicked: boolean): void {
        this.isConfirmClicked = isConfirmClicked;
    }

    public reset(): void {
        this.updateIsConfirmClicked(false);
        this.updateSignError(undefined);
        this.updateFormState(FORM_STATE.initial);
    }

    public sendTransaction(promise: () => Promise<any>): any {
        if(this.isPending){
            return;
        }

        this.updateFormState(FORM_STATE.pending);
        this.updateIsConfirmClicked(true);

        if (!this.isEnoughMoney) {
            this.updateFormState(FORM_STATE.error);
            return;
        }

        return promise()
            .then((data) => {
                this.reset();
                return data;
            })
            .catch((e) => {
                if (isUserRejection(e)) {
                    this.updateSignError({
                        i18key: `rejectedByUser${
                            this.isDevices ? 'Device' : ''
                        }`,
                        i18Params: { device: this.currentDevice },
                    });
                } else if (isWrongChain(e)) {
                    this.updateSignError({
                        i18key: 'wrongNetworkError',
                        i18Params: { device: this.currentDevice },
                    });
                } else if (isAnotherAccount(e)) {
                    this.updateSignError({
                        i18key: 'wrongUser',
                        i18Params: { device: this.currentDevice },
                    });
                } else if (e && e?.error && isNumber(e?.error)) {
                    this.updateSignError({
                        i18key: 'somethingWrongWithNode',
                        i18Params: { code: e.error },
                    });
                } else {
                    this.updateSignError({
                        i18key: 'somethingWrong',
                    });
                }

                this.updateFormState(FORM_STATE.error);
                return null;
            });
    }
}
