
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Link } from 'react-router-dom';

export default function AlertDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    
    return (
        <div>
        {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Open alert dialog
        </Button> */}
        <Dialog
          open={handleClickOpen}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"        We are here for you"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" autoFocus>
          <Link to={'/assoon'} >As soon as possible</Link></Button>
            <Button onClick={handleClose} color="primary" autoFocus>
            <Link to={'/scheduleorder'} >Schedule an order</Link></Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  //}
}
//export default AlertDialogPage;
