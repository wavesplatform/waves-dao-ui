import { FC, useContext } from 'react';
import { Box, Flex } from '@waves.exchange/wx-react-uikit';
import { Text } from '../../../../uikit/Text/Text';
import { Diagram } from '../../../../uikit/Diagram/Diagram';
import { AppStoreContext } from '../../../../App';
import { observer } from 'mobx-react-lite';
import { Trans } from '@waves/ui-translator';

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
                            contractDataStore.donatedWaves
                                ?.getTokens()
                                ?.toNumber() || 0,
                    },
                ]}
                widthChart={72}
                heightChart={72}
                height={72}
                width={72}
                lineWidth={24}
            />
            <Box sx={{ ml: [null, '16px'], mt: ['16px', '0'] }}>
                <Flex alignItems="center" mb='12px' flexWrap='wrap'>
                    <Flex width="100%" alignItems="center">
                        <Box
                            width="8px"
                            height="8px"
                            mr='4px'
                            borderRadius='50%'
                            backgroundColor='#3C69FF'
                        />
                        <Text color="textsec" variant="text2" sx={{ textTransform: 'capitalize' }}>
                            <Trans i18key='invested' />
                        </Text>
                    </Flex>
                    <Text as="div" variant="text1" display="flex" color="text">
                        <Text>
                            {contractDataStore.investedWaves?.toFormat(2)}
                        </Text>
                        <Text as="div" mx="4px" color="#3C69FF">
                            {assetsStore.WAVES.displayName}
                        </Text>
                        <Text color="wdtextsec">
                            {`$${ratesStore.investedWavesInUsd.toFormat(2)}`}
                        </Text>
                    </Text>
                </Flex>
                <Flex alignItems="center" flexWrap='wrap'>
                    <Flex width="100%" alignItems="center">
                        <Box
                            width="8px"
                            height="8px"
                            mr='4px'
                            borderRadius='50%'
                            backgroundColor='#2AC684'
                        />
                        <Text color="textsec" variant="text2" sx={{ textTransform: 'capitalize' }}>
                            <Trans i18key='donated' />
                        </Text>
                    </Flex>
                    <Text as="div" variant="text1" display="flex" color="text">
                        <Text>
                            {contractDataStore.donatedWaves?.toFormat(2)}
                        </Text>
                        <Text as="div" mx="4px" color="#2AC684">
                            {contractDataStore.donatedWaves.asset.displayName}
                        </Text>
                        <Text color="wdtextsec">
                            {`$${ratesStore.donatedWavesInUsd.toFormat(2)}`}
                        </Text>
                    </Text>
                </Flex>
            </Box>
        </Flex>
    );
});

DiagramBlock.displayName = 'DiagramBlock';
