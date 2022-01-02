/*****************************************************************************/
/*!
\file Home.js
\date 2021
\brief
\Not for distribution
*/
/*****************************************************************************/

import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Grid } from "@mui/material";
import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/system';
import '../Theme/Theme';
import { themeLight } from '../Theme/Theme';

export default class Home extends React.Component
{
    render()
    {
        return (
            <>
                <Card style={{ zIndex: -2, width: '100vw', height: '100vh', position: "absolute", borderRadius: '0px', background: 'linear-gradient(to right bottom, #87A9FF, #6079BC)' }}></Card>
                            <Grid
                                container
                                spacing={0}
                                direction="column"
                                alignItems="center"
                                justifyContent="center"
                                style={{ height: '60vh' }}
                            >
                                < Box
                                    component="img"
                                    sx={{

                                        maxHeight: { xs: 233, md: 167 },
                                        maxWidth: { xs: 350, md: 250 },
                                    }}
                                    alt="The house from the offer."
                                    src="logo.png"
                                />


                                <Typography align="center" variant="body1" component="h1"
                                    gutterBottom fontFamily='jost' fontWeight='light' color='white'>
                                    BOBOTS. Website
                                </Typography>

                            </Grid>
                        
            </>
        );
    }
}