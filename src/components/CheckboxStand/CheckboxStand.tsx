import React, { FC, useState } from 'react';
import { Box, Flex } from '@waves.exchange/wx-react-uikit';
import { Checkbox } from '../../uikit/Checkbox/Checkbox';

export const CheckboxStand: FC = () => {
    const [checked, setChecked] = useState(false);
    return (
        <Flex flexDirection="column" bg="#404040">
            <Flex mb={20} p="20px">
                <Box mr="20px">
                    <Checkbox
                        controlBoxStyles={{ marginRight: '8px' }}
                        isChecked={checked}
                        isInvalid={false}
                        onChange={(e) => setChecked(e.target.checked)}
                    >
                        Checkbox default
                    </Checkbox>
                </Box>
                <Box mr="20px">
                    <Checkbox
                        controlBoxStyles={{ marginRight: '8px' }}
                        isChecked={checked}
                        isInvalid={true}
                        onChange={(e) => setChecked(e.target.checked)}
                    >
                        Checkbox error
                    </Checkbox>
                </Box>
                <Box mr="20px">
                    <Checkbox
                        controlBoxStyles={{ marginRight: '8px' }}
                        isChecked={checked}
                        isInvalid={false}
                        isDisabled={true}
                        onChange={(e) => setChecked(e.target.checked)}
                    >
                        Checkbox disabled
                    </Checkbox>
                </Box>
            </Flex>
        </Flex>
    );
};

CheckboxStand.displayName = 'CheckboxStand';