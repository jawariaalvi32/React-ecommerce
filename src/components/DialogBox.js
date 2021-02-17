import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Login, Signup } from '../store/action';

export default function DialogBox({method}) {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [pwd, setPwd] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    let data = {
        email: email,
        password: pwd
    }
    Login(data)
  }

  const handleSignup = (e) => {
    e.preventDefault()
    let data = {
        email: email,
        password: pwd
    }
    Signup(data)
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Login
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            onChange={ (e) => setEmail(e.target.value)
            }
          />
          <TextField
            autoFocus
            margin="dense"
            id="pwd"
            label="Password"
            type="password"
            fullWidth
            onChange={ (e) => setPwd(e.target.value) }
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} color="primary">
            Login
          </Button>
          <Button onClick={handleSignup} color="primary">
            Signup
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}