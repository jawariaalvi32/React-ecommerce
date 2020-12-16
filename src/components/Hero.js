import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ButtonShop from './Button';

const useStyles = makeStyles((theme) => ({
    imgStyles : {
        textAlign: "right", 
    },
    headingStyles : {
        marginTop: "10%",
        textAlign: "left",
        paddingLeft: "5%",

    },
    paraStyles: {
        margin: "10px auto",
        textAlign: "left",
        lineHeight: 1.5,
        fontSize: "1.1em",
    }
}))
  
  
function Hero({hero}) {
    const classes = useStyles();

    return (
        <Grid container>
            <Grid item xs={4} className={classes.headingStyles}>
            <h1>STORE</h1>
            <p className={classes.paraStyles}>Fake store rest API for your e-commerce or shopping website prototype</p>
            <ButtonShop text="Shop"/>
            </Grid>
            <Grid item alignContent={"right"} className={classes.imgStyles} xs={7}>
                <img src={hero} width="70%"/>
            </Grid>
        </Grid>
    )
}

export default Hero
