import React from 'react'
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const Content = () => {
    return (
        <div>
            <Grid
                item
                 container
                 direction="row"
                 justify="center"
                 alignItems="center"
               >
                   <Grid xs={3}></Grid>
                   <Grid xs={6}  justify="center">
                 {/* <Grid xs={6}> */}
                   <Typography variant="h6" className='title-1'>
                   Hi, I'm Stackbit Exto Portfolio Theme.
                   </Typography>
                   </Grid>
                   <Grid xs={3}></Grid>
                   </Grid>
                   <Grid
                item
                 container
                 direction="row"
                 justify="center"
                 alignItems="center"
               >
                 <Grid xs={3}></Grid>
                   <Grid xs={6}>
                   <Typography variant="h6" justify='start' alignItems='' className='title-2' >
                   This section can contain a subtitle or tagline. The recommended length is one to three sentences, but can be changed as you prefer.
                   </Typography>
                   </Grid>
                   <Grid xs={3}></Grid>
                   </Grid>
                   <Grid
                item
                 container
                 direction="row"
                 justify="center"
                 alignItems="center"
               >
                   <Grid xs={3}></Grid>
                   <Grid xs={6}>
                   <Button variant="outlined" color="secondary" className='btn' >
                   Let's talk
                   </Button>
                   </Grid>
                   <Grid xs={3}></Grid>
            </Grid>
        </div>
    )
}

export default Content
