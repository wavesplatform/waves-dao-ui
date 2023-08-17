import * as React from 'react';
import { Money } from '@waves/data-entities';
import { Observer } from 'mobx-react-lite';
import { Button, FeeComponent, Text } from 'uikit';
import { MODAL_NAMES } from '../../ModalContainer/MODAL_NAMES';
import { ModalProps } from '../../Modal/Modal';
import { BoxProps } from '@waves.exchange/wx-react-uikit';
import { ModalStyled } from '../../Modal/ModalStyled';
import { Trans, translate } from '@waves/ui-translator';
import { MultiErrorComponent } from '../../../uikit/MultiErrorComponent/MultiErrorComponent';
import { AppStoreContext } from '../../../App';
import { GetTokensStore } from './GetTokensStore.ts';
import { ButtonContent } from '../../../uikit/Button/ButtonContent';
import { Tokens } from './components/Tokens';

export type TGetModalData = {
    withdrawTxId: string;
    wavesEq: Money;
    tokens: Array<Money>;
};

type TGetModalFC =
    ModalProps &
    BoxProps &
    TGetModalData;

const GetTokensFC: React.FC<TGetModalFC> = ({
    ...props
}) => {
    const {
        sx = {},
        wavesEq,
        tokens,
        withdrawTxId,
        ...restProps
    } = props;
    const rootStore = React.useContext(AppStoreContext);
    const getTokensStore = React.useMemo(() => {
        return new GetTokensStore(rootStore, withdrawTxId);
    }, []);

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
                        <Text
                            variant="heading2"
                            as="div"
                            textAlign="center"
                            color="standard.$0"
                            mb="24px"
                        >
                            <Trans i18key="getTokens" />
                        </Text>
                        <Tokens tokens={tokens} wavesEq={wavesEq}/>
                        <FeeComponent mb="28px" />
                        <MultiErrorComponent
                            activeErrors={getTokensStore.activeErrors}
                        />
                        <Button
                            variantSize='large'
                            variant="primary"
                            width="100%"
                            onClick={getTokensStore.invoke}
                            disabled={getTokensStore.isPending}
                        >
                            <ButtonContent
                                isPending={getTokensStore.isPending}
                                isRetry={getTokensStore.isRetry}
                                transText={{ i18key: 'getTokens' }}
                            />
                        </Button>
                    </>
                )}
            </Observer>
        </ModalStyled>
    );
};

GetTokensFC.displayName = 'GetTokensModal';

export const GetTokens = translate('app.page')(
    GetTokensFC
);
