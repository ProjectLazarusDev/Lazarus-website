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
                background: 'linear-gradient(to right bottom, #000a14FF,#001d3bFF)',
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
                        <Typography paddingTop={'25px'} fontFamily='Dongle' letterSpacing={'10px'} align="center" lineHeight={0} color={'#00a6ff66'} fontWeight='bold' variant='subtitle1' fontSize='1.25rem'>
                            -SOMETHING IN YOUR MIND? -
                        </Typography>

                        <Typography fontFamily='Dongle' align="center" color={'#00a6ffFF'} variant='h3' lineHeight={'5rem'} fontSize='5.5rem' fontWeight='900'>FREQUENTLY ASKED QUESTIONS</Typography>

                        <Typography fontFamily={'Dongle'} sx={{ width: '33%' }}>
                            General
                        </Typography>
                        <Accordion style={{ backgroundColor: 'transparent' }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography fontFamily={'Dongle'} sx={{ fontSize: '1.5rem', width: '33%' }}>
                                    What is bobots?
                                </Typography>

                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                                    Aliquam eget maximus est, id dignissim quam.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Typography fontFamily={'Dongle'} sx={{ width: '33%' }}>
                            About NFT
                        </Typography>
                        <Accordion style={{ backgroundColor: 'transparent' }} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                            >
                                <Typography sx={{ width: '33%' }}>What you want?</Typography>

                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                                    varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                                    laoreet.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion style={{ backgroundColor: 'transparent' }} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                            >
                                <Typography sx={{ width: '33%' }}>You Okay?</Typography>

                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                                    varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                                    laoreet.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>


                </Grid>
            </Card>


        </>
    );
}

export default FAQ;