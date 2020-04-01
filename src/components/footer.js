import React, {Component} from 'react'
import {Divider, Grid} from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import {LIGHT_DARK} from '../styles/colors'

class Footer extends Component {

   render(){
    return (
        <div id='footer' style={navbar}>
            <Grid verticalAlign="bottom">
                <Grid.Column>

                    <Grid.Row style={{marginBottom: 10}}>
                      {this._getImageLogo()}
                    </Grid.Row>

                    <Grid.Column centered="true" style={{marginBottom: 20}}>
                      {this._getSocialMediaBrands()}
                    </Grid.Column>

                    <Divider style={{margin: 'auto', marginBottom: 20}}/>
                
                    <Grid.Column style={{minWidth:'100%', margin:'auto'}}>
                      <p className="content_text" style={bottomInfoStyle}>
                          Copyright © {new Date().getFullYear()} - <i>Eventos El Patron</i>.
                      </p>
                    </Grid.Column>

                </Grid.Column>
            </Grid>
        </div>
    )
   }

   _getImageLogo(){
     return (
      <a href="#header">
        <img alt="website logo" style={{borderRadius: 8}} src={require("../assets/logo.jpg")} />
      </a>
     );
   }

   _getSocialMediaBrands(){
     return (
      <div>
        <a href="#faFacebook">
          <FontAwesomeIcon style={{"color":"#3b5998"}} icon={faFacebook} fixedWidth size="2x"  />
        </a>
        <a href="#faInstagram">
          <FontAwesomeIcon style={{"color":"#3f729b"}} icon={faInstagram} fixedWidth size="2x"  />
        </a>
        <a href="#faWhatsapp">
          <FontAwesomeIcon style={{"color":"green"}} icon={faWhatsapp} fixedWidth size="2x"  />
        </a>
      </div>
     );
   }
}

const navbar = {
    minHeight: 200
}

const bottomInfoStyle = {
    fontSize: 16, 
    color: LIGHT_DARK
}

export default Footer