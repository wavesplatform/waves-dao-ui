import React, { useCallback } from 'react';
import { Box, Flex } from '@waves.exchange/wx-react-uikit';
import { Text } from 'uikit';
import { Trans } from '@waves/ui-translator';
import { Button } from 'uikit';
import { MODAL_NAMES } from '../../../../../components/ModalContainer/MODAL_NAMES';
import { modalManager } from '../../../../../services/modalManager';
import { InUsdText } from '../../../../../components/utilComponents/inUsdText';
import { Money } from '@waves/data-entities';
import BigNumber from '@waves/bignumber';

export type TWithdrawItem = {
    lpAmount: Money;
    withdrawTxId?: string;
    baseTokenAmount?: Money;
    equal?: BigNumber;
};

export const WithdrawItemLocked: React.FC<TWithdrawItem> = ({
    lpAmount,
    equal,
    withdrawTxId,
}) => {
    const handleClickButton = useCallback(() => {
        modalManager.openModal(MODAL_NAMES.cancelWithdrawal, {
            withdrawTxId,
            lpAmount,
        });
    }, []);

    return (
        <Flex
            px="20px"
            py="20px"
            backgroundColor="wdbgsec"
            justifyContent="space-between"
            flexDirection={['column', 'row']}
            alignItems="center"
            mb="4px"
            borderLeft="3px solid"
            borderColor={'wdmainsec'}
        >
            <Box sx={{ pr: ['0', '12px'], mb: ['8px', '0'] }}>
                <Text
                    as="div"
                    variant="text2"
                    color="wdtextsec"
                    textAlign={['center', 'initial']}
                >
                    <Trans i18key="withdraw" />
                </Text>

                <Text
                    as="div"
                    variant="text2"
                    color="text"
                    textAlign={['center', 'initial']}
                >
                    <Trans
                        i18key="willBeUnlocked"
                        i18Params={{ assetName: 'WAVES' }}
                    />
                </Text>

                <Flex
                    alignItems="center"
                    justifyContent={['center', 'initial']}
                >
                    <Text as="div" variant="text1" color="text" mr="4px">
                        {lpAmount.getTokens().toFormat()}
                    </Text>
                    <Text variant="text2" color="wdtextsec">
                        {lpAmount.asset.displayName}
                        {equal ? (
                            <InUsdText
                                usd={equal}
                                decimals={2}
                                variant="text2"
                                color="wdtextsec"
                                ml="4px"
                            />
                        ) : null}
                    </Text>
                </Flex>
            </Box>
            <Button
                variant={'transparent'}
                sx={{
                    whiteSpace: 'nowrap',
                    px: '18px !important',
                    display: 'flex',
                    alignItems: 'center',
                }}
                onClick={handleClickButton}
            >
                <Trans i18key={'cancelWithdrawal'} />
            </Button>
        </Flex>
    );
};

WithdrawItemLocked.displayName = 'WithdrawItemLocked';
