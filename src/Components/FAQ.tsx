/*****************************************************************************/
/*!
\file Lore.js
\date 2021
\brief
\Not for distribution
*/
/*****************************************************************************/
import React from "react"

import Card from '@mui/material/Card';
import { Grid } from "@mui/material";
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import '../Pages/Page.css'

const FAQ: React.FC = () =>
{
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) =>
        {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <>
            <Card style={{
                zIndex: -2,
                display: 'flex',
                paddingTop: '50px',
                paddingBottom: '50px',
                background: 'linear-gradient(to right bottom, #ffffff1f,#ffffff00)',
                borderRadius: '0px',
                alignItems: ' center',
                justifyContent: ' center'
            }}>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    style={{}}
                >
                    <div>
                        <Typography paddingTop={'25px'} fontFamily='Dongle' letterSpacing={'10px'} align="center" lineHeight={'1.5rem'} color={'#ffffff66'} fontWeight='bold' variant='subtitle1' fontSize='1.25rem'>
                            -SOMETHING ON YOUR MIND? -
                        </Typography>
                        <div className="glow">
                            <Typography fontFamily='Dongle' align="center" color={'#ffffffFF'} variant='h3' lineHeight={'5rem'} fontSize='5.5rem' fontWeight='900'>FREQUENTLY ASKED QUESTIONS</Typography>
                        </div>

                        <div className="PageAcc">


                            <Accordion style={{ backgroundColor: 'transparent' }} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2bh-content"
                                    id="panel2bh-header"
                                >
                                    <Typography fontFamily={'Dongle'} sx={{ fontSize: '1.5rem' }}>
                                        What is Bobot?
                                    </Typography>

                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography fontFamily={'Dongle'} sx={{ fontSize: '1.5rem', fontWeight: 'light' }}>
                                        Bobots is a 3D blockchain game using Arbitrum as the host for our own Bobots meta-verse.
                                        The long term vision of Bobots is to create an environment where community can hang out in real-time and also stake their assets.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>


                            <Accordion style={{ backgroundColor: 'transparent' }} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel3bh-content"
                                    id="panel3bh-header"
                                >
                                    <Typography fontFamily={'Dongle'} sx={{ fontSize: '1.5rem' }}>
                                        How did this project come about?
                                    </Typography>

                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography fontFamily={'Dongle'} sx={{ fontSize: '1.5rem', fontWeight: 'light' }}>
                                        Before NFTs, we built small indie sized projects during our free time before moving on with our separate lives. Now years wiser, with the rise of NFTs and the wealth of experience we gained from a variety of mediums, we are taking this opportunity to build something never seen before in the blockchain space.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion style={{ backgroundColor: 'transparent' }} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel4bh-content"
                                    id="panel4bh-header"
                                >
                                    <Typography fontFamily={'Dongle'} sx={{ fontSize: '1.5rem' }}>
                                        Which blockchain is used to store the collection?
                                    </Typography>

                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography fontFamily={'Dongle'} sx={{ fontSize: '1.5rem', fontWeight: 'light' }}>
                                        We will be using Ethereum 721 Blockchain - Layer 2 with Arbitrum being the chosen blockchain to host our collection and blockchain interactions.

                                        Why we chosen Arbitrum is due to the following reasons:
                                        <li>Gas fee cost: Due to the much lower gas fee cost we can focus on more game based blockchain interaction.</li>
                                        <li>Widely adopted L2 blockchain: L2 systems are gaining traction in recent times and Arbitrum is capable of sustaining high volumes.</li>

                                        Metamask will be used for ethereum based transactions.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>



                            <Accordion style={{ backgroundColor: 'transparent' }} expanded={expanded === 'panel55'} onChange={handleChange('panel55')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel55bh-content"
                                    id="panel55bh-header"
                                >
                                    <Typography fontFamily={'Dongle'} sx={{ fontSize: '1.5rem' }}>Which Engine does Bobots run on?</Typography>

                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography fontFamily={'Dongle'} sx={{ fontSize: '1.5rem', fontWeight: 'light' }}>
                                        Unity Engine with webGL is being used to build our game.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>



                            <Accordion style={{ backgroundColor: 'transparent' }} expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel7bh-content"
                                    id="panel7bh-header"
                                >
                                    <Typography fontFamily={'Dongle'} sx={{ fontSize: '1.5rem' }}>How many can I mint?</Typography>

                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography fontFamily={'Dongle'} sx={{ fontSize: '1.5rem', fontWeight: 'light' }}>
                                        Whitelisted members will be airdropped 2 Bobots and special roles will be airdropped 4 Bobots.
                                        There will be no presale , public sale and reveal of the Bobots.
                                        There will be a total of 4040 avatars and it will be split into the following:

                                        <li>Whitelisted members - 3840</li>
                                        <li>Devs / future giveaway - 200</li>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion style={{ backgroundColor: 'transparent' }} expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel8bh-content"
                                    id="panel8bh-header"
                                >
                                    <Typography fontFamily={'Dongle'} sx={{ fontSize: '1.5rem' }}>How do I get whitelisted and obtain the free NFT?</Typography>

                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography fontFamily={'Dongle'} sx={{ fontSize: '1.5rem', fontWeight: 'light' }}>
                                        We will be hosting very regular raffles and contest giveaways!
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion style={{ backgroundColor: 'transparent' }} expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel9bh-content"
                                    id="panel9bh-header"
                                >
                                    <Typography fontFamily={'Dongle'} sx={{ fontSize: '1.5rem' }}>What is in the season 1 Content?</Typography>

                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography fontFamily={'Dongle'} sx={{ fontSize: '1.5rem', fontWeight: 'light' }}>
                                        We will be releasing the first collection of our bobots and an initial rollout of our web-based application.We will be giving sneak peaks of our web app very soon!
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>


                            <Accordion style={{ backgroundColor: 'transparent' }} expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel10bh-content"
                                    id="panel10bh-header"
                                >
                                    <Typography fontFamily={'Dongle'} sx={{ fontSize: '1.5rem' }}>When will season 1 be released?</Typography>

                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography fontFamily={'Dongle'} sx={{ fontSize: '1.5rem', fontWeight: 'light' }}>
                                        As we expand our community and develop the application,we hope to be able to release the season 1 initial content together with the launch of bobots. Hence we will announce when we are ready.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>


                            <Accordion style={{ backgroundColor: 'transparent' }} expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel11bh-content"
                                    id="panel11bh-header"
                                >
                                    <Typography fontFamily={'Dongle'} sx={{ fontSize: '1.5rem' }}>What is the price of the launch NFTs?</Typography>

                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography fontFamily={'Dongle'} sx={{ fontSize: '1.5rem', fontWeight: 'light' }}>
                                        Free:)
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>









                        </div>
                    </div>


                </Grid>
            </Card>


        </>
    );
}

export default FAQ;