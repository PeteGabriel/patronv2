import React, {Component} from 'react'

class Header extends Component {

  render(){
    return (
    <span>
        <img alt="website logo" src={require("../assets/logo.jpg")}/>
    </span>)
  }
}

export default Header;



