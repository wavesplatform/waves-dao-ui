import { FC, memo } from "react";
import { Box, Flex } from "@waves.exchange/wx-react-uikit";
import { Trans } from "@waves/ui-translator";
import { Text } from '../../../uikit/Text/Text';
import { Button } from "../../../uikit/Button/Button";
import { ExternalLinksBlock } from "./ExternalLinksBlock";

export const LeftSide: FC = memo(() => {
    return (
        <Flex
            width={['100%', '40%']}
            minHeight={[null, 'calc(100vh - 48px)']}
            flexDirection="column"
            justifyContent="space-between"
            sx={{
                py: ['0', '16px'],
                pr: ['0', '40px'],
                pb: ['16px', '0']
            }}
        >
            <Box>
                <Box
                    width={['180px', '300px']}
                    height={['20px', '30px']}
                    backgroundImage="url(./src/img/logo.png)"
                    backgroundSize="100% 100%"
                    sx={{
                        mb: '24px'
                    }}
                />
                <Text as="div" variant="heading3" color="text" mb={['16px', '24px']} maxWidth="600px">
                    <Trans i18key="daoDesc" />
                </Text>
                <Flex
                    px={['16px', '24px']}
                    py={['16px', '24px']}
                    border="1px solid #1F5AF6"
                    backgroundColor="rgba(0, 16, 56, 0.7)"
                    flexDirection={['column', 'row']}
                    alignItems={['initial', 'center']}
                    borderRadius="12px"
                    maxWidth="600px"
                >
                    <Text as="div" variant="text1" color="text" mr={['0', '8px']} mb={['16px', '0']}>
                        <Trans i18key="bannerText" />
                    </Text>
                    <Button sx={{ whiteSpace: 'nowrap' }}>
                        <Trans i18key="bannerBtn" />
                    </Button>
                </Flex>
            </Box>
            <ExternalLinksBlock display={['none', 'flex']} />
        </Flex>
    );
});

LeftSide.displayName = 'LeftSide';
