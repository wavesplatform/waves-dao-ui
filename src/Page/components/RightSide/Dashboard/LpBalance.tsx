import { FC, useContext } from 'react';
import { Box, Flex } from '@waves.exchange/wx-react-uikit';
import { Text } from 'uikit';
import { Trans } from '@waves/ui-translator';
import { Button } from 'uikit';
import wavesLpUrl from '/src/img/waveslp.svg';
import { WithdrawItem } from './WithdrawItem/WithdrawItem';
import { InUsdText } from '../../../../components/utilComponents/inUsdText';
import { observer } from 'mobx-react-lite';
import { AppStoreContext } from '../../../../App';
import { modalManager } from '../../../../services/modalManager';
import { MODAL_NAMES } from '../../../../components/ModalContainer/MODAL_NAMES';

export const LpBalance: FC = observer(() => {
    const { assetsStore, balanceStore, contractDataStore, ratesStore } =
        useContext(AppStoreContext);

    const handleWithdrawClick = () => {
        modalManager.openModal(MODAL_NAMES.withdraw);
    };

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
                                i18Params={{
                                    assetName:
                                        assetsStore.WAVESDAOLP.displayName,
                                }}
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
                                {balanceStore.getWavesLpBalance?.toFormat(2) ||
                                    0}
                            </Text>
                            <Text variant="text2" color="wdtextsec">
                                {assetsStore.WAVESDAOLP.displayName}
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
                                {`~${balanceStore.getBalanceLpInWaves?.toFormat()}`}
                            </Text>
                            <Text variant="text2" color="wdtextsec">
                                {assetsStore.WAVES.displayName}
                            </Text>
                            <InUsdText
                                usd={ratesStore.balanceLpInWavesUsd}
                                decimals={2}
                                variant="text2"
                                color="wdtextsec"
                                ml="4px"
                            />
                        </Flex>
                    </Box>
                </Flex>
                <Button
                    px={['32px !important', '10px !important']}
                    minWidth='120px'
                    variant="primary"
                    onClick={handleWithdrawClick}
                    disabled={contractDataStore.finalizingKPI <= 0}
                >
                    <Trans i18key="withdraw" />
                </Button>
            </Flex>
            {!!contractDataStore.withdraws?.length &&
                contractDataStore.withdraws.filter(withdraw => withdraw.status === 'PENDING').map((withdraw, idx) => {
                    return <WithdrawItem key={idx} item={withdraw} />;
                })}
        </Box>
    );
});

LpBalance.displayName = 'LpBalance';
