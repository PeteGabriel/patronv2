import React, {Component} from 'react'
import {Dropdown} from "semantic-ui-react";

class Header extends Component {

    render() {
        let flags = [
            {key: 'es', value: 'es', flag: { name: 'es' }},
            {key: 'gb', value: 'gb', flag: { name: 'gb' }}
        ]

        return (
            <span>
                <img alt="website logo" src={require("../assets/logo.jpg")}/>
                <Dropdown style={dropdownStyle}
                        floating
                        closeOnBlur
                        compact
                        selection
                        icon='flag'
                        onChange={(_, data) => this.props.onLanguageChange(data.value)}
                        options={flags}>
                </Dropdown>
            </span>)
    }
}

const dropdownStyle = {
    position: 'absolute',
    right: '1%',
}

export default Header;



