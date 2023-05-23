import { FC, memo } from 'react';
import { Box } from '@waves.exchange/wx-react-uikit';
import { Trans } from '@waves/ui-translator';
import { Text } from '../../../../uikit/Text/Text';

export const Treasury: FC = memo(() => {
    return (
        <Box color="text" flex={1} sx={{ mb: ['16px', '0']}}>
            <Text as="div" variant="heading3">
                <Trans i18key="treasuty" />
            </Text>
            <Text variant="heading2">
                {'$ 2,655,301.51'}
            </Text>
        </Box>
    );
});

Treasury.displayName = 'Treasury';
