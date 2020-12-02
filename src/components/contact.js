import React, { Component } from 'react';
import {Segment, Grid, Icon, Responsive } from 'semantic-ui-react';
import GoogleMapReact from 'google-map-react';

class Contact extends Component {

  constructor(props){
    super(props)
    this.isDesktopView = window.innerWidth >= Responsive.onlyMobile.maxWidth
  }

  static defaultProps = {
    center: {
      lat: 36.227209,
      lng: -5.465079
    },
    zoom: 18
  };

  render() {
    return (
      <Segment fluid style={Object.assign({}, segmentStyle, {height: window.innerHeight})}>
        <Grid columns={2} stackable  centered textAlign='center' >
          <Grid.Row verticalAlign='middle' >
            <Grid.Column floated='left' style={{marginTop: '10%', marginBottom: '10%'}}>              
              <div style={{ height: '60vh', width: '100%'}}>
                <GoogleMapReact
                  bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_KEY }}
                  defaultCenter={this.props.center}
                  defaultZoom={this.props.zoom}
                  options={this._getMapOptions} >
                  
                </GoogleMapReact>
              </div>
            </Grid.Column>
            <Grid.Column floated='right' textAlign='center'>
              <div style={{marginLeft: '10%', marginRight: '10%'}}>
                <p className="high_class_text">
                Contáctenos con cualquier duda para que juntos hagamos de ese dia un evento impecable
                y de sueño.
                </p>  
                <div style={{display:'inline-grid'}}>
                  {this._getPhoneData()}  
                  {this._getEmailData()}
                </div>
              </div> 
            </Grid.Column>
          </Grid.Row>
			  </Grid> 
      </Segment>
    );
  }

  _getPhoneData(){
    let iconSize = this.isDesktopView ? 'large' : 'small'
    return (
      <div style={{display: 'inline-flex', margin:5, alignItems:'center'}}>
        <Icon name="phone" size={iconSize}/>
        <p style={{marginLeft: 10}} className="content_text"><i>(+34) 602 291 866</i></p>    
      </div>
    )
  }

  _getEmailData(){
    let iconSize = this.isDesktopView ? 'large' : 'small'
    return (
      <div style={{display: 'inline-flex', margin:5, alignItems:'center'}}>
        <Icon name="mail" size={iconSize}/>
        <p style={{marginLeft: 10}} className="content_text"><i>eventos@elpatron.es</i></p>    
      </div>
    )
  }


  _getMapOptions = (maps) => {
    return {
        streetViewControl: false,
        scaleControl: true,
        fullscreenControl: false,
        styles: [{
            featureType: "poi.business",
            elementType: "labels",
            stylers: [{
                visibility: "off"
            }]
        }],
        gestureHandling: "greedy",
        disableDoubleClickZoom: true,
        minZoom: 13,
        maxZoom: 19,
        mapTypeControl: true,
        mapTypeId: maps.MapTypeId.SATELLITE,
        zoomControl: true,
        clickableIcons: false
    };
  }
}

export default Contact;

const segmentStyle = { 
  border: 0, 
  boxShadow: 0,
  margin: 0,
  paddingRight: '4%',
  paddingLeft: '4%',
  alignItems: 'center'
}