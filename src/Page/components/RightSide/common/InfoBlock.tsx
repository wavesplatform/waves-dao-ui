import { FC, useContext } from 'react';
import { Box, Flex } from '@waves.exchange/wx-react-uikit';
import { Trans } from '@waves/ui-translator';
import { Text } from '../../../../uikit/Text/Text';
import { observer } from 'mobx-react-lite';
import { AppStoreContext } from '../../../../App';
import { getTimeUnitStr } from '../../../../utils/BlocksToTime/helpers';
import { BlocksToTime } from '../../../../utils/BlocksToTime';

export const InfoBlock: FC = observer(() => {
    const { contractDataStore, ratesStore } = useContext(AppStoreContext);

    return (
        <Box sx={{ mb: '32px' }}>
            <Flex
                alignItems={[null, 'center']}
                mb="16px"
                flexDirection={['column', 'row']}
            >
                <Flex mb="4px">
                    <Text as="div" color="wdtextsec" variant="text1" mr="4px">
                        <Trans
                            i18key="tokenPrice"
                            i18Params={{ assetName: 'WAVES' }}
                        />
                    </Text>
                    <Text as="div" color="text" variant="text1">
                        {`$${ratesStore.getRateWaves.toFormat(2)}`}
                    </Text>
                </Flex>
                <Box
                    width="6px"
                    height="6px"
                    sx={{
                        borderRadius: '50%',
                        mx: '16px',
                        backgroundColor: 'wdmain',
                        display: ['none', 'block'],
                    }}
                />
                <Flex mb="4px">
                    <Text as="div" color="wdtextsec" variant="text1" mr="4px">
                        <Trans
                            i18key="lpPrice"
                            i18Params={{ assetName: 'WAVESDLP' }}
                        />
                    </Text>
                    <Text as="div" color="text" variant="text1" mr="4px">
                        {`${contractDataStore.getCurrentPriceWaves.toFormat(
                            2
                        )} WAVES`}
                    </Text>
                    <Text as="div" color="wdtextsec" variant="text1">
                        {`($${ratesStore.getCurrentPriceWavesUsd.toFormat(2)})`}
                    </Text>
                </Flex>
                <Box
                    width="6px"
                    height="6px"
                    sx={{
                        borderRadius: '50%',
                        mx: '16px',
                        backgroundColor: 'wdmain',
                        display: ['none', 'block'],
                    }}
                />
                <Flex mb="4px">
                    <Text as="div" color="wdtextsec" variant="text1" mr="4px">
                        <Trans i18key="rate" />
                    </Text>
                    <Text as="div" color="text" variant="text1" mr="4px">
                        {`1 WAVES = ${contractDataStore.getCurrentPriceWavesLp.toFormat()} WAVESDLP`}
                    </Text>
                </Flex>
            </Flex>
            <Flex flexWrap="wrap">
                <Text
                    as="div"
                    color="wdtextsec"
                    variant="text1"
                    mr="4px"
                    sx={{
                        span: {
                            whiteSpace: 'nowrap',
                            color: 'text',
                        },
                    }}
                >
                    {contractDataStore.finalizingKPI <= 0}
                    <Trans
                        i18key={
                            contractDataStore.finalizingKPI <= 0
                                ? 'kpiPeriodFinalizing'
                                : 'kpiPeriod'
                        }
                        i18Params={{
                            period: BlocksToTime({
                                blocks:
                                    contractDataStore.finalizingKPI > 0
                                        ? contractDataStore.finalizingKPI
                                        : 1,
                                options: { shortFormat: true },
                            }),
                            blocks: getTimeUnitStr({
                                value:
                                    contractDataStore.finalizingKPI > 0
                                        ? contractDataStore.finalizingKPI
                                        : 1,
                                key: 'blocks',
                                shortFormat: false,
                            }),
                        }}
                    />
                </Text>
            </Flex>
        </Box>
    );
});

InfoBlock.displayName = 'InfoBlock';
