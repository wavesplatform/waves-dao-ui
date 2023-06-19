import { FC, memo } from 'react';
import { Flex, TFlexProps } from '@waves.exchange/wx-react-uikit';
import { Trans } from '@waves/ui-translator';
import { ExternalLinkRow } from './ExternalLinkRow';

export const ExternalLinksBlock: FC<TFlexProps> = memo((props) => {
    return (
        <Flex height="100%" flexDirection="column" justifyContent="flex-end" {...props}>
            <ExternalLinkRow href="https://forum.power.tech/t/wavesdao-initiation-proposal/15">
                <Trans i18key="linkAbout" />
            </ExternalLinkRow>
            <ExternalLinkRow href="https://github.com/wavesplatform/waves-dao-ride">
                <Trans i18key="linkSource" />
            </ExternalLinkRow>
            <ExternalLinkRow href="https://app.power.tech/">
                <Trans i18key="linkGo" />
            </ExternalLinkRow>
            <ExternalLinkRow href="https://forum.power.tech/c/wavesdao/6">
                <Trans i18key="linkLast" />
            </ExternalLinkRow>
        </Flex>
    );
});

ExternalLinksBlock.displayName = 'ExternalLinksBlock';
