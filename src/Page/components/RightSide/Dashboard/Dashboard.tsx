import { FC, memo } from "react";
import { Box } from "@waves.exchange/wx-react-uikit";
import { FinalisePeriod } from "./FinalisePeriod";
import { WavesBalance } from "./Balance";
import { LpBalance } from "./LpBalance";
import { AvailableClaim } from "./AvailableClaim";
import { UnlockedTokensMS } from "./UnlockedTokensMS";

export const Dashboard: FC = memo(() => {
    return (
        <Box>
            <UnlockedTokensMS />
            <FinalisePeriod />
            <WavesBalance />
            <AvailableClaim />
            <LpBalance />
        </Box>
    );
});

Dashboard.displayName = 'Dashboard';
