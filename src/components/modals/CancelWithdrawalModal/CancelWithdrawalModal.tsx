import * as React from 'react';
import { MODAL_NAMES } from '../../ModalContainer/MODAL_NAMES';
import { ModalProps } from '../../Modal/Modal';
import { Box, BoxProps } from '@waves.exchange/wx-react-uikit';
import { ModalStyled } from '../../Modal/ModalStyled';
import { ITransProps, Trans, translate } from '@waves/ui-translator';
import waveslp from '/src/img/waveslp.svg';
import { BalanceComponent } from '../../BalanceComponent/BalanceComponent';
import { AssetWithMeta } from '../../../stores/assets/interface';
import { Button, FeeComponent, Text } from '../../../uikit';
import { MultiErrorComponent } from '../../../uikit/MultiErrorComponent/MultiErrorComponent';
import wavesLpWithoutBg from '/src/img/wavesLpWithoutBg.svg';

type TCancelWithdrawalModalFC = {
    wavesdlpAsset: AssetWithMeta;
    balance: string;
    onClick: () => void;
    activeErrors?: ITransProps[] | ITransProps;
} & ModalProps &
    BoxProps;

const CancelWithdrawalModalFC: React.FC<TCancelWithdrawalModalFC> = ({
    wavesdlpAsset,
    balance,
    onClick,
    activeErrors,
    ...props
}) => {
    const { sx = {}, ...restProps } = props;

    return (
        <ModalStyled
            modalName={MODAL_NAMES.cancelWithdrawal}
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
                label={{
                    i18key: 'amount',
                }}
                balance={balance}
                ticker={wavesdlpAsset?.ticker}
                iconUrl={wavesLpWithoutBg}
                mb="28px"
            />
            <FeeComponent mb="28px" />
            <MultiErrorComponent activeErrors={activeErrors} />
            <Button variant="primary" width="100%" onClick={onClick}>
                <Trans i18key="cancelWithdrawal" />
            </Button>
        </ModalStyled>
    );
};

CancelWithdrawalModalFC.displayName = 'CancelWithdrawalModal';

export const CancelWithdrawalModal = translate('app.page')(
    CancelWithdrawalModalFC
);
