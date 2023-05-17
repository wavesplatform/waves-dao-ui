import * as React from 'react';
import { ITransProps, Trans } from '@waves/ui-translator';
import { IIcon } from '@waves.exchange/wx-react-uikit/dist/esm/components/Icon/Icon';
import { Flex, Icon } from '@waves.exchange/wx-react-uikit';
import { Text } from '../../../../uikit/Text/Text';
import { Button } from '../../../../uikit/Button/Button';

export interface AuthTemplateProps {
    icon: IIcon;
    title: ITransProps;
    text: ITransProps;
    onRetry?: () => void;
}

export const AuthTemplate: React.FC<AuthTemplateProps> = ({ icon, title, text, onRetry }) => {

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
            <Button variant='primary' onClick={onRetry}>
                retry
                {/*<Trans i18key='retry />*/}
            </Button>
        </Flex>
    );
};

AuthTemplate.displayName = 'AuthTemplate';
