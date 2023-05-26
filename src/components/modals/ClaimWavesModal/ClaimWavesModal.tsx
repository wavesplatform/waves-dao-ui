import * as React from 'react';
import { MODAL_NAMES } from '../../ModalContainer/MODAL_NAMES';
import { ModalProps } from '../../Modal/Modal';
import { Box, BoxProps } from '@waves.exchange/wx-react-uikit';
import { ModalStyled } from '../../Modal/ModalStyled';
import { Trans, translate } from '@waves/ui-translator';
import waveslp from '/src/img/waveslp.svg';
import { BalanceComponent } from '../../BalanceComponent/BalanceComponent';
import { Button, FeeComponent, Text } from '../../../uikit';
import { MultiErrorComponent } from '../../../uikit/MultiErrorComponent/MultiErrorComponent';
import wavesLpWithoutBg from '/src/img/wavesLpWithoutBg.svg';
import { AppStoreContext } from '../../../App';
import { wavesAsset } from '../../../services/assets';
import { ClaimWavesStore } from './ClaimWavesStore';
import { Observer } from 'mobx-react-lite';
import { ButtonContent } from '../../../uikit/Button/ButtonContent';

type TClaimWavesModalFC = ModalProps & BoxProps;

const ClaimWavesModalFC: React.FC<TClaimWavesModalFC> = ({ ...props }) => {
    const rootStore = React.useContext(AppStoreContext);
    const claimWavesStore = React.useMemo(() => {
        return new ClaimWavesStore(rootStore);
    }, []);
    const WAVES = rootStore.balanceStore.balances.WAVES?.asset;
    const balance =
        rootStore.balanceStore.balances[WAVES?.id]?.balance?.toFormat();
    const wavesdlpAsset = { ...wavesAsset, displayName: 'WAVESDLP' };
    const { sx = {}, ...restProps } = props;

    return (
        <ModalStyled
            modalName={MODAL_NAMES.claimWaves}
            sx={{
                '& > div': {
                    backgroundPosition: 'center -50px',
                    backgroundSize: 'cover',
                },
                ...(sx as Record<string, any>),
            }}
            {...restProps}
        >
            <Observer>
                {(): React.ReactElement => {
                    return (
                        <>
                            <Box
                                mt="10px"
                                width="82px"
                                height="82px"
                                backgroundImage={`url(${waveslp})`}
                                backgroundRepeat="no-repeat"
                                backgroundSize="contain"
                                marginLeft="auto"
                                marginRight="auto"
                                mb="24px"
                            />
                            <Text
                                variant="heading2"
                                as="div"
                                textAlign="center"
                                color="standard.$0"
                                mb="24px"
                            >
                                <Trans i18key="claimWAVESDLP" />
                            </Text>
                            <BalanceComponent
                                label={{
                                    i18key: 'availableClaim',
                                }}
                                balance={balance}
                                ticker={wavesdlpAsset?.ticker}
                                iconUrl={wavesLpWithoutBg}
                                mb="28px"
                            />
                            <FeeComponent mb="28px" />
                            <MultiErrorComponent
                                activeErrors={claimWavesStore.activeErrors}
                            />
                            <Button
                                variant="primary"
                                width="100%"
                                onClick={claimWavesStore.invoke}
                                disabled={claimWavesStore.isPending}
                            >
                                <ButtonContent
                                    isPending={claimWavesStore.isPending}
                                    isRetry={claimWavesStore.isRetry}
                                    transText={{ i18key: 'claimWAVESDLP' }}
                                />
                            </Button>
                        </>
                    );
                }}
            </Observer>
        </ModalStyled>
    );
};

ClaimWavesModalFC.displayName = 'ClaimWavesModal';

export const ClaimWavesModal = translate('app.page')(ClaimWavesModalFC);
