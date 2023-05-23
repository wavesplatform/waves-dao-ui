import { FC, useContext } from 'react';
import {
    AssetLogo,
    Box,
    ExternalLink,
    Flex,
} from '@waves.exchange/wx-react-uikit';
import { Text } from '../../../../uikit/Text/Text';
import { Trans } from '@waves/ui-translator';
import { Button } from '../../../../uikit/Button/Button';
import { observer } from 'mobx-react-lite';
import { AppStoreContext } from '../../../../App';

export const Balance: FC = observer(() => {
    const { balanceStore } = useContext(AppStoreContext);

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
            overflow="hidden"
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
                                assetName: balanceStore.balances.WAVES?.asset.displayName,
                            }}
                        />
                    </Text>
                    <Flex>
                        <Text
                            as="div"
                            variant="text1"
                            color="wdtextsec"
                            mr="4px"
                        >
                            {balanceStore.balances.WAVES?.balance
                                ?.getTokens()
                                .toFormat()}
                        </Text>
                        <Text variant="text2" color="text">
                            {balanceStore.balances.WAVES?.asset.displayName}
                        </Text>
                    </Flex>
                </Box>
            </Flex>
            <Flex>
                <ExternalLink
                    href="https://waves.exchange/trading/spot/WAVES_USDT"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <Button
                        variant="transparent"
                        sx={{
                            whiteSpace: 'nowrap',
                            px: ['32px !important', '50px !important'],
                        }}
                    >
                        <Trans
                            i18key="getToken"
                            i18Params={{ assetName: 'WAVES' }}
                        />
                    </Button>
                </ExternalLink>
                <Button
                    variant="primary"
                    px={['32px !important', '50px !important']}
                    ml="8px"
                >
                    <Trans i18key="deposit" />
                </Button>
            </Flex>
        </Flex>
    );
});

Balance.displayName = 'Balance';
