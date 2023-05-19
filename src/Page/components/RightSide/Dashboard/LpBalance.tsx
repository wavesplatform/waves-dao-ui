import { FC, memo } from "react";
import { Box, Flex } from "@waves.exchange/wx-react-uikit";
import { Text } from '../../../../uikit/Text/Text';
import { Trans } from "@waves/ui-translator";
import { Button } from "../../../../uikit/Button/Button";
import wavesLpUrl from "/src/img/waveslp.svg";
import { WithdrawItem } from "./WithdrawItem";

export const LpBalance: FC = memo(() => {
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
                <Flex sx={{ pr: '8px', mb: ['8px', '0'] }} textAlign={['center', 'initial']} alignItems="center" flexDirection={['column', 'row']}>
                    <Box
                        width="48px"
                        height="48px"
                        backgroundImage={`url(${wavesLpUrl})`}
                        sx={{
                            mr: [null, '12px'],
                            mb: ['12px', '0']
                        }}
                    />
                    <Box>
                        <Text as="div" variant="text2" color="wdtextsec">
                            <Trans i18key="assetBalance" i18Params={{ assetName: 'WAVES' }} />
                        </Text>
                        <Flex alignItems="center" justifyContent={['center', 'initial']}>
                            <Text as="div" variant="text1" color="text" mr="4px">
                                {`68.200351`}
                            </Text>
                            <Text variant="text2" color="wdtextsec">
                                {`WAVESDLP`}
                            </Text>
                        </Flex>
                        <Flex alignItems="center" justifyContent={['center', 'initial']}>
                            <Text as="div" variant="text2" color="text" mr="4px">
                                {`~179.4567`}
                            </Text>
                            <Text variant="text2" color="wdtextsec">
                                {`WAVES ($250,990)`}
                            </Text>
                        </Flex>
                    </Box>
                </Flex>
                <Button variant="primary">
                    <Trans i18key="withdraw" />
                </Button>
            </Flex>
            <WithdrawItem unlocked={true} />
            <WithdrawItem unlocked={false} />
        </Box>
    );
});

LpBalance.displayName = 'LpBalance';
