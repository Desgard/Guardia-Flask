import React, { Component } from 'react';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Popover';
import MenuItem from 'material-ui/MenuItem';

import MenuOpen from '../button/MenuOpen'

export default class PopoverMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    };

    handleTouchTap = (event) => {
        event.preventDefault();
        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    };

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    render() {
        return (
            <div>
                <MenuOpen
                    onTouchTap = { this.handleTouchTap }
                    label = 'More'
                />
                <Popover
                    open = { this.state.open }
                    anchorEl = { this.state.anchorEl }
                    anchorOrigin = {{ horizontal: 'left', vertical: 'bottom' }}
                    targetOrigin = {{ horizontal: 'left', vertical: 'bottom' }}
                    onRequestClose = { this.handleRequestClose }
                >
                    <Menu>
                        <MenuItem primaryText="feedback" />
                        <MenuItem primaryText="share" />
                    </Menu>
                </Popover>
            </div>
        );
    };

}