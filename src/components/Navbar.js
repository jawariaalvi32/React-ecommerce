import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { CategoriesApi } from './Api'
import {Link} from 'react-router-dom'

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
  stylebtn: {
    color: 'black !important',
    "&:hover": {
      color: 'black !important'  
    },
  }
}));

export default function Navbar() {
  const classes = useStyles();
  const categories = CategoriesApi();

  return (
    <div className={classes.root}>
        {
            categories.map(
                (item) => {
                    return(
                    <Typography className={classes.title}>
                        <a href={`/products/category/${item}`} className={classes.stylebtn}> {item.toUpperCase()} </a>
                    </Typography>
                    )
                }
            )
        }
    </div>
  );
}