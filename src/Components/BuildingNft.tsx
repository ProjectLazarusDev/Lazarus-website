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
import { Grid, Slide } from "@mui/material";
import Typography from '@mui/material/Typography';
const BuildingNft: React.FC = () =>
{
    return (
        <>
             <Grid
                container
                spacing={3}
                direction="column"
                alignItems="center"
                justifyContent="center"
               
            >
                <Grid container item direction="row" >
                <Grid xs={12} md={6}>
                    <div className='PageVidWrap'>
                        <div className="PageVid">
                            <CardMedia
                                component='video'
                                muted={true}
                                image={"video_1.mp4"}
                                autoPlay
                                loop
                                style={{height: '100vh' }}
                               
                            />
                            </div>
                        </div>

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Card style={{
                            zIndex: -2,
                            margin:'10px',
                            borderRadius: '20px',
                            background: 'linear-gradient(to right bottom, #000a14FF,#001d3bFF)',

                            alignItems: ' center',
                            justifyContent: ' center'
                        }}>
                            <Grid container
                                spacing={0}
                                direction="column"
                                alignItems="center"
                                justifyContent="center"
                                style={{ height: '100vh' }} >

                                <Slide in={true} direction='up' timeout={2000}>
                                    <div className='PageContainer'>
                                    <Typography paddingTop={'25px'} fontFamily='Source Sans Pro' letterSpacing={'10px'} align="center" color={'#00a6ffFF'} fontWeight='bold' variant='subtitle1' fontSize='0.75rem'>
                                            - BOBOTS SEASON 1 -
                                        </Typography>
                                        <Card style={{
                                            background: 'linear-gradient(to right bottom, #00a6ff44,#00324d00)', borderRadius: '200px', padding: '10px', alignItems: ' center',
                                            justifyContent: ' center'
                                        }}>
                                            <Typography fontFamily='Source Sans Pro' align="center" color={'#00a6ffFF'} variant='h3' fontStyle={'italic'} fontSize='2.5rem' fontWeight='900'>THE BLAST OFF</Typography>
                                        </Card>
                                        <Typography paddingTop={'25px'} fontFamily='Source Sans Pro' align="left" color={'white'} fontWeight='light' variant='subtitle1' fontSize='0.9rem'>
                                            <b>In the year 4040,</b> Robots have dominantly replace humans. Cute robots are then stationed on the moon. Together, the bobots rule the moon colony. -Write more here....
                                        </Typography>

                                        <Grid xs
                                            paddingTop={'30px'}
                                            container
                                            spacing={6}
                                            direction="row"
                                            alignItems="center"
                                            justifyContent="center" >
                                            <Grid item >
                                                <Typography fontFamily='Source Sans Pro' align={'center'} color={'white'} variant='h3' fontStyle={'italic'} fontSize='1.8rem' fontWeight='900'>4040</Typography>
                                                <Typography fontFamily='Source Sans Pro' align={'center'} color={'white'} variant='h3' fontStyle={'italic'} fontSize='0.8rem' fontWeight='light'>Avatars</Typography>
                                            </Grid>
                                            <Grid item   
                                            >
                                                <Typography fontFamily='Source Sans Pro' align={'center'} color={'white'} variant='h3' fontStyle={'italic'} fontSize='1.8rem' fontWeight='900'>100+</Typography>
                                                <Typography fontFamily='Source Sans Pro' align={'center'} color={'white'} variant='h3' fontStyle={'italic'} fontSize='0.8rem' fontWeight='light'>Unique traits</Typography>
                                            </Grid>
                                            <Grid item

                                               
                                            >
                                                <Typography fontFamily='Source Sans Pro' align={'center'} color={'white'} variant='h3' fontStyle={'italic'} fontSize='1.8rem' fontWeight='900'>11</Typography>
                                                <Typography fontFamily='Source Sans Pro' align={'center'} color={'white'} variant='h3' fontStyle={'italic'} fontSize='0.8rem' fontWeight='light'>Properties</Typography>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Slide>


                            </Grid>
                        </Card>
                    </Grid>
                   
                </Grid>
            </Grid>


        </>
    );
}
export default BuildingNft;