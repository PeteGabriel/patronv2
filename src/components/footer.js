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
                      <a href="#header">
                        <img alt="website logo" style={{borderRadius: 8}} src={require("../assets/logo.jpg")} />
                      </a>
                    </Grid.Row>

                    <Grid.Column centered="true" style={{marginBottom: 20}}>
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
                    </Grid.Column>

                    <Divider style={{margin: 'auto', maxWidth: '40%', marginBottom: 20}}/>
                
                    <Grid.Column style={{minWidth:'100%', margin:'auto'}}>
                      <p className="content_text" style={bottomInfoStyle}>
                          Copyright © {new Date().getFullYear()} - <i>El Patron Celebraciones</i> derechos reservados.
                      </p>
                    </Grid.Column>

                </Grid.Column>
            </Grid>
        </div>
    )
   }
}

const navbar = {
    minHeight: 300
}

const bottomInfoStyle = {
    fontSize: 16, 
    color: LIGHT_DARK
}

export default Footer