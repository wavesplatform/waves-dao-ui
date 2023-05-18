import { FC, memo } from "react";
import { Box, Flex } from "@waves.exchange/wx-react-uikit";
import { Trans } from "@waves/ui-translator";
import { Text } from '../../../uikit/Text/Text';
import { Button } from "../../../uikit/Button/Button";
import { ConnectTypes } from './ConnectTypes';

export const ConnectBlock: FC = memo(() => {
    return (
        <Flex
            justifyContent="center"
            alignItems="center"
            sx={{
                flex: 1,
                py: ['32px', '24px'],
                px: ['16px', '24px'],
                borderRadius: '12px',
                backgroundColor: 'rgba(0, 6, 22, 0.5)'
            }}
        >
            <Flex flexDirection="column" alignItems="center">
                <ConnectTypes />
                <Text as="div" variant="text1" color="wdtextsec" mb="16px" textAlign="center">
                    <Trans i18key="connectDesc" />
                </Text>
                <Button variant="primary">
                    <Trans i18key="connectButton"  />
                </Button>
            </Flex>
        </Flex>
    );
});

ConnectBlock.displayName = 'ConnectBlock';