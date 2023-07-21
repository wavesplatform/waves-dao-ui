import * as React from 'react';
import { Money } from '@waves/data-entities';
import { AssetLogo, Flex } from '@waves.exchange/wx-react-uikit';
import { Text } from 'uikit';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { AppStoreContext } from '../../../../App';

interface TokenRowProps {
    token: Money;
}

export const TokenRow: React.FC<TokenRowProps> = observer(({ token }) => {
    const { assetsStore } = useContext(AppStoreContext);

    return (
        <Flex alignItems="center" mb="4px">
            <AssetLogo assetId={token.asset.id} logo={assetsStore.assetsData.data[token.asset.id].icon} size={24} />
            <Text variant='text1' color="text" ml="4px">
                {token.getTokens().toFormat()}&nbsp;
                <Text color="wdtextsec">{token.asset.displayName}</Text>
            </Text>
        </Flex>
    );
});

TokenRow.displayName = 'TokenRow';
