import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { CategoriesApi, Api } from './Api'
import { ProductsByCat } from './Api'
import Button from '@material-ui/core/Button';
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
  const CategorizedProducts = ProductsByCat();
//   const product = Api();
// console.log(Api())
  const handleClick = (e) => {
    e.preventDefault();
    let category = e.target.innerText.toLowerCase()
    // window.location.href = `/products/category/${category}`
  }
  return (
    <div className={classes.root}>
        {
            categories.map(
                (item) => {
                    return(
                    <Typography className={classes.title}>
                        <Link to="/products/category/jewelery" className={classes.stylebtn}> {item.toUpperCase()} </Link>
                    </Typography>
                    )
                }
            )
        }
    </div>
  );
}