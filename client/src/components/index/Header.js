import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer'; 
import MenuItem from 'material-ui/MenuItem';

import { grey800 } from 'material-ui/styles/colors';
import './../../css/Index.css';

import PopoverMenu from './PopoverMenu';
import HeaderBanner from './HeaderBanner';

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
                        onLeftIconButtonTouchTap = { this.handleClose }
                        showMenuIconButton = { false }
                        style = {{
                            'boxShadow': 'none',
                            'background': grey800,
                        }}
                    />
                    <MenuItem onTouchTap={ this.handleClose }>Home</MenuItem>
                    <MenuItem onTouchTap={ this.handleClose }>Blog</MenuItem>
                    <MenuItem onTouchTap={ this.handleClose }>Category</MenuItem>
                    <MenuItem onTouchTap={ this.handleClose }>Playground</MenuItem>
                    <MenuItem onTouchTap={ this.handleClose }>About & Contact</MenuItem>
                </Drawer>


                <AppBar
                    title={ <span></span> }
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap = { this.handleToggle }
                    iconElementRight = { <PopoverMenu /> }
                    style = {{
                        'box-shadow': 'none',
                        'background': grey800,
                        'position': 'fixed',
                        'top': 0,
                    }}
                />
                <HeaderBanner />
            </div>
        );
    };

    componentDidMount() {
        console.log('did mount');
    };
}
