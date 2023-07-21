import * as React from 'react';
import { Money } from '@waves/data-entities';
import { Observer } from 'mobx-react-lite';
import { Button, FeeComponent, Text } from 'uikit';
import { MODAL_NAMES } from '../../ModalContainer/MODAL_NAMES';
import { ModalProps } from '../../Modal/Modal';
import { Box, BoxProps } from '@waves.exchange/wx-react-uikit';
import { ModalStyled } from '../../Modal/ModalStyled';
import { Trans, translate } from '@waves/ui-translator';
import waveslp from '/src/img/waveslp.svg';
import { MultiErrorComponent } from '../../../uikit/MultiErrorComponent/MultiErrorComponent';
import { AppStoreContext } from '../../../App';
import { CancelWithdrawalStore } from './CancelWithdrawalStore';
import { ButtonContent } from '../../../uikit/Button/ButtonContent';
import { Tokens } from './components/Tokens';

type TCancelWithdrawalModalFC = ModalProps &
    BoxProps & { withdrawTxId: string; lpAmount: Money };

const GetTokensFC: React.FC<TCancelWithdrawalModalFC> = ({
    ...props
}) => {
    const { sx = {}, lpAmount, withdrawTxId, ...restProps } = props;
    const rootStore = React.useContext(AppStoreContext);
    const cancelWithdrawalStore = React.useMemo(() => {
        return new CancelWithdrawalStore(rootStore, withdrawTxId);
    }, []);

    const tokens = [
        new Money(1000, rootStore.assetsStore.LPToken),
        new Money(2000, rootStore.assetsStore.WAVES),
        new Money(3000, rootStore.assetsStore.XTN)
    ]; //todo change to real data

    const wavesEq = new Money(200000, rootStore.assetsStore.WAVES); //todo change to real data

    return (
        <ModalStyled
            modalName={MODAL_NAMES.getTokens}
            sx={{
                '& >  div': {
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
                        <Tokens tokens={tokens} wavesEq={wavesEq}/>
                        <FeeComponent mb="28px" />
                        <MultiErrorComponent
                            activeErrors={cancelWithdrawalStore.activeErrors}
                        />
                        <Button
                            variantSize='large'
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

GetTokensFC.displayName = 'CancelWithdrawalModal';

export const GetTokens = translate('app.page')(
    GetTokensFC
);
