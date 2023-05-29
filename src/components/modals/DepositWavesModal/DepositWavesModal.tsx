import * as React from 'react';
import { Observer } from 'mobx-react-lite';
import { Flex, FormattedInput } from '@waves.exchange/wx-react-uikit';
import { Button, FeeComponent, InputErrors, SetAmountButtons, Text, WrapperFormattedInput } from 'uikit';
import { ModalStyled } from '../../Modal/ModalStyled';
import { ModalProps } from '../../Modal/Modal';
import { TxHeader } from '../components/TxHeader';
import { AppStoreContext } from '../../../App';
import { DepositWavesStore } from './DepositWavesStore';
import { translate } from '@waves/ui-translator';
import { BalanceComponent } from '../../BalanceComponent/BalanceComponent';
import { MultiErrorComponent } from '../../../uikit/MultiErrorComponent/MultiErrorComponent';
import { ButtonContent } from '../../../uikit/Button/ButtonContent';

const DepositWavesModalFC: React.FC<ModalProps> = (props) => {
    const rs = React.useContext(AppStoreContext);

    const wavesBalance = rs.balanceStore.balances.WAVES;

    const depositWavesStore = React.useMemo(() => {
        return new DepositWavesStore(rs);
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
                                title={{ i18key: 'depositWavesTitle' }}
                                subtitle={{
                                    i18key: 'depositWavesSubtitle',
                                    i18Params: {
                                        amount: wavesBalance?.balance
                                            .getTokens()
                                            .toFormat(),
                                        ticker: wavesBalance.asset.displayName,
                                    },
                                }}
                            />

                            <Flex flexDirection="column" color="wdtextsec" mb={12}>
                                <Flex justifyContent="space-between" mb="6px">
                                    <Text variant="text2">I send</Text>{' '}
                                    <SetAmountButtons
                                        presets={['max']}
                                        onClick={() => console.log('setMaxAmount')}
                                    />
                                </Flex>
                                <WrapperFormattedInput>
                                    <FormattedInput
                                        formatSeparator=","
                                        decimals={8}
                                        tag="WAVES"
                                        aria-invalid="true"
                                    />
                                </WrapperFormattedInput>
                                <InputErrors error="required" />
                            </Flex>

                            <BalanceComponent
                                label={{
                                    i18key: 'availableClaim',
                                }}
                                // todo change to lp
                                balance={wavesBalance?.balance.getTokens().toFormat()}
                                bottomContent={() => {
                                    return (
                                        <Flex color='wdtextsec' mt={4}>
                                            <Text variant="text2" mr="4px">
                                                1 {wavesBalance.asset.displayName} ={' '} 1 {'LP ASSET'}
                                            </Text>
                                        </Flex>
                                    );
                                }}
                                ticker={wavesBalance?.asset.ticker}
                                iconUrl={wavesBalance?.asset.icon}
                                mb="28px"
                            />
                            <FeeComponent mb="28px" />
                            <MultiErrorComponent
                                activeErrors={depositWavesStore.activeErrors}
                            />
                            <Button
                                variant="primary"
                                width="100%"
                                onClick={depositWavesStore.invoke}
                                disabled={depositWavesStore.isPending}
                            >
                                <ButtonContent
                                    isPending={depositWavesStore.isPending}
                                    isRetry={depositWavesStore.isRetry}
                                    transText={{ i18key: 'depositWaves' }}
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
