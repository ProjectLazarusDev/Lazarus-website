/*****************************************************************************/
/*!
\file Lore.js
\date 2021
\brief
\Not for distribution
*/
/*****************************************************************************/
import React from 'react';

import Card from '@mui/material/Card';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';

const Seasons: React.FC = () => {
  return (
    <Card
      style={{
        zIndex: -2,

        height: '100%',
        background: 'linear-gradient(to right bottom, #ffffff1f,#ffffff00)',
        borderRadius: '0px',
        alignItems: ' center',
        justifyContent: ' center',
      }}
    >
      <Grid
        xs
        style={{ minHeight: '100vh' }}
        container
        spacing={0}
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Grid direction="column" alignItems="center" justifyContent="center">
          <Typography
            paddingTop={'170px'}
            fontFamily="Dongle"
            letterSpacing={'10px'}
            align="center"
            lineHeight={'1.5rem'}
            color={'#ffffff66'}
            fontWeight="bold"
            variant="subtitle1"
            fontSize="1.25rem"
          >
            - WHAT'S NEXT -
          </Typography>
          <div className="glow">
            <Typography
              fontFamily="Dongle"
              paddingBottom="50px"
              paddingTop="25px"
              align="center"
              color={'#ffffffFF'}
              variant="h3"
              lineHeight={'3.5rem'}
              fontSize={'4.5rem'}
              fontWeight="900"
            >
              THE ROAD AHEAD
            </Typography>
          </div>

          <Grid
            xs
            style={{ display: 'flex' }}
            container
            spacing={0}
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <Grid direction="row" alignItems="left" justifyContent="left">
              <Card
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  zIndex: -2,
                  margin: '20px',
                  background: 'linear-gradient(to right bottom, #00000055,#00000000)',
                  borderRadius: '0px',
                  alignItems: ' center',
                  justifyContent: ' center',
                }}
              >
                <CardMedia
                  component="video"
                  muted={true}
                  image={'bobots_promo.mp4'}
                  autoPlay
                  loop
                  style={{ display: 'fixed', width: 'inherit', height: '175px', borderRadius: '0px' }}
                />

                <Card
                  style={{
                    zIndex: 2,
                    width: '350px',
                    background: '#00000000',
                    boxShadow: 'none',
                    paddingLeft: '20px',
                  }}
                >
                  <Typography
                    align="left"
                    fontSize="1.6rem"
                    lineHeight="1.5rem"
                    variant="body1"
                    component="h1"
                    gutterBottom
                    fontFamily="Dongle"
                    letterSpacing={'0.5rem'}
                    fontWeight="bold"
                    color="white"
                  >
                    4040 BOBOTS
                  </Typography>
                  <Typography
                    align="left"
                    variant="body1"
                    component="h1"
                    fontSize="1rem"
                    lineHeight="0.5rem"
                    gutterBottom
                    fontFamily="Dongle"
                    letterSpacing={'0.2rem'}
                    color={'#ffffff66'}
                    fontWeight=""
                  >
                    SEASON 1 LAUNCH
                  </Typography>

                  <Typography
                    align="left"
                    variant="body2"
                    component="h1"
                    gutterBottom
                    fontFamily="Dongle"
                    lineHeight="1.5rem"
                    fontSize="1.25rem"
                    fontWeight="light"
                    color="white"
                    width="250px"
                  >
                    The launch of season 1 will see a total of 4040 Bobots being released to the public!
                  </Typography>
                </Card>
              </Card>
            </Grid>

            <Grid direction="row" alignItems="left" justifyContent="left">
              <Card
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  zIndex: -2,
                  margin: '20px',
                  background: 'linear-gradient(to right bottom, #00000055,#00000000)',
                  borderRadius: '0px',
                  alignItems: ' center',
                  justifyContent: ' center',
                }}
              >
                <CardMedia
                  component="video"
                  muted={true}
                  image={'photo_mode.mp4'}
                  autoPlay
                  loop
                  style={{ display: 'fixed', width: 'inherit', height: '175px', borderRadius: '0px' }}
                />

                <Card
                  style={{
                    zIndex: 2,
                    width: '350px',
                    background: '#00000000',
                    boxShadow: 'none',
                    paddingLeft: '20px',
                  }}
                >
                  <Typography
                    align="left"
                    fontSize="1.6rem"
                    lineHeight="1.5rem"
                    variant="body1"
                    component="h1"
                    gutterBottom
                    fontFamily="Dongle"
                    letterSpacing={'0.5rem'}
                    fontWeight="bold"
                    color="white"
                  >
                    BOBOT STAKING
                  </Typography>
                  <Typography
                    align="left"
                    variant="body1"
                    component="h1"
                    fontSize="1rem"
                    lineHeight="0.5rem"
                    gutterBottom
                    fontFamily="Dongle"
                    letterSpacing={'0.2rem'}
                    color={'#ffffff66'}
                    fontWeight=""
                  >
                    SEASON 1 LAUNCH
                  </Typography>

                  <Typography
                    align="left"
                    variant="body2"
                    component="h1"
                    gutterBottom
                    fontFamily="Dongle"
                    lineHeight="1.5rem"
                    fontSize="1.25rem"
                    fontWeight="light"
                    color="white"
                    width="250px"
                  >
                    Bobots can be sent on training missions to increase valuable attributes.
                  </Typography>
                </Card>
              </Card>
            </Grid>

            <Grid direction="row" alignItems="left" justifyContent="left">
              <Card
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  zIndex: -2,
                  margin: '20px',
                  background: 'linear-gradient(to right bottom, #00000055,#00000000)',
                  borderRadius: '0px',
                  alignItems: ' center',
                  justifyContent: ' center',
                }}
              >
                <CardMedia
                  component="video"
                  muted={true}
                  image={'social_hub.mp4'}
                  autoPlay
                  loop
                  style={{ display: 'fixed', width: 'inherit', height: '175px', borderRadius: '0px' }}
                />

                <Card
                  style={{
                    zIndex: 2,
                    width: '350px',
                    background: '#00000000',
                    boxShadow: 'none',
                    paddingLeft: '20px',
                  }}
                >
                  <Typography
                    align="left"
                    fontSize="1.6rem"
                    lineHeight="1.5rem"
                    variant="body1"
                    component="h1"
                    gutterBottom
                    fontFamily="Dongle"
                    letterSpacing={'0.5rem'}
                    fontWeight="bold"
                    color="white"
                  >
                    SOCIAL HUB
                  </Typography>
                  <Typography
                    align="left"
                    variant="body1"
                    component="h1"
                    fontSize="1rem"
                    lineHeight="0.5rem"
                    gutterBottom
                    fontFamily="Dongle"
                    letterSpacing={'0.2rem'}
                    color={'#ffffff66'}
                    fontWeight=""
                  >
                    SEASON 1 LAUNCH
                  </Typography>

                  <Typography
                    align="left"
                    variant="body2"
                    component="h1"
                    gutterBottom
                    fontFamily="Dongle"
                    lineHeight="1.5rem"
                    fontSize="1.25rem"
                    fontWeight="light"
                    color="white"
                    width="250px"
                  >
                    With the release of season 1 Bobots,we will release the social hub, a multiplayer social experience
                    to meet and chat with other Bobots!
                  </Typography>
                </Card>
              </Card>
            </Grid>

            <Grid direction="row" alignItems="left" justifyContent="left">
              <Card
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  zIndex: -2,
                  margin: '20px',
                  background: 'linear-gradient(to right bottom, #00000055,#00000000)',
                  borderRadius: '0px',
                  alignItems: ' center',
                  justifyContent: ' center',
                }}
              >
                <CardMedia
                  component="video"
                  muted={true}
                  image={'apocalypse.mp4'}
                  autoPlay
                  loop
                  style={{ display: 'fixed', width: 'inherit', height: '175px', borderRadius: '0px' }}
                />

                <Card
                  style={{
                    zIndex: 2,
                    width: '350px',
                    background: '#00000000',
                    boxShadow: 'none',
                    paddingLeft: '20px',
                  }}
                >
                  <Typography
                    align="left"
                    fontSize="1.6rem"
                    lineHeight="1.5rem"
                    variant="body1"
                    component="h1"
                    gutterBottom
                    fontFamily="Dongle"
                    letterSpacing={'0.5rem'}
                    fontWeight="bold"
                    color="white"
                  >
                    THE MOON BASE
                  </Typography>
                  <Typography
                    align="left"
                    variant="body1"
                    component="h1"
                    fontSize="1rem"
                    lineHeight="0.5rem"
                    gutterBottom
                    fontFamily="Dongle"
                    letterSpacing={'0.2rem'}
                    color={'#ffffff66'}
                    fontWeight=""
                  >
                    MID SEASON LAUNCH
                  </Typography>

                  <Typography
                    align="left"
                    variant="body2"
                    component="h1"
                    gutterBottom
                    fontFamily="Dongle"
                    lineHeight="1.5rem"
                    fontSize="1.25rem"
                    fontWeight="light"
                    color="white"
                    width="250px"
                  >
                    Bobot holders will have access to the moon base, here players will be able to build their dream base
                    and interact with the ecosystem.
                  </Typography>
                </Card>
              </Card>
            </Grid>

            <Grid direction="row" alignItems="left" justifyContent="left">
              <Card
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  zIndex: -2,
                  margin: '20px',
                  background: 'linear-gradient(to right bottom, #00000055,#00000000)',
                  borderRadius: '0px',
                  alignItems: ' center',
                  justifyContent: ' center',
                }}
              >
                <CardMedia
                  component="video"
                  muted={true}
                  image={'redemption.mp4'}
                  autoPlay
                  loop
                  style={{ display: 'fixed', width: 'inherit', height: '175px', borderRadius: '0px' }}
                />

                <Card
                  style={{
                    zIndex: 2,
                    width: '350px',
                    background: '#00000000',
                    boxShadow: 'none',
                    paddingLeft: '20px',
                  }}
                >
                  <Typography
                    align="left"
                    fontSize="1.6rem"
                    lineHeight="1.5rem"
                    variant="body1"
                    component="h1"
                    gutterBottom
                    fontFamily="Dongle"
                    letterSpacing={'0.5rem'}
                    fontWeight="bold"
                    color="white"
                  >
                    MINING DRILL
                  </Typography>
                  <Typography
                    align="left"
                    variant="body1"
                    component="h1"
                    fontSize="1rem"
                    lineHeight="0.5rem"
                    gutterBottom
                    fontFamily="Dongle"
                    letterSpacing={'0.2rem'}
                    color={'#ffffff66'}
                    fontWeight=""
                  >
                    MID SEASON LAUNCH
                  </Typography>

                  <Typography
                    align="left"
                    variant="body2"
                    component="h1"
                    gutterBottom
                    fontFamily="Dongle"
                    lineHeight="1.5rem"
                    fontSize="1.25rem"
                    fontWeight="light"
                    color="white"
                    width="250px"
                  >
                    Stake resources and Bobots to receive valuable rewards.
                  </Typography>
                </Card>
              </Card>
            </Grid>

            <Grid direction="row" alignItems="left" justifyContent="left">
              <Card
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  zIndex: -2,
                  margin: '20px',
                  background: 'linear-gradient(to right bottom, #00000055,#00000000)',
                  borderRadius: '0px',
                  alignItems: ' center',
                  justifyContent: ' center',
                }}
              >
                <CardMedia
                  component="video"
                  muted={true}
                  image={'season_content.mp4'}
                  autoPlay
                  loop
                  style={{ display: 'fixed', width: 'inherit', height: '175px', borderRadius: '0px' }}
                />

                <Card
                  style={{
                    zIndex: 2,
                    width: '350px',
                    background: '#00000000',
                    boxShadow: 'none',
                    paddingLeft: '20px',
                  }}
                >
                  <Typography
                    align="left"
                    fontSize="1.6rem"
                    lineHeight="1.5rem"
                    variant="body1"
                    component="h1"
                    gutterBottom
                    fontFamily="Dongle"
                    letterSpacing={'0.5rem'}
                    fontWeight="bold"
                    color="white"
                  >
                    RESOURCE INTEGRATION
                  </Typography>
                  <Typography
                    align="left"
                    variant="body1"
                    component="h1"
                    fontSize="1rem"
                    lineHeight="0.5rem"
                    gutterBottom
                    fontFamily="Dongle"
                    letterSpacing={'0.2rem'}
                    color={'#ffffff66'}
                    fontWeight=""
                  >
                    MID SEASON LAUNCH
                  </Typography>

                  <Typography
                    align="left"
                    variant="body2"
                    component="h1"
                    gutterBottom
                    fontFamily="Dongle"
                    lineHeight="1.5rem"
                    fontSize="1.25rem"
                    fontWeight="light"
                    color="white"
                    width="250px"
                  >
                    Integrate Consumables and collections from metaverses into our game.
                  </Typography>
                </Card>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};
export default Seasons;
