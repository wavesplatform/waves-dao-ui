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
            inputMoney: rs.balanceStore.wavesLpBalance.cloneWithTokens(0),
        });
    }, []);

    return (
        <ModalStyled
            sx={{
                '& > div': {
                    backgroundPosition: 'center -300px',
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
                                icon={rs.assetsStore.WAVES.icon}
                                title={{
                                    i18key: 'withdrawTitle',
                                    i18Params: {
                                        assetName:
                                            rs.assetsStore.WAVES.displayName,
                                    },
                                }}
                                subtitle={{
                                    i18key: 'withdrawSubtitle',
                                    i18Params: {
                                        amount: rs.balanceStore.wavesLpBalance
                                            .getTokens()
                                            .toFormat(),
                                        assetName:
                                            rs.balanceStore.wavesLpBalance
                                                .asset.displayName,
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
                                            withdrawStore.onClickMaxAmount()
                                        }
                                    />
                                </Flex>
                                <WrapperFormattedInput
                                    sx={{
                                        input: {
                                            backgroundColor:
                                                'rgba(0, 6, 22, 0.5)',
                                        },
                                    }}
                                >
                                    <FormattedInput
                                        formatSeparator=","
                                        value={withdrawStore.inputString}
                                        onChange={(e) => {
                                            withdrawStore.onInputChange(
                                                e.target.value
                                            );
                                        }}
                                        decimals={8}
                                        tag={
                                            rs.balanceStore.wavesLpBalance
                                                .asset.displayName
                                        }
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
                                px="16px"
                                borderRadius="8px"
                                textAlign="center"
                            >
                                <Text
                                    variant="text2"
                                    color="wdtextsec"
                                    as="div"
                                >
                                    <Trans i18key="iReceive" />
                                </Text>
                                <Text variant="text1" color="standard.$0">
                                    <Trans i18key="withdrawReceive" />
                                </Text>
                            </Box>
                            <FeeComponent my="16px" />
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
                                        i18Params={{
                                            stakedAssetName: 'WAVES',
                                            lpAssetName:
                                                rs.balanceStore
                                                    .wavesLpBalance.asset
                                                    .displayName,
                                        }}
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
                                variantSize='large'
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
                                            assetName:
                                                wavesBalance.asset.displayName,
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
