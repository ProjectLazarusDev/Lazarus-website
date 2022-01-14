/*****************************************************************************/
/*!
\file Home.js
\date 2021
\brief
\Not for distribution
*/
/*****************************************************************************/

import React from 'react';
import { themeDark } from '../Theme/Theme';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";
import Card from '@mui/material/Card';
import '../Theme/Theme';
import './Home.css'
import './Page.css'
import Header from '../Components/Header';
import { TextField } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Button } from '@mui/material';


const MintPage: React.FC = () =>
{

    function MintNumber()
    {

    }

    return (
        <>
        <div className ="pageGlobal">
        <Header></Header>
        <ThemeProvider theme={themeDark}>
            <Card style={{
                zIndex: -2, width: '100vw', height: '100%',
                borderRadius: '0px',
                background: 'linear-gradient(to right bottom, #121212, #050505)'
            }}>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    style={{ height: '100vh' }}
                >
                      <Typography>
                        Select how much you want to mint
                    </Typography>
                   <TextField defaultValue={'0'} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
                    {/*Full-screen button*/}

                  
                    <Button style={{ marginTop:'30px'}} variant='contained' onClick={() => { MintNumber() }} >
                          Mint!
                        </Button>
                </Grid>
            </Card>
            </ThemeProvider >
            </div>
        </>
    );
}
export default MintPage;