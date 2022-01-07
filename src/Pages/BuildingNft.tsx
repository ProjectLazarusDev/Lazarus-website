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
import { Box, Grid, Slide } from "@mui/material";
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
                height="100vh"
            >
                <Grid item direction="row"  >
                    <Grid item sm={12} lg={6} >
                        <div className='PageVidWrap'>
                            <div className="PageVid">
                                <CardMedia
                                    component='video'
                                    muted={true}
                                    image={"video_1.mp4"}
                                    autoPlay
                                    loop
                                />
                            </div>
                        </div>

                    </Grid>
                    <Grid item sm={12} lg={6} >
                        <Card style={{
                            zIndex: -2,
                            borderRadius: '0px',
                            background: 'linear-gradient(to right bottom, #121212, #050505)',

                        }}>
                            <Grid container
                                spacing={0}
                                direction="column"
                                alignItems="center"
                                justifyContent="center"
                                style={{ height: '100vh' }} >

                                <Slide in={true} direction='up' timeout={2000}>

                                    <div className='PageContainer'>
                                        <Grid item sm={12} lg={6}>
                                            <Typography align="center" color={'white'} variant='h5'>Building an NFT.</Typography>
                                            <Typography align="center" color={'white'} variant='subtitle1'>
                                                Beautiful design for managing tasks, ability to add and delete tasks. Drag and Drop feature to move
                                                the task across different stage in the Kanban board.
                                            </Typography>
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