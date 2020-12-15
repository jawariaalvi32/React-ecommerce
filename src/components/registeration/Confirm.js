import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { List, ListItem, ListItemText } from '@material-ui/core/';

const useStyles = makeStyles(theme => ({
  textCenter: {
    textAlign: 'center'
  },
  button: {
    margin: theme.spacing(1)
  }
}));

export const Confirm = ({ formData, prevStep, nextStep }) => {
  const classes = useStyles();
  const { firstName, lastName, address, city, country, method } = formData;
  return (
    <>
      <div>
        <List>
          <ListItem>
            <ListItemText
              primary='First Name'
              secondary={firstName}
              className={classes.textCenter}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary='Last Name'
              secondary={lastName}
              className={classes.textCenter}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary='Address'
              secondary={address}
              className={classes.textCenter}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary='City'
              secondary={city}
              className={classes.textCenter}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary='Country'
              secondary={country}
              className={classes.textCenter}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary='Payment Method'
              secondary={method}
              className={classes.textCenter}
            />
          </ListItem>
        </List>
        <div className={classes.textCenter}>
          <Button
            color='secondary'
            variant='contained'
            className={classes.button}
            onClick={() => prevStep()}
          >
            Back
          </Button>

          <Button
            color='primary'
            variant='contained'
            className={classes.button}
            onClick={() => nextStep()}
          >
            Confirm & Continue
          </Button>
        </div>
      </div>
    </>
  );
};
