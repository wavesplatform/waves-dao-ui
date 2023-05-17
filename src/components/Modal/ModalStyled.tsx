import * as React from "react";
import { Modal, ModalProps } from "./Modal";
import { Box, Icon, iconClose } from "@waves.exchange/wx-react-uikit";
import { modalManager } from "../../services/modalManager";
import { MODAL_NAMES } from "../ModalContainer/MODAL_NAMES";

export const ModalStyled: React.FC<ModalProps> = ({ children, ...props }) => {
    return (
        <Modal {...props}>
            <Box
                p={24}
                backgroundImage={
                    "linear-gradient(180deg, rgba(2, 9, 21, 0) 19.79%, #020915 92.19%, #020915 100%)"
                }
            >
                <Icon
                    icon={iconClose}
                    sx={{ float: "right" }}
                    onClick={() =>
                        modalManager.closeModal(MODAL_NAMES.authModal, 'close')
                    }
                />
                <Box>{children}</Box>
            </Box>
        </Modal>
    );
};

ModalStyled.displayName = "ModalStyled";
