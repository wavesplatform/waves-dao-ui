import { Money } from '@waves/data-entities';

export interface IWithdrawal {
    status: string;
    lpAssetAmount: Money;
    targetPeriod: number;
    claimTxId: string;
}

export interface ICommonContractData {
    startHeight: number;
    periodLength: number;
    currentPeriod: number;
    investedWaves: Money;
    investedLp: Money;
}

export interface IUserContractData {
    availableToClaim: Money;
    claimed: Money;
    withdraws?: IWithdrawal[];
}

export type TPriceData = Record<string, Money>;
