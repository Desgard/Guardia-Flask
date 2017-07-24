import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer'; 
import MenuItem from 'material-ui/MenuItem';

import MenuOpen from '../button/MenuOpen';
import MenuClose from '../button/MenuClose';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    };

    handleToggle = () => this.setState({
        open: !this.state.open,
    });

    handleClose = () => this.setState({
        open: false,
    });

    render() {
        return (
            <div>
                <Drawer
                    docked={ false }
                    open={ this.state.open }
                    onRequestChange = { (open) => this.setState({ open })}
                >
                    <AppBar
                        title="Menu"
                        iconElementLeft = {
                            <MenuClose />
                        }
                    />
                    <MenuItem onTouchTap={ this.handleClose }>Menu Item</MenuItem>
                    <MenuItem onTouchTap={ this.handleClose }>Menu Item 2</MenuItem>
                </Drawer>

                <AppBar
                    title={ <span>Guardia · 瓜地</span> }
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap={ this.handleToggle }
                    iconElementRight = { 
                        <MenuOpen />
                    }
                />
            </div>
        );
    };

    componentDidMount() {
        console.log('did mount');
    };
}
