import React from 'react'
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';




const Images = () => {
    return (
        <div>
              <Grid
                item
                 container
                 direction="row"
                 justify="center"
                 alignItems="center"
               >
                   <Grid xs={6}  justify="center">
                 {/* <Grid xs={6}> */}
                   <Typography variant="h6" className='title-4'>
                       <h1 className='line-top'></h1>
                   Recent Work
                   </Typography>
                   </Grid>
               </Grid>
               <Grid
                item
                 container
                 direction="row"
                 justify="center"
                 alignItems="center"
               >
                   <Grid xs={6}  justify="center">
                 {/* <Grid xs={6}> */}
                   <Typography variant="h6" className='title-5'>
                   An optional subtitle of the section
                   </Typography>
                   </Grid>
               </Grid>

               <Grid
               
                 container
                 direction="row"
                 justify="center"
                 alignItems="center"
                 
               >
                   {/* <div className='margin-iamge'> */}
                   <Grid  xs={6} >
                        <img src='https://themes.stackbit.com/demos/exto/images/1.jpg' width='650px' height='400px' />
                   </Grid>
                   {/* <Grid xs={1}></Grid> */}
                   <Grid xs={5}  >
                   <img src='https://themes.stackbit.com/demos/exto/images/2.jpg' width='535px' height='400px' />
                   </Grid>
                   {/* </div> */}
               </Grid>

               <Grid
               container
               direction="row"
               justify="center"
               alignItems="center"
               
             >
                 {/* <div className='margin-iamge'> */}
                 <Grid  xs={5} >
                      <img src='https://themes.stackbit.com/demos/exto/images/3.jpg' width='535px'  height='400px' />
                 </Grid>
                 {/* <Grid xs={1}></Grid> */}
                 <Grid xs={6}  >
                 <img src='https://themes.stackbit.com/demos/exto/images/4.jpg' width='650px' height='400px' />
                 </Grid>
                 {/* </div> */}
             </Grid>
        <Grid
               
                 container
                 direction="row"
                 justify="center"
                 alignItems="center"
                 
               >
                   {/* <div className='margin-iamge'> */}
                   <Grid  xs={6} >
                        <img src='https://themes.stackbit.com/demos/exto/images/5.jpg' width='650px' height='400px' />
                   </Grid>
                   {/* <Grid xs={1}></Grid> */}
                   <Grid xs={5}  >
                   <img src='https://themes.stackbit.com/demos/exto/images/6.jpg' width='535px' height='400px' />
                   </Grid>
                   {/* </div> */}
               </Grid>
     
        </div>
    )
}

export default Images
