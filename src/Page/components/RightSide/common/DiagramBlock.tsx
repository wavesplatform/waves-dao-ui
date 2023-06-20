import { FC, useContext } from 'react';
import { Box, Flex } from '@waves.exchange/wx-react-uikit';
import { Text } from '../../../../uikit/Text/Text';
import { Diagram } from '../../../../uikit/Diagram/Diagram';
import { AppStoreContext } from '../../../../App';
import { observer } from 'mobx-react-lite';

export const DiagramBlock: FC = observer(() => {
    const { assetsStore, contractDataStore, ratesStore } =
        useContext(AppStoreContext);

    return (
        <Flex
            flex={1}
            alignItems={[null, 'center']}
            flexDirection={['column', 'row']}
            justifyContent='flex-end'
        >
            <Diagram
                dataProps={[
                    {
                        color: '#3C69FF',
                        value:
                            contractDataStore.investedWaves
                                ?.getTokens()
                                ?.toNumber() || 0,
                    },
                    {
                        color: '#2AC684',
                        value:
                            contractDataStore.investedXtn
                                ?.getTokens()
                                ?.toNumber() || 0,
                    },
                ]}
                widthChart={64}
                heightChart={64}
                height={64}
                width={64}
            />
            <Box sx={{ ml: [null, '16px'], mt: ['16px', '0'] }}>
                <Flex alignItems="center" sx={{ mb: '8px' }}>
                    <Box
                        width="8px"
                        height="8px"
                        sx={{
                            mr: '8px',
                            borderRadius: '50%',
                            backgroundColor: '#3C69FF',
                        }}
                    />
                    <Text as="div" variant="text1" display="flex" color="text">
                        <Text>
                            {contractDataStore.investedWaves?.toFormat(2)}
                        </Text>
                        <Text as="div" mx="4px" color="#3C69FF">
                            {assetsStore.WAVES.displayName}
                        </Text>
                        <Text color="wdtextsec">
                            {`$${ratesStore.getInvestedWavesInUsd.toFormat(2)}`}
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
                            backgroundColor: '#2AC684',
                        }}
                    />
                    <Text as="div" variant="text1" display="flex" color="text">
                        <Text>
                            {contractDataStore.investedXtn?.toFormat(2)}
                        </Text>
                        <Text as="div" mx="4px" color="#2AC684">
                            {assetsStore.assetsData.data?.XTN?.displayName}
                        </Text>
                        <Text color="wdtextsec">
                            {`$${ratesStore.getInvestedXtnInUsd.toFormat(2)}`}
                        </Text>
                    </Text>
                </Flex>
            </Box>
        </Flex>
    );
});

DiagramBlock.displayName = 'DiagramBlock';
