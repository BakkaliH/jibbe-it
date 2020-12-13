import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Link } from 'react-router-dom';

import Page from '../components/Page';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransportPage(props) {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
  
  
    const handleClose = () => {
      //props.history.push('/receiveorders');
      setOpen(false);
      
    };

    const handleClose1 = () => {
      //props.history.push('/receiveorders');
      setOpen1(false);
      
    };

    const handleOpen = () => {
      //props.history.push('/receiveorders');
      setOpen(true);
      
    };

    const handleOpen1 = () => {
      setOpen1(true);      
    };

    const [inputFields, setInputFields] = useState([
      {id: ''}
    ]);

    const handleChangeInput = (index, event) => {
      const values = [...inputFields];
      values[index][event.target.name] = event.target.value;
      setInputFields(values);
    }
  
    const handleClickOpen = (e) => {
      e.preventDefault();
      props.history.push('/withasender');
      console.log('InputFields', inputFields);
    };

    const handleClickOpen1 = (e) => {
      e.preventDefault();
      props.history.push('/opentasks');
      console.log('InputFields', inputFields);
    };
    const handleClickOpen2 = (e) => {
      e.preventDefault();
      props.history.push('/scheduletrip');
      console.log('InputFields', inputFields);
    };

    const body = (
    <div style={modalStyle} className={classes.paper}>
      <form onSubmit={handleClickOpen}>
          { inputFields.map((inputField, index) => (
            <div key={index}>
          <TextField
            autoFocus
            name="id"
            margin="dense"
            id="number"
            label="Your id"
            type="number"
            variant = "filled"
            value = {inputField.id}
            onChange = {event => handleChangeInput(index, event)}
            fullWidth
          />
          </div>
          ))
}
</form>
<Button type="submit" onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClickOpen} color="primary">
            Go
          </Button>
    </div>
  );
  const body1 = (
    <div style={modalStyle} className={classes.paper}>
      <form onSubmit={handleClickOpen1}>
          { inputFields.map((inputField, index) => (
            <div key={index}>
          <TextField
            autoFocus
            name="id"
            margin="dense"
            id="number"
            label="Your id"
            type="number"
            variant = "filled"
            value = {inputField.id}
            onChange = {event => handleChangeInput(index, event)}
            fullWidth
          />
          </div>
          ))
}
</form>
<Button type="submit" onClick={handleClickOpen1} color="primary">
            Open Tasks
          </Button>
          <Button onClick={handleClickOpen2} color="primary">
            Schedule a Trip
          </Button>
    </div>
  );
  return (
    <Page title="Transport" breadcrumbs={[{ name: 'Transport', active: true }]}>
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
          <DialogTitle id="alert-dialog-title">{"Transport"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Welcome on Jibbe'it
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" autoFocus onClick={handleOpen}>
          With a Sender</Button>
            <Button onClick={handleOpen1} color="primary" autoFocus>
            Free Tasks</Button>
          </DialogActions>
        </Dialog>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
      <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body1}
      </Modal>
      </div>
    </Page>
  );
};

