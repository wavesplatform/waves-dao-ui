import * as React from 'react';
import { Observer } from 'mobx-react-lite';
import {
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
import { DepositWavesStore } from './DepositWavesStore';
import { Trans, translate } from '@waves/ui-translator';
import { BalanceComponent } from '../../BalanceComponent/BalanceComponent';
import { MultiErrorComponent } from '../../../uikit/MultiErrorComponent/MultiErrorComponent';
import { ButtonContent } from '../../../uikit/Button/ButtonContent';
import { useState } from 'react';
import wavesLpWithoutBg from '/src/img/wavesLpWithoutBg.svg';

const DepositWavesModalFC: React.FC<ModalProps> = (props) => {
    const rs = React.useContext(AppStoreContext);
    const [checked, setChecked] = useState(false);

    const wavesBalance = rs.balanceStore.balances.WAVES;

    const depositWavesStore = React.useMemo(() => {
        return new DepositWavesStore({
            rs,
            inputMoney: wavesBalance.balance.cloneWithTokens(0),
            isMinAmountForWaves: true,
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
                                icon={rs.assetsStore.WAVES.icon}
                                title={{
                                    i18key: 'depositTitle',
                                    i18Params: {
                                        assetName:
                                            rs.assetsStore.WAVES.displayName,
                                    },
                                }}
                                subtitle={{
                                    i18key: 'depositSubtitle',
                                    i18Params: {
                                        amount: wavesBalance?.balance
                                            .getTokens()
                                            .toFormat(),
                                        assetName:
                                            wavesBalance.asset.displayName,
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
                                            depositWavesStore.onClickMaxAmount()
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
                                        onChange={(e) => {
                                            depositWavesStore.onInputChange(
                                                e.target.value
                                            );
                                        }}
                                        value={depositWavesStore.inputString}
                                        formatSeparator=","
                                        decimals={8}
                                        tag="WAVES"
                                        aria-invalid={
                                            depositWavesStore.amountError
                                                ? 'true'
                                                : 'false'
                                        }
                                    />
                                </WrapperFormattedInput>
                                {depositWavesStore.amountError && (
                                    <InputErrors
                                        {...depositWavesStore.amountError}
                                    />
                                )}
                            </Flex>

                            <BalanceComponent
                                label={{
                                    i18key: 'iReceive',
                                }}
                                sx={{
                                    img: {
                                        width: '100%',
                                        height: '100%',
                                    },
                                }}
                                balance={
                                    depositWavesStore.getReceiveLp?.toFormat() ||
                                    '0'
                                }
                                bottomContent={() => {
                                    return (
                                        <Flex color="wdtextsec" mt={4}>
                                            <Text variant="text2" mr="4px">
                                                1{' '}
                                                {wavesBalance.asset.displayName}{' '}
                                                ={' '}
                                                {`${depositWavesStore.rs.contractDataStore.getCurrentPriceWavesLp
                                                    .getTokens()
                                                    .toFormat()} `}
                                                {
                                                    rs.balanceStore
                                                        .getWavesLpBalance.asset
                                                        .displayName
                                                }
                                            </Text>
                                        </Flex>
                                    );
                                }}
                                ticker={
                                    rs.balanceStore.getWavesLpBalance.asset
                                        .displayName
                                }
                                iconUrl={wavesLpWithoutBg}
                            />
                            <FeeComponent my="16px" />
                            <MultiErrorComponent
                                activeErrors={depositWavesStore.activeErrors}
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
                                        i18key="depositWarning"
                                        i18Params={{
                                            assetName:
                                                rs.balanceStore
                                                    .getWavesLpBalance.asset
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
                                variant="primary"
                                width="100%"
                                onClick={depositWavesStore.invoke}
                                disabled={
                                    depositWavesStore.isPending || !checked
                                }
                            >
                                <ButtonContent
                                    isPending={depositWavesStore.isPending}
                                    isRetry={depositWavesStore.isRetry}
                                    transText={{
                                        i18key: 'depositSubmit',
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

DepositWavesModalFC.displayName = 'DepositWavesModal';
export const DepositWavesModal = translate('app.page')(DepositWavesModalFC);
