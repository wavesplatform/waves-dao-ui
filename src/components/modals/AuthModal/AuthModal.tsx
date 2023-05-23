import * as React from 'react';
import { ModalProps } from '../../Modal/Modal';
import { ModalStyled } from '../../Modal/ModalStyled';
import { Box } from '@waves.exchange/wx-react-uikit';
import { Text }  from 'uikit';
import { AuthItem } from './components/AuthItem';
import { keeper, wxIcon } from './icons';
import { Checkbox } from 'uikit';
import { useState } from 'react';
import { Button } from 'uikit';
import { useAuth } from './hooks/useAuth';
import { modalManager } from '../../../services/modalManager';
import { MODAL_NAMES } from '../../ModalContainer/MODAL_NAMES';
import { translate } from '@waves/ui-translator';
import { TProvider } from '../../../stores/AuthStore';

const AuthModalFC: React.FC<ModalProps> = (props) => {
    const [checked, setChecked] = useState(false);
    const [selectedProvider, setSelectedProvider] = useState<TProvider>();
    const { login } = useAuth(selectedProvider);

    const handleContinue = async () => {
        await modalManager.closeModal(MODAL_NAMES.authModal, 'close');
        login();
    };

    return (
        <ModalStyled {...props}>
            <Box>
                <Text variant="heading2">Connect Wallet</Text>
            </Box>
            <Box>
                <AuthItem
                    icon={keeper}
                    text={{ i18key: 'keeper' }}
                    onSelect={() => setSelectedProvider('keeper')}
                />
            </Box>
            <Box>
                <AuthItem
                    icon={wxIcon}
                    text={{ i18key: 'seed' }}
                    onSelect={() => setSelectedProvider('web')}
                />
            </Box>
            <Box>
                <AuthItem
                    icon={wxIcon}
                    text={{ i18key: 'cloud' }}
                    onSelect={() => setSelectedProvider('cloud')}
                />
            </Box>
            <Checkbox
                controlBoxStyles={{ baseStyles: { mr: '10px' } }}
                isChecked={checked}
                isInvalid={false}
                onChange={(e) => setChecked(e.target.checked)}
                color="text"
            >
                {/*<Trans i18key='legalCheckbox' />*/}I have read and agreed
                with the Legal Disclaimer.
            </Checkbox>
            <Button
                variant="primary"
                width="100%"
                onClick={handleContinue}
                mt={28}
                disabled={!selectedProvider || !checked}
            >
                {/*<Trans i18key='continue' />*/}
                Continue
            </Button>
        </ModalStyled>
    );
};

AuthModalFC.displayName = 'AuthModal';

export const AuthModal = translate('app.page')(AuthModalFC);
