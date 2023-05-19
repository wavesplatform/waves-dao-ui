import { FC } from 'react';
import { Text as TextKit, TTextProps as TextPropsKit } from '@waves.exchange/wx-react-uikit';

const variants = {
    heading1: {
        fontSize: '30px',
        lineHeight: '42px',
        fontWeight: '800',
    },
    heading2: {
        fontSize: '22px',
        lineHeight: '31px',
        fontWeight: '700',
    },
    heading3: {
        fontSize: '20px',
        lineHeight: '30px',
        fontWeight: '600',
    },
    text1: {
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: '600',
    },
    text2: {
        fontSize: '12px',
        lineHeight: '17px',
        fontWeight: '400',
    },
};

export type TextProps = TextPropsKit & { variant?: keyof typeof variants };

export const Text: FC<TextProps> = ({ children, variant, ...props }) => {
    return (
        <TextKit {...variants[variant]} {...props}>
            {children}
        </TextKit>
    );
};

Text.displayName = 'Text';
