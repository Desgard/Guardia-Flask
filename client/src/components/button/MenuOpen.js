import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { red50 } from 'material-ui/styles/colors';

export default class MenuOpen extends Component {
    render() {
        return (
            <IconButton
                onTouchTap = { this.props.onTouchTap }
            >
                <MoreVertIcon 
                    color = { red50 }     
                />
            </IconButton>
        );
    };
};



