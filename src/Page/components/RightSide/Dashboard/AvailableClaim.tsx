import { FC, memo } from 'react';
import { Box, Flex } from '@waves.exchange/wx-react-uikit';
import { Text } from '../../../../uikit/Text/Text';
import { Trans } from '@waves/ui-translator';
import { Button } from '../../../../uikit/Button/Button';
import { wavesAsset } from '../../../../services/assets';
import { modalManager } from '../../../../services/modalManager';
import { MODAL_NAMES } from '../../../../components/ModalContainer/MODAL_NAMES';

export const AvailableClaim: FC = memo(() => {
    const wavesdlpAsset = { ...wavesAsset, displayName: 'WAVESDLP' };
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
            border="1px solid"
            borderColor="wdpositive"
        >
            <Box
                sx={{ pr: '8px', mb: ['8px', '0'] }}
                textAlign={['center', 'initial']}
            >
                <Text as="div" variant="text2" color="text">
                    <Trans i18key="availableClaim" />
                </Text>
                <Flex>
                    <Text as="div" variant="text1" color="text" mr="4px">
                        {'150'}
                    </Text>
                    <Text variant="text1" color="wdtextsec">
                        {'WAVESDLP'}
                    </Text>
                </Flex>
            </Box>
            <Button
                variant="success"
                onClick={() =>
                    modalManager.openModal(
                        MODAL_NAMES.claimWaves,
                        {
                            wavesdlpAsset,
                            balance: '15',
                        },
                        500
                    )
                }
            >
                <Trans i18key="claimButton" />
            </Button>
        </Flex>
    );
});

AvailableClaim.displayName = 'AvailableClaim';
