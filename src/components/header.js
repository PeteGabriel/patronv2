import React, {Component} from 'react'
import {Dropdown, DropdownMenu} from "semantic-ui-react";

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            supportedLanguages: [ 'es', 'en']
        }
        this._onLanguageChange = this._onLanguageChange.bind(this)
    }

    _onLanguageChange(_, item){
        this.state.onLanguageChange(item.flag.name)
    }

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
                        {this.state.supportedLanguages.map((value) =>
                            <Dropdown.Item
                                key={value}
                                flag={{ name: value }}
                                onClick={this._onLanguageChange}/>
                        )}
                    </DropdownMenu>
                </Dropdown>
            </span>)
    }
}

export default Header;



