import { FC, memo } from 'react';
import { Box, Flex } from '@waves.exchange/wx-react-uikit';
import { Text } from 'uikit';
import { Trans } from '@waves/ui-translator';
import { Button } from 'uikit';
import wavesLpUrl from '/src/img/waveslp.svg';
import { WithdrawItem } from './WithdrawItem/WithdrawItem';
import BigNumber from '@waves/bignumber';
import { wavesAsset } from '../../../../services/assets';
import { Asset, Money } from '@waves/data-entities';
import { InUsdText } from '../../../../components/utilComponents/inUsdText';

export const LpBalance: FC = memo(() => {
    const wavesdlpAsset = { ...wavesAsset, displayName: 'WAVESDLP' };

    return (
        <Box sx={{ borderRadius: '12px', overflow: 'hidden' }}>
            <Flex
                px="20px"
                py="20px"
                backgroundColor="wdsurfbg"
                justifyContent="space-between"
                flexDirection={['column', 'row']}
                alignItems="center"
            >
                <Flex
                    sx={{ pr: '8px', mb: ['8px', '0'] }}
                    textAlign={['center', 'initial']}
                    alignItems="center"
                    flexDirection={['column', 'row']}
                >
                    <Box
                        width="48px"
                        height="48px"
                        backgroundImage={`url(${wavesLpUrl})`}
                        sx={{
                            mr: [null, '12px'],
                            mb: ['12px', '0'],
                        }}
                    />
                    <Box>
                        <Text as="div" variant="text2" color="wdtextsec">
                            <Trans
                                i18key="assetBalance"
                                i18Params={{ assetName: 'WAVESDLP' }}
                            />
                        </Text>
                        <Flex
                            alignItems="center"
                            justifyContent={['center', 'initial']}
                        >
                            <Text
                                as="div"
                                variant="text1"
                                color="text"
                                mr="4px"
                            >
                                {'68.200351'}
                            </Text>
                            <Text variant="text2" color="wdtextsec">
                                {'WAVESDLP'}
                            </Text>
                        </Flex>
                        <Flex
                            alignItems="center"
                            justifyContent={['center', 'initial']}
                        >
                            <Text
                                as="div"
                                variant="text2"
                                color="text"
                                mr="4px"
                            >
                                {'~179.4567'}
                            </Text>
                            <Text variant="text2" color="wdtextsec">
                                {'WAVES'}
                            </Text>
                            <InUsdText
                                usd={new BigNumber(250)}
                                decimals={2}
                                variant="text2"
                                color="wdtextsec"
                                ml="4px"
                            />
                        </Flex>
                    </Box>
                </Flex>
                <Button variant="primary">
                    <Trans i18key="withdraw" />
                </Button>
            </Flex>
            <WithdrawItem
                baseTokenAmount={new Money(0, wavesAsset).cloneWithTokens(250)}
                lpAmount={new Money(0, wavesdlpAsset as Asset).cloneWithTokens(
                    69
                )}
                equil={new BigNumber(250)}
            />
            <WithdrawItem
                baseTokenAmount={undefined}
                lpAmount={new Money(0, wavesdlpAsset as Asset).cloneWithTokens(
                    69
                )}
            />
        </Box>
    );
});

LpBalance.displayName = 'LpBalance';
