import React, {Component} from 'react'
import { 
  Divider, 
  Menu, 
  Container
} from 'semantic-ui-react' 

class Header extends Component {

  render(){
    return (
    <span>
        <img alt="website logo" src={require("../assets/logo.jpg")}/>
        <Divider />
        {this._getMenu()}
      
    </span>)
  }

  _getMenu(){
    return (
      <Menu  style={menuStyle}widths="four" borderless stackable>
        <Container>
          <Menu.Item name='services' onClick={null}>
            <p className="header_menu_title">Servicios</p>
          </Menu.Item>
          <Menu.Item name='location' onClick={null}>
            <p className="header_menu_title">Localizacion</p>
          </Menu.Item>
          <Menu.Item name='contact' onClick={null}>
            <p className="header_menu_title">Contacto</p>
          </Menu.Item>
          <Menu.Item name='tour' onClick={null}>
            <p className="header_menu_title">Virtual Tour</p>
          </Menu.Item>
        </Container>
      </Menu>
    )
  }
}

export default Header;

const menuStyle = {border:0, boxShadow: 'none'}


