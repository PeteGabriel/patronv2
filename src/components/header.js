import React, {Component} from 'react'
import {Dropdown, DropdownMenu} from "semantic-ui-react";

class Header extends Component {

    static supportedLanguages = [ 'es', 'en']

    render() {
        return (
            <span>
                <img alt="website logo" src={require("../assets/logo.jpg")}/>
                <Dropdown button
                          className='icon'
                          floating
                          item
                          value='Spain'>
                    <DropdownMenu>
                        {Header.supportedLanguages.map((value) =>
                            <Dropdown.Item
                                key={value}
                                flag={{ name: value }}
                                onClick={() => this.props.onLanguageChange(value)}/>
                        )}
                    </DropdownMenu>
                </Dropdown>
            </span>)
    }
}

export default Header;



