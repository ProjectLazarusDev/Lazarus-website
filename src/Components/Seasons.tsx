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
      zIndex: -2, width: '100vw', height: '100%',
      borderRadius: '0px',
      background: 'linear-gradient(to right bottom, #121212, #050505)'
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
           <Typography paddingTop={'25px'} fontFamily='Source Sans Pro' letterSpacing={'10px'} align="center" color={'#00a6ff55'} fontWeight='bold' variant='subtitle1' fontSize='0.75rem'>
                                            - WHAT AWAITS IN THE FUTURE? -
                                        </Typography>
                                       
                                            <Typography fontFamily='Source Sans Pro' align="center" color={'#00a6ffFF'} variant='h3' fontStyle={'italic'} fontSize='2.5rem' fontWeight='900'>FREQUENTLY ASKED QUESTIONS</Typography>
                                       
                                      
          <Box sx={{ justifyContent:'center',alignItems:'center',bgcolor: '#00a6ff00' }}>
            <AppBar position='static'  style={{marginTop:'30px' ,borderRadius:'100px' ,background:'linear-gradient(to right bottom, #00a6ff44,#00324d00)'}} >
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
                <Tab style={{fontFamily:'Source Sans Pro'}} label="Season 1" {...a11yProps(0)} />
                <Tab style={{fontFamily:'Source Sans Pro'}} label="Season 2" {...a11yProps(1)} />
                <Tab style={{fontFamily:'Source Sans Pro'}} label="Season 3" {...a11yProps(2)} />
              </Tabs>
            </AppBar>
            <SwipeableViews
              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
              index={value}
              onChangeIndex={handleChangeIndex}
            >
              <TabPanel value={value} index={0} dir={theme.direction}>
              <Typography fontFamily='Source Sans Pro' align="center" color={'#ffffffFF'} variant='h3'
               fontStyle={'italic'} fontSize='1.5rem' fontWeight='900'>THE BLAST OFF</Typography>

<Typography maxWidth='500px' paddingTop={'25px'} fontFamily='Source Sans Pro' align="left" color={'white'} fontWeight='light' variant='subtitle1' fontSize='0.9rem'> <b>In the year 4040,</b> Robots have dominantly replace humans.
               Cute robots are then stationed on the moon. Together, the bobots rule the moon colony.
                -Write more here....</Typography>

              </TabPanel>
              <TabPanel value={value} index={1} dir={theme.direction}>
              Season 2
              </TabPanel>
              <TabPanel value={value} index={2} dir={theme.direction}>
              Season 3
              </TabPanel>
            </SwipeableViews>
          </Box>
        </Grid>


      </Grid>

    </Card>

  );
}
export default Seasons;