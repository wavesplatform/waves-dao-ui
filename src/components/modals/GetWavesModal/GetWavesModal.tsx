import * as React from 'react';
import { MODAL_NAMES } from '../../ModalContainer/MODAL_NAMES';
import { ModalProps } from '../../Modal/Modal';
import { Box, BoxProps } from '@waves.exchange/wx-react-uikit';
import { ModalStyled } from '../../Modal/ModalStyled';
import { ITransProps, Trans, translate } from '@waves/ui-translator';
import wavesUrl from '/src/img/waves.svg';
import { BalanceComponent } from '../../BalanceComponent/BalanceComponent';
import { AssetWithMeta } from '../../../stores/assets/interface';
import { Button, FeeComponent, Text } from '../../../uikit';
import { MultiErrorComponent } from '../../../uikit/MultiErrorComponent/MultiErrorComponent';

type TGetWavesModalFC = {
    WAVES: AssetWithMeta;
    balance: string;
    onClick: () => void;
    activeErrors?: ITransProps[] | ITransProps;
} & ModalProps &
    BoxProps;

const GetWavesModalFC: React.FC<TGetWavesModalFC> = ({
    WAVES,
    balance,
    onClick,
    activeErrors,
    ...props
}) => {
    const { sx = {}, ...restProps } = props;

    return (
        <ModalStyled
            modalName={MODAL_NAMES.getWaves}
            sx={{
                '& > div': {
                    backgroundPosition: 'bottom',
                    backgroundSize: 'cover',
                },
                ...(sx as Record<string, any>),
            }}
            {...restProps}
        >
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
            <MultiErrorComponent activeErrors={activeErrors} />
            <Button variant="primary" width="100%" onClick={onClick}>
                <Trans
                    i18key="getToken"
                    i18Params={{ assetName: WAVES?.ticker }}
                />
            </Button>
        </ModalStyled>
    );
};

GetWavesModalFC.displayName = 'GetWavesModal';

export const GetWavesModal = translate('app.page')(GetWavesModalFC);
