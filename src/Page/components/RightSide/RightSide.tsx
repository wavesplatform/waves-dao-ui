import { FC, memo } from "react";
import { Box, Flex } from "@waves.exchange/wx-react-uikit";
import { Treasury } from "./common/Treasury";
import { DiagramBlock } from "./common/DiagramBlock";
import { InfoBlock } from './common/InfoBlock';
import { ConnectBlock } from './ConnectBlock/ConnectBlock';
import { Dashboard } from './Dashboard/Dashboard';
import { UserInfo } from './UserInfo';

export const RightSide: FC = memo(() => {
    const logined = true;

    return (
        <Box width={['100%', '60%']}>
            {logined && <UserInfo />}
            <Flex
                flexDirection="column"
                sx={{
                    mt: '24px',
                    py: ['16px', '32px'],
                    px: ['16px', '24px'],
                    borderRadius: '12px',
                    backgroundColor: 'rgba(0, 16, 56, 0.7)',
                    backdropFilter: 'blur(8px)'
                }}
            >
                <Flex flexDirection={['column', 'row']} mb="16px">
                    <Treasury />
                    <DiagramBlock />
                </Flex>
                <InfoBlock />
                {logined ?
                    <Dashboard /> :
                    <ConnectBlock />
                }
            </Flex>
        </Box>
    );
});

RightSide.displayName = 'RightSide';
