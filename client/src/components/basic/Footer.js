import React, { Component } from 'react';
import SvgIcon from 'material-ui/SvgIcon';

import GuardiaLogo from './../../logo-all.svg';

import './../../css/basic.css';

export default class Footer extends Component {
    HomeIcon = (props) => (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    )

    render () {
        return(
            <div className = "footer" >
                <div>
                    <p>
                        You can get the source code of the Guardia 
                        &nbsp; 
                        <img 
                            src = { GuardiaLogo } 
                            style = {{
                                width: "15px",
                                verticalAlign: "middle",
                            }}
                        />
                        &nbsp; 
                        website from Github.
                    </p>
                    <p>Powered by Flask and React.js and designed by Harry Twan @ 2017 Harry Twan.</p> 
                </div>
            </div>
        );
    }
}