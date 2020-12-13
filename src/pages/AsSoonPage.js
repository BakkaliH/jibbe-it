import React, {useState} from 'react';
import {
  Breadcrumb, BreadcrumbItem,
  Navbar
} from 'reactstrap';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
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
      {startlocation: ''}
    ]);

    const handleChangeInput = (index, event) => {
      const values = [...inputFields];
      values[index][event.target.name] = event.target.value;
      setInputFields(values);
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      props.history.push('/assoonnext')
      console.log('InputFields', inputFields);
    }

    const mapStyles = {
      width: '100%',
      height: '100%',
    };

    return (
<React.Fragment>
      <Breadcrumb>
             <BreadcrumbItem active>Start Location</BreadcrumbItem>
              <BreadcrumbItem ><Link to="/assoonnext">Targets</Link></BreadcrumbItem>
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
              name="startlocation"
              label = "Start Location"
              variant = "filled"
              value = {inputField.startlocation}
              onChange = {event => handleChangeInput(index, event)}
              />
              
              <Button
                className={classes.button}
                variant="contained" 
                type="submit"
                endIcon={<Icon>send</Icon>}
                onClick={handleSubmit}
                >Next
              </Button>
             
              {/* <IconButton
                onClick = {() => handleAddFields()}
              >
                <AddIcon />
              </IconButton> */}
            </div>
          ))
          }
        </form>
        </Navbar>
        </Container>
        </React.Fragment>

    );
  }

export default GoogleApiWrapper({
  apiKey: ("AIzaSyCDdI28jL4fyKickwWHplQrneOAj0avNGg")
})(ModalPage);


