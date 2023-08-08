import { Money } from '@waves/data-entities';

export interface IWithdrawal {
    status: 'FINISHED' | 'PENDING';
    lpAssetAmount: Money;
    targetPeriod: number;
    claimTxId: string;
    withdrawTxId: string;
}

export interface ICommonContractData {
    prices: Record<string, number>;
    startHeights: Record<string, number>;
    periodLength: number;
    currentPeriod: number;
    investedWaves: Money;
    donatedWaves: Money;
}

export interface IUserContractData {
    availableToClaim: Money;
    claimed: Money;
    withdraws?: IWithdrawal[];
}

export type TPriceData = Record<string, Money>;

export interface IWithdrawalData {

}

export type TWithdrawalsData = Record<string, IWithdrawalData>
