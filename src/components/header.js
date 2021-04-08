import React, {Component} from 'react'
import {Dropdown, DropdownMenu, Flag} from "semantic-ui-react";

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            languageSelected: 'spain',
            supportedLanguages: [ 'spain', 'england']
        }
        this._onLanguageChange = this._onLanguageChange.bind(this)
    }

    _onLanguageChange(_, item){
        console.log("Language changed: " + item.flag.name)
        this.setState({languageSelected: item.flag.name})
    }

    render() {
        return (
            <span>
                <img alt="website logo" src={require("../assets/logo.jpg")}/>
                <Dropdown button
                          className='icon'
                          floating
                          item
                          value={this.state.languageSelected}>
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



