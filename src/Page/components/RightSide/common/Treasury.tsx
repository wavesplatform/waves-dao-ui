import { FC, useContext } from 'react';
import { Box, Flex } from '@waves.exchange/wx-react-uikit';
import { Trans } from '@waves/ui-translator';
import { Text } from '../../../../uikit/Text/Text';
import { observer } from 'mobx-react-lite';
import { AppStoreContext } from '../../../../App';
import { InUsdText } from '../../../../components/utilComponents/inUsdText';

export const Treasury: FC = observer(() => {
    const { contractDataStore } = useContext(AppStoreContext);

    return (
        <Box color="text" flex={1} sx={{ mb: ['16px', '0'] }}>
            <Text as="div" variant="heading2">
                <Trans i18key="treasuty" />
            </Text>
            <Flex alignItems="center" flexWrap="wrap">
                <Text variant="heading1" mr="20px" sx={{ whiteSpace: 'nowrap' }}>
                    {'123,123 WAVES'}
                </Text>
                <InUsdText
                    usd={contractDataStore.getTreasuryUsd}
                    decimals={2}
                    variant="text1"
                    color="textsec"
                    hasBrackets={false}
                />
            </Flex>
        </Box>
    );
});

Treasury.displayName = 'Treasury';
