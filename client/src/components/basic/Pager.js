import React, { Component } from 'react';
import './../../css/basic.css';

import RaiseButton from 'material-ui/RaisedButton';

export default class Pager extends Component {
    nextButtonStyle = {
        marginTop: 12,
        marginBottom: 12,
        marginLeft: 30,
        marginRight: 30,
    };

    lastButtonStyle = {
        marginTop: 12,
        marginBottom: 12,
        marginLeft: 30,
        marginRight: 30,
    };

    render() {
        return (
            <div className = "pager">
                <div>
                    <RaiseButton 
                        label = "Last"
                        style = { this.lastButtonStyle }
                        disabled = { true }
                    />
                    <RaiseButton 
                        label = "Next"
                        style = { this.nextButtonStyle }
                    />
                </div>
            </div>
        );
    }
}