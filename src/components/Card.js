import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function ProductCard({data}) {
  const classes = useStyles();
console.log(data)
  return (
    <Grid container>
        {
          data.map((item, ind)=>(
            <Grid item md={4} sm={12}>
              <img src={item.image} width="100%" height="550px"/>

              <div className={classes.styleborder}>
                  <h6>{item.title}</h6>
                  <p>{item.text}</p>
              </div>
          </Grid>
          ))
        }
    </Grid>
  );
}