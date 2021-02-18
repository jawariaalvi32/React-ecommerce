import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { CategoriesApi } from './Api'
import { ProductsByCat } from './Api'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const categories = CategoriesApi();
  const CategorizedProducts = ProductsByCat();

  const handleClick = (e) => {
    e.preventDefault();
    let category = e.target.innerText
    // ProductsByCat(category)
    window.location.href = '/products/category'
  }
// console.log(CategorizedProducts)
  return (
    <div className={classes.root}>
        {
            categories.map(
                (item) => {
                    return(
                    <Typography className={classes.title}>
                        <button onClick={handleClick}> {item.toUpperCase()} </button>
                    </Typography>
                    )
                }
            )
        }
    </div>
  );
}