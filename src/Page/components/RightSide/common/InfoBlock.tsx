import { FC, useContext } from 'react';
import { Box, Flex } from '@waves.exchange/wx-react-uikit';
import { Trans } from '@waves/ui-translator';
import { Text } from 'uikit';
import { observer } from 'mobx-react-lite';
import { AppStoreContext } from '../../../../App';
import { getTimeUnitStr } from '../../../../utils/BlocksToTime/helpers';
import { BlocksToTime } from '../../../../utils/BlocksToTime';
import { InUsdText } from '../../../../components/utilComponents/inUsdText';

export const InfoBlock: FC = observer(() => {
    const {
        contractDataStore,
        ratesStore,
        assetsStore,
        contractBalanceStore,
    } =
        useContext(AppStoreContext);

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
                    <InUsdText
                        usd={ratesStore.currentPriceWavesInUsd}
                        decimals={2}
                        variant="text1"
                        color="text"
                        as="div"
                        hasBrackets={false}
                    />
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
                            i18Params={{ assetName: assetsStore.LPToken?.displayName }}
                        />
                    </Text>
                    <InUsdText
                        usd={contractBalanceStore.currentPriceLpInUsd}
                        decimals={2}
                        variant="text1"
                        color="text"
                        as="div"
                        hasBrackets={false}
                    />
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
