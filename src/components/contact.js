import React, { Component } from 'react';
import {Segment, Grid, Responsive } from 'semantic-ui-react';
import GoogleMapReact from 'google-map-react';

class Contact extends Component {

  static defaultProps = {
    center: {
      lat: 36.226982,
      lng: -5.465077
    },
    zoom: 18
  };


  _getGridRowHeight(){
    const isDesktopView = window.innerWidth >= Responsive.onlyMobile.maxWidth
    if (isDesktopView){
      return window.innerHeight
    }else {
			//only 80% of the view should be enough
			return (window.innerHeight * 80) / 100
    }
	}

  render() {
    return (
      <Segment fluid style={Object.assign({}, segmentStyle, {height: this._getGridRowHeight()})}>
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
                <p className="high_class_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ipsum ac odio pretium ultrices viverra fringilla metus. Suspendisse vitae volutpat est. 
                </p>     
            </Grid.Column>
          </Grid.Row>
			  </Grid> 
      </Segment>
    );
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
        maxZoom: 18,
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
	alignItems: 'center',
}