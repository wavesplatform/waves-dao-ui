import { FC, useContext } from 'react';
import { Box } from '@waves.exchange/wx-react-uikit';
import { FinalisePeriod } from './FinalisePeriod';
import { Balance } from './Balance';
import { LpBalance } from './LpBalance';
import { AvailableClaim } from './AvailableClaim';
import { UnlockedTokensMS } from './UnlockedTokensMS';
import { observer } from 'mobx-react-lite';
import { AppStoreContext } from '../../../../App';

export const Dashboard: FC = observer(() => {
    const { contractDataStore } = useContext(AppStoreContext);

    return (
        <Box>
            {contractDataStore.isUnlockedTokensMS && <UnlockedTokensMS />}
            {contractDataStore.finalizingKPI <= 0 && <FinalisePeriod />}
            <Balance />
            {contractDataStore?.availableToClaim &&
                !contractDataStore?.availableToClaim?.getTokens().isZero() && (
                    <AvailableClaim />
                )}
            <LpBalance />
        </Box>
    );
});

Dashboard.displayName = 'Dashboard';
