import { FC, memo } from 'react';
import { PlateNote } from '@waves.exchange/wx-react-uikit';
import { Trans } from '@waves/ui-translator';
import { Text } from '../../../../uikit/Text/Text';

export const UnlockedTokensMS: FC = memo(() => {
    const hasUnlockedTokens = true;
    return (
        hasUnlockedTokens ?
            <PlateNote type="warning" mb="12px">
                <Text variant="text2" color="alerttext">
                    <Trans i18key="MS-0110" />
                </Text>
            </PlateNote> :
            null
    );
});

UnlockedTokensMS.displayName = 'UnlockedTokensMS';
