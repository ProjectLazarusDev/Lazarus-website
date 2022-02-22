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
import { Grid, Slide } from "@mui/material";
import Typography from '@mui/material/Typography';
import { CardMedia } from "@mui/material";

const BuildingNft: React.FC = () =>
{


    const [width, setWidth] = React.useState(window.innerWidth);
    //const [height, setHeight] = React.useState(window.innerHeight);
    const updateDimensions = () =>
    {

        setWidth(window.innerWidth);
        //setHeight(window.innerHeight);
    }
    React.useEffect(() =>
    {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);


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
                    {width > 960 && (
                        <Grid xs={12} md={6} height={'100vh'} style={{ boxShadow: 'none' }}  >
                        </Grid>)}
                    <Grid item xs={12} md={6} style={{ boxShadow: 'none' }} >

                        <Card style={{
                            zIndex: -2,
                            boxShadow: 'none',
                            height: '100%',
                            background: 'linear-gradient(to right bottom, #00000000,#00000000)',
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
                                minHeight={width < 960 ? '125vh' : '100%'}
                            >

                                <Slide in={true} direction='up' timeout={2000}>
                                    <div className='PageContainer'>
                                        <div className="glowBlack">
                                            <Typography paddingBottom={'50px'} paddingTop={'25px'} fontFamily='Dongle' letterSpacing={'10px'} align={(width < 960) ? "center" : "right"} lineHeight={'1.5rem'} color='#ffffffff' fontWeight='bold' variant='subtitle1' fontSize='1.25rem'>
                                                MAGIC AND TREASUREDAO
                                            </Typography>

                                            <Typography fontFamily='Dongle' align={width < 960 ? "center" : "right"} color={'#ffffffff'} variant='h3' lineHeight={'3.5rem'} fontSize='7.5rem' fontWeight='900'>FREE MINTS</Typography>

                                            <Typography paddingBottom={'25px'} paddingTop={'25px'} fontFamily='Dongle' align={width < 960 ? "center" : "right"} color={'white'} fontWeight='light' variant='subtitle1' fontSize='1.6rem'>
                                             Whitelisted members will be given free mints as part of the fair launch culture.  After launch player will be able to use our web-based application to play and earn various valuable resources.
                                             Also launching with the collection is a social hub in game where players can interact and chat with one another.
                                            </Typography>

                                            <Grid container
                                                spacing={0}
                                                direction="row"
                                                alignItems="center"
                                                justifyContent= {width > 960 ? 'right' : 'center'}

                                            >
                                                <CardMedia

                                                    component='video'
                                                    muted={true}
                                                    image={"moon.mp4"}
                                                    autoPlay
                                                    loop
                                                    style={{ display: 'flex', paddingTop: '0px', margin: '5px', width: '70%', height: '70%', borderRadius: '5px' }}
                                                />
                                            </Grid>

                                        </div>
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