import * as React from 'react';
import { ITransProps, Trans } from '@waves/ui-translator';
import { IIcon } from '@waves.exchange/wx-react-uikit/dist/esm/components/Icon/Icon';
import { Flex, Icon } from '@waves.exchange/wx-react-uikit';
import { Text } from '../../../../uikit/Text/Text';

export interface AuthTemplateProps {
    icon: IIcon;
    title: ITransProps;
    text: ITransProps;
    onRetry?: () => void;
}

export const AuthTemplate: React.FC<AuthTemplateProps> = ({ icon, title, text }) => {

    return (
        <Flex flexDirection='column' alignItems="center">
            <Icon icon={icon} size={82}/>
            <Text variant='heading2'>
                {/*<Trans {...title} />*/}
                TITLE
            </Text>
            <Text variant='text2'>
                TEXT
                {/*<Trans {...text} />*/}
            </Text>
        </Flex>
    );
};

AuthTemplate.displayName = 'AuthTemplate';
