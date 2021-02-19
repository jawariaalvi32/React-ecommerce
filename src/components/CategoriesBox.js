import { Grid } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    styleGrid: {
        padding: '2px',
    },
    container: {
        justifyContent: 'center',
        marginTop:'3%'
    },
    styleborder: {
        border: '1px solid gray',
    },
    styleheading: {
        textAlign: 'center',
        marginTop:'2%',
    },
    styleimg: {
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
        }
    }

  });

const CategoriesBox = ({ categories }) => {
    const classes = useStyles();

    return (
        <div>
            <h3 className={classes.styleheading}>SHOP BY CATEGORY</h3>
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
                                    <img className={classes.styleimg} src={item.image} width="100%" height="550px"/>
                                </a>
                            </Grid>
                        )
                    }
                )
            }
        </Grid>

        </div>
    )
}
export default CategoriesBox