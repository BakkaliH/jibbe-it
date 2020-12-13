import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';


import Page from '../components/Page';

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

function ReceiveOrdersPage(props){
  const classes = useStyles();

 //function ReceivePage(props) {

  return (
    

    <Page
      title="Receive"
      breadcrumbs={[{ name: 'Receive', active: true }]}
    >
      
        <Map google={props.google} zoom={14}>
        <List className={classes.root}>
      <ListItem to="/receiveorders" alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Macdo" src="https://www.somrugby.com/media/uploaded/sites/5334/partenaire/5bfd0393ead8c_mcdo.png" />
        </ListItemAvatar>
        <ListItemText
          primary="Sender"
         
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Burger King" src="https://ws.mcdonalds.fr/media/f9/2a/46/f92a4620185b701485e4b69cad53d81f67e7c3b1" />
        </ListItemAvatar>
        <ListItemText
          primary="Big Mac"
          
        />
      </ListItem>

      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Tacos Lyon" src="https://img.bfmtv.com/i/0/0/b43/00f1eb9670b034f3f6213fa49acba.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Dacia"
         
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        {/* <ListItemAvatar>
          <Avatar alt="Tacos Lyon" src="https://img.bfmtv.com/i/0/0/b43/00f1eb9670b034f3f6213fa49acba.jpg" />
        </ListItemAvatar> */}
        <ListItemText
          primary="20 minutes .."
         
        />
      </ListItem>
    </List>
 
          <Marker onClick={props.onMarkerClick}
                  name={'Current location'} />

          <InfoWindow onClose={props.onInfoWindowClose}>
              <div>
                {/* <h1>{this.state.selectedPlace.name}</h1> */}
              </div>
          </InfoWindow>
        </Map>

    </Page>
  );
}


export default GoogleApiWrapper({
  apiKey: ("AIzaSyCDdI28jL4fyKickwWHplQrneOAj0avNGg")
})(ReceiveOrdersPage);

