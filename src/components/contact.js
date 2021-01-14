import React, { Component } from 'react';
import {Segment, Grid, Icon, Responsive } from 'semantic-ui-react';
import GoogleMapReact from 'google-map-react';

class Contact extends Component {

  constructor(props){
    super(props)
    this.state = {
      isDesktopView: window.innerWidth >= Responsive.onlyMobile.maxWidth,
      places: [
        {
          name: "El Patron Celebraciones",
          lat: 36.227472,
          lng: -5.464994
        }
      ],
      desktopCenterCoords: {
        lat: 36.171217,
        lng: -5.456745
      },
      mobileCenterCoords:{
        lat: 36.164995,
        lng: -5.403616
      },
      initialZoom: 11
    }
  }

  render() {
    return (
      <Segment fluid style={Object.assign({}, segmentStyle, {height: window.innerHeight})}>
        <Grid columns={2} stackable  centered textAlign='center' >
          <Grid.Row verticalAlign='middle' >
            <Grid.Column floated='left' style={{marginTop: '10%', marginBottom: '10%'}}>              
              <div style={{ height: '60vh', width: '100%'}}>
                <GoogleMapReact
                  bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_KEY }}
                  defaultCenter={this.state.isDesktopView ? this.state.desktopCenterCoords : this.state.mobileCenterCoords}
                  defaultZoom={this.state.initialZoom}
                  options={this._getMapOptions}
                  yesIWantToUseGoogleMapApiInternals
                  onGoogleApiLoaded={({ map, maps }) => this._handleApiLoaded(map, maps, this.state.places)}>
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
    let iconSize = this.state.isDesktopView ? 'large' : 'small'
    return (
      <div style={{display: 'inline-flex', margin:5, alignItems:'center'}}>
        <Icon name="phone" size={iconSize}/>
        <p style={{marginLeft: 10}} className="content_text"><i>(+34) 602 291 866</i></p>    
      </div>
    )
  }

  _getEmailData(){
    let iconSize = this.state.isDesktopView ? 'large' : 'small'
    return (
      <div style={{display: 'inline-flex', margin:5, alignItems:'center'}}>
        <Icon name="mail" size={iconSize}/>
        <p style={{marginLeft: 10}} className="content_text"><i>eventos@elpatron.es</i></p>    
      </div>
    )
  }


  _getMapOptions = () => {
    return {
        streetViewControl: false,
        scaleControl: false,
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
        minZoom: 11,
        maxZoom: 11,
        zoomControl: false,
        clickableIcons: false
    };
  }

  _handleApiLoaded = (map, maps, places) => {
    const markers = [];
    const infoWindows = []

    places.forEach((place) => {
      markers.push(new maps.Marker({
        position: {
          lat: place.lat,
          lng: place.lng,
        },
        map,
      }));

      infoWindows.push(new maps.InfoWindow({
        content: this._getInfoWindowString(place),
      }));
    });

    markers.forEach((marker, i) => {
      //infoWindows[i].open(map, marker);
      marker.addListener('click', () => {
        infoWindows[i].open(map, marker);
      });
    });

  };


  _getInfoWindowString = (place) => `
      <div style="font-size: 16px;">
        ${place.name}
      </div>`;


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