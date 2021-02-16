import React from 'react'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import '../App.css';
import LoginSignup from './login/Login';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    
  }));
function Header() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Link to="/" className="link">STORE</Link>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link to="/product">Products</Link>
            <Link to="/cart">Cart</Link>
          </Typography>
          <Link to="/register">Register</Link>        
          <Link to="/login"><LoginSignup/></Link>        
        </Toolbar>
      </AppBar>
    </div>
    )
}

export default Header
