import * as React from 'react';
import { IIcon } from '@waves.exchange/wx-react-uikit/dist/esm/components/Icon/Icon';
import { Flex, Icon } from '@waves.exchange/wx-react-uikit';
import { Text } from './../../../../uikit/Text/Text';
import { ITransProps, Trans, translate } from '@waves/ui-translator';

interface AuthItemProps {
    text: ITransProps;
    icon: IIcon;
    onSelect: () => void;
}

const AuthItemFC: React.FC<AuthItemProps> = ({ onSelect, text, icon }) => {

    return (
        <Flex onClick={onSelect} width={340} p={16}>
            <Icon icon={icon} size={28}/>
            <Text variant='text1'>
                <Trans {...text}/>
            </Text>
        </Flex>
    );
};

AuthItemFC.displayName = 'AuthItem';
export const AuthItem = translate("app.page")(AuthItemFC);
