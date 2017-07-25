import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer'; 
import MenuItem from 'material-ui/MenuItem';

import { red400 } from 'material-ui/styles/colors';
import './../../css/Index.css';

import PopoverMenu from './PopoverMenu';

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
                        title="目录"
                        onLeftIconButtonTouchTap = { this.handleClose }
                        showMenuIconButton = { false }
                        style = {{
                            'box-shadow': 'none',
                        }}
                    />
                    <MenuItem onTouchTap={ this.handleClose }>首页</MenuItem>
                    <MenuItem onTouchTap={ this.handleClose }>博文</MenuItem>
                    <MenuItem onTouchTap={ this.handleClose }>分类</MenuItem>
                    <MenuItem onTouchTap={ this.handleClose }>Playground</MenuItem>
                    <MenuItem onTouchTap={ this.handleClose }>关于</MenuItem>
                </Drawer>


                <AppBar
                    title={ <span>Guardia · 瓜地</span> }
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap = { this.handleToggle }
                    iconElementRight = { <PopoverMenu /> }
                    style = {{
                        'box-shadow': 'none',
                        'background': red400,
                    }}
                />
                <div className = "banner">
                </div>
            </div>
        );
    };

    componentDidMount() {
        console.log('did mount');
    };
}
