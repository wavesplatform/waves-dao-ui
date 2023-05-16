import * as React from 'react';
import { Box, Button } from '@waves.exchange/wx-react-uikit';

interface TestModalProps {
    onClose: () => void;
}

export const TestModal: React.FC<TestModalProps> = ({ onClose }) => {

    return (
        <Box>
           TestModal
            <Button onClick={onClose}>close</Button>
        </Box>
    );
}

TestModal.displayName = 'TestModal';
