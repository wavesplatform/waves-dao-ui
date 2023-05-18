import { FC, memo } from "react";
import { Flex } from "@waves.exchange/wx-react-uikit";
import { Treasury } from "./Treasury";
import { DiagramBlock } from "./DiagramBlock";
import { InfoBlock } from './InfoBlock';
import { ConnectBlock } from './ConnectBlock';

export const RightSide: FC = memo(() => {
    return (
        <Flex
            width={['100%', '60%']}
            flexDirection="column"
            sx={{
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
            <ConnectBlock />
        </Flex>
    );
});

RightSide.displayName = 'RightSide';
