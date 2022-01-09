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
import {Grid} from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const TeamsPage: React.FC = () =>
{
    return (
        <>
            <Card style={{
                zIndex: -2, width: '100vw', height: '100%',
                borderRadius: '0px',
                background: 'linear-gradient(to right bottom, #121212, #050505)'
            }}>
                <Grid xs
                 style={{minHeight:'100vh'}}
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
                         
                        >
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" style={{ margin:'30px' ,width: '200px', height: '200px' }} />
                            <Typography align="center" paddingTop={'30px'} variant="body1" component="h1"
                                gutterBottom fontFamily='Varela Round' fontWeight='bold' color='white'>
                                Edmund
                            </Typography>
                            <Typography align="center" variant="body1" component="h1"
                                gutterBottom fontFamily='Varela Round' fontWeight="" color='white'>
                               Artist
                            </Typography>
                        </Grid>

                        <Grid
                          
                            direction="column"
                            alignItems="center"
                            justifyContent="center"
                           
                        >
                            <Avatar  alt="Remy Sharp" src="/static/images/avatar/1.jpg" style={{ margin:'30px' ,width: '200px', height: '200px' }} />
                            <Typography align="center" paddingTop={'30px'}variant="body1" component="h1"
                                gutterBottom fontFamily='Varela Round' fontWeight='bold' color='white'>
                                Edmund
                            </Typography>
                            <Typography  align="center" variant="body1" component="h1"
                                gutterBottom fontFamily='Varela Round' fontWeight="" color='white'>
                               Artist
                            </Typography>
                        </Grid>
                  
                        <Grid
                           
                           direction="column"
                           alignItems="center"
                           justifyContent="center"
                          
                       >
                           <Avatar  alt="Remy Sharp" src="/static/images/avatar/1.jpg" style={{ margin:'30px' ,width: '200px', height: '200px' }} />
                           <Typography align="center" paddingTop={'30px'}variant="body1" component="h1"
                               gutterBottom fontFamily='Varela Round' fontWeight='bold' color='white'>
                               Edmund
                           </Typography>
                           <Typography  align="center" variant="body1" component="h1"
                               gutterBottom fontFamily='Varela Round' fontWeight="" color='white'>
                              Artist
                           </Typography>
                       </Grid>
                       <Grid
                           
                           direction="column"
                           alignItems="center"
                           justifyContent="center"
                          
                       >
                           <Avatar  alt="Remy Sharp" src="/static/images/avatar/1.jpg" style={{margin:'30px' ,width: '200px', height: '200px' }} />
                           <Typography align="center" paddingTop={'30px'}variant="body1" component="h1"
                               gutterBottom fontFamily='Varela Round' fontWeight='bold' color='white'>
                               Edmund
                           </Typography>
                           <Typography  align="center" variant="body1" component="h1"
                               gutterBottom fontFamily='Varela Round' fontWeight="" color='white'>
                              Artist
                           </Typography>
                       </Grid>
                       <Grid
                           
                           direction="column"
                           alignItems="center"
                           justifyContent="center"
                       >
                           <Avatar  alt="Remy Sharp" src="/static/images/avatar/1.jpg" style={{ margin:'30px' ,width: '200px', height: '200px' }} />
                           <Typography align="center" paddingTop={'30px'}variant="body1" component="h1"
                               gutterBottom fontFamily='Varela Round' fontWeight='bold' color='white'>
                               Edmund
                           </Typography>
                           <Typography  align="center" variant="body1" component="h1"
                               gutterBottom fontFamily='Varela Round' fontWeight="" color='white'>
                              Artist
                           </Typography>
                       </Grid>
                </Grid>
                
            </Card>


        </>
    );
}
export default TeamsPage;