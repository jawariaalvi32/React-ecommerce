import { Grid } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    styleGrid: {
        padding: '2px',
    },
    container: {
        justifyContent: 'center',
    },
    styleborder: {
        border: '1px solid gray'

    }
  });

export const Box = ({ categories }) => {
    const classes = useStyles();
console.log(categories)
    return (
        <Grid container className={classes.container}>
            {
                categories.map(
                    (item) => {
                        return (
                            <Grid item md={3} sm={12} className={classes.styleGrid}>
                                <div className={classes.styleborder}>
                                    <h6>{item.title}</h6>
                                    <p>{item.text}</p>
                                </div>
                                <a href="/product">
                                    <img src={item.image} width="100%" height="550px"/>
                                </a>
                            </Grid>
                        )
                    }
                )
            }
        </Grid>
    )
}
