import { FC, memo, useContext } from 'react';
import { Box, Flex } from '@waves.exchange/wx-react-uikit';
import { Treasury } from './common/Treasury';
import { DiagramBlock } from './common/DiagramBlock';
import { InfoBlock } from './common/InfoBlock';
import { ConnectBlock } from './ConnectBlock/ConnectBlock';
import { Dashboard } from './Dashboard/Dashboard';
import { UserInfo } from './UserInfo';
import { AppStoreContext } from '../../../App';
import { observer } from 'mobx-react-lite';

export const RightSide: FC = observer(() => {
    const { authStore } = useContext(AppStoreContext);

    return (
        <Box width={['100%', '60%']}>
            {
                authStore.isAuthorized &&
                <UserInfo />
            }
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
                {authStore.isAuthorized ?
                    <Dashboard /> :
                    <ConnectBlock />
                }
            </Flex>
        </Box>
    );
});

RightSide.displayName = 'RightSide';
