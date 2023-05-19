import { Box } from '@waves.exchange/wx-react-uikit';
import { FC, memo } from 'react';
import mainBgUrl from '/src/img/mainbg.png';
import shadowTopUrl from '/src/img/shadow-top.png';
import shadowBottomUrl from '/src/img/shadow-bottom.png';

export const MainBg: FC = memo(() => {
    return (
        <Box
            backgroundImage={`url(${mainBgUrl})`}
            backgroundSize="100% 100%"
            width="100%"
            height="100%"
            top="0"
            left="0"
            position="absolute"
        >
            <Box
                backgroundImage={`url(${shadowTopUrl})`}
                backgroundSize="100% 100%"
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height={['30%', '80%']}
            />
            <Box
                backgroundImage={`url(${shadowBottomUrl})`}
                backgroundSize="100% 100%"
                position="absolute"
                bottom="0"
                left="0"
                width="100%"
                height={['130%', '30%']}
            />
        </Box>
    );
});

MainBg.displayName = 'MainBg';
