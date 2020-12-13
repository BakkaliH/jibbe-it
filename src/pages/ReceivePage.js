import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { Link, NavLink} from 'react-router-dom';

import Page from '../components/Page';

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function getModalStyle() {
  const top = 50 ;
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

export default function ReceivePage(props) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

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
    setOpen(true);
    console.log('InputFields', inputFields);
  };

  const handleClose = () => {
    //props.history.push('/receiveorders');
    setOpen(false);
    
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Hello {'Mr'}</h2>
      <List className={classes.root}>
      <ListItemLink href="/receiveorders">
      <ListItem to="/receiveorders" alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Macdo" src="https://www.somrugby.com/media/uploaded/sites/5334/partenaire/5bfd0393ead8c_mcdo.png" />
        </ListItemAvatar>
        <ListItemText
          primary="Macdo"
          // secondary={
          //   <React.Fragment>
          //     <Typography
          //       component="span"
          //       variant="body2"
          //       className={classes.inline}
          //       color="textPrimary"
          //     >
          //       Big Mac
          //     </Typography>
          //     {" — I'll be in your home after 15 min…"}
          //   </React.Fragment>
          // }
        />
      </ListItem>
      </ListItemLink>
      <Divider variant="inset" component="li" />
      <ListItemLink href="/receiveorders">
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Burger King" src="https://media-cdn.tripadvisor.com/media/photo-s/11/0f/6d/9c/burger-king.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Burger King"
          
        />
      </ListItem>
      </ListItemLink>
      <Divider variant="inset" component="li" />
      <ListItemLink href="/receiveorders">
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Tacos Lyon" src="https://petitpaume.com/image/48c4b719-ef0c-4dde-bdad-e155ee1bce13" />
        </ListItemAvatar>
        <ListItemText
          primary="Tacos Lyon"
         
        />
      </ListItem>
      </ListItemLink>
    </List>
    </div>
  );

  return (
    <Page
      title="Receive"
      breadcrumbs={[{ name: 'Receive', active: true }]}
    >
    
  
    <div>
      
      <Dialog open={handleClickOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Receive your Orders</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText> */}
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
        </DialogContent>
        <DialogActions>
          <Button type="submit" onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClickOpen} color="primary">
            Check
          </Button>
          <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
        </DialogActions>
      </Dialog>
    </div>

    </Page>
  );
}


