import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import './style.css'
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
    margin:0,
    padding:0,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}));

 function Portfolio() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className='appbar'>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" className={classes.title}>
           <span className='sub-title'>EXTO</span> 
          </Typography>

          {/* <Button color="inherit">Login</Button> */}
          <Typography variant="h6" className='title1'>
          Home
          </Typography>
          <Typography variant="h6" className='title1'>
            Portfolio
          </Typography>
          <Typography variant="h6" className='title1'>
            Blog
          </Typography>
          <Typography variant="h6" className='title1'>
            Style Guide
          </Typography>
          <Typography variant="h6" className='title1'>
            About
          </Typography>
          <Typography variant="h6" className='title1'>
            Contact
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Portfolio
