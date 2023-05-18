import { FC, memo } from "react";
import { Box, Flex } from "@waves.exchange/wx-react-uikit";

export const ConnectTypes: FC = memo(() => {
    return (
        <Flex mb="24px">
            <Flex width="48px" height="48px" justifyContent="center" alignItems="center" backgroundColor="#F0C78A" borderRadius="50%">
                <Box width="28px" height="28px" backgroundImage="url(./src/img/metamask.svg)" />
            </Flex>
            <Flex
                width="48px"
                height="48px"
                justifyContent="center"
                alignItems="center"
                backgroundColor="#313F5A"
                borderRadius="50%"
                ml="-5px"
                display={['none', 'flex']}
            >
                <Box width="23px" height="28px" backgroundImage="url(./src/img/keeper.svg)" />
            </Flex>
            <Flex
                width="48px"
                height="48px"
                justifyContent="center"
                alignItems="center"
                backgroundColor="#0C2F57"
                borderRadius="50%"
                ml="-5px"
            >
                <Box width="28px" height="28px" backgroundImage="url(./src/img/wx.svg)" />
            </Flex>
        </Flex>
    );
});

ConnectTypes.displayName = 'ConnectTypes';
