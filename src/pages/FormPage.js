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
import 'react-animated-slider/build/horizontal.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';


class FormPage extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      modal: false,
      startlocation: '',
      targetlocalisation: '',
      vehicletype: '',
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
    
    const style = {
      width: '90%',
      height: '60%'
    }
    const { items } = this.state;
    return (
      <React.Fragment>
        <div className="container">
        <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem ><Link to="/forms">Localisation</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Vehicle</BreadcrumbItem>
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
                <LocalForm onSubmit={(values) => this.handleSubmit(values)} className="m-2">
                     <Row className="form-group">
                        <Label htmlFor="vehicletype" md={1}>Vehicle Type</Label>
                        <Col md={3}>
                          <Control.text model=".vehicletype" id="vehicletype" name="vehicletype"
                                 placeholder="Vehicle Type" className="form-control"
                                           />
                        </Col>
                        <Label htmlFor="vcap" md={2}>Vehicle Capacity</Label>
                        <Col md={3}>
                         <Control.text model=".vcap" id="vcap" name="vcap"
                                          placeholder="Vehicle Capacity" className="form-control"
                                           />
                        </Col> 
                        <Col md={3}>
                          <Button type="submit" color="success">
                                  Add Target
                          </Button>
                          {' '}
                          <Link to={'/forms'} >
                          <Button type="submit" color="success">
                                          Go
                          </Button>
                          </Link>
                        </Col>
                      </Row> 
                </LocalForm>
            </Navbar>
            </div>
         </React.Fragment>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: ("AIzaSyCDdI28jL4fyKickwWHplQrneOAj0avNGg")
})(FormPage)
