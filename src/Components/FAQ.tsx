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

                height: '100%',
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
                    style={{ height: '100vh' }}
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
                                        Non-fungible Tokens(NFTs) are items that are physically stored in a blockchain.
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
                                        Bobots is an nft experience project with an initial launch of 4040 avatars an a web-based game designed
                                        as a social hub for other avatars holders to interact with each other.We will be slowly expanding our primary utility,the web based game,throughout
                                        the seasons and improve the product with the community.
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
                                        What is the web-based game all about?
                                    </Typography>

                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography fontFamily={'Dongle'} sx={{ fontSize: '1.5rem', fontWeight: 'light' }}>
                                        The bobots web-based game app is an game / app designed for the community to interact with each other.
                                        This web based application is built in parallel with the avatars themselves and will be released on our website during the launch of season 1.
                                       
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>





                            <Accordion style={{ backgroundColor: 'transparent' }} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel4bh-content"
                                    id="panel4bh-header"
                                >
                                    <Typography fontFamily={'Dongle'} sx={{ fontSize: '1.5rem' }}>Are there white-listing and giveaways?</Typography>

                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography fontFamily={'Dongle'} sx={{ fontSize: '1.5rem', fontWeight: 'light' }}>
                                        Yes! We have set aside avatars for whitelist presales and giveaways. Engage with the community,invite your mates and
                                        interact with us as we do frequent giveaways!
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