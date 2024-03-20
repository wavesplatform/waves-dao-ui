import * as React from 'react';
import { Box, Flex } from '@waves.exchange/wx-react-uikit';
import { Money } from '@waves/data-entities';
import { TokenRow } from './TokenRow';
import { Trans } from '@waves/ui-translator';
import { Text } from 'uikit';

interface TokensProps {
    tokens: Money[];
}

export const Tokens: React.FC<TokensProps> = ({ tokens }) => {
    return (
        <Box backgroundColor="rgba(0, 6, 22, 0.5)" py="16px" borderRadius="8px">
            <Text
                textAlign="center"
                mb="4px"
                variant="text1"
                display="block"
                color="wdtextsec"
            >
                <Trans i18key={'availableToGet'} />
            </Text>
            <Flex justifyContent="center">
                <Box margin="0 auto">
                    {tokens.map((token) => {
                        return <TokenRow token={token} key={token.asset.id} />;
                    })}
                </Box>
            </Flex>

        </Box>
    );
};

Tokens.displayName = 'Tokens';
