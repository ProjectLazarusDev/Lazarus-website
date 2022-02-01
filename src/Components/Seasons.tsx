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
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';

interface TabPanelProps
{
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps)
{
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number)
{
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}


const Seasons: React.FC = () =>
{

  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) =>
  {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) =>
  {
    setValue(index);
  };

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
        style={{ minHeight: '150vh' }}
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
          <Typography paddingTop={'25px'} fontFamily='Dongle' letterSpacing={'10px'} align="center" lineHeight={0} color={'#ffffff66'} fontWeight='bold' variant='subtitle1' fontSize='1.25rem'>
            - WHAT AWAITS IN THE FUTURE? -
          </Typography>
          <div className="glow">
          <Typography fontFamily='Dongle' paddingTop="25px" align="center" color={'#ffffffFF'} variant='h3' lineHeight={'3.5rem'} fontSize='5.5rem' fontWeight='900'>SEASONAL ROADMAP</Typography>
          </div>

          <Box sx={{ justifyContent: 'center', alignItems: 'center', bgcolor: '#00a6ff00' }}>
            <AppBar position='static' style={{ marginTop: '30px', borderRadius: '100px',background: 'linear-gradient(to right bottom, #ffffff1f,#ffffff00)' }} >
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor='primary'
                TabIndicatorProps={{
                  style: {
                    display: "none",
                  },
                }}
                textColor="inherit"
                variant="fullWidth"
                aria-label="full width tabs example"
              >
                <Tab style={{ fontFamily: 'Dongle', fontSize: '1.5rem' }} label="Season 1" {...a11yProps(0)} />
                <Tab style={{ fontFamily: 'Dongle', fontSize: '1.5rem' }} label="Season 2" {...a11yProps(1)} />
                <Tab style={{ fontFamily: 'Dongle', fontSize: '1.5rem' }} label="Season 3" {...a11yProps(2)} />
              </Tabs>
            </AppBar>
            <SwipeableViews
              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
              index={value}
              onChangeIndex={handleChangeIndex}
            >
              <TabPanel value={value} index={0} dir={theme.direction}>
                <Typography fontFamily='Dongle' align="center" color={'#ffffffFF'} variant='h3'
                  fontStyle={'italic'} fontSize='2.5rem' fontWeight='900'>THE BLAST OFF</Typography>

               

                <Typography maxWidth='500px' paddingTop={'25px'} fontFamily='Dongle' align="left" color={'white'} fontWeight='light' variant='subtitle1' fontSize='1.5rem'> <b>In the year 4040,</b> Robots have dominantly replace humans.
                  The launch of season 1 would include:
                  <li>Launch of 4040 bobots </li>
                  <li>Initial launch of bobots web-based game app</li>
                  <li>The hangar - Social hub for avatar holders to hang out and chat</li>
                  <li>More gameplay expansions and updates throughout season 1.</li>
                  <li>Engaging and feedback from community on interesting ideas to expand the game.</li>

                </Typography>

              </TabPanel>
              <TabPanel value={value} index={1} dir={theme.direction}>
                <Typography fontFamily='Dongle' align="center" color={'#ffffffFF'} variant='h3'
                  fontStyle={'italic'} fontSize='2.5rem' fontWeight='900'>THE APOCALYPSE</Typography>

                <Typography maxWidth='500px' paddingTop={'25px'} fontFamily='Dongle' align="left" color={'white'} fontWeight='light' variant='subtitle1' fontSize='1.5rem'>
                  The bobots faces a life and death situation as mysterious cosmo clouds overwhelms the moon base.

                </Typography>

                <Typography maxWidth='500px' paddingTop={'25px'} fontFamily='Dongle' align="left" color={'white'} fontWeight='light' variant='subtitle1' fontSize='1.5rem'> 
                  The launch of season 2 would include:
                  <li>Launch of apocalyse bobots - season 1 holders would receive free airdrops for season 2 content.
                    More info in the future.
                  </li>
                  <li>New apocalypse themed expansion for web-based game.</li>
                  <li>Updates fixes to web-based game.</li>

                </Typography>
              </TabPanel>
              <TabPanel value={value} index={2} dir={theme.direction}>
                <Typography fontFamily='Dongle' align="center" color={'#ffffffFF'} variant='h3'
                  fontStyle={'italic'} fontSize='2.5rem' fontWeight='900'>THE REDEMPTION</Typography>
                <Typography maxWidth='500px' paddingTop={'25px'} fontFamily='Dongle' align="left" color={'white'} fontWeight='light' variant='subtitle1' fontSize='1.5rem'>
                  After the events of 'The Apocalypse'. Work begins to rebuild the moon base into a new and thriving community.

                </Typography>
                <Typography maxWidth='500px' paddingTop={'25px'} fontFamily='Dongle' align="left" color={'white'} fontWeight='light' variant='subtitle1' fontSize='1.5rem'> 
                  The launch of season 3 would include:
                  <li>New expansion to web-based app. More information down the line.
                  </li>
                  <li>New apocalypse themed expansion for web-based game.</li>
                </Typography>
              </TabPanel>
            </SwipeableViews>
          </Box>
        </Grid>


      </Grid>

    </Card>

  );
}
export default Seasons;