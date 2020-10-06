import Page from '../components/Page';
import React from 'react';
import {
  Button,
  Col,
  Row,
  Label,
  Breadcrumb, BreadcrumbItem,
  Navbar
} from 'reactstrap';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link, NavLink} from 'react-router-dom';
import { dark } from '@material-ui/core/styles/createPalette';


class ModalPage extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      modal: false,
      startlocation: '',
      targetlocalisation: '',
      vehicle: '',
      vcap: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleSubmit(values) {
  console.log('Current State is: ' + JSON.stringify(values));
  alert('Current State is: ' + JSON.stringify(values));
    //event.preventDefault();
}



  render() {

    const navb = {
      color: '#5ac18e'
    }
    
    const style = {
      width: '90%',
      height: '80%'
    }
    const { items } = this.state;
    return (
      // <Page title="Sending" breadcrumbs={[{ name: 'sending by car', active: true }]}>
      <React.Fragment>
          <div className="container">
          <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem active>Localisation</BreadcrumbItem>
                    <BreadcrumbItem ><Link to="/forms">Vehicle</Link></BreadcrumbItem>
                </Breadcrumb>
        </div>
        </div>
              <Map google={this.props.google} style={style} zoom={14} >
              <Marker onClick={this.onMarkerClick}
                      name={'Current location'} />
                  
              <InfoWindow onClose={this.onInfoWindowClose}>
              </InfoWindow>
            </Map>
            <div>
                    <Navbar className="bg-dark justify-content-between" style={{opacity: '0.8'}}>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)} className="m-2" inline>
                          <Row className="form-group">
                                  <Label htmlFor="startlocation" md={1}>Start Location</Label>
                                  <Col md={3}>
                                      <Control.text model=".startlocation" id="startlocation" name="startlocation"
                                          placeholder="Start Location" className="form-control"
                                           />
                                  </Col>
                                  <Label htmlFor="targetlocalisation" md={2}>Target Localisation</Label>
                                  <Col md={3}>
                                      <Control.text model=".targetlocalisation" id="targetlocalisation" name="targetlocalisation"
                                          placeholder="Target Localisation" className="form-control"
                                           />
                                  </Col>
                                  <Col md={3}>
                                  <Button type="submit" color="success">
                                  Add Target
                                  </Button>
                                  {' '}
                                  <Link to={'/forms'} >
                                  <Button type="submit" color="success">
                                          Next
                                  </Button>
                                  </Link>
                                  </Col>
                                  </Row>
                        </LocalForm>
                          </Navbar>
                  </div>
                  </React.Fragment>
      // </Page>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: ("AIzaSyCDdI28jL4fyKickwWHplQrneOAj0avNGg")
})(ModalPage)
