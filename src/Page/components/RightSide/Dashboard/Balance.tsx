import { FC, useContext } from 'react';
import {
    AssetLogo,
    Box,
    ExternalLink,
    Flex,
    Tooltip,
} from '@waves.exchange/wx-react-uikit';
import { Text } from 'uikit';
import { Trans } from '@waves/ui-translator';
import { Button } from 'uikit';
import { observer } from 'mobx-react-lite';
import { AppStoreContext } from '../../../../App';
import { modalManager } from '../../../../services/modalManager';
import { MODAL_NAMES } from '../../../../components/ModalContainer/MODAL_NAMES';

const HEIGHT_FOR_DEPOSIT = 3_740_000; //todo get from contractDataStore

export const Balance: FC = observer(() => {
    const { balanceStore, contractDataStore, nodeHeightStore } = useContext(AppStoreContext);

    const handleDepositClick = () => {
        modalManager.openModal(MODAL_NAMES.depositWaves);
    };

    const depositState = (): 'available' | 'finalizing' | 'unavailable' => {
        if (contractDataStore.finalizingKPI <= 0) {
            return 'finalizing';
        }
        if (nodeHeightStore.heightData.data >= HEIGHT_FOR_DEPOSIT) {
            return 'unavailable';
        }
        return 'available';
    };

    return (
        <Flex
            px="20px"
            py="20px"
            backgroundColor="wdsurfbg"
            borderRadius="12px"
            justifyContent="space-between"
            flexDirection={['column', 'row']}
            alignItems="center"
            mb="12px"
        >
            <Flex
                sx={{ pr: '8px', mb: ['8px', '0'] }}
                textAlign={['center', 'initial']}
                alignItems="center"
                flexDirection={['column', 'row']}
            >
                <AssetLogo
                    logo={balanceStore.balances.WAVES?.asset.icon}
                    size={48}
                    mr={[null, '12px']}
                    mb={['12px', '0']}
                    sx={{ circle: { fill: '#121414' } }}
                />
                <Box>
                    <Text as="div" variant="text2" color="text">
                        <Trans
                            i18key="assetBalance"
                            i18Params={{
                                assetName:
                                    balanceStore.balances.WAVES?.asset
                                        .displayName,
                            }}
                        />
                    </Text>
                    <Flex>
                        <Text as="div" variant="text1" color="text" mr="4px">
                            {balanceStore.balances.WAVES?.balance
                                ?.getTokens()
                                .toFormat()}
                        </Text>
                        <Text variant="text1" color="wdtextsec">
                            {balanceStore.balances.WAVES?.asset.displayName}
                        </Text>
                    </Flex>
                </Box>
            </Flex>
            <Flex>
                <ExternalLink
                    href="https://wx.network/trading/spot/WAVES_USDT-ERC20"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <Button
                        minWidth='120px'
                        variant="transparent"
                        sx={{
                            whiteSpace: 'nowrap',
                            px: ['32px !important', '10px !important'],
                        }}
                    >
                        <Trans
                            i18key="getToken"
                            i18Params={{ assetName: 'WAVES' }}
                        />
                    </Button>
                </ExternalLink>
                {
                    depositState() === 'available' ?
                        <Button
                            minWidth='120px'
                            variant="primary"
                            px={['32px !important', '10px !important']}
                            ml="8px"
                            onClick={handleDepositClick}
                        >
                            <Trans i18key="deposit" />
                        </Button> :
                        <Tooltip variant="default" label={(): React.ReactNode => {
                            return (
                                <Text variant="text2" color="text" display="inline-block" minWidth={240}>
                                    <Trans i18key={
                                        depositState() === 'finalizing' ?
                                            'depositTooltipFinalizing' :
                                            'depositTooltipUnavailable'}
                                    />
                                </Text>
                            );
                        }}>
                            <Button
                                minWidth='120px'
                                variant="primary"
                                px={['32px !important', '10px !important']}
                                ml="8px"
                                onClick={handleDepositClick}
                                disabled={true}
                            >
                                <Trans i18key="deposit" />
                            </Button>
                        </Tooltip>
                }

            </Flex>
        </Flex>
    );
});

Balance.displayName = 'Balance';
