import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { red50 } from 'material-ui/styles/colors';

export default class MenuClose extends Component {
    render() {
        return (
            <IconButton>
                <NavigationClose
                    color = { red50 }
                />
            </IconButton>
        )
    }
}

