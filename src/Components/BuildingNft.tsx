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
                                    image={"video_2.mp4"}
                                    autoPlay
                                    loop
                                    style={{ display: 'flex', height: 'inherit' }}

                                />
                            </div>
                        </div>

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Card style={{
                            zIndex: -2,

                            height: '100%',
                            background: 'linear-gradient(to right bottom, #000a14FF,#001d3bFF)',
                            borderRadius: '0px',
                            alignItems: ' center',
                            justifyContent: ' center'
                        }}>
                            <Grid container
                                spacing={0}
                                height='100%'
                                direction="column"
                                alignItems="center"
                                justifyContent="center"
                               >

                                <Slide in={true} direction='up' timeout={2000}>
                                    <div className='PageContainer'>
                                        <Typography paddingTop={'25px'} fontFamily='Dongle' letterSpacing={'10px'} align="left" lineHeight={0} color={'#00a6ff66'} fontWeight='bold' variant='subtitle1' fontSize='1.25rem'>
                                            DISCOVERING
                                        </Typography>

                                        <Typography fontFamily='Dongle' align="left" color={'#00a6ffFF'} variant='h3' lineHeight={'5rem'} fontSize='5.5rem' fontWeight='900'>THE BOBOTS.</Typography>

                                        <Typography paddingTop={'25px'} fontFamily='Dongle' align="left" color={'white'} fontWeight='light' variant='subtitle1' fontSize='1.25rem'>
                                        <b>In the year 4040,</b> 
                                            Robots have dominantly replace humans with cute robots being stationed on the moon.
                                             Together, 4040 bobots rule the moon colony. These bobots lives on the ethereum network using the ERC-721 blockchain.
                                        </Typography>

                                        <Grid xs
                                            paddingTop={'30px'}
                                            container
                                            spacing={6}
                                            direction="row"
                                            alignItems="center"
                                            justifyContent="center" >
                                            <Grid item >
                                                <Typography fontFamily='Dongle' align={'center'} color={'white'} variant='h3' fontStyle={'italic'} fontSize='2.8rem' fontWeight='900'>4040</Typography>
                                                <Typography fontFamily='Dongle' align={'center'} color={'white'} variant='h3' fontStyle={'italic'} fontSize='1rem' fontWeight='light'>Avatars</Typography>
                                            </Grid>
                                            <Grid item
                                            >
                                                <Typography fontFamily='Dongle' align={'center'} color={'white'} variant='h3' fontStyle={'italic'} fontSize='2.8rem' fontWeight='900'>100+</Typography>
                                                <Typography fontFamily='Dongle' align={'center'} color={'white'} variant='h3' fontStyle={'italic'} fontSize='1rem' fontWeight='light'>Unique traits</Typography>
                                            </Grid>
                                            <Grid item


                                            >
                                                <Typography fontFamily='Dongle' align={'center'} color={'white'} variant='h3' fontStyle={'italic'} fontSize='2.8rem' fontWeight='900'>11</Typography>
                                                <Typography fontFamily='Dongle' align={'center'} color={'white'} variant='h3' fontStyle={'italic'} fontSize='1rem' fontWeight='light'>Properties</Typography>
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