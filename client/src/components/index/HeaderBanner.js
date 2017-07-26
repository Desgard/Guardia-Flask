import React, { Component } from 'react';
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
                <h1>My name is Harry Twan.</h1>
            </div>
        );  
    };
}