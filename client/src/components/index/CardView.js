import React, { Component } from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';

export default class CardView extends Component {
    render() {
        return(
            <div style = {{ 
                'width': '80%', 
                'marginLeft': 'auto',
                'marginRight': 'auto',
                'marginTop': '30px',
                'marginBottom': '30px',
            }}>
                <Card>
                    <CardHeader
                        title = "Hello World"
                        subtitle = "2099-99-99"
                        actAsExpander = { true }
                    />
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </CardText>
                </Card>
            </div>
        );
    };
}
