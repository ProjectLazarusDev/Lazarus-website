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
import { Box, Grid, Slide } from "@mui/material";
import Typography from '@mui/material/Typography';
import { CardMedia } from "@mui/material";

const Lore: React.FC = () =>
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
                    <Grid item xs={12} sm={6}>
                        <Card style={{
                            zIndex: -2,
                            borderRadius: '0px',
                            background: 'linear-gradient(to right bottom, #12121200, #050505FF)',
                          
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

                                        <Card style={{
                                            backgroundColor: 'salmon', borderRadius: '100px', padding: '20px', alignItems: ' center',
                                            justifyContent: ' center'
                                        }}>
                                            <Typography fontFamily='Varela Round' align="center" color={'black'} variant='h3' fontWeight='bold'>TO THE MOON</Typography>
                                        </Card>
                                        <Typography align="center" color={'white'} variant='subtitle1'>
                                            Beautiful design for managing tasks, ability to add and delete tasks. Drag and Drop feature to move
                                            the task across different stage in the Kanban board.
                                        </Typography>

                                    </div>
                                </Slide>


                            </Grid>
                        </Card>
                    </Grid>
                    <Grid xs={12} sm={6}>
                    <div className='PageVidWrap'>
                        <div className="PageVid">
                            <CardMedia
                                component='video'
                                muted={true}
                                image={"video_2.mp4"}
                                autoPlay
                                loop
                               
                            />
                            </div>
                        </div>

                    </Grid>
                </Grid>
            </Grid>

        </>
    );
}
export default Lore;