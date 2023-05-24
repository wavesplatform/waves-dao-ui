import * as React from 'react';
import { PlateNote, TPlateNote, Text } from '@waves.exchange/wx-react-uikit';
import { ITransProps, Trans } from '@waves/ui-translator';

interface IFeeError {
    transProps?: ITransProps;
}

export const FeeError: React.FC<IFeeError & TPlateNote> = ({
    transProps = {},
    ...rest
}) => {
    return (
        <PlateNote
            type="error"
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
                '& > span': {
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    justifyContent: 'space-between',
                },
                ...((rest && rest.sx ? rest.sx : {}) as Record<string, any>),
            }}
            {...rest}
        >
            <Text color="text">
                <Trans i18key="havenotfee" ns="app" {...transProps} />
            </Text>
        </PlateNote>
    );
};

FeeError.displayName = 'FeeError';
