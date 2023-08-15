import { IWithdrawalDataPlain } from './index';
import { parseSearchStr } from '../../utils/parseContractData/parseContractData.ts';

export const filterObjectUserContract = ({ contractAddress, userAddress }) => {
    return {
        filter: {
            or: [
                {
                    and: [
                        {
                            address: {
                                operation: 'eq',
                                value: contractAddress,
                            },
                        },
                        {
                            or: [
                                {
                                    key: {
                                        operation: 'eq',
                                        value: `%s%s__available__${userAddress}`,
                                    },
                                },
                                {
                                    key: {
                                        operation: 'eq',
                                        value: `%s%s__claimed__${userAddress}`,
                                    },
                                },
                            ],
                        },
                    ],
                },
                {
                    in: {
                        //%s%s%s__withdrawal__<userAddress>__<txId>
                        properties: [
                            { address: {} },
                            {
                                fragment: {
                                    position: 0,
                                    type: 'string',
                                },
                            },
                            {
                                fragment: {
                                    position: 1,
                                    type: 'string',
                                },
                            },
                        ],
                        values: [[contractAddress, 'withdrawal', userAddress]],
                    },
                },
            ],
        },
    };
};

export const filterObjectCommonContract = ({ contractAddress }) => {
    return {
        filter: {
            or: [
                {
                    and: [
                        {
                            address: {
                                operation: 'eq',
                                value: contractAddress,
                            },
                        },
                        {
                            or: [
                                {
                                    key: {
                                        operation: 'eq',
                                        value: '%s__periodLength',
                                    },
                                },
                                {
                                    key: {
                                        operation: 'eq',
                                        value: '%s__currentPeriod',
                                    },
                                },
                                {
                                    key: {
                                        operation: 'eq',
                                        value: '%s%s__invested__WAVES',
                                    },
                                },
                                {
                                    key: {
                                        operation: 'eq',
                                        value: '%s%s__donated__WAVES',
                                    },
                                },
                                {
                                    key: {
                                        operation: 'eq',
                                        value: '%s__heightForDeposit',
                                    },
                                },
                            ],
                        },
                    ],
                },
                {
                    in: {
                        properties: [
                            { address: {} },
                            {
                                fragment: {
                                    position: 0,
                                    type: 'string',
                                },
                            },
                        ],
                        values: [[contractAddress, 'price']],
                    },
                },
                {
                    in: {
                        properties: [
                            { address: {} },
                            {
                                fragment: {
                                    position: 0,
                                    type: 'string',
                                },
                            },
                        ],
                        values: [[contractAddress, 'startHeight']],
                    },
                },
            ],
        },
    };
};

export function parseClaimCollateral(value: string): IWithdrawalDataPlain {
    // Example:
    // '%d%s%s__23319139__EMAMLxDnv3xiz8RXg8Btj33jcEw3wLczL3JKYYmuubpc:25FEqEjRkqK6yCkiT7Lz6SAYz7gUFCtxfCChnrVFD5AT:A7Ksh7fXyqm1KhKAiK3bAB2aiPSitQQF6v1pyu9SS3FR__100000000000:1000000000:1000000000'
    const parsedData =  parseSearchStr<{
        wavesEq: string;
        assetIds: string;
        values: string;
    }>(value, ['wavesEq', 'assetIds', 'values'])
    return ({
        wavesEq: parsedData.wavesEq,
        assetIds: parsedData.assetIds.split(':'),
        values: parsedData.values.split(':'),
    });
}
