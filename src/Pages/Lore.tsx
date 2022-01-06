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
const Lore: React.FC = () =>
{
    return (
        <>
            <Grid
                container
                spacing={3}
                direction="row"
                alignItems="center"
                justifyContent="center"
                height="100vh"

            >

                <Grid container item direction="row" >
                    <Grid item sm={12} lg={6}>
                        <Card style={{
                            zIndex: -2,
                            borderRadius: '0px',
                            background: 'linear-gradient(to right bottom, #121212, #050505)',
                            width: '50vw',
                            height: '100vh'
                        }}>

                        </Card>
                    </Grid>
                    <Grid item sm={12} lg={6} >
                        <Card style={{
                            zIndex: -2,
                            borderRadius: '0px',
                            background: 'linear-gradient(to right bottom, #121212, #050505)',
                            width: '50vw',
                            height: '100vh'
                        }}>

                        </Card>
                    </Grid>
                    </Grid>
                    </Grid>

                </>
                );
}
                export default Lore;