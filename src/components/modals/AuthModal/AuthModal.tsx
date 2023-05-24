import * as React from 'react';
import { ModalProps } from '../../Modal/Modal';
import { ModalStyled } from '../../Modal/ModalStyled';
import { Box, Flex } from '@waves.exchange/wx-react-uikit';
import { Text } from 'uikit';
import { AuthItem } from './components/AuthItem';
import { keeper, metaMask, wxIcon } from './icons';
import { Checkbox } from 'uikit';
import { useState } from 'react';
import { Button } from 'uikit';
import { useAuth } from './hooks/useAuth';
import { modalManager } from '../../../services/modalManager';
import { MODAL_NAMES } from '../../ModalContainer/MODAL_NAMES';
import { Trans, translate } from '@waves/ui-translator';
import { TProvider } from '../../../stores/AuthStore';

const AuthModalFC: React.FC<ModalProps> = (props) => {
    const [checked, setChecked] = useState(false);
    const [selectedProvider, setSelectedProvider] = useState<TProvider>();
    const { login } = useAuth(selectedProvider);
    const wrapperRef = React.useRef(null);
    const handleContinue = async () => {
        await modalManager.closeModal(MODAL_NAMES.authModal, 'close');
        login();
    };

    React.useEffect(() => {
        const legalDisclaimer =
            wrapperRef.current.querySelector('.legalDisclaimer');
        const clickHandler = () =>
            modalManager.openModal(MODAL_NAMES.legalDisclaimer, undefined, 500);
        if (legalDisclaimer) {
            legalDisclaimer.addEventListener('click', clickHandler);
        }

        return () => {
            if (legalDisclaimer) {
                legalDisclaimer.removeEventListener('click', clickHandler);
            }
        };
    }, []);

    return (
        <ModalStyled {...props}>
            <Box mt="30px" textAlign="center" color="standard.$0" mb="24px">
                <Text variant="heading2">
                    <Trans i18key="connectWallet" />
                </Text>
            </Box>
            <Flex flexDirection="column" alignItems="center" ref={wrapperRef}>
                <AuthItem
                    icon={metaMask}
                    text={{ i18key: 'metaMask' }}
                    onSelect={() => setSelectedProvider('metamask')}
                    className={`${
                        selectedProvider === 'metamask' ? 'selected' : ''
                    }`}
                />
                <AuthItem
                    icon={keeper}
                    text={{ i18key: 'keeperWallet' }}
                    onSelect={() => setSelectedProvider('keeper')}
                    className={`${
                        selectedProvider === 'keeper' ? 'selected' : ''
                    }`}
                />

                <AuthItem
                    icon={wxIcon}
                    text={{ i18key: 'seed' }}
                    onSelect={() => setSelectedProvider('web')}
                    className={`${
                        selectedProvider === 'web' ? 'selected' : ''
                    }`}
                />

                <AuthItem
                    icon={wxIcon}
                    text={{ i18key: 'cloud' }}
                    onSelect={() => setSelectedProvider('cloud')}
                    className={`${
                        selectedProvider === 'cloud' ? 'selected' : ''
                    }`}
                />

                <Checkbox
                    controlBoxStyles={{ baseStyles: { mr: '10px' } }}
                    isChecked={checked}
                    isInvalid={false}
                    onChange={(e): void => setChecked(e.target.checked)}
                    color="text"
                    mt="22px"
                >
                    <Text
                        variant="text2"
                        sx={{
                            '.legalDisclaimer': {
                                color: 'wdmain',
                                cursor: 'pointer',
                            },
                        }}
                    >
                        <Trans i18key="legalCheckbox" />
                    </Text>
                </Checkbox>
                <Button
                    variant="primary"
                    width="100%"
                    onClick={handleContinue}
                    mt={28}
                    disabled={!selectedProvider || !checked}
                >
                    <Trans i18key="continue" />
                </Button>
            </Flex>
        </ModalStyled>
    );
};

AuthModalFC.displayName = 'AuthModal';

export const AuthModal = translate('app.page')(AuthModalFC);
