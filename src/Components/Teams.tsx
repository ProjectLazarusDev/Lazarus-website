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
               minHeight: '100vh',
                background: 'linear-gradient(to right bottom, #4444441f,#00000000)',
                borderRadius: '0px',
                alignItems: ' center',
                justifyContent: ' center'
            }}>
                 <Typography paddingTop={'170px'} fontFamily='Dongle' letterSpacing={'10px'} align="center" lineHeight={'1.5rem'} color={'#ffffff66'} fontWeight='bold' variant='subtitle1' fontSize='1.25rem'>
            - WHO BUILT IT? -
          </Typography>
          <div className="glow">
            <Typography fontFamily='Dongle' paddingBottom="50px"paddingTop="25px" align="center" color={'#ffffffFF'} variant='h3' lineHeight={'3.5rem'} fontSize='5.5rem' fontWeight='900'>MEET THE TEAM</Typography>
          </div>
                <Grid xs
                  
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
                        margin="10px"
                    >
                        
                        <Card style={{
                            zIndex: -2,

                            height: '100%',
                            background: 'linear-gradient(to right bottom, #4444441f,#00000000)',
                            borderRadius: '0px',
                            alignItems: ' center',
                            justifyContent: ' center',

                        }}>
                            <CardMedia

                                component='video'
                                muted={true}
                                image={"meta/video_84.mp4"}
                                autoPlay
                                loop
                                style={{ display: 'fixed', width: 'inherit', height: '250px', borderRadius: '0px' }}
                            />

                            <Card style={{
                                zIndex: -2,
                                background: 'linear-gradient(to right bottom, #4444441f,#00000000)',
                                borderRadius: '0px',
                                alignItems: ' center',
                                justifyContent: ' center',
                                padding: '30px',
                                height: '400px'
                            }}>
                                <Typography align="center" fontSize='2.0rem' lineHeight='1.5rem' variant="body1" component="h1"
                                    gutterBottom fontFamily='Dongle' letterSpacing={'0.5rem'} fontWeight='bold' color='white'>
                                    EDMUND
                                </Typography>
                                <Typography align="center" variant="body1" component="h1" fontSize='1.5rem'
                                    gutterBottom fontFamily='Dongle' letterSpacing={'0.2rem'} color={'#ffffff66'} fontWeight="" >
                                    3D ARTIST
                                </Typography>
                                <Typography paddingTop="20px" align="center" variant="body2" component="h1"
                                    gutterBottom fontFamily='Dongle' lineHeight='1.5rem'
                                    fontSize='1.5rem' fontWeight="light" color='white' width='200px'>
                                    <b>Experienced 3D Artist</b> with varying expertise from Game art,video editing, commercials to VFX!
                                </Typography>
                                <Typography align="center" variant="body2" component="h1"
                                    gutterBottom fontFamily='Dongle' lineHeight='1.5rem'
                                    fontSize='1.5rem' fontWeight="light" color='white' width='200px'>
                                    Anchoring project from art concept, direction to modelling of 3D Bobots.
                                </Typography>
                            </Card>
                        </Card>
                    </Grid>

                    <Grid
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        margin="10px"
                    >
                        <Card style={{
                            zIndex: -2,
                            height: '100%',
                            background: 'linear-gradient(to right bottom, #4444441f,#00000000)',
                            borderRadius: '0px',
                            alignItems: ' center',
                            justifyContent: ' center'
                        }}>
                            <CardMedia

                                component='video'
                                muted={true}
                                image={"meta/video_69.mp4"}
                                autoPlay
                                loop
                                style={{ display: 'fixed', width: 'inherit', height: '250px', borderRadius: '0px' }}
                            />
                            <Card style={{
                                zIndex: -2,
                                background: 'linear-gradient(to right bottom, #4444441f,#00000000)',
                                borderRadius: '0px',
                                alignItems: ' center',
                                justifyContent: ' center',
                                padding: '30px',
                                height: '400px'
                            }}>
                                <Typography align="center" fontSize='2.0rem' lineHeight='1.5rem' variant="body1" component="h1"
                                    gutterBottom fontFamily='Dongle' letterSpacing={'0.5rem'} fontWeight='bold' color='white'>
                                    THEON
                                </Typography>
                                <Typography align="center" variant="body1" component="h1" fontSize='1.5rem'
                                    gutterBottom fontFamily='Dongle' letterSpacing={'0.2rem'} color={'#ffffff66'} fontWeight="" >
                                    WEB DEV / FOUNDER
                                </Typography>
                                <Typography paddingTop="20px" align="center" variant="body2" component="h1"
                                    gutterBottom fontFamily='Dongle' lineHeight='1.5rem'
                                    fontSize='1.5rem' fontWeight="light" color='white' width='200px'>
                                    <b>Artist turned software engineer.</b>
                                    Ranging experience from 3D Art to custom 3D Engines and web development.
                                </Typography>
                                <Typography align="center" variant="body2" component="h1"
                                    gutterBottom fontFamily='Dongle' lineHeight='1.5rem'
                                    fontSize='1.5rem' fontWeight="light" color='white' width='200px'>
                                    Directing overall project direction and building the website you see now.
                                </Typography>
                            </Card>
                        </Card>
                    </Grid>
                    <Grid
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        margin="10px"
                    >
                        <Card style={{
                            zIndex: -2,
                            height: '100%',
                            background: 'linear-gradient(to right bottom, #4444441f,#00000000)',
                            borderRadius: '0px',
                            alignItems: ' center',
                            justifyContent: ' center'
                        }}>
                            <CardMedia

                                component='video'
                                muted={true}
                                image={"meta/video_27.mp4"}
                                autoPlay
                                loop
                                style={{ display: 'fixed', width: 'inherit', height: '250px', borderRadius: '0px' }}
                            />

                            <Card style={{
                                zIndex: -2,
                                background: 'linear-gradient(to right bottom, #4444441f,#00000000)',
                                borderRadius: '0px',
                                alignItems: ' center',
                                justifyContent: ' center',
                                padding: '30px',
                                height: '400px'
                            }}>
                                <Typography align="center" fontSize='2.0rem' lineHeight='1.5rem' variant="body1" component="h1"
                                    gutterBottom fontFamily='Dongle' letterSpacing={'0.5rem'} fontWeight='bold' color='white'>
                                    FARZAANA
                                </Typography>
                                <Typography align="center" variant="body1" component="h1" fontSize='1.5rem'
                                    gutterBottom fontFamily='Dongle' letterSpacing={'0.2rem'} color={'#ffffff66'} fontWeight="" >
                                    SMART CONTRACTS
                                </Typography>
                                <Typography paddingTop="20px" align="center" variant="body2" component="h1"
                                    gutterBottom fontFamily='Dongle' lineHeight='1.5rem'
                                    fontSize='1.5rem' fontWeight="light" color='white' width='200px'>
                                    <b>Artist turned software engineer</b> ,from 3D game art to creating custom game engines.

                                </Typography>
                                <Typography align="center" variant="body2" component="h1"
                                    gutterBottom fontFamily='Dongle' lineHeight='1.5rem'
                                    fontSize='1.5rem' fontWeight="light" color='white' width='200px'>
                                    Currently helming as a Blockchain and Smart Contracts Developer.
                                </Typography>
                            </Card>
                        </Card>
                    </Grid>
                    <Grid
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        margin="10px"
                    >


                        <Card style={{
                            zIndex: -2,

                            height: '100%',
                            background: 'linear-gradient(to right bottom, #4444441f,#00000000)',
                            borderRadius: '0px',
                            alignItems: ' center',
                            justifyContent: ' center',

                        }}>
                            <CardMedia

                                component='video'
                                muted={true}
                                image={"meta/video_35.mp4"}
                                autoPlay
                                loop
                                style={{ display: 'fixed', width: 'inherit', height: '250px', borderRadius: '0px' }}
                            />

                            <Card style={{
                                zIndex: -2,
                                background: 'linear-gradient(to right bottom, #4444441f,#00000000)',
                                borderRadius: '0px',
                                alignItems: ' center',
                                justifyContent: ' center',
                                padding: '30px',
                                height: '400px'
                            }}>
                                <Typography align="center" fontSize='2.0rem' lineHeight='1.5rem' variant="body1" component="h1"
                                    gutterBottom fontFamily='Dongle' letterSpacing={'0.5rem'} fontWeight='bold' color='white'>
                                    ELSTON
                                </Typography>
                                <Typography align="center" variant="body1" component="h1" fontSize='1.5rem'
                                    gutterBottom fontFamily='Dongle' letterSpacing={'0.2rem'} color={'#ffffff66'} fontWeight="" >
                                    MARKETING
                                </Typography>
                                <Typography paddingTop="20px" align="center" variant="body2" component="h1"
                                    gutterBottom fontFamily='Dongle' lineHeight='1.5rem'
                                    fontSize='1.5rem' fontWeight="light" color='white' width='200px'>
                                    <b>Online marketing professional</b> with many years of sales background moving into the NFT space.
                                </Typography>
                                <Typography align="center" variant="body2" component="h1"
                                    gutterBottom fontFamily='Dongle' lineHeight='1.5rem'
                                    fontSize='1.5rem' fontWeight="light" color='white' width='200px'>
                                    Strong belief in taking the NFT community to the next level.
                                </Typography>
                            </Card>
                        </Card>
                    </Grid>
                    <Grid
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        margin="10px"
                    >


                        <Card style={{
                            zIndex: -2,
                            height: '100%',
                            background: 'linear-gradient(to right bottom, #4444441f,#00000000)',
                            borderRadius: '0px',
                            alignItems: ' center',
                            justifyContent: ' center',

                        }}>
                            <CardMedia

                                component='video'
                                muted={true}
                                image={"meta/video_100.mp4"}
                                autoPlay
                                loop
                                style={{ display: 'fixed', width: 'inherit', height: '250px', borderRadius: '0px' }}
                            />
                            <Card style={{
                                zIndex: -2,
                                background: 'linear-gradient(to right bottom, #4444441f,#00000000)',
                                borderRadius: '0px',
                                alignItems: ' center',
                                justifyContent: ' center',
                                padding: '30px',
                                height: '400px'
                            }}>
                                <Typography align="center" fontSize='2.0rem' lineHeight='1.5rem' variant="body1" component="h1"
                                    gutterBottom fontFamily='Dongle' letterSpacing={'0.5rem'} fontWeight='bold' color='white'>
                                    YIEN
                                </Typography>
                                <Typography align="center" variant="body1" component="h1" fontSize='1.5rem'
                                    gutterBottom fontFamily='Dongle' letterSpacing={'0.2rem'} color={'#ffffff66'} fontWeight="" >
                                    UNITY DEVELOPER
                                </Typography>
                                <Typography paddingTop="20px" align="center" variant="body2" component="h1"
                                    gutterBottom fontFamily='Dongle' lineHeight='1.5rem'
                                    fontSize='1.5rem' fontWeight="light" color='white' width='200px'>
                                    <b>Experienced Unity Game Programmer</b> with years under his belt.
                                </Typography>
                                <Typography align="center" variant="body2" component="h1"
                                    gutterBottom fontFamily='Dongle' lineHeight='1.5rem'
                                    fontSize='1.5rem' fontWeight="light" color='white' width='200px'>
                                    Coding up the multiplayer component and gameplay aspects of the project. He regards himself as a NPC in real life.
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