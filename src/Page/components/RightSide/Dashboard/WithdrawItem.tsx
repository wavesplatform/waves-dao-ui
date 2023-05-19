import { FC, memo } from "react";
import { Box, Flex } from "@waves.exchange/wx-react-uikit";
import { Text } from '../../../../uikit/Text/Text';
import { Trans } from "@waves/ui-translator";
import { Button } from "../../../../uikit/Button/Button";

export const WithdrawItem: FC<{ unlocked: boolean }> = memo(({ unlocked }) => {
    return (
        <Flex
            px="20px"
            py="20px"
            backgroundColor="wdbgsec"
            justifyContent="space-between"
            flexDirection={['column', 'row']}
            alignItems="center"
            mb="4px"
            borderLeft="3px solid"
            borderColor={unlocked ? 'wdpositive' : 'wdmainsec'}
        >
            <Box sx={{ pr: ['0', '12px'], mb: ['8px', '0'] }}>
                {unlocked ?
                    <Text as="div" variant="text2" color="wdpositive" mb="8px" textAlign={['center', 'initial']}>
                        <Trans i18key="wavesUnlocked" />
                    </Text> :
                    null
                }
                <Text as="div" variant="text2" color="wdtextsec" textAlign={['center', 'initial']}>
                    <Trans i18key="withdraw" />
                </Text>
                {unlocked ?
                    null :
                    <Text as="div" variant="text2" color="text" textAlign={['center', 'initial']}>
                        <Trans i18key="willBeUnlocked" />
                    </Text>
                }
                <Flex alignItems="center" justifyContent={['center', 'initial']}>
                    <Text as="div" variant="text1" color="text" mr="4px">
                        {unlocked ? `179.4567` : `68.200351`}
                    </Text>
                    <Text variant="text2" color="wdtextsec">
                        {`WAVES ($250,990)`}
                    </Text>
                </Flex>
                {unlocked ?
                    <Flex alignItems="center" justifyContent={['center', 'initial']}>
                        <Text as="div" variant="text2" color="text" mr="4px">
                            {`=68.200351`}
                        </Text>
                        <Text variant="text2" color="wdtextsec">
                            {`WAVESDLP`}
                        </Text>
                    </Flex> :
                    null
                }
            </Box>
            <Button variant={unlocked ? 'success' : 'primary'} sx={{ whiteSpace: 'nowrap', px: '18px !important' }}>
                <Trans i18key={unlocked ? 'claimButton' : 'cancelWithdrawal'} />
            </Button>
        </Flex>
    );
});

WithdrawItem.displayName = 'WithdrawItem';
