import { FC, memo } from "react";
import { Box, Flex } from "@waves.exchange/wx-react-uikit";
import { Text } from '../../../../uikit/Text/Text';
import { Trans } from "@waves/ui-translator";
import { Button } from "../../../../uikit/Button/Button";
import wavesUrl from "/src/img/waves.svg";

export const WavesBalance: FC = memo(() => {
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
            <Flex sx={{ pr: '8px', mb: ['8px', '0'] }} textAlign={['center', 'initial']} alignItems="center" flexDirection={['column', 'row']}>
                <Box
                    width="48px"
                    height="48px"
                    backgroundImage={`url(${wavesUrl})`}
                    sx={{
                        mr: [null, '12px'],
                        mb: ['12px', '0']
                    }}
                />
                <Box>
                    <Text as="div" variant="text2" color="text">
                        <Trans i18key="assetBalance" i18Params={{ assetName: 'WAVES' }} />
                    </Text>
                    <Flex>
                        <Text as="div" variant="text1" color="wdtextsec" mr="4px">
                            {`15.969001`}
                        </Text>
                        <Text variant="text2" color="text">
                            {`WAVES`}
                        </Text>
                    </Flex>
                </Box>
            </Flex>
            <Flex>
                <Button variant="transparent" mr="8px" sx={{ whiteSpace: 'nowrap', px: ['32px !important', '50px !important' ] }}>
                    <Trans i18key="getToken" i18Params={{ assetName: 'WAVES' }} />
                </Button>
                <Button variant="primary" px={['32px !important', '50px !important']}>
                    <Trans i18key="deposit" />
                </Button>
            </Flex>
        </Flex>
    );
});

WavesBalance.displayName = 'WavesBalance';
