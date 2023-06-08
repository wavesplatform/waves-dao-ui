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
import { CancelWithdrawalStore } from './CancelWithdrawalStore';
import { wavesAsset } from '../../../services/assets';
import { ButtonContent } from '../../../uikit/Button/ButtonContent';
import { Observer } from 'mobx-react-lite';

type TCancelWithdrawalModalFC = ModalProps & BoxProps;

const CancelWithdrawalModalFC: React.FC<TCancelWithdrawalModalFC> = ({
    ...props
}) => {
    const rootStore = React.useContext(AppStoreContext);
    const cancelWithdrawalStore = React.useMemo(() => {
        return new CancelWithdrawalStore(rootStore);
    }, []);
    const WAVES = rootStore.assetsStore.WAVES;
    const balance =
        rootStore.balanceStore.balances[WAVES?.id]?.balance?.toFormat();
    const wavesdlpAsset = { ...wavesAsset, displayName: 'WAVESDLP' };
    const { sx = {}, ...restProps } = props;

    return (
        <ModalStyled
            modalName={MODAL_NAMES.cancelWithdrawal}
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
                {(): React.ReactElement => (
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
                            <Trans i18key="cancelWithdrawal" />
                        </Text>
                        <BalanceComponent
                            sx={{
                                img: {
                                    width: '100%',
                                    height: '100%',
                                },
                            }}
                            label={{
                                i18key: 'amount',
                            }}
                            balance={balance}
                            ticker={wavesdlpAsset?.ticker}
                            iconUrl={wavesLpWithoutBg}
                            mb="28px"
                        />
                        <FeeComponent mb="28px" />
                        <MultiErrorComponent
                            activeErrors={cancelWithdrawalStore.activeErrors}
                        />
                        <Button
                            variant="primary"
                            width="100%"
                            onClick={cancelWithdrawalStore.invoke}
                            disabled={cancelWithdrawalStore.isPending}
                        >
                            <ButtonContent
                                isPending={cancelWithdrawalStore.isPending}
                                isRetry={cancelWithdrawalStore.isRetry}
                                transText={{ i18key: 'cancelWithdrawal' }}
                            />
                        </Button>
                    </>
                )}
            </Observer>
        </ModalStyled>
    );
};

CancelWithdrawalModalFC.displayName = 'CancelWithdrawalModal';

export const CancelWithdrawalModal = translate('app.page')(
    CancelWithdrawalModalFC
);
