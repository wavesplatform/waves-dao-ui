import { FC, useContext } from 'react';
import { Box, Flex } from '@waves.exchange/wx-react-uikit';
import { Text } from '../../../../uikit/Text/Text';
import { Diagram } from '../../../../uikit/Diagram/Diagram';
import { AppStoreContext } from '../../../../App';
import { observer } from 'mobx-react-lite';

export const DiagramBlock: FC = observer(() => {
    const { assetsStore } = useContext(AppStoreContext);
    const mock = [{ color: '#3C69FF', value: 8 }, { color: '#2AC684', value: 4 }];

    return (
        <Flex flex={1} alignItems={[null, 'center']} flexDirection={['column', 'row']}>
            <Diagram dataProps={mock} widthChart={64} heightChart={64} height={64} width={64} />
            <Box sx={{ ml: [null, '16px'], mt: ['16px', '0'] }}>
                <Flex alignItems="center" sx={{ mb: '8px' }}>
                    <Box
                        width="8px"
                        height="8px"
                        sx={{
                            mr: '8px',
                            borderRadius: '50%',
                            backgroundColor: '#3C69FF'
                        }}
                    />
                    <Text as="div" variant="text1" display="flex" color="text">
                        <Text>
                            {'1,000,000.51'}
                        </Text>
                        <Text as="div" mx="4px" color="#3C69FF">
                            {assetsStore.assetsData.data?.WAVES?.displayName}
                        </Text>
                        <Text color="wdtextsec">
                            {'$1,855,180.45'}
                        </Text>
                    </Text>
                </Flex>
                <Flex alignItems="center">
                    <Box
                        width="8px"
                        height="8px"
                        sx={{
                            mr: '8px',
                            borderRadius: '50%',
                            backgroundColor: '#2AC684'
                        }}
                    />
                    <Text as="div" variant="text1" display="flex" color="text">
                        <Text>
                            {'800,120.51'}
                        </Text>
                        <Text as="div" mx="4px" color="#2AC684">
                            {'XTN'}
                        </Text>
                        <Text color="wdtextsec">
                            {'$800,120.51'}
                        </Text>
                    </Text>
                </Flex>
            </Box>
        </Flex>
    );
});

DiagramBlock.displayName = 'DiagramBlock';
