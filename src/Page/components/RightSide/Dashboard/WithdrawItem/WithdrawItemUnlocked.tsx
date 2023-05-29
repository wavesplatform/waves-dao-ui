import { useCallback } from 'react';
import { Box, Flex } from '@waves.exchange/wx-react-uikit';
import { Text } from 'uikit';
import { Trans } from '@waves/ui-translator';
import { Button } from 'uikit';
import { MODAL_NAMES } from '../../../../../components/ModalContainer/MODAL_NAMES';
import { modalManager } from '../../../../../services/modalManager';
import { InUsdText } from '../../../../../components/utilComponents/inUsdText';
import { TWithdrawItem } from './WithdrawItem';

export const WithdrawItemUnlocked: React.FC<TWithdrawItem> = ({ baseTokenAmount, lpAmount, equil }) => {
    const handleClickButton = useCallback(() => {
        modalManager.openModal(MODAL_NAMES.getWaves);
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
            borderColor={'wdpositive'}
        >
            <Box sx={{ pr: ['0', '12px'], mb: ['8px', '0'] }}>
                <Text
                    as="div"
                    variant="text2"
                    color="wdpositive"
                    mb="8px"
                    textAlign={['center', 'initial']}
                >
                    <Trans i18key="wavesUnlocked" />
                </Text>

                <Text
                    as="div"
                    variant="text2"
                    color="wdtextsec"
                    textAlign={['center', 'initial']}
                >
                    <Trans i18key="withdraw" />
                </Text>
                <Flex
                    alignItems="center"
                    justifyContent={['center', 'initial']}
                >
                    <Text as="div" variant="text1" color="text" mr="4px">
                        {baseTokenAmount.getTokens().toFormat()}
                    </Text>
                    <Text variant="text2" color="wdtextsec">
                        {baseTokenAmount.asset.displayName}
                        {equil ? (
                            <InUsdText
                                usd={equil}
                                decimals={2}
                                variant="text2"
                                color="wdtextsec"
                                ml="4px"
                            />
                        ) : null}
                    </Text>
                </Flex>
                <Flex
                    alignItems="center"
                    justifyContent={['center', 'initial']}
                >
                    <Text as="div" variant="text2" color="text" mr="4px">
                        {`=${lpAmount.getTokens().toFormat()}`}
                    </Text>
                    <Text variant="text2" color="wdtextsec">
                        {lpAmount.asset.displayName}
                    </Text>
                </Flex>
            </Box>
            <Button
                variant={'success'}
                sx={{
                    whiteSpace: 'nowrap',
                    display: 'flex',
                    alignItems: 'center',
                }}
                onClick={handleClickButton}
            >
                <Trans i18key={'get'} />
            </Button>
        </Flex>
    );
};

WithdrawItemUnlocked.displayName = 'WithdrawItemUnlocked';