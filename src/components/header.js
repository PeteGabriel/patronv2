import React, {Component} from 'react'
import { 
  Divider, 
  Menu, 
  Responsive,
  Segment,
  Container
} from 'semantic-ui-react' 

class Header extends Component {

  render(){
    return (
    <Responsive minWidth={Responsive.onlyMobile.minWidth}>
      <Segment textAlign='center' style={{ minHeight: 700, padding: '1em 0em' }} vertical>
        <img alt="website logo" src={require("../assets/logo.jpg")}/>
        <Divider />
        {this._getMenu()}
      </Segment>
    </Responsive>)
  }

  _getMenu(){
    return (
      <Menu  style={menuStyle}widths="five" borderless stackable>
        <Container>
          <Menu.Item style={menuItemStyle} className="high_class_text" name='begining' onClick={null}>
              Inicio
          </Menu.Item>
          <Menu.Item style={menuItemStyle}  className="high_class_text" name='services' onClick={null}>
            Servicios
          </Menu.Item>
          <Menu.Item style={menuItemStyle} className="high_class_text" name='location' onClick={null}>
            Localizacion
          </Menu.Item>
          <Menu.Item style={menuItemStyle} className="high_class_text" name='contact' onClick={null}>
            Contacto
          </Menu.Item>
          <Menu.Item style={menuItemStyle} className="high_class_text" name='tour' onClick={null}>
            Virtual Tour
          </Menu.Item>
        </Container>
      </Menu>
    )
  }
}

export default Header;

const menuStyle = {border:0, boxShadow: 'none'}

const menuItemStyle  = {
  textDecoration: 'none',
  color: 'black',
  fontFamily: 'Elsie'
};

