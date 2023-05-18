import * as React from 'react';
import { ModalProps } from '../../Modal/Modal';
import { ModalStyled } from '../../Modal/ModalStyled';
import { Box, Text } from '@waves.exchange/wx-react-uikit';
import { AuthItem } from './components/AuthItem';
import { keeper } from './icons';
import { modalManager } from '../../../services/modalManager';
import { MODAL_NAMES } from '../../ModalContainer/MODAL_NAMES';
import { AUTH_KEEPER_STATES, KeeperAuthModalProps } from '../KeeperAuthModal/KeeperAuthModal';
import { Checkbox } from '../../../uikit/Checkbox/Checkbox';
import { useState } from 'react';
import { Button } from '../../../uikit/Button/Button';
import { Trans } from '@waves/ui-translator';


export const AuthModal: React.FC<ModalProps> = (props) => {
    const [checked, setChecked] = useState(false);
    const [selectedProvider, setSelectedProvider] = useState<string>();

    const selectKeeper = () => {
        setSelectedProvider('keeper');
    };

    const login = async () => {
        console.log(selectedProvider);
        await modalManager.closeModal(MODAL_NAMES.authModal, 'close');
        modalManager.openModal<KeeperAuthModalProps>(MODAL_NAMES.keeperAuth, {
            modalState: AUTH_KEEPER_STATES.noAccounts
        });
    };

    return (
        <ModalStyled {...props}>
            <Box>
                <Text variant='heading2'>
                    Connect Wallet
                </Text>
            </Box>
            <Box>
                <AuthItem icon={keeper} text={{ i18key: 'keeper' }} onSelect={selectKeeper} />
            </Box>
            <Checkbox
                controlBoxStyles={{ baseStyles: { mr: '10px' } }}
                isChecked={checked}
                isInvalid={false}
                onChange={(e) => setChecked(e.target.checked)}
                color="text"
            >
                {/*<Trans i18key='legalCheckbox' />*/}
                I have read and agreed with the Legal Disclaimer.
            </Checkbox>
            <Button variant='primary' width='100%' onClick={login} mt={28}>
                {/*<Trans i18key='continue' />*/}
                Continue
            </Button>
        </ModalStyled>
    );
};

AuthModal.displayName = 'AuthModal';
