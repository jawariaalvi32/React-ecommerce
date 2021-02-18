import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { CategoriesApi } from './Api'

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

export default function Categories() {
  const classes = useStyles();
  const categories = CategoriesApi();
  console.log(categories)
  return (
    <div className={classes.root}>
        {
            categories.map(
                (item) => {
                    return(
                    <Typography className={classes.title}>
                        {item.toUpperCase()}
                    </Typography>
                    )
                }
            )
        }
    </div>
  );
}