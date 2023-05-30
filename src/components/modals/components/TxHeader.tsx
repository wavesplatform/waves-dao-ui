import * as React from 'react';
import { Box } from '@waves.exchange/wx-react-uikit';
import { Text } from 'uikit';
import { ITransProps, Trans } from '@waves/ui-translator';

interface TxHeaderProps {
    icon: string;
    title: ITransProps;
    subtitle?: ITransProps;
}

export const TxHeader: React.FC<TxHeaderProps> = ({ icon, title, subtitle }) => {

    return (
        <>
            <Box
                mt="10px"
                width="82px"
                height="82px"
                backgroundImage={`url(${icon})`}
                backgroundRepeat="no-repeat"
                backgroundSize="contain"
                marginLeft="auto"
                marginRight="auto"
                mb="24px"
            />
            <Text
                variant="heading2"
                as="div"
                textAlign="center"
                color="standard.$0"
                mb="2px"
            >
                <Trans {...title} />
            </Text>
            {subtitle ? <Text
                variant="text2"
                as="div"
                textAlign="center"
                color="wdtextsec"
                mb="24px"
                sx={{
                    '.available': {
                        color: 'standard.$0',
                    }
                }}
            >
                <Trans {...subtitle} />
            </Text> : null}
        </>
    );
};

TxHeader.displayName = 'TxHeader';
