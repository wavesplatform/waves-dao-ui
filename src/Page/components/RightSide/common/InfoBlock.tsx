import { FC, memo } from "react";
import { Box, Flex } from "@waves.exchange/wx-react-uikit";
import { Trans } from "@waves/ui-translator";
import { Text } from '../../../../uikit/Text/Text';

export const InfoBlock: FC = memo(() => {
    return (
        <Box sx={{ mb: '32px' }}>
            <Flex alignItems={[null, 'center']} mb="16px" flexDirection={['column', 'row']}>
                <Flex mb="4px">
                    <Text as="div" color="wdtextsec" variant="text1" mr="4px">
                        <Trans i18key="tokenPrice" i18Params={{ assetName: 'WAVES' }} />
                    </Text>
                    <Text as="div" color="text" variant="text1">
                        {`$2.16`}
                    </Text>
                </Flex>
                <Box
                    width="6px"
                    height="6px"
                    sx={{
                        borderRadius: '50%',
                        mx: '16px',
                        backgroundColor: 'wdmain',
                        display: ['none', 'block']
                    }}
                />
                <Flex mb="4px">
                    <Text as="div" color="wdtextsec" variant="text1" mr="4px">
                        <Trans i18key="lpPrice" i18Params={{ assetName: 'WAVESDLP' }} />
                    </Text>
                    <Text as="div" color="text" variant="text1" mr="4px">
                        {`0.99 WAVES`}
                    </Text>
                    <Text as="div" color="wdtextsec" variant="text1">
                        {`($2.20)`}
                    </Text>
                </Flex>
                <Box
                    width="6px"
                    height="6px"
                    sx={{
                        borderRadius: '50%',
                        mx: '16px',
                        backgroundColor: 'wdmain',
                        display: ['none', 'block']
                    }}
                />
                <Flex mb="4px">
                    <Text as="div" color="wdtextsec" variant="text1" mr="4px">
                        <Trans i18key="rate" />
                    </Text>
                    <Text as="div" color="text" variant="text1" mr="4px">
                        {`1 WAVES = 1.01 WAVESDLP`}
                    </Text>
                </Flex>
            </Flex>
            <Flex flexWrap="wrap">
                <Text as="div" color="wdtextsec" variant="text1" mr="4px">
                    <Trans i18key="kpiPeriod" />
                </Text>
                <Text as="div" color="text" variant="text1" mr="4px" sx={{ whiteSpace: 'nowrap' }}>
                    {`~ 1m, 2w. 5d, 12h (135,532 blocks)`}
                </Text>
            </Flex>
        </Box>
    );
});

InfoBlock.displayName = 'InfoBlock';
