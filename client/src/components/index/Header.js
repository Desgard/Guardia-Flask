import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Drawer from 'material-ui/Drawer'; 
import MenuItem from 'material-ui/MenuItem';

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
                    <MenuItem onTouchTap={ this.handleClose }>Menu Item</MenuItem>
                    <MenuItem onTouchTap={ this.handleClose }>Menu Item 2</MenuItem>
                </Drawer>

                <AppBar
                    title={ <span>Guardia</span> }
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap={this.handleToggle}
                    iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                />
            </div>
        );
    };

    componentDidMount() {
        console.log('did mount');
    };
}
