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
import { Grid } from "@mui/material";
import Typography from '@mui/material/Typography';
import { CardMedia } from "@mui/material";


const Seasons: React.FC = () =>
{

  return (
    <Card style={{
      zIndex: -2,

      height: '100%',
      background: 'linear-gradient(to right bottom, #ffffff1f,#ffffff00)',
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

        >
          <Typography paddingTop={'25px'} fontFamily='Dongle' letterSpacing={'10px'} align="center" lineHeight={'1.5rem'} color={'#ffffff66'} fontWeight='bold' variant='subtitle1' fontSize='1.25rem'>
            - WHAT AWAITS IN THE FUTURE? -
          </Typography>
          <div className="glow">
            <Typography fontFamily='Dongle' paddingTop="25px" align="center" color={'#ffffffFF'} variant='h3' lineHeight={'3.5rem'} fontSize='5.5rem' fontWeight='900'>THE ROAD AHEAD</Typography>
          </div>



          <Grid xs
            style={{ display: 'flex' }}
            container
            spacing={0}
            direction="row"
            alignItems="center"
            justifyContent="center"
          >






            
            <Grid
              direction="row"
              alignItems="left"
              justifyContent="left"

            >
              <Card style={{
                display: 'flex',
                flexDirection: 'row',
                zIndex: -2,
                margin:'20px',
                background: 'linear-gradient(to right bottom, #00000055,#00000000)',
                borderRadius: '0px',
                alignItems: ' center',
                justifyContent: ' center',

              }}>
                <CardMedia

                  component='video'
                  muted={true}
                  image={"bobots_promo.mp4"}
                  autoPlay
                  loop
                  style={{ display: 'fixed', width: 'inherit', height: '175px', borderRadius: '0px' }}
                />

                <Card style={{
                  zIndex: 2,
                  width: '350px',
                  background: '#00000000',
                  boxShadow: 'none',
                  paddingLeft: '20px'
                }}
                >
                  <Typography align="left" fontSize='1.6rem' lineHeight='1.5rem' variant="body1" component="h1"
                    gutterBottom fontFamily='Dongle' letterSpacing={'0.5rem'} fontWeight='bold' color='white'>
                    4040 BOBOTS
                  </Typography>
                  <Typography align="left" variant="body1" component="h1" fontSize='1rem' lineHeight='0.5rem'
                    gutterBottom fontFamily='Dongle' letterSpacing={'0.2rem'} color={'#ffffff66'} fontWeight="" >
                    SEASON 1 LAUNCH
                  </Typography>

                  <Typography align="left" variant="body2" component="h1"
                    gutterBottom fontFamily='Dongle' lineHeight='1.5rem'
                    fontSize='1.25rem' fontWeight="light" color='white' width= '300px' >
                   The launch of season 1 will see a total of 4040 Bobots being released to the public!
                  </Typography>
                </Card>
              </Card>
            </Grid>







            <Grid
              direction="row"
              alignItems="left"
              justifyContent="left"

            >
              <Card style={{
                display: 'flex',
                flexDirection: 'row',
                zIndex: -2,
                margin:'20px',
                background: 'linear-gradient(to right bottom, #00000055,#00000000)',
                borderRadius: '0px',
                alignItems: ' center',
                justifyContent: ' center',

              }}>
                <CardMedia

                  component='video'
                  muted={true}
                  image={"photo_mode.mp4"}
                  autoPlay
                  loop
                  style={{ display: 'fixed', width: 'inherit', height: '175px', borderRadius: '0px' }}
                />

                <Card style={{
                  zIndex: 2,
                  width: '350px',
                  background: '#00000000',
                  boxShadow: 'none',
                  paddingLeft: '20px'
                }}
                >
                  <Typography align="left" fontSize='1.6rem' lineHeight='1.5rem' variant="body1" component="h1"
                    gutterBottom fontFamily='Dongle' letterSpacing={'0.5rem'} fontWeight='bold' color='white'>
                    PHOTO MODE
                  </Typography>
                  <Typography align="left" variant="body1" component="h1" fontSize='1rem' lineHeight='0.5rem'
                    gutterBottom fontFamily='Dongle' letterSpacing={'0.2rem'} color={'#ffffff66'} fontWeight="" >
                    SEASON 1 LAUNCH
                  </Typography>

                  <Typography align="left" variant="body2" component="h1"
                    gutterBottom fontFamily='Dongle' lineHeight='1.5rem'
                    fontSize='1.25rem' fontWeight="light" color='white' width= '300px' >
                    Sick of seeing fixed jpgs as NFTs? We are giving you the power to create your own images and profile pictures!
                  </Typography>
                </Card>
              </Card>
            </Grid>


            <Grid
              direction="row"
              alignItems="left"
              justifyContent="left"

            >
              <Card style={{
                display: 'flex',
                flexDirection: 'row',
                zIndex: -2,
                margin:'20px',
                background: 'linear-gradient(to right bottom, #00000055,#00000000)',
                borderRadius: '0px',
                alignItems: ' center',
                justifyContent: ' center',

              }}>
                <CardMedia

                  component='video'
                  muted={true}
                  image={"social_hub.mp4"}
                  autoPlay
                  loop
                  style={{ display: 'fixed', width: 'inherit', height: '175px', borderRadius: '0px' }}
                />

                <Card style={{
                  zIndex: 2,
                  width: '350px',
                  background: '#00000000',
                  boxShadow: 'none',
                  paddingLeft: '20px'
                }}
                >
                  <Typography align="left" fontSize='1.6rem' lineHeight='1.5rem' variant="body1" component="h1"
                    gutterBottom fontFamily='Dongle' letterSpacing={'0.5rem'} fontWeight='bold' color='white'>
                    SOCIAL HUB
                  </Typography>
                  <Typography align="left" variant="body1" component="h1" fontSize='1rem' lineHeight='0.5rem'
                    gutterBottom fontFamily='Dongle' letterSpacing={'0.2rem'} color={'#ffffff66'} fontWeight="" >
                    SEASON 1 LAUNCH
                  </Typography>

                  <Typography align="left" variant="body2" component="h1"
                    gutterBottom fontFamily='Dongle' lineHeight='1.5rem'
                    fontSize='1.25rem' fontWeight="light" color='white' width= '300px' >
                    Shortly after release of season 1 Bobots,we will release the key utility that we are building,
                    multiplayer social experience to meet and chat with other Bobots!
                  </Typography>
                </Card>
              </Card>
            </Grid>





            <Grid
              direction="row"
              alignItems="left"
              justifyContent="left"

            >
              <Card style={{
                display: 'flex',
                flexDirection: 'row',
                zIndex: -2,
                margin:'20px',
                background: 'linear-gradient(to right bottom, #00000055,#00000000)',
                borderRadius: '0px',
                alignItems: ' center',
                justifyContent: ' center',

              }}>
                <CardMedia

                  component='video'
                  muted={true}
                  image={"apocalypse.mp4"}
                  autoPlay
                  loop
                  style={{ display: 'fixed', width: 'inherit', height: '175px', borderRadius: '0px' }}
                />

                <Card style={{
                  zIndex: 2,
                  width: '350px',
                  background: '#00000000',
                  boxShadow: 'none',
                  paddingLeft: '20px'
                }}
                >
                  <Typography align="left" fontSize='1.6rem' lineHeight='1.5rem' variant="body1" component="h1"
                    gutterBottom fontFamily='Dongle' letterSpacing={'0.5rem'} fontWeight='bold' color='white'>
                    APOCALYPSE EXPANSION
                  </Typography>
                  <Typography align="left" variant="body1" component="h1" fontSize='1rem' lineHeight='0.5rem'
                    gutterBottom fontFamily='Dongle' letterSpacing={'0.2rem'} color={'#ffffff66'} fontWeight="" >
                    SEASON 2 LAUNCH
                  </Typography>

                  <Typography align="left" variant="body2" component="h1"
                    gutterBottom fontFamily='Dongle' lineHeight='1.5rem'
                    fontSize='1.25rem' fontWeight="light" color='white' width= '300px' >
                    Launch of apocalyse bobots - season 1 holders would receive free airdrops for season 2 content.
                    More info in the future.
                  </Typography>
                </Card>
              </Card>
            </Grid>


            <Grid
              direction="row"
              alignItems="left"
              justifyContent="left"

            >
              <Card style={{
                display: 'flex',
                flexDirection: 'row',
                zIndex: -2,
                margin:'20px',
                background: 'linear-gradient(to right bottom, #00000055,#00000000)',
                borderRadius: '0px',
                alignItems: ' center',
                justifyContent: ' center',

              }}>
                <CardMedia

                  component='video'
                  muted={true}
                  image={"redemption.mp4"}
                  autoPlay
                  loop
                  style={{ display: 'fixed', width: 'inherit', height: '175px', borderRadius: '0px' }}
                />

                <Card style={{
                  zIndex: 2,
                  width: '350px',
                  background: '#00000000',
                  boxShadow: 'none',
                  paddingLeft: '20px'
                }}
                >
                  <Typography align="left" fontSize='1.6rem' lineHeight='1.5rem' variant="body1" component="h1"
                    gutterBottom fontFamily='Dongle' letterSpacing={'0.5rem'} fontWeight='bold' color='white'>
                   REDEMPTION EXPANSION
                  </Typography>
                  <Typography align="left" variant="body1" component="h1" fontSize='1rem' lineHeight='0.5rem'
                    gutterBottom fontFamily='Dongle' letterSpacing={'0.2rem'} color={'#ffffff66'} fontWeight="" >
                    SEASON 3 LAUNCH
                  </Typography>

                  <Typography align="left" variant="body2" component="h1"
                    gutterBottom fontFamily='Dongle' lineHeight='1.5rem'
                    fontSize='1.25rem' fontWeight="light" color='white' width= '300px' >
                     After the events of 'The Apocalypse'. Work begins to rebuild the moon base into a new and thriving community.
                  </Typography>
                </Card>
              </Card>
            </Grid>

            <Grid
              direction="row"
              alignItems="left"
              justifyContent="left"

            >
              <Card style={{
                display: 'flex',
                flexDirection: 'row',
                zIndex: -2,
                margin:'20px',
                background: 'linear-gradient(to right bottom, #00000055,#00000000)',
                borderRadius: '0px',
                alignItems: ' center',
                justifyContent: ' center',

              }}>
                <CardMedia

                  component='video'
                  muted={true}
                  image={"season_content.mp4"}
                  autoPlay
                  loop
                  style={{ display: 'fixed', width: 'inherit', height: '175px', borderRadius: '0px' }}
                />

                <Card style={{
                  zIndex: 2,
                  width: '350px',
                  background: '#00000000',
                  boxShadow: 'none',
                  paddingLeft: '20px'
                }}
                >
                  <Typography align="left" fontSize='1.6rem' lineHeight='1.5rem' variant="body1" component="h1"
                    gutterBottom fontFamily='Dongle' letterSpacing={'0.5rem'} fontWeight='bold' color='white'>
                    MORE SEASONAL EVENTS!
                  </Typography>
                  <Typography align="left" variant="body1" component="h1" fontSize='1rem' lineHeight='0.5rem'
                    gutterBottom fontFamily='Dongle' letterSpacing={'0.2rem'} color={'#ffffff66'} fontWeight="" >
                    BETWEEN SEASONS
                  </Typography>

                  <Typography align="left" variant="body2" component="h1"
                    gutterBottom fontFamily='Dongle' lineHeight='1.5rem'
                    fontSize='1.25rem' fontWeight="light" color='white' width= '300px' >
                    We will roll out various features throughout all seasons,stay tuned!
                  </Typography>
                </Card>
              </Card>
            </Grid>

















          </Grid>


























        </Grid>


      </Grid>

    </Card>

  );
}
export default Seasons;