import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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
            <Card className={classes.root}>
            <div>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={item.image}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {item.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  View
                </Button>
                <Button size="small" color="primary">
                  Add to cart
                </Button>
              </CardActions>
            </div>
            </Card>
          </Grid>
          ))
        }
    </Grid>
  );
}