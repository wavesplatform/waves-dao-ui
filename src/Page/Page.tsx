import { FC } from 'react';
import { Box, Flex } from '@waves.exchange/wx-react-uikit';
import { translate } from '@waves/ui-translator';
import { LeftSide } from './components/LeftSide/LeftSide';
import { MainBg } from './components/MainBg';
import { RightSide } from './components/RightSide/RightSide';
import { ExternalLinksBlock } from './components/LeftSide/ExternalLinksBlock';

const PageFC: FC = () => {
    return (
        <Box minHeight="100vh" position="relative" sx={{ px: ['6px', '40px'], py: '24px' }}>
            <MainBg />
            <Flex position="relative" width="100%" flexDirection={['column', 'row']}>
                <LeftSide />
                <RightSide />
                <ExternalLinksBlock display={['block', 'none']} ml="16px" />
            </Flex>
        </Box>
    );
};

PageFC.displayName = 'Page';
export const Page =  translate('app.page')(PageFC);
