import * as React from 'react';
import { MODAL_NAMES } from '../../ModalContainer/MODAL_NAMES';
import { ModalProps } from '../../Modal/Modal';
import { Box, BoxProps } from '@waves.exchange/wx-react-uikit';
import { ModalStyled } from '../../Modal/ModalStyled';
import { Trans, translate } from '@waves/ui-translator';
import wavesUrl from '/src/img/waves.svg';
import { BalanceComponent } from '../../BalanceComponent/BalanceComponent';
import { Button, FeeComponent, Text } from '../../../uikit';
import { MultiErrorComponent } from '../../../uikit/MultiErrorComponent/MultiErrorComponent';
import { AppStoreContext } from '../../../App';
import { GetWavesStore } from './GetWavesStore';
import { Observer } from 'mobx-react-lite';
import { ButtonContent } from '../../../uikit/Button/ButtonContent';

type TGetWavesModalFC = ModalProps & BoxProps & { claimTxId: string };

const GetWavesModalFC: React.FC<TGetWavesModalFC> = ({ claimTxId,  ...props }) => {
    const rootStore = React.useContext(AppStoreContext);
    const getWavesStore = React.useMemo(() => {
        return new GetWavesStore(rootStore, claimTxId);
    }, []);
    const { sx = {}, ...restProps } = props;
    const WAVES = rootStore.assetsStore.WAVES;
    const balance =
        rootStore.balanceStore.balances[WAVES?.id]?.balance?.toFormat();

    return (
        <ModalStyled
            modalName={MODAL_NAMES.getWaves}
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
                                backgroundImage={`url(${wavesUrl})`}
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
                                <Trans
                                    i18key="getToken"
                                    i18Params={{ assetName: WAVES?.ticker }}
                                />
                            </Text>
                            <BalanceComponent
                                label={{
                                    i18key: 'availableForGet',
                                }}
                                balance={balance}
                                ticker={WAVES?.ticker}
                                iconUrl={WAVES?.icon}
                                mb="28px"
                            />
                            <FeeComponent mb="28px" />
                            <MultiErrorComponent
                                activeErrors={getWavesStore.activeErrors}
                            />
                            <Button
                                variant="primary"
                                width="100%"
                                disabled={getWavesStore.isPending}
                                onClick={getWavesStore.invoke}
                            >
                                <ButtonContent
                                    isPending={getWavesStore.isPending}
                                    isRetry={getWavesStore.isRetry}
                                    transText={{
                                        i18key: 'getToken',
                                        i18Params: { assetName: WAVES?.ticker },
                                    }}
                                />
                            </Button>
                        </>
                    );
                }}
            </Observer>
        </ModalStyled>
    );
};

GetWavesModalFC.displayName = 'GetWavesModal';

export const GetWavesModal = translate('app.page')(GetWavesModalFC);
