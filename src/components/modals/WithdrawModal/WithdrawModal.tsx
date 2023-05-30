import * as React from 'react';
import { Observer } from 'mobx-react-lite';
import {
    Box,
    Flex,
    FormattedInput,
    PlateNote,
} from '@waves.exchange/wx-react-uikit';
import {
    Button,
    Checkbox,
    FeeComponent,
    InputErrors,
    SetAmountButtons,
    Text,
    WrapperFormattedInput,
} from 'uikit';
import { ModalStyled } from '../../Modal/ModalStyled';
import { ModalProps } from '../../Modal/Modal';
import { TxHeader } from '../components/TxHeader';
import { AppStoreContext } from '../../../App';
import { WithdrawModalStore } from './WithdrawModalStore';
import { Trans, translate } from '@waves/ui-translator';
import { MultiErrorComponent } from '../../../uikit/MultiErrorComponent/MultiErrorComponent';
import { ButtonContent } from '../../../uikit/Button/ButtonContent';
import { useState } from 'react';

const WithdrawModalFC: React.FC<ModalProps> = (props) => {
    const rs = React.useContext(AppStoreContext);
    const [checked, setChecked] = useState(false);

    const wavesBalance = rs.balanceStore.balances.WAVES;

    const withdrawStore = React.useMemo(() => {
        return new WithdrawModalStore({
            rs,
            inputMoney: wavesBalance.balance.cloneWithTokens(0) // todo LP ASSET
        });
    }, []);

    return (
        <ModalStyled
            sx={{
                '& > div': {
                    backgroundPosition: 'center -50px',
                    backgroundSize: 'cover',
                },
            }}
            {...props}
        >
            <Observer>
                {(): React.ReactElement => {
                    return (
                        <>
                            <TxHeader
                                icon={rs.assetsStore.assetsData.data.WAVES.icon}
                                title={{
                                    i18key: 'withdrawTitle',
                                    i18Params: {
                                        assetName:
                                        rs.assetsStore.assetsData.data.WAVES
                                            .displayName,
                                    },
                                }}
                                subtitle={{
                                    i18key: 'withdrawSubtitle',
                                    i18Params: {
                                        amount: '100500', // todo LP ASSET
                                        assetName: 'LP ASSET'
                                    },
                                }}
                            />

                            <Flex
                                flexDirection="column"
                                color="wdtextsec"
                                mb={12}
                            >
                                <Flex justifyContent="space-between" mb="6px">
                                    <Text variant="text2">I send</Text>{' '}
                                    <SetAmountButtons
                                        presets={['max']}
                                        onClick={() =>
                                            console.log('setMaxAmount')
                                        }
                                    />
                                </Flex>
                                <WrapperFormattedInput>
                                    <FormattedInput
                                        formatSeparator=","
                                        decimals={8}
                                        tag={'LP ASSET'}
                                        aria-invalid={
                                            withdrawStore.amountError
                                                ? 'true'
                                                : 'false'
                                        }
                                    />
                                </WrapperFormattedInput>
                                {withdrawStore.amountError && (
                                    <InputErrors error="required" />
                                )}
                            </Flex>

                            <Box
                                backgroundColor="rgba(0, 6, 22, 0.5)"
                                py="16px"
                                borderRadius="8px"
                                textAlign='center'
                            >
                                <Text variant='text2' color='wdtextsec' as='div'>
                                    <Trans i18key='iReceive' />
                                </Text>
                                <Text variant='text1' color='standard.$0'>
                                    <Trans i18key='withdrawReceive'/>
                                </Text>
                            </Box>
                            <FeeComponent mb="28px" />
                            <MultiErrorComponent
                                activeErrors={withdrawStore.activeErrors}
                            />
                            <PlateNote
                                type="warning"
                                border="1px solid"
                                mb="24px"
                            >
                                <Text
                                    variant="text2"
                                    color="wdwarning"
                                    as="div"
                                    mb="10px"
                                >
                                    <Trans
                                        i18key="withdrawWarning"
                                        i18Params={{ stakedAssetName: 'WAVES', lpAssetName: 'LP ASSET' }}
                                    />
                                </Text>
                                <Checkbox
                                    controlBoxStyles={{
                                        baseStyles: { mr: '10px' },
                                    }}
                                    isChecked={checked}
                                    isInvalid={false}
                                    onChange={(e): void =>
                                        setChecked(e.target.checked)
                                    }
                                    color="text"
                                >
                                    <Text variant="text2">
                                        <Trans i18key="iAgree" />
                                    </Text>
                                </Checkbox>
                            </PlateNote>
                            <Button
                                variant="primary"
                                width="100%"
                                onClick={withdrawStore.invoke}
                                disabled={withdrawStore.isPending || !checked}
                            >
                                <ButtonContent
                                    isPending={withdrawStore.isPending}
                                    isRetry={withdrawStore.isRetry}
                                    transText={{
                                        i18key: 'withdrawSubmit',
                                        i18Params: {
                                            assetName: wavesBalance.asset.displayName,
                                        },
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

WithdrawModalFC.displayName = 'WithdrawModal';
export const WithdrawModal = translate('app.page')(WithdrawModalFC);
