import * as React from 'react';
import { MODAL_NAMES } from '../../ModalContainer/MODAL_NAMES';
import { ModalProps } from '../../Modal/Modal';
import { Box } from '@waves.exchange/wx-react-uikit';
import { ModalStyled } from '../../Modal/ModalStyled';
import { Trans, translate } from '@waves/ui-translator';
import { Text } from '../../../uikit';

const LegalDisclaimerModalFC: React.FC<ModalProps> = ({ ...props }) => {
    return (
        <ModalStyled
            modalName={MODAL_NAMES.legalDisclaimer}
            width={['100%', '720px']}
            color="standard.$0"
            {...props}
        >
            <Box mt="30px" mb="16px">
                <Text variant="heading2">
                    <Trans i18key="legalDisclaimer" />
                </Text>
            </Box>
            <Text as="div">
                <Text as="div" variant="text2" mb="10px">
                    This website and its interface are owned by WavesDAO. The
                    User is a person who has logged in and can donate and/or
                    vote to fund the development of Waves Blockchain-based
                    projects and initiatives. WavesDAO does not control teams
                    (groups of Users) and the information they provide about
                    themselves, tokens, and their projects/initiatives.
                </Text>
                <Text as="div" variant="text2">
                    Users are advised to conduct their own research before
                    funding any projects and initiatives. Users acknowledge and
                    accept that funding is a risky activity. When the market
                    price of tokens fluctuates greatly, funding potential income
                    may be lower than the income of ordinary token holding, and
                    losses may even occur. By funding the development of Waves
                    Blockchain-based projects and initiatives, Users declare to
                    understand and assume the following risks:
                </Text>
                <Text as="ul" variant="text2">
                    <Text as="li">
                        Collapse in liquidity with respect to a virtual asset;
                    </Text>
                    <Text as="li">Slippage;</Text>
                    <Text as="li">
                        Extreme fluctuations in prevailing fees and uncertainty
                        with respect to other transaction parameters;
                    </Text>
                    <Text as="li">
                        Faults, defects, hacks, exploits, errors, or unforeseen
                        circumstances occurring in respect of the technologies;
                    </Text>
                    <Text as="li">
                        Failure or non-availability of technologies, including
                        the Internet, and technological advancements rendering
                        certain technologies obsolete;
                    </Text>
                    <Text as="li">
                        Dishonesty of other Users, particularly teams that
                        proposed projects and initiatives;
                    </Text>
                    <Text as="li">
                        Attacks on WavesDAO, including without limitation:{' '}
                        <Text
                            as="ul"
                            sx={{
                                "p": '0px',
                                "pl": '10px',
                                '&': {
                                    listStyle: 'none',
                                },

                                '& li::before': {
                                    content: "'-'",
                                    position: 'relative',
                                    left: '-5px',
                                },
                            }}
                        >
                            <Text as="li">Distributed denial of service;</Text>
                            <Text as="li">Sybil attacks;</Text>
                            <Text as="li">Phishing;</Text>
                            <Text as="li">Social engineering;</Text>
                            <Text as="li">Hacking;</Text>
                            <Text as="li">Smurfing;</Text>
                            <Text as="li">Malware;</Text>
                            <Text as="li">Double spending;</Text>
                            <Text as="li">
                                Majority-mining, consensus-based, or other
                                mining attacks;
                            </Text>
                            <Text as="li">Misinformation campaigns;</Text>
                            <Text as="li">Forks;</Text>
                            <Text as="li">and Spoofing.</Text>
                        </Text>
                    </Text>
                </Text>

                <Text variant="text2">
                    All Users acknowledge, agree, and warrant that they have
                    been warned of all potential risks involved in funding
                    projects and initiatives through WavesDAO infrastructure, as
                    well as that there may be other risks involved, which are
                    not specified herein, and that they fully accept such risks.
                </Text>
            </Text>
        </ModalStyled>
    );
};

LegalDisclaimerModalFC.displayName = 'LegalDisclaimerModal';

export const LegalDisclaimerModal = translate('app.page')(
    LegalDisclaimerModalFC
);
