import { FC, memo } from "react";
import { Flex, TFlexProps } from "@waves.exchange/wx-react-uikit";
import { Trans } from "@waves/ui-translator";
import { ExternalLinkRow } from "./ExternalLinkRow";

export const ExternalLinksBlock: FC<TFlexProps> = memo((props) => {
    return (
        <Flex height="100%" flexDirection="column" justifyContent="flex-end" {...props}>
            <ExternalLinkRow href="#">
                <Trans i18key="linkAbout" />
            </ExternalLinkRow>
            <ExternalLinkRow href="#">
                <Trans i18key="linkSource" />
            </ExternalLinkRow>
            <ExternalLinkRow href="#">
                <Trans i18key="linkGo" />
            </ExternalLinkRow>
            <ExternalLinkRow href="#">
                <Trans i18key="linkLast" />
            </ExternalLinkRow>
        </Flex>
    );
});

ExternalLinksBlock.displayName = 'ExternalLinksBlock';
