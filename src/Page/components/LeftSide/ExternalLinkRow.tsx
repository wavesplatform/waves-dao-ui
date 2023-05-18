import { FC, memo, ReactNode } from "react";
import { Box, ExternalLink, Flex } from "@waves.exchange/wx-react-uikit";
import { Text } from '../../../uikit/Text/Text';
import externalLinkUrl from '/src/img/external-link.png';

export const ExternalLinkRow: FC<{ href: string; children: ReactNode }> = memo(({ href, children }) => {
    return (
        <Flex
            position="relative"
            sx={{
                'py': '12px',
                '&:before': {
                    content: '""',
                    display: 'block',
                    height: '1px',
                    width: '100%',
                    backgroundImage: 'linear-gradient(to right, #ffffff, transparent)',
                    position: 'absolute',
                    bottom: '0',
                    left: '0'
                }
            }}
        >
            <ExternalLink href={href}>
                <Flex alignItems="center">
                    <Text as="div" variant="heading2" color="text"
                    >
                        {children}
                    </Text>
                    <Box
                        width="18px"
                        height="18px"
                        backgroundImage={`url(${externalLinkUrl})`}
                        sx={{
                            ml: '12px'
                        }}
                    />
                </Flex>
            </ExternalLink>
        </Flex>
    );
});

ExternalLinkRow.displayName = 'ExternalLinkRow';
