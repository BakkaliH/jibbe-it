import React, {useState} from 'react';
import {
  Breadcrumb, BreadcrumbItem,
  Navbar
} from 'reactstrap';
// import 'react-animated-slider/build/horizontal.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
// import { Control, LocalForm } from 'react-redux-form';
// import { connect } from 'react-redux';
// import { Field, reduxForm, formValueSelector } from 'redux-form'
import { Link, NavLink} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';

import {makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
     background: '#ffffff',
    margin: theme.spacing(1)
  }
  },
  button: {
    margin: theme.spacing(2)
  }
}))

function ModalPage(props) {

   
    const textp = {
      color: '#ffffff'
    }

  

     const navb = {
      color: '#5ac18e'
    }
    

    const style = {
       width: '90%',
        height: '80%'
      }
    
    const classes = useStyles();
    const [inputFields, setInputFields] = useState([
      {targetlocation: '', amount: ''}
    ]);

    const handleChangeInput = (index, event) => {
      const values = [...inputFields];
      values[index][event.target.name] = event.target.value;
      setInputFields(values);
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      props.history.push('/sendyesnext')
      console.log('InputFields', inputFields);
    }

    const handleAddFields = () => {
      setInputFields([...inputFields, {targetlocation: '', amount: ''}])
    }

    const handleRemoveFields = (index) => {
      const values = [...inputFields];
      values.splice(index, 1);
      setInputFields(values);
    }

    const mapStyles = {
      width: '100%',
      height: '100%',
    };

    return (
<React.Fragment>
      <Breadcrumb>
             <BreadcrumbItem active>Localisation</BreadcrumbItem>
              <BreadcrumbItem ><Link to="/forms">Vehicle</Link></BreadcrumbItem>
       </Breadcrumb>

        <Container>
          <Map
          google={props.google}
          style={mapStyles}
          zoom={8}
          initialCenter={{ lat: 	33.5731104, lng: -7.5898434}}
        >
          <Marker position={{ lat: 33.5, lng: -7}} />
          </Map>
        <Navbar className="bg-dark justify-content-between" style={{opacity: '0.8'}}>
        <form className={classes.root} onSubmit={handleSubmit}>
          { inputFields.map((inputField, index) => (
            <div key={index}>
              <TextField
              name="targetlocation"
              label = "Target Location"
              variant = "filled"
              value = {inputField.targetlocation}
              onChange = {event => handleChangeInput(index, event)}
              />
              <TextField
              name="amount"
              label = "Amount"
              variant = "filled"
              value = {inputField.amount}
              onChange = {event => handleChangeInput(index, event)}
              />
             
             
              {/* <IconButton
                onClick = {() => handleAddFields()}
              >
                <RemoveIcon />
              </IconButton>  */}
            </div>
          ))
          }
           <Button
                className={classes.button}
                variant="contained" 
                color="success"
                endIcon={<Icon>add</Icon>}
                onClick = {(index) => handleAddFields(index)}
                >Add Target
              </Button>

              <Button
                className={classes.button}
                variant="contained" 
                color="success"
                endIcon={<Icon>remove</Icon>}
                onClick = {(index) => handleRemoveFields(index)}
                >Remove Target
              </Button>
           <Button 
                className={classes.button}
                variant="contained" 
                color="success" 
                type="submit" 
                endIcon={<Icon>send</Icon>}
                onClick={handleSubmit}>
              Next</Button>
        </form>
        </Navbar>
        </Container>
        </React.Fragment>

    );
  }

export default GoogleApiWrapper({
  apiKey: ("AIzaSyCDdI28jL4fyKickwWHplQrneOAj0avNGg")
})(ModalPage);


