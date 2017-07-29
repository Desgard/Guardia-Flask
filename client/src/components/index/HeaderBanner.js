import React, { Component } from 'react';
import logo from './../../logo.svg';
import './../../css/Index.css';


export default class HeaderBanner extends Component {

    render() {
        var bannerHeight = 200;
        if (window.innerHeight) {
            bannerHeight = Math.min(800, window.innerHeight);
        }
        var bannerStyle = {
            'height': bannerHeight,
        };
        return(
            <div 
                className = "banner"
                style = { bannerStyle }
            >
                <div>
                    <img src={logo} className="logo-style"/>
                    <h1>Guardia v5.0</h1>
                    <h2>Record code and experience in programming.</h2>
                </div>
            </div>
        );  
    };
}