import * as React from 'react';
import { ITransProps, Trans } from '@waves/ui-translator';
import { IIcon } from '@waves.exchange/wx-react-uikit/dist/esm/components/Icon/Icon';
import { DotLoader, Flex, Icon } from '@waves.exchange/wx-react-uikit';
import { Text } from '../../../../uikit/Text/Text';
import { Button } from '../../../../uikit/Button/Button';

export interface AuthTemplateProps {
    icon: IIcon;
    title: ITransProps;
    text: ITransProps;
    onRetry?: () => Promise<any>;
}

export const AuthTemplate: React.FC<AuthTemplateProps> = ({ icon, title, text, onRetry }) => {
    const [isPending, setIsPending] = React.useState(false);
    const handleRetry = async () => {
        setIsPending(true);
        await onRetry();
        setIsPending(false);
    };
    return (
        <Flex flexDirection='column' alignItems="center">
            <Icon icon={icon} size={82}/>
            <Text variant='heading2'>
                <Trans {...title} />
            </Text>
            <Text variant='text2'>
                <Trans {...text} />
            </Text>
            <Button variant='primary' onClick={handleRetry}>
                {
                    isPending ?
                        <DotLoader /> :
                        <Trans i18key='retry />
                }
            </Button>
        </Flex>
    );
};

AuthTemplate.displayName = 'AuthTemplate';
