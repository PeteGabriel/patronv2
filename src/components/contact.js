import React, { Component } from 'react';
import {Segment, Grid, Responsive, Icon } from 'semantic-ui-react';
import GoogleMapReact from 'google-map-react';

class Contact extends Component {

  static defaultProps = {
    center: {
      lat: 36.227209,
      lng: -5.465079
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
              <div style={{marginLeft: '15%', marginRight: '15%'}}>
                <p className="high_class_text">
                Contacte nos con cualquer duda para que juntos hagamos de ese dia un evento impecable 
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
    return (
      <div style={{display: 'inline-flex', margin:5, alignItems:'center'}}>
        <Icon name="phone" size='large'/>
        <p style={{marginLeft: 10}} className="content_text"><i>(+34)602 291 866</i></p>    
      </div>
    )
  }

  _getEmailData(){
    return (
      <div style={{display: 'inline-flex', margin:5, alignItems:'center'}}>
        <Icon name="mail" size='large'/>
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