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

export const filterObjectCommonContract = ({ contractAddress, xtnId }) => {
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
                                        value: `%s%s__invested__${xtnId}`,
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
