import { Money } from '@waves/data-entities';

export interface IWithdrawal {
    status: string;
    lpAssetAmount: Money;
    targetPeriod: number;
    claimTxId: string;
}

export interface IContractData {
    startHeight: number;
    periodLength: number;
    currentPeriod: number;
    investedWaves: Money;
    investedLp: Money;
    availableToClaim: Money;
    claimed: Money;
    withdraws?: IWithdrawal[];
}

export type TPriceData = Record<string, Money>;
