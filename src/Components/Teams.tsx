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
import { Box } from '@mui/material';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { TEAM_MEMBERS } from '../Data/TeamData';

const Teams: React.FC = () => {
  return (
    <Box sx={{
      width: '100%'
    }}>
      <Card
        style={{
          zIndex: -2,
          minHeight: '100vh',
          background: 'linear-gradient(to right bottom, #4444441f,#00000000)',
          borderRadius: '0px',
          alignItems: ' center',
          justifyContent: ' center',
        }}
      >
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
          - WHO BUILT IT? -
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
            fontSize="5.5rem"
            fontWeight="900"
          >
            MEET THE TEAM
          </Typography>
        </div>
        <Grid
          xs
          container columnSpacing={{ xs: 4, sm: 6, md: 10, lg: 16 }}
          rowSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}
          direction="row"
          alignItems="center"
          justifyContent="center">
          {TEAM_MEMBERS.map((member, index) => (
            <Grid item xs={'auto'}
              direction="column" alignItems="center" justifyContent="center"
              key={`team-member-${index}`}>
              <Card
                style={{
                  zIndex: -2,
                  background: 'linear-gradient(to right bottom, #4444441f,#00000000)',
                  borderRadius: '0px',
                  alignItems: ' center',
                  justifyContent: ' center',
                  padding: '30px',
                  height: '400px',
                  width: '350px',
                }}
              >
                <Typography
                  align="center"
                  fontSize="2.0rem"
                  lineHeight="1.5rem"
                  variant="body1"
                  component="h1"
                  gutterBottom
                  fontFamily="Dongle"
                  letterSpacing={'0.5rem'}
                  fontWeight="bold"
                  color="white"
                >
                  {member.name}
                </Typography>
                <Typography
                  align="center"
                  variant="body1"
                  component="h1"
                  fontSize="1.5rem"
                  gutterBottom
                  fontFamily="Dongle"
                  letterSpacing={'0.2rem'}
                  color={'#ffffff66'}
                  fontWeight=""
                >
                  {member.role}
                </Typography>
                <Typography
                  paddingTop="20px"
                  align="center"
                  variant="body2"
                  component="h1"
                  gutterBottom
                  fontFamily="Dongle"
                  lineHeight="1.5rem"
                  fontSize="1.5rem"
                  fontWeight="light"
                  color="white"
                  width="fit-content"
                >
                  {member.description1}
                </Typography>
                <Typography
                  align="center"
                  variant="body2"
                  component="h1"
                  gutterBottom
                  fontFamily="Dongle"
                  lineHeight="1.5rem"
                  fontSize="1.5rem"
                  fontWeight="light"
                  color="white"
                  width="fit-content"
                >
                  {member.description2}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Card>
    </Box >
  );
};
export default Teams;
