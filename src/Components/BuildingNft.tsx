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
                {width >960 && (
                    <Grid xs={12} md={6} height={'100vh'} style={{boxShadow:'none'}}  >
                    </Grid>)}
                    <Grid item xs={12} md={6}style={{boxShadow:'none'}} >

                        <Card style={{
                            zIndex: -2,
                            boxShadow:'none' ,
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
                                        <Typography paddingBottom={'50px'} paddingTop={'25px'}   fontFamily='Dongle' letterSpacing={'10px'} align={(width < 960) ? "center" : "right"} lineHeight={'1.5rem'} color='#ffffffff' fontWeight='bold' variant='subtitle1' fontSize='1.25rem'>
                                            .//PREPARE FOR LAUNCH
                                        </Typography>
                                       
                                            <Typography fontFamily='Dongle' align={width < 960 ? "center" : "right"} color={'#ffffffff'} variant='h3' lineHeight={'3.5rem'} fontSize='7.5rem' fontWeight='900'>TO THE MOON</Typography>
                                    
                                            <Typography paddingTop={'25px'} fontFamily='Dongle' align={width < 960 ? "center" : "right"} color={'white'} fontWeight='light' variant='subtitle1' fontSize='1.6rem'>
                                               <b> Explore the moon base</b> in our interactive web based game application! 
                                                Here take part in an evergrowing game experience as we  <b>update the game with more content with the community.</b> 
                                            </Typography>

                                            
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