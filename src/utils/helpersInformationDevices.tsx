export enum DEVICES_FULL_NAMES {
    MetaMask = 'MetaMask',
    KeeperWallet = 'Keeper Wallet',
    Ledger = 'Ledger',
}

export type TYPE_DEVICES_NAMES =
    | DEVICES_FULL_NAMES.KeeperWallet
    | DEVICES_FULL_NAMES.Ledger
    | DEVICES_FULL_NAMES.MetaMask;

export const getMetamaskDeviceName = (): DEVICES_FULL_NAMES.MetaMask => {
    return DEVICES_FULL_NAMES.MetaMask;
};

export const getKeeperWalletDeviceName =
    (): DEVICES_FULL_NAMES.KeeperWallet => {
        return DEVICES_FULL_NAMES.KeeperWallet;
    };

export const getLedgerDeviceName = (): DEVICES_FULL_NAMES.Ledger => {
    return DEVICES_FULL_NAMES.Ledger;
};
