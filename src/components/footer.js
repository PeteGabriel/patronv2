import React, {Component} from 'react'
import {Grid} from 'semantic-ui-react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import {LIGHT_DARK} from '../styles/colors'

class Footer extends Component {

    render() {
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

                        <Grid.Column style={{minWidth: '100%', margin: 'auto'}}>
                            <p className="content_text" style={bottomInfoStyle}>
                                Copyright © {new Date().getFullYear()} - <i>Eventos El Patron</i>.
                            </p>
                        </Grid.Column>

                    </Grid.Column>
                </Grid>
            </div>
        )
    }

    _getImageLogo() {
        return (
            <a href="#header">
                <img alt="website logo" style={{borderRadius: 8}} src={require("../assets/logo.jpg")}/>
            </a>
        );
    }

    /**
     * Handler for whatsApp icon touch event.
     * TODO: localize message and add logs.
     */
    _handleWhatsAppMsg(e) {
        const msg = "Hola!%20Me%20gustaria%20saber%20mas%20sobre%20El%20Patron%20Eventos."
        e.currentTarget.href = `https://wa.me?text=${msg}`
        return true
    }

    _getSocialMediaBrands() {
        return (
            <div>
                <a href="https://www.facebook.com/elpatroneventos" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon style={{"color": "#3b5998"}} icon={faFacebook} fixedWidth size="2x"/>
                </a>
                <a href="https://www.instagram.com/elpatroneventos" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon style={{"color": "#3f729b"}} icon={faInstagram} fixedWidth size="2x"/>
                </a>
                <a href="www.example.com" target="_blank" onClick={this._handleWhatsAppMsg} rel="noopener noreferrer">
                    <FontAwesomeIcon style={{"color": "green"}} icon={faWhatsapp} fixedWidth size="2x"/>
                </a>
            </div>
        );
    }
}

const navbar = {
    minHeight: 200,
    marginTop: 1
}

const bottomInfoStyle = {
    fontSize: 12,
    color: LIGHT_DARK
}

export default Footer