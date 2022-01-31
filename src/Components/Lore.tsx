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
import { FaArrowCircleLeft,  FaArrowCircleRight } from "react-icons/fa";
import { Button } from "@mui/material";
import '../Pages/Page.css'

const Lore: React.FC = () =>
{

    const [width, setWidth] = React.useState(window.innerWidth);

    const updateDimensions = () =>
    {

        setWidth(window.innerWidth);

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
                <Grid container item direction="row" style={{ boxShadow: 'none' }} >
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

                                        <Typography paddingBottom={'25px'} paddingTop={'25px'} fontFamily='Dongle' letterSpacing={'10px'} align={(width < 960) ? "center" : "left"} lineHeight={0} color='#fcba0366' fontWeight='bold' variant='subtitle1' fontSize='1.25rem'>
                                            .//DISCOVERING
                                        </Typography>
                                        <div className="glow">
                                            <Typography fontFamily='Dongle' align={width < 960 ? "center" : "left"} color={'#ffffffFF'} variant='h3' lineHeight={'2.5rem'} fontSize='7.5rem' fontWeight='900'>THE BOBOTS.</Typography>
                                        </div>
                                        <div className="glowWhite">
                                            <Typography paddingTop={'25px'} fontFamily='Dongle' align={width < 960 ? "center" : "left"} color={'white'} fontWeight='light' variant='subtitle1' fontSize='1.6rem'>
                                                <b>In the year 4040,</b>
                                                Robots have dominantly replace humans with cute robots being stationed on the moon.
                                                Together, 4040 bobots rule the moon colony.These bobots lives on the ethereum network using the  <b>ERC-721 blockchain.</b>
                                            </Typography>
                                            <Grid xs
                                                width={'100%'}
                                                paddingTop={'25px'}
                                                container
                                                spacing={3}
                                                direction="row"
                                                alignItems="center"
                                                justifyContent="center" >
                                            <Button variant="contained" style={{ height: '40px', width: '80px', fontFamily: 'Dongle', fontSize: '1.5rem', backgroundColor: '#ffffffaa', borderRadius: '20px', boxShadow: 'none', margin: '5px' }}>
                                               <FaArrowCircleLeft/> 
                                            </Button>

                                            <Button  variant="contained" style={{ height: '40px', width: '80px', fontFamily: 'Dongle', fontSize: '1.5rem', backgroundColor: '#ffffffaa', borderRadius: '20px', boxShadow: 'none', margin: '5px' }}>
                                            <FaArrowCircleRight/>
                                            </Button>
                                            </Grid>
                                            <Grid xs
                                                width={'100%'}
                                                paddingTop={'25px'}
                                                container
                                                spacing={3}
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
                                                <Grid item>
                                                    <Typography fontFamily='Dongle' align={'center'} color={'white'} variant='h3' fontStyle={'italic'} fontSize='2.8rem' fontWeight='900'>11</Typography>
                                                    <Typography fontFamily='Dongle' align={'center'} color={'white'} variant='h3' fontStyle={'italic'} fontSize='1rem' fontWeight='light'>Properties</Typography>
                                                </Grid>
                                            </Grid>
                                        </div>
                                    </div>
                                </Slide>


                            </Grid>
                        </Card>
                    </Grid>
                    <Grid xs={12} md={6} height={'100vh'} style={{ boxShadow: '0px' }}>


                    </Grid>
                </Grid>
            </Grid>

        </>
    );
}
export default Lore;