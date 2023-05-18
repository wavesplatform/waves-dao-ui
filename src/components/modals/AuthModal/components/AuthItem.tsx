import * as React from 'react';
import { IIcon } from '@waves.exchange/wx-react-uikit/dist/esm/components/Icon/Icon';
import { Flex, Icon } from '@waves.exchange/wx-react-uikit';
import { ITransProps } from '@waves/ui-translator';

interface AuthItemProps {
    text: ITransProps;
    icon: IIcon;
    onSelect: () => void;
}

export const AuthItem: React.FC<AuthItemProps> = ({ onSelect, text, icon }) => {

    return (
        <Flex onClick={onSelect} width={340} p={16}>
            <Icon icon={icon} size={28}/>
            {/*<Trans {...text}/>*/}
        </Flex>
    );
};

AuthItem.displayName = 'AuthItem';
