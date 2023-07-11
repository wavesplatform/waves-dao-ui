import { FC, memo } from 'react';
import { Box, Flex } from '@waves.exchange/wx-react-uikit';
import { Text } from '../../../../uikit/Text/Text';
import { Trans } from '@waves/ui-translator';
import { Button } from '../../../../uikit/Button/Button';

export const FinalisePeriod: FC = memo(() => {
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
            <Box sx={{ pr: '8px', mb: ['8px', '0'] }} textAlign={['center', 'initial']}>
                <Text as="div" variant="text2" color="text">
                    <Trans i18key="finalizePeriod" />
                </Text>
                <Text variant="text2" color="wdtextsec">
                    <Trans i18key="finalisePeriodDesc" />
                </Text>
            </Box>
            <Button variant="primary" disabled>
                <Trans i18key="topUp" />
            </Button>
        </Flex>
    );
});

FinalisePeriod.displayName = 'FinalisePeriod';
