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
                display:'flex',
                paddingTop:'50px',
                paddingBottom:'50px',
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
                    style={{  }}
                >
                    <div>
                        <Typography paddingTop={'25px'} fontFamily='Dongle' letterSpacing={'10px'} align="center" lineHeight={'1.5rem'} color={'#ffffff66'} fontWeight='bold' variant='subtitle1' fontSize='1.25rem'>
                            -SOMETHING ON YOUR MIND? -
                        </Typography>
                        <div className="glow">
                            <Typography fontFamily='Dongle' align="center" color={'#ffffffFF'} variant='h3' lineHeight={'5rem'} fontSize='5.5rem' fontWeight='900'>FREQUENTLY ASKED QUESTIONS</Typography>
                        </div>

                        <div className="PageAcc">
                            <Accordion style={{ backgroundColor: 'transparent' }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography fontFamily={'Dongle'} sx={{ fontSize: '1.5rem', }}>
                                        What is an NFT?
                                    </Typography>

                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        An NFT stands for “Non-fungible token” which is a term for a unique, digital item whose ownership lives by a blockchain. An NFT could range from a collectible, in-game item , digital art, access to events and more!
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion style={{ backgroundColor: 'transparent' }} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2bh-content"
                                    id="panel2bh-header"
                                >
                                    <Typography fontFamily={'Dongle'} sx={{ fontSize: '1.5rem' }}>
                                        What are bobots about?
                                    </Typography>

                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography fontFamily={'Dongle'} sx={{ fontSize: '1.5rem', fontWeight: 'light' }}>
                                        Bobots is a 3D generative NFT collection with a total count of 4040 avatars. Accompanying the bobots will be a web-based app to interact with your Bobot!
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
                                        Before NFTs, we built small indie sized projects during our free time before moving on with our separate lives. Now years wiser, with the rise of NFTs and the wealth of experience we gained from a variety of mediums, we are taking this opportunity to build something never seen before in the NFT space.
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
                                        We will be using Ethereum 721 Blockchain - Layer 1. Web3 and metamask will be used for ethereum based transactions.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>


                            <Accordion style={{ backgroundColor: 'transparent' }} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel5bh-content"
                                    id="panel5bh-header"
                                >
                                    <Typography fontFamily={'Dongle'} sx={{ fontSize: '1.5rem' }}>What Utilities do Bobots have?</Typography>

                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography fontFamily={'Dongle'} sx={{ fontSize: '1.5rem', fontWeight: 'light' }}>
                                        The bobots project started with a 'utility first' mindset in which we will have a web-based game on our Bobots website. Once the web-based idea is set in stone,everything from the art to the final avatars themselves are built and rendered in the game itself. This means the Bobots' sneak peaks are actually captured from in-game! The utility itself is actually being shown on the bobots website,with the game itself being rendered in the background.  With this web-based pipeline that we have created, the first step for Bobots launch is to be able to view your Bobot in real time! Afterwards we will be announcing the different aspects of how we will expand our game.
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

                            <Accordion style={{ backgroundColor: 'transparent' }} expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel6bh-content"
                                    id="panel6bh-header"
                                >
                                    <Typography fontFamily={'Dongle'} sx={{ fontSize: '1.5rem' }}>What would you classify the game as?</Typography>

                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography fontFamily={'Dongle'} sx={{ fontSize: '1.5rem', fontWeight: 'light' }}>
                                        There are different blockchain games out there and we do not want to make something out for generating more money. As we are brought up with a developer’s mindset, we seek to innovate as to what we can do with the technology and bring in what we are good at. Hence we are looking at it as a ‘play to chill’ game where the community interacts with one another,gives feedback and engages into what we are creating.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion style={{ backgroundColor: 'transparent' }} expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel7bh-content"
                                    id="panel7bh-header"
                                >
                                    <Typography fontFamily={'Dongle'} sx={{ fontSize: '1.5rem' }}>How many can I mint for pre-sale(WL) and public sale?</Typography>

                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography fontFamily={'Dongle'} sx={{ fontSize: '1.5rem', fontWeight: 'light' }}>
                                        For presale you can mint up to 2 and for public sale you can mint up to 5.
                                       
                                        There will be a total of 4040 avatars and it will be split into the following.

                                        <li>Presale - 2000</li>
                                        <li> Public Sale -1840</li>
                                        <li>Contest and Giveaway - 100</li>
                                        <li>For devs - 100</li>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion style={{ backgroundColor: 'transparent' }} expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel8bh-content"
                                    id="panel8bh-header"
                                >
                                    <Typography fontFamily={'Dongle'} sx={{ fontSize: '1.5rem' }}>How do I get whitelisted or obtain free NFT?</Typography>

                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography fontFamily={'Dongle'} sx={{ fontSize: '1.5rem', fontWeight: 'light' }}>
                                    We will be hosting very regular whitelist giveaways and free NFTs once in a while!
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
                                    <Typography fontFamily={'Dongle'} sx={{ fontSize: '1.5rem' }}>What is the price of the nft?</Typography>

                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography fontFamily={'Dongle'} sx={{ fontSize: '1.5rem', fontWeight: 'light' }}>
                                    Price for PRESALE  sale: 0.08eth
                                    Price of PUBLIC sale: 0.1eth. 

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