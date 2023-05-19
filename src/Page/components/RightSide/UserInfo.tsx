import { FC, memo, useMemo } from "react";
import { Box, Flex } from "@waves.exchange/wx-react-uikit";
import metamask from '/src/img/metamask.svg';
import keeper from '/src/img/keeper.svg';
import wx from '/src/img/wx.svg';
import { Text } from '../../../uikit/Text/Text';
import { Button } from "../../../uikit/Button/Button";
import { Trans } from "@waves/ui-translator";

export const UserInfo: FC = memo(() => {
    const userType = 'metamask';
    const userTypes = { metamask, keeper, wx };
    const address = '0x4413FB4ea17AB2267214F33518597fE137976ba9';
    const shortAddress = useMemo(() => `${address.slice(0, 6)}...${address.slice(-6)}`, [address]);

    return (
        <Flex
            justifyContent="space-between"
            alignItems="center"
            sx={{
                py: ['16px', '24px'],
                px: ['16px', '24px'],
                borderBottomLeftRadius: '12px',
                borderBottomRightRadius: '12px',
                borderTopLeftRadius: ['12px', '0'],
                borderTopRightRadius: ['12px', '0'],
                backgroundColor: 'rgba(0, 16, 56, 0.7)',
                backdropFilter: 'blur(8px)'
            }}
        >
            <Flex minWidth={[null, '120px']} alignItems="center">
                <Box
                    width="28px"
                    height="28px"
                    backgroundImage={`url(${userTypes[userType]})`}
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                />
                <Text variant="text1" color="text" ml="8px" display={['block', 'none']}>
                    {shortAddress}
                </Text>
            </Flex>
            <Text variant="text1" color="text" display={['none', 'block']}>
                {address}
            </Text>
            <Button variant="transparent" px={['14px !important', '32px !important' ]} sx={{ display: 'flex', alignItems: 'center' }}>
                <Trans i18key="logout" />
            </Button>
        </Flex>
    );
});

UserInfo.displayName = 'UserInfo';
