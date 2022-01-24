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
import { CardMedia } from "@mui/material";
import { Grid } from "@mui/material";
import Typography from '@mui/material/Typography';

const Teams: React.FC = () =>
{
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
                <Grid xs
                    style={{ minHeight: '100vh' }}
                    container
                    spacing={0}
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                   
                >
                    <Grid
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        margin = "10px"
                    >


                        <Card style={{
                            zIndex: -2,

                            height: '100%',
                            background: 'linear-gradient(to right bottom, #000a1400,#000a1400)',
                            borderRadius: '20px',
                            alignItems: ' center',
                            justifyContent: ' center',

                        }}>
                            <CardMedia
                                style={{ display: 'fixed', width: '100%', height: '250px', borderRadius: '0px' }}
                                component="img"
                                image="meta/image_5.png"
                                alt="green iguana"
                            />

                            <Card style={{
                                zIndex: -2,

                                background: 'linear-gradient(to right bottom, #000a14FF,#000a1400)',
                                borderRadius: '0px',
                                alignItems: ' center',
                                justifyContent: ' center',
                                padding: '30px',
                                height: '300px'
                            }}>
                                <Typography align="center" fontSize='2.0rem' lineHeight='1.5rem' variant="body1" component="h1"
                                    gutterBottom fontFamily='Dongle' letterSpacing={'0.5rem'} fontWeight='bold' color='white'>
                                    EDMUND
                                </Typography>
                                <Typography align="center" variant="body1" component="h1"
                                    gutterBottom fontFamily='Dongle' letterSpacing={'0.2rem'} color={'#00a6ff66'} fontWeight="" >
                                    3D ARTIST - MEDIA
                                </Typography>
                                <Typography align="center" variant="body2" component="h1"
                                    gutterBottom fontFamily='Dongle' fontSize='1.0rem' fontWeight="light" color='white' width='200px'>
                                    Robots have dominantly replace humans with cute robots being stationed on the moon.
                                    Together, 4040 bobots rule the moon colony.These bobots lives on the ethereum network using the  <b>ERC-721 blockchain.</b>
                                </Typography>
                            </Card>
                        </Card>
                    </Grid>

                    <Grid
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        margin = "10px"
                    >


                        <Card style={{
                            zIndex: -2,

                            height: '100%',
                            background: 'linear-gradient(to right bottom, #000a1400,#000a1400)',
                            borderRadius: '20px',
                            alignItems: ' center',
                            justifyContent: ' center',

                        }}>
                            <CardMedia
                                style={{ display: 'fixed', width: '100%', height: '250px', borderRadius: '0px' }}
                                component="img"
                                image="meta/image_6.png"
                                alt="green iguana"
                            />

                            <Card style={{
                                zIndex: -2,

                                background: 'linear-gradient(to right bottom, #000a14FF,#000a1400)',
                                borderRadius: '0px',
                                alignItems: ' center',
                                justifyContent: ' center',
                                padding: '30px',
                                height: '300px'
                            }}>
                                <Typography align="center" fontSize='2.0rem' lineHeight='1.5rem' variant="body1" component="h1"
                                    gutterBottom fontFamily='Dongle' letterSpacing={'0.5rem'} fontWeight='bold' color='white'>
                                    THEON
                                </Typography>
                                <Typography align="center" variant="body1" component="h1"
                                    gutterBottom fontFamily='Dongle' letterSpacing={'0.2rem'} color={'#00a6ff66'} fontWeight="" >
                                    SOFTWARE - FOUNDER
                                </Typography>
                                <Typography align="center" variant="body2" component="h1"
                                    gutterBottom fontFamily='Dongle' fontSize='1.0rem' fontWeight="light" color='white' width='200px'>
                                    Robots have dominantly replace humans with cute robots being stationed on the moon.
                                    Together, 4040 bobots rule the moon colony.These bobots lives on the ethereum network using the  <b>ERC-721 blockchain.</b>
                                </Typography>
                            </Card>
                        </Card>
                    </Grid>
                    <Grid
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        margin = "10px"
                    >


                        <Card style={{
                            zIndex: -2,

                            height: '100%',
                            background: 'linear-gradient(to right bottom, #000a1400,#000a1400)',
                            borderRadius: '20px',
                            alignItems: ' center',
                            justifyContent: ' center',

                        }}>
                            <CardMedia
                                style={{ display: 'fixed', width: '100%', height: '250px', borderRadius: '0px' }}
                                component="img"
                                image="meta/image_7.png"
                                alt="green iguana"
                            />

                            <Card style={{
                                zIndex: -2,

                                background: 'linear-gradient(to right bottom, #000a14FF,#000a1400)',
                                borderRadius: '0px',
                                alignItems: ' center',
                                justifyContent: ' center',
                                padding: '30px',
                                height: '300px'
                            }}>
                                <Typography align="center" fontSize='2.0rem' lineHeight='1.5rem' variant="body1" component="h1"
                                    gutterBottom fontFamily='Dongle' letterSpacing={'0.5rem'} fontWeight='bold' color='white'>
                                    FARZANNA
                                </Typography>
                                <Typography align="center" variant="body1" component="h1"
                                    gutterBottom fontFamily='Dongle' letterSpacing={'0.2rem'} color={'#00a6ff66'} fontWeight="" >
                                    BLOCKCHAIN - CONTRACTS
                                </Typography>
                                <Typography align="center" variant="body2" component="h1"
                                    gutterBottom fontFamily='Dongle' fontSize='1.0rem' fontWeight="light" color='white' width='200px'>
                                    Robots have dominantly replace humans with cute robots being stationed on the moon.
                                    Together, 4040 bobots rule the moon colony.These bobots lives on the ethereum network using the  <b>ERC-721 blockchain.</b>
                                </Typography>
                            </Card>
                        </Card>
                    </Grid>
                    <Grid
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        margin = "10px"
                    >


                        <Card style={{
                            zIndex: -2,

                            height: '100%',
                            background: 'linear-gradient(to right bottom, #000a1400,#000a1400)',
                            borderRadius: '20px',
                            alignItems: ' center',
                            justifyContent: ' center',

                        }}>
                            <CardMedia
                                style={{ display: 'fixed', width: '100%', height: '250px', borderRadius: '0px' }}
                                component="img"
                                image="meta/image_8.png"
                                alt="green iguana"
                            />

                            <Card style={{
                                zIndex: -2,

                                background: 'linear-gradient(to right bottom, #000a14FF,#000a1400)',
                                borderRadius: '0px',
                                alignItems: ' center',
                                justifyContent: ' center',
                                padding: '30px',
                                height: '300px'
                            }}>
                                <Typography align="center" fontSize='2.0rem' lineHeight='1.5rem' variant="body1" component="h1"
                                    gutterBottom fontFamily='Dongle' letterSpacing={'0.5rem'} fontWeight='bold' color='white'>
                                   ELSTON
                                </Typography>
                                <Typography align="center" variant="body1" component="h1"
                                    gutterBottom fontFamily='Dongle' letterSpacing={'0.2rem'} color={'#00a6ff66'} fontWeight="" >
                                    MARKETING - COMMUNITY
                                </Typography>
                                <Typography align="center" variant="body2" component="h1"
                                    gutterBottom fontFamily='Dongle' fontSize='1.0rem' fontWeight="light" color='white' width='200px'>
                                    Robots have dominantly replace humans with cute robots being stationed on the moon.
                                    Together, 4040 bobots rule the moon colony.These bobots lives on the ethereum network using the  <b>ERC-721 blockchain.</b>
                                </Typography>
                            </Card>
                        </Card>
                    </Grid>
                    <Grid
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        margin = "10px"
                    >


                        <Card style={{
                            zIndex: -2,

                            height: '100%',
                            background: 'linear-gradient(to right bottom, #000a1400,#000a1400)',
                            borderRadius: '20px',
                            alignItems: ' center',
                            justifyContent: ' center',

                        }}>
                            <CardMedia
                                style={{ display: 'fixed', width: '100%', height: '250px', borderRadius: '0px' }}
                                component="img"
                                image="meta/image_9.png"
                                alt="green iguana"
                            />

                            <Card style={{
                                zIndex: -2,

                                background: 'linear-gradient(to right bottom, #000a14FF,#000a1400)',
                                borderRadius: '0px',
                                alignItems: ' center',
                                justifyContent: ' center',
                                padding: '30px',
                                height: '300px'
                            }}>
                                <Typography align="center" fontSize='2.0rem' lineHeight='1.5rem' variant="body1" component="h1"
                                    gutterBottom fontFamily='Dongle' letterSpacing={'0.5rem'} fontWeight='bold' color='white'>
                                    YIEN
                                </Typography>
                                <Typography align="center" variant="body1" component="h1"
                                    gutterBottom fontFamily='Dongle' letterSpacing={'0.2rem'} color={'#00a6ff66'} fontWeight="" >
                                    UNITY DEVELOPER
                                </Typography>
                                <Typography align="center" variant="body2" component="h1"
                                    gutterBottom fontFamily='Dongle' fontSize='1.0rem' fontWeight="light" color='white' width='200px'>
                                    Robots have dominantly replace humans with cute robots being stationed on the moon.
                                    Together, 4040 bobots rule the moon colony.These bobots lives on the ethereum network using the  <b>ERC-721 blockchain.</b>
                                </Typography>
                            </Card>
                        </Card>
                    </Grid>
                </Grid>

            </Card>


        </>
    );
}
export default Teams;