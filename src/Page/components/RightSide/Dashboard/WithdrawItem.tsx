import { FC, memo } from 'react';
import { Box, Flex } from '@waves.exchange/wx-react-uikit';
import { Text } from '../../../../uikit/Text/Text';
import { Trans } from '@waves/ui-translator';
import { Button } from '../../../../uikit/Button/Button';
import { Money } from '@waves/data-entities';
import BigNumber from '@waves/bignumber';
import { InUsdText } from '../../../../components/InUsdText';

export const WithdrawItem: FC<{
    lpAmount: Money;
    equil?: BigNumber;
    baseTokenAmount: Money;
}> = memo(({ baseTokenAmount, lpAmount, equil }) => {
    const unlocked = !!baseTokenAmount;
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
            borderColor={unlocked ? 'wdpositive' : 'wdmainsec'}
        >
            <Box sx={{ pr: ['0', '12px'], mb: ['8px', '0'] }}>
                {unlocked
                    ? (
                        <Text
                            as="div"
                            variant="text2"
                            color="wdpositive"
                            mb="8px"
                            textAlign={['center', 'initial']}
                        >
                            <Trans i18key="wavesUnlocked" />
                        </Text>
                    )
                    : null}
                <Text
                    as="div"
                    variant="text2"
                    color="wdtextsec"
                    textAlign={['center', 'initial']}
                >
                    <Trans i18key="withdraw" />
                </Text>
                {unlocked
                    ? null
                    : (
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
                    )}
                <Flex
                    alignItems="center"
                    justifyContent={['center', 'initial']}
                >
                    <Text as="div" variant="text1" color="text" mr="4px">
                        {unlocked
                            ? baseTokenAmount.getTokens().toFormat()
                            : lpAmount.getTokens().toFormat()}
                    </Text>
                    <Text variant="text2" color="wdtextsec">
                        {unlocked
                            ? baseTokenAmount.asset.displayName
                            : lpAmount.asset.displayName}
                        {equil
                            ? (
                                <InUsdText
                                    usd={equil}
                                    decimals={2}
                                    variant="text2"
                                    color="wdtextsec"
                                    ml="4px"
                                />
                            )
                            : null}
                    </Text>
                </Flex>
                {unlocked
                    ? (
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
                    )
                    : null}
            </Box>
            <Button
                variant={unlocked ? 'success' : 'transparent'}
                sx={{
                    whiteSpace: 'nowrap',
                    px: unlocked ? null : '18px !important',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Trans i18key={unlocked ? 'get' : 'cancelWithdrawal'} />
            </Button>
        </Flex>
    );
});

WithdrawItem.displayName = 'WithdrawItem';
