import * as React from "react";
import { ModalProps } from "../../Modal/Modal";
import { ModalStyled } from "../../Modal/ModalStyled";
import { Box, Text } from "@waves.exchange/wx-react-uikit";
import { AuthItem } from "./components/AuthItem";
import { keeper } from "./icons";
import { Checkbox } from "../../../uikit/Checkbox/Checkbox";
import { useState } from "react";
import { Button } from "../../../uikit/Button/Button";
import { TProvider } from "../../../services/authService";
import { useAuth } from "./hooks/useAuth";
import { modalManager } from '../../../services/modalManager';
import { MODAL_NAMES } from '../../ModalContainer/MODAL_NAMES';

export const AuthModal: React.FC<ModalProps> = (props) => {
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
                    text={{ i18key: "keeper" }}
                    onSelect={() => setSelectedProvider('keeper')}
                />
            </Box>
            <Checkbox
                controlBoxStyles={{ baseStyles: { mr: "10px" } }}
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

AuthModal.displayName = "AuthModal";
