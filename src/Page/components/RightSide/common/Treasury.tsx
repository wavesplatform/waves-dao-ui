import { FC, useContext } from 'react';
import { Box } from '@waves.exchange/wx-react-uikit';
import { Trans } from '@waves/ui-translator';
import { Text } from '../../../../uikit/Text/Text';
import { observer } from 'mobx-react-lite';
import { AppStoreContext } from '../../../../App';

export const Treasury: FC = observer(() => {
    const { contractDataStore } = useContext(AppStoreContext);

    return (
        <Box color="text" flex={1} sx={{ mb: ['16px', '0'] }}>
            <Text as="div" variant="heading3">
                <Trans i18key="treasuty" />
            </Text>
            <Text variant="heading2">
                {`$ ${contractDataStore.getTreasuryUsd.toFormat(2)}`}
            </Text>
        </Box>
    );
});

Treasury.displayName = 'Treasury';
