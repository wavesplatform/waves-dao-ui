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
import { ClaimWavesDaoLpStore } from './ClaimWavesDaoLpStore';
import { Observer } from 'mobx-react-lite';
import { ButtonContent } from '../../../uikit/Button/ButtonContent';

type TClaimWavesDaoLpModalFC = ModalProps & BoxProps;

const ClaimWavesDaoLpModalFC: React.FC<TClaimWavesDaoLpModalFC> = ({
    ...props
}) => {
    const rootStore = React.useContext(AppStoreContext);
    const claimWavesDaoLpStore = React.useMemo(() => {
        return new ClaimWavesDaoLpStore(rootStore);
    }, []);
    const { sx = {}, ...restProps } = props;

    return (
        <ModalStyled
            modalName={MODAL_NAMES.claimWavesDaoLp}
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
                                sx={{
                                    img: {
                                        width: '100%',
                                        height: '100%',
                                    },
                                }}
                                label={{
                                    i18key: 'availableClaim',
                                }}
                                balance={rootStore.contractDataStore.availableToClaim?.toFormat()}
                                ticker={
                                    rootStore.assetsStore.getWAVESDAOLP()
                                        .displayName
                                }
                                iconUrl={wavesLpWithoutBg}
                                mb="28px"
                            />
                            <FeeComponent mb="28px" />
                            <MultiErrorComponent
                                activeErrors={claimWavesDaoLpStore.activeErrors}
                            />
                            <Button
                                variant="primary"
                                width="100%"
                                onClick={claimWavesDaoLpStore.invoke}
                                disabled={claimWavesDaoLpStore.isPending}
                            >
                                <ButtonContent
                                    isPending={claimWavesDaoLpStore.isPending}
                                    isRetry={claimWavesDaoLpStore.isRetry}
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

ClaimWavesDaoLpModalFC.displayName = 'ClaimWavesDaoLpModal';

export const ClaimWavesDaoLpModal = translate('app.page')(
    ClaimWavesDaoLpModalFC
);
